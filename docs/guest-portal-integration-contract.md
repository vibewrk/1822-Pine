# Guest Portal integration contract

**Status:** safe website scaffold; no live Hospitable connection or checkout

**System of record:** Hospitable. The website does not authenticate guests,
look up reservations, collect payment, verify identity, generate entry codes,
or store stay information.

## Public handoff

`GET /stay/guest` is a static, no-index page for confirmed guests. It explains
that the reservation-specific Hospitable Guest Portal link arrives through the
confirmed booking channel. It intentionally has:

- no booking lookup or sign-in form;
- no generic link into a reservation;
- no iframe or embedded provider session;
- no availability calendar or checkout;
- no reservation, guest, payment, address, Wi-Fi, entry, device, or security
  data; and
- no presence in the XML sitemap or public navigation.

All query parameters are removed before the page renders. This protects
analytics and browser history, but it is defense in depth: callers must never
place stay data or a Guest Portal token in a URL because upstream request logs
may see the original request.

Route headers:

- `Cache-Control: private, no-store, max-age=0`
- `Referrer-Policy: no-referrer`
- `X-Robots-Tag: noindex, nofollow, noarchive`

## Provider handoff

Hospitable sends its opaque, reservation-specific Guest Portal URL through the
accepted reservation's approved message or email. The website does not receive,
proxy, decorate, shorten, log, or persist that URL. In particular, it must not
add campaign parameters, place the link in client storage, or emit it to GA,
GTM, Vercel Analytics, support tooling, or error telemetry.

The provider remains responsible for guest authentication/OTP, reservation
authorization, identity/risk verification, agreements, deposits, payments, and
access lifecycle. Rental Agent may later consume minimum necessary completion
status through a read-only provider scope; it must not duplicate or bypass
those controls.

## Lifecycle

The owner must approve the exact provider behavior before Direct launch:

1. link issuance only after an accepted reservation;
2. stronger verification before sensitive pre-arrival information;
3. immediate revocation on cancellation or guest/reservation ownership change;
4. expiry after the approved post-departure grace period;
5. recovery through the original booking channel or verified human support;
6. accessibility fallback without weakening identity checks; and
7. audit records that contain outcomes and non-sensitive IDs, never payloads.

## Future API boundary

If Hospitable later exposes a supported Guest Portal status API, the only
initial website-facing contract is a server-to-server boolean/status projection
for the current reservation, using an opaque short-lived handoff established by
Hospitable. A future change must separately prove:

- provider-supported OAuth or equivalent scoped authentication;
- one-reservation authorization and cancellation revocation;
- explicit field allowlisting and private/no-store responses;
- no secrets or PII in paths, query strings, browser storage, analytics, logs,
  or GitHub;
- audit logging, rate limiting, abuse handling, expiry, key rotation, and
  emergency disable; and
- WCAG 2.2 AA behavior with a verified support fallback.

Until then, there is no custom guest session, proxy, database table, webhook,
or device integration in the website.

## Acceptance tests

- `/stay/guest` contains no public booking lookup, provider token, or sensitive
  property/stay data.
- any query string redirects to the clean route before rendering;
- the clean route is no-index and private/no-store;
- the route is excluded from sitemap and robots;
- no Guest Portal link is passed to analytics or client storage;
- keyboard, focus, headings, contrast, and support copy remain accessible;
- failure leaves the existing booking-channel support path intact; and
- removing this route and its headers is a complete rollback with no provider
  state to unwind.
