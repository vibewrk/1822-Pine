# What’s on data

The rolling Philadelphia listings live in `src/data/whats-on.json`. The page reads that file at render time. Each listing must point to the organizer or venue page where its date was checked.

## The JSON contract

`src/data/whats-on.schema.json` describes the file in JSON Schema draft 2020-12. The top-level `$schema` key connects an editor to that schema; the validator ignores the key itself.

The file has four working parts:

- `meta` records the calendar timezone, the date of the full check, the inclusive coverage window, and the sources that need attention next. Dates use `YYYY-MM-DD`.
- `sources` gives each organizer, venue, city office, or other source a stable `id`, a name, an HTTPS URL, and a `kind`.
- `events` contains a stable `id`, title, inclusive `start` and `end` dates, optional free-text `time`, venue, neighborhood, category, note, `sourceId`, direct HTTPS `sourceUrl`, and `verifiedAt` date. Notes are no longer than 160 characters. Use the category `recurring` only for entries meant for the “Every week” strip.
- `notHappening` records a title, note, and checked date for a specific event that readers may otherwise plan around.

An event may begin inside the coverage window and finish after it, or begin before the window and finish inside it. It must overlap the coverage window. Multi-day dates are inclusive.

## Checks

Run:

```bash
npm run check:whats-on
```

The checker fails for missing required fields, invalid ISO dates, an end before a start, duplicate source or event IDs, an unknown `sourceId`, a non-HTTPS source URL, an event note over 160 characters, or an event that does not overlap the declared coverage window.

Age is reported separately. A full check older than 14 days or a listing check older than 45 days prints a warning and does not fail the command. The events page also reports overdue checks in its rolling section. This keeps calendar age visible without blocking an unrelated deploy.

The checker runs during `prebuild` as well.

## Render rules

The events page computes “today” on the server in `meta.timezone`. “This week” is today through six days later. “Coming up” starts after that window and covers eight Monday–Sunday weeks. A multi-day event appears in every week it overlaps. Recurring entries are kept out of those card grids and shown in the compact recurring strip.

Every card prints its checked date and links its title to `sourceUrl`. Empty weeks are omitted. If the current week has no listing, the page points readers to the later weeks. The homepage shows at most three non-recurring entries from the same current-week window and renders no teaser when that window is empty.

The pages revalidate hourly, so the server-rendered windows move forward without a deploy. The long-form calendar and its Article and FAQ structured data remain in place. Do not add schema.org `Event` markup for third-party events.

## Weekly refresh

1. Open every URL in `sources` and re-read the organizer or venue page.
2. Update each event’s `verifiedAt` when its details have been checked. Do not carry a date forward from an aggregator or an old announcement.
3. Add newly published events and retire entries that no longer belong in the coverage window. Keep event IDs stable when an existing listing is updated.
4. Update `notHappening` when a misleading or stale listing needs a specific correction.
5. Update `meta.nextVerify` with the remaining gaps, extend the coverage dates as needed, and set `meta.generatedAt` to the date of the completed full check.
6. Run `npm run check:whats-on` and fix every error. Review warnings rather than suppressing them.
7. Open a pull request with the data changes and any source notes reviewers need.

## wrk.dog target registry

Governed weekly refresh missions (via RentalAgent / wrk.dog) run against the target check registry defined in `.wrkdog/checks.json`. A signed agent mission pins this file by path (`check_registry_path`) and SHA-256 digest (`check_registry_digest`).

The registry declares two required checks:
- `pine-whats-on-data`: runs `scripts/check-whats-on.mjs` to validate the listings data format, source references, and date window constraints.
- `pine-build`: runs `scripts/pine-build-check.mjs` to verify the site's Next.js production build (`next build --webpack`) succeeds without invoking a shell.

Because the signed mission pins `.wrkdog/checks.json` by its cryptographic hash, changing any byte of the registry changes the digest that the next mission must pin.
