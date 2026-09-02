# Search Growth Strategy — The Rittenhouse Residence

**Prepared:** 2026-08-30
**Status:** Research complete; organic and AI work may begin. Paid campaigns remain paused drafts.
**Business outcome:** More qualified whole-house inquiries and bookings, not more undifferentiated traffic.
**Truth input:** [`SITE-TRUTH.md`](SITE-TRUTH.md), revision
`rr-site-2026-09-02.2`. Metrics below are dated observations, not a current
provider read.

## Decision

Do not organize the program around the broad phrases **“Rittenhouse rentals,”
“Rittenhouse vacations,”** or **“Rittenhouse hotels.”** They describe three
different markets:

- “Rittenhouse rentals” is dominated by apartments, leases, Zillow, and other
  long-term housing results.
- “Rittenhouse hotels” is dominated by The Rittenhouse Hotel, major hotel
  brands, Visit Philadelphia, Booking.com, and Tripadvisor.
- “Rittenhouse vacations” is not a precise lodging category.

The defensible commercial position is:

> **An eight-bedroom, whole-home Philadelphia vacation rental for groups of up
> to sixteen, two blocks from Rittenhouse Square.**

That is both truthful and unusually scarce. Sampled August 2026 search results
already showed the Residence prominently for exact-capacity searches. Broad
marketplace terms remain much harder and less qualified.

## First-party baseline

### Google Search Console, August 1–28, 2026

| Metric | Result |
|---|---:|
| Clicks | 44 |
| Impressions | 1,032 |
| CTR | 4.3% |
| Average position | 21.2 |
| Queries reported | 106 |

The query mix is currently dominated by neighborhood and historical intent:
“Rittenhouse Square neighborhood guide,” “Rittenhouse Square,” and related
variants. Commercial whole-house and group-lodging phrases are largely absent.

The homepage earned 34 clicks and 486 impressions. The neighborhood page earned
273 impressions, while the story, floor-plan, and Philadelphia-events pages
also received early visibility. This is a **commercial-intent gap**, not a
crawl failure.

### Indexing and sitemap

- `/sitemap.xml` was successfully read by Google on August 30, 2026.
- Google discovered 107 URLs from it.
- The Page Indexing summary was last refreshed August 20 and lagged the live
  Performance report, which already showed impressions for 21 URLs.

An inspected URL saying “no referring sitemap” can be a timing/reporting state;
it does not describe the current sitewide sitemap status.

### Google generative-AI visibility

Google's dedicated Generative AI report shows **119 impressions** in the same
28-day period:

| Page | AI impressions |
|---|---:|
| Homepage | 61 |
| Neighborhood | 35 |
| Philadelphia events | 10 |
| History story | 7 |
| Rittenhouse Square | 3 |
| Floor plans | 3 |
| Rates | 2 |

### GA4, August 2–29, 2026

| Channel | Sessions | Engagement rate | Average engagement |
|---|---:|---:|---:|
| Organic Search | 20 | 75% | 3m 29s |
| AI Assistant | 1 | 100% | 11s |

The AI-assistant referral was from `chatgpt.com`. Organic volume is still tiny,
but its engagement is substantially better than the current direct bucket.
Historical key-event data is not a trustworthy lead baseline because click and
generic-contact events were previously marked as key events. As of August 30,
only a server-accepted quote inquiry emits and counts `generate_lead`.

## Priority keyword map

Search volume and CPC are deliberately omitted until Google Keyword Planner is
available. Priority uses four transparent proxies: booking specificity, SERP
composition, supply scarcity, and likely reservation value.

### Tier 1 — capacity-led booking intent

| Query family | Primary page | Organic | Paid search | Notes |
|---|---|---:|---:|---|
| `8 bedroom vacation rental philadelphia` | `/` | Yes | Exact + phrase | Strongest differentiator; `/stay` supports the property tour |
| `philadelphia vacation rental sleeps 16` | `/` | Yes | Exact + phrase | High fit and sampled visibility |
| `philadelphia house rental sleeps 16` | `/` | Yes | Exact + phrase | Must include short-stay context |
| `vacation rental for 16 guests philadelphia` | `/` | Yes | Exact + phrase | Capacity-qualified |
| `large group vacation rental philadelphia` | `/groups` | Yes | Exact + phrase | Marketplace competition |
| `whole house vacation rental philadelphia` | `/groups` | Yes | Exact + phrase | Reinforce exclusive whole-house use |
| `entire house vacation rental philadelphia` | `/groups` | Yes | Exact + phrase | Reinforce no room-by-room booking |

### Tier 2 — location and property type

| Query family | Primary page | Organic | Paid search | Notes |
|---|---|---:|---:|---|
| `rittenhouse square vacation rental` | `/rittenhouse-square/where-to-stay` | Yes | Limited test | OTA/category intent |
| `rittenhouse square large group vacation rental` | `/groups` | Yes | Exact + phrase | Strong property fit |
| `center city philadelphia vacation rental large group` | `/groups` | Yes | Exact + phrase | Strong location + fit |
| `philadelphia mansion vacation rental` | `/` | Yes | Phrase test | Exclude event/venue intent |
| `historic townhouse vacation rental philadelphia` | `/stay` | Yes | Organic first | Helpful differentiation |
| `philadelphia hotel alternative for groups` | `/hotel-alternative` | Yes | Exact + phrase | Truthful comparison positioning |

### Tier 3 — occasion-led demand

| Query family | Primary page | Organic | Paid search | Notes |
|---|---|---:|---:|---|
| `wedding party lodging philadelphia` | `/groups/weddings` | Yes | Exact + phrase | Overnight lodging only |
| `wedding guest accommodations philadelphia` | `/groups/weddings` | Yes | Exact + phrase | Avoid venue ambiguity |
| `wedding weekend lodging rittenhouse square` | `/groups/weddings` | Yes | Exact + phrase | High-fit local long tail |
| `family reunion vacation rental philadelphia` | `/groups` initially | Yes | Exact + phrase | Candidate dedicated page |
| `multi family vacation rental philadelphia` | `/groups` | Yes | Phrase | Verify search terms for housing leakage |
| `small team offsite lodging philadelphia` | `/groups` | Yes | Small experiment | Lodging, never meeting venue |
| `corporate retreat lodging center city philadelphia` | `/groups` | Yes | Small experiment | Lodging-only qualification |
| Philadelphia graduation group lodging | Future seasonal guide | Yes | Seasonal test | Publish only with verified proximity facts |

### Queries to support, not chase

- `where to stay near Rittenhouse Square`
- `Rittenhouse Square neighborhood guide`
- `things to do near Rittenhouse Square`
- `Rittenhouse Square hotels for large groups`
- `historic house stay Philadelphia`

These pages can introduce the house naturally and pass visitors toward
commercial pages, but should not displace the capacity-led booking program.

## Paid-search negatives

Start with theme-level negatives and review the actual search-term report every
week.

- Long-term housing: `apartment`, `monthly`, `lease`, `student`, `roommate`,
  `sublet`, `section 8`, `zillow`, `realtor`, `for sale`, `property management`.
- Venue/equipment: `wedding venue`, `reception venue`, `event space`, `ballroom`,
  `party rental`, `tent rental`, `chair rental`, `table rental`, `photo shoot`.
- Unsafe or wrong use: `party house`, `events allowed`, `hourly rental`,
  `day rental`.
- Wrong product: `hostel`, `dorm`, `extended stay`, `cheap`, `free`, `Poconos`,
  `Jersey Shore`, `Atlantic City`.

Do **not** negate `party` by itself; “wedding party lodging” is valuable.

## Organic campaign

### Phase 1 — clarify the pages already built

1. Make the homepage title and opening copy explicitly say “Philadelphia
   vacation rental,” “whole home,” eight bedrooms, and sleeps sixteen.
2. Give `/groups` the primary phrase “large group lodging in Philadelphia.”
3. Give `/groups/weddings` the primary phrase “wedding guest lodging in
   Philadelphia,” while preserving its prominent lodging-only disclaimer.
4. Give `/hotel-alternative` the primary phrase “Philadelphia hotel
   alternative for groups.”
5. Strengthen titles for `/stay` and `/stay/rooms` around the truthful
   eight-bedroom inventory.
6. Link neighborhood, where-to-stay, events, and history readers into the most
   relevant booking-intent page. Links should be editorially useful, not a
   repeated keyword block.

### Phase 2 — add only distinct, owner-led content

- Create a family-reunion page only when it can contain genuinely distinct
  planning value: bedroom assignment, shared meals, multigenerational stairs,
  nearby low-mobility activities, arrival logistics, and quiet-hours fit.
- Create a graduation-weekend guide seasonally, with verified travel times and
  a clear statement that the house is lodging rather than an event venue.
- Treat corporate-offsite lodging as an experiment. Do not imply the property
  is a meeting, coworking, or event venue.
- Use the forthcoming renovated-house photography across commercial pages with
  descriptive captions and consistent, stable image URLs.

Do not generate one page per wording variant. Google explicitly warns against
scaled, low-value query pages; its generative systems understand related
wording without exact-match duplication.

## AI-discovery campaign

### What is already working

- Google reports 119 generative-AI impressions.
- ChatGPT has already referred one tracked visitor.
- `robots.txt` permits Googlebot, OAI-SearchBot, ChatGPT-User, PerplexityBot,
  and the other named crawlers while excluding `/api/`.
- The homepage exposes accurate, privacy-preserving LodgingBusiness/House
  structured data.
- The site contains unusual first-party material: the owner's house knowledge,
  a documented history, floor plans, neighborhood guidance, and dated event
  information.

### Program

1. Keep visible facts consistent across the website, Airbnb, Vrbo, Hospitable,
   social profiles, and any eligible travel feeds: name, URL, whole-home status,
   eight bedrooms, sleeps sixteen, bathroom count, rules, and location wording.
2. Publish non-commodity, owner-led answers that a travel assistant can cite:
   realistic group planning, room allocation, stairs, luggage arrival, dining
   for sixteen, wedding-guest logistics, and what the house is not suited for.
3. Earn real third-party corroboration from relevant local and travel sources:
   wedding venues referring guest lodging, university-family resources,
   neighborhood organizations, historic organizations, and legitimate travel
   editors. Never buy or fabricate mentions.
4. Add the new photography with useful visible captions, alt text, and image
   context. Google generative search can surface image and video content.
5. Keep event and neighborhood facts dated and maintained. Consider IndexNow
   and Bing Webmaster Tools for faster Bing/Copilot freshness after the core
   content program is stable.
6. Maintain accessible navigation, forms, labels, and buttons so browser agents
   can understand the quote path. Never expose stay dates, access details, or
   security-device information to make an agent flow easier.

### Google Travel distribution through Hospitable

Hospitable's current August 2026 documentation establishes a practical Google
Vacation Rentals route for this one property. Eligible Direct properties
on a Professional or Mogul subscription can be scoped from **Direct Bookings →
Google Vacation Rentals**. Hospitable sends the property, rates, availability,
and direct property URL to Google; Google's review normally takes two to four
weeks and may take up to 30 days.

This route requires a completed Direct setup, payout method, full address,
complete property record, an entire-property stay of no more than 30 days, and
at least eight high-resolution landscape photos with at least one photo per
room. A self-hosted site needs a unique property page and the current Hospitable
widget (or a supported API-built widget). Hospitable replaced its static iframe
with a dynamic loader in August 2026 so dates selected on Google carry into the
booking flow; older widget code must be replaced.

Use this certified distribution route instead of a custom Hotel Center/TAM
integration. Keep the website's public location privacy boundary: the full
address can be supplied privately through Hospitable's feed while public
marketing/schema remains block-level. Do not restore Google-specific
`VacationRental` markup with public coordinates merely to chase a rich result.

### Myths to reject

- `llms.txt` is not a Google ranking requirement. Keep the existing file
  accurate, but do not treat it as a growth lever.
- There is no special “AI schema” that unlocks Google AI answers.
- Repeating keywords or creating hundreds of AI-written pages is not an AI
  visibility strategy.
- A crawler being allowed does not guarantee citation or ranking.

## Recurring AI visibility prompts

Test monthly in a clean, documented environment. Record whether the Residence
is mentioned, the cited URLs, factual errors, and competitors—not merely rank.

- “Where can 12–16 people stay together near Rittenhouse Square?”
- “What is a good whole-house alternative to booking eight Philadelphia hotel
  rooms?”
- “Find an eight-bedroom Philadelphia vacation rental for a family reunion.”
- “Where can a wedding party stay together near Center City Philadelphia?”
- “Recommend a historic Philadelphia townhouse stay for sixteen guests.”
- “What large-group lodging near Rittenhouse Square has a dining table for the
  whole group?”
- “Where can a small leadership team stay together in Philadelphia if meetings
  are held elsewhere?”
- “Compare The Rittenhouse Residence, The Deacon, and a Rittenhouse hotel block
  for an overnight group.”

## Paused Google Ads draft

No spend should begin until Keyword Planner volume/CPC, conversion import, and
landing-page QA are complete.

| Campaign | Share of test budget | Ad groups |
|---|---:|---|
| PHI — Whole House — Capacity | 55% | 8 bedrooms; sleeps 16; large group; whole house |
| PHI — Rittenhouse — Whole House | 20% | Rittenhouse Square; Center City; hotel alternative |
| PHI — Occasion Lodging | 20% | Wedding guests; family reunion |
| Brand + Offsite Experiment | 5% | Brand; lodging-only team test |

Those percentages describe the eventual account structure, not the first tiny
test. With a $150 total cap, launch **only PHI — Whole House — Capacity** and
leave the other three campaigns paused; splitting a very small budget would
starve every campaign of useful evidence.

Launch rules:

- Exact and phrase match only; no broad match initially.
- Nationwide eligibility with Philadelphia-bearing queries rather than a
  Philadelphia-only audience. Many planners live elsewhere.
- Do not bid on competitor brands in the first test.
- Ads must self-qualify with eight bedrooms, sleeps sixteen, a standard
  two-night minimum (with some dates requiring longer stays), whole-house use,
  and no events/parties where space permits.
- Primary optimization event: provider-accepted `generate_lead` for quote
  requests. OTA clicks are diagnostic, not direct-booking conversions.
- Review search terms and negatives weekly. Judge success using qualified-lead
  rate and eventual booked value, not CTR alone.
- Keep the campaign paused until a small owner-approved daily or total cap is
  recorded. A suggested learning envelope is **$150 total over 30 days**, but
  it is not authorized merely by appearing in this plan.

Meta prospecting should wait for the renovated-house photo set. The current
phase can prepare audiences, copy angles, UTMs, and creative briefs without
spend.

### Promotional-credit decision

Treat credits as a bonus, not as assumed campaign funding. A new
`rittenhouseresidence.com` account would not make this a new advertiser if the
same property/business previously advertised through `1822pine.com`. Google's
US terms limit introductory offers to eligible new advertisers and one offer
per advertiser; creating another account solely to obtain a second credit is
not an approved strategy. Recover the prior account first and inspect **Billing
→ Promotions** for any account-specific reactivation offer.

Meta does not publish a universal US new-account credit. Credits are selective
promotions, refunds, or partner offers, and their individual terms control.
Neither platform's credit should override the owner-approved total cap; both
can continue billing after a credit is exhausted unless campaigns are paused
or protected by an account spending limit.

## 30/60/90-day operating plan

### Days 0–30

- Ship Phase 1 page targeting and internal-link improvements.
- Request recrawls for the six commercial pages after deployment.
- Pull Keyword Planner volume/CPC and finalize the paused Ads build sheet.
- Establish weekly GSC query/page and `generate_lead` review.
- Correct stale search snippets by recrawling; do not change current accurate
  facts to match cached results.

### Days 31–60

- Publish one genuinely useful family-reunion planning page.
- Replace priority commercial imagery with the renovated-house photo set.
- Begin legitimate partner/citation outreach.
- If measurement and owner budget approval are complete, run the tightly capped
  capacity-led Search test.

### Days 61–90

- Expand only the keyword/ad group combinations that produced qualified leads.
- Add the seasonal graduation guide if timing and source material justify it.
- Review Hospitable's eligible distribution/feed options before attempting any
  custom Google vacation-rental integration.
- Compare Google generative impressions, ChatGPT/AI referrals, qualified leads,
  and bookings against this baseline.

## Sources

- Google Search Console and GA4 first-party reports, accessed 2026-08-30.
- [Google: AI features and your website](https://developers.google.com/search/docs/appearance/ai-features)
- [Google: optimizing for generative AI features](https://developers.google.com/search/docs/fundamentals/ai-optimization-guide)
- [Google: generative AI content guidance](https://developers.google.com/search/docs/fundamentals/using-gen-ai-content)
- [OpenAI publisher and developer FAQ](https://help.openai.com/en/articles/12627856-publishers-and-developers-faq)
- [Bing: AI Performance in Webmaster Tools](https://blogs.bing.com/webmaster/February-2026/Introducing-AI-Performance-in-Bing-Webmaster-Tools-Public-Preview)
- [Hospitable: connecting to Google Vacation Rentals](https://help.hospitable.com/en/articles/14804534-connecting-to-google-vacation-rentals)
- [Hospitable: current self-hosted booking widget](https://help.hospitable.com/en/articles/14804519-how-to-add-a-booking-widget-to-your-website)
- [Google Ads: US promotional-credit terms](https://www.google.com/intl/en_us/ads/coupons/terms/cyoi/)
- [Google Ads: promotional-offer eligibility](https://support.google.com/google-ads/answer/6388096)
- [Google Ads: campaign total budgets](https://support.google.com/google-ads/answer/10486938)
- [Meta: advertising credits](https://www.facebook.com/business/help/131439120265224)
- [Airbnb: Rittenhouse vacation-rental supply](https://www.airbnb.com/rittenhouse-square-pa/stays)
- [The Deacon](https://www.thedeaconphl.com/)
- [Society Hill Hotel group buyouts](https://societyhillhotel.com/groups)
