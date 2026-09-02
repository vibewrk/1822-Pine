export const SITE_URL = "https://rittenhouseresidence.com";
export const PROPERTY_NAME = "The Rittenhouse Residence";
export const PRIMARY_PROPERTY_IMAGE =
  "/images/property-tour/07-living-room-1-07.webp";
export const PRIMARY_PROPERTY_IMAGE_DIMENSIONS = {
  width: 2100,
  height: 1575,
} as const;
export const PUBLIC_LOCATION =
  "the 1800 block of Pine Street in Center City Philadelphia, two blocks from Rittenhouse Square";

export const PROPERTY_FACTS = {
  bedrooms: 8,
  sleeps: 16,
  fullBathrooms: 5,
  powderRooms: 1,
  squareFeet: 7000,
  stories: 4,
  stairsToTop: 62,
  minimumStayNights: 2,
  checkIn: "4:00 PM",
  checkOut: "10:00 AM",
  checkInTime: "16:00",
  checkOutTime: "10:00",
  licenseNumber: "903781",
  documentedFromYear: 1854,
  beds: {
    king: 2,
    queen: 6,
  },
} as const;

export const REVIEW_FACTS = {
  airbnb: {
    rating: "4.88",
    count: 102,
  },
  vrbo: {
    rating: "9.8",
    count: 66,
  },
} as const;

export const TOTAL_REVIEW_COUNT =
  REVIEW_FACTS.airbnb.count + REVIEW_FACTS.vrbo.count;

export const BOOKING_LINKS = {
  airbnb: "https://www.airbnb.com/rooms/6000930",
  vrbo: "https://www.vrbo.com/757481",
  inquiry: "/contact",
} as const;

export const BED_MIX_SHORT = `${PROPERTY_FACTS.beds.king} kings and ${PROPERTY_FACTS.beds.queen} queens`;
export const BATH_MIX_SHORT = `${PROPERTY_FACTS.fullBathrooms} full baths and a powder room`;
export const TOTAL_BATHROOMS =
  PROPERTY_FACTS.fullBathrooms + PROPERTY_FACTS.powderRooms * 0.5;
