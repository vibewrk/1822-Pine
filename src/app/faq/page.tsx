import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Calendar, CheckCircle2 } from "lucide-react";
import { Eyebrow } from "@/components/Eyebrow";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Frequently asked questions about booking, payment, the house, check-in, rules, parking, location, and accessibility at The Rittenhouse Residence.",
};

const faqSections = [
  {
    id: "booking-payment",
    title: "Booking & payment",
    questions: [
      {
        q: "How do I check availability?",
        a: "Use the booking page to open the live Vrbo calendar. Vrbo shows current availability, date-specific pricing, taxes, fees, and the minimum stay before you reserve.",
      },
      {
        q: "What is the minimum stay?",
        a: "The standard minimum is 2 nights. Peak weekends, holidays, and high-demand periods may require a longer stay.",
      },
      {
        q: "What deposit is required?",
        a: "A 50% deposit is required at reservation. The remaining balance is due 60 days before arrival.",
      },
      {
        q: "What is the cancellation policy?",
        a: "Cancellations require 60 days notice for a full refund of the deposit. Vrbo will show the applicable policy before checkout.",
      },
      {
        q: "Can I book directly?",
        a: "Direct booking is coming soon. For now, use Vrbo for live availability and secure checkout; contact us for group questions that need a human answer.",
      },
    ],
  },
  {
    id: "house",
    title: "The house",
    questions: [
      {
        q: "How many guests can stay?",
        a: "The house sleeps up to 21 guests across 8 bedrooms and 6 full bathrooms.",
      },
      {
        q: "Do we rent the whole house?",
        a: "Yes. The Rittenhouse Residence is rented as a whole house, not by the room.",
      },
      {
        q: "How is the house arranged?",
        a: "The residence spans five floors, with two parlors, a dining room for 21, two full kitchens, bedrooms on the upper floors, and a private roof deck.",
      },
      {
        q: "What amenities are included?",
        a: "Linens, towels, gigabit WiFi, smart TVs, washer/dryer, central air, two full kitchens, dining space for 21, and the private roof deck are included.",
      },
    ],
  },
  {
    id: "your-stay",
    title: "Your stay",
    questions: [
      {
        q: "What time is check-in and check-out?",
        a: "Check-in is 4:00 PM and check-out is 10:00 AM. Early arrival or late departure may be available only when the calendar allows it.",
      },
      {
        q: "Is ID required?",
        a: "Yes. A valid government ID is required at check-in.",
      },
      {
        q: "Are there quiet hours?",
        a: "Yes. This is a residential block and a historic house, so quiet hours apply. We send the full house rules before arrival.",
      },
      {
        q: "Is smoking allowed?",
        a: "No. Smoking and vaping are not permitted anywhere on the property.",
      },
      {
        q: "Are parties allowed?",
        a: "No. The house is for registered overnight guests and is not suitable for parties.",
      },
    ],
  },
  {
    id: "location-parking",
    title: "Location & parking",
    questions: [
      {
        q: "Where is the house?",
        a: "The address is 1822 Pine Street in Center City Philadelphia, two blocks from Rittenhouse Square.",
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
    ],
  },
  {
    id: "accessibility",
    title: "Accessibility",
    questions: [
      {
        q: "Is there an elevator?",
        a: "No. The house is a historic five-floor townhouse with stairs between floors.",
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
              Booking, payment, house rules, parking, and the realities of staying in a five-floor 1854 townhouse.
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
              Vrbo has the live calendar, current pricing, and checkout flow.
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
                Contact Us
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
