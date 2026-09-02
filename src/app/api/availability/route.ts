// Compatibility response for retired public availability checks.
//
// The website no longer asks RentalAgent whether a public date range is open
// or booked. Keep this URL temporarily so an older cached browser bundle also
// fails private: every request receives the same acknowledgement, no supplied
// dates are echoed, and no upstream credential or calendar is touched.

import { NextRequest, NextResponse } from "next/server";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const INQUIRY_ONLY_RESPONSE = {
  mode: "inquiry_only",
  message: "Availability is confirmed personally after an inquiry.",
} as const;

export async function GET(_request: NextRequest) {
  void _request;
  return NextResponse.json(INQUIRY_ONLY_RESPONSE, {
    headers: {
      "Cache-Control": "no-store",
      "X-Robots-Tag": "noindex, nofollow, nosnippet",
    },
  });
}
