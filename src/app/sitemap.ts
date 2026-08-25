import { MetadataRoute } from "next";
import storyData from "@/data/story-chapters.json";
import archiveData from "@/data/document-archive.json";

// Content changes when this repo changes; a stable date beats stamping every
// URL with the build time (which tells crawlers nothing). Bump on real
// content updates.
const CONTENT_UPDATED = new Date("2026-08-24");

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://rittenhouseresidence.com";

  // Core pages with high priority
  const corePages = [
    { url: "", priority: 1.0, changeFrequency: "weekly" as const },
    { url: "/stay", priority: 0.9, changeFrequency: "weekly" as const },
    { url: "/book", priority: 0.9, changeFrequency: "daily" as const },
    { url: "/gallery", priority: 0.8, changeFrequency: "monthly" as const },
    { url: "/rates", priority: 0.8, changeFrequency: "weekly" as const },
    { url: "/neighborhood", priority: 0.7, changeFrequency: "monthly" as const },
    { url: "/contact", priority: 0.7, changeFrequency: "monthly" as const },
    { url: "/faq", priority: 0.7, changeFrequency: "monthly" as const },
  ];

  // History section - rich content for SEO
  const historyPages = [
    { url: "/history", priority: 0.8, changeFrequency: "monthly" as const },
    { url: "/history/story", priority: 0.7, changeFrequency: "monthly" as const },
    { url: "/history/timeline", priority: 0.7, changeFrequency: "monthly" as const },
    { url: "/history/documents", priority: 0.6, changeFrequency: "monthly" as const },
    { url: "/history/provenance", priority: 0.6, changeFrequency: "monthly" as const },
  ];

  // Story chapters — generated from the same data file that builds the routes,
  // so the sitemap can never drift from reality again. (A previous hand-typed
  // list contained 10 slugs that 404'd and omitted 10 real chapters.)
  const storyChapters = storyData.chapters.map((chapter) => ({
    url: `/history/story/${chapter.slug}`,
    priority: 0.5,
    changeFrequency: "monthly" as const,
  }));

  // Document archive detail pages — 63 primary-source documents, the site's
  // deepest unique content.
  const documentPages = archiveData.map((doc) => ({
    url: `/history/documents/${doc.slug}`,
    priority: 0.4,
    changeFrequency: "yearly" as const,
  }));

  // Legal/info pages
  const legalPages = [
    { url: "/terms", priority: 0.3, changeFrequency: "yearly" as const },
    { url: "/privacy", priority: 0.3, changeFrequency: "yearly" as const },
    { url: "/accessibility", priority: 0.3, changeFrequency: "yearly" as const },
    { url: "/rental-agreement", priority: 0.4, changeFrequency: "yearly" as const },
  ];

  // Property detail pages
  const propertyPages = [
    { url: "/stay/floor-plans", priority: 0.6, changeFrequency: "monthly" as const },
  ];

  const allPages = [
    ...corePages,
    ...historyPages,
    ...storyChapters,
    ...documentPages,
    ...propertyPages,
    ...legalPages,
  ];

  return allPages.map((page) => ({
    url: `${baseUrl}${page.url}`,
    lastModified: CONTENT_UPDATED,
    changeFrequency: page.changeFrequency,
    priority: page.priority,
  }));
}
