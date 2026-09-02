import { Metadata } from "next";
import { PRIMARY_PROPERTY_IMAGE } from "@/lib/facts";

export const metadata: Metadata = {
  title: "Photo Gallery — Historic Philadelphia Townhouse",
  description:
    "Browse photos of The Rittenhouse Residence — the Grand Parlor, Library Lounge, roof decks, kitchens, 8 bedrooms, 5 full baths, and a powder room.",
  alternates: { canonical: "/gallery" },
  openGraph: {
    title: "Photo Gallery | The Rittenhouse Residence",
    description:
      "Tour The Rittenhouse Residence through photos — Victorian elegance, original fireplaces, crystal chandeliers, and modern amenities.",
    images: [PRIMARY_PROPERTY_IMAGE],
  },
};

export default function GalleryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
