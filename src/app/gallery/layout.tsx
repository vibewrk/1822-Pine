import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Photo Gallery — Historic Philadelphia Townhouse",
  description:
    "Browse photos of The Rittenhouse Residence — 8 bedrooms, 5 full baths and a powder room, grand parlors, roof deck, and historic details in this Philadelphia townhouse.",
  alternates: { canonical: "/gallery" },
  openGraph: {
    title: "Photo Gallery | The Rittenhouse Residence",
    description:
      "Tour The Rittenhouse Residence through photos — Victorian elegance, original fireplaces, crystal chandeliers, and modern amenities.",
    images: ["/images/property-tour/01-living-room-1-01.webp"],
  },
};

export default function GalleryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
