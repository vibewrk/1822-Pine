# Growth Runbook — rittenhouseresidence.com

The 15-minute owner setup that turns the site's measurement on, plus the
recurring loop for growing direct-booking revenue. Written 2026-08-24 as part
of the SEO/AEO overhaul.

**State when written:** the site was completely unmeasured — not verified in
Google Search Console, GA property unmapped (per the portfolio measurement
estate audit of 2026-08-02), Vercel Web Analytics off, and zero conversion
events. The code side is now fixed; the steps below are the parts only an
account owner can click.

---

## 1. Google Search Console (10 minutes) — DO THIS FIRST

Nothing else in SEO can be evaluated until this exists.

1. Go to https://search.google.com/search-console → **Add property**.
2. Choose **Domain** property. Enter: `rittenhouseresidence.com`.
3. Google shows a **TXT record** (`google-site-verification=...`).
   Add it in your DNS (the domain's nameservers — likely Vercel:
   Vercel Dashboard → Domains → rittenhouseresidence.com → DNS Records →
   Add → type TXT, name `@`, paste the value).
   - Note: `public/google-site-verification.txt` in this repo holds a
     previously generated token in TXT-record format
     (`hp1919Olan1nBP5uTHtnVAwE8Yhe8sfFDMAZceYk2XE`) — if Search Console
     still shows that token for this property, reuse it; otherwise use the
     fresh one Google displays.
4. Click **Verify** (DNS can take a few minutes to propagate).
5. In Search Console → **Sitemaps** → submit `https://rittenhouseresidence.com/sitemap.xml`.
6. **Alternative (no DNS access):** create a **URL-prefix** property for
   `https://rittenhouseresidence.com` and pick the **HTML tag** method. Copy
   the `content="..."` value and set it in Vercel as the env var
   `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION`, then redeploy — the site now
   emits the meta tag automatically. Click Verify.

After verification, expect 2–4 weeks before meaningful query data appears.

## 2. Google Analytics 4 — RESOLVED 2026-08-25

**The mystery of the dead tag is solved.** The site hardcoded `G-YYXHNWZ4PK`,
which belongs to no property in your account — that is why the 2026-08 estate
audit found nothing collecting. The property you actually own was found via the
Analytics Admin API (through the `answers-network-analytics` service account):

| | |
|---|---|
| Account | RPLogic New Analytics (`accounts/170285992`) |
| Property | **1822 Pine** (`properties/360860668`) |
| Web stream | `G-ZCR1ZQVTKH`, created 2023-03-30 for `https://1822pine.com` |

`NEXT_PUBLIC_GA_ID=G-ZCR1ZQVTKH` is now set in Vercel (all three
environments) and production has been redeployed — the live site serves the
correct tag, confirmed by fetching the homepage. Data collects from the next
real visitor.

**Still to do, in the GA UI (the service account only has read access):**

1. Admin → Data streams → the stream still says `1822pine.com` as its default
   URL and "1822 Pine" as its name — update to `https://rittenhouseresidence.com`
   (cosmetic, but keeps reports coherent).
2. After first data arrives: Admin → Events → toggle **ota_click** and
   **contact_submit** as key events. (API attempts returned 403 — the service
   account would need Editor on the account for this to be automatable.)
3. Optional: grant `answers-network-analytics@answers-network.iam.gserviceaccount.com`
   **Editor** on the GA account, and future sessions can manage all of this
   headlessly.
4. Link Search Console: Admin → Product links → Search Console.

## 3. Vercel Web Analytics — ALREADY ENABLED (verified 2026-08-25)

No action needed. The project has a Web Analytics store
(`webAnalytics.id` present on the project record) and the live site serves
`/_vercel/insights/script.js` with 200. Earlier "not active" reports came from
a broken check: the `<Analytics />` component injects its tag client-side
after hydration, so grepping server HTML always misses it. `verify-seo.sh`
now probes the insights endpoint instead. The analytics data store
materialises with the first real browser visit (curl checks don't run JS,
so they never registered).

## 4. Domains — RESOLVED 2026-08-27. Nothing left to do.

**`rittenhouseresidence.com` is the canonical site, and every other domain now
redirects to it correctly.** Verified live 2026-08-27:

| Domain | Nameservers | Behavior |
|---|---|---|
| rittenhouseresidence.com | Vercel | 200, canonical host |
| www.rittenhouseresidence.com | Vercel | redirects to apex |
| 1822pine.com | `ns1/ns2.vercel-dns.com` | **308 → https://rittenhouseresidence.com**, one hop, path-preserving |
| www.1822pine.com | Vercel | **308 → apex**, one hop, path-preserving |
| therittenhouseresidence.com | `ns1/ns2.vercel-dns.com` | **308 → apex**, one hop, path-preserving |
| www.therittenhouseresidence.com | Vercel | **308 → apex** |

The GoDaddy migration described in earlier drafts of this section **has been
completed** — the domains are off GoDaddy forwarding (`Server: awselb/2.0`)
and on Vercel nameservers serving proper 308s. The insecure `http://` hop is
gone. Deep links survive: `https://1822pine.com/rates` →
`https://rittenhouseresidence.com/rates`.

`scripts/verify-seo.sh` now checks resolution, single-hop, https, and path
preservation for all three redirecting hosts, and all four checks pass for
each.

> **Note on a phantom failure.** Until 2026-08-27 this script reported
> "www.1822pine.com does NOT resolve" on macOS even though DNS was correct.
> The check used `getent`, which is glibc-only; on macOS the name is shadowed
> by `ugrep`, which exits 1 for *every* host — including google.com. The check
> is now portable (`host` / `dig` / python fallback). If you saw that failure
> in an older report, it was never real.

### The one domain task still open — and it needs your Google account

**Search Console "Change of Address."** `1822pine.com` is the domain Google
historically indexed. A 308 redirect passes equity, but Change of Address is
the only mechanism that formally *migrates* it, and it is faster and less
lossy:

1. Search Console → add `1822pine.com` as its own property (Domain type; the
   DNS TXT record goes in Vercel now, not GoDaddy).
2. Settings → **Change of Address** → select `rittenhouseresidence.com` as the
   destination → Validate & Update.
3. Google verifies the redirects itself (they already pass) and keeps the
   old property's data visible for ~180 days.

Do the same for `therittenhouseresidence.com` if it has any index history.

## 5. Contact-form email (10 minutes)

The form delivers via Resend to `1822pinestreetpa@gmail.com`.

> **URGENT, found 2026-08-25: the `RESEND_API_KEY` in Vercel production is
> INVALID.** The Resend API rejects it ("API key is invalid") — it was
> presumably rotated or revoked at some point. The live contact form cannot
> deliver email right now (it fails loudly with the direct-email fallback, so
> inquiries aren't silently lost, but they aren't arriving either). Create a
> new key at https://resend.com/api-keys and replace the env var:
> `printf 'NEW_KEY' | vercel env add RESEND_API_KEY production` (remove the
> old one first: `vercel env rm RESEND_API_KEY production`), then redeploy.

1. Confirm `RESEND_API_KEY` is set in Vercel env (all environments). The
   route now returns a visible error with a direct-email fallback instead of
   silently pretending success when the key is missing — but it still needs
   the key to actually deliver.
2. In https://resend.com → Domains → add `rittenhouseresidence.com`, add the
   DKIM/SPF records it shows (again in Vercel DNS), then set the Vercel env
   var `CONTACT_FROM_EMAIL` to e.g.
   `The Rittenhouse Residence <inquiries@rittenhouseresidence.com>`.
   Until then the sandbox sender only reliably delivers to the Resend account
   owner's own inbox.
3. Optional: `CONTACT_TO_EMAIL` overrides the destination inbox.
4. Send yourself a test inquiry from the live site and confirm receipt.

## 6. Environment variables — ACTUAL STATE as of 2026-08-25

Read live from `vercel env ls` on project `rpcoding/rittenhouse-website`:

| Var | Set? | Environments | Purpose / action |
|---|---|---|---|
| `RESEND_API_KEY` | **YES** | **Production only** | Contact form delivery. Present in Production, so the live form can send. Not set for Preview/Development, so the form fails loudly on preview builds — that is the intended behavior, not a bug, but add it to Preview if you want to test inquiries there. |
| `NEXT_PUBLIC_SUPABASE_URL` | YES | Production | Legacy, unrelated to this work — left alone |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | YES | Production | Legacy, unrelated to this work — left alone |
| `CONTACT_FROM_EMAIL` | **NO** | — | Set after verifying the domain in Resend (§5). Until then the sandbox sender only reliably reaches the Resend account owner's inbox. |
| `CONTACT_TO_EMAIL` | no | — | Optional; overrides the destination inbox |
| `NEXT_PUBLIC_GA_ID` | **NO** | — | Not set, so the build falls back to the hardcoded `G-YYXHNWZ4PK`. If §2 shows you do not own that property, set this to your own ID and redeploy. |
| `NEXT_PUBLIC_GTM_ID` | no | — | Falls back to hardcoded `GTM-N5XCRVPL` |
| `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION` | **NO** | — | Only needed if you verify Search Console by HTML tag instead of DNS (§1, option 6) |

To add one from a terminal instead of the dashboard:

```bash
vercel env add CONTACT_FROM_EMAIL production
```

Changing any `NEXT_PUBLIC_*` var requires a redeploy to take effect — they are
inlined at build time, not read at runtime.

## 7. Content facts the owner must confirm (surfaced by the 2026-08 audit)

These are published claims with weak or contradictory sourcing. Verify and
correct (or confirm) each — they affect trust, and some affect compliance:

1. ~~**"Sleeps 21."**~~ **RESOLVED 2026-08-24 (owner-confirmed): the house
   sleeps 16.** Corrected sitewide — homepage, /stay, /rates, /book, /faq,
   BookingCTA, root metadata, JSON-LD occupancy, and /llms.txt. This matches
   the 8-bedroom inventory (2 king + 6 queen) and the Airbnb listing.
   *Note:* dining copy that read "seats 21" was aligned to 16 in the same
   pass. If the table genuinely seats more than the sleeping capacity (day
   guests), tell me and I'll split the two numbers back apart.
2. **STR license number — IN PROGRESS (renewal underway as of 2026-08-24).**
   The site claims "Licensed Philadelphia short-term rental" but publishes no
   number; Philadelphia requires the license number to be displayed on
   listings/ads. Once the renewal issues, add the number in exactly two
   places and it will propagate: the `trustItems` array in
   `src/app/page.tsx` (e.g. "Philadelphia STR License #XXXXXX") and the
   footer line in `src/components/layout/Footer.tsx`. Consider also adding
   it to the JSON-LD as a `license` field on the LodgingBusiness node.
   The Airbnb listing text currently ends with "Registration Details
   903781" — confirm whether that is the same number.
3. **Spencer family naming.** The repo's own research
   (DEEP-RESEARCH-REPORT.md) says the 1893 purchaser/1896 decedent was
   **Graham** Spencer and "Howard" was the young son who died in 1891; the
   story chapters and timeline still say Howard throughout. The /history
   landing page has been neutralized to "the Spencer family" — chapters need
   an editorial pass against the deed scans.
4. **Suffrage tax-resistance year**: research says December **1913**, some
   legacy content says 1911.
5. **Drexel framing.** Verified: the first owners' daughter Ellen married
   Anthony J. Drexel (1850). "Home to Drexel banking heirs" on the homepage
   overstates it; consider "with a documented Drexel family connection."
6. **Review figures (4.89 / 93)** have no as-of date. Recheck quarterly and
   update `src/components/StructuredData.tsx`, `src/app/page.tsx`, and
   `src/components/BookingCTA.tsx` together.
7. **Zoning:** the (deliberately unpublished) 2022 property certificate
   registers the property as multi-family, five dwelling units, zoning RM1.
   Confirm with counsel that current STR licensing matches actual use; keep
   the certificate out of the public archive (it already is).

## 8. Weekly loop (15 min/week once instrumented)

1. GSC → Performance: which queries/pages earn impressions; fix titles where
   CTR lags position.
2. GA4 → key events: `ota_click` count by platform/location tells you which
   CTAs and pages sell; `contact_submit` measures direct-inquiry demand.
3. Vercel Analytics: top pages and referrers.
4. One content improvement per week: a new FAQ answer, a refreshed photo, a
   neighborhood entry. The history archive (63 documents, 14 chapters) is the
   compounding SEO asset — interlink it and keep it healthy.

## 9. What was shipped in the 2026-08 overhaul (context for future devs)

- Canonical catastrophe fixed: root layout declared `canonical: "/"`
  sitewide (every page told Google it was a duplicate of the homepage).
  Per-route canonicals added everywhere.
- Sitemap regenerated from data: previously 10 of 14 story URLs 404'd and 10
  real chapters + all 63 document pages were missing.
- `/history` archive imagery restored: the build script pointed at a folder
  outside the repo and skipped CI entirely, shipping ~130 broken images.
- Schema cleaned: fabricated "Recent Guest" review, fake 5-star
  `starRating`, and false "Free parking" removed; bed inventory and
  check-in/out corrected; `sameAs` OTA links added.
- AI-chat visibility: `/llms.txt` fact sheet; robots.ts explicitly allows
  GPTBot, ClaudeBot, PerplexityBot, Google-Extended, and peers.
- Conversion instrumentation: `ota_click` on all outbound Vrbo/Airbnb links,
  `contact_submit` on the form; "Direct booking is coming soon" dead-ends
  replaced with a 24-hour direct-inquiry promise sitewide.
- Contact API hardened: fails loudly instead of fake-success when
  unconfigured; honeypot added; env-configurable sender/recipient.
- Media: 30+ generic/wrong alt texts rewritten from actual photo review;
  3.1MB header logo reduced to 52KB; `sizes` added to 23 fill images;
  neighborhood page gained a six-photo band from unused assets; one
  personal photo (identifiable person) removed from public assets.
