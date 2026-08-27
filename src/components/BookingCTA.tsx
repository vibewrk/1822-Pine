import { Bath, Bed, Calendar, ExternalLink, Star, Users } from "lucide-react";
import TrackedLink from "@/components/TrackedLink";
import {
  BOOKING_LINKS,
  PROPERTY_FACTS,
  REVIEW_FACTS,
} from "@/lib/facts";
import { PRICING_COPY } from "@/lib/pricing";

const inquirySteps = [
  [
    "1. Tell us about your stay",
    "Share your dates, group size, and what is bringing everyone to Philadelphia.",
  ],
  [
    "2. Hear from a person",
    "Within 24 hours, we reply with availability and an itemized personal quote.",
  ],
  [
    "3. Choose your next step",
    "We will explain the booking options, or you can use Airbnb or Vrbo for secure online checkout.",
  ],
];

export function BookingCTA() {
  return (
    <section className="rounded-lg border border-stone-200 bg-stone-50 p-6 shadow-sm sm:p-8">
      <div className="mx-auto max-w-3xl text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-amber-700">
          Booking
        </p>
        <h2 className="mt-3 font-serif text-3xl font-semibold leading-tight text-stone-950 sm:text-4xl">
          Reserve The Rittenhouse Residence.
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-stone-600">
          Tell us what you are planning and we will help you see whether the
          house fits your group. Prefer to reserve online? Airbnb and Vrbo have
          live calendars and secure checkout.
        </p>

        <div className="mt-7 flex flex-wrap justify-center gap-3 text-sm text-stone-700">
          <span className="inline-flex items-center gap-2">
            <Bed className="h-4 w-4 text-amber-700" />
            {PROPERTY_FACTS.bedrooms} bedrooms
          </span>
          <span className="inline-flex items-center gap-2">
            <Bath className="h-4 w-4 text-amber-700" />
            {PROPERTY_FACTS.fullBathrooms} full baths + powder room
          </span>
          <span className="inline-flex items-center gap-2">
            <Users className="h-4 w-4 text-amber-700" />
            Sleeps {PROPERTY_FACTS.sleeps}
          </span>
          <span className="inline-flex items-center gap-2">
            <Calendar className="h-4 w-4 text-amber-700" />
            {PRICING_COPY.short}
          </span>
        </div>

        <div className="mt-7 grid gap-3 text-left sm:grid-cols-3">
          {inquirySteps.map(([title, body]) => (
            <div
              key={title}
              className="rounded-md border border-stone-200 bg-white p-4"
            >
              <p className="text-sm font-semibold text-stone-950">{title}</p>
              <p className="mt-1.5 text-sm leading-6 text-stone-600">{body}</p>
            </div>
          ))}
        </div>

        <div className="mt-8">
          <TrackedLink
            href="/contact"
            event="direct_inquiry_click"
            eventParams={{ location: "booking_cta" }}
            className="inline-flex w-full items-center justify-center gap-2 rounded-md bg-stone-950 px-8 py-4 text-base font-semibold text-white transition-colors hover:bg-stone-800 sm:w-auto"
          >
            Request a Personal Quote
          </TrackedLink>
        </div>

        <p className="mt-6 text-xs font-semibold uppercase tracking-[0.18em] text-stone-500">
          Or reserve online on…
        </p>
        <div className="mt-3 flex flex-col gap-3 sm:flex-row sm:justify-center">
          <TrackedLink
            href={BOOKING_LINKS.vrbo}
            event="ota_click"
            eventParams={{ platform: "vrbo", location: "booking_cta" }}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-md border border-stone-300 bg-white px-6 py-3 text-sm font-semibold text-stone-950 transition-colors hover:bg-stone-100"
          >
            Vrbo — live calendar &amp; secure checkout
            <ExternalLink className="h-4 w-4" />
          </TrackedLink>
          <TrackedLink
            href={BOOKING_LINKS.airbnb}
            event="ota_click"
            eventParams={{ platform: "airbnb", location: "booking_cta" }}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-md border border-stone-300 bg-white px-6 py-3 text-sm font-semibold text-stone-950 transition-colors hover:bg-stone-100"
          >
            Airbnb — live calendar &amp; secure checkout
            <Star className="h-4 w-4 text-amber-700" />
          </TrackedLink>
        </div>

        {/* Review data sourced from Airbnb listing; update periodically. */}
        <TrackedLink
          href={BOOKING_LINKS.airbnb}
          event="ota_click"
          eventParams={{ platform: "airbnb", location: "booking_cta_reviews" }}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-5 inline-flex items-center gap-2 text-sm text-stone-600 hover:text-stone-950"
        >
          <Star className="h-4 w-4 fill-amber-500 text-amber-500" />
          {REVIEW_FACTS.airbnb.rating} on Airbnb across{" "}
          {REVIEW_FACTS.airbnb.count} reviews
          <ExternalLink className="h-3.5 w-3.5" />
        </TrackedLink>
      </div>
    </section>
  );
}
