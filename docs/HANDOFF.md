# Handoff — rittenhouseresidence.com SEO/AEO overhaul

Prepared 2026-08-24 by a Claude Code **cloud session**, which had no access to
Google, DNS, or Vercel credentials. All code work is finished and pushed. What
remains are account actions that need your logged-in machine.

---

## Start here (2 minutes)

```bash
cd /path/to/1822-Pine
git fetch origin
git checkout claude/review-pine-homepage-011CUe7HDMPLe3UWXpKpUQHe
npm install
claude
```

Then paste this to Claude:

> Read docs/HANDOFF.md and docs/GROWTH-RUNBOOK.md, then run
> `bash scripts/verify-seo.sh` to see the live baseline. Open the PR for this
> branch, then walk me through the account setup in the runbook — Search
> Console, GA4, Vercel Analytics, the two broken domain redirects, and Resend.
> Use my gh and vercel CLIs where you can; stop and ask me when a step needs a
> browser login.

That's the whole handoff. Everything below is detail.

---

## Where things stand

| | Status |
|---|---|
| Branch | `claude/review-pine-homepage-011CUe7HDMPLe3UWXpKpUQHe`, pushed, 8 commits ahead of `main` |
| Build | Clean — 101 static pages, 0 TS errors, 0 lint errors |
| PR | **Not opened** (no `gh` in the cloud container) |
| Deployed | **No.** The live site still runs the old code |
| Live baseline | `bash scripts/verify-seo.sh` → 10 pass / 25 fail |

**The single most important finding:** the live site's root layout declared
`alternates.canonical: "/"`, which every route inherited — telling Google that
every page is a duplicate of the homepage. Combined with a sitemap where 10 of
14 story URLs 404'd and all 63 document pages were missing, plus Search Console
never having been verified, the site had no chance of ranking. All fixed on
this branch; none of it is live yet.

---

## What shipped (8 commits)

| Commit | What |
|---|---|
| `5015dea` | Retired the abandoned Astro/Sanity track (35k lines never deployed); disarmed the legacy Quarto GitHub-Pages workflow |
| `9d05288` | **Archive repair** — build script pointed outside the repo and skipped CI, shipping ~130 broken images across `/history/*`. Contact API no longer fake-succeeds when unconfigured. Schema: fabricated review, fake `starRating`, false "Free parking" removed |
| `f721af1` | **Canonical fix** + sitemap rebuilt from source data (32→95 URLs), 63 document pages now statically generated, `/llms.txt`, AI-crawler robots rules, per-route metadata |
| `ea10cae` | **Conversion** — `ota_click` / `contact_submit` GA4 events; "Direct booking is coming soon" removed from all 5 surfaces and replaced with a 24-hour inquiry promise |
| `3fd6485` | **Media** — 29 alt texts rewritten after viewing each photo (5 were flat wrong), neighborhood photo band from 6 unused assets, `sizes` on 23 images, logo 3.1MB→52KB, removed a personal photo of an identifiable person |
| `a439260` | Growth runbook |
| `75df49a` | **Sleeps 16** corrected sitewide (owner-confirmed); Drexel framing softened to match the documented 1850 marriage |
| _(merge)_ | main merged in |

---

## Verify anything, anytime

```bash
bash scripts/verify-seo.sh          # checks the live site
SITE=http://localhost:3000 bash scripts/verify-seo.sh   # or a local dev server
```

Checks redirects, canonicals, sitemap size and dead slugs, AI-crawler rules,
`/llms.txt`, archive images, schema integrity, "coming soon" copy, capacity
consistency, logo weight, GA/Vercel tags, and the contact API. Exit 0 = all
pass.

Expect most failures to flip to passes on the first deploy. Two will only pass
after you act: **Vercel Analytics** (dashboard toggle) and the **domain
redirects** (DNS).

---

## What's left — needs your accounts

Full click-by-click is in `docs/GROWTH-RUNBOOK.md`. Summary:

1. **Google Search Console** — never verified, so there is genuinely zero
   search data to analyze. Add a Domain property, add the TXT record, submit
   the sitemap. *Do this first; nothing else in SEO is measurable until it
   exists.*
2. **GA4** — tag `G-YYXHNWZ4PK` is in the HTML but your own portfolio audit
   (2026-08-02) found no mapped property collecting. Confirm you own it or
   create a new one, then mark `ota_click` and `contact_submit` as key events.
3. **Vercel Analytics** — one toggle; the component is already in the layout.
4. **Domain redirects** — `therittenhouseresidence.com` and `1822pine.com`
   both 301 through insecure `http://`, and `1822pine.com` is the domain
   Google actually indexed. `www.1822pine.com` doesn't resolve at all.
5. **Resend** — confirm `RESEND_API_KEY` is set in Vercel, then verify the
   domain and set `CONTACT_FROM_EMAIL`. Until then the sandbox sender only
   reliably delivers to the Resend account owner's inbox.

## What's left — needs your judgment

- **STR license number.** Renewal in progress. Philadelphia requires the number
  on listings/ads. When it issues: `trustItems` in `src/app/page.tsx` and the
  footer line in `src/components/layout/Footer.tsx`. Airbnb currently shows
  "Registration Details 903781" — confirm whether that's the same number.
- **Spencer naming.** Deliberately not auto-fixed. `DEEP-RESEARCH-REPORT.md`
  says the 1893 buyer was *Graham* Spencer (Howard was the son who died in
  1891), but it also calls Agnes his *widow* while the chapters call her his
  *daughter*. Your sources disagree; a sweep could make it wrong in a new way.
  `/history` landing copy is safely neutral; the 14 chapters need your call.
- **Dining capacity.** Copy read "seats 21"; I aligned it to 16 with the
  sleeping capacity. If the table really seats more (day guests), say so and
  it's a two-line change.
- **Review figures.** "4.89 · 93 reviews" has no as-of date anywhere. Recheck
  quarterly; update `StructuredData.tsx`, `page.tsx`, and `BookingCTA.tsx`
  together.

---

## Deploy topology — read before merging

**Vercel builds from `vibewrk/1822-Pine`, not `ragurob/1822-Pine`.** Merging
this branch here will *not* deploy anything. Either:

- **(preferred)** repoint the Vercel project `rittenhouse-website`
  (`prj_apj9caF9tFggcQU97TJAPKRWraJV`, team `RPCoding`) at
  `ragurob/1822-Pine` and retire the duplicate; or
- land the same commits on `vibewrk/1822-Pine`'s `main`.

Two repos at the same commit is how this drift started — the cloud session
found a 35k-line Astro rewrite on one branch that production never adopted.

PR link:
https://github.com/ragurob/1822-Pine/compare/main...claude/review-pine-homepage-011CUe7HDMPLe3UWXpKpUQHe

---

## Map

| Path | What |
|---|---|
| `docs/HANDOFF.md` | this file |
| `docs/GROWTH-RUNBOOK.md` | account setup, env vars, weekly loop, owner verification list |
| `scripts/verify-seo.sh` | live-site verification |
| `scripts/prepare-archive-assets.mjs` | syncs `images/web` → `public/archive` at build (was broken) |
| `src/lib/analytics.ts` | `trackEvent` helper |
| `src/components/TrackedLink.tsx` | anchor that fires conversion events |
| `src/components/StructuredData.tsx` | JSON-LD, with integrity rules in the header comment |
| `src/app/sitemap.ts` | generated from `story-chapters.json` + `document-archive.json` |
| `public/llms.txt` | AI-assistant fact sheet |
