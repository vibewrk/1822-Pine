import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Car, MapPin, TrainFront, TreePine } from "lucide-react";
import { Eyebrow } from "@/components/Eyebrow";
import {
  HUB_PAGES,
  SITE,
  SectionHeader,
  SourceList,
  StayCta,
  breadcrumbSchema,
} from "./hub-shared";

// The hub landing page for the /rittenhouse-square cluster. Every historical
// and rules claim maps to an entry in `sources` below (park rules from
// phila.gov, transit from the operators); the safety answer is deliberately
// written as resident experience, not statistics — do not add crime numbers.
// The FAQ text and faqSchema render from the same `faqs` array; keep it so.

export const metadata: Metadata = {
  title: "Rittenhouse Square: A Local's Guide",
  description:
    "Rittenhouse Square, Philadelphia — the park, the neighborhood, and how to use both: history, sculptures, restaurants, things to do, park rules, and where to stay, from locals two blocks away.",
  alternates: { canonical: "/rittenhouse-square" },
  openGraph: {
    title: "Rittenhouse Square: A Local's Guide | The Rittenhouse Residence",
    description:
      "The park, the neighborhood, and how to use both — written from two blocks south, with sources for every historical claim.",
    images: ["/images/neighborhood/philly-skyline.jpg"],
  },
};

const stats = [
  ["Six acres", "of park at the center of Center City"],
  ["Five", "squares in Penn & Holme's plan — this was the southwest one"],
  ["1825", "renamed to honor David Rittenhouse"],
  ["2 blocks", "from our front door on Pine Street"],
] as const;

const transit = [
  [
    TrainFront,
    "PATCO: 15–16th & Locust",
    "The Speedline's western terminus sits at the neighborhood's edge, two blocks east of the park — the direct line to South Jersey.",
  ],
  [
    TrainFront,
    "SEPTA: Walnut–Locust & 19th Street",
    "The Broad Street Line's Walnut–Locust station is four blocks east; the subway-surface trolleys stop at 19th Street under Market, two blocks north.",
  ],
  [
    Car,
    "Parking",
    "Garages ring the square — the Parkway garage at 1845 Walnut has served it since 1953, with others at 1728 Sansom and 15th & Sansom. Street parking is permit-heavy; treat it as a short errand, not a plan.",
  ],
] as const;

const faqs = [
  {
    q: "Is Rittenhouse Square a park or a neighborhood?",
    a: "Both. Rittenhouse Square is the six-acre public park at 18th and Walnut Streets — one of the five squares in William Penn and Thomas Holme's original plan of Philadelphia — and it lends its name to the surrounding blocks of Center City, one of the city's most desirable residential areas. Locals use the name for either without warning.",
  },
  {
    q: "Who is Rittenhouse Square named after?",
    a: "David Rittenhouse (1732–1796), the Philadelphia astronomer, instrument maker, and first director of the United States Mint. City Council renamed the old Southwest Square in his honor in 1825. He was the great-grandson of William Rittenhouse, whose 1690 Germantown mill was the first paper mill in British North America.",
  },
  {
    q: "Is Rittenhouse Square free to visit?",
    a: "Yes — it is a public park in Philadelphia's Fairmount Park system, with no gates or tickets. Philadelphia Parks & Recreation applies a 10 p.m. curfew across the parks system.",
  },
  {
    q: "Are dogs allowed in Rittenhouse Square?",
    a: "Yes, on a leash no longer than 6 feet. Off-leash pets are prohibited under Philadelphia Parks & Recreation rules — though you will see plenty of dogs; the park is the neighborhood's living room for them too.",
  },
  {
    q: "Is Rittenhouse Square safe?",
    a: "We live two blocks away and cross the park daily, so here is our honest experience rather than a statistic: the square is busy from early-morning dog walks until late evening, well-lit, and constantly trafficked, and the blocks around it stay lively with foot traffic well into the night. Use the same awareness you would in any big city at night. Guests at our house walk to and from the square at all hours.",
  },
  {
    q: "What are the boundaries of the Rittenhouse Square neighborhood?",
    a: "There is no official city boundary. The closest documented definition is the Rittenhouse–Fitler Residential Historic District, which runs roughly between Walnut, 15th, Pine, and 25th Streets. In everyday use, 'Rittenhouse' means the blocks within a short walk of the park.",
  },
  {
    q: "What is there to do in Rittenhouse Square?",
    a: "The park itself is for sitting, people-watching, and finding the six sculptures. Around it: a twice-weekly farmers market at 18th & Walnut, an outdoor art show held since 1928, the Walnut Street shopping corridor, and some of Philadelphia's best restaurants. Our things-to-do and restaurant guides cover all of it with sources.",
  },
] as const;

const sources = [
  {
    name: "Friends of Rittenhouse Square — Our History",
    detail:
      "The park's stewardship (Fairmount Park system, Parks & Recreation partnership) and its history.",
    href: "https://www.friendsofrittenhouse.org/about/our-history",
  },
  {
    name: "Encyclopedia of Greater Philadelphia — Public Parks",
    detail: "The five original squares and the 1825 renamings.",
    href: "https://philadelphiaencyclopedia.org/essays/public-parks-philadelphia/",
  },
  {
    name: "Philadelphia Parks & Recreation — Rules & Regulations",
    detail: "The 10 p.m. curfew, leash rules, and alcohol and smoking policy.",
    href: "https://www.phila.gov/departments/philadelphia-parks-recreation/about/rules-and-regulations/",
  },
  {
    name: "Hidden City Philadelphia — Rittenhouse–Fitler at 30",
    detail: "The historic district's boundaries and register dates.",
    href: "https://hiddencityphila.org/2025/05/rittenhouse-fitler-historic-district-celebrates-30th-anniversary/",
  },
  {
    name: "Philadelphia Parking Authority — “TBT: Rittenhouse Square Parking Garage”",
    detail: "The 1845 Walnut Street garage, opened December 1953.",
    href: "https://philapark.org/2015/02/tbt-rittenhouse-square-parking-garage/",
  },
  {
    name: "American National Biography — David Rittenhouse",
    detail:
      "“Rittenhouse, David (1732–1796), astronomer, mathematician, and maker of mathematical instruments.”",
    href: "https://www.anb.org/view/10.1093/anb/9780198606697.001.0001/anb-9780198606697-e-1301396",
  },
  {
    name: "Historic RittenhouseTown",
    detail:
      "William Rittenhouse's 1690 mill — the first paper mill in British North America.",
    href: "https://rittenhousetown.org/about/",
  },
  {
    name: "Rittenhouse Square Fine Art Show",
    detail: "The organizer's site: founded by artists in 1928.",
    href: "https://www.rittenhousesquareart.com/",
  },
  {
    name: "Farm to City — Rittenhouse Farmers Market",
    detail: "The operator's schedule for the Saturday and Tuesday markets.",
    href: "https://www.farmtocitymarkets.com/markets/rittenhousesaturday",
  },
  {
    name: "PATCO",
    detail: "Speedline service and stations, including 15–16th & Locust.",
    href: "https://www.ridepatco.org/",
  },
  {
    name: "SEPTA",
    detail: "Broad Street Line and trolley service in Center City.",
    href: "https://www.septa.org/",
  },
] as const;

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id": `${SITE}/rittenhouse-square#faq`,
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.q,
    acceptedAnswer: { "@type": "Answer", text: faq.a },
  })),
};

const webPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": `${SITE}/rittenhouse-square#webpage`,
  name: "Rittenhouse Square: A Local's Guide",
  description:
    "A guide to Rittenhouse Square, Philadelphia — the park and the neighborhood — from the publishers of the 1822 Pine Street historical archive, two blocks south.",
  url: `${SITE}/rittenhouse-square`,
  about: {
    "@type": "Place",
    name: "Rittenhouse Square",
    sameAs: "https://en.wikipedia.org/wiki/Rittenhouse_Square",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Philadelphia",
      addressRegion: "PA",
      addressCountry: "US",
    },
  },
  publisher: { "@type": "Organization", name: "The Rittenhouse Residence", url: SITE },
};

export default function RittenhouseSquareHubPage() {
  return (
    <div className="flex flex-col bg-[#fbfaf7] text-stone-950">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { name: "Home", path: "/" },
              { name: "Rittenhouse Square", path: "/rittenhouse-square" },
            ])
          ),
        }}
      />

      <section className="bg-stone-950 py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Eyebrow light className="mb-5">
            A Local&apos;s Guide · From 1822 Pine Street
          </Eyebrow>
          <h1 className="max-w-4xl font-serif text-5xl font-semibold leading-tight text-white md:text-7xl">
            Rittenhouse Square.
          </h1>
          <p className="mt-7 max-w-3xl text-lg leading-8 text-stone-200 md:text-xl">
            Philadelphia&apos;s living room: a six-acre park that has anchored
            the city&apos;s southwest quadrant since Penn&apos;s plan, and the
            neighborhood that grew up around it. This guide is written from two
            blocks south — where we publish our own house&apos;s history the
            same way we tell the Square&apos;s: documented, sourced, and honest
            about what isn&apos;t known.
          </p>
        </div>
      </section>

      <section className="border-y border-stone-200 bg-white py-5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-px overflow-hidden rounded-lg border border-stone-200 bg-stone-200 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map(([value, label]) => (
              <div key={label} className="bg-stone-50 p-5 text-center">
                <p className="font-serif text-3xl font-semibold text-stone-950">
                  {value}
                </p>
                <p className="mt-1 text-xs font-semibold uppercase tracking-[0.14em] text-stone-600">
                  {label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.85fr_1.15fr] lg:px-8">
          <div>
            <Eyebrow>First, the Name</Eyebrow>
            <h2 className="mt-4 font-serif text-4xl font-semibold leading-tight md:text-5xl">
              A park, and a neighborhood.
            </h2>
            <TreePine className="mt-8 h-8 w-8 text-amber-800" />
          </div>
          <div className="space-y-6 text-lg leading-8 text-stone-700">
            <p>
              &ldquo;Rittenhouse Square&rdquo; means two things in
              Philadelphia. Strictly, it is the park at 18th and Walnut — one
              of the five open squares William Penn and Thomas Holme drew into
              the city&apos;s original plan, renamed in 1825 for the astronomer
              David Rittenhouse. Loosely, it is the neighborhood around that
              park: the café row on 18th Street, the Walnut Street shops, and
              the quiet residential blocks running south to Pine Street, where
              this guide is written.
            </p>
            <p>
              The park is public, free, and open to everyone — maintained by
              Philadelphia Parks &amp; Recreation with the Friends of
              Rittenhouse Square, the nonprofit steward founded after the 1976
              Bicentennial. The neighborhood has no official boundary; the
              closest documented one belongs to the Rittenhouse–Fitler
              Residential Historic District, which reaches from Walnut Street
              south to Pine; 1822 Pine Street, the 1854 house this site
              belongs to, is listed as a contributing property.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#fbfaf7] py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="The Guide"
            title="Five pages, everything sourced."
            body="Each page stands alone; together they cover the Square the way a resident would explain it."
          />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {HUB_PAGES.filter(
              (page) => page.href !== "/rittenhouse-square"
            ).map((page) => (
              <Link
                key={page.href}
                href={page.href}
                className="group flex flex-col rounded-lg border border-stone-200 bg-white p-7 transition-colors hover:border-amber-800"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-800">
                  {page.short}
                </p>
                <h3 className="mt-3 font-serif text-2xl font-semibold text-stone-950">
                  {page.title}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-6 text-stone-700">
                  {page.blurb}
                </p>
                <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-amber-800 transition-colors group-hover:text-amber-900">
                  Read the page
                  <ArrowRight className="h-4 w-4" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Getting Here"
            title="Transit, and the parking truth."
          />
          <div className="grid gap-5 md:grid-cols-3">
            {transit.map(([Icon, title, note]) => (
              <article
                key={title}
                className="rounded-lg border border-stone-200 bg-stone-50 p-6"
              >
                <Icon className="h-5 w-5 text-amber-800" />
                <h3 className="mt-5 font-serif text-2xl font-semibold">
                  {title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-stone-700">{note}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-stone-100 py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Visiting Questions"
            title="What people actually ask."
            body="Straight answers, with the official rules cited below and our local experience labeled as exactly that."
          />
          <div className="grid gap-5 md:grid-cols-2">
            {faqs.map((faq) => (
              <article
                key={faq.q}
                className="rounded-lg border border-stone-200 bg-white p-6"
              >
                <h3 className="font-serif text-2xl font-semibold text-stone-950">
                  {faq.q}
                </h3>
                <p className="mt-4 text-base leading-7 text-stone-700">
                  {faq.a}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <SourceList sources={[...sources]} />

      <section className="bg-stone-950 py-16 md:py-24">
        <div className="mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
          <Eyebrow light>Why Trust This Guide</Eyebrow>
          <p className="mt-8 font-serif text-3xl leading-tight text-white md:text-4xl">
            We publish a 63-document primary-source archive about our own
            house. The Square gets the same treatment: sources on every page,
            and nothing we can&apos;t back up.
          </p>
          <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              href="/rittenhouse-square/history"
              className="inline-flex items-center justify-center gap-2 rounded-md bg-white px-8 py-4 text-base font-semibold text-stone-950 shadow-lg transition-colors hover:bg-stone-100"
            >
              Start with the history
              <ArrowRight className="h-5 w-5" />
            </Link>
            <Link
              href="/history/documents"
              className="inline-flex items-center justify-center gap-2 rounded-md border border-white/70 px-8 py-4 text-base font-semibold text-white transition-colors hover:bg-white/10"
            >
              <MapPin className="h-5 w-5" />
              The archive, two blocks south
            </Link>
          </div>
        </div>
      </section>

      <StayCta />
    </div>
  );
}
