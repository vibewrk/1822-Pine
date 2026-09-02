import Link from "next/link";
import TrackedLink from "@/components/TrackedLink";
import { ArrowRight, Star } from "lucide-react";
import { BOOKING_LINKS, PROPERTY_FACTS, REVIEW_FACTS } from "@/lib/facts";

const footerNavigation = [
  {
    title: "Property",
    links: [
      { name: "Stay", href: "/stay" },
      { name: "Floor Plans", href: "/stay/floor-plans" },
      { name: "Room Planner", href: "/stay/rooms" },
      { name: "Stairs & Access", href: "/stay/stairs-and-access" },
      { name: "Guest Reviews", href: "/reviews" },
      { name: "Rates", href: "/rates" },
      { name: "House Rules", href: "/house-rules" },
    ],
  },
  {
    title: "Groups",
    links: [
      { name: "Group Stays", href: "/groups" },
      { name: "Wedding Guest Housing", href: "/groups/weddings" },
      { name: "Hotel Alternative", href: "/hotel-alternative" },
    ],
  },
  {
    title: "History",
    links: [
      { name: "Our Story", href: "/history" },
      { name: "Timeline", href: "/history/timeline" },
      { name: "Documents", href: "/history/documents" },
      { name: "Provenance", href: "/history/provenance" },
      { name: "Suffrage History", href: "/history/suffrage" },
    ],
  },
  {
    title: "Explore Philadelphia",
    links: [
      { name: "Events Calendar", href: "/philadelphia-events" },
      { name: "Rittenhouse Square Guide", href: "/rittenhouse-square" },
      { name: "Restaurants", href: "/rittenhouse-square/restaurants" },
      { name: "Things to Do", href: "/rittenhouse-square/things-to-do" },
      { name: "Public Art", href: "/rittenhouse-square/public-art" },
      { name: "Group Dining", href: "/neighborhood/group-dining" },
    ],
  },
  {
    title: "Legal",
    links: [
      { name: "Privacy Policy", href: "/privacy" },
      { name: "Terms of Service", href: "/terms" },
      { name: "Rental Agreement", href: "/rental-agreement" },
      { name: "Accessibility", href: "/accessibility" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-100">
      {/* Booking CTA Section */}
      <div className="border-y border-amber-400/20 bg-stone-950 py-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 text-center lg:grid-cols-[minmax(0,1fr)_auto] lg:items-center lg:gap-12 lg:text-left">
            <div>
              <p className="inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.24em] text-amber-300">
                <span aria-hidden="true" className="h-px w-8 bg-amber-300/70" />
                Plan Your Stay
              </p>
              <h3 className="mt-2 font-serif text-2xl font-semibold leading-tight text-white sm:text-3xl">
                Have dates in mind?
              </h3>
              <p className="mt-2 text-sm leading-6 text-stone-300">
                {PROPERTY_FACTS.bedrooms} bedrooms ·{" "}
                {PROPERTY_FACTS.fullBathrooms} full baths + powder room · Sleeps{" "}
                {PROPERTY_FACTS.sleeps} · Two blocks from Rittenhouse Square
              </p>
              <div className="mt-3 flex flex-col items-center gap-2 text-sm text-stone-300 sm:flex-row sm:justify-center sm:gap-5 lg:justify-start">
                <span className="inline-flex items-center gap-2">
                  <Star
                    aria-hidden="true"
                    className="h-4 w-4 fill-amber-300 text-amber-300"
                  />
                  {REVIEW_FACTS.airbnb.rating}/5 ·{" "}
                  {REVIEW_FACTS.airbnb.count} Airbnb reviews
                </span>
                <span className="inline-flex items-center gap-2">
                  <Star
                    aria-hidden="true"
                    className="h-4 w-4 fill-amber-300 text-amber-300"
                  />
                  {REVIEW_FACTS.vrbo.rating}/10 · {REVIEW_FACTS.vrbo.count} Vrbo
                  reviews
                </span>
              </div>
            </div>

            <div className="lg:min-w-96 lg:text-center">
              <TrackedLink
                event="direct_inquiry_click"
                eventParams={{ location: "footer_cta" }}
                href="/contact"
                className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-sm bg-amber-700 px-8 py-3.5 text-base font-semibold text-white shadow-md transition-colors hover:bg-amber-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-300 focus-visible:ring-offset-2 focus-visible:ring-offset-stone-950 sm:w-auto"
              >
                Ask About Your Dates
                <ArrowRight aria-hidden="true" className="h-4 w-4" />
              </TrackedLink>
              <p className="mt-2 text-sm leading-6 text-stone-400">
                Personal reply within 24 hours · exact pricing for your dates
              </p>
              <p className="mt-2 text-sm text-stone-300">
                Live calendars and secure checkout:{" "}
                <TrackedLink
                  href={BOOKING_LINKS.airbnb}
                  event="ota_click"
                  eventParams={{
                    platform: "airbnb",
                    location: "footer_cta",
                  }}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-sm font-semibold text-amber-300 underline underline-offset-4 transition-colors hover:text-amber-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-300 focus-visible:ring-offset-2 focus-visible:ring-offset-stone-950"
                >
                  Airbnb
                  <span className="sr-only"> (opens in a new tab)</span>
                </TrackedLink>{" "}
                or{" "}
                <TrackedLink
                  href={BOOKING_LINKS.vrbo}
                  event="ota_click"
                  eventParams={{
                    platform: "vrbo",
                    location: "footer_cta",
                  }}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-sm font-semibold text-amber-300 underline underline-offset-4 transition-colors hover:text-amber-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-300 focus-visible:ring-offset-2 focus-visible:ring-offset-stone-950"
                >
                  Vrbo
                  <span className="sr-only"> (opens in a new tab)</span>
                </TrackedLink>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="xl:grid xl:grid-cols-4 xl:gap-8">
          {/* Brand section */}
          <div className="space-y-4">
            <div className="font-serif text-xl font-semibold text-gray-900">
              Rittenhouse Residence
            </div>
            <p className="text-sm text-gray-600 max-w-xs">
              A Pine Street townhouse with a story documented since {PROPERTY_FACTS.documentedFromYear}.{" "}
              {PROPERTY_FACTS.bedrooms} bedrooms, original fireplaces, two
              blocks from Rittenhouse Square.
            </p>
            <Link
              href="/contact"
              className="inline-flex text-sm text-amber-700 hover:text-amber-800 underline underline-offset-4"
            >
              Ask about your dates
            </Link>
            <div className="flex space-x-4">
              <p className="text-xs text-gray-500">
                Philadelphia STR License #{PROPERTY_FACTS.licenseNumber} •
                Licensed Vacation Rental
              </p>
            </div>
          </div>

          {/* Navigation sections */}
          <div className="mt-12 grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-5 xl:col-span-3 xl:mt-0">
            {footerNavigation.map((section) => (
              <div key={section.title}>
                <h3 className="text-sm font-semibold text-gray-900">
                  {section.title}
                </h3>
                <ul role="list" className="mt-4 space-y-2">
                  {section.links.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className="text-sm text-gray-600 hover:text-gray-900"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom section */}
        <div className="mt-12 border-t border-gray-200 pt-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <p className="text-xs text-gray-500">
              &copy; {new Date().getFullYear()} Rittenhouse Residence. All rights
              reserved.
            </p>
            <p className="mt-2 text-xs text-gray-500 md:mt-0">
              1800 Block of Pine Street, Philadelphia, PA 19103 • Story documented since {PROPERTY_FACTS.documentedFromYear}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
