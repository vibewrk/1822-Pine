import type { Metadata } from "next";
import Script from "next/script";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { VacationRentalSchema, LocalBusinessSchema } from "@/components/StructuredData";

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
    "The Rittenhouse Residence — an 1854 mansion near Philadelphia's Rittenhouse Square. 8 bedrooms, 6 bathrooms, 5 floors. A whole-home rental for family reunions and group celebrations. From $1,600/night.",
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
    title: "The Rittenhouse Residence | Historic Philadelphia Mansion Since 1854",
    description:
      "An 1854 mansion with 8 bedrooms, 6 bathrooms, original fireplaces and marble mantels. A whole-home rental for groups, two blocks from Rittenhouse Square.",
    url: "https://rittenhouseresidence.com",
    siteName: "The Rittenhouse Residence",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/images/airbnb/airbnb_03.jpg",
        width: 1200,
        height: 630,
        alt: "Grand Parlor at The Rittenhouse Residence - Historic 1854 Philadelphia Mansion",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Rittenhouse Residence | Historic Philadelphia Mansion",
    description:
      "An 1854 mansion with 8 bedrooms, two blocks from Rittenhouse Square. A whole-home Philadelphia rental for groups.",
    images: ["/images/airbnb/airbnb_03.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "/",
  },
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
})(window,document,'script','dataLayer','GTM-N5XCRVPL');`,
          }}
        />
        {/* Google Analytics 4 - beforeInteractive for Search Console verification */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-YYXHNWZ4PK"
          strategy="beforeInteractive"
        />
        <Script
          id="ga4-config"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-YYXHNWZ4PK');`,
          }}
        />
      </head>
      <body className={`${inter.variable} ${playfair.variable} font-sans antialiased bg-stone-50 text-stone-900`}>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-N5XCRVPL"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
