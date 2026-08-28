import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MapPin, UtensilsCrossed } from "lucide-react";
import { Eyebrow } from "@/components/Eyebrow";
import {
  ExternalVenueLink,
  HubCrossLinks,
  SITE,
  SectionHeader,
  StayCta,
  breadcrumbSchema,
} from "../hub-shared";

// Venue facts verified August 2026 against each restaurant's own site plus
// press coverage (closures cross-checked with the Philadelphia Inquirer).
// Restaurants close and chefs move — re-verify before editing any entry, and
// keep the "Recently changed" section current: stale recommendations are how
// neighborhood guides lose trust.

export const metadata: Metadata = {
  title: "Restaurants Near Rittenhouse Square",
  description:
    "Where to eat near Rittenhouse Square, Philadelphia — the tables facing the park on 18th Street, the blocks around it, and what changed recently.",
  alternates: { canonical: "/rittenhouse-square/restaurants" },
  openGraph: {
    title: "Restaurants Near Rittenhouse Square | The Rittenhouse Residence",
    description:
      "The tables on and around Rittenhouse Square — sidewalk brasseries, a Michelin-starred dining room three blocks away, and what changed this year.",
    type: "article",
    images: ["/images/venues/parc.jpg"],
  },
};

// [name, cuisine, address, note, website]
const onTheSquare = [
  [
    "Parc",
    "French brasserie",
    "227 S 18th St",
    "Stephen Starr's all-day brasserie with sidewalk tables facing the park — the closest thing the Square has to a front porch. Breakfast service on weekday mornings.",
    "https://parc-restaurant.com",
  ],
  [
    "Rouge",
    "American bistro",
    "205 S 18th St",
    "Café-style seating on the Square's east side since 1998 — Rouge helped invent the see-and-be-seen sidewalk scene here.",
    "https://www.rouge98.com",
  ],
  [
    "Barclay Prime",
    "Steakhouse",
    "237 S 18th St",
    "Starr's boutique steakhouse in the old Barclay hotel, open since 2004 and famous for its Wagyu cheesesteak.",
    "https://barclayprime.com",
  ],
] as const;

const nearTheSquare = [
  [
    "The Love",
    "New American",
    "130 S 18th St",
    "The neighborhood-restaurant collaboration between Stephen Starr and Aimee Olexy, half a block north of the park.",
    "https://theloverestaurant.com",
  ],
  [
    "The Dandelion",
    "British gastropub",
    "124 S 18th St",
    "A warren of fireplace rooms and proper Sunday roasts, one block north of the Square.",
    "https://thedandelionpub.com",
  ],
  [
    "a.kitchen + a.bar",
    "American, wine-focused",
    "135 S 18th St",
    "Ellen Yin's wine-driven corner room at AKA Rittenhouse Square, facing the park's northeast corner.",
    "https://akitchenandbar.com",
  ],
  [
    "Lacroix",
    "French-inspired fine dining",
    "210 W Rittenhouse Sq",
    "The Rittenhouse hotel's dining room overlooking the treetops — its Sunday brunch is a Philadelphia institution.",
    "https://www.lacroixrestaurant.com",
  ],
  [
    "Via Locusta",
    "Italian",
    "1723 Locust St",
    "Handmade pasta from chef Jeff Michaud, a two-minute walk east of the Square.",
    "https://www.vialocusta.com",
  ],
] as const;

const worthTheWalk = [
  [
    "Vernick Food & Drink",
    "New American",
    "2031 Walnut St",
    "James Beard Award–winning chef Greg Vernick's flagship, three blocks west — book well ahead; tables go quickly.",
    "https://www.vernickphilly.com",
  ],
  [
    "Friday Saturday Sunday",
    "Tasting menu",
    "261 S 21st St",
    "James Beard Outstanding Restaurant 2023 and holder of a Michelin star — a compact dining room three blocks southwest of the park.",
    "https://www.fridaysaturdaysunday.com",
  ],
] as const;

const itemListSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  "@id": `${SITE}/rittenhouse-square/restaurants#list`,
  name: "Restaurants near Rittenhouse Square, Philadelphia",
  itemListElement: [...onTheSquare, ...nearTheSquare, ...worthTheWalk].map(
    ([name, , address], i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: `${name} — ${address}`,
    })
  ),
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "@id": `${SITE}/rittenhouse-square/restaurants#article`,
  headline: "Restaurants Near Rittenhouse Square",
  description:
    "A local guide to dining on and around Rittenhouse Square in Philadelphia: the sidewalk tables facing the park, the blocks around it, and what changed recently.",
  url: `${SITE}/rittenhouse-square/restaurants`,
  mainEntityOfPage: `${SITE}/rittenhouse-square/restaurants`,
  image: [`${SITE}/images/venues/parc.jpg`],
  datePublished: "2026-08-26",
  dateModified: "2026-08-26",
  author: { "@type": "Organization", name: "The Rittenhouse Residence", url: SITE },
  publisher: { "@type": "Organization", name: "The Rittenhouse Residence", url: SITE },
};

export default function RittenhouseSquareRestaurantsPage() {
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
              { name: "Restaurants", path: "/rittenhouse-square/restaurants" },
            ])
          ),
        }}
      />

      <section className="relative min-h-[520px] overflow-hidden">
        <Image
          src="/images/venues/parc.jpg"
          alt="Brunch plate of eggs Benedict at Parc, the French brasserie facing Rittenhouse Square"
          fill
          sizes="100vw"
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/45 to-black/25" />
        <div className="relative mx-auto flex min-h-[520px] max-w-7xl items-end px-4 pb-16 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <Eyebrow light className="mb-5">
              A Neighbor&apos;s Rittenhouse Square Guide
            </Eyebrow>
            <h1 className="font-serif text-5xl font-semibold leading-[0.95] text-white md:text-7xl">
              Restaurants near Rittenhouse Square.
            </h1>
            <p className="mt-7 max-w-3xl text-lg leading-8 text-stone-100 md:text-xl">
              The Square is ringed by one of the best eating stretches in
              Philadelphia — sidewalk brasseries on 18th Street, hotel dining
              rooms above the trees, and a Michelin-starred tasting menu three
              blocks away. This guide is written from two blocks south and kept
              current: we revisit the list as the neighborhood changes.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="On the Square"
            title="The 18th Street row, facing the park."
            body="Three restaurants put tables directly opposite the Square's east side. On a warm evening this block is the city's dining room."
          />
          <div className="grid gap-px overflow-hidden rounded-lg border border-stone-200 bg-stone-200 md:grid-cols-3">
            {onTheSquare.map(([name, cuisine, address, note, website]) => (
              <article key={name} className="bg-stone-50 p-6">
                <UtensilsCrossed className="h-5 w-5 text-amber-800" />
                <h3 className="mt-5 font-serif text-2xl font-semibold">
                  <ExternalVenueLink href={website}>{name}</ExternalVenueLink>
                </h3>
                <p className="mt-1 text-sm text-amber-800">{cuisine}</p>
                <p className="mt-4 text-base leading-7 text-stone-700">{note}</p>
                <p className="mt-3 inline-flex items-center gap-2 text-sm text-stone-500">
                  <MapPin className="h-4 w-4" />
                  {address}
                </p>
              </article>
            ))}
          </div>
          <div className="mt-6 rounded-lg border border-amber-200 bg-amber-50 p-5 text-amber-950">
            <h3 className="font-semibold">Recently changed on this block</h3>
            <p className="mt-2 text-sm leading-6">
              Devon Seafood Grill (225 S 18th St), on the Square since 1999,
              has closed. Stephen Starr&apos;s Greek restaurant
              The Pelican Club is expected to open in the space in late 2026,
              per the Philadelphia Inquirer. We&apos;ll update this page when it
              does — guides that still recommend Devon are out of date.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#fbfaf7] py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Within a Block or Two"
            title="Just off the park."
            body="Step one block in any direction and the options multiply. These are the rooms we send guests to most."
          />
          <div className="grid gap-px overflow-hidden rounded-lg border border-stone-200 bg-stone-200 md:grid-cols-2">
            {nearTheSquare.map(([name, cuisine, address, note, website]) => (
              <article key={name} className="bg-stone-50 p-5">
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <h3 className="font-serif text-2xl font-semibold">
                      <ExternalVenueLink href={website}>{name}</ExternalVenueLink>
                    </h3>
                    <p className="mt-1 text-sm text-amber-800">{cuisine}</p>
                  </div>
                </div>
                <p className="mt-4 text-base leading-7 text-stone-700">{note}</p>
                <p className="mt-3 inline-flex items-center gap-2 text-sm text-stone-500">
                  <MapPin className="h-4 w-4" />
                  {address}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.85fr_1.15fr] lg:px-8">
          <div>
            <Eyebrow>Worth the Walk</Eyebrow>
            <h2 className="mt-4 font-serif text-4xl font-semibold leading-tight md:text-5xl">
              Three blocks, two of the city&apos;s best rooms.
            </h2>
          </div>
          <div className="grid gap-5">
            {worthTheWalk.map(([name, cuisine, address, note, website]) => (
              <article
                key={name}
                className="rounded-lg border border-stone-200 bg-stone-50 p-6"
              >
                <h3 className="font-serif text-2xl font-semibold">
                  <ExternalVenueLink href={website}>{name}</ExternalVenueLink>
                </h3>
                <p className="mt-1 text-sm text-amber-800">{cuisine}</p>
                <p className="mt-4 text-base leading-7 text-stone-700">{note}</p>
                <p className="mt-3 inline-flex items-center gap-2 text-sm text-stone-500">
                  <MapPin className="h-4 w-4" />
                  {address}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-stone-100 py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Mornings & Markets"
            title="Before the dinner reservation."
            body="Parc serves breakfast on weekday mornings, and Farm to City runs the Rittenhouse farmers market at 18th & Walnut on Saturdays and Tuesdays, year-round. For the full coffee-and-groceries rundown from our block, use the neighborhood guide."
          />
          <div className="flex flex-col gap-4 sm:flex-row">
            <Link
              href="/neighborhood"
              className="inline-flex items-center justify-center gap-2 rounded-md bg-stone-950 px-6 py-3 text-base font-semibold text-white transition-colors hover:bg-stone-800"
            >
              Coffee & breakfast near the house
              <ArrowRight className="h-5 w-5" />
            </Link>
            <Link
              href="/neighborhood/group-dining"
              className="inline-flex items-center justify-center gap-2 rounded-md border border-stone-300 bg-white px-6 py-3 text-base font-semibold text-stone-950 transition-colors hover:border-amber-800 hover:text-amber-900"
            >
              Feeding a group of 12–16
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      <StayCta
        title="Eat your way around the Square, then walk home."
        body="Every restaurant on this page is within a ten-minute walk of The Rittenhouse Residence — an 8-bedroom historic house that sleeps 16, with a dining table that seats the whole group when you'd rather bring dinner home."
      />

      <HubCrossLinks currentHref="/rittenhouse-square/restaurants" />
    </div>
  );
}
