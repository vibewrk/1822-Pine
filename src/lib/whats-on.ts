import whatsOnJson from "@/data/whats-on.json";

export type WhatsOnMeta = {
  property?: string;
  timezone: string;
  generatedAt: string;
  coverageFrom: string;
  coverageTo: string;
  method?: string;
  refreshCadence?: string;
  nextVerify: string[];
};

export type WhatsOnSource = {
  id: string;
  name: string;
  url: string;
  kind: string;
};

export type WhatsOnEvent = {
  id: string;
  title: string;
  start: string;
  end: string;
  time?: string;
  venue: string;
  neighborhood: string;
  category: string;
  note: string;
  sourceId: string;
  sourceUrl: string;
  verifiedAt: string;
};

export type NotHappeningItem = {
  title: string;
  note: string;
  verifiedAt: string;
};

export type WhatsOnData = {
  $schema?: string;
  meta: WhatsOnMeta;
  sources: WhatsOnSource[];
  events: WhatsOnEvent[];
  notHappening: NotHappeningItem[];
};

export type WhatsOnWeek = {
  start: string;
  end: string;
  events: WhatsOnEvent[];
};

const whatsOn = whatsOnJson as WhatsOnData;
const sourcesById = new Map(
  whatsOn.sources.map((source) => [source.id, source] as const)
);

export function loadWhatsOn(): WhatsOnData {
  return whatsOn;
}

export function eventsOverlapping(
  events: readonly WhatsOnEvent[],
  fromISO: string,
  toISO: string
): WhatsOnEvent[] {
  return events.filter((event) => event.start <= toISO && event.end >= fromISO);
}

export function isRecurring(event: WhatsOnEvent): boolean {
  return event.category === "recurring";
}

export function sourceFor(event: WhatsOnEvent): WhatsOnSource | undefined {
  return sourcesById.get(event.sourceId);
}

function isLeapYear(year: number): boolean {
  return year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0);
}

function daysInMonth(year: number, month: number): number {
  if (month === 2) return isLeapYear(year) ? 29 : 28;
  return [4, 6, 9, 11].includes(month) ? 30 : 31;
}

function parseISO(iso: string): { year: number; month: number; day: number } {
  const match = /^(\d{4})-(\d{2})-(\d{2})$/.exec(iso);
  if (!match) throw new Error(`Invalid ISO date: ${iso}`);

  const year = Number(match[1]);
  const month = Number(match[2]);
  const day = Number(match[3]);
  if (month < 1 || month > 12 || day < 1 || day > daysInMonth(year, month)) {
    throw new Error(`Invalid ISO date: ${iso}`);
  }
  return { year, month, day };
}

function toOrdinal(iso: string): number {
  const { year, month, day } = parseISO(iso);
  let ordinal =
    year * 365 +
    Math.floor((year - 1) / 4) -
    Math.floor((year - 1) / 100) +
    Math.floor((year - 1) / 400);

  for (let currentMonth = 1; currentMonth < month; currentMonth += 1) {
    ordinal += daysInMonth(year, currentMonth);
  }
  return ordinal + day - 1;
}

function fromOrdinal(ordinal: number): string {
  let year = Math.floor(ordinal / 365);
  while (toOrdinal(`${String(year).padStart(4, "0")}-01-01`) > ordinal) year -= 1;
  while (toOrdinal(`${String(year + 1).padStart(4, "0")}-01-01`) <= ordinal) year += 1;

  let remaining = ordinal - toOrdinal(`${String(year).padStart(4, "0")}-01-01`);
  let month = 1;
  while (remaining >= daysInMonth(year, month)) {
    remaining -= daysInMonth(year, month);
    month += 1;
  }

  return `${String(year).padStart(4, "0")}-${String(month).padStart(2, "0")}-${String(
    remaining + 1
  ).padStart(2, "0")}`;
}

export function addDaysISO(iso: string, days: number): string {
  return fromOrdinal(toOrdinal(iso) + days);
}

function mondayFor(iso: string): string {
  const mondayReference = toOrdinal("1970-01-05");
  const offset = ((toOrdinal(iso) - mondayReference) % 7 + 7) % 7;
  return addDaysISO(iso, -offset);
}

export function groupByWeek(
  events: readonly WhatsOnEvent[],
  fromISO: string,
  weeks: number
): WhatsOnWeek[] {
  if (!Number.isInteger(weeks) || weeks < 0) {
    throw new Error("weeks must be a non-negative integer");
  }

  const firstMonday = mondayFor(fromISO);
  return Array.from({ length: weeks }, (_, index) => {
    const start = addDaysISO(firstMonday, index * 7);
    const end = addDaysISO(start, 6);
    return { start, end, events: eventsOverlapping(events, start, end) };
  });
}
