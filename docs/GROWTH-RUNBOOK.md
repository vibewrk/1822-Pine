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

## 2. Google Analytics 4 (10 minutes)

The site ships GA4 (`G-YYXHNWZ4PK`) and GTM (`GTM-N5XCRVPL`) — but the 2026-08
estate audit found no mapped GA property collecting data. Verify ownership:

1. Go to https://analytics.google.com → Admin.
2. Check whether a property with Measurement ID **G-YYXHNWZ4PK** exists in an
   account you control and shows traffic in **Realtime** while you browse the
   live site.
3. **If it's not yours / shows nothing:** create a new GA4 property → Web
   stream for `https://rittenhouseresidence.com`, copy the new `G-...` ID,
   and set it in Vercel as `NEXT_PUBLIC_GA_ID` (and `NEXT_PUBLIC_GTM_ID` if
   you rebuild the GTM container). Redeploy. No code change needed.
4. Mark the conversion events: Admin → Events → after first data arrives,
   toggle **ota_click** and **contact_submit** as key events. These fire from:
   - `ota_click` — every outbound Vrbo/Airbnb click (params: platform, location)
   - `contact_submit` — inquiry form success/error (params: status, inquiry_type)
   - `direct_email_click` — reserved for future mailto links
5. Link Search Console: Admin → Product links → Search Console.

## 3. Vercel Web Analytics (2 minutes)

Dashboard → project **rittenhouse-website** → **Analytics** tab → Enable.
The `@vercel/analytics` component is already in the layout; it activates the
moment the dashboard toggle is on. This gives cookie-free traffic data
immediately — useful while GA/GSC warm up.

## 4. Domain repairs — CORRECTED 2026-08-25 (GoDaddy, NOT Vercel)

An earlier draft of this section said to fix these in the Vercel dashboard.
**That is wrong, and following it would waste your time** — the two broken
domains are not in the Vercel team at all. Verified from a logged-in machine
on 2026-08-25:

| Domain | Nameservers | Behavior |
|---|---|---|
| rittenhouseresidence.com | `ns1/ns2.vercel-dns.com` (**Vercel**) | 200, canonical host — OK |
| www.rittenhouseresidence.com | Vercel | 307 → apex — OK |
| 1822pine.com | `ns29/ns30.domaincontrol.com` (**GoDaddy**) | 301 → **http://**rittenhouseresidence.com |
| therittenhouseresidence.com | `ns03/ns04.domaincontrol.com` (**GoDaddy**) | 301 → **http://**rittenhouseresidence.com |
| www.1822pine.com | none | NXDOMAIN — no record exists |

`vercel domains ls --scope rpcoding` returns 20 domains and **neither
`1822pine.com` nor `therittenhouseresidence.com` is among them.** Both resolve
to `3.33.251.168` / `15.197.225.128` and answer with `Server: awselb/2.0` —
that is GoDaddy's domain-forwarding service, not Vercel. So the insecure hop is
configured in GoDaddy and can only be changed there.

The actual chain today is two hops, the first one insecure:

```
http://1822pine.com  →301→  http://rittenhouseresidence.com  →→  https://rittenhouseresidence.com
```

This matters more than it looks: **`1822pine.com` is the domain Google actually
indexed.** Redirect equity passes through an unencrypted hop, and the forwarding
is a weaker, slower signal than a redirect served from the site's own edge.

### Fix — pick one

**Option A (recommended): move the domains onto Vercel.** Best SEO outcome and
it puts everything in one dashboard.

1. Vercel → project `rittenhouse-website` → Settings → Domains → Add
   `1822pine.com`, `www.1822pine.com`, `therittenhouseresidence.com`.
2. Vercel shows the records to create. In GoDaddy → the domain → DNS, either
   point the nameservers at `ns1.vercel-dns.com` / `ns2.vercel-dns.com`, or add
   the A/CNAME records Vercel gives you. Turn **off** GoDaddy Forwarding first —
   it overrides DNS records while it is on.
3. In Vercel, set each added domain to **Redirect to** `rittenhouseresidence.com`
   with status **308 Permanent**. Vercel then serves a single clean
   `https://` hop and issues certificates automatically.

**Option B (quick patch, ~5 min): keep GoDaddy, just make it HTTPS.**
GoDaddy → the domain → Forwarding → edit. Set the destination to
`https://rittenhouseresidence.com` (with the scheme) and forward type
**Permanent (301)**. Repeat for both domains. Add a forwarding entry or CNAME
for `www.1822pine.com` so it stops NXDOMAINing. This removes the insecure hop
but leaves you managing two dashboards.

**Either way, also:** add `1822pine.com` as its own property in Search Console
and use **Change of Address** → `rittenhouseresidence.com`. That is the only
mechanism that formally migrates indexed equity; a redirect alone is slower and
lossier.

*Note: GoDaddy has no usable CLI for forwarding config, and both accounts need
a browser login — these steps are yours to click, not something this repo can
automate.*

## 5. Contact-form email (10 minutes)

The form delivers via Resend to `1822pinestreetpa@gmail.com`.

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
