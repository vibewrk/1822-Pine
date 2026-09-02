import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Calendar, CheckCircle2 } from "lucide-react";
import { Eyebrow } from "@/components/Eyebrow";
import { PROPERTY_FACTS } from "@/lib/facts";
import { PRICING_COPY } from "@/lib/pricing";

export const metadata: Metadata = {
  title: "Frequently Asked Questions",
  description:
    `Answers about pricing, booking, check-in, parking, house rules, accessibility, and group stays at an ${PROPERTY_FACTS.bedrooms}-bedroom Philadelphia townhouse near Rittenhouse Square.`,
  alternates: { canonical: "/faq" },
};

const faqSections = [
  {
    id: "booking-payment",
    title: "Booking & payment",
    questions: [
      {
        q: "How do I check availability?",
        a: "Use the booking page to open the live Airbnb or Vrbo calendar. Both show current availability and date-specific totals before checkout. You can also send us your dates for a personal reply within 24 hours.",
      },
      {
        q: "What is the minimum stay?",
        a: `The standard minimum is ${PROPERTY_FACTS.minimumStayNights} nights. Peak weekends, holidays, and high-demand periods may require a longer stay.`,
      },
      {
        q: "What does the house cost?",
        a: PRICING_COPY.long,
      },
      {
        q: "When is payment due?",
        a: "Airbnb or Vrbo will show the payment schedule for your dates before you reserve. If you request a personal quote, the reply will include your itemized total and clear booking next steps.",
      },
      {
        q: "What is the cancellation policy?",
        a: "Cancellation terms depend on the booking path and dates you choose. Review the policy shown with your quote or during Airbnb or Vrbo checkout before you reserve.",
      },
      {
        q: "Which booking path should I choose?",
        a: "Send an inquiry if you would like a person to review your dates and group needs. Choose Airbnb or Vrbo if you prefer a live calendar and secure online checkout right away.",
      },
      {
        q: "Can I book through this website?",
        a: "The website accepts inquiries but does not have on-site checkout. Send your dates and group size and, within 24 hours, we will reply with availability, an itemized personal quote, and next steps. Airbnb and Vrbo provide live calendars and secure online checkout.",
      },
    ],
  },
  {
    id: "house",
    title: "The house",
    questions: [
      {
        q: "How many guests can stay?",
        a: `The house sleeps up to ${PROPERTY_FACTS.sleeps} guests across ${PROPERTY_FACTS.bedrooms} bedrooms, ${PROPERTY_FACTS.fullBathrooms} full bathrooms, and a powder room.`,
      },
      {
        q: "Do we rent the whole house?",
        a: "Yes. The Rittenhouse Residence is rented as a whole house, not by the room.",
      },
      {
        q: "How is the house arranged?",
        a: "The residence is four stories — five the way the front stacks, because the rear sits on shallower floors — with three shared living rooms, a private sitting room within the principal suite, a dining room for 16, two full kitchens, bedrooms on the upper floors, and a private roof deck.",
      },
      {
        q: "What amenities are included?",
        a: "Linens, towels, gigabit WiFi service (measured at 351 Mbps in Airbnb's speed test; it varies by floor in a house this size), smart TVs, washer/dryer, central air, two full kitchens, dining space for 16, and the private roof deck are included.",
      },
      {
        q: "Who decides which guest gets which bedroom?",
        a: "You do — the whole house is yours, so room assignments are up to your group. The room planner lists every bedroom with its bed, floor, and bath, plus a printable sheet for assigning all eight rooms.",
      },
    ],
  },
  {
    id: "your-stay",
    title: "Your stay",
    questions: [
      {
        q: "What time is check-in and check-out?",
        a: `Check-in is ${PROPERTY_FACTS.checkIn} and check-out is ${PROPERTY_FACTS.checkOut}. Early arrival or late departure may be available only when the calendar allows it.`,
      },
      {
        q: "Is ID required?",
        a: "Yes. A valid government ID is required at check-in.",
      },
      {
        q: "Are there quiet hours?",
        a: "Yes — 10pm on weeknights, 11pm on Friday and Saturday. During those hours noise sensors flag anything sustained above 70 decibels, which is a generous ceiling: a full house at dinner sits well under it. They read volume only and record no audio. Full rules are on our house rules page, published before you book.",
      },
      {
        q: "Is smoking allowed?",
        a: "No. Smoking and vaping are not permitted anywhere on the property.",
      },
      {
        q: "Are parties allowed?",
        a: "No — we follow the standard no-party rules both Airbnb and Vrbo apply. The house is for the group booked on the reservation. Day visitors within reason are fine, and wedding parties getting ready here are one of our favorite uses of the house; just tell us if you are expecting more than a few extra people.",
      },
      {
        q: "Are pets allowed?",
        a: "No. Pets are not permitted at the residence.",
      },
      {
        q: "Can we drop luggage before the 4:00 PM check-in?",
        a: "Ask your host when booking. An early luggage drop depends on the day's turnover, and Waverly Street at the rear of the house is often the practical spot to unload — we confirm what is possible for your dates.",
      },
    ],
  },
  {
    id: "location-parking",
    title: "Location & parking",
    questions: [
      {
        q: "Where is the house?",
        a: "The house is on the 1800 block of Pine Street in Center City Philadelphia, two blocks from Rittenhouse Square. The exact address is shared when you book.",
      },
      {
        q: "Is parking available?",
        a: "Several garages are within two blocks. We send current garage options before check-in instead of publishing rates that may go stale.",
      },
      {
        q: "Can we unload luggage at the house?",
        a: "Yes. Waverly Street can be useful for luggage drop-off before you park, especially for larger groups.",
      },
      {
        q: "Do we need a car?",
        a: "Most guests do not need one for a Center City stay. Restaurants, shops, museums, SEPTA, and Rittenhouse Square are walkable from Pine Street.",
      },
      {
        q: "Where can a group of 12 to 16 have dinner together?",
        a: "Reserve one anchor dinner well ahead, split into smaller tables on the other nights, or eat at the house — the dining room seats 16 and there are two full kitchens. The group dining guide walks through all three plays.",
      },
    ],
  },
  {
    id: "accessibility",
    title: "Accessibility",
    questions: [
      {
        q: "Is there an elevator?",
        a: "No. The house is a historic four-story townhouse with stairs between floors and no elevator.",
      },
      {
        q: "Are bedrooms on the first floor?",
        a: "No. Bedrooms are on the upper floors. Guests with mobility concerns should contact us before booking so we can discuss the layout plainly.",
      },
      {
        q: "Where can I read more accessibility details?",
        a: "The accessibility page summarizes the historic layout, stairs, entrances, and practical considerations before arrival.",
      },
    ],
  },
];

function FAQPageJsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqSections.flatMap((section) =>
      section.questions.map((item) => ({
        "@type": "Question",
        name: item.q,
        acceptedAnswer: {
          "@type": "Answer",
          text: item.a,
        },
      }))
    ),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export default function FaqPage() {
  return (
    <>
      <FAQPageJsonLd />
      <div className="flex flex-col bg-[#fbfaf7] text-stone-950">
        <section className="bg-stone-950 py-20 md:py-28">
          <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
            <Eyebrow light className="mb-5">
              FAQ
            </Eyebrow>
            <h1 className="font-serif text-5xl font-semibold leading-tight text-white md:text-7xl">
              Practical answers before you book.
            </h1>
            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-stone-200 md:text-xl">
              Booking, pricing, house rules, parking, and what it is like to
              gather in a four-story historic townhouse whose story is documented from {PROPERTY_FACTS.documentedFromYear}.
            </p>
          </div>
        </section>

        <section className="border-b border-stone-200 bg-white py-6">
          <div className="mx-auto flex max-w-7xl flex-wrap justify-center gap-x-5 gap-y-3 px-4 sm:px-6 lg:px-8">
            {faqSections.map((section) => (
              <a
                key={section.id}
                href={`#${section.id}`}
                className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-stone-700 transition-colors hover:text-amber-800"
              >
                <CheckCircle2 className="h-3.5 w-3.5 text-amber-800" />
                {section.title}
              </a>
            ))}
          </div>
        </section>

        <section className="bg-[#fbfaf7] py-16 md:py-24">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="space-y-14">
              {faqSections.map((section) => (
                <section key={section.id} id={section.id} className="scroll-mt-24">
                  <Eyebrow>{section.title}</Eyebrow>
                  <div className="mt-6 divide-y divide-stone-200 overflow-hidden rounded-lg border border-stone-200 bg-white">
                    {section.questions.map((item) => (
                      <article key={item.q} className="p-6">
                        <h2 className="font-serif text-2xl font-semibold text-stone-950">
                          {item.q}
                        </h2>
                        <p className="mt-3 leading-7 text-stone-700">{item.a}</p>
                        {item.q === "How do I check availability?" && (
                          <Link
                            href="/book"
                            className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-amber-800 transition-colors hover:text-amber-900"
                          >
                            Open booking page
                            <ArrowRight className="h-4 w-4" />
                          </Link>
                        )}
                        {item.q === "Who decides which guest gets which bedroom?" && (
                          <Link
                            href="/stay/rooms"
                            className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-amber-800 transition-colors hover:text-amber-900"
                          >
                            Open the room planner
                            <ArrowRight className="h-4 w-4" />
                          </Link>
                        )}
                        {item.q === "Where can a group of 12 to 16 have dinner together?" && (
                          <Link
                            href="/neighborhood/group-dining"
                            className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-amber-800 transition-colors hover:text-amber-900"
                          >
                            Read the group dining guide
                            <ArrowRight className="h-4 w-4" />
                          </Link>
                        )}
                        {item.q === "Where can I read more accessibility details?" && (
                          <Link
                            href="/accessibility"
                            className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-amber-800 transition-colors hover:text-amber-900"
                          >
                            Read accessibility details
                            <ArrowRight className="h-4 w-4" />
                          </Link>
                        )}
                      </article>
                    ))}
                  </div>
                </section>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-stone-950 py-16 md:py-24">
          <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
            <h2 className="font-serif text-4xl font-semibold leading-tight text-white md:text-5xl">
              Ready to check dates?
            </h2>
            <p className="mt-5 text-lg leading-8 text-stone-200">
              Open the live calendars for secure online checkout, or tell us
              about your group for a personal reply within 24 hours.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <Link
                href="/book"
                className="inline-flex items-center justify-center gap-2 rounded-md bg-white px-8 py-4 text-base font-semibold text-stone-950 shadow-lg transition-colors hover:bg-stone-100"
              >
                <Calendar className="h-5 w-5" />
                Check Availability
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-md border border-white/70 px-8 py-4 text-base font-semibold text-white transition-colors hover:bg-white/10"
              >
                Ask About Your Dates
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
