import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Ban,
  Bed,
  Briefcase,
  CigaretteOff,
  Clock,
  Moon,
  PawPrint,
  Sparkles,
  Users,
} from "lucide-react";
import { Eyebrow } from "@/components/Eyebrow";
import occasionsData from "@/data/occasions.json";
import { PRICING_COPY } from "@/lib/pricing";

const SITE = "https://rittenhouseresidence.com";

export const metadata: Metadata = {
  title: "Large Group Lodging in Philadelphia",
  description:
    "Whole-house Philadelphia lodging for groups of up to 16: 8 bedrooms, dining for everyone, and two blocks to Rittenhouse Square.",
  alternates: { canonical: "/groups" },
  openGraph: {
    title: "Large Group Lodging in Philadelphia | Sleeps 16",
    description:
      `One historic house for the whole group: 8 bedrooms, sleeps 16, dining for 16 at one table. ${PRICING_COPY.compact}`,
    images: ["/images/property-tour/26-dining-area-01.webp"],
  },
};

const { occasions } = occasionsData;

const faqs = occasions.flatMap((occasion) => occasion.faqs);

const stats = [
  ["Sleeps 16", "8 bedrooms · 5 full baths and a powder room"],
  [
    PRICING_COPY.sampleGuestRate,
    `Sample per guest with 16 staying at a ${PRICING_COPY.sampleRate} weekday rate`,
  ],
  ["Seats 16", "At one dining table"],
  ["Four stories", "Two kitchens · two parlors · roof deck"],
];

const houseRules = [
  [Ban, "No parties or events — the house is for the group staying in it."],
  [Moon, "Quiet hours apply. This is a residential block and a historic house."],
  [CigaretteOff, "No smoking or vaping anywhere on the property."],
  [PawPrint, "No pets."],
  [Clock, "Check-in 4:00 PM · check-out 10:00 AM."],
] as const;

const occasionIcons = {
  "family-reunions": Users,
  "corporate-retreats": Briefcase,
  "celebration-weekends": Sparkles,
} as const;

const occasionBackgrounds = ["bg-white", "bg-stone-100", "bg-[#fbfaf7]"];

function GroupsJsonLd() {
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
      { "@type": "ListItem", position: 2, name: "Group Stays", item: `${SITE}/groups` },
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

export default function GroupsPage() {
  return (
    <>
      <GroupsJsonLd />
      <div className="flex flex-col bg-[#fbfaf7] text-stone-950">
        <section className="relative min-h-[620px] overflow-hidden">
          <Image
            src="/images/property-tour/26-dining-area-01.webp"
            alt="Dining room set for sixteen beneath a crystal chandelier at The Rittenhouse Residence"
            fill
            sizes="100vw"
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/45 to-black/20" />
          <div className="relative mx-auto flex min-h-[620px] max-w-7xl items-end px-4 pb-16 sm:px-6 lg:px-8">
            <div className="max-w-4xl">
              <Eyebrow light className="mb-5">
                Group Stays
              </Eyebrow>
              <h1 className="font-serif text-5xl font-semibold leading-[0.95] text-white md:text-7xl">
                One house for the whole group.
              </h1>
              <p className="mt-7 max-w-3xl text-lg leading-8 text-stone-100 md:text-xl">
                Sixteen people, eight bedrooms, one dining table that seats everyone — two blocks
                from Rittenhouse Square. Family reunions, team lodging, and celebration
                weekends all work here for the same reason: nobody splits across hotel floors, and
                the evening ends in the same parlor it started in.
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
          <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
            <div>
              <Eyebrow>The Group Math</Eyebrow>
              <h2 className="mt-4 font-serif text-4xl font-semibold leading-tight md:text-5xl">
                One house makes the group math kinder.
              </h2>
              <p className="mt-5 text-lg leading-8 text-stone-700">
                {PRICING_COPY.long} {PRICING_COPY.example} Every stay includes the entire house —
                every bedroom, both kitchens, both parlors, the dining room, and the roof deck. For
                the exact total, tell us your dates and{" "}
                <Link
                  href="/contact"
                  className="font-medium text-amber-800 underline underline-offset-4 hover:text-amber-900"
                >
                  request a personal quote
                </Link>{" "}
                for your group.
              </p>
              <p className="mt-4 text-lg leading-8 text-stone-700">
                Comparing against hotel rooms for the same group?{" "}
                <Link
                  href="/hotel-alternative"
                  className="font-medium text-amber-800 underline underline-offset-4 hover:text-amber-900"
                >
                  We wrote that comparison
                </Link>
                , tradeoffs included.
              </p>
            </div>
            <div className="rounded-lg border border-stone-200 bg-stone-50 p-6 sm:p-8">
              <Bed className="h-6 w-6 text-amber-800" />
              <h3 className="mt-5 font-serif text-2xl font-semibold">Where everyone sleeps</h3>
              <p className="mt-3 leading-7 text-stone-700">
                Eight bedrooms across floors two through four: three kings, four queens and a
                double, with five full bathrooms and a powder room keeping the mornings civil. Bedrooms sit on the upper floors of
                a four-story townhouse — there is no elevator, which is worth knowing before you
                assign rooms.
              </p>
              <Link
                href="/stay"
                className="mt-5 inline-flex items-center gap-2 font-medium text-amber-800 underline underline-offset-4 hover:text-amber-900"
              >
                Tour the house floor by floor
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>

        {occasions.map((occasion, index) => {
          const Icon = occasionIcons[occasion.slug as keyof typeof occasionIcons] ?? Users;
          return (
            <section
              key={occasion.slug}
              id={occasion.slug}
              className={`${occasionBackgrounds[index % occasionBackgrounds.length]} scroll-mt-24 py-16 md:py-24`}
            >
              <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="mb-10 max-w-3xl">
                  <Eyebrow>{occasion.eyebrow}</Eyebrow>
                  <h2 className="mt-4 font-serif text-4xl font-semibold leading-tight md:text-5xl">
                    {occasion.title}
                  </h2>
                  <p className="mt-5 text-lg leading-8 text-stone-700">{occasion.summary}</p>
                </div>
                <div className="grid gap-5 md:grid-cols-3">
                  {occasion.sections.map((section) => (
                    <article
                      key={section.heading}
                      className="rounded-lg border border-stone-200 bg-white p-6"
                    >
                      <Icon className="h-5 w-5 text-amber-800" />
                      <h3 className="mt-5 font-serif text-2xl font-semibold">{section.heading}</h3>
                      <p className="mt-3 text-base leading-7 text-stone-700">{section.body}</p>
                    </article>
                  ))}
                </div>
              </div>
            </section>
          );
        })}

        <section className="bg-white py-16 md:py-24">
          <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.85fr_1.15fr] lg:px-8">
            <div>
              <Eyebrow>House Rules</Eyebrow>
              <h2 className="mt-4 font-serif text-4xl font-semibold leading-tight md:text-5xl">
                The rules, stated plainly.
              </h2>
              <p className="mt-5 text-lg leading-8 text-stone-700">
                We publish these up front because the right group reads them with relief: the same
                rules that rule out a party are what guarantee your grandmother sleeps well on the
                second floor.
              </p>
            </div>
            <ul className="grid gap-4 self-start rounded-lg border border-amber-200 bg-amber-50 p-6 text-amber-950 sm:p-8">
              {houseRules.map(([Icon, rule]) => (
                <li key={rule} className="flex gap-3 leading-7">
                  <Icon className="mt-1 h-5 w-5 flex-none text-amber-800" />
                  {rule}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="bg-stone-100 py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-9 max-w-3xl">
              <Eyebrow>Two More Ways Groups Use the House</Eyebrow>
              <h2 className="mt-4 font-serif text-4xl font-semibold leading-tight md:text-5xl">
                Wedding weekends and the hotel comparison.
              </h2>
            </div>
            <div className="grid gap-5 md:grid-cols-2">
              <Link
                href="/groups/weddings"
                className="group overflow-hidden rounded-lg border border-stone-200 bg-white transition-colors hover:border-amber-800"
              >
                <div className="relative aspect-[16/9] overflow-hidden">
                  <Image
                    src="/images/property-tour/58-additional-photos-02.webp"
                    alt="Gallery hall inside The Rittenhouse Residence"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-serif text-2xl font-semibold group-hover:text-amber-900">
                    Wedding guest housing
                  </h3>
                  <p className="mt-2 leading-7 text-stone-700">
                    Sixteen of your favorite people under one roof for the wedding weekend — with
                    clear house rules and plenty of quiet space between the festivities.
                  </p>
                  <span className="mt-4 inline-flex items-center gap-2 font-medium text-amber-800">
                    Read more
                    <ArrowRight className="h-4 w-4" />
                  </span>
                </div>
              </Link>
              <Link
                href="/hotel-alternative"
                className="group overflow-hidden rounded-lg border border-stone-200 bg-white transition-colors hover:border-amber-800"
              >
                <div className="relative aspect-[16/9] overflow-hidden">
                  <Image
                    src="/images/property-tour/01-living-room-1-01.webp"
                    alt="Grand parlor with pool table opening through towering pocket doors"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-serif text-2xl font-semibold group-hover:text-amber-900">
                    The hotel alternative
                  </h3>
                  <p className="mt-2 leading-7 text-stone-700">
                    Eight scattered hotel rooms versus one house — compare the spaces, practical
                    details, and date-specific totals for your own stay.
                  </p>
                  <span className="mt-4 inline-flex items-center gap-2 font-medium text-amber-800">
                    Read more
                    <ArrowRight className="h-4 w-4" />
                  </span>
                </div>
              </Link>
            </div>
          </div>
        </section>

        <section className="bg-white py-16 md:py-24">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="mb-9">
              <Eyebrow>Group Questions</Eyebrow>
              <h2 className="mt-4 font-serif text-4xl font-semibold leading-tight md:text-5xl">
                Asked by organizers.
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
          </div>
        </section>

        <section className="relative py-20 md:py-28">
          <Image
            src="/images/property-tour/45-rooftop-01.webp"
            alt="Private roof deck with panoramic Center City views at The Rittenhouse Residence"
            fill
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/65" />
          <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
            <h2 className="font-serif text-4xl font-semibold leading-tight text-white md:text-5xl">
              One group per date. Yours, if you ask first.
            </h2>
            <p className="mt-5 text-lg text-stone-200 md:text-xl">
              Tell us your dates and group size — we answer within 24 hours.
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
