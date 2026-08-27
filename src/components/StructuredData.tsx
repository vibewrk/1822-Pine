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
//   Pages that reference the house use `@id: ${SITE}/#vacation-rental`.
// - One aggregateRating only, matching the figure visible on the page
//   (4.88 / 102 Airbnb reviews, as of Aug 2026). Update both together, and
//   keep the on-page "as of" date in sync when refreshing.
// - Amenities must match what the site actually tells guests (a "Free
//   parking" claim was removed; the FAQ says guests use paid garages nearby).
// - Bed inventory must match the Airbnb listing (2 King + 5 Queen + 1 Double
//   across 8 bedrooms), which is the booking system of record.

const SITE = "https://rittenhouseresidence.com";

const ADDRESS = {
  "@type": "PostalAddress",
  streetAddress: "1822 Pine Street",
  addressLocality: "Philadelphia",
  addressRegion: "PA",
  postalCode: "19103",
  addressCountry: "US",
};

const GEO = {
  "@type": "GeoCoordinates",
  latitude: 39.9468,
  longitude: -75.1715,
};

const IMAGES = [
  `${SITE}/images/airbnb/airbnb_03.jpg`,
  `${SITE}/images/airbnb/airbnb_04.jpg`,
  `${SITE}/images/airbnb/airbnb_01.jpg`,
  `${SITE}/images/airbnb/airbnb_02.jpg`,
  `${SITE}/images/airbnb/airbnb_05.jpg`,
  `${SITE}/images/airbnb/airbnb_07.jpg`,
  `${SITE}/images/airbnb/airbnb_08.jpg`,
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
    "@id": `${SITE}/#vacation-rental`,
    identifier: "airbnb-6000930",
    name: "The Rittenhouse Residence",
    alternateName: "Rittenhouse Residence",
    description:
      "The Rittenhouse Residence — whole-home vacation rental for groups in Philadelphia. 8 bedrooms, 5 full baths + powder room across four stories that live like five. Historic 1854 mansion two blocks from Rittenhouse Square.",
    url: SITE,
    image: IMAGES,
    address: ADDRESS,
    geo: GEO,
    priceRange: "$$$$",
    checkinTime: "16:00",
    checkoutTime: "10:00",
    numberOfRooms: 8,
    numberOfBedrooms: 8,
    numberOfBathroomsTotal: 6,
    floorSize: {
      "@type": "QuantitativeValue",
      value: 7000,
      unitCode: "FTK",
    },
    yearBuilt: 1854,
    petsAllowed: false,
    tourBookingPage: `${SITE}/book`,
    sameAs: [
      "https://www.airbnb.com/rooms/6000930",
      "https://www.vrbo.com/757481",
    ],
    containsPlace: {
      "@type": "Accommodation",
      additionalType: "EntirePlace",
      numberOfRooms: 8,
      numberOfBathroomsTotal: 6,
      occupancy: {
        "@type": "QuantitativeValue",
        // Owner-confirmed 2026-08-24: maximum 16 overnight guests, which
        // matches the 8-bedroom inventory (2 king, 5 queen, 1 double) and the Airbnb
        // listing. Keep in sync with the "Sleeps 16" copy sitewide.
        value: 16,
      },
      bed: [
        { "@type": "BedDetails", numberOfBeds: 2, typeOfBed: "King" },
        { "@type": "BedDetails", numberOfBeds: 6, typeOfBed: "Queen" },
      ],
      amenityFeature: [
        { "@type": "LocationFeatureSpecification", name: "WiFi", value: true },
        { "@type": "LocationFeatureSpecification", name: "Air conditioning", value: true },
        { "@type": "LocationFeatureSpecification", name: "Kitchen", value: true },
        { "@type": "LocationFeatureSpecification", name: "Washer", value: true },
        { "@type": "LocationFeatureSpecification", name: "Dryer", value: true },
        { "@type": "LocationFeatureSpecification", name: "Roof deck", value: true },
      ],
    },
    // Review data sourced from the live Airbnb listing, as of Aug 2026;
    // update periodically and keep in sync with the visible
    // "4.88 on Airbnb across 102 reviews, as of Aug 2026" on the page.
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.88",
      reviewCount: "102",
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
