import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Coffee, Home, Users, XCircle } from "lucide-react";
import { BookingCTA } from "@/components/BookingCTA";
import { Eyebrow } from "@/components/Eyebrow";

const SITE = "https://rittenhouseresidence.com";

export const metadata: Metadata = {
  title: "Wedding Guest Housing",
  description:
    "Sleep 16 wedding guests under one roof, two blocks from Rittenhouse Square — 8 bedrooms, group breakfasts at one table, from $1,600/night. Lodging only.",
  alternates: { canonical: "/groups/weddings" },
  openGraph: {
    title: "Wedding Guest Housing | The Rittenhouse Residence",
    description:
      "One historic house that sleeps 16 wedding guests near Rittenhouse Square — 8 bedrooms, breakfasts for the whole group, honest house rules.",
    images: ["/images/property/DSC00118.jpg"],
  },
};

const stats = [
  ["Sleeps 16", "8 bedrooms · 2 kings + 6 queens"],
  ["2 blocks", "From Rittenhouse Square"],
  ["Seats 16", "Group breakfasts at one table"],
  ["24 hours", "To confirm availability and a quote"],
];

const faqs = [
  {
    q: "Can we hold our ceremony or reception at the house?",
    a: "No. The house is lodging for overnight guests — no parties or events, full stop. Where it shines is as the place your wedding guests sleep, share breakfast, and spend the quiet hours of the weekend together.",
  },
  {
    q: "Do peak wedding weekends require a longer stay?",
    a: "The standard minimum is 2 nights, and peak weekends, holidays, and high-demand dates may require a longer stay. One group holds the whole house per date, so popular weekends go early — inquire as soon as your date is set.",
  },
  {
    q: "How does payment work for a wedding-weekend booking?",
    a: "A 50% deposit secures the dates at reservation, and the balance is due 60 days before arrival. Cancellations require 60 days notice for a full refund of the deposit.",
  },
  {
    q: "Where do sixteen people put their luggage on arrival?",
    a: "Waverly Street, directly behind the house, is useful for luggage drop-off before parking — paid garages sit within two blocks. Check-in is 4:00 PM and check-out is 10:00 AM.",
  },
];

const notList = [
  "It is not a place to hold a ceremony or a reception. House rules do not allow parties or events, for any guest, on any date.",
  "It is not a party house. Quiet hours apply, and the block is residential — your guests will sleep, which is the point.",
  "It is not staffed like a hotel. It is a private historic home, and for the weekend it belongs entirely to your people.",
  "Anything beyond overnight lodging — ask us before you book. You will get a straight answer, not a surprise later.",
];

function WeddingsJsonLd() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${SITE}/` },
      { "@type": "ListItem", position: 2, name: "Group Stays", item: `${SITE}/groups` },
      {
        "@type": "ListItem",
        position: 3,
        name: "Wedding Guest Housing",
        item: `${SITE}/groups/weddings`,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
    </>
  );
}

export default function WeddingGuestHousingPage() {
  return (
    <>
      <WeddingsJsonLd />
      <div className="flex flex-col bg-[#fbfaf7] text-stone-950">
        <section className="relative min-h-[620px] overflow-hidden">
          <Image
            src="/images/property/DSC00118.jpg"
            alt="Red-brick Victorian facade of The Rittenhouse Residence with flower boxes and the front door open"
            fill
            sizes="100vw"
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/45 to-black/20" />
          <div className="relative mx-auto flex min-h-[620px] max-w-7xl items-end px-4 pb-16 sm:px-6 lg:px-8">
            <div className="max-w-4xl">
              <Eyebrow light className="mb-5">
                Wedding Guest Housing
              </Eyebrow>
              <h1 className="font-serif text-5xl font-semibold leading-[0.95] text-white md:text-7xl">
                All your wedding guests, one address.
              </h1>
              <p className="mt-7 max-w-3xl text-lg leading-8 text-stone-100 md:text-xl">
                The out-of-town family, the college friends, the wedding party that flew in early —
                sixteen of the people who matter most, sleeping under one roof two blocks from
                Rittenhouse Square instead of scattered across hotel floors.
              </p>
            </div>
          </div>
        </section>

        <section className="border-y border-stone-200 bg-white py-5">
          <div className="mx-auto grid max-w-7xl gap-px overflow-hidden rounded-lg border border-stone-200 bg-stone-200 px-0 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map(([value, label]) => (
              <div key={label} className="bg-stone-50 p-5 text-center">
                <p className="font-serif text-3xl font-semibold text-stone-950">{value}</p>
                <p className="mt-1 text-xs font-semibold uppercase tracking-[0.18em] text-stone-600">
                  {label}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-white py-16 md:py-24">
          <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
            <div>
              <Eyebrow>The Case for One Roof</Eyebrow>
              <h2 className="mt-4 font-serif text-4xl font-semibold leading-tight md:text-5xl">
                The wedding happens in the in-between hours.
              </h2>
              <p className="mt-5 text-lg leading-8 text-stone-700">
                Ask anyone who has been part of one: the ceremony takes an hour, and the weekend
                takes three days. The visits that people fly across the country for happen over
                slow breakfasts, in the hour before everyone dresses, and in the parlor after the
                formal part ends. A block of hotel rooms puts a corridor and an elevator between
                those moments. One house puts a staircase.
              </p>
              <p className="mt-4 text-lg leading-8 text-stone-700">
                The house sleeps sixteen across eight bedrooms — two kings and six queens on floors
                two through four, with six full baths — so grandparents, siblings, and the friends
                who count as family each get a real bedroom, not a rollaway.
              </p>
            </div>
            <div className="grid gap-5 self-start">
              <article className="rounded-lg border border-stone-200 bg-stone-50 p-6">
                <Coffee className="h-6 w-6 text-amber-800" />
                <h3 className="mt-5 font-serif text-2xl font-semibold">
                  Breakfast for the whole guest list under this roof
                </h3>
                <p className="mt-3 leading-7 text-stone-700">
                  The dining room seats all sixteen at one table, with two full kitchens behind it.
                  The morning-after breakfast — the one where the whole weekend gets retold — needs
                  no reservation.
                </p>
              </article>
              <article className="rounded-lg border border-stone-200 bg-stone-50 p-6">
                <Users className="h-6 w-6 text-amber-800" />
                <h3 className="mt-5 font-serif text-2xl font-semibold">
                  Quiet gathering rooms between commitments
                </h3>
                <p className="mt-3 leading-7 text-stone-700">
                  Two parlors and a private roof deck give your guests places to land between the
                  weekend&apos;s fixed points — coffee and conversation, a hand of cards, an early
                  night for those who need one. All within the house rules that keep the block
                  quiet.
                </p>
              </article>
            </div>
          </div>
        </section>

        <section className="bg-stone-100 py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl rounded-lg border border-stone-300 bg-stone-950 p-8 text-stone-100 sm:p-10">
              <Eyebrow light>Honesty, Up Front</Eyebrow>
              <h2 className="mt-4 font-serif text-4xl font-semibold leading-tight text-white md:text-5xl">
                What this house is not.
              </h2>
              <ul className="mt-7 space-y-4">
                {notList.map((item) => (
                  <li key={item} className="flex gap-3 leading-7 text-stone-200">
                    <XCircle className="mt-1 h-5 w-5 flex-none text-amber-200" />
                    {item}
                  </li>
                ))}
              </ul>
              <p className="mt-7 border-t border-stone-700 pt-6 leading-7 text-stone-300">
                We publish this because the same rules that make the house wrong for a reception
                are exactly what make it right for the people you love most: a calm, quiet,
                beautiful place to sleep through the biggest weekend of your year.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-white py-16 md:py-24">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="mb-9">
              <Eyebrow>Wedding-Weekend Questions</Eyebrow>
              <h2 className="mt-4 font-serif text-4xl font-semibold leading-tight md:text-5xl">
                What organizers ask before booking.
              </h2>
            </div>
            <div className="divide-y divide-stone-200 border-y border-stone-200">
              {faqs.map((item) => (
                <div key={item.q} className="py-6">
                  <h3 className="font-serif text-xl font-semibold">{item.q}</h3>
                  <p className="mt-3 leading-7 text-stone-700">{item.a}</p>
                </div>
              ))}
            </div>
            <p className="mt-8 flex items-center gap-2 text-stone-700">
              <Home className="h-4 w-4 text-amber-800" />
              Planning a different kind of group weekend?{" "}
              <Link
                href="/groups"
                className="font-medium text-amber-800 underline underline-offset-4 hover:text-amber-900"
              >
                See all group stays
              </Link>
            </p>
          </div>
        </section>

        <section className="relative py-20 md:py-28">
          <Image
            src="/images/property/DSC00078.jpg"
            alt="Four-poster bedroom with crystal chandelier opening to a sunlit sitting room"
            fill
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/65" />
          <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
            <h2 className="font-serif text-4xl font-semibold leading-tight text-white md:text-5xl">
              Give your guest list the best address of the weekend.
            </h2>
            <p className="mt-5 text-lg text-stone-200 md:text-xl">
              One inquiry covers all sixteen beds. We reply within 24 hours.
            </p>
            <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-md bg-white px-8 py-4 text-base font-semibold text-stone-950 shadow-lg transition-colors hover:bg-stone-100"
              >
                Request a Quote
              </Link>
              <Link
                href="/gallery"
                className="inline-flex items-center justify-center gap-2 rounded-md border border-white/70 px-8 py-4 text-base font-semibold text-white transition-colors hover:bg-white/10"
              >
                See the bedrooms
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </section>

        <section className="bg-[#fbfaf7] py-16">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <BookingCTA />
          </div>
        </section>
      </div>
    </>
  );
}
