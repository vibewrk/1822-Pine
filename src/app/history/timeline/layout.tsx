import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Timeline of 1822 Pine Street",
  description:
    "A documented timeline for 1822 Pine Street: deeds, owners, renovations, and newspaper records from the 1854 first sale to The Rittenhouse Residence today.",
  alternates: { canonical: "/history/timeline" },
  keywords: [
    "Philadelphia historic home",
    "Rittenhouse Square rental",
    "1822 Pine Street",
    "Philadelphia Victorian mansion",
    "historic mansion rental",
    "Philadelphia group rental",
    "Rittenhouse-Fitler Historic District",
  ],
  openGraph: {
    title: "170 Years of Stories | Rittenhouse Residence",
    description:
      "Victorian elegance, original fireplaces, and 170 years of remarkable stories at Philadelphia's most storied address.",
    type: "website",
    images: ["/images/documents/1854-deed.jpg"],
  },
};

export default function TimelineLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
