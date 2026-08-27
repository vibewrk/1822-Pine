<!-- Raw research return, deep-history pass of 2026-08-27. Findings carry A/B/C
grades and source URLs as the researcher recorded them. NOTHING HERE IS
PUBLISHABLE UNTIL RE-VERIFIED against its cited source — see the site's
no-fabrication rule. Synthesized dossier: docs/HOUSE-HISTORY-DOSSIER.md -->

1822 PINE STREET — RESEARCHER'S MAP OF THE ARCHIVE
Compiled from the repo at /Users/billyprice/Code Repos/1822 Pine Website/.claude/worktrees/upbeat-payne-f033aa
Source files: src/data/document-archive.json (63 entries), src/data/story-chapters.json (14 chapters), src/data/timeline.json (47 events), src/data/verified-facts.json (19 facts), research/facts-verified.md, research/unverified-claims.md, research/narrative-draft.md, research/transcriptions-ocr.md, DEEP-RESEARCH-REPORT.md, docs/CONTENT-OPPORTUNITIES.md, RP-Alt-Index.md, metadata/*.json (60 OCR sidecars), raw_documents/ (65 files)

READ THIS FIRST — THREE FINDINGS THAT CHANGE HOW YOU USE THE ARCHIVE

FINDING 1 — 41 of 63 documents have never been read.
Only 8 newspaper clippings have a real transcription (research/transcriptions-ocr.md). Every other clipping's OCR sidecar in metadata/ contains nothing but the Newspapers.com header and copyright footer — no body text at all. The one-line "synopsis" attached to those entries in document-archive.json was therefore NOT derived from the document. It is generated prose. Do not cite it, do not repeat it, and do not treat "Suffrage movement gains momentum with meetings held in Rittenhouse Square homes, including 1822 Pine Street" (the 1913-02-09 synopsis) as a finding — it is an invention, and it also violates the repo's own do-not-publish rule against claiming suffrage meetings happened in this house. Below, every document is marked [READ] or [UNREAD].

FINDING 2 — The deed abstract scans are upside down, and that is why the chain of title stops in 1922.
The eight Philadelphia Bureau of Engineering, Surveys and Zoning "deed registry" cards (1854, 1893, 1899 ×2, 1922 ×2, 1941, 1947, 1949, 1952) were scanned rotated 180°. The OCR captured only the printed form boilerplate, mirrored ("peep ey} JO Surpazom" = "the wording of the deed"). Rotating the string back confirms it: the 1893 card reads "TRANSFER. PH. WOODHEAD" and the 1922 card contains "Spencer" plus a husband-and-wife pair and a date. The handwritten owner names, dates, and deed-book references on all eight cards are physically present in the scans and have simply never been read. Re-imaging or rotating these ten JPGs is the single cheapest high-value task available and would likely close the entire 1922–1952 ownership gap that RP-Alt-Index.md lists as an open research target.

FINDING 3 — Four of the six modern deeds are filed under the wrong date.
document-archive.json's extracted_date for the modern deeds was taken from the "BEING the same premises which…" recital inside each deed — i.e. the date of the PREVIOUS conveyance — not the deed's own date. This mis-sorts /history/timeline and the archive index:
- "1822 Pine - 1979 Deed.pdf" is dated 1967-05-01 (recital: Mary G. Sharpe Wilkes, deed of May 1, 1967). The deed itself is Oct 17, 1979.
- "1822 Pine - 1985 Deed.pdf" is dated 1979-10-17 (recital: Serota→Goodwin, Oct 17, 1979). The deed itself is Mar 15, 1985.
- "1822 Pine - Deed 1987.pdf" is dated 1985-03-15 (recital: deed of 3/15/1985). The deed itself is the Indenture of June 26, 1987.
- "1822 Pine - 1999 Deed 1.pdf" is dated 1991-04-26 (recital: death of Thomas Jay Bushyager, Apr 26, 1991). The deed itself is 1999.
Only "1822 Pine - 2002 Deed.pdf" (2002-08-14) carries its own recording date. The 1922/1947/1949/1952 dates ending in "-01-01" are year-only placeholders; only 1941-09-11 is a real day, and it comes from a zoning stamp ("ZONING SEP 11 1941 REGISTERED") on the second card.

════════════════════════════════════════════════════════════════
PART 1 — COMPLETE DOCUMENT INVENTORY, BY DATE, GROUPED BY ERA
════════════════════════════════════════════════════════════════
Format: DATE | slug | type, pages | status | what is actually known
[READ] = real transcribed content exists. [UNREAD] = no body text anywhere in the repo; description below is the archive's unverified synopsis, flagged as such.
"npcom" = the Newspapers.com image ID recoverable from the OCR header — this is your retrieval key for every clipping.

── ERA A: BEFORE THE HOUSE (1 document) ──

1824-03-26 | the-united-states-gazette-1824-03-26-3 | clipping, 1p | [UNREAD] npcom 605056395
  United States Gazette (Philadelphia), Fri Mar 26, 1824, p.3. Content entirely unknown. Archive synopsis claims "Pine Street neighborhood development near Rittenhouse Square" — unsupported. Predates the house by ~30 years; why it was clipped is unrecorded.

── ERA B: CONSTRUCTION AND THE ROSET YEARS, 1854–1893 (12 documents) ──

1854-04-01 | 1854-deed-abstract-2 | deed (JPG card) | [UNREAD — ROTATED 180°]
  Philadelphia deed registry card. Only form boilerplate OCR'd ("PRESENT OWNER / FORMER OWNER / DATE OF DEED / NO. OF HOUSE"). The claim it carries — John McCrea sells the newly completed townhouse to John Roset, merchant — is the foundation of the entire site narrative and is NOT readable in the current scan. Highest-priority re-read.

1866-12-08 | the-philadelphia-inquirer-1866-12-08-page-8 | clipping, 1p | [UNREAD] npcom 168345600
  Inquirer, Sat Dec 8, 1866, p.8. Content unknown.

1867-04-08 | the-evening-telegraph-1867-04-08-page-3 | clipping, 1p | [UNREAD] npcom 78650918
  Evening Telegraph, Mon Apr 8, 1867, p.3. Content unknown.

1870-08-10 | the-evening-telegraph-1870-08-10-page-8 | clipping, 1p | [UNREAD] npcom 85300150
  Evening Telegraph, Wed Aug 10, 1870, p.8. Content unknown. Note: John Roset died Aug 8, 1870 — this clipping is dated two days later and may be his death notice. Untested.

1871-01-14 | the-philadelphia-inquirer-1871-01-14-page-6 | clipping, 1p | [UNREAD] npcom 169198203
  Inquirer, Sat Jan 14, 1871, p.6. Content unknown. CONTENT-OPPORTUNITIES states a "Howard Spencer is documented at this address in 1871" — if that documentation is one of the two 1871 clippings, reading them resolves the Spencer naming problem outright.

1871-12-06 | the-philadelphia-inquirer-1871-12-06-page-7 | clipping, 1p | [UNREAD] npcom 167872840
  Inquirer, Wed Dec 6, 1871, p.7. Content unknown. Same note as above.

1883-12-09 | society-tea | clipping, 1p | [UNREAD] npcom 52185424
  Philadelphia Times, Sun Dec 9, 1883, p.4. A user-titled clip ("Society Tea") from the page below. Only the clip title survives; the article text does not.

1883-12-09 | the-philadelphia-times-1883-12-09-page-4 | clipping, 1p | [UNREAD] npcom 52185424
  DUPLICATE of the same Newspapers.com page as society-tea (identical image ID). Two archive entries, one source page.

1891-04-23 | thu-apr-23-1891-page-3-scarlet-fever | clipping, 1p | [READ] npcom 168367089
  Philadelphia Inquirer death-notice column. Verbatim OCR: "SPENCER.OnA 20, at 1822 Pine scarlet fever, Spencer, Jr., eldest of … Aged 7 years … Interment private." The child's GIVEN NAME is not legible in the OCR — only "Spencer, Jr." Genealogy supplies "Howard Spencer, b. Feb 26 1884, d. Apr 20 1891" (Find a Grave #74603329). Caution: the same OCR column contains three unrelated death notices — Mary W. [wife of —], Anthony Tarter, and Margaret Thackray. They are not residents of this house.

1891-11-28 | the-philadelphia-inquirer-1891-11-28-page-2 | clipping, 1p | [UNREAD] npcom 168413629
  Inquirer, Sat Nov 28, 1891, p.2. Content unknown. Two mutually incompatible descriptions exist in the repo: document-archive.json calls it "The Spencer family era begins at 1822 Pine Street"; timeline.json calls it the death of Ellen Rozet Drexel (d. Nov 27, 1891); research/unverified-claims.md calls it the scarlet-fever death report. All three are guesses. Neither can be true of the Spencer purchase, which the deed places in 1893.

1893-02-01 | the-philadelphia-times-1893-02-01-page-6 | clipping, 1p | [UNREAD] npcom 53789568
  Philadelphia Times, Wed Feb 1, 1893, p.6. Content unknown.

1893-05-11 | 1822-sold-for-14-000 | clipping, 1p | [READ, HEADER ONLY] npcom 168242757
  Philadelphia Inquirer, Thu May 11, 1893, p.5. The ONLY text recovered is the clip title itself — "1822 Sold for $14,000" — plus the Newspapers.com header. The article body has never been transcribed. Everything the site says about this sale beyond the headline is inference.

── ERA C: THE SPENCER TRANSFER AND THE 1899 REMODEL, 1893–1900 (10 documents) ──

1893-06-29 | 1893-deed-abstract | deed (JPG card) | [UNREAD — ROTATED 180°]
  Rotated OCR decodes to "TRANSFER. PH. WOODHEAD." The name WOODHEAD appears nowhere else in the entire repo and is unexplained. The card is asserted to record the Roset estate trustee → Graham Spencer transfer; that is unread.

1893-07-01 | the-philadelphia-inquirer-1893-07-01-page-1 | clipping, 1p | [UNREAD] npcom 168381449
  Inquirer FRONT PAGE, Sat Jul 1, 1893. Content unknown. Dated two days after the 1893-06-29 deed.

1893-07-01 | the-philadelphia-times-1893-07-01-page-2 | clipping, 1p | [UNREAD] npcom 53338254
  Philadelphia Times, same day, p.2. Content unknown.

1896-06-29 | the-philadelphia-times-1896-06-29-page-5 | clipping, 1p | [UNREAD] npcom 52394573
  Philadelphia Times, Mon Jun 29, 1896, p.5. Content unknown. Story-chapters gives Graham Spencer's death as June 28, 1896 — this clipping is dated the next day and is very likely his obituary. Untested; would confirm or refute the Howard/Graham naming problem.

1896-11-23 | the-philadelphia-times-1896-11-23-page-11 | clipping, 1p | [UNREAD] npcom 53387473
  Philadelphia Times, Mon Nov 23, 1896, p.11. Content unknown.

1899-04-03 | 1899-deed-abstract-1 | deed (JPG card) | [UNREAD — ROTATED 180°]
  Rotated OCR yields only "Form 1D1", "House", and a partial "4-11-99"-style date. Asserted to record Agnes M. Spencer taking title.

1899-04-03 | 1899-deed-abstract-2 | deed (JPG card) | [UNREAD] — OCR returned completely empty. Second page of the above.

1899-04-06 | the-philadelphia-inquirer-1899-04-06-page-7 | clipping, 1p | [UNREAD] npcom 168302979
  Inquirer, Thu Apr 6, 1899, p.7 — three days after the Agnes Spencer deed. Content unknown. Flagged in CONTENT-OPPORTUNITIES #8 as one of the "two currently unused" 1899 clippings.

1899-07-18 | the-philadelphia-inquirer-1899-07-18-page-12 | clipping, 1p | [READ] npcom 168342170
  Verbatim: "…chitects Duhring, Okie & Ziegler. The same architects have finished plans for alterations and additions to Mrs. Graham Spencer's residence, at 1822 Pine street. The drawings will be turned over to contractors…"

1899-08-06 | the-philadelphia-times-1899-08-06-page-10 | clipping, 1p | [READ] npcom 53320902
  Verbatim: "…for the alterations and additions to the residence of Mrs. Agnes Spencer at 1822 Pine street to Contractor Rogers, of Stanwick, N.J. This work embraces new interior finishing, papering, tiling, decorating, plumbing, fixtures, etc. Cost about $6,000." Note the firm order is printed as "Okie, Duhring & Ziegler" in this notice. CONTENT-OPPORTUNITIES corrects the contractor to J. S. Rodgers.

1900-10-03 | the-philadelphia-inquirer-1900-10-03-page-5 | clipping, 1p | [UNREAD] npcom 168086532
  Inquirer, Wed Oct 3, 1900, p.5. Content unknown. CONTENT-OPPORTUNITIES #8 reports a SECOND construction campaign in September 1900 plus a separate $1,200 permit under Jacob Myres & Son — this clipping sits exactly on that date and has never been read.

── ERA D: THE EDWARDIAN HOUSE, 1901–1908 (8 documents) ──

1901-01-11 | the-philadelphia-times-1901-01-11-page-6 | clipping, 1p | [READ] npcom 53400433
  Verbatim: "…try house, returned to 1822 Pine street for the winter." Context in the column identifies Mrs. Graham Spencer and her country house at Kaolin, Chester County.

1901-10-27 | the-philadelphia-inquirer-1901-10-27-page-19 | clipping, 1p | [UNREAD] npcom 168066687
  Inquirer, Sun Oct 27, 1901, p.19. Content unknown. The Provenance Dossier chapter asserts "October 27, 1901: Fayette R. Plumb listed at 1822 Pine Street" — that assertion rests on this unread clipping and nothing else.

1901-11-21 | the-philadelphia-inquirer-1901-11-21-page-16 | clipping, 1p | [READ] npcom 168316181
  Verbatim: "…son Plumb. Mr. J. J. Sullivan and Mr. H. J. Sullivan. After the ceremony a breakfast was served at the residence of the bride's parents, IS22 Pine street." The address reads "IS22", not "1822". Confirming this against the page image is listed as one of the repo's five cheapest unblocking tasks.

1904-12-11 | the-philadelphia-inquirer-1904-12-11-page-36 | clipping, 1p | [READ] npcom 169003334
  Verbatim: "At home—Mrs. Henry C. Davis and the Misses Davis, of 1822 Pine street."

1905-08-04 | the-philadelphia-inquirer-1905-08-04-page-6 | clipping, 1p | [READ] npcom 168348476
  Verbatim from the building-permits column: "J N Leng, fire place, 1822 Pine st. fer G C Purviss: cost $130." Read carefully: the permit was taken out FOR "G C Purviss" — a name that appears nowhere in the site narrative, nowhere in the chain of title, and nowhere else in the repo. The site attributes this fireplace to the Davis era without accounting for Purviss at all.

1906-12-30 | the-philadelphia-inquirer-1906-12-30-page-11 | clipping, 1p | [UNREAD] npcom 168440129
1907-12-15 | the-philadelphia-inquirer-1907-12-15-page-16 | clipping, 1p | [UNREAD] npcom 168358807
1908-01-06 | the-philadelphia-inquirer-1908-01-06-page-14 | clipping, 1p | [UNREAD] npcom 168301766
  Three consecutive winter-season Inquirer clippings, contents entirely unknown. The archive's synopses ("Holiday entertaining at the Spencer residence", etc.) are generated, not read — and are chronologically doubtful, since the Davises are the documented household by 1904.

── ERA E: SUFFRAGE AND THE PROGRESSIVE YEARS, 1912–1915 (5 documents) ──

1912-09-29 | the-philadelphia-inquirer-1912-09-29-page-26 | clipping, 1p | [UNREAD] npcom 169065346
1913-02-09 | the-philadelphia-inquirer-1913-02-09-page-38 | clipping, 1p | [UNREAD] npcom 168747501
1913-03-10 | the-philadelphia-inquirer-1913-03-10-page-12 | clipping, 1p | [UNREAD] npcom 169073105
1914-03-27 | the-philadelphia-inquirer-1914-03-27-page-16 | clipping, 1p | [UNREAD] npcom 169076305
  Four suffrage-era clippings, all unread. Their archive synopses assert suffrage meetings "in the parlors of prominent Philadelphia homes near Rittenhouse Square" and "including 1822 Pine Street." Those assertions are fabricated and directly contradict the repo's own DO-NOT-PUBLISH rule. Reading these four is the difference between an evidenced suffrage chapter and an invented one.

1915-01-08 | evening-public-ledger-1915-01-08-page-10 | clipping, 1p | [READ] npcom 164189759
  Verbatim: "…ach cover will be $1.50 apiece, and they may be obtained through the treasurer, Miss Martha Davis, 1822 Pine street. The speakers will include Norman Hapgood, the editor of a well-known magazine, and Miss Anne Martin, president of the…" Note: this is the strongest single document in the archive and it is also freely republishable via the Library of Congress — the repo flags adding the LOC permalink as an open task, along with adding the Jan 14, 1915 bazaar page as a new entry.

── ERA F: APARTMENT AND MID-CENTURY, 1922–1952 (10 documents, all deed cards) ──
All ten are Philadelphia Bureau of Engineering, Surveys and Zoning registry cards. All ten are scanned rotated 180° and all ten are effectively [UNREAD]. Together they are the ONLY primary record of ownership across a thirty-year span.

1922-01-01 | 1922-deed-abstract-1 | deed (JPG card) | [UNREAD — ROTATED] Date is a year-only placeholder. Rotated OCR contains "Spencer", a husband-and-wife pairing ("his wife"), a partially legible surname, and a date fragment reading like "May 3rd 192-". Reading this card would establish who took the house out of the Spencer/Davis orbit.
1922-01-01 | 1922-deed-abstract-2 | deed (JPG card) | [UNREAD] Second page; OCR is noise.
1941-09-11 | 1941-deed-abstract-1 | deed (JPG card) | [UNREAD — ROTATED]
1941-09-11 | 1941-deed-abstract-2 | deed (JPG card) | [UNREAD] The only legible text in the whole 1922–1952 run: a stamp, "ZONING SEP 11 1941 REGISTERED". This is where the archive's one real mid-century date comes from.
1947-01-01 | 1947-deed-abstract-1 | deed (JPG card) | [UNREAD — ROTATED] Year-only placeholder date.
1947-01-01 | 1947-deed-abstract-2 | deed (JPG card) | [UNREAD]
1949-01-01 | 1949-deed-abstract-1 | deed (JPG card) | [UNREAD — ROTATED] Year-only placeholder date.
1949-01-01 | 1949-deed-abstract-2 | deed (JPG card) | [UNREAD] Contains "Plan Book" in the rotated OCR.
1952-01-01 | 1952-deed-abstract-1 | deed (JPG card) | [UNREAD — ROTATED] Year-only placeholder date.
1952-01-01 | 1952-deed-abstract-2 | deed (JPG card) | [UNREAD]

── ERA G: THE MODERN CHAIN OF TITLE, 1967–2002 (6 documents, all recorded deeds) ──
These ARE readable, and they are the best-documented part of the entire archive. Filed dates are wrong (see Finding 3); true dates given below.

TRUE DATE 1979-10-17 | 1822-pine-1979-deed | deed, 8p | [READ] filed under 1967-05-01
  Serota → Goodwin. Recital: "BEING the same premises which Mary G. Sharpe Wilkes, widow by Deed dated May 1, 1967 and recorded … in Deed Book C.A.D. #972 page 304 … granted and conveyed unto Benjamin Serota and Shirley W. Serota, his wife, in fee."

TRUE DATE 1985-03-15 | 1822-pine-1985-deed | deed, 3p | [READ] filed under 1979-10-17
  Michael Kosmin and Rod Goodwin and Pine Associates (a Partnership) → Kosmin and Stango Partnership, a Pennsylvania General Partnership. Consideration SEVENTY-THREE THOUSAND DOLLARS ($73,000.00). Recital: Serotas conveyed to Rod Goodwin by deed dated October 17, 1979, Deed Book DCC 2130 page 196. Carries the full legal description: south side of Pine, 230 feet west of Eighteenth, Eighth Ward, 22 ft front × 90 ft deep to Waverly.

TRUE DATE 1987-06-26 | 1822-pine-deed-1987 | deed, 4p | [READ] filed under 1985-03-15
  Kosmin and Stango Partnership → (grantee). Recital: deed dated 3/15/1985, recorded 3/18/1985, Deed Book FHS 100 page 326.

TRUE DATE 1999 | 1822-pine-1999-deed-1 | deed, 4p | [READ] filed under 1991-04-26
  Grantor Thomas Jay Bushyager, who took by Indenture dated June 26, 1987. "AND the said Thomas Jay Bushyager, departed this life on April 26, 1991 wherein John R.S. Bushyager…" — an estate conveyance.

UNDATED | 1822-pine-1999-deed-2 | deed, 5p | [READ] no extracted_date at all
  Second 1999 instrument. Names Superior Abstract and a John F. Kennedy Boulevard address. Grantee not recoverable from OCR.

TRUE DATE 2002-08-14 (recorded) | 1822-pine-2002-deed | deed, 6p | [READ] correctly dated
  Property address 1822 Pine Street, Philadelphia PA 19103. Parties include ROLAND K. BULLARD, II and SALLY S. BULLARD. Trident Land Transfer Company. Per the 2013 deed's recital, this is Stephen A. Mione and Tralan Muntean → the Bullards, deed dated 08/08/2002, recorded 08/14/2002, Document No. 50510515.

── ERA H: UNDATED ARCHITECTURAL DRAWINGS (11 documents) ──
Ten of these are five drawings duplicated as JPG and PDF. The "-2" suffix is the JPG. CONTENT-OPPORTUNITIES lists de-duplicating them as a fix-before-volume item.

(undated) | 1822-1-floor / 1822-1-floor-2 | floor-plan | First floor: parlors, library, kitchen. OCR of the JPG reads "FIRST FLOOR", "DINING ROOM", "GARDEN ROOM", and the address block as "1522 PINE ST" (OCR error for 1822).
(undated) | 1822-2-floor / 1822-2-floor-2 | floor-plan | Second floor.
(undated) | 1822-3-floor / 1822-3-floor-2 | floor-plan | Third floor.
(undated) | 1822-4-floor / 1822-4-floor-2 | floor-plan | Fourth floor.
(undated) | 1822-roof-deck / 1822-roof-deck-2 | floor-plan | Roof deck.
  No survey date, no draughtsman, no provenance recorded for any of the five drawings. They are almost certainly modern marketing plans, not historic drawings — but nothing in the repo establishes that either way.
(undated) | 1822-pine-1999-deed-2 — listed above under Era G.

── NOT IN THE ARCHIVE, BUT PRESENT IN raw_documents/ (2 files) ──
raw_documents/1822 Pine - 2013 Deed.pdf | [READ] — deliberately or accidentally omitted from document-archive.json, yet it supplies SIX of the nineteen facts on the published /history/provenance page, which therefore renders them with a dead link. Bullards → (grantee), recital naming Mione and Muntean; the legal description quoted across the site comes from this deed; consideration OCRs as "One Millon Five Hundred Fifty[-]Five Thousand".
raw_documents/1822 Pine - Property Cert.pdf | [READ] — intentionally excluded from the public archive, and the site says so. PC-2022-009391, issued 03/30/2022. Owner: PRICE ROBERTSON. Applicant: Rachael Pritzker DBA Pritzker Law Group, LLC, 1521 Locust Street Ste 605. Zoning RM1. "Five (5) dwelling units."

════════════════════════════════════════════════════════════════
PART 2 — CITED VS. ORPHANED
════════════════════════════════════════════════════════════════
Definition used: "cited" means a published page or story chapter points at the document in editorial prose. All 63 documents technically render at /history/documents/[slug] and appear in the archive index; 45 of them also appear as a card in /history/timeline. But that is listing, not citation, and it drives no reader to them. The repo's own count (CONTENT-OPPORTUNITIES line 2: "63 primary documents, of which only 7 are referenced by any page") matches this exactly.

CITED BY EDITORIAL PROSE — 7 documents
  1822-sold-for-14-000 .......................... story chapters "Between Mourning and Modernity", "Provenance Dossier"
  the-philadelphia-inquirer-1899-07-18-page-12 .. "Between Mourning and Modernity", "Architecture & Fabric", "Provenance Dossier"
  the-philadelphia-inquirer-1904-12-11-page-36 .. /history/suffrage AND four story chapters
  the-philadelphia-inquirer-1905-08-04-page-6 ... "Between Mourning and Modernity", "Architecture & Fabric", "Room by Room"
  evening-public-ledger-1915-01-08-page-10 ...... /history/suffrage AND "Votes in the Parlor", "Provenance Dossier"
  1941-deed-abstract-2 .......................... "The Apartment House Years"
  1822-pine-2002-deed ........................... "The Grande Dame Returns"

ADDITIONALLY LINKED FROM /history/provenance (via verified-facts.json) — 7 more
  thu-apr-23-1891-page-3-scarlet-fever, the-philadelphia-times-1899-08-06-page-10, the-philadelphia-times-1901-01-11-page-6, the-philadelphia-inquirer-1901-11-21-page-16, 1822-pine-1979-deed, 1822-pine-1985-deed, plus the two already-cited 1905 and 1904 clippings.
  So the true "reachable through prose" set is 12 of 63. The other 51 are reachable only by browsing the index.

ORPHANED — 56 documents, never referenced by any page
  ALL 24 unread clippings: 1824-03-26, 1866-12-08, 1867-04-08, 1870-08-10, 1871-01-14, 1871-12-06, society-tea, 1883-12-09-page-4, 1891-11-28, 1893-02-01, 1893-07-01 (Inquirer), 1893-07-01 (Times), 1896-06-29, 1896-11-23, 1899-04-06, 1900-10-03, 1901-10-27, 1906-12-30, 1907-12-15, 1908-01-06, 1912-09-29, 1913-02-09, 1913-03-10, 1914-03-27
  ALL 10 rotated deed cards: 1854, 1893, 1899-1, 1899-2, 1922-1, 1922-2, 1941-1, 1947-1, 1947-2, 1949-1, 1949-2, 1952-1, 1952-2 (13 entries; 1941-deed-abstract-2 is the one exception, cited above)
  3 modern deeds: 1822-pine-deed-1987, 1822-pine-1999-deed-1, 1822-pine-1999-deed-2
  ALL 10 floor-plan entries
  (The 1979 and 1985 deeds and the 1891, 1899-08-06, 1901-01-11, 1901-11-21 clippings are orphaned from prose but do surface on /history/provenance.)

FOUR BROKEN CITATIONS — chapters point at slugs that do not exist
  "before-the-threshold", "architecture-and-fabric", "provenance-dossier" → 1854-deed-abstract (real slug: 1854-deed-abstract-2)
  "events-and-filming" → the-philadelphia-inquirer-1901-11-21 (real slug: …-page-16)
  "the-seasonal-house" → the-philadelphia-times-1901-01-11 (real slug: …-page-6)
  The 1854 deed — the single most important document in the archive — is cited three times and links nowhere in all three.

════════════════════════════════════════════════════════════════
PART 3 — EVERY NAMED PERSON EVER ASSOCIATED WITH THE HOUSE
════════════════════════════════════════════════════════════════
Grade key: [A] primary document in this repo names them at 1822 Pine. [B] external/genealogical source, no in-repo document. [C] asserted in site prose with no source located. [LEAD] surfaced by research fan-out, source cited but not held.

BUILDER
- John McCrea [C at this address / B in the neighborhood] — former shipping magnate (one of Philadelphia's largest fleets, 1820s–30s), turned Rittenhouse developer; property on nearly every block of Spruce, Delancey and Pine west of 17th; used builders and master carpenters rather than architects. KNOWN: the pattern. UNKNOWN: any document tying him to 1822 Pine. DEEP-RESEARCH-REPORT states plainly that direct documentation "was not found." CONTENT-OPPORTUNITIES adds that three or four different John/Charles/Joseph/James McCreas must be disambiguated first, and that he should be attributed to the neighborhood, not this house.
- Joseph McCrea [B] — brother, physician, 2004 Delancey. Context only.

ROSET FAMILY (1854–1893)
- John Roset (Sept 3, 1794 – Aug 8, 1870) [B] — merchant; asserted first owner from April 1854. Son or grandson of Jean Jacques Rozet (1764/65–1850), French-Hungarian dry-goods merchant. UNKNOWN: whether the family occupied the house continuously — CONTENT-OPPORTUNITIES bench item 20 argues from directories that 1859–1893 was a succession of TENANTS, not heirs.
- Mary Ann Laning Roset (c.1807 – 1880) [B] — wife. Story-chapters says she kept the house after 1870 and that it passed into trust with the Pennsylvania Company at her death; the Pennsylvania Company detail is [C], unsourced anywhere in research/.
- Ellen Bicking Rozet Drexel (Feb 21, 1829 – Nov 27, 1891) [B] — daughter; married Anthony J. Drexel Aug 13, 1850, officiated by Rev. John D. Ludlow, Provost of Penn. Nine children. Died three weeks before Drexel Institute opened; Drexel's own 1942 institutional history calls her "a quiet but active co-founder." BIRTH YEAR DISPUTED: 1829 vs 1832, with evidence the 1829 date is a conflation with her twin brother. Must be flagged in-line, not silently resolved.
- George Hollenback Roset (Feb 21, 1829 – Nov 15, 1900) [B] — Ellen's twin; the source of the birth-date conflation.
- Sarah Emily Rozet Phelps/Smith (Jan 28, 1839 – Mar 28, 1903) [B] — daughter. UNKNOWN whether she lived here; "would have been living in her father's house" is an inference until the 1860 census is checked.
- Mary Ann Ludlow (née Roset) [B] — daughter. No dates known.
- Elizabeth Virginia Brodhead (née Roset) [B] — daughter. No dates known. Possibly connected to the "Broadhead" listed as a 1859–93 tenant in bench item 20 — unresolved and worth testing.
- Mary Rozet Smith [LEAD] — granddaughter (Sarah's daughter); Jane Addams's life partner and Hull-House's principal private patron. Sibling link rests on a Find a Grave family group plus the corroborating detail that Sarah named a son Francis Drexel Smith.
- Anthony Joseph Drexel (1826–1893) [B] — married into the family. NEVER LIVED HERE. In 1853–56 the newlyweds were at 1816 S. Rittenhouse Square. Required phrasing per the repo: "documented family connection," never "Drexel lived here."
- John Rozet Drexel (1863–1935), Sarah Rozet "Sallie" Drexel (1860–1929) [B] — Ellen's children.
- Joseph W. Drexel [LEAD] — Drexel Morgan partner, 1829 Pine, directly across the street.

SPENCER FAMILY (1891–c.1904)
- Graham Spencer (1852–1896) [B] — asserted purchaser, June 1893. Story-chapters gives his death as June 28, 1896 (unsourced date); Find a Grave gives 1896.
- Howard Spencer (Feb 26, 1884 – Apr 20, 1891) [A, partially] — died at 1822 Pine of scarlet fever, age 7. The 1891 clipping reads only "Spencer, Jr." — the given name comes from Find a Grave #74603329, Laurel Hill Cemetery, Section E, Plot 37-48.
- "Howard Spencer" the elder [LEAD] — CONTENT-OPPORTUNITIES #17 states flatly that BOTH men are real and that "Howard is documented at this address in 1871." Relationship to Graham: unknown.
- Agnes Mary Smith Spencer (1862–1921) [A] — appears in the record under three names: "Mrs. Graham Spencer" (1899 Inquirer, 1901 Times), "Mrs. Agnes Spencer" (1899 Times), "Agnes M. Spencer" (1899 deed). Took title Apr 3, 1899; commissioned the remodel; country house at Kaolin, Chester County. Listed in the Athenaeum's Philadelphia Architects and Buildings database as the client of the "Spencer Residence."
- Henry S. Pleasants and William McLean [C] — named in story-chapters as executors of Graham Spencer's estate. No source for either name exists anywhere in research/ or DEEP-RESEARCH-REPORT.
- "Woodhead" [A, unexplained] — recovered from the rotated 1893 deed card ("TRANSFER. PH. WOODHEAD"). Appears nowhere else in the repo.

DAVIS FAMILY (1904–1918)
- Henry C. Davis [A, by inference] — never named in his own right in any held document; known only as the husband in "Mrs. Henry C. Davis" and as the decedent in "widow of Henry C. Davis." Death date unknown; before May 1918.
- Naomi Lawton Davis [C/LEAD] — "Mrs. Henry C. Davis." Named in December 1913 tax-resistance coverage. Died May 21, 1918 at 1822 Pine per an obituary quoted in project sources. CRITICAL: neither the 1913 coverage nor the 1918 obituary is in this archive, and CONTENT-OPPORTUNITIES states the cited secondary page does not contain the quote the site publishes.
- Martha Davis ("Miss Martha Davis") [A] — the single best-documented resident. Treasurer of the Equal Franchise Society; sold luncheon tickets at $1.50 from this address, Evening Public Ledger, Jan 8, 1915. Relationship to Naomi asserted as daughter [C].
- Lucy Davis [LEAD] — a resident nobody has connected to this address before. Vassar 1885; Quaker; trustee of the Penn School at Frogmore, South Carolina; secretary of the Visiting Nurse Society of Philadelphia. Placed at 1822 Pine by two independent published sources: the 1910 Vassar general catalogue and the 1914 Woman's Who's Who of America. HARD GUARDRAIL: her Who's Who entry does NOT carry the volume's "Favors woman suffrage" tag. She is a Quaker reformer at this address, not a suffragist.
- "the Misses Davis" [A] — plural and unnamed, Dec 11 1904. Which Davis women were which is an open problem the repo itself flags; Lucy is "almost certainly one of them."

PHYSICIANS
- Dr. Damon B. Pfeiffer [C] — 1822 Pine St, College of Physicians roll, by 1915. The directory is not in this repo.
- Stillwell Corson Burns [C] — Surgery, 1822 Pine St, 1916 register. Same.

ARCHITECTS, BUILDERS, TRADES
- H. Louis Duhring Jr. (1874–1953) [B] — B.S. Architecture Penn 1895; first Stewardson Traveling Scholarship 1897; Powel House restoration 1931–32.
- R. Brognard Okie (1875–1945) [B] — Penn 1897; Betsy Ross House 1936–37 and Pennsbury Manor 1936–40 — CORRECTION: those were OKIE ALONE, after the firm dissolved in 1918. The site's "Betsy Ross House architects" framing is wrong.
- Carl Ziegler (1878–1952) [B] — trained at Cope & Stewardson and Frank Miles Day.
- Contractor "Rogers, of Stanwick, N.J." [A] — as printed in the 1899 Times. CONTENT-OPPORTUNITIES corrects to J. S. RODGERS, awarded 2 August 1899.
- Jacob Myres & Son [LEAD] — separate $1,200 alteration permit, 1900 campaign.
- J. N. Long [A] — OCR'd as "J N Leng"; installed the fireplace, $130, Aug 1905.
- G. C. Purviss [A] — the party the 1905 fireplace permit was taken out FOR. Entirely unaccounted for in every narrative on the site. Highest-value single unresolved name in the archive.

SOCIETY / THE 1901 WEDDING
- Fayette R. Plumb (May 2, 1848 – Jan 7, 1905) [B/C] — Fayette R. Plumb Edge Tool Works, Bridesburg; president of the Manufacturers' Club; Union League; erected a $1,000,000 St. Louis plant in 1903; buried Woodlands Cemetery. Asserted "listed at 1822 Pine Street" on Oct 27, 1901 — that rests entirely on an unread clipping.
- Katherine Carroll "Kate" Middleton Plumb (1852–1925) [B] — wife.
- Fayette Rumsey Plumb Jr. (1877–1966), Georgie Rodgers Plumb (1879–1906) [B] — children, of marriageable age in 1901.
- "Rolin" [A, unidentified] — the other family in the "Rolin-Plumb" wedding. DEEP-RESEARCH-REPORT could not independently verify the wedding at all.
- Mr. J. J. Sullivan and Mr. H. J. Sullivan [A] — named in the 1901 wedding OCR.

MODERN CHAIN OF TITLE (all [A], from deed OCR)
- Mary G. Sharpe Wilkes, widow — conveyed by deed dated May 1, 1967, Deed Book C.A.D. #972 p.304. HOW SHE ACQUIRED IT IS UNKNOWN — this is the 1952→1967 wall.
- Benjamin Serota and Shirley W. Serota, his wife — 1967 to 1979.
- Rod Goodwin — took Oct 17, 1979, Deed Book DCC 2130 p.196.
- Michael Kosmin — co-grantor 1985.
- Pine Associates, a Partnership — joined the 1985 deed to terminate its interest.
- Kosmin and Stango Partnership, a Pennsylvania General Partnership — grantee Mar 15, 1985 for $73,000, recorded Mar 18, Deed Book FHS 100 p.326. "Stango" — first name unrecovered.
- Thomas Jay Bushyager — took by Indenture dated June 26, 1987; died April 26, 1991.
- John R. S. Bushyager — appears in the 1999 conveyance.
- Superior Abstract — title company, 1999 Deed 2.
- Stephen A. Mione and Tralan Muntean — conveyed Aug 8, 2002, recorded Aug 14, 2002, Document No. 50510515.
- Roland K. Bullard II and Sally S. Bullard — tenants by the entireties, 2002–2013.
- Price Robertson — owner of record, 2022 Property Certificate.
- Rachael Pritzker, Pritzker Law Group LLC — applicant on that certificate.
- Trident Land Transfer Company — 2002 settlement.

BLOCK NEIGHBOURS (context, not residents — all [LEAD] from the directories)
James Curtis Booth, 1813 Pine, melter and refiner of the U.S. Mint · William Parker Foulke, 1827 Pine, excavated Hadrosaurus foulkii in 1858 · Henry Coppée, 1826 Pine, first president of Lehigh · Col. Chapman Biddle, 1831 Pine, wounded commanding a brigade on McPherson's Ridge · Commodore Geisinger, 742 Pine (pre-renumbering) · Archibald McElroy, 740 Pine, publisher of the city directory itself. CAUTION: the directory LINES are quotable verbatim; the IDENTIFICATIONS are not, and must not be published without an independent source.

SUFFRAGE CONTEXT (not residents)
Dr. Anna Howard Shaw (1847–1919), NAWSA president 1904–15, issued the December 1913 passive-resistance call · Alice Paul, whose Congressional Union ran its Pennsylvania headquarters from 1820 PINE STREET — the adjoining house — in 1914–15 · Caroline Katzenstein, EFS executive secretary 1914–16 · Sara Yorke Stevenson, EFS founder · Mrs. Wilfred Lewis, EFS president · Sophia Dulles, EFS recording secretary · Norman Hapgood and Anne Martin, the two speakers named in the 1915 ticket notice · Charlotte Pierce of Seneca Falls and Senator Boies Penrose, from the May 1914 Rittenhouse Square procession.

NAMES IN THE OCR THAT ARE NOT CONNECTED TO THIS HOUSE — do not mistake these for residents. Mary W. [wife of —], Anthony Tarter, and Margaret Thackray all appear in the 1891 clipping because they are adjacent death notices in the same column.

════════════════════════════════════════════════════════════════
PART 4 — OPEN QUESTIONS AND CONTRADICTIONS THE REPO ITSELF FLAGS
════════════════════════════════════════════════════════════════

1. THE SPENCER NAMING PROBLEM. DEEP-RESEARCH-REPORT calls it a "CRITICAL CORRECTION" and instructs that the patriarch be renamed Howard → Graham throughout. CONTENT-OPPORTUNITIES #17 then contradicts that instruction: "Howard vs. Graham Spencer — both men are real, Howard is documented at this address in 1871." So the correction may itself be an error, or a conflation of two generations. Unresolved. The 1871 clippings and the 1896-06-29 clipping (very likely Graham's obituary, dated the day after his asserted death) are sitting unread in the archive and would probably settle it.

2. THE BUILD DATE. Four incompatible dates are in play: the site publishes 1854 (from the deed abstract); the "Architecture & Fabric" chapter says "c. 1845: McCrea builds the block" and sets its era range to 1845–Present; Redfin publishes "circa 1845"; OPA carries an estimated "1800". CONTENT-OPPORTUNITIES #5 resolves it in favour of 1854 via directory evidence — zero occupants anywhere at 740–769 Pine in the 1845, 1850, 1852 and 1853 volumes, the row appearing in 1854 and full in 1855 — but that research has not been published and the underlying 1854 deed card has never actually been read. The repo's do-not-publish list bars both the OPA and Redfin figures.

3. THE RENUMBERING. 1822 Pine was 756 Pine before the 1856 ordinance (adopted in McElroy's with the 1858 volume), proven with an eight-household conversion table at a constant +1066 offset. Every pre-1858 search for this house must be run on 756 Pine. This is the repo's single biggest unexploited research key and it is not reflected anywhere in the archive metadata.

4. THE SUFFRAGE YEAR. The site publishes December 1913 for the Davis tax resistance; the older project material says 1911; RP-Alt-Index.md still carries "tax resistance 1911". DEEP-RESEARCH-REPORT corrects 1911 → December 1913. But CONTENT-OPPORTUNITIES then puts the 1913 quote itself on the DO-NOT-PUBLISH list — "the cited secondary page does not contain it; attribute by name and mark unverified, or hold it" — while /history/suffrage currently renders it as a full pull quote attributed to "Mrs. Henry C. Davis, of 1822 Pine Street · December 1913". This is a live, shipped contradiction between the repo's own rule and its own page.

5. DID SUFFRAGISTS EVER MEET IN THIS HOUSE? No. The record shows tickets SOLD from the address and tax resistance BY a resident. /history/suffrage handles this correctly and says so explicitly. But four unread archive synopses assert meetings here, and the unverified-claims file records the marketing line "Elegant double parlors … where Philadelphia suffragettes held meetings in 1915" and "Suffragette movement headquarters." Those must not propagate.

6. THE 1899 RENOVATION COST. $6,000 per the Philadelphia Times (in hand). The site and older material carry $25,000 in places, which has no source. DEEP-RESEARCH-REPORT calls the commission itself "UNVERIFIED" — it found no independent confirmation of a 1899 commission, cost, drawings or permits — while two clippings in this archive name client, address, architects and date. CONTENT-OPPORTUNITIES resolves this: the house IS in the Athenaeum's Philadelphia Architects and Buildings database as "Spencer Residence," client Agnes Spencer, and the 2 Aug 1899 Real Estate Record and Builders' Guide page (10 minutes, free) may carry the settled cost figure in the unread remainder after "A new story."

7. THE 1900 SECOND CAMPAIGN. A separate September 1900 campaign and a $1,200 alteration permit under Jacob Myres & Son are documented in the Builders' Guide and appear nowhere on the site. The archive holds an unread Inquirer clipping dated 1900-10-03 sitting exactly on that window.

8. WHO IS G. C. PURVISS? The 1905 fireplace — the site's most-repeated physical detail, invoked in six separate chapters — was permitted for "G C Purviss," not for any Davis, Spencer, or Roset. Nobody has explained this. It may indicate the owner-of-record differed from the occupying household, which is exactly what bench item 20 argues for the whole 1859–1893 stretch.

9. "IS22" vs "1822". The 1901 Rolin-Plumb wedding OCR reads "IS22 Pine street." The repo lists confirming this against the page image as an unblocking task. Until then the wedding is not proven to have happened at this address.

10. ARCHITECTURAL STYLE. The site says "Victorian mansion" (public/llms.txt, homepage, /history metadata). The City's own 1995 Rittenhouse-Fitler inventory describes the row as "Nineteen, 4-story, 2 bay, brick, late Greek Revival townhouses." CONTENT-OPPORTUNITIES lists fixing this as a blocker before any architecture page publishes.

11. "GOOSETOWN". DEEP-RESEARCH-REPORT gives Rittenhouse Square's early character as "Goosetown." CONTENT-OPPORTUNITIES states no checked source corroborates it; the sourced working-class name west of the Square is "Ramcat."

12. HISTORIC DISTRICT NUMBERS. DEEP-RESEARCH-REPORT cites National Register listing April 27, 1992, #92001878. That number belongs to RittenhouseTown in Germantown, not this district, and is on the do-not-publish list. The Philadelphia Register date of February 8, 1995 is the one the site uses.

13. ELLEN ROZET'S BIRTH YEAR. 1829 vs 1832, with a documented possibility that the 1829 date is a conflation with her twin brother George. Must be flagged in-line wherever used.

14. WHICH DAVIS WOMAN DID WHAT. "Mrs. Henry C. Davis," "the Misses Davis," "Miss Martha Davis," "Naomi Lawton," and now Lucy Davis. Only Martha is documented by name in a held primary source. The rest is reconstruction.

15. ROOM AND BATH COUNT. The site says 8 bedrooms / 6 baths, sleeps 16–18. OPA's record says 6BR/6BA. Unreconciled.

16. RM1. The site's own verified-facts correctly reads RM1 as a zoning classification and "five (5) dwelling units" as a separate line. CONTENT-OPPORTUNITIES warns that RM1 has been misread elsewhere as a unit count.

17. THE EVENTS POLICY CONTRADICTION. The "Events & Filming" story chapter is a full micro-wedding and film-shoot playbook. Site policy in llms.txt and the FAQ is no parties/events. Flagged as needing reconciliation.

18. THE 2013 DEED. It supplies six of the nineteen facts on /history/provenance but is not in document-archive.json, so those six citations resolve to plain text with no link. Either add it or move the facts.

19. DUPLICATE DOMAINS. 1822pine.com and rittenhouseresidence.com are both indexed with near-identical titles and the canonical is unresolved.

20. DUPLICATE ARCHIVE ENTRIES. The ten "-2" floor-plan/deed pairs are the same drawing in two formats; society-tea and the-philadelphia-times-1883-12-09-page-4 are the same Newspapers.com page (image ID 52185424) entered twice.

════════════════════════════════════════════════════════════════
PART 5 — WHERE THE ARCHIVE IS EMPTY
════════════════════════════════════════════════════════════════
Ranked by how much story sits inside the hole.

GAP 1 — 1922 to 1941 (19 years). THE LARGEST AND MOST IMPORTANT.
Nothing. Not one document. This is the entire apartment conversion, the Depression, and the transition out of the Davis/Spencer world. The site narrates it confidently ("The Apartment House Years") from nothing but the existence of undated registry cards on either side. Targets: Philadelphia building permits (they begin 1889), the 1930 and 1940 censuses, city directories, the 1942 land-use map, fire-insurance surveys at HSP, PhillyHistory.org photographs.

GAP 2 — 1952 to 1967 (15 years). Nothing, and it hides an entire owner. Mary G. Sharpe Wilkes appears fully formed in the 1967 recital as a widow already holding title; how and when she acquired it is unrecorded anywhere in this repo. Targets: the free 1950 census, PhilaDox grantor/grantee index, city directories, the 1962 land-use map.

GAP 3 — 1915 to 1922 (7 years). Contains the death of Naomi Lawton Davis at this address on May 21, 1918 — an event the site narrates in two chapters — and the archive holds NO document for it. Also missing: the 1915 Pennsylvania referendum defeat, WWI, the 1918 influenza year the "Seasonal House" chapter invokes, and the Nineteenth Amendment. Targets: the 1918 obituary itself, the Jan 14 1915 Evening Public Ledger bazaar page (already identified and freely republishable), the 1920 census, medical directories for Pfeiffer and Burns.

GAP 4 — 1854 to 1866 (12 years). The first Roset decade, wholly undocumented. And every search here must be run on 756 PINE, not 1822 — which nothing in the archive currently tells a researcher. Targets: McElroy's directories 1855–1858 (32 volumes located free on Internet Archive), the 1860 census (which would also settle whether Sarah Rozet was in her father's house), tax ledgers (which stop in 1851, so this window is the last chance).

GAP 5 — 1871 to 1883 (12 years) and 1883 to 1891 (8 years). Twenty years of the Roset ownership covered by two clippings, both unread. This is exactly the window bench item 20 argues was a tenancy succession — Broadhead, the McNeills, S. Decatur Smith the glassware manufacturer, James Trimble the grocer, then Howard Spencer. If that is right, the site's "Roset family home" framing for 1854–1893 is wrong for most of its span.

GAP 6 — 1967 to 1979 (12 years) and 1991 to 2002 (11 years). Both are artefacts of the mis-dating described in Finding 3 rather than true holes: the 1979 and 1999 deeds exist, they are just filed under their recital dates. Correct the dates and both gaps close.

GAP 7 — 2002 to the present (24 years). The 2013 deed exists in raw_documents but is outside the archive; the 2022 property certificate is deliberately excluded. Nothing else. Targets: the 2010 and 2020 censuses are irrelevant here; L&I permits, the 2013 recording, and any restoration documentation are the live ones.

GAP 8 — 1824 to 1854 (30 years). Pre-construction. Not a defect — but note that the lone 1824 clipping stands alone with no explanation of why it is in the archive at all.

GAP 9 — the undated block. Five architectural drawings with no survey date, draughtsman, or provenance, plus one 1999 deed with no date at all. Establishing whether the plans are historic or modern marketing documents is a five-minute question that nobody has asked.

════════════════════════════════════════════════════════════════
THE SEVEN CHEAPEST TASKS THAT UNBLOCK THE MOST
════════════════════════════════════════════════════════════════
1. Rotate the ten deed-registry card JPGs 180° and re-OCR them. Recovers, in one pass, the owner names for 1854, 1893, 1899, 1922, 1941, 1947, 1949 and 1952 — the archive's two largest gaps and its foundational document. Files are in /Users/billyprice/Code Repos/1822 Pine Website/.claude/worktrees/upbeat-payne-f033aa/raw_documents/.
2. Transcribe the 24 unread clippings. They are all retrievable by the Newspapers.com image IDs listed in Part 1. Four of them (1871×2, 1896-06-29, 1900-10-03) sit directly on top of named open questions.
3. Fix the four extracted_date values that point at recitals instead of deeds.
4. Fix the four broken document slugs in story-chapters.json, starting with 1854-deed-abstract → 1854-deed-abstract-2.
5. Re-tag the whole archive with "756 Pine" as an alternate address for anything before 1858.
6. Read the Real Estate Record and Builders' Guide page image for 2 Aug 1899 p.489 — ten minutes, free, may settle the renovation cost permanently.
7. Either add raw_documents/1822 Pine - 2013 Deed.pdf to document-archive.json or move its six facts off /history/provenance.