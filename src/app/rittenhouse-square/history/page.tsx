import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BookOpen, Landmark, ScrollText } from "lucide-react";
import { Eyebrow } from "@/components/Eyebrow";
import {
  HubCrossLinks,
  SITE,
  SectionHeader,
  SourceList,
  StayCta,
  breadcrumbSchema,
} from "../hub-shared";

// FACT DISCIPLINE: every dated claim below is verified against the numbered
// sources at the bottom of the page; each timeline entry lists its source
// numbers. Two deliberate wordings, do not "fix" them:
// - The plan year is given as "drawn 1682, published on Holme's 1683 map"
//   because sources genuinely split between 1681/1682/1683.
// - William Rittenhouse's mill is "the first paper mill in British North
//   America" (RittenhouseTown's own phrasing), not "in America."
// The Rittenhouse-Fitler district joined the NATIONAL Register in 1983 and
// the PHILADELPHIA Register in February 1995 — different registers, both real.

export const metadata: Metadata = {
  title: "History of Rittenhouse Square",
  description:
    "A sourced timeline of Rittenhouse Square, Philadelphia: from Southwest Square in Penn and Holme's plan to the 1825 renaming for David Rittenhouse, Paul Cret's 1913 redesign, and today — every claim cited.",
  alternates: { canonical: "/rittenhouse-square/history" },
  openGraph: {
    title: "History of Rittenhouse Square | The Rittenhouse Residence",
    description:
      "From the Governor's Woods to Paul Cret's plan — a documented timeline of Philadelphia's Rittenhouse Square, with sources for every claim.",
    type: "article",
    images: ["/images/neighborhood/philly-skyline.jpg"],
  },
};

const stats = [
  ["Five", "open squares in Penn & Holme's original city plan"],
  ["1825", "renamed by City Council for David Rittenhouse"],
  ["1913", "Paul Philippe Cret's redesign — largely intact today"],
  ["1981", "listed on the National Register of Historic Places"],
] as const;

// [year, title, body, sourceRefs]
const timeline = [
  [
    "1682–83",
    "One of Penn's five squares",
    "William Penn and Surveyor-General Thomas Holme lay out Philadelphia's grid with five open squares — drawn in their 1682 “Portraiture,” published on Holme's map in 1683. The southwest square is the future Rittenhouse Square.",
    "1, 4",
  ],
  [
    "1700s",
    "The Governor's Woods",
    "Through most of the eighteenth century the southwest square sits in dense woods known as the Governor's Woods — cleared in the years leading up to American independence.",
    "2",
  ],
  [
    "1816",
    "The first improvements",
    "Neighboring residents begin improving the square — lawns are planted and a wooden fence goes up to keep out grazing animals.",
    "2",
  ],
  [
    "1825",
    "Southwest Square becomes Rittenhouse Square",
    "City Councils rename the square to honor David Rittenhouse — astronomer, instrument maker, and first director of the United States Mint.",
    "1, 2, 3",
  ],
  [
    "1840",
    "The first house on the Square",
    "The first house facing the square is erected, opening the residential era that will make this one of Philadelphia's most coveted Victorian addresses.",
    "5",
  ],
  [
    "1854",
    "Two blocks south, a townhouse is sold",
    "The builder John McCrea sells 1822 Pine Street — the house that publishes this page — to the merchant John Roset; the family is listed at the address by 1855. Its deed chain, published in our archive, runs unbroken from that sale to today.",
    "House archive",
  ],
  [
    "1857–59",
    "Church of the Holy Trinity rises",
    "John Notman's brownstone church goes up on the square's northwest corner: cornerstone 1857, first services March 1859. Nine years later its rector, Phillips Brooks, writes “O Little Town of Bethlehem” for the church's Sunday School, set to music by organist Lewis Redner.",
    "10",
  ],
  [
    "1892",
    "The first sculpture arrives",
    "Barye's Lion Crushing a Serpent — bought by public subscription — is installed: the first sculpture in the square.",
    "8",
  ],
  [
    "1897–98",
    "One of the grandest mansions",
    "Sarah Drexel Fell commissions Peabody & Stearns to build the mansion at 18th & Walnut; she moves in by 1898 with her new husband, Alexander Van Rensselaer. The Fell–Van Rensselaer House still anchors that corner.",
    "15",
  ],
  [
    "By 1900",
    "America's drawing room",
    "Some of America's most prominent families keep primary residences on the square — the peak of its Victorian aristocracy.",
    "2",
  ],
  [
    "1913",
    "Paul Cret redraws the square",
    "The newly formed Rittenhouse Square Improvement Association commissions architect Paul Philippe Cret, fresh from the Benjamin Franklin Parkway, to redesign the six-acre square. His entrances, central plaza, stone balustrades, reflecting pool, and fountain remain largely unchanged today.",
    "2, 4, 5",
  ],
  [
    "May 20, 1914",
    "The first Flower Market",
    "A century-spanning tradition begins: the first Flower Market raises $1,250 each for The Children's Hospital, the Hope Day Nursery, and the Improvement Association.",
    "3",
  ],
  [
    "May 1914",
    "Pennsylvania's first suffrage demonstration",
    "Philadelphia's suffrage societies hold the state's first suffrage demonstration in Rittenhouse Square before marching to Washington Square. The movement had an address two blocks south, too — see the suffrage record of 1822 Pine Street.",
    "9",
  ],
  [
    "1915–1926",
    "The Art Alliance comes to the square",
    "Christine Wetherill Stevenson founds the Philadelphia Art Alliance in 1915; in 1926 it moves into the Wetherill family's 1906 mansion at 18th and Manning Streets, across from the square's southeast corner.",
    "16",
  ],
  [
    "Oct 13, 1924",
    "Curtis Institute opens",
    "Mary Louise Curtis Bok founds the Curtis Institute of Music in three historic mansions on the square — and a century later, the conservatory is still there.",
    "11",
  ],
  [
    "1950",
    "The collector on the square",
    "Henry P. McIlhenny — Philadelphia Museum of Art curator and later board chairman — buys 1914 Rittenhouse Square, filling it with one of the era's great private collections. After the Second World War, the square's mansions increasingly give way to high-rise living.",
    "2, 13",
  ],
  [
    "1976",
    "The Friends are founded",
    "Following renovations for the Bicentennial, the Friends of Rittenhouse Square is established as the park's nonprofit steward, working with Philadelphia Parks & Recreation — the Improvement Association's modern successor.",
    "2",
  ],
  [
    "1981–1995",
    "Onto the registers",
    "The square is listed on the National Register of Historic Places in 1981. The surrounding Rittenhouse–Fitler Residential Historic District follows: National Register 1983, Philadelphia Register February 1995 — 1822 Pine Street is a contributing property.",
    "4, 12",
  ],
  [
    "2025",
    "The square keeps evolving",
    "After the University of the Arts' 2024 closure, the Curtis Institute buys the Art Alliance building at auction for $7.6 million — the square's institutions still trading places a century on.",
    "14",
  ],
] as const;

const sources = [
  {
    name: "Encyclopedia of Greater Philadelphia — Public Parks",
    detail:
      "Penn & Holme's 1682 “Portraiture,” the five original squares, and the 1825 renamings.",
    href: "https://philadelphiaencyclopedia.org/essays/public-parks-philadelphia/",
  },
  {
    name: "Friends of Rittenhouse Square — Our History",
    detail:
      "Governor's Woods, the 1816 improvements, the 1825 renaming, the 1913 Cret commission, and the Friends' founding after 1976.",
    href: "https://www.friendsofrittenhouse.org/about/our-history",
  },
  {
    name: "Pennsylvania Center for the Book — “The Galvanizing Garden”",
    detail:
      "Penn State's essay: the Southwest Square renaming and the first Flower Market, May 20, 1914.",
    href: "https://pabook.libraries.psu.edu/literary-cultural-heritage-map-pa/feature-articles/galvanizing-garden-tale-rittenhouse-sq",
  },
  {
    name: "The Cultural Landscape Foundation — Rittenhouse Square",
    detail:
      "Southwest Square in 1682; the Improvement Association and Cret; the plaza, pool, and balustrades; 1981 National Register listing.",
    href: "https://www.tclf.org/landscapes/rittenhouse-square",
  },
  {
    name: "ushistory.org — Rittenhouse Square Walking Tour",
    detail:
      "The first house facing the square (1840) and Cret's entrances, plaza, railings, pool, and fountain.",
    href: "https://www.ushistory.org/districts/rittenhouse/",
  },
  {
    name: "American National Biography — David Rittenhouse",
    detail:
      "“Rittenhouse, David (1732–1796), astronomer, mathematician, and maker of mathematical instruments.”",
    href: "https://www.anb.org/view/10.1093/anb/9780198606697.001.0001/anb-9780198606697-e-1301396",
  },
  {
    name: "Historic RittenhouseTown / PHMC marker",
    detail:
      "William Rittenhouse's 1690 mill in Germantown — the first paper mill in British North America — and David's birthplace.",
    href: "https://rittenhousetown.org/about/",
  },
  {
    name: "Association for Public Art — Lion Crushing a Serpent",
    detail: "Cast 1891, installed 1892: the first sculpture in the square.",
    href: "https://www.associationforpublicart.org/artwork/lion-crushing-a-serpent/",
  },
  {
    name: "Encyclopedia of Greater Philadelphia — Woman Suffrage",
    detail:
      "“…held the state's first suffrage demonstration in Rittenhouse Square before marching on Market Street to Washington Square.” (May 1914)",
    href: "https://philadelphiaencyclopedia.org/essays/woman-suffrage/",
  },
  {
    name: "Church of the Holy Trinity — History",
    detail:
      "Cornerstone 1857, first services March 1859, architect John Notman; the 1868 carol per the Encyclopedia of Greater Philadelphia.",
    href: "https://htrit.org/history/",
  },
  {
    name: "Curtis Institute of Music — History",
    detail:
      "Opened October 13, 1924; founded by Mary Louise Curtis Bok in three mansions on the square.",
    href: "https://www.curtis.edu/about/history/",
  },
  {
    name: "Hidden City Philadelphia — Rittenhouse–Fitler at 30",
    detail:
      "District boundaries; National Register 1983; Philadelphia Register February 1995.",
    href: "https://hiddencityphila.org/2025/05/rittenhouse-fitler-historic-district-celebrates-30th-anniversary/",
  },
  {
    name: "Philadelphia Museum of Art Archives — Henry P. McIlhenny",
    detail:
      "McIlhenny's 1950 purchase of 1914 Rittenhouse Square; curator for 25 years, board chairman from 1976.",
    href: "https://pmalibrary.libraryhost.com/repositories/3/resources/317",
  },
  {
    name: "Higher Ed Dive — UArts bankruptcy auction",
    detail:
      "The Curtis Institute's $7.6M purchase of the Art Alliance building, January 2025.",
    href: "https://www.highereddive.com/news/university-of-the-arts-sells-buildings-auction-curtis-institute-temple-university/737617/",
  },
  {
    name: "The Philadelphia Inquirer — 1801 Walnut Street",
    detail:
      "The Fell–Van Rensselaer House: commissioned 1897 by Sarah Drexel Fell, Peabody & Stearns; occupied 1898.",
    href: "https://www.inquirer.com/philly/business/20140107_Historic_jewel_1801_Walnut_could_draw__35M.html",
  },
  {
    name: "CraftNOW Philadelphia — The Philadelphia Art Alliance",
    detail:
      "Founded 1915 by Christine Wetherill Stevenson; moved into the 1906 Wetherill mansion in 1926.",
    href: "https://www.craftnowphila.org/essays/philadelphia-art-alliance/",
  },
] as const;

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "@id": `${SITE}/rittenhouse-square/history#article`,
  headline: "History of Rittenhouse Square: A Sourced Timeline",
  description:
    "A documented timeline of Rittenhouse Square in Philadelphia, from Penn and Holme's plan and the Governor's Woods to the 1825 renaming for David Rittenhouse, Paul Cret's 1913 redesign, and today. Every claim is cited to its source.",
  url: `${SITE}/rittenhouse-square/history`,
  mainEntityOfPage: `${SITE}/rittenhouse-square/history`,
  datePublished: "2026-08-26",
  dateModified: "2026-08-26",
  author: { "@type": "Organization", name: "The Rittenhouse Residence", url: SITE },
  publisher: { "@type": "Organization", name: "The Rittenhouse Residence", url: SITE },
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
};

export default function RittenhouseSquareHistoryPage() {
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
              { name: "History", path: "/rittenhouse-square/history" },
            ])
          ),
        }}
      />

      <section className="bg-stone-950 py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Eyebrow light className="mb-5">
            Rittenhouse Square Guide · Every Claim Cited
          </Eyebrow>
          <h1 className="max-w-4xl font-serif text-5xl font-semibold leading-tight text-white md:text-7xl">
            The history of Rittenhouse Square.
          </h1>
          <p className="mt-7 max-w-3xl text-lg leading-8 text-stone-200 md:text-xl">
            The square&apos;s story is usually told in fragments — a paragraph on a
            tourism site here, a plaque there. This page assembles the
            documented timeline in one place, from the Governor&apos;s Woods to
            Paul Cret&apos;s plan to last year&apos;s news, with a numbered
            source for every claim. We publish history the same way two blocks
            south, where our own house&apos;s archive holds 63 primary
            documents.
          </p>
        </div>
      </section>

      <section className="bg-[#fbfaf7] py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-px overflow-hidden rounded-lg border border-stone-200 bg-stone-200 md:grid-cols-2 lg:grid-cols-4">
            {stats.map(([value, label]) => (
              <div key={label} className="bg-stone-50 p-6">
                <p className="font-serif text-3xl font-semibold text-stone-950">
                  {value}
                </p>
                <p className="mt-3 text-sm leading-6 text-stone-600">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.85fr_1.15fr] lg:px-8">
          <div>
            <Eyebrow>The Name</Eyebrow>
            <h2 className="mt-4 font-serif text-4xl font-semibold leading-tight md:text-5xl">
              Which Rittenhouse? A short disambiguation.
            </h2>
            <BookOpen className="mt-8 h-8 w-8 text-amber-800" />
          </div>
          <div className="space-y-6 text-lg leading-8 text-stone-700">
            <p>
              The square honors <strong>David Rittenhouse</strong> (1732–1796)
              — astronomer, mathematician, and maker of scientific instruments,
              appointed by George Washington as the first director of the
              United States Mint. City Councils gave his name to the old
              Southwest Square in 1825, three decades after his death.
            </p>
            <p>
              He was the great-grandson of <strong>William Rittenhouse</strong>,
              who in 1690 built the first paper mill in British North America
              on a Germantown creek — the settlement survives as Historic
              RittenhouseTown, up the Wissahickon in Germantown, a different
              place from the square that borrows the family name. And the luxury hotel on the square&apos;s west
              side is named after the square, not the other way around. One
              family name, three different places.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#fbfaf7] py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="The Timeline"
            title="Three and a half centuries, documented."
            body="Numbers after each entry point to the source list at the bottom of this page."
          />
          <div className="space-y-0">
            {timeline.map(([year, title, body, refs]) => (
              <article
                key={`${year}-${title}`}
                className="grid gap-3 border-t border-stone-300 py-7 md:grid-cols-[180px_1fr] md:gap-8"
              >
                <p className="font-serif text-2xl font-semibold text-amber-800">
                  {year}
                </p>
                <div>
                  <h3 className="font-serif text-2xl font-semibold text-stone-950">
                    {title}
                  </h3>
                  <p className="mt-3 max-w-3xl text-base leading-7 text-stone-700">
                    {body}{" "}
                    {title === "Pennsylvania's first suffrage demonstration" && (
                      <Link
                        href="/history/suffrage"
                        className="inline-flex items-center gap-1 font-semibold text-amber-800 transition-colors hover:text-amber-900"
                      >
                        Read that record
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                    )}
                    {year === "1854" && (
                      <Link
                        href="/history/provenance"
                        className="inline-flex items-center gap-1 font-semibold text-amber-800 transition-colors hover:text-amber-900"
                      >
                        See the chain of title
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                    )}
                  </p>
                  <p className="mt-2 text-xs font-semibold uppercase tracking-[0.16em] text-stone-500">
                    {refs === "House archive" ? (
                      <>Source: the 1822 Pine document archive</>
                    ) : (
                      <>Sources: {refs}</>
                    )}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-stone-950 py-16 md:py-24">
        <div className="mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
          <Eyebrow light>May 1914</Eyebrow>
          <blockquote className="mt-8 font-serif text-3xl italic leading-tight text-white md:text-4xl">
            &ldquo;…many of the city&apos;s suffrage societies, including the
            Men&apos;s League, held the state&apos;s first suffrage
            demonstration in Rittenhouse Square…&rdquo;
          </blockquote>
          <p className="mt-7 text-sm font-semibold uppercase tracking-[0.18em] text-amber-300">
            Encyclopedia of Greater Philadelphia
          </p>
          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-stone-200">
            Five months earlier, a resident of 1822 Pine Street — two blocks
            south — had lent her name to the suffragists&apos; tax-resistance
            campaign, and a year later the Equal Franchise Society&apos;s
            treasurer was selling luncheon tickets from the same address. The
            movement that marched in the Square lived on these blocks.
          </p>
          <Link
            href="/history/suffrage"
            className="mt-8 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.18em] text-amber-300 transition-colors hover:text-amber-200"
          >
            The suffrage record of 1822 Pine Street
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.85fr_1.15fr] lg:px-8">
          <div>
            <Eyebrow>The Cret Plan</Eyebrow>
            <h2 className="mt-4 font-serif text-4xl font-semibold leading-tight md:text-5xl">
              Why the square still works.
            </h2>
            <Landmark className="mt-8 h-8 w-8 text-amber-800" />
          </div>
          <div className="space-y-6 text-lg leading-8 text-stone-700">
            <p>
              Nearly everything you touch in Rittenhouse Square today — the
              corner entrances, the diagonal walks, the stone balustrades, the
              central plaza with its reflecting pool and fountain — comes from
              one commission: in 1913, the newly formed Rittenhouse Square
              Improvement Association hired Paul Philippe Cret, the French-born
              architect fresh from planning the Benjamin Franklin Parkway, to
              redesign the six-acre square.
            </p>
            <p>
              The Cultural Landscape Foundation notes that apart from small
              alterations, Cret&apos;s design remains intact — which makes the
              square a rare thing: a great American public space still running
              on its original 1913 operating system. The sculptures arrived
              one by one to furnish it;{" "}
              <Link
                href="/rittenhouse-square/public-art"
                className="font-semibold text-amber-800 transition-colors hover:text-amber-900"
              >
                their stories have a page of their own
              </Link>
              .
            </p>
          </div>
        </div>
      </section>

      <SourceList sources={[...sources]} />

      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div>
            <Eyebrow>Primary Sources, Two Blocks South</Eyebrow>
            <h2 className="mt-4 font-serif text-4xl font-semibold leading-tight md:text-5xl">
              We do this for our own house, too.
            </h2>
            <p className="mt-5 text-lg leading-8 text-stone-700">
              The same discipline behind this timeline — publish the record,
              cite the source, say plainly what isn&apos;t known — built the
              archive of 1822 Pine Street: 63 deeds, clippings, and documents
              from 1854 to today, free to read.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/history/documents"
                className="inline-flex items-center justify-center gap-2 rounded-md bg-stone-950 px-6 py-3 text-base font-semibold text-white transition-colors hover:bg-stone-800"
              >
                <ScrollText className="h-5 w-5" />
                Open the archive
              </Link>
              <Link
                href="/history"
                className="inline-flex items-center justify-center rounded-md border border-stone-300 bg-white px-6 py-3 text-base font-semibold text-stone-950 transition-colors hover:border-amber-800 hover:text-amber-900"
              >
                The house&apos;s history
              </Link>
            </div>
          </div>
          <div className="rounded-lg border border-stone-200 bg-stone-50 p-8">
            <p className="font-serif text-2xl font-semibold text-stone-950">
              Corrections welcome
            </p>
            <p className="mt-4 text-base leading-7 text-stone-700">
              If you find an error on this page — a date, a name, an
              attribution — <Link href="/contact" className="font-semibold text-amber-800 hover:text-amber-900">tell us</Link> and
              we will check the source and fix it. That&apos;s the deal we make
              with every page of history we publish.
            </p>
          </div>
        </div>
      </section>

      <StayCta />

      <HubCrossLinks currentHref="/rittenhouse-square/history" />
    </div>
  );
}
