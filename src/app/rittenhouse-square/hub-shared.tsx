import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ExternalLink } from "lucide-react";
import { Eyebrow } from "@/components/Eyebrow";

// Shared pieces for the /rittenhouse-square content hub.
//
// Fact discipline (same rule as the history archive): every historical or
// factual claim on these pages must trace to a source listed in the page's
// SourceList, or be framed as observation/opinion. Venue and event details
// drift — when updating, re-verify against the organizer's own site before
// changing dates, schedules, or "still operating" claims.

export const SITE = "https://rittenhouseresidence.com";

export const HUB_PAGES = [
  {
    href: "/rittenhouse-square",
    title: "Rittenhouse Square",
    short: "The Guide",
    blurb:
      "What the Square is, how the park and the neighborhood fit together, and how to use both.",
  },
  {
    href: "/rittenhouse-square/history",
    title: "History of Rittenhouse Square",
    short: "History",
    blurb:
      "From Southwest Square in Penn's 1683 plan to Paul Cret's 1913 redesign — with sources.",
  },
  {
    href: "/rittenhouse-square/public-art",
    title: "Public Art in Rittenhouse Square",
    short: "Public Art",
    blurb:
      "All eight works, from Barye's 1892 lion to the 2010 cottage gates — who made them and when.",
  },
  {
    href: "/rittenhouse-square/things-to-do",
    title: "Things to Do in Rittenhouse Square",
    short: "Things to Do",
    blurb:
      "The park's annual traditions, the blocks around it, and what fits a morning versus a full day.",
  },
  {
    href: "/rittenhouse-square/restaurants",
    title: "Rittenhouse Square Restaurants",
    short: "Restaurants",
    blurb:
      "The tables on and facing the Square, and where locals actually walk one block to eat.",
  },
  {
    href: "/philadelphia-events",
    title: "Philadelphia Events Calendar",
    short: "Events",
    blurb:
      "Conventions, festivals, and the dates that book out the city — verified against organizers.",
  },
  {
    href: "/rittenhouse-square/where-to-stay",
    title: "Where to Stay Near Rittenhouse Square",
    short: "Where to Stay",
    blurb:
      "The hotels on the Square, what each does well, and the whole-house option for groups.",
  },
] as const;

export function SectionHeader({
  eyebrow,
  title,
  body,
}: {
  eyebrow: string;
  title: string;
  body?: string;
}) {
  return (
    <div className="mb-9 max-w-3xl">
      <Eyebrow>{eyebrow}</Eyebrow>
      <h2 className="mt-4 font-serif text-4xl font-semibold leading-tight text-stone-950 md:text-5xl">
        {title}
      </h2>
      {body && <p className="mt-5 text-lg leading-8 text-stone-700">{body}</p>}
    </div>
  );
}

export function ExternalVenueLink({
  href,
  children,
}: {
  href: string;
  children: ReactNode;
}) {
  if (!href) return <span>{children}</span>;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-1 transition-colors hover:text-amber-800"
    >
      {children}
      <ExternalLink className="h-3.5 w-3.5" />
    </a>
  );
}

export type Source = {
  name: string;
  detail: string;
  href: string;
};

/**
 * On-page citations. These pages exist to be cited, so they cite: every
 * historical claim above maps to an entry here, linked to the institution
 * that holds the record.
 */
export function SourceList({ sources }: { sources: Source[] }) {
  return (
    <section className="bg-stone-100 py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Sources"
          title="Where these facts come from."
          body="Every historical claim on this page traces to the sources below. If you find an error, tell us and we will correct it."
        />
        <ol className="grid gap-4 md:grid-cols-2">
          {sources.map((source, i) => (
            <li
              key={source.href}
              className="flex gap-4 rounded-lg border border-stone-200 bg-white p-5"
            >
              <span className="font-serif text-2xl font-semibold text-amber-800">
                {i + 1}
              </span>
              <div>
                <a
                  href={source.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 font-semibold text-stone-950 transition-colors hover:text-amber-900"
                >
                  {source.name}
                  <ExternalLink className="h-3.5 w-3.5 flex-none" />
                </a>
                <p className="mt-1 text-sm leading-6 text-stone-600">
                  {source.detail}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

/** "More from the guide" band — every hub page links its siblings. */
export function HubCrossLinks({
  currentHref,
  title = "More from the Rittenhouse Square guide.",
}: {
  currentHref: string;
  title?: string;
}) {
  const siblings = HUB_PAGES.filter((page) => page.href !== currentHref);

  return (
    <section className="bg-[#fbfaf7] py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader eyebrow="Keep Reading" title={title} />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {siblings.map((page) => (
            <Link
              key={page.href}
              href={page.href}
              className="group rounded-lg border border-stone-200 bg-white p-6 transition-colors hover:border-amber-800"
            >
              <h3 className="font-serif text-2xl font-semibold text-stone-950">
                {page.title}
              </h3>
              <p className="mt-3 text-sm leading-6 text-stone-700">
                {page.blurb}
              </p>
              <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-amber-800 transition-colors group-hover:text-amber-900">
                Read the page
                <ArrowRight className="h-4 w-4" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

/** Conversion band: the honest pitch, kept identical across the hub. */
export function StayCta({
  title = "Stay two blocks from the Square.",
  body = "This guide is written from 1822 Pine Street — an 8-bedroom historic house two blocks south of Rittenhouse Square that hosts groups of up to 16. The neighborhood in these pages is our daily walk.",
}: {
  title?: string;
  body?: string;
}) {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
        <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
          <Image
            src="/images/property/DSC00088.jpg"
            alt="Interior of The Rittenhouse Residence at 1822 Pine Street, two blocks from Rittenhouse Square"
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
          />
        </div>
        <div>
          <Eyebrow>From 1822 Pine Street</Eyebrow>
          <h2 className="mt-4 font-serif text-4xl font-semibold leading-tight text-stone-950 md:text-5xl">
            {title}
          </h2>
          <p className="mt-5 text-lg leading-8 text-stone-700">{body}</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/stay"
              className="inline-flex items-center justify-center gap-2 rounded-md bg-stone-950 px-6 py-3 text-base font-semibold text-white transition-colors hover:bg-stone-800"
            >
              Tour the house
              <ArrowRight className="h-5 w-5" />
            </Link>
            <Link
              href="/history"
              className="inline-flex items-center justify-center rounded-md border border-stone-300 bg-white px-6 py-3 text-base font-semibold text-stone-950 transition-colors hover:border-amber-800 hover:text-amber-900"
            >
              Read the house history
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export function breadcrumbSchema(
  items: Array<{ name: string; path: string }>
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `${SITE}${item.path}`,
    })),
  };
}
