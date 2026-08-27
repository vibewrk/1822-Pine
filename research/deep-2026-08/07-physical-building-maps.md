<!-- Raw research return, deep-history pass of 2026-08-27. Findings carry A/B/C
grades and source URLs as the researcher recorded them. NOTHING HERE IS
PUBLISHABLE UNTIL RE-VERIFIED against its cited source — see the site's
no-fabrication rule. Synthesized dossier: docs/HOUSE-HISTORY-DOSSIER.md -->

FINDINGS — 1822 PINE STREET, THE PHYSICAL BUILDING OVER TIME (maps, atlases, surveys, permits)

Working images I generated (all absolute paths, all re-creatable from the URLs below):
/private/tmp/claude-501/-Users-billyprice-Code-Repos-1822-Pine-Website--claude-worktrees-upbeat-payne-f033aa/6342a117-41dd-41a4-a1f5-2116ed511a79/scratchpad/maps1822/
  ov_h1860.png ov_h1875.png ov_h1895.png ov_h1910.png ov_h1942.png ov_h1962.png (historic plates with the modern PWD parcel outline for 1818–1826 Pine overlaid; 1822 in red)
  b1885_1822.png b1922_1822.png (full-resolution plate crops of 1822 Pine)
  strip1942.png strip1962_shift.png (each of 1818–1826 Pine rectified into its own labelled strip)
  legend_res.png lumidx_L3.png (the 1942 Land Use Map legend sheet)
  b1895_p2_L3.png b1922_L3.png b1885_L3.png (plate overviews proving coverage)
  parcels.json (City parcel geometry), wms.py / zoomify.py / overlay.py / strips.py (retrieval + registration scripts)

────────────────────────────────────────────────────────
1. THE CITY'S OWN DESCRIPTION OF THE ROW — AND THE DATE IT DOES NOT GIVE
────────────────────────────────────────────────────────

[A] Rittenhouse/Fitler Residential Historic District inventory, "ADDED 8 FEBRUARY 1995 TO THE PHILADELPHIA REGISTER OF HISTORIC PLACES", PDF page 88 (printed page 54).
URL: https://www.phila.gov/media/20190213131150/Historic-District-Rittenhouse-Fitler.pdf
Verbatim, complete entry for the south side of the block (this is the entry that governs 1822):

  "1800-1836   (1836 aka 401-409 S. 19th Street)  Nineteen, 4-story, 2 bay, brick, late Greek Revival townhouses, marble trim and surrounds; 1808, reduced one story, metal cornice; 1810, altered c. 1880 cornice and door.  ---  Contributing"
  "Street blacktopped, concrete sidewalks, granite curbs."

Three things follow, and two of them correct the repo:

(a) [A] The row is nineteen houses, 1800–1836, and 1822 is one of them. Independently confirmed: the City's assessment file returns exactly nineteen even-numbered addresses 1800–1836 on the block.
(b) [A] THE CITY GIVES THIS ROW NO CONSTRUCTION DATE. It dates the north side ("1803-1835 … Greek Revival rowhouses c. 1850"), it dates 1801 ("c. 1870 Italianate"), it dates the 1700 block south side ("1700-1738 … Twenty, 4-story, 2 bay, late Greek Revival townhouses, c. 1845"). For 1800–1836 there is no "c. 18xx" at all. So any "c. 1845" for THIS row that is attributed to the City's inventory is a misattribution — that c. 1845 belongs to 1700–1738 Pine, the block to the east. Repo Open Question 2 and 10 can be tightened accordingly: the City calls it "late Greek Revival," not "Victorian," and assigns it no date.
(c) [A] "1808, reduced one story" is independently corroborated today: OPA records 1808 Pine as 3 stories while every other survivor on the row is 4.

────────────────────────────────────────────────────────
2. THE ATLASES: WHICH PLATE, AND WHAT EACH ONE SHOWS
────────────────────────────────────────────────────────

The Greater Philadelphia GeoHistory Network has an address search that returns the property-level plates covering a given address. I ran it on 1822 Pine:
https://www.philageohistory.org/rdic-images/search-address.cfm?Address=1822+Pine+St%2C+Philadelphia%2C+PA&Search=Search

[A] It returns exactly these property-level plates (verbatim from the results table): "Plate F | 1875 | City Atlas of Philadelphia, vol. 6"; "Plate Q | 1885 | Atlas of the City of Philadelphia, 1885"; "Plate 2 | 1910 | Atlas of the City of Philadelphia"; "Plate 3 | 1922 | Atlas of the City of Philadelphia (Central)"; "Plate 9 | 1930 (circa) | Aerial Survey of Philadelphia, PA"; "Plate 3A-4 | 1942 | Philadelphia Land Use Map, 1942"; "Plate 3A-4 | 1962 | Philadelphia Land Use Map, 1962".

Direct plate URLs (all reached and read):
  1875 Hopkins, vol. 6, Plate F — https://www.philageohistory.org/rdic-images/view-image.cfm/GMH1875v6-plate_F
  1885 Bromley, Plate Q — https://www.philageohistory.org/rdic-images/view-image.cfm/bromley1885-Plate_Q
     [A] metadata verbatim: "5th, 6th, 7th, 8th, 9th, & 10th Wards, Scale 80 feet to an inch. From Actual Surveys and Office Plans of the Survey Department."
  1895 Bromley, Plate 2 — https://www.philageohistory.org/rdic-images/view-image.cfm/bromley1895-plate2
     [A] I fetched the plate and read its own header: "PART of WARDS 7, 8 & 9 … Scale 200 feet to the inch … PLATE 2", with Rittenhouse Square and the Pine/18th/19th block on the sheet. (GeoHistory's own cross-reference confirms 1895 Plate 2 ↔ 1910 Plate 2.)
  1910 Bromley, Plate 2 — https://www.philageohistory.org/rdic-images/view-image.cfm/BRM1910.Phila.004.Plate02
  1922 Bromley (Central), Plate 3 — https://www.philageohistory.org/rdic-images/view-image.cfm/BRM1922.CentralPhila.007.Plate03
     [A] plate header verbatim: "PART OF WARDS 7 & 8 … Scale 150 Feet to the Inch … PLATE 3". Subtitle in the record: "South Street to Lehigh Ave. Wards 5 to 20, 28, 29, 31, 32, 37 & 47".
  c.1930 Dallin aerial, Plate 9 — https://www.philageohistory.org/rdic-images/view-image.cfm/DAL1930.PhilaMetroAerials.009
  1942 Land Use Map, Plate 3A-4 — https://www.philageohistory.org/rdic-images/view-image.cfm/LUM1942.3A-4
  1942 Land Use Map, Index and Legend — https://www.philageohistory.org/rdic-images/view-image.cfm/LUM1942.Index
  1962 Land Use Map, Plate 3A-4 — https://www.philageohistory.org/rdic-images/view-image.cfm/LUM1962.3A-4

Two more layers cover this address in the georeferenced viewer but are NOT returned by the address search (see negatives): the 1858–1860 Hexamer & Locher atlas (layer id HXL1860) and the 1862 Smedley atlas (SMD1860.Phila).

Deep links into the georeferenced viewer, centred on the house (the viewer parses ?layers=, ?c=lat,lng, ?z= — I read the parsing code in /tiles/viewer/js/viewer-ui.js):
  1858–60 Hexamer & Locher: https://www.philageohistory.org/tiles/viewer/?layers=HXL1860&c=39.94628,-75.17248&z=19
  1875 Hopkins: …?layers=GMH1875v6&c=39.94628,-75.17248&z=19
  1895 Bromley: …?layers=bromley1895&c=39.94628,-75.17248&z=19
  1910 Bromley: …?layers=BRM1910Phila&c=39.94628,-75.17248&z=19
  1942 Land Use: …?layers=LUM1942&c=39.94628,-75.17248&z=19
  1962 Land Use: …?layers=LUM1962&c=39.94628,-75.17248&z=19

Reproducible raw-image retrieval (this is how I read the plates at survey resolution; the same call works for any layer id above):
  https://www.philageohistory.org/ecwp/ecw_wms.dll?REQUEST=GetMap&SERVICE=WMS&VERSION=1.1.1&LAYERS=HXL1860&FORMAT=image/png&BGCOLOR=0xFFFFFF&TRANSPARENT=TRUE&SRS=EPSG:4326&BBOX=-8368208.949454,4830643.826536,-8368108.761912,4830752.299182&WIDTH=2200&HEIGHT=2382&STYLES=&reaspect=false
  (BBOX is World-Mercator metres for the 1818–1826 Pine block face.)

────────────────────────────────────────────────────────
3. THE FOOTPRINT, PLATE BY PLATE
────────────────────────────────────────────────────────

Registration method (so this is checkable): I pulled the City's PWD parcel polygons for 1818–1826 Pine from
https://services.arcgis.com/fLeGjb7u4uXqeF9q/ArcGIS/rest/services/PWD_PARCELS/FeatureServer/0/query?where=ADDRESS%20IN%20('1818%20PINE%20ST','1820%20PINE%20ST','1822%20PINE%20ST','1824%20PINE%20ST','1826%20PINE%20ST')&outFields=ADDRESS,PARCELID&outSR=4326&f=geojson
and drew them on each georeferenced plate. Registration verified independently on three plates by the map's own printed house numbers falling inside the correct box: 1875 Hopkins prints "22" inside the 1822 box and "24"/"20"/"18" inside 1824/1820/1818; 1858–60 Hexamer & Locher prints "1822." inside it; 1910 Bromley prints "1824" and "1818" inside theirs.

[A] 1858–1860, Hexamer & Locher. 1822 Pine is drawn as a FOUR-STORY front block (the numeral "4." on the main mass) with a THREE-STORY back building behind it (numerals "3."), a small stepped rear appendage, and then OPEN GROUND between the back building and the Waverly Street line. The whole south row 1804–1836 is drawn identically — a uniform, purpose-built speculative row of 4-story fronts with 3-story back buildings. House numbers on the plate are already the post-renumbering 1800-series, so this atlas post-dates the 1856–57 ordinance. This is the earliest building-level depiction of the house I could reach.
  Caveat [B]: Hexamer & Locher also print small paired dots in each lot whose meaning I did not confirm against the atlas legend — do not publish an interpretation of the dots. The numerals for storeys are unambiguous.

[B] 1862, Smedley. Present and georeferenced (layer SMD1860.Phila) but generalised: it hatches a band along the Pine frontage only and shows the block dimension "396". Not probative on footprint. Do not use it as evidence the rear ell was absent.

[B] 1875, Hopkins, vol. 6, Plate F. Lot depth "90" and block length "396" printed; house number "22" printed in 1822's lot; the built area is hatched only across roughly the front quarter to third of the lot. Hopkins generalises building masses, so this should NOT be read as the rear building having been removed — treat it as low-detail.

[A] 1885, Bromley, Plate Q. This is the sharpest single sheet for the fabric question. Each lot carries its frontage in feet and the row carries "90" for depth. Reading west to east from the printed anchors 1824 and 1820: the lot between them is labelled "22" — i.e. 1822 Pine, 22 feet front, 90 feet deep. The building (pink = brick) fills essentially the whole 22 × 90 lot, with a narrow white light court cut into its WESTERN party line running from roughly 40% to roughly 72% of the depth; the rear of the lot is built, not yard. Its neighbours 1826/1828 show large open rear yards; 1820 shows a much larger rear court.

[A] 1885 frontages match the City's assessment file today, house for house. Bromley 1885 gives, west to east: 1836 = 24; 1834–1826 = 20; 1824 = 20; 1822 = 22; 1820–1812 = 22; 1810–1802 = 20; 1800 = 20. Today's OPA frontages are identical (1836 = 24, 1834–1824 = 20, 1822–1812 = 22, 1810–1804 = 20), and every lot on the row is 90 feet deep in both. No lot on this block face has been subdivided or merged in 141 years.
  Source for the modern side: https://phl.carto.com/api/v2/sql?q=SELECT%20location,year_built,year_built_estimate,frontage,depth,total_livable_area,building_code_description,category_code_description%20FROM%20opa_properties_public%20WHERE%20street_name=%27PINE%27%20AND%20house_number::int%20BETWEEN%201800%20AND%201836%20AND%20mod(house_number::int,2)=0%20ORDER%20BY%20house_number::int&format=csv

[A] 1895 Bromley Plate 2 and 1910 Bromley Plate 2. Both show 1822 as brick, filling the lot to near the Waverly line, with the same narrow light slot on the west party line. The rear-built condition therefore predates the 1899 Duhring, Okie & Ziegler alterations by at least fourteen years.

[A] 1922 Bromley Central Plate 3. The plate annotates 1822 Pine with frontage "22" and the row with depth "90" and storey count "4"; the building is brick and built out to near the rear line. Anchors on the sheet: "1828" and "1818" printed four lots apart, with "20" in 1824 and "22" in 1822.

[B, but well founded] THE ONE REAL FOOTPRINT CHANGE THE MAPS SHOW: between the 1858–60 Hexamer & Locher survey (front block + back building + open rear yard) and the 1885 Bromley survey (built to the rear lot line), 1822 Pine — and most of its row — grew rearward. That change belongs to the Roset ownership, NOT to the 1899 Spencer remodel. Any narrative that credits Duhring, Okie & Ziegler with the deep rear building is contradicted by the 1885 plate. Grade B rather than A only because Hopkins 1875 is too generalised to bracket the change more tightly than 1860–1885.

────────────────────────────────────────────────────────
4. THE APARTMENT YEARS, WITH DOCUMENTS (fills repo GAP 1 and GAP 2)
────────────────────────────────────────────────────────

[A] The 1942 Philadelphia Land Use Map legend, verbatim from the Index and Legend sheet (https://www.philageohistory.org/rdic-images/view-image.cfm/LUM1942.Index), "LEGEND OF LAND USE SYMBOLS / SYMBOLS FOR RESIDENTIAL USES":
  a plain lot = "DWELLING USE - SINGLE & TWO FAMILY - ATTACHED"
  "A" only = the same "- ATTACHED - WITH ACCESSORY USE"
  numeral over "M" = "MULTIPLE FAMILY - ATTACHED - No. OF STORIES"
  "A" over numeral over "M" = "- ATTACHED - … - WITH ACCESSORY USE"
  and the sheet's own note: "NUMERALS IN BEDS OF STREETS INDICATE HOUSE NUMBERS."
  Sheet imprint: "INDEX / PHILADELPHIA / LAND USE MAP … BUREAU OF ENGINEERING SURVEYS & ZONING / 1942", subtitle "Land-Use Zoning Project No. 18313".

[A] On Plate 3A-4 (1942), reading the five parcels rectified individually (strip1942.png), registration anchored by the "1836", "1800" and "20" house numerals printed in the street beds:
  1826 Pine = M / 4 (multiple family, attached, 4 storeys)
  1824 Pine = A (single & two family, attached, with accessory use)
  1822 PINE = M / 4 / A — MULTIPLE FAMILY, ATTACHED, FOUR STORIES, WITH ACCESSORY USE
  1820 Pine = M / 4 plus commercial stippling
  1818 Pine = M / 4 / A

[A, with a registration note] Plate 3A-4 of the 1962 Land Use Map carries the identical coding for the same five lots, including M / 4 / A at 1822. The 1962 sheet is georeferenced about half a lot off from the 1942 sheet in GeoHistory's mosaic; I re-rendered it with a +0.000043° longitude correction (strip1962_shift.png) and the lot lines then land on the strip edges and the codes read cleanly.

Why this matters: the site currently narrates "The Apartment House Years" from nothing but the existence of undated deed-registry cards. These two maps are dated, free to view, plate-specific City records that say in the City's own notation that 1822 Pine was a multiple-family dwelling in 1942 and still one in 1962. They sit exactly inside the archive's largest holes (1922–1941 and 1952–1967) and they bracket the "ZONING SEP 11 1941 REGISTERED" stamp the archive already holds. They also show that 1824 next door was NOT converted — a nice contrast, since today 1822 and 1824 are the only two of the nineteen still assessed as single-family.

[A] Today's condition, City assessment record, parcel 081079100 (https://phl.carto.com/api/v2/sql?q=SELECT%20*%20FROM%20opa_properties_public%20WHERE%20location=%271822%20PINE%20ST%27):
  location 1822 PINE ST; frontage 22; depth 90; total_area 1980; total_livable_area 5923; building_code_description "ROW 4 STY MASONRY"; category "SINGLE FAMILY"; zoning RM1; year_built "1800" with year_built_estimate "Y".
  Two useful points for the repo: (i) the "1800" the repo puts on its do-not-publish list is flagged by the City itself as an ESTIMATE — that is a fact about the record you can publish, as against the number; (ii) the 22 × 90 = 1,980 sq ft lot matches the 1985 deed's legal description and the 1885/1922 Bromley annotations exactly. (iii) OPA's "number_stories" field says 2 for 1822 and 3 for 1824 while both carry building code "ROW 4 STY MASONRY" — that field is unreliable here; don't cite it.
  Of the nineteen houses: 1822 and 1824 are the only two still "SINGLE FAMILY"; 1804 and 1806 are "HOTEL/RM HSE 4 STY MASON"; 1800 and 1802 are condominiums; the other thirteen are "APTS 5-50 UNITS MASONRY".

────────────────────────────────────────────────────────
5. MODERN PHYSICAL WORK — CITY PERMIT RECORD (public, free, republishable)
────────────────────────────────────────────────────────

[A] https://phl.carto.com/api/v2/sql?q=SELECT%20permitnumber,permitissuedate,permitdescription,typeofwork,approvedscopeofwork,contractorname%20FROM%20permits%20WHERE%20address=%271822%20PINE%20ST%27%20ORDER%20BY%20permitissuedate
Four permits exist for the address in the City's open permit dataset:
  443144, 2012-12-12, PLUMBING PERMIT / EZPLUM — "REPLACE FULL WATER SERVICE METER INCREASE FROM 5/8" TO 1"".
  994255, 2019-08-06, ALTERATION PERMIT / MAJOR — "INSTALL STAR BOLTS PER ENGINEERING.", contractor "WM.PROUD MASONRY RESTORATION".
  PP-2021-016844, 2021-09-17, Plumbing Permit / Alterations — "Replace curb trap, main drain, fai[…]", contractor ROBERT GOODMAN INC.
  ZP-2022-004846, 2022-06-27, Zoning Permit / Change of Use — "Limited Lodging", applicant "Pritzker Law Group, LLC".
The 2019 entry is the useful one for a fabric page: the star anchor plates visible on the façade are a 2019 masonry-restoration intervention, not historic ironwork. The 2022 zoning permit is the companion record to the property certificate PC-2022-009391 the archive holds but excludes.

────────────────────────────────────────────────────────
6. TWO CORRECTIONS TO CLAIMS THE REPO IS CARRYING
────────────────────────────────────────────────────────

[A] Repo Open Question 12 is settled. National Register reference 92001878 is NOT the Rittenhouse-Fitler district. I downloaded the NPS file itself: https://npgallery.nps.gov/NRHP/GetAsset/NRHP/92001878_text — 46 pages, "NATIONAL HISTORIC LANDMARK NOMINATION", and on page 1: "historic name RittenhouseTown Historic District", "street & number 206 - 210 Lincoln Drive". The number appears on Rittenhouse-Fitler's record at the Athenaeum's PAB database (https://www.philadelphiabuildings.org/pab/app/pj_display.cfm/73459, which prints "National Register: 92001878 (4/27/1992)") — that is very likely where the error entered the project. Keep using the Philadelphia Register date, 8 February 1995, which is printed on the inventory itself.

[A] Repo Open Question 6's PAB claim does not hold up as stated. There is a PAB record whose title contains "Spencer" — https://www.philadelphiabuildings.org/pab/app/ho_display.cfm/75343, "Ervin, Spencer, Residence Alterations" — but reading it: "Client Name: Ervin, Spencer", "Item dates: 1925-1927", "Collection: George B. Roberts Papers", "Institution: Historical Society of Pennsylvania", "Location: NW corner of Belmont Ave and Llanberris Rd." That is a man named Spencer Ervin in Lower Merion, not Agnes Graham Spencer at 1822 Pine. I also read the complete PAB project lists for Duhring, Okie & Ziegler (ar_display_projects.cfm/22640) and for Duhring (22482), Okie (91390) and Ziegler (23435): none contains "Spencer" or "1822 Pine". Do not publish "the house is in PAB as the Spencer Residence" without a specific pj_display.cfm project URL.

────────────────────────────────────────────────────────
7. A RIGHTS NOTE THE SITE NEEDS
────────────────────────────────────────────────────────

[A] Every GeoHistory plate page carries the footer: "Greater Philadelphia GeoHistory Network / PhilaGeoHistory.org — A project of the Athenaeum of Philadelphia / Permission is required to duplicate or publish materials on this site." The underlying scans belong to the Free Library of Philadelphia Map Collection (Hexamer & Locher, Smedley, both Land Use Maps, the Dallin aerials) and the Athenaeum (the Bromleys). So these maps are free to view and free to LINK, but they are not free to republish — link to the plate pages and the viewer, and clear any image you want to host. By contrast the phila.gov nomination PDF, the OPA/L&I/PWD data, and the NPS nomination are public records you can quote and reproduce.

────────────────────────────────────────────────────────
ARTICLE IDEAS THIS LENS SUPPORTS
────────────────────────────────────────────────────────

1. "Nineteen Houses: What the City Actually Says About This Row." Built entirely on the one verbatim inventory paragraph — nineteen, 4-story, 2-bay, brick, late Greek Revival, marble trim and surrounds — plus the fact that the City assigns the row no date, plus the two documented alterations it does record (1808 reduced a storey; 1810's c.1880 cornice and door). Replaces "Victorian mansion" with a sourced sentence and quietly retires the stray "c. 1845."

2. "The House Grew Backwards." Four plates in sequence — 1858–60 Hexamer & Locher, 1885 Bromley Q, 1910 Bromley 2, 1922 Bromley Central 3 — showing a four-storey front block with a three-storey back building and an open yard in 1860, and a lot built to the Waverly line by 1885. The single most publishable visual story here, and it moves a major piece of fabric out of the 1899 remodel and into the Roset years.

3. "Twenty-Two by Ninety, Since Before the Civil War." The lot dimension as continuity: 1885 Bromley prints 22 and 90; 1922 Bromley prints 22 and 90; the 1985 deed recites 22 feet by 90 feet to Waverly; OPA records 22 × 90 = 1,980 today. Nineteen lots, none ever subdivided or merged. Cheap to write, impossible to argue with.

4. "M / 4 / A: The Year the City Wrote Down That 1822 Pine Was an Apartment House." The 1942 Land Use Map legend and plate 3A-4, then the same code again in 1962 — with 1824 next door still coded single-family. This is the first actual document behind the site's "Apartment House Years" chapter and it sits inside the archive's biggest gap.

5. "Star Bolts Are Not Antiques." A short fabric-honesty piece keyed to L&I permit 994255 of 6 August 2019, "INSTALL STAR BOLTS PER ENGINEERING," contractor Wm. Proud Masonry Restoration — useful because the star plates are the kind of detail visitors ask about and assume is original.

6. "How to Look Up Your Own House on These Maps." A service piece built from the GeoHistory address search plus the viewer deep-link format — genuinely useful to every Rittenhouse homeowner and a strong organic-search page for the neighbourhood hub.

7. "Where the Numbers Came From" (correction/notes page). The 92001878 mix-up, the Spencer/Ervin PAB false match, and the City's own "estimate" flag on the 1800 build year. A no-fabrication site earns a lot of trust by publishing its own corrections with the receipts.

────────────────────────────────────────────────────────
NEGATIVE RESULTS — WHERE NOT TO SPEND TIME
────────────────────────────────────────────────────────

- SANBORN FIRE INSURANCE MAPS: I could not reach loc.gov at all in this session — https://www.loc.gov/item/sanborn07905_016/ and the collection JSON API both returned HTTP 403, and with browser headers a Cloudflare 429 "Just a moment…" interstitial. So I could not confirm which LOC Sanborn volume/sheet covers Pine between 18th and 19th. Separately, Penn's guide (https://guides.library.upenn.edu/sanborn) states the Philadelphia Sanborns are held as microfilm (Chadwyck-Healey 1916–1929 and 1916–May 1951, 28 volumes each; UPA 1976–1980) with online access only through subscription products (ProQuest Sanborn Maps Geo Edition; Digital Sanborn Maps 1867–1970 Pennsylvania). Next researcher: retry loc.gov from a normal browser, look for the sanborn07905 series, and use the volume's own index map/street index. Do not assume a free Philadelphia Sanborn sheet for this block exists until you have seen it.

- NO PROPERTY-LEVEL MAP BETWEEN 1843 AND 1858. GeoHistory's address search returns, for anything earlier than 1875, only city/county-level sheets: Holme 1683, Ellet 1843 "A Map of the County of Philadelphia", the 1853 Fairmount water-pipe map, and Barnes 1855 "New Map of the Consolidated City of Philadelphia". None of these shows individual houses. MAPS CANNOT DECIDE THE 1845-VS-1854 BUILD DATE. That question has to be settled by the directories and the 1854 deed card; stop looking for a map that settles it.

- 1933 ZONING MAP (layer PRD1933.Phila): I requested the block through the WMS and got a pure white image — 1 unique colour, mean RGB 255,255,255. The layer does not cover 1822 Pine. Skip it.

- 1934 APPRAISAL MAP (layer JMB1934.Phila, "1934 Appraisal Map"): it does cover the block, and it carries red letter grades (A, B, DE, E) and numbers (60, 65) per block. But its maxZoom is 17 versus 19–20 for the other layers, and at the magnification needed to attribute a grade to the Pine–Waverly block between 18th and 19th the scan disintegrates. I could not read it reliably and I am not publishing a grade. Worth a look at the source scan by someone with the plate in hand.

- DALLIN c.1930 AERIAL, PLATE 9 (16,800 × 10,829): this is a real asset sitting inside the 1922–1941 gap and I fetched it at full resolution around my computed position for the block. At the scan's effective ground resolution you can see rows, rear yards and party walls but you cannot separate one house from its neighbour, and there is no landmark inside the frame to positively fix which block you are on. I did not confirm the block. Anyone pursuing this should georeference the plate against Rittenhouse Square first.

- HEXAMER & LOCHER PLATE NUMBER NOT PINNED. The layer (HXL1860) is georeferenced and I read the block from it, but GeoHistory returns no metadata record for the id HXL1860 and its address search does not return an H&L plate. The atlas is Volume 3 (1858), plates 30–42, "blocks between Seventh Street and the Schuylkill River, from South Street to Chestnut Street" — so the plate is somewhere in 30–42, most likely at the western end. The Free Library's digital collections hold the individual plates (item IDs appear to run 11737 + plate number: item 11770 = Plate 33, 11771 = Plate 34, 11775 = Plate 38), and there is an "Index (vol. 3) and Legend" at https://libwww.freelibrary.org/digital/item/11766. The Free Library item pages did not yield text to a plain fetch — they need a browser. Ten minutes with a browser closes this, and the same visit should capture the H&L legend so the paired-dot symbol can be explained.

- GEOHISTORY'S ADDRESS SEARCH IS INCOMPLETE. It does not return the 1858–60 Hexamer & Locher, the 1862 Smedley, or the 1895 Bromley for this address even though all three layers demonstrably cover it in the viewer. Do not conclude from a null result there that a map does not exist — check the viewer layer list too.

- THE "HSF" ITEMS in the address results (HSF.D2D19, HSF.D2H1, HSF.D2H7A, HSF.D2H12) are Historical Society of Frankford copies of state and city maps — Reading Howell's 1792 Pennsylvania, Barnes' 1855 city map. Nothing property-level. Ignore them.

- PAB LOCATION SEARCH IS BEHIND A LOGIN. https://www.philadelphiabuildings.org/pab/app/search_location.cfm serves only a login form, so I could not run an authoritative "1822 Pine Street" query against the Athenaeum's project database. Its project pages are public once you have an id (e.g. 1730 Pine Street = pj_display.cfm/75634), and the Pine Street ids cluster around 75400–75900, but I did not brute-force it. Also note pj_search_results.cfm no longer exists (ColdFusion "File not found").

- HISTORIC BUILDING PERMITS (1889 onward) ARE NOT ONLINE. The City's open permits dataset that I queried begins in the 2000s — the four permits above are everything it holds for this address. The 1889+ permit ledgers are a City Archives / Athenaeum on-site resource. Anyone chasing the 1899 $6,000 alteration permit, the 1900 $1,200 Jacob Myres & Son permit, or the 1905 J. N. Long fireplace permit has to go in person or through the Athenaeum.

- I did not find any map or survey that names an occupant, owner, or architect. Every attribution question in the repo — Roset tenancy 1859–93, the Spencer naming problem, G. C. Purviss — is untouched by this lens. Maps give fabric, dimensions and use classification. They do not give people.