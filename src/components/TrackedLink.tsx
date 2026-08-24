"use client";

import { trackEvent } from "@/lib/analytics";

type TrackedLinkProps = {
  href: string;
  event: string;
  eventParams?: Record<string, string | number | boolean | undefined>;
  className?: string;
  children: React.ReactNode;
  target?: string;
  rel?: string;
  "aria-label"?: string;
};

/**
 * Anchor that fires a GA4 event on click. Used for the site's real conversion
 * actions — outbound OTA booking links and direct email — which pageview-only
 * analytics cannot see.
 */
export default function TrackedLink({
  href,
  event,
  eventParams,
  className,
  children,
  target,
  rel,
  "aria-label": ariaLabel,
}: TrackedLinkProps) {
  return (
    <a
      href={href}
      className={className}
      target={target}
      rel={rel}
      aria-label={ariaLabel}
      onClick={() => trackEvent(event, eventParams)}
    >
      {children}
    </a>
  );
}
