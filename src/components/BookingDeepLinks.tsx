"use client";

import { useState, useSyncExternalStore } from "react";
import Link from "next/link";
import { ArrowRight, CalendarCheck, ExternalLink, Star } from "lucide-react";
import { AvailabilityCheck } from "@/components/AvailabilityCheck";
import { trackEvent } from "@/lib/analytics";
import { BOOKING_LINKS, PROPERTY_FACTS } from "@/lib/facts";
import { QUOTE_PREFILL_SESSION_KEY } from "@/lib/quote-prefill";

// Vrbo's date/guest URL parameters could not be verified, so Vrbo gets a
// plain listing link — its calendar is one click away once the page opens.

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
  const [guests, setGuests] = useState<number>(PROPERTY_FACTS.sleeps);
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
  // A range shorter than the house minimum is not a valid prefill.
  const datesValid = nights >= PROPERTY_FACTS.minimumStayNights;

  const airbnbHref = datesValid
    ? `${BOOKING_LINKS.airbnb}?check_in=${checkIn}&check_out=${checkOut}&adults=${guests}`
    : BOOKING_LINKS.airbnb;

  // Stay details travel to /contact through short-lived session storage, never
  // the URL, so they stay out of history, logs, referrers, and analytics.
  function carryDatesToQuoteForm() {
    try {
      if (datesValid) {
        window.sessionStorage.setItem(
          QUOTE_PREFILL_SESSION_KEY,
          JSON.stringify({
            arrival: checkIn,
            departure: checkOut,
            guests,
            createdAt: Date.now(),
          })
        );
      } else {
        window.sessionStorage.removeItem(QUOTE_PREFILL_SESSION_KEY);
      }
    } catch {
      // If storage is disabled, /contact still works without prefill.
    }
  }

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
            min={
              checkIn
                ? addDaysISO(checkIn, PROPERTY_FACTS.minimumStayNights)
                : today
            }
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
            {Array.from(
              { length: PROPERTY_FACTS.sleeps },
              (_, index) => index + 1
            ).map((n) => (
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
          : nights > 0 && nights < PROPERTY_FACTS.minimumStayNights
            ? `The house has a ${PROPERTY_FACTS.minimumStayNights}-night minimum — please extend your stay.`
            : datesValid
              ? `${nights} nights · Airbnb opens with your dates and group size prefilled.`
              : "Pick dates to open Airbnb with your stay prefilled, or jump straight to either calendar."}
      </p>

      <AvailabilityCheck
        checkIn={checkIn}
        checkOut={checkOut}
        location="book_deep_links"
        className="mt-4"
        action={
          <Link
            href="/contact"
            onClick={() => {
              carryDatesToQuoteForm();
              trackEvent("direct_inquiry_click", {
                location: "availability_check",
              });
            }}
            className="inline-flex items-center gap-1 text-sm font-semibold underline underline-offset-4"
          >
            Request a quote for these dates
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        }
      />

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
          href={BOOKING_LINKS.vrbo}
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
        Want a little help choosing?{" "}
        <Link
          href="/contact"
          onClick={() => {
            carryDatesToQuoteForm();
            trackEvent("direct_inquiry_click", { location: "deep_links" });
          }}
          className="inline-flex items-center gap-1 font-medium text-amber-800 underline underline-offset-4 hover:text-amber-900"
        >
          {datesValid
            ? "Ask about these dates"
            : "Ask about your dates"}
          <ArrowRight className="h-3.5 w-3.5" />
        </Link>{" "}
        — we will reply within 24 hours with availability, an itemized personal
        quote, and clear next steps.
      </p>
    </div>
  );
}
