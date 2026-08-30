import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

const SENSITIVE_CONTACT_PARAMS = ["arrival", "departure", "guests"] as const;
const GUEST_HANDOFF_PATH = "/stay/guest";

// Legacy versions of the booking picker placed stay details in /contact's
// query string. Strip only those fields before the page (and its analytics)
// renders, while preserving useful attribution such as utm_* and gclid.
export function proxy(request: NextRequest) {
  if (request.method !== "GET" && request.method !== "HEAD") {
    return NextResponse.next();
  }

  const destination = request.nextUrl.clone();

  // Hospitable sends the reservation-specific Guest Portal link through the
  // confirmed booking channel. This public handoff must never accept or retain
  // reservation tokens, booking identifiers, stay dates, access details, or
  // marketing parameters in its URL. Redirect before the page and analytics
  // render. This is defense in depth; callers must still never construct a
  // sensitive URL in the first place because edge/provider request logs may
  // observe the original request.
  if (destination.pathname === GUEST_HANDOFF_PATH) {
    if (!destination.search) return NextResponse.next();
    destination.search = "";
    return NextResponse.redirect(destination, 307);
  }

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
  // Next requires statically analyzable literal matcher values.
  matcher: ["/contact", "/stay/guest"],
};
