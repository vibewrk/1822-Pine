import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Mail, Shield, Clock, Users } from "lucide-react";
import { BookingCTA } from "@/components/BookingCTA";

export const metadata: Metadata = {
  title: "Check Availability & Book",
  description:
    "Check live availability for The Rittenhouse Residence — the whole 8-bedroom, 6-bath mansion two blocks from Rittenhouse Square. From $1,600/night, sleeps 21.",
  alternates: { canonical: "/book" },
  openGraph: {
    title: "Book The Rittenhouse Residence",
    description:
      "The whole 8-bedroom mansion, two blocks from Rittenhouse Square. From $1,600/night.",
    images: ["/images/airbnb/airbnb_03.jpg"],
  },
};

const highlights = [
  { icon: Users, text: "8 bedrooms" },
  { icon: Clock, text: "2-night minimum" },
  { icon: Shield, text: "Vrbo availability" },
];

export default function BookPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative py-16 bg-gray-900">
        <div className="absolute inset-0">
          <Image
            src="/images/property/DSC00082.jpg"
            alt="Rittenhouse Residence Master Suite"
            fill
            sizes="100vw"
            className="object-cover opacity-20"
          />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-sm font-medium text-amber-400 mb-4">
              From $1,600/night
            </p>
            <h1 className="font-serif text-4xl sm:text-5xl font-bold text-white">
              Book the Rittenhouse Residence
            </h1>
            <p className="mt-4 text-xl text-gray-300 max-w-2xl mx-auto">
              Reserve the entire historic mansion for your group stay in Philadelphia
            </p>

            {/* Quick highlights */}
            <div className="mt-8 flex flex-wrap justify-center gap-6">
              {highlights.map((item) => (
                <div key={item.text} className="flex items-center gap-2 text-gray-300">
                  <item.icon className="h-5 w-5 text-amber-400" />
                  <span>{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Booking CTA Section */}
      <section className="py-12 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <BookingCTA />
        </div>
      </section>

      {/* What's Included */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-2xl font-bold text-gray-900 text-center mb-12">
            What’s Included
          </h2>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="font-semibold text-gray-900">Full Property Access</h3>
              <p className="mt-2 text-sm text-gray-600">
                All 5 floors, 8 bedrooms, 6 bathrooms, grand parlors, and roof deck
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="font-semibold text-gray-900">Professional Amenities</h3>
              <p className="mt-2 text-sm text-gray-600">
                Gigabit WiFi, Smart TVs, full kitchen, washer/dryer, central A/C
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="font-semibold text-gray-900">Flexible Sleeping</h3>
              <p className="mt-2 text-sm text-gray-600">
                8 bedrooms — two kings and six queens — arranged across three floors
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="font-semibold text-gray-900">Historic Experience</h3>
              <p className="mt-2 text-sm text-gray-600">
                Original fireplaces and millwork, plus a documented history reaching back to 1854
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="font-semibold text-gray-900">Rittenhouse Location</h3>
              <p className="mt-2 text-sm text-gray-600">
                Two blocks from Rittenhouse Square, walkable to restaurants and attractions
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="font-semibold text-gray-900">Dedicated Support</h3>
              <p className="mt-2 text-sm text-gray-600">
                Responsive host support before and throughout your stay
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact for Special Requests */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="bg-gray-900 rounded-2xl p-8 sm:p-12">
            <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-center">
              <div>
                <h2 className="font-serif text-2xl font-bold text-white">
                  Prefer to Book Direct?
                </h2>
                <p className="mt-4 text-gray-300">
                  Send your dates and group size. We confirm availability and hold
                  dates within 24 hours, and direct bookings skip the platform
                  service fees. Three steps: inquire, confirm, reserve with a 50%
                  deposit.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-md bg-white px-6 py-3 text-base font-semibold text-gray-900 hover:bg-gray-100 transition-colors"
                >
                  <Mail className="mr-2 h-5 w-5" />
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Booking Policies */}
      <section className="py-16 bg-gray-50 border-t border-gray-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-2xl font-bold text-gray-900 text-center mb-12">
            Booking Policies
          </h2>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="bg-white rounded-xl p-6 shadow-sm text-center">
              <h3 className="font-semibold text-gray-900">Check-in</h3>
              <p className="mt-2 text-2xl font-bold text-amber-700">4:00 PM</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm text-center">
              <h3 className="font-semibold text-gray-900">Check-out</h3>
              <p className="mt-2 text-2xl font-bold text-amber-700">10:00 AM</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm text-center">
              <h3 className="font-semibold text-gray-900">Minimum Stay</h3>
              <p className="mt-2 text-2xl font-bold text-amber-700">2 Nights</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm text-center">
              <h3 className="font-semibold text-gray-900">ID Required</h3>
              <p className="mt-2 text-sm text-gray-600">Valid government ID required at check-in</p>
            </div>
          </div>

          <div className="mt-12 bg-white rounded-xl p-8 shadow-sm">
            <h3 className="font-semibold text-gray-900 text-lg mb-4">Payment & Cancellation</h3>
            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <h4 className="font-medium text-gray-900">Deposit</h4>
                <p className="mt-1 text-gray-600">
                  A 50% deposit is required at the time of reservation to secure your booking.
                </p>
              </div>
              <div>
                <h4 className="font-medium text-gray-900">Balance</h4>
                <p className="mt-1 text-gray-600">
                  The remaining balance is due 60 days before your arrival date.
                </p>
              </div>
              <div className="md:col-span-2">
                <h4 className="font-medium text-gray-900">Cancellation Policy</h4>
                <p className="mt-1 text-gray-600">
                  Cancellations require 60 days notice for a full refund of your deposit.
                  Cancellations within 60 days of arrival are non-refundable.
                  See our <Link href="/faq#cancellation" className="text-amber-700 hover:text-amber-800">FAQ</Link> for complete details.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
