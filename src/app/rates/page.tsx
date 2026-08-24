import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Calendar, CheckCircle2, CreditCard, Info, Users } from "lucide-react";
import { BookingCTA } from "@/components/BookingCTA";
import { Eyebrow } from "@/components/Eyebrow";

export const metadata: Metadata = {
  title: "Rates & Pricing",
  description:
    "Rates and booking policies for The Rittenhouse Residence: from $1,600/night, 2-night minimum, whole-house pricing, deposits, cancellation, and live Vrbo availability.",
};

const rateFacts = [
  ["From $1,600 / night", "Starting rate before date-specific taxes, fees, and seasonal changes."],
  ["2-night minimum", "Certain holidays, peak weekends, and high-demand dates may require longer stays."],
  ["Sleeps 21", "The rate is for the whole house, not per room."],
  ["8 bedrooms · 6 baths", "Five floors of private space for one group."],
];

const policies = [
  ["Deposit", "A 50% deposit is required at reservation to secure the booking."],
  ["Balance", "The remaining balance is due 60 days before arrival."],
  ["Cancellation", "Cancellations require 60 days notice for a full refund of the deposit."],
  ["Live pricing", "Vrbo shows the current rate, taxes, fees, minimum stay, and available dates before you reserve."],
];

const included = [
  "The entire 8-bedroom residence",
  "Six full bathrooms",
  "Two full kitchens",
  "Dining space for 21",
  "Two parlors and a full-size pool table",
  "Private roof deck",
  "Linens, towels, WiFi, central air, and washer/dryer",
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
            Simple pricing, live availability.
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-stone-200 md:text-xl">
            The Rittenhouse Residence starts at $1,600 per night. Final pricing changes by date, season, length of stay, taxes, and platform fees, so the live quote belongs on Vrbo.
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
              These are the booking basics mirrored from the booking page. Vrbo is still the source of truth for the exact quote and date rules.
            </p>
          </div>
          <div className="grid gap-5 md:grid-cols-2">
            {policies.map(([title, body], index) => {
              const Icon = index < 2 ? CreditCard : index === 2 ? Info : Calendar;
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
              There is no per-room pricing. Your group has the residence privately, with the rooms and practical setup that make a large stay work.
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

      <section className="bg-[#fbfaf7] py-16 md:py-20">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <Eyebrow>Direct Booking</Eyebrow>
          <h2 className="mt-4 font-serif text-4xl font-semibold leading-tight md:text-5xl">
            Direct booking is coming soon.
          </h2>
          <p className="mt-5 text-lg leading-8 text-stone-700">
            For now, use Vrbo for live availability and secure checkout. For group questions that are not answered there, contact us and we will route you to the right next step.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              href="/book"
              className="inline-flex items-center justify-center gap-2 rounded-md bg-stone-950 px-7 py-4 text-base font-semibold text-white transition-colors hover:bg-stone-800"
            >
              Check Availability
              <ArrowRight className="h-5 w-5" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-md border border-stone-300 bg-white px-7 py-4 text-base font-semibold text-stone-950 transition-colors hover:border-amber-800 hover:text-amber-900"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
