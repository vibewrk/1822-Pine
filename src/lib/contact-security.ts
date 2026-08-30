import { createHmac, randomUUID, timingSafeEqual } from "node:crypto";

import { PROPERTY_FACTS } from "@/lib/facts";

export const CONTACT_BODY_MAX_CHARS = 16_000;
export const FORM_TOKEN_MAX_AGE_MS = 12 * 60 * 60 * 1_000;

const ISO_DATE_REGEX = /^\d{4}-\d{2}-\d{2}$/;
const UUID_REGEX =
  /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const HEADER_CONTROL_CHAR_REGEX = /[\u0000-\u001f\u007f]/;
const MESSAGE_CONTROL_CHAR_REGEX = /[\u0000-\u0008\u000b\u000c\u000e-\u001f\u007f]/;

const INQUIRY_TYPES = ["quote", "booking", "general", "history", "other"] as const;
const OCCASIONS = [
  "family-reunion",
  "wedding",
  "corporate-retreat",
  "milestone",
  "other",
] as const;

type InquiryType = (typeof INQUIRY_TYPES)[number];
type Occasion = (typeof OCCASIONS)[number];

export type ContactSubmission = {
  firstName: string;
  lastName: string;
  email: string;
  inquiryType: InquiryType;
  arrival: string;
  departure: string;
  groupSize: string;
  occasion: Occasion | "";
  dates: string;
  message: string;
  website: string;
  formToken: string;
};

export type ContactValidationResult =
  | { ok: true; data: ContactSubmission }
  | { ok: false; error: string };

type TokenFailureReason =
  | "missing"
  | "malformed"
  | "invalid_signature"
  | "expired";

export type FormTokenVerification =
  | { valid: true; inquiryId: string }
  | { valid: false; reason: TokenFailureReason };

export type RateLimitResult = {
  allowed: boolean;
  remaining: number;
  retryAfterSeconds: number;
  source: "shared" | "memory";
};

type MemoryBucket = { count: number; resetAt: number };

const memoryBuckets = new Map<string, MemoryBucket>();
const MAX_MEMORY_BUCKETS = 5_000;
let lastSharedStoreWarningAt = 0;
let incompleteSharedStoreWarningShown = false;

function isRecord(value: unknown): value is Record<string, unknown> {
  return Boolean(value) && typeof value === "object" && !Array.isArray(value);
}

function readString(
  input: Record<string, unknown>,
  key: string,
  maxLength: number,
  options: { required?: boolean; allowNewlines?: boolean } = {}
): { ok: true; value: string } | { ok: false } {
  const raw = input[key];
  if (raw === undefined || raw === null) {
    return options.required ? { ok: false } : { ok: true, value: "" };
  }
  if (typeof raw !== "string") return { ok: false };

  const value = raw.trim().normalize("NFC");
  if (options.required && !value) return { ok: false };
  if (value.length > maxLength) return { ok: false };

  const invalidControlCharacters = options.allowNewlines
    ? MESSAGE_CONTROL_CHAR_REGEX.test(value)
    : HEADER_CONTROL_CHAR_REGEX.test(value);
  if (invalidControlCharacters) return { ok: false };

  return { ok: true, value };
}

function isOneOf<const T extends readonly string[]>(
  value: string,
  choices: T
): value is T[number] {
  return choices.includes(value as T[number]);
}

function isValidISODate(value: string): boolean {
  if (!ISO_DATE_REGEX.test(value)) return false;
  const parsed = new Date(`${value}T00:00:00Z`);
  return !Number.isNaN(parsed.valueOf()) && parsed.toISOString().slice(0, 10) === value;
}

function addDaysISO(iso: string, days: number): string {
  const date = new Date(`${iso}T00:00:00Z`);
  date.setUTCDate(date.getUTCDate() + days);
  return date.toISOString().slice(0, 10);
}

export function validateContactPayload(
  input: unknown,
  todayUTC = new Date().toISOString().slice(0, 10)
): ContactValidationResult {
  if (!isRecord(input)) {
    return { ok: false, error: "Please complete the form and try again." };
  }

  const firstName = readString(input, "firstName", 80, { required: true });
  const lastName = readString(input, "lastName", 80, { required: true });
  const email = readString(input, "email", 254, { required: true });
  const inquiryType = readString(input, "inquiryType", 30, { required: true });
  const arrival = readString(input, "arrival", 10);
  const departure = readString(input, "departure", 10);
  const groupSize = readString(input, "groupSize", 3);
  const occasion = readString(input, "occasion", 40);
  const dates = readString(input, "dates", 200);
  const message = readString(input, "message", 4_000, { allowNewlines: true });
  const website = readString(input, "website", 500);
  const formToken = readString(input, "formToken", 256, { required: true });

  const allStrings = [
    firstName,
    lastName,
    email,
    inquiryType,
    arrival,
    departure,
    groupSize,
    occasion,
    dates,
    message,
    website,
    formToken,
  ];
  if (allStrings.some((field) => !field.ok)) {
    return {
      ok: false,
      error: "Please check the form fields and try again.",
    };
  }

  // TypeScript cannot preserve the per-item narrowing from Array#some.
  if (
    !firstName.ok ||
    !lastName.ok ||
    !email.ok ||
    !inquiryType.ok ||
    !arrival.ok ||
    !departure.ok ||
    !groupSize.ok ||
    !occasion.ok ||
    !dates.ok ||
    !message.ok ||
    !website.ok ||
    !formToken.ok
  ) {
    return { ok: false, error: "Please check the form fields and try again." };
  }

  if (!EMAIL_REGEX.test(email.value)) {
    return { ok: false, error: "Please enter a valid email address." };
  }
  if (!isOneOf(inquiryType.value, INQUIRY_TYPES)) {
    return { ok: false, error: "Please choose a valid inquiry type." };
  }

  const isQuote = inquiryType.value === "quote";
  if (isQuote) {
    if (!arrival.value || !departure.value || !groupSize.value || !occasion.value) {
      return {
        ok: false,
        error:
          "Quote requests need arrival and departure dates, a group size, and an occasion.",
      };
    }
    if (!isValidISODate(arrival.value) || !isValidISODate(departure.value)) {
      return { ok: false, error: "Please pick valid arrival and departure dates." };
    }
    if (arrival.value < addDaysISO(todayUTC, -1)) {
      return {
        ok: false,
        error: "The arrival date can't be in the past — please pick a future date.",
      };
    }

    const nights = Math.round(
      (Date.parse(departure.value) - Date.parse(arrival.value)) / 86_400_000
    );
    if (!Number.isFinite(nights) || nights < PROPERTY_FACTS.minimumStayNights) {
      return {
        ok: false,
        error: `The house has a ${PROPERTY_FACTS.minimumStayNights}-night minimum — please choose a later departure date.`,
      };
    }

    if (!/^\d{1,2}$/.test(groupSize.value)) {
      return { ok: false, error: "Please choose a valid group size." };
    }
    const guests = Number(groupSize.value);
    if (!Number.isInteger(guests) || guests < 1 || guests > PROPERTY_FACTS.sleeps) {
      return {
        ok: false,
        error: `Please choose a group size between 1 and ${PROPERTY_FACTS.sleeps}.`,
      };
    }
    if (!isOneOf(occasion.value, OCCASIONS)) {
      return { ok: false, error: "Please choose a valid occasion." };
    }
  } else if (!message.value) {
    return { ok: false, error: "Please add a message before sending." };
  }

  return {
    ok: true,
    data: {
      firstName: firstName.value,
      lastName: lastName.value,
      email: email.value,
      inquiryType: inquiryType.value,
      arrival: arrival.value,
      departure: departure.value,
      groupSize: groupSize.value,
      occasion: isOneOf(occasion.value, OCCASIONS) ? occasion.value : "",
      dates: dates.value,
      message: message.value,
      website: website.value,
      formToken: formToken.value,
    },
  };
}

export function isLikelySpam(
  data: Pick<ContactSubmission, "firstName" | "lastName" | "email" | "message">
): boolean {
  const spamPatterns = [
    /\b(viagra|cialis|casino|lottery|bitcoin|crypto|investment opportunity)\b/i,
    /\b(click here|act now|limited time|free money)\b/i,
    /<[^>]*script/i,
    /https?:\/\/[^\s]+\.(ru|cn|xyz|top|gq|ml|ga|cf)\b/i,
  ];
  const combinedText = `${data.firstName} ${data.lastName} ${data.email} ${data.message}`;
  if (spamPatterns.some((pattern) => pattern.test(combinedText))) return true;

  const linkCount = (data.message.match(/(?:https?:\/\/|www\.)/gi) || []).length;
  return linkCount > 3;
}

function formTokenSignature(secret: string, issuedAt: string, inquiryId: string): Buffer {
  return createHmac("sha256", secret)
    .update(`rittenhouse-contact:v1:${issuedAt}:${inquiryId}`)
    .digest();
}

export function createFormToken(
  secret: string,
  issuedAtMs = Date.now(),
  inquiryId = randomUUID()
): string {
  const issuedAt = String(Math.floor(issuedAtMs));
  const signature = formTokenSignature(secret, issuedAt, inquiryId).toString("base64url");
  return `v1.${issuedAt}.${inquiryId}.${signature}`;
}

export function verifyFormToken(
  token: string,
  secret: string,
  nowMs = Date.now()
): FormTokenVerification {
  if (!token) return { valid: false, reason: "missing" };
  const [version, issuedAtRaw, inquiryId, signatureRaw, ...extra] = token.split(".");
  if (
    version !== "v1" ||
    extra.length > 0 ||
    !/^\d{13}$/.test(issuedAtRaw || "") ||
    !UUID_REGEX.test(inquiryId || "") ||
    !signatureRaw
  ) {
    return { valid: false, reason: "malformed" };
  }

  const expected = formTokenSignature(secret, issuedAtRaw, inquiryId);
  let actual: Buffer;
  try {
    actual = Buffer.from(signatureRaw, "base64url");
  } catch {
    return { valid: false, reason: "malformed" };
  }
  if (actual.length !== expected.length || !timingSafeEqual(actual, expected)) {
    return { valid: false, reason: "invalid_signature" };
  }

  const ageMs = nowMs - Number(issuedAtRaw);
  if (ageMs > FORM_TOKEN_MAX_AGE_MS) {
    return { valid: false, reason: "expired" };
  }
  return { valid: true, inquiryId };
}

export function privacySafeIdentifier(secret: string, value: string): string {
  return createHmac("sha256", secret)
    .update(`rittenhouse-contact-rate:v1:${value}`)
    .digest("hex")
    .slice(0, 32);
}

function pruneMemoryBuckets(nowMs: number): void {
  for (const [key, bucket] of memoryBuckets) {
    if (bucket.resetAt <= nowMs) memoryBuckets.delete(key);
  }

  while (memoryBuckets.size >= MAX_MEMORY_BUCKETS) {
    const oldestKey = memoryBuckets.keys().next().value as string | undefined;
    if (!oldestKey) break;
    memoryBuckets.delete(oldestKey);
  }
}

export function consumeMemoryRateLimit(
  key: string,
  limit: number,
  windowSeconds: number,
  nowMs = Date.now()
): RateLimitResult {
  pruneMemoryBuckets(nowMs);
  const existing = memoryBuckets.get(key);
  const bucket =
    existing && existing.resetAt > nowMs
      ? existing
      : { count: 0, resetAt: nowMs + windowSeconds * 1_000 };
  bucket.count += 1;
  memoryBuckets.set(key, bucket);

  return {
    allowed: bucket.count <= limit,
    remaining: Math.max(0, limit - bucket.count),
    retryAfterSeconds: Math.max(1, Math.ceil((bucket.resetAt - nowMs) / 1_000)),
    source: "memory",
  };
}

export function resetMemoryRateLimitsForTests(): void {
  memoryBuckets.clear();
}

async function consumeSharedRateLimit(
  url: string,
  token: string,
  key: string,
  limit: number,
  windowSeconds: number
): Promise<RateLimitResult> {
  const script = [
    "local current = redis.call('INCR', KEYS[1])",
    "if current == 1 then redis.call('EXPIRE', KEYS[1], ARGV[1]) end",
    "local ttl = redis.call('TTL', KEYS[1])",
    "return {current, ttl}",
  ].join("\n");
  const response = await fetch(url, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(["EVAL", script, "1", key, String(windowSeconds)]),
    signal: AbortSignal.timeout(1_000),
  });
  if (!response.ok) throw new Error(`Shared rate-limit store returned ${response.status}`);

  const payload: unknown = await response.json();
  const result = isRecord(payload) ? payload.result : undefined;
  if (!Array.isArray(result) || result.length < 2) {
    throw new Error("Shared rate-limit store returned an invalid response");
  }

  const count = Number(result[0]);
  const ttl = Number(result[1]);
  if (!Number.isFinite(count) || !Number.isFinite(ttl)) {
    throw new Error("Shared rate-limit store returned invalid counters");
  }

  return {
    allowed: count <= limit,
    remaining: Math.max(0, limit - count),
    retryAfterSeconds: Math.max(1, Math.ceil(ttl)),
    source: "shared",
  };
}

export async function consumeContactRateLimit(
  key: string,
  limit: number,
  windowSeconds: number
): Promise<RateLimitResult> {
  const url = process.env.UPSTASH_REDIS_REST_URL || process.env.KV_REST_API_URL;
  const token =
    process.env.UPSTASH_REDIS_REST_TOKEN || process.env.KV_REST_API_TOKEN;

  if (url && token) {
    try {
      return await consumeSharedRateLimit(url, token, key, limit, windowSeconds);
    } catch {
      const now = Date.now();
      if (now - lastSharedStoreWarningAt > 60_000) {
        console.error(
          "Shared contact rate limit unavailable; using per-instance fallback."
        );
        lastSharedStoreWarningAt = now;
      }
    }
  } else if ((url || token) && !incompleteSharedStoreWarningShown) {
    console.error(
      "Shared contact rate limit is only partly configured; using per-instance fallback."
    );
    incompleteSharedStoreWarningShown = true;
  }

  return consumeMemoryRateLimit(key, limit, windowSeconds);
}
