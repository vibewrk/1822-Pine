// Lightweight GA4 / GTM event helper.
//
// The site loads gtag.js and GTM in src/app/layout.tsx. This helper fires a
// named event through whichever is available, and no-ops safely when neither
// has loaded (ad blockers, SSR). Conversion events tracked site-wide:
//
//   ota_click            — outbound click to Vrbo/Airbnb      (params: platform, location)
//   direct_email_click   — mailto click                       (params: location)
//   inquiry_accepted     — Resend accepted an inquiry         (params: inquiry_id,
//                          inquiry_type, delivery); diagnostic only
//   generate_lead        — Resend accepted a quote request    (params: inquiry_id,
//                          method); the only direct-lead conversion
//   book_cta_click       — internal click toward /book        (params: location,
//                          e.g. home_hero, home_final_cta, header)
//   direct_inquiry_click — internal click toward the /contact
//                          direct-quote flow                  (params: location)
//
// Only generate_lead represents a vetted direct-inquiry conversion. Navigation
// clicks and general questions are useful diagnostics, not bookings or leads.

type EventParams = Record<string, string | number | boolean | undefined>;

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    dataLayer?: Record<string, unknown>[];
  }
}

export function trackEvent(name: string, params: EventParams = {}): void {
  if (typeof window === "undefined") return;
  try {
    if (typeof window.gtag === "function") {
      window.gtag("event", name, params);
    } else if (Array.isArray(window.dataLayer)) {
      window.dataLayer.push({ event: name, ...params });
    }
  } catch {
    // Analytics must never break the UI.
  }
}
