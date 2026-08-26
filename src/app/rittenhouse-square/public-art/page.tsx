import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Landmark } from "lucide-react";
import { Eyebrow } from "@/components/Eyebrow";
import {
  HubCrossLinks,
  SITE,
  SourceList,
  StayCta,
  breadcrumbSchema,
} from "../hub-shared";

// Every artwork fact on this page is verified against the Association for
// Public Art (associationforpublicart.org), the successor to the Fairmount
// Park Art Association, which documents each piece. Its "Around Rittenhouse
// Square" tour lists exactly these eight works — do not add works or dates
// from memory, and keep artist dates as aPA prints them (Barye is 1796–1875
// on aPA even though some modern sources say 1795). In-park locations are
// stated only where aPA or TCLF states them.

export const metadata: Metadata = {
  title: "Public Art in Rittenhouse Square",
  description:
    "All eight works of public art in Rittenhouse Square, Philadelphia — Barye's Lion Crushing a Serpent, Manship's Duck Girl, Billy the goat, the Giant Frog, the Price sundial, the White Memorial, the greyhounds, and the Gardener's Cottage Gates — with dates and sources.",
  alternates: { canonical: "/rittenhouse-square/public-art" },
  openGraph: {
    title: "Public Art in Rittenhouse Square | The Rittenhouse Residence",
    description:
      "A complete guide to the artworks of Rittenhouse Square — a French Romantic lion, a lost-and-found fountain girl, a goat polished gold by generations of children.",
    images: ["/images/neighborhood/philly-skyline.jpg"],
  },
};

type Artwork = {
  title: string;
  artist: string;
  gridYear: string;
  dates: string;
  location: string;
  story: string[];
  href: string;
};

const artworks: Artwork[] = [
  {
    title: "Lion Crushing a Serpent",
    artist: "Antoine-Louis Barye (1796–1875)",
    gridYear: "1832",
    dates: "Modeled 1832 · cast 1891 · installed 1892",
    location: "Center of the Square, near the main plaza",
    story: [
      "The Square's oldest resident is a French Romantic bronze: Barye's lion pinning a serpent, modeled in 1832 — the lion of monarchy crushing the serpent of evil, symbolism that won the approval of King Louis-Philippe himself.",
      "Philadelphians bought their cast the civic way: subscription books circulated from 1885, payment was made six years later, and the bronze was installed in 1892 — the first sculpture placed in Rittenhouse Square.",
    ],
    href: "https://www.associationforpublicart.org/artwork/lion-crushing-a-serpent/",
  },
  {
    title: "Duck Girl",
    artist: "Paul Manship (1885–1966)",
    gridYear: "1911",
    dates: "Created 1911 · in the Square since 1960",
    location: "The Children's Pool",
    story: [
      "Manship modeled this bronze of a girl carrying a duck in 1911, early in the career that would later produce Rockefeller Center's Prometheus. Exhibited at the Pennsylvania Academy of the Fine Arts in 1914, it won the Academy's Widener Gold Medal.",
      "Her path to the Square was not direct: placed in Germantown's Cloverly Park in 1916, she was damaged and moved into storage in 1956, then rescued and relocated to Rittenhouse Square's Children's Pool in 1960 — a lost-and-found story hiding in plain sight.",
    ],
    href: "https://www.associationforpublicart.org/artwork/duck-girl/",
  },
  {
    title: "Billy",
    artist: "Albert Laessle (1877–1954)",
    gridYear: "1914",
    dates: "Modeled 1914 · installed 1919 · recast 2018",
    location: "In the Square — finding him is half the fun",
    story: [
      "The Square's most-touched artwork: Laessle's billy goat, modeled in 1914 and installed in 1919 as a gift of Eli Kirk Price II through the Fairmount Park Art Association.",
      "A century of children climbing on his back polished the bronze to gold and wore him thin — so in 2018 Billy was recast, and the new casting carries on the tradition. If you see a child on a goat, you have found him.",
    ],
    href: "https://www.associationforpublicart.org/artwork/billy/",
  },
  {
    title: "Dr. J. William White Memorial",
    artist: "R. Tait McKenzie (1867–1938) with Paul Philippe Cret",
    gridYear: "1922",
    dates: "Created 1922",
    location: "On the reverse of the Cret fountain, central plaza",
    story: [
      "The Square's easiest artwork to miss: a bronze relief by the sculptor R. Tait McKenzie, designed with Paul Philippe Cret and set into the back of Cret's own fountain in 1922.",
      "It honors Dr. J. William White, a founding member of the Rittenhouse Square Improvement Association, and was commissioned by the Flower Market Association — the Square's civic circle memorializing one of its own, on the centerpiece he helped bring into being.",
    ],
    href: "https://www.associationforpublicart.org/artwork/dr-j-william-white-memorial/",
  },
  {
    title: "Giant Frog",
    artist: "Cornelia Van Auken Chapin (1893–1972)",
    gridYear: "1941",
    dates: "Carved and installed 1941",
    location: "In the Square, near the walks",
    story: [
      "Chapin, a sculptor known for her animal subjects, carved the frog in granite; the Rittenhouse Square Improvement Association gave it to the city in 1941.",
      "Like Billy, the frog has become a children's mount; its granite back is worn smooth from eight decades of climbing.",
    ],
    href: "https://www.associationforpublicart.org/artwork/giant-frog/",
  },
  {
    title: "Evelyn Taylor Price Memorial Sundial",
    artist: "Beatrice Fenton (1887–1983)",
    gridYear: "1947",
    dates: "Created 1947",
    location: "Along the northeast walkway",
    story: [
      "Two bronze children hold aloft a sundial shaped like a sunflower head — Fenton's memorial to Evelyn Taylor Price, president of the Rittenhouse Square Improvement Association and long-time president of the Flower Market Association.",
      "Commissioned by the Improvement Association and placed in 1947, shortly after Price's death, it ties the Square's art directly to the women who ran its civic life — the same tradition as the Flower Market itself, held here since 1914.",
    ],
    href: "https://www.associationforpublicart.org/artwork/evelyn-taylor-price-memorial-sundial/",
  },
  {
    title: "Greyhound Sculptures",
    artist: "Artist unknown",
    gridYear: "1988",
    dates: "Donated 1988",
    location: "Southwest entrance pillars",
    story: [
      "The pair of cast-stone greyhounds guarding the southwest gate were presented in 1988 by friends of the late Henry P. McIlhenny — the Philadelphia Museum of Art curator, collector, and longtime Rittenhouse Square resident, who had died two years earlier.",
      "They are the Square's quietest artwork: most people walk between them without noticing. Now you will.",
    ],
    href: "https://www.associationforpublicart.org/artwork/greyhound-sculptures/",
  },
  {
    title: "Gardener's Cottage Gates",
    artist: "Eric Berg",
    gridYear: "2010",
    dates: "Created 2010",
    location: "The Gardener's Cottage",
    story: [
      "The Square's newest work: Eric Berg's gates for the Gardener's Cottage, commissioned by the Friends of Rittenhouse Square as a memorial to longtime board member and resident Patty Hogan.",
      "From subscription books in 1885 to memorial gates in 2010, every work in the Square arrived the same way — given by the people who use it.",
    ],
    href: "https://www.associationforpublicart.org/tours/around-rittenhouse-square/",
  },
];

const sources = [
  {
    name: "Association for Public Art — Around Rittenhouse Square",
    detail:
      "The aPA tour documenting all eight works at the Square — the completeness check for this page.",
    href: "https://www.associationforpublicart.org/tours/around-rittenhouse-square/",
  },
  {
    name: "Association for Public Art — Lion Crushing a Serpent",
    detail:
      "Barye, modeled 1832, cast 1891, installed 1892 — the first sculpture in the Square.",
    href: "https://www.associationforpublicart.org/artwork/lion-crushing-a-serpent/",
  },
  {
    name: "Association for Public Art — Duck Girl",
    detail:
      "Manship, 1911; Widener Gold Medal 1914; Cloverly Park 1916; storage 1956; Rittenhouse Square 1960.",
    href: "https://www.associationforpublicart.org/artwork/duck-girl/",
  },
  {
    name: "Association for Public Art — Billy",
    detail: "Laessle, 1914; installed 1919; recast 2018.",
    href: "https://www.associationforpublicart.org/artwork/billy/",
  },
  {
    name: "Association for Public Art — Dr. J. William White Memorial",
    detail:
      "McKenzie with Cret, 1922; on the reverse of the fountain; commissioned by the Flower Market Association.",
    href: "https://www.associationforpublicart.org/artwork/dr-j-william-white-memorial/",
  },
  {
    name: "Association for Public Art — Giant Frog",
    detail:
      "Chapin, granite, 1941; gift of the Rittenhouse Square Improvement Association.",
    href: "https://www.associationforpublicart.org/artwork/giant-frog/",
  },
  {
    name: "Association for Public Art — Evelyn Taylor Price Memorial Sundial",
    detail:
      "Fenton, 1947; commissioned by the Rittenhouse Square Improvement Association.",
    href: "https://www.associationforpublicart.org/artwork/evelyn-taylor-price-memorial-sundial/",
  },
  {
    name: "Association for Public Art — Greyhound Sculptures",
    detail: "Cast stone; donated 1988 by friends of the late Henry P. McIlhenny.",
    href: "https://www.associationforpublicart.org/artwork/greyhound-sculptures/",
  },
  {
    name: "The Cultural Landscape Foundation — Rittenhouse Square",
    detail:
      "Cret's plaza, reflecting pool, urns, and balustrades — the designed setting; the sundial's northeast-walkway placement.",
    href: "https://www.tclf.org/landscapes/rittenhouse-square",
  },
] as const;

const itemListSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  "@id": `${SITE}/rittenhouse-square/public-art#list`,
  name: "Public art of Rittenhouse Square, Philadelphia",
  itemListElement: artworks.map((art, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: `${art.title} — ${art.artist}`,
  })),
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "@id": `${SITE}/rittenhouse-square/public-art#article`,
  headline: "Public Art in Rittenhouse Square: Every Work, With Sources",
  description:
    "A complete, sourced guide to the eight works of public art in Rittenhouse Square, Philadelphia, from Barye's 1892 lion to the 2010 Gardener's Cottage Gates.",
  url: `${SITE}/rittenhouse-square/public-art`,
  mainEntityOfPage: `${SITE}/rittenhouse-square/public-art`,
  image: [`${SITE}/images/neighborhood/philly-skyline.jpg`],
  datePublished: "2026-08-26",
  dateModified: "2026-08-26",
  author: { "@type": "Organization", name: "The Rittenhouse Residence", url: SITE },
  publisher: { "@type": "Organization", name: "The Rittenhouse Residence", url: SITE },
};

export default function PublicArtPage() {
  return (
    <div className="flex flex-col bg-[#fbfaf7] text-stone-950">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { name: "Home", path: "/" },
              { name: "Rittenhouse Square", path: "/rittenhouse-square" },
              { name: "Public Art", path: "/rittenhouse-square/public-art" },
            ])
          ),
        }}
      />

      <section className="bg-stone-950 py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Eyebrow light className="mb-5">
            Rittenhouse Square Guide · Sourced from the Association for Public
            Art
          </Eyebrow>
          <h1 className="max-w-4xl font-serif text-5xl font-semibold leading-tight text-white md:text-7xl">
            The public art of Rittenhouse Square.
          </h1>
          <p className="mt-7 max-w-3xl text-lg leading-8 text-stone-200 md:text-xl">
            Eight works of art live in the Square — a French Romantic lion, a
            fountain girl who spent four years lost in storage, a goat polished
            gold by a century of children, and a memorial hiding on the back of
            the fountain. Their stories are scattered across a half-dozen
            websites; this page collects all eight, dated and sourced, in the
            order they were made.
          </p>
        </div>
      </section>

      <section className="bg-[#fbfaf7] py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-px overflow-hidden rounded-lg border border-stone-200 bg-stone-200 sm:grid-cols-2 lg:grid-cols-4">
            {artworks.map((art) => (
              <div key={art.title} className="bg-stone-50 p-6">
                <p className="font-serif text-3xl font-semibold text-stone-950">
                  {art.gridYear}
                </p>
                <p className="mt-2 text-sm font-semibold text-stone-900">
                  {art.title}
                </p>
                <p className="mt-1 text-xs uppercase tracking-[0.14em] text-stone-500">
                  {art.artist}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {artworks.map((art, i) => (
        <section
          key={art.title}
          className={i % 2 === 0 ? "bg-white py-16 md:py-24" : "bg-stone-100 py-16 md:py-24"}
        >
          <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.85fr_1.15fr] lg:px-8">
            <div>
              <Eyebrow>{art.dates}</Eyebrow>
              <h2 className="mt-4 font-serif text-4xl font-semibold leading-tight md:text-5xl">
                {art.title}
              </h2>
              <p className="mt-4 text-sm font-semibold uppercase tracking-[0.16em] text-stone-500">
                {art.artist}
              </p>
              <p className="mt-2 inline-flex items-center gap-2 text-sm text-stone-500">
                <Landmark className="h-4 w-4 text-amber-800" />
                {art.location}
              </p>
            </div>
            <div className="space-y-6 text-lg leading-8 text-stone-700">
              {art.story.map((para) => (
                <p key={para.slice(0, 40)}>{para}</p>
              ))}
              <p>
                <a
                  href={art.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-base font-semibold text-amber-800 transition-colors hover:text-amber-900"
                >
                  Full record at the Association for Public Art
                  <ArrowRight className="h-4 w-4" />
                </a>
              </p>
            </div>
          </div>
        </section>
      ))}

      <section className="bg-stone-950 py-16 md:py-24">
        <div className="mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
          <Eyebrow light>The Setting Itself</Eyebrow>
          <p className="mt-8 font-serif text-3xl leading-tight text-white md:text-4xl">
            The artworks live inside a designed artwork: Paul Cret&apos;s 1913
            plan — the entrances, the balustrades, the central plaza and
            reflecting pool — still frames the Square today.
          </p>
          <Link
            href="/rittenhouse-square/history"
            className="mt-8 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.18em] text-amber-300 transition-colors hover:text-amber-200"
          >
            Read the full history of the Square
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      <SourceList sources={[...sources]} />

      <StayCta
        title="Sculpture hunt first, dinner after."
        body="All eight works are a two-block walk from 1822 Pine Street. Send the kids to find Billy and the frog; the house's own 8 bedrooms and two parlors are waiting when the hunt is over."
      />

      <HubCrossLinks currentHref="/rittenhouse-square/public-art" />
    </div>
  );
}
