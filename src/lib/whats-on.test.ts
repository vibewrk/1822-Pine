import assert from "node:assert/strict";
import test from "node:test";

import {
  eventsOverlapping,
  groupByWeek,
  isRecurring,
  loadWhatsOn,
  sourceFor,
  type WhatsOnEvent,
} from "@/lib/whats-on";

function event(overrides: Partial<WhatsOnEvent> = {}): WhatsOnEvent {
  return {
    id: "test-event",
    title: "Test event",
    start: "2026-09-01",
    end: "2026-09-01",
    venue: "Test venue",
    neighborhood: "Center City",
    category: "arts",
    note: "A test listing.",
    sourceId: "barnes",
    sourceUrl: "https://example.com/event",
    verifiedAt: "2026-09-01",
    ...overrides,
  };
}

test("loads the typed data file", () => {
  const data = loadWhatsOn();
  assert.equal(data.meta.timezone, "America/New_York");
  assert.ok(data.events.length > 0);
  assert.ok(data.sources.length > 0);
});

test("finds events whose inclusive ranges overlap a window", () => {
  const events = [
    event({ id: "before", start: "2026-08-20", end: "2026-08-31" }),
    event({ id: "left-edge", start: "2026-08-20", end: "2026-09-01" }),
    event({ id: "inside", start: "2026-09-03", end: "2026-09-04" }),
    event({ id: "right-edge", start: "2026-09-07", end: "2026-09-20" }),
    event({ id: "after", start: "2026-09-08", end: "2026-09-20" }),
  ];

  assert.deepEqual(
    eventsOverlapping(events, "2026-09-01", "2026-09-07").map(({ id }) => id),
    ["left-edge", "inside", "right-edge"]
  );
});

test("groups Monday through Sunday and repeats spanning events", () => {
  const spanning = event({
    id: "spanning",
    start: "2026-09-06",
    end: "2026-09-15",
  });
  const weeks = groupByWeek([spanning], "2026-09-09", 3);

  assert.deepEqual(
    weeks.map(({ start, end, events }) => ({
      start,
      end,
      ids: events.map(({ id }) => id),
    })),
    [
      { start: "2026-09-07", end: "2026-09-13", ids: ["spanning"] },
      { start: "2026-09-14", end: "2026-09-20", ids: ["spanning"] },
      { start: "2026-09-21", end: "2026-09-27", ids: [] },
    ]
  );
});

test("identifies only the recurring category", () => {
  assert.equal(isRecurring(event({ category: "recurring" })), true);
  assert.equal(isRecurring(event({ category: "music" })), false);
});

test("resolves an event's declared source", () => {
  const listed = loadWhatsOn().events[0];
  assert.equal(sourceFor(listed)?.id, listed.sourceId);
  assert.equal(sourceFor(event({ sourceId: "missing-source" })), undefined);
});
