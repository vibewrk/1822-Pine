import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BedDouble, Building2, MapPin } from "lucide-react";
import { Eyebrow } from "@/components/Eyebrow";
import {
  ExternalVenueLink,
  HubCrossLinks,
  SITE,
  SectionHeader,
  breadcrumbSchema,
} from "../hub-shared";

// Hotel facts verified August 2026 against each property's own site (opening
// years from the hotels' own history pages). This page names our competitors
// on purpose: an honest lodging guide is more useful — and more credible —
// than a pitch. Keep the disclosure block; it is the page's spine.

export const metadata: Metadata = {
  title: "Where to Stay Near Rittenhouse Square",
  description:
    "An honest local guide to staying near Rittenhouse Square, Philadelphia: the hotels on and around the park, what each does best, and the whole-house option for groups of up to 16.",
  alternates: { canonical: "/rittenhouse-square/where-to-stay" },
  openGraph: {
    title:
      "Where to Stay Near Rittenhouse Square | The Rittenhouse Residence",
    description:
      "The hotels on and around Rittenhouse Square, what each does best, and the whole-house option for groups — written by locals who run one of the options.",
    type: "article",
    images: ["/images/property/DSC00112.jpg"],
  },
};

// [name, address, note, website]
const onSquareHotels = [
  [
    "The Rittenhouse Hotel",
    "210 W Rittenhouse Square",
    "The Square's flagship since 1989, directly on the park's west side — home to Lacroix and the neighborhood's most storied afternoon tea.",
    "https://www.rittenhousehotel.com",
  ],
  [
    "AKA Rittenhouse Square",
    "135 S 18th St",
    "Extended-stay hotel residences in a beaux-arts landmark at 18th & Walnut, facing the park's northeast corner — the pick for stays of a week or more.",
    "https://www.stayaka.com/aka-rittenhouse-square",
  ],
  [
    "The Warwick Hotel Rittenhouse Square",
    "220 S 17th St",
    "A grande-dame hotel that has hosted guests since 1928, one block east of the park, completing a top-to-bottom renovation in 2026.",
    "https://www.warwickrittenhouse.com",
  ],
  [
    "Sofitel Philadelphia at Rittenhouse Square",
    "120 S 17th St",
    "The French-flagged option a block off the park — polished, business-friendly, and steps from Walnut Street shopping.",
    "https://www.sofitel-philadelphia.com",
  ],
  [
    "Kimpton Hotel Palomar",
    "117 S 17th St",
    "A boutique hotel in a restored Art Deco landmark at 17th & Sansom, with Kimpton's pet-friendly, social-hour style.",
    "https://www.hotelpalomar-philadelphia.com",
  ],
  [
    "Hyatt Centric Rittenhouse Square",
    "1620 Chancellor St",
    "Opened in 2020 on a quiet side street half a block from Walnut, a short walk to the park's northeast corner.",
    "https://www.hyatt.com/hyatt-centric/en-US/phlct-hyatt-centric-rittenhouse-square-philadelphia",
  ],
] as const;

const nearbyHotels = [
  [
    "The Ritz-Carlton, Philadelphia",
    "10 Avenue of the Arts",
    "A converted neoclassical bank building on Broad Street — about four blocks east of the Square, closer to the Avenue of the Arts theaters than the park.",
    "https://www.ritzcarlton.com/en/hotels/phlrz-the-ritz-carlton-philadelphia/overview/",
  ],
  [
    "W Philadelphia + Element Philadelphia",
    "1439–1441 Chestnut St",
    "A dual-branded tower that opened in 2021 — W for scene, Element for kitchens and longer stays — about three blocks northeast of the Square.",
    "https://www.marriott.com/en-us/hotels/phlwh-w-philadelphia/overview/",
  ],
] as const;

const groupMath = [
  ["6–8", "hotel rooms a group of 12–16 typically needs"],
  ["8", "bedrooms at 1822 Pine under one roof"],
  ["16", "guests the house sleeps, two blocks from the park"],
  ["1", "dining table that seats the whole group"],
] as const;

const faqs = [
  {
    q: "Which hotels are directly on Rittenhouse Square?",
    a: "The Rittenhouse Hotel (210 W Rittenhouse Square) fronts the park itself, and AKA Rittenhouse Square (135 S 18th St) faces the park's northeast corner. The Warwick, Sofitel, and Kimpton Hotel Palomar are within about a block on 17th Street.",
  },
  {
    q: "Can a group of 12–16 stay together near Rittenhouse Square?",
    a: "Hotels split a group of that size across six or more rooms, often on different floors. The whole-house alternative is 1822 Pine Street — The Rittenhouse Residence — an 8-bedroom historic townhouse two blocks south of the park that sleeps up to 16 under one roof, with two kitchens and a dining table that seats the full group.",
  },
  {
    q: "Where should wedding guests stay near Rittenhouse Square?",
    a: "For couples' room blocks, the hotels on and near the park all handle them. For the wedding party or both families together, a whole-house stay keeps everyone under one roof for the weekend — see our wedding guest housing guide for how groups usually split the house's 8 bedrooms.",
  },
  {
    q: "Is Rittenhouse Square a good area to stay in Philadelphia?",
    a: "It is one of Center City's most walkable bases: the park at the center, the Walnut Street shopping corridor along the park's north edge, dozens of restaurants within five minutes on foot, and SEPTA and PATCO stations within a few blocks. Most guests staying here never move their car.",
  },
] as const;

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "@id": `${SITE}/rittenhouse-square/where-to-stay#article`,
  headline: "Where to Stay Near Rittenhouse Square",
  description:
    "An honest local guide to the hotels on and around Rittenhouse Square in Philadelphia, and the whole-house option for groups of up to 16.",
  url: `${SITE}/rittenhouse-square/where-to-stay`,
  mainEntityOfPage: `${SITE}/rittenhouse-square/where-to-stay`,
  image: [`${SITE}/images/property/DSC00112.jpg`],
  datePublished: "2026-08-26",
  dateModified: "2026-08-26",
  author: { "@type": "Organization", name: "The Rittenhouse Residence", url: SITE },
  publisher: { "@type": "Organization", name: "The Rittenhouse Residence", url: SITE },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id": `${SITE}/rittenhouse-square/where-to-stay#faq`,
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.q,
    acceptedAnswer: { "@type": "Answer", text: faq.a },
  })),
};

export default function WhereToStayPage() {
  return (
    <div className="flex flex-col bg-[#fbfaf7] text-stone-950">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
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
              {
                name: "Where to Stay",
                path: "/rittenhouse-square/where-to-stay",
              },
            ])
          ),
        }}
      />

      <section className="bg-stone-950 py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Eyebrow light className="mb-5">
            Rittenhouse Square Guide · Walked in August 2026
          </Eyebrow>
          <h1 className="max-w-4xl font-serif text-5xl font-semibold leading-tight text-white md:text-7xl">
            Where to stay near Rittenhouse Square.
          </h1>
          <p className="mt-7 max-w-3xl text-lg leading-8 text-stone-200 md:text-xl">
            We run one of the options on this page — an 8-bedroom historic
            house two blocks from the park. The hotels are here too, because
            they&apos;re good at what they do and the right answer depends on
            your group. Here is how we&apos;d choose.
          </p>
        </div>
      </section>

      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="The Hotels"
            title="On and around the Square."
            body="Six hotels sit on the park or within a couple of blocks of it. The opening years come from the hotels' own histories, and we checked in August 2026 that each was still taking guests."
          />
          <div className="grid gap-px overflow-hidden rounded-lg border border-stone-200 bg-stone-200 md:grid-cols-2 lg:grid-cols-3">
            {onSquareHotels.map(([name, address, note, website]) => (
              <article key={name} className="bg-stone-50 p-6">
                <Building2 className="h-5 w-5 text-amber-800" />
                <h3 className="mt-5 font-serif text-2xl font-semibold">
                  <ExternalVenueLink href={website}>{name}</ExternalVenueLink>
                </h3>
                <p className="mt-2 inline-flex items-center gap-2 text-sm text-stone-500">
                  <MapPin className="h-4 w-4" />
                  {address}
                </p>
                <p className="mt-4 text-base leading-7 text-stone-700">{note}</p>
              </article>
            ))}
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {nearbyHotels.map(([name, address, note, website]) => (
              <article
                key={name}
                className="rounded-lg border border-stone-200 bg-white p-6"
              >
                <h3 className="font-serif text-2xl font-semibold">
                  <ExternalVenueLink href={website}>{name}</ExternalVenueLink>
                </h3>
                <p className="mt-2 inline-flex items-center gap-2 text-sm text-stone-500">
                  <MapPin className="h-4 w-4" />
                  {address}
                </p>
                <p className="mt-4 text-base leading-7 text-stone-700">{note}</p>
              </article>
            ))}
          </div>

          <div className="mt-6 rounded-lg border border-amber-200 bg-amber-50 p-5 text-amber-950">
            <h3 className="font-semibold">Recently closed</h3>
            <p className="mt-2 text-sm leading-6">
              ROOST Apartment Hotel&apos;s Rittenhouse location (1831 Chestnut
              St) closed in July 2025 and is not taking guests as of August
              2026. Older &ldquo;where to stay&rdquo; roundups still list it.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-stone-100 py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="The Group Problem"
            title="Hotels are built for couples. Groups do math."
            body="A reunion, wedding contingent, or milestone-birthday crew of 12–16 doesn't fit a hotel room — it fits six to eight of them, spread across floors, with the group's only common space a lobby."
          />
          <div className="grid gap-px overflow-hidden rounded-lg border border-stone-200 bg-stone-200 sm:grid-cols-2 lg:grid-cols-4">
            {groupMath.map(([value, label]) => (
              <div key={label} className="bg-stone-50 p-6">
                <p className="font-serif text-4xl font-semibold text-stone-950">
                  {value}
                </p>
                <p className="mt-3 text-sm leading-6 text-stone-600">{label}</p>
              </div>
            ))}
          </div>
          <p className="mt-8 max-w-3xl text-lg leading-8 text-stone-700">
            That math is why this house exists as lodging: 1822 Pine Street is
            an 1854 townhouse two blocks south of the Square with 8 bedrooms, 6
            baths, two kitchens, and a dining table that seats the whole group
            — the group stays together, and the Square is still a two-minute
            walk. For a line-by-line comparison against booking a block of
            rooms, see the hotel-alternative page.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/stay"
              className="inline-flex items-center justify-center gap-2 rounded-md bg-stone-950 px-6 py-3 text-base font-semibold text-white transition-colors hover:bg-stone-800"
            >
              <BedDouble className="h-5 w-5" />
              Tour the house
            </Link>
            <Link
              href="/hotel-alternative"
              className="inline-flex items-center justify-center gap-2 rounded-md border border-stone-300 bg-white px-6 py-3 text-base font-semibold text-stone-950 transition-colors hover:border-amber-800 hover:text-amber-900"
            >
              House vs. hotel block, compared
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Common Questions"
            title="Choosing a base near the Square."
          />
          <div className="grid gap-5 md:grid-cols-2">
            {faqs.map((faq) => (
              <article
                key={faq.q}
                className="rounded-lg border border-stone-200 bg-stone-50 p-6"
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
          <p className="mt-8 text-base leading-7 text-stone-700">
            Housing wedding guests?{" "}
            <Link
              href="/groups/weddings"
              className="inline-flex items-center gap-1 font-semibold text-amber-800 transition-colors hover:text-amber-900"
            >
              Read the wedding guest housing guide
              <ArrowRight className="h-4 w-4" />
            </Link>
          </p>
        </div>
      </section>

      <section className="relative py-20 md:py-28">
        <Image
          src="/images/property/DSC00112.jpg"
          alt="Gallery-hung hallway and staircase inside The Rittenhouse Residence at 1822 Pine Street"
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/65" />
        <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="font-serif text-4xl font-semibold leading-tight text-white md:text-5xl">
            The whole group, two blocks from the park.
          </h2>
          <p className="mt-5 text-lg text-stone-200 md:text-xl">
            8 bedrooms · sleeps 16 · from $1,600/night for the entire house
          </p>
          <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              href="/book"
              className="inline-flex items-center justify-center rounded-md bg-white px-8 py-4 text-base font-semibold text-stone-950 shadow-lg transition-colors hover:bg-stone-100"
            >
              Check Availability
            </Link>
            <Link
              href="/rates"
              className="inline-flex items-center justify-center gap-2 rounded-md border border-white/70 px-8 py-4 text-base font-semibold text-white transition-colors hover:bg-white/10"
            >
              See rates
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      <HubCrossLinks currentHref="/rittenhouse-square/where-to-stay" />
    </div>
  );
}
