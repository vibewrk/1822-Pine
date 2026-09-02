import { MessageSquare } from "lucide-react";
import type { ReactNode } from "react";

import { PROPERTY_FACTS } from "@/lib/facts";

// Inquiry-only date guidance. This component deliberately performs no
// availability request: a selected range is carried into the quote flow, and
// availability is answered privately by a person or on the OTA calendars.

const MS_PER_NIGHT = 86_400_000;

type AvailabilityInquiryProps = {
  checkIn: string;
  checkOut: string;
  /** Optional follow-up action rendered beneath the guidance. */
  action?: ReactNode;
  className?: string;
};

function nightsBetween(checkIn: string, checkOut: string): number {
  const ms =
    Date.parse(`${checkOut}T00:00:00Z`) - Date.parse(`${checkIn}T00:00:00Z`);
  return Number.isFinite(ms) ? Math.round(ms / MS_PER_NIGHT) : 0;
}

export function AvailabilityInquiry({
  checkIn,
  checkOut,
  action,
  className,
}: AvailabilityInquiryProps) {
  const nights = checkIn && checkOut ? nightsBetween(checkIn, checkOut) : 0;
  if (nights < PROPERTY_FACTS.minimumStayNights) return null;

  return (
    <div
      className={`rounded-lg border border-stone-200 bg-stone-50 p-4 text-stone-700 ${className ?? ""}`}
      aria-live="polite"
    >
      <div className="flex items-start gap-3">
        <MessageSquare
          className="mt-0.5 h-5 w-5 flex-shrink-0"
          aria-hidden="true"
        />
        <div>
          <p className="text-sm font-semibold">
            We&apos;ll confirm these dates personally.{" "}
            <span className="font-normal opacity-80">
              {nights} {nights === 1 ? "night" : "nights"}
            </span>
          </p>
          <p className="mt-1 text-sm leading-6 opacity-90">
            Send your request and a person will reply within 24 hours with
            availability and an itemized quote. For an immediate calendar and
            secure checkout, you can also use Airbnb or Vrbo.
          </p>
          {action ? <div className="mt-3">{action}</div> : null}
        </div>
      </div>
    </div>
  );
}
