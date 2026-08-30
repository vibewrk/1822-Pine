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
> `bash scripts/verify-seo.sh` to capture the live baseline (expect ~10 pass /
> 25 fail — production has not shipped this work yet).
>
> Then, in order:
> 1. Open the PR for branch claude/review-pine-homepage-011CUe7HDMPLe3UWXpKpUQHe
>    with `gh`. Merging it to main auto-deploys production — the repo and the
>    Vercel project are already connected, so nothing needs repointing.
> 2. After the deploy goes READY, re-run `bash scripts/verify-seo.sh` and show
>    me the diff against the baseline.
> 3. Then walk me through the account setup in the runbook — Search Console
>    first, then GA4, Vercel Analytics, the two broken domain redirects, and
>    Resend. Use my gh and vercel CLIs where you can; stop and ask me when a
>    step needs a browser login.
>
> Everything in this branch was already verified on a Vercel preview build, so
> treat the code as working and focus on shipping plus the account setup.

That's the whole handoff. Everything below is detail.

---

## Where things stand

| | Status |
|---|---|
| Branch | merged |
| Build | Clean — 101 static pages, 0 TS errors, 0 lint errors |
| PR | [#14](https://github.com/vibewrk/1822-Pine/pull/14) — **MERGED 2026-08-25** via verified merge commit `faffa44` |
| Deployed | **YES.** Production built in 43s and is serving this work |
| Live result | `bash scripts/verify-seo.sh` → **31 pass / 4 fail** (was 10 / 25) |

### Post-deploy verification, 2026-08-25

Twenty-one checks flipped from FAIL to PASS on the first deploy. Confirmed
against the live domain, not a preview:

- per-route canonicals correct on `/`, `/stay`, `/rates`, `/faq`, `/book`,
  `/gallery`, `/history` — the sitewide duplicate-content suppressor is gone
- `sitemap.xml` is valid XML with 95 URLs, all 63 document pages present, no
  dead story slugs
- history archive images serve 200 both raw and through `next/image`
  (spot-checked across the collection) — the ~130 broken images are fixed
- `robots.txt` allows GPTBot / ClaudeBot / PerplexityBot / OAI-SearchBot;
  `/llms.txt` serves 200
- schema clean: no fabricated review, no `starRating`, no "Free parking"
- homepage says "Sleeps 16", no "coming soon" anywhere
- logo 51KB, TTFB 0.056s, contact API validates

**Update 2026-08-27: the domain and analytics items are all now DONE.**
`scripts/verify-seo.sh` reports **46 pass / 0 fail** against production. The
domains are on Vercel nameservers serving single-hop, path-preserving 308s to
`rittenhouseresidence.com` (the canonical site), and Vercel Analytics is
enabled. The only domain task left is Search Console **Change of Address** for
`1822pine.com`, which needs a Google login — see `GROWTH-RUNBOOK.md` §4.

Also confirmed 2026-08-25: `rittenhouseresidence.com` has **no TXT records at
all**, so Search Console has never been verified by DNS — the token stored at
`public/google-site-verification.txt` was never published. There are also no MX
records, so the Resend setup in §5 starts from a clean slate.

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
2. **GA4** — **RESOLVED 2026-08-25.** Production uses the owned 1822 Pine
   stream `G-ZCR1ZQVTKH`; the dead `G-YYXHNWZ4PK` value remains only as a
   source-code fallback and is overridden in Vercel. Mark only
   provider-confirmed `generate_lead` as the direct-inquiry key event. Keep
   `ota_click`, `inquiry_accepted`, and CTA clicks as diagnostic events; remove
   the legacy `contact_submit` key event.
3. **Vercel Analytics** — one toggle; the component is already in the layout.
4. **Domain redirects — DONE (verified 2026-08-27).** `1822pine.com`,
   `www.1822pine.com` and `therittenhouseresidence.com` are all on Vercel
   nameservers and serve single-hop, path-preserving **308s** to
   `rittenhouseresidence.com`. No GoDaddy work remains. The one open item is
   Search Console **Change of Address** for `1822pine.com` (runbook §4) — the
   redirect passes equity, but Change of Address formally migrates it.

5. **Resend — RESOLVED.** The verified domain sender, production recipient,
   sending-only API key, and dedicated `CONTACT_FORM_SECRET` are configured.
   The live Vercel Firewall now adds a global 10-POSTs-per-IP-per-10-minutes
   ceiling in front of BotID and the application checks.

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

## Deploy topology — CORRECTED 2026-08-24

An earlier draft of this file warned that Vercel builds from a *different*
repo (`vibewrk/1822-Pine`) and that merging here would not deploy. **That was
wrong.** Verified via the Vercel API:

- `ragurob/1822-Pine` and `vibewrk/1822-Pine` are the **same repository** —
  GitHub repo id `1047452068` for both. One name is a rename/redirect alias,
  and Vercel still stores the older org name in deployment metadata.
- Vercel project `rittenhouse-website`
  (`prj_apj9caF9tFggcQU97TJAPKRWraJV`, team `RPCoding`) is connected to it and
  **auto-deploys every push to this branch as a preview.**

So: **merging the PR to `main` will deploy to production automatically.** No
repo repointing needed. Nothing else to reconcile.

### Preview deployments already built from this branch

| Commit | Deployment | State |
|---|---|---|
| `1daf020` handoff + verify script | `dpl_C4j6dtnLC9zeadBeA2x4skGqmmA4` | READY |
| `75df49a` sleeps 16 | `dpl_5UCvqZbX7oBpX5F9GX7daeBt5JyR` | READY |
| `a439260` runbook | `dpl_DTdHRzUmUp8vprQfoXkCh8tF3vcE` | READY |

Branch preview alias:
`rittenhouse-website-git-claude-review-pine-home-53f122-rpcoding.vercel.app`
(Vercel Authentication is on, so you need to be logged in — or generate a
temporary share link from the Vercel dashboard.)

**Production is still commit `bc64353`** (`dpl_5n8acRenLjTqd7XwjCvqBUMg9reg`,
deployed ~2026-07-27). That is why `scripts/verify-seo.sh` fails against the
live domain — production has none of this work yet.

### Verified on the preview build (2026-08-24)

Every fix confirmed working on real Vercel infrastructure, not just locally:

- **archive images return 200** — the build-script fix works in CI, which is
  exactly where it used to hard-skip and ship ~130 broken images
- per-route canonicals correct on `/`, `/rates`, `/faq`, `/book`, `/history`
- sitemap: 95 URLs including all 63 document pages
- `robots.txt` allows GPTBot; `/llms.txt` serves 200
- no fabricated review, no `starRating`, no "Free parking", no "coming soon"
- "Sleeps 16" throughout; logo 52,796 bytes

### Gotcha: this project requires VERIFIED commits (found 2026-08-25)

The Vercel project has the **verified-commits** Git setting switched on. Any
push whose head commit is not cryptographically verified by GitHub is
**cancelled at 0ms, before the build starts.** It surfaces as a red "Vercel"
check on the PR with the description *"Canceled from the Vercel Dashboard"* —
which reads like a human cancelled it, or like a build failure. It is neither.

Confirm it with:

```bash
gh api repos/vibewrk/1822-Pine/commits/<sha> --jq .commit.verification
```

`verified: false` on the head commit is the cause. The deployment record also
carries `errorLink: .../git-settings#verified-commits`.

Why the cloud session never hit this: its commits were authored as
`Claude <noreply@anthropic.com>` **through the GitHub API**, and GitHub signs
those server-side — they all show `verified: true (valid)`. A plain
`git commit && git push` from a local machine does not.

What does and does not work from a local machine:

| Approach | Verified? |
|---|---|
| `git commit` unsigned | no |
| `git commit -S` with an SSH key registered to a *different* GitHub account than the commit email resolves to | no — `reason: unknown_key` |
| GitHub Contents API via a user OAuth token (`gh api --method PUT .../contents/...`) | no — `reason: unsigned` |
| Merge commits GitHub creates when you merge a PR | **yes** — every merge commit in this repo's history is `verified: true` |

**Practical consequence:** unverified commits on a feature branch only cost you
the preview build. Merging the PR still deploys production correctly, because
GitHub creates and signs the merge commit itself. So a red Vercel check caused
by this is not a reason to hold the merge — but do verify the code some other
way first, e.g. `npm run build` plus
`SITE=http://localhost:3111 bash scripts/verify-seo.sh` against a local
`next start`.

To get verified commits locally, sign with an SSH key registered **to the same
GitHub account that the commit's author email resolves to**, and add it as a
*signing* key (not just an auth key) at
https://github.com/settings/keys.

### To ship

1. Open and merge the PR:
   https://github.com/ragurob/1822-Pine/compare/main...claude/review-pine-homepage-011CUe7HDMPLe3UWXpKpUQHe
2. Vercel auto-deploys `main` to production.
3. Run `bash scripts/verify-seo.sh` — should flip from 10/25 to near-all-pass.
4. Two checks will still fail until you act in the dashboard: **Vercel
   Analytics** (toggle) and the **domain redirects** (DNS). See the runbook.

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
