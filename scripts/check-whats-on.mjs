import { readFile } from "node:fs/promises";

const DATA_URL = new URL("../src/data/whats-on.json", import.meta.url);
const errors = [];
const warnings = [];

function recordError(path, message) {
  errors.push(`${path}: ${message}`);
}

function requireObject(value, path) {
  if (!value || typeof value !== "object" || Array.isArray(value)) {
    recordError(path, "must be an object");
    return false;
  }
  return true;
}

function requireArray(value, path) {
  if (!Array.isArray(value)) {
    recordError(path, "must be an array");
    return false;
  }
  return true;
}

function requireString(value, path) {
  if (typeof value !== "string" || value.trim() === "") {
    recordError(path, "must be a non-empty string");
    return false;
  }
  return true;
}

function isLeapYear(year) {
  return year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0);
}

function isISODate(value) {
  const match = /^(\d{4})-(\d{2})-(\d{2})$/.exec(value ?? "");
  if (!match) return false;
  const year = Number(match[1]);
  const month = Number(match[2]);
  const day = Number(match[3]);
  const monthLengths = [31, isLeapYear(year) ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  return month >= 1 && month <= 12 && day >= 1 && day <= monthLengths[month - 1];
}

function requireISODate(value, path) {
  if (!isISODate(value)) {
    recordError(path, "must be a real date in YYYY-MM-DD form");
    return false;
  }
  return true;
}

function requireHttps(value, path) {
  if (!requireString(value, path)) return false;
  try {
    const url = new URL(value);
    if (url.protocol !== "https:") throw new Error("not HTTPS");
  } catch {
    recordError(path, "must be a valid https URL");
    return false;
  }
  return true;
}

function checkDuplicateIds(items, path) {
  const seen = new Set();
  for (const [index, item] of items.entries()) {
    if (typeof item?.id !== "string") continue;
    if (seen.has(item.id)) recordError(`${path}[${index}].id`, `duplicate id ${JSON.stringify(item.id)}`);
    seen.add(item.id);
  }
}

function ageInDays(iso) {
  const then = Date.parse(`${iso}T00:00:00Z`);
  return Math.floor((Date.now() - then) / 86_400_000);
}

let data;
try {
  data = JSON.parse(await readFile(DATA_URL, "utf8"));
} catch (error) {
  console.error(`check:whats-on failed: ${error.message}`);
  process.exit(1);
}

if (!requireObject(data, "root")) {
  printResults();
} else {
  const metaOK = requireObject(data.meta, "meta");
  const sourcesOK = requireArray(data.sources, "sources");
  const eventsOK = requireArray(data.events, "events");
  const notHappeningOK = requireArray(data.notHappening, "notHappening");

  if (metaOK) {
    requireString(data.meta.timezone, "meta.timezone");
    requireISODate(data.meta.generatedAt, "meta.generatedAt");
    requireISODate(data.meta.coverageFrom, "meta.coverageFrom");
    requireISODate(data.meta.coverageTo, "meta.coverageTo");
    requireArray(data.meta.nextVerify, "meta.nextVerify");
    if (Array.isArray(data.meta.nextVerify)) {
      data.meta.nextVerify.forEach((item, index) => requireString(item, `meta.nextVerify[${index}]`));
    }
    if (
      isISODate(data.meta.coverageFrom) &&
      isISODate(data.meta.coverageTo) &&
      data.meta.coverageTo < data.meta.coverageFrom
    ) {
      recordError("meta.coverageTo", "must not be before coverageFrom");
    }
    if (isISODate(data.meta.generatedAt) && ageInDays(data.meta.generatedAt) > 14) {
      warnings.push(`meta.generatedAt is ${ageInDays(data.meta.generatedAt)} days old (threshold: 14)`);
    }
  }

  const sourceIds = new Set();
  if (sourcesOK) {
    checkDuplicateIds(data.sources, "sources");
    data.sources.forEach((source, index) => {
      const path = `sources[${index}]`;
      if (!requireObject(source, path)) return;
      if (requireString(source.id, `${path}.id`)) sourceIds.add(source.id);
      requireString(source.name, `${path}.name`);
      requireHttps(source.url, `${path}.url`);
      requireString(source.kind, `${path}.kind`);
    });
  }

  if (eventsOK) {
    checkDuplicateIds(data.events, "events");
    data.events.forEach((event, index) => {
      const path = `events[${index}]`;
      if (!requireObject(event, path)) return;
      for (const field of ["id", "title", "venue", "neighborhood", "category", "note", "sourceId"]) {
        requireString(event[field], `${path}.${field}`);
      }
      if (event.time !== undefined) requireString(event.time, `${path}.time`);
      const startOK = requireISODate(event.start, `${path}.start`);
      const endOK = requireISODate(event.end, `${path}.end`);
      const verifiedOK = requireISODate(event.verifiedAt, `${path}.verifiedAt`);
      requireHttps(event.sourceUrl, `${path}.sourceUrl`);

      if (startOK && endOK && event.end < event.start) {
        recordError(`${path}.end`, "must not be before start");
      }
      if (
        startOK &&
        endOK &&
        metaOK &&
        isISODate(data.meta.coverageFrom) &&
        isISODate(data.meta.coverageTo) &&
        (event.end < data.meta.coverageFrom || event.start > data.meta.coverageTo)
      ) {
        recordError(path, "does not overlap the declared coverage window");
      }
      if (typeof event.note === "string" && [...event.note].length > 160) {
        recordError(`${path}.note`, `is ${[...event.note].length} characters; maximum is 160`);
      }
      if (typeof event.sourceId === "string" && !sourceIds.has(event.sourceId)) {
        recordError(`${path}.sourceId`, `unknown source id ${JSON.stringify(event.sourceId)}`);
      }
      if (verifiedOK && ageInDays(event.verifiedAt) > 45) {
        warnings.push(`${path}.verifiedAt is ${ageInDays(event.verifiedAt)} days old (threshold: 45)`);
      }
    });
  }

  if (notHappeningOK) {
    data.notHappening.forEach((item, index) => {
      const path = `notHappening[${index}]`;
      if (!requireObject(item, path)) return;
      requireString(item.title, `${path}.title`);
      requireString(item.note, `${path}.note`);
      const verifiedOK = requireISODate(item.verifiedAt, `${path}.verifiedAt`);
      if (verifiedOK && ageInDays(item.verifiedAt) > 45) {
        warnings.push(`${path}.verifiedAt is ${ageInDays(item.verifiedAt)} days old (threshold: 45)`);
      }
    });
  }

  printResults();
}

function printResults() {
  warnings.forEach((warning) => console.warn(`WARNING: ${warning}`));
  if (errors.length > 0) {
    errors.forEach((error) => console.error(`ERROR: ${error}`));
    console.error(`check:whats-on failed with ${errors.length} error${errors.length === 1 ? "" : "s"}.`);
    process.exit(1);
  }
  console.log(`check:whats-on passed${warnings.length ? ` with ${warnings.length} warning${warnings.length === 1 ? "" : "s"}` : ""}.`);
}
