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
import {
  BOOKING_LINKS,
  PRIMARY_PROPERTY_IMAGE,
  PROPERTY_FACTS,
  REVIEW_FACTS,
} from "@/lib/facts";
import { PRICING_COPY } from "@/lib/pricing";

export const metadata: Metadata = {
  title: "Book Your Stay",
  description: `Ask about your dates for a personal quote, or use Airbnb or Vrbo for live calendars and secure checkout. ${PRICING_COPY.short} Sleeps ${PROPERTY_FACTS.sleeps}.`,
  alternates: { canonical: "/book" },
  openGraph: {
    title: "Book The Rittenhouse Residence",
    description: `The whole 8-bedroom townhouse, two blocks from Rittenhouse Square. ${PRICING_COPY.short}`,
    images: [PRIMARY_PROPERTY_IMAGE],
  },
};

const included = [
  [
    "Full Property Access",
    `The whole house — ${PROPERTY_FACTS.bedrooms} bedrooms, ${PROPERTY_FACTS.fullBathrooms} full baths and a powder room, three shared living rooms, and the private roof deck.`,
  ],
  [
    "Practical Amenities",
    "Gigabit WiFi service, smart TVs, two full kitchens, washer/dryer, and central air.",
  ],
  [
    "Flexible Sleeping",
    `${PROPERTY_FACTS.bedrooms} bedrooms — two kings and six queens — on floors 2–4 of the four-story house.`,
  ],
  [
    "Historic Experience",
    `Original fireplaces and millwork, with a house story documented from ${PROPERTY_FACTS.documentedFromYear}.`,
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
  ["Check-in", PROPERTY_FACTS.checkIn],
  ["Check-out", PROPERTY_FACTS.checkOut],
  ["Minimum stay", `${PROPERTY_FACTS.minimumStayNights} nights`],
  ["ID", "Valid government ID required at check-in"],
];

const paymentPolicies = [
  [
    "Personal quote",
    "Within 24 hours, we reply with availability, an itemized total for your dates, and clear booking next steps.",
    Clock,
  ],
  [
    "Secure checkout",
    "Airbnb and Vrbo show the date-specific total, payment schedule, and cancellation terms before you reserve.",
    CreditCard,
  ],
  [
    "Cancellation terms",
    "Review the policy shown for the booking path and dates you choose before you reserve.",
    Info,
  ],
] as const;

export default function BookPage() {
  return (
    <div className="flex flex-col bg-[#fbfaf7] text-stone-950">
      <section className="relative bg-stone-950 py-20 md:py-28">
        <div className="absolute inset-0">
          <Image
            src="/images/property-tour/28-bedroom-1-02.webp"
            alt="Bedroom 1, the principal suite at The Rittenhouse Residence"
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
            Three ways to plan your stay.
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-stone-200 md:text-xl">
            Ask us about your dates for a personal quote, or open Vrbo or Airbnb
            for live calendars and secure online checkout.
          </p>
        </div>
      </section>

      <section className="bg-[#fbfaf7] py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <Eyebrow>Your Options</Eyebrow>
            <h2 className="mt-4 font-serif text-4xl font-semibold leading-tight md:text-5xl">
              Choose the path that fits your group.
            </h2>
          </div>
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            <article className="flex flex-col rounded-lg border-2 border-stone-950 bg-white p-7">
              <BadgeCheck className="h-6 w-6 text-amber-800" />
              <h3 className="mt-5 font-serif text-2xl font-semibold">
                Ask about your dates
              </h3>
              <p className="mt-3 flex-1 leading-7 text-stone-700">
                Tell us about your group and what is bringing everyone to
                Philadelphia. Within 24 hours, a person replies with
                availability, an itemized personal quote, and clear next steps.
              </p>
              <TrackedLink
                href="/contact"
                event="direct_inquiry_click"
                eventParams={{ location: "book_paths" }}
                className="mt-6 inline-flex items-center justify-center gap-2 rounded-md bg-stone-950 px-6 py-3 text-base font-semibold text-white transition-colors hover:bg-stone-800"
              >
                Request a Personal Quote
              </TrackedLink>
            </article>
            <article className="flex flex-col rounded-lg border border-stone-200 bg-white p-7">
              <CalendarCheck className="h-6 w-6 text-amber-800" />
              <h3 className="mt-5 font-serif text-2xl font-semibold">Vrbo</h3>
              <p className="mt-3 flex-1 leading-7 text-stone-700">
                See the live calendar, date-specific total, payment schedule,
                and cancellation terms before you use secure online checkout.
              </p>
              <TrackedLink
                href={BOOKING_LINKS.vrbo}
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
                See the live calendar and read {REVIEW_FACTS.airbnb.count} guest
                reviews, with date-specific pricing and secure online checkout.
              </p>
              <TrackedLink
                href={BOOKING_LINKS.airbnb}
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
              One house, entirely for your group.
            </h2>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {included.map(([title, body]) => (
              <div
                key={title}
                className="rounded-lg border border-stone-200 bg-white p-6"
              >
                <h3 className="font-serif text-xl font-semibold text-stone-950">
                  {title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-stone-600">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <Eyebrow>Before You Reserve</Eyebrow>
            <h2 className="mt-4 font-serif text-4xl font-semibold leading-tight md:text-5xl">
              The practical details, up front.
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
              <article
                key={title}
                className="rounded-lg border border-stone-200 bg-stone-50 p-6"
              >
                <Icon className="h-6 w-6 text-amber-800" />
                <h3 className="mt-5 font-serif text-2xl font-semibold">
                  {title}
                </h3>
                <p className="mt-3 leading-7 text-stone-700">{body}</p>
              </article>
            ))}
          </div>
          <p className="mt-6 text-sm leading-6 text-stone-600">
            The exact total and terms appear with the booking path you choose.
            See the{" "}
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
          <Eyebrow className="justify-center">Personal Quote</Eyebrow>
          <h2 className="mt-4 font-serif text-4xl font-semibold leading-tight md:text-5xl">
            A stay this size deserves a real conversation.
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-stone-700">
            <Users className="mr-2 inline h-5 w-5 text-amber-800" />
            Send your dates and group size. Within 24 hours, a person will reply
            with availability, an itemized personal quote, and the next steps
            for your stay.
          </p>
          <div className="mt-8 flex justify-center">
            <TrackedLink
              href="/contact"
              event="direct_inquiry_click"
              eventParams={{ location: "book_footer" }}
              className="inline-flex items-center justify-center gap-2 rounded-md bg-stone-950 px-8 py-4 text-base font-semibold text-white transition-colors hover:bg-stone-800"
            >
              Ask About Your Dates
              <ArrowRight className="h-5 w-5" />
            </TrackedLink>
          </div>
        </div>
      </section>
    </div>
  );
}
