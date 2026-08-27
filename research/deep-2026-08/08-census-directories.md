<!-- Raw research return, deep-history pass of 2026-08-27. Findings carry A/B/C
grades and source URLs as the researcher recorded them. NOTHING HERE IS
PUBLISHABLE UNTIL RE-VERIFIED against its cited source — see the site's
no-fabrication rule. Synthesized dossier: docs/HOUSE-HISTORY-DOSSIER.md -->

All sources verified byte-for-byte against live Internet Archive downloads. Here is the report.

---

# CENSUS AND DIRECTORY RECONSTRUCTION — 1822 PINE STREET (756 PINE BEFORE 1858)

## PART 1 — FINDINGS

### FINDING 1 [GRADE A] — The renumbering is now PROVEN, not inferred: 756 Pine = 1822 Pine, same man, consecutive directory years

McElroy's 1857 and 1858 volumes carry the same resident at the old and new number.

1857 — https://archive.org/download/mcelroysphiladel1857amce/mcelroysphiladel1857amce_djvu.txt (line 106850)
> "Roset  John,  mer.,  756  Pine"

1858 — https://archive.org/download/mcelroysphiladel1858amce/mcelroysphiladel1858amce_djvu.txt (line 105797)
> "Roset  John,  nier.,  1822  Pine"

("nier." is OCR for "mer."). **"1822 Pine" occurs exactly once in the entire 1858 volume, and this is it.** Item pages: https://archive.org/details/mcelroysphiladel1857amce and https://archive.org/details/mcelroysphiladel1858amce

I verified both files byte-for-byte (md5) against fresh downloads from archive.org during this session.

### FINDING 2 [GRADE A] — An empirical 1857→1858 conversion table, and a correction the repo needs

I matched every surname appearing at 7xx Pine in 1857 against 17xx/18xx Pine in 1858. Nine unambiguous same-name pairs land on a **constant +1066** — and they are all in the 1800 block:

| 1857 (old) | 1858 (new) | Δ | person |
|---|---|---|---|
| 740 | 1806 | +1066 | M'Elroy Danl. R. |
| 744 | 1810 | +1066 | Siter Adam, mer. |
| 746 | 1812 | +1066 | Fling Wm., mer. |
| 748 | 1814 | +1066 | Jenkins John, Rev. |
| 750 | 1816 | +1066 | Kester John W., mer. |
| 754 | 1820 | +1066 | Hone Isaac, Mrs. |
| **756** | **1822** | **+1066** | **Roset John, mer.** |
| 758 | 1824 | +1066 | Barnes Jonathan |
| 766 | 1832 | +1066 | Robeno Andrew, merchant |

Verbatim pairs for the two houses flanking ours, which triple-lock the identification:
> 1857: "Hone  Isaac,  Mrs.,  754  Pine"  →  1858: "Hone  Isaac,  Mrs.,  1820  Pine"
> 1857: "Barnes  Jonathan,  758  Pine"  →  1858: "Barnes  Jonathan,  1824  Pine"

**THE CORRECTION:** +1066 is **not** the offset for "this stretch of Pine" generally — it is the offset for the **1800 block only**. In the 1700 block the same matching yields +1000 to +1006:
> "Hall  Charles,  Mrs.,  708  Pine" (1857) → "Hall  Charles,  Mrs.,  1714  Pine" (1858) = +1006
> "Fithian  Lemuel  S. … h  727  Pine" (1857) → "…h  1727  Pine" (1858) = +1000
> "Harbert  Mrs.  703  Pine" (1857) → "Harbert  Mrs.  1705  Pine" (1858) = +1002

A researcher applying a blanket +1066 to a 1700-block address will land in the wrong house. The repo's re-tagging task (#5 in its cheapest-tasks list) should be scoped to the 1800 block.

### FINDING 3 [GRADE A] — Complete occupancy of 1822 Pine, 1845–1871, from directories

Every volume searched on the correct number for its year (756 before 1858, 1822 from 1858). All files md5-verified against archive.org.

| Year | Entry at the house | Verbatim |
|---|---|---|
| 1845–1854 | **none** — house does not exist | (see Finding 4) |
| 1855 | John Roset | "Roset  John,  mer.,  756  Pine" |
| 1856 | John Roset | "Roset  John,  mer^  756  Pine" |
| 1857 | John Roset | "Roset  John,  mer.,  756  Pine" |
| 1858 | John Roset | "Roset  John,  nier.,  1822  Pine" |
| 1859 | **John Broadhead** | "Broadhead  John,  1822  Pine" |
| 1860 | **Thomas E. and Virginia M'Neill** | "M'Neill  Thomas  E.,  engineer,  414  Walnut,  h / 1822  Pine" and "M'Neill  Virginia,  widow,  1822  Pine" |
| 1861 | **S. Decatur Smith** | "Smith  S.  Decatur,  manuf.  &  dealer  in  a-lassware, / 35 1-  S  Front,  h  1822  Pine" (also "Smith  Decatur,  1822  Pine") |
| 1862 | S. Decatur Smith | "Smith  S.  Decatur,  Kensington  glassworks,  35J  S / Front,  h  1822  Pine" |
| 1863 | *no entry* (see negatives) | — |
| 1864 | S. Decatur Smith | "Smith   S.   Decatur,   glassworks,    35 ^^  S  Front,  h / 1822  Pine" |
| 1865 | S. Decatur Smith **+ Mary Cuthbert** | "Smith  S.  Decatur,  glassworks,    35\|    S   Front,    h / 1822  Pine" and, separately, "Cuthbert  Mary,  1822  Pine" |
| 1866 | S. Decatur Smith | "Smith  S.   Decatur,  glassworks,    36^    S    Front,  h / 1822  Pine" |
| 1867 | **James Trimble, grocer** | "Trimble  James,  grocer,  505  Market,  h  1822  Pine" |
| 1871 | **Howard Spencer** | "Spencer Howard, pres, 233 S 3d, h 1822 Pine" |

Sources, one per year: https://archive.org/download/mcelroysphiladel<YEAR>amce/mcelroysphiladel<YEAR>amce_djvu.txt for 1845–1867, and https://archive.org/download/gopsillsphiladel00cost/gopsillsphiladel00cost_djvu.txt for Gopsill's 1871 (item page https://archive.org/details/gopsillsphiladel00cost).

**What this settles:**

- **The repo's Open Question #1 (the Spencer naming problem) is resolved in favour of CONTENT-OPPORTUNITIES #17 and against DEEP-RESEARCH-REPORT.** Howard Spencer is real, is documented at 1822 Pine in 1871, and is described as "pres" with an office at 233 S 3d. The instruction to rename Howard → Graham throughout is wrong. There is **no** "Spencer Graham" or "Spencer G." anywhere in the 1871 Gopsill volume. Two generations, not one man.
- **The repo's bench item 20 is confirmed and is stronger than it claimed.** 1822 Pine was occupied by a *succession of tenants* — Broadhead, the McNeills, S. Decatur Smith, Trimble, then Spencer — while John Roset (d. 1870) and his estate held title. Roset himself appears at the house only 1855–1858. The site's "Roset family home, 1854–1893" framing is wrong for roughly 35 of those 39 years. The repo had these surnames as unsourced leads; they are now Grade A with verbatim directory lines.
- Two of the repo's guesses are now specific people: "the McNeills" = Thomas E. McNeill, engineer, office 414 Walnut, and Virginia McNeill, widow. "S. Decatur Smith the glassware manufacturer" = confirmed, and his firm is named: **Kensington Glass Works**, 35½ S. Front St.

**Caution:** "Cuthbert  Mary,  1822  Pine" (1865) is a genuine directory line [A], but whether she was a lodger, a relative, or a directory error is unresolved [C]. Do not publish her as a second household without more.

### FINDING 4 [GRADE A] — Hard directory evidence for the 1854 build date

Count of distinct occupied house numbers in the 734–775 Pine range (= the future 1800 block, south side), by volume:

| 1845 | 1847 | 1849 | 1850 | 1851 | 1852 | 1853 | 1854 | 1855 | 1856 | 1857 |
|---|---|---|---|---|---|---|---|---|---|---|
| 0 | 0 | 0 | 0 | 0 | 0 | 0 | **9** | **19** | 18 | 17 |

- 1854 occupied: 734, 736, 738, 740, 746, 748, 750, 752, 760. **756 is NOT among them.**
- 1855 occupied: 734, 736, 738, 740, 742, 744, 746, 748, 750, 752, **756**, 758, 760, 762, 764, 766, 768, 770 — a continuous row.

And John Roset's own movements track it exactly:
> 1845: "Roset  John,  mer.,  221  High,  h  130  Pine"
> 1847: "Roset  John,  mer.,  120  High,  h  Spruce  ab  Sch  8th"
> 1850: "Roset  John,  mer.,  120  High,  h  Walnut  W  Sch  7th"
> 1852 & 1853: "Roset  John,  mer.,  180  High,  h  730  Poplar"
> 1854: "Roset  John,  mer.,  730  Poplar"
> 1855: "Roset  John,  mer.,  756  Pine"

He moves in between the 1854 and 1855 canvasses. This is independent, free, republishable corroboration of an **April 1854** conveyance of a newly finished house, and it kills "c. 1845" and OPA's "1800" outright. It refines the repo's CONTENT-OPPORTUNITIES #5, which said the row "appear[ed] in 1854" — in fact roughly half the row was occupied by the 1854 volume and 756 specifically was not; the house first appears occupied in the 1855 volume.

### FINDING 5 [GRADE A] — A sourced pre/post-renumbering roster of the whole block, 1854–55

Every line below is verbatim from the md5-verified 1854 or 1855 McElroy's; the modern number is by the +1066 rule proved in Finding 2.

| Old | New | 1854/55 directory line |
|---|---|---|
| 734 | 1800 | "DUANE  WILLIAM,  att'y at law,  138 Walnut,  h  734  Pine" (1854) |
| 736 | 1802 | "Hockley  John,  cashier  B. N. A.,  h  736  Pine" |
| 738 | 1804 | "Packard  Frederick A.,  Am. S. S. U.,  316 Chestnut,  h  738  Pine" |
| 740 | 1806 | "PHILADELPHIA CITY DIRECTORY,  OFFICE,  7 HART'S BUILDINGS,  (2d story),  h  740  Pine" |
| 742 | 1808 | "GeisingerD.,  commodore  U. S. Navy,  h 742  Pine" (1855) |
| 744 | 1810 | "Siter  Adam,  mer.,  744  Pine" |
| 746 | 1812 | "Fling  Wm.,  clerk,  133 Market,  h  746  Pine" |
| 748 | 1814 | "JENKINS  JOHN,  REV.,  748  Pine" |
| 750 | 1816 | "Kester  John W.,  mer.,  1 Bank,  h  750  Pine" |
| 752 | 1818 | "Oliver  Robert W.,  Rev.,  752  Pine" (1854) |
| 754 | 1820 | "Hone  Isaac,  754  Pine" |
| **756** | **1822** | **"Roset  John,  mer.,  756  Pine"** |
| 758 | 1824 | "Barnes  Jonathan,  758  Pine" |
| 760 | 1826 | "Wylie  T. W. J.,  Rev.,  760  Pine" |
| 762 | 1828 | "Primrose  H.  Dr.,  762  Pine" |
| 764 | 1830 | "Lea  Robeson,  com. mer.  76 S Del av,  h  764  Pine" |
| 766 | 1832 | "Robeno  Andrew,  merchant,  766  Pine" |
| 768 | 1834 | "Taylor  David B.,  merchant,  7 and 9 S Water,  h  768  Pine" |
| 770 | 1836 | "Hazlehurst  John,  gent.,  770  Pine" |

Two of these matter a lot to the site:

- **740 Pine (= 1806 Pine) is the McElroy directory's own office/home.** The publisher of the book lived four doors from Roset. The repo had this as a [LEAD]; it is now Grade A with the line itself naming the directory.
- **754 Pine (= 1820 Pine)** — the Isaac Hone house — is the adjoining house that Alice Paul's Congressional Union used as its Pennsylvania headquarters in 1914–15. Eliza Hone, Isaac's widow, is still there in 1871: "Hone Eliza, wid Isaac, h 1820 Pine".

Block neighbours confirmed later, all Grade A directory lines:
> 1859: "Coppee  Hen.,  prof.  Penn.  University,  1826  Pine" — the directory itself supplies the occupation, so this is no longer a bare name match. Also 1861, 1862 ("professor Univ. Penna."), 1864.
> 1858 & 1859: "FOULKE  WM.  PARKER,  1827  Pine"
> 1867: "D.exel  Joseph  W.,  broker,  34 S 3d,  h  1829  Pine"; 1871: "Drexel Joseph W. (Drexel & Co.), h 1829 Pine"
> 1860: "M'Crea  James  A.,  M.D.,  1825  Pine" — a McCrea *on this block*, useful for the disambiguation problem, but this is a physician and **not** evidence about the builder.

### FINDING 6 [GRADE B] — 1950 federal census: 1822 Pine was recorded "no one home"

1822 Pine falls in **ED 51-158**, whose NARA description reads:
> "Philadelphia city - That part of Ward 7 (Tract 7-C-part) Bounded by Spruce; 18th; Waverly, 19th, Waverly; 20th"

Source: https://1950census.archives.gov/search/?ed=51-158 (API: https://1950census.archives.gov/api/search/?ed=51-158&state=PA&county=Philadelphia)

Sheet 38 of 62 — https://1950census.archives.gov/iiif/2/1950census%2F43290879-Pennsylvania%2F43290879-Pennsylvania-057476%2F43290879-Pennsylvania-057476-0038.jpg/full/full/0/default.jpg — column 1 of the preceding sheet (p.37) is written vertically "Pine St." and the house numbers descend 1832, 1830, 1828, 1826, 1824, 1822, 1820. On sheet 38:

- line 10, house **1824**, dwelling 550: **Shuster, Benjamin**, Head, w m 52; **Rose**, wife, w f 49; a married daughter, w f 27, occupation "Secretary — Doctors Office", 40 hrs; her husband, son-in-law, w m 28, "Attorney — Office", 40 hrs; **Shuster, Alan**, son, w m 22, "Graduate — Medical School". A note in the farm columns reads "Shuster office".
- line 15, house **1,822**: **"no one home"**, with a partly legible cross-reference "See S[heet] __ Line __".
- line 16, house **1820**, dwelling 553: head "Enumerated in Ohio".

Grade B rather than A because clear cellophane tape crosses columns 2–5 on this sheet and the house numbers sit slightly low in their rows; the words "1,822" and "no one home" are individually legible but their row alignment is the residual uncertainty. **I did not locate the call-back entry** among the other 61 sheets.

Useful block context from the same ED's post-enumeration sheet 56 (block-printed, fully legible; "END OF ENUMERATION" then added households):
> "1820 PINE ST 3-8 | 924 | No No | RAUCH CHARLES M — Head; FRANCES B — Wife"
> "1812 SPRUCE ST | 543 | ... FRIED PAUL H — Head; GRACE G — Wife; CARLIE J, NANCY J, ALICE E — daughters; **GARDNER MARJORIE — Maid**"

The "3-8" (or 3-B) apartment designator at 1820 Pine, and the multi-apartment entries at 1826 Pine on sheet 38 ("Apt 1st Flr", "2nd", "3rd"), show that **houses on this block were subdivided by 1950** — but the "no one home" entry means the 1950 census does **not** tell us whether 1822 itself was one dwelling unit or five.

### FINDING 7 [GRADE A] — Philadelphia Real Estate Record and Builders' Guide: four hits, all 1899–1900, and a hard negative for 1901–1940

Full-text search of the entire 1886–1940 run, free: http://philageohistory.org/BuildersGuide/search.cfm?q=%221822+Pine%22 — **4 results, no more.**

> v.14, 1899, p.489 (8/2/1899): "Duhring Okie & Zeigler, architects, 1420 Chestnut street, have awarded the contract for the alterations and additions to residence of Agnes Spencer, **1822 Pine** street, to **J. S. Rodgers, of Stanwick, N. J.** A new story"
> v.14, 1899, p.461 (7/19/1899): "The plans for this work were made by Architects Duhring, Okie & Ziegler. The same architects have finished plans for alterations and additions to Mrs. Graham Spencer's residence, at **1822 Pine** street. The drawings will be turned over to contractors for estimates."
> v.15, 1900, p.585 (9/12/1900): "…for alterations at **1822 Pine** street for Mrs. Graham Spencer."
> v.15, 1900, p.611 (9/19/1900): "**Jacob Myres & Son**, C, Juniper and Sansom sts, alt to dwg, **1822 Pine** st; cost, **$1200**"

Volumes: https://www.philageohistory.org/rdic-images/view-book-uv.cfm/PhilaBuildersGuide_v14_1899 and …_v15_1900

This confirms the contractor correction (Rodgers, not "Rogers"), confirms the September 1900 second campaign and the $1,200 Jacob Myres & Son permit — and establishes a clean negative: **no building-permit or contract notice for 1822 Pine appears anywhere in the Builders' Guide between 1901 and 1940.** The apartment conversion the site narrates in "The Apartment House Years" is not documented in the city's richest building-trade source.

---

## PART 2 — ARTICLE IDEAS THIS LENS SUPPORTS

1. **"756 Pine": the proof, in two consecutive directories.** Roset at 756 in 1857, at 1822 in 1858, with Hone at 754→1820 and Barnes at 758→1824 on either side. Publishable as a small table with two verbatim lines and two Internet Archive permalinks. Closes the repo's Open Question #3 and supplies the correction that +1066 applies only to the 1800 block.

2. **"The house was not the Roset family home."** The tenant succession 1859–1871 — Broadhead, the McNeills, S. Decatur Smith of the Kensington Glass Works, James Trimble the grocer, Howard Spencer — every one with a verbatim line. This is the single biggest factual correction available to the site and it rewrites a 39-year stretch of the narrative.

3. **"Nine houses in 1854, nineteen in 1855."** The block filling in, year by year, with Roset's own move from 730 Poplar. Settles the build date from free sources and retires "circa 1845" for good.

4. **"Who lived on the block when the house was new" (1854–55 roster).** Nineteen households, old and new numbers, including the man who published the city directory living at 1806, Commodore Geisinger at 1808, and the Hone house at 1820 that would become suffrage headquarters sixty years later.

5. **"Two Spencers."** Howard Spencer, president, 233 S. 3rd Street, at 1822 Pine in 1871 — and Graham Spencer's widow Agnes commissioning the 1899 remodel. Resolves the repo's own internal contradiction, using one directory line and the Builders' Guide notices.

6. **"1820 Pine, next door."** Isaac Hone 1855 → Eliza Hone, widow, 1871 → apartment "3-B" with Charles and Frances Rauch in 1950 → Alice Paul's Congressional Union HQ 1914–15 in between. A neighbour-house biography that legitimately touches suffrage without claiming meetings in 1822.

7. **"What the enumerator wrote: no one home."** A short, honest piece on the April 1950 sheet — the Shuster household of six next door with their occupations, the maid at 1812 Spruce, and the blank at 1822 — as a study in what census records do and don't preserve.

---

## PART 3 — NEGATIVE RESULTS (where not to spend time)

**Blocked outright:**

- **HathiTrust** — Cloudflare bot-check, 403 to both curl and a real browser pane. This matters: HathiTrust holds Boyd's Philadelphia combined city and business directory for **1887, 1893, 1894, 1895, 1900** in Full View (e.g. hvd.hx6aaz = 1887, hvd.hx6aax = 1893, hvd.hx6ab9 = 1894, hvd.hx6aaj = 1895, hvd.hwrff5 = 1900). Those five volumes would cover the Spencer purchase and the remodel years. **A human with a browser can read them in minutes.** Highest-value single unblocked task remaining.
- **Chronicling America / loc.gov** — hard HTTP 429 on every request, six retries with backoff, from this IP. (A prior session on this machine appears to have exhausted the quota; there are 163 cached files in the scratchpad from that run.) Retry from a different network.
- **FamilySearch** — free but login-gated; account creation is not something I can do. This is what blocks 1900, 1910, 1920, 1930 and 1940 indexed access.
- **Ancestry / Fold3** — paywalled.
- **NARA Catalog API** (catalog.archives.gov) — returns only the SPA shell; v2 needs an API key. This is why the 1940 population schedules are out of reach.
- **stevemorse.org ED finder** — the `unified.php` endpoint returns a 112-byte JS stub to curl; the ED lookups need the live JS app.
- **philageohistory.org via WebFetch** — 403. It works fine via curl with a normal browser User-Agent. Don't conclude the site is down.

**Searched and genuinely absent:**

- **No Philadelphia city directory for any year after 1871 exists on Internet Archive.** I enumerated the full IA text corpus for Gopsill / Boyd's / "Philadelphia city directory" / "Philadelphia directory": the run is McElroy's 1837–1867 plus Gopsill's 1871, and then nothing until modern items. The 1872–1935 directory gap — which covers the entire Spencer era, the Davis era, and the apartment era — has **no free full-text source** I could reach.
- **No 1822 Pine entry in the 1863 McElroy's** (md5-verified file). The 1863 volume is ~25% smaller than its neighbours; treat this as a volume/OCR gap, not as evidence of vacancy.
- **No "Spencer Graham" or "Spencer G." in Gopsill's 1871** at any address.
- **No Roset at any Pine Street address after 1858** in any volume through 1871.
- **Nothing for 1822 Pine in the Builders' Guide, 1901–1940** (see Finding 7). The apartment conversion is not there.
- **1940 and 1930 census reels are not on Internet Archive** for Philadelphia in usable form; my searches for "1940 census" / "16th census" Pennsylvania returned nothing relevant.
- **Wikimedia Commons has the 1940 ED *descriptions* and *maps* for Philadelphia County free** (~1,066 files, e.g. "File:1940 Census Enumeration District Descriptions - Pennsylvania - Philadelphia County - ED 51-159 - NARA - 5858784.jpg") **but not the population schedules.** So Commons can tell you which ED to look in and cannot show you who lived there.

**Methodological warning for the next researcher — this will save you a day:**

**The 1850, 1860 and 1870 federal censuses have no street-address column.** Only marginal notes, if the enumerator bothered. So there is no address-based route into the Roset decades; you must find the household by name, and for 1859–1871 the *names* are the tenants I list in Finding 3, not "Roset". Start from Broadhead / McNeill / Smith / Trimble / Spencer.

**Roadmap I built but did not finish — the 1880 census (the first with addresses):**

The reels are free on Internet Archive, no login:
- 1880 Philadelphia Wards 6–7, ED 107 sheet 5 – ED 135 sheet 10: https://archive.org/details/populationsc18801170unit (764 pages)
- 1880 Philadelphia Wards 7–9, ED 135 sheet 11 – ED 164 sheet 16: https://archive.org/details/populationsc18801171unit (763 pages)
- 1870 Philadelphia Ward 7: https://archive.org/details/populationschedu1392unit (no address column — see warning above)

Page images fetch directly as `https://archive.org/download/<id>/page/n<N>_w2000.jpg` (follow redirects). Column geometry on reel 1170: the street name runs vertically at x ≈ 0.085–0.115 of frame width, house number at x ≈ 0.12–0.15, below y ≈ 0.17.

ED↔page map I established on **reel 1170**: n409 = ED 122, n454 = ED 124, n499 = ED 126, n544 = ED 127, n589 = ED 129, n634 = ED 130, n679 = ED 132.
On **reel 1171**: n4 = ED 135, n54 = ED 137, n104 = ED 139, n154 = ED 141 (header reads "8 Ward 3rd Elect Dist"), n204 = ED 142, n254 = ED 144, n304 = ED 146, n354 = ED 148.

Streets I positively identified while scanning: ED 129 (~n600) = Delancey Place 1700–1800 blocks; ~n655 = Lombard St 1900 block; ~n675 = Naudain St; ~n710 = **Pine St 2000 block** and Spruce 2100 block; reel 1171 n42–n62 = house numbers 2200–2400.

**The 1800 block of Pine is therefore somewhere between reel 1170 page n648 and page n700, and I did not find it.** That is a bounded, ~50-page window for the next person. Note also that 1822 Pine is in the census **Seventh** Ward (confirmed independently by the 1950 tract 7-C assignment), *not* the "Eighth Ward" the 1985 deed's legal description recites — do not search Ward 8 on the strength of the deed.