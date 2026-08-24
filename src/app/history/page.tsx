import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BookOpen, FileText, Library, ScrollText } from "lucide-react";
import { Eyebrow } from "@/components/Eyebrow";
import archive from "@/data/document-archive.json";
import story from "@/data/story-chapters.json";
import timeline from "@/data/timeline.json";

export const metadata: Metadata = {
  title: "History of 1822 Pine Street",
  description:
    "The documented history of The Rittenhouse Residence: built in 1854, tied to Drexel banking heirs, suffrage activism, deeds, documents, and a verified timeline.",
};

const chapterCount = story.chapters.length;
const documentCount = archive.length;
const timelineCount = timeline.length;

const readingRoom = [
  {
    href: "/history/story",
    icon: BookOpen,
    label: `${chapterCount} chapters`,
    title: "The Story",
    body: "A narrative house history drawn from deeds, newspapers, architectural notes, and the rooms themselves.",
  },
  {
    href: "/history/timeline",
    icon: ScrollText,
    label: `${timelineCount} entries`,
    title: "Verified Timeline",
    body: "The documentary chronology, from the 1854 McCrea-to-Roset deed through the later life of the house.",
  },
  {
    href: "/history/documents",
    icon: FileText,
    label: `${documentCount}+ documents`,
    title: "Document Archive",
    body: "Primary-source deeds, clippings, notices, and research files behind the public history.",
  },
  {
    href: "/history/provenance",
    icon: Library,
    label: "Chain of title",
    title: "Provenance",
    body: "Ownership, transfers, and the paper trail that fixes 1822 Pine Street to specific people and dates.",
  },
];

const proofNotes = [
  ["1854", "John McCrea sells the newly completed townhouse at 1822 Pine Street to John Roset."],
  ["1893", "The property is reported sold for $14,000, then transferred from the Roset estate to Howard Spencer."],
  ["1899", "Agnes M. Spencer commissions Duhring, Okie & Ziegler for alterations and additions."],
  ["1915", "Miss Martha Davis of 1822 Pine Street sells Equal Franchise Society luncheon tickets."],
];

export default function HistoryPage() {
  return (
    <div className="flex flex-col bg-[#fbfaf7] text-stone-950">
      <section className="relative min-h-[640px] overflow-hidden">
        <Image
          src="/images/property/DSC00064.jpg"
          alt="Historic interior at 1822 Pine Street"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/55 to-black/20" />
        <div className="relative mx-auto flex min-h-[640px] max-w-7xl items-end px-4 pb-16 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <Eyebrow light className="mb-5">
              Built 1854 · 1822 Pine Street
            </Eyebrow>
            <h1 className="font-serif text-5xl font-semibold leading-[0.95] text-white md:text-7xl">
              A 170-year witness on Pine Street.
            </h1>
            <p className="mt-7 max-w-3xl text-lg leading-8 text-stone-100 md:text-xl">
              The house begins in the record on April 1, 1854, when John McCrea sold the newly completed townhouse to John Roset. From there the paper trail runs through Drexel family connections, the Spencer era, turn-of-century alterations, and the Davis women whose parlors became part of Philadelphia&apos;s suffrage movement.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#fbfaf7] py-16 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.85fr_1.15fr] lg:px-8">
          <div>
            <Eyebrow>The Record</Eyebrow>
          </div>
          <div>
            <h2 className="font-serif text-4xl font-semibold leading-tight md:text-5xl">
              The house is not a legend. It is a stack of receipts.
            </h2>
            <p className="mt-7 max-w-3xl text-lg leading-8 text-stone-700 first-letter:float-left first-letter:mr-3 first-letter:font-serif first-letter:text-7xl first-letter:leading-[0.8] first-letter:text-stone-950">
              The archive fixes the address to names, dates, and printed evidence: Roset, Spencer, Davis; a $14,000 sale; an 1899 architectural commission; a 1905 fireplace job; a 1915 suffrage notice. The best part of the house is that its claims can be checked.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-stone-950 py-16 md:py-24">
        <div className="mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
          <Eyebrow light>Archive Line</Eyebrow>
          <blockquote className="mt-8 font-serif text-3xl italic leading-tight text-white md:text-5xl">
            &ldquo;The threshold remembers everything and judges nothing.&rdquo;
          </blockquote>
          <p className="mt-7 text-sm font-semibold uppercase tracking-[0.18em] text-amber-300">
            From the house history archive
          </p>
        </div>
      </section>

      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 max-w-3xl">
            <Eyebrow>Reading Room</Eyebrow>
            <h2 className="mt-4 font-serif text-4xl font-semibold leading-tight md:text-5xl">
              Four ways into the evidence.
            </h2>
            <p className="mt-5 text-lg leading-8 text-stone-700">
              Start with the narrative, check the timeline, open the documents, or follow the ownership record. Each path points back to the same address.
            </p>
          </div>

          <div className="grid gap-px overflow-hidden rounded-lg border border-stone-200 bg-stone-200 md:grid-cols-2">
            {readingRoom.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="group bg-stone-50 p-7 transition-colors hover:bg-white"
              >
                <div className="flex items-start justify-between gap-5">
                  <item.icon className="h-7 w-7 text-amber-800" />
                  <ArrowRight className="h-5 w-5 text-stone-400 transition-transform group-hover:translate-x-1 group-hover:text-amber-800" />
                </div>
                <p className="mt-8 text-[11px] font-semibold uppercase tracking-[0.2em] text-amber-800">
                  {item.label}
                </p>
                <h3 className="mt-3 font-serif text-3xl font-semibold text-stone-950">
                  {item.title}
                </h3>
                <p className="mt-4 max-w-md text-base leading-7 text-stone-700">
                  {item.body}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-stone-100 py-16 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:px-8">
          <div>
            <Eyebrow>Proof Points</Eyebrow>
            <h2 className="mt-4 font-serif text-4xl font-semibold leading-tight md:text-5xl">
              The dates that hold the story in place.
            </h2>
          </div>
          <div className="grid gap-5 md:grid-cols-2">
            {proofNotes.map(([year, note]) => (
              <article key={year} className="rounded-lg border border-stone-200 bg-white p-6">
                <p className="font-serif text-4xl font-semibold text-stone-950">{year}</p>
                <p className="mt-4 leading-7 text-stone-700">{note}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#fbfaf7] py-16 md:py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
            <Image
              src="/images/documents/1854-deed.jpg"
              alt="1854 deed document for 1822 Pine Street"
              fill
              className="object-cover"
            />
          </div>
          <div>
            <Eyebrow>Documents</Eyebrow>
            <h2 className="mt-4 font-serif text-4xl font-semibold leading-tight md:text-5xl">
              Sleep somewhere with a paper trail.
            </h2>
            <p className="mt-5 text-lg leading-8 text-stone-700">
              Read the deed abstracts, newspaper notices, and supporting files, then come back to the rooms they describe. The archive is not decoration; it is the reason the house can speak so specifically.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/history/documents"
                className="inline-flex items-center justify-center gap-2 rounded-md border border-stone-300 bg-white px-6 py-3 text-base font-semibold text-stone-950 transition-colors hover:border-amber-800 hover:text-amber-900"
              >
                Open the archive
                <ArrowRight className="h-5 w-5" />
              </Link>
              <Link
                href="/book"
                className="inline-flex items-center justify-center rounded-md bg-stone-950 px-6 py-3 text-base font-semibold text-white transition-colors hover:bg-stone-800"
              >
                Check Availability
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
