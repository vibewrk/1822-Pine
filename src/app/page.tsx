import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  Bath,
  Bed,
  Calendar,
  CheckCircle2,
  MapPin,
  Star,
  Users,
} from "lucide-react";
import { Eyebrow } from "@/components/Eyebrow";

const spaces = [
  {
    name: "Grand Parlor",
    image: "/images/airbnb/airbnb_04.jpg",
    alt: "Grand Parlor with original fireplace, crystal chandelier, and pool table",
    caption: "Original 1854 fireplace · crystal chandelier · full-size pool table.",
  },
  {
    name: "Library Lounge",
    image: "/images/airbnb/airbnb_05.jpg",
    alt: "Library lounge with wet bar and period furnishings",
    caption: "Wet bar · floor-to-ceiling bookshelves · period furnishings.",
  },
  {
    name: "Roof Deck",
    image: "/images/airbnb/airbnb_02.jpg",
    alt: "Private roof deck with Philadelphia skyline views",
    caption: "Private terrace · skyline views · room for morning coffee.",
  },
];

const idealFor = [
  {
    icon: Users,
    title: "Family Reunions",
    body: "Eight bedrooms keep the family under one roof. The dining room, parlors, and roof deck give every generation a place to land.",
  },
  {
    icon: Star,
    title: "Milestone Celebrations",
    body: "Birthdays, anniversaries, and graduations fit naturally in a house built for receiving. Stay together after dinner instead of scattering across hotels.",
  },
  {
    icon: MapPin,
    title: "Friends' Getaways",
    body: "Five floors give a large group real breathing room. Rittenhouse restaurants, museums, bars, and shopping are close enough to leave the cars parked.",
  },
];

const trustItems = [
  "4.89 ★",
  "93 Airbnb reviews",
  "Superhost-style stay",
  "Licensed Philadelphia short-term rental",
  "Fully insured",
];

export default function HomePage() {
  return (
    <div className="flex flex-col bg-stone-50 text-stone-950">
      <section className="relative h-[85vh] min-h-[600px]">
        <Image
          src="/images/airbnb/airbnb_03.jpg"
          alt="Grand parlor inside The Rittenhouse Residence, an 1854 Philadelphia mansion"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/60 to-black/20 md:from-black/70 md:via-black/20 md:to-transparent" />

        <div className="absolute inset-0 flex flex-col justify-end pb-14 md:pb-20">
          <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
            <Eyebrow light className="mb-4">
              Rittenhouse Square · Built 1854
            </Eyebrow>
            <h1 className="max-w-5xl font-serif text-5xl font-semibold leading-[0.95] text-white sm:text-6xl md:text-7xl lg:text-8xl">
              <span className="block text-white/80">The</span>
              <span className="block text-amber-100">Rittenhouse Residence</span>
            </h1>
            <p className="mt-6 max-w-3xl text-xl font-medium leading-8 text-white md:text-2xl md:leading-9">
              An 8-bedroom Victorian mansion in the heart of Center City Philadelphia — the whole house, for your whole group.
            </p>
            <p className="mt-5 max-w-2xl text-base leading-7 text-stone-100 md:text-lg">
              Nearly 7,000 square feet across five floors, two blocks from Rittenhouse Square. Twenty-one guests under one historic roof, with the city&apos;s best dining, museums, and shopping at the doorstep.
            </p>

            <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm font-medium text-white/90">
              <span className="inline-flex items-center gap-2">
                <Bed className="h-4 w-4" />
                8 Bedrooms
              </span>
              <span className="inline-flex items-center gap-2">
                <Bath className="h-4 w-4" />
                6 Baths
              </span>
              <span className="inline-flex items-center gap-2">
                <Users className="h-4 w-4" />
                Sleeps 21
              </span>
              {/* Review data sourced from Airbnb listing; update periodically. */}
              <a
                href="https://www.airbnb.com/rooms/6000930"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 transition-colors hover:text-white"
              >
                <Star className="h-4 w-4 fill-amber-300 text-amber-300" />
                4.89 · 93 Reviews
              </a>
            </div>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/book"
                className="inline-flex items-center justify-center gap-2 rounded-md bg-white px-7 py-4 text-base font-semibold text-stone-950 shadow-lg transition-colors hover:bg-stone-100"
              >
                <Calendar className="h-5 w-5" />
                Check Availability
              </Link>
              <Link
                href="/gallery"
                className="inline-flex items-center justify-center gap-2 rounded-md border border-white/50 px-7 py-4 text-base font-semibold text-white backdrop-blur-sm transition-colors hover:bg-white/10"
              >
                View Gallery
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-stone-200 bg-stone-100/80 py-4">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-7 gap-y-2 px-4 text-xs font-semibold uppercase tracking-[0.16em] text-stone-700 sm:px-6 lg:px-8">
          {trustItems.map((item) => (
            <span key={item} className="inline-flex items-center gap-2">
              <CheckCircle2 className="h-3.5 w-3.5 text-amber-700" />
              {item}
            </span>
          ))}
        </div>
      </section>

      <section className="bg-stone-50 py-16 md:py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
          <div className="relative aspect-[4/5] overflow-hidden rounded-xl shadow-sm">
            <Image
              src="/images/airbnb/airbnb_01.jpg"
              alt="A master suite at The Rittenhouse Residence — a mahogany four-poster beneath a crystal chandelier, with the home's original 1854 millwork and a leaded-glass cabinet"
              fill
              sizes="(max-width: 1024px) 100vw, 45vw"
              className="object-cover"
            />
          </div>
          <div>
            <Eyebrow>
              The House
            </Eyebrow>
            <h2 className="mt-4 max-w-4xl font-serif text-4xl font-semibold leading-tight text-stone-950 md:text-5xl">
              One of the last great Victorian townhouses on Pine Street — kept, not gutted.
            </h2>
            <p className="mt-8 max-w-3xl text-lg leading-8 text-stone-700 first-letter:float-left first-letter:mr-3 first-letter:font-serif first-letter:text-7xl first-letter:leading-[0.8] first-letter:text-stone-950">
              Built in 1854 and lived in for the better part of two centuries, No. 1822 has been home to Drexel banking heirs and a meeting place for the city&apos;s suffrage movement, its parlors witness to both. We&apos;ve preserved what made it remarkable — the fireplaces, the plasterwork, the light — and quietly added what a modern group needs. The result is a house with a{" "}
              <Link href="/history" className="font-medium text-amber-800 underline underline-offset-4 hover:text-amber-900">
                documented past you can actually read
              </Link>
              , and rooms you&apos;ll actually want to gather in.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white py-14 md:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 md:mb-14">
            <Eyebrow>
              The Rooms
            </Eyebrow>
            <h2 className="mt-3 font-serif text-4xl font-semibold leading-tight text-stone-950 md:text-5xl">
              Built for gathering, room by room.
            </h2>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {spaces.map((space, index) => (
              <Link
                key={space.name}
                href="/gallery"
                className={`group relative overflow-hidden rounded-lg bg-stone-900 ${
                  index === 0 ? "aspect-[4/3] md:row-span-2 md:aspect-auto" : "aspect-[4/3]"
                }`}
              >
                <Image
                  src={space.image}
                  alt={space.alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-6">
                  <h3 className="font-serif text-2xl font-semibold text-white md:text-3xl">
                    {space.name}
                  </h3>
                  <p className="mt-2 max-w-md text-sm leading-6 text-stone-100">
                    {space.caption}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-stone-100 py-20 md:py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8">
          <div>
            <Eyebrow>
              Accommodations
            </Eyebrow>
            <h2 className="mt-3 font-serif text-4xl font-semibold leading-tight text-stone-950 md:text-5xl">
              Eight bedrooms. Nobody drives home.
            </h2>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-stone-700">
              Five floors of private space so a group of twenty-one sleeps comfortably and still finds a quiet corner. A master suite with a four-poster and private bath; six queens and two kings across the upper floors; six full bathrooms with period fixtures.
            </p>
            <Link
              href="/stay"
              className="mt-8 inline-flex items-center gap-2 text-base font-semibold text-amber-800 transition-colors hover:text-amber-900"
            >
              View all bedrooms
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="relative aspect-[3/4] overflow-hidden rounded-lg">
              <Image
                src="/images/property/DSC00082.jpg"
                alt="Master suite with four-poster bed at The Rittenhouse Residence"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative mt-10 aspect-[3/4] overflow-hidden rounded-lg">
              <Image
                src="/images/airbnb/airbnb_08.jpg"
                alt="Upper-floor guest bedroom inside the Philadelphia mansion"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div className="relative order-2 aspect-[4/3] overflow-hidden rounded-lg lg:order-1">
            <Image
              src="/images/property/DSC00088.jpg"
              alt="Historic interior detail inside The Rittenhouse Residence"
              fill
              className="object-cover"
            />
          </div>
          <div className="order-1 lg:order-2">
            <Eyebrow>
              Location
            </Eyebrow>
            <h2 className="mt-3 flex items-center gap-3 font-serif text-4xl font-semibold leading-tight text-stone-950 md:text-5xl">
              <MapPin className="h-8 w-8 text-amber-700" />
              Rittenhouse Square
            </h2>
            <p className="mt-6 max-w-2xl text-xl leading-8 text-stone-700">
              Philadelphia&apos;s most walkable address. Cafés and world-class restaurants around the corner, the Parkway museums a short walk north, and a tree-lined residential block to come home to.
            </p>
            <div className="mt-8 grid grid-cols-2 gap-px overflow-hidden rounded-lg border border-stone-200 bg-stone-200">
              {[
                ["2 Blocks", "to Rittenhouse Square"],
                ["5 Minutes", "to Subway"],
                ["Walking Distance", "to top restaurants"],
                ["10 Minutes", "to Parkway museums"],
              ].map(([stat, label]) => (
                <div key={stat} className="bg-stone-50 p-4">
                  <p className="font-semibold text-stone-950">{stat}</p>
                  <p className="mt-1 text-sm text-stone-600">{label}</p>
                </div>
              ))}
            </div>
            <Link
              href="/neighborhood"
              className="mt-8 inline-flex items-center gap-2 text-base font-semibold text-amber-800 transition-colors hover:text-amber-900"
            >
              Explore the neighborhood
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-stone-950 py-16 md:py-24">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <div className="mb-8 flex justify-center gap-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="h-5 w-5 fill-amber-400 text-amber-400" />
            ))}
          </div>
          <blockquote className="font-serif text-2xl italic leading-relaxed text-white md:text-3xl">
            &ldquo;This house is remarkable. The photos don&apos;t do it justice.
            We had our family reunion here and everyone was in awe of the beautiful
            spaces, the history, and the perfect location.&rdquo;
          </blockquote>
          <p className="mt-8 text-sm font-semibold uppercase tracking-[0.18em] text-amber-300">
            — Verified guest · 4.89 average across 93 stays
          </p>
        </div>
      </section>

      <section className="bg-stone-50 py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <Eyebrow>
              Ideal For
            </Eyebrow>
            <h2 className="mt-3 font-serif text-4xl font-semibold leading-tight text-stone-950 md:text-5xl">
              The house was made for a full table.
            </h2>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {idealFor.map((item) => (
              <div key={item.title} className="rounded-lg border border-stone-200 bg-white p-6 shadow-sm">
                <div className="mb-6 flex h-11 w-11 items-center justify-center rounded-full bg-amber-100">
                  <item.icon className="h-5 w-5 text-amber-800" />
                </div>
                <h3 className="font-serif text-2xl font-semibold text-stone-950">
                  {item.title}
                </h3>
                <p className="mt-3 text-base leading-7 text-stone-700">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-20 md:py-28">
        <Image
          src="/images/airbnb/airbnb_04.jpg"
          alt="Grand Parlor at The Rittenhouse Residence"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/65" />
        <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="font-serif text-4xl font-semibold leading-tight text-white md:text-5xl">
            Come see the house.
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
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
