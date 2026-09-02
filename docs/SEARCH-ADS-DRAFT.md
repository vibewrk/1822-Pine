# Google Search Ads — Paused Build Draft

**Prepared:** 2026-08-30
**State:** Draft only. No campaign, budget, billing, or ad has been created or
enabled in Google Ads.
**Truth input:** [`SITE-TRUTH.md`](SITE-TRUTH.md), revision
`rr-site-2026-09-02.1`. Reconcile the revision and all dated provider
observations before activation.

## Launch gate

Do not enable spend until all of the following are true:

- Keyword Planner volume and CPC have been pulled from the existing advertiser
  account.
- The owner has approved a total or daily cap.
- Any Google or Meta promotional credit has been verified in the existing
  account and is treated as a discount, not as authorization to spend.
- Google Ads is linked to the correct GA4 property.
- `generate_lead` is imported as the sole primary direct-inquiry conversion.
- Diagnostic clicks and generic contacts are not primary conversions.
- Approved campaign/click identifiers are persisted privately and joined to
  the server-issued inquiry ID, with documented retention and without stay
  dates, guest count, names, email addresses, or message text.
- A real quote request has proved the production event once without exposing
  dates, party size, or guest identity in analytics URLs or parameters.
- Final landing pages pass mobile QA and state that two nights is the standard
  minimum, some dates require longer stays, the house has stairs, and it is
  lodging rather than an event venue.

## First learning campaign

**Campaign:** `Search | US | Whole House Capacity | 2026 Q3`
**Status:** Paused
**Network:** Google Search only; exclude Display and Search Partners initially.
**Bidding:** Click-focused only during a short instrumentation check, then a
conversion strategy only after enough real `generate_lead` data exists.
**Geography:** United States. Every keyword contains Philadelphia or
Rittenhouse intent, allowing planners outside Pennsylvania to find the house.
**Budget:** Not authorized. Suggested learning envelope for approval: a $150
Search campaign total budget with explicit start and end dates. If approved,
use the campaign total-budget control rather than an automated rule that can
lag. Keep the campaign paused until the cap and dates are recorded.

### Ad group — Eight Bedrooms / Sleeps 16

Keywords, exact and phrase only:

- `[8 bedroom vacation rental philadelphia]`
- `"8 bedroom vacation rental philadelphia"`
- `[philadelphia vacation rental sleeps 16]`
- `"philadelphia vacation rental sleeps 16"`
- `[philadelphia house rental sleeps 16]`
- `"philadelphia house rental sleeps 16"`
- `[vacation rental for 16 guests philadelphia]`
- `"vacation rental for 16 guests philadelphia"`

Landing page: `https://rittenhouseresidence.com/`

Responsive-search-ad headline pool:

- `8 Bedrooms In Philadelphia`
- `Sleeps 16 Under One Roof`
- `Whole House Near Rittenhouse`
- `A Philadelphia Group Stay`
- `Two Blocks From The Square`
- `Dining Table For 16`
- `Historic Home, Modern Stay`
- `Private Roof Deck`
- `Two Kitchens, Two Parlors`
- `Request A Personal Quote`
- `Whole-Home Vacation Rental`
- `5 Full Baths + Powder Room`

Description pool:

- `Stay together in an 8-bedroom historic Philadelphia home for up to 16 guests.`
- `Two blocks from the Square. Standard 2-night minimum; some dates require longer.`
- `Two parlors, two kitchens, dining for 16 and a private roof deck. Ask about dates.`
- `Request a personal quote or compare live availability on Airbnb and Vrbo.`

### Ad group — Large Group / Whole House

Keywords, exact and phrase only:

- `[large group vacation rental philadelphia]`
- `"large group vacation rental philadelphia"`
- `[whole house vacation rental philadelphia]`
- `"whole house vacation rental philadelphia"`
- `[entire house vacation rental philadelphia]`
- `"entire house vacation rental philadelphia"`
- `[center city philadelphia vacation rental large group]`
- `"center city philadelphia vacation rental large group"`

Landing page: `https://rittenhouseresidence.com/groups`

Responsive-search-ad headline pool:

- `One House For The Whole Group`
- `Large Group Stay In Philly`
- `8 Bedrooms, Sleeps 16`
- `Stay Together Near Rittenhouse`
- `Skip Eight Scattered Rooms`
- `Whole-Home Philadelphia Stay`
- `Dining For The Whole Group`
- `Historic Center City House`
- `Request A Personal Quote`

Description pool:

- `Eight bedrooms and one front door for groups of up to 16 near Rittenhouse Square.`
- `Stay together with two kitchens, two parlors, dining for 16 and a private roof deck.`
- `Standard 2-night minimum; some dates require longer. No events or parties.`
- `Tell us your dates for a personal quote, or compare live checkout on Airbnb and Vrbo.`

## Campaigns to build but keep paused

### `Search | US | Wedding Guest Lodging | 2026 Q3`

Landing page: `/groups/weddings`

Seed keywords:

- `[wedding party lodging philadelphia]`
- `"wedding party lodging philadelphia"`
- `[wedding guest accommodations philadelphia]`
- `"wedding guest accommodations philadelphia"`
- `[wedding weekend lodging rittenhouse square]`
- `"wedding weekend lodging rittenhouse square"`
- `[hotel block alternative philadelphia wedding]`

Headline pool:

- `Wedding Guest Lodging Philly`
- `Sleep 16 Under One Roof`
- `Near Rittenhouse Square`
- `Lodging Only — No Events`
- `Breakfast Together As A Group`
- `Wedding Party Under One Roof`

Descriptions:

- `House up to 16 overnight wedding guests together near Center City venues.`
- `Eight bedrooms, group breakfasts and one front door. Lodging only—no events or parties.`

### `Search | US | Family Reunion Lodging | 2026 Q3`

Keep paused until a distinct family-reunion landing page exists. Do not send
paid traffic to a thin or generic page.

Seed keywords:

- `[family reunion vacation rental philadelphia]`
- `"family reunion vacation rental philadelphia"`
- `[multi family vacation rental philadelphia]`
- `"philadelphia family reunion lodging"`

### `Search | US | Rittenhouse Hotel Alternative | 2026 Q3`

Landing page: `/hotel-alternative`

Use only exact and phrase terms that include “group,” “whole house,” or “hotel
alternative.” Do not broadly bid on `rittenhouse hotels`; that visitor usually
wants hotel services the house does not provide.

## Shared negative list

Exact/phrase negatives should be refined from real search-term reports:

- apartments, monthly, lease, student, roommate, sublet, section 8
- Zillow, Realtor, for sale, property management
- wedding venue, reception venue, event space, ballroom
- party rental, tent rental, chair rental, table rental, photo shoot
- party house, events allowed, hourly rental, day rental
- hostel, dorm, extended stay, cheap, free
- Poconos, Jersey Shore, Atlantic City

Do not negate `party` alone because “wedding party lodging” is valuable.

## URL and attribution standard

Keep Google auto-tagging enabled. Use a final URL suffix that never contains
stay dates, guest count, email, name, message, or other inquiry data:

```text
utm_source=google&utm_medium=cpc&utm_campaign=search_whole_house_capacity_2026q3&utm_content={adgroupid}-{creative}&utm_term={keyword}
```

The site currently strips legacy stay details before the contact page renders,
but it does **not** yet carry campaign/click identifiers into the lead record.
GA may retain session-level source attribution, but manual qualification and
booked value cannot currently be joined reliably to a keyword or ad group.
That privacy-safe attribution join is a launch gate, not a completed feature.

## Weekly review

1. Search terms and negatives.
2. Spend against the approved total cap.
3. Landing-page engagement by ad group.
4. Provider-accepted `generate_lead` count.
5. Manually qualified versus unqualified inquiries, joined by inquiry ID.
6. Eventual booked value and cancellation outcome, joined by inquiry ID.

CTR, OTA clicks, and generic contact messages are supporting signals, not the
business result.
