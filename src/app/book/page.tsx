import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  CalendarCheck,
  Clock,
  CreditCard,
  ExternalLink,
  Info,
  Star,
  Users,
} from "lucide-react";
import { BookingDeepLinks } from "@/components/BookingDeepLinks";
import { Eyebrow } from "@/components/Eyebrow";
import TrackedLink from "@/components/TrackedLink";

const VRBO_URL = "https://www.vrbo.com/757481";
const AIRBNB_URL = "https://www.airbnb.com/rooms/6000930";

export const metadata: Metadata = {
  title: "Book Your Stay",
  description:
    "Three ways to book the 8-bedroom Rittenhouse Residence: request a direct quote, or book instantly on Vrbo or Airbnb. From $1,600/night, sleeps 16.",
  alternates: { canonical: "/book" },
  openGraph: {
    title: "Book The Rittenhouse Residence",
    description:
      "The whole 8-bedroom mansion, two blocks from Rittenhouse Square. From $1,600/night.",
    images: ["/images/airbnb/airbnb_03.jpg"],
  },
};

const included = [
  [
    "Full Property Access",
    "All 5 floors, 8 bedrooms, 6 bathrooms, grand parlors, and the private roof deck.",
  ],
  [
    "Practical Amenities",
    "Gigabit WiFi, smart TVs, two full kitchens, washer/dryer, and central air.",
  ],
  [
    "Flexible Sleeping",
    "8 bedrooms — two kings and six queens — on floors 2–4 of the five-floor house.",
  ],
  [
    "Historic Experience",
    "Original fireplaces and millwork, plus a documented history reaching back to 1854.",
  ],
  [
    "Rittenhouse Location",
    "Two blocks from Rittenhouse Square, walkable to restaurants and attractions.",
  ],
  [
    "Dedicated Support",
    "Responsive host support before and throughout your stay.",
  ],
];

const stayBasics = [
  ["Check-in", "4:00 PM"],
  ["Check-out", "10:00 AM"],
  ["Minimum stay", "2 nights"],
  ["ID", "Valid government ID required at check-in"],
];

const paymentPolicies = [
  [
    "Deposit",
    "A 50% deposit is required at reservation to secure the booking.",
    CreditCard,
  ],
  ["Balance", "The remaining balance is due 60 days before arrival.", Clock],
  [
    "Cancellation",
    "Cancellations require 60 days notice for a full refund of the deposit. Cancellations within 60 days of arrival are non-refundable.",
    Info,
  ],
] as const;

export default function BookPage() {
  return (
    <div className="flex flex-col bg-[#fbfaf7] text-stone-950">
      <section className="relative bg-stone-950 py-20 md:py-28">
        <div className="absolute inset-0">
          <Image
            src="/images/property/DSC00082.jpg"
            alt="Master suite of The Rittenhouse Residence"
            fill
            sizes="100vw"
            className="object-cover opacity-20"
          />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <Eyebrow light className="mb-5">
            Book
          </Eyebrow>
          <h1 className="font-serif text-5xl font-semibold leading-tight text-white md:text-7xl">
            Three ways to book the house.
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-stone-200 md:text-xl">
            Request a direct quote, or book instantly on Vrbo or Airbnb. Same
            house, same dates — compare the totals and pick the path that suits
            you.
          </p>
        </div>
      </section>

      <section className="bg-[#fbfaf7] py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <Eyebrow>Your Options</Eyebrow>
            <h2 className="mt-4 font-serif text-4xl font-semibold leading-tight md:text-5xl">
              Honest tradeoffs, side by side.
            </h2>
          </div>
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            <article className="flex flex-col rounded-lg border-2 border-stone-950 bg-white p-7">
              <BadgeCheck className="h-6 w-6 text-amber-800" />
              <h3 className="mt-5 font-serif text-2xl font-semibold">Book direct</h3>
              <p className="mt-3 flex-1 leading-7 text-stone-700">
                A person answers within 24 hours with confirmed availability, a
                full quote, and a hold on your dates. No platform service fee — the
                same house and dates, so compare totals yourself. The tradeoff:
                it is not instant.
              </p>
              <TrackedLink
                href="/contact"
                event="direct_inquiry_click"
                eventParams={{ location: "book_paths" }}
                className="mt-6 inline-flex items-center justify-center gap-2 rounded-md bg-stone-950 px-6 py-3 text-base font-semibold text-white transition-colors hover:bg-stone-800"
              >
                Request a Direct Quote
              </TrackedLink>
            </article>
            <article className="flex flex-col rounded-lg border border-stone-200 bg-white p-7">
              <CalendarCheck className="h-6 w-6 text-amber-800" />
              <h3 className="mt-5 font-serif text-2xl font-semibold">Vrbo</h3>
              <p className="mt-3 flex-1 leading-7 text-stone-700">
                Instant online checkout with the live calendar and date-specific
                pricing in front of you. The tradeoff: platforms add a guest
                service fee at checkout.
              </p>
              <TrackedLink
                href={VRBO_URL}
                event="ota_click"
                eventParams={{ platform: "vrbo", location: "book_paths" }}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center justify-center gap-2 rounded-md border border-stone-300 bg-white px-6 py-3 text-base font-semibold text-stone-950 transition-colors hover:bg-stone-100"
              >
                Book on Vrbo
                <ExternalLink className="h-4 w-4" />
              </TrackedLink>
            </article>
            <article className="flex flex-col rounded-lg border border-stone-200 bg-white p-7">
              <Star className="h-6 w-6 text-amber-800" />
              <h3 className="mt-5 font-serif text-2xl font-semibold">Airbnb</h3>
              <p className="mt-3 flex-1 leading-7 text-stone-700">
                Instant booking where the reviews live — 4.89 from 93 reviews,
                as of Aug 2026. The same guest service fee applies at checkout.
              </p>
              <TrackedLink
                href={AIRBNB_URL}
                event="ota_click"
                eventParams={{ platform: "airbnb", location: "book_paths" }}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center justify-center gap-2 rounded-md border border-stone-300 bg-white px-6 py-3 text-base font-semibold text-stone-950 transition-colors hover:bg-stone-100"
              >
                Book on Airbnb
                <ExternalLink className="h-4 w-4" />
              </TrackedLink>
            </article>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Eyebrow className="justify-center">Your Dates</Eyebrow>
            <h2 className="mt-4 font-serif text-4xl font-semibold leading-tight md:text-5xl">
              Jump to the calendars with your dates.
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-stone-700">
              Pick dates and group size once. Airbnb opens with them prefilled;
              Vrbo opens to the listing calendar.
            </p>
          </div>
          <div className="mt-10">
            <BookingDeepLinks />
          </div>
        </div>
      </section>

      <section className="bg-stone-100 py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <Eyebrow>Included</Eyebrow>
            <h2 className="mt-4 font-serif text-4xl font-semibold leading-tight md:text-5xl">
              Every booking path gets the same house.
            </h2>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {included.map(([title, body]) => (
              <div key={title} className="rounded-lg border border-stone-200 bg-white p-6">
                <h3 className="font-serif text-xl font-semibold text-stone-950">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-stone-600">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <Eyebrow>Policies</Eyebrow>
            <h2 className="mt-4 font-serif text-4xl font-semibold leading-tight md:text-5xl">
              Booking policies.
            </h2>
          </div>

          <div className="mt-10 grid gap-px overflow-hidden rounded-lg border border-stone-200 bg-stone-200 md:grid-cols-2 lg:grid-cols-4">
            {stayBasics.map(([label, value]) => (
              <div key={label} className="bg-stone-50 p-6 text-center">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-stone-500">
                  {label}
                </p>
                <p className="mt-3 font-serif text-2xl font-semibold text-stone-950">
                  {value}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {paymentPolicies.map(([title, body, Icon]) => (
              <article key={title} className="rounded-lg border border-stone-200 bg-stone-50 p-6">
                <Icon className="h-6 w-6 text-amber-800" />
                <h3 className="mt-5 font-serif text-2xl font-semibold">{title}</h3>
                <p className="mt-3 leading-7 text-stone-700">{body}</p>
              </article>
            ))}
          </div>
          <p className="mt-6 text-sm leading-6 text-stone-600">
            The same terms apply on every booking path. See the{" "}
            <Link
              href="/faq#booking-payment"
              className="font-medium text-amber-800 underline underline-offset-4 hover:text-amber-900"
            >
              FAQ
            </Link>{" "}
            for complete details, or{" "}
            <Link
              href="/rates"
              className="font-medium text-amber-800 underline underline-offset-4 hover:text-amber-900"
            >
              the rates page
            </Link>{" "}
            for the whole-house pricing math.
          </p>
        </div>
      </section>

      <section className="bg-[#fbfaf7] py-16 md:py-20">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <Eyebrow className="justify-center">Direct Booking</Eyebrow>
          <h2 className="mt-4 font-serif text-4xl font-semibold leading-tight md:text-5xl">
            Sixteen people is a conversation, not a checkout.
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-stone-700">
            <Users className="mr-2 inline h-5 w-5 text-amber-800" />
            Send your dates and group size. Within 24 hours you get confirmed
            availability, a full direct quote, and a hold on your dates — then a
            rental agreement and 50% deposit secure the house.
          </p>
          <div className="mt-8 flex justify-center">
            <TrackedLink
              href="/contact"
              event="direct_inquiry_click"
              eventParams={{ location: "book_footer" }}
              className="inline-flex items-center justify-center gap-2 rounded-md bg-stone-950 px-8 py-4 text-base font-semibold text-white transition-colors hover:bg-stone-800"
            >
              Request a Direct Quote
              <ArrowRight className="h-5 w-5" />
            </TrackedLink>
          </div>
        </div>
      </section>
    </div>
  );
}
