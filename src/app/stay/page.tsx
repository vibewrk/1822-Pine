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
  title: "Stay at The Rittenhouse Residence",
  description:
    "A floor-by-floor tour of The Rittenhouse Residence: 8 bedrooms, 6 baths, two parlors, dining for 21, two kitchens, and a private roof deck near Rittenhouse Square.",
};

const floorWalk = [
  {
    floor: "Parlor floor",
    note: "The public rooms do the receiving.",
    image: "/images/airbnb/airbnb_04.jpg",
    alt: "Grand parlor with original fireplace and full-size pool table",
    rooms: [
      "Two parlors for conversation, games, and the first round of coffee.",
      "Dining room set for the whole group, with room for twenty-one at the table.",
      "Primary kitchen and pantry close to the dining room, so the house works for a long meal.",
      "Rear access toward Waverly Street for luggage and practical arrivals.",
    ],
  },
  {
    floor: "Second floor",
    note: "The principal suite sits above the street.",
    image: "/images/property/DSC00082.jpg",
    alt: "Master suite with four-poster bed",
    rooms: [
      "Master bedroom with king bed, private sitting room, and private bath.",
      "Library suite with a queen bed and Pine Street frontage.",
      "Formal library for the guest who wants a quieter hour away from the group.",
    ],
  },
  {
    floor: "Third and fourth floors",
    note: "Bedrooms stack upward, with space between them.",
    image: "/images/airbnb/airbnb_08.jpg",
    alt: "Upper-floor guest bedroom",
    rooms: [
      "Two more queen bedrooms on the third floor, including a large VIP suite.",
      "Three bedrooms on the fourth floor: two connecting family rooms and a king VIP suite.",
      "Six full bathrooms across the house keep mornings moving.",
    ],
  },
  {
    floor: "Fifth floor",
    note: "The roof deck is the exhale.",
    image: "/images/airbnb/airbnb_02.jpg",
    alt: "Private roof deck with city views",
    rooms: [
      "Private furnished terrace for morning coffee and an evening look over Center City.",
      "Enough separation from the bedrooms below that the house still has quiet corners.",
    ],
  },
];

const bedrooms = [
  ["Master Suite", "King bed", "Second floor", "Private bath"],
  ["Library Bedroom", "Queen bed", "Second floor", "Shared full bath nearby"],
  ["Second Bedroom", "Queen bed", "Third floor", "Full bath nearby"],
  ["VIP Bedroom 2", "Queen bed", "Third floor", "Full bath nearby"],
  ["Family Bedroom 1", "Queen bed", "Fourth floor", "Full bath nearby"],
  ["Family Bedroom 2", "Queen bed", "Fourth floor", "Full bath nearby"],
  ["Third Bedroom", "Queen bed", "Fourth floor", "Full bath nearby"],
  ["VIP Bedroom 3", "King bed", "Fourth floor", "Full bath nearby"],
];

const amenities = [
  {
    group: "For the group",
    items: [
      ["Dining seats 21", "One table for the whole stay, not three scattered reservations."],
      ["Two parlors", "Original fireplace, crystal chandelier, and full-size pool table."],
      ["Two full kitchens", "Primary kitchen on the parlor floor, secondary kitchen upstairs."],
      ["Roof deck", "Private outdoor space above the house."],
    ],
  },
  {
    group: "In every room",
    items: [
      ["Linens and towels", "Beds made before arrival, bathrooms stocked for the stay."],
      ["Smart TVs", "Screens in the main living areas and guest-ready entertainment setup."],
      ["Climate control", "Central air and heat for a five-floor house."],
    ],
  },
  {
    group: "Practical",
    items: [
      ["Gigabit WiFi", "High-speed connection throughout the residence."],
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
          src="/images/property/DSC00066.jpg"
          alt="Rittenhouse Residence parlor with historic millwork"
          fill
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
              The Rittenhouse Residence is a whole-house stay across five floors: parlors for gathering, a dining room for twenty-one, eight bedrooms, six baths, two kitchens, and a private roof deck two blocks from Rittenhouse Square.
            </p>
            <div className="mt-9 flex flex-wrap gap-x-6 gap-y-3 text-sm font-semibold uppercase tracking-[0.14em] text-white/90">
              <span className="inline-flex items-center gap-2"><Bed className="h-4 w-4" />8 bedrooms</span>
              <span className="inline-flex items-center gap-2"><Bath className="h-4 w-4" />6 baths</span>
              <span className="inline-flex items-center gap-2"><Users className="h-4 w-4" />Sleeps 21</span>
              <span className="inline-flex items-center gap-2"><Home className="h-4 w-4" />5 floors</span>
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
                  <Image src={floor.image} alt={floor.alt} fill className="object-cover" />
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
              Eight rooms, labeled plainly.
            </h2>
            <p className="mt-5 text-lg leading-8 text-stone-700">
              The mix is simple: two kings, six queens, and enough floor separation that a group of twenty-one can still find a quiet landing.
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
                Useful things, grouped by how you use them.
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
            {["DSC00068", "DSC00070", "DSC00072", "DSC00074"].map((filename, index) => (
              <div
                key={filename}
                className={`relative overflow-hidden rounded-lg ${index === 0 ? "col-span-2 aspect-[16/10]" : "aspect-[4/3]"}`}
              >
                <Image
                  src={`/images/property/${filename}.jpg`}
                  alt="Interior detail at The Rittenhouse Residence"
                  fill
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
          src="/images/airbnb/airbnb_03.jpg"
          alt="Parlor at The Rittenhouse Residence"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/65" />
        <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="font-serif text-4xl font-semibold leading-tight text-white md:text-5xl">
            Bring the whole group under one roof.
          </h2>
          <p className="mt-5 text-lg text-stone-200 md:text-xl">
            8 bedrooms · 6 baths · from $1,600 / night
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
