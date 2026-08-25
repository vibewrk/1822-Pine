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

export const metadata: Metadata = {
  title: "Rates & Policies",
  description:
    "From $1,600 per night for the entire 8-bedroom mansion — $200 per bedroom, $100 per guest at full occupancy. Whole-house pricing with a 2-night minimum.",
  alternates: { canonical: "/rates" },
  openGraph: {
    title: "Rates & Policies | The Rittenhouse Residence",
    description:
      "Whole-house pricing for the 8-bedroom mansion: from $1,600/night, 2-night minimum.",
    images: ["/images/airbnb/airbnb_03.jpg"],
  },
};

const rateFacts = [
  [
    "From $1,600 / night",
    "For the whole house — $200 per bedroom, $100 per guest at full occupancy, before date-specific taxes and fees.",
  ],
  [
    "2-night minimum",
    "Certain holidays, peak weekends, and high-demand dates may require longer stays.",
  ],
  [
    "Sleeps 16",
    "8 bedrooms — 2 kings and 6 queens on floors 2–4 — with 6 full baths.",
  ],
  [
    "One group per date",
    "The whole five-floor house is yours privately. There is no per-room pricing.",
  ],
];

const policyIcons = [CreditCard, CreditCard, Info, Clock, Calendar, KeyRound];

const policies = [
  ["Deposit", "A 50% deposit is required at reservation to secure the booking."],
  ["Balance", "The remaining balance is due 60 days before arrival."],
  [
    "Cancellation",
    "Cancellations require 60 days notice for a full refund of the deposit. Cancellations within 60 days of arrival are non-refundable.",
  ],
  ["Check-in & check-out", "Check-in is 4:00 PM and check-out is 10:00 AM."],
  [
    "Minimum stay",
    "2 nights, with longer minimums possible on holidays and peak weekends.",
  ],
  [
    "Live pricing",
    "Vrbo and Airbnb show date-specific rates, taxes, and fees before you reserve. A direct quote itemizes the same for your dates.",
  ],
];

const included = [
  "The entire 8-bedroom residence",
  "Six full bathrooms",
  "Two full kitchens",
  "Dining space for 16",
  "Two parlors and a full-size pool table",
  "Private roof deck",
  "Linens, towels, WiFi, central air, and washer/dryer",
];

const hotelColumn = [
  "Eight separate rooms scattered down hallways, at going rates times eight",
  "Eight bills, eight keys, eight checkout times to coordinate",
  "A public lobby as your only gathering space",
  "Breakfast for 16 at restaurant prices, every morning",
];

const houseColumn = [
  "One rate from $1,600/night for everyone, under one roof",
  "One reservation, one arrival, one front door",
  "Two parlors, a dining table that seats 16, and a private roof deck",
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
            From $1,600 per night for the entire house — $200 per bedroom, $100
            per guest at full occupancy. Get a direct quote in 24 hours, or see
            live pricing on Vrbo.
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
              The same terms apply whether you book direct or on a platform —
              including the part most listings bury: reservations become
              non-refundable inside 60 days of arrival.
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
              privately — five floors, two kitchens, and the practical setup
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
              One house vs. eight hotel rooms.
            </h2>
            <p className="mt-5 text-lg leading-8 text-stone-700">
              Sixteen people in hotels means eight rooms. Compare the nightly
              rate here against eight rooms at going rates for your dates — then
              compare what the money buys.
            </p>
          </div>
          <div className="mt-10 grid gap-px overflow-hidden rounded-lg border border-stone-200 bg-stone-200 lg:grid-cols-2">
            <div className="bg-stone-50 p-8">
              <Building2 className="h-6 w-6 text-stone-500" />
              <h3 className="mt-5 font-serif text-2xl font-semibold">Eight hotel rooms</h3>
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
          <Eyebrow>Direct Booking</Eyebrow>
          <h2 className="mt-4 font-serif text-4xl font-semibold leading-tight md:text-5xl">
            Get a direct quote in 24 hours.
          </h2>
          <p className="mt-5 text-lg leading-8 text-stone-700">
            Platforms add a guest service fee at checkout. A direct quote is the
            same house and dates without it — request one and compare totals
            yourself. We confirm availability, send a full quote, and hold your
            dates for 24 hours.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <TrackedLink
              href="/contact"
              event="direct_inquiry_click"
              eventParams={{ location: "rates_footer" }}
              className="inline-flex items-center justify-center gap-2 rounded-md bg-stone-950 px-7 py-4 text-base font-semibold text-white transition-colors hover:bg-stone-800"
            >
              Request a Direct Quote
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
