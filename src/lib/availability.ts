// Public availability contract for the RentalAgent integration.
//
// This module is deliberately pure and network-free so the two rules that
// matter most can be unit-tested:
//
//   1. Never render a guess as fact. A visitor only sees "open" or "booked"
//      when RentalAgent returned a verdict it flagged as confirmable against
//      fresh, complete calendar evidence. Every other outcome — stale rows,
//      coverage gaps, review flags, upstream errors, an unconfigured
//      integration — collapses to "unconfirmed", which promises a human reply
//      rather than an availability claim.
//   2. No internal operational metadata leaks. RentalAgent's reply carries
//      reservation ids, provider names, source event ids and provenance
//      explanations. None of that crosses into the public response; the route
//      rebuilds a small allow-listed object instead of forwarding fields. The
//      requested range and its three-state result remain public pending the
//      owner policy recorded in docs/SITE-TRUTH.md.
//
// See docs/RENTALAGENT-INTEGRATION.md for the architecture and failure modes.

import { PROPERTY_FACTS } from "@/lib/facts";

/** The only availability vocabulary the browser ever receives. */
export type AvailabilityStatus = "open" | "booked" | "unconfirmed";

export type AvailabilityResponse = {
  status: AvailabilityStatus;
  checkIn: string;
  checkOut: string;
  nights: number;
};

export type AvailabilityRange = {
  checkIn: string;
  checkOut: string;
  nights: number;
};

export type AvailabilityValidation =
  | { ok: true; value: AvailabilityRange }
  | { ok: false; error: string };

// A public endpoint should not accept an unbounded date space. The ceilings
// are wide enough for any real enquiry and narrow enough that the range is
// not a useful scanning surface.
export const AVAILABILITY_MAX_NIGHTS = 30;
export const AVAILABILITY_MAX_LEAD_DAYS = 730;

const ISO_DATE = /^\d{4}-\d{2}-\d{2}$/;
const MS_PER_DAY = 86_400_000;

function isRealISODate(value: string): boolean {
  if (!ISO_DATE.test(value)) return false;
  const parsed = new Date(`${value}T00:00:00Z`);
  return (
    !Number.isNaN(parsed.valueOf()) && parsed.toISOString().slice(0, 10) === value
  );
}

function nightsBetween(checkIn: string, checkOut: string): number {
  return Math.round(
    (Date.parse(`${checkOut}T00:00:00Z`) - Date.parse(`${checkIn}T00:00:00Z`)) /
      MS_PER_DAY
  );
}

function addDaysISO(iso: string, days: number): string {
  return new Date(Date.parse(`${iso}T00:00:00Z`) + days * MS_PER_DAY)
    .toISOString()
    .slice(0, 10);
}

/**
 * Validate a requested stay before any credential is used. Guests in US time
 * zones are behind UTC, so yesterday-in-UTC is still a legitimate "tonight"
 * request; the past check allows exactly one day of slack, matching the
 * contact form.
 */
export function validateAvailabilityRange(
  checkIn: unknown,
  checkOut: unknown,
  todayUTC: string = new Date().toISOString().slice(0, 10)
): AvailabilityValidation {
  if (typeof checkIn !== "string" || typeof checkOut !== "string") {
    return { ok: false, error: "Please choose an arrival and a departure date." };
  }
  if (!isRealISODate(checkIn) || !isRealISODate(checkOut)) {
    return { ok: false, error: "Please choose an arrival and a departure date." };
  }
  if (checkIn < addDaysISO(todayUTC, -1)) {
    return { ok: false, error: "Please choose an arrival date in the future." };
  }
  if (checkIn > addDaysISO(todayUTC, AVAILABILITY_MAX_LEAD_DAYS)) {
    return {
      ok: false,
      error: "Those dates are too far ahead to check — please send us an enquiry.",
    };
  }

  const nights = nightsBetween(checkIn, checkOut);
  if (nights < PROPERTY_FACTS.minimumStayNights) {
    return {
      ok: false,
      error: `The house has a ${PROPERTY_FACTS.minimumStayNights}-night minimum.`,
    };
  }
  if (nights > AVAILABILITY_MAX_NIGHTS) {
    return {
      ok: false,
      error: `Stays longer than ${AVAILABILITY_MAX_NIGHTS} nights are arranged personally — please send us an enquiry.`,
    };
  }

  return { ok: true, value: { checkIn, checkOut, nights } };
}

function record(value: unknown): Record<string, unknown> | undefined {
  return value && typeof value === "object" && !Array.isArray(value)
    ? (value as Record<string, unknown>)
    : undefined;
}

/**
 * Collapse a `check_stay_availability` result into the public vocabulary.
 *
 * Every gate below must pass before a definite answer is produced. The
 * function is written as an allow-list rather than a deny-list on purpose: an
 * unrecognised, partial, or future RentalAgent payload has to degrade to
 * "unconfirmed" instead of being read optimistically.
 */
export function mapAvailabilityVerdict(raw: unknown): AvailabilityStatus {
  const result = record(raw);
  if (!result) return "unconfirmed";

  // RentalAgent fails closed when calendar rows are older than its own
  // freshness ceiling. Mirror that rather than second-guessing it.
  const freshness = record(record(result.calendarEvidence)?.freshness);
  if (freshness?.status !== "fresh") return "unconfirmed";

  // Any review flag means a human has to look. That is not a public answer.
  if (result.requiresReview !== false) return "unconfirmed";

  const nightSummary = record(result.requestedNightSummary);
  if (!nightSummary) return "unconfirmed";
  if (nightSummary.coverageGapNights !== 0) return "unconfirmed";
  if (nightSummary.outsideReportHorizonNights !== 0) return "unconfirmed";

  if (
    result.verdict === "available" &&
    result.available === true &&
    result.canConfirmAvailability === true &&
    nightSummary.unavailableNights === 0
  ) {
    return "open";
  }

  if (
    result.verdict === "unavailable" &&
    typeof nightSummary.unavailableNights === "number" &&
    nightSummary.unavailableNights > 0
  ) {
    return "booked";
  }

  return "unconfirmed";
}

/**
 * Read a tool result out of an MCP `tools/call` JSON-RPC envelope. Anything
 * unexpected — an error object, a missing content block, unparsable text —
 * returns undefined so the caller falls through to "unconfirmed".
 */
export function parseMcpToolResult(payload: unknown): unknown {
  const body = record(payload);
  if (!body || body.error) return undefined;

  const result = record(body.result);
  const content = result?.content;
  if (!Array.isArray(content)) return undefined;

  const first = record(content[0]);
  if (first?.type !== "text" || typeof first.text !== "string") return undefined;

  try {
    return JSON.parse(first.text) as unknown;
  } catch {
    return undefined;
  }
}
