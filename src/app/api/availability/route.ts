// GET /api/availability?checkIn=YYYY-MM-DD&checkOut=YYYY-MM-DD
//
// Server-side proxy to RentalAgent's read-only `check_stay_availability` MCP
// tool. The credential never reaches the browser, the tool name is a constant
// rather than anything a caller can influence, and the reply is rebuilt from
// an allow-list so no reservation id, provider name, or provenance detail can
// escape into a public response.
//
// GET rather than POST is deliberate: the call is an idempotent read, it can
// be cached at the edge, and it stays clear of the Vercel Firewall's
// POSTs-per-IP ceiling that protects the contact form.
//
// This route is safe to deploy before RentalAgent credentials exist. With no
// credential configured it answers "unconfirmed" for every range, which is
// exactly the promise the site already makes: a person replies within 24
// hours. See docs/RENTALAGENT-INTEGRATION.md.

import { NextRequest, NextResponse } from "next/server";

import {
  type AvailabilityResponse,
  type AvailabilityStatus,
  mapAvailabilityVerdict,
  parseMcpToolResult,
  validateAvailabilityRange,
} from "@/lib/availability";
import {
  consumeContactRateLimit,
  privacySafeIdentifier,
} from "@/lib/contact-security";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const AVAILABILITY_RATE_LIMIT = 40;
const RATE_LIMIT_WINDOW_SECONDS = 15 * 60;
const UPSTREAM_TIMEOUT_MS = 6_000;
const TOOL_NAME = "check_stay_availability";

// A definite answer may be reused briefly. RentalAgent itself tolerates
// calendar evidence up to eight hours old before it refuses to confirm, so a
// two-minute edge cache cannot make an answer meaningfully less current — and
// it blunts repeated scraping of the same range. "unconfirmed" is never
// cached, so a transient upstream failure does not stick.
const CONFIDENT_CACHE_CONTROL =
  "public, s-maxage=120, stale-while-revalidate=300";

function json(body: unknown, init: ResponseInit = {}): NextResponse {
  return NextResponse.json(body, init);
}

function unconfirmed(
  checkIn: string,
  checkOut: string,
  nights: number
): NextResponse {
  return json(
    { status: "unconfirmed", checkIn, checkOut, nights } satisfies AvailabilityResponse,
    { headers: { "Cache-Control": "no-store" } }
  );
}

function rateLimitSecret(): string {
  // Only ever used to hash an IP into an opaque bucket key, so any stable
  // server-side secret works. Reuses the contact form's precedence so a
  // single configured value covers both.
  return (
    process.env.CONTACT_FORM_SECRET ||
    process.env.RESEND_API_KEY ||
    "rittenhouse-availability-fallback"
  );
}

function clientFingerprint(request: NextRequest): string {
  const forwardedFor = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim();
  return forwardedFor || request.headers.get("x-real-ip") || "unknown";
}

/**
 * Ask RentalAgent. Returns undefined for every failure mode — unconfigured,
 * timeout, non-200, malformed envelope — so the caller has exactly one
 * degraded path to handle.
 */
async function askRentalAgent(
  checkIn: string,
  checkOut: string
): Promise<unknown> {
  const baseUrl = process.env.RENTALAGENT_BASE_URL;
  const accessToken = process.env.RENTALAGENT_ACCESS_TOKEN;
  if (!baseUrl || !accessToken) return undefined;

  let endpoint: string;
  try {
    // Vercel renders a stray trailing newline in an environment value as an
    // orange glyph that is easy to miss, and it would otherwise corrupt both
    // the URL and the Authorization header.
    endpoint = new URL("/api/mcp", baseUrl.trim()).toString();
  } catch {
    console.error("RENTALAGENT_BASE_URL is not a valid URL.");
    return undefined;
  }

  let response: Response;
  try {
    response = await fetch(endpoint, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${accessToken.trim()}`,
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        jsonrpc: "2.0",
        id: 1,
        method: "tools/call",
        params: {
          name: TOOL_NAME,
          // Read-only. This tool creates no reservation, hold, task, or
          // message, so it cannot bypass RentalAgent's approval gate.
          arguments: { checkIn, checkOut, purpose: "guest_stay" },
        },
      }),
      cache: "no-store",
      signal: AbortSignal.timeout(UPSTREAM_TIMEOUT_MS),
    });
  } catch {
    console.error("Availability upstream request failed or timed out.");
    return undefined;
  }

  if (!response.ok) {
    console.error("Availability upstream returned a non-OK status", {
      status: response.status,
    });
    return undefined;
  }

  let payload: unknown;
  try {
    payload = await response.json();
  } catch {
    console.error("Availability upstream returned a non-JSON body.");
    return undefined;
  }

  return parseMcpToolResult(payload);
}

export async function GET(request: NextRequest) {
  const checkIn = request.nextUrl.searchParams.get("checkIn") ?? "";
  const checkOut = request.nextUrl.searchParams.get("checkOut") ?? "";

  const validation = validateAvailabilityRange(checkIn, checkOut);
  if (!validation.ok) {
    return json(
      { error: validation.error },
      { status: 400, headers: { "Cache-Control": "no-store" } }
    );
  }
  const range = validation.value;

  const identifier = privacySafeIdentifier(
    rateLimitSecret(),
    clientFingerprint(request)
  );
  const rateLimit = await consumeContactRateLimit(
    `rr-availability:v1:${identifier}`,
    AVAILABILITY_RATE_LIMIT,
    RATE_LIMIT_WINDOW_SECONDS
  );
  if (!rateLimit.allowed) {
    console.warn("Availability request rate limited");
    return json(
      {
        error:
          "We've checked a lot of dates from this connection. Please wait a few minutes, or send us an enquiry.",
      },
      {
        status: 429,
        headers: {
          "Cache-Control": "no-store",
          "Retry-After": String(rateLimit.retryAfterSeconds),
        },
      }
    );
  }

  const toolResult = await askRentalAgent(range.checkIn, range.checkOut);
  const status: AvailabilityStatus = mapAvailabilityVerdict(toolResult);

  if (status === "unconfirmed") {
    return unconfirmed(range.checkIn, range.checkOut, range.nights);
  }

  return json(
    {
      status,
      checkIn: range.checkIn,
      checkOut: range.checkOut,
      nights: range.nights,
    } satisfies AvailabilityResponse,
    { headers: { "Cache-Control": CONFIDENT_CACHE_CONTROL } }
  );
}
