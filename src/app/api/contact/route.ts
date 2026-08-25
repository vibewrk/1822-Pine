import { NextRequest, NextResponse } from "next/server";

const RECIPIENT_EMAIL = process.env.CONTACT_TO_EMAIL || "1822pinestreetpa@gmail.com";
// Resend requires a verified sender. Until rittenhouseresidence.com is verified
// in Resend (see docs/GROWTH-RUNBOOK.md), the sandbox sender only delivers to
// the Resend account owner's address — set CONTACT_FROM_EMAIL after verifying.
const SENDER_EMAIL =
  process.env.CONTACT_FROM_EMAIL || "Rittenhouse Residence <onboarding@resend.dev>";

const ISO_DATE_REGEX = /^\d{4}-\d{2}-\d{2}$/;

function addDaysISO(iso: string, days: number): string {
  const d = new Date(iso + "T00:00:00Z");
  d.setUTCDate(d.getUTCDate() + days);
  return d.toISOString().slice(0, 10);
}

// Simple spam detection
function isLikelySpam(data: {
  firstName: string;
  lastName: string;
  email: string;
  message: string;
}): boolean {
  const spamPatterns = [
    /\b(viagra|cialis|casino|lottery|bitcoin|crypto|investment opportunity)\b/i,
    /\b(click here|act now|limited time|free money)\b/i,
    /<[^>]*script/i,
    /https?:\/\/[^\s]+\.(ru|cn|xyz|top|gq|ml|ga|cf)\b/i,
  ];

  const combinedText = `${data.firstName} ${data.lastName} ${data.message}`;

  for (const pattern of spamPatterns) {
    if (pattern.test(combinedText)) {
      return true;
    }
  }

  // Check for excessive links
  const linkCount = (data.message.match(/https?:\/\//gi) || []).length;
  if (linkCount > 3) {
    return true;
  }

  return false;
}

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

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const {
      firstName,
      lastName,
      email,
      inquiryType,
      arrival,
      departure,
      groupSize,
      occasion,
      dates, // legacy free-text field from the pre-quote form
      message,
      website,
    } = body;

    // Honeypot: the visible form never fills this field. Bots that do get a
    // fake success so they don't adapt.
    if (website) {
      // Logged so a real guest tripped up by browser autofill leaves a trace.
      console.warn("Honeypot tripped, not sending:", { email, firstName });
      return NextResponse.json({ success: true });
    }

    // Validate required fields
    if (!firstName || !lastName || !email || !inquiryType) {
      return NextResponse.json(
        { error: "All required fields must be filled out" },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Please enter a valid email address" },
        { status: 400 }
      );
    }

    const isQuote = inquiryType === "quote";

    if (isQuote) {
      if (!arrival || !departure || !groupSize || !occasion) {
        return NextResponse.json(
          { error: "Quote requests need arrival and departure dates, a group size, and an occasion." },
          { status: 400 }
        );
      }
      if (!ISO_DATE_REGEX.test(String(arrival)) || !ISO_DATE_REGEX.test(String(departure))) {
        return NextResponse.json(
          { error: "Please pick your dates using the date fields." },
          { status: 400 }
        );
      }
      const nights = Math.round(
        (Date.parse(String(departure)) - Date.parse(String(arrival))) / 86400000
      );
      // Reject clearly past arrivals (1-day tolerance absorbs timezone skew
      // between the guest's local date and the server's UTC date).
      const todayUTC = new Date().toISOString().slice(0, 10);
      if (String(arrival) < addDaysISO(todayUTC, -1)) {
        return NextResponse.json(
          { error: "The arrival date can't be in the past — please pick a future date." },
          { status: 400 }
        );
      }
      if (!Number.isFinite(nights) || nights < 2) {
        return NextResponse.json(
          {
            error:
              "The house has a 2-night minimum — please choose a departure date at least two nights after arrival.",
          },
          { status: 400 }
        );
      }
    } else if (!message) {
      return NextResponse.json(
        { error: "All required fields must be filled out" },
        { status: 400 }
      );
    }

    // Check for spam. Soft-fail with a human path instead of silently
    // discarding: a false positive here used to look like a sent message
    // while the inquiry evaporated.
    if (isLikelySpam({ firstName, lastName, email, message: message || "" })) {
      console.warn("Spam filter tripped, not sending:", { email, firstName });
      return NextResponse.json(
        {
          error:
            `We couldn't send this message automatically. Please email us directly at ${RECIPIENT_EMAIL} — a person reads every message, and we reply within 24 hours.`,
        },
        { status: 422 }
      );
    }

    const typeLabel = inquiryTypeLabels[inquiryType] || inquiryType;

    // Build the email content
    const nightsForEmail = isQuote
      ? Math.round((Date.parse(String(departure)) - Date.parse(String(arrival))) / 86400000)
      : 0;

    const emailSubject = isQuote
      ? `[Rittenhouse Residence] Quote request — ${arrival} to ${departure}, ${groupSize} guests — ${firstName} ${lastName}`
      : `[Rittenhouse Residence] ${typeLabel} from ${firstName} ${lastName}`;

    const detailLines = [
      `Name: ${firstName} ${lastName}`,
      `Email: ${email}`,
      `Inquiry Type: ${typeLabel}`,
      isQuote ? `Arrival: ${arrival}` : "",
      isQuote ? `Departure: ${departure} (${nightsForEmail} nights)` : "",
      isQuote ? `Group Size: ${groupSize}` : "",
      isQuote && occasion ? `Occasion: ${occasionLabels[occasion] || occasion}` : "",
      !isQuote && dates ? `Preferred Dates: ${dates}` : "",
    ].filter(Boolean);

    const emailBody = `
New ${isQuote ? "quote request" : "inquiry"} from the Rittenhouse Residence website:

${detailLines.join("\n")}

${message ? `Message:\n${message}` : "No additional message."}

---
This message was sent from the contact form at rittenhouseresidence.com
    `.trim();

    // Send email using Resend (you'll need to set up RESEND_API_KEY in env)
    const resendApiKey = process.env.RESEND_API_KEY;

    if (!resendApiKey) {
      // Fail LOUDLY. A previous version returned {success:true} here, which
      // showed visitors "message sent" while delivering nothing — silently
      // discarding booking inquiries whenever the env var was missing.
      console.error(
        "RESEND_API_KEY not configured — contact form cannot deliver mail. " +
          "Set it in the Vercel project environment."
      );
      return NextResponse.json(
        {
          error:
            `Our inquiry form is temporarily unavailable. Please email us directly at ${RECIPIENT_EMAIL} — we reply within 24 hours.`,
        },
        { status: 503 }
      );
    }

    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${resendApiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: SENDER_EMAIL,
        to: RECIPIENT_EMAIL,
        reply_to: email,
        subject: emailSubject,
        text: emailBody,
      }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error("Resend API error:", errorData);
      return NextResponse.json(
        {
          error: `We couldn't send your message just now. Please email us directly at ${RECIPIENT_EMAIL}.`,
        },
        { status: 502 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "An unexpected error occurred. Please try again." },
      { status: 500 }
    );
  }
}
