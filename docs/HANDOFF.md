# Current website handoff

Last reconciled: 2026-09-02

Canonical repository: `vibewrk/1822-Pine`

Canonical branch: `main`
Production: [rittenhouseresidence.com](https://rittenhouseresidence.com)

This file intentionally stays short. Historical handoff instructions remain in
Git history; they must not compete with current operating truth.

## Begin a session

```bash
git fetch origin
git switch main
git pull --ff-only
npm ci
npm run build
SITE=https://rittenhouseresidence.com bash scripts/verify-seo.sh
```

Then read, in order:

1. [`../AGENTS.md`](../AGENTS.md)
2. [`SITE-TRUTH.md`](SITE-TRUTH.md)
3. the owning source named in the authority map for the task at hand

Do not revive an old branch, deployment instruction, review count, bed count,
provider assumption, or exact availability example from an earlier handoff.

## Current publication baseline

Truth revision `rr-site-2026-09-02.2` records the owner-approved inquiry-only
date policy. The browser carries dates into the quote form but does not ask a
calendar for a public verdict. The compatibility API returns one fixed
acknowledgement and makes no upstream request.

[PR #59](https://github.com/vibewrk/1822-Pine/pull/59), merge
`347763664ecb5c97c459915785f6e30fedf2b0f1`, is the preceding three-state
availability baseline, not the current policy. Verify GitHub and Vercel rather
than treating any pinned SHA as a permanent deployment pointer.

## Stable operating boundaries

- The website is the authority for approved public property and commercial
  presentation; `src/lib/facts.ts` is the aggregate fact source.
- Hospitable through RentalAgent is the reservation/calendar operating source.
- The website accepts inquiries and hands online checkout to Airbnb or Vrbo.
- Marketing and machine markup use block-level location; historical evidence
  is the narrow address exception.
- Source code proves analytics behavior, not provider receipt, delivery,
  revenue, or campaign readiness.
- Advertising, provider settings, Direct/GVR activation, payout, licensing,
  tax, insurance, and spend remain owner-authority decisions.
- Public date handling is inquiry-only. The site may carry dates into an
  inquiry but must not disclose a calendar verdict; see `SITE-TRUTH.md`.

## Verification baseline

Run the production build, lint, contact/security tests, inquiry-boundary tests,
and live SEO/privacy suite for every publication. A dated result is evidence,
not a substitute for rerunning the checks after the next change.
