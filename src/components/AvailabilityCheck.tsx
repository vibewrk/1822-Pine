"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import { CalendarCheck, CalendarX2, Loader2, MessageSquare } from "lucide-react";

import { trackEvent } from "@/lib/analytics";
import type { AvailabilityStatus } from "@/lib/availability";
import { PROPERTY_FACTS } from "@/lib/facts";

// Live availability for a chosen date range, answered by RentalAgent through
// /api/availability.
//
// The component only ever states availability when the server returned a
// verdict it was willing to confirm. "unconfirmed" — the answer for stale
// calendar evidence, an unreachable RentalAgent, or an unconfigured
// integration — makes no claim at all and simply restates the 24-hour reply
// promise the site already keeps. There is no optimistic state and no
// client-side guess: until an answer arrives for the range currently on
// screen, the panel shows only that it is checking.

const DEBOUNCE_MS = 450;
const MS_PER_NIGHT = 86_400_000;

type Answer = { rangeKey: string; status: AvailabilityStatus };

type AvailabilityCheckProps = {
  checkIn: string;
  checkOut: string;
  /** Where this instance lives, for analytics only. */
  location: string;
  /** Optional follow-up action rendered beneath the verdict. */
  action?: ReactNode;
  className?: string;
};

function nightsBetween(checkIn: string, checkOut: string): number {
  const ms =
    Date.parse(`${checkOut}T00:00:00Z`) - Date.parse(`${checkIn}T00:00:00Z`);
  return Number.isFinite(ms) ? Math.round(ms / MS_PER_NIGHT) : 0;
}

const COPY: Record<
  AvailabilityStatus,
  { headline: string; detail: string; tone: string; Icon: typeof CalendarCheck }
> = {
  open: {
    headline: "These dates are open.",
    detail:
      "Checked against our live calendar. Dates are held only once a booking is confirmed.",
    tone: "border-green-200 bg-green-50 text-green-900",
    Icon: CalendarCheck,
  },
  booked: {
    headline: "These dates are already booked.",
    detail:
      "Try nearby dates, or ask us — plans change, and we can tell you if anything opens up.",
    tone: "border-amber-200 bg-amber-50 text-amber-900",
    Icon: CalendarX2,
  },
  unconfirmed: {
    headline: "We'll confirm these dates for you.",
    detail:
      "Our calendar can't confirm this range automatically. Send the dates and a person replies within 24 hours with availability and an itemized quote.",
    tone: "border-stone-200 bg-stone-50 text-stone-700",
    Icon: MessageSquare,
  },
};

export function AvailabilityCheck({
  checkIn,
  checkOut,
  location,
  action,
  className,
}: AvailabilityCheckProps) {
  const [answer, setAnswer] = useState<Answer | null>(null);
  const reportedRef = useRef<string>("");

  const nights = checkIn && checkOut ? nightsBetween(checkIn, checkOut) : 0;
  const rangeIsCheckable = nights >= PROPERTY_FACTS.minimumStayNights;
  // The answer is keyed to the range it describes, so a stale result is never
  // shown against newly picked dates — the panel falls back to "checking"
  // instead of briefly asserting the previous range's verdict.
  const rangeKey = rangeIsCheckable ? `${checkIn}|${checkOut}` : "";
  const current = answer?.rangeKey === rangeKey ? answer : null;

  useEffect(() => {
    if (!rangeKey) return;

    const [rangeCheckIn, rangeCheckOut] = rangeKey.split("|");
    const controller = new AbortController();
    // Debounced so dragging through a date picker does not fan out requests,
    // and aborted on change so a slow earlier answer cannot land late.
    const timer = setTimeout(async () => {
      try {
        const response = await fetch(
          `/api/availability?checkIn=${encodeURIComponent(rangeCheckIn)}&checkOut=${encodeURIComponent(rangeCheckOut)}`,
          { signal: controller.signal, headers: { Accept: "application/json" } }
        );
        const data: unknown = await response.json();
        const status: AvailabilityStatus =
          response.ok &&
          data &&
          typeof data === "object" &&
          "status" in data &&
          (data.status === "open" || data.status === "booked")
            ? data.status
            : "unconfirmed";
        setAnswer({ rangeKey, status });
      } catch {
        if (controller.signal.aborted) return;
        // A failed check is not an availability claim in either direction.
        setAnswer({ rangeKey, status: "unconfirmed" });
      }
    }, DEBOUNCE_MS);

    return () => {
      clearTimeout(timer);
      controller.abort();
    };
  }, [rangeKey]);

  useEffect(() => {
    if (!current) return;
    // One event per distinct range/result, so re-renders do not inflate counts.
    // Dates are deliberately not sent to analytics, matching how the quote
    // flow keeps stay details out of GA.
    const key = `${current.rangeKey}|${current.status}`;
    if (reportedRef.current === key) return;
    reportedRef.current = key;
    trackEvent("availability_check", { result: current.status, location });
  }, [current, location]);

  if (!rangeIsCheckable) return null;

  if (!current) {
    return (
      <div
        className={`flex items-center gap-3 rounded-lg border border-stone-200 bg-stone-50 p-4 text-sm text-stone-600 ${className ?? ""}`}
        aria-live="polite"
      >
        <Loader2
          className="h-4 w-4 animate-spin text-amber-800"
          aria-hidden="true"
        />
        Checking these dates…
      </div>
    );
  }

  const { headline, detail, tone, Icon } = COPY[current.status];

  return (
    <div
      className={`rounded-lg border p-4 ${tone} ${className ?? ""}`}
      aria-live="polite"
    >
      <div className="flex items-start gap-3">
        <Icon className="mt-0.5 h-5 w-5 flex-shrink-0" aria-hidden="true" />
        <div>
          <p className="text-sm font-semibold">
            {headline}{" "}
            <span className="font-normal opacity-80">
              {nights} {nights === 1 ? "night" : "nights"}
            </span>
          </p>
          <p className="mt-1 text-sm leading-6 opacity-90">{detail}</p>
          {action ? <div className="mt-3">{action}</div> : null}
        </div>
      </div>
    </div>
  );
}
