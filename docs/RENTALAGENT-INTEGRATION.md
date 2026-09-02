# RentalAgent ↔ rittenhouseresidence.com — integration plan

Written 2026-08-31, updated 2026-09-02 after the second shipping pass. Covers
the architecture, the auth model, every failure mode, what shipped, and what
the owner still has to decide.

**RentalAgent** (repo `RPLogic-Inc/rentalclaw`, production
`https://rentalclaw.vercel.app`) is the AI operations agent for the house:
reservations, guest messaging, vendors, inspections, evidence packets, owner
reporting, built over Hospitable as the channel source of truth for Airbnb and
Vrbo. 1822 Pine is its first property. It is a client-agnostic MCP/tool server;
its write-tier tools are approval-gated.

**This site** is a statically generated Next.js 16 App Router build on Vercel
with a handful of server route handlers. Two pages (`/` and
`/philadelphia-events`) now revalidate hourly so date-relative content rolls
without a deploy.

---

## 1. Live availability (shipped 2026-09-01, credentialed 2026-09-02)

`/book` and `/contact` ask RentalAgent's read-only `check_stay_availability`
tool and answer inline.

```
browser
  │  GET /api/availability?checkIn=…&checkOut=…      (no credential, no PII)
  ▼
rittenhouseresidence.com  ·  src/app/api/availability/route.ts
  │  validate range → rate-limit by IP → single hard-coded tool name
  │  POST /api/mcp  {"method":"tools/call","params":{"name":"check_stay_availability", …}}
  │  Authorization: Bearer $RENTALAGENT_ACCESS_TOKEN     (server-side only)
  ▼
RentalAgent  ·  rentalclaw.vercel.app
  ▼  full operational result (reservation ids, providers, provenance, blockers)
route handler collapses it to  { status, checkIn, checkOut, nights }
```

Design choices: GET (idempotent, edge-cacheable, clear of the Firewall's
POST ceiling that protects the contact form); the canonical `/api/mcp`
endpoint rather than the deprecated bridge; a rebuilt four-field reply rather
than a forwarded one, asserted by a route test and by
`scripts/verify-seo.sh` against production.

### The public vocabulary

| `status` | Requires | Visitor sees |
|---|---|---|
| `open` | fresh evidence, `requiresReview === false`, no coverage gap, verdict and night counts agree | "These dates are open." |
| `booked` | same gates, verdict `unavailable` | "These dates are already booked." |
| `unconfirmed` | anything else at all | "We'll confirm these dates for you." — **no claim** |

The mapper is an allow-list. Stale rows, a review flag, an unreachable
RentalAgent, a 401, an unrecognised payload, an unset credential — all
collapse to `unconfirmed`. A wrong "available!" is far worse than no answer.

### Failure modes

| Situation | Behaviour |
|---|---|
| `RENTALAGENT_*` unset | `unconfirmed`, no outbound request |
| RentalAgent down / slow / 5xx | 6 s timeout → `unconfirmed`, HTTP 200 |
| Token wrong or revoked | `unconfirmed`, logged server-side |
| Calendar evidence stale (> 8 h) or a review flag | `unconfirmed` |
| Range invalid | HTTP 400 before the credential is used |
| Too many checks | 40 / 15 min / IP → 429 with `Retry-After` |

Confirmed verdicts are cached `s-maxage=120`; `unconfirmed` is `no-store`.

### Auth model — fixed

RentalAgent now has a second, long-lived bearer secret,
`RENTALCLAW_READ_ONLY_ACCESS_KEY`, that resolves to MCP scope `read:core`
only and records a distinguishable actor in RentalAgent's audit ledger
(`RPLogic-Inc/rentalclaw#211`). It cannot call write, audit, or approval
tools, and does not authorize RentalAgent's HTTP bridge, operator APIs,
dashboard, or cron routes. The website holds that key — not the admin key —
as `RENTALAGENT_ACCESS_TOKEN` (Production and Preview), with
`RENTALAGENT_BASE_URL = https://rentalclaw.vercel.app`. Neither is
`NEXT_PUBLIC_*`; both are `.trim()`ed on read because Vercel renders a
trailing newline as an orange `↵`.

### The calendar-freshness blocker — fixed

On 2026-08-31 every check through 2026-12-29 returned `unconfirmed`. Cause:
`property_calendar_days` held fresh `airbnb-official` rows (Hospitable cron
every 30 min) beside `vrbo` rows last written 2026-07-02, and RentalAgent's
freshness took the *oldest* row. The Vrbo rows were leftovers from an earlier
sync path — Hospitable now returns one calendar per property, and in
Hospitable the Vrbo listing is "partially managed" with calendar sync from
the Airbnb lead listing, so the fresh rows already carry cross-channel
blocks. (An earlier draft of this document blamed a missing `VRBO_ICAL_URL`;
that was wrong — that cron writes a different provider id.)

`RPLogic-Inc/rentalclaw#212` introduces a **dormant provider** rule: a
source whose newest row is older than the 8-hour ceiling is set aside only
when a fresh source covers every night, and any disagreement (dormant says
blocked, fresh says open) still fails closed with `dormant_provider_conflict`.
Verified read-only against production data: 2026-09-14 → 17 went from
`needs_review` to `available`; 2027-01-15 → 18 unchanged.

What still returns `unconfirmed`, correctly: nights the Airbnb calendar shows
blocked without a matching reservation record in RentalAgent
(`provider_reservation_unmatched` — seen on 2026-10-15 → 18 and
2026-11-20 → 23). Those are real blocks RentalAgent cannot attribute; the site
says "we'll confirm" rather than "booked". RentalAgent's
`get_provider_divergence_log` explains each one.

---

## 2. "What's on" — the events page's rolling section (shipped 2026-09-01)

`/philadelphia-events` now opens with **This week** (events overlapping
today → today+6), **Coming up** (the next eight weeks, Monday–Sunday), and an
**Every week** strip, driven by `src/data/whats-on.json`; the homepage shows a
three-card teaser. Every event carries the organizer/venue page it was read
from and the date it was checked, and the page prints both.
`scripts/check-whats-on.mjs` runs in `prebuild` and fails on structural
errors; staleness only warns and is shown on the page. See
`docs/WHATS-ON.md` for the contract and the weekly refresh procedure.

RentalAgent's side (`RPLogic-Inc/rentalclaw#213`) stores sources, events, and
"not happening" notices per property, exposes read/propose/publish MCP tools
under the approval rule, and serves the same JSON shape from
`GET /api/public/local-events` to the read-only key. When that is deployed and
seeded, the site can read the feed instead of the file; the render code does
not change. The playbook that any RentalAgent property should follow is
`docs/playbooks/local-events-and-area-guides.md` in that repo.

---

## 3. Deliberately deferred

**Inquiries into the ops loop (`create_task` / `draft_guest_reply`).** Write-
tier; deserves its own change on its own credential, verified live. The
contact route stays email-first so a RentalAgent outage can never lose a lead.

**`get_property_brief` as the source of truth for property facts.** A
build-time fetch would make every production build depend on RentalAgent
being up, and a wrong number propagates to 113 pages. First make the brief
agree with `src/lib/facts.ts` field by field, add a CI divergence check, then
consider inverting the direction.

**`booked` against live data.** Unit-tested and mapped end-to-end, but no
confirmable booked nights exist yet inside the window where RentalAgent will
confirm anything.

---

## 4. Operating notes

- `bash scripts/verify-seo.sh` checks the availability API (safe verdicts, no
  leakage, invalid-range rejection) alongside everything else — 76 checks.
- Test locally without the production token: run RentalAgent's `next dev`
  with the production `DATABASE_URL` and a locally chosen access key, and
  point `RENTALAGENT_BASE_URL` at it. `check_stay_availability` is read-only.
- Rotating the key: set a new `RENTALCLAW_READ_ONLY_ACCESS_KEY` in the
  `rentalclaw` Vercel project, redeploy RentalAgent, then update
  `RENTALAGENT_ACCESS_TOKEN` here. During the gap the site answers
  `unconfirmed`; nothing breaks.
