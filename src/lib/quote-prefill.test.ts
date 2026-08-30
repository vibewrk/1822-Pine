import assert from "node:assert/strict";
import test from "node:test";

import {
  parseQuotePrefill,
  QUOTE_PREFILL_MAX_AGE_MS,
} from "@/lib/quote-prefill";

test("accepts a fresh, valid private booking prefill", () => {
  const now = 2_000_000_000_000;
  assert.deepEqual(
    parseQuotePrefill(
      JSON.stringify({
        arrival: "2099-06-01",
        departure: "2099-06-03",
        guests: 12,
        createdAt: now - 1_000,
      }),
      now
    ),
    {
      arrival: "2099-06-01",
      departure: "2099-06-03",
      guests: 12,
      createdAt: now - 1_000,
    }
  );
});

test("rejects stale, malformed, and oversized booking prefills", () => {
  const now = 2_000_000_000_000;
  assert.equal(parseQuotePrefill("not-json", now), null);
  assert.equal(
    parseQuotePrefill(
      JSON.stringify({
        arrival: "2099-06-01",
        departure: "2099-06-03",
        guests: 17,
        createdAt: now,
      }),
      now
    ),
    null
  );
  assert.equal(
    parseQuotePrefill(
      JSON.stringify({
        arrival: "2099-06-01",
        departure: "2099-06-03",
        guests: 8,
        createdAt: now - QUOTE_PREFILL_MAX_AGE_MS - 1,
      }),
      now
    ),
    null
  );
});
