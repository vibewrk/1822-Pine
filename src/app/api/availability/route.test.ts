import assert from "node:assert/strict";
import test, { afterEach } from "node:test";

import { NextRequest } from "next/server";

import { GET } from "@/app/api/availability/route";

const realFetch = globalThis.fetch;

afterEach(() => {
  globalThis.fetch = realFetch;
});

function futureDate(daysFromNow: number): string {
  return new Date(Date.now() + daysFromNow * 86_400_000)
    .toISOString()
    .slice(0, 10);
}

function requestFor(startOffset: number): NextRequest {
  const url = new URL("http://localhost:3000/api/availability");
  url.searchParams.set("checkIn", futureDate(startOffset));
  url.searchParams.set("checkOut", futureDate(startOffset + 3));
  return new NextRequest(url);
}

test("returns one inquiry-only response without contacting RentalAgent", async () => {
  let called = false;
  globalThis.fetch = (async () => {
    called = true;
    throw new Error("the public compatibility route must not call upstream");
  }) as typeof globalThis.fetch;

  const response = await GET(requestFor(60));
  assert.equal(response.status, 200);
  assert.equal(called, false);
  assert.deepEqual(await response.json(), {
    mode: "inquiry_only",
    message: "Availability is confirmed personally after an inquiry.",
  });
});

test("does not cache, index, echo dates, or expose an availability verdict", async () => {
  const response = await GET(requestFor(90));
  const serialized = JSON.stringify(await response.json());
  const secondSerialized = JSON.stringify(
    await (await GET(requestFor(120))).json()
  );

  assert.equal(response.headers.get("Cache-Control"), "no-store");
  assert.equal(
    response.headers.get("X-Robots-Tag"),
    "noindex, nofollow, nosnippet"
  );
  assert.equal(secondSerialized, serialized);
  for (const forbidden of [
    "checkIn",
    "checkOut",
    "nights",
    '"status"',
    '"open"',
    '"booked"',
    '"unconfirmed"',
  ]) {
    assert.ok(
      !serialized.includes(forbidden),
      `response must not contain ${forbidden}`
    );
  }
});
