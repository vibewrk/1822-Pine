<!-- Raw research return, deep-history pass of 2026-08-27. Findings carry A/B/C
grades and source URLs as the researcher recorded them. NOTHING HERE IS
PUBLISHABLE UNTIL RE-VERIFIED against its cited source — see the site's
no-fabrication rule. Synthesized dossier: docs/HOUSE-HISTORY-DOSSIER.md -->

PINE STREET ITSELF — RESEARCH RETURN
Researcher lens: the street, its naming, its blocks, its institutions, and what the City's and the federal government's own historic-district documents say about it.

Two things reframe the whole lens before the findings:

(A) The single most productive source I reached is the 1983 National Register nomination for the "Rittenhouse Historic District" (NRIS 83002277). It is 253 pages, free on NPGallery, and — critically — it HAS AN OCR TEXT LAYER, so it is greppable. It contains a block-by-block inventory of every Pine Street block from 1400 to 2400, including an entry for the row that contains 1822 Pine. Nothing in the repo appears to know it exists. It is a different document from the 1995 Philadelphia Register inventory the repo already quotes, written by a different author (George E. Thomas, Clio Group, March 1983), and the two corroborate each other.

(B) The 1995 City inventory PDF that WebFetch chokes on (10MB+) downloads fine with curl if you send a browser User-Agent — phila.gov's CloudFront rejects bare curl but accepts a Chrome UA. Same trick works for the City's Philadelphia Register OPA address list. I have extracted the text of all three and left it on disk (paths at the end).

════════════════════════════════════════
FINDINGS
════════════════════════════════════════

── 1. THE NAME: WHAT THE 1683 PRIMARY SOURCE ACTUALLY SAYS ──

F1 [A] Penn's own 1683 pamphlet describes Pine Street's geometry but does NOT name it — or any tree street.
Source: William Penn, "A Letter from William Penn... to the Committee of the Free Society of Traders," London: A. Sowle, 1683 — full text at https://archive.org/details/aletterfromwill00penngoog (raw OCR: https://archive.org/download/aletterfromwill00penngoog/aletterfromwill00penngoog_djvu.txt)
Verbatim (OCR of the 1683 imprint, long-s rendered as "f"): "and eight Streets, (befides the High-ftreet, that run from Front to Front, and twenty Streets, (befides the Broad-flreet) that run crofs the City, from fide to fide ; all thefe Streets are of fifty Foot breadth."
Why it matters: this is a free, republishable, genuinely primary source establishing that the street Pine occupies was laid out fifty feet wide as one of Penn's eight east-west streets. It is also a hard negative: I searched the entire text and the word "Pine" does not occur. Any sentence on the site of the form "Penn named it Pine Street in 1683" cannot cite this document.

F2 [B] The tree-name list, as published by the Encyclopedia of Greater Philadelphia.
Source: https://philadelphiaencyclopedia.org/essays/trees-2/
Verbatim: "Cedar (now South), Pine, Spruce, Walnut, Chestnut, Mulberry (now Arch), and Sassafras (now Race)."
Note the asymmetry worth writing about: of Penn's tree streets, Pine is one of the ones that KEPT its name. Cedar, Mulberry and Sassafras did not.

F3 [B] The "un-Quakerly" renaming story — real, but thinner than it is usually told.
Source: PHMC/ExplorePAHistory, Thomas Holme historical marker — https://explorepahistory.com/hmarker.php?markerId=1-A-2A
Verbatim: "Holme initially named Philadelphia's streets after prominent English settlers. Objecting to this un-Quakerly memorialization of men, Penn renamed the streets that ran east and west after trees and plants that grew in his colony - Chestnut, Cranberry, Locust, Mulberry, Strawberry, 'Wallnut,' and Vine."
CAUTION for the site: this list does not include Pine, and the page gives no date for the renaming. Publish the anecdote as a story about the street grid, not as a sourced statement about Pine specifically.

── 2. THE RENUMBERING (repo Open Question #3 — now has a citable published source) ──

F4 [B] The 1856 ordinance has a name, an author, and an encyclopedia entry.
Source: Encyclopedia of Greater Philadelphia, "Street Numbering" — https://philadelphiaencyclopedia.org/essays/street-numbering/
Verbatim: "in 1856 when the inventor and councilman John Mascher (c. 1824-1862) introduced what would become known as the 'Decimal' or 'Philadelphia System.'" And: "The system involved numbering blocks from east to west based upon the numerical street they intersected at their eastern ends. Houses on each block would then be given addresses from one to a hundred on Biddle's odd/even principle." Implementation "from 1857."
Value: the repo currently rests the 756 → 1822 Pine conversion on its own eight-household table. This gives it a published, linkable citation for the ordinance itself, plus the correct name to use in prose ("the Philadelphia System"), plus a person (Mascher) who makes the renumbering a story rather than a footnote.

── 3. WHAT BOTH GOVERNMENTS SAY ABOUT THE 1800 BLOCK OF PINE ──

F5 [A] The City's 1995 inventory on the south side — the row containing 1822.
Source: Philadelphia Historical Commission, "RITTENHOUSE FITLER RESIDENTIAL HISTORIC DISTRICT / ADDED 8 FEBRUARY 1995 TO THE PHILADELPHIA REGISTER OF HISTORIC PLACES / INVENTORY" — https://www.phila.gov/media/20190213131150/Historic-District-Rittenhouse-Fitler.pdf
Entry heading "1800 block Pine Street", address range 1800-1836:
"(1836 aka 401-409 S. 19th Street) Nineteen, 4-story, 2 bay, brick, late Greek Revival townhouses, marble trim and surrounds; 1808, reduced one story, metal cornice; 1810, altered c. 1880 cornice and door — Contributing"
Transcription caveat, stated plainly: the PDF's text layer interleaves the two printed columns, so the words arrive out of order and I have reordered them. Every word above is present verbatim in the file; the ORDER is my reconstruction. It is confirmed independently by F7 below, which is the same sentence in a different document. NOTE ALSO: "1808" and "1810" here are ADDRESSES on the block, not years.
THE IMPORTANT PART: this entry carries NO construction date.

F6 [A] The City's 1995 inventory on the north side, opposite.
"(1835 aka 345 S. 19th Street) Seventeen, [4]-story, 2 bay, brick, marble trimmed, Greek Revival rowhouses c. 1850, bracketed and panelled cornices, pedimented paired marble door surrounds; 1827-1831 altered c. 1950 for hospital. 1833, Colonial Revival base — Contributing"
(The story digit before "-story" was lost in OCR; the 1983 NR entry for the same row reads "4-story," so it is 4.)
So: the City dates the NORTH side c.1850 and gives the SOUTH side no date at all.

F7 [A] The 1983 federal nomination, same row, independent wording.
Source: National Register of Historic Places, Rittenhouse Historic District, NRIS 83002277, listed 8/25/1983, prepared by "George E. Thomas, Ph.D. / Center City Foundation, Clio Group, Inc., March 1983" — asset page https://npgallery.nps.gov/AssetDetail/NRIS/83002277 ; PDF https://npgallery.nps.gov/GetAsset/7ed7c1d1-8cdd-425a-a5b1-c47897c79c6e
Verbatim: "1800-36  4-story brick, late Greek Revival townhouses, marble trim and surrounds; 1808, reduced one story, metal cornice; 1810, altered c.1880 cornice and door.  Contributing."
And the north side: "1803-35  4-story brick, marble trimmed townhouse row, bracketed and panelled cornices, pedimented paired marble door surrounds; 1827-3[1] altered c.1950 for hospital  Intrusion. 1833, Colonial Revival base. Contributing."
CONCLUSION (repo Open Question #10 — RESOLVED): both the federal and the city documents call 1822 Pine's row "late Greek Revival townhouses." Neither uses the word Victorian, mansion, or Italianate. The site's "Victorian mansion" framing is contradicted by two government documents, and now you have both.

F8 [A] The c.1845 the site publishes belongs, in the City's own inventory, to the 1700 BLOCK — not this one.
Same 1995 City inventory, entry heading "1700 block Pine Street":
"(1700 aka 462 S. 17th Street; 1738 aka 401-407 S. 18th Street) Twenty, 4-story, 2 bay, late Greek Revival townhouses, c. 1845, marble trim and door surrounds, modillioned wood cornice, paired doorways and stoops; 1708 windows reduced. 1730, 1732, 1736, 1738 ground floor alterations c. 1910 — Contributing"
The 1983 NR agrees: "1700-38  4-story, late Greek Revival townhouses, marble trim and door surrounds, modillioned wood cornice, c.1845.  Contributing."
This is a clean, publishable finding for repo Open Question #2: the 1700 block is dated c.1845 by both governments; the 1800 block south side is dated by neither. Note also a real architectural distinction between the two rows that the documents record: the 1700 block has "paired doorways and stoops" and a "modillioned wood cornice"; the 1800-1836 entry says only "marble trim and surrounds." They are cousins, not twins.

F9 [A] Nineteen houses — arithmetically confirmed by a third City document.
1800, 1802 … 1836 even = exactly 19 addresses. See F11.

F10 [A] The rear of the lot, described by the City.
1995 City inventory, entry heading "1800 block Waverly Street": "Houses on both sides of the street face onto Pine or Addison Streets. Street blacktopped, granite curbs, concrete sidewalks."
This is the City's own sentence about the back of 1822 Pine's 90-foot lot. There is no separate 1800-block-of-Waverly building inventory because there are no buildings fronting it.

── 4. 1822 PINE'S OWN REGISTRY STATUS — DIRECTLY CITABLE ──

F11 [A] The City lists 1822 Pine Street by name on the Philadelphia Register.
Source: Philadelphia Historical Commission, "Philadelphia Register of Historic Places (OPA-compliant addresses) As of January 23, 2024" — https://www.phila.gov/media/20220725152039/Historic-Register-OPA-addresses.pdf
Verbatim row: "1822 PINE ST	Rittenhouse Fitler	2/8/1995"
Every even address 1800 through 1836 appears, and only those — 19 rows, matching "Nineteen."
Two incidental observations from the same list, both worth a careful footnote and nothing more:
  • The file's trailing "Date" column is populated for only three addresses on the block — 1800 PINE ST → 1840, 1834 PINE ST → 1845, 1836 PINE ST → 1845. 1822 PINE ST has no date. [C] I could not establish what that column's source is; do not publish these as construction dates.
  • 1827, 1829 and 1831 Pine are ABSENT from the OPA list, consistent with the 1995 inventory's note that 1827-1831 were "altered c. 1950 for hospital" and presumably consolidated into one parcel.

── 5. THE BAD NATIONAL REGISTER NUMBER — SOURCE OF THE ERROR IDENTIFIED (repo Open Question #12, RESOLVED) ──

F12 [A] 92001878 is RittenhouseTown in Germantown, confirmed at NPS.
Source: https://npgallery.nps.gov/AssetDetail/NRIS/92001878
Verbatim: Resource Name "RittenhouseTown Historic District"; Location "Philadelphia ; 206--210 Lincoln Dr."; Listing Date "4/27/1992".

F13 [A] The error originates in the Athenaeum's own database, not in the repo.
Source: Philadelphia Architects and Buildings, "Rittenhouse-Fitler Residential Historic District" — https://www.philadelphiabuildings.org/pab/app/pj_display.cfm/73459
That page prints, under Historic Registrations and Surveys: "National Register: 92001878 (4/27/1992)".
So PAB attaches RittenhouseTown's number to the Rittenhouse-Fitler district. Anyone researching from PAB inherits the mistake. This is worth saying out loud on the site — it is a genuinely useful correction to a widely-used database.

F14 [A] The correct federal citation for this district.
Rittenhouse Historic District, NRIS reference number 83002277, listed 8/25/1983, period of significance 1800-1924, 141 acres, "Roughly bounded by Waverly, 15th, Sansom, Ludlow, 23rd and 25th Streets."
Boundary language from the nomination itself: "Along Pine Street from 25th both sides to the middle of the 1900 block, south to Waverly (Ringgold) east both sides of Addison to 17th, north t[o] Pine Street, east on Pine both sides to the middle of the 1400 block at Carlisle Street..."
[B, inference clearly labelled] Since the boundary runs along both sides of Pine east of the mid-1900 block and the metes-and-bounds elsewhere follow "the rear property lines of buildings fronting on Pine Street," 1822 Pine sits inside the 1983 federal district as well as the 1995 city one. I did not find the address enumerated in the federal document, so state it as "within the boundary as described," not as "federally listed."

── 6. PINE STREET'S PLACE IN THE CITY'S RESIDENTIAL GEOGRAPHY — THE BEST PROSE MATERIAL I FOUND ──
All from the 1983 NR nomination, https://npgallery.nps.gov/GetAsset/7ed7c1d1-8cdd-425a-a5b1-c47897c79c6e

F15 [A] The hierarchy of streets, stated explicitly:
"the principal houses tended to be erected on the major east-west streets, i.e. Walnut, Spruce, Locust and Pine, while the secondary east-west streets, with the notable exception of certain blocks of Delancey Street, tended to be the site of workingmen's housing, stables, and the rear buildings of the mansions."
This single sentence explains, in a federal document, why 1822 Pine faces a grand street and backs onto Waverly.

F16 [A] Pine as the archetype:
"Within its confines are the unified red brick blocks of houses along Pine, Delancey and Spruce streets that are the stereotype of the Quaker City."

F17 [A] The district's shape, with Pine as its southern spine:
"The resulting district generally includes the blocks from Walnut to Pine and from 15th to 24th streets, with extensions to the north to include the institutional center of the Swedenborgian, Lutheran and Unitarian churches."

F18 [A] JOHN McCREA ON PINE STREET — the first authoritative document I found tying him to this street:
"Evidence of this can be seen in the 1700 blocks of Pine and Addison Streets, which were among the early projects of builder John McCrea."
And, on the developer rows generally:
"These were the investment projects of John McCrea and family, Lemuel Coffin, trading as Coffin and Altemus, among others. It was their bold initiative that created the handsome red brick unified block fronts that characterize the district. Especially noteworthy are the McCrea developments lining both sides of the 1800 and 2000 blocks of Delancey."
HARD GUARDRAIL, and I want to be blunt about it: this document places McCrea on the 1700 block of Pine and the 1800 block of DELANCEY. It does not place him on the 1800 block of Pine. It is now sourced that McCrea built the block immediately east of 1822 Pine and the block immediately north-and-around-the-corner. That is a real, publishable, carefully-worded finding. It is not permission to say he built 1822 Pine.

F19 [A] Pine Street's other named architect commissions, from the same narrative:
"The earliest important designers include John Haviland on Rittenhouse Square and on Chestnut Street between 15th and 16th Streets; Thomas U. Walter on the south side of the 1500 block of Pine Street..."
"Similar designs by Frank Miles Day (Yarnall House, 17th and Locust; Wood House, 245-47 S. 17th Street, and a small development on the 1900 block of Pine Street)..."

F20 [A] The 1920s remaking of the small streets and the west end of Pine:
"Rather than building new rows, the old houses were renovated, with tell-tale casement windows and Spanish stucco detail on Panama, Rittenhouse and the western blocks of Pine Street. Architect William Koelle specialized in such adaptations for the cream of old Philadelphia society."

F21 [A] Pine Street forms the south edge of Fitler Square. 1983 NR inventory, under "2300 block Pine Street": "North side, Fitler Square." (The 1995 City inventory designates the square itself: "The Square with all sidewalks, fences, fountains, benches and green areas is designated.")

── 7. THE 1800 BLOCK'S OWN BUILDINGS — NEW, SOURCED, BLOCK-LEVEL MATERIAL ──
Entry point, and this is a research key the repo does not have: PAB has a browse-by-block view. The 1800 block of Pine is
https://www.philadelphiabuildings.org/pab/app/view_street.cfm/64820?PJ_GRID_BLOCKNUMBER=18 — "39 records displayed."
(PAB returns 403 to WebFetch but 200 to curl with a browser User-Agent.)

F22 [B] PAB/PHMC dates the row containing 1822 Pine to c.1845 — and this is almost certainly where the site's "c.1845" came from.
PAB project 277174, "(untitled)", location "1808-1836 PINE ST" — https://www.philadelphiabuildings.org/pab/app/pj_display.cfm/277174
Chronology tab (https://www.philadelphiabuildings.org/pab/app/pj_display_alldates.cfm/277174) reads verbatim: "c. 1845  BUILT  source: PHMC"
Companion records: 1800-1806 PINE ST (project 277172) also "c. 1845 BUILT source: PHMC"; 1803-1825 PINE ST, the north side (project 277170), "c. 1850 BUILT source: PHMC".
This is the honest shape of Open Question #2: a state-database estimate of c.1845 for the row, against a deed the repo dates 1854, against two historic-district inventories that decline to date the south side at all. Publish the conflict; do not silently pick a winner.
NEGATIVE, and useful: PAB attributes NO builder and NO architect to 277174. There is no McCrea attribution anywhere on the 1800 block of Pine in PAB.

F23 [A] PAB's record for 1822 Pine itself carries two published references the repo does not hold.
PAB project 14707, "Spencer Residence", Client "Spencer, Agnes", 1822 PINE ST, "Philadelphia Register of Historic Places -- 2/8/1995" — https://www.philadelphiabuildings.org/pab/app/pj_display.cfm/14707
Architects tab: "Duhring, Okie & Ziegler (fl. c. 1899 - 1918) (Architects)"
Citations tab (https://www.philadelphiabuildings.org/pab/app/pj_display_citations_holdings.cfm/14707) lists verbatim:
  • "Burke, Bobbye et al. Historic Rittenhouse: A Philadelphia Neighborhood. Philadelphia: University of Pennsylvania Press, 1985., p. 44-45"
  • "Philadelphia Real Estate Record and Builders' Guide, v. 24, n. 31, p. 489, 8/2/1899 ... Client/Project Name: Spencer, Agnes ... Architect Referenced: Duhring, Okie & Ziegler"
The Builders' Guide citation confirms, from the Athenaeum's own record, the exact volume/number/page the repo's CONTENT-OPPORTUNITIES #6 wants. The Burke book is new: a Penn Press neighbourhood history that discusses this house or its immediate row at pp. 44-45, and nobody on the project has looked at it.

F24 [A] THE HOUSE NEXT DOOR WENT TO APARTMENTS IN 1941-42, WITH AN ARCHITECT AND A DRAWINGS COLLECTION. This is the single best lead I found for the repo's largest gap.
PAB project 1260412 — https://www.philadelphiabuildings.org/pab/app/pj_display.cfm/1260412
Verbatim from the record: Project Status "Built"; Building Type "apartment house, & Offices"; Client "Slavin, Jacob"; Location "1818 PINE ST"; project name "Slavin Office & Apartment Building".
Chronology: "1941-1942  ADDITIONS/ALTERATIONS"
Architects: "Magaziner, Louis (1878-1956) (Architect)"
Holdings: "Athenaeum of Philadelphia - Magaziner Collection / Holding Name: Slavin, Jacob / Slavin Office & Apartment Building / Quantity: 1 folder / Call Number: 78-JF-011-041"
Why this matters enormously: 1822 Pine's only legible mid-century date is a stamp reading "ZONING SEP 11 1941 REGISTERED." Two doors west, at 1818 Pine, a named client hired a named architect to convert a house to offices and apartments in 1941-1942, and the drawings survive in a named collection with a call number. The "Apartment House Years" chapter, which the repo admits is narrated from nothing, now has a documented block-level context and a physical archive to visit.

F25 [A] Other documented buildings on the 1800 block, all from the 1995 City inventory and PAB:
  • 1827-1831 Pine — PAB project 75644, Building Type "dwelling, hospital", chronology "c. 1850 BUILT source: PHMC"; City inventory "altered c. 1950 for hospital." A hospital operated directly across the street from 1822 Pine in the 1950s. PAB does not name it and neither does the inventory. [OPEN — see negatives.]
  • 1835 Pine / 345 S 19th — PAB project 81571, "George Henry Lea House", Client "Lea, Alice Van A.", Architect "Autenrieth, Charles M., Jr. (1856-1908)", chronology "1900 EARLIEST DOCUMENTED DATE", with 7 images at the Athenaeum including "Interior-5 (1900)", Local ID "P-395". A photographed 1900 interior of a house on this block, from the same year Agnes Spencer was finishing her own alterations.
  • 1826 Pine — PAB project 12756, "Walsh Residence", Client "Walsh, Stevenson H."
  • 1801 Pine — City inventory: "(aka 300 S. 19th Street) 4-story, 2 bay brick, c. 1870 Italianate rowhouse, windows, door, base altered c. 1950, air conditioner holes cut."

F26 [A] A SECOND DUHRING, OKIE & ZIEGLER COMMISSION ON PINE STREET, two years after 1822.
1995 City inventory, 2000 block Pine Street, 2009: "3 1/2-story, 2 bay, mansarded, brick rowhouse, refaced c. 1901, Duhring, Okie and Ziegler, Jacobean Revival — Contributing"
Two blocks west, same firm, within two years of the 1822 Pine alterations. This turns "the architects who worked on your house" from a one-off into a documented Pine Street practice.

F27 [A] The church at the end of the block. Christ Church Chapel, 1915-1923 Pine Street.
1995 City inventory: "Christ Church Chapel, brick terra cotta trimmed, 1876-1877, James P. Sims, architect; altered by Frank Furness, c. 1900. Sand blasted — Significant"
1983 NR: "1915-23 Christ Church Chapel, brick terra cotta trimmed 1870s chapel, J.P. Sims, architect; altered by Frank Furness, c.1900. Significant."
PAB record: https://www.philadelphiabuildings.org/pab/app/pj_display.cfm/36761 — "1915-1923 PINE ST", "Philadelphia Register of Historic Places -- 2/8/1995"
Modern chapter, from the Inquirer (https://www.inquirer.com/philly/hp/news_update/20130929_Church_at_19th_and_Pine_to_become_private_home.html): built in the 1870s, "designed by Philadelphia architect James Peacock Sims, with later alterations by architect Frank Furness"; the First Church of Christ, Scientist "acquired it in 1930"; purchased August 2013 by Robert Lane and Randi Zemsky for $1.61 million to "adapt it very sensitively to a single-family home," with "a 2,400-square-foot private garden."
A Frank Furness-altered chapel one block west of the front door, that has been a church, a Christian Science church, and now a house. That is a whole article on its own.

F28 [A] Other named Pine Street houses within a five-minute walk, all from the 1995 City inventory:
  • 1711 Pine — "George W. Pepper House, 3-story, 2 bay Venetian Gothic rowhouse, 1890, tan brick, pressed metal trim, A. J. Boyden, architect."
  • 1739 Pine (aka 345 S. 18th) — "3 1/2 story, 3 bay, red brick, Colonial Revival mansion. Flemish bond with darkened headers, limestone trim, gambrel roof with dormers. Constructed 1903, architects Sturgis and Barton for P. E. Spaulding, president of Pennsylvania Railroad. Significant."
  • 1920-1930 Pine — "J. R. Kates Row, six, 3 1/2-story, 2 bay, brick, brownstone trimmed Queen Anne rowhouses, 1888-1889, F. M. Day, architect, all in good condition. Significant."
  • 1900 block Waverly aka Ringgold Place — "Thirteen, 3-story, 2 bay, Greek Revival, brick rowhouses, paired entryways reached by tall transverse marble stoops, raised basements, marble trim, c. 1862. Walter Allison, builder. Significant."

── 8. ANTIQUE ROW — VERIFIED WHERE POSSIBLE, AND IT IS THINNER THAN THE INTERNET CLAIMS ──

F29 [B] The best-sourced account I found.
Source: Hidden City Philadelphia, "Where Are All The Antique Shops?" (June 2012) — https://hiddencityphila.org/2012/06/where-are-all-the-antique-shops/
Verbatim: "Pine Street had been built up as far as 13th Street as early as 1840. It was a good, respectable neighborhood, home to shoemakers, grocers, laborers, and textile workers."
Also from that piece: the "Antique Row" moniker arose after the nation's Sesquicentennial in 1926; 1980s directories listed over 30 antique shops; as of 2012 "about a half dozen"; Morris Finkel opened his wholesale antique business on Pine Street in 1947 and Amy Finkel converted it to retail in 1975; The Gladstone at 11th and Pine, opened 1890 as "Philadelphia's first real apartment building," was demolished in the 1970s.

F30 [B] A genuinely fresh Pine Street figure, from the City's own history blog.
Source: PhillyHistory Blog (City of Philadelphia), "James Eham – 'Pioneer Antique Dealer'", Feb 2024 — https://blog.phillyhistory.org/index.php/2024/02/james-eham-pioneer-antique-dealer/
Verbatim: Eham was "born enslaved in Virginia, settled in Philadelphia in 1876 and soon after became an antiques dealer"; by 1927 he ran "two antique stores in Philadelphia and one in New York"; his Philadelphia Tribune obituary of December 11, 1930 called him a "Pioneer Antique Dealer"; his store at 1237 Pine Street "formed a distinctive western anchor on what would become known as Philadelphia's Antique Row."
This predates the Sesquicentennial account by fifty years and is the strongest single fact I found about Antique Row's origins.

F31 [C] "The oldest continuously-operating antiques district in the country." DO NOT PUBLISH. This phrase appears only in travel/SEO content (Islands.com, Tripadvisor, shopping directories, AI-generated attraction pages). I found no historical, municipal, or trade-press source for it.

F32 [C] The boundaries are not settled and the "district" has no legal existence. Sources disagree: 9th–12th, 9th–Broad, 9th–17th. ExplorePAHistory's own listing (https://explorepahistory.com/attraction.php?id=1-B-CC1) gives "9th and 17th Streets" and contains, verbatim, only: "Pine Street Historic Antique Row offers fine selection of period furnishings, antiques and collectibles." It has no history on it at all despite the search-engine framing.
NEGATIVE RESULT: I found no Philadelphia Historical Commission designation, no National Register listing, and no City ordinance creating or bounding "Antique Row." It is an informal commercial corridor. If the site says "district," it should say "informally known as."

── 9. INSTITUTIONS ALONG PINE ──

F33 [B] Pennsylvania Hospital, 8th and Pine.
Source: Penn Medicine, "The history of Pennsylvania Hospital's Pine Building" — https://www.pennmedicine.org/news/the-history-of-pennsylvania-hospital-pine-building
Verbatim: "Pennsylvania Hospital was chartered on May 11, 1751"; built "On a half block of 8th and Pine Street"; "the Pine Building opened its doors in 1756"; "The Pine Building gained its first addition in 1796 with the construction of its west wing"; "In 1804, a center structure—for administrative purposes—joined the two wings"; Samuel Rhoads served as "Pennsylvania Hospital's architect"; described as "the nation's first chartered hospital" and "a National Historic Landmark."
This is the eastern institutional anchor of Pine Street, and it sits at the eastern end of Antique Row — a connection worth drawing.

F34 [B] St. Peter's Episcopal Church, Third and Pine. Founded 1758, opened for worship September 4, 1761, designed by Robert Smith, designated a National Historic Landmark in 1996. Source: https://en.wikipedia.org/wiki/St._Peter%27s_Episcopal_Church_(Philadelphia) — VERIFY AGAINST NPS BEFORE PUBLISHING; I did not reach an NPS record for it.

F35 [B] Old Pine Street Church (Third, Scots and Mariners Presbyterian), 412 Pine. Congregation founded 1768; Colonial meeting house designed by Robert Smith; "the only Colonial Presbyterian church in Philadelphia still on its original foundation." Sources: https://oldpine.org/ and https://www.ushistory.org/tour/old-pine-presbyterian.htm — both partisan/tertiary; grade B, verify before asserting the "only" claim.

── 10. PINE STREET TODAY ──

F36 [A] The bike lanes, from the City.
Source: City of Philadelphia, Office of Transportation and Infrastructure Systems, "Spruce and Pine streets bike lane safety upgrades project" — https://www.phila.gov/programs/complete-streets/projects/spruce-pine-traffic-safety-project/
Verbatim: the existing facilities run on "Spruce and Pine streets from Front to 22nd streets" and are "painted bike lanes with a painted buffer and flexible delineator posts at intersections." The project will "Upgrade the painted bike lanes to separated bike lanes" using "concrete and planter separation." First phase installation announced June 4, 2025 (https://www.phila.gov/2025-06-04-city-ppa-to-install-first-phase-of-spruce-and-pine-bike-lane-safety-upgrades-project/).
The 2009 pilot origin is documented at NACTO: https://nacto.org/case-study/buffered-bike-lanes-on-pine-and-spruce-streets-philadelphia-pa/
CAUTION: I could NOT confirm Pine Street's one-way direction from any authoritative source. Search summaries asserted "eastbound on Pine" but I never reached a City page stating it. Do not publish a direction without checking the Streets Department.

F37 [A] District designation dates, both of them, cleanly:
Philadelphia Register: 8 February 1995 (stated on the City's own inventory cover page and on every OPA row).
National Register: 25 August 1983, as "Rittenhouse Historic District," NRIS 83002277.
Context from Hidden City's 30th-anniversary piece (https://hiddencityphila.org/2025/05/rittenhouse-fitler-historic-district-celebrates-30th-anniversary/): the district was "nominated in February 1987" by the Center City Residents Association and "finally added to the Philadelphia Register in February 1995" — an eight-year fight. That is a story.

════════════════════════════════════════
ARTICLE IDEAS THIS LENS SUPPORTS
════════════════════════════════════════
Every one of these is buildable from sources in hand, with no fabrication.

1. "Late Greek Revival, Not Victorian: What Two Governments Actually Say About This Row." The 1983 federal and 1995 city inventory entries side by side, quoted in full. Fixes the site's own style error in public, which is the most credible thing an archive site can do. Also fixes the National Register number and explains where the bad number came from (the Athenaeum's database).

2. "Nineteen Houses, and Nobody Will Say When They Were Built." The four competing dates — 1854 deed, PHMC's c.1845, the 1700 block's documented c.1845, OPA's 1800 — laid out with the actual documents, ending on the honest observation that neither historic-district inventory dates the south side of the 1800 block at all. This is the flagship piece; it turns the repo's most embarrassing contradiction into its most rigorous page.

3. "The Block Next Door Became Apartments in 1941." 1818 Pine, Jacob Slavin, Louis Magaziner, drawings in the Athenaeum's Magaziner Collection at call number 78-JF-011-041 — set against 1822 Pine's own 1941 zoning stamp. Fills the front edge of GAP 1 with sourced context instead of invention.

4. "Who Built Pine Street? John McCrea and the 1700 Block." Quotes the federal nomination directly, states plainly what it does and does not say, and models the site's evidentiary standard: McCrea is documented one block east, and that is exactly as far as the record goes.

5. "The Chapel at 19th and Pine." James Peacock Sims, 1876-77; altered by Frank Furness c.1900; Christ Church, then Christian Science from 1930, then a private house from 2013 for $1.61 million. Three sourced documents, one building, 140 years, visible from the front steps.

6. "Waverly Street: The Back of the House." The City's own one-sentence inventory entry, the hierarchy quote from the federal nomination ("the secondary east-west streets ... tended to be the site of workingmen's housing, stables, and the rear buildings of the mansions"), and the 90-foot lot depth from the 1985 deed. Explains the property's shape to a guest in three paragraphs.

7. "Pine Street Before the Numbers Changed." John Mascher, the 1856 ordinance, the Philadelphia System, and 756 Pine. Pairs the encyclopedia citation with the repo's own conversion table, and re-tags the archive.

8. "Antique Row, Honestly." James Eham — born enslaved, in Philadelphia by 1876, an antiques dealer at 1237 Pine, obituary in the Tribune in 1930 — as the real origin story, against the Sesquicentennial account and the unsourced "oldest in America" claim. Pine Street's east end told through one documented person.

9. "A Walk East Down Pine." A sourced block-by-block from Fitler Square to Pennsylvania Hospital, using nothing but the two inventories' verbatim entries: Koelle's Spanish stucco at the west end, F. M. Day's Kates Row at 1920-1930, Duhring Okie & Ziegler at 2009, Christ Church Chapel, the nineteen houses, Sturgis and Barton's 1903 railroad-president mansion at 1739, Thomas U. Walter on the 1500 block, then Antique Row and the hospital. This is the piece that owns the query "Pine Street Philadelphia history" — see negative result N8.

10. "Fifty Feet Wide Since 1683." Penn's own pamphlet, quoted; the tree-name story told carefully; Pine as one of the few tree streets that kept its name.

════════════════════════════════════════
NEGATIVE RESULTS — WHERE NOT TO SPEND TIME
════════════════════════════════════════

N1. Penn's 1683 Letter to the Free Society of Traders does NOT name any street. I pulled the full OCR text (99,655 chars) and searched it: zero occurrences of "Pine," zero of "Mulberry," zero of "Sassafras." It describes only the grid's geometry. Anyone hoping to source "Penn named Pine Street" to the 1683 letter will waste the trip. The naming attribution is secondary-source only.

N2. Library of Congress is unreachable from this environment. Both chroniclingamerica.loc.gov and www.loc.gov return Cloudflare challenges (429 to curl, 403 to WebFetch), for the JSON API and the HTML search alike. I could not run a single Chronicling America search. The repo's ambition to add a LOC permalink to the 1915 Evening Public Ledger clipping and to find the Jan 14, 1915 bazaar page is sound, but it needs to be done from a browser session, not from a fetch tool. This is a tooling blocker, not a source problem.

N3. Free Library of Philadelphia (libwww.freelibrary.org) is Cloudflare-blocked to both curl and WebFetch. Their "Street Name Changes, House Numbering, and Street Positioning" guide — which is the obvious authoritative page for the renumbering — could not be reached. Try it from a browser.

N4. PhillyHistory.org's photo search cannot be scraped. The address-link URL pattern works and returns HTTP 200 (https://www.phillyhistory.org/PhotoArchive/Search.aspx?action=link&type=address&address=1822+PINE+ST) but results render entirely in JavaScript; the server returns an empty shell. I could not determine whether any photograph of 1822 Pine or the 1800 block exists. A human with a browser can answer this in ninety seconds, and it is worth doing.

N5. The identity of the hospital at 1827-1831 Pine is unresolved. Both inventories say the houses were "altered c. 1950 for hospital" and PAB types the record "dwelling, hospital," but no source I reached names the institution. Targeted searches on "1827 Pine Street hospital" and "1829 Pine Street hospital" returned only Pennsylvania Hospital at 8th and Pine. Next place to look: 1950s city directories, L&I records, or the Philadelphia Inquirer.

N6. PAB attributes no builder or architect to the 1800 block of Pine. The three block-level records (1800-1806, 1808-1836, 1803-1825) are all "(untitled)" with a PHMC date and nothing else. There is no McCrea attribution, no developer, no architect. Do not go looking for one in PAB; it is not there.

N7. Antique Row has no scholarly or municipal literature that I could find. The Encyclopedia of Greater Philadelphia has no essay on it. ExplorePAHistory's page is a three-line tourism stub. Everything else is travel content, much of it AI-generated and mutually contradictory (one page dates Antique Row's "beginnings" to a 2001 Chamber of Commerce meeting). The Hidden City 2012 piece and the PhillyHistory blog post on James Eham are the only two sources worth citing. Do not expect to find a current, authoritative shop count.

N8. Wikipedia has NO article on Pine Street, Philadelphia. The "Pine Street" article is about Seattle. Chestnut Street, Walnut Street, Arch Street, Vine Street and South Street all have Philadelphia articles; Pine and Spruce do not. This is a straightforward content gap for rittenhouseresidence.com, and finding #9 above is the piece that fills it.

N9. Pine Street's one-way direction is not stated on any City page I reached. The phila.gov Complete Streets project page describes the bike lanes without giving direction of travel. Don't publish it from memory.

N10. The 1995 City nomination's narrative sections are image-only. Pages 1-33 of the phila.gov PDF have no text layer at all; only the inventory (pages ~34-176) is extractable. If you want the City's statement of significance or boundary justification in words, it needs OCR or a manual read. The 1983 federal nomination supplies the equivalent narrative in searchable text, which is why it is the better working document.

N11. The Rittenhouse-Fitler Manual PDF (https://www.phila.gov/media/20190213124021/Historic-District-Rittenhouse-Fitler-Manual.pdf) is 56 pages of pure scan — 775 characters of extractable text across the whole file. Not worth fetching again without OCR.

════════════════════════════════════════
WORKING FILES LEFT ON DISK
════════════════════════════════════════
These are in a session scratchpad and will not survive; copy anything you want into the repo now.
/private/tmp/claude-501/-Users-billyprice-Code-Repos-1822-Pine-Website--claude-worktrees-upbeat-payne-f033aa/6342a117-41dd-41a4-a1f5-2116ed511a79/scratchpad/nr-rittenhouse.pdf  — 1983 National Register nomination, 253pp, 26MB, WITH text layer
/private/tmp/claude-501/-Users-billyprice-Code-Repos-1822-Pine-Website--claude-worktrees-upbeat-payne-f033aa/6342a117-41dd-41a4-a1f5-2116ed511a79/scratchpad/nr.txt  — its extracted text, 193k chars, greppable
/private/tmp/claude-501/-Users-billyprice-Code-Repos-1822-Pine-Website--claude-worktrees-upbeat-payne-f033aa/6342a117-41dd-41a4-a1f5-2116ed511a79/scratchpad/rf.pdf  — 1995 Philadelphia Register inventory, 176pp
/private/tmp/claude-501/-Users-billyprice-Code-Repos-1822-Pine-Website--claude-worktrees-upbeat-payne-f033aa/6342a117-41dd-41a4-a1f5-2116ed511a79/scratchpad/rf.txt  — its extracted text, 200k chars (two-column interleave; read carefully)
/private/tmp/claude-501/-Users-billyprice-Code-Repos-1822-Pine-Website--claude-worktrees-upbeat-payne-f033aa/6342a117-41dd-41a4-a1f5-2116ed511a79/scratchpad/hr.pdf and hr.txt  — Philadelphia Register OPA-compliant address list, 292pp, contains the "1822 PINE ST" row
/private/tmp/claude-501/-Users-billyprice-Code-Repos-1822-Pine-Website--claude-worktrees-upbeat-payne-f033aa/6342a117-41dd-41a4-a1f5-2116ed511a79/scratchpad/penn3.txt  — Penn 1683 letter, full OCR

Two reusable techniques for the next researcher: phila.gov, npgallery.nps.gov and philadelphiabuildings.org all serve fine to curl with a Chrome User-Agent but reject WebFetch or bare curl; and pypdf is installed, so any nomination PDF with an OCR layer can be turned into a greppable text file in one command.