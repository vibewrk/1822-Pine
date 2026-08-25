import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  CircleSlash,
  Download,
  FileText,
  Landmark,
  ScrollText,
} from "lucide-react";
import { Eyebrow } from "@/components/Eyebrow";

const SITE = "https://rittenhouseresidence.com";

export const metadata: Metadata = {
  title: "Suffrage History at 1822 Pine Street",
  description:
    "The documented suffrage story of 1822 Pine Street: a December 1913 tax protest, Equal Franchise Society tickets sold here in 1915, and what the record shows.",
  alternates: { canonical: "/history/suffrage" },
  openGraph: {
    title: "Suffrage History at 1822 Pine Street | The Rittenhouse Residence",
    description:
      "A December 1913 tax protest, Equal Franchise Society tickets sold from this address in 1915, and an honest account of what the record shows.",
    type: "article",
    images: ["/images/documents/1915-suffrage-newspaper.jpg"],
  },
};

const proofPoints = [
  [
    "Dec 1913",
    "Mrs. Henry C. Davis, of 1822 Pine Street, is named in tax-resistance coverage after Dr. Anna Howard Shaw's national call.",
  ],
  [
    "Jan 8, 1915",
    "The Evening Public Ledger lists Equal Franchise Society luncheon tickets for sale through the treasurer at this address.",
  ],
  [
    "$1.50",
    "The price of a luncheon ticket, “obtained through the treasurer, Miss Martha Davis, 1822 Pine street.”",
  ],
  [
    "1920",
    "The Nineteenth Amendment is ratified — five years after Pennsylvania voters defeated a state suffrage referendum in 1915.",
  ],
];

const documented = [
  "In December 1904, the Philadelphia Inquirer announced “At Home” receiving days for Mrs. Henry C. Davis and the Misses Davis, of 1822 Pine Street.",
  "In December 1913, suffrage tax-resistance coverage named Mrs. Henry C. Davis of 1822 Pine Street, with her statement of support quoted in full.",
  "On January 8, 1915, the Evening Public Ledger reported Equal Franchise Society luncheon tickets at $1.50, obtainable through the treasurer, Miss Martha Davis, 1822 Pine Street.",
  "On May 21, 1918, Philadelphia obituary columns recorded the death of Naomi Lawton, widow of Henry C. Davis, at 1822 Pine Street (obituary text cited in project research; the clipping itself is not yet in the published archive).",
];

const notDocumented = [
  "That the Equal Franchise Society held its meetings inside this house — the 1915 notice shows tickets sold from the address, nothing more.",
  "That the house served as a headquarters for the movement — no source in the archive makes that claim.",
  "Where the January 1915 luncheon itself took place — the notice names the speakers and the ticket price, not the venue.",
  "Any details of gatherings in the parlors beyond the society 'At Homes' announced in the press.",
];

const sources = [
  {
    title: "Evening Public Ledger — January 8, 1915",
    body: "The Equal Franchise Society ticket notice naming Miss Martha Davis, treasurer, 1822 Pine Street.",
    href: "/history/documents/evening-public-ledger-1915-01-08-page-10",
    pdf: "/archive/raw_documents/Evening_Public_Ledger_1915_01_08_Page_10.pdf",
  },
  {
    title: "Philadelphia Inquirer — December 11, 1904",
    body: "The society listing announcing “At Home” days for Mrs. Henry C. Davis and the Misses Davis at this address.",
    href: "/history/documents/the-philadelphia-inquirer-1904-12-11-page-36",
    pdf: "/archive/raw_documents/The_Philadelphia_Inquirer_1904_12_11_Page_36.pdf",
  },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "@id": `${SITE}/history/suffrage#article`,
  headline: "The Suffrage Record of 1822 Pine Street",
  description:
    "The documented suffrage story of 1822 Pine Street: the December 1913 tax protest of Mrs. Henry C. Davis, Equal Franchise Society tickets sold from the address in January 1915, and an explicit account of what the record does and does not show.",
  url: `${SITE}/history/suffrage`,
  mainEntityOfPage: `${SITE}/history/suffrage`,
  image: [`${SITE}/images/documents/1915-suffrage-newspaper.jpg`],
  datePublished: "2026-08-25",
  dateModified: "2026-08-25",
  author: {
    "@type": "Organization",
    name: "The Rittenhouse Residence",
    url: SITE,
  },
  publisher: {
    "@type": "Organization",
    name: "The Rittenhouse Residence",
    url: SITE,
  },
  about: { "@id": `${SITE}/#vacation-rental` },
  isBasedOn: [
    `${SITE}/archive/raw_documents/Evening_Public_Ledger_1915_01_08_Page_10.pdf`,
    `${SITE}/archive/raw_documents/The_Philadelphia_Inquirer_1904_12_11_Page_36.pdf`,
  ],
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: `${SITE}/` },
    { "@type": "ListItem", position: 2, name: "History", item: `${SITE}/history` },
    {
      "@type": "ListItem",
      position: 3,
      name: "Suffrage",
      item: `${SITE}/history/suffrage`,
    },
  ],
};

export default function SuffragePage() {
  return (
    <div className="flex flex-col bg-[#fbfaf7] text-stone-950">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <section className="bg-stone-950 py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Eyebrow light className="mb-5">
            House History · Primary Sources
          </Eyebrow>
          <h1 className="max-w-4xl font-serif text-5xl font-semibold leading-tight text-white md:text-7xl">
            The suffrage record of 1822 Pine Street.
          </h1>
          <p className="mt-7 max-w-3xl text-lg leading-8 text-stone-200 md:text-xl">
            Two printed lines tie this address to the fight for women&apos;s
            votes: a December 1913 tax protest by a resident, and a January
            1915 newspaper notice selling Equal Franchise Society tickets from
            this house. This page presents exactly what the record shows — and
            says plainly where it stops.
          </p>
        </div>
      </section>

      <section className="bg-[#fbfaf7] py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-px overflow-hidden rounded-lg border border-stone-200 bg-stone-200 md:grid-cols-2 lg:grid-cols-4">
            {proofPoints.map(([value, label]) => (
              <div key={value} className="bg-stone-50 p-6">
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
            <Eyebrow>The Household</Eyebrow>
            <h2 className="mt-4 font-serif text-4xl font-semibold leading-tight md:text-5xl">
              The Davis women of Pine Street.
            </h2>
          </div>
          <div className="space-y-6 text-lg leading-8 text-stone-700">
            <p>
              By December 1904, the names at this address belonged to the Davis
              family. The Philadelphia Inquirer&apos;s society column announced
              &lsquo;At Home&rsquo; receiving days for &ldquo;Mrs. Henry C.
              Davis and the Misses Davis, of 1822 Pine street&rdquo; — the
              choreographed afternoons when a household opened its door to
              callers.
            </p>
            <p>
              A decade later, the same household appears in print on the other
              side of a political fight. Naomi Lawton Davis — Mrs. Henry C.
              Davis — lent her name to the suffragists&apos; tax-resistance
              campaign, and Miss Martha Davis served as treasurer of the Equal
              Franchise Society, selling luncheon tickets from this address.
              Naomi Lawton Davis died at 1822 Pine Street on May 21, 1918, two
              years before the Nineteenth Amendment was ratified — a date our
              research cites from obituary text, though that clipping is not
              yet part of the published archive.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-stone-950 py-16 md:py-24">
        <div className="mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
          <Eyebrow light>December 1913</Eyebrow>
          <blockquote className="mt-8 font-serif text-3xl italic leading-tight text-white md:text-5xl">
            &ldquo;Resistance to taxation without representation has my entire
            sympathy.&rdquo;
          </blockquote>
          <p className="mt-7 text-sm font-semibold uppercase tracking-[0.18em] text-amber-300">
            Mrs. Henry C. Davis, of 1822 Pine Street · December 1913
          </p>
        </div>
      </section>

      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.85fr_1.15fr] lg:px-8">
          <div>
            <Eyebrow>The Tax Protest</Eyebrow>
            <h2 className="mt-4 font-serif text-4xl font-semibold leading-tight md:text-5xl">
              December 1913: taxation without representation.
            </h2>
          </div>
          <div className="space-y-6 text-lg leading-8 text-stone-700">
            <p>
              In December 1913, Dr. Anna Howard Shaw — president of the
              National American Woman Suffrage Association — called on women to
              refuse taxation while they were denied the vote. Coverage of the
              campaign, preserved in archives of tax resistance in the U.S.
              suffrage movement, records the response of &ldquo;Mrs. Henry C.
              Davis of 1822 Pine Street.&rdquo;
            </p>
            <p>
              Her statement invoked her own family history: her Quaker
              forbears, she said, had protested on the same principle. It is
              one sentence in a newspaper — but it fixes a national campaign to
              this exact address, through a woman who lived in these rooms.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-stone-100 py-16 md:py-24">
        <div className="mx-auto grid max-w-7xl items-start gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div>
            <Eyebrow>The Ticket Notice</Eyebrow>
            <h2 className="mt-4 font-serif text-4xl font-semibold leading-tight md:text-5xl">
              January 8, 1915: tickets from this address.
            </h2>
            <div className="mt-6 space-y-6 text-lg leading-8 text-stone-700">
              <p>
                The Evening Public Ledger of January 8, 1915 announced an Equal
                Franchise Society luncheon. Covers were $1.50 apiece, and
                &ldquo;they may be obtained through the treasurer, Miss Martha
                Davis, 1822 Pine street.&rdquo; The announced speakers included
                Norman Hapgood, the magazine editor, and Miss Anne Martin.
              </p>
              <p>
                That is the whole claim, and it is enough: in the winter before
                Pennsylvania&apos;s 1915 suffrage referendum, the treasurer of
                the Equal Franchise Society was selling the movement&apos;s
                tickets from this house.
              </p>
            </div>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/history/documents/evening-public-ledger-1915-01-08-page-10"
                className="inline-flex items-center justify-center gap-2 rounded-md bg-stone-950 px-6 py-3 text-base font-semibold text-white transition-colors hover:bg-stone-800"
              >
                <FileText className="h-5 w-5" />
                View the document
              </Link>
              <a
                href="/archive/raw_documents/Evening_Public_Ledger_1915_01_08_Page_10.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-md border border-stone-300 bg-white px-6 py-3 text-base font-semibold text-stone-950 transition-colors hover:border-amber-800 hover:text-amber-900"
              >
                <Download className="h-5 w-5" />
                Download the original (PDF)
              </a>
            </div>
          </div>
          <div className="overflow-hidden rounded-lg border border-stone-200 bg-white">
            <Image
              src="/archive/images/web/Evening_Public_Ledger_1915_01_08_Page_10_page_1_web.jpg"
              alt="Evening Public Ledger page from January 8, 1915 with the Equal Franchise Society ticket notice naming Miss Martha Davis of 1822 Pine Street"
              width={1400}
              height={1800}
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="h-auto w-full"
            />
          </div>
        </div>
      </section>

      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 max-w-3xl">
            <Eyebrow>House Style</Eyebrow>
            <h2 className="mt-4 font-serif text-4xl font-semibold leading-tight md:text-5xl">
              What we can and cannot document.
            </h2>
            <p className="mt-5 text-lg leading-8 text-stone-700">
              This house publishes its paper trail, so it holds itself to the
              paper. The record shows tickets sold from this address and tax
              resistance by a resident; it does not show meetings held in these
              rooms. Here is the line, drawn plainly.
            </p>
          </div>
          <div className="grid gap-px overflow-hidden rounded-lg border border-stone-200 bg-stone-200 lg:grid-cols-2">
            <div className="bg-stone-50 p-7">
              <h3 className="font-serif text-2xl font-semibold text-stone-950">
                The record shows
              </h3>
              <ul className="mt-6 space-y-4">
                {documented.map((item) => (
                  <li
                    key={item}
                    className="flex gap-3 text-base leading-7 text-stone-700"
                  >
                    <CheckCircle2 className="mt-1 h-5 w-5 flex-none text-amber-800" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-stone-50 p-7">
              <h3 className="font-serif text-2xl font-semibold text-stone-950">
                The record does not show
              </h3>
              <ul className="mt-6 space-y-4">
                {notDocumented.map((item) => (
                  <li
                    key={item}
                    className="flex gap-3 text-base leading-7 text-stone-700"
                  >
                    <CircleSlash className="mt-1 h-5 w-5 flex-none text-stone-400" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="drexel" className="bg-stone-100 py-16 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.85fr_1.15fr] lg:px-8">
          <div>
            <Eyebrow>Before the Davises</Eyebrow>
            <h2 className="mt-4 font-serif text-4xl font-semibold leading-tight md:text-5xl">
              The Drexel connection.
            </h2>
            <Landmark className="mt-8 h-8 w-8 text-amber-800" />
          </div>
          <div className="space-y-6 text-lg leading-8 text-stone-700">
            <p>
              The house&apos;s first long-term owners were John and Mary Ann
              Laning Roset, who bought the newly built townhouse in 1854 (period
              records attribute the block’s development to builder John
              McCrea, though no surviving document ties him to this deed). By then their eldest daughter, Ellen Bicking
              Rozet (born February 21, 1829; the family name appears as both
              Roset and Rozet in the records), was already married: on August
              13, 1850, she wed the banker Anthony Joseph Drexel in
              Philadelphia.
            </p>
            <p>
              Drexel became the dominant partner of Drexel &amp; Co., founded
              Drexel, Morgan &amp; Co. with J.P. Morgan in 1871, and founded
              the institution that became Drexel University in 1891. Ellen died
              on November 27, 1891, weeks before the Drexel Institute opened
              its doors. The connection to 1822 Pine Street runs through the
              family, not the deed — Ellen&apos;s parents owned this house, and
              the marriage bound the address into one of Philadelphia&apos;s
              great banking families.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#fbfaf7] py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 max-w-3xl">
            <Eyebrow>Sources</Eyebrow>
            <h2 className="mt-4 font-serif text-4xl font-semibold leading-tight md:text-5xl">
              Check the claims yourself.
            </h2>
            <p className="mt-5 text-lg leading-8 text-stone-700">
              The primary documents behind this page live in the house archive.
              The December 1913 tax-resistance statement is preserved in
              published archives of the U.S. suffrage movement&apos;s tax
              resistance and is quoted here from that record.
            </p>
          </div>
          <div className="grid gap-5 md:grid-cols-2">
            {sources.map((source) => (
              <article
                key={source.title}
                className="rounded-lg border border-stone-200 bg-white p-6"
              >
                <ScrollText className="h-6 w-6 text-amber-800" />
                <h3 className="mt-5 font-serif text-2xl font-semibold">
                  {source.title}
                </h3>
                <p className="mt-3 leading-7 text-stone-700">{source.body}</p>
                <div className="mt-5 flex flex-wrap gap-4 text-sm font-semibold">
                  <Link
                    href={source.href}
                    className="inline-flex items-center gap-1.5 text-stone-950 transition-colors hover:text-amber-900"
                  >
                    View in archive
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                  <a
                    href={source.pdf}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-stone-600 transition-colors hover:text-amber-900"
                  >
                    Original PDF
                    <Download className="h-4 w-4" />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
            <Image
              src="/images/property/DSC00088.jpg"
              alt="Interior of The Rittenhouse Residence at 1822 Pine Street"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
          <div>
            <Eyebrow>Stay Here</Eyebrow>
            <h2 className="mt-4 font-serif text-4xl font-semibold leading-tight md:text-5xl">
              Sleep in the house with the paper trail.
            </h2>
            <p className="mt-5 text-lg leading-8 text-stone-700">
              The rooms where the Davis women lived are the rooms your group
              stays in — 8 bedrooms across five floors, two blocks from
              Rittenhouse Square, with the archive published for anyone to
              read.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/stay"
                className="inline-flex items-center justify-center gap-2 rounded-md bg-stone-950 px-6 py-3 text-base font-semibold text-white transition-colors hover:bg-stone-800"
              >
                Tour the house
                <ArrowRight className="h-5 w-5" />
              </Link>
              <Link
                href="/history/documents"
                className="inline-flex items-center justify-center rounded-md border border-stone-300 bg-white px-6 py-3 text-base font-semibold text-stone-950 transition-colors hover:border-amber-800 hover:text-amber-900"
              >
                Open the archive
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
