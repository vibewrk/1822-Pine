import { Metadata } from "next";
import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Building2,
  Coffee,
  ExternalLink,
  MapPin,
  ShoppingBag,
  Train,
  TreePine,
  Utensils,
} from "lucide-react";
import { Eyebrow } from "@/components/Eyebrow";

export const metadata: Metadata = {
  title: "Rittenhouse Square Neighborhood Guide",
  description:
    "An editorial guide to restaurants near Rittenhouse Square, coffee, museums, shopping, transit, parking, and things to do in Center City Philadelphia.",
  openGraph: {
    title: "Rittenhouse Square Neighborhood Guide | The Rittenhouse Residence",
    description:
      "Restaurants, coffee, museums, shopping, transit, and practical local notes from 1822 Pine Street.",
    images: ["/images/venues/parc.jpg"],
  },
};

const stats = [
  ["2 blocks", "Rittenhouse Square"],
  ["4 min", "Di Bruno Bros"],
  ["8 min", "Mutter Museum"],
  ["20 min", "30th Street Station"],
];

const coffee = [
  ["La Colombe", "130 S 19th St", "Philadelphia-born coffee, close enough for the first walk of the morning.", "https://www.lacolombe.com"],
  ["P.S. & Co.", "1706 Locust St", "Organic, plant-based breakfast and pastries for guests with dietary needs.", "https://psandco.com"],
  ["Vernick Coffee Bar", "1800 Arch St", "A polished breakfast stop from Greg Vernick near the Parkway side of Center City.", "https://www.vernickcoffeebar.com"],
  ["Rittenhouse Market", "1733 Spruce St", "Neighborhood grocery basics two minutes from the house.", ""],
];

const restaurants = [
  ["Parc", "French bistro", "227 S 18th St", "Sidewalk tables facing the Square; useful for a first-night dinner everyone can find.", "1 min walk", "https://parc-restaurant.com"],
  ["Vernick Food & Drink", "New American", "2031 Walnut St", "A serious reservation within an easy walk of Pine Street.", "3 min walk", "https://www.vernickphilly.com"],
  ["Friday Saturday Sunday", "New American", "261 S 21st St", "A compact, high-demand dining room for a smaller group splinter night.", "5 min walk", "https://www.fridaysaturdaysunday.com"],
  ["Via Locusta", "Italian", "1723 Locust St", "Handmade pasta close to the Square.", "4 min walk", "https://www.vialocusta.com"],
  ["Dizengoff", "Israeli", "1625 Sansom St", "Hummus bowls and fast counter service for a low-lift lunch.", "4 min walk", "https://www.dizengoffphilly.com"],
  ["JJ Thai Cuisine", "Thai BYOB", "2028 Chestnut St", "Reliable BYOB option when the group wants something casual.", "6 min walk", "https://www.jjthaicuisine.com"],
  ["Good Dog Bar", "Gastropub", "224 S 15th St", "A neighborhood bar with a known burger and multiple floors.", "5 min walk", "https://gooddogbar.com"],
  ["Di Bruno Bros", "Gourmet market", "1730 Chestnut St", "Cheese, prepared foods, and pantry supplies for dinner at the house.", "4 min walk", "https://dibruno.com"],
];

const parks = [
  ["Rittenhouse Square", "Two blocks north", "One of William Penn's original five squares, with benches, paths, and the city's daily theater."],
  ["Schuylkill River Trail", "10 min walk", "A paved river path for running, biking, and the walk toward the Art Museum."],
  ["Washington Square", "12 min walk", "A quieter historic square when the group wants a different corner of Center City."],
];

const museums = [
  ["Rosenbach Museum", "2008-2010 Delancey Pl", "Rare books and manuscripts in a historic townhouse, three minutes away.", "3 min walk", "https://rosenbach.org"],
  ["Mutter Museum", "19 S 22nd St", "Medical history collections close to the Parkway.", "8 min walk", "https://muttermuseum.org"],
  ["Academy of Music", "240 S Broad St", "America's oldest opera house still in use, a short walk east.", "6 min walk", "https://www.academyofmusic.org"],
  ["Philadelphia Museum of Art", "2600 Benjamin Franklin Pkwy", "The major Parkway museum and the Rocky Steps.", "15 min walk / 5 min ride", "https://philamuseum.org"],
  ["Barnes Foundation", "2025 Benjamin Franklin Pkwy", "A major private collection on the Parkway.", "18 min walk / 6 min ride", "https://www.barnesfoundation.org"],
];

const shopping = [
  ["Walnut Street", "National brands and local storefronts run east and west from the Square."],
  ["Boyds Philadelphia", "A long-running Center City department store for tailored clothing."],
  ["Di Bruno Bros", "Also the best nearby stop for cheese, charcuterie, and prepared food."],
  ["Trader Joe's", "2121 Market Street for budget-friendly groceries, about eight minutes away."],
];

const transit = [
  ["Subway", "15th-16th & Locust Station is about an eight-minute walk; City Hall and 15th Street stations are also close."],
  ["Regional Rail", "Suburban Station is about twelve minutes away on foot."],
  ["Amtrak", "30th Street Station is about twenty minutes on foot or a short ride."],
  ["PHL Airport", "Use the SEPTA Airport Line to Center City or a rideshare, depending on luggage and timing."],
];

const kids = [
  ["The Square", "Short walks, benches, and open air without leaving the neighborhood."],
  ["Schuylkill River Trail", "Room to move when children need a longer walk."],
  ["Franklin Institute", "A Parkway classic for science exhibits; check hours before you go."],
  ["At the house", "The pool table, roof deck, and multiple living rooms help the group spread out between outings."],
];

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

function SectionHeader({
  eyebrow,
  title,
  body,
}: {
  eyebrow: string;
  title: string;
  body?: string;
}) {
  return (
    <div className="mb-9 max-w-3xl">
      <Eyebrow>{eyebrow}</Eyebrow>
      <h2 className="mt-4 font-serif text-4xl font-semibold leading-tight text-stone-950 md:text-5xl">
        {title}
      </h2>
      {body && <p className="mt-5 text-lg leading-8 text-stone-700">{body}</p>}
    </div>
  );
}

export default function NeighborhoodPage() {
  return (
    <div className="flex flex-col bg-[#fbfaf7] text-stone-950">
      <section className="relative min-h-[620px] overflow-hidden">
        <Image
          src="/images/property/DSC00112.jpg"
          alt="Tree-lined Rittenhouse Square neighborhood street"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/45 to-black/20" />
        <div className="relative mx-auto flex min-h-[620px] max-w-7xl items-end px-4 pb-16 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <Eyebrow light className="mb-5">
              Pine Street · Center City Philadelphia
            </Eyebrow>
            <h1 className="font-serif text-5xl font-semibold leading-[0.95] text-white md:text-7xl">
              Rittenhouse Square, from a residential block.
            </h1>
            <p className="mt-7 max-w-3xl text-lg leading-8 text-stone-100 md:text-xl">
              Pine Street is quieter than Walnut and closer than a hotel lobby. Step north and the Square opens in two blocks; step west and the river trail waits; step east and Center City turns into restaurants, shops, theaters, and museums. Morning here starts with coffee, old brick sidewalks, and the decision of which direction to walk first.
            </p>
          </div>
        </div>
      </section>

      <section className="border-y border-stone-200 bg-white py-5">
        <div className="mx-auto grid max-w-7xl gap-px overflow-hidden rounded-lg border border-stone-200 bg-stone-200 px-0 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map(([value, label]) => (
            <div key={label} className="bg-stone-50 p-5 text-center">
              <p className="font-serif text-3xl font-semibold text-stone-950">{value}</p>
              <p className="mt-1 text-xs font-semibold uppercase tracking-[0.18em] text-stone-600">{label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-[#fbfaf7] py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Coffee & Breakfast"
            title="Start close, then keep walking."
            body="The easiest mornings are the ones with no logistics: coffee nearby, groceries nearby, and enough options for a group that wakes at different speeds."
          />
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {coffee.map(([name, address, reason, website]) => (
              <article key={name} className="rounded-lg border border-stone-200 bg-white p-6">
                <Coffee className="h-5 w-5 text-amber-800" />
                <h3 className="mt-5 font-serif text-2xl font-semibold">
                  <ExternalVenueLink href={website}>{name}</ExternalVenueLink>
                </h3>
                <p className="mt-2 text-sm font-semibold uppercase tracking-[0.16em] text-stone-500">
                  {address}
                </p>
                <p className="mt-4 text-sm leading-6 text-stone-700">{reason}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Restaurants"
            title="Restaurants near Rittenhouse Square."
            body="Use the house as the anchor: reserve one serious dinner, keep one casual option ready, and let everyone else choose their own lunch radius."
          />
          <div className="grid gap-px overflow-hidden rounded-lg border border-stone-200 bg-stone-200 md:grid-cols-2">
            {restaurants.map(([name, cuisine, address, reason, distance, website]) => (
              <article key={name} className="bg-stone-50 p-5">
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <h3 className="font-serif text-2xl font-semibold">
                      <ExternalVenueLink href={website}>{name}</ExternalVenueLink>
                    </h3>
                    <p className="mt-1 text-sm text-amber-800">{cuisine}</p>
                  </div>
                  <span className="rounded-full border border-stone-300 px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-stone-600">
                    {distance}
                  </span>
                </div>
                <p className="mt-4 text-base leading-7 text-stone-700">{reason}</p>
                <p className="mt-3 inline-flex items-center gap-2 text-sm text-stone-500">
                  <MapPin className="h-4 w-4" />
                  {address}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-stone-100 py-16 md:py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
          <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
            <Image
              src="/images/neighborhood/schuylkill-river.jpg"
              alt="Schuylkill River Trail near Center City Philadelphia"
              fill
              className="object-cover"
            />
          </div>
          <div>
            <SectionHeader
              eyebrow="The Square & Green Space"
              title="Two blocks north, the city opens."
              body="Rittenhouse Square gives the neighborhood its daily rhythm: office lunches, dog walks, weekend benches, and a shaded route home after dinner."
            />
            <div className="space-y-4">
              {parks.map(([name, distance, reason]) => (
                <div key={name} className="border-t border-stone-300 pt-4">
                  <h3 className="flex items-center gap-2 font-serif text-2xl font-semibold">
                    <TreePine className="h-5 w-5 text-amber-800" />
                    {name}
                  </h3>
                  <p className="mt-1 text-xs font-semibold uppercase tracking-[0.16em] text-stone-500">{distance}</p>
                  <p className="mt-2 leading-7 text-stone-700">{reason}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#fbfaf7] py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Museums & Culture"
            title="Things to do in Center City Philadelphia."
            body="The Parkway is close enough for a museum morning without turning the day into a production, and smaller institutions sit even closer to Pine Street."
          />
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {museums.map(([name, address, reason, distance, website]) => (
              <article key={name} className="rounded-lg border border-stone-200 bg-white p-6">
                <Building2 className="h-5 w-5 text-amber-800" />
                <h3 className="mt-5 font-serif text-2xl font-semibold">
                  <ExternalVenueLink href={website}>{name}</ExternalVenueLink>
                </h3>
                <p className="mt-2 text-xs font-semibold uppercase tracking-[0.16em] text-stone-500">{distance}</p>
                <p className="mt-4 leading-7 text-stone-700">{reason}</p>
                <p className="mt-3 text-sm text-stone-500">{address}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16 md:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div>
            <SectionHeader
              eyebrow="Shopping"
              title="Walnut Street and the useful errands."
              body="The shopping district starts almost immediately north of Pine Street, with Walnut Street carrying most of the retail weight."
            />
            <div className="space-y-4">
              {shopping.map(([name, reason]) => (
                <div key={name} className="rounded-lg border border-stone-200 bg-stone-50 p-5">
                  <h3 className="flex items-center gap-2 font-semibold">
                    <ShoppingBag className="h-4 w-4 text-amber-800" />
                    {name}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-stone-700">{reason}</p>
                </div>
              ))}
            </div>
          </div>

          <div id="getting-here-parking" className="scroll-mt-24">
            <SectionHeader
              eyebrow="Getting Around"
              title="SEPTA, 30th Street, PHL, and parking."
              body="Most guests can leave the car parked. When you do drive, use a nearby garage and treat street parking as a short errand, not a plan."
            />
            <div className="space-y-4">
              {transit.map(([name, reason]) => (
                <div key={name} className="rounded-lg border border-stone-200 bg-stone-50 p-5">
                  <h3 className="flex items-center gap-2 font-semibold">
                    <Train className="h-4 w-4 text-amber-800" />
                    {name}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-stone-700">{reason}</p>
                </div>
              ))}
              <div className="rounded-lg border border-amber-200 bg-amber-50 p-5 text-amber-950">
                <h3 className="font-semibold">Parking</h3>
                <p className="mt-2 text-sm leading-6">
                  Several garages are within two blocks. We send current garage options before check-in instead of publishing stale rates. Waverly Street can be useful for luggage drop-off before you park.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-stone-100 py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="With Kids"
            title="Enough room to leave, enough room to stay in."
          />
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {kids.map(([name, reason]) => (
              <article key={name} className="rounded-lg border border-stone-200 bg-white p-6">
                <h3 className="font-serif text-2xl font-semibold">{name}</h3>
                <p className="mt-3 text-sm leading-6 text-stone-700">{reason}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-20 md:py-28">
        <Image
          src="/images/venues/parc.jpg"
          alt="Parc restaurant near Rittenhouse Square"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/65" />
        <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="font-serif text-4xl font-semibold leading-tight text-white md:text-5xl">
            Stay where the city is walkable.
          </h2>
          <p className="mt-5 text-lg text-stone-200 md:text-xl">
            Two blocks from the Square, with Center City at the door.
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
