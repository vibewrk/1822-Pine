import { Metadata } from "next";

export const metadata: Metadata = {
  title: "History",
  description:
    "Explore 170 years of history at The Rittenhouse Residence — from its 1854 first sale through a Drexel family marriage, suffrage-era activism, and Victorian grandeur near Philadelphia's Rittenhouse Square.",
  openGraph: {
    title: "History | The Rittenhouse Residence",
    description:
      "Discover the documented history of this Victorian mansion — Drexel family connections, original deeds, and 170 years of Philadelphia history.",
    images: ["/images/documents/1854-deed.jpg"],
  },
};

export default function HistoryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
