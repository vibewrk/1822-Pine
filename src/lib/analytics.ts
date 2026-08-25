// Lightweight GA4 / GTM event helper.
//
// The site loads gtag.js and GTM in src/app/layout.tsx. This helper fires a
// named event through whichever is available, and no-ops safely when neither
// has loaded (ad blockers, SSR). Conversion events tracked site-wide:
//
//   ota_click        — outbound click to Vrbo/Airbnb  (params: platform, location)
//   direct_email_click — mailto click                 (params: location)
//   contact_submit   — inquiry form result            (params: status, inquiry_type)
//
// These are the events to register as key events (conversions) in GA4.

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
