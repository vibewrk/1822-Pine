import assert from "node:assert/strict";
import test from "node:test";

import {
  AVAILABILITY_MAX_NIGHTS,
  mapAvailabilityVerdict,
  parseMcpToolResult,
  validateAvailabilityRange,
} from "@/lib/availability";

const TODAY = "2026-09-01";

/** A confirmable "all nights open" reply, shaped like the real tool result. */
function openResult(overrides: Record<string, unknown> = {}) {
  return {
    verdict: "available",
    available: true,
    canConfirmAvailability: true,
    requiresReview: false,
    requestedNightSummary: {
      openNights: 3,
      unavailableNights: 0,
      coverageGapNights: 0,
      outsideReportHorizonNights: 0,
    },
    calendarEvidence: { freshness: { status: "fresh", ageHours: 0.4 } },
    ...overrides,
  };
}

function bookedResult(overrides: Record<string, unknown> = {}) {
  return {
    verdict: "unavailable",
    available: false,
    canConfirmAvailability: false,
    requiresReview: false,
    requestedNightSummary: {
      openNights: 1,
      unavailableNights: 2,
      coverageGapNights: 0,
      outsideReportHorizonNights: 0,
    },
    calendarEvidence: { freshness: { status: "fresh", ageHours: 0.4 } },
    ...overrides,
  };
}

test("accepts a well-formed future stay", () => {
  assert.deepEqual(
    validateAvailabilityRange("2026-10-02", "2026-10-05", TODAY),
    { ok: true, value: { checkIn: "2026-10-02", checkOut: "2026-10-05", nights: 3 } }
  );
});

test("rejects malformed, impossible, and out-of-range stays", () => {
  const cases: [unknown, unknown][] = [
    [undefined, "2026-10-05"],
    ["2026-10-02", null],
    ["not-a-date", "2026-10-05"],
    ["2026-02-30", "2026-10-05"], // calendar-invalid, passes the regex
    ["2026-10-05", "2026-10-02"], // departure before arrival
    ["2026-10-02", "2026-10-03"], // under the two-night minimum
    ["2020-01-01", "2020-01-05"], // in the past
    ["2030-01-01", "2030-01-05"], // beyond the lead-time ceiling
  ];
  for (const [checkIn, checkOut] of cases) {
    const result = validateAvailabilityRange(checkIn, checkOut, TODAY);
    assert.equal(result.ok, false, `expected rejection for ${String(checkIn)}`);
  }
});

test("allows one day of slack so a US-evening guest can still ask about tonight", () => {
  assert.equal(validateAvailabilityRange("2026-08-31", "2026-09-03", TODAY).ok, true);
  assert.equal(validateAvailabilityRange("2026-08-30", "2026-09-03", TODAY).ok, false);
});

test("caps the stay length it will check", () => {
  const withinCap = validateAvailabilityRange(
    "2026-10-01",
    `2026-10-${String(1 + AVAILABILITY_MAX_NIGHTS).padStart(2, "0")}`,
    TODAY
  );
  assert.equal(withinCap.ok, true);
  assert.equal(validateAvailabilityRange("2026-10-01", "2026-12-01", TODAY).ok, false);
});

test("reports open only for a fresh, review-free, fully covered available verdict", () => {
  assert.equal(mapAvailabilityVerdict(openResult()), "open");
});

test("reports booked for a fresh, review-free unavailable verdict", () => {
  assert.equal(mapAvailabilityVerdict(bookedResult()), "booked");
});

test("falls back to unconfirmed whenever the evidence is not trustworthy", () => {
  // Stale rows — the production failure mode today, caused by a calendar
  // source that has not resynced.
  assert.equal(
    mapAvailabilityVerdict(
      openResult({ calendarEvidence: { freshness: { status: "stale" } } })
    ),
    "unconfirmed"
  );
  // Freshness that RentalAgent could not establish at all.
  assert.equal(
    mapAvailabilityVerdict(
      openResult({ calendarEvidence: { freshness: { status: "unknown" } } })
    ),
    "unconfirmed"
  );
  // Missing evidence block entirely.
  assert.equal(
    mapAvailabilityVerdict(openResult({ calendarEvidence: undefined })),
    "unconfirmed"
  );
  // A review flag means a human has to look.
  assert.equal(
    mapAvailabilityVerdict(openResult({ requiresReview: true })),
    "unconfirmed"
  );
  assert.equal(
    mapAvailabilityVerdict(bookedResult({ requiresReview: true })),
    "unconfirmed"
  );
  // Nights the calendar does not cover, or that sit past the report horizon.
  assert.equal(
    mapAvailabilityVerdict(
      openResult({
        requestedNightSummary: {
          unavailableNights: 0,
          coverageGapNights: 2,
          outsideReportHorizonNights: 0,
        },
      })
    ),
    "unconfirmed"
  );
  assert.equal(
    mapAvailabilityVerdict(
      openResult({
        requestedNightSummary: {
          unavailableNights: 0,
          coverageGapNights: 0,
          outsideReportHorizonNights: 4,
        },
      })
    ),
    "unconfirmed"
  );
  // RentalAgent's own explicit "needs review" verdict.
  assert.equal(
    mapAvailabilityVerdict(openResult({ verdict: "needs_review" })),
    "unconfirmed"
  );
});

test("never reads an unrecognised or inconsistent payload optimistically", () => {
  for (const payload of [
    undefined,
    null,
    "available",
    42,
    [],
    {},
    { verdict: "available" },
    // Verdict and night counts disagree: refuse rather than pick one.
    openResult({ requestedNightSummary: { unavailableNights: 2, coverageGapNights: 0, outsideReportHorizonNights: 0 } }),
    // A future verdict word this build has never seen.
    openResult({ verdict: "provisional" }),
  ]) {
    assert.equal(mapAvailabilityVerdict(payload), "unconfirmed");
  }
});

test("unwraps an MCP tools/call envelope", () => {
  const envelope = {
    jsonrpc: "2.0",
    id: 1,
    result: {
      content: [{ type: "text", text: JSON.stringify({ verdict: "available" }) }],
    },
  };
  assert.deepEqual(parseMcpToolResult(envelope), { verdict: "available" });
});

test("returns nothing usable from a broken or error envelope", () => {
  for (const payload of [
    undefined,
    null,
    "nope",
    { jsonrpc: "2.0", id: 1, error: { code: -32001, message: "insufficient_scope" } },
    { jsonrpc: "2.0", id: 1, result: {} },
    { jsonrpc: "2.0", id: 1, result: { content: [] } },
    { jsonrpc: "2.0", id: 1, result: { content: [{ type: "image" }] } },
    { jsonrpc: "2.0", id: 1, result: { content: [{ type: "text", text: "{oops" }] } },
  ]) {
    assert.equal(parseMcpToolResult(payload), undefined);
  }
});

test("an error envelope can never become an availability claim", () => {
  const errorEnvelope = {
    jsonrpc: "2.0",
    id: 1,
    error: { code: -32001, message: "unauthorized" },
  };
  assert.equal(
    mapAvailabilityVerdict(parseMcpToolResult(errorEnvelope)),
    "unconfirmed"
  );
});
