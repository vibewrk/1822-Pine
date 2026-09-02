# Voice, privacy, and conversion plan

## Goal

Help the right groups imagine a memorable stay, understand the practical fit,
and take the next booking step. The voice belongs to a present-day custodian
who loves the house and knows its story—not to an auditor defending a file.

## The four readers

| Reader | What they hope to feel | What they need before acting |
|---|---|---|
| Family gathering organizer | Everyone together, with enough room to breathe | Real bedrooms, shared meals, stairs, bathrooms, rules, exact total |
| Wedding-weekend lodging organizer | The people they love sharing the in-between hours | Lodging-only boundary, room mix, arrival logistics, popular-date availability |
| Friends' getaway planner | A Philadelphia weekend that feels like an occasion | Walkability, gathering rooms, privacy, neighborhood ideas, total cost |
| History and design lover | The rare pleasure of staying inside a real story | Original character, careful stewardship, primary sources, modern comforts |

Team and leadership stays remain a valid use case, but the house is sold as
lodging for the team—not as a meeting or event venue.

## Voice rules

1. Lead with invitation and possibility; place constraints where a decision
   actually depends on them.
2. Write as the house's current custodian: warm, specific, lightly spirited,
   and proud without exaggeration.
3. Let facts create trust. Do not announce that copy is “honest,” “documented,”
   or “transparent.” Link the source, name the feature, or state the rule.
4. Keep the first-person house narrator in the long-form story. It is the
   site's most distinctive voice.
5. Treat stairs, capacity, house rules, cameras, payment, and cancellation in
   plain language. Hospitality should soften the welcome, not blur a material
   booking fact.
6. Never market the property as a ceremony, reception, party, or event venue.

## Canonical commercial language

- Pricing: select weekdays may be available from about $1,600 for the whole
  house. Weekends, holidays, and high-demand dates run higher. Any per-bedroom
  or per-person figure is explicitly a sample calculation, not a rate.
- Inquiry: the website accepts dates and group details and replies within 24
  hours with availability, an itemized personal quote, and next steps.
- Public date status: inquiry-only. The website carries selected dates into the
  quote form but does not say whether they are open, booked, or unconfirmed.
- Checkout: the website does not process checkout. Airbnb and Vrbo provide
  live calendars and secure checkout.
- Location: public marketing identifies the 1800 block of Pine Street, Center
  City Philadelphia, two blocks from Rittenhouse Square. Booked guests receive
  the exact address and arrival instructions.

## Address boundary

Remove the exact street address from global layout, metadata, structured data,
image descriptions, machine summaries, and sales or neighborhood copy. Keep it
where the address is the historical subject: archive records, primary-source
quotes, document metadata, and the history narrative. This is a
defense-in-depth measure, not a claim that a historic address can be made
secret.

## Search and agent discovery

- Keep one stable, homepage-only JSON-LD graph connecting a `LodgingBusiness`
  to its contained `House` accommodation, and keep one canonical domain.
  `LodgingBusiness` preserves LocalBusiness and Organization semantics through
  Schema.org inheritance.
- Do not publish `VacationRental`, an exact street address, or coordinates in
  structured data. This intentionally gives up Google's coordinate-required
  VacationRental rich result in favor of the property's privacy boundary.
- Keep verified Airbnb and Vrbo ratings visible to guests, but do not publish
  `aggregateRating` or `review` JSON-LD for the property. Those third-party
  figures are not eligible self-authored LocalBusiness review-snippet data.
- Describe the house with stable, non-sensitive facts: eight bedrooms, five
  full bathrooms and one powder room, occupancy of sixteen, the verified bed
  mix, approximate floor area, true amenities, and safe images. Keep the STR
  license visibly disclosed for trust and compliance, but omit that public
  registry lookup key from machine-readable property markup.
- Generic Schema.org semantics, strong page copy, FAQs, and the historical
  archive remain the discovery path.
- Generate `llms.txt` from the same fact and pricing modules used by the site.
- Preserve descriptive page titles, canonicals, breadcrumbs, FAQs, sitemap
  coverage, crawlable images, and the public primary-source archive.
- Answer booking questions in complete, quotable sentences. Repeat stable
  facts where useful, but do not repeat a brittle nightly price.
- Keep historical pages internally linked to stay, group, and inquiry pages so
  the research earns discovery without turning into sales copy.

## Completion checks

- No unqualified “From $1,600” claim.
- No contradictory direct-booking or fee promise.
- No exact address on marketing or machine-readable surfaces.
- No `VacationRental`, property `aggregateRating`, or property `review` JSON-LD.
- The `LodgingBusiness` entity appears only on the homepage and uses the stable
  `/#rittenhouse-residence` identifier.
- Bed mix is 2 kings and 6 queens everywhere.
- No Event schema or venue positioning.
- Every important booking route offers a personal inquiry and an Airbnb/Vrbo
  live-checkout path.
- Lint, production build, sitemap crawl, privacy greps, structured-data checks,
  and a final Fable review pass all succeed before production release.
