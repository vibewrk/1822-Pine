import assert from "node:assert/strict";
import test, { afterEach, beforeEach } from "node:test";

import { NextRequest } from "next/server";

import { GET } from "@/app/api/availability/route";
import { resetMemoryRateLimitsForTests } from "@/lib/contact-security";

const realFetch = globalThis.fetch;

function futureDate(daysFromNow: number): string {
  return new Date(Date.now() + daysFromNow * 86_400_000).toISOString().slice(0, 10);
}

function requestFor(
  params: Record<string, string>,
  fingerprint = "1"
): NextRequest {
  const url = new URL("http://localhost:3000/api/availability");
  for (const [key, value] of Object.entries(params)) {
    url.searchParams.set(key, value);
  }
  return new NextRequest(url, {
    headers: { "x-forwarded-for": `203.0.113.${fingerprint}` },
  });
}

/** Stand in for RentalAgent, returning `toolResult` in an MCP envelope. */
function stubRentalAgent(toolResult: unknown, init: { status?: number } = {}) {
  globalThis.fetch = (async () =>
    new Response(
      JSON.stringify({
        jsonrpc: "2.0",
        id: 1,
        result: { content: [{ type: "text", text: JSON.stringify(toolResult) }] },
      }),
      { status: init.status ?? 200, headers: { "content-type": "application/json" } }
    )) as typeof globalThis.fetch;
}

function freshOpenResult() {
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
    calendarEvidence: { freshness: { status: "fresh" } },
    // Operational detail the real tool returns. None of it may reach a visitor.
    propertyId: "33161cb5-ea60-4ead-bff6-492b98aee9db",
    blockers: [
      {
        kind: "canonical_reservation",
        canonicalReservationIds: ["res_secret"],
        providers: ["airbnb-official"],
        externalListingIds: ["6000930"],
        explanation: "internal provenance detail",
      },
    ],
    reviewIssueCodes: ["provider_reservation_unmatched"],
  };
}

beforeEach(() => {
  resetMemoryRateLimitsForTests();
  process.env.RENTALAGENT_BASE_URL = "https://rentalagent.example";
  process.env.RENTALAGENT_ACCESS_TOKEN = "test-token";
});

afterEach(() => {
  globalThis.fetch = realFetch;
  delete process.env.RENTALAGENT_BASE_URL;
  delete process.env.RENTALAGENT_ACCESS_TOKEN;
});

test("rejects an invalid range before contacting RentalAgent", async () => {
  let called = false;
  globalThis.fetch = (async () => {
    called = true;
    return new Response("{}");
  }) as typeof globalThis.fetch;

  const response = await GET(requestFor({ checkIn: "nope", checkOut: "also-nope" }));
  assert.equal(response.status, 400);
  assert.equal(called, false, "no credential should be spent on an invalid range");
  assert.equal(response.headers.get("Cache-Control"), "no-store");
});

test("returns open and leaks nothing operational", async () => {
  stubRentalAgent(freshOpenResult());

  const response = await GET(
    requestFor({ checkIn: futureDate(30), checkOut: futureDate(33) })
  );
  assert.equal(response.status, 200);

  const body = await response.json();
  assert.deepEqual(Object.keys(body).sort(), [
    "checkIn",
    "checkOut",
    "nights",
    "status",
  ]);
  assert.equal(body.status, "open");
  assert.equal(body.nights, 3);

  const serialized = JSON.stringify(body);
  for (const secret of [
    "res_secret",
    "33161cb5",
    "airbnb-official",
    "6000930",
    "provenance",
    "provider_reservation_unmatched",
  ]) {
    assert.ok(
      !serialized.includes(secret),
      `public response must not contain ${secret}`
    );
  }
});

test("caches a confident answer briefly and never caches an unconfirmed one", async () => {
  stubRentalAgent(freshOpenResult());
  const confident = await GET(
    requestFor({ checkIn: futureDate(40), checkOut: futureDate(43) })
  );
  assert.match(confident.headers.get("Cache-Control") ?? "", /s-maxage=120/);

  stubRentalAgent({
    ...freshOpenResult(),
    calendarEvidence: { freshness: { status: "stale" } },
  });
  const unsure = await GET(
    requestFor({ checkIn: futureDate(50), checkOut: futureDate(53) }, "2")
  );
  assert.equal((await unsure.json()).status, "unconfirmed");
  assert.equal(unsure.headers.get("Cache-Control"), "no-store");
});

test("answers unconfirmed when RentalAgent is unreachable, erroring, or unconfigured", async () => {
  globalThis.fetch = (async () => {
    throw new Error("network down");
  }) as typeof globalThis.fetch;
  const down = await GET(
    requestFor({ checkIn: futureDate(60), checkOut: futureDate(63) }, "3")
  );
  assert.equal(down.status, 200);
  assert.equal((await down.json()).status, "unconfirmed");

  globalThis.fetch = (async () =>
    new Response("unauthorized", { status: 401 })) as typeof globalThis.fetch;
  const denied = await GET(
    requestFor({ checkIn: futureDate(61), checkOut: futureDate(64) }, "4")
  );
  assert.equal((await denied.json()).status, "unconfirmed");

  delete process.env.RENTALAGENT_ACCESS_TOKEN;
  let called = false;
  globalThis.fetch = (async () => {
    called = true;
    return new Response("{}");
  }) as typeof globalThis.fetch;
  const unconfigured = await GET(
    requestFor({ checkIn: futureDate(62), checkOut: futureDate(65) }, "5")
  );
  assert.equal((await unconfigured.json()).status, "unconfirmed");
  assert.equal(called, false, "an unconfigured integration must not call out");
});

test("calls only the read-only availability tool, with the visitor's dates", async () => {
  let captured: { url: string; body: unknown } | undefined;
  globalThis.fetch = (async (input: RequestInfo | URL, init?: RequestInit) => {
    captured = {
      url: String(input),
      body: JSON.parse(String(init?.body ?? "{}")),
    };
    return new Response(
      JSON.stringify({
        jsonrpc: "2.0",
        id: 1,
        result: {
          content: [{ type: "text", text: JSON.stringify(freshOpenResult()) }],
        },
      })
    );
  }) as typeof globalThis.fetch;

  const checkIn = futureDate(70);
  const checkOut = futureDate(73);
  await GET(requestFor({ checkIn, checkOut }, "6"));

  assert.equal(captured?.url, "https://rentalagent.example/api/mcp");
  assert.deepEqual(captured?.body, {
    jsonrpc: "2.0",
    id: 1,
    method: "tools/call",
    params: {
      name: "check_stay_availability",
      arguments: { checkIn, checkOut, purpose: "guest_stay" },
    },
  });
});

test("rate limits a connection that checks too many ranges", async () => {
  stubRentalAgent(freshOpenResult());

  let lastStatus = 200;
  for (let i = 0; i < 45; i += 1) {
    const response = await GET(
      requestFor({ checkIn: futureDate(90), checkOut: futureDate(93) }, "7")
    );
    lastStatus = response.status;
    if (lastStatus === 429) {
      assert.ok(response.headers.get("Retry-After"));
      break;
    }
  }
  assert.equal(lastStatus, 429);
});
