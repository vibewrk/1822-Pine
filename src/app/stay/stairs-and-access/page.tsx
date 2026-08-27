import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Bath, Bed, MoveVertical, TriangleAlert } from "lucide-react";
import { Eyebrow } from "@/components/Eyebrow";
import TrackedLink from "@/components/TrackedLink";
import { AIRBNB_URL, VRBO_URL } from "@/components/SocialProof";

// Owner-measured 2026-08-27: 62 steps from the entrance to the top floor.
// This page exists because a group organiser bringing a parent with limited
// mobility cannot plan from "five floors, no elevator" — they need the number,
// and if they have to email for it, most will simply book elsewhere. Answering
// it plainly also pre-qualifies: the people who book after reading this are
// the ones the house actually suits.
//
// Do not add stair counts per flight, tread depths, or doorway widths until
// someone measures them on site. The 62 total is measured; nothing else is.

const SITE = "https://rittenhouseresidence.com";

export const metadata: Metadata = {
  title: "Stairs & Access",
  description:
    "How the stairs work at The Rittenhouse Residence: 62 steps from the entrance to the top floor, five levels, no elevator, and which bedrooms sit closest to the front door. Written for groups travelling with someone who finds stairs hard.",
  alternates: { canonical: "/stay/stairs-and-access" },
  openGraph: {
    title: "Stairs & Access | The Rittenhouse Residence",
    description:
      "62 steps to the top, five floors, no elevator — the numbers you need before you book for a group with mixed mobility.",
    type: "article",
    images: ["/images/property/DSC00112.jpg"],
  },
};

const numbers = [
  ["62", "steps from the entrance to the top floor"],
  ["5", "levels, connected by one main staircase"],
  ["0", "elevators — the house predates them by decades"],
  ["2–4", "the floors every bedroom sits on"],
] as const;

const faqs = [
  {
    q: "Can someone with limited mobility stay here?",
    a: "It depends on what they can manage, and we would rather you decide with the number in front of you. There are 62 steps from the front door to the top floor, and every one of the eight bedrooms is above the entrance level. Someone who can climb one flight slowly, with a handrail and time, will do fine in a second-floor room. Someone who cannot manage a flight of stairs at all will not be comfortable here, and we will say so rather than take the booking.",
  },
  {
    q: "Which bedroom involves the fewest stairs?",
    a: "The second-floor rooms. From the sidewalk there are entrance steps, then one flight to the second floor — that is where anyone who minds stairs should sleep. Groups usually give those rooms to grandparents and put the sure-footed on the third and fourth floors. Tell us before arrival and we will make sure the room assignment matches.",
  },
  {
    q: "Is there a bedroom or full bathroom on the entrance level?",
    a: "No. The entrance level holds the hall, the Grand Parlour, the dining room and the main kitchen. All eight bedrooms and all five full bathrooms are on the floors above. There is a powder room on the main level.",
  },
  {
    q: "What about the roof deck?",
    a: "It is at the top of the house, above the fourth floor — the full 62 steps. It is worth the climb for the skyline, but it is the least accessible space in the building.",
  },
  {
    q: "Are there handrails?",
    a: "Yes, on the main staircase throughout. If the specifics matter for someone in your group — which side, the landings, where you can pause — ask us and we will describe the run floor by floor before you book.",
  },
  {
    q: "Is the house wheelchair accessible?",
    a: "No. There are steps at the entrance, no elevator, and no ground-floor bedroom or full bathroom. A guest who uses a wheelchair full-time will not be able to use this house, and we would rather tell you now than have you discover it on arrival.",
  },
] as const;

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id": `${SITE}/stay/stairs-and-access#faq`,
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export default function StairsAndAccessPage() {
  return (
    <div className="flex flex-col bg-[#fbfaf7] text-stone-950">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <section className="bg-stone-950 py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Eyebrow light className="mb-5">
            Before You Book · The Stairs
          </Eyebrow>
          <h1 className="max-w-4xl font-serif text-5xl font-semibold leading-tight text-white md:text-7xl">
            Sixty-two steps to the top.
          </h1>
          <p className="mt-7 max-w-3xl text-lg leading-8 text-stone-200 md:text-xl">
            This is an 1850s townhouse on five levels with one staircase and no
            elevator. If someone in your group finds stairs difficult, that
            single fact decides whether this house works for you — so here is
            the whole picture, with the numbers, before you get as far as
            choosing dates.
          </p>
        </div>
      </section>

      <section className="bg-white py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-px overflow-hidden rounded-lg border border-stone-200 bg-stone-200 sm:grid-cols-2 lg:grid-cols-4">
            {numbers.map(([value, label]) => (
              <div key={label} className="bg-stone-50 p-6 text-center">
                <p className="font-serif text-5xl font-semibold text-stone-950">
                  {value}
                </p>
                <p className="mt-3 text-sm leading-6 text-stone-600">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#fbfaf7] py-16 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.85fr_1.15fr] lg:px-8">
          <div>
            <Eyebrow>How It Stacks</Eyebrow>
            <h2 className="mt-4 font-serif text-4xl font-semibold leading-tight md:text-5xl">
              What sits on which floor.
            </h2>
            <MoveVertical className="mt-8 h-8 w-8 text-amber-800" />
          </div>
          <div className="space-y-5">
            {[
              [
                "Entrance level",
                "Hall, Grand Parlour, dining room seating sixteen, main kitchen, powder room. No bedrooms, no full bathroom.",
              ],
              [
                "Second floor",
                "Bedrooms and the Library Suite with its wet bar. One flight up — this is where anyone who minds stairs should sleep.",
              ],
              [
                "Third floor",
                "More bedrooms and shared bathrooms. Two flights.",
              ],
              [
                "Fourth floor",
                "The top bedrooms and the second kitchen. Three flights.",
              ],
              [
                "Roof deck",
                "Above the fourth floor. The skyline, and the full 62 steps.",
              ],
            ].map(([floor, what]) => (
              <div
                key={floor}
                className="border-t border-stone-300 pt-4"
              >
                <h3 className="font-serif text-2xl font-semibold text-stone-950">
                  {floor}
                </h3>
                <p className="mt-2 text-base leading-7 text-stone-700">{what}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-9 max-w-3xl">
            <Eyebrow>Common Questions</Eyebrow>
            <h2 className="mt-4 font-serif text-4xl font-semibold leading-tight md:text-5xl">
              What organisers ask us.
            </h2>
          </div>
          <div className="grid gap-5 md:grid-cols-2">
            {faqs.map((f) => (
              <article
                key={f.q}
                className="rounded-lg border border-stone-200 bg-stone-50 p-6"
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

      <section className="bg-stone-100 py-16 md:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-lg border border-amber-200 bg-amber-50 p-7 text-amber-950">
            <TriangleAlert className="h-6 w-6" />
            <h2 className="mt-4 font-serif text-2xl font-semibold">
              If you are not sure, ask before you book
            </h2>
            <p className="mt-3 text-base leading-7">
              Describe who is coming and what they can manage, and we will tell
              you whether this house suits them — including when the answer is
              no. A group that arrives knowing exactly which bedroom is on which
              landing has a far better weekend than one that finds out at
              midnight with the luggage still in the hall.
            </p>
            <Link
              href="/contact"
              className="mt-5 inline-flex items-center gap-2 font-semibold underline underline-offset-4 transition-colors hover:text-amber-900"
            >
              Send us the details
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-5 md:grid-cols-3">
            <Link
              href="/stay/rooms"
              className="group rounded-lg border border-stone-200 bg-stone-50 p-6 transition-colors hover:border-amber-800"
            >
              <Bed className="h-5 w-5 text-amber-800" />
              <h3 className="mt-5 font-serif text-2xl font-semibold">
                Room planner
              </h3>
              <p className="mt-3 text-sm leading-6 text-stone-700">
                Work out who sleeps where before you arrive — two kings, five
                queens and a double across eight bedrooms.
              </p>
            </Link>
            <Link
              href="/stay/floor-plans"
              className="group rounded-lg border border-stone-200 bg-stone-50 p-6 transition-colors hover:border-amber-800"
            >
              <MoveVertical className="h-5 w-5 text-amber-800" />
              <h3 className="mt-5 font-serif text-2xl font-semibold">
                Floor plans
              </h3>
              <p className="mt-3 text-sm leading-6 text-stone-700">
                The layout floor by floor, so you can see the staircase before
                you climb it.
              </p>
            </Link>
            <Link
              href="/house-rules"
              className="group rounded-lg border border-stone-200 bg-stone-50 p-6 transition-colors hover:border-amber-800"
            >
              <Bath className="h-5 w-5 text-amber-800" />
              <h3 className="mt-5 font-serif text-2xl font-semibold">
                House rules
              </h3>
              <p className="mt-3 text-sm leading-6 text-stone-700">
                Check-in, noise, visitors and the rest — published before you
                book.
              </p>
            </Link>
          </div>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <TrackedLink
              href={AIRBNB_URL}
              event="ota_click"
              eventParams={{ platform: "airbnb", location: "stairs_cta" }}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-md bg-stone-950 px-7 py-4 text-base font-semibold text-white transition-colors hover:bg-stone-800"
            >
              Check dates on Airbnb
              <ArrowRight className="h-5 w-5" />
            </TrackedLink>
            <TrackedLink
              href={VRBO_URL}
              event="ota_click"
              eventParams={{ platform: "vrbo", location: "stairs_cta" }}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-md border border-stone-300 bg-white px-7 py-4 text-base font-semibold text-stone-950 transition-colors hover:border-amber-800 hover:text-amber-900"
            >
              Check dates on Vrbo
            </TrackedLink>
          </div>
        </div>
      </section>
    </div>
  );
}
