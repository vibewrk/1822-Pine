import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowLeft,
  BadgeCheck,
  KeyRound,
  LifeBuoy,
  ShieldCheck,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Guest Access",
  description:
    "A privacy-first handoff for confirmed guests of The Rittenhouse Residence.",
  robots: {
    index: false,
    follow: false,
  },
};

const safeguards = [
  {
    title: "Use the link sent with your reservation",
    body: "Hospitable is our secure stay-information provider. Open the unique Guest Portal link in your confirmed booking message or email.",
    Icon: BadgeCheck,
  },
  {
    title: "We do not look up bookings here",
    body: "This public page will never ask for a reservation number, surname, payment detail, identity document, Wi-Fi password, or entry code.",
    Icon: ShieldCheck,
  },
  {
    title: "Sensitive details stay reservation-scoped",
    body: "Arrival and entry information is released only through the approved booking channel at the appropriate stage of a confirmed stay.",
    Icon: KeyRound,
  },
];

export default function GuestAccessPage() {
  return (
    <div className="bg-[#fbfaf7] text-stone-950">
      <section className="bg-stone-950 py-20 md:py-28">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-amber-400">
            Confirmed guests
          </p>
          <h1 className="mt-5 font-serif text-5xl font-semibold leading-tight text-white md:text-6xl">
            Your secure stay information lives in Hospitable.
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-stone-200">
            Use the private Guest Portal link sent with your reservation. There
            is no public booking search or sign-in form on this website.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-5 md:grid-cols-3">
            {safeguards.map(({ title, body, Icon }) => (
              <article
                key={title}
                className="rounded-lg border border-stone-200 bg-white p-6"
              >
                <Icon className="h-6 w-6 text-amber-800" aria-hidden="true" />
                <h2 className="mt-5 font-serif text-2xl font-semibold">
                  {title}
                </h2>
                <p className="mt-3 leading-7 text-stone-700">{body}</p>
              </article>
            ))}
          </div>

          <div className="mt-10 rounded-lg border border-stone-200 bg-white p-7 md:p-9">
            <div className="flex items-start gap-4">
              <LifeBuoy
                className="mt-1 h-6 w-6 flex-none text-amber-800"
                aria-hidden="true"
              />
              <div>
                <h2 className="font-serif text-3xl font-semibold">
                  Cannot find your secure link?
                </h2>
                <p className="mt-3 max-w-2xl leading-7 text-stone-700">
                  Reply through the same booking channel you used to reserve,
                  or contact the host. For your protection, do not send entry
                  codes, identity documents, or payment information through a
                  general website message.
                </p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center rounded-md bg-stone-950 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-stone-800"
                  >
                    Contact the host
                  </Link>
                  <Link
                    href="/book"
                    className="inline-flex items-center justify-center gap-2 rounded-md border border-stone-300 bg-white px-5 py-3 text-sm font-semibold text-stone-950 transition-colors hover:bg-stone-100"
                  >
                    <ArrowLeft className="h-4 w-4" aria-hidden="true" />
                    Not booked yet?
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <p className="mx-auto mt-8 max-w-3xl text-center text-sm leading-6 text-stone-600">
            If a disability makes the secure portal difficult to use, contact
            the host for an accessible alternative. We will verify the
            reservation before sharing stay-specific information.
          </p>
        </div>
      </section>
    </div>
  );
}
