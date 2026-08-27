"use client";

import { useState, useSyncExternalStore } from "react";
import Link from "next/link";
import { ArrowRight, CalendarCheck, ExternalLink, Star } from "lucide-react";
import { trackEvent } from "@/lib/analytics";

const AIRBNB_URL = "https://www.airbnb.com/rooms/6000930";
// Vrbo's date/guest URL parameters could not be verified, so Vrbo gets a
// plain listing link — its calendar is one click away once the page opens.
const VRBO_URL = "https://www.vrbo.com/757481";

const MS_PER_NIGHT = 86_400_000;

function toISODateLocal(d: Date): string {
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  return `${y}-${m}-${day}`;
}

function addDaysISO(iso: string, days: number): string {
  const [y, m, d] = iso.split("-").map(Number);
  const dt = new Date(y, m - 1, d + days);
  return toISODateLocal(dt);
}

// "Today" is external to React: the server snapshot is undefined so the
// statically-generated HTML never disagrees with the client about the date;
// the client snapshot is its local date, not UTC — an Eastern-time guest at
// 9 PM is still on today's date even though UTC has rolled over. The date
// string is compared by value, so re-reading the clock each render is stable.
const subscribeNever = () => () => {};
const getTodayLocal = (): string | undefined => toISODateLocal(new Date());
const getTodayServer = (): string | undefined => undefined;

export function BookingDeepLinks() {
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [guests, setGuests] = useState(16);
  const today = useSyncExternalStore(
    subscribeNever,
    getTodayLocal,
    getTodayServer
  );

  const nights =
    checkIn && checkOut
      ? Math.round(
          (new Date(checkOut).getTime() - new Date(checkIn).getTime()) /
            MS_PER_NIGHT
        )
      : 0;
  // The house has a 2-night minimum; a 1-night range is not a valid prefill.
  const datesValid = nights >= 2;

  const airbnbHref = datesValid
    ? `${AIRBNB_URL}?check_in=${checkIn}&check_out=${checkOut}&adults=${guests}`
    : AIRBNB_URL;

  return (
    <div className="rounded-lg border border-stone-200 bg-white p-6 shadow-sm sm:p-8">
      <div className="grid gap-4 sm:grid-cols-3">
        <div>
          <label
            htmlFor="deep-link-check-in"
            className="block text-xs font-semibold uppercase tracking-[0.18em] text-stone-500"
          >
            Check-in
          </label>
          <input
            id="deep-link-check-in"
            type="date"
            min={today}
            value={checkIn}
            onChange={(event) => setCheckIn(event.target.value)}
            className="mt-2 w-full rounded-md border border-stone-300 bg-white px-3 py-2.5 text-sm text-stone-950 focus:border-amber-800 focus:outline-none"
          />
        </div>
        <div>
          <label
            htmlFor="deep-link-check-out"
            className="block text-xs font-semibold uppercase tracking-[0.18em] text-stone-500"
          >
            Check-out
          </label>
          <input
            id="deep-link-check-out"
            type="date"
            min={checkIn ? addDaysISO(checkIn, 2) : today}
            value={checkOut}
            onChange={(event) => setCheckOut(event.target.value)}
            className="mt-2 w-full rounded-md border border-stone-300 bg-white px-3 py-2.5 text-sm text-stone-950 focus:border-amber-800 focus:outline-none"
          />
        </div>
        <div>
          <label
            htmlFor="deep-link-guests"
            className="block text-xs font-semibold uppercase tracking-[0.18em] text-stone-500"
          >
            Guests
          </label>
          <select
            id="deep-link-guests"
            value={guests}
            onChange={(event) => setGuests(Number(event.target.value))}
            className="mt-2 w-full rounded-md border border-stone-300 bg-white px-3 py-2.5 text-sm text-stone-950 focus:border-amber-800 focus:outline-none"
          >
            {Array.from({ length: 16 }, (_, index) => index + 1).map((n) => (
              <option key={n} value={n}>
                {n} {n === 1 ? "guest" : "guests"}
              </option>
            ))}
          </select>
        </div>
      </div>

      <p className="mt-3 text-sm text-stone-600" aria-live="polite">
        {checkIn && checkOut && nights <= 0
          ? "Check-out must be after check-in."
          : nights === 1
            ? "The house has a 2-night minimum — add at least one more night."
            : datesValid
              ? `${nights} nights · Airbnb opens with your dates and group size prefilled.`
              : "Pick dates to open Airbnb with your stay prefilled, or jump straight to either calendar."}
      </p>

      <div className="mt-6 flex flex-col gap-3 sm:flex-row">
        <a
          href={airbnbHref}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() =>
            trackEvent("ota_click", {
              platform: "airbnb",
              location: "deep_links",
              prefilled: datesValid,
            })
          }
          className="inline-flex flex-1 items-center justify-center gap-2 rounded-md border border-stone-300 bg-white px-6 py-3 text-base font-semibold text-stone-950 transition-colors hover:bg-stone-100"
        >
          <Star className="h-4 w-4 text-amber-700" />
          {datesValid ? "Open Airbnb With These Dates" : "Open Airbnb"}
          <ExternalLink className="h-4 w-4" />
        </a>
        <a
          href={VRBO_URL}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() =>
            trackEvent("ota_click", {
              platform: "vrbo",
              location: "deep_links",
              prefilled: false,
            })
          }
          className="inline-flex flex-1 items-center justify-center gap-2 rounded-md border border-stone-300 bg-white px-6 py-3 text-base font-semibold text-stone-950 transition-colors hover:bg-stone-100"
        >
          <CalendarCheck className="h-4 w-4 text-amber-700" />
          Open the Vrbo Calendar
          <ExternalLink className="h-4 w-4" />
        </a>
      </div>

      <p className="mt-5 text-sm leading-6 text-stone-600">
        Prefer a person?{" "}
        <Link
          href={
            datesValid
              ? `/contact?arrival=${checkIn}&departure=${checkOut}&guests=${guests}`
              : "/contact"
          }
          onClick={() =>
            trackEvent("direct_inquiry_click", { location: "deep_links" })
          }
          className="inline-flex items-center gap-1 font-medium text-amber-800 underline underline-offset-4 hover:text-amber-900"
        >
          {datesValid
            ? "Request a direct quote for these dates"
            : "Request a direct quote"}
          <ArrowRight className="h-3.5 w-3.5" />
        </Link>{" "}
        — same house and dates, no platform service fee.
      </p>
    </div>
  );
}
