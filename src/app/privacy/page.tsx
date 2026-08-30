import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Privacy policy for The Rittenhouse Residence website and booking inquiries.",
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <div className="flex flex-col">
      <section className="py-16 bg-gray-900">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-white">
            Privacy Policy
          </h1>
          <p className="mt-4 text-xl text-gray-300 max-w-2xl mx-auto">
            We respect your privacy and protect your personal information.
          </p>
          <p className="mt-3 text-sm text-gray-400">Updated August 30, 2026</p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 space-y-10 text-gray-700">
          <div>
            <h2 className="font-serif text-2xl font-bold text-gray-900">
              Information We Collect
            </h2>
            <ul className="mt-3 list-disc pl-5 space-y-2">
              <li>
                Contact information and message content you submit through the
                inquiry form or email
              </li>
              <li>
                Dates, party size, occasion, and other details you provide when
                requesting a quote or supporting a stay
              </li>
              <li>
                Basic website-use information such as pages viewed, referral
                source, device/browser information, and approximate location
              </li>
            </ul>
          </div>

          <div>
            <h2 className="font-serif text-2xl font-bold text-gray-900">
              How We Use Information
            </h2>
            <ul className="mt-3 list-disc pl-5 space-y-2">
              <li>To respond to inquiries and provide guest support</li>
              <li>To process bookings and coordinate check-in details</li>
              <li>To help keep the property and guests safe</li>
              <li>
                To understand which pages and marketing sources help prospective
                guests find us
              </li>
            </ul>
          </div>

          <div>
            <h2 className="font-serif text-2xl font-bold text-gray-900">
              Inquiry Security and Analytics
            </h2>
            <p className="mt-3">
              We use an invisible Vercel BotID check, a short-lived signed form
              token, a honeypot, and rate limiting to reduce automated spam. A
              privacy-safe one-way identifier may be derived from connection
              information for rate limiting; the form does not write raw
              IP addresses, names, email addresses, stay dates, or message text to
              application logs.
            </p>
            <p className="mt-3">
              If you carry dates from our booking page into the inquiry form,
              that prefill is stored in your browser session for up to ten minutes
              instead of being placed in the page URL. Google Analytics and Google
              Tag Manager may use browser identifiers to measure aggregate site
              use and completed quote inquiries. We will update this notice if
              dedicated advertising pixels or similar tools are added.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-2xl font-bold text-gray-900">
              Third-Party Services
            </h2>
            <p className="mt-3">
              We use service providers to host the site, screen form submissions,
              deliver inquiry email, and understand site use. If you book through
              a partner platform, its own privacy terms also apply.
            </p>
            <ul className="mt-3 list-disc pl-5 space-y-2">
              <li>
                <a
                  className="text-amber-700 hover:text-amber-800"
                  href="https://vercel.com/legal/privacy-policy"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Vercel Privacy Policy
                </a>{" "}
                (hosting, BotID, and site analytics)
              </li>
              <li>
                <a
                  className="text-amber-700 hover:text-amber-800"
                  href="https://resend.com/legal/privacy-policy"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Resend Privacy Policy
                </a>{" "}
                (inquiry email delivery)
              </li>
              <li>
                <a
                  className="text-amber-700 hover:text-amber-800"
                  href="https://policies.google.com/privacy"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Google Privacy Policy
                </a>{" "}
                (Google Analytics and Tag Manager)
              </li>
              <li>
                <a
                  className="text-amber-700 hover:text-amber-800"
                  href="https://www.airbnb.com/terms/privacy_policy"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Airbnb Privacy Policy
                </a>
              </li>
              <li>
                <a
                  className="text-amber-700 hover:text-amber-800"
                  href="https://www.vrbo.com/legal/privacy-policy"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  VRBO Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="font-serif text-2xl font-bold text-gray-900">
              Retention and Your Choices
            </h2>
            <p className="mt-3">
              We retain inquiry and booking information as reasonably needed to
              respond, support a stay, keep business records, and meet legal
              obligations. You may ask us to correct or delete information you
              submitted, subject to records we need to retain. Browser privacy
              controls and content blockers may limit analytics; blocking the
              security check can prevent the inquiry form from being submitted.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-2xl font-bold text-gray-900">
              Contact
            </h2>
            <p className="mt-3">
              For privacy questions, please{" "}
              <Link className="text-amber-700 hover:text-amber-800" href="/contact">
                contact us
              </Link>
              .
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
