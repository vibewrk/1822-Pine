import { MetadataRoute } from "next";

// AI assistants (ChatGPT, Claude, Perplexity, Gemini) are a real discovery
// channel for group-travel planning, so their crawlers are explicitly
// welcomed rather than left to the wildcard. /llms.txt serves them a
// structured fact sheet.
const AI_CRAWLERS = [
  "GPTBot",
  "OAI-SearchBot",
  "ChatGPT-User",
  "ClaudeBot",
  "Claude-Web",
  "anthropic-ai",
  "PerplexityBot",
  "Google-Extended",
  "Applebot-Extended",
  "cohere-ai",
  "CCBot",
];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        // Do NOT disallow /_next/. It serves the CSS, JS, fonts, and — via
        // /_next/image — every optimised image on the site. Blocking it stops
        // Googlebot rendering pages the way a visitor sees them, and makes the
        // whole history archive invisible to Google Images, since those scans
        // are all delivered through the image optimiser.
        disallow: ["/api/", "/stay/guest"],
      },
      ...AI_CRAWLERS.map((userAgent) => ({
        userAgent,
        allow: "/",
        disallow: ["/api/", "/stay/guest"],
      })),
    ],
    sitemap: "https://rittenhouseresidence.com/sitemap.xml",
  };
}
