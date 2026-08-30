import assert from "node:assert/strict";
import test from "node:test";

import {
  consumeMemoryRateLimit,
  createFormToken,
  FORM_TOKEN_MAX_AGE_MS,
  isLikelySpam,
  privacySafeIdentifier,
  resetMemoryRateLimitsForTests,
  validateContactPayload,
  verifyFormToken,
} from "@/lib/contact-security";

const validQuote = {
  firstName: "  María  ",
  lastName: "O'Neil",
  email: "maria@example.com",
  inquiryType: "quote",
  arrival: "2099-05-10",
  departure: "2099-05-12",
  groupSize: "8",
  occasion: "family-reunion",
  message: "We are planning a family weekend.",
  website: "",
  formToken: "token",
};

test("validates and normalizes a quote request", () => {
  const result = validateContactPayload(validQuote, "2099-01-01");
  assert.equal(result.ok, true);
  if (!result.ok) return;
  assert.equal(result.data.firstName, "María");
  assert.equal(result.data.groupSize, "8");
});

test("rejects impossible dates, short stays, and out-of-range groups", () => {
  assert.equal(
    validateContactPayload({ ...validQuote, arrival: "2099-02-30" }, "2099-01-01")
      .ok,
    false
  );
  assert.equal(
    validateContactPayload({ ...validQuote, departure: "2099-05-11" }, "2099-01-01")
      .ok,
    false
  );
  assert.equal(
    validateContactPayload({ ...validQuote, groupSize: "17" }, "2099-01-01").ok,
    false
  );
});

test("rejects wrong field types and control characters", () => {
  assert.equal(validateContactPayload({ ...validQuote, firstName: 42 }).ok, false);
  assert.equal(
    validateContactPayload({ ...validQuote, lastName: "Guest\nBcc: victim@example.com" })
      .ok,
    false
  );
});

test("requires a message for non-quote inquiries", () => {
  const result = validateContactPayload({
    ...validQuote,
    inquiryType: "general",
    arrival: "",
    departure: "",
    groupSize: "",
    occasion: "",
    message: "",
  });
  assert.equal(result.ok, false);
});

test("detects known spam language and excessive links", () => {
  assert.equal(
    isLikelySpam({
      firstName: "Real",
      lastName: "Guest",
      email: "guest@example.com",
      message: "Our family is planning a reunion.",
    }),
    false
  );
  assert.equal(
    isLikelySpam({
      firstName: "Real",
      lastName: "Guest",
      email: "guest@example.com",
      message: "Limited time crypto investment opportunity",
    }),
    true
  );
  assert.equal(
    isLikelySpam({
      firstName: "Real",
      lastName: "Guest",
      email: "guest@example.com",
      message: "https://a.com https://b.com https://c.com https://d.com",
    }),
    true
  );
});

test("signed form tokens enforce integrity and expiry without delaying people", () => {
  const secret = "unit-test-secret";
  const issuedAt = 2_000_000_000_000;
  const token = createFormToken(
    secret,
    issuedAt,
    "123e4567-e89b-42d3-a456-426614174000"
  );

  assert.deepEqual(verifyFormToken(token, secret, issuedAt), {
    valid: true,
    inquiryId: "123e4567-e89b-42d3-a456-426614174000",
  });
  assert.deepEqual(
    verifyFormToken(token, secret, issuedAt + FORM_TOKEN_MAX_AGE_MS + 1),
    { valid: false, reason: "expired" }
  );
  assert.equal(verifyFormToken(`${token}x`, secret, issuedAt + 2_000).valid, false);
});

test("memory rate limiting blocks after the configured allowance", () => {
  resetMemoryRateLimitsForTests();
  const now = 2_000_000_000_000;
  assert.equal(consumeMemoryRateLimit("guest", 2, 60, now).allowed, true);
  assert.equal(consumeMemoryRateLimit("guest", 2, 60, now + 1).allowed, true);
  const blocked = consumeMemoryRateLimit("guest", 2, 60, now + 2);
  assert.equal(blocked.allowed, false);
  assert.equal(blocked.remaining, 0);
  assert.equal(consumeMemoryRateLimit("guest", 2, 60, now + 60_001).allowed, true);
});

test("rate-limit identifiers do not expose the raw fingerprint", () => {
  const identifier = privacySafeIdentifier("secret", "203.0.113.9|Browser");
  assert.match(identifier, /^[0-9a-f]{32}$/);
  assert.equal(identifier.includes("203.0.113.9"), false);
});
