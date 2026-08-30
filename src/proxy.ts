import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

const SENSITIVE_CONTACT_PARAMS = ["arrival", "departure", "guests"] as const;

// Legacy versions of the booking picker placed stay details in /contact's
// query string. Strip only those fields before the page (and its analytics)
// renders, while preserving useful attribution such as utm_* and gclid.
export function proxy(request: NextRequest) {
  if (request.method !== "GET" && request.method !== "HEAD") {
    return NextResponse.next();
  }

  const destination = request.nextUrl.clone();
  const hasSensitiveParams = SENSITIVE_CONTACT_PARAMS.some((parameter) =>
    destination.searchParams.has(parameter)
  );
  if (!hasSensitiveParams) return NextResponse.next();

  for (const parameter of SENSITIVE_CONTACT_PARAMS) {
    destination.searchParams.delete(parameter);
  }
  return NextResponse.redirect(destination, 307);
}

export const config = {
  matcher: "/contact",
};
