import { promises as fs } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const scriptDir = path.dirname(fileURLToPath(import.meta.url));
const siteRoot = path.resolve(scriptDir, "..");

async function read(relativePath) {
  return fs.readFile(path.join(siteRoot, relativePath), "utf8");
}

function invariant(condition, message) {
  if (!condition) throw new Error(message);
}

function exportedString(source, name) {
  const match = source.match(
    new RegExp(`export const ${name} = ["']([^"']+)["']`)
  );
  invariant(match, `Could not read ${name} from src/lib/facts.ts`);
  return match[1];
}

const [
  facts,
  agents,
  readme,
  siteTruth,
  handoff,
  integration,
  llms,
  availabilityRoute,
  availabilityInquiry,
  bookingDeepLinks,
  contactPage,
] =
  await Promise.all([
    read("src/lib/facts.ts"),
    read("AGENTS.md"),
    read("README.md"),
    read("docs/SITE-TRUTH.md"),
    read("docs/HANDOFF.md"),
    read("docs/RENTALAGENT-INTEGRATION.md"),
    read("public/llms.txt"),
    read("src/app/api/availability/route.ts"),
    read("src/components/AvailabilityInquiry.tsx"),
    read("src/components/BookingDeepLinks.tsx"),
    read("src/app/contact/page.tsx"),
  ]);

const retiredPlans = await Promise.all(
  [
    "MASTER-CONTENT-INDEX.md",
    "WEBSITE_BUILD_PLAN.md",
    "WEBSITE_REIMAGINATION_PLAN.md",
    "OPERATIONS_MANUAL_BRIEF.md",
    "CONTENT_COMPLIANCE_COSTS.md",
  ].map(async (relativePath) => ({
    relativePath,
    source: await read(relativePath),
  }))
);

const truthRevision = exportedString(facts, "SITE_TRUTH_REVISION");
const reviewFactsAsOf = exportedString(facts, "REVIEW_FACTS_AS_OF");

invariant(
  siteTruth.includes(`Truth revision: \`${truthRevision}\``),
  "docs/SITE-TRUTH.md must identify the exported truth revision"
);
invariant(
  siteTruth.includes(`rechecked on ${reviewFactsAsOf}`),
  "docs/SITE-TRUTH.md must date the review snapshot"
);
invariant(
  llms.includes(`Site truth revision: ${truthRevision}`),
  "public/llms.txt must carry the generated truth revision"
);
invariant(
  llms.includes(`Review snapshot observed: ${reviewFactsAsOf}`),
  "public/llms.txt must date the generated review snapshot"
);
invariant(
  llms.includes(
    "The website does not publish an open, booked, or equivalent verdict"
  ),
  "public/llms.txt must state the inquiry-only date policy"
);
invariant(
  agents.includes("docs/SITE-TRUTH.md") && readme.includes("docs/SITE-TRUTH.md"),
  "Root agent and human entrypoints must route to docs/SITE-TRUTH.md"
);
invariant(
  handoff.includes("SITE-TRUTH.md") && integration.includes("SITE-TRUTH.md"),
  "Current handoff and RentalAgent integration must route through SITE-TRUTH"
);
for (const { relativePath, source } of retiredPlans) {
  invariant(
    source.slice(0, 1_500).includes("SITE-TRUTH.md") &&
      /(?:superseded|historical|dated research)/i.test(source.slice(0, 1_500)),
    `${relativePath} must remain visibly marked as non-authoritative`
  );
}

const currentSurfaces = [agents, readme, siteTruth, handoff, integration, llms].join(
  "\n"
);
for (const stalePattern of [
  /5 queens?\s*(?:\+|and|,)?\s*(?:1|one) double/i,
  /7 queens?/i,
  /sleeps 21/i,
  /4\.89\s*(?:\/|·|across).*93 reviews?/i,
  /production is still commit/i,
]) {
  invariant(
    !stalePattern.test(currentSurfaces),
    `A current truth surface contains a known stale claim: ${stalePattern}`
  );
}

const disclosedAvailabilityEvidence =
  /\b20\d{2}-\d{2}-\d{2}\s*(?:→|->|through|to)\s*(?:\d{1,2}|20\d{2}-\d{2}-\d{2}).{0,160}\b(?:open|booked|available|unavailable|unconfirmed|needs_review)\b/is;
invariant(
  !disclosedAvailabilityEvidence.test(integration),
  "Public integration docs must not preserve a real stay range with its availability result"
);

invariant(
  siteTruth.includes("Public date handling is inquiry-only") &&
    agents.includes("Public date handling is inquiry-only"),
  "Canonical policy surfaces must record the inquiry-only date boundary"
);
invariant(
  availabilityRoute.includes('mode: "inquiry_only"') &&
    !availabilityRoute.includes('status:') &&
    !/(?:fetch\s*\(|process\.env|RENTALAGENT_|check_stay_availability|\/api\/mcp)/.test(
      availabilityRoute
    ),
  "The compatibility route must return inquiry-only without a credential or upstream call"
);
invariant(
  !/fetch\s*\(/.test(availabilityInquiry) &&
    !/(?:\/api\/availability|availability_check|These dates are open|These dates are already booked)/.test(
    [availabilityInquiry, bookingDeepLinks, contactPage].join("\n")
    ),
  "The browser must not query or render public availability verdicts"
);

console.log(
  `Site truth verified (${truthRevision}; reviews observed ${reviewFactsAsOf})`
);
