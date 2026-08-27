// JSON-LD structured data, rendered sitewide from the root layout.
//
// Integrity rules for this file (enforced during the 2026-08 SEO overhaul):
// - Never publish reviews we did not receive (a fabricated "Recent Guest"
//   review was removed — self-authored reviews violate Google review-snippet
//   policy and risk a manual spam action).
// - No `starRating` (that field means an official hotel classification, not a
//   guest-review average).
// - No Event markup, ever — the house is lodging, not a venue.
// - ONE primary lodging entity only. A previous version published two parallel
//   nodes (a LodgingBusiness and a VacationRental) describing the same house
//   with different @ids — a duplicate-entity risk. They are now collapsed into
//   the single VacationRental below (VacationRental is a schema.org subtype of
//   LodgingBusiness, so the checkin/checkout/priceRange fields remain valid).
//   Pages that reference the house use the stable `/#vacation-rental` @id.
// - One aggregateRating only, matching the figure visible on the page.
// - Amenities must match what the site actually tells guests (a "Free
//   parking" claim was removed; the FAQ says guests use paid garages nearby).
// - Bed inventory must match the Airbnb listing (2 King + 5 Queen + 1 Double
//   across 8 bedrooms), which is the booking system of record.
// - The exact coordinates are intentionally omitted. Google currently requires
//   precise latitude/longitude for its VacationRental rich result, so this
//   privacy choice sacrifices eligibility for that enhanced display. The
//   generic Schema.org entity remains useful to crawlers and answer engines.

import {
  BOOKING_LINKS,
  PROPERTY_FACTS,
  PROPERTY_NAME,
  REVIEW_FACTS,
  SITE_URL,
  TOTAL_BATHROOMS,
} from "@/lib/facts";

const ADDRESS = {
  "@type": "PostalAddress",
  addressLocality: "Philadelphia",
  addressRegion: "PA",
  postalCode: "19103",
  addressCountry: "US",
};

const IMAGES = [
  `${SITE_URL}/images/airbnb/airbnb_03.jpg`,
  `${SITE_URL}/images/airbnb/airbnb_04.jpg`,
  `${SITE_URL}/images/airbnb/airbnb_01.jpg`,
  `${SITE_URL}/images/airbnb/airbnb_02.jpg`,
  `${SITE_URL}/images/airbnb/airbnb_05.jpg`,
  `${SITE_URL}/images/property/DSC00106.jpg`,
  `${SITE_URL}/images/airbnb/airbnb_08.jpg`,
  `${SITE_URL}/images/property/DSC00122.jpg`,
];

/**
 * The site's single primary lodging entity. Function name matches the @type
 * it renders (a previous version had VacationRentalSchema emitting a
 * LodgingBusiness and vice versa).
 */
export function VacationRentalSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "VacationRental",
    "@id": `${SITE_URL}/#vacation-rental`,
    identifier: "airbnb-6000930",
    name: PROPERTY_NAME,
    alternateName: "Rittenhouse Residence",
    description:
      "A lovingly cared-for historic Philadelphia townhouse offered as a whole-home stay for groups. Eight bedrooms, five full baths and a powder room, generous gathering spaces, and room for up to sixteen guests two blocks from Rittenhouse Square.",
    url: SITE_URL,
    image: IMAGES,
    address: ADDRESS,
    priceRange: "$$$$",
    checkinTime: PROPERTY_FACTS.checkInTime,
    checkoutTime: PROPERTY_FACTS.checkOutTime,
    numberOfRooms: PROPERTY_FACTS.bedrooms,
    numberOfBedrooms: PROPERTY_FACTS.bedrooms,
    numberOfBathroomsTotal: TOTAL_BATHROOMS,
    floorSize: {
      "@type": "QuantitativeValue",
      value: PROPERTY_FACTS.squareFeet,
      unitCode: "FTK",
    },
    petsAllowed: false,
    tourBookingPage: `${SITE_URL}/book`,
    sameAs: [BOOKING_LINKS.airbnb, BOOKING_LINKS.vrbo],
    containsPlace: {
      "@type": "Accommodation",
      additionalType: "EntirePlace",
      numberOfRooms: PROPERTY_FACTS.bedrooms,
      numberOfBathroomsTotal: TOTAL_BATHROOMS,
      occupancy: {
        "@type": "QuantitativeValue",
        // Owner-confirmed 2026-08-24: maximum 16 overnight guests, which
        // matches the 8-bedroom inventory (2 king, 5 queen, 1 double) and the Airbnb
        // listing. Keep in sync with the "Sleeps 16" copy sitewide.
        value: PROPERTY_FACTS.sleeps,
      },
      bed: [
        {
          "@type": "BedDetails",
          numberOfBeds: PROPERTY_FACTS.beds.king,
          typeOfBed: "King",
        },
        {
          "@type": "BedDetails",
          numberOfBeds: PROPERTY_FACTS.beds.queen,
          typeOfBed: "Queen",
        },
        {
          "@type": "BedDetails",
          numberOfBeds: PROPERTY_FACTS.beds.double,
          typeOfBed: "Double",
        },
      ],
      amenityFeature: [
        { "@type": "LocationFeatureSpecification", name: "WiFi", value: true },
        { "@type": "LocationFeatureSpecification", name: "Air conditioning", value: true },
        { "@type": "LocationFeatureSpecification", name: "Kitchen", value: true },
        { "@type": "LocationFeatureSpecification", name: "Washer", value: true },
        { "@type": "LocationFeatureSpecification", name: "Dryer", value: true },
        { "@type": "LocationFeatureSpecification", name: "Roof deck", value: true },
        {
          "@type": "LocationFeatureSpecification",
          name: "licenseNum",
          value: `Philadelphia: ${PROPERTY_FACTS.licenseNumber}`,
        },
      ],
    },
    // Review data sourced from the live Airbnb listing; update periodically
    // and keep in sync with the visible
    // "4.88 on Airbnb across 102 reviews" on the page.
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: REVIEW_FACTS.airbnb.rating,
      reviewCount: String(REVIEW_FACTS.airbnb.count),
      bestRating: "5",
      worstRating: "1",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

/**
 * @deprecated The duplicate LodgingBusiness node this rendered has been
 * collapsed into VacationRentalSchema above (single primary lodging entity).
 * Kept as a no-op so the root layout's existing call sites compile; remove
 * both once layout.tsx drops the call.
 */
export function LocalBusinessSchema() {
  return null;
}
