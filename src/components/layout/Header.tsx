"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import TrackedLink from "@/components/TrackedLink";

const navigation = [
  { name: "Stay", href: "/stay" },
  { name: "Rates", href: "/rates" },
  {
    name: "Groups",
    href: "/groups",
    submenu: [
      { name: "Group Stays", href: "/groups" },
      { name: "Wedding Guest Housing", href: "/groups/weddings" },
      { name: "Hotel Alternative", href: "/hotel-alternative" },
      { name: "Group Dining", href: "/neighborhood/group-dining" },
      { name: "Room Planner", href: "/stay/rooms" },
      { name: "Stairs & Access", href: "/stay/stairs-and-access" },
    ],
  },
  {
    name: "History",
    href: "/history",
    submenu: [
      { name: "Overview", href: "/history" },
      { name: "The Story", href: "/history/story", highlight: true },
      { name: "Timeline", href: "/history/timeline" },
      { name: "Documents", href: "/history/documents" },
      { name: "Provenance", href: "/history/provenance" },
    ],
  },
  { name: "Gallery", href: "/gallery" },
  { name: "Reviews", href: "/reviews" },
  {
    name: "Neighborhood",
    href: "/neighborhood",
    submenu: [
      { name: "Neighborhood Guide", href: "/neighborhood" },
      { name: "Rittenhouse Square", href: "/rittenhouse-square" },
      { name: "Events Calendar", href: "/philadelphia-events", highlight: true },
      { name: "Things to Do", href: "/rittenhouse-square/things-to-do" },
      { name: "Restaurants", href: "/rittenhouse-square/restaurants" },
      { name: "Square History", href: "/rittenhouse-square/history" },
      { name: "Public Art", href: "/rittenhouse-square/public-art" },
      { name: "Where to Stay", href: "/rittenhouse-square/where-to-stay" },
    ],
  },
  { name: "Contact", href: "/contact" },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80 border-b border-gray-100">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" aria-label="Top">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center gap-3">
              <Image
                src="/images/brand/logo.jpg"
                alt="Rittenhouse Residence"
                width={180}
                height={48}
                className="h-10 w-auto"
                priority
              />
              <span className="hidden sm:block font-serif text-lg font-semibold text-gray-900 tracking-tight">
                Rittenhouse Residence
              </span>
            </Link>
          </div>

          {/* Desktop navigation */}
          <div className="hidden md:flex md:items-center md:space-x-6 lg:space-x-8">
            {navigation.map((item) =>
              item.submenu ? (
                <div
                  key={item.name}
                  className="relative"
                  onMouseEnter={() => setOpenDropdown(item.name)}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  <button
                    className="flex items-center gap-1 text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors"
                    onClick={() =>
                      setOpenDropdown(openDropdown === item.name ? null : item.name)
                    }
                  >
                    {item.name}
                    <ChevronDown
                      className={cn(
                        "h-4 w-4 transition-transform",
                        openDropdown === item.name && "rotate-180"
                      )}
                    />
                  </button>
                  {openDropdown === item.name && (
                    <div className="absolute left-0 top-full pt-2 w-56">
                      <div className="bg-white rounded-lg shadow-lg border border-gray-100 py-2">
                        {item.submenu.map((subitem) => (
                          <Link
                            key={subitem.name}
                            href={subitem.href}
                            className={cn(
                              "block px-4 py-2 text-sm transition-colors",
                              subitem.highlight
                                ? "text-amber-700 font-semibold hover:bg-amber-50"
                                : "text-gray-700 hover:bg-gray-50 hover:text-gray-900"
                            )}
                          >
                            {subitem.name}
                            {subitem.highlight && (
                              <span className="ml-2 text-xs bg-amber-100 text-amber-700 px-1.5 py-0.5 rounded">
                                New
                              </span>
                            )}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors"
                >
                  {item.name}
                </Link>
              )
            )}
            <TrackedLink
              href="/book"
              event="book_cta_click"
              eventParams={{ location: "header" }}
              className="inline-flex items-center justify-center rounded-md bg-amber-600 px-5 py-2.5 text-sm font-semibold text-white shadow-md hover:bg-amber-700 hover:shadow-lg transition-all"
            >
              Book Now
            </TrackedLink>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-md p-2 text-gray-700 hover:text-gray-900"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <span className="sr-only">Open main menu</span>
              {mobileMenuOpen ? (
                <X className="h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <div
          className={cn(
            "md:hidden",
            mobileMenuOpen ? "block" : "hidden"
          )}
        >
          <div className="space-y-1 pb-4 pt-2">
            {navigation.map((item) =>
              item.submenu ? (
                <div key={item.name}>
                  <Link
                    href={item.href}
                    className="block py-2 text-base font-medium text-gray-700 hover:text-gray-900"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                  <div className="pl-4 space-y-1 border-l-2 border-gray-100 ml-2">
                    {item.submenu.map((subitem) => (
                      <Link
                        key={subitem.name}
                        href={subitem.href}
                        className={cn(
                          "block py-1.5 text-sm",
                          subitem.highlight
                            ? "text-amber-700 font-medium"
                            : "text-gray-600 hover:text-gray-900"
                        )}
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {subitem.name}
                        {subitem.highlight && (
                          <span className="ml-2 text-xs bg-amber-100 text-amber-700 px-1.5 py-0.5 rounded">
                            New
                          </span>
                        )}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block py-2 text-base font-medium text-gray-700 hover:text-gray-900"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              )
            )}
            {/* TrackedLink renders a plain anchor, so navigation fully reloads the
                page and the open-menu state resets on its own. */}
            <TrackedLink
              href="/book"
              event="book_cta_click"
              eventParams={{ location: "header" }}
              className="mt-4 block w-full rounded-md bg-amber-600 px-4 py-3 text-center text-sm font-semibold text-white shadow-md hover:bg-amber-700"
            >
              Book Now
            </TrackedLink>
          </div>
        </div>
      </nav>
    </header>
  );
}
