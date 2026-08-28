import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Building2,
  Calendar,
  CheckCircle2,
  Clock,
  CreditCard,
  Home,
  Info,
  KeyRound,
  Users,
} from "lucide-react";
import { BookingCTA } from "@/components/BookingCTA";
import { Eyebrow } from "@/components/Eyebrow";
import TrackedLink from "@/components/TrackedLink";
import { PROPERTY_FACTS } from "@/lib/facts";
import { PRICING_COPY } from "@/lib/pricing";

export const metadata: Metadata = {
  title: "Rates & Policies",
  description: `${PRICING_COPY.long} Whole-house pricing for an ${PROPERTY_FACTS.bedrooms}-bedroom Philadelphia townhouse with a ${PROPERTY_FACTS.minimumStayNights}-night minimum.`,
  alternates: { canonical: "/rates" },
  openGraph: {
    title: "Rates & Policies | The Rittenhouse Residence",
    description: `${PRICING_COPY.short} ${PROPERTY_FACTS.minimumStayNights}-night minimum.`,
    images: ["/images/airbnb/airbnb_03.jpg"],
  },
};

const rateFacts = [
  [
    `Select weekdays may be available from about ${PRICING_COPY.sampleRate}`,
    `${PRICING_COPY.example} Exact pricing varies by date.`,
  ],
  [
    `${PROPERTY_FACTS.minimumStayNights}-night minimum`,
    "Certain holidays, peak weekends, and high-demand dates may require longer stays.",
  ],
  [
    `Sleeps ${PROPERTY_FACTS.sleeps}`,
    `${PROPERTY_FACTS.bedrooms} bedrooms on floors 2–4 — ${PROPERTY_FACTS.beds.king} kings, ${PROPERTY_FACTS.beds.queen} queens and a double — with ${PROPERTY_FACTS.fullBathrooms} full baths and a powder room.`,
  ],
  [
    "One group per date",
    `The whole ${PROPERTY_FACTS.stories}-story house is yours privately. There is no per-room pricing.`,
  ],
];

const policyIcons = [CreditCard, CreditCard, Info, Clock, Calendar, KeyRound];

const policies = [
  [
    "Personal quote",
    "Within 24 hours, we reply with availability, an itemized total for your dates, and clear booking next steps.",
  ],
  [
    "Secure online checkout",
    "Airbnb and Vrbo show the current total, payment schedule, and cancellation terms before you reserve.",
  ],
  [
    "Cancellation terms",
    "Review the policy shown for your dates and booking path before you reserve; those are the terms that apply to your stay.",
  ],
  [
    "Check-in & check-out",
    `Check-in is ${PROPERTY_FACTS.checkIn} and check-out is ${PROPERTY_FACTS.checkOut}.`,
  ],
  [
    "Minimum stay",
    `${PROPERTY_FACTS.minimumStayNights} nights, with longer minimums possible on holidays and peak weekends.`,
  ],
  [
    "Live pricing",
    "Airbnb and Vrbo show date-specific rates, taxes, fees, and the full checkout total before you reserve.",
  ],
];

const included = [
  `The entire ${PROPERTY_FACTS.bedrooms}-bedroom residence`,
  `${PROPERTY_FACTS.fullBathrooms} full bathrooms and a powder room`,
  "Two full kitchens",
  `Dining space for ${PROPERTY_FACTS.sleeps}`,
  "Two parlors and a full-size pool table",
  "Private roof deck",
  "Linens, towels, WiFi, central air, and washer/dryer",
];

const hotelColumn = [
  `${PROPERTY_FACTS.bedrooms} separate rooms scattered down hallways, at going rates times ${PROPERTY_FACTS.bedrooms}`,
  `${PROPERTY_FACTS.bedrooms} bills, ${PROPERTY_FACTS.bedrooms} keys, ${PROPERTY_FACTS.bedrooms} checkout times to coordinate`,
  "A public lobby as your only gathering space",
  `Breakfast for ${PROPERTY_FACTS.sleeps} at restaurant prices, every morning`,
];

const houseColumn = [
  PRICING_COPY.example,
  "One reservation, one arrival, one front door",
  `Two parlors, a dining table that seats ${PROPERTY_FACTS.sleeps}, and a private roof deck`,
  "Two full kitchens for group breakfasts on your own schedule",
];

export default function RatesPage() {
  return (
    <div className="flex flex-col bg-[#fbfaf7] text-stone-950">
      <section className="bg-stone-950 py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <Eyebrow light className="mb-5">
            Rates
          </Eyebrow>
          <h1 className="font-serif text-5xl font-semibold leading-tight text-white md:text-7xl">
            Simple whole-house pricing.
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-stone-200 md:text-xl">
            {PRICING_COPY.long} Ask for a personal quote and we will reply within
            24 hours, or open Airbnb or Vrbo for live pricing and secure checkout.
          </p>
        </div>
      </section>

      <section className="bg-white py-8">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <BookingCTA />
        </div>
      </section>

      <section className="bg-[#fbfaf7] py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-px overflow-hidden rounded-lg border border-stone-200 bg-stone-200 md:grid-cols-2 lg:grid-cols-4">
            {rateFacts.map(([value, label]) => (
              <div key={value} className="bg-stone-50 p-6">
                <p className="font-serif text-3xl font-semibold text-stone-950">{value}</p>
                <p className="mt-3 text-sm leading-6 text-stone-600">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.85fr_1.15fr] lg:px-8">
          <div>
            <Eyebrow>Policies</Eyebrow>
            <h2 className="mt-4 font-serif text-4xl font-semibold leading-tight md:text-5xl">
              What to expect before you reserve.
            </h2>
            <p className="mt-5 text-lg leading-8 text-stone-700">
              The house basics stay simple. Your exact total, payment schedule,
              and cancellation terms will appear with the personal quote or
              platform checkout for your dates.
            </p>
          </div>
          <div className="grid gap-5 md:grid-cols-2">
            {policies.map(([title, body], index) => {
              const Icon = policyIcons[index];
              return (
                <article key={title} className="rounded-lg border border-stone-200 bg-stone-50 p-6">
                  <Icon className="h-6 w-6 text-amber-800" />
                  <h3 className="mt-5 font-serif text-2xl font-semibold">{title}</h3>
                  <p className="mt-3 leading-7 text-stone-700">{body}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-stone-100 py-16 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div>
            <Eyebrow>Included</Eyebrow>
            <h2 className="mt-4 font-serif text-4xl font-semibold leading-tight md:text-5xl">
              One rate for the whole house.
            </h2>
            <p className="mt-5 text-lg leading-8 text-stone-700">
              There is no per-room pricing. Your group has the residence
              privately — four stories, two kitchens, and the practical setup
              that makes a large stay work.
            </p>
          </div>
          <div className="rounded-lg border border-stone-200 bg-white p-6">
            <Users className="h-6 w-6 text-amber-800" />
            <ul className="mt-6 grid gap-4 sm:grid-cols-2">
              {included.map((item) => (
                <li key={item} className="flex gap-3 text-sm leading-6 text-stone-700">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 flex-none text-amber-800" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <Eyebrow>The Math</Eyebrow>
            <h2 className="mt-4 font-serif text-4xl font-semibold leading-tight md:text-5xl">
              One house vs. {PROPERTY_FACTS.bedrooms} hotel rooms.
            </h2>
            <p className="mt-5 text-lg leading-8 text-stone-700">
              {PROPERTY_FACTS.sleeps} people in hotels means{" "}
              {PROPERTY_FACTS.bedrooms} rooms. Compare the nightly rate here
              against {PROPERTY_FACTS.bedrooms} rooms at going rates for your
              dates — then compare what the money buys.
            </p>
          </div>
          <div className="mt-10 grid gap-px overflow-hidden rounded-lg border border-stone-200 bg-stone-200 lg:grid-cols-2">
            <div className="bg-stone-50 p-8">
              <Building2 className="h-6 w-6 text-stone-500" />
              <h3 className="mt-5 font-serif text-2xl font-semibold">
                {PROPERTY_FACTS.bedrooms} hotel rooms
              </h3>
              <ul className="mt-5 grid gap-3">
                {hotelColumn.map((item) => (
                  <li key={item} className="flex gap-3 text-sm leading-6 text-stone-600">
                    <span className="mt-2.5 h-1 w-1 flex-none rounded-full bg-stone-400" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white p-8">
              <Home className="h-6 w-6 text-amber-800" />
              <h3 className="mt-5 font-serif text-2xl font-semibold">One house</h3>
              <ul className="mt-5 grid gap-3">
                {houseColumn.map((item) => (
                  <li key={item} className="flex gap-3 text-sm leading-6 text-stone-700">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 flex-none text-amber-800" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="mt-8 flex flex-col items-start justify-between gap-6 rounded-lg border border-stone-200 bg-stone-50 p-6 sm:p-8 lg:flex-row lg:items-center">
            <p className="max-w-2xl leading-7 text-stone-700">
              <span className="font-semibold text-stone-950">
                One house, one group per date.
              </span>{" "}
              When your dates are booked, they are gone. Peak city weekends book
              furthest out and may carry longer minimums — if your dates are
              flexible, say so in your inquiry.
            </p>
            <Link
              href="/hotel-alternative"
              className="inline-flex items-center gap-2 font-semibold text-amber-800 underline underline-offset-4 hover:text-amber-900"
            >
              See the full hotel comparison
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-[#fbfaf7] py-16 md:py-20">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <Eyebrow>Personal Quote</Eyebrow>
          <h2 className="mt-4 font-serif text-4xl font-semibold leading-tight md:text-5xl">
            Let&apos;s talk about your dates.
          </h2>
          <p className="mt-5 text-lg leading-8 text-stone-700">
            Tell us who is coming and what you are planning. Within 24 hours,
            we will reply with availability, an itemized personal quote, and
            clear next steps. For immediate online checkout, Airbnb and Vrbo
            have live calendars.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <TrackedLink
              href="/contact"
              event="direct_inquiry_click"
              eventParams={{ location: "rates_footer" }}
              className="inline-flex items-center justify-center gap-2 rounded-md bg-stone-950 px-7 py-4 text-base font-semibold text-white transition-colors hover:bg-stone-800"
            >
              Request a Personal Quote
            </TrackedLink>
            <Link
              href="/book"
              className="inline-flex items-center justify-center gap-2 rounded-md border border-stone-300 bg-white px-7 py-4 text-base font-semibold text-stone-950 transition-colors hover:border-amber-800 hover:text-amber-900"
            >
              See All Booking Options
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
