import assert from "node:assert/strict";
import test from "node:test";

import { NextRequest } from "next/server";

import { POST } from "@/app/api/contact/route";
import {
  createFormToken,
  resetMemoryRateLimitsForTests,
} from "@/lib/contact-security";

const secret = "route-test-secret";

function requestFor(
  body: Record<string, unknown>,
  fingerprint: string,
  userAgent = fingerprint
): NextRequest {
  return new NextRequest("http://localhost:3000/api/contact", {
    method: "POST",
    headers: {
      "content-type": "application/json",
      origin: "http://localhost:3000",
      "sec-fetch-site": "same-origin",
      "user-agent": `route-test-${userAgent}`,
      "x-forwarded-for": `203.0.113.${fingerprint}`,
    },
    body: JSON.stringify(body),
  });
}

function token(): string {
  return createFormToken(secret);
}

function quotePayload(overrides: Record<string, unknown> = {}) {
  return {
    firstName: "Taylor",
    lastName: "Guest",
    email: "taylor@example.com",
    inquiryType: "quote",
    arrival: "2099-06-01",
    departure: "2099-06-03",
    groupSize: "8",
    occasion: "family-reunion",
    message: "We are planning a family weekend.",
    website: "",
    formToken: token(),
    ...overrides,
  };
}

function configureDelivery() {
  process.env.CONTACT_FORM_SECRET = secret;
  process.env.RESEND_API_KEY = "re_test";
  process.env.CONTACT_TO_EMAIL = "owner@example.com";
  process.env.CONTACT_FROM_EMAIL = "Residence <stay@example.com>";
  delete process.env.UPSTASH_REDIS_REST_URL;
  delete process.env.UPSTASH_REDIS_REST_TOKEN;
  delete process.env.KV_REST_API_URL;
  delete process.env.KV_REST_API_TOKEN;
}

test("a provider-accepted quote returns one stable lead identity", async (t) => {
  configureDelivery();
  let resendRequest: RequestInit | undefined;
  const fetchMock = t.mock.method(
    globalThis,
    "fetch",
    async (_input: string | URL | Request, init?: RequestInit) => {
      resendRequest = init;
      return Response.json({ id: "provider-message-id" });
    }
  );

  const response = await POST(requestFor(quotePayload(), "11"));
  const body = (await response.json()) as Record<string, unknown>;

  assert.equal(response.status, 200);
  assert.equal(body.accepted, true);
  assert.equal(body.delivery, "queued");
  assert.equal(typeof body.inquiryId, "string");
  assert.deepEqual(body.lead, {
    event: "generate_lead",
    inquiryId: body.inquiryId,
  });
  assert.equal(fetchMock.mock.callCount(), 1);
  assert.match(
    new Headers(resendRequest?.headers).get("Idempotency-Key") || "",
    new RegExp(`^contact-inquiry/${body.inquiryId}/[0-9a-f]{24}$`)
  );
});

test("an accepted general question is diagnostic but not a lead", async (t) => {
  configureDelivery();
  t.mock.method(globalThis, "fetch", async () =>
    Response.json({ id: "provider-message-id" })
  );
  const payload = quotePayload({
    inquiryType: "general",
    arrival: "",
    departure: "",
    groupSize: "",
    occasion: "",
  });

  const response = await POST(requestFor(payload, "12"));
  const body = (await response.json()) as Record<string, unknown>;
  assert.equal(response.status, 200);
  assert.equal(body.accepted, true);
  assert.equal("lead" in body, false);
});

test("honeypot submissions neither send nor expose lead data", async (t) => {
  configureDelivery();
  const fetchMock = t.mock.method(globalThis, "fetch", async () =>
    Response.json({ id: "should-not-send" })
  );

  const response = await POST(
    requestFor(quotePayload({ website: "https://spam.example" }), "13")
  );
  const body = (await response.json()) as Record<string, unknown>;
  assert.equal(response.status, 200);
  assert.equal(body.accepted, false);
  assert.equal("lead" in body, false);
  assert.equal(fetchMock.mock.callCount(), 0);
});

test("provider failure or an unconfirmed provider response never becomes a lead", async (t) => {
  configureDelivery();
  t.mock.method(globalThis, "fetch", async () => Response.json({ unexpected: true }));

  const response = await POST(requestFor(quotePayload(), "14"));
  const body = (await response.json()) as Record<string, unknown>;
  assert.equal(response.status, 502);
  assert.equal("lead" in body, false);
  assert.equal(body.accepted, undefined);
});

test("a tampered signed submission is rejected before delivery", async (t) => {
  configureDelivery();
  const fetchMock = t.mock.method(globalThis, "fetch", async () =>
    Response.json({ id: "should-not-send" })
  );

  const response = await POST(
    requestFor(quotePayload({ formToken: `${createFormToken(secret)}tampered` }), "15")
  );
  const body = (await response.json()) as Record<string, unknown>;
  assert.equal(response.status, 400);
  assert.equal(body.code, "FORM_INVALID");
  assert.equal(fetchMock.mock.callCount(), 0);
});

test("exact retries reuse a provider key while edited retries get a new key", async (t) => {
  configureDelivery();
  const formToken = token();
  const keys: string[] = [];
  t.mock.method(
    globalThis,
    "fetch",
    async (_input: string | URL | Request, init?: RequestInit) => {
      keys.push(new Headers(init?.headers).get("Idempotency-Key") || "");
      return Response.json({ id: "provider-message-id" });
    }
  );

  const base = quotePayload({ formToken });
  await POST(requestFor(base, "16"));
  await POST(requestFor(base, "16"));
  await POST(
    requestFor(
      { ...base, message: "We corrected one detail after the first attempt." },
      "16"
    )
  );

  assert.equal(keys.length, 3);
  assert.equal(keys[0], keys[1]);
  assert.notEqual(keys[1], keys[2]);
});

test("rotating User-Agent values cannot bypass the per-IP submission ceiling", async (t) => {
  configureDelivery();
  resetMemoryRateLimitsForTests();
  const fetchMock = t.mock.method(globalThis, "fetch", async () =>
    Response.json({ id: "provider-message-id" })
  );
  const payload = quotePayload();

  for (let index = 0; index < 10; index += 1) {
    const response = await POST(
      requestFor(payload, "17", `rotated-browser-${index}`)
    );
    assert.equal(response.status, 200);
  }

  const blocked = await POST(
    requestFor(payload, "17", "rotated-browser-after-limit")
  );
  assert.equal(blocked.status, 429);
  assert.equal(fetchMock.mock.callCount(), 10);
});
