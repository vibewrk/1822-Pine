<!-- Raw research return, deep-history pass of 2026-08-27. Findings carry A/B/C
grades and source URLs as the researcher recorded them. NOTHING HERE IS
PUBLISHABLE UNTIL RE-VERIFIED against its cited source — see the site's
no-fabrication rule. Synthesized dossier: docs/HOUSE-HISTORY-DOSSIER.md -->

(hvd.hxnyj7, hvd.hxisbs,
    hvd.hxisbm, hvd.hxisbp, hvd.hxisbn, mdp.39015035098444, hvd.hxisbr). Those volumes
    cover the entire Spencer era, the remodel years, and the Davis household — the exact
    span with no free directory anywhere. A human with a browser closes this in an hour.
  · FamilySearch: free but login-gated. This is what blocks indexed access to the 1900,
    1910, 1920, 1930 and 1940 censuses — and the 1910 census for this address is one of
    the two records that would close the Davis/Mott question.
  · Ancestry / Fold3 / ProQuest Sanborn / Digital Sanborn Maps: paywalled.
  · NARA Catalog API (catalog.archives.gov): returns only the SPA shell; v2 needs a key.
    This is why the 1940 population schedules are out of reach. Note the 1950 site's IIIF
    endpoint DOES work and is documented in Section 7D — repeat that method for 1940 only
    if a comparable free IIIF endpoint exists.
  · stevemorse.org ED finder: unified.php returns a 112-byte JS stub to curl.
  · phillyhistory.org photo archive (Search.aspx): ASP.NET postback app, renders entirely
    in JavaScript, returns an empty shell to every fetcher. WHETHER ANY PHOTOGRAPH OF 1822
    PINE OR THE 1800 BLOCK EXISTS IS STILL UNKNOWN. Ninety seconds in a browser answers
    it. Note that the Historic Street Name Index on the same domain IS queryable by POST,
    and that is how the 1897 Waverly table was obtained.
  · Free Library of Philadelphia (libwww.freelibrary.org): Cloudflare-blocked. This holds
    the individual Hexamer & Locher plates (item IDs appear to run 11737 + plate number:
    11770 = Plate 33, 11771 = Plate 34, 11775 = Plate 38) and the vol. 3 Index and Legend
    at https://libwww.freelibrary.org/digital/item/11766. Ten minutes in a browser would
    pin the H&L plate number and capture the legend, which is needed before anyone
    interprets the paired dots drawn in each lot.
  · HSP (hsp.org, www2.hsp.org): 403. The Horstmann–Lippincott finding aid (Collection
    1899), which secondary descriptions say includes "servant's wages, 1856–1896," is
    unread and unverified.
  · Temple SCRC finding aid for the Center City Residents Association records
    (https://scrcarchivesspace.temple.edu/repositories/4/resources/997): 403. Likely the
    best source for the 1987–1995 designation fight.
  · cpparchives.org (College of Physicians ArchivesSpace, including a "Bequest of Damon
    B. Pfeiffer" record): Cloudflare-blocked.
  · findagrave.com: 403 to fetchers, works fine through a browser tool. Everything graded
    from it in this dossier came through the browser.
  · philadelphiabuildings.org: 403 to WebFetch, 200 to curl with a Chrome User-Agent, and
    fine through a browser. search_location.cfm is behind a login; pj_search_results.cfm
    and ho_results.cfm no longer exist; the firm project lists paginate through JavaScript
    (go_pj_page(n)) and cannot be walked by fetcher. THE ROUTE THAT WORKS is the block
    browse: https://www.philadelphiabuildings.org/pab/app/view_street.cfm/64820?PJ_GRID_BLOCKNUMBER=18
  · phila.gov PDFs: reject bare curl and exceed WebFetch's 10 MB limit, but download fine
    with a Chrome User-Agent. Same trick works for npgallery.nps.gov and
    philadelphiabuildings.org.
  · Internet Archive global full-text search: no working public endpoint (ia-fts and
    ia-pub-fts-api dead or empty; services/search/beta 404). THE METHOD THAT WORKS, and
    that produced most of Section 2B, is per-item: download
    archive.org/download/<id>/<id>_djvu.txt and grep it. The per-item search-inside
    endpoint (/fulltext/inside.php?item_id=…&q=…) also works and is how leaf numbers were
    resolved.
  · Geni.com: JS/login-gated, empty DOM.
  · hmdb.org (Historical Marker Database): Cloudflare 403. No marker inscription was read
    directly; all marker text in this dossier comes from Wikipedia's PHMC list.
  · phmc.pa.gov marker search: the old Marker-Search.aspx is gone; the URL 302s to a
    generic landing page.
  · plugin:vercel-plugin MCP server is unauthorized in this session and cannot be
    authorized non-interactively. Unrelated to the research, but it means the Vercel tools
    are unavailable until someone runs the OAuth flow via `claude mcp` or /mcp.

8.2 SEARCHED AND GENUINELY ABSENT — CORPUS-LEVEL FINDINGS
  · THE FREE-NEWSPAPER COVERAGE MAP FOR PHILADELPHIA is the binding constraint on the
    whole newspaper lens. Complete list of Philadelphia titles with free full text, with
    their actual digitized spans: The Press 1857-08-01 to 1865-10-14; Daily Evening
    Bulletin 1864-02-02 to 1870-10-08; The Evening Telegraph 1864-07-01 to 1871-06-30;
    The American Presbyterian 1860-1869; Our Daily Fare 1864-1865; Evening Public Ledger
    1914-09-14 to 1922-12-30; Gazette of the United States and successors 1789-1801; three
    Italian-language papers 1917-1922. That is all.
    CONSEQUENCES, and they explain the shape of the whole archive: there is NO free
    full-text Philadelphia daily for 1802–1856, for 1872–1913, or for 1923 onward. The
    construction and renumbering window is unreachable. The entire 1872–1913 span — the
    $14,000 sale, the 1893 transfer, the 1899 remodel, the 1900 campaign, the 1901
    wedding, the 1904 "at home," the 1905 fireplace permit, the December 1913 tax
    resistance — has no free newspaper source at all. That is why the archive is built on
    Newspapers.com, and it is why the December 1913 quote cannot be verified for free.
  · THE PHILADELPHIA INQUIRER AND THE PHILADELPHIA TIMES ARE IN NO FREE FULL-TEXT ARCHIVE.
    All 24 unread clippings drawn from those two papers must be retrieved from
    Newspapers.com by the image IDs already recorded in the archive map. Two exceptions,
    both now resolved: the Evening Telegraph pages of 1870-08-10 and 1867-04-08.
  · "756 PINE" IS UNSEARCHABLE IN FREE NEWSPAPERS, FULL STOP. Zero hits across the entire
    Penn State PA archive and all of Chronicling America (the three LOC hits are railroad
    timetables: "leave Auburn at 756 A.M. for Pine grove"). The reason is structural —
    see the coverage map above. DO NOT RUN THIS SEARCH AGAIN. The renumbering key works in
    directories, deeds and tax ledgers, not newspapers, and it has now been worked.
  · NO PHILADELPHIA CITY DIRECTORY FOR ANY YEAR AFTER 1871 EXISTS ON INTERNET ARCHIVE.
    The full IA text corpus was enumerated for Gopsill's / Boyd's / "Philadelphia city
    directory" / "Philadelphia directory": the run is McElroy's 1837–1867 plus Gopsill's
    1871, then nothing until modern items. The 1872–1935 gap covers the entire Spencer
    era, the Davis era and the apartment era. The one apparent exception —
    `boydscopartnersh01boyd` — is misdated by IA and is discussed at 2C and 4.3.
  · NO POLK'S MEDICAL REGISTER on IA in any edition. American Medical Directory editions
    for 1916 and 1918 are not freely available anywhere reached — which matters, because
    they are exactly the volumes that would show whether 1822 Pine was already medical
    before Brown arrived. The 1914 IA scan is a partial with no 1822 Pine entry; the 1956
    edition is lending-restricted.
  · THE 1850, 1860 AND 1870 FEDERAL CENSUSES HAVE NO STREET-ADDRESS COLUMN. Only marginal
    notes, if the enumerator bothered. There is no address-based route into the Roset
    decades. You must search by NAME, and for 1859–1871 the names are the TENANTS in
    Section 2B — Broadhead, McNeill, Smith, Trimble, Spencer — not "Roset." This will save
    the next researcher a day.
  · THE 1880 CENSUS (the first with addresses) — an unfinished roadmap, bounded. Free on
    IA, no login: Philadelphia Wards 6–7 https://archive.org/details/populationsc18801170unit
    (764 pp.) and Wards 7–9 https://archive.org/details/populationsc18801171unit (763 pp.).
    Page images fetch at https://archive.org/download/<id>/page/n<N>_w2000.jpg. On reel
    1170 the ED↔page map established was n409=ED122, n454=124, n499=126, n544=127,
    n589=129, n634=130, n679=132; streets positively identified were Delancey 1700-1800 at
    ~n600, Lombard 1900 at ~n655, Naudain at ~n675, PINE 2000 BLOCK at ~n710. THE 1800
    BLOCK OF PINE IS SOMEWHERE BETWEEN n648 AND n700 AND WAS NOT FOUND. That is a bounded
    ~50-page window for the next person. Note: 1822 Pine is in census WARD 7, not the
    "Eighth Ward" the 1985 deed recites — do not search Ward 8 on the strength of the deed.
  · NO PROPERTY-LEVEL MAP EXISTS BETWEEN 1843 AND 1858. GeoHistory returns only
    city/county sheets for anything earlier than 1875 (Holme 1683, Ellet 1843, the 1853
    Fairmount water-pipe map, Barnes 1855). MAPS CANNOT DECIDE THE BUILD DATE. Stop
    looking.
  · GEOHISTORY'S ADDRESS SEARCH IS INCOMPLETE. It does not return the 1858-60 Hexamer &
    Locher, the 1862 Smedley, or the 1895 Bromley for this address even though all three
    demonstrably cover it in the viewer. Do not conclude from a null result there that a
    map does not exist — check the viewer layer list too.
  · The 1933 zoning map layer (PRD1933.Phila) returns a pure white image for this block —
    mean RGB 255,255,255, one unique colour. The layer does not cover 1822 Pine. Skip it.
  · The 1934 Appraisal Map (JMB1934.Phila) covers the block and carries red letter grades,
    but its maxZoom is 17 against 19-20 for other layers and the scan disintegrates at the
    magnification needed to attribute a grade. NO GRADE WAS READ AND NONE SHOULD BE
    PUBLISHED without the plate in hand.
  · The Dallin c.1930 aerial, Plate 9 (16,800 × 10,829) was fetched at full resolution
    around the computed position. Rows, rear yards and party walls are visible; individual
    houses are not separable, and there is no landmark in frame to fix the block. THE BLOCK
    WAS NOT CONFIRMED. Anyone pursuing it must georeference against Rittenhouse Square
    first. It remains a real asset sitting inside the 1922-1941 gap.
  · SANBORN FIRE INSURANCE MAPS: not confirmed to exist free for this block. Penn's guide
    (https://guides.library.upenn.edu/sanborn) states the Philadelphia Sanborns are held as
    microfilm with online access only through subscription products. Do not assume a free
    Philadelphia Sanborn sheet for Pine between 18th and 19th exists until you have seen it.
  · HISTORIC BUILDING PERMITS ARE NOT ONLINE. The City's open permits dataset begins
    around 2007; the four permits in Section 2F are everything it holds. The 1995
    designation report states the constraint precisely: "Building Permits of the City of
    Philadelphia: available after 1886, when city code required permits for significant
    construction projects, often incomplete and willfully distorted to limit tax
    liabilities. Partially indexed." Anyone chasing the 1899 $6,000 permit, the 1900 $1,200
    Myres permit, or the 1905 fireplace permit must go to the City Archives or the
    Athenaeum in person.
  · NOTHING FOR 1822 PINE IN THE BUILDERS' GUIDE, 1901–1940 — a full-run full-text search
    returns exactly four hits, all 1899-1900. The apartment conversion is not in the city's
    richest building-trade source. (Volume-level searches for 1905, 1922, 1923 and 1924
    were run separately with a whitespace-tolerant regex: zero.) An unblocked systematic
    sweep of all 40 free IA volumes is a few hours of downloading and is the single most
    likely thing to close Gap 1 from the trade press.
  · WIKIPEDIA HAS NO ARTICLE ON PINE STREET, PHILADELPHIA. ("Pine Street" is Seattle.)
    Chestnut, Walnut, Arch, Vine and South all have Philadelphia articles; Pine and Spruce
    do not. That is a straightforward content gap and Rank 14 plus a block-by-block walk
    piece would fill it.

8.3 SEARCHED AND NOT FOUND — SPECIFIC TARGETS
  · "Naomi Lawton Davis" as a three-word string: zero hits anywhere. The notices print it
    as "NAOMI LAWTON, widow of Henry C. Davis." Search the components.
  · Any Naomi Davis estate, will, or letters-testamentary notice in the EPL after May 1918:
    none.
  · "Agnes M. Spencer" or "Mrs. Graham Spencer" ever printed with 1822 Pine as her address:
    never, across 2,644 EPL issues. She is at 1327 Spruce (1914) and "of this city and
    Bermuda" (1921).
  · Any Roset or Rozet within five words of "Pine" in any Philadelphia paper 1857–1871:
    zero. Meaningful, given the same corpus yields Smith at 1822 Pine and a full Roset
    obituary.
  · No Roset at any Pine Street address after 1858 in any directory volume through 1871.
  · "Damon B. Pfeiffer," "Stillwell Corson Burns," "Fayette R. Plumb," "Woodhead,"
    "Purviss," "Bushyager," "Sharpe Wilkes": all zero in Pennsylvania papers, or zero in
    any relevant context. Purviss returns only unrelated 1845/1857/1889 items.
  · No G. C. Purviss in the AMA directories for 1912, 1921 or 1929, anywhere in
    Pennsylvania. He is not a medical lead.
  · Duhring, Okie & Ziegler as a firm: zero in Chronicling America. And PAB's project lists
    for the firm and for Duhring, Okie and Ziegler individually contain no "Spencer" and no
    "1822 Pine" — which is one half of the contradiction at 4.14(a).
  · PAB attributes NO builder and NO architect to the 1800 block of Pine. The three
    block-level records (1800-1806, 1808-1836, 1803-1825) are "(untitled)" with a PHMC date
    and nothing else. There is no McCrea attribution in PAB. Do not go looking for one.
  · No source anywhere ties John McCrea to 1822 Pine Street. DEEP-RESEARCH-REPORT already
    said direct documentation "was not found"; this pass confirms it from the federal
    nomination, which names his projects elsewhere, and from PAB, which names no builder
    at all. Note also that three or four different John/Charles/Joseph/James McCreas must
    be disambiguated, and that McElroy's 1860 shows a "M'Crea James A., M.D., 1825 Pine" —
    a physician on this block who is NOT evidence about the builder.
  · No Lucy Davis and no Martha Davis in the Fair Hill register (all 3,573 rows), in
    Woman's Who's Who beyond Lucy's own entry, or on Find a Grave for Philadelphia. The
    Davis daughters left no findable grave.
  · The Penn School Papers finding aid at UNC (https://finding-aids.lib.unc.edu/catalog/03615)
    names no Davis at all and no Lucy Davis among trustees. Her trusteeship is attested
    only by the 1914 Who's Who. Do not expect UNC to corroborate it cheaply.
  · The Ann Lewis Suffrage Collection's 1912 Equal Franchise Society constitution is
    metadata plus page images only, no transcription — so no officer list without reading
    the images by hand. Martha Davis's treasurership rests on the 1915 EPL notices.
  · No source for "Henry S. Pleasants" as an executor of Graham Spencer's estate. That
    name stays [C]. (William McLean is now [B]; see 2C.)
  · "Roset & Bicking" appears nowhere on the open web except the phila.gov nomination
    quoting the 1870 Evening Bulletin obituary. Corroborating the firm needs HSP's Roset
    Family Papers or period business directories.
  · No 19th-century source for "Goosetown" or "Ramcat": zero occurrences of either in
    Cohen's Rittenhouse Square, Past and Present (1922,
    https://archive.org/details/rittenhousesquar00cohe) or in the 8.9 MB 1871 directory.
    Cohen does discuss the brickyards ("this whole section was brickyards"). The oldest
    citable authority on Ramcat is Dennis Clark's essay in The Divided Metropolis (1975),
    reached only through summaries; nobody obtained Clark's text.
  · No pre-1855 name for Waverly at 17th–19th. This is a positive finding of absence: the
    DOR index records no 1858 and no 1897 change for those two blocks, and the street is
    absent from the 1854 directory index and present in 1855. Stop hunting for a former
    name.
  · No 761 Pine (Foulke) or 747 Pine (Booth) entry in the 1855, 1856 or 1857 volumes. Both
    arrived on the block c. 1858–59. Do not look earlier.
  · The 1853 volume contains no Pine Street number between 709 and 817. If you want to
    prove the row was not standing in 1853, that is the evidence; there is nothing else in
    that volume.
  · The identity of the hospital at 1827-1831 Pine is unresolved; targeted searches return
    only Pennsylvania Hospital at 8th and Pine.
  · No contemporary newspaper coverage of the 1800 block's apartment conversion was located
    through open web search.
  · Historic Rittenhouse: A Philadelphia Neighborhood (Burke, McCauley, Sperr, Vaux; Penn
    Press, 1985; ISBN 9780812212020) is not on Internet Archive under any title search and
    no free full text exists. PAB cites pp. 44-45 FOR THIS HOUSE. THIS IS THE HIGHEST-VALUE
    UNCOLLECTED SECONDARY SOURCE FOR THE WHOLE PROJECT and it must be bought or borrowed.
  · Antique Row has no scholarly or municipal literature. The Encyclopedia of Greater
    Philadelphia has no essay on it; ExplorePAHistory's page is a three-line tourism stub;
    everything else is travel content, some of it mutually contradictory and evidently
    AI-generated. There is no Historical Commission designation, no National Register
    listing and no ordinance creating or bounding it — it is an informal commercial
    corridor, and if the site uses the word "district" it must say "informally known as."
    The two sources worth citing are Hidden City's 2012 piece and the City's own
    PhillyHistory blog post on James Eham
    (https://blog.phillyhistory.org/index.php/2024/02/james-eham-pioneer-antique-dealer/),
    which is the strongest single fact about the corridor's origins: a dealer born enslaved
    in Virginia, in Philadelphia from 1876, whose store at 1237 Pine anchored the western
    end and whose Philadelphia Tribune obituary of 11 December 1930 called him a "Pioneer
    Antique Dealer."
    ADD TO DO-NOT-PUBLISH: "the oldest continuously-operating antiques district in the
    country" — no historical, municipal or trade-press source exists for that phrase.
  · Pine Street's one-way direction is not stated on any City page reached. Do not publish
    it from memory.
  · No map or survey found anywhere names an occupant, owner or architect. Maps give
    fabric, dimensions and use classification. Every attribution question in the repo is
    untouched by that lens.

8.4 FALSE LEADS KILLED AT THE IMAGE OR THE RECORD — recorded so nobody re-finds them
  · "Guy Bryan Schott, 1822 Pine street," administrator of the Thomas J. Bryan estate,
    1868–1870, including what looked like a funeral held in this house in May 1870, inside
    the Roset ownership. IT IS 1522 PINE. Both images read directly:
    https://panewsarchive.psu.edu/lccn/sn84026016/1870-07-09/ed-1/seq-4/ and
    https://panewsarchive.psu.edu/lccn/sn84026016/1870-05-25/ed-1/seq-1/
    This is the strongest argument in the entire pass for the rule that no address digit
    goes on the site without someone looking at the page image.
  · "M. Errickson, No. 1822 Pine street" — the archive's own 1867-04-08 clipping. IT IS
    1322 PINE, confirmed on the 17 April rerun. That clipping is a medical-electricity
    advertisement and does not concern this house.
  · "Meeting at the residence of Miss Martha Davis, 1822 Pine street," April 1919. IT IS
    1823 PINE.
  · "Spencer Carriage House and Stable" — Dupont Circle, Washington D.C., built 1905.
    Surfaces on every Spencer + carriage house search. Nothing to do with this house.
  · "Ervin, Spencer, Residence Alterations" (PAB ho_display.cfm/75343) — a man named
    Spencer Ervin, Lower Merion/Bala Cynwyd, 1925-27, George B. Roberts Papers at HSP.
    Surfaces on every PAB "Spencer" search.
  · TWO Henry C. Davises in one Boyd's volume, neither at 1822 Pine: "Davis Henry C (John
    Davis & Sons), h Devon Pa" and "Davis Henry C, pres Barclay RR Co, Slate Line &
    Sullivan RR and Long Valley Coal Co, h Hotel Metropole." The anthracite-railroad one is
    tempting — it would rhyme with Howard Spencer's mineral company — but nothing connects
    him to Henry Corbit Davis. Open lead only; do not assert.
  · Gen. David Bell Birney at 1810 Delancey Place. It is his widow, after October 1864.
  · The archive's 1891-11-28 clipping: three mutually incompatible descriptions exist in
    the repo (Spencer purchase / Ellen Rozet Drexel's death / the scarlet-fever report).
    All three are guesses, and the first cannot be true — the Spencer purchase is 1893.
  · The archive's 1871-01-14 clipping cannot be Annie McQueen Graham Spencer's death
    notice: she died 15 January 1871, the day AFTER the paper. Either the genealogical day
    is off or the clipping is unrelated. Read it before assuming either.
  · Unresolved directory lines nobody should re-chase: McElroy's 1857 "FRENCH WM. H.,
    plasterer … h 192 Waverly" (the number fits neither the old nor the new numbering on
    17th-to-19th Waverly); 1857 "Smith Russel, landsc. painter, Waverly" (no number;
    tempting to connect to the painter Russell Smith, NOT confirmed); 1866 "Moore
    Marmaduke, 319 Walnut, h Waverly" (no number).

8.5 METHOD WARNINGS THAT WILL SAVE THE NEXT RESEARCHER A DAY
  · LOC's Chronicling America search is exact-token against raw OCR; one garbled character
    kills the hit. "Spencer kaolin Hockessin" returns zero on a page containing all three
    words, because the OCR reads "Hockessln." PSU's Open ONI node accepts
    proxtext=…&proxdistance=N and is far more forgiving; it found three EPL pages LOC
    missed entirely. Run both. Endpoints: https://www.loc.gov/collections/chronicling-america/?q=…&fo=json
    and https://panewsarchive.psu.edu/search/pages/results/?…&format=json ; page OCR at
    resource.fulltext_file (LOC) and /lccn/…/seq-N/ocr.txt (PSU).
  · PSU's phrasetext parameter is exact for short strings ("1822 Pine" = 5 hits) but
    silently degrades to an OR-ish match on longer phrases ("at home on Thursdays" = 3,980
    mostly irrelevant hits). Keep query phrases to two or three words.
  · CROP EVERY ADDRESS BEFORE YOU BELIEVE IT. Three of nine strongest OCR leads changed
    meaning at the image step in one lens alone, and two of those three would otherwise
    have been published as facts about this house.
  · phila.gov, npgallery.nps.gov and philadelphiabuildings.org all serve fine to curl with
    a Chrome User-Agent and reject WebFetch or bare curl. pypdf is installed, so any
    nomination PDF with an OCR layer becomes greppable in one command. The 1995 City PDF's
    text layer interleaves its two printed columns — words arrive out of order; reorder
    carefully and corroborate against the 1983 federal wording, which is clean.
  · Pages 1-20 of the 1995 designation PDF carry NO embedded text (JBIG2 scans) and pages
    21-33 are photographs. They must be rendered with pdfium and OCR'd. The 1983 federal
    nomination supplies the equivalent narrative in searchable text and is the better
    working document.

--------------------------------------------------------------------------------
CLOSING NOTE ON WORKING FILES
--------------------------------------------------------------------------------
The lens researchers left extracted texts, page crops and scripts in the session
scratchpad at
/private/tmp/claude-501/-Users-billyprice-Code-Repos-1822-Pine-Website--claude-worktrees-upbeat-payne-f033aa/6342a117-41dd-41a4-a1f5-2116ed511a79/scratchpad
including nr-rittenhouse.pdf and nr.txt (the 1983 nomination and its greppable text),
rf.pdf / rf.txt and narr.txt (the 1995 inventory plus clean OCR of its narrative pages),
phr.pdf, zoning1933.pdf / z1933.txt, the maps1822/ directory of registered plate overlays
and rectified strips, the 1950 census crops including p38_verify.png, fairhill.csv, the
McElroy/Gopsill OCR texts, dubois.txt, eaton.txt, bg1899.txt, bg/v8_1893.txt, and the
American Medical Directory and College of Physicians volumes. NOTHING WAS WRITTEN INTO THE
REPO. These will not survive the session — copy anything worth keeping into the repo now,
before acting on any of the above.

END OF DOSSIER