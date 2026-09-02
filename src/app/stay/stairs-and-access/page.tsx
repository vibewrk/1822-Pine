import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Bath, Bed, MoveVertical, TriangleAlert } from "lucide-react";
import { Eyebrow } from "@/components/Eyebrow";
import TrackedLink from "@/components/TrackedLink";
import { AIRBNB_URL, VRBO_URL } from "@/components/SocialProof";

// Owner-measured 2026-08-27: 62 steps entrance to top floor. Ceiling heights,
// also from the owner: 14 ft front entrance level, 12 ft front second floor,
// 10 ft third. The REAR of the house runs on shallower ~9 ft floors and is
// deliberately OFFSET from the front, so rear rooms land on half-landings well
// below the front room sharing their floor number. The master is at the rear,
// which makes the grandest bedroom one of the shortest climbs — counterintuitive,
// commercially useful, and the single most helpful thing on this page.
// This page exists because a group organizer bringing a parent with limited
// mobility cannot plan from "four stories, no elevator" — they need the number,
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
    "How the stairs work at The Rittenhouse Residence: 62 steps entrance to top, four stories, no elevator — and why the rear bedrooms, including the master, are a much shorter climb than the front. Written for groups travelling with someone who finds stairs hard.",
  alternates: { canonical: "/stay/stairs-and-access" },
  openGraph: {
    title: "Stairs & Access | The Rittenhouse Residence",
    description:
      "62 steps to the top, four stories, no elevator — the numbers you need before you book for a group with mixed mobility.",
    type: "article",
    images: ["/images/property-tour/57-additional-photos-01.webp"],
  },
};

const numbers = [
  ["62", "steps from the entrance to the very top"],
  ["14 ft", "ceilings on the front of the entrance level"],
  ["9 ft", "at the rear — where the master sits, and far fewer steps up"],
  ["0", "elevators — the house predates them by decades"],
] as const;

const faqs = [
  {
    q: "Can someone with limited mobility stay here?",
    a: "It depends on what they can manage, and we would rather you decide with the numbers in front of you. There are 62 steps from the front door to the very top, and every one of the eight bedrooms is above the entrance level. But they are not all the same climb: the rear of the house sits on shallower floors than the front, so a back bedroom — Bedroom 1 included — is a notably shorter run of stairs than its floor number suggests. Someone who can manage one flight slowly, with a handrail and time, will be comfortable at the back. Someone who cannot manage a flight at all will not be comfortable here, and we will say so rather than take the booking.",
  },
  {
    q: "Which bedroom involves the fewest stairs?",
    a: "One at the rear — and the happy surprise is that Bedroom 1, the principal suite, is among them. The house is split-level front to back: the front rooms carry grand ceilings, 14 feet on the entrance level and 12 on the floor above, while the rear section sits on shallower nine-foot floors. Because the two halves are offset, a rear room lands on a half-landing well below the front room that shares its floor number. If someone in your group is counting steps, put them at the back of the house.",
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
            This is an 1850s townhouse of four stories with one staircase and no
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
                "The rear, at every level",
                "Nine-foot ceilings and half-landings that sit below the front rooms sharing their floor number. Bedroom 1, the principal suite, is back here — the grandest bedroom in the house is also one of the shortest climbs.",
              ],
              [
                "Second floor, front",
                "Bedrooms and the Library Suite with its wet bar, under twelve-foot ceilings. A full flight of the tall front stair.",
              ],
              [
                "Third floor",
                "More bedrooms and shared bathrooms, ceilings easing to ten feet.",
              ],
              [
                "Fourth floor",
                "The top bedrooms and the second kitchen.",
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
              What organizers ask us.
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
                Work out who sleeps where before you arrive — three kings, four
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
