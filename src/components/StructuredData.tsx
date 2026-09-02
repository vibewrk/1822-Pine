// Homepage-only JSON-LD for the property's public lodging identity.
//
// Integrity rules:
// - `LodgingBusiness` already inherits both LocalBusiness and Organization, so
//   this single graph preserves those semantics without duplicate business
//   nodes.
// - Do not use Google's `VacationRental` type. Its required precise location
//   conflicts with the site's public-address privacy boundary.
// - Do not publish aggregateRating or review markup. The visible ratings are
//   third-party platform evidence, not first-party review-snippet data.
// - Do not expose a street address, coordinates, availability, or an STR
//   registry lookup key in JSON-LD. The license remains visible on the page.
// - Bed, bathroom, capacity, and amenity facts must match the booking listings.

import {
  BOOKING_LINKS,
  PROPERTY_FACTS,
  PROPERTY_NAME,
  SITE_URL,
} from "@/lib/facts";

const ADDRESS = {
  "@type": "PostalAddress",
  addressLocality: "Philadelphia",
  addressRegion: "PA",
  postalCode: "19103",
  addressCountry: "US",
};

const IMAGES = [
  `${SITE_URL}/images/property-tour/01-living-room-1-01.webp`,
  `${SITE_URL}/images/property-tour/03-living-room-1-03.webp`,
  `${SITE_URL}/images/property-tour/28-bedroom-1-02.webp`,
  `${SITE_URL}/images/property-tour/29-bedroom-2-01.webp`,
  `${SITE_URL}/images/property-tour/36-full-bathroom-1-01.webp`,
  `${SITE_URL}/images/property-tour/26-dining-area-01.webp`,
  `${SITE_URL}/images/property-tour/45-rooftop-01.webp`,
  `${SITE_URL}/images/property-tour/54-library-01.webp`,
];

/**
 * The site's one public property graph. This component must be rendered only
 * by the homepage; putting it in the root layout makes every guide and history
 * page look like a separate lodging listing to search engines.
 */
export function LodgingBusinessSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LodgingBusiness",
        "@id": `${SITE_URL}/#rittenhouse-residence`,
        name: PROPERTY_NAME,
        alternateName: "Rittenhouse Residence",
        description:
          "A lovingly cared-for historic Philadelphia townhouse offered as a whole-home stay for groups. Eight bedrooms, five full bathrooms and a powder room, generous gathering spaces, and room for up to sixteen guests two blocks from Rittenhouse Square.",
        url: SITE_URL,
        logo: `${SITE_URL}/images/brand/logo.jpg`,
        image: IMAGES,
        address: ADDRESS,
        priceRange: "$$$$",
        checkinTime: PROPERTY_FACTS.checkInTime,
        checkoutTime: PROPERTY_FACTS.checkOutTime,
        petsAllowed: false,
        sameAs: [BOOKING_LINKS.airbnb, BOOKING_LINKS.vrbo],
        containsPlace: { "@id": `${SITE_URL}/#whole-house` },
      },
      {
        "@type": "House",
        "@id": `${SITE_URL}/#whole-house`,
        name: `${PROPERTY_NAME} — Whole-House Stay`,
        description:
          "A private whole-house stay with eight bedrooms, five full bathrooms and one powder room, and space for up to sixteen guests.",
        url: SITE_URL,
        mainEntityOfPage: SITE_URL,
        image: IMAGES,
        accommodationCategory: "Entire house",
        numberOfBedrooms: PROPERTY_FACTS.bedrooms,
        numberOfFullBathrooms: PROPERTY_FACTS.fullBathrooms,
        numberOfPartialBathrooms: PROPERTY_FACTS.powderRooms,
        occupancy: {
          "@type": "QuantitativeValue",
          value: PROPERTY_FACTS.sleeps,
          maxValue: PROPERTY_FACTS.sleeps,
          unitCode: "C62",
          unitText: "guests",
        },
        floorSize: {
          "@type": "QuantitativeValue",
          value: PROPERTY_FACTS.squareFeet,
          unitCode: "FTK",
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
        ],
        amenityFeature: [
          { "@type": "LocationFeatureSpecification", name: "Wi-Fi", value: true },
          {
            "@type": "LocationFeatureSpecification",
            name: "Air conditioning",
            value: true,
          },
          { "@type": "LocationFeatureSpecification", name: "Kitchen", value: true },
          { "@type": "LocationFeatureSpecification", name: "Washer", value: true },
          { "@type": "LocationFeatureSpecification", name: "Dryer", value: true },
          {
            "@type": "LocationFeatureSpecification",
            name: "Private roof deck",
            value: true,
          },
        ],
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
