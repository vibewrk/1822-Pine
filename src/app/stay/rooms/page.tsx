import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Bath,
  Bed,
  Home,
  Printer,
  Users,
} from "lucide-react";
import { BookingCTA } from "@/components/BookingCTA";
import { Eyebrow } from "@/components/Eyebrow";
import roomsData from "@/data/rooms.json";

export const metadata: Metadata = {
  title: "8 Bedrooms for 16 Guests",
  description:
    "Every bedroom at The Rittenhouse Residence — beds, floors, and baths — plus a printable room assignment sheet for groups of up to 16.",
  alternates: { canonical: "/stay/rooms" },
  openGraph: {
    title: "8 Bedrooms for 16 Guests | The Rittenhouse Residence",
    description:
      "Eight bedrooms across floors 2–4, labeled plainly, with a printable assignment sheet for the whole group.",
    images: ["/images/property-tour/28-bedroom-1-02.webp"],
  },
};

const SITE = "https://rittenhouseresidence.com";

const stats = [
  ["8 bedrooms", "Floors 2–4"],
  ["2 kings · 6 queens", "The bed mix"],
  ["5 baths + powder", "Across the house"],
  ["No elevator", "Stairs between floors"],
];

const tips = [
  [
    "Send the stairs uphill wisely",
    "The fourth floor is the most stairs in the house, and there is no elevator. Assign the top rooms to the sure-footed.",
  ],
  [
    "Keep families connected",
    "The two connecting family rooms on the fourth floor suit parents with kids — doors between the rooms, not floors.",
  ],
  [
    "One private bath",
    "Bedroom 1 has its own private bath. The other bedrooms share the hall baths between them, and we send you the exact room-to-bath map before you arrive so nobody is guessing on the first morning.",
  ],
];

function BreadcrumbJsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${SITE}/` },
      { "@type": "ListItem", position: 2, name: "The House", item: `${SITE}/stay` },
      { "@type": "ListItem", position: 3, name: "Room Planner", item: `${SITE}/stay/rooms` },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export default function RoomPlannerPage() {
  const { rooms } = roomsData;

  return (
    <div className="flex flex-col bg-[#fbfaf7] text-stone-950 print:bg-white">
      <BreadcrumbJsonLd />
      <style>{`@media print { header, footer { display: none !important; } @page { margin: 1.2cm; } }`}</style>

      <section className="relative min-h-[560px] overflow-hidden print:hidden">
        <Image
          src="/images/property-tour/28-bedroom-1-02.webp"
          alt="Bedroom 1 with a king bed at The Rittenhouse Residence"
          fill
          sizes="100vw"
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/45 to-black/20" />
        <div className="relative mx-auto flex min-h-[560px] max-w-7xl items-end px-4 pb-16 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <Eyebrow light className="mb-5">
              Room Planner
            </Eyebrow>
            <h1 className="font-serif text-5xl font-semibold leading-[0.95] text-white md:text-7xl">
              Eight bedrooms, assigned before anyone climbs a stair.
            </h1>
            <p className="mt-7 max-w-3xl text-lg leading-8 text-stone-100 md:text-xl">
              {"The whole house is yours, so the room list is too. Send this page to your group, decide who sleeps where, and print the assignment sheet for the kitchen counter."}
            </p>
          </div>
        </div>
      </section>

      <section className="border-y border-stone-200 bg-white py-5 print:hidden">
        <div className="mx-auto grid max-w-7xl gap-px overflow-hidden rounded-lg border border-stone-200 bg-stone-200 px-0 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map(([value, label]) => (
            <div key={label} className="bg-stone-50 p-5 text-center">
              <p className="font-serif text-3xl font-semibold text-stone-950">{value}</p>
              <p className="mt-1 text-xs font-semibold uppercase tracking-[0.18em] text-stone-600">{label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-[#fbfaf7] py-16 md:py-24 print:hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <Eyebrow>The Bedrooms</Eyebrow>
            <h2 className="mt-4 font-serif text-4xl font-semibold leading-tight md:text-5xl">
              Every room, labeled plainly.
            </h2>
            <p className="mt-5 text-lg leading-8 text-stone-700">
              {"Two kings, six queens, and enough floor separation that sixteen people can still find a quiet landing. The room names and photos follow the same numbered sequence as the booking tour."}
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {rooms.map((room) => (
              <article
                key={room.name}
                className="overflow-hidden rounded-lg border border-stone-200 bg-white"
              >
                <div className="relative aspect-[16/9] overflow-hidden">
                  <Image
                    src={room.imageSrc}
                    alt={`${room.name} — ${room.bed}, ${room.floor.toLowerCase()}`}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-amber-800">
                    {room.bed} · {room.floor}
                  </p>
                  <h3 className="mt-2 font-serif text-3xl font-semibold text-stone-950">
                    {room.name}
                  </h3>
                  <p className="mt-3 leading-7 text-stone-700">{room.notes}</p>
                  <div className="mt-4 flex gap-3 border-t border-stone-200 pt-4 text-sm leading-6 text-stone-600">
                    <Bath className="mt-0.5 h-4 w-4 flex-none text-amber-800" />
                    <span>{room.bath}</span>
                  </div>
                  <div className="mt-2 flex gap-3 text-sm leading-6 text-stone-600">
                    <Users className="mt-0.5 h-4 w-4 flex-none text-amber-800" />
                    <span>{room.suitability}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-stone-100 py-16 md:py-20 print:hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <Eyebrow>Assigning Rooms</Eyebrow>
            <h2 className="mt-4 font-serif text-4xl font-semibold leading-tight md:text-5xl">
              Three rules that settle most arguments.
            </h2>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {tips.map(([title, body]) => (
              <article key={title} className="rounded-lg border border-stone-200 bg-white p-6">
                <Home className="h-5 w-5 text-amber-800" />
                <h3 className="mt-4 font-serif text-2xl font-semibold">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-stone-700">{body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16 md:py-24 print:py-0">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 print:max-w-none print:px-0">
          <div className="max-w-3xl print:hidden">
            <Eyebrow>Assignment Sheet</Eyebrow>
            <h2 className="mt-4 font-serif text-4xl font-semibold leading-tight md:text-5xl">
              The sheet for the kitchen counter.
            </h2>
            <p className="mt-5 text-lg leading-8 text-stone-700">
              {"Print this page and only the sheet below comes out — one clean page, room by room, with a blank line for every name. Use your browser's print dialog."}
            </p>
            <p className="mt-4 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.14em] text-stone-600">
              <Printer className="h-4 w-4 text-amber-800" />
              Formatted to print on one sheet
            </p>
          </div>

          <div className="mt-10 print:mt-0">
            <div className="hidden print:block">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-stone-600">
                The Rittenhouse Residence
              </p>
              <h2 className="mt-1 font-serif text-3xl font-semibold text-stone-950">
                Room Assignment Sheet
              </h2>
              <p className="mt-1 text-sm text-stone-600">
                8 bedrooms · sleeps 16 · rittenhouseresidence.com/stay/rooms
              </p>
            </div>

            <div className="overflow-x-auto rounded-lg border border-stone-200 print:mt-4 print:overflow-visible print:rounded-none print:border-0">
              <table className="w-full border-collapse text-left text-sm">
                <thead>
                  <tr className="border-b border-stone-300 bg-stone-50 print:bg-white">
                    <th scope="col" className="p-4 font-semibold uppercase tracking-[0.14em] text-stone-600 print:p-2">
                      Bedroom
                    </th>
                    <th scope="col" className="p-4 font-semibold uppercase tracking-[0.14em] text-stone-600 print:p-2">
                      Bed
                    </th>
                    <th scope="col" className="p-4 font-semibold uppercase tracking-[0.14em] text-stone-600 print:p-2">
                      Floor
                    </th>
                    <th scope="col" className="p-4 font-semibold uppercase tracking-[0.14em] text-stone-600 print:p-2">
                      Bath
                    </th>
                    <th scope="col" className="w-1/3 p-4 font-semibold uppercase tracking-[0.14em] text-stone-600 print:p-2">
                      {"Who's sleeping here"}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {rooms.map((room) => (
                    <tr key={room.name} className="border-b border-stone-200 last:border-b-0">
                      <td className="p-4 font-semibold text-stone-950 print:p-2">
                        {room.name}
                      </td>
                      <td className="p-4 text-stone-700 print:p-2">
                        <span className="inline-flex items-center gap-2">
                          <Bed className="h-4 w-4 text-amber-800 print:hidden" />
                          {room.bed}
                        </span>
                      </td>
                      <td className="p-4 text-stone-700 print:p-2">{room.floor}</td>
                      <td className="p-4 text-stone-700 print:p-2">
                        {room.bath === "Private bath" ? "Private bath" : "Shared hall bath"}
                      </td>
                      <td className="p-4 print:p-2">
                        <span className="block h-6 border-b border-dotted border-stone-400" />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="mt-4 text-sm leading-6 text-stone-600 print:mt-3">
              The bedrooms share the hall baths between them. We send the exact room-to-bath map before you arrive — five full baths and a powder room across the house.
            </p>
          </div>
        </div>
      </section>

      <section className="border-t border-stone-200 bg-white py-10 print:hidden">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <BookingCTA />
          <div className="mt-8 text-center">
            <Link
              href="/stay"
              className="inline-flex items-center gap-2 text-base font-semibold text-amber-800 transition-colors hover:text-amber-900"
            >
              Tour the whole house floor by floor
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
