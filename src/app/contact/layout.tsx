import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact & Booking Inquiries",
  description:
    "Ask about dates, rates, group fit, or the house itself — direct inquiries for this 8-bedroom Philadelphia mansion are answered within 24 hours.",
  alternates: { canonical: "/contact" },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
