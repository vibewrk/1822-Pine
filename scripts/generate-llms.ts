import { writeFileSync } from "node:fs";
import { resolve } from "node:path";
import storyData from "../src/data/story-chapters.json";
import documentArchive from "../src/data/document-archive.json";
import {
  BATH_MIX_SHORT,
  BED_MIX_SHORT,
  BOOKING_LINKS,
  PROPERTY_FACTS,
  PROPERTY_NAME,
  PUBLIC_LOCATION,
  REVIEW_FACTS,
  SITE_URL,
  TOTAL_REVIEW_COUNT,
} from "../src/lib/facts";
import { PRICING_COPY } from "../src/lib/pricing";

const chapterCount = storyData.chapters.length;
const documentCount = documentArchive.length;

const content = `# ${PROPERTY_NAME}

> A whole-home historic Philadelphia townhouse for groups, located on ${PUBLIC_LOCATION}.
> Nearly 7,000 square feet, ${PROPERTY_FACTS.bedrooms} bedrooms, ${BATH_MIX_SHORT}, and room for up to ${PROPERTY_FACTS.sleeps} overnight guests.
> ${PRICING_COPY.short}

Canonical site: ${SITE_URL}

## Property facts

- Public location: 1800 block of Pine Street, Philadelphia, PA 19103; exact address is shared with booked guests
- Type: entire historic townhouse — guests reserve the whole house, never individual rooms
- Bedrooms: ${PROPERTY_FACTS.bedrooms} (${BED_MIX_SHORT}) across floors 2–4
- Bathrooms: ${BATH_MIX_SHORT}
- Floors: ${PROPERTY_FACTS.stories} stories plus a private furnished roof deck; no elevator; ${PROPERTY_FACTS.stairsToTop} steps from entrance to roof deck; every bedroom is above the entrance level
- Size: nearly ${PROPERTY_FACTS.squareFeet.toLocaleString("en-US")} square feet; 14-foot ceilings on the parlor floor
- Gathering spaces: dining table for 16, two parlors, full-size pool table, and private roof deck
- Kitchens: two full kitchens
- Amenities: gigabit WiFi service, central air and heat, washer/dryer, smart TVs, and linens
- Pricing: ${PRICING_COPY.long}
- Minimum stay: ${PROPERTY_FACTS.minimumStayNights} nights; longer minimums may apply on peak dates
- Check-in ${PROPERTY_FACTS.checkIn} · Check-out ${PROPERTY_FACTS.checkOut}
- House rules: no parties or events, no smoking, no pets; overnight guests must be registered, while limited daytime visitors and vendors are allowed within the published house rules
- Philadelphia short-term-rental license #${PROPERTY_FACTS.licenseNumber}; exterior security cameras only
- Parking: paid garages within two blocks; Waverly Street behind the house can be useful for luggage drop-off

## Best suited for

Family reunions, milestone birthdays and anniversaries, friends' getaways,
holiday gatherings, leadership-team lodging, and out-of-town wedding-guest
housing — groups that want to stay together instead of splitting across hotel rooms.
The property is guest lodging, not a ceremony, reception, party, or event venue.

## Pricing and availability

- ${PRICING_COPY.long}
- Value example: ${PRICING_COPY.example}
- The website accepts date and group inquiries but does not process checkout on-site
- An inquiry receives availability, an itemized quote, and booking next steps within 24 hours
- Live calendars and secure checkout are available on Airbnb and Vrbo

## Booking

- Airbnb: ${BOOKING_LINKS.airbnb}
- Vrbo: ${BOOKING_LINKS.vrbo}
- Airbnb standing: ${REVIEW_FACTS.airbnb.rating} across ${REVIEW_FACTS.airbnb.count} reviews; Guest Favorite; Superhost
- Vrbo standing: ${REVIEW_FACTS.vrbo.rating}/10 across ${REVIEW_FACTS.vrbo.count} reviews
- Total published reviews across both platforms: ${TOTAL_REVIEW_COUNT}
- Personal quote or group-fit question: ${SITE_URL}${BOOKING_LINKS.inquiry}
- Booking and payment take place on Airbnb or Vrbo; the website itself has no checkout

## History

- The house's documented story begins in 1854, when John McCrea sold the property to merchant John Roset; the deed describes the ground, and the Rosets are listed at the address by 1855
- The Rosets owned the property for decades and let it to a succession of households
- Drexel connection: Roset's daughter Ellen married financier Anthony J. Drexel in 1850; the connection is through the family, not residence or ownership by Drexel
- 1899: Agnes M. Spencer commissioned alterations and additions associated with architects Duhring, Okie & Ziegler
- 1910s: newspaper records connect residents with Philadelphia's suffrage movement, including Equal Franchise Society ticket sales in 1915
- 1922–1952: the house was divided into apartments and later returned to a single residence
- 1995: contributing property in the Rittenhouse–Fitler Residential Historic District
- The site publishes ${documentCount} primary-source documents and a ${chapterCount}-chapter narrative history

## Common questions

- What does it cost? ${PRICING_COPY.long}
- How do I get an exact total? Send dates and group size through ${SITE_URL}/contact, or use the live Airbnb or Vrbo calendar
- Can I pay on this website? No. This site accepts inquiries; Airbnb and Vrbo provide secure checkout
- How many guests can stay? Up to ${PROPERTY_FACTS.sleeps} guests across ${PROPERTY_FACTS.bedrooms} bedrooms
- Is the house accessible? There is no elevator, every bedroom is upstairs, and there are ${PROPERTY_FACTS.stairsToTop} steps from the entrance to the roof deck; review the stairs-and-access page before booking
- Are parties or wedding events allowed? No. Wedding groups use the house as overnight lodging, not as a ceremony or reception venue
- How is the location presented? Marketing and booking pages use the block-level location; booked guests receive exact arrival instructions. Historical pages retain street addresses when they are part of the source record

## Key pages

- Overview: ${SITE_URL}/
- The house: ${SITE_URL}/stay
- Bedrooms and room planner: ${SITE_URL}/stay/rooms
- Floor plans: ${SITE_URL}/stay/floor-plans
- Stairs and access: ${SITE_URL}/stay/stairs-and-access
- Gallery: ${SITE_URL}/gallery
- Reviews: ${SITE_URL}/reviews
- Rates: ${SITE_URL}/rates
- Group stays: ${SITE_URL}/groups
- Wedding guest housing: ${SITE_URL}/groups/weddings
- Hotel alternative: ${SITE_URL}/hotel-alternative
- House rules: ${SITE_URL}/house-rules
- FAQ: ${SITE_URL}/faq
- Booking options: ${SITE_URL}/book
- Neighborhood guide: ${SITE_URL}/neighborhood
- Rittenhouse Square guide: ${SITE_URL}/rittenhouse-square
- Philadelphia events: ${SITE_URL}/philadelphia-events
- History: ${SITE_URL}/history
- Narrative history: ${SITE_URL}/history/story
- Suffrage history: ${SITE_URL}/history/suffrage
- Document archive: ${SITE_URL}/history/documents
- Contact: ${SITE_URL}/contact
`;

writeFileSync(resolve(process.cwd(), "public/llms.txt"), content);
