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

The last behavior-changing reconciliation is [PR #59](https://github.com/vibewrk/1822-Pine/pull/59),
merge `347763664ecb5c97c459915785f6e30fedf2b0f1`. It includes the current
photo tour, privacy-first property schema, qualified pricing, corrected bed
inventory, RentalAgent availability integration, and conversion-oriented
booking/footer language.

The latest verified production commit may be newer because documentation-only
or later application changes also merge to `main`. Verify GitHub and Vercel
rather than treating this SHA as a permanent deployment pointer.

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
- Public exact-date availability is an unresolved privacy-policy choice; see
  `SITE-TRUTH.md` before describing or changing it.

## Verification baseline

On 2026-09-02, the production build, lint, contact/security tests,
availability tests, responsive browser review, and live SEO/privacy suite all
passed. The live suite reported 84 passes and 0 failures after PR #59.

That result is dated evidence, not a substitute for rerunning the checks after
the next change.
