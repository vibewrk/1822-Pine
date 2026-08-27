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
    "The documented history of The Rittenhouse Residence: an 1854 townhouse with a Drexel family connection, suffrage-era stories, deeds, and a verified timeline.",
  alternates: { canonical: "/history" },
  openGraph: {
    title: "History | The Rittenhouse Residence",
    description:
      "Deeds, documents, and 170 years of Philadelphia history at 1822 Pine Street.",
    images: ["/images/documents/1854-deed.jpg"],
  },
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

// The build-date evidence, published because "c. 1845" circulates on the
// listing sites and is wrong. Counts are from the full OCR text of McElroy's
// Philadelphia directory for each year: every distinct "<nnn> Pine" house
// number in the volume, bucketed by block. 1822 Pine was 756 Pine before the
// 1858 renumbering. Working: research/build-date-2026-08/CONCLUSION.md
const frontier = [
  ["1849", "399", 0],
  ["1850", "514", 0],
  ["1851", "486", 0],
  ["1852", "534", 0],
  ["1853", "708", 0],
  ["1854", "793", 9],
  ["1855", "795", 19],
  ["1856", "795", 20],
] as const;

const proofNotes = [
  ["1854", "Builder John McCrea sells 1822 Pine to John Roset on April 21; the Rosets are listed at the address by 1855."],
  ["1893", "The property is reported sold for $14,000, then transferred from the Roset estate to the Spencer family."],
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
          sizes="100vw"
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
              The record opens on April 21, 1854, when the builder John McCrea sold this house to the merchant John Roset. It was a new house on a brand-new block: until 1853 nobody at all was listed on Pine Street west of about 15th, and then the city moved west a block a year and arrived here. From that first spring the paper trail runs through a Drexel marriage, the Spencer era, the turn-of-century alterations, and the Davis women whose parlors became part of Philadelphia&apos;s suffrage movement.
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
            <Eyebrow>How Old Is It, Really</Eyebrow>
            <h2 className="mt-4 font-serif text-4xl font-semibold leading-tight md:text-5xl">
              You will see &ldquo;c. 1845&rdquo; for this house. It is off by
              nine years, and here is how we know.
            </h2>
            <p className="mt-5 text-lg leading-8 text-stone-700">
              Philadelphia&rsquo;s city directory listed every household in the
              city, year after year, by street number. Count the Pine Street
              numbers in each volume and you can watch the city itself move
              west — and see the exact year it reaches this door.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full min-w-[34rem] border-collapse text-left">
              <caption className="sr-only">
                Occupied Pine Street house numbers by city-directory volume,
                1849&ndash;1856
              </caption>
              <thead>
                <tr className="border-b border-stone-300">
                  <th scope="col" className="py-3 pr-4 text-[11px] font-semibold uppercase tracking-[0.16em] text-stone-500">
                    Directory
                  </th>
                  <th scope="col" className="py-3 pr-4 text-[11px] font-semibold uppercase tracking-[0.16em] text-stone-500">
                    Westernmost house on Pine
                  </th>
                  <th scope="col" className="py-3 text-[11px] font-semibold uppercase tracking-[0.16em] text-stone-500">
                    Houses occupied on this block
                  </th>
                </tr>
              </thead>
              <tbody>
                {frontier.map(([year, highest, here]) => (
                  <tr key={year} className="border-b border-stone-200">
                    <td className="py-3 pr-4 font-serif text-2xl font-semibold text-stone-950">
                      {year}
                    </td>
                    <td className="py-3 pr-4 text-base tabular-nums text-stone-600">
                      no. {highest}
                    </td>
                    <td className="py-3">
                      {here === 0 ? (
                        <span className="text-base text-stone-400">none</span>
                      ) : (
                        <span className="flex items-center gap-3">
                          <span
                            aria-hidden="true"
                            className="h-2.5 rounded-full bg-amber-700"
                            style={{ width: `${(here / 20) * 9}rem` }}
                          />
                          <span className="text-base font-semibold tabular-nums text-stone-950">
                            {here}
                          </span>
                        </span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-10 grid gap-8 lg:grid-cols-2">
            <p className="text-lg leading-8 text-stone-700">
              Through 1852 the occupied end of Pine Street stops around 15th.
              Not one house number in the 700s — this block, under the old
              numbering — appears in any volume before 1853. Then the frontier
              moves about a block a year: it reaches the 1700 block in 1853 and
              this one in 1854. John McCrea sold the house to John Roset on
              April 21 of that year, and Roset is listed at the address in the
              next volume printed.
            </p>
            <p className="text-lg leading-8 text-stone-700">
              As for &ldquo;c. 1845&rdquo; — it belongs to the block next door.
              The 1983 National Register nomination uses that date for
              1700&ndash;38 Pine, and never for this row. The city&rsquo;s own
              property record fills the year-built field with &ldquo;1800&rdquo;
              and flags it as an estimate. A house standing here in 1845 would
              have sat empty for eight years, four blocks past the last lit
              window on the street.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#fbfaf7] py-16 md:py-24">
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

      {/* The Drexel chain. Every link has a document behind it: the 1854 deed
          abstract for Roset's ownership, Roset's own 1870 obituary naming
          A. J. Drexel as a son-in-law, and the public record of Drexel's
          firms. Keep the framing at "son-in-law" — Drexel married Ellen in
          1850, four years before her father bought this house, and never
          lived here. "Family connection" is accurate; "Drexel's house" is
          not, and would be the easiest claim on the site to disprove. */}
      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 max-w-3xl">
            <Eyebrow>The Drexel Connection</Eyebrow>
            <h2 className="mt-4 font-serif text-4xl font-semibold leading-tight md:text-5xl">
              The first owner&apos;s son-in-law founded a university and a bank.
            </h2>
            <p className="mt-5 text-lg leading-8 text-stone-700">
              This is the house&apos;s most improbable-sounding claim, and it
              is the easiest one to check. Four links, each with a record
              behind it:
            </p>
          </div>

          <ol className="grid gap-5 md:grid-cols-2">
            {[
              [
                "John Roset buys the house",
                "April 21, 1854. The deed abstract in this archive names the builder John McCrea as seller and John Roset, merchant, as buyer.",
              ],
              [
                "His daughter marries Anthony J. Drexel",
                "Ellen Bicking Rozet wed the banker on August 13, 1850. Roset's own obituary, printed in the Evening Telegraph on August 10, 1870, names the sons-in-law: “Mr. Roset's daughters married several of our most prominent citizens, among whom are A. J. Drexel, Dr. J. L. Ludlow, and John A. Brodhead.”",
              ],
              [
                "Drexel founds Drexel University",
                "He established the Drexel Institute of Art, Science and Industry in 1891 — the institution that became Drexel University. Ellen died on November 27, 1891, weeks before it opened.",
              ],
              [
                "And the bank that became JPMorgan Chase",
                "On July 1, 1871, Drexel and J. Pierpont Morgan founded Drexel, Morgan & Co. In 1895, two years after Drexel's death, it was reorganised as J.P. Morgan & Co. — which merged with Chase Manhattan in 2000. JPMorgan Chase names Drexel, Morgan & Co. among its original predecessor firms.",
              ],
            ].map(([title, body], i) => (
              <li
                key={title}
                className="flex gap-4 rounded-lg border border-stone-200 bg-stone-50 p-6"
              >
                <span className="font-serif text-3xl font-semibold text-amber-800">
                  {i + 1}
                </span>
                <div>
                  <h3 className="font-serif text-2xl font-semibold text-stone-950">
                    {title}
                  </h3>
                  <p className="mt-3 text-base leading-7 text-stone-700">
                    {body}
                  </p>
                </div>
              </li>
            ))}
          </ol>

          <p className="mt-8 max-w-3xl text-base leading-7 text-stone-600">
            One limit worth stating, because it is where this story usually
            gets overstated elsewhere: Anthony Drexel never lived at 1822 Pine
            Street. He married Ellen four years before her father bought the
            house, and the couple lived on Rittenhouse Square itself. The
            connection runs through the family, not the deed — which is still
            a remarkable thing for a rowhouse to be able to prove.
          </p>
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
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
          <div>
            <Eyebrow>Documents</Eyebrow>
            <h2 className="mt-4 font-serif text-4xl font-semibold leading-tight md:text-5xl">
              Stay somewhere with a history you can read.
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
