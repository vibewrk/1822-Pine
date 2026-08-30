import assert from "node:assert/strict";
import test from "node:test";

import { NextRequest } from "next/server";

import { proxy } from "@/proxy";

test("strips stay details before /contact renders and preserves attribution", () => {
  const response = proxy(
    new NextRequest(
      "https://rittenhouseresidence.com/contact?arrival=2099-06-01&departure=2099-06-03&guests=8&utm_source=test&gclid=abc"
    )
  );
  const location = response.headers.get("location");

  assert.equal(response.status, 307);
  assert.equal(
    location,
    "https://rittenhouseresidence.com/contact?utm_source=test&gclid=abc"
  );
});

test("leaves ordinary contact URLs and non-GET requests alone", () => {
  const ordinary = proxy(
    new NextRequest("https://rittenhouseresidence.com/contact?utm_source=test")
  );
  assert.equal(ordinary.status, 200);
  assert.equal(ordinary.headers.get("location"), null);

  const post = proxy(
    new NextRequest(
      "https://rittenhouseresidence.com/contact?arrival=2099-06-01",
      { method: "POST" }
    )
  );
  assert.equal(post.status, 200);
  assert.equal(post.headers.get("location"), null);
});
