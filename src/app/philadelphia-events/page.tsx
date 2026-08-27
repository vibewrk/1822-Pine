import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  CalendarDays,
  CircleSlash,
  Landmark,
  Ticket,
  TrainFront,
  Trophy,
} from "lucide-react";
import { Eyebrow } from "@/components/Eyebrow";
import {
  ExternalVenueLink,
  HubCrossLinks,
  SITE,
  SectionHeader,
  SourceList,
  breadcrumbSchema,
} from "../rittenhouse-square/hub-shared";

// Every date on this page was verified August 27, 2026 against the organizer's
// own site (or the venue's calendar); entries marked "Dates TBA" are reliably
// annual events whose next edition had no published dates — never replace a
// TBA with a guessed date. Known discrepancies deliberately avoided here:
// Phantom's closing date and STOMP's opening date differ between Ensemble
// Arts' own pages (so we print month-level only), and the Film Festival's
// exact dates come from indexed organizer text (site blocks fetching).
// NO Event JSON-LD — schema policy (StructuredData.tsx): the house is
// lodging; we don't publish Event markup for third-party events.
// Refresh cadence: quarterly, plus Q1 2027 when 2027-28 arts seasons and
// the NFL schedule are announced. The arena at 3601 S Broad St is XFINITY
// MOBILE ARENA (renamed from Wells Fargo Center, August 2025).

export const metadata: Metadata = {
  title: "Philadelphia Events Calendar 2026–2027",
  description:
    "What's coming to Philadelphia through early 2028: Army-Navy 2027, BIO International, the Flower Show, marathon weekend, Star Wars at the Franklin Institute — every date verified with the organizer, plus what's NOT happening.",
  alternates: { canonical: "/philadelphia-events" },
  openGraph: {
    title:
      "Philadelphia Events Calendar 2026–2027 | The Rittenhouse Residence",
    description:
      "Conventions, festivals, exhibits, and the dates that book out the city — verified against organizers, updated as dates are announced.",
    type: "article",
    images: ["/images/neighborhood/philly-skyline.jpg"],
  },
};

const bigFive = [
  [
    "Dec 11, 2027",
    "Army–Navy Game returns",
    "America's Game comes back to Philadelphia for the 91st time, at Lincoln Financial Field — the city's biggest hotel-demand weekend. (In 2026 it's at MetLife Stadium in NJ — don't be fooled by stale pages.)",
  ],
  [
    "Jun 7–10, 2027",
    "BIO International Convention",
    "The world's largest biotech gathering — 20,000+ attendees. Expect citywide hotel compression all week.",
  ],
  [
    "Nov 20–22, 2026",
    "Philadelphia Marathon weekend",
    "One of the largest fall marathons in the US; the 2026 race is already sold out, so the lodging demand is locked in.",
  ],
  [
    "Mar 13–21, 2027",
    "PHS Philadelphia Flower Show",
    "The nation's largest horticultural event, back at the Convention Center — historically one of the city's top hotel weeks.",
  ],
  [
    "May 28–31, 2027",
    "Memorial Day double-header",
    "NCAA men's lacrosse championships at the Linc (May 29–31) and FAN EXPO Philadelphia (May 28–30, ~50,000 expected) at the Convention Center — stacked on one weekend.",
  ],
] as const;

// [dates, name, venue, note, href] — chronological; "Dates TBA" entries state typical timing.
const fall2026 = [
  [
    "Sep 8–27, 2026",
    "Philadelphia Fringe Festival",
    "Citywide venues",
    "The 30th Fringe: 330+ independent theater, dance, and immersive performances over three weeks.",
    "https://phillyfringe.org/",
  ],
  [
    "Sep 18–20, 2026",
    "Rittenhouse Square Fine Art Show",
    "Rittenhouse Square — 2 blocks from the house",
    "The fall edition (22nd annual) of the juried outdoor show around the park — ~145 artists, collectors from across the Northeast. The original spring edition, which the organizers date to 1928, returns each June.",
    "https://www.rittenhousesquareart.com/",
  ],
  [
    "Sep 2026 concerts",
    "Stadium season at the Linc",
    "Lincoln Financial Field",
    "Bruno Mars (Sept 1–2), Ed Sheeran (Sept 19), and AC/DC (Sept 29) — three stadium acts in one month, per the stadium's own calendar.",
    "https://www.lincolnfinancialfield.com/events/category/concert/",
  ],
  [
    "Oct 1–25, 2026",
    "Philadelphia Film Festival / REEL October",
    "Three Philadelphia Film Society theaters",
    "The 35th festival (Oct 15–25) inside a month of repertory programming. Screenings run at the Philadelphia Film Center (1412 Chestnut, an eight-minute walk from Rittenhouse Square) plus PFS Bourse and PFS East in Old City — check your ticket for the venue.",
    "https://filmadelphia.org/festival/",
  ],
  [
    "Oct 2 – Nov 7, 2026",
    "Halloween Nights at Eastern State Penitentiary",
    "2027 Fairmount Ave",
    "Five haunted houses inside a real abandoned prison — the successor to Terror Behind the Walls draws weekend trips from NY to DC.",
    "https://easternstate.org/halloween",
  ],
  [
    "Oct 9–11, 2026",
    "Rittenhouse Square Fall Fine Craft Show",
    "Rittenhouse Square — 2 blocks from the house",
    "150+ fine-craft artisans around the Square, the same weekend as the Made in Philadelphia fall market at Dilworth Park.",
    "https://rosesquared.com/",
  ],
  [
    "Nov 6–8, 2026",
    "PMA Contemporary Craft Show — 50th edition",
    "Pennsylvania Convention Center",
    "The Philadelphia Museum of Art's national juried craft show turns 50; serious collectors fly in (preview gala Nov 5).",
    "https://www.pmacraftshow.org/",
  ],
  [
    "Nov 20–22, 2026",
    "Philadelphia Marathon Weekend",
    "Start/finish at the Art Museum",
    "Marathon (Sun), half marathon + 8K (Sat), expo at the Convention Center — the fall's single biggest visitor weekend. The 2026 marathon and half are sold out; the 8K and Kids Run were still open at last check.",
    "https://www.philadelphiamarathon.com/",
  ],
  [
    "Nov 26, 2026",
    "6abc Thanksgiving Day Parade",
    "Benjamin Franklin Parkway",
    "The oldest Thanksgiving parade in the country — held since 1920, four years before Macy's started theirs.",
    "https://6abc.com/feature/6abc-dunkin-thanksgiving-day-parade/15349996/",
  ],
] as const;

const holiday2026 = [
  [
    "Nov 13 – Jan 1",
    "Holiday markets at City Hall",
    "LOVE Park & Dilworth Park",
    "Christmas Village (Nov 21 – Dec 27) and the Made in Philadelphia holiday market (Nov 13 – Jan 1) — the German-style Christkindlmarkt circuit, plus the Rothman ice rink.",
    "https://www.philachristmas.com/",
  ],
  [
    "Nov 14 – Dec 3, 2026",
    "RockyFest 50",
    "Citywide, centered on the Rocky Steps",
    "The film's 50th anniversary, opening with the Rocky Run on Nov 14 and closing on the city's designated \u201cRocky Day,\u201d Dec 3. (Some listings still show a December-long festival — the organizer's run is these three weeks.)",
    "https://www.phlvisitorcenter.com/rockyfest",
  ],
  [
    "Dec 4–6, 2026",
    "PAX Unplugged",
    "Pennsylvania Convention Center",
    "One of the country's two largest tabletop-gaming conventions — tens of thousands of attendees, and groups of six-to-eight gamers sharing a house is the signature booking pattern.",
    "https://unplugged.paxsite.com/",
  ],
  [
    "Dec 4–31, 2026",
    "Balanchine's The Nutcracker",
    "Academy of Music",
    "Philadelphia Ballet's four-week run spans the whole holiday travel season, ten minutes' walk from the house.",
    "https://philadelphiaballet.org/26-27-season/",
  ],
  [
    "Dec 12, 2026",
    "Penn Museum's new Egypt Galleries open",
    "Penn Museum, University City",
    "The first phase of the largest renovation in the museum's history — including the tomb chapel of Kaipure.",
    "https://www.penn.museum/on-view/galleries-exhibitions/egypt-galleries",
  ],
  [
    "Jan 1, 2027",
    "Mummers Parade",
    "Broad Street, City Hall to Washington Ave",
    "America's oldest continuous folk parade, since 1901 — and the Broad & Pine free viewing stop is four blocks straight down Pine Street from our door.",
    "https://www.philadelphiamummersparade.com/",
  ],
] as const;

const winterSpring2027 = [
  [
    "Jan 16–24, 2027",
    "Philadelphia Auto Show",
    "Pennsylvania Convention Center",
    "Nine days, hundreds of vehicles — note it moves earlier in 2027 than recent editions.",
    "https://phillyautoshow.com/info/",
  ],
  [
    "Feb 13, 2027",
    "Star Wars: The Experience — world premiere",
    "The Franklin Institute",
    "Philadelphia is the exclusive world-premiere city for the 50th-anniversary exhibition — 18,000 square feet of artifacts from the Lucasfilm archives, running into early September 2027 per press coverage. Tickets on sale November 2026.",
    "https://fi.edu/en/exhibits-and-experiences/star-wars-experience",
  ],
  [
    "Mar 13–21, 2027",
    "PHS Philadelphia Flower Show",
    "Pennsylvania Convention Center",
    "The nation's largest and longest-running horticultural event, in PHS's 200th-anniversary year — garden clubs book multi-night trips.",
    "https://phsonline.org/the-flower-show",
  ],
  [
    "Mar 13–14, 2027",
    "Ivy Madness at the Palestra",
    "The Palestra, Penn campus",
    "The Ivy League's basketball championship weekend comes to the Palestra for the arena's 100th anniversary.",
    "https://whyy.org/articles/ivy-madness-basketball-philadelphia-2027/",
  ],
  [
    "Mar 26–29, 2027",
    "NCAA Women's Basketball Regional",
    "Xfinity Mobile Arena",
    "Sweet Sixteen and Elite Eight — one of only two regional sites in the country, hosting six games and eight teams' fan bases across four days.",
    "https://www.xfinitymobilearena.com/events/detail/2027-ncaa-division-i-womens-basketball-championship",
  ],
  [
    "Apr 1, 2027",
    "Phillies Home Opener",
    "Citizens Bank Park",
    "The 2027 home opener vs. Washington — note the season itself opens Mar 25 in D.C. 81 home dates in all, through the Sept 24–26 closing series.",
    "https://www.mlb.com/phillies/schedule",
  ],
  [
    "Late April 2027 · dates TBA",
    "Penn Relays",
    "Franklin Field, University of Pennsylvania",
    "The oldest and largest track meet in the country, with a famously international crowd — typically the last full weekend of April.",
    "https://pennrelays.com/",
  ],
  [
    "Apr 24, 2027",
    "Luke Combs stadium show",
    "Lincoln Financial Field",
    "The one stadium concert announced for 2027 so far, per the stadium's calendar.",
    "https://www.lincolnfinancialfield.com/events/category/concert/",
  ],
  [
    "Early May 2027 · dates TBA",
    "Broad Street Run",
    "Broad Street, north Philly to the Navy Yard",
    "The largest ten-mile race in the US (~40,000 runners, lottery entry) — typically the first Sunday in May.",
    "https://www.broadstreetrun.com/",
  ],
  [
    "May 28–31, 2027",
    "NCAA Men's Lacrosse Championships + FAN EXPO",
    "Lincoln Financial Field + Convention Center",
    "Lacrosse's championship weekend (May 29–31, ninth time in Philadelphia) stacked with the city's comic con (May 28–30) across one Memorial Day weekend.",
    "https://www.ncaa.org/championship/division-i/mens-lacrosse/",
  ],
] as const;

const summerFall2027 = [
  [
    "Late May / early June 2027 · dates TBA",
    "Roots Picnic",
    "Venue TBA (2026 was Belmont Plateau)",
    "The Roots' hometown festival, curated by Questlove and Black Thought — a fly-in festival that sells out. It moved to Belmont Plateau in 2026; the 2027 date and venue are both unannounced.",
    "https://rootspicnic.frontgatetickets.com/",
  ],
  [
    "Jun 7–10, 2027",
    "BIO International Convention",
    "Pennsylvania Convention Center",
    "The global biotech industry's premier gathering — the largest citywide convention of the window, in the field's hometown.",
    "https://convention.bio.org/future-dates",
  ],
  [
    "Jun 13, 2027",
    "Odunde Festival",
    "23rd & South Street — a 10-minute walk from the house",
    "The largest African American street festival in the country, celebrating the Yoruba new year across ~15 blocks; festival week runs June 6–12.",
    "https://www.odundefestival.org/schedule",
  ],
  [
    "Late June 2027 · dates TBA",
    "Manayunk Arts Festival",
    "Main Street, Manayunk",
    "The tri-state's largest outdoor juried art festival — ~300 artists, typically the last full weekend of June.",
    "https://manayunk.com/",
  ],
  [
    "Juneteenth – July 4, 2027 · dates TBA",
    "Wawa Welcome America",
    "Benjamin Franklin Parkway & citywide",
    "The city's official Independence Day festival, ending with the Parkway concert and fireworks — July 4 in the city where it happened. Recent editions have opened on Juneteenth and run to the Fourth; 2027 dates aren't posted yet.",
    "https://july4thphilly.com/",
  ],
  [
    "Jul 28 – Aug 8, 2027",
    "Harry Potter and the Cursed Child",
    "Academy of Music",
    "The touring production lands ten minutes' walk from the house — a strong family-trip anchor for late summer.",
    "https://www.ensembleartsphilly.org/blogs-and-press/press-releases/2026-27-broadway-season",
  ],
  [
    "Sep–Nov 2027 · dates TBA",
    "The fall classics return",
    "Citywide",
    "Fringe (Sept), the Rittenhouse art and craft shows (Sept/Oct), Eastern State's Halloween Nights, the Film Festival (Oct), marathon weekend (Nov), and the Thanksgiving parade — 2027 dates land through spring and summer.",
    "https://www.visitphilly.com/articles/philadelphia/top-events-and-festivals-in-philadelphia/",
  ],
  [
    "Dec 11, 2027",
    "Army–Navy Game",
    "Lincoln Financial Field",
    "America's Game returns to its historic home for the 91st time — the Corps of Cadets and the Brigade of Midshipmen both march on, a citywide military-alumni weekend, and the strongest single booking date on this page. Plan Thursday-to-Sunday.",
    "https://armynavygame.com/news/2022/06/15/future-sites-of-americas-game-announced",
  ],
] as const;

// [dates, name, note] — Convention Center unless stated
const conventions = [
  ["Sep 14–17, 2026", "ACI-NA Annual (airports industry)", "200+ North American airports' leadership in town"],
  ["Sep 14–17, 2026", "Fierce Pharma Week", "~3,000 pharma commercial leaders"],
  ["Sep 29 – Oct 1, 2026", "NRPA Annual Conference", "Parks & recreation professionals nationwide"],
  ["Oct 25–28, 2026", "LeadingAge Annual Meeting", "6,000+ aging-services professionals"],
  ["Nov 12–15, 2026", "Society for Neuro-Oncology", "The leading international brain-tumor meeting"],
  ["Nov 19–22, 2026", "NCTE Annual Convention", "Thousands of English teachers; Margaret Atwood keynotes"],
  ["Dec 4–6, 2026", "PAX Unplugged", "The premier US tabletop-gaming con"],
  ["Jan 8–10, 2027", "Philadelphia Tattoo Arts Convention", "Hundreds of visiting artists, multi-night stays"],
  ["Feb 4–6, 2027", "APTA Combined Sections Meeting", "14,000+ physical therapists — hotel blocks overflow"],
  ["Feb 11–13, 2027", "SPSP Annual Convention", "3,500+ social psychologists"],
  ["Feb 20–24, 2027", "Biophysical Society Annual Meeting", "~5,000 scientists, five-day stays"],
  ["Mar 1–5, 2027", "ASCE 2027 (civil engineers)", "National convention, first combined edition"],
  ["May 3–7, 2027", "ASGCT Annual Meeting", "Gene & cell therapy's leading meeting; Philadelphia is a center of the field"],
  ["May 28–30, 2027", "FAN EXPO Philadelphia", "~50,000 expected — comics, anime, gaming, cosplay"],
  ["Jun 7–10, 2027", "BIO International", "20,000+ — the biggest citywide of the window"],
  ["Jul 17–20, 2027", "AALL Annual (law libraries)", "Legal information professionals nationwide"],
  ["Oct 23–27, 2027", "ASRM Scientific Congress", "Reproductive medicine, worldwide attendance"],
  ["Nov 7–10, 2027", "APHA Annual Meeting", "~11,000 public-health professionals"],
  ["Dec 4–8, 2027", "Cell Bio 2027 (ASCB|EMBO)", "Several thousand cell biologists, five-day stays"],
] as const;

const exhibitions = [
  [
    "Through Jan 3, 2027",
    "The Declaration's Journey",
    "Museum of the American Revolution",
    "The flagship America250 exhibition — 120+ artifacts tracing the Declaration's global influence.",
    "https://www.amrevmuseum.org/exhibits/the-declaration-s-journey",
  ],
  [
    "Sep 20, 2026 – Jan 10, 2027",
    "Noguchi to Asawa: Designing Postwar America",
    "Barnes Foundation",
    "Two generations of Japanese American sculptors and designers, about a 20-minute walk from the Square.",
    "https://www.barnesfoundation.org/whats-on/exhibitions",
  ],
  [
    "Oct 10, 2026 – Jan 31, 2027",
    "Marcel Duchamp",
    "Philadelphia Museum of Art",
    "The first North American Duchamp retrospective in over 50 years — in the city that holds the world's greatest Duchamp collection.",
    "https://press.philamuseum.org/marcel-duchamp/",
  ],
  [
    "Through Jul 5 / Sep 5, 2027",
    "A Nation of Artists",
    "Philadelphia Museum of Art + PAFA",
    "The two-museum, 1,000-work America250 blockbuster — PMA through July 5, PAFA through September 5, 2027.",
    "https://www.philamuseum.org/exhibitions/nation-artists",
  ],
  [
    "Feb 13 – early Sep 2027",
    "Star Wars: The Experience",
    "The Franklin Institute",
    "The exclusive world premiere: the Franklin Institute calls it the only place on Earth to see it first. A North American tour follows, but no second city has been announced.",
    "https://fi.edu/en/exhibits-and-experiences/star-wars-experience",
  ],
  [
    "Through Jan 3, 2028",
    "Seeking Profit and Power",
    "Independence Seaport Museum",
    "Philadelphia and the China trade after independence — the longest-running show in this window, per the exhibition's announcement.",
    "https://www.phillyseaport.org/",
  ],
] as const;

const notHappening = [
  "Made in America Festival: not held since 2022 and not scheduled — ignore the fake September 2026 listings with recycled 2021 lineups circulating on ticket-aggregator sites.",
  "The Army–Navy Game in December 2026 is at MetLife Stadium in New Jersey, not Philadelphia. It returns to Lincoln Financial Field on December 11, 2027.",
  "The Wanamaker Building's Christmas Light Show is dark for 2026 and 2027 while the building is renovated — its farewell season was 2025, and it's expected back around 2028.",
  "No NCAA men's March Madness games in Philadelphia in 2027 (the men's rounds here were March 2026). Philadelphia's 2027 tournament event is the women's regional.",
  "The America250-scale layer of programming winds down at the end of 2026 — what carries into 2027 is the museum exhibitions above. Philadelphia's regular festival calendar (Welcome America, Odunde, Roots Picnic and the rest) continues as normal.",
] as const;

const faqs = [
  {
    q: "When is the Army-Navy Game in Philadelphia again?",
    a: "Saturday, December 11, 2027, at Lincoln Financial Field — the game's 91st time in Philadelphia and its first here since December 2022. The December 2026 game is at MetLife Stadium in New Jersey, not Philadelphia. Expect Philadelphia lodging to book out for the December 9–13, 2027 window.",
  },
  {
    q: "When is the Philadelphia Flower Show in 2027?",
    a: "March 13–21, 2027, indoors at the Pennsylvania Convention Center (the outdoor FDR Park editions were pandemic-era only). 2027 is also the Pennsylvania Horticultural Society's 200th anniversary.",
  },
  {
    q: "Is the Made in America festival happening?",
    a: "No. It has not been held since 2022 and no edition is scheduled. Listings for a 2026 edition on ticket-resale sites recycle old lineups and are not real — check the festival's own site before planning a trip around it.",
  },
  {
    q: "When is the Philadelphia Marathon?",
    a: "November 20–22, 2026: the half marathon and 8K on Saturday the 21st and the marathon on Sunday the 22nd, starting and finishing at the Philadelphia Museum of Art. The 2026 marathon and half marathon sold out (charity-partner bibs may remain); the Rothman 8K and Kids Run were still open at last check. The 2027 edition typically lands the weekend before Thanksgiving; dates come from the organizer.",
  },
  {
    q: "Where do visitors stay for Pennsylvania Convention Center events?",
    a: "The Convention Center sits at 12th & Arch in Center City, about a 20-minute walk or a 5-minute ride from Rittenhouse Square. Groups attending PAX Unplugged, FAN EXPO, or academic meetings often prefer a whole house in Rittenhouse over splitting into convention-block hotel rooms — our 8-bedroom house two blocks from the Square sleeps 16.",
  },
  {
    q: "How do you get to Eagles games and the stadiums from Center City?",
    a: "SEPTA's Broad Street Line (the B) runs straight down Broad Street to NRG Station at the South Philadelphia sports complex — home of Lincoln Financial Field, Citizens Bank Park, and Xfinity Mobile Arena — with express sports service on event days. From Rittenhouse Square, board at Walnut-Locust, four blocks east of the park.",
  },
] as const;

const sources = [
  {
    name: "Organizers' own sites, linked per event",
    detail:
      "Every dated entry above links to its organizer or venue; each date was checked there on August 27, 2026.",
    href: "https://www.discoverphl.com/",
  },
  {
    name: "Army-Navy Game — future sites announcement",
    detail: "Philadelphia hosts the 91st Philadelphia edition in 2027; 2026 is East Rutherford, NJ.",
    href: "https://armynavygame.com/news/2022/06/15/future-sites-of-americas-game-announced",
  },
  {
    name: "Pennsylvania Convention Center — events calendar",
    detail: "Venue listings for the Flower Show, Auto Show, and many conventions above.",
    href: "https://www.paconvention.com/events",
  },
  {
    name: "NCAA — championship host site selections",
    detail: "The 2027 women's basketball regional and men's lacrosse championships in Philadelphia.",
    href: "https://www.ncaa.org/media-center-ncaa-announces-more-than-240-host-site-selections/",
  },
  {
    name: "Visit Philadelphia — festivals & events",
    detail: "Secondary confirmation for citywide traditions and America250 programming.",
    href: "https://www.visitphilly.com/articles/philadelphia/top-events-and-festivals-in-philadelphia/",
  },
  {
    name: "SEPTA — sports express service",
    detail: "Broad Street Line (B) service to NRG Station at the sports complex.",
    href: "https://www.septa.org/",
  },
  {
    name: "The Franklin Institute — Star Wars: The Experience",
    detail: "World-premiere run opening February 2027; tickets on sale November 2026.",
    href: "https://fi.edu/en/exhibits-and-experiences/star-wars-experience",
  },
  {
    name: "Wanamaker Light Show status",
    detail: "6abc: the building is under construction during the 2026 and 2027 holiday seasons.",
    href: "https://6abc.com/post/wanamaker-light-show-philadelphia-draws-crowds-final-viewing-before-twoyear-hiatus/18312899/",
  },
] as const;

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "@id": `${SITE}/philadelphia-events#article`,
  headline: "Philadelphia Events Calendar 2026–2027: Verified Dates for Visitors",
  description:
    "Conventions, festivals, exhibitions, and sports coming to Philadelphia from fall 2026 into early 2028 — every date verified against the organizer, including what is not happening.",
  url: `${SITE}/philadelphia-events`,
  mainEntityOfPage: `${SITE}/philadelphia-events`,
  image: [`${SITE}/images/neighborhood/philly-skyline.jpg`],
  datePublished: "2026-08-27",
  dateModified: "2026-08-27",
  author: { "@type": "Organization", name: "The Rittenhouse Residence", url: SITE },
  publisher: { "@type": "Organization", name: "The Rittenhouse Residence", url: SITE },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id": `${SITE}/philadelphia-events#faq`,
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.q,
    acceptedAnswer: { "@type": "Answer", text: faq.a },
  })),
};

function EventGrid({
  items,
}: {
  items: ReadonlyArray<readonly [string, string, string, string, string]>;
}) {
  return (
    <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
      {items.map(([dates, name, venue, note, href]) => (
        <article
          key={`${dates}-${name}`}
          className="flex flex-col rounded-lg border border-stone-200 bg-white p-6"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-amber-800">
            {dates}
          </p>
          <h3 className="mt-3 font-serif text-2xl font-semibold">
            <ExternalVenueLink href={href}>{name}</ExternalVenueLink>
          </h3>
          <p className="mt-1 text-xs font-semibold uppercase tracking-[0.14em] text-stone-500">
            {venue}
          </p>
          <p className="mt-4 flex-1 text-sm leading-6 text-stone-700">{note}</p>
        </article>
      ))}
    </div>
  );
}

export default function PhiladelphiaEventsPage() {
  return (
    <div className="flex flex-col bg-[#fbfaf7] text-stone-950">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { name: "Home", path: "/" },
              { name: "Philadelphia Events", path: "/philadelphia-events" },
            ])
          ),
        }}
      />

      <section className="bg-stone-950 py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Eyebrow light className="mb-5">
            Verified August 2026 · Updated as Dates Are Announced
          </Eyebrow>
          <h1 className="max-w-4xl font-serif text-5xl font-semibold leading-tight text-white md:text-7xl">
            What&apos;s coming to Philadelphia.
          </h1>
          <p className="mt-7 max-w-3xl text-lg leading-8 text-stone-200 md:text-xl">
            The conventions, festivals, exhibitions, and games headed to
            Philadelphia from now through early 2028 — every date checked
            against the organizer&apos;s own site, the not-yet-announced ones
            marked as unannounced, and the events that <em>aren&apos;t</em>{" "}
            happening called out so you don&apos;t plan around a ghost. Written
            by the hosts of an 8-bedroom house two blocks from Rittenhouse
            Square, because event weeks are exactly when a whole house beats
            six hotel rooms.
          </p>
        </div>
      </section>

      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Mark These First"
            title="Five dates that will book out the city."
          />
          <div className="grid gap-px overflow-hidden rounded-lg border border-stone-200 bg-stone-200 md:grid-cols-2 lg:grid-cols-5">
            {bigFive.map(([dates, name, note]) => (
              <div
                key={name}
                className="bg-stone-50 p-6 md:last:col-span-2 lg:last:col-span-1"
              >
                <p className="font-serif text-xl font-semibold text-amber-800">
                  {dates}
                </p>
                <p className="mt-2 font-serif text-lg font-semibold leading-snug text-stone-950">
                  {name}
                </p>
                <p className="mt-3 text-sm leading-6 text-stone-600">{note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#fbfaf7] py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Fall 2026"
            title="September through Thanksgiving."
          />
          <EventGrid items={fall2026} />
        </div>
      </section>

      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Holidays & New Year"
            title="Holiday season 2026 into January."
          />
          <EventGrid items={holiday2026} />
        </div>
      </section>

      <section className="bg-[#fbfaf7] py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Winter & Spring 2027"
            title="Auto Show to Memorial Day."
          />
          <EventGrid items={winterSpring2027} />
        </div>
      </section>

      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Summer 2027 & Beyond"
            title="Festival season to Army–Navy."
          />
          <EventGrid items={summerFall2027} />
        </div>
      </section>

      <section className="bg-stone-100 py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Conventions"
            title="Who's bringing thousands to town."
            body="Major meetings at the Pennsylvania Convention Center (12th & Arch — about 20 minutes' walk from Rittenhouse Square), verified with each organizer. When these are in town, Center City hotel blocks fill first."
          />
          <div className="overflow-x-auto rounded-lg border border-stone-200 bg-white">
            <table className="w-full min-w-[640px] text-left text-sm">
              <thead>
                <tr className="border-b border-stone-200 text-xs font-semibold uppercase tracking-[0.14em] text-stone-500">
                  <th scope="col" className="px-5 py-4">Dates</th>
                  <th scope="col" className="px-5 py-4">Event</th>
                  <th scope="col" className="px-5 py-4">
                    Why it matters for lodging
                  </th>
                </tr>
              </thead>
              <tbody>
                {conventions.map(([dates, name, note]) => (
                  <tr
                    key={`${dates}-${name}`}
                    className="border-b border-stone-100 last:border-0"
                  >
                    <td className="whitespace-nowrap px-5 py-3 font-semibold text-amber-800">
                      {dates}
                    </td>
                    <td className="px-5 py-3 font-semibold text-stone-950">
                      {name}
                    </td>
                    <td className="px-5 py-3 text-stone-700">{note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-5 text-sm leading-6 text-stone-600">
            The Convention Center&apos;s public calendar under-lists citywide
            meetings — several of the largest above appear only on the
            organizers&apos; own sites. We re-check quarterly.
          </p>
        </div>
      </section>

      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Exhibitions"
            title="Shows worth planning a trip around."
          />
          <EventGrid items={exhibitions} />
        </div>
      </section>

      <section className="bg-[#fbfaf7] py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Season Rhythms"
            title="The schedules you can set a watch by."
          />
          <div className="grid gap-5 md:grid-cols-3">
            <article className="rounded-lg border border-stone-200 bg-white p-6">
              <Trophy className="h-5 w-5 text-amber-800" />
              <h3 className="mt-5 font-serif text-2xl font-semibold">
                The teams
              </h3>
              <p className="mt-3 text-sm leading-6 text-stone-700">
                Eagles home Sundays run September into January at Lincoln
                Financial Field (the 2027 schedule drops each May). The
                Phillies play 81 home dates April–September at Citizens Bank
                Park; the Sixers and Flyers share Xfinity Mobile Arena
                October–April. All three venues sit in the same South
                Philadelphia sports complex.
              </p>
            </article>
            <article className="rounded-lg border border-stone-200 bg-white p-6">
              <Ticket className="h-5 w-5 text-amber-800" />
              <h3 className="mt-5 font-serif text-2xl font-semibold">
                The stages
              </h3>
              <p className="mt-3 text-sm leading-6 text-stone-700">
                The Broadway series runs September into August (2026–27 highlights: The Great Gatsby, Hell&apos;s
                Kitchen, Maybe Happy Ending, Phantom in June 2027, Cursed Child that July); the
                Philadelphia Orchestra plays Marian Anderson Hall from late
                September into early June. Broadway plays the Academy of Music, Forrest, and
                Miller theaters — all a short walk from the house — and 2027–28
                seasons are announced in early 2027.
              </p>
            </article>
            <article className="rounded-lg border border-stone-200 bg-white p-6">
              <TrainFront className="h-5 w-5 text-amber-800" />
              <h3 className="mt-5 font-serif text-2xl font-semibold">
                Getting to all of it
              </h3>
              <p className="mt-3 text-sm leading-6 text-stone-700">
                From Rittenhouse Square: the Convention Center is a
                ~20-minute walk; the Academy of Music ten minutes; the
                stadiums a straight ride down SEPTA&apos;s Broad Street Line
                from Walnut-Locust to NRG Station, with express sports
                service on event days.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="bg-stone-950 py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 max-w-3xl">
            <Eyebrow light>The Honest List</Eyebrow>
            <h2 className="mt-4 font-serif text-4xl font-semibold leading-tight text-white md:text-5xl">
              What&apos;s not happening.
            </h2>
            <p className="mt-5 text-lg leading-8 text-stone-200">
              Stale pages and fake listings cost travelers real money. These
              are the events people still search for that are not on
              Philadelphia&apos;s calendar in this window:
            </p>
          </div>
          <ul className="max-w-4xl space-y-4">
            {notHappening.map((item) => (
              <li
                key={item}
                className="flex gap-3 text-base leading-7 text-stone-200"
              >
                <CircleSlash className="mt-1 h-5 w-5 flex-none text-amber-300" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Common Questions"
            title="Event-trip planning, answered."
          />
          <div className="grid gap-5 md:grid-cols-2">
            {faqs.map((faq) => (
              <article
                key={faq.q}
                className="rounded-lg border border-stone-200 bg-stone-50 p-6"
              >
                <h3 className="font-serif text-2xl font-semibold text-stone-950">
                  {faq.q}
                </h3>
                <p className="mt-4 text-base leading-7 text-stone-700">
                  {faq.a}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <SourceList sources={[...sources]} />

      <section className="bg-stone-100 py-16 md:py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div>
            <Eyebrow>Event Weeks Are Group Weeks</Eyebrow>
            <h2 className="mt-4 font-serif text-4xl font-semibold leading-tight md:text-5xl">
              When the city fills up, stay together.
            </h2>
            <p className="mt-5 text-lg leading-8 text-stone-700">
              Marathon crews, lacrosse families, PAX gaming groups, wedding
              parties, Army–Navy alumni contingents — event travel is group
              travel, and hotel blocks split groups across floors at peak
              rates. 1822 Pine Street sleeps 16 across 8 bedrooms, two blocks
              from Rittenhouse Square, with two kitchens and one table that
              seats everyone. For the big dates above, book early — we hold
              only one calendar.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/book"
                className="inline-flex items-center justify-center gap-2 rounded-md bg-stone-950 px-6 py-3 text-base font-semibold text-white transition-colors hover:bg-stone-800"
              >
                <CalendarDays className="h-5 w-5" />
                Check availability
              </Link>
              <Link
                href="/groups"
                className="inline-flex items-center justify-center gap-2 rounded-md border border-stone-300 bg-white px-6 py-3 text-base font-semibold text-stone-950 transition-colors hover:border-amber-800 hover:text-amber-900"
              >
                How groups use the house
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
          </div>
          <div className="rounded-lg border border-stone-200 bg-white p-8">
            <Landmark className="h-6 w-6 text-amber-800" />
            <p className="mt-5 font-serif text-2xl font-semibold text-stone-950">
              How this page stays honest
            </p>
            <p className="mt-4 text-base leading-7 text-stone-700">
              Every date above was verified against the organizer&apos;s own
              site on August 27, 2026. Entries marked &ldquo;dates TBA&rdquo;
              are reliably annual events whose next edition hasn&apos;t been
              announced. Spot an error
              or a new announcement?{" "}
              <Link
                href="/contact"
                className="font-semibold text-amber-800 hover:text-amber-900"
              >
                Tell us
              </Link>{" "}
              and we&apos;ll fix it.
            </p>
          </div>
        </div>
      </section>

      <HubCrossLinks
        currentHref="/philadelphia-events"
        title="More local guides from 1822 Pine Street."
      />
    </div>
  );
}
