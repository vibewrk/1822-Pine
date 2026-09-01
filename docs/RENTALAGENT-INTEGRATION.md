# RentalAgent ↔ rittenhouseresidence.com — integration plan

Written 2026-08-31. Covers the architecture, the auth model, every failure
mode, what shipped in the first slice, and the decisions the owner has to make.

**RentalAgent** (repo `RPLogic-Inc/rentalclaw`, production
`https://rentalclaw.vercel.app`) is the AI operations agent for the house:
reservations, guest messaging, vendors, inspections, evidence packets, owner
reporting, built over Hospitable as the channel source of truth for Airbnb and
Vrbo. 1822 Pine is its first property. It is a client-agnostic MCP/tool server;
its write-tier tools are approval-gated.

**This site** is a statically generated Next.js 16 App Router build on Vercel
with a handful of server route handlers. Until now it has been a brochure: a visitor could not
find out whether their dates were free without leaving for Vrbo or Airbnb.

---

## The gap this closes

`/book` had a date picker that only built OTA deep links. `/contact` collected
dates blind. Every "is it available?" question either bounced the visitor to a
channel that charges commission, or waited 24 hours for a human reply.

RentalAgent already has the right tool: **`check_stay_availability`**. It is
read-only, takes exact dates, returns a compact trusted-calendar verdict plus
blockers, and explicitly creates no reservation, hold, task, or message. That
is the only shape a public website can safely call.

---

## Architecture

```
browser
  │  GET /api/availability?checkIn=…&checkOut=…      (no credential, no PII)
  ▼
rittenhouseresidence.com  ·  src/app/api/availability/route.ts
  │  validate range → rate-limit by IP → single hard-coded tool name
  │  POST /api/mcp  {"method":"tools/call",
  │                  "params":{"name":"check_stay_availability", …}}
  │  Authorization: Bearer $RENTALAGENT_ACCESS_TOKEN     (server-side only)
  ▼
RentalAgent  ·  rentalclaw.vercel.app
  │  calendar provenance over Hospitable-synced rows
  ▼
  │  full operational result (reservation ids, providers, provenance, blockers)
  ▲
route handler collapses it to  { status, checkIn, checkOut, nights }
```

Three deliberate choices:

**GET, not POST.** The call is an idempotent read, so it can be cached at the
edge, and it stays clear of the Vercel Firewall's POSTs-per-IP ceiling that
protects the contact form. Only dates cross the wire — no name, email, or
group size. RentalAgent's tool does not accept a guest count anyway.

**MCP JSON-RPC (`/api/mcp`), not the OpenAPI bridge.** `/api/tools/*` is
simpler but ships `Deprecation: true` and a `Sunset` of 2026-12-31. `/api/mcp`
is the canonical endpoint, `tools/call` is stateless (no `initialize`
handshake), and the reply is one JSON envelope.

**Rebuild, never forward.** RentalAgent's reply carries `propertyId`,
`canonicalReservationIds`, `sourceEventIds`, provider names, external listing
ids, and provenance explanations. The route constructs a fresh four-field
object instead of picking fields out of the upstream body, so a future
RentalAgent field cannot leak by default. A regression test asserts the public
body contains none of those strings, and `scripts/verify-seo.sh` re-checks it
against production.

### Files

| Path | What |
|---|---|
| `src/lib/availability.ts` | Pure, network-free: range validation, verdict mapping, MCP envelope parsing |
| `src/app/api/availability/route.ts` | The proxy: auth, rate limit, timeout, caching, public shape |
| `src/components/AvailabilityCheck.tsx` | Client UI; debounced, race-safe, renders no claim without an answer |
| `src/lib/availability.test.ts` | Verdict-mapping and validation tests |
| `src/app/api/availability/route.test.ts` | Route tests including the no-leak assertion |

`npm run test:availability` runs both.

---

## Auth model

The site holds one credential, server-side only:

```
RENTALAGENT_BASE_URL      https://rentalclaw.vercel.app
RENTALAGENT_ACCESS_TOKEN  the RentalAgent MCP access key
```

Neither is `NEXT_PUBLIC_*`; neither reaches the browser. Both are `.trim()`ed
before use, because Vercel renders a trailing newline in an environment value
as an orange `↵` that is easy to miss and would corrupt both the URL and the
`Authorization` header.

**Known weakness, and why it is acceptable today.** RentalAgent's MCP endpoint
accepts either an OAuth grant with scopes or the legacy bearer token, and the
legacy token resolves to `admin:full`. Its OAuth flow is
`authorization_code` + PKCE only — no client-credentials grant — and access
tokens expire in 30 days with no refresh path, so an unattended website cannot
hold one. That leaves the legacy token.

Compensating controls in this repo:

- The tool name is a module constant. No caller can influence which tool runs.
- The arguments are built from validated ISO dates plus a fixed
  `purpose: "guest_stay"`. No caller-supplied object is forwarded.
- `check_stay_availability` is read-tier. It cannot create a reservation, hold,
  task, or message, so the website cannot bypass the approval gate even if the
  route were abused.
- The response is rebuilt, not proxied.

**Owner decision 1 — narrow the credential.** The right fix lives in
RentalAgent: either a long-lived machine credential scoped to `read:core`, or a
dedicated public availability endpoint that needs no operator token at all. Until
then, treat `RENTALAGENT_ACCESS_TOKEN` on the website as an admin credential
and rotate it if the website project is ever compromised.

---

## The public vocabulary

The browser only ever receives one of three words. Nothing else is exposed.

| `status` | Meaning | What the visitor sees |
|---|---|---|
| `open` | Every requested night is open, on evidence RentalAgent confirmed | "These dates are open." |
| `booked` | At least one night is blocked by a reservation or hold, on confirmed evidence | "These dates are already booked." |
| `unconfirmed` | Anything else at all | "We'll confirm these dates for you." — **no availability claim** |

`open` and `booked` require **every** one of these to hold:

- `calendarEvidence.freshness.status === "fresh"` (RentalAgent's own ceiling is
  8 hours; it fails closed past that)
- `requiresReview === false`
- `coverageGapNights === 0` and `outsideReportHorizonNights === 0`
- the verdict and the night counts agree with each other

The mapper is an allow-list, not a deny-list: an unrecognised, partial, or
future RentalAgent payload degrades to `unconfirmed` rather than being read
optimistically. This is the site's no-fabricated-facts rule expressed in code —
a wrong "available!" is far worse than no answer.

---

## Failure modes

| Situation | Behaviour |
|---|---|
| `RENTALAGENT_*` env vars unset | `unconfirmed`. No outbound request is attempted. **The feature ships safely dark.** |
| RentalAgent down, slow, or 5xx | 6-second timeout → `unconfirmed`, HTTP 200. Never a 500 to the visitor. |
| Token wrong or revoked (401) | `unconfirmed`, logged server-side. |
| Malformed / non-JSON / error envelope | `unconfirmed`. |
| Calendar rows stale (> 8h) | `unconfirmed` — RentalAgent refuses, and so do we. |
| Dates beyond the calendar horizon | `unconfirmed` (coverage gap). |
| Range invalid (past, under the 2-night minimum, > 30 nights, > 730 days out) | HTTP 400 with a plain message, **before** the credential is used. |
| Visitor checks many ranges | 40 checks / 15 min / IP, shared through Upstash when configured, per-instance memory otherwise. HTTP 429 with `Retry-After`. |
| Network error in the browser | The panel shows `unconfirmed`. A failed check is not a claim in either direction. |

Caching: a confirmed verdict gets `public, s-maxage=120,
stale-while-revalidate=300`. Two minutes cannot make an answer meaningfully
less current when RentalAgent itself tolerates evidence up to eight hours old,
and it blunts repeated scraping of the same range. `unconfirmed` is `no-store`,
so a transient outage never sticks in the CDN.

---

## Production reality as of 2026-08-31 — read this before expecting verdicts

Verified by calling `check_stay_availability` against the live production
database. The tool works correctly; **the calendar data feeding it does not
currently support confident answers for near-term dates.**

`property_calendar_days` for 1822 Pine, rows from today forward:

| Provider | Rows | Date range | Oldest `updated_at` |
|---|---|---|---|
| `airbnb-official` (via Hospitable) | 181 | 2026-08-31 → 2027-02-27 | 2026-08-31 09:30 — **fresh** |
| `vrbo` | 121 | 2026-08-31 → 2026-12-29 | **2026-07-02 21:00 — 59 days stale** |

Freshness is computed from the **oldest** authoritative row in the window, so
the frozen Vrbo rows poison every check that overlaps them. The result:

| Requested dates | Verdict today | Why |
|---|---|---|
| today → 2026-12-29 | always `unconfirmed` | stale Vrbo rows |
| 2026-12-30 → 2027-02-27 | real `open` / `booked` | Airbnb rows only, synced every 30 min |
| after 2027-02-27 | `unconfirmed` | past the synced horizon |

Confirmed end-to-end: `2027-01-15 → 2027-01-18` returns `open`;
`2026-09-14 → 2026-09-17` returns `unconfirmed`.

**Root cause.** RentalAgent's Hospitable sync cron runs every 30 minutes and is
healthy. The Vrbo iCal cron runs every 6 hours but returns a clean "skipped"
result while `VRBO_ICAL_URL` is unset — and it is unset in the `rentalclaw`
production project. The Vrbo rows were written once on 2026-07-02 and have not
moved since. They are still counted as authoritative.

**Owner decision 2 — unblock near-term availability.** This is the single
change that turns the shipped feature from honest-but-quiet into the revenue
win. Options, in the RentalAgent repo/project, not this one:

1. Set `VRBO_ICAL_URL` in the `rentalclaw` Vercel project so the 6-hourly cron
   starts refreshing those rows. Cheapest fix; likely sufficient.
2. If the Vrbo export URL is not available, have RentalAgent treat an
   unrefreshed provider as a *limited connection* and exclude it from the
   authoritative freshness set, the way it already excludes limited-connection
   availability artifacts — rather than letting one dead source veto a live one.

Until one of those lands, `/book` and `/contact` will answer "we'll confirm
these dates for you" for every date inside the next four months. That is
accurate and it is a better experience than today's blind form, but it is not
the instant answer the feature exists to give.

---

## What shipped

Slice 1 only: **live availability on `/book` and `/contact`.**

- `/book` — the existing date picker now answers below the nights line, with a
  "Request a quote for these dates" link that carries the dates into `/contact`
  through the existing short-lived session-storage handoff (never the URL).
- `/contact` — the quote form answers under the arrival/departure row, so a
  visitor learns what the form is about to ask a human before submitting.

Analytics: one `availability_check` event with `{ result, location }`. Dates
are deliberately not sent, matching how the quote flow already keeps stay
details out of GA.

The contact form was not touched. `src/app/api/contact/route.ts` and
`src/lib/contact-security.ts` are unchanged; `npm run test:contact` passes.

---

## Deliberately deferred

**Inquiries into the ops loop (`create_task` / `draft_guest_reply`).** The
right shape is: on a successful Resend send, fire a non-blocking `create_task`
so the lead enters RentalAgent, with email remaining the source of truth so a
RentalAgent outage can never lose a lead. Deferred because both tools are
write-tier — `create_task` needs `write:drafts`, `draft_guest_reply` produces
an approval packet — and wiring writes into the lead path deserves its own
change, on its own credential, verified against a live token. The contact route
was broken for months and repaired days ago; it should not carry an unverified
second delivery path.

**`get_property_brief` as the source of truth for property facts.** Deferred on
purpose. The site is statically generated; a build-time fetch would make every
production build depend on RentalAgent being up and on its brief being right,
and a wrong number would propagate to 113 pages. `src/lib/facts.ts` is already
reviewed and correct. The safer sequence is: first make `get_property_brief`
agree with `facts.ts` field by field, then add a **CI check** that fails when
they diverge, and only then consider making RentalAgent upstream.

**`booked` against live data.** The state is unit-tested, and the mapping is
exercised end-to-end, but no booked nights currently exist inside the window
where RentalAgent will confirm anything, so the copy has not been seen against
real production data.

---

## Turning it on

1. In the `rentalclaw` Vercel project, obtain or mint the MCP access key
   (`RENTALCLAW_MCP_BEARER_TOKEN`). It is stored sensitive, so it cannot be
   read back — rotate it if the value is not recorded elsewhere.
2. In the `rittenhouse-website` Vercel project (team `rpcoding`), add for
   Production **and** Preview:
   - `RENTALAGENT_BASE_URL` = `https://rentalclaw.vercel.app`
   - `RENTALAGENT_ACCESS_TOKEN` = that key
   Paste carefully: a trailing newline shows as an orange `↵`.
3. Redeploy, then run `bash scripts/verify-seo.sh` — the Availability API
   section reports whether a confirmed verdict is coming back.
4. Address owner decision 2 above, or near-term dates stay `unconfirmed`.

Nothing breaks if steps 1–2 never happen. The endpoint answers `unconfirmed`
and the site keeps its existing 24-hour promise.
