import { Bath, Bed, Calendar, ExternalLink, Star, Users } from "lucide-react";
import TrackedLink from "@/components/TrackedLink";

const VRBO_URL = "https://www.vrbo.com/757481";
const AIRBNB_URL = "https://www.airbnb.com/rooms/6000930";

const directSteps = [
  ["1. Inquire", "Send your dates and group size through the contact page."],
  [
    "2. Quote + hold",
    "Within 24 hours: confirmed availability, a full direct quote, and a hold on your dates.",
  ],
  [
    "3. Reserve",
    "Sign the rental agreement and secure the booking with a 50% deposit.",
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
          Platforms add a guest service fee at checkout. A direct quote is the
          same house and dates without it — request one and compare totals
          yourself.
        </p>

        <div className="mt-7 flex flex-wrap justify-center gap-3 text-sm text-stone-700">
          <span className="inline-flex items-center gap-2">
            <Bed className="h-4 w-4 text-amber-700" />
            8BR
          </span>
          <span className="inline-flex items-center gap-2">
            <Bath className="h-4 w-4 text-amber-700" />
            6BA
          </span>
          <span className="inline-flex items-center gap-2">
            <Users className="h-4 w-4 text-amber-700" />
            Sleeps 16
          </span>
          <span className="inline-flex items-center gap-2">
            <Calendar className="h-4 w-4 text-amber-700" />
            From $1,600/night
          </span>
        </div>

        <div className="mt-7 grid gap-3 text-left sm:grid-cols-3">
          {directSteps.map(([title, body]) => (
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
            Request a Direct Quote
          </TrackedLink>
        </div>

        <p className="mt-6 text-xs font-semibold uppercase tracking-[0.18em] text-stone-500">
          Or book instantly on…
        </p>
        <div className="mt-3 flex flex-col gap-3 sm:flex-row sm:justify-center">
          <TrackedLink
            href={VRBO_URL}
            event="ota_click"
            eventParams={{ platform: "vrbo", location: "booking_cta" }}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-md border border-stone-300 bg-white px-6 py-3 text-sm font-semibold text-stone-950 transition-colors hover:bg-stone-100"
          >
            Vrbo — live calendar &amp; checkout
            <ExternalLink className="h-4 w-4" />
          </TrackedLink>
          <TrackedLink
            href={AIRBNB_URL}
            event="ota_click"
            eventParams={{ platform: "airbnb", location: "booking_cta" }}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-md border border-stone-300 bg-white px-6 py-3 text-sm font-semibold text-stone-950 transition-colors hover:bg-stone-100"
          >
            Airbnb — instant book
            <Star className="h-4 w-4 text-amber-700" />
          </TrackedLink>
        </div>

        {/* Review data sourced from Airbnb listing; update periodically. */}
        <TrackedLink
          href={AIRBNB_URL}
          event="ota_click"
          eventParams={{ platform: "airbnb", location: "booking_cta_reviews" }}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-5 inline-flex items-center gap-2 text-sm text-stone-600 hover:text-stone-950"
        >
          <Star className="h-4 w-4 fill-amber-500 text-amber-500" />
          4.88 on Airbnb across 102 reviews, as of Aug 2026
          <ExternalLink className="h-3.5 w-3.5" />
        </TrackedLink>
      </div>
    </section>
  );
}
