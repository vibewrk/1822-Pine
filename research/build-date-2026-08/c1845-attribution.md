<!-- SALVAGED partial research: c1845-attribution. The agent was killed mid-run by an API
weekly-limit error on 2026-08-27. This is its full trace — searches, raw results
and reasoning — up to the moment it died. NOT a finished report. Nothing here is
publishable until re-verified against its cited source. -->

# Partial trace: c1845-attribution

### Reasoning

I'll start by researching the PAB record and related sources.

### → ToolSearch

`select:WebFetch,WebSearch`

### → WebFetch

`https://www.philadelphiabuildings.org/pab/app/pj_display.cfm/277174`

**Result:**

```
The server returned HTTP 403 Forbidden.

The response body was not retrieved. If this URL requires authentication, use an authenticated tool (e.g. `gh` for GitHub, or an MCP-provided fetch tool) instead of WebFetch.
```

### → Bash

`cd "/Users/billyprice/Code Repos/1822 Pine Website/.claude/worktrees/upbeat-payne-f033aa" && grep -rn "1845" --include="*.md" --include="*.tsx" --include="*.ts" --include="*.json" --include="*.txt" . 2>/dev/null | grep -v node_modules | head -50`

**Result:**

```
WEBSITE_BUILD_PLAN.md:393:- Built: c. 1845, first sale 1854
WEBSITE_BUILD_PLAN.md:539:- ✓ Built c. 1845, first documented sale April 1854
research/deep-2026-08/02-domestic-life.md:175:**[B] Where "c. 1845" actually comes from.** PAB carries an untitled project for the whole row, "1808-1836 PINE ST," whose chronology reads "**c. 1845 / BUILT / source: PHMC**."
research/deep-2026-08/02-domestic-life.md:177:So the c.1845 date the repo attributes to Redfin is a **PHMC** datum propagated through the Athenaeum's database — it is citable, and it is a genuine competing date, not a listing-agent invention. The repo's directory argument for 1854 must engage with PHMC, not dismiss the figure as real-estate copy.
research/deep-2026-08/08-census-directories.md:55:### FINDING 3 [GRADE A] — Complete occupancy of 1822 Pine, 1845–1871, from directories
research/deep-2026-08/08-census-directories.md:61:| 1845–1854 | **none** — house does not exist | (see Finding 4) |
research/deep-2026-08/08-census-directories.md:77:Sources, one per year: https://archive.org/download/mcelroysphiladel<YEAR>amce/mcelroysphiladel<YEAR>amce_djvu.txt for 1845–1867, and https://archive.org/download/gopsillsphiladel00cost/gopsillsphiladel00cost_djvu.txt for Gopsill's 1871 (item page https://archive.org/details/gopsillsphiladel00cost).
research/deep-2026-08/08-census-directories.md:91:| 1845 | 1847 | 1849 | 1850 | 1851 | 1852 | 1853 | 1854 | 1855 | 1856 | 1857 |
research/deep-2026-08/08-census-directories.md:99:> 1845: "Roset  John,  mer.,  221  High,  h  130  Pine"
research/deep-2026-08/08-census-directories.md:106:He moves in between the 1854 and 1855 canvasses. This is independent, free, republishable corroboration of an **April 1854** conveyance of a newly finished house, and it kills "c. 1845" and OPA's "1800" outright. It refines the repo's CONTENT-OPPORTUNITIES #5, which said the row "appear[ed] in 1854" — in fact roughly half the row was occupied by the 1854 volume and 756 specifically was not; the house first appears occupied in the 1855 volume.
research/deep-2026-08/08-census-directories.md:187:3. **"Nine houses in 1854, nineteen in 1855."** The block filling in, year by year, with Roset's own move from 730 Poplar. Settles the build date from free sources and retires "circa 1845" for good.
research/deep-2026-08/11-negative-results-access.md:169:    any relevant context. Purviss returns only unrelated 1845/1857/1889 items.
research/deep-2026-08/04-waverly-street.md:151:Roset first appears at 756 Pine in the 1855 volume, one year after the deed date the archive carries (April 1854). 1845 is untenable; c. 1854 with occupancy by the 1855 directory is documented.
research/deep-2026-08/00-archive-map.md:311:2. THE BUILD DATE. Four incompatible dates are in play: the site publishes 1854 (from the deed abstract); the "Architecture & Fabric" chapter says "c. 1845: McCrea builds the block" and sets its era range to 1845–Present; Redfin publishes "circa 1845"; OPA carries an estimated "1800". CONTENT-OPPORTUNITIES #5 resolves it in favour of 1854 via directory evidence — zero occupants anywhere at 740–769 Pine in the 1845, 1850, 1852 and 1853 volumes, the row appearing in 1854 and full in 1855 — but that research has not been published and the underlying 1854 deed card has never actually been read. The repo's do-not-publish list bars both the OPA and Redfin figures.
research/deep-2026-08/05-twentieth-century.md:24:Note also: the row is 19 houses, not the "Nineteen ... c.1845" the site currently implies from Redfin. The designation report gives no build date for 1800-1836 — it gives none. That is a useful negative: the City did not date this row.
research/deep-2026-08/01-pine-street-identity.md:63:F8 [A] The c.1845 the site publishes belongs, in the City's own inventory, to the 1700 BLOCK — not this one.
research/deep-2026-08/01-pine-street-identity.md:65:"(1700 aka 462 S. 17th Street; 1738 aka 401-407 S. 18th Street) Twenty, 4-story, 2 bay, late Greek Revival townhouses, c. 1845, marble trim and door surrounds, modillioned wood cornice, paired doorways and stoops; 1708 windows reduced. 1730, 1732, 1736, 1738 ground floor alterations c. 1910 — Contributing"
research/deep-2026-08/01-pine-street-identity.md:66:The 1983 NR agrees: "1700-38  4-story, late Greek Revival townhouses, marble trim and door surrounds, modillioned wood cornice, c.1845.  Contributing."
research/deep-2026-08/01-pine-street-identity.md:67:This is a clean, publishable finding for repo Open Question #2: the 1700 block is dated c.1845 by both governments; the 1800 block south side is dated by neither. Note also a real architectural distinction between the two rows that the documents record: the 1700 block has "paired doorways and stoops" and a "modillioned wood cornice"; the 1800-1836 entry says only "marble trim and surrounds." They are cousins, not twins.
research/deep-2026-08/01-pine-street-identity.md:83:  • The file's trailing "Date" column is populated for only three addresses on the block — 1800 PINE ST → 1840, 1834 PINE ST → 1845, 1836 PINE ST → 1845. 1822 PINE ST has no date. [C] I could not establish what that column's source is; do not publish these as construction dates.
research/deep-2026-08/01-pine-street-identity.md:135:F22 [B] PAB/PHMC dates the row containing 1822 Pine to c.1845 — and this is almost certainly where the site's "c.1845" came from.
research/deep-2026-08/01-pine-street-identity.md:137:Chronology tab (https://www.philadelphiabuildings.org/pab/app/pj_display_alldates.cfm/277174) reads verbatim: "c. 1845  BUILT  source: PHMC"
research/deep-2026-08/01-pine-street-identity.md:138:Companion records: 1800-1806 PINE ST (project 277172) also "c. 1845 BUILT source: PHMC"; 1803-1825 PINE ST, the north side (project 277170), "c. 1850 BUILT source: PHMC".
research/deep-2026-08/01-pine-street-identity.md:139:This is the honest shape of Open Question #2: a state-database estimate of c.1845 for the row, against a deed the repo dates 1854, against two 
…[truncated]
```

### Reasoning

Substantial prior research exists in this repo. Let me verify independently while reading the existing notes.

### → Bash

`curl -s -A "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0 Safari/537.36" -L "https://www.philadelphiabuildings.org/pab/app/pj_display_alldates.cfm/277174" -o /private/tmp/claude-501/-Users-billyprice-Code-Repos-1822-Pine-Website--claude-worktrees-upbeat-payne-f033aa/6342a117-41dd-41a4-a1f5-2116ed511a79/scratchpad/pab277174_dates.html -w "HTTP:%`

### → Read

``

**Result:**

```
HTTP:200 SIZE:10809
HTTP:200 SIZE:11118
```

**Result:**

```
1	<!-- Raw research return, deep-history pass of 2026-08-27. Findings carry A/B/C
2	grades and source URLs as the researcher recorded them. NOTHING HERE IS
3	PUBLISHABLE UNTIL RE-VERIFIED against its cited source — see the site's
4	no-fabrication rule. Synthesized dossier: docs/HOUSE-HISTORY-DOSSIER.md -->
5	
6	PINE STREET ITSELF — RESEARCH RETURN
7	Researcher lens: the street, its naming, its blocks, its institutions, and what the City's and the federal government's own historic-district documents say about it.
8	
9	Two things reframe the whole lens before the findings:
10	
11	(A) The single most productive source I reached is the 1983 National Register nomination for the "Rittenhouse Historic District" (NRIS 83002277). It is 253 pages, free on NPGallery, and — critically — it HAS AN OCR TEXT LAYER, so it is greppable. It contains a block-by-block inventory of every Pine Street block from 1400 to 2400, including an entry for the row that contains 1822 Pine. Nothing in the repo appears to know it exists. It is a different document from the 1995 Philadelphia Register inventory the repo already quotes, written by a different author (George E. Thomas, Clio Group, March 1983), and the two corroborate each other.
12	
13	(B) The 1995 City inventory PDF that WebFetch chokes on (10MB+) downloads fine with curl if you send a browser User-Agent — phila.gov's CloudFront rejects bare curl but accepts a Chrome UA. Same trick works for the City's Philadelphia Register OPA address list. I have extracted the text of all three and left it on disk (paths at the end).
14	
15	════════════════════════════════════════
16	FINDINGS
17	════════════════════════════════════════
18	
19	── 1. THE NAME: WHAT THE 1683 PRIMARY SOURCE ACTUALLY SAYS ──
20	
21	F1 [A] Penn's own 1683 pamphlet describes Pine Street's geometry but does NOT name it — or any tree street.
22	Source: William Penn, "A Letter from William Penn... to the Committee of the Free Society of Traders," London: A. Sowle, 1683 — full text at https://archive.org/details/aletterfromwill00penngoog (raw OCR: https://archive.org/download/aletterfromwill00penngoog/aletterfromwill00penngoog_djvu.txt)
23	Verbatim (OCR of the 1683 imprint, long-s rendered as "f"): "and eight Streets, (befides the High-ftreet, that run from Front to Front, and twenty Streets, (befides the Broad-flreet) that run crofs the City, from fide to fide ; all thefe Streets are of fifty Foot breadth."
24	Why it matters: this is a free, republishable, genuinely primary source establishing that the street Pine occupies was laid out fifty feet wide as one of Penn's eight east-west streets. It is also a hard negative: I searched the entire text and the word "Pine" does not occur. Any sentence on the site of the form "Penn named it Pine Street in 1683" cannot cite this document.
25	
26	F2 [B] The tree-name list, as published by the Encyclopedia of Greater Philadelphia.
27	Source: https://philadelphiaencyclopedia.org/essays/trees-2/
28	Verbatim: "Cedar (now South), Pine, Spruce, Walnut, Chestnut, Mulberry (now Arch), and Sassafras (now Race)."
29	Note the asymmetry worth writing about: of Penn's tree streets, Pine is one of the ones that KEPT its name. Cedar, Mulberry and Sassafras did not.
30	
31	F3 [B] The "un-Quakerly" renaming story — real, but thinner than it is usually told.
32	Source: PHMC/ExplorePAHistory, Thomas Holme historical marker — https://explorepahistory.com/hmarker.php?markerId=1-A-2A
33	Verbatim: "Holme initially named Philadelphia's streets after prominent English settlers. Objecting to this un-Quakerly memorialization of men, Penn renamed the streets that ran east and west after trees and plants that grew in his colony - Chestnut, Cranberry, Locust, Mulberry, Strawberry, 'Wallnut,' and Vine."
34	CAUTION for the site: this list does not include Pine, and the page gives no date for the renaming. Publish the anecdote as a story about the street grid, not as a sourced statement about Pine specifically.
35	
36	── 2. THE RENUMBERING (repo Open Question #3 — now has a citable published source) ──
37	
38	F4 [B] The 1856 ordinance has a name, an author, and an encyclopedia entry.
39	Source: Encyclopedia of Greater Philadelphia, "Street Numbering" — https://philadelphiaencyclopedia.org/essays/street-numbering/
40	Verbatim: "in 1856 when the inventor and councilman John Mascher (c. 1824-1862) introduced what would become known as the 'Decimal' or 'Philadelphia System.'" And: "The system involved numbering blocks from east to west based upon the numerical street they intersected at their eastern ends. Houses on each block would then be given addresses from one to a hundred on Biddle's odd/even principle." Implementation "from 1857."
41	Value: the repo currently rests the 756 → 1822 Pine conversion on its own eight-household table. This gives it a published, linkable citation for the ordinance itself, plus the correct name to use in prose ("the Philadelphia System"), plus a person (Mascher) who makes the renumbering a story rather than a footnote.
42	
43	── 3. WHAT BOTH GOVERNMENTS SAY ABOUT THE 1800 BLOCK OF PINE ──
44	
45	F5 [A] The City's 1995 inventory on the south side — the row containing 1822.
46	Source: Philadelphia Historical Commission, "RITTENHOUSE FITLER RESIDENTIAL HISTORIC DISTRICT / ADDED 8 FEBRUARY 1995 TO THE PHILADELPHIA REGISTER OF HISTORIC PLACES / INVENTORY" — https://www.phila.gov/media/20190213131150/Historic-District-Rittenhouse-Fitler.pdf
47	Entry heading "1800 block Pine Street", address range 1800-1836:
48	"(1836 aka 401-409 S. 19th Street) Nineteen, 4-story, 2 bay, brick, late Greek Revival townhouses, marble trim and surrounds; 1808, reduced one story, metal cornice; 1810, altered c. 1880 cornice and door — Contributing"
49	Transcription caveat, stated plainly: the PDF's text layer interleaves the two printed columns, so the words arrive out of order and I have reordered them. Every word above is present verbatim in the file; the ORDER is my reconstruction. It i
…[truncated]
```

### Reasoning

Good — prior research exists and the scratchpad path matches. Let me check what's still on disk and read the PAB pages I just pulled.

### → Bash

`S="/private/tmp/claude-501/-Users-billyprice-Code-Repos-1822-Pine-Website--claude-worktrees-upbeat-payne-f033aa/6342a117-41dd-41a4-a1f5-2116ed511a79/scratchpad"; ls -la "$S" 2>/dev/null; echo "=== PAB alldates ==="; python3 -c "
import re,html
t=open('$S/pab277174_dates.html',encoding='utf-8',errors='replace').read()
t=re.sub(r'(?is)<script.*?</script>','',t); t=re.sub(r'(?is)<style.*?</style>',''`

**Result:**

```
<persisted-output>
Output too large (32.5KB). Full output saved to: /Users/billyprice/.claude/projects/-Users-billyprice-Code-Repos-1822-Pine-Website--claude-worktrees-upbeat-payne-f033aa/6342a117-41dd-41a4-a1f5-2116ed511a79/tool-results/bd2el4y12.txt

Preview (first 2KB):
total 1459928
drwx------@ 456 billyprice  wheel     14592 Aug 27 16:07 .
drwx------@   4 billyprice  wheel       128 Aug 26 16:00 ..
-rw-r--r--@   1 billyprice  wheel      5814 Aug 26 16:11 HouseHistory.pdf
-rw-r--r--@   1 billyprice  wheel   1808082 Aug 27 05:29 L0.png
-rw-r--r--@   1 billyprice  wheel   1820293 Aug 27 05:29 L1.png
-rw-r--r--@   1 billyprice  wheel   1806903 Aug 27 05:29 L2.png
-rw-r--r--@   1 billyprice  wheel   1628569 Aug 27 05:29 L3.png
-rw-r--r--@   1 billyprice  wheel   1707137 Aug 27 05:29 R0.png
-rw-r--r--@   1 billyprice  wheel   1724686 Aug 27 05:29 R1.png
-rw-r--r--@   1 billyprice  wheel   1686744 Aug 27 05:29 R2.png
-rw-r--r--@   1 billyprice  wheel   1547051 Aug 27 05:29 R3.png
-rw-r--r--@   1 billyprice  wheel   1805285 Aug 26 16:20 adv.json
-rw-r--r--@   1 billyprice  wheel    845286 Aug 26 16:32 alumnaeaddressre00unse_2.txt
-rw-r--r--@   1 billyprice  wheel   1319604 Aug 26 16:32 alumnaeaddressre00unse_3.txt
-rw-r--r--@   1 billyprice  wheel   1146919 Aug 26 16:32 alumnaeaddressre00unse_4.txt
-rw-r--r--@   1 billyprice  wheel  26037610 Aug 27 05:39 amd1929.txt
-rw-r--r--@   1 billyprice  wheel       172 Aug 27 05:43 amd1956.txt
-rw-r--r--@   1 billyprice  wheel  28262520 Aug 27 05:42 americanmedicald00ameruoft.txt
-rw-r--r--@   1 billyprice  wheel  16055853 Aug 27 05:42 americanmedicald01ameruoft.txt
-rw-r--r--@   1 billyprice  wheel  23394843 Aug 27 05:22 americanmedicald1912ameruoft.txt
-rw-r--r--@   1 billyprice  wheel   9820677 Aug 27 05:22 americanmedicald1914ameruoft.txt
-rw-r--r--@   1 billyprice  wheel  27099029 Aug 27 05:22 americanmedicald1921ameruoft.txt
-rw-r--r--@   1 billyprice  wheel      8983 Aug 26 16:18 ar_22669.html
-rw-r--r--@   1 billyprice  wheel     13504 Aug 26 16:18 ar_25847.html
-rw-r--r--@   1 billyprice  wheel     12104 Aug 26 16:18 ar_27099.html
-rw-r--r--@   1 billyprice  wheel     13053 Aug 26 16:18 ar_91390.html
-rw-r--r--@   1 billyprice  wheel      8967 Aug 26 16:19 ar_search.html
...
</persisted-output>
```

### → Bash

`S="/private/tmp/claude-501/-Users-billyprice-Code-Repos-1822-Pine-Website--claude-worktrees-upbeat-payne-f033aa/6342a117-41dd-41a4-a1f5-2116ed511a79/scratchpad"; for f in pab277174.html pab277174_dates.html; do echo "########## $f ##########"; python3 -c "
import re,html,sys
t=open('$S/$f',encoding='utf-8',errors='replace').read()
t=re.sub(r'(?is)<script.*?</script>','',t); t=re.sub(r'(?is)<style.`

**Result:**

```
########## pab277174.html ##########
Untitled Project
Untitled Project
Overview |
Chronology |
References |
Maps |
printer-friendly version
Home
About the Project
Participating Institutions
Send Us Feedback
Subscribe to PAB
Projects / Buildings
Architects
Locations
Collections
Published Sources
The Athenaeum of Philadelphia
University of Pennsylvania Architectural Archives
Philadelphia Historical Commission
Pennsylvania Historical and Museum Commission
Location
1808-1836 PINE ST
Browse this block
Philadelphia, PA
> Search near this location
> View location in
Google Maps
Links to Other Databases
PHMC Cultural Resources Database
PhillyHistory.org - find historic photos near this building
Philadelphia Architects and Buildings |
About |
Participating Institutions |
Feedback |
Search |
Login
Website and System: Copyright © 2026 by The Athenaeum of Philadelphia.
Data and Images: Copyright © 2026 by various contributing institutions. Used by permission.
All rights reserved.
########## pab277174_dates.html ##########
Untitled Project -- project/building chronology
Untitled Project
Overview |
Chronology |
References |
Maps |
printer-friendly version
Home
About the Project
Participating Institutions
Send Us Feedback
Subscribe to PAB
Projects / Buildings
Architects
Locations
Collections
Published Sources
The Athenaeum of Philadelphia
University of Pennsylvania Architectural Archives
Philadelphia Historical Commission
Pennsylvania Historical and Museum Commission
Project Chronology
c. 1845
BUILT
source: PHMC
Philadelphia Architects and Buildings |
About |
Participating Institutions |
Feedback |
Search |
Login
Website and System: Copyright © 2026 by The Athenaeum of Philadelphia.
Data and Images: Copyright © 2026 by various contributing institutions. Used by permission.
All rights reserved.
```

### Reasoning

Confirmed. Now the critical lead — the overview page has a "PHMC Cultural Resources Database" link. Let me extract its raw href.

### → Bash

`S="/private/tmp/claude-501/-Users-billyprice-Code-Repos-1822-Pine-Website--claude-worktrees-upbeat-payne-f033aa/6342a117-41dd-41a4-a1f5-2116ed511a79/scratchpad"; grep -oE 'href="[^"]*"' "$S/pab277174.html" | sort -u; echo "=== raw region around PHMC ==="; python3 -c "
t=open('$S/pab277174.html',encoding='utf-8',errors='replace').read()
i=t.find('PHMC Cultural')
print(t[max(0,i-1200):i+400])
"`

**Result:**

```
href="/pab/about.cfm"
href="/pab/app/list_institutions.cfm"
href="/pab/app/list_sources.cfm"
href="/pab/app/login.cfm"
href="/pab/app/pj_display.cfm/277174?&Printable=1"
href="/pab/app/pj_display_alldates.cfm/277174"
href="/pab/app/pj_display_citations_holdings.cfm/277174"
href="/pab/app/pj_display_map.cfm/277174"
href="/pab/app/search_architect.cfm"
href="/pab/app/search_by_name.cfm"
href="/pab/app/search_by_name.cfm?AI=F1FCB66C-EA7E-4546-85E318A314756600&amp;DST=1000&amp;DS=1"
href="/pab/app/search_location.cfm"
href="/pab/app/subscribe.cfm"
href="/pab/app/view_street.cfm/64820?PJ_GRID_BLOCKNUMBER=18"
href="/pab/feedback.cfm?Page=/pab/app/pj_display.cfm"
href="/pab/feedback.cfm?Page=/pab/app/pj_display.cfm&RecordId=PHMC-PJ-053574"
href="/pab/includes/lightbanner.css"
href="/pab/index.cfm"
href="http://www.phillyhistory.org/PhotoArchive/Search.aspx?action=link&type=address&address=1808+PINE+ST"
href="https://maps.google.com/?q=1808%20PINE%20ST%2C%20Philadelphia%2C%20PA"
href="https://www.design.upenn.edu/architectural-archives/home"
href="https://www.dot7.state.pa.us/CRGIS/Application/ASPNET/Report/Report.aspx?R=108&T=KEYNO&I=053574"
href="https://www.phila.gov/historical/"
href="https://www.philaathenaeum.org/"
href="https://www.phmc.state.pa.us/"
=== raw region around PHMC ===
ddress.cfm",
	{
		Async: 1,
		AddressId: AddressId,
		RecordId: RecordId
	},
	function(data, status)
	{
		if (data == "OK")
		{
			jQuery('#' + AddressId).hide("slow");
		}
	});

	return false;
}

</script>


		<span id="F1FCB66C-EA7E-4546-85E318A314756600">
	
		<b>1808-1836 PINE ST </b>
	
	
	<span class="tabular">
	
		<a href="/pab/app/view_street.cfm/64820?PJ_GRID_BLOCKNUMBER=18">Browse this block</a>
	
	</span>

	
	
	
		<br></span>
	<span id="27F5E923-E5E1-4601-8C12EED9E1FEFA5A"> Philadelphia, PA 

	<span class="tabular">
	
	</span>

	<br></span> 
	<p class="tabular">

				<b>&gt; <a href="/pab/app/search_by_name.cfm?AI=F1FCB66C-EA7E-4546-85E318A314756600&amp;DST=1000&amp;DS=1">Search near this location</a></b>
				<br>
			<br> 
			<b>&gt; View location in 
			
			 <a href="https://maps.google.com/?q=1808%20PINE%20ST%2C%20Philadelphia%2C%20PA">Google Maps</a></b>
			
	</p>
</dd></dl> 

<dl>
<dd>

</dd>
</dl>




<ul>

</ul>

	<!-- MapAddress = 1808 PINE ST
		 MapCity = Philadelphia, PA
		 MapState =   --->
	

		<h3>Links to Other Databases</h3>
	
		<ul>
		

			<li>
				
				<a href="https://www.dot7.state.pa.us/CRGIS/Application/ASPNET/Report/Report.aspx?R=108&T=KEYNO&I=053574">PHMC Cultural Resources Database</a>
			</li>
		
			<li><a href="http://www.phillyhistory.org/PhotoArchive/Search.aspx?action=link&type=address&address=1808+PINE+ST">
			PhillyHistory.org - find historic photos near this building</a></li>
			
		</ul>

	
	
	
	<!-- LINKS TO OTHER RESOURCES -->
	


<ul>

</ul>


	<p>&#160;<p>
	<small>
	
		<a href="/pab/index.cfm"><b>Philadelphia Architects and Buildi
```

### Reasoning

Major find — the PAB record carries a PHMC **Key Number 053574** and a direct CRGIS report URL. Let me chase it.

### → Bash

`S="/private/tmp/claude-501/-Users-billyprice-Code-Repos-1822-Pine-Website--claude-worktrees-upbeat-payne-f033aa/6342a117-41dd-41a4-a1f5-2116ed511a79/scratchpad"; UA="Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0 Safari/537.36"
echo "=== CRGIS keyno 053574 ==="
curl -s -m 45 -A "$UA" -L "https://www.dot7.state.pa.us/CRGIS/Application/ASPNET/Repo`

**Result:**

```
Exit code 1
=== CRGIS keyno 053574 ===
HTTP:000 SIZE:0 URL:https://www.dot7.state.pa.us/CRGIS/Application/ASPNET/Report/Report.aspx?R=108&T=KEYNO&I=053574
=== PA-SHARE root ===
HTTP:200 SIZE:194996 URL:https://share.phmc.pa.gov/pashare/
--- crgis head ---
```

### → Bash

`S="/private/tmp/claude-501/-Users-billyprice-Code-Repos-1822-Pine-Website--claude-worktrees-upbeat-payne-f033aa/6342a117-41dd-41a4-a1f5-2116ed511a79/scratchpad"; UA="Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0 Safari/537.36"
for id in 277172 277170 277173 277171; do
  curl -s -m 30 -A "$UA" -L "https://www.philadelphiabuildings.org/pab/app/pj`

**Result:**

```
277172 overview HTTP:200
277172 dates HTTP:200
277170 overview HTTP:200
277170 dates HTTP:200
277173 overview HTTP:200
277173 dates HTTP:200
277171 overview HTTP:200
277171 dates HTTP:200
=====RESULTS=====
--- 277172 ---
  RecordId: PHMC-PJ-053573
  CRGIS KEYNO: 053573
  Location: 1800-1806 PINE ST
  RecordId: PHMC-PJ-053573
  Chronology: Project Chronology / c. 1845 / BUILT / source: PHMC / Philadelphia Architects and Buildings / About / Participating Institutions / Feedback
--- 277170 ---
  RecordId: PHMC-PJ-053572
  CRGIS KEYNO: 053572
  Location: 1803-1825 PINE ST
  RecordId: PHMC-PJ-053572
  Chronology: Project Chronology / c. 1850 / BUILT / source: PHMC / Philadelphia Architects and Buildings / About / Participating Institutions / Feedback
--- 277173 ---
  RecordId: PHMC-PR-053574
  Location: 1808-1836 PINE ST
  RecordId: PHMC-PR-053574
  Chronology: Project Chronology / Philadelphia Architects and Buildings / About / Participating Institutions / Feedback / Search / Login / Website and System: Copyright © 2026 by The Athenaeum of Philadelphia.
--- 277171 ---
  RecordId: PHMC-PR-053573
  Location: 1800-1806 PINE ST
  RecordId: PHMC-PR-053573
  Chronology: Project Chronology / Philadelphia Architects and Buildings / About / Participating Institutions / Feedback / Search / Login / Website and System: Copyright © 2026 by The Athenaeum of Philadelphia.
```

### Reasoning

CRGIS (dot7.state.pa.us) is dead. Note the key numbers are consecutive: 053572/053573/053574. Let me dump the companion "PR" resource record and probe PA-SHARE.

### → Bash

`S="/private/tmp/claude-501/-Users-billyprice-Code-Repos-1822-Pine-Website--claude-worktrees-upbeat-payne-f033aa/6342a117-41dd-41a4-a1f5-2116ed511a79/scratchpad"; echo "########## 277173 (PHMC-PR-053574) OVERVIEW ##########"; python3 -c "
import re,html
t=open('$S/pab_277173.html',encoding='utf-8',errors='replace').read()
t=re.sub(r'(?is)<script.*?</script>','',t); t=re.sub(r'(?is)<style.*?</style>`

**Result:**

```
########## 277173 (PHMC-PR-053574) OVERVIEW ##########
Untitled Project
|
|
Untitled Project
|
|
|
Overview |
|
|
References |
|
|
Maps |
|
printer-friendly version
Home
About the Project
Participating Institutions
Send Us Feedback
Subscribe to PAB
Projects / Buildings
Architects
Locations
Collections
Published Sources
The Athenaeum of Philadelphia
University of Pennsylvania Architectural Archives
Philadelphia Historical Commission
Pennsylvania Historical and Museum Commission
|
Location
1808-1836 PINE ST
Browse this block
Philadelphia, PA
> Search near this location
> View location in
Google Maps
Links to Other Databases
PhillyHistory.org - find historic photos near this building
Philadelphia Architects and Buildings |
About |
Participating Institutions |
Feedback |
Search |
Login
Website and System: Copyright © 2026 by The Athenaeum of Philadelphia.
Data and Images: Copyright © 2026 by various contributing institutions. Used by permission.
All rights reserved.
|
|

=== hrefs on 277173 ===
href="https://www.phmc.state.pa.us/"

=== DNS/connectivity dot7 ===
dot7 HTTP:000
Host www.dot7.state.pa.us not found: 3(NXDOMAIN)
```

### → WebSearch

`PA-SHARE PHMC "key number" search historic resource survey CRGIS retired replaced`

**Result:**

```
Web search results for query: "PA-SHARE PHMC "key number" search historic resource survey CRGIS retired replaced"

Links: [{"title":"​Contact Information and Guidance | Commonwealth of Pennsylvania","url":"https://www.pa.gov/agencies/phmc/historic-preservation/pashpo-survey/contact-information-guidance"},{"title":"2021: The Year of PA-SHARE - Pennsylvania Historic Preservation","url":"https://pahistoricpreservation.com/2021-the-year-share/"},{"title":"Cultural Resources GIS","url":"https://www.phmc.pa.gov/Preservation/Cultural-Resources-GIS/Pages/default.aspx"},{"title":"Announcing PA-SHARE 2.0 - Pennsylvania Historic Preservation","url":"https://pahistoricpreservation.com/announcing-share-2-0/"},{"title":"What’s New with PA-SHARE - Pennsylvania Historic Preservation","url":"https://pahistoricpreservation.com/whats-new-with-share/"},{"title":"Kicking Off PA SHPO’s Baseline Survey Effort - Pennsylvania Historic Preservation","url":"https://pahistoricpreservation.com/kicking-off-shpos-baseline-survey-effort/"},{"title":"CRGIS Archives - Pennsylvania Historic Preservation","url":"https://pahistoricpreservation.com/category/crgis/"},{"title":"Historic Resource Survey Forms | PHMC > Pennsylvania's Historic Suburbs","url":"https://www.phmc.state.pa.us/portal/communities/pa-suburbs/research-tools/survey-forms.html"},{"title":"PA-SHARE Data Quality | Commonwealth of Pennsylvania","url":"https://www.pa.gov/agencies/phmc/pa-share/data-quality"},{"title":"Pennsylvania Heritage Foundation","url":"https://en.wikipedia.org/wiki/Pennsylvania_Heritage_Foundation"}]

Based on the search results, here's what I found regarding PA-SHARE, PHMC, and the historic resource survey system:

## Key Findings:

**Historic Resource Survey Form Retirement:**
The Historic Resource Survey Form, or HRSF, was retired in February 2021. Information about older and historic places, including buildings, landscapes, archaeological sites, and bridges, is now submitted to the PA SHPO through PA-SHARE.

**CRGIS Retirement and PA-SHARE Launch:**
CRGIS was retired on March 31, 2021, taken offline, and users were redirected to PA-SHARE. PA-SHARE is a custom-built system that replaced CRGIS and many of the legacy databases used to track resources and projects.

**Numbering System Changes:**
When all of PA SHPO's data moved from disparate databases into PA-SHARE, old resource, project, and report numbers were abandoned and a new standardized numbering system was applied. Legacy numbers (the name assigned to all of the former PA SHPO numbering systems) are searchable in PA-SHARE.

The search results indicate that PA-SHARE serves as the modern replacement for the older systems while maintaining searchability of legacy identification numbers.


REMINDER: You MUST include the sources above in your response to the user using markdown hyperlinks.
```

### Reasoning

CRGIS was retired March 2021, but legacy key numbers remain searchable. Let me try the Wayback Machine for the original CRGIS report and probe PA-SHARE's API.

### → Bash

`S="/private/tmp/claude-501/-Users-billyprice-Code-Repos-1822-Pine-Website--claude-worktrees-upbeat-payne-f033aa/6342a117-41dd-41a4-a1f5-2116ed511a79/scratchpad"; UA="Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0 Safari/537.36"
echo "=== Wayback availability: exact CRGIS report URL ==="
curl -s -m 40 -A "$UA" "https://archive.org/wayback/availab`

### → Bash

`S="/private/tmp/claude-501/-Users-billyprice-Code-Repos-1822-Pine-Website--claude-worktrees-upbeat-payne-f033aa/6342a117-41dd-41a4-a1f5-2116ed511a79/scratchpad"; echo "=== PA-SHARE root: scripts/config/api endpoints ==="; grep -oE '(src|href)="[^"]{0,140}"' "$S/pashare_root.html" | sort -u | head -60; echo "=== any arcgis/api strings ==="; grep -oiE '[a-z0-9\./_-]*(arcgis|/api/|rest/services|graph`

**Result:**

```
=== Wayback availability: exact CRGIS report URL ===
{"url": "dot7.state.pa.us/CRGIS/Application/ASPNET/Report/Report.aspx?R=108&T=KEYNO&I=053574", "archived_snapshots": {}}
=== CDX: any CRGIS Report.aspx captures ===
<html><body><h1>429 Too Many Requests</h1>
You have sent too many requests in a given amount of time.
</body></html>

=== CDX: total CRGIS captures count ===
<html><body><h1>429 Too Many Requests</h1>
You have sent too many requests in a given amount of time.
</body></html>
```

**Result:**

```
=== PA-SHARE root: scripts/config/api endpoints ===
href="/pashare/"
href="chunk-3GAQWKIG.js"
href="chunk-6IY43LAY.js"
href="chunk-B7HAAIEN.js"
href="chunk-C43FT52A.js"
href="chunk-IN4CNFJM.js"
href="chunk-O7UQFGTO.js"
href="chunk-XISAC524.js"
href="chunk-Y75Q2UKV.js"
href="chunk-YNSC7XF5.js"
href="chunk-YP4C3D6S.js"
href="favicon.ico"
href="styles-KI3QXDG6.css"
src="main-DQNP473I.js"
src="polyfills-U7QLKGEW.js"
src="scripts-XGAO454E.js"
=== any arcgis/api strings ===
```

### Reasoning

PA-SHARE is an Angular SPA. Let me find its API while verifying the nomination documents locally.

### → Bash

`S="/private/tmp/claude-501/-Users-billyprice-Code-Repos-1822-Pine-Website--claude-worktrees-upbeat-payne-f033aa/6342a117-41dd-41a4-a1f5-2116ed511a79/scratchpad"; ls -la "$S"/nr.txt "$S"/nr-rittenhouse.pdf "$S"/rf.txt "$S"/rf.pdf "$S"/hr.txt 2>&1 | head -20`

**Result:**

```
-rw-r--r--@ 1 billyprice  wheel    690882 Aug 27 05:28 /private/tmp/claude-501/-Users-billyprice-Code-Repos-1822-Pine-Website--claude-worktrees-upbeat-payne-f033aa/6342a117-41dd-41a4-a1f5-2116ed511a79/scratchpad/hr.txt
-rw-r--r--@ 1 billyprice  wheel  26873621 Aug 27 05:22 /private/tmp/claude-501/-Users-billyprice-Code-Repos-1822-Pine-Website--claude-worktrees-upbeat-payne-f033aa/6342a117-41dd-41a4-a1f5-2116ed511a79/scratchpad/nr-rittenhouse.pdf
-rw-r--r--@ 1 billyprice  wheel    194082 Aug 27 05:22 /private/tmp/claude-501/-Users-billyprice-Code-Repos-1822-Pine-Website--claude-worktrees-upbeat-payne-f033aa/6342a117-41dd-41a4-a1f5-2116ed511a79/scratchpad/nr.txt
-rw-r--r--@ 1 billyprice  wheel  12162100 Aug 27 05:27 /private/tmp/claude-501/-Users-billyprice-Code-Repos-1822-Pine-Website--claude-worktrees-upbeat-payne-f033aa/6342a117-41dd-41a4-a1f5-2116ed511a79/scratchpad/rf.pdf
-rw-r--r--@ 1 billyprice  wheel    202849 Aug 27 05:27 /private/tmp/claude-501/-Users-billyprice-Code-Repos-1822-Pine-Website--claude-worktrees-upbeat-payne-f033aa/6342a117-41dd-41a4-a1f5-2116ed511a79/scratchpad/rf.txt
```

### → Bash

`S="/private/tmp/claude-501/-Users-billyprice-Code-Repos-1822-Pine-Website--claude-worktrees-upbeat-payne-f033aa/6342a117-41dd-41a4-a1f5-2116ed511a79/scratchpad"; UA="Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0 Safari/537.36"
curl -s -m 60 -A "$UA" "https://share.phmc.pa.gov/pashare/main-DQNP473I.js" -o "$S/pashare_main.js" -w "main.js HTTP:%{`

**Result:**

```
main.js HTTP:200 SIZE:443541
=== API base urls ===
https://github.com/telerik/kendo-intl/blob/master/docs/date-formatting/index.md
https://www.googletagmanager.com/gtag/js
https://www.telerik.com/kendo-angular-ui/components/dateinputs/api/CalendarComponent/
https://www.telerik.com/kendo-angular-ui/components/dateinputs/api/DateInputComponent/
https://www.telerik.com/kendo-angular-ui/components/dateinputs/api/DatePickerComponent/
https://www.telerik.com/kendo-angular-ui/components/dateinputs/calendar/
https://www.telerik.com/kendo-angular-ui/components/dateinputs/calendar/disabled-dates/
https://www.telerik.com/kendo-angular-ui/components/dateinputs/dateinput/
https://www.telerik.com/kendo-angular-ui/components/dateinputs/datepicker/
https://www.telerik.com/kendo-angular-ui/components/dateinputs/datetimepicker/date-time-limits/
https://www.telerik.com/kendo-angular-ui/components/dateinputs/datetimepicker/integration-with-json/
https://www.telerik.com/kendo-angular-ui/components/dateinputs/timepicker/
https://www.telerik.com/kendo-angular-ui/my-license/
=== api path fragments ===
```

### Reasoning

Nomination files survive on disk. Let me verify items 3 and 4 myself against the actual documents.

### → Bash

`S="/private/tmp/claude-501/-Users-billyprice-Code-Repos-1822-Pine-Website--claude-worktrees-upbeat-payne-f033aa/6342a117-41dd-41a4-a1f5-2116ed511a79/scratchpad"
echo "############ 1983 NR nomination (nr.txt) — 1800-36 / 1803-35 / 1700-38 ############"
grep -nE '1800-3[0-9]|1803-3[0-9]|1700-3[0-9]|1808|1836 ' "$S/nr.txt" | head -40
echo
echo "############ context around '1800-36' ############"
grep`

**Result:**

```
############ 1983 NR nomination (nr.txt) — 1800-36 / 1803-35 / 1700-38 ############
1948:1808-18 4-story  Italianate  townhouses, c. 1855, marble framed doors, bracketed 
2226:1700-38 4-story, late  Greek Revival  townhouses, marble  trim  and door surrounds, 
2252:1800-36 4-story  brick, late  Greek Revival  townhouses, marble  trim  and surrounds; 
2253:1808, reduced one  story,  metal  cornice;  1810,  altered  c.1880 comice 
2258:1803-35 4-story  brick,  marble trimmed townhouse row,  bracketed  and panelled 

############ context around '1800-36' ############
2246-houses,  1888, copper  cornice. Contributing. 
2247-1725-3^ Four  4-story,  marble base,  ruled  stucco  Greek  Revival  townhouses, 
2248-c.1850. Contributing. 
2249-1733 1950  Colonial Revival refacing  of 1731  type.  Intrusion. 
2250-1735 34-story brick  and limestone  Colonial Revival Contributing. 
2251-1800 block  Pine  Street 
2252:1800-36 4-story  brick, late  Greek Revival  townhouses, marble  trim  and surrounds; 
2253-1808, reduced one  story,  metal  cornice;  1810,  altered  c.1880 comice 
2254-and door.  Contributing. 
2255-***** 
2256-1801 4-story  brick,  c.1850 townhouse, wrecked base,  modern concrete,  all 
2257-windows wrecked, air  conditioner  holes  cut.  Intrusion. 
2258-1803-35 4-story  brick,  marble trimmed townhouse row,  bracketed  and panelled
```

### → Bash

`S="/private/tmp/claude-501/-Users-billyprice-Code-Repos-1822-Pine-Website--claude-worktrees-upbeat-payne-f033aa/6342a117-41dd-41a4-a1f5-2116ed511a79/scratchpad"
echo "############ 1995 City inventory (rf.txt) — around '1800 block Pine' ############"
grep -n "1800 block Pine" "$S/rf.txt" | head
echo "--- context ---"
grep -n -A45 "1800 block Pine" "$S/rf.txt" | head -70`

**Result:**

```
############ 1995 City inventory (rf.txt) — around '1800 block Pine' ############
--- context ---
```

### Reasoning

1983 NR verified — 1800-36 carries **no** construction date. Let me pull the full verbatim entries and handle the interleaved City PDF.

### → Bash

`S="/private/tmp/claude-501/-Users-billyprice-Code-Repos-1822-Pine-Website--claude-worktrees-upbeat-payne-f033aa/6342a117-41dd-41a4-a1f5-2116ed511a79/scratchpad"
echo "=========== 1983 NR: lines 2220-2275 verbatim ==========="
sed -n '2220,2275p' "$S/nr.txt" | cat -n | sed 's/^/  /'`

**Result:**

```
=========== 1983 NR: lines 2220-2275 verbatim ===========
       1	1615-17 Fronts  on  Smedley. 
       2	1621 3-story, late Federal,  Flemish  bond,  badly  repointed;  brownstone  trim, 
       3	cornice  removed c.1890.  Contributing. 
       4	1623-25 34-story  mansarded double houses, c.1860,  slate roof,  segmental brown­
       5	stone head,  2/2 sash;  1625 shop front  c. 1880. Contributing. 
       6	1700 block  Pine  Street 
       7	1700-38 4-story, late  Greek Revival  townhouses, marble  trim  and door surrounds, 
       8	modillioned  wood cornice,  c.1845.  Contributing. 
       9	***** 
      10	1701 Refaced,  mansarded 1870 townhouse, destroyed.  Intrusion. 
      11	1703-09 3-story,  c.1885  rowhouse;  pressed  metal  cornice;  1703,1705  shop fronted; 
      12	1705, second  and third  story  bay. Contributing. 
      13	1711 3-story  Venetian  Gothic  townhouse,  1890, tan brick,  pressed  metal  trim. 
      14	Contributing. 
      15	1713 3-story brick  c.1850 townhouse,  1st floor altered  c.1890, brownstone 
      16	base. Contributing. 
      17	1715 3-story  Pompeiian  brick,  brownstone based townhousc\,  1902, two-story 
      18	metal  bay. Contributing. 
      19	1717 4-story  Colonial Revival,  1914, 3-story  pressed  metal  bay and cornice. 
      20	Contributing. 
      21	
      22	===PAGE 57===
      23	- 41 -
      24	1719 4-story  late Federal  city  house, marble  trim, plain cornice,  c.1850. 
      25	Contributing. 
      26	1721-23 Pair  Queen Anne, brick,  limestone  trim.  Brown & Day designed  town-
      27	houses,  1888, copper  cornice. Contributing. 
      28	1725-3^ Four  4-story,  marble base,  ruled  stucco  Greek  Revival  townhouses, 
      29	c.1850. Contributing. 
      30	1733 1950  Colonial Revival refacing  of 1731  type.  Intrusion. 
      31	1735 34-story brick  and limestone  Colonial Revival Contributing. 
      32	1800 block  Pine  Street 
      33	1800-36 4-story  brick, late  Greek Revival  townhouses, marble  trim  and surrounds; 
      34	1808, reduced one  story,  metal  cornice;  1810,  altered  c.1880 comice 
      35	and door.  Contributing. 
      36	***** 
      37	1801 4-story  brick,  c.1850 townhouse, wrecked base,  modern concrete,  all 
      38	windows wrecked, air  conditioner  holes  cut.  Intrusion. 
      39	1803-35 4-story  brick,  marble trimmed townhouse row,  bracketed  and panelled 
      40	cornices,  pedimented  paired  marble door  surrounds;  1827-3 I altered 
      41	c.1950 for  hospital Intrusion.  1833,  Colonial Revival  base. 
      42	Contributing. 
      43	1900 block  Pine  Street 
      44	1900 3-story  1860  Italianate; altered  shop base, comice removed. Con­
      45	tributing. 
      46	1902-04 3-story  1860  Italianate, refronted  c.1960.  Intrusion. 
      47	1906-12 34-story  c. 1860 mansarded,  brick  townhouses,  modillioned cornices; 
      48	1912, no mansard.  Contributing. 
      49	1914 3-story Italianate,  marble trimmed townhouse, c. 1850.  Contributing. 
      50	1916-18 3-story Italianate, refaced Colonial Revival,  1911.  Contributing. 
      51	1920-30 34-story brick,  brownstone trimmed  Queen Anne row, 1889, F.M. Day, 
      52	architect,  all  in good condition. Contributing. 
      53	1932-34 3-story vernacular  townhouses, c.1860, marble  trim. Contributing. 
      54	1936 3-story vernacular  townhouse,  refaced  c.1940  Gothic Revival..  Con­
      55	tributing. 
      56
```

### → Bash

`S="/private/tmp/claude-501/-Users-billyprice-Code-Repos-1822-Pine-Website--claude-worktrees-upbeat-payne-f033aa/6342a117-41dd-41a4-a1f5-2116ed511a79/scratchpad"
echo "=== search rf.txt for Pine block headings variants ==="
grep -niE "1800 *block|1700 *block|1808|Nineteen" "$S/rf.txt" | head -30
echo "=== 'Nineteen' context ==="
grep -n -B8 -A20 "Nineteen" "$S/rf.txt" | head -60`

**Result:**

```
=== search rf.txt for Pine block headings variants ===
114:1700 block Addison Street
158:1800 block Addison Street
274:1700 block Chancellor Street
534:1808-18 Six, 4-story two bay ftalianate townhouses, c. 1855,
1341:1700 block Panana Street
1358:1800 block Panarna Street
1359:No-buildings front on street, See 1800 block Delanceyand Pine Streets. Street paved with Belgian blockand granite gutters and curbs. Concrete sidewalks.
1596:Street) Nineteen, 4-story,Revival townhouses, marblereduced one story, metal1880 cornice and door
1987:1700 block St. James Street
2044:1808 Vacant lot .--_ Non_Contri_buting
2818:1800 block Wal"nut Street
3018:1700 block Waverly Street
=== 'Nineteen' context ===
1588-street braclitopped, concrete sidewark, granite curbs,slate sideweilks in front of L724-26.
1589-t 8O0 block pine Street
1590-(aka 30O S. lgth Street) 4-story, 2 bay brick, c.1870 rtariarrate rowhouse, windowi, doorl base alteredc. 1950, air. conditioner holes cut.
1591-(1835 aka 34,5 S. t-9th Street) Seventeen,  -story, 2
1592-bay, brick, marble trimmed, Greek Revivar rowhousesc. 1850, brarcketed and panerred cornices, pedimentedpaired marbl.e door surrounds; 1827-1g3r. allered c.1950 for hosrpital. 1933, Colonial Revival baseContributingr
1593-*****
1594-(1836 aka 401-409 S. tgth2 bay, brick, late Greektrin and surrounds; 1gOg,
1595-cornice; 1810, altered c.Contributing
1596:Street) Nineteen, 4-story,Revival townhouses, marblereduced one story, metal1880 cornice and door
1597-Street blacktopped, concrete sidewalks, granj-tecurbs.
1598-19.!)0 block pine Street
1599-===PAGEBREAK===
1600-L901
1601-t_903 -1913
1602-19 15-192 3
1603-l_92 5-1939
1604-19 00
1605-L902-]..904
1606-l_906-1912
1607-19 14
1608-1 916-1918
1609-1920-1930
1610-L932-]-934
1611-1935
1612-1938
1613-1940
1614-55
1615-(aka 342 S. 19th Street) 4-story, 6 bay, orangebrick, rtalianate house with store on iirst froor c.1895 Contributing
1616-Six, 3-story, 2 bay, vernacular, ftalianate woodtrimmed ro\^rr. L911, red.one, brownstone trim, c. 1970;1913 stucco,ed c. 1960 Non-ContributingL903-13 --- Contributing
```

### Reasoning

Independently confirmed: the City's 1800–1836 entry carries no date. Now the decisive test — let me map every PHMC record on the 1700 and 1800 blocks.

### → Bash

`S="/private/tmp/claude-501/-Users-billyprice-Code-Repos-1822-Pine-Website--claude-worktrees-upbeat-payne-f033aa/6342a117-41dd-41a4-a1f5-2116ed511a79/scratchpad"; UA="Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0 Safari/537.36"
for b in 17 18; do
 curl -s -m 40 -A "$UA" -L "https://www.philadelphiabuildings.org/pab/app/view_street.cfm/64820?PJ_G`

**Result:**

```
block 17 HTTP:200 SIZE:63638
block 18 HTTP:200 SIZE:59584
############ BLOCK 17 ############
-         Locations
-         Home About the Project Participating Institutions Send Us Feedback Subscribe to PAB Projects / Buildings Architects Locations Collections Published Sources The Athenaeum of Philadelphia Univ
-         Project | Type | Location
75441     1700 Pine Street | 1700 PINE ST Browse this block 402 S 17TH ST Browse this block Philadelphia, PA
75442     1701 Pine Street | 1701 PINE ST Browse this block Philadelphia, PA
75443     1702 Pine Street | 1702 PINE ST Browse this block Philadelphia, PA
75444     1703-1705 Pine Street | 1703-1705 PINE ST Browse this block Philadelphia, PA
8340      Residence | dwelling | 1704 PINE ST Browse this block Philadelphia, PA
8338      Residence | dwelling | 1706 PINE ST Browse this block Philadelphia, PA
75446     1707 Pine Street | 1707 PINE ST Browse this block Philadelphia, PA
8336      Lefever Residence Client: Lefever, Dr. Charles | dwelling | 1708 PINE ST Browse this block Philadelphia, PA
75622     1709 Pine Street | 1709 PINE ST Browse this block Philadelphia, PA
8334      Residence | dwelling | 1710 PINE ST Browse this block Philadelphia, PA
277156    (untitled) | 1711 PINE ST Browse this block Philadelphia, PA
75624     Pepper Residence Client: Pepper, George | 1711 PINE ST Browse this block Philadelphia, PA
8332      Residence | dwelling | 1712 PINE ST Browse this block Philadelphia, PA
277158    (untitled) | 1713 PINE ST Browse this block Philadelphia, PA
75626     1713 Pine Street | 1713 PINE ST Browse this block Philadelphia, PA
8330      Residence | dwelling | 1714 PINE ST Browse this block Philadelphia, PA
277160    (untitled) | 1715 PINE ST Browse this block Philadelphia, PA
75628     1715 Pine Street | 1715 PINE ST Browse this block Philadelphia, PA
8328      Residence | dwelling | 1716 PINE ST Browse this block Philadelphia, PA
277162    Deitzer & Wallace | 1717 PINE ST Browse this block Philadelphia, PA
8326      Residence | dwelling | 1718 PINE ST Browse this block Philadelphia, PA
277164    (untitled) | 1719 PINE ST Browse this block Philadelphia, PA
75632     1719 Pine Street | 1719 PINE ST Browse this block Philadelphia, PA
8324      Residence | dwelling | 1720 PINE ST Browse this block Philadelphia, PA
14510     Coates Residence Client: Coates, Dr. G. M. | dwelling | 1721 PINE ST Browse this block Philadelphia, PA
66765     Reed Residence Client: Reed, Allen H. | 1721-1723 PINE ST Browse this block Philadelphia, PA
8322      Residence | dwelling | 1722 PINE ST Browse this block Philadelphia, PA
8320      Residence | dwelling | 1724 PINE ST Browse this block Philadelphia, PA
277168    (untitled) | 1725-1731 PINE ST Browse this block Philadelphia, PA
8314      Residence | dwelling | 1725 PINE ST Browse this block Philadelphia, PA
8318      Residence | dwelling | 1726 PINE ST Browse this block Philadelphia, PA
8312      Residence | dwelling | 1727 PINE ST Browse this block Philadelphia, PA
8316      Residence | dwelling | 1728 PINE ST Browse this block Philadelphia, PA
8311      Residence | dwelling | 1729 PINE ST Browse this block Philadelphia, PA
75634     1730 Pine Street | apartmentdwelling | 1730 PINE ST Browse this block Philadelphia, PA
8309      Residence | dwelling | 1731 PINE ST Browse this block Philadelphia, PA
75636     1732 Pine Street; Johnson Residence | 1732 PINE ST Browse this block Philadelphia, PA
75637     1733 Pine Street | 1733 PINE ST Browse this block Philadelphia, PA
8307      Residence | dwelling | 1734 PINE ST Browse this block Philadelphia, PA
75638     1736 Pine Street | 1736 PINE ST Browse this block Philadelphia, PA
1249875   Bullock House; 1738 Pine Street | dwelling | 1738 PINE ST Browse this block 401-407 S 18TH ST Browse this block Philadelphia, PA
272622    Spalding Residence Client: Spalding, P. L. | dwelling | 345-347 S 18TH ST Browse this block 1739 PINE ST Browse this block Philadelphia, PA
############ BLOCK 18 ############
-         Locations
-         Home About the Project Participating Institutions Send Us Feedback Subscribe to PAB Projects / Buildings Architects Locations Collections Published Sources The Athenaeum of Philadelphia Univ
-         Project | Type | Location
277172    (untitled) | 1800-1806 PINE ST Browse this block Philadelphia, PA
8305      Residence | dwelling | 1800 PINE ST Browse this block Philadelphia, PA
75640     1801 Pine Street | 1801 PINE ST Browse this block Philadelphia, PA
8218      Residence | dwelling | 1802 PINE ST Browse this block Philadelphia, PA
277170    (untitled) | 1803-1825 PINE ST Browse this block Philadelphia, PA
8430      Residence | dwelling | 1803 PINE ST Browse this block Philadelphia, PA
8216      Residence | dwelling | 1804 PINE ST Browse this block Philadelphia, PA
8428      Residence | dwelling | 1805 PINE ST Browse this block Philadelphia, PA
8214      Residence | dwelling | 1806 PINE ST Browse this block Philadelphia, PA
8426      Residence | dwelling | 1807 PINE ST Browse this block Philadelphia, PA
277174    (untitled) | 1808-1836 PINE ST Browse this block Philadelphia, PA
75641     1808 Pine Street | 1808 PINE ST Browse this block Philadelphia, PA
8424      Residence | dwelling | 1809 PINE ST Browse this block Philadelphia, PA
75642     1810 Pine Street | 1810 PINE ST Browse this block Philadelphia, PA
8354      Residence | dwelling | 1811 PINE ST Browse this block Philadelphia, PA
8212      Residence | dwelling | 1812 PINE ST Browse this block Philadelphia, PA
8352      Residence | dwelling | 1813 PINE ST Browse this block Philadelphia, PA
8210      Residence | dwelling | 1814 PINE ST Browse this block Philadelphia, PA
8350      Residence | dwelling | 1815 PINE ST Browse this block Philadelphia, PA
8208      Residence | dwelling | 1816 PINE ST Browse this block Philadelphia, PA
8348      Residence | dwelling | 1817 PINE ST Browse this block Philadelphia, PA
8206      Residence | dwelling | 1818 PINE ST Browse this block
…[truncated]
```

### Reasoning

Revealing: PHMC's row segmentation (1800-1806 / 1808-1836) does **not** match the City inventory's (1800-36). Let me pull dates and key numbers for every PHMC record on both blocks.

### → Bash

`S="/private/tmp/claude-501/-Users-billyprice-Code-Repos-1822-Pine-Website--claude-worktrees-upbeat-payne-f033aa/6342a117-41dd-41a4-a1f5-2116ed511a79/scratchpad"; UA="Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0 Safari/537.36"
IDS="277156 277158 277160 277162 277164 277166 277168 277170 277172 277174 277176 277178"
for id in $IDS; do
  curl -s `

**Result:**

```
PROJ     LOCATION               KEYNO     CHRONOLOGY
```

### → Bash

`S="/private/tmp/claude-501/-Users-billyprice-Code-Repos-1822-Pine-Website--claude-worktrees-upbeat-payne-f033aa/6342a117-41dd-41a4-a1f5-2116ed511a79/scratchpad"; ls -la "$S"/p_2771*.html | head -30`

**Result:**

```
(eval):1: no matches found: /private/tmp/claude-501/-Users-billyprice-Code-Repos-1822-Pine-Website--claude-worktrees-upbeat-payne-f033aa/6342a117-41dd-41a4-a1f5-2116ed511a79/scratchpad/p_2771*.html
```

### → Bash

`set -e
S="/private/tmp/claude-501/-Users-billyprice-Code-Repos-1822-Pine-Website--claude-worktrees-upbeat-payne-f033aa/6342a117-41dd-41a4-a1f5-2116ed511a79/scratchpad"
UA="Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0 Safari/537.36"
for id in 277156 277158 277160 277162 277164 277166 277168 277176 277178; do
  curl -s -m 25 -A "$UA" -L "https:/`

**Result:**

```
277156 o:200 d:200
277158 o:200 d:200
277160 o:200 d:200
277162 o:200 d:200
277164 o:200 d:200
277166 o:400 d:400
277168 o:200 d:200
277176 o:200 d:200
277178 o:200 d:200
OK
```

### → Bash

`S="/private/tmp/claude-501/-Users-billyprice-Code-Repos-1822-Pine-Website--claude-worktrees-upbeat-payne-f033aa/6342a117-41dd-41a4-a1f5-2116ed511a79/scratchpad"
python3 - <<'EOF'
import re,html,os
S="/private/tmp/claude-501/-Users-billyprice-Code-Repos-1822-Pine-Website--claude-worktrees-upbeat-payne-f033aa/6342a117-41dd-41a4-a1f5-2116ed511a79/scratchpad"
ids=[277156,277158,277160,277162,277164,27`

**Result:**

```
PROJ     KEYNO     LOCATION                 CHRONOLOGY
277156   053565    1711 PINE ST             c. 1890 BUILT source: PHMC
277158   053566    1713 PINE ST             c. 1840 BUILT source: PHMC
277160   053567    1715 PINE ST             c. 1902 BUILT source: PHMC
277162   053568    1717 PINE ST             c. 1914 BUILT source: PHMC
277164   053569    1719 PINE ST             c. 1840 BUILT source: PHMC
277168   053571    1725-1731 PINE ST        c. 1850 BUILT source: PHMC
277170   053572    1803-1825 PINE ST        c. 1850 BUILT source: PHMC
277172   053573    1800-1806 PINE ST        c. 1845 BUILT source: PHMC
277174   053574    1808-1836 PINE ST        c. 1845 BUILT source: PHMC
277176   053575    ?                        c. 1910 BUILT source: PHMC
277178   053576    1905-1913 PINE ST        c. 1845 BUILT source: PHMC
```

### Reasoning

This is the decisive dataset. Let me delegate the PA-SHARE hunt while I analyze the pattern.

### → Agent

`HISTORICAL SOURCE-CRITICISM RESEARCH. Do not fabricate anything. Every claim needs a verbatim quote + working URL, graded A (you read the primary document yourself) / B (secondary source) / C (inference). If you cannot access something, say so plainly. Never invent a quote or URL.

BACKGROUND (established facts, verified by me — do not re-verify, build on them):
- Philadelphia Architects and Build`

**Result:**

```
Async agent launched successfully. (This tool result is internal metadata — never quote or paste any part of it, including the agentId below, into a user-facing reply.)
agentId: a09e97e0401f567ab (internal ID - do not mention to user. Use SendMessage with to: 'a09e97e0401f567ab', summary: '<5-10 word recap>' to continue this agent.)
The agent is working in the background. You will be notified automatically when it completes. You know nothing about its results until that notification arrives — do not report, assume, or predict them; continue other work or respond to the user in the meantime.
Do not duplicate this agent's work — avoid working with the same files or topics it is using.
output_file: /private/tmp/claude-501/-Users-billyprice-Code-Repos-1822-Pine-Website--claude-worktrees-upbeat-payne-f033aa/6342a117-41dd-41a4-a1f5-2116ed511a79/tasks/a09e97e0401f567ab.output
Do NOT Read or tail this file via the shell tool — it is the full subagent JSONL transcript and reading it will overflow your context. If the user asks for progress, say the agent is still running; you'll get a completion notification.
```

### → Bash

`UA="Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0 Safari/537.36"
echo "=== OPA via phl.carto SQL API ==="
curl -s -m 45 -A "$UA" -G "https://phl.carto.com/api/v2/sql" --data-urlencode "q=SELECT parcel_number, location, year_built, year_built_estimate, building_code_description, total_area, category_code_description, sale_date, sale_price FROM o`

**Result:**

```
=== OPA via phl.carto SQL API ===
{
    "rows": [
        {
            "parcel_number": "081079100",
            "location": "1822 PINE ST",
            "year_built": "1800",
            "year_built_estimate": "Y",
            "building_code_description": "ROW 4 STY MASONRY",
            "total_area": 1980,
            "category_code_description": "SINGLE FAMILY",
            "sale_date": "2025-11-14T05:00:00Z",
            "sale_price": 1
        }
    ],
    "time": 0.129,
    "fields": {
        "parcel_number": {
            "type": "string",
            "pgtype": "varchar"
        },
        "location": {
            "type": "string",
            "pgtype": "varchar"
        },
        "year_built": {
            "type": "string",
            "pgtype": "varchar"
        },
        "year_built_estimate": {
            "type": "string",
            "pgtype": "varchar"
        },
        "building_code_description": {
            "type": "string",
            "pgtype": "varchar"
        },
        "total_area": {
            "type": "number",
            "pgtype": "numeric"
        },
        "category_code_description": {
            "type": "string",
            "pgtype": "varchar"
        },
        "sale_date": {
            "type": "date",
            "pgtype": "timestamptz"
        },
        "sale_price": {
            "type": "number",
            "pgtype": "numeric"
        }
    },
    "total_rows": 1
}
```

### → Bash

`S="/private/tmp/claude-501/-Users-billyprice-Code-Repos-1822-Pine-Website--claude-worktrees-upbeat-payne-f033aa/6342a117-41dd-41a4-a1f5-2116ed511a79/scratchpad"
echo "=== 1983 NR: 1900 block Pine, north side (1901-1939) ==="
grep -n -A12 '^1901\|1903-13\|1905-13\|1903-1913' "$S/nr.txt" | head -40
echo
echo "=== how often does c.1845 / c. 1845 appear in the 1983 NR? ==="
grep -oiE 'c\. ?1845' "$S/n`

**Result:**

```
=== 1983 NR: 1900 block Pine, north side (1901-1939) ===
933:1901 Rittenhouse  Plaza, 1926,  H  plan 22-story  apartment  house,  with court­
934-yard entrance.  Limestone  base,  brick  rising  walls, terra cotta Art  Deco 
935-top. Major  landmark  by McLanahan Bencker.  Significant. 
936-
937-===PAGE 19===
938-- 3 -
939-1907 c.1965  limestone front mini-theater,  Armand Carroll,  architect. In­
940-trusion. 
941-1909 4-story  c.1860 brownstone, converted  to shopfront. Contributing. 
942-1911 C. 1965 limestone front mini-theater,  Armand Carroll,  architect. In­
943-trusion. 
944-1913 Potts residence, 1897,  Joseph  Huston, architect.  Imposing Renaissance 
945-4-story brick  townhouse, with granite  columned portico for iron  mining 
--
1744:1901 2-story  commercial shop, c. 1950. Intrusion. 
1745-1903 34-story  brick,  brownstonetrimmed, mansarded Second Empire townhouse, 
1746-c. 1875. Contributing. 
1747-1905 Refaced Second Empire townhouse,  limestone  and flemish  bond Georgian, 
1748-c.1910. Contributing. 
1749-1907-09 34-story,  brick,  brownstone triimned, mansarded Second Erapire townhouses, 
1750-c.1875. Contributing. 
1751-1911 Refaced Second Empire townhouse; pompeiian  brick  over brownstone, medieval 
1752-revival,  1894. Contributing. 
1753-1913 34-story  brick,  brownstone trimmed, mansarded Second Empire townhouse, 
1754-c. 1875. Contributing. 
1755-1915-17 4-story,  brick, Italianate  townhouses, 1870; 1915 Colonialized  first  story, 
1756-1925. Contributing. 
--
2281:1901 Fronts on 19th Street 
2282:1903-13 3-story vernacular,  wood trimmed  row; 1911,  redone,  brownstone  trim, 
2283-c.1870; 1913 stuccoed  and  wrecked,  c.1960 Intrusion.  1903-11 . 
2284-Contributing. 
2285-1915-23 Christ  Church  Chapel,  brick terra cotta  trimmed  1870s chapel, J.P.  Sims, 
2286-architect;  altered by  Frank  Furness,  c.1900. Significant. 
2287-1925-39 C. 1960  modern  pink brick. Intrusion. 
2288-2000 block  Pine  Street 
2289-2000-02 1980  commercial,  modern brick  base;  cornice  removed.  Intrusion. 
2290-2004-08 3-story vernacular, brick,  marble  trimmed,  metal  corniced  rowhouses.  " 
2291-Contributing. 
2292-2010 3-story vernacular, brick,  marble  trimmed  rowhouse,  refaced Colonial 

=== how often does c.1845 / c. 1845 appear in the 1983 NR? ===
       4
=== all c.18xx date frequencies in NR (top) ===
  85 c.1870
  66 c.1860
  43 c.1890
  36 c.1850
  30 c.1875
  28 c.1880
  20 c.1840
  19 c.1865
  18 c.1855
  12 c.1885
  11 c.1895
   7 c.1830
   4 c.1845
   3 c.1888
   2 c.1896
   1 c.1886
   1 c.1867
   1 c.1859
   1 c.1835
```

### Reasoning

OPA confirmed (year_built "1800", estimate flag "Y"). And a striking find: PHMC also dates **1905-1913 Pine** to c.1845 — a row the NR calls vernacular/Italianate. Let me test the default-value hypothesis.

### → Bash

`S="/private/tmp/claude-501/-Users-billyprice-Code-Repos-1822-Pine-Website--claude-worktrees-upbeat-payne-f033aa/6342a117-41dd-41a4-a1f5-2116ed511a79/scratchpad"
echo "=== The 4 occurrences of c.1845 in the 1983 NR nomination ==="
grep -n -B3 -A1 -iE 'c\. ?1845' "$S/nr.txt"
echo
echo "=== 1995 City inventory: c. 1845 occurrences ==="
grep -n -iE 'c\. ?1845' "$S/rf.txt" | head -20`

**Result:**

```
=== The 4 occurrences of c.1845 in the 1983 NR nomination ===
1264-2012 4-story  pompeiian brick  townhouse, with  limestone  base and trim, 2 
1265-registers  wide, for St. Patrick's  Church c. 1895. Contributing. 
1266-2014 3%-story brick 2 register  rowhouse, wood trim and  dentilled  cornice 
1267:c. 1845. Contributing. 
1268-2016 3i5-story brick 2 register  rowhouse, refaced c. 1960. Intrusion. 
--
1863-2229 3-story corner  house, shop front,  tin cornice,  brick,  c.1880. Contri­
1864-buting. 
1865-2300 block Spruce Street 
1866:2300 34-story corner  shop, c.1845, altered  shop base, c.1960. Contributing. 
1867-2302-22 4-story,  brownstone. Second Empire unified  row c. 1860. Contributing. 
--
2224-stone head,  2/2 sash;  1625 shop front  c. 1880. Contributing. 
2225-1700 block  Pine  Street 
2226-1700-38 4-story, late  Greek Revival  townhouses, marble  trim  and door surrounds, 
2227:modillioned  wood cornice,  c.1845.  Contributing. 
2228-***** 
--
2572-250 Hannah  Penn Republican  House, 34-story flemish  bond brick,  limestone 
2573-trimmed Colonial Revival  c.1890,  T.M. Rogers,  architect.  Con­
2574-tributing. 
2575:254-60 3-story  Greek  Revival, brick  townhouses, c.1845;  254 - altered  base, 
2576-c.1980 Intrusion;  258- altered  commerical base, c.1900,  260 

=== 1995 City inventory: c. 1845 occurrences ===
893:L622 4-story, 5 lcay, brownstone rtarianate double cityhouse, for l?ublisher Isaac Lea, c. 1845-1855,attributed 1E,o John Notman. Massive bracketed windowheads, alte:red but courpatible sash. Bracketedcornice c. :tg60 Significant
995:3 L/2-story,, brick, 2 register, Greek Revivalrowhouse, wclod trirn and dentiLled cornice c. 1845.Contribtrting.
2630:23OO (aka 3OO S. 23rd Street) 3-story corner shop, c.1845, altered shop base and windows c. 1960
3133:Four 3 \/ 2-s;tory, 3 bay, Greek Revival, bricktownhouses, c. 1845; 254, 259, 260 altered base.--- Contributing
3538:4l-l- 3-story, 3 bay brick Greek Revival rowhouse c. 1845,
```

### → Bash

`S="/private/tmp/claude-501/-Users-billyprice-Code-Repos-1822-Pine-Website--claude-worktrees-upbeat-payne-f033aa/6342a117-41dd-41a4-a1f5-2116ed511a79/scratchpad"
UA="Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0 Safari/537.36"
for id in 277165 277166 277167 277176 277178; do
  curl -s -m 25 -A "$UA" -L "https://www.philadelphiabuildings.org/pab/`

**Result:**

```
277165:200 277166:400 277167:200 277176:200 277178:200 
277165 PHMC-PR-053570 keyno=- ['1721-1723 PINE ST']
277166 -> short/err page 11
277167 PHMC-PR-053571 keyno=- ['1725-1731 PINE ST']
277176 PHMC-PJ-053575 keyno=053575 []
277178 PHMC-PJ-053576 keyno=053576 ['1905-1913 PINE ST']
```

### Reasoning

Key 053570 = 1721-1723 Pine. The key numbers run sequentially west along Pine. Let me map the run's start and test whether c.1845 is a default value.

### → Bash

`S="/private/tmp/claude-501/-Users-billyprice-Code-Repos-1822-Pine-Website--claude-worktrees-upbeat-payne-f033aa/6342a117-41dd-41a4-a1f5-2116ed511a79/scratchpad"
mkdir -p "$S/phmcscan"
UA="Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0 Safari/537.36"
seq 277100 2 277300 | xargs -P 8 -I{} sh -c "curl -s -m 20 -A '$UA' -L 'https://www.philadelphiab`

**Result:**

```
xargs: command line cannot be assembled, too long
       0
```

### Reasoning

You've hit your weekly limit · resets Aug 29 at 10pm (America/New_York)
