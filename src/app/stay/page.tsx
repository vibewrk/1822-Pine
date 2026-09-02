import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Bath,
  Bed,
  Calendar,
  DoorOpen,
  Home,
  LayoutGrid,
  Tv,
  Users,
  Wifi,
} from "lucide-react";
import { BookingCTA } from "@/components/BookingCTA";
import { Eyebrow } from "@/components/Eyebrow";

export const metadata: Metadata = {
  title: "The House — 8 Bedrooms, Sleeps 16",
  description:
    "Tour an 8-bedroom whole-home Philadelphia vacation rental for 16, with two parlors, two kitchens, dining for 16, and a private roof deck.",
  alternates: { canonical: "/stay" },
  openGraph: {
    title: "Inside The Rittenhouse Residence | Sleeps 16",
    description:
      "Two parlors, dining for the whole group, 8 bedrooms, 5 full baths and a powder room, and a private roof deck across four stories that live like five.",
    images: ["/images/property-tour/03-living-room-1-03.webp"],
  },
};

const floorWalk = [
  {
    floor: "Parlor floor",
    note: "The public rooms do the receiving.",
    image: "/images/property-tour/03-living-room-1-03.webp",
    alt: "Grand parlor with original fireplace and full-size pool table",
    rooms: [
      "Two parlors for conversation, games, and the first round of coffee.",
      "Dining room set for the whole group, with room for sixteen at the table.",
      "Primary kitchen and pantry close to the dining room, so the house works for a long meal.",
      "Rear access toward Waverly Street for luggage and practical arrivals.",
    ],
  },
  {
    floor: "Second floor",
    note: "Bedroom 1, the principal suite, sits above the street.",
    image: "/images/property-tour/28-bedroom-1-02.webp",
    alt: "Bedroom 1 with a king bed",
    rooms: [
      "Bedroom 1 has a king bed, private sitting room, and private bath.",
      "Bedroom 2 has a queen bed and Pine Street frontage.",
      "Formal library for the guest who wants a quieter hour away from the group.",
    ],
  },
  {
    floor: "Third and fourth floors",
    note: "Bedrooms stack upward, with space between them.",
    image: "/images/property-tour/30-bedroom-3-01.webp",
    alt: "Bedroom 3 with a king bed",
    rooms: [
      "Bedroom 3 has a king bed and Bedroom 4 a queen; both are on the third floor.",
      "On the fourth floor, Bedrooms 5 and 6 form a connecting double-and-queen pair; Bedroom 7 is a queen and Bedroom 8 a king.",
      "Five full bathrooms and a powder room keep mornings moving.",
    ],
  },
  {
    floor: "Fifth floor",
    note: "The roof deck is the exhale.",
    image: "/images/property-tour/45-rooftop-01.webp",
    alt: "Private roof deck with city views",
    rooms: [
      "Private furnished terrace for morning coffee and an evening look over Center City.",
      "Enough separation from the bedrooms below that the house still has quiet corners.",
    ],
  },
];

const bedrooms = [
  ["Bedroom 1", "King bed", "Second floor", "Private bath"],
  ["Bedroom 2", "Queen bed", "Second floor", "Shared full bath nearby"],
  ["Bedroom 3", "King bed", "Third floor", "Full bath nearby"],
  ["Bedroom 4", "Queen bed", "Third floor", "Full bath nearby"],
  ["Bedroom 5", "Double bed", "Fourth floor", "Full bath nearby"],
  ["Bedroom 6", "Queen bed", "Fourth floor", "Full bath nearby"],
  ["Bedroom 7", "Queen bed", "Fourth floor", "Full bath nearby"],
  ["Bedroom 8", "King bed", "Fourth floor", "Full bath nearby"],
];

const amenities = [
  {
    group: "For the group",
    items: [
      ["Dining seats 16", "One table for the whole stay, not three scattered reservations."],
      ["Two parlors", "Fourteen-foot ceilings, original fireplace, crystal chandelier, and a full-size pool table."],
      ["Two full kitchens", "Primary kitchen on the parlor floor, secondary kitchen upstairs."],
      ["Roof deck", "Private outdoor space above the house."],
    ],
  },
  {
    group: "In every room",
    items: [
      ["Linens and towels", "Beds made before arrival, bathrooms stocked for the stay."],
      ["Smart TVs", "Screens in the main living areas and guest-ready entertainment setup."],
      ["Climate control", "Central air and heat for a four-story house."],
    ],
  },
  {
    group: "Practical",
    items: [
      ["Gigabit WiFi service", "Gigabit plan throughout the house; a recent Airbnb speed test measured 351 Mbps. Speeds vary by floor across 7,000 square feet."],
      ["Washer and dryer", "Full-size laundry for longer stays and large groups."],
      ["Parking guidance", "Several garages are within two blocks; exact options are sent before check-in."],
    ],
  },
];

const amenityIcons = [Users, Tv, Wifi];

export default function StayPage() {
  return (
    <div className="flex flex-col bg-[#fbfaf7] text-stone-950">
      <section className="relative min-h-[620px] overflow-hidden">
        <Image
          src="/images/property-tour/01-living-room-1-01.webp"
          alt="Grand Parlor at The Rittenhouse Residence"
          fill
          sizes="100vw"
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/45 to-black/20" />
        <div className="relative mx-auto flex min-h-[620px] max-w-7xl items-end px-4 pb-16 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <Eyebrow light className="mb-5">
              The House
            </Eyebrow>
            <h1 className="font-serif text-5xl font-semibold leading-[0.95] text-white md:text-7xl">
              Seven thousand square feet, arranged for a houseful.
            </h1>
            <p className="mt-7 max-w-3xl text-lg leading-8 text-stone-100 md:text-xl">
              The Rittenhouse Residence is a whole-house stay across four stories that live like five: parlors for gathering under fourteen-foot ceilings, a dining room for sixteen, eight bedrooms, five full baths and a powder room, two kitchens, and a private roof deck two blocks from Rittenhouse Square.
            </p>
            <div className="mt-9 flex flex-wrap gap-x-6 gap-y-3 text-sm font-semibold uppercase tracking-[0.14em] text-white/90">
              <span className="inline-flex items-center gap-2"><Bed className="h-4 w-4" />8 bedrooms</span>
              <span className="inline-flex items-center gap-2"><Bath className="h-4 w-4" />5 baths + powder</span>
              <span className="inline-flex items-center gap-2"><Users className="h-4 w-4" />Sleeps 16</span>
              <span className="inline-flex items-center gap-2"><Home className="h-4 w-4" />4 stories</span>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-stone-200 bg-white py-10">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <BookingCTA />
        </div>
      </section>

      <section className="bg-[#fbfaf7] py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[0.75fr_1.25fr]">
            <Eyebrow>Floor by Floor</Eyebrow>
            <div>
              <h2 className="font-serif text-4xl font-semibold leading-tight md:text-5xl">
                A guided walk through the house.
              </h2>
              <p className="mt-5 max-w-3xl text-lg leading-8 text-stone-700">
                The plan is old Philadelphia: public rooms on the lower floor, bedrooms rising above, and the service logic still running toward Waverly Street. The renovation keeps that rhythm intact.
              </p>
            </div>
          </div>

          <div className="mt-14 space-y-16">
            {floorWalk.map((floor, index) => (
              <article
                key={floor.floor}
                className="grid items-center gap-8 border-t border-stone-200 pt-10 lg:grid-cols-2"
              >
                <div className={index % 2 ? "lg:order-2" : ""}>
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-amber-800">
                    {floor.floor}
                  </p>
                  <h3 className="mt-3 font-serif text-3xl font-semibold text-stone-950">
                    {floor.note}
                  </h3>
                  <ul className="mt-6 space-y-4 text-base leading-7 text-stone-700">
                    {floor.rooms.map((room) => (
                      <li key={room} className="flex gap-3">
                        <DoorOpen className="mt-1 h-4 w-4 flex-none text-amber-800" />
                        <span>{room}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
                  <Image src={floor.image} alt={floor.alt} fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" />
                </div>
              </article>
            ))}
          </div>

          <div className="mt-12">
            <Link
              href="/stay/floor-plans"
              className="inline-flex items-center gap-2 rounded-md border border-stone-300 bg-white px-5 py-3 text-sm font-semibold uppercase tracking-[0.14em] text-stone-950 transition-colors hover:border-amber-800 hover:text-amber-900"
            >
              <LayoutGrid className="h-4 w-4" />
              View floor plans
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-white py-14 md:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <Eyebrow>Bedrooms</Eyebrow>
            <h2 className="mt-4 font-serif text-4xl font-semibold leading-tight md:text-5xl">
              Eight bedrooms, each with its own character.
            </h2>
            <p className="mt-5 text-lg leading-8 text-stone-700">
              The mix is simple: three kings, four queens, a double, and enough floor separation that a group of sixteen can still find a quiet landing.
            </p>
          </div>

          <div className="mt-10 grid gap-px overflow-hidden rounded-lg border border-stone-200 bg-stone-200 md:grid-cols-2 lg:grid-cols-4">
            {bedrooms.map(([name, bed, floor, bath]) => (
              <div key={name} className="bg-stone-50 p-5">
                <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-amber-800">
                  {bed} · {floor} · {bath}
                </p>
                <h3 className="mt-3 font-serif text-2xl font-semibold text-stone-950">
                  {name}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-stone-100 py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <Eyebrow>Amenities</Eyebrow>
              <h2 className="mt-4 font-serif text-4xl font-semibold leading-tight md:text-5xl">
                The comforts that make a houseful feel at home.
              </h2>
            </div>
            <div className="grid gap-5 md:grid-cols-3">
              {amenities.map((group, index) => {
                const Icon = amenityIcons[index];
                return (
                  <div key={group.group} className="rounded-lg border border-stone-200 bg-white p-6">
                    <Icon className="h-6 w-6 text-amber-800" />
                    <h3 className="mt-5 font-serif text-2xl font-semibold">
                      {group.group}
                    </h3>
                    <div className="mt-5 space-y-4">
                      {group.items.map(([name, detail]) => (
                        <div key={name}>
                          <p className="font-semibold text-stone-950">{name}</p>
                          <p className="mt-1 text-sm leading-6 text-stone-600">{detail}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#fbfaf7] py-16 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-8">
          <div className="grid grid-cols-2 gap-4">
            {[
              {
                src: "/images/property-tour/58-additional-photos-02.webp",
                alt: "Gallery hall inside The Rittenhouse Residence",
              },
              {
                src: "/images/property-tour/57-additional-photos-01.webp",
                alt: "Staircase leading to the bedrooms and roof deck",
              },
              {
                src: "/images/property-tour/01-living-room-1-01.webp",
                alt: "Grand Parlor at The Rittenhouse Residence",
              },
              {
                src: "/images/property-tour/43-half-bathroom-01.webp",
                alt: "Half bathroom at The Rittenhouse Residence",
              },
            ].map(({ src, alt }, index) => (
              <div
                key={src}
                className={`relative overflow-hidden rounded-lg ${index === 0 ? "col-span-2 aspect-[16/10]" : "aspect-[4/3]"}`}
              >
                <Image
                  src={src}
                  alt={alt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 55vw"
                  className="object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>
            ))}
          </div>
          <div className="self-center">
            <Eyebrow>Gallery</Eyebrow>
            <h2 className="mt-4 font-serif text-4xl font-semibold leading-tight md:text-5xl">
              See the rooms before you choose your floor.
            </h2>
            <p className="mt-5 text-lg leading-8 text-stone-700">
              The gallery shows the scale better than a list can: tall windows, old mantels, broad rooms, and the roof deck above it all.
            </p>
            <Link
              href="/gallery"
              className="mt-8 inline-flex items-center gap-2 text-base font-semibold text-amber-800 transition-colors hover:text-amber-900"
            >
              View full gallery
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      <section className="relative py-20 md:py-28">
        <Image
          src="/images/property-tour/01-living-room-1-01.webp"
          alt="Parlor at The Rittenhouse Residence"
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/65" />
        <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="font-serif text-4xl font-semibold leading-tight text-white md:text-5xl">
            Bring the whole group under one roof.
          </h2>
          <p className="mt-5 text-lg text-stone-200 md:text-xl">
            8 bedrooms · 5 full baths + powder · sleeps 16
          </p>
          <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              href="/book"
              className="inline-flex items-center justify-center gap-2 rounded-md bg-white px-8 py-4 text-base font-semibold text-stone-950 shadow-lg transition-colors hover:bg-stone-100"
            >
              <Calendar className="h-5 w-5" />
              Check Availability
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-md border border-white/70 px-8 py-4 text-base font-semibold text-white transition-colors hover:bg-white/10"
            >
              Ask a question
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
