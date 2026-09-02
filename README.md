# The Rittenhouse Residence website

Production website for [rittenhouseresidence.com](https://rittenhouseresidence.com),
a whole-house Philadelphia stay near Rittenhouse Square.

The deployed application is a Next.js 16 App Router project hosted on Vercel.
The canonical repository is `vibewrk/1822-Pine`; merges to `main` create the
production deployment.

## Start with current truth

Before changing facts, copy, privacy, booking, schema, analytics, or campaign
material, read:

1. [`AGENTS.md`](AGENTS.md) — source precedence and operating rules.
2. [`docs/SITE-TRUTH.md`](docs/SITE-TRUTH.md) — current authority map and
   unresolved boundaries.
3. [`docs/VOICE-AND-CONVERSION-PLAN.md`](docs/VOICE-AND-CONVERSION-PLAN.md) —
   public voice, address, schema, and booking policy.

The aggregate property facts used by the application live in
`src/lib/facts.ts`; qualified price language lives in `src/lib/pricing.ts`.
`public/llms.txt` is generated from those modules and must not be hand-edited.

The old `website/**` Quarto tree and root research/build inventories are
historical source material. They are not the deployed site or current
property truth.

## Local development

```bash
npm ci
npm run dev
```

The application is available at `http://localhost:3000` by default.

Useful checks:

```bash
npm run lint
npm run test:contact
npm run test:availability
npm run check:images
npm run build
```

Run the public regression suite against production:

```bash
SITE=https://rittenhouseresidence.com bash scripts/verify-seo.sh
```

## Current application map

- `src/app/` — pages, metadata, structured data, and route handlers.
- `src/components/` — shared conversion, navigation, gallery, and booking UI.
- `src/lib/facts.ts` — approved aggregate public property facts and OTA review
  snapshot.
- `src/lib/pricing.ts` — qualified price language.
- `src/data/rooms.json` — room-level bed inventory.
- `src/data/property-images.json` — public photo-tour order and labels.
- `src/data/whats-on.json` — maintained events dataset.
- `scripts/generate-llms.ts` — generates the machine-readable public summary.
- `scripts/verify-seo.sh` — live domain, indexability, schema, privacy,
  conversion, image, and integration checks.
- `docs/RENTALAGENT-INTEGRATION.md` — current website/RentalAgent contract.
- `docs/GROWTH-RUNBOOK.md` — measurement and acquisition operating notes.

## Booking and privacy model

The website accepts quote inquiries. Airbnb and Vrbo provide online calendars
and checkout; the website does not process payment. Public marketing uses a
block-level location and omits exact address and coordinates from machine
markup. Historical source records may retain an address when it is part of the
historical subject.

Public date handling is inquiry-only. Selected dates carry into the personal
quote form, but the website does not disclose a calendar verdict. Airbnb and
Vrbo remain the public live-calendar paths. See
[`docs/SITE-TRUTH.md`](docs/SITE-TRUTH.md#public-date-handling-is-inquiry-only).

## Deployment

Use a feature branch and pull request. Verify locally, merge through GitHub,
wait for the Vercel production deployment to report `Ready`, and then run the
live regression suite. A canceled preview deployment can be expected when the
feature commit is not GitHub-verified; GitHub's verified merge commit still
drives production.

See [`docs/HANDOFF.md`](docs/HANDOFF.md) for the concise current handoff.
