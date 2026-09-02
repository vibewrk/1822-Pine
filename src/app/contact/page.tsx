"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import {
  AlertCircle,
  CheckCircle,
  CheckCircle2,
  Clock,
  MapPin,
  Send,
} from "lucide-react";
import { AvailabilityInquiry } from "@/components/AvailabilityInquiry";
import { Eyebrow } from "@/components/Eyebrow";
import TrackedLink from "@/components/TrackedLink";
import { trackEvent } from "@/lib/analytics";
import { BOOKING_LINKS, PROPERTY_FACTS } from "@/lib/facts";
import {
  parseQuotePrefill,
  QUOTE_PREFILL_SESSION_KEY,
  stripLegacyQuotePrefillParams,
} from "@/lib/quote-prefill";

const GROUP_SIZES = Array.from(
  { length: PROPERTY_FACTS.sleeps },
  (_, i) => i + 1
);

const OCCASIONS = [
  ["family-reunion", "Family reunion"],
  ["wedding", "Wedding-related stay"],
  ["corporate-retreat", "Team stay or retreat lodging"],
  ["milestone", "Milestone celebration"],
  ["other", "Other"],
];

const QUESTION_TOPICS = [
  ["general", "General question"],
  ["history", "Historical research"],
  ["other", "Other"],
];

const OUTCOME_PROMISES = [
  "A personal reply about availability",
  "An itemized quote for your stay",
  "Clear booking next steps",
];

type ContactApiResponse = {
  error?: string;
  code?: string;
  accepted?: boolean;
  inquiryId?: string;
  lead?: { event?: string; inquiryId?: string };
};

function addDays(iso: string, days: number): string {
  const d = new Date(iso + "T00:00:00Z");
  d.setUTCDate(d.getUTCDate() + days);
  return d.toISOString().slice(0, 10);
}

function localISODate(): string {
  const now = new Date();
  return `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, "0")}-${String(
    now.getDate()
  ).padStart(2, "0")}`;
}

function nightsBetween(arrival: string, departure: string): number {
  const ms = Date.parse(departure) - Date.parse(arrival);
  return Number.isFinite(ms) ? Math.round(ms / 86400000) : 0;
}

function markBrowserEventOnce(key: string): boolean {
  try {
    if (window.sessionStorage.getItem(key)) return false;
    window.sessionStorage.setItem(key, "1");
  } catch {
    // Some privacy modes disable storage. Analytics must not turn a delivered
    // inquiry into a visible form error, so emit once for this submit handler.
  }
  return true;
}

const inputClasses =
  "mt-1 block w-full rounded-md border border-stone-300 bg-white px-4 py-3 text-stone-900 placeholder-stone-400 focus:border-amber-600 focus:outline-none focus:ring-1 focus:ring-amber-600";

const labelClasses = "block text-sm font-medium text-stone-700";

export default function ContactPage() {
  const [mode, setMode] = useState<"quote" | "question">("quote");
  const [formState, setFormState] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [today, setToday] = useState<string>();
  const [arrival, setArrival] = useState("");
  const [departure, setDeparture] = useState("");
  const [groupSize, setGroupSize] = useState("");
  const [formToken, setFormToken] = useState("");
  const [securityError, setSecurityError] = useState("");

  const refreshFormToken = useCallback(async () => {
    setFormToken("");
    setSecurityError("");
    try {
      const response = await fetch("/api/contact", {
        method: "GET",
        cache: "no-store",
        headers: { Accept: "application/json" },
      });
      const data: unknown = await response.json();
      const token =
        data &&
        typeof data === "object" &&
        "formToken" in data &&
        typeof data.formToken === "string"
          ? data.formToken
          : "";
      if (!response.ok || !token) throw new Error("Form protection unavailable");
      setFormToken(token);
    } catch {
      setSecurityError(
        "We couldn't prepare the secure form. Please try again in a moment."
      );
    }
  }, []);

  // Computed after mount so the prerendered HTML never carries a stale date.
  // The booking picker hands dates across through short-lived session storage,
  // not the URL. That keeps stay dates and group size out of browser history,
  // server logs, referrers, and GA's page_location field. Old query-string
  // links are stripped by src/proxy.ts before this page renders; the fallback
  // below also cleans them during local/component-level rendering.
  useEffect(() => {
    setToday(localISODate());
    let prefillArrival = "";
    let prefillDeparture = "";
    let prefillGuests = "";

    try {
      const stored = window.sessionStorage.getItem(QUOTE_PREFILL_SESSION_KEY);
      window.sessionStorage.removeItem(QUOTE_PREFILL_SESSION_KEY);
      const parsed = parseQuotePrefill(stored);
      if (parsed) {
        prefillArrival = parsed.arrival;
        prefillDeparture = parsed.departure;
        prefillGuests = String(parsed.guests);
      }
    } catch {
      // Storage can be disabled; the form remains fully usable without prefill.
    }

    const legacy = stripLegacyQuotePrefillParams(window.location.search);
    if (legacy) {
      if (!prefillArrival) {
        prefillArrival = legacy.arrival;
        prefillDeparture = legacy.departure;
        prefillGuests = legacy.guests;
      }
      // Preserve campaign attribution such as utm_* and gclid while removing
      // only the legacy stay details that should not reach analytics.
      window.history.replaceState(
        window.history.state,
        "",
        `${window.location.pathname}${legacy.cleanedSearch}${window.location.hash}`
      );
    }

    if (/^\d{4}-\d{2}-\d{2}$/.test(prefillArrival)) setArrival(prefillArrival);
    if (/^\d{4}-\d{2}-\d{2}$/.test(prefillDeparture)) {
      setDeparture(prefillDeparture);
    }
    const guestsNum = Number(prefillGuests);
    if (
      Number.isInteger(guestsNum) &&
      guestsNum >= 1 &&
      guestsNum <= PROPERTY_FACTS.sleeps
    ) {
      setGroupSize(prefillGuests);
    }
    void refreshFormToken();
  }, [refreshFormToken]);

  function switchMode(next: "quote" | "question") {
    setMode(next);
    setFormState("idle");
    setErrorMessage("");
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setErrorMessage("");

    const form = e.currentTarget;
    const formData = new FormData(form);

    if (!formToken) {
      setFormState("error");
      setErrorMessage(
        "The secure form is still preparing. Please wait a moment and try again."
      );
      void refreshFormToken();
      return;
    }

    if (mode === "quote") {
      const arrivalValue = String(formData.get("arrival") ?? "");
      const departureValue = String(formData.get("departure") ?? "");
      // Recompute rather than trusting mount-time state: a tab left open for
      // days would otherwise validate against a stale "today".
      const todayNow = localISODate();
      if (arrivalValue < todayNow) {
        setFormState("error");
        setErrorMessage("The arrival date can't be in the past — please pick a future date.");
        return;
      }
      if (
        nightsBetween(arrivalValue, departureValue) <
        PROPERTY_FACTS.minimumStayNights
      ) {
        setFormState("error");
        setErrorMessage(
          `The house has a ${PROPERTY_FACTS.minimumStayNights}-night minimum — please choose a later departure date.`
        );
        return;
      }
    }

    setFormState("submitting");

    const inquiryType =
      mode === "quote" ? "quote" : String(formData.get("topic") ?? "general");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstName: formData.get("firstName"),
          lastName: formData.get("lastName"),
          email: formData.get("email"),
          inquiryType,
          arrival: formData.get("arrival"),
          departure: formData.get("departure"),
          groupSize: formData.get("groupSize"),
          occasion: formData.get("occasion"),
          message: formData.get("message"),
          website: formData.get("website"),
          formToken,
        }),
      });

      // A gateway error page isn't JSON — don't surface a parser message.
      let data: ContactApiResponse = {};
      try {
        data = (await response.json()) as ContactApiResponse;
      } catch {
        data = {};
      }

      if (!response.ok) {
        if (data.code === "FORM_EXPIRED" || data.code === "FORM_INVALID") {
          void refreshFormToken();
        }
        throw new Error(
          data.error ||
            "Something went wrong sending your message. Please try again in a moment, or check availability on Airbnb or Vrbo."
        );
      }

      if (data.accepted !== true || typeof data.inquiryId !== "string") {
        void refreshFormToken();
        throw new Error(
          "We couldn't verify that your message was accepted. Please try again."
        );
      }

      const inquiryEventKey = `rittenhouse:inquiry-event:${data.inquiryId}`;
      if (markBrowserEventOnce(inquiryEventKey)) {
        trackEvent("inquiry_accepted", {
          inquiry_id: data.inquiryId,
          inquiry_type: inquiryType,
          delivery: "queued",
        });
      }

      const isConfirmedQuoteLead =
        inquiryType === "quote" &&
        data.lead?.event === "generate_lead" &&
        data.lead.inquiryId === data.inquiryId;
      const leadEventKey = `rittenhouse:lead-event:${data.inquiryId}`;
      if (isConfirmedQuoteLead && markBrowserEventOnce(leadEventKey)) {
        // The marker is stored before emitting so a render/navigation race
        // cannot double-fire.
        trackEvent("generate_lead", {
          inquiry_id: data.inquiryId,
          method: "direct_quote_form",
        });
      }

      setFormState("success");
      form.reset();
      setArrival("");
      setDeparture("");
      setGroupSize("");
      void refreshFormToken();
    } catch (err) {
      setFormState("error");
      setErrorMessage(
        err instanceof Error ? err.message : "Something went wrong. Please try again."
      );
    }
  }

  return (
    <div className="flex flex-col bg-[#fbfaf7] text-stone-950">
      {/* Hero */}
      <section className="bg-stone-950 py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <Eyebrow light className="mb-5">
            Personal Quote
          </Eyebrow>
          <h1 className="font-serif text-5xl font-semibold leading-tight text-white md:text-7xl">
            Tell us what you are planning.
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-stone-200 md:text-xl">
            Share your dates, group size, and what is bringing everyone to
            Philadelphia. Within 24 hours, a person replies with availability,
            an itemized personal quote, and clear next steps.
          </p>
        </div>
      </section>

      {/* Form + Info */}
      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-16 lg:grid-cols-[1.15fr_0.85fr]">
            {/* Form column */}
            <div>
              <h2 className="font-serif text-3xl font-semibold text-stone-950">
                {mode === "quote" ? "Request a quote" : "Ask a question"}
              </h2>
              <p className="mt-2 text-stone-600">
                {mode === "quote"
                  ? "Dates and group size are all we need to get started."
                  : "General and historical-research questions are welcome."}
              </p>

              {formState === "success" ? (
                <div className="mt-8 rounded-lg border border-green-200 bg-green-50 p-8 text-center">
                  <CheckCircle className="mx-auto h-12 w-12 text-green-600" />
                  <h3 className="mt-4 text-lg font-semibold text-green-900">
                    {mode === "quote" ? "Quote request received" : "Message sent"}
                  </h3>
                  <p className="mt-2 text-green-700">
                    {mode === "quote"
                      ? "Within 24 hours you'll hear from a person about availability, the itemized cost of your stay, and the next steps."
                      : "Thank you for reaching out. We reply within 24 hours."}
                  </p>
                  <button
                    onClick={() => setFormState("idle")}
                    className="mt-6 font-medium text-green-700 hover:text-green-800"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="mt-8 space-y-6">
                  {/* Honeypot — invisible to people, filled by bots */}
                  <div
                    className="absolute left-[-10000px] top-auto h-px w-px overflow-hidden"
                    aria-hidden="true"
                  >
                    <label htmlFor="website">Website</label>
                    <input
                      type="text"
                      id="website"
                      name="website"
                      tabIndex={-1}
                      aria-hidden="true"
                      autoComplete="off"
                    />
                  </div>

                  {formState === "error" && (
                    <div className="flex items-start gap-3 rounded-lg border border-red-200 bg-red-50 p-4">
                      <AlertCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-red-600" />
                      <div>
                        <p className="text-sm text-red-700">{errorMessage}</p>
                        <p className="mt-3 text-sm text-red-800">
                          You can still view booking options or use a live calendar:
                        </p>
                        <div className="mt-2 flex flex-wrap gap-x-4 gap-y-2 text-sm font-semibold">
                          <TrackedLink
                            href="/book"
                            event="booking_fallback_click"
                            eventParams={{ platform: "website", location: "contact_error" }}
                            className="text-red-900 underline underline-offset-4 hover:text-red-700"
                          >
                            See booking options
                          </TrackedLink>
                          <TrackedLink
                            href={BOOKING_LINKS.airbnb}
                            event="ota_click"
                            eventParams={{ platform: "airbnb", location: "contact_error" }}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-red-900 underline underline-offset-4 hover:text-red-700"
                          >
                            Airbnb
                          </TrackedLink>
                          <TrackedLink
                            href={BOOKING_LINKS.vrbo}
                            event="ota_click"
                            eventParams={{ platform: "vrbo", location: "contact_error" }}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-red-900 underline underline-offset-4 hover:text-red-700"
                          >
                            Vrbo
                          </TrackedLink>
                        </div>
                      </div>
                    </div>
                  )}

                  {mode === "quote" && (
                    <>
                      <div className="grid gap-6 sm:grid-cols-2">
                        <div>
                          <label htmlFor="arrival" className={labelClasses}>
                            Arrival <span className="text-red-500">*</span>
                          </label>
                          <input
                            type="date"
                            id="arrival"
                            name="arrival"
                            required
                            min={today}
                            value={arrival}
                            onChange={(e) => setArrival(e.target.value)}
                            className={inputClasses}
                          />
                        </div>
                        <div>
                          <label htmlFor="departure" className={labelClasses}>
                            Departure <span className="text-red-500">*</span>
                          </label>
                          <input
                            type="date"
                            id="departure"
                            name="departure"
                            required
                            min={
                              arrival
                                ? addDays(
                                    arrival,
                                    PROPERTY_FACTS.minimumStayNights
                                  )
                                : today
                            }
                            value={departure}
                            onChange={(e) => setDeparture(e.target.value)}
                            className={inputClasses}
                          />
                          <p className="mt-1 text-xs text-stone-500">
                            {PROPERTY_FACTS.minimumStayNights}-night minimum
                          </p>
                        </div>
                      </div>

                      <AvailabilityInquiry
                        checkIn={arrival}
                        checkOut={departure}
                      />

                      <div className="grid gap-6 sm:grid-cols-2">
                        <div>
                          <label htmlFor="groupSize" className={labelClasses}>
                            Group Size <span className="text-red-500">*</span>
                          </label>
                          <select
                            id="groupSize"
                            name="groupSize"
                            required
                            value={groupSize}
                            onChange={(e) => setGroupSize(e.target.value)}
                            className={inputClasses}
                          >
                            <option value="" disabled>
                              Select group size
                            </option>
                            {GROUP_SIZES.map((n) => (
                              <option key={n} value={n}>
                                {n} {n === 1 ? "guest" : "guests"}
                              </option>
                            ))}
                          </select>
                        </div>
                        <div>
                          <label htmlFor="occasion" className={labelClasses}>
                            Occasion <span className="text-red-500">*</span>
                          </label>
                          <select
                            id="occasion"
                            name="occasion"
                            required
                            defaultValue=""
                            className={inputClasses}
                          >
                            <option value="" disabled>
                              Select an occasion
                            </option>
                            {OCCASIONS.map(([value, label]) => (
                              <option key={value} value={value}>
                                {label}
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>
                    </>
                  )}

                  {mode === "question" && (
                    <div>
                      <label htmlFor="topic" className={labelClasses}>
                        Topic <span className="text-red-500">*</span>
                      </label>
                      <select
                        id="topic"
                        name="topic"
                        required
                        defaultValue=""
                        className={inputClasses}
                      >
                        <option value="" disabled>
                          Select a topic
                        </option>
                        {QUESTION_TOPICS.map(([value, label]) => (
                          <option key={value} value={value}>
                            {label}
                          </option>
                        ))}
                      </select>
                    </div>
                  )}

                  <div className="grid gap-6 sm:grid-cols-2">
                    <div>
                      <label htmlFor="firstName" className={labelClasses}>
                        First Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        required
                        autoComplete="given-name"
                        className={inputClasses}
                        placeholder="First name"
                      />
                    </div>
                    <div>
                      <label htmlFor="lastName" className={labelClasses}>
                        Last Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        required
                        autoComplete="family-name"
                        className={inputClasses}
                        placeholder="Last name"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className={labelClasses}>
                      Email <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      autoComplete="email"
                      className={inputClasses}
                      placeholder="you@example.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className={labelClasses}>
                      {mode === "quote" ? (
                        "Anything else we should know? (Optional)"
                      ) : (
                        <>
                          Message <span className="text-red-500">*</span>
                        </>
                      )}
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      required={mode === "question"}
                      className={inputClasses}
                      placeholder={
                        mode === "quote"
                          ? "Flexible dates, arrival plans, questions about the house..."
                          : "Tell us what you're curious about..."
                      }
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={formState === "submitting" || !formToken}
                    className="flex w-full items-center justify-center gap-2 rounded-md bg-stone-950 px-6 py-3 text-base font-semibold text-white transition-colors hover:bg-stone-800 disabled:cursor-not-allowed disabled:opacity-50"
                  >
                    {formState === "submitting" ? (
                      <>
                        <div className="h-5 w-5 animate-spin rounded-full border-2 border-white/30 border-t-white" />
                        Sending...
                      </>
                    ) : !formToken ? (
                      "Preparing secure form..."
                    ) : (
                      <>
                        <Send className="h-5 w-5" />
                        {mode === "quote" ? "Request My Personal Quote" : "Send Message"}
                      </>
                    )}
                  </button>

                  {securityError && (
                    <div className="text-center text-sm text-red-700" role="status">
                      <p>{securityError}</p>
                      <button
                        type="button"
                        onClick={() => void refreshFormToken()}
                        className="mt-2 font-semibold underline underline-offset-4 hover:text-red-900"
                      >
                        Try preparing the form again
                      </button>
                    </div>
                  )}

                  <p className="text-sm text-stone-500">
                    {mode === "quote" ? (
                      <>
                        Not planning a stay?{" "}
                        <button
                          type="button"
                          onClick={() => switchMode("question")}
                          className="font-medium text-amber-800 underline underline-offset-4 hover:text-amber-900"
                        >
                          Ask a general or historical-research question
                        </button>
                      </>
                    ) : (
                      <>
                        Planning a stay?{" "}
                        <button
                          type="button"
                          onClick={() => switchMode("quote")}
                          className="font-medium text-amber-800 underline underline-offset-4 hover:text-amber-900"
                        >
                          Request a quote instead
                        </button>
                      </>
                    )}
                  </p>
                </form>
              )}
            </div>

            {/* Info column */}
            <div className="lg:pl-8">
              <figure className="relative mb-6 aspect-[4/3] overflow-hidden rounded-lg bg-stone-200">
                <Image
                  src="/images/property-tour/55-library-02.webp"
                  alt="Library lounge at The Rittenhouse Residence with sofas, fireplace, and tall windows"
                  fill
                  sizes="(max-width: 1024px) 100vw, 36vw"
                  className="object-cover"
                />
              </figure>
              {/* Outcome promise */}
              <div className="rounded-lg border border-stone-200 bg-stone-50 p-6">
                <Eyebrow>What Happens Next</Eyebrow>
                <h2 className="mt-4 font-serif text-2xl font-semibold text-stone-950">
                  Within 24 hours, you&apos;ll have:
                </h2>
                <ul className="mt-5 space-y-3">
                  {OUTCOME_PROMISES.map((item) => (
                    <li
                      key={item}
                      className="flex gap-3 text-sm leading-6 text-stone-700"
                    >
                      <CheckCircle2 className="mt-0.5 h-4 w-4 flex-none text-amber-800" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Location + response time */}
              <div className="mt-6 space-y-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-amber-100">
                    <MapPin className="h-6 w-6 text-amber-700" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-stone-950">Where you&apos;ll stay</h3>
                    <p className="mt-1 text-stone-600">
                      1800 Block of Pine Street
                      <br />
                      Philadelphia, PA 19103
                    </p>
                    <p className="mt-1 text-sm text-amber-700">
                      Two blocks from Rittenhouse Square
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-amber-100">
                    <Clock className="h-6 w-6 text-amber-700" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-stone-950">
                      Response Time
                    </h3>
                    <p className="mt-1 text-stone-600">
                      We reply within 24 hours
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Teaser */}
      <section className="bg-stone-100 py-16">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <h3 className="font-serif text-2xl font-semibold text-stone-950">
            Have Questions?
          </h3>
          <p className="mx-auto mt-4 max-w-2xl text-stone-600">
            Check out our FAQ for answers to common questions about booking,
            check-in, amenities, and more.
          </p>
          <a
            href="/faq"
            className="mt-6 inline-flex items-center justify-center rounded-md border border-stone-300 bg-white px-6 py-3 text-base font-semibold text-stone-950 transition-colors hover:border-amber-800 hover:text-amber-900"
          >
            View FAQ
          </a>
        </div>
      </section>
    </div>
  );
}
