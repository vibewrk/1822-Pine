// JSON-LD structured data, rendered sitewide from the root layout.
//
// Integrity rules for this file (enforced during the 2026-08 SEO overhaul):
// - Never publish reviews we did not receive (a fabricated "Recent Guest"
//   review was removed — self-authored reviews violate Google review-snippet
//   policy and risk a manual spam action).
// - No `starRating` (that field means an official hotel classification, not a
//   guest-review average).
// - One aggregateRating only, on the VacationRental node, matching the figure
//   visible on the page (4.89 / 93 Airbnb reviews). Update both together.
// - Amenities must match what the site actually tells guests (a "Free
//   parking" claim was removed; the FAQ says guests use paid garages nearby).
// - Bed inventory must match /stay (2 King + 6 Queen across 8 bedrooms).

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

export function VacationRentalSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LodgingBusiness",
    "@id": `${SITE}/#lodging`,
    name: "The Rittenhouse Residence",
    alternateName: "Rittenhouse Residence",
    description:
      "The Rittenhouse Residence — an 8-bedroom whole-home vacation rental for groups in Center City Philadelphia. Historic 1854 mansion with 6 bathrooms, two blocks from Rittenhouse Square.",
    url: SITE,
    address: ADDRESS,
    geo: GEO,
    image: IMAGES.slice(0, 3),
    priceRange: "$$$$",
    numberOfRooms: 8,
    checkinTime: "16:00",
    checkoutTime: "10:00",
    sameAs: [
      "https://www.airbnb.com/rooms/6000930",
      "https://www.vrbo.com/757481",
    ],
    amenityFeature: [
      { "@type": "LocationFeatureSpecification", name: "WiFi", value: true },
      { "@type": "LocationFeatureSpecification", name: "Air conditioning", value: true },
      { "@type": "LocationFeatureSpecification", name: "Kitchen", value: true },
      { "@type": "LocationFeatureSpecification", name: "Washer/Dryer", value: true },
      { "@type": "LocationFeatureSpecification", name: "Roof Deck", value: true },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function LocalBusinessSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "VacationRental",
    "@id": `${SITE}/#vacation-rental`,
    identifier: "airbnb-6000930",
    name: "The Rittenhouse Residence",
    alternateName: "Rittenhouse Residence - Historic Philadelphia Mansion",
    description:
      "The Rittenhouse Residence — whole-home vacation rental for groups in Philadelphia. 8 bedrooms, 6 bathrooms across five floors. Historic 1854 mansion two blocks from Rittenhouse Square.",
    url: SITE,
    image: IMAGES,
    address: ADDRESS,
    geo: GEO,
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
        // matches the 8-bedroom inventory (2 king + 6 queen) and the Airbnb
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
    // Review data sourced from the live Airbnb listing; update periodically
    // and keep in sync with the visible "4.89 · 93 reviews" on the page.
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.89",
      reviewCount: "93",
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
