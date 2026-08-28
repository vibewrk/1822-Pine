import Link from "next/link";
import TrackedLink from "@/components/TrackedLink";
import { Calendar, ExternalLink } from "lucide-react";
import { BOOKING_LINKS, PROPERTY_FACTS, REVIEW_FACTS } from "@/lib/facts";

const footerNavigation = [
  {
    title: "Property",
    links: [
      { name: "Stay", href: "/stay" },
      { name: "Floor Plans", href: "/stay/floor-plans" },
      { name: "Room Planner", href: "/stay/rooms" },
      { name: "Stairs & Access", href: "/stay/stairs-and-access" },
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
      { name: "Group Dining", href: "/neighborhood/group-dining" },
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
    title: "Visitors",
    links: [
      { name: "Guest Reviews", href: "/reviews" },
      { name: "Rittenhouse Square", href: "/rittenhouse-square" },
      { name: "Events Calendar", href: "/philadelphia-events" },
      { name: "Things to Do", href: "/rittenhouse-square/things-to-do" },
      { name: "Where to Stay", href: "/rittenhouse-square/where-to-stay" },
      { name: "Neighborhood", href: "/neighborhood" },
      { name: "FAQ", href: "/faq" },
      { name: "Contact", href: "/contact" },
      { name: "Book Now", href: "/book" },
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
      <div className="bg-gray-900 py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h3 className="font-serif text-2xl font-bold text-white">
              Book the Rittenhouse Residence
            </h3>
            <p className="mt-2 text-gray-300">
              {PROPERTY_FACTS.bedrooms} bedrooms ·{" "}
              {PROPERTY_FACTS.fullBathrooms} baths + powder room · Two blocks
              from Rittenhouse Square
            </p>
            <p className="mt-1 text-sm text-gray-400">
              {REVIEW_FACTS.airbnb.rating} on Airbnb across{" "}
              {REVIEW_FACTS.airbnb.count} reviews
            </p>

            <div className="mt-8">
              <TrackedLink
                event="direct_inquiry_click"
                eventParams={{ location: "footer_cta" }}
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-amber-600 px-10 py-4 text-lg font-semibold text-white shadow-md hover:bg-amber-700 hover:shadow-lg transition-all"
              >
                <Calendar className="h-5 w-5" />
                Request a Personal Quote
              </TrackedLink>
              <p className="mt-3 text-amber-400 text-sm">
                We reply within 24 hours — or see live pricing and secure
                checkout on{" "}
                <TrackedLink
                  event="ota_click"
                  eventParams={{ platform: "vrbo", location: "footer_cta" }}
                  href={BOOKING_LINKS.vrbo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline underline-offset-4 hover:text-amber-300"
                >
                  Vrbo
                </TrackedLink>
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-gray-700">
              <p className="text-gray-400 text-sm mb-4">
                The Rittenhouse Residence is also listed on:
              </p>
              <div className="flex flex-row gap-4 justify-center">
                <TrackedLink
                  href={BOOKING_LINKS.airbnb}
                  event="ota_click"
                  eventParams={{ platform: "airbnb", location: "footer_listings" }}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-gray-300 hover:text-white transition-colors text-sm"
                >
                  Airbnb
                  <ExternalLink className="h-3 w-3" />
                </TrackedLink>
                <span className="text-gray-600">·</span>
                <TrackedLink
                  href={BOOKING_LINKS.vrbo}
                  event="ota_click"
                  eventParams={{ platform: "vrbo", location: "footer_listings" }}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-gray-300 hover:text-white transition-colors text-sm"
                >
                  Vrbo
                  <ExternalLink className="h-3 w-3" />
                </TrackedLink>
                <span className="text-gray-600">·</span>
                <Link
                  href="/contact"
                  className="text-gray-300 hover:text-white transition-colors text-sm"
                >
                  Contact Us
                </Link>
              </div>
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
