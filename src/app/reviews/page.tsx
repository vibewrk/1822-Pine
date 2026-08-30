import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Award, Star } from "lucide-react";
import { Eyebrow } from "@/components/Eyebrow";
import TrackedLink from "@/components/TrackedLink";
import {
  AIRBNB_COUNT,
  AIRBNB_RATING,
  AIRBNB_URL,
  TOTAL_REVIEWS,
  VRBO_COUNT,
  VRBO_RATING,
  VRBO_URL,
} from "@/components/SocialProof";

// Guest reviews, transcribed verbatim from the Airbnb and Vrbo listings.
//
// WHY THIS PAGE IS STRUCTURED BY THEME:
// Real guest language is the best long-tail SEO on the site — phrases like
// "we never once had to get in a car" or "everyone had their own bedroom"
// match how people actually search, and no marketing copywriter produces them.
// The SEO weight is carried by the THEMED HEADINGS around the quotes, not by
// tags appended to them. Do NOT append keyword tags to a guest's words: it
// alters what they wrote, and to a search engine a keyword list bolted onto
// user content reads as stuffing. Headings + untouched quotes is both honest
// and more effective.
//
// SCHEMA: deliberately NO Review or AggregateRating JSON-LD here. Google does
// not allow a business to create review-rich-result markup about itself or
// aggregate ratings collected on Airbnb or Vrbo. The ratings and quotes remain
// visible social proof with direct links to their source platforms.
//
// Quotes are trimmed for length with ellipses, never reworded. Add new ones
// only by copying from the live listing.

export const metadata: Metadata = {
  title: "Philadelphia Group Stay Reviews",
  description:
    "Real Airbnb and Vrbo reviews from groups, wedding guests, and families who stayed in this 8-bedroom Philadelphia home near Rittenhouse Square.",
  alternates: { canonical: "/reviews" },
  openGraph: {
    title: "Guest Reviews | The Rittenhouse Residence",
    description: `${TOTAL_REVIEWS} reviews across Airbnb and Vrbo, in guests' own words.`,
    type: "article",
    images: ["/images/airbnb/airbnb_03.jpg"],
  },
};

type Review = {
  quote: string;
  name: string;
  from: string;
  when: string;
  trip: string;
  source: "Airbnb" | "Vrbo";
};

type Theme = {
  heading: string;
  intro: string;
  reviews: Review[];
};

const THEMES: Theme[] = [
  {
    heading: "Staying in Philadelphia with a large group",
    intro:
      "The reason most people find this house: sixteen people who want to be together without booking six hotel rooms.",
    reviews: [
      {
        quote:
          "Our group of 8 friends had a perfect weekend at Robertson's place… There was more than enough room for all eight of us, and everyone had their own bedroom and privacy. The beds were comfortable with nice linens. The kitchen and bathrooms were well stocked too. We spent most of our evenings up on the rooftop terrace looking out at the skyline.",
        name: "Colin",
        from: "Pittsburgh, Pennsylvania",
        when: "August 2026",
        trip: "Group trip",
        source: "Airbnb",
      },
      {
        quote:
          "The space for a large family was perfect! The surrounding area offered a variety of things to do for all guests and no one had to drive which was a bonus being in the city. I would definitely recommend this property to others. The owners were fantastic to work with.",
        name: "Mary",
        from: "Linfield, Pennsylvania",
        when: "June 2026",
        trip: "Family stay",
        source: "Airbnb",
      },
    ],
  },
  {
    heading: "Wedding weekends and family celebrations",
    intro:
      "Wedding parties and milestone gatherings are the most common reason groups book the whole house.",
    reviews: [
      {
        quote:
          "We rented this home for our wedding week, and it was absolutely perfect for our immediate family. The house was beautiful, spotless, and incredibly comfortable… With all the excitement and chaos that can come with a wedding, it was wonderful to have a home that felt peaceful, welcoming, and thoughtfully cared for. My dad kept saying that the Airbnb was an experience in itself, and we all agreed.",
        name: "Karlie",
        from: "Philadelphia, Pennsylvania",
        when: "June 2026",
        trip: "Wedding week",
        source: "Airbnb",
      },
      {
        quote:
          "A wonderful stay at this beautiful old house for our wedding weekend! Every room was delightful and unique. The kitchen and bathrooms were well-stocked, and the rooftop terrace had an amazing skyline view of Philly. Would recommend to anyone hosting a large group while in town!",
        name: "Sunny",
        from: "Rochester, Minnesota",
        when: "May 2026",
        trip: "Wedding weekend",
        source: "Airbnb",
      },
      {
        quote:
          "This residence was the perfect setting for our extended family to celebrate our daughter's college graduation. Its ideal location, just south of Rittenhouse Square, feels like a quiet residential community, but is within a very short walk to lots of fabulous restaurants, retail and green space, as well as the SEPTA station which we used extensively for transportation.",
        name: "Song",
        from: "13 years on Airbnb",
        when: "May 2026",
        trip: "College graduation",
        source: "Airbnb",
      },
    ],
  },
  {
    heading: "A historic house that still works as a modern one",
    intro:
      "The house is an 1850s townhouse. Guests consistently notice both the period detail and the fact that the kitchens and bathrooms are genuinely modern.",
    reviews: [
      {
        quote:
          "The residence has all the charm that you would expect from a mansion built in the 1800s — soaring ceilings in the entry and living room, a grand staircase and lots of intricate detailing throughout the house. But, it also has all the amenities associated with a new modern house, including thoughtfully renovated bathrooms and kitchens (yes there are two kitchen areas!). The spaces and furnishings are lovely — you are clearly in a loved home (not just an Ikea outfitted rental).",
        name: "Song",
        from: "13 years on Airbnb",
        when: "May 2026",
        trip: "Extended family",
        source: "Airbnb",
      },
      {
        quote:
          "The house is a beautiful old building with a lot of character, and every room felt a little different.",
        name: "Colin",
        from: "Pittsburgh, Pennsylvania",
        when: "August 2026",
        trip: "Group trip",
        source: "Airbnb",
      },
    ],
  },
  {
    heading: "Walking everywhere from Rittenhouse Square",
    intro:
      "Almost every review mentions the same thing: nobody needed a car.",
    reviews: [
      {
        quote:
          "It sits right in Rittenhouse Square, which turned out to be a great home base for exploring Philly. We never once had to get in a car, and there was plenty to do nearby for everyone.",
        name: "Colin",
        from: "Pittsburgh, Pennsylvania",
        when: "August 2026",
        trip: "Group trip",
        source: "Airbnb",
      },
      {
        quote:
          "Really wonderful stay in an amazing townhouse. Perfect location and plenty of space to spread out for the family. We'll be back!",
        name: "Brad",
        from: "New York, New York",
        when: "July 2026",
        trip: "Stayed with kids",
        source: "Airbnb",
      },
    ],
  },
];

const CATEGORY = [
  ["5.0", "Location"],
  ["4.9", "Cleanliness"],
  ["4.9", "Accuracy"],
  ["4.9", "Check-in"],
  ["4.8", "Communication"],
  ["4.7", "Value"],
] as const;

function ReviewCard({ r }: { r: Review }) {
  return (
    <figure className="flex flex-col rounded-lg border border-stone-200 bg-white p-6">
      <div className="flex items-center justify-between">
        <div className="flex gap-0.5">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star key={i} className="h-4 w-4 fill-amber-500 text-amber-500" />
          ))}
        </div>
        <span className="text-xs font-semibold uppercase tracking-[0.14em] text-stone-500">
          {r.source}
        </span>
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
  );
}

export default function ReviewsPage() {
  return (
    <div className="flex flex-col bg-[#fbfaf7] text-stone-950">
      <section className="bg-stone-950 py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Eyebrow light className="mb-5">
            Guest Reviews
          </Eyebrow>
          <h1 className="max-w-4xl font-serif text-5xl font-semibold leading-tight text-white md:text-7xl">
            What guests actually say.
          </h1>
          <p className="mt-7 max-w-3xl text-lg leading-8 text-stone-200 md:text-xl">
            {AIRBNB_RATING} across {AIRBNB_COUNT} Airbnb reviews and{" "}
            {VRBO_RATING}/10 across {VRBO_COUNT} on Vrbo — {TOTAL_REVIEWS} in
            total. Every quote on this page is a guest&apos;s own words, copied
            from the platform they left it on and trimmed only for length.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <TrackedLink
              href={AIRBNB_URL}
              event="ota_click"
              eventParams={{ platform: "airbnb", location: "reviews_hero" }}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-md bg-white px-7 py-4 text-base font-semibold text-stone-950 transition-colors hover:bg-stone-100"
            >
              Read all {AIRBNB_COUNT} on Airbnb
              <ArrowRight className="h-5 w-5" />
            </TrackedLink>
            <TrackedLink
              href={VRBO_URL}
              event="ota_click"
              eventParams={{ platform: "vrbo", location: "reviews_hero" }}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-md border border-white/70 px-7 py-4 text-base font-semibold text-white transition-colors hover:bg-white/10"
            >
              Read all {VRBO_COUNT} on Vrbo
              <ArrowRight className="h-5 w-5" />
            </TrackedLink>
          </div>
        </div>
      </section>

      <section className="bg-white py-12 md:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-px overflow-hidden rounded-lg border border-stone-200 bg-stone-200 sm:grid-cols-3 lg:grid-cols-6">
            {CATEGORY.map(([score, label]) => (
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
          <p className="mt-5 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-stone-600">
            <Award className="h-4 w-4 text-amber-700" />
            Airbnb category averages across {AIRBNB_COUNT} reviews. The listing
            is marked a <strong className="font-semibold text-stone-900">Guest
            Favorite</strong> — &ldquo;one of the most loved homes on
            Airbnb&rdquo; — hosted by a Superhost with 11 years of hosting and a
            100% response rate.
          </p>
        </div>
      </section>

      {THEMES.map((theme, i) => (
        <section
          key={theme.heading}
          className={i % 2 === 0 ? "bg-[#fbfaf7] py-16 md:py-20" : "bg-white py-16 md:py-20"}
        >
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-9 max-w-3xl">
              <h2 className="font-serif text-3xl font-semibold leading-tight text-stone-950 md:text-4xl">
                {theme.heading}
              </h2>
              <p className="mt-4 text-lg leading-8 text-stone-700">
                {theme.intro}
              </p>
            </div>
            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {theme.reviews.map((r) => (
                <ReviewCard key={r.name + r.when + r.quote.slice(0, 24)} r={r} />
              ))}
            </div>
          </div>
        </section>
      ))}

      <section className="bg-stone-100 py-16 md:py-24">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <Eyebrow className="justify-center">Booking</Eyebrow>
          <h2 className="mt-4 font-serif text-4xl font-semibold leading-tight md:text-5xl">
            Book on Airbnb or Vrbo.
          </h2>
          <p className="mt-5 text-lg leading-8 text-stone-700">
            Those are the only two ways to reserve the house, and both show
            date-specific rates and taxes in full before you confirm — the
            price you see at checkout is the price. Questions first?{" "}
            <Link
              href="/contact"
              className="font-semibold text-amber-800 underline underline-offset-4 hover:text-amber-900"
            >
              Ask us
            </Link>{" "}
            and we reply within 24 hours.
          </p>
          <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
            <TrackedLink
              href={AIRBNB_URL}
              event="ota_click"
              eventParams={{ platform: "airbnb", location: "reviews_footer" }}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-md bg-stone-950 px-8 py-4 text-base font-semibold text-white transition-colors hover:bg-stone-800"
            >
              Check dates on Airbnb
            </TrackedLink>
            <TrackedLink
              href={VRBO_URL}
              event="ota_click"
              eventParams={{ platform: "vrbo", location: "reviews_footer" }}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-md border border-stone-300 bg-white px-8 py-4 text-base font-semibold text-stone-950 transition-colors hover:border-amber-800 hover:text-amber-900"
            >
              Check dates on Vrbo
            </TrackedLink>
          </div>
        </div>
      </section>
    </div>
  );
}
