import {
  ArrowRight,
  Bath,
  Bed,
  ExternalLink,
  Home,
  Star,
  Users,
} from "lucide-react";
import TrackedLink from "@/components/TrackedLink";
import {
  BOOKING_LINKS,
  PROPERTY_FACTS,
  REVIEW_FACTS,
} from "@/lib/facts";
import { PRICING_COPY } from "@/lib/pricing";

const stayFacts = [
  { icon: Bed, label: `${PROPERTY_FACTS.bedrooms} bedrooms` },
  {
    icon: Bath,
    label: `${PROPERTY_FACTS.fullBathrooms} full baths + powder room`,
  },
  { icon: Users, label: `Sleeps ${PROPERTY_FACTS.sleeps}` },
  { icon: Home, label: "Private whole-house stay" },
];

export function BookingCTA() {
  return (
    <section className="relative overflow-hidden rounded-lg border border-amber-900/25 bg-[#f4efe5] p-2 shadow-sm">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-2 rounded-sm border border-amber-800/20"
      />
      <div className="relative mx-auto max-w-4xl px-5 py-9 text-center sm:px-10 sm:py-12">
        <div
          aria-hidden="true"
          className="mx-auto flex max-w-56 items-center justify-center gap-3 text-amber-800/70"
        >
          <span className="h-px flex-1 bg-current" />
          <span className="h-2 w-2 rotate-45 border border-current" />
          <span className="h-px flex-1 bg-current" />
        </div>
        <p className="mt-4 text-xs font-semibold uppercase tracking-[0.24em] text-amber-900">
          A House for the Occasion
        </p>
        <h2 className="mx-auto mt-4 max-w-3xl font-serif text-3xl font-semibold leading-tight text-stone-950 sm:text-4xl lg:text-5xl">
          Bring everyone together beneath one remarkable roof.
        </h2>
        <p className="mx-auto mt-5 max-w-3xl text-base leading-7 text-stone-700 sm:text-lg sm:leading-8">
          The Rittenhouse Residence gives up to {PROPERTY_FACTS.sleeps} guests{" "}
          {PROPERTY_FACTS.bedrooms} private bedrooms, gracious rooms for
          gathering, and a storied Philadelphia townhouse entirely to
          themselves—two blocks from Rittenhouse Square.
        </p>

        <div className="mx-auto mt-6 flex max-w-2xl flex-col items-stretch justify-center gap-2 text-sm sm:flex-row sm:gap-6">
          <span className="inline-flex items-center justify-center gap-2 px-3 font-medium text-stone-700">
            <Star
              aria-hidden="true"
              className="h-4 w-4 fill-amber-600 text-amber-600"
            />
            {REVIEW_FACTS.airbnb.rating}/5 · {REVIEW_FACTS.airbnb.count} Airbnb
            reviews
          </span>
          <span className="inline-flex items-center justify-center gap-2 px-3 font-medium text-stone-700">
            <Star
              aria-hidden="true"
              className="h-4 w-4 fill-amber-600 text-amber-600"
            />
            {REVIEW_FACTS.vrbo.rating}/10 · {REVIEW_FACTS.vrbo.count} Vrbo
            reviews
          </span>
        </div>

        <p className="mx-auto mt-7 max-w-2xl text-base leading-7 text-stone-700">
          Tell us your dates, group size, and what brings everyone to
          Philadelphia. One of us will reply within 24 hours with availability,
          a clear itemized quote, and straightforward booking options.
        </p>
        <div className="mt-6">
          <TrackedLink
            href="/contact"
            event="direct_inquiry_click"
            eventParams={{ location: "booking_cta" }}
            className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-sm bg-stone-950 px-8 py-3.5 text-base font-semibold text-white shadow-sm transition-colors hover:bg-stone-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-800 focus-visible:ring-offset-2 focus-visible:ring-offset-[#f4efe5] sm:w-auto"
          >
            Ask About Your Dates
            <ArrowRight aria-hidden="true" className="h-4 w-4" />
          </TrackedLink>
        </div>
        <p className="mt-3 text-sm text-stone-600">
          Personal reply within 24 hours · exact pricing for your dates
        </p>

        <div
          aria-hidden="true"
          className="mx-auto my-8 flex max-w-xs items-center gap-3 text-amber-900/35"
        >
          <span className="h-px flex-1 bg-current" />
          <span className="h-1.5 w-1.5 rotate-45 bg-current" />
          <span className="h-px flex-1 bg-current" />
        </div>

        <h3 className="font-serif text-2xl font-semibold text-stone-950">
          Prefer to reserve online?
        </h3>
        <p className="mx-auto mt-2 max-w-2xl text-sm leading-6 text-stone-600 sm:text-base">
          See live calendars, date-specific pricing, cancellation terms, and
          secure checkout on Airbnb or Vrbo.
        </p>
        <div className="mx-auto mt-5 flex max-w-2xl flex-col gap-3 sm:flex-row sm:justify-center">
          <TrackedLink
            href={BOOKING_LINKS.airbnb}
            event="ota_click"
            eventParams={{ platform: "airbnb", location: "booking_cta" }}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-sm border border-amber-900/30 bg-white/60 px-6 py-3 text-sm font-semibold text-stone-950 transition-colors hover:border-amber-900/50 hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-800 focus-visible:ring-offset-2 focus-visible:ring-offset-[#f4efe5] sm:w-auto sm:min-w-60"
          >
            Check dates on Airbnb
            <ExternalLink aria-hidden="true" className="h-4 w-4" />
            <span className="sr-only"> (opens in a new tab)</span>
          </TrackedLink>
          <TrackedLink
            href={BOOKING_LINKS.vrbo}
            event="ota_click"
            eventParams={{ platform: "vrbo", location: "booking_cta" }}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-sm border border-amber-900/30 bg-white/60 px-6 py-3 text-sm font-semibold text-stone-950 transition-colors hover:border-amber-900/50 hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-800 focus-visible:ring-offset-2 focus-visible:ring-offset-[#f4efe5] sm:w-auto sm:min-w-60"
          >
            Check dates on Vrbo
            <ExternalLink aria-hidden="true" className="h-4 w-4" />
            <span className="sr-only"> (opens in a new tab)</span>
          </TrackedLink>
        </div>

        <div className="mt-8 border-t border-amber-900/20 pt-7">
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-3 text-sm text-stone-700">
            {stayFacts.map(({ icon: Icon, label }) => (
              <span key={label} className="inline-flex items-center gap-2">
                <Icon aria-hidden="true" className="h-4 w-4 text-amber-800" />
                {label}
              </span>
            ))}
          </div>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-stone-600">
            {PRICING_COPY.short}
          </p>
        </div>
      </div>
    </section>
  );
}
