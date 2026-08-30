import assert from "node:assert/strict";
import test from "node:test";

import { unstable_doesMiddlewareMatch } from "next/experimental/testing/server";
import { NextRequest } from "next/server";

import { config, proxy } from "@/proxy";

test("runs proxy only for contact and the guest handoff", () => {
  for (const url of ["/contact", "/stay/guest"]) {
    assert.equal(
      unstable_doesMiddlewareMatch({ config, nextConfig: {}, url }),
      true
    );
  }

  for (const url of ["/", "/book", "/stay", "/_next/static/example.js"]) {
    assert.equal(
      unstable_doesMiddlewareMatch({ config, nextConfig: {}, url }),
      false
    );
  }
});

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

test("strips every query parameter from the public guest handoff", () => {
  const response = proxy(
    new NextRequest(
      "https://rittenhouseresidence.com/stay/guest?reservation=must-not-persist&utm_source=must-not-persist"
    )
  );

  assert.equal(response.status, 307);
  assert.equal(
    response.headers.get("location"),
    "https://rittenhouseresidence.com/stay/guest"
  );
});

test("serves the clean guest handoff without a redirect", () => {
  const response = proxy(
    new NextRequest("https://rittenhouseresidence.com/stay/guest")
  );

  assert.equal(response.status, 200);
  assert.equal(response.headers.get("location"), null);
});
