import type { Metadata } from "next";
import Script from "next/script";
import { Inter, Playfair_Display } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { VacationRentalSchema, LocalBusinessSchema } from "@/components/StructuredData";
import { PRICING_COPY } from "@/lib/pricing";

// Measurement IDs are env-overridable so staging/preview deploys don't pollute
// production analytics. Defaults preserve the live IDs.
const GA_ID = process.env.NEXT_PUBLIC_GA_ID ?? "G-YYXHNWZ4PK";
const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID ?? "GTM-N5XCRVPL";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://rittenhouseresidence.com"),
  title: {
    default: "The Rittenhouse Residence | Historic 8-Bedroom Mansion in Philadelphia",
    template: "%s | The Rittenhouse Residence",
  },
  description:
    `A lovingly cared-for historic Philadelphia townhouse two blocks from Rittenhouse Square. Eight bedrooms, five full baths and a powder room, room for 16, and the whole house for your group. ${PRICING_COPY.short}`,
  keywords: [
    "The Rittenhouse Residence",
    "Rittenhouse Residence",
    "large group rental Philadelphia",
    "whole home rental Philadelphia",
    "Philadelphia mansion rental",
    "8 bedroom rental Philadelphia",
    "family reunion house Philadelphia",
    "Rittenhouse Square rental",
    "group vacation rental Philadelphia",
    "Philadelphia group stay",
    "historic mansion rental Philadelphia",
    "Center City large rental",
    "Victorian mansion Philadelphia",
  ],
  applicationName: "The Rittenhouse Residence",
  authors: [{ name: "The Rittenhouse Residence" }],
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon-192.png", type: "image/png", sizes: "192x192" },
      { url: "/icon-512.png", type: "image/png", sizes: "512x512" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  openGraph: {
    title: "The Rittenhouse Residence | Historic Philadelphia Townhouse",
    description:
      "A historic Philadelphia townhouse with 8 bedrooms, 5 full baths and a powder room, original fireplaces and marble mantels. A whole-home rental for groups, two blocks from Rittenhouse Square.",
    url: "https://rittenhouseresidence.com",
    siteName: "The Rittenhouse Residence",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/images/airbnb/airbnb_03.jpg",
        width: 1200,
        height: 630,
        alt: "Grand Parlor at The Rittenhouse Residence - Historic Philadelphia Townhouse",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Rittenhouse Residence | Historic Philadelphia Mansion",
    description:
      "A historic townhouse with 8 bedrooms, two blocks from Rittenhouse Square. A whole-home Philadelphia rental for groups.",
    images: ["/images/airbnb/airbnb_03.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
  // IMPORTANT: no `alternates.canonical` here. A previous root-level
  // `canonical: "/"` was inherited by every route, declaring the entire site
  // a duplicate of the homepage — a sitewide indexing suppressor. Canonicals
  // are now set per route.
  ...(process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION
    ? {
        verification: {
          google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
        },
      }
    : {}),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <VacationRentalSchema />
        <LocalBusinessSchema />
        {/* Google Tag Manager */}
        <Script
          id="gtm-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${GTM_ID}');`,
          }}
        />
        {/* Google Analytics 4 (afterInteractive: GA is not render-critical) */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
          strategy="afterInteractive"
        />
        <Script
          id="ga4-config"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${GA_ID}');`,
          }}
        />
      </head>
      <body className={`${inter.variable} ${playfair.variable} font-sans antialiased bg-stone-50 text-stone-900`}>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
