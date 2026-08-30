import { PROPERTY_FACTS } from "@/lib/facts";

export const QUOTE_PREFILL_SESSION_KEY = "rittenhouse:quote-prefill:v1";
export const QUOTE_PREFILL_MAX_AGE_MS = 10 * 60 * 1_000;

export type QuotePrefill = {
  arrival: string;
  departure: string;
  guests: number;
  createdAt: number;
};

export type LegacyQuotePrefill = {
  arrival: string;
  departure: string;
  guests: string;
  cleanedSearch: string;
};

const LEGACY_QUOTE_PARAMS = ["arrival", "departure", "guests"] as const;

export function stripLegacyQuotePrefillParams(
  search: string
): LegacyQuotePrefill | null {
  const params = new URLSearchParams(search);
  if (!LEGACY_QUOTE_PARAMS.some((parameter) => params.has(parameter))) {
    return null;
  }

  const legacy = {
    arrival: params.get("arrival") ?? "",
    departure: params.get("departure") ?? "",
    guests: params.get("guests") ?? "",
  };
  for (const parameter of LEGACY_QUOTE_PARAMS) params.delete(parameter);
  const remaining = params.toString();

  return {
    ...legacy,
    cleanedSearch: remaining ? `?${remaining}` : "",
  };
}

export function parseQuotePrefill(
  raw: string | null,
  nowMs = Date.now()
): QuotePrefill | null {
  if (!raw) return null;
  try {
    const value: unknown = JSON.parse(raw);
    if (!value || typeof value !== "object" || Array.isArray(value)) return null;
    const record = value as Record<string, unknown>;
    const arrival = typeof record.arrival === "string" ? record.arrival : "";
    const departure = typeof record.departure === "string" ? record.departure : "";
    const guests = Number(record.guests);
    const createdAt = Number(record.createdAt);
    const age = nowMs - createdAt;
    if (
      !/^\d{4}-\d{2}-\d{2}$/.test(arrival) ||
      !/^\d{4}-\d{2}-\d{2}$/.test(departure) ||
      !Number.isInteger(guests) ||
      guests < 1 ||
      guests > PROPERTY_FACTS.sleeps ||
      !Number.isFinite(createdAt) ||
      age < 0 ||
      age > QUOTE_PREFILL_MAX_AGE_MS
    ) {
      return null;
    }
    return { arrival, departure, guests, createdAt };
  } catch {
    return null;
  }
}
