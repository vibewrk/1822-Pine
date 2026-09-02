import { promises as fs } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const scriptDir = path.dirname(fileURLToPath(import.meta.url));
const siteRoot = path.resolve(scriptDir, "..");

// Archive sources live inside this repository (images/web, raw_documents, refs
// at the repo root). They are copied into public/archive at build time so the
// originals stay out of the Next.js static pipeline until then.
const SOURCE_ROOT = siteRoot;
const PUBLIC_ROOT = path.resolve(siteRoot, "public", "archive");
const PUBLIC_AIRBNB_ARCHIVE_ROOT = path.resolve(
  PUBLIC_ROOT,
  "images",
  "web",
  "airbnb"
);
const PUBLIC_FLOOR_PLAN_ROOT = path.resolve(siteRoot, "public", "floor-plans");
const SANITIZED_FLOOR_PLAN_ROOT = path.resolve(siteRoot, "output", "pdf");

const FLOOR_PLAN_DOWNLOADS = [
  ["rittenhouse-residence-first-floor.pdf", "first-floor.pdf"],
  ["rittenhouse-residence-second-floor.pdf", "second-floor.pdf"],
  ["rittenhouse-residence-third-floor.pdf", "third-floor.pdf"],
  ["rittenhouse-residence-fourth-floor.pdf", "fourth-floor.pdf"],
  ["rittenhouse-residence-roof-deck.pdf", "roof-deck.pdf"],
];

const COPY_TARGETS = [
  {
    label: "raw_documents",
    src: path.resolve(SOURCE_ROOT, "raw_documents"),
    dest: path.resolve(PUBLIC_ROOT, "raw_documents"),
  },
  {
    label: "images/web",
    src: path.resolve(SOURCE_ROOT, "images", "web"),
    dest: path.resolve(PUBLIC_ROOT, "images", "web"),
  },
  {
    label: "refs",
    src: path.resolve(SOURCE_ROOT, "refs"),
    dest: path.resolve(PUBLIC_ROOT, "refs"),
  },
];

// Files/patterns to exclude from public archive
// These documents contain sensitive financial information and should never be publicly displayed
const ARCHIVE_EXCLUDE_PATTERNS = [
  "property cert",
  "2013 deed",        // Current ownership deed - financial details too explicit
  "scarlet fever",    // Historical illness reference - not appropriate for rental marketing
];

const ARCHIVE_EXCLUDE_ROOTS = [
  path.resolve(SOURCE_ROOT, "images", "web", "airbnb"),
];

function shouldExcludeArchiveFile(srcPath) {
  const normalized = srcPath.toLowerCase();
  return (
    ARCHIVE_EXCLUDE_PATTERNS.some((pattern) => normalized.includes(pattern)) ||
    ARCHIVE_EXCLUDE_ROOTS.some(
      (root) => srcPath === root || srcPath.startsWith(`${root}${path.sep}`)
    )
  );
}

async function exists(p) {
  try {
    await fs.access(p);
    return true;
  } catch {
    return false;
  }
}

async function rmIfExists(p) {
  if (!(await exists(p))) return;
  await fs.rm(p, { recursive: true, force: true });
}

async function ensureDir(p) {
  await fs.mkdir(p, { recursive: true });
}

async function main() {
  // Listing photos belong in the curated, privacy-reviewed property tour,
  // never in the historical source archive. Remove any copy left by an older
  // build even when a full archive sync is explicitly skipped.
  await rmIfExists(PUBLIC_AIRBNB_ARCHIVE_ROOT);

  // NOTE: this must run on Vercel/CI too. public/archive is gitignored, so the
  // deployed site has archive imagery ONLY if this build step copies it. (A
  // previous version skipped CI builds, which shipped ~130 broken images
  // across /history/timeline and /history/documents.)
  if (process.env.SKIP_ARCHIVE_SYNC) {
    console.log("Archive sync skipped (SKIP_ARCHIVE_SYNC=1)");
    return;
  }

  const missingSources = [];
  for (const target of COPY_TARGETS) {
    if (!(await exists(target.src))) missingSources.push(target.src);
  }

  if (missingSources.length) {
    // If public/archive already exists with content, skip silently
    const webArchive = path.resolve(PUBLIC_ROOT, "images", "web");
    if (await exists(webArchive)) {
      console.log("Archive sync skipped (public/archive already populated)");
      return;
    }

    const lines = [
      "Archive sync skipped (missing source folders):",
      ...missingSources.map((src) => `- ${src}`),
    ];

    console.log(lines.join("\n"));
    return;
  }

  await ensureDir(PUBLIC_ROOT);

  for (const target of COPY_TARGETS) {
    await rmIfExists(target.dest);
    await ensureDir(path.dirname(target.dest));
    await fs.cp(target.src, target.dest, {
      recursive: true,
      force: true,
      filter: (src) =>
        path.basename(src) !== ".DS_Store" && !shouldExcludeArchiveFile(src),
    });
    console.log(`Synced ${target.label} -> ${path.relative(siteRoot, target.dest)}`);
  }

  // The history archive retains source filenames, but the guest-facing floor
  // plan page uses neutral download URLs that do not expose the house number.
  await rmIfExists(PUBLIC_FLOOR_PLAN_ROOT);
  await ensureDir(PUBLIC_FLOOR_PLAN_ROOT);
  for (const [sourceName, publicName] of FLOOR_PLAN_DOWNLOADS) {
    await fs.copyFile(
      path.resolve(SANITIZED_FLOOR_PLAN_ROOT, sourceName),
      path.resolve(PUBLIC_FLOOR_PLAN_ROOT, publicName)
    );
  }
  console.log("Published guest floor plans with neutral filenames");
}

await main();
