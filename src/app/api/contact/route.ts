import { createHmac } from "node:crypto";

import { checkBotId } from "botid/server";
import { NextRequest, NextResponse } from "next/server";

import {
  CONTACT_BODY_MAX_CHARS,
  consumeContactRateLimit,
  createFormToken,
  isLikelySpam,
  privacySafeIdentifier,
  validateContactPayload,
  verifyFormToken,
} from "@/lib/contact-security";

export const runtime = "nodejs";

const CONTACT_RATE_LIMIT = 10;
const CHALLENGE_RATE_LIMIT = 60;
const RATE_LIMIT_WINDOW_SECONDS = 15 * 60;
const RESEND_TIMEOUT_MS = 8_000;

const inquiryTypeLabels: Record<string, string> = {
  quote: "Quote Request",
  booking: "Booking Inquiry", // legacy value from the pre-quote form
  general: "General Question",
  history: "Historical Research",
  other: "Other",
};

const occasionLabels: Record<string, string> = {
  "family-reunion": "Family reunion",
  wedding: "Wedding-related stay",
  "corporate-retreat": "Corporate retreat",
  milestone: "Milestone celebration",
  other: "Other",
};

function json(body: unknown, init: ResponseInit = {}): NextResponse {
  const headers = new Headers(init.headers);
  headers.set("Cache-Control", "no-store");
  return NextResponse.json(body, { ...init, headers });
}

function getFormSecret(): string | undefined {
  // A dedicated value is preferred. The sending-only Resend key is a safe,
  // server-only fallback so this protection can deploy without a flag day.
  return (
    process.env.CONTACT_FORM_SECRET ||
    process.env.RESEND_API_KEY ||
    (process.env.NODE_ENV !== "production"
      ? "rittenhouse-contact-local-development-only"
      : undefined)
  );
}

function requestFingerprint(request: NextRequest): string {
  const forwardedFor = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim();
  const ip = forwardedFor || request.headers.get("x-real-ip") || "unknown";
  // User-Agent is attacker-controlled. Keeping the hard ceiling IP-only means
  // rotating browser headers cannot mint a fresh submission allowance.
  return ip;
}

function deliveryPayloadDigest(
  secret: string,
  data: {
    firstName: string;
    lastName: string;
    email: string;
    inquiryType: string;
    arrival: string;
    departure: string;
    groupSize: string;
    occasion: string;
    dates: string;
    message: string;
  }
): string {
  return createHmac("sha256", secret)
    .update("rittenhouse-contact-payload:v1:")
    .update(JSON.stringify(data))
    .digest("hex")
    .slice(0, 24);
}

function requestIsSameSite(request: NextRequest): boolean {
  if (request.headers.get("sec-fetch-site") === "cross-site") return false;

  const origin = request.headers.get("origin");
  if (!origin) return true;
  try {
    return new URL(origin).host === new URL(request.url).host;
  } catch {
    return false;
  }
}

async function readJsonBody(request: NextRequest): Promise<unknown> {
  const contentType = request.headers.get("content-type") || "";
  if (!contentType.toLowerCase().startsWith("application/json")) {
    throw new ContactRequestError(415, "Please submit the form from this website.");
  }

  const statedLength = Number(request.headers.get("content-length"));
  if (Number.isFinite(statedLength) && statedLength > CONTACT_BODY_MAX_CHARS) {
    throw new ContactRequestError(413, "That message is too long to send.");
  }

  const rawBody = await request.text();
  if (!rawBody || rawBody.length > CONTACT_BODY_MAX_CHARS) {
    throw new ContactRequestError(
      rawBody ? 413 : 400,
      rawBody ? "That message is too long to send." : "Please complete the form and try again."
    );
  }

  try {
    return JSON.parse(rawBody) as unknown;
  } catch {
    throw new ContactRequestError(400, "Please complete the form and try again.");
  }
}

class ContactRequestError extends Error {
  constructor(
    readonly status: number,
    message: string,
    readonly code?: string
  ) {
    super(message);
  }
}

async function applyRateLimit(
  request: NextRequest,
  secret: string,
  bucket: "challenge" | "submit",
  limit: number
): Promise<NextResponse | null> {
  const identifier = privacySafeIdentifier(secret, requestFingerprint(request));
  const rateLimit = await consumeContactRateLimit(
    `rr-contact:v1:${bucket}:${identifier}`,
    limit,
    RATE_LIMIT_WINDOW_SECONDS
  );
  if (rateLimit.allowed) return null;

  console.warn("Contact request rate limited", { bucket });
  return json(
    {
      error:
        "We've received several requests from this connection. Please wait a few minutes and try again.",
    },
    {
      status: 429,
      headers: { "Retry-After": String(rateLimit.retryAfterSeconds) },
    }
  );
}

export async function GET(request: NextRequest) {
  const secret = getFormSecret();
  if (!secret) {
    console.error("Contact form signing secret is unavailable.");
    return json(
      { error: "Our inquiry form is temporarily unavailable. Please try again shortly." },
      { status: 503 }
    );
  }

  const rateLimited = await applyRateLimit(
    request,
    secret,
    "challenge",
    CHALLENGE_RATE_LIMIT
  );
  if (rateLimited) return rateLimited;

  return json({ formToken: createFormToken(secret) });
}

export async function POST(request: NextRequest) {
  try {
    if (!requestIsSameSite(request)) {
      console.warn("Cross-site contact submission rejected");
      return json({ error: "Please submit the form from this website." }, { status: 403 });
    }

    // Basic is explicitly selected on both client and server. It is invisible
    // to guests and free on all Vercel plans; Deep Analysis is not enabled.
    const botCheck = await checkBotId({
      advancedOptions: { checkLevel: "basic" },
      // Explicit local behavior avoids noisy SDK warnings. Vercel ignores
      // developmentOptions in production and performs the real Basic check.
      developmentOptions: { bypass: "HUMAN" },
    });
    if (botCheck.isBot) {
      console.warn("BotID rejected a contact submission");
      return json({ error: "We couldn't verify this submission." }, { status: 403 });
    }

    const secret = getFormSecret();
    if (!secret) {
      console.error("Contact form signing secret is unavailable.");
      return json(
        {
          error:
            "Our inquiry form is temporarily unavailable. Please try again shortly or use the Airbnb or Vrbo booking page.",
        },
        { status: 503 }
      );
    }

    const rateLimited = await applyRateLimit(
      request,
      secret,
      "submit",
      CONTACT_RATE_LIMIT
    );
    if (rateLimited) return rateLimited;

    const body = await readJsonBody(request);
    const validation = validateContactPayload(body);
    if (!validation.ok) {
      return json({ error: validation.error }, { status: 400 });
    }
    const data = validation.data;

    const formToken = verifyFormToken(data.formToken, secret);
    if (!formToken.valid) {
      console.warn("Contact form challenge rejected", { reason: formToken.reason });
      const expired = formToken.reason === "expired";
      return json(
        {
          error: expired
            ? "This form was open for a long time. It has been refreshed; please send it once more."
            : "We couldn't verify the form. Please wait a moment and try again.",
          code: expired ? "FORM_EXPIRED" : "FORM_INVALID",
        },
        { status: 400 }
      );
    }
    const inquiryId = formToken.inquiryId;

    // The visible form never fills this field. Give simple form-filling bots a
    // bland 200 response, but do not claim acceptance or expose lead data.
    if (data.website) {
      console.warn("Contact honeypot rejected a submission", { inquiryId });
      return json({ success: true, accepted: false });
    }

    if (isLikelySpam(data)) {
      console.warn("Contact content filter rejected a submission", { inquiryId });
      return json(
        {
          error:
            "We couldn't send this message automatically. Please adjust your message and try again, or use the Airbnb or Vrbo booking page.",
        },
        { status: 422 }
      );
    }

    const recipientEmail = process.env.CONTACT_TO_EMAIL;
    const resendApiKey = process.env.RESEND_API_KEY;
    const senderEmail =
      process.env.CONTACT_FROM_EMAIL ||
      "Rittenhouse Residence <onboarding@resend.dev>";

    if (!recipientEmail || !resendApiKey) {
      console.error("Contact delivery is not fully configured.");
      return json(
        {
          error:
            "Our inquiry form is temporarily unavailable. Please try again shortly or use the Airbnb or Vrbo booking page.",
        },
        { status: 503 }
      );
    }

    const isQuote = data.inquiryType === "quote";
    const typeLabel = inquiryTypeLabels[data.inquiryType];
    const nights = isQuote
      ? Math.round(
          (Date.parse(data.departure) - Date.parse(data.arrival)) / 86_400_000
        )
      : 0;
    const emailSubject = isQuote
      ? `[Rittenhouse Residence] Quote request — ${data.arrival} to ${data.departure}, ${data.groupSize} guests — ${data.firstName} ${data.lastName}`
      : `[Rittenhouse Residence] ${typeLabel} from ${data.firstName} ${data.lastName}`;

    const detailLines = [
      `Inquiry ID: ${inquiryId}`,
      `Name: ${data.firstName} ${data.lastName}`,
      `Email: ${data.email}`,
      `Inquiry Type: ${typeLabel}`,
      isQuote ? `Arrival: ${data.arrival}` : "",
      isQuote ? `Departure: ${data.departure} (${nights} nights)` : "",
      isQuote ? `Group Size: ${data.groupSize}` : "",
      isQuote && data.occasion
        ? `Occasion: ${occasionLabels[data.occasion] || data.occasion}`
        : "",
      !isQuote && data.dates ? `Preferred Dates: ${data.dates}` : "",
    ].filter(Boolean);

    const emailBody = `
New ${isQuote ? "quote request" : "inquiry"} from the Rittenhouse Residence website:

${detailLines.join("\n")}

${data.message ? `Message:\n${data.message}` : "No additional message."}

Automated checks passed: Vercel BotID Basic, signed form challenge, rate limit,
honeypot, field validation, and content filter. These reduce spam; they do not
verify the guest's identity. Confirm identity and payment before accepting a
direct booking.

---
This message was sent from the contact form at rittenhouseresidence.com
    `.trim();

    const payloadDigest = deliveryPayloadDigest(secret, {
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
      inquiryType: data.inquiryType,
      arrival: data.arrival,
      departure: data.departure,
      groupSize: data.groupSize,
      occasion: data.occasion,
      dates: data.dates,
      message: data.message,
    });

    let response: Response;
    try {
      response = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${resendApiKey}`,
          "Content-Type": "application/json",
          // Resend retains this key for 24 hours, making retries safe even if
          // a function times out after Resend accepted the original request.
          // Exact retries reuse one provider request. If a guest edits the
          // payload after an uncertain timeout, the digest changes so Resend
          // does not permanently reject every corrected retry as a conflicting
          // idempotent request.
          "Idempotency-Key": `contact-inquiry/${inquiryId}/${payloadDigest}`,
        },
        body: JSON.stringify({
          from: senderEmail,
          to: recipientEmail,
          reply_to: data.email,
          subject: emailSubject,
          text: emailBody,
        }),
        signal: AbortSignal.timeout(RESEND_TIMEOUT_MS),
      });
    } catch {
      console.error("Contact delivery request failed", { inquiryId });
      return json(
        {
          error:
            "We couldn't send your message just now. Please try again shortly or use the Airbnb or Vrbo booking page.",
        },
        { status: 502 }
      );
    }

    let responseBody: unknown;
    try {
      responseBody = await response.json();
    } catch {
      responseBody = null;
    }

    if (!response.ok) {
      const providerError =
        responseBody && typeof responseBody === "object" && "name" in responseBody
          ? String(responseBody.name)
          : "unknown";
      console.error("Contact delivery provider rejected request", {
        inquiryId,
        status: response.status,
        providerError,
      });
      return json(
        {
          error:
            "We couldn't send your message just now. Please try again shortly or use the Airbnb or Vrbo booking page.",
        },
        { status: 502 }
      );
    }

    const providerMessageId =
      responseBody &&
      typeof responseBody === "object" &&
      "id" in responseBody &&
      typeof responseBody.id === "string"
        ? responseBody.id
        : "";
    if (!providerMessageId) {
      console.error("Contact delivery provider omitted its acceptance ID", {
        inquiryId,
      });
      return json(
        {
          error:
            "We couldn't confirm your message was sent. Please try again shortly or use the Airbnb or Vrbo booking page.",
        },
        { status: 502 }
      );
    }

    console.info("Contact inquiry accepted for delivery", {
      inquiryId,
      inquiryType: data.inquiryType,
    });
    return json({
      success: true,
      accepted: true,
      delivery: "queued",
      inquiryId,
      ...(isQuote
        ? { lead: { event: "generate_lead", inquiryId } }
        : {}),
    });
  } catch (error) {
    if (error instanceof ContactRequestError) {
      return json(
        { error: error.message, ...(error.code ? { code: error.code } : {}) },
        { status: error.status }
      );
    }
    console.error("Unexpected contact form error");
    return json(
      { error: "An unexpected error occurred. Please try again." },
      { status: 500 }
    );
  }
}
