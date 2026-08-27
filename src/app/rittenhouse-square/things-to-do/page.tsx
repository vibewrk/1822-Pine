import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CalendarDays, Landmark, TreePine } from "lucide-react";
import { Eyebrow } from "@/components/Eyebrow";
import {
  ExternalVenueLink,
  HubCrossLinks,
  SITE,
  SectionHeader,
  SourceList,
  StayCta,
  breadcrumbSchema,
} from "../hub-shared";

// Event schedules verified August 2026 against organizers' own sites
// (farmtocitymarkets.com, rittenhousesquareart.com, friendsofrittenhouse.org,
// phila.gov). Dated entries go stale — refresh each season, and never state a
// current-year date this page's sources don't show. The Flower Market is
// deliberately framed historically: its founding is documented, its
// current-year schedule was not verifiable when this page was written.

export const metadata: Metadata = {
  title: "Things to Do in Rittenhouse Square",
  description:
    "What to do in and around Rittenhouse Square, Philadelphia: the park itself, its annual traditions since 1914, the farmers market, and the museums and shopping a short walk away. Verified August 2026.",
  alternates: { canonical: "/rittenhouse-square/things-to-do" },
  openGraph: {
    title: "Things to Do in Rittenhouse Square | The Rittenhouse Residence",
    description:
      "The park, its traditions — a farmers market, an art show running since 1928, a December tree lighting — and everything a short walk away.",
    type: "article",
    images: ["/images/venues/parc.jpg"],
  },
};

const inThePark = [
  [
    "Sit where the city sits",
    "The benches and diagonal walks fill daily with office lunches, dog walks, first dates, and readers. People-watching here is not a tourist activity — it's what the park is for.",
  ],
  [
    "Find the sculptures",
    "A French bronze lion, a goat whose 1914 original was polished gold by generations of children, and a 1911 fountain figure with a story worth knowing — the Square doubles as a small sculpture garden.",
  ],
  [
    "Walk the perimeter",
    "One lap past the Church of the Holy Trinity, the mansions-turned-institutions, and the 18th Street café row is a fifteen-minute architecture tour.",
  ],
  [
    "Picnic from the market",
    "On Saturdays, the farmers market at 18th & Walnut supplies the picnic; the lawns supply the rest.",
  ],
] as const;

// [event, when, note, href]
const annualCalendar = [
  [
    "Rittenhouse Farmers Market",
    "Saturdays & Tuesdays, year-round",
    "Run by Farm to City at 18th & Walnut. Saturdays 9 a.m.–2 p.m. (10 a.m. start in winter); Tuesdays 10 a.m.–2 p.m.",
    "https://www.farmtocitymarkets.com/markets/rittenhousesaturday",
  ],
  [
    "Rittenhouse Square Fine Art Show",
    "June & September",
    "Founded by artists in 1928 — the organizers call it the oldest outdoor art show in the country. Two shows in 2026: June 5–7 and September 18–20.",
    "https://www.rittenhousesquareart.com",
  ],
  [
    "Rittenhouse Row Spring Festival",
    "May",
    "The Walnut Street corridor's street festival, run by the Rittenhouse Row business association — held May 2, 2026.",
    "https://www.rittenhouserow.org",
  ],
  [
    "Fall Fine Craft Show",
    "October",
    "The craft counterpart to the art show, on the Friends of Rittenhouse Square calendar for October 9–11, 2026.",
    "https://www.friendsofrittenhouse.org/events",
  ],
  [
    "Holiday Tree Lighting",
    "Early December",
    "The Friends of Rittenhouse Square light the park's tree in early December — the 2025 ceremony was December 5 — and it stays lit into January.",
    "https://www.friendsofrittenhouse.org/events",
  ],
  [
    "The Flower Market tradition",
    "Since May 20, 1914",
    "The first Rittenhouse Square Flower Market was held May 20, 1914, and grew into a beloved children's-charity benefit. Check the Friends of Rittenhouse Square calendar for current-year plans.",
    "https://www.friendsofrittenhouse.org/events",
  ],
] as const;

const shortWalk = [
  [
    "Rosenbach Museum & Library",
    "2008–2010 Delancey Pl",
    "Rare books and manuscripts — including Joyce's Ulysses manuscript — in twin townhouses on one of the city's prettiest blocks.",
    "https://rosenbach.org",
  ],
  [
    "Walnut Street & Rittenhouse Row",
    "Walnut St, 15th–21st",
    "The retail spine along the park's northern edge; the Rittenhouse Row association defines its district as running from the Avenue of the Arts to the Schuylkill.",
    "https://www.rittenhouserow.org",
  ],
  [
    "Mütter Museum",
    "19 S 22nd St",
    "The College of Physicians' famous medical-history collections, an eight-minute walk west.",
    "https://muttermuseum.org",
  ],
  [
    "Schuylkill River Trail",
    "West of 25th St",
    "The riverfront boardwalk and trail for a morning run or the long way to the Art Museum.",
    "https://schuylkillbanks.org",
  ],
  [
    "Academy of Music",
    "240 S Broad St",
    "Opera and Broadway tours in the oldest opera house in the United States still used for its original purpose, a six-block walk east.",
    "https://www.academyofmusic.org",
  ],
] as const;

const parkRules = [
  "The park is free and open to the public — there is no gate and no ticket.",
  "Philadelphia Parks & Recreation applies a 10 p.m. curfew across the parks system.",
  "Dogs are welcome on a leash no longer than 6 feet; off-leash pets are prohibited.",
  "Alcohol is not permitted outside city-permitted events, and smoking is prohibited on Parks & Recreation property.",
] as const;

const sources = [
  {
    name: "Farm to City — Rittenhouse Farmers Market",
    detail:
      "Operator's schedule for the Saturday and Tuesday markets at 18th & Walnut.",
    href: "https://www.farmtocitymarkets.com/markets/rittenhousesaturday",
  },
  {
    name: "Rittenhouse Square Fine Art Show",
    detail:
      "Organizer's site: founded 1928, self-described oldest outdoor art show in the country; 2026 dates.",
    href: "https://www.rittenhousesquareart.com/",
  },
  {
    name: "Friends of Rittenhouse Square — Events",
    detail:
      "The park conservancy's calendar: tree lighting, craft show, and seasonal events.",
    href: "https://www.friendsofrittenhouse.org/events",
  },
  {
    name: "Pennsylvania Center for the Book — “The Galvanizing Garden”",
    detail:
      "Penn State's essay on the Square, documenting the first Flower Market on May 20, 1914.",
    href: "https://pabook.libraries.psu.edu/literary-cultural-heritage-map-pa/feature-articles/galvanizing-garden-tale-rittenhouse-sq",
  },
  {
    name: "Philadelphia Parks & Recreation — Rules & Regulations",
    detail:
      "The official citywide park rules: 10 p.m. curfew, leash requirements, alcohol and smoking policy.",
    href: "https://www.phila.gov/departments/philadelphia-parks-recreation/about/rules-and-regulations/",
  },
  {
    name: "Rittenhouse Row",
    detail:
      "The business association's own definition of its district and its Spring Festival.",
    href: "https://www.rittenhouserow.org/",
  },
] as const;

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "@id": `${SITE}/rittenhouse-square/things-to-do#article`,
  headline: "Things to Do in Rittenhouse Square",
  description:
    "A local guide to Rittenhouse Square, Philadelphia: the park itself, its annual traditions, and what's a short walk away — with sources.",
  url: `${SITE}/rittenhouse-square/things-to-do`,
  mainEntityOfPage: `${SITE}/rittenhouse-square/things-to-do`,
  datePublished: "2026-08-26",
  dateModified: "2026-08-26",
  author: { "@type": "Organization", name: "The Rittenhouse Residence", url: SITE },
  publisher: { "@type": "Organization", name: "The Rittenhouse Residence", url: SITE },
};

export default function ThingsToDoPage() {
  return (
    <div className="flex flex-col bg-[#fbfaf7] text-stone-950">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { name: "Home", path: "/" },
              { name: "Rittenhouse Square", path: "/rittenhouse-square" },
              {
                name: "Things to Do",
                path: "/rittenhouse-square/things-to-do",
              },
            ])
          ),
        }}
      />

      <section className="bg-stone-950 py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Eyebrow light className="mb-5">
            Rittenhouse Square Guide · Verified August 2026
          </Eyebrow>
          <h1 className="max-w-4xl font-serif text-5xl font-semibold leading-tight text-white md:text-7xl">
            Things to do in Rittenhouse Square.
          </h1>
          <p className="mt-7 max-w-3xl text-lg leading-8 text-stone-200 md:text-xl">
            The honest answer is that the Square&apos;s main activity is simply
            being in it — this is Philadelphia&apos;s living room. But the park
            keeps a real calendar, from a farmers market that runs twice a week
            to an art show held since 1928, and a short walk in any direction
            holds enough for a full day. Here&apos;s how locals use it.
          </p>
        </div>
      </section>

      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="In the Park"
            title="What the Square is actually for."
          />
          <div className="grid gap-px overflow-hidden rounded-lg border border-stone-200 bg-stone-200 md:grid-cols-2">
            {inThePark.map(([title, note]) => (
              <article key={title} className="bg-stone-50 p-6">
                <TreePine className="h-5 w-5 text-amber-800" />
                <h3 className="mt-5 font-serif text-2xl font-semibold">
                  {title}
                </h3>
                <p className="mt-3 text-base leading-7 text-stone-700">{note}</p>
              </article>
            ))}
          </div>
          <p className="mt-6 text-base leading-7 text-stone-700">
            The sculptures deserve their own stop —{" "}
            <Link
              href="/rittenhouse-square/public-art"
              className="inline-flex items-center gap-1 font-semibold text-amber-800 transition-colors hover:text-amber-900"
            >
              read the public art guide
              <ArrowRight className="h-4 w-4" />
            </Link>
          </p>
        </div>
      </section>

      <section className="bg-[#fbfaf7] py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="The Annual Calendar"
            title="The Square's traditions, by season."
            body="Rittenhouse Square has kept some of its rituals for more than a century. Dates below are from the organizers' own sites, verified August 2026."
          />
          <p className="-mt-4 mb-9 text-base leading-7 text-stone-700">
            For the citywide picture — conventions, festivals, marathons —{" "}
            <Link
              href="/philadelphia-events"
              className="inline-flex items-center gap-1 font-semibold text-amber-800 transition-colors hover:text-amber-900"
            >
              see the Philadelphia events calendar
              <ArrowRight className="h-4 w-4" />
            </Link>
          </p>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {annualCalendar.map(([event, when, note, href]) => (
              <article
                key={event}
                className="rounded-lg border border-stone-200 bg-white p-6"
              >
                <CalendarDays className="h-5 w-5 text-amber-800" />
                <h3 className="mt-5 font-serif text-2xl font-semibold">
                  <ExternalVenueLink href={href}>{event}</ExternalVenueLink>
                </h3>
                <p className="mt-2 text-xs font-semibold uppercase tracking-[0.16em] text-stone-500">
                  {when}
                </p>
                <p className="mt-4 text-sm leading-6 text-stone-700">{note}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="A Short Walk Away"
            title="When the bench isn't enough."
            body="The Square sits at the center of one of Center City's most walkable stretches. These are the stops we send guests to first."
          />
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {shortWalk.map(([name, address, note, href]) => (
              <article
                key={name}
                className="rounded-lg border border-stone-200 bg-stone-50 p-6"
              >
                <Landmark className="h-5 w-5 text-amber-800" />
                <h3 className="mt-5 font-serif text-2xl font-semibold">
                  <ExternalVenueLink href={href}>{name}</ExternalVenueLink>
                </h3>
                <p className="mt-2 text-xs font-semibold uppercase tracking-[0.16em] text-stone-500">
                  {address}
                </p>
                <p className="mt-4 text-sm leading-6 text-stone-700">{note}</p>
              </article>
            ))}
          </div>
          <p className="mt-6 text-base leading-7 text-stone-700">
            For restaurants, coffee, and the full guest-oriented rundown, see{" "}
            <Link
              href="/rittenhouse-square/restaurants"
              className="inline-flex items-center gap-1 font-semibold text-amber-800 transition-colors hover:text-amber-900"
            >
              the restaurant guide
              <ArrowRight className="h-4 w-4" />
            </Link>{" "}
            and{" "}
            <Link
              href="/neighborhood"
              className="inline-flex items-center gap-1 font-semibold text-amber-800 transition-colors hover:text-amber-900"
            >
              the neighborhood guide
              <ArrowRight className="h-4 w-4" />
            </Link>
          </p>
        </div>
      </section>

      <section className="bg-stone-100 py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Know Before You Go"
            title="Park basics."
            body="The short version of the official rules, from Philadelphia Parks & Recreation:"
          />
          <ul className="max-w-3xl space-y-4">
            {parkRules.map((rule) => (
              <li
                key={rule}
                className="flex gap-3 border-t border-stone-300 pt-4 text-base leading-7 text-stone-700"
              >
                <TreePine className="mt-1 h-5 w-5 flex-none text-amber-800" />
                {rule}
              </li>
            ))}
          </ul>
          <p className="mt-8 text-base leading-7 text-stone-700">
            More visiting questions — safety, parking, getting here — are
            answered on{" "}
            <Link
              href="/rittenhouse-square"
              className="inline-flex items-center gap-1 font-semibold text-amber-800 transition-colors hover:text-amber-900"
            >
              the main Rittenhouse Square guide
              <ArrowRight className="h-4 w-4" />
            </Link>
          </p>
        </div>
      </section>

      <SourceList sources={[...sources]} />

      <StayCta
        title="Make the Square your front yard for a weekend."
        body="1822 Pine Street is two blocks south of the park — an 8-bedroom historic house that sleeps 16. Saturday starts at the farmers market and ends with the whole group around one dining table."
      />

      <HubCrossLinks currentHref="/rittenhouse-square/things-to-do" />
    </div>
  );
}
