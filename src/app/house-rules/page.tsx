import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Ban,
  Bell,
  CheckCircle2,
  Clock,
  ShieldCheck,
  Volume2,
} from "lucide-react";
import { Eyebrow } from "@/components/Eyebrow";
import TrackedLink from "@/components/TrackedLink";
import { AIRBNB_URL, VRBO_URL } from "@/components/SocialProof";

// The rules, published BEFORE booking rather than after.
//
// Every persona in the 2026-08 guest review named the same two blockers: the
// rules were withheld until after booking, and "quiet hours apply" was never
// defined. Both are answered here.
//
// Sourced from the Airbnb and Vrbo listings (read 2026-08-27), the site's own
// FAQ, and the owner directly for the quiet hours: 10pm weeknights, 11pm
// weekends, with sensors flagging sustained noise above 70 dB in that window.
// Update this page and both listings together; a rule that differs between
// them is worse than no page at all.

const SITE = "https://rittenhouseresidence.com";

export const metadata: Metadata = {
  title: "House Rules",
  description:
    "The full house rules for The Rittenhouse Residence, published before you book: check-in and checkout times, noise and quiet hours, guests and visitors, parties and events, pets, smoking, and what happens if something breaks.",
  alternates: { canonical: "/house-rules" },
  openGraph: {
    title: "House Rules | The Rittenhouse Residence",
    description:
      "Check-in and checkout, noise, visitors, parties, pets and smoking — the rules in full, before you book.",
    type: "article",
    images: ["/images/airbnb/airbnb_03.jpg"],
  },
};

const timings = [
  ["Check-in", "After 4:00 PM", "Self check-in. Access details arrive before arrival."],
  ["Checkout", "Before 10:00 AM", "Earlier or later is sometimes possible — ask, and we will tell you what the calendar allows."],
] as const;

const yes = [
  "The whole house is yours — every floor, no shared space, no other guests.",
  "Cooking for the group. Two full kitchens and a dining table that seats sixteen.",
  "Bringing in a caterer or private chef for a meal at the house.",
  "A family dinner, a birthday toast, a wedding party getting ready in the morning.",
  "Using the roof deck, the parlors, the library wet bar and the pool table.",
  "Working. Gigabit WiFi service and space for a team to spread into breakout groups.",
] as const;

const no = [
  "Parties and events. The house is guest lodging, not a venue — no receptions, ceremonies or ticketed gatherings.",
  "More than 16 overnight guests, ever.",
  "Pets. Assistance animals are not pets and are handled separately under the law — tell us and we will make it work.",
  "Smoking or vaping anywhere, including the roof deck and out of windows.",
  "Unregistered overnight guests. Day visitors are fine within reason; tell us if you expect a crowd.",
  "Moving furniture between floors, or removing anything from the walls.",
] as const;

const faqs = [
  {
    q: "What are the quiet hours?",
    a: "Ten at night on weekdays, eleven on weekends. During those hours our sensors flag anything sustained above 70 decibels — which is a generous ceiling: sixteen people talking, cooking and laughing sits well under it. What crosses the line is amplified music or a crowd out on the roof deck, because sound carries between these houses. The sensors read volume only; no audio is recorded and nobody is listening.",
  },
  {
    q: "Can we have visitors who are not staying over?",
    a: "Yes, within reason — family stopping by, a photographer on a wedding morning, a caterer. What is not allowed is a party: a gathering larger than the group booked, or anything with an invitation list. If you are expecting more than a few extra people, tell us first.",
  },
  {
    q: "Can the wedding party get ready here?",
    a: "Yes. That is one of the most common uses of the house, and the upstairs suites have the mirrors and space for it. Hairdressers and photographers are welcome. What we cannot host is the ceremony or the reception itself.",
  },
  {
    q: "Is there a security deposit or damage hold?",
    a: "Deposits, holds and cancellation terms are set by the platform you book on. Airbnb and Vrbo each show their own terms in full at checkout, before you confirm.",
  },
  {
    q: "What if something breaks?",
    a: "Tell us. Ordinary wear is expected in a house this old and we do not chase guests over it. A support team is reachable throughout your stay, and the sooner we know about a leak or a failure, the less it disrupts your visit.",
  },
  {
    q: "Are there cameras?",
    a: "There are exterior security cameras on the property, disclosed on both listings. There are no cameras of any kind inside the house. The interior noise sensors measure volume only and do not record sound.",
  },
] as const;

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id": `${SITE}/house-rules#faq`,
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export default function HouseRulesPage() {
  return (
    <div className="flex flex-col bg-[#fbfaf7] text-stone-950">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <section className="bg-stone-950 py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Eyebrow light className="mb-5">
            Before You Book
          </Eyebrow>
          <h1 className="max-w-4xl font-serif text-5xl font-semibold leading-tight text-white md:text-7xl">
            The house rules, in full.
          </h1>
          <p className="mt-7 max-w-3xl text-lg leading-8 text-stone-200 md:text-xl">
            Here before you book, not after. Most of it is what you would
            expect of someone else&apos;s home; the parts worth reading twice
            are the noise rules and what counts as a party, because those are
            where groups get caught out.
          </p>
        </div>
      </section>

      <section className="bg-white py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-px overflow-hidden rounded-lg border border-stone-200 bg-stone-200 md:grid-cols-2">
            {timings.map(([label, time, note]) => (
              <div key={label} className="bg-stone-50 p-7">
                <Clock className="h-5 w-5 text-amber-800" />
                <p className="mt-4 text-xs font-semibold uppercase tracking-[0.16em] text-stone-500">
                  {label}
                </p>
                <p className="mt-1 font-serif text-3xl font-semibold text-stone-950">
                  {time}
                </p>
                <p className="mt-3 text-sm leading-6 text-stone-600">{note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#fbfaf7] py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-px overflow-hidden rounded-lg border border-stone-200 bg-stone-200 lg:grid-cols-2">
            <div className="bg-stone-50 p-7">
              <h2 className="flex items-center gap-2 font-serif text-2xl font-semibold text-stone-950">
                <CheckCircle2 className="h-5 w-5 text-amber-800" />
                Yes, absolutely
              </h2>
              <ul className="mt-6 space-y-4">
                {yes.map((item) => (
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
              <h2 className="flex items-center gap-2 font-serif text-2xl font-semibold text-stone-950">
                <Ban className="h-5 w-5 text-stone-500" />
                No, and we mean it
              </h2>
              <ul className="mt-6 space-y-4">
                {no.map((item) => (
                  <li
                    key={item}
                    className="flex gap-3 text-base leading-7 text-stone-700"
                  >
                    <Ban className="mt-1 h-5 w-5 flex-none text-stone-400" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.85fr_1.15fr] lg:px-8">
          <div>
            <Eyebrow>Noise</Eyebrow>
            <h2 className="mt-4 font-serif text-4xl font-semibold leading-tight md:text-5xl">
              The one rule that matters most.
            </h2>
            <Volume2 className="mt-8 h-8 w-8 text-amber-800" />
          </div>
          <div className="space-y-6 text-lg leading-8 text-stone-700">
            <p>
              1822 Pine is a rowhouse. It shares walls with neighbors who live
              here year-round, and sound carries — between houses, up the
              stairwell, and off the roof deck across the back gardens.
            </p>
            <p>
              So quiet hours run from 10pm on weeknights and 11pm on Friday and
              Saturday. Our sensors flag anything sustained above 70 decibels in
              that window — and 70 is a generous ceiling. Sixteen people talking,
              cooking and laughing sits comfortably under it.
            </p>
            <p>
              The sensors read volume and nothing else: no audio is recorded, and
              no one is listening. They exist so we can send you a friendly text
              early rather than have a neighbor discover the problem later.
            </p>
            <p>
              The practical version: a full house at dinner is completely fine.
              Amplified music and a crowd out on the roof deck after quiet hours
              are what carry through a party wall. As the evening goes on, bring
              it indoors and bring it down.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-stone-100 py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-9 max-w-3xl">
            <Eyebrow>Common Questions</Eyebrow>
            <h2 className="mt-4 font-serif text-4xl font-semibold leading-tight md:text-5xl">
              The things groups ask before booking.
            </h2>
          </div>
          <div className="grid gap-5 md:grid-cols-2">
            {faqs.map((f) => (
              <article
                key={f.q}
                className="rounded-lg border border-stone-200 bg-white p-6"
              >
                <h3 className="font-serif text-2xl font-semibold text-stone-950">
                  {f.q}
                </h3>
                <p className="mt-4 text-base leading-7 text-stone-700">{f.a}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-5 md:grid-cols-3">
            <article className="rounded-lg border border-stone-200 bg-stone-50 p-6">
              <ShieldCheck className="h-5 w-5 text-amber-800" />
              <h3 className="mt-5 font-serif text-2xl font-semibold">
                Licensed and insured
              </h3>
              <p className="mt-3 text-sm leading-6 text-stone-700">
                Philadelphia short-term rental licence #903781. Smoke and
                carbon-monoxide alarms throughout; exterior cameras only.
              </p>
            </article>
            <article className="rounded-lg border border-stone-200 bg-stone-50 p-6">
              <Bell className="h-5 w-5 text-amber-800" />
              <h3 className="mt-5 font-serif text-2xl font-semibold">
                Someone is reachable
              </h3>
              <p className="mt-3 text-sm leading-6 text-stone-700">
                A support team is available throughout your stay. Airbnb records
                a 100% response rate and replies within a day.
              </p>
            </article>
            <article className="rounded-lg border border-stone-200 bg-stone-50 p-6">
              <Clock className="h-5 w-5 text-amber-800" />
              <h3 className="mt-5 font-serif text-2xl font-semibold">
                Terms at checkout
              </h3>
              <p className="mt-3 text-sm leading-6 text-stone-700">
                Cancellation, deposits and the full price including fees are
                shown by Airbnb or Vrbo before you confirm.{" "}
                <Link
                  href="/rates"
                  className="font-semibold text-amber-800 hover:text-amber-900"
                >
                  See rates
                </Link>
                .
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="bg-stone-950 py-16 md:py-24">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="font-serif text-4xl font-semibold leading-tight text-white md:text-5xl">
            Rules read. Dates next.
          </h2>
          <p className="mt-5 text-lg leading-8 text-stone-200">
            Still unsure whether your group fits?{" "}
            <Link
              href="/contact"
              className="font-semibold text-amber-300 underline underline-offset-4 hover:text-amber-200"
            >
              Ask before you book
            </Link>{" "}
            — we reply within 24 hours, and we would rather say so now than
            have it go wrong later.
          </p>
          <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
            <TrackedLink
              href={AIRBNB_URL}
              event="ota_click"
              eventParams={{ platform: "airbnb", location: "house_rules_cta" }}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-md bg-white px-8 py-4 text-base font-semibold text-stone-950 transition-colors hover:bg-stone-100"
            >
              Check dates on Airbnb
              <ArrowRight className="h-5 w-5" />
            </TrackedLink>
            <TrackedLink
              href={VRBO_URL}
              event="ota_click"
              eventParams={{ platform: "vrbo", location: "house_rules_cta" }}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-md border border-white/70 px-8 py-4 text-base font-semibold text-white transition-colors hover:bg-white/10"
            >
              Check dates on Vrbo
            </TrackedLink>
          </div>
        </div>
      </section>
    </div>
  );
}
