# Rittenhouse Residence site truth

Status: canonical coordinate for the current public website  
Truth revision: `rr-site-2026-09-02.2`
Last reconciled: 2026-09-02  
Pre-inquiry-only behavior baseline: [PR #59](https://github.com/vibewrk/1822-Pine/pull/59), merge `347763664ecb5c97c459915785f6e30fedf2b0f1`
Owner-approved public date policy: inquiry-only, directed 2026-09-02

This file is the route to truth, not another independent inventory. Use the
owning source below and treat the values in prose as a dated summary. The
canonical branch is `vibewrk/1822-Pine` `main`; a pinned merge identifies the
last reconciled behavior but does not outrank a later verified deployment.

## Authority map

| Question | Authority | Verification rule |
|---|---|---|
| Approved aggregate property facts, public location, OTA links, and review snapshot | `src/lib/facts.ts` | Change the module first; run the build and live verifier. |
| Qualified sample pricing language | `src/lib/pricing.ts` | Never turn the sample weekday amount into an unconditional rate. |
| Per-room beds and names | `src/data/rooms.json` | Must reconcile to the aggregate bed mix. |
| Public photo order, room labels, and omissions | `src/data/property-images.json` | Run `npm run check:images`. |
| Public voice, privacy, structured-data, and booking language | `docs/VOICE-AND-CONVERSION-PLAN.md` | A material policy change requires owner direction. |
| Website ↔ RentalAgent behavior | `docs/RENTALAGENT-INTEGRATION.md` plus the referenced code/tests | Code proves the contract; deployed credentials and upstream freshness require current runtime evidence. |
| Public machine summary | `scripts/generate-llms.ts` → `public/llms.txt` | Generated output only; never hand-edit. |
| Historical narrative | verified historical data, dossier, and primary sources | Historical evidence does not override current operating facts. |
| Production revision | GitHub merge plus Vercel production deployment | Verify both and test the canonical domain. |
| Reservations and calendar state | Hospitable, read through the approved RentalAgent path | Never copy real availability results into public evidence. |
| Analytics, advertising, Hospitable configuration, and payment state | the relevant provider | Every claim needs `observedAt`, source, scope, and evidence; it expires. |
| Portfolio decisions and approval gates | `RPLogic-Inc/wrk-grand-plan` | Grand Plan references this evidence; it should not fork the property facts. |

## Reconciled public-property snapshot

The current code describes one private whole-house stay with:

- 8 bedrooms and room for 16 overnight guests;
- 2 king beds and 6 queen beds, with no double bed;
- 5 full bathrooms and 1 powder room;
- nearly 7,000 square feet across 4 stories, with no elevator;
- a public location on the 1800 block of Pine Street, two blocks from
  Rittenhouse Square; and
- Airbnb and Vrbo as the current online-calendar and checkout paths.

Pricing is date-specific. Only select weekdays may be available from about
$1,600 for the whole house; weekends, holidays, and high-demand dates run
higher. The website accepts personal quote inquiries but does not process
checkout.

The review snapshot in `src/lib/facts.ts` was rechecked on 2026-09-02:
Airbnb 4.88/5 across 102 reviews and Vrbo 9.8/10 across 66 reviews. These are
third-party observations, not permanent property attributes, and are not
published as property `aggregateRating` or `review` JSON-LD.

The application currently displays Philadelphia STR identifier `903781`.
That is a published identifier, not a repository attestation that licensing,
tax, or insurance standing has been independently reverified. Those checks
remain owner-controlled before advertising or Direct activation.

## Public privacy boundary

The intended marketing boundary is defense in depth, not anonymity:

- marketing copy, metadata, JSON-LD, and `llms.txt` omit the exact street
  address and coordinates;
- block-level location and neighborhood context remain public;
- historical pages and primary-source records may retain the address when it
  is part of the historical subject; and
- booked guests receive exact arrival information through the appropriate
  private channel.

### Public date handling is inquiry-only

The owner selected the stricter policy on 2026-09-02. The public website does
not answer whether requested dates are open, booked, or otherwise available.
Selected dates remain useful: the site carries them into the personal quote
form, where a person replies within 24 hours, and Airbnb and Vrbo remain the
public live-calendar and secure-checkout paths.

The browser makes no availability request. The former `/api/availability`
URL remains temporarily as a compatibility route for older cached browser
code, but it returns the same fixed inquiry acknowledgement for every request,
echoes no supplied dates, uses no calendar credential, and makes no upstream
call. It must never regain a public date verdict without a new owner decision
and truth revision.

Never publish real tested ranges or their results in repository documentation,
PRs, issues, handoffs, analytics, or campaign evidence.

## Measurement and acquisition boundary

The site implements GA4/GTM/Vercel Analytics and emits booking-path diagnostic
events. A provider-accepted quote response is the only code path that can emit
`generate_lead`; the browser deduplicates it by inquiry ID. The site does not
emit `purchase`.

Implementation is not receipt. Statements that GA4 received an event, that an
email was delivered, that a lead was qualified, or that a booking was paid
must be backed by current provider evidence. Google Ads/GA links, Search
Console links, Hospitable fields, traffic totals, and campaign readiness are
dated account observations—not durable code facts.

Paid campaigns remain draft-only until the measurement and owner-approval
gates in `docs/SEARCH-ADS-DRAFT.md` are satisfied. Updated photographs improve
future creative readiness but do not by themselves clear those gates.

## Current integration distinctions

- The events pages are date-relative and revalidate hourly, but their facts
  currently come from the maintained repository dataset. They are not yet a
  live RentalAgent/provider feed.
- The website has live inquiry and OTA handoffs but no on-site checkout.
- RentalAgent may support private operational availability work, but the
  public website does not call it for date status. Repository code cannot by
  itself attest to a deployed token's scope or an upstream deployment SHA.
- Hospitable Direct, widget, GVR, payout, property attachment, tax, policy, and
  payment state belong to timestamped Hospitable evidence and remain subject
  to explicit owner approval for changes.

## Known non-authoritative material

The retired `website/**` Quarto tree, root research inventories, old plans, old
handoffs, screenshots, conversation attachments, and PR/issue prose may contain
useful history. They are not current operating truth. If one conflicts with the
authority map, fix or clearly label it; do not propagate it into campaigns or
RentalAgent.

## Consumer contract

RentalAgent, Grand Plan, campaign drafts, and future agents should record this
truth revision and the exact website commit they consumed. They should link to
the owning files rather than retype mutable facts. External state must be a
dated observation with a source and expiry. A later consumer may never
silently override this site with an older copied plan.
