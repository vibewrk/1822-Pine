import type { Metadata } from "next";
import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  CalendarClock,
  ExternalLink,
  Home,
  UtensilsCrossed,
} from "lucide-react";
import { Eyebrow } from "@/components/Eyebrow";
import diningData from "@/data/group-dining.json";

export const metadata: Metadata = {
  title: "Group Dining Near Rittenhouse Square",
  description:
    "How to feed 12–16 near Rittenhouse Square: one reserved anchor dinner, a splinter-table plan, and dinner at the house with seating for 16 and two kitchens.",
  alternates: { canonical: "/neighborhood/group-dining" },
  openGraph: {
    title: "Group Dining Near Rittenhouse Square | The Rittenhouse Residence",
    description:
      "Three plays for feeding a group of 12–16 in Center City Philadelphia, anchored two blocks from Rittenhouse Square.",
    images: ["/images/venues/parc.jpg"],
  },
};

const SITE = "https://rittenhouseresidence.com";

const playIcons = [CalendarClock, UtensilsCrossed, Home];

const playBackgrounds = ["bg-white", "bg-stone-100", "bg-[#fbfaf7]"];

function ExternalVenueLink({
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

function BreadcrumbJsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${SITE}/` },
      { "@type": "ListItem", position: 2, name: "Neighborhood", item: `${SITE}/neighborhood` },
      { "@type": "ListItem", position: 3, name: "Group Dining", item: `${SITE}/neighborhood/group-dining` },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export default function GroupDiningPage() {
  const { strategy, plays } = diningData;

  return (
    <div className="flex flex-col bg-[#fbfaf7] text-stone-950">
      <BreadcrumbJsonLd />

      <section className="relative min-h-[560px] overflow-hidden">
        <Image
          src="/images/venues/parc.jpg"
          alt="Parc restaurant facing Rittenhouse Square"
          fill
          sizes="100vw"
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/45 to-black/20" />
        <div className="relative mx-auto flex min-h-[560px] max-w-7xl items-end px-4 pb-16 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <Eyebrow light className="mb-5">
              Group Dining
            </Eyebrow>
            <h1 className="font-serif text-5xl font-semibold leading-[0.95] text-white md:text-7xl">
              Dinner for sixteen is a strategy, not a reservation.
            </h1>
            <p className="mt-7 max-w-3xl text-lg leading-8 text-stone-100 md:text-xl">
              {"No single restaurant move feeds a houseful gracefully every night. The groups that eat best near Rittenhouse Square run three plays: one anchor dinner booked early, splinter tables when tastes diverge, and the dining room at the house when nobody wants to put shoes on."}
            </p>
          </div>
        </div>
      </section>

      <section className="border-y border-stone-200 bg-white py-10">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-lg border border-amber-200 bg-amber-50 p-6 text-amber-950 sm:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.22em]">
              The one rule that matters
            </p>
            <p className="mt-3 text-lg leading-8">{strategy}</p>
          </div>
        </div>
      </section>

      {plays.map((play, index) => {
        const Icon = playIcons[index] ?? UtensilsCrossed;
        return (
          <section key={play.title} className={`${playBackgrounds[index] ?? "bg-white"} py-16 md:py-24`}>
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="mb-9 max-w-3xl">
                <Eyebrow>{`Play ${index + 1}`}</Eyebrow>
                <h2 className="mt-4 flex items-start gap-3 font-serif text-4xl font-semibold leading-tight text-stone-950 md:text-5xl">
                  <Icon className="mt-2 h-8 w-8 flex-none text-amber-800" />
                  {play.title}
                </h2>
                <p className="mt-5 text-lg leading-8 text-stone-700">{play.body}</p>
              </div>
              <div className="grid gap-px overflow-hidden rounded-lg border border-stone-200 bg-stone-200 md:grid-cols-2 lg:grid-cols-4">
                {play.venues.map((venue) => (
                  <article key={venue.name} className="bg-stone-50 p-5">
                    <h3 className="font-serif text-2xl font-semibold">
                      <ExternalVenueLink href={venue.url}>{venue.name}</ExternalVenueLink>
                    </h3>
                    <p className="mt-3 text-sm leading-6 text-stone-700">{venue.note}</p>
                  </article>
                ))}
              </div>
            </div>
          </section>
        );
      })}

      <section className="bg-white py-12">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <p className="text-lg leading-8 text-stone-700">
            {"Every restaurant above appears in the full neighborhood guide, with addresses, walking times, and the rest of the block-by-block picture."}
          </p>
          <Link
            href="/neighborhood"
            className="mt-5 inline-flex items-center gap-2 text-base font-semibold text-amber-800 transition-colors hover:text-amber-900"
          >
            Read the neighborhood guide
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </section>

      <section className="relative py-20 md:py-28">
        <Image
          src="/images/airbnb/airbnb_04.jpg"
          alt="Grand parlor at The Rittenhouse Residence"
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/65" />
        <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="font-serif text-4xl font-semibold leading-tight text-white md:text-5xl">
            The best private dining room is the one downstairs from your bedroom.
          </h2>
          <p className="mt-5 text-lg text-stone-200 md:text-xl">
            Dining for 16 · two kitchens · a roof deck for the regroup
          </p>
          <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              href="/book"
              className="inline-flex items-center justify-center rounded-md bg-white px-8 py-4 text-base font-semibold text-stone-950 shadow-lg transition-colors hover:bg-stone-100"
            >
              Check Availability
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
  );
}
