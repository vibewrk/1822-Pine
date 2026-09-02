# RentalAgent ↔ rittenhouseresidence.com — integration plan

Written 2026-08-31, updated 2026-09-02 after the owner selected inquiry-only
public date handling. Covers the current integration boundary, what shipped,
and what remains private or deferred.

This document owns the integration contract, not all property or provider
truth. Read `docs/SITE-TRUTH.md` first for source precedence and the approved
public-availability privacy boundary.

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

## 1. Public availability is inquiry-only (owner decision 2026-09-02)

`/book` and `/contact` keep the useful part of the date journey without
exposing calendar state. Visitors choose dates, the site calculates the stay
length locally, and those dates carry into the personal quote form. A person
replies within 24 hours with availability and an itemized quote. Airbnb and
Vrbo remain the public live-calendar and secure-checkout options.

The browser does not call RentalAgent or any availability endpoint. The old
`/api/availability` URL remains temporarily for compatibility with a cached
pre-change browser bundle. It ignores the request and always returns:

```json
{
  "mode": "inquiry_only",
  "message": "Availability is confirmed personally after an inquiry."
}
```

The response is `no-store` and `noindex`; it includes no requested dates,
night count, calendar verdict, provider metadata, or operational identifiers.
The route does not read a RentalAgent environment variable, use a credential,
or make an upstream request. Different requests therefore reveal identical
information.

RentalAgent may still answer availability questions inside a private,
access-controlled owner or staff workflow. That private operational capability
does not authorize a public date-status bridge. The previously installed
website read-only credential is not required by current source; its live
provider configuration is a dated external observation until separately
verified or revoked.

The prior three-state implementation and its freshness rules remain in Git
history for auditability. They are historical design evidence, not the current
website contract.

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

**Private availability assistance.** Any future RentalAgent date-status work
belongs in an access-controlled owner or staff workflow. Public evidence must
never include a real range and its result.

---

## 4. Operating notes

- `bash scripts/verify-seo.sh` checks that the compatibility URL returns only
  the fixed inquiry acknowledgement, echoes no dates, and exposes no calendar
  verdict or operational detail.
- The public website needs no RentalAgent base URL or access token for this
  behavior. Do not add one back without a new owner decision and truth revision.
