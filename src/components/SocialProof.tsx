import { Award, Star } from "lucide-react";
import Link from "next/link";
import TrackedLink from "@/components/TrackedLink";
import { Eyebrow } from "@/components/Eyebrow";
import { BOOKING_LINKS, REVIEW_FACTS, TOTAL_REVIEW_COUNT } from "@/lib/facts";

// Real guest reviews and platform standing, transcribed from the live Airbnb
// and Vrbo listings on 2026-08-27.
//
// INTEGRITY RULES (same standard as the history archive):
// - Never write a review. Every quote here is a real guest's words from a
//   platform listing, trimmed only for length, never reworded.
// - Do NOT add these to JSON-LD as Review/aggregateRating markup. Google does
//   not allow a business to create review-rich-result markup about itself or
//   aggregate ratings from another website. This component is on-page social
//   proof only, with direct links back to the source platforms.
// - Re-verify the counts and averages quarterly against both listings and
//   update RATINGS and src/lib/facts.ts together.

export const AIRBNB_URL = BOOKING_LINKS.airbnb;
export const VRBO_URL = BOOKING_LINKS.vrbo;

export const AIRBNB_RATING = REVIEW_FACTS.airbnb.rating;
export const AIRBNB_COUNT = REVIEW_FACTS.airbnb.count;
export const VRBO_RATING = REVIEW_FACTS.vrbo.rating;
export const VRBO_COUNT = REVIEW_FACTS.vrbo.count;
export const TOTAL_REVIEWS = TOTAL_REVIEW_COUNT;

// Airbnb's per-category averages, shown on the listing.
const RATINGS = [
  ["5.0", "Location"],
  ["4.9", "Cleanliness"],
  ["4.9", "Accuracy"],
  ["4.9", "Check-in"],
  ["4.8", "Communication"],
  ["4.7", "Value"],
] as const;

type Review = {
  quote: string;
  name: string;
  from: string;
  when: string;
  trip: string;
};

const REVIEWS: Review[] = [
  {
    quote:
      "It sits right in Rittenhouse Square, which turned out to be a great home base for exploring Philly. We never once had to get in a car… There was more than enough room for all eight of us, and everyone had their own bedroom and privacy. We spent most of our evenings up on the rooftop terrace looking out at the skyline.",
    name: "Colin",
    from: "Pittsburgh, Pennsylvania",
    when: "August 2026",
    trip: "Group trip",
  },
  {
    quote:
      "We rented this home for our wedding week, and it was absolutely perfect for our immediate family… With all the excitement and chaos that can come with a wedding, it was wonderful to have a home that felt peaceful, welcoming, and thoughtfully cared for. My dad kept saying that the Airbnb was an experience in itself.",
    name: "Karlie",
    from: "Philadelphia, Pennsylvania",
    when: "June 2026",
    trip: "Wedding week",
  },
  {
    quote:
      "The residence has all the charm that you would expect from a mansion built in the 1800s — soaring ceilings in the entry and living room, a grand staircase and lots of intricate detailing throughout. But it also has all the amenities associated with a new modern house… The spaces and furnishings are lovely — you are clearly in a loved home (not just an Ikea outfitted rental).",
    name: "Song",
    from: "13 years on Airbnb",
    when: "May 2026",
    trip: "College graduation",
  },
  {
    quote:
      "A wonderful stay at this beautiful old house for our wedding weekend! Every room was delightful and unique. The kitchen and bathrooms were well-stocked, and the rooftop terrace had an amazing skyline view of Philly. Would recommend to anyone hosting a large group while in town!",
    name: "Sunny",
    from: "Rochester, Minnesota",
    when: "May 2026",
    trip: "Wedding weekend",
  },
  {
    quote:
      "The space for a large family was perfect! The surrounding area offered a variety of things to do for all guests and no one had to drive which was a bonus being in the city.",
    name: "Mary",
    from: "Linfield, Pennsylvania",
    when: "June 2026",
    trip: "Family stay",
  },
  {
    quote:
      "Really wonderful stay in an amazing townhouse. Perfect location and plenty of space to spread out for the family. We'll be back!",
    name: "Brad",
    from: "New York, New York",
    when: "July 2026",
    trip: "Stayed with kids",
  },
];

/** Compact rating strip — for use under a hero or CTA. */
export function RatingStrip({ className = "" }: { className?: string }) {
  return (
    <div
      className={`flex flex-wrap items-center gap-x-6 gap-y-2 text-sm ${className}`}
    >
      <TrackedLink
        href={AIRBNB_URL}
        event="ota_click"
        eventParams={{ platform: "airbnb", location: "rating_strip" }}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 font-semibold transition-colors hover:text-amber-800"
      >
        <Star className="h-4 w-4 fill-amber-500 text-amber-500" />
        {AIRBNB_RATING} · {AIRBNB_COUNT} Airbnb reviews
      </TrackedLink>
      <TrackedLink
        href={VRBO_URL}
        event="ota_click"
        eventParams={{ platform: "vrbo", location: "rating_strip" }}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 font-semibold transition-colors hover:text-amber-800"
      >
        <Star className="h-4 w-4 fill-amber-500 text-amber-500" />
        {VRBO_RATING}/10 · {VRBO_COUNT} Vrbo reviews
      </TrackedLink>
      <span className="inline-flex items-center gap-2 text-stone-600">
        <Award className="h-4 w-4 text-amber-700" />
        Superhost · 11 years hosting
      </span>
    </div>
  );
}

/** Full social-proof section: standing, category scores, and real reviews. */
export function SocialProof() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 max-w-3xl">
          <Eyebrow>What Guests Say</Eyebrow>
          <h2 className="mt-4 font-serif text-4xl font-semibold leading-tight text-stone-950 md:text-5xl">
            {TOTAL_REVIEWS} reviews across Airbnb and Vrbo.
          </h2>
          <p className="mt-5 text-lg leading-8 text-stone-700">
            Guests have made the house part of wedding weeks, graduations,
            family gatherings, and weekends with old friends. These are their
            words; you can read the full reviews on{" "}
            <TrackedLink
              href={AIRBNB_URL}
              event="ota_click"
              eventParams={{ platform: "airbnb", location: "social_proof_intro" }}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-amber-800 underline underline-offset-4 hover:text-amber-900"
            >
              Airbnb
            </TrackedLink>{" "}
            or{" "}
            <TrackedLink
              href={VRBO_URL}
              event="ota_click"
              eventParams={{ platform: "vrbo", location: "social_proof_intro" }}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-amber-800 underline underline-offset-4 hover:text-amber-900"
            >
              Vrbo
            </TrackedLink>
            .
          </p>
          <Link
            href="/reviews"
            className="mt-4 inline-flex font-semibold text-amber-800 underline underline-offset-4 hover:text-amber-900"
          >
            Read guest reviews by kind of stay
          </Link>
        </div>

        <div className="mb-10 grid gap-px overflow-hidden rounded-lg border border-stone-200 bg-stone-200 sm:grid-cols-3 lg:grid-cols-6">
          {RATINGS.map(([score, label]) => (
            <div key={label} className="bg-stone-50 p-5 text-center">
              <p className="font-serif text-3xl font-semibold text-stone-950">
                {score}
              </p>
              <p className="mt-1 text-xs font-semibold uppercase tracking-[0.14em] text-stone-600">
                {label}
              </p>
            </div>
          ))}
        </div>
        <p className="mb-10 text-sm text-stone-600">
          Airbnb category averages across {AIRBNB_COUNT} reviews. Airbnb
          lists the house as a{" "}
          <strong className="font-semibold text-stone-900">Guest Favorite</strong>{" "}
          — &ldquo;one of the most loved homes on Airbnb, according to
          guests&rdquo; — and the host as a Superhost with an 11-year record and
          a 100% response rate.
        </p>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {REVIEWS.map((r) => (
            <figure
              key={r.name + r.when}
              className="flex flex-col rounded-lg border border-stone-200 bg-stone-50 p-6"
            >
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className="h-4 w-4 fill-amber-500 text-amber-500"
                  />
                ))}
              </div>
              <blockquote className="mt-4 flex-1 text-base leading-7 text-stone-700">
                &ldquo;{r.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-5 border-t border-stone-200 pt-4 text-sm">
                <span className="font-semibold text-stone-950">{r.name}</span>
                <span className="text-stone-500"> · {r.from}</span>
                <p className="mt-0.5 text-xs uppercase tracking-[0.14em] text-stone-500">
                  {r.trip} · {r.when}
                </p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
