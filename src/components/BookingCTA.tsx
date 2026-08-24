import Link from "next/link";
import { Bed, Bath, Calendar, ExternalLink, Mail, Star, Users } from "lucide-react";

const VRBO_URL = "https://www.vrbo.com/757481";
const AIRBNB_URL = "https://www.airbnb.com/rooms/6000930";

export function BookingCTA() {
  return (
    <section className="rounded-lg border border-stone-200 bg-stone-50 p-6 shadow-sm sm:p-8">
      <div className="mx-auto max-w-3xl text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-amber-700">
          Booking
        </p>
        <h2 className="mt-3 font-serif text-3xl font-semibold leading-tight text-stone-950 sm:text-4xl">
          Reserve The Rittenhouse Residence.
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-stone-600">
          Availability and current rates are shown on Vrbo. Direct booking is
          coming soon.
        </p>

        <div className="mt-7 flex flex-wrap justify-center gap-3 text-sm text-stone-700">
          <span className="inline-flex items-center gap-2">
            <Bed className="h-4 w-4 text-amber-700" />
            8BR
          </span>
          <span className="inline-flex items-center gap-2">
            <Bath className="h-4 w-4 text-amber-700" />
            6BA
          </span>
          <span className="inline-flex items-center gap-2">
            <Users className="h-4 w-4 text-amber-700" />
            Sleeps 21
          </span>
          <span className="inline-flex items-center gap-2">
            <Calendar className="h-4 w-4 text-amber-700" />
            From $1,600/night
          </span>
        </div>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
          <a
            href={VRBO_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-md bg-stone-950 px-6 py-3 text-base font-semibold text-white transition-colors hover:bg-stone-800"
          >
            Check Availability on Vrbo
            <ExternalLink className="h-4 w-4" />
          </a>
          <a
            href={AIRBNB_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-md border border-stone-300 bg-white px-6 py-3 text-base font-semibold text-stone-950 transition-colors hover:bg-stone-100"
          >
            View on Airbnb
            <Star className="h-4 w-4 text-amber-700" />
          </a>
        </div>

        <p className="mt-5 text-sm text-stone-600">
          Prefer to book directly?{" "}
          <Link
            href="/contact"
            className="inline-flex items-center gap-1 font-medium text-amber-800 underline underline-offset-4 hover:text-amber-900"
          >
            Email us
            <Mail className="h-3.5 w-3.5" />
          </Link>{" "}
          — direct booking is coming soon.
        </p>

        {/* Review data sourced from Airbnb listing; update periodically. */}
        <a
          href={AIRBNB_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-5 inline-flex items-center gap-2 text-sm text-stone-600 hover:text-stone-950"
        >
          <Star className="h-4 w-4 fill-amber-500 text-amber-500" />
          4.89 · 93 reviews on Airbnb
          <ExternalLink className="h-3.5 w-3.5" />
        </a>
      </div>
    </section>
  );
}
