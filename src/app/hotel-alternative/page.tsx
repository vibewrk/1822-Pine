import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Building2, Calculator, Home, Scale } from "lucide-react";
import { Eyebrow } from "@/components/Eyebrow";
import { PRIMARY_PROPERTY_IMAGE } from "@/lib/facts";
import { PRICING_COPY } from "@/lib/pricing";

const SITE = "https://rittenhouseresidence.com";

export const metadata: Metadata = {
  title: "Philadelphia Hotel Alternative for Groups",
  description:
    "Skip eight scattered hotel rooms: one historic house that sleeps 16, with three shared living rooms, two kitchens, dining for 16, and a roof deck near Rittenhouse Square.",
  alternates: { canonical: "/hotel-alternative" },
  openGraph: {
    title: "Philadelphia Hotel Alternative for Groups | Sleeps 16",
    description:
      "Eight hotel rooms or one historic house: compare the spaces, shared rooms, and practical details for groups of up to 16.",
    images: [PRIMARY_PROPERTY_IMAGE],
  },
};

const stats = [
  ["1 house", "Instead of 8 scattered room keys"],
  ["~7,000 sq ft", "Across five private floors"],
  ["Seats 16", "At one dining table"],
  [
    PRICING_COPY.sampleGuestRate,
    `Sample per guest with 16 staying at a ${PRICING_COPY.sampleRate} weekday rate`,
  ],
];

const comparisons = [
  [
    "Eight room keys on different floors",
    "One front door, and a whole house that belongs to your group alone",
  ],
  ["A lobby you pass through", "Three shared living rooms, plus a full-size pool table"],
  [
    "Breakfast for sixteen needs a reservation",
    "A dining table that seats all sixteen, steps from the kitchen",
  ],
  ["A mini-fridge per room", "Two full kitchens"],
  ["The hotel bar at closing time", "A private roof deck over Center City"],
  [
    "Your neighbors are whoever checked in next door",
    "Your neighbors are your own group — quiet hours, one booking per date",
  ],
];

const tradeoffs = [
  "No daily housekeeping. The house is prepared for your arrival, but nobody resets it each morning.",
  "No elevator. Four stories of stairs, with all bedrooms above the entrance level.",
  "A 2-night minimum, and longer on some peak dates — this is not a one-night crash pad.",
  "Check-out is 10:00 AM, and check-in is 4:00 PM.",
  "Questions go to your host, not a front desk in the lobby.",
];

const faqs = [
  {
    q: "Is one house really cheaper than eight hotel rooms?",
    a: `${PRICING_COPY.long} ${PRICING_COPY.example} For the useful comparison, price eight hotel rooms for the same dates and put the complete totals side by side.`,
  },
  {
    q: "What does a hotel do better?",
    a: "Daily housekeeping, an elevator, and a 24-hour front desk. The house has none of those — it is a private four-story historic home with a 2-night minimum and a 10:00 AM check-out. Those are the tradeoffs.",
  },
  {
    q: "What does the house have that eight hotel rooms never will?",
    a: "One front door for the whole group. Three shared living rooms instead of a lobby, a dining table that seats all sixteen, two full kitchens, a full-size pool table, and a private roof deck — nearly 7,000 square feet that belongs to your group alone for the length of the stay.",
  },
  {
    q: "Is there a minimum stay?",
    a: "Yes — 2 nights, with longer minimums possible on peak weekends, holidays, and high-demand dates.",
  },
];

function HotelAlternativeJsonLd() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${SITE}/` },
      {
        "@type": "ListItem",
        position: 2,
        name: "Hotel Alternative",
        item: `${SITE}/hotel-alternative`,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
    </>
  );
}

export default function HotelAlternativePage() {
  return (
    <>
      <HotelAlternativeJsonLd />
      <div className="flex flex-col bg-[#fbfaf7] text-stone-950">
        <section className="relative min-h-[620px] overflow-hidden">
          <Image
            src={PRIMARY_PROPERTY_IMAGE}
            alt="Grand Parlor in its regular daily configuration with the pool table at one end"
            fill
            sizes="100vw"
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/45 to-black/20" />
          <div className="relative mx-auto flex min-h-[620px] max-w-7xl items-end px-4 pb-16 sm:px-6 lg:px-8">
            <div className="max-w-4xl">
              <Eyebrow light className="mb-5">
                The Hotel Alternative
              </Eyebrow>
              <h1 className="font-serif text-5xl font-semibold leading-[0.95] text-white md:text-7xl">
                Eight hotel rooms, or one house.
              </h1>
              <p className="mt-7 max-w-3xl text-lg leading-8 text-stone-100 md:text-xl">
                A group of sixteen at a hotel is eight doors on a corridor and a group text about
                where to meet. The same sixteen people here share three living rooms, one dining table,
                and a roof deck — two blocks from Rittenhouse Square. The difference is less about
                thread count than what happens when everyone can be together between plans.
              </p>
            </div>
          </div>
        </section>

        <section className="border-y border-stone-200 bg-white py-5">
          <div className="mx-auto grid max-w-7xl gap-px overflow-hidden rounded-lg border border-stone-200 bg-stone-200 px-0 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map(([value, label]) => (
              <div key={label} className="bg-stone-50 p-5 text-center">
                <p className="font-serif text-3xl font-semibold text-stone-950">{value}</p>
                <p className="mt-1 text-xs font-semibold uppercase tracking-[0.18em] text-stone-600">
                  {label}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-white py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-9 max-w-3xl">
              <Eyebrow>The Structural Difference</Eyebrow>
              <h2 className="mt-4 font-serif text-4xl font-semibold leading-tight md:text-5xl">
                Not a better hotel. A different shape entirely.
              </h2>
              <p className="mt-5 text-lg leading-8 text-stone-700">
                The comparison is not about thread counts. It is about what happens to a group when
                the architecture is built around them instead of around a hallway.
              </p>
            </div>
            <div className="grid gap-px overflow-hidden rounded-lg border border-stone-200 bg-stone-200 md:grid-cols-2">
              {comparisons.map(([hotel, house]) => (
                <article key={hotel} className="bg-stone-50 p-6">
                  <p className="flex gap-3 text-sm leading-6 text-stone-500">
                    <Building2 className="mt-0.5 h-4 w-4 flex-none" />
                    {hotel}
                  </p>
                  <p className="mt-3 flex gap-3 text-base font-medium leading-7 text-stone-900">
                    <Home className="mt-1 h-4 w-4 flex-none text-amber-800" />
                    {house}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-stone-100 py-16 md:py-24">
          <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
            <div>
              <Eyebrow>Compare the Full Stay</Eyebrow>
              <h2 className="mt-4 font-serif text-4xl font-semibold leading-tight md:text-5xl">
                Put one whole house beside eight hotel rooms.
              </h2>
              <p className="mt-5 text-lg leading-8 text-stone-700">
                {PRICING_COPY.long} {PRICING_COPY.example} For a useful comparison, price eight
                rooms for the same dates anywhere in Center City, include the taxes and fees on
                both sides, and decide which kind of stay your group would rather share.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-md bg-stone-950 px-7 py-4 text-base font-semibold text-white transition-colors hover:bg-stone-800"
                >
                  Request a Personal Quote
                  <ArrowRight className="h-5 w-5" />
                </Link>
                <Link
                  href="/rates"
                  className="inline-flex items-center justify-center rounded-md border border-stone-300 bg-white px-7 py-4 text-base font-semibold text-stone-950 transition-colors hover:border-amber-800 hover:text-amber-900"
                >
                  See Rates & Policies
                </Link>
              </div>
            </div>
            <div className="self-start rounded-lg border border-stone-200 bg-white p-6 sm:p-8">
              <Calculator className="h-6 w-6 text-amber-800" />
              <h3 className="mt-5 font-serif text-2xl font-semibold">The per-person arithmetic</h3>
              <dl className="mt-6 divide-y divide-stone-200">
                <div className="flex items-baseline justify-between gap-4 py-3">
                  <dt className="text-stone-600">Sample weekday, whole house</dt>
                  <dd className="font-serif text-2xl font-semibold">{PRICING_COPY.sampleRate}</dd>
                </div>
                <div className="flex items-baseline justify-between gap-4 py-3">
                  <dt className="text-stone-600">Sample per bedroom (8 bedrooms)</dt>
                  <dd className="font-serif text-2xl font-semibold">{PRICING_COPY.sampleBedroomRate}</dd>
                </div>
                <div className="flex items-baseline justify-between gap-4 py-3">
                  <dt className="text-stone-600">Sample per guest (16 guests)</dt>
                  <dd className="font-serif text-2xl font-semibold">{PRICING_COPY.sampleGuestRate}</dd>
                </div>
              </dl>
              <p className="mt-4 text-sm leading-6 text-stone-600">
                This is an example, not a quote. Weekends, holidays, and high-demand dates run
                higher; taxes and fees also vary by booking path.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-white py-16 md:py-24">
          <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.85fr_1.15fr] lg:px-8">
            <div>
              <Eyebrow>A Few Differences to Know</Eyebrow>
              <h2 className="mt-4 font-serif text-4xl font-semibold leading-tight md:text-5xl">
                What a hotel does that we don&apos;t.
              </h2>
              <p className="mt-5 text-lg leading-8 text-stone-700">
                A house is only the better answer for groups that want a house. Here is the other
                side of the ledger, so you can decide with the full picture.
              </p>
            </div>
            <ul className="grid gap-4 self-start rounded-lg border border-amber-200 bg-amber-50 p-6 text-amber-950 sm:p-8">
              {tradeoffs.map((item) => (
                <li key={item} className="flex gap-3 leading-7">
                  <Scale className="mt-1 h-5 w-5 flex-none text-amber-800" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="bg-[#fbfaf7] py-16 md:py-24">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="mb-9">
              <Eyebrow>Comparison Questions</Eyebrow>
              <h2 className="mt-4 font-serif text-4xl font-semibold leading-tight md:text-5xl">
                Questions worth asking before you choose.
              </h2>
            </div>
            <div className="divide-y divide-stone-200 border-y border-stone-200">
              {faqs.map((item) => (
                <div key={item.q} className="py-6">
                  <h3 className="font-serif text-xl font-semibold">{item.q}</h3>
                  <p className="mt-3 leading-7 text-stone-700">{item.a}</p>
                </div>
              ))}
            </div>
            <p className="mt-8 text-stone-700">
              Curious how different groups use the house?{" "}
              <Link
                href="/groups"
                className="font-medium text-amber-800 underline underline-offset-4 hover:text-amber-900"
              >
                See group stays
              </Link>{" "}
              — reunions, retreats, and celebration weekends.
            </p>
          </div>
        </section>

        <section className="relative py-20 md:py-28">
          <Image
            src="/images/property-tour/58-additional-photos-02.webp"
            alt="Gallery hall inside The Rittenhouse Residence"
            fill
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/65" />
          <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
            <h2 className="font-serif text-4xl font-semibold leading-tight text-white md:text-5xl">
              One key. Sixteen people. No hallway.
            </h2>
            <p className="mt-5 text-lg text-stone-200 md:text-xl">
              Send your dates and group size — a personal quote comes back within 24 hours.
            </p>
            <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-md bg-white px-8 py-4 text-base font-semibold text-stone-950 shadow-lg transition-colors hover:bg-stone-100"
              >
                Request a Quote
              </Link>
              <Link
                href="/stay"
                className="inline-flex items-center justify-center gap-2 rounded-md border border-white/70 px-8 py-4 text-base font-semibold text-white transition-colors hover:bg-white/10"
              >
                Tour the house
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </section>

      </div>
    </>
  );
}
