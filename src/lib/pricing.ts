const currency = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  maximumFractionDigits: 0,
});

export const SAMPLE_WEEKDAY_RATE = 1600;
export const SAMPLE_BEDROOM_RATE = SAMPLE_WEEKDAY_RATE / 8;
export const SAMPLE_FULL_OCCUPANCY_RATE = SAMPLE_WEEKDAY_RATE / 16;

const sampleRate = currency.format(SAMPLE_WEEKDAY_RATE);
const sampleBedroomRate = currency.format(SAMPLE_BEDROOM_RATE);
const sampleGuestRate = currency.format(SAMPLE_FULL_OCCUPANCY_RATE);

export const PRICING_COPY = {
  short:
    `Select weekdays may be available from about ${sampleRate} for the whole house; exact pricing varies by date.`,
  compact: `Some weekdays may be available from about ${sampleRate}; exact pricing varies by date.`,
  long:
    `Select weekdays may be available from about ${sampleRate} for the whole house. Weekends, holidays, and high-demand dates run higher, and your quote or platform checkout will show the exact total for your stay.`,
  example:
    `At a sample ${sampleRate} weekday rate, that works out to ${sampleBedroomRate} per bedroom — or ${sampleGuestRate} per guest with sixteen staying.`,
  sampleRate,
  sampleBedroomRate,
  sampleGuestRate,
} as const;
