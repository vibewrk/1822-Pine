<!-- SALVAGED partial research: newspapers-and-deeds. The agent was killed mid-run by an API
weekly-limit error on 2026-08-27. This is its full trace — searches, raw results
and reasoning — up to the moment it died. NOT a finished report. Nothing here is
publishable until re-verified against its cited source. -->

# Partial trace: newspapers-and-deeds

### Reasoning

I'll research this systematically. Let me start by loading the web tools and checking what's already in the repo.

### → ToolSearch

`select:WebSearch,WebFetch`

### → Bash

`ls -la "/Users/billyprice/Code Repos/1822 Pine Website/.claude/worktrees/upbeat-payne-f033aa" && ls "/Users/billyprice/Code Repos/1822 Pine Website/.claude/worktrees/upbeat-payne-f033aa/docs" 2>/dev/null`

**Result:**

```
total 1376
drwxr-xr-x@  52 billyprice  staff    1664 Aug 27 05:40 .
drwxr-xr-x@   4 billyprice  staff     128 Aug 27 04:38 ..
-rw-r--r--@   1 billyprice  staff      90 Aug 26 16:00 .git
drwxr-xr-x@   3 billyprice  staff      96 Aug 26 16:00 .github
-rw-r--r--@   1 billyprice  staff     626 Aug 26 16:00 .gitignore
drwxr-xr-x@  22 billyprice  staff     704 Aug 27 16:02 .next
-rw-r--r--@   1 billyprice  staff       0 Aug 26 16:00 .nojekyll
-rw-r--r--@   1 billyprice  staff    6968 Aug 26 16:00 ASSET-AUDIT.md
-rw-r--r--@   1 billyprice  staff     937 Aug 26 16:00 CHECK-GITHUB-SETTINGS.md
-rw-r--r--@   1 billyprice  staff    2740 Aug 26 16:00 CONTENT-AUDIT.md
-rw-r--r--@   1 billyprice  staff    9931 Aug 26 16:00 CONTENT-DIRECTORY-STRUCTURE.md
-rw-r--r--@   1 billyprice  staff   31769 Aug 26 16:00 CONTENT-INVENTORY.txt
-rw-r--r--@   1 billyprice  staff   16831 Aug 26 16:00 CONTENT_COMPLIANCE_COSTS.md
-rw-r--r--@   1 billyprice  staff   18632 Aug 26 16:00 DEEP-RESEARCH-REPORT.md
-rw-r--r--@   1 billyprice  staff    3409 Aug 26 16:00 EXTERNAL_IMAGE_SOURCES.md
-rw-r--r--@   1 billyprice  staff    2162 Aug 26 16:00 GITHUB-DEPLOYMENT-SUCCESS.md
-rw-r--r--@   1 billyprice  staff    7229 Aug 26 16:00 IMAGE-INTEGRATION-PLAN.md
-rw-r--r--@   1 billyprice  staff    9919 Aug 26 16:00 IMPLEMENTATION_NOTES.md
-rw-r--r--@   1 billyprice  staff   15724 Aug 26 16:00 MASTER-CONTENT-INDEX.md
-rw-r--r--@   1 billyprice  staff    4692 Aug 26 16:00 NLWEB-INTEGRATION-PROPOSAL.md
-rw-r--r--@   1 billyprice  staff    8034 Aug 26 16:00 OPERATIONS_MANUAL_BRIEF.md
-rw-r--r--@   1 billyprice  staff    3474 Aug 26 16:00 README.md
-rw-r--r--@   1 billyprice  staff   13101 Aug 26 16:00 RP-Alt-Index.md
-rw-r--r--@   1 billyprice  staff   46678 Aug 26 16:00 WEBSITE_BUILD_PLAN.md
-rw-r--r--@   1 billyprice  staff    8217 Aug 26 16:00 WEBSITE_REIMAGINATION_PLAN.md
-rw-r--r--@   1 billyprice  staff    2558 Aug 26 16:00 _quarto.yml
drwxr-xr-x@  10 billyprice  staff     320 Aug 26 16:00 airbnb
-rwxr-xr-x@   1 billyprice  staff     263 Aug 26 16:00 create_structure.sh
drwxr-xr-x@   3 billyprice  staff      96 Aug 26 16:00 data
drwxr-xr-x@   8 billyprice  staff     256 Aug 27 12:22 docs
-rw-r--r--@   1 billyprice  staff     465 Aug 26 16:00 eslint.config.mjs
-rw-r--r--@   1 billyprice  staff    6393 Aug 26 16:00 generate_preview.py
drwxr-xr-x@   5 billyprice  staff     160 Aug 26 16:00 images
drwxr-xr-x@  63 billyprice  staff    2016 Aug 26 16:00 metadata
-rw-r--r--@   1 billyprice  staff     247 Aug 26 16:05 next-env.d.ts
-rw-r--r--@   1 billyprice  staff     156 Aug 26 16:00 next.config.ts
drwxr-xr-x@ 319 billyprice  staff   10208 Aug 26 16:05 node_modules
-rw-r--r--@   1 billyprice  staff    9110 Aug 27 05:40 pab.html
-rw-r--r--@   1 billyprice  staff  269832 Aug 26 16:05 package-lock.json
-rw-r--r--@   1 billyprice  staff    1184 Aug 26 16:00 package.json
-rw-r--r--@   1 billyprice  staff      94 Aug 26 16:00 postcss.config.mjs
drwxr-xr-x@  15 billyprice  staff     480 Aug 26 16:00 public
drwxr-xr-x@  67 billyprice  staff    2144 Aug 26 16:00 raw_documents
drwxr-xr-x@   5 billyprice  staff     160 Aug 26 16:00 refs
drwxr-xr-x@   9 billyprice  staff     288 Aug 27 06:23 research
drwxr-xr-x@   8 billyprice  staff     256 Aug 27 05:32 scripts
-rw-r--r--@   1 billyprice  staff    1082 Aug 26 16:00 setup.sh
drwxr-xr-x@   6 billyprice  staff     192 Aug 26 16:00 src
drwxr-xr-x@   3 billyprice  staff      96 Aug 26 16:00 styles
-rw-r--r--@   1 billyprice  staff     670 Aug 26 16:00 tsconfig.json
-rw-r--r--@   1 billyprice  staff  120240 Aug 27 15:55 tsconfig.tsbuildinfo
drwxr-xr-x@  42 billyprice  staff    1344 Aug 26 16:00 website
CONTENT-OPPORTUNITIES.md
GROWTH-RUNBOOK.md
GUEST-PERSONA-REVIEW.md
HANDOFF.md
HOUSE-HISTORY-DOSSIER.md
HOUSE-STYLE.md
```

### → Bash

`cd "/Users/billyprice/Code Repos/1822 Pine Website/.claude/worktrees/upbeat-payne-f033aa" && grep -ril "mccrea" . --include=*.md --include=*.txt --include=*.tsx --include=*.json 2>/dev/null | grep -v node_modules | head -30`

### → WebSearch

`"John McCrea" Philadelphia builder Pine Street 1854 deed Roset`

**Result:**

```
(eval):1: no matches found: --include=*.md
```

**Result:**

```
Web search results for query: ""John McCrea" Philadelphia builder Pine Street 1854 deed Roset"

Links: [{"title":"John B. McCreary House","url":"https://en.wikipedia.org/wiki/John_B._McCreary_House"},{"title":"John McArthur Jr.","url":"https://en.wikipedia.org/wiki/John_McArthur_Jr."},{"title":"George D. McCreary","url":"https://en.wikipedia.org/wiki/George_D._McCreary"},{"title":"John Stewart Houses (Philadelphia, Pennsylvania)","url":"https://en.wikipedia.org/wiki/John_Stewart_Houses_(Philadelphia,_Pennsylvania)"},{"title":"Clinton Street Historic District","url":"https://en.wikipedia.org/wiki/Clinton_Street_Historic_District"}]

The search results don't contain specific information about John McCrea as a Philadelphia builder with a Pine Street deed from 1854 involving "Roset." The results returned information about other historical figures named McCreary and McArthur in Philadelphia, as well as historic district information, but nothing matching your specific query about John McCrea and the 1854 deed on Pine Street.

This appears to be a very specific historical record that may require searching historical deed databases, Philadelphia city archives, or genealogical records rather than general web search results. You might have better success consulting:
- Philadelphia City Archives
- Pennsylvania State Archives
- Historical Society of Pennsylvania
- Genealogical databases like Ancestry.com or FamilySearch
- Old deed records or land records repositories

Would you like me to try a different search with alternative keywords or variations?


REMINDER: You MUST include the sources above in your response to the user using markdown hyperlinks.
```

### → Bash

`cd "/Users/billyprice/Code Repos/1822 Pine Website/.claude/worktrees/upbeat-payne-f033aa" && grep -ril "mccrea" --include="*.md" --include="*.txt" --include="*.tsx" --include="*.json" . 2>/dev/null | grep -v node_modules | head -30; echo "---ROSET---"; grep -ril "roset" --include="*.md" --include="*.txt" . 2>/dev/null | grep -v node_modules | head -20`

**Result:**

```
RP-Alt-Index.md
CONTENT-INVENTORY.txt
WEBSITE_BUILD_PLAN.md
NLWEB-INTEGRATION-PROPOSAL.md
DEEP-RESEARCH-REPORT.md
MASTER-CONTENT-INDEX.md
research/unverified-claims.md
research/deep-2026-08/02-domestic-life.md
research/deep-2026-08/08-census-directories.md
research/deep-2026-08/11-negative-results-access.md
research/deep-2026-08/00-archive-map.md
research/deep-2026-08/05-twentieth-century.md
research/deep-2026-08/01-pine-street-identity.md
CONTENT-DIRECTORY-STRUCTURE.md
research/deep-2026-08/ARCHIVE-TASKS.md
website/summary.md
website/data/image-catalog.json
docs/CONTENT-OPPORTUNITIES.md
docs/GUEST-PERSONA-REVIEW.md
docs/HOUSE-HISTORY-DOSSIER.md
public/llms.txt
src/app/rittenhouse-square/history/page.tsx
src/app/history/page.tsx
src/app/history/suffrage/page.tsx
src/app/history/story/page.tsx
src/data/timeline.json
src/data/verified-facts.json
src/data/document-archive.json
---ROSET---
RP-Alt-Index.md
CONTENT-INVENTORY.txt
WEBSITE_BUILD_PLAN.md
CONTENT-DIRECTORY-STRUCTURE.md
NLWEB-INTEGRATION-PROPOSAL.md
DEEP-RESEARCH-REPORT.md
MASTER-CONTENT-INDEX.md
research/unverified-claims.md
research/deep-2026-08/02-domestic-life.md
research/deep-2026-08/10-block-neighbours.md
research/deep-2026-08/08-census-directories.md
research/deep-2026-08/11-negative-results-access.md
research/deep-2026-08/09-families-genealogy.md
research/deep-2026-08/00-archive-map.md
research/deep-2026-08/03-newspaper-sweep.md
research/deep-2026-08/07-physical-building-maps.md
research/deep-2026-08/04-waverly-street.md
research/deep-2026-08/ARCHIVE-TASKS.md
research/deep-2026-08/README.md
docs/CONTENT-OPPORTUNITIES.md
```

### → Bash

`curl -s -m 45 -A "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0 Safari/537.36" "https://chroniclingamerica.loc.gov/search/pages/results/?andtext=Pine+street+west+of+Eighteenth&state=Pennsylvania&format=json&rows=5" -o /private/tmp/claude-501/-Users-billyprice-Code-Repos-1822-Pine-Website--claude-worktrees-upbeat-payne-f033aa/6342a117-41dd-41a4-`

**Result:**

```
HTTP:308 SIZE:169 URL:https://chroniclingamerica.loc.gov/search/pages/results/?andtext=Pine+street+west+of+Eighteenth&state=Pennsylvania&format=json&rows=5
<html>
<head><title>308 Permanent Redirect</title></head>
<body>
<center><h1>308 Permanent Redirect</h1></center>
<hr><center>cloudflare</center>
</body>
</html>
```

### → Bash

`cd "/Users/billyprice/Code Repos/1822 Pine Website/.claude/worktrees/upbeat-payne-f033aa/research/deep-2026-08" && wc -l *.md && echo "=====NEWSPAPER SWEEP=====" && cat 03-newspaper-sweep.md`

**Result:**

```
<persisted-output>
Output too large (32.8KB). Full output saved to: /Users/billyprice/.claude/projects/-Users-billyprice-Code-Repos-1822-Pine-Website--claude-worktrees-upbeat-payne-f033aa/6342a117-41dd-41a4-a1f5-2116ed511a79/tool-results/bns1m4hic.txt

Preview (first 2KB):
     381 00-archive-map.md
     283 01-pine-street-identity.md
     245 02-domestic-life.md
     190 03-newspaper-sweep.md
     214 04-waverly-street.md
     181 05-twentieth-century.md
     125 06-medical-practice.md
     192 07-physical-building-maps.md
     238 08-census-directories.md
     340 09-families-genealogy.md
     229 10-block-neighbours.md
     316 11-negative-results-access.md
     114 ARCHIVE-TASKS.md
      61 README.md
    3109 total
=====NEWSPAPER SWEEP=====
<!-- Raw research return, deep-history pass of 2026-08-27. Findings carry A/B/C
grades and source URLs as the researcher recorded them. NOTHING HERE IS
PUBLISHABLE UNTIL RE-VERIFIED against its cited source — see the site's
no-fabrication rule. Synthesized dossier: docs/HOUSE-HISTORY-DOSSIER.md -->

I have a complete, image-verified sweep. Writing up.

NEWSPAPER ARCHIVE SWEEP — 1822 PINE STREET / 756 PINE STREET
Method: full-text search of Chronicling America (www.loc.gov/collections/chronicling-america) and the Penn State Pennsylvania Newspaper Archive (panewsarchive.psu.edu, an Open ONI node with a legacy phrasetext/proxtext API and better OCR recall than LOC's). Every candidate page was pulled as raw OCR and grepped. **Every address digit reported below as CONFIRMED was then read off the actual page image**, via IIIF region crops (LOC tile.loc.gov and PSU). Three OCR "hits" died at that step — see NEGATIVE RESULTS. All items below are pre-1930, public domain, and freely republishable with the page image.

═══════════════════════════════════════════
A. NEW DOCUMENTS THE SITE DOES NOT HAVE
═══════════════════════════════════════════

── A1. GRADE A — Graham Spencer's obituary. Resolves Open Question #1 outright, and corrects the site's death date by five months.
Wilmington (Del.) Evening Journal, Tue Nov 24, 1896, p.2.
https://www.loc.gov/resource/sn85042354/1896-11-24/ed-1/?sp=2
...
</persisted-output>
```

### → Bash

`curl -sL -m 60 -A "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0 Safari/537.36" "https://chroniclingamerica.loc.gov/search/pages/results/?andtext=Pine+street+west+of+Eighteenth&state=Pennsylvania&format=json&rows=5" -o /private/tmp/claude-501/-Users-billyprice-Code-Repos-1822-Pine-Website--claude-worktrees-upbeat-payne-f033aa/6342a117-41dd-41a4`

**Result:**

```
HTTP:404 SIZE:85310 FINAL:https://www.loc.gov/chroniclingamerica/search/pages/results/?andtext=Pine+street+west+of+Eighteenth&state=Pennsylvania&format=json&rows=5
<!DOCTYPE html>


<html lang="en" class="no-js" prefix="lc: http://loc.gov/#">
<head>


<title>Page Not Found -- 404 -- Library of Congress</title>



    




<link href='https://www.loc.gov/static/stylesheets/base.css'
    type='text/css'
    rel='stylesheet' />
<link href="https://www.loc.gov/static/fonts/OpenSans-Regular.woff2"
    rel='preload'
    as='font'
    type='font/woff2'
    crossorigin />
<link href="https://www.loc.gov/static/fonts/OpenSans-Bold.woff2"
    rel='preload'
    as='font'
    type='font/woff2'
    crossorigin />
<link href="https://www.loc.gov/static/css/fa/fonts/fontawesome-webfont.woff2?v=4.6.3"
    rel='preload'
    as='font'
    type='font/woff2'
    crossorigin />

<link href="https://www.loc.gov/static/fonts/RobotoSlab-Bold.woff2"
    rel='preload'
    as=
```

### → Read

``

**Result:**

```
1	<!-- Raw research return, deep-history pass of 2026-08-27. Findings carry A/B/C
2	grades and source URLs as the researcher recorded them. NOTHING HERE IS
3	PUBLISHABLE UNTIL RE-VERIFIED against its cited source — see the site's
4	no-fabrication rule. Synthesized dossier: docs/HOUSE-HISTORY-DOSSIER.md -->
5	
6	I have a complete, image-verified sweep. Writing up.
7	
8	NEWSPAPER ARCHIVE SWEEP — 1822 PINE STREET / 756 PINE STREET
9	Method: full-text search of Chronicling America (www.loc.gov/collections/chronicling-america) and the Penn State Pennsylvania Newspaper Archive (panewsarchive.psu.edu, an Open ONI node with a legacy phrasetext/proxtext API and better OCR recall than LOC's). Every candidate page was pulled as raw OCR and grepped. **Every address digit reported below as CONFIRMED was then read off the actual page image**, via IIIF region crops (LOC tile.loc.gov and PSU). Three OCR "hits" died at that step — see NEGATIVE RESULTS. All items below are pre-1930, public domain, and freely republishable with the page image.
10	
11	═══════════════════════════════════════════
12	A. NEW DOCUMENTS THE SITE DOES NOT HAVE
13	═══════════════════════════════════════════
14	
15	── A1. GRADE A — Graham Spencer's obituary. Resolves Open Question #1 outright, and corrects the site's death date by five months.
16	Wilmington (Del.) Evening Journal, Tue Nov 24, 1896, p.2.
17	https://www.loc.gov/resource/sn85042354/1896-11-24/ed-1/?sp=2
18	Image crop (verified by eye): https://tile.loc.gov/image-services/iiif/service:ndnp:deu:batch_deu_bear_ver01:data:sn85042354:00383343380:1896112401:0869/1900,5240,900,940/full/0/default.jpg
19	Verbatim: "GRAHAM SPENCER DEAD. HE DEVELOPED THE KAOLIN MINES, AT HOCKESSIN, AND MADE A FORTUNE. The funeral of Graham Spencer, who for many years was connected with the kaolin industry, at Hockessin, took place from the residence of his relatives, at No. 1822 Pine street, Philadelphia, this morning, at 11 o'clock. Mr. Spencer was 44 years old and was the son of Howard Spencer, who was the pioneer in the kaolin and spar industry in this section. His father developed the kaolin mines and derived a large fortune from the sale of the product. The son continued the business and opened several new fields in Delaware and Pennsylvania. Graham Spencer formerly made his home in Wilmington in Winter. His father [di]ed but a year ago."
20	What this settles:
21	- Howard and Graham Spencer are FATHER AND SON, not one man mis-transcribed. CONTENT-OPPORTUNITIES #17 is right and DEEP-RESEARCH-REPORT's "rename Howard → Graham throughout" instruction is wrong. Howard Spencer = the kaolin/feldspar pioneer at Hockessin, Delaware, died c. 1895. Graham Spencer = son, b. c. 1852, d. Nov 1896.
22	- The site's "Graham Spencer died June 28, 1896" is WRONG. The funeral was the morning of Nov 24, 1896, so he died c. Nov 21–23. This explains the archive's UNREAD Philadelphia Times clipping of **1896-11-23 p.11** (npcom 53387473) — almost certainly the death notice — and means the **1896-06-29** Times clipping is NOT his obituary. Reading 1896-11-23 is now the single highest-value unread clipping in the archive.
23	- The funeral was held IN the house. That is a documented event at 1822 Pine that the site does not currently narrate.
24	- Careful: the phrase is "the residence of his relatives," not "his residence." Quote it as printed; do not upgrade it to "his home."
25	- Bonus: this ties Mrs. Graham Spencer's Chester County country house at Kaolin, Pa. (the site's 1901 Times clipping) to the family's Hockessin, Del. kaolin fortune — the same clay district, five miles apart.
26	
27	── A2. GRADE A — Naomi Lawton Davis's death notice, at the house. Fills the centrepiece of GAP 3, which the site currently narrates with zero documents.
28	Evening Public Ledger (Philadelphia), Wed May 22, 1918, p.18.
29	https://panewsarchive.psu.edu/lccn/sn83045211/1918-05-22/ed-1/seq-18/ (LOC: https://www.loc.gov/resource/sn83045211/1918-05-22/ed-1/?sp=18)
30	Image crop (verified by eye): https://panewsarchive.psu.edu/iiif/batch_pst_geary_ver01%2Fdata%2Fsn83045211%2F00237282450%2F1918052201%2F0474.jp2/99,5608,805,169/1720,/0/default.jpg
31	Verbatim, read off the image: "DAVIS.—Suddenly, at 1822 Pine st., May 21, NAOMI LAWTON, widow of Henry C. Davis. Funeral services and int. private."
32	Independent corroboration, same wording, out-of-town: New-York Tribune, Thu May 23, 1918, p.7 — https://www.loc.gov/resource/sn83030214/1918-05-23/ed-1/?sp=7 — "DAVIS—Suddenly, at 1822 Pine st, Philadelphia, Penn., on May 21, Naomi Lawton, widow of Henry C. Davis. Funeral services and interment private."
33	This is the first primary document in the archive to (a) give Naomi Davis's full name, (b) confirm she died at this address, (c) confirm Henry C. Davis predeceased her, and (d) confirm "suddenly" and the private funeral. Two papers, one image-verified.
34	
35	── A3. GRADE A — John Roset's obituary. This is one of the archive's OWN documents, listed [UNREAD], and it is free.
36	The Evening Telegraph (Philadelphia), Wed Aug 10, 1870, p.8 — the archive's `the-evening-telegraph-1870-08-10-page-8`, npcom 85300150.
37	https://panewsarchive.psu.edu/lccn/sn83025925/1870-08-10/ed-1/seq-8/ (LOC: https://www.loc.gov/resource/sn83025925/1870-08-10/ed-1/?sp=8)
38	Image crop (verified by eye): https://panewsarchive.psu.edu/iiif/batch_pst_grange_ver01%2Fdata%2Fsn83025925%2F00280776294%2F1870081001%2F0703.jp2/1379,5839,652,380/1720,/0/default.jpg
39	Verbatim (heading read off image, body from OCR): "CITY INTELLIGENCE. Death of an Estimable & Venerable Citizen.—John Roset, Esq., died yesterday at West Philadelphia, in the seventy-sixth year of his age. In his active days Mr. Roset was a prominent merchant. His father, Jacob Roset, having attracted the notice of the Emperor Joseph II, of Austria, was educated at the Imperial Military Academy at Pres[s]burg, Hungary; but being a devoted admirer of the character of Washington, he came to the United States … exp
…[truncated]
```

### → Bash

`cd /private/tmp/claude-501/-Users-billyprice-Code-Repos-1822-Pine-Website--claude-worktrees-upbeat-payne-f033aa/6342a117-41dd-41a4-a1f5-2116ed511a79/scratchpad
echo "=== PSU legacy API test ==="
curl -s -m 60 "https://panewsarchive.psu.edu/search/pages/results/?proxtext=%22west+of+Eighteenth%22+Pine&format=json&rows=3" -o psu1.json -w "HTTP:%{http_code} SIZE:%{size_download}\n"
python3 -c "
import`

**Result:**

```
=== PSU legacy API test ===
HTTP:200 SIZE:226431
totalItems 31
The press. 18590922 /lccn/sn84026296/1859-09-22/ed-1/seq-4/
Daily evening bulletin. 18681107 /lccn/sn84026016/1868-11-07/ed-1/seq-5/
The press. 18590309 /lccn/sn84026296/1859-03-09/ed-1/seq-4/
=== LOC new endpoint test ===
HTTP:200 SIZE:1876155
{"advanced_search": true, "aka": ["hnews", "https://lccn.loc.gov/2007618519", "ndnp", "chronam"], "awardees": {"ak": "Alaska State Library Historical Collections", "arhi": "Arkansas State Archives", "au": "University of Alabama Libraries, Tuscaloosa, AL", "az": "Arizona Dept of Libraries", "cohi": "
```

### Reasoning

Prior research in this repo already mapped the newspaper landscape. Let me read the key constraint files and run targeted searches in parallel.

### → Bash

`cd /private/tmp/claude-501/-Users-billyprice-Code-Repos-1822-Pine-Website--claude-worktrees-upbeat-payne-f033aa/6342a117-41dd-41a4-a1f5-2116ed511a79/scratchpad
cat > psu.py <<'EOF'
import json,sys,urllib.parse,urllib.request,re
def search(params, label):
    q=urllib.parse.urlencode(params)
    url="https://panewsarchive.psu.edu/search/pages/results/?"+q+"&format=json&rows=40"
    try:
        r=u`

### → Bash

`cd "/Users/billyprice/Code Repos/1822 Pine Website/.claude/worktrees/upbeat-payne-f033aa" && grep -n -i -B4 -A12 "1845\|1854\|McCrea\|built" research/deep-2026-08/07-physical-building-maps.md | head -120`

**Result:**

```
### phrase: west of Eighteenth  total=460  url=https://panewsarchive.psu.edu/search/pages/results/?proxtext=%22west+of+Eighteenth%22&searchType=advanced&phrasetext=west+of+Eighteenth&format=json&rows=40
  - Daily evening bulletin. | 18640504 | /lccn/sn84026016/1864-05-04/ed-1/seq-1/
  - Evening public ledger. | 19220817 | /lccn/sn83045211/1922-08-17/ed-1/seq-26/
  - Daily evening bulletin. | 18661016 | /lccn/sn84026016/1866-10-16/ed-1/seq-8/
  - Harrisburg telegraph. | 19140112 | /lccn/sn85038411/1914-01-12/ed-1/seq-4/
  - The evening telegraph. | 18700420 | /lccn/sn83025925/1870-04-20/ed-1/seq-4/
  - The evening telegraph. | 18710527 | /lccn/sn83025925/1871-05-27/ed-1/seq-5/
  - The evening telegraph. | 18700514 | /lccn/sn83025925/1870-05-14/ed-1/seq-7/
  - The evening telegraph. | 18671221 | /lccn/sn83025925/1867-12-21/ed-1/seq-6/
  - Daily evening bulletin. | 18660514 | /lccn/sn84026016/1866-05-14/ed-1/seq-7/
  - Daily evening bulletin. | 18640428 | /lccn/sn84026016/1864-04-28/ed-1/seq-8/
  - Daily evening bulletin. | 18681107 | /lccn/sn84026016/1868-11-07/ed-1/seq-5/
  - Harrisburg telegraph. | 19140210 | /lccn/sn85038411/1914-02-10/ed-1/seq-5/
  - Harrisburg telegraph. | 19190429 | /lccn/sn85038411/1919-04-29/ed-1/seq-6/
  - Harrisburg telegraph. | 19140221 | /lccn/sn85038411/1914-02-21/ed-1/seq-2/
  - The evening telegraph. | 18701022 | /lccn/sn83025925/1870-10-22/ed-1/seq-4/
  - Daily evening bulletin. | 18651219 | /lccn/sn84026016/1865-12-19/ed-1/seq-3/
  - Daily evening bulletin. | 18661022 | /lccn/sn84026016/1866-10-22/ed-1/seq-6/
  - The evening telegraph. | 18710318 | /lccn/sn83025925/1871-03-18/ed-1/seq-4/
  - Harrisburg telegraph. | 19140522 | /lccn/sn85038411/1914-05-22/ed-1/seq-14/
  - Daily evening bulletin. | 18660504 | /lccn/sn84026016/1866-05-04/ed-1/seq-7/
  - The evening telegraph. | 18710603 | /lccn/sn83025925/1871-06-03/ed-1/seq-4/
  - Daily evening bulletin. | 18660302 | /lccn/sn84026016/1866-03-02/ed-1/seq-3/
  - The evening telegraph. | 18700430 | /lccn/sn83025925/1870-04-30/ed-1/seq-7/
  - The evening telegraph. | 18700604 | /lccn/sn83025925/1870-06-04/ed-1/seq-4/
  - Daily evening bulletin. | 18660521 | /lccn/sn84026016/1866-05-21/ed-1/seq-7/
  - The evening telegraph. | 18710520 | /lccn/sn83025925/1871-05-20/ed-1/seq-4/
  - The evening telegraph. | 18710401 | /lccn/sn83025925/1871-04-01/ed-1/seq-5/
  - The evening telegraph. | 18700611 | /lccn/sn83025925/1870-06-11/ed-1/seq-4/
  - The evening telegraph. | 18701112 | /lccn/sn83025925/1870-11-12/ed-1/seq-4/
  - The evening telegraph. | 18700507 | /lccn/sn83025925/1870-05-07/ed-1/seq-7/
  - The evening telegraph. | 18710513 | /lccn/sn83025925/1871-05-13/ed-1/seq-5/
  - The evening telegraph. | 18710610 | /lccn/sn83025925/1871-06-10/ed-1/seq-4/
  - The evening telegraph. | 18690320 | /lccn/sn83025925/1869-03-20/ed-1/seq-4/
  - Daily evening bulletin. | 18660303 | /lccn/sn84026016/1866-03-03/ed-1/seq-7/
  - Daily evening bulletin. | 18660305 | /lccn/sn84026016/1866-03-05/ed-1/seq-7/
  - Daily evening bulletin. | 18660306 | /lccn/sn84026016/1866-03-06/ed-1/seq-7/
  - The evening telegraph. | 18710617 | /lccn/sn83025925/1871-06-17/ed-1/seq-4/
  - The evening telegraph. | 18700625 | /lccn/sn83025925/1870-06-25/ed-1/seq-5/
  - Harrisburg telegraph. | 19180907 | /lccn/sn85038411/1918-09-07/ed-1/seq-10/
  - The evening telegraph. | 18690911 | /lccn/sn83025925/1869-09-11/ed-1/seq-4/
```

**Result:**

```
27-
28-Three things follow, and two of them correct the repo:
29-
30-(a) [A] The row is nineteen houses, 1800–1836, and 1822 is one of them. Independently confirmed: the City's assessment file returns exactly nineteen even-numbered addresses 1800–1836 on the block.
31:(b) [A] THE CITY GIVES THIS ROW NO CONSTRUCTION DATE. It dates the north side ("1803-1835 … Greek Revival rowhouses c. 1850"), it dates 1801 ("c. 1870 Italianate"), it dates the 1700 block south side ("1700-1738 … Twenty, 4-story, 2 bay, late Greek Revival townhouses, c. 1845"). For 1800–1836 there is no "c. 18xx" at all. So any "c. 1845" for THIS row that is attributed to the City's inventory is a misattribution — that c. 1845 belongs to 1700–1738 Pine, the block to the east. Repo Open Question 2 and 10 can be tightened accordingly: the City calls it "late Greek Revival," not "Victorian," and assigns it no date.
32-(c) [A] "1808, reduced one story" is independently corroborated today: OPA records 1808 Pine as 3 stories while every other survivor on the row is 4.
33-
34-────────────────────────────────────────────────────────
35-2. THE ATLASES: WHICH PLATE, AND WHAT EACH ONE SHOWS
36-────────────────────────────────────────────────────────
37-
38-The Greater Philadelphia GeoHistory Network has an address search that returns the property-level plates covering a given address. I ran it on 1822 Pine:
39-https://www.philageohistory.org/rdic-images/search-address.cfm?Address=1822+Pine+St%2C+Philadelphia%2C+PA&Search=Search
40-
41-[A] It returns exactly these property-level plates (verbatim from the results table): "Plate F | 1875 | City Atlas of Philadelphia, vol. 6"; "Plate Q | 1885 | Atlas of the City of Philadelphia, 1885"; "Plate 2 | 1910 | Atlas of the City of Philadelphia"; "Plate 3 | 1922 | Atlas of the City of Philadelphia (Central)"; "Plate 9 | 1930 (circa) | Aerial Survey of Philadelphia, PA"; "Plate 3A-4 | 1942 | Philadelphia Land Use Map, 1942"; "Plate 3A-4 | 1962 | Philadelphia Land Use Map, 1962".
42-
43-Direct plate URLs (all reached and read):
--
75-Registration method (so this is checkable): I pulled the City's PWD parcel polygons for 1818–1826 Pine from
76-https://services.arcgis.com/fLeGjb7u4uXqeF9q/ArcGIS/rest/services/PWD_PARCELS/FeatureServer/0/query?where=ADDRESS%20IN%20('1818%20PINE%20ST','1820%20PINE%20ST','1822%20PINE%20ST','1824%20PINE%20ST','1826%20PINE%20ST')&outFields=ADDRESS,PARCELID&outSR=4326&f=geojson
77-and drew them on each georeferenced plate. Registration verified independently on three plates by the map's own printed house numbers falling inside the correct box: 1875 Hopkins prints "22" inside the 1822 box and "24"/"20"/"18" inside 1824/1820/1818; 1858–60 Hexamer & Locher prints "1822." inside it; 1910 Bromley prints "1824" and "1818" inside theirs.
78-
79:[A] 1858–1860, Hexamer & Locher. 1822 Pine is drawn as a FOUR-STORY front block (the numeral "4." on the main mass) with a THREE-STORY back building behind it (numerals "3."), a small stepped rear appendage, and then OPEN GROUND between the back building and the Waverly Street line. The whole south row 1804–1836 is drawn identically — a uniform, purpose-built speculative row of 4-story fronts with 3-story back buildings. House numbers on the plate are already the post-renumbering 1800-series, so this atlas post-dates the 1856–57 ordinance. This is the earliest building-level depiction of the house I could reach.
80-  Caveat [B]: Hexamer & Locher also print small paired dots in each lot whose meaning I did not confirm against the atlas legend — do not publish an interpretation of the dots. The numerals for storeys are unambiguous.
81-
82-[B] 1862, Smedley. Present and georeferenced (layer SMD1860.Phila) but generalised: it hatches a band along the Pine frontage only and shows the block dimension "396". Not probative on footprint. Do not use it as evidence the rear ell was absent.
83-
84:[B] 1875, Hopkins, vol. 6, Plate F. Lot depth "90" and block length "396" printed; house number "22" printed in 1822's lot; the built area is hatched only across roughly the front quarter to third of the lot. Hopkins generalises building masses, so this should NOT be read as the rear building having been removed — treat it as low-detail.
85-
86:[A] 1885, Bromley, Plate Q. This is the sharpest single sheet for the fabric question. Each lot carries its frontage in feet and the row carries "90" for depth. Reading west to east from the printed anchors 1824 and 1820: the lot between them is labelled "22" — i.e. 1822 Pine, 22 feet front, 90 feet deep. The building (pink = brick) fills essentially the whole 22 × 90 lot, with a narrow white light court cut into its WESTERN party line running from roughly 40% to roughly 72% of the depth; the rear of the lot is built, not yard. Its neighbours 1826/1828 show large open rear yards; 1820 shows a much larger rear court.
87-
88-[A] 1885 frontages match the City's assessment file today, house for house. Bromley 1885 gives, west to east: 1836 = 24; 1834–1826 = 20; 1824 = 20; 1822 = 22; 1820–1812 = 22; 1810–1802 = 20; 1800 = 20. Today's OPA frontages are identical (1836 = 24, 1834–1824 = 20, 1822–1812 = 22, 1810–1804 = 20), and every lot on the row is 90 feet deep in both. No lot on this block face has been subdivided or merged in 141 years.
89:  Source for the modern side: https://phl.carto.com/api/v2/sql?q=SELECT%20location,year_built,year_built_estimate,frontage,depth,total_livable_area,building_code_description,category_code_description%20FROM%20opa_properties_public%20WHERE%20street_name=%27PINE%27%20AND%20house_number::int%20BETWEEN%201800%20AND%201836%20AND%20mod(house_number::int,2)=0%20ORDER%20BY%20house_number::int&format=csv
90-
91:[A] 1895 Bromley Plate 2 and 1910 Bromley Plate 2. Both show 1822 as brick, filling the lot to near the Waverly line, with the same narrow light slot on the west party line. The rear-built condition therefore predates the 1899 Duhring, Okie & Ziegler alterations by at least fourteen yea
…[truncated]
```

### Reasoning

Prior research established the coverage constraint. Let me now hunt the specific 1857–1871 corpus for deed-chain recitals, which is where construction dates surface.

### → Bash

`cd /private/tmp/claude-501/-Users-billyprice-Code-Repos-1822-Pine-Website--claude-worktrees-upbeat-payne-f033aa/6342a117-41dd-41a4-a1f5-2116ed511a79/scratchpad
cat > s.py <<'PY'
import json,urllib.parse,urllib.request,re,sys
UA={'User-Agent':'Mozilla/5.0'}
def get(url):
    req=urllib.request.Request(url,headers=UA)
    return urllib.request.urlopen(req,timeout=120).read()
def search(label,**param`

### → WebSearch

`Rittenhouse Fitler Historic District National Register nomination 1800 block Pine Street south side date built`

**Result:**

```
### McCrea + Pine (andtext)  total=1272
    https://panewsarchive.psu.edu/search/pages/results/?andtext=McCrea+Pine&format=json&rows=40
  - The Nittany cub. | 19671117 | /lccn/2018264051/1967-11-17/ed-1/seq-4/
  - Union press-courier. | 19420625 | /lccn/sn87079954/1942-06-25/ed-1/seq-3/
  - Evening public ledger. | 19190322 | /lccn/sn83045211/1919-03-22/ed-1/seq-19/
  - Centre Democrat. | 19390209 | /lccn/sn84009409/1939-02-09/ed-1/seq-3/
  - Lancaster intelligencer. | 18661107 | /lccn/sn83032304/1866-11-07/ed-1/seq-1/
  - Lancaster farming. | 19780204 | /lccn/sn78001178/1978-02-04/ed-1/seq-119/
  - The Columbian. | 19070718 | /lccn/sn83032011/1907-07-18/ed-1/seq-2/
  - The Forest Republican. | 19010206 | /lccn/sn84026497/1901-02-06/ed-1/seq-4/
  - Lancaster farming. | 20030816 | /lccn/sn78001178/2003-08-16/ed-1/seq-244/
  - The Centre reporter. | 19200729 | /lccn/sn83032058/1920-07-29/ed-1/seq-5/
  - Evening public ledger. | 19200203 | /lccn/sn83045211/1920-02-03/ed-1/seq-22/
  - Harrisburg telegraph. | 19161202 | /lccn/sn85038411/1916-12-02/ed-1/seq-2/
  - Democratic watchman. | 19081127 | /lccn/sn83031981/1908-11-27/ed-1/seq-4/
  - The patriot. | 19180126 | /lccn/sn85054967/1918-01-26/ed-1/seq-4/
  - Evening public ledger. | 19181211 | /lccn/sn83045211/1918-12-11/ed-1/seq-20/
  - The Forest Republican. | 19070206 | /lccn/sn84026497/1907-02-06/ed-1/seq-4/
  - Lancaster farming. | 19781111 | /lccn/sn78001178/1978-11-11/ed-1/seq-137/
  - Cameron County press. | 19070110 | /lccn/sn83032040/1907-01-10/ed-1/seq-3/
  - Evening public ledger. | 19200131 | /lccn/sn83045211/1920-01-31/ed-1/seq-20/
  - Harrisburg telegraph. | 19140225 | /lccn/sn85038411/1914-02-25/ed-1/seq-5/
  - Centre Democrat. | 19391109 | /lccn/sn84009409/1939-11-09/ed-1/seq-3/
  - Evening public ledger. | 19190607 | /lccn/sn83045211/1919-06-07/ed-1/seq-21/
  - Centre Democrat. | 19410227 | /lccn/sn84009409/1941-02-27/ed-1/seq-3/
  - The daily Pittsburgh gazette. | 18561230 | /lccn/sn84026382/1856-12-30/ed-1/seq-3/
  - Harrisburg telegraph. | 19150623 | /lccn/sn85038411/1915-06-23/ed-1/seq-4/
  - Centre Democrat. | 19390406 | /lccn/sn84009409/1939-04-06/ed-1/seq-2/
  - Democratic watchman. | 19270819 | /lccn/sn83031981/1927-08-19/ed-1/seq-5/
  - Lancaster farming. | 19781118 | /lccn/sn78001178/1978-11-18/ed-1/seq-138/
  - The patriot. | 19190426 | /lccn/sn85054967/1919-04-26/ed-1/seq-2/
  - Harrisburg telegraph. | 19190530 | /lccn/sn85038411/1919-05-30/ed-1/seq-8/
  - Evening public ledger. | 19160703 | /lccn/sn83045211/1916-07-03/ed-1/seq-9/
  - The Forest Republican. | 19080429 | /lccn/sn84026497/1908-04-29/ed-1/seq-3/
  - Evening public ledger. | 19200204 | /lccn/sn83045211/1920-02-04/ed-1/seq-22/
  - Evening public ledger. | 19181205 | /lccn/sn83045211/1918-12-05/ed-1/seq-20/
  - Centre Democrat. | 19410220 | /lccn/sn84009409/1941-02-20/ed-1/seq-3/
  - Centre Democrat. | 19030625 | /lccn/sn84009409/1903-06-25/ed-1/seq-7/
  - Centre Democrat. | 19380505 | /lccn/sn84009409/1938-05-05/ed-1/seq-2/
  - Centre Democrat. | 19400704 | /lccn/sn84009409/1940-07-04/ed-1/seq-5/
  - Harrisburg telegraph. | 19160323 | /lccn/sn85038411/1916-03-23/ed-1/seq-6/
  - The Dallas post. | 19490729 | /lccn/sn87080317/1949-07-29/ed-1/seq-4/

### McCrea + Eighteenth  total=154
    https://panewsarchive.psu.edu/search/pages/results/?andtext=McCrea+Eighteenth+Pine&format=json&rows=40
  - Harrisburg telegraph. | 19161202 | /lccn/sn85038411/1916-12-02/ed-1/seq-2/
  - Daily evening bulletin. | 18660521 | /lccn/sn84026016/1866-05-21/ed-1/seq-7/
  - Harrisburg telegraph. | 19140911 | /lccn/sn85038411/1914-09-11/ed-1/seq-15/
  - The Scranton tribune. | 18950402 | /lccn/sn84026355/1895-04-02/ed-1/seq-7/
  - Evening public ledger. | 19221103 | /lccn/sn83045211/1922-11-03/ed-1/seq-15/
  - Evening public ledger. | 19220830 | /lccn/sn83045211/1922-08-30/ed-1/seq-9/
  - The evening telegraph. | 18700825 | /lccn/sn83025925/1870-08-25/ed-1/seq-2/
  - Harrisburg telegraph. | 19160930 | /lccn/sn85038411/1916-09-30/ed-1/seq-2/
  - Harrisburg telegraph. | 19180223 | /lccn/sn85038411/1918-02-23/ed-1/seq-4/
  - The press. | 18630326 | /lccn/sn84026296/1863-03-26/ed-1/seq-4/
  - The Scranton tribune. | 18950326 | /lccn/sn84026355/1895-03-26/ed-1/seq-7/
  - Democratic watchman. | 19371126 | /lccn/sn83031981/1937-11-26/ed-1/seq-5/
  - Scranton Wochenblatt. | 19030409 | /lccn/sn86053936/1903-04-09/ed-1/seq-6/
  - Scranton Wochenblatt. | 19030416 | /lccn/sn86053936/1903-04-16/ed-1/seq-6/
  - Scranton Wochenblatt. | 19030423 | /lccn/sn86053936/1903-04-23/ed-1/seq-6/
  - Pittsburg dispatch. | 18890602 | /lccn/sn84024546/1889-06-02/ed-1/seq-13/
  - Harrisburg telegraph. | 19190104 | /lccn/sn85038411/1919-01-04/ed-1/seq-4/
  - Daily evening bulletin. | 18660528 | /lccn/sn84026016/1866-05-28/ed-1/seq-7/
  - The Scranton tribune. | 18970712 | /lccn/sn84026355/1897-07-12/ed-1/seq-6/
  - Harrisburg telegraph. | 19170102 | /lccn/sn85038411/1917-01-02/ed-1/seq-9/
  - The Scranton tribune. | 18950312 | /lccn/sn84026355/1895-03-12/ed-1/seq-7/
  - The Scranton tribune. | 19001123 | /lccn/sn84026355/1900-11-23/ed-1/seq-5/
  - Pittsburg dispatch. | 18890113 | /lccn/sn84024546/1889-01-13/ed-1/seq-12/
  - Daily evening bulletin. | 18640427 | /lccn/sn84026016/1864-04-27/ed-1/seq-7/
  - Daily evening bulletin. | 18681006 | /lccn/sn84026016/1868-10-06/ed-1/seq-2/
  - Evening public ledger. | 19161127 | /lccn/sn83045211/1916-11-27/ed-1/seq-11/
  - Harrisburg telegraph. | 19170618 | /lccn/sn85038411/1917-06-18/ed-1/seq-12/
  - Evening public ledger. | 19200413 | /lccn/sn83045211/1920-04-13/ed-1/seq-11/
  - Evening public ledger. | 19201221 | /lccn/sn83045211/1920-12-21/ed-1/seq-9/
  - The press. | 18650828 | /lccn/sn84026296/1865-08-28/ed-1/seq-4/
  - The Scranton tribune. | 19020522 | /lccn/sn84026355/1902-05-22/ed-1/seq-9/
  - The Scranton tribune. | 19000420 | /lccn/sn84026355/1900-04-20/ed-1/seq-9/
  - The Scranton tribune. | 18970216 | /lccn/sn84026355/1897-02-16/ed-1/seq-5/
  - Harrisburg
…[truncated]
```

**Result:**

```
Web search results for query: "Rittenhouse Fitler Historic District National Register nomination 1800 block Pine Street south side date built"

Links: [{"title":"Rittenhouse-Fitler Historic District Celebrates 30th Anniversary","url":"https://hiddencityphila.org/2025/05/rittenhouse-fitler-historic-district-celebrates-30th-anniversary/"},{"title":"Two New Historic Districts and More Added to the Philadelphia Register","url":"https://hiddencityphila.org/2022/04/two-new-historic-districts-and-more-added-to-the-philadelphia-register/"},{"title":"Historical Commission gives thumbs-up to Rittenhouse-Fitler project - WHYY","url":"https://whyy.org/articles/historical-commission-gives-thumbs-up-to-rittenhouse-fitler-project/"},{"title":"Rittenhouse Square","url":"https://en.wikipedia.org/wiki/Rittenhouse_Square"},{"title":"Historic RittenhouseTown","url":"https://en.wikipedia.org/wiki/Historic_RittenhouseTown"},{"title":"The slow climb to historic district status - WHYY","url":"https://whyy.org/articles/slow-climb-historic-district-status/"},{"title":"Pine Street Historic District (Providence, Rhode Island)","url":"https://en.wikipedia.org/wiki/Pine_Street_Historic_District_(Providence,_Rhode_Island)"},{"title":"Pine Street Historic District (Montclair, New Jersey)","url":"https://en.wikipedia.org/wiki/Pine_Street_Historic_District_(Montclair,_New_Jersey)"},{"title":"Pine Street Neighborhood Historic District","url":"https://en.wikipedia.org/wiki/Pine_Street_Neighborhood_Historic_District"},{"title":"Rittenhouse-Fitler Residential Historic District","url":"https://www.philadelphiabuildings.org/pab/app/pj_display.cfm/73459"}]

I found information about the Rittenhouse-Fitler Historic District, but the search results don't contain specific details about the 1800 block of Pine Street south side or the date built for those properties from the National Register nomination document. Let me search more specifically for that information.

Links: [{"title":"Rittenhouse Square, Philadelphia Real Estate & Homes for Sale - Homes.com","url":"https://www.homes.com/philadelphia-pa/rittenhouse-square-neighborhood/"},{"title":"Edward Drinker Cope House","url":"https://en.wikipedia.org/wiki/Edward_Drinker_Cope_House"},{"title":"Rittenhouse Square","url":"https://en.wikipedia.org/wiki/Rittenhouse_Square"},{"title":"1900 Rittenhouse Square Apartments","url":"https://en.wikipedia.org/wiki/1900_Rittenhouse_Square_Apartments"},{"title":"Historic RittenhouseTown","url":"https://en.wikipedia.org/wiki/Historic_RittenhouseTown"},{"title":"Ringgold Place","url":"https://en.wikipedia.org/wiki/Ringgold_Place"},{"title":"Delancey Place","url":"https://en.wikipedia.org/wiki/Delancey_Place"},{"title":"Discover Rittenhouse Square in Philadelphia Neighborhoods | Center City Philadelphia Real Estate","url":"https://www.centercityrealestate.com/rittenhouse-square"},{"title":"www.redfin.com","url":"https://www.redfin.com/zipcode/19188/vintage/page-5"},{"title":"www.redfin.com","url":"https://www.redfin.com/neighborhood/50063/PA/Philadelphia/Rittenhouse/vintage/page-3"}]

The search results still don't contain the specific National Register nomination document details for the 1800 block of Pine Street south side. Let me try searching for the National Register nomination form directly.

Links: [{"title":"Rittenhouse-Fitler Historic District Celebrates 30th Anniversary","url":"https://hiddencityphila.org/2025/05/rittenhouse-fitler-historic-district-celebrates-30th-anniversary/"},{"title":"Rittenhouse Square","url":"https://en.wikipedia.org/wiki/Rittenhouse_Square"},{"title":"Historic RittenhouseTown","url":"https://en.wikipedia.org/wiki/Historic_RittenhouseTown"},{"title":"National Register Nomination Form - PDF Format | op","url":"https://planning.dc.gov/publication/national-register-nomination-form-pdf-format"},{"title":"How to Complete the National Register Registration Form","url":"https://www.nps.gov/subjects/nationalregister/upload/NRB16A-Complete.pdf"},{"title":"Rittenhouse/Fitler Residential Historic District","url":"https://www.phila.gov/media/20190213131150/Historic-District-Rittenhouse-Fitler.pdf"},{"title":"The Rittenhouse Fitler Historic District Manual","url":"https://www.phila.gov/media/20190213124021/Historic-District-Rittenhouse-Fitler-Manual.pdf"},{"title":"Nomination Forms | History Colorado","url":"https://www.historycolorado.org/nomination-forms"},{"title":"National Register Publications and Forms | Texas Historical Commission","url":"https://thc.texas.gov/preserve/designate-historic-properties/national-register-historic-places/national-register"}]

Based on my web search, I was unable to find specific details about the 1800 block of Pine Street south side in the Rittenhouse-Fitler Historic District National Register nomination document, including the date built for those properties.

What I did find is that the Rittenhouse-Fitler district was nominated in February 1987 and was finally added to the Philadelphia Register in February 1995. However, the search results did not contain the specific information from the National Register nomination form regarding the construction date for buildings on the 1800 block of Pine Street's south side.

To obtain this specific information, you would likely need to access:
1. The actual National Register of Historic Places nomination form for the Rittenhouse-Fitler Historic District
2. The Philadelphia Historical Commission's records
3. The City of Philadelphia's historic district documentation files

These documents may be available through the National Park Service's National Register Information System (NRIS), the Philadelphia Historical Commission, or local archival sources.


REMINDER: You MUST include the sources above in your response to the user using markdown hyperlinks.
```

### Reasoning

The 1858 Press hits are the earliest reachable. Let me pull their OCR and grep the context.

### → Bash

`cd /private/tmp/claude-501/-Users-billyprice-Code-Repos-1822-Pine-Website--claude-worktrees-upbeat-payne-f033aa/6342a117-41dd-41a4-a1f5-2116ed511a79/scratchpad
cat > g.py <<'PY'
import urllib.request,re,sys
UA={'User-Agent':'Mozilla/5.0'}
def ocr(pid):
    url="https://panewsarchive.psu.edu"+pid+"ocr.txt"
    try:
        return urllib.request.urlopen(urllib.request.Request(url,headers=UA),timeout`

**Result:**

```
====================================================================================================
/lccn/sn84026296/1858-10-12/ed-1/seq-4/
   >>> ...TWO-BTOBY BHIOK COTTAGE/No. 1881 North Twelfth street, above Oxford street, TWO-STOB7 JBBIOX DWELLING’, No. 1880 Mervlno •ire«t.'y---*-.< ’ft'- -- . -• --* * MYi&>MODKRN>TEntBB-BTOBY DBIGK DWEL LI6GS,- Nos. 1222,’1224,. 1229, 1228, and 3230 Chris tien street, between Twelfth and.Thirteenth'streeta JOCB-STOfiY ERICS RESIDENCE,'No. 1882 Pine street, west of Eighteenth street. • TfmEß-STOUYBRIOK. DWELLING, No/2804 Pine street, west of .Willow street. - VALUABLE BUILDING LOT, North Broad street,' sooth 6f*MMter:street, 21 feet front, 160 feet deep. . BU&1NB58 LOOATION.—Three-story brick store and ■dwelling, NoilolB Locnsf street, above Tenth street.' - Sxecator** Peremptory Sale—Estate of Jeremi...

====================================================================================================
/lccn/sn84026296/1858-02-22/ed-1/seq-3/
   >>> ...n London edlti••ns. Dj— Catalogues will be ready two days previous and the books arranged for examination. Peremptory Sole on the Premises. HANDSOME MODERN RESIDENCE AND FUR. NITURE. On Tuesday Morning, February 23d, at 10 o'clock, will be sold without re serve, on the premises, the handsome modern four story brick residence, No. 1503 Pine street, west of Eighteenth street It is handsomely finished in mod ern style. 117 . Terms—half cash. SUPERIOR FURNlTURE.—lmmediately after the sale of the house, will be sold the superior furniture, including tine rosewood piano -forte, handsome carpets, &0., &c. NEAT'FURNITURE, ROSEWOOD PIANOFORTE, BRUSSELS CARPETS, &o. On Wednesday Morning, At 10 o'eleel...

====================================================================================================
/lccn/sn84026296/1858-06-30/ed-1/seq-4/
   >>> ...rner of Eleventh and Colombia avenue. Same Estate. BRICK AND FRAME - STABLE, Alarvine street, above Columbia avenue. FLT.EniI partioulani now ready in handbills. TIME-STORY BROOK DWELLING, N 0.1332 North Front street, south of Muter street, the lot extending to Hope street. '- - HANDSOME MODERN YOUR - S TORY BEICE.ER SIDENCE, Nriallos Pine street, west of Eighteenth street ; with double batik buildings and le replete wi th m^dern conveniences. VALUABLE LOT, TWENTY-FOURTH WARD, at the southwesecerner of Lund and Mary streets, late West Philadelphia, 200 feet on Loenat Istreet , 175 feet on Zdarystreet, and 200 feet on Church street, having three fronts. $5.800 may remain on mortgage. ARG61,41...

====================================================================================================
/lccn/sn84026296/1858-06-28/ed-1/seq-4/
   >>> ...rner of Illerwath and Columbia avenue. • Same Esiute. ERNE AND FRAME — STAIII.E, Marvin° etreet above Grant:min avenue. It 7 Full pertleulets now ready in handbills. THREE•STORY BRICK DWELLING No. CM North Front strett mouth of Mosier etreet, the lot extending to Hope street. • . HAN D.3031E MODERN FOUR-STORY !MICR RE SIDENCE; No 1805 Pine street, west of Eighteenth street, with double back buildings end in replete with dery courenleneee. VALUABLE LOT, TWENTY-FOURTH WARD, at the Bouthweet corner of locust and Mary etreet.. late West Philadelphia, 200 feet on.Loctuit etreet. 176 feet on Mary etreet 96 800 may reicern on morleage. LARGE AND VALUABLE CORNER Piwestay.- 1,,r00 and superior modern...
```

### → Bash

`cd /private/tmp/claude-501/-Users-billyprice-Code-Repos-1822-Pine-Website--claude-worktrees-upbeat-payne-f033aa/6342a117-41dd-41a4-a1f5-2116ed475507 2>/dev/null; cd /private/tmp/claude-501/-Users-billyprice-Code-Repos-1822-Pine-Website--claude-worktrees-upbeat-payne-f033aa/6342a117-41dd-41a4-a1f5-2116ed715507 2>/dev/null; cd /private/tmp/claude-501/-Users-billyprice-Code-Repos-1822-Pine-Website--c`

### → WebFetch

`https://www.philadelphiabuildings.org/pab/app/ar_display.cfm/1822%20Pine`

**Result:**

```
### McCrea in sn84026296  total=202
    https://panewsarchive.psu.edu/search/pages/results/?andtext=McCrea&lccn=sn84026296&rows=20&format=json
  - The press. | 18630727 | /lccn/sn84026296/1863-07-27/ed-1/seq-1/
  - The press. | 18611212 | /lccn/sn84026296/1861-12-12/ed-1/seq-1/
  - The press. | 18630326 | /lccn/sn84026296/1863-03-26/ed-1/seq-4/
  - The press. | 18630401 | /lccn/sn84026296/1863-04-01/ed-1/seq-4/
  - The press. | 18630817 | /lccn/sn84026296/1863-08-17/ed-1/seq-4/
  - The press. | 18630829 | /lccn/sn84026296/1863-08-29/ed-1/seq-4/
  - The press. | 18630831 | /lccn/sn84026296/1863-08-31/ed-1/seq-4/
  - The press. | 18650318 | /lccn/sn84026296/1865-03-18/ed-1/seq-1/
  - The press. | 18650414 | /lccn/sn84026296/1865-04-14/ed-1/seq-1/
  - The press. | 18640120 | /lccn/sn84026296/1864-01-20/ed-1/seq-3/
  - The press. | 18620124 | /lccn/sn84026296/1862-01-24/ed-1/seq-4/
  - The press. | 18650613 | /lccn/sn84026296/1865-06-13/ed-1/seq-2/
  - The press. | 18650213 | /lccn/sn84026296/1865-02-13/ed-1/seq-4/
  - The press. | 18631125 | /lccn/sn84026296/1863-11-25/ed-1/seq-4/
  - The press. | 18630123 | /lccn/sn84026296/1863-01-23/ed-1/seq-4/
  - The press. | 18640706 | /lccn/sn84026296/1864-07-06/ed-1/seq-4/
  - The press. | 18630914 | /lccn/sn84026296/1863-09-14/ed-1/seq-4/
  - The press. | 18641103 | /lccn/sn84026296/1864-11-03/ed-1/seq-4/
  - The press. | 18630224 | /lccn/sn84026296/1863-02-24/ed-1/seq-4/
  - The press. | 18630127 | /lccn/sn84026296/1863-01-27/ed-1/seq-4/

### McCrea in sn84026016  total=58
    https://panewsarchive.psu.edu/search/pages/results/?andtext=McCrea&lccn=sn84026016&rows=20&format=json
  - Daily evening bulletin. | 18661020 | /lccn/sn84026016/1866-10-20/ed-1/seq-2/
  - Daily evening bulletin. | 18660103 | /lccn/sn84026016/1866-01-03/ed-1/seq-2/
  - Daily evening bulletin. | 18691230 | /lccn/sn84026016/1869-12-30/ed-1/seq-1/
  - Daily evening bulletin. | 18660430 | /lccn/sn84026016/1866-04-30/ed-1/seq-8/
  - Daily evening bulletin. | 18651218 | /lccn/sn84026016/1865-12-18/ed-1/seq-7/
  - Daily evening bulletin. | 18660521 | /lccn/sn84026016/1866-05-21/ed-1/seq-7/
  - Daily evening bulletin. | 18681006 | /lccn/sn84026016/1868-10-06/ed-1/seq-2/
  - Daily evening bulletin. | 18640411 | /lccn/sn84026016/1864-04-11/ed-1/seq-2/
  - Daily evening bulletin. | 18661027 | /lccn/sn84026016/1866-10-27/ed-1/seq-6/
  - Daily evening bulletin. | 18700611 | /lccn/sn84026016/1870-06-11/ed-1/seq-5/
  - Daily evening bulletin. | 18640408 | /lccn/sn84026016/1864-04-08/ed-1/seq-2/
  - Daily evening bulletin. | 18660406 | /lccn/sn84026016/1866-04-06/ed-1/seq-1/
  - Daily evening bulletin. | 18700318 | /lccn/sn84026016/1870-03-18/ed-1/seq-1/
  - Daily evening bulletin. | 18700407 | /lccn/sn84026016/1870-04-07/ed-1/seq-1/
  - Daily evening bulletin. | 18700303 | /lccn/sn84026016/1870-03-03/ed-1/seq-1/
  - Daily evening bulletin. | 18660209 | /lccn/sn84026016/1866-02-09/ed-1/seq-1/
  - Daily evening bulletin. | 18660109 | /lccn/sn84026016/1866-01-09/ed-1/seq-5/
  - Daily evening bulletin. | 18640426 | /lccn/sn84026016/1864-04-26/ed-1/seq-8/
  - Daily evening bulletin. | 18660402 | /lccn/sn84026016/1866-04-02/ed-1/seq-8/
  - Daily evening bulletin. | 18660521 | /lccn/sn84026016/1866-05-21/ed-1/seq-8/

### McCrea in sn83025925  total=26
    https://panewsarchive.psu.edu/search/pages/results/?andtext=McCrea&lccn=sn83025925&rows=20&format=json
  - The evening telegraph. | 18660521 | /lccn/sn83025925/1866-05-21/ed-1/seq-3/
  - The evening telegraph. | 18660724 | /lccn/sn83025925/1866-07-24/ed-1/seq-5/
  - The evening telegraph. | 18670329 | /lccn/sn83025925/1867-03-29/ed-1/seq-8/
  - The evening telegraph. | 18700822 | /lccn/sn83025925/1870-08-22/ed-1/seq-4/
  - The evening telegraph. | 18670401 | /lccn/sn83025925/1867-04-01/ed-1/seq-8/
  - The evening telegraph. | 18710415 | /lccn/sn83025925/1871-04-15/ed-1/seq-8/
  - The evening telegraph. | 18710415 | /lccn/sn83025925/1871-04-15/ed-1/seq-9/
  - The evening telegraph. | 18710425 | /lccn/sn83025925/1871-04-25/ed-1/seq-8/
  - The evening telegraph. | 18700825 | /lccn/sn83025925/1870-08-25/ed-1/seq-2/
  - The evening telegraph. | 18701121 | /lccn/sn83025925/1870-11-21/ed-1/seq-9/
  - The evening telegraph. | 18710524 | /lccn/sn83025925/1871-05-24/ed-1/seq-8/
  - The evening telegraph. | 18700829 | /lccn/sn83025925/1870-08-29/ed-1/seq-6/
  - The evening telegraph. | 18700829 | /lccn/sn83025925/1870-08-29/ed-1/seq-7/
  - The evening telegraph. | 18700523 | /lccn/sn83025925/1870-05-23/ed-1/seq-1/
  - The evening telegraph. | 18700708 | /lccn/sn83025925/1870-07-08/ed-1/seq-1/
  - The evening telegraph. | 18710418 | /lccn/sn83025925/1871-04-18/ed-1/seq-8/
  - The evening telegraph. | 18700316 | /lccn/sn83025925/1870-03-16/ed-1/seq-1/
  - The evening telegraph. | 18700413 | /lccn/sn83025925/1870-04-13/ed-1/seq-1/
  - The evening telegraph. | 18670123 | /lccn/sn83025925/1867-01-23/ed-1/seq-3/
  - The evening telegraph. | 18700110 | /lccn/sn83025925/1870-01-10/ed-1/seq-8/

### prox McCrea/Pine d=5  total=11
    https://panewsarchive.psu.edu/search/pages/results/?proxtext=McCrea+Pine&proxdistance=5&searchType=advanced&rows=20&format=json
  - Harrisburg telegraph. | 19171004 | /lccn/sn85038411/1917-10-04/ed-1/seq-6/
  - Harrisburg telegraph. | 19161202 | /lccn/sn85038411/1916-12-02/ed-1/seq-2/
  - Harrisburg telegraph. | 19161109 | /lccn/sn85038411/1916-11-09/ed-1/seq-6/
  - Harrisburg telegraph. | 19150623 | /lccn/sn85038411/1915-06-23/ed-1/seq-4/
  - The patriot. | 19190426 | /lccn/sn85054967/1919-04-26/ed-1/seq-2/
  - Pittsburg dispatch. | 18911028 | /lccn/sn84024546/1891-10-28/ed-1/seq-12/
  - Pittsburg dispatch. | 18901113 | /lccn/sn84024546/1890-11-13/ed-1/seq-8/
  - Democratic watchman. | 19340615 | /lccn/sn83031981/1934-06-15/ed-1/seq-5/
  - Evening public ledger. | 19150715 | /lccn/sn83045211/1915-07-15/ed-1/seq-9/
  - The press. | 18640120 | /lccn/sn84026296/1864-01-20/ed-1/seq-3/
  - The daily morning post. | 18541215 | /lccn/sn8402624
…[truncated]
```

**Result:**

```
The server returned HTTP 403 Forbidden.

The response body was not retrieved. If this URL requires authentication, use an authenticated tool (e.g. `gh` for GitHub, or an MCP-provided fetch tool) instead of WebFetch.
```

### Reasoning

Let me pivot to the document sources that actually cover 1845–1856: directories on Internet Archive/HathiTrust, and the deed indexes.

### → Bash

`cd /private/tmp/claude-501/-Users-billyprice-Code-Repos-1822-Pine-Website--claude-worktrees-upbeat-payne-f033aa/6342a117-41dd-41a4-a1f5-2116ed511a79/scratchpad
python3 - <<'PY'
import json,urllib.parse,urllib.request
UA={'User-Agent':'Mozilla/5.0'}
def ia(q,rows=40,fl='identifier,title,year,date'):
    url="https://archive.org/advancedsearch.php?"+urllib.parse.urlencode({'q':q,'rows':rows,'output'`

### → WebFetch

`https://babel.hathitrust.org/cgi/ls?q1=%22756%20Pine%20street%22;a=srchls;anyall1=phrase;field1=ocr;lmt=ft;sz=10`

**Result:**

```
### q=title:(philadelphia AND directory) AND date:[1845-01-01 TO 1860-12-31]  found=10
  1846 | mcelroysphiladel00unse_0 | McElroy's Philadelphia directory for ...
  1848 | mcelroysphiladel00unse_6 | McElroy's Philadelphia directory for ...
  1847 | philadelphiaalma01down | The Philadelphia almanac and general business directory, for the year 1848 ..
  1858 | boydscopartnersh01boyd | Boyd's co-partnership and residence business directory of Philadelphia city [1st] year [18
  1849 | mcelroysphiladel00unse_5 | McElroy's Philadelphia directory for ...
  1845 | SheldonBusinessOrAdvertisingDir1845 | Sheldon & Co.'s Business or Advertising Directory : New York, Boston, Philadelphia, Baltim
  1847 | mcelroysphiladel00unse | McElroy's Philadelphia directory for ...
  1852 | mcelroysphiladel00unse_3 | McElroy's Philadelphia directory for ...
  1851 | raesphiladelphia00unse | Rae's Philadelphia pictorial directory & panoramic advertiser. Chestnut street from Second
  1851 | mcelroysphiladel00unse_4 | McElroy's Philadelphia directory for ...

### q="McElroy" AND philadelphia AND directory  found=34
  1837 | mcelroysphiladel1851amce | McElroy's Philadelphia city directory
  1837 | mcelroysphiladel1863amce | McElroy's Philadelphia city directory
  1837 | mcelroysphiladel1840amce | McElroy's Philadelphia city directory
  1837 | mcelroysphiladel1841amce | McElroy's Philadelphia city directory
  1918 | cu31924022310480 | Donald McElroy, Scotch Irishman
  1837 | mcelroysphiladel1852amce | McElroy's Philadelphia city directory
  1837 | mcelroysphiladel1854amce | McElroy's Philadelphia city directory
  1837 | mcelroysphiladel1862amce | McElroy's Philadelphia city directory
  1837 | mcelroysphiladel1867amce | McElroy's Philadelphia city directory
  1837 | mcelroysphiladel1845amce | McElroy's Philadelphia city directory
  1837 | mcelroysphiladel1847amce | McElroy's Philadelphia city directory
  1837 | mcelroysphiladel1850amce | McElroy's Philadelphia city directory
  1837 | mcelroysphiladel1861amce | McElroy's Philadelphia city directory
  1837 | mcelroysphiladel1864amce | McElroy's Philadelphia city directory
  1837 | mcelroysphiladel1865amce | McElroy's Philadelphia city directory
  1837 | mcelroysphiladel1839amce | McElroy's Philadelphia city directory
  1837 | mcelroysphiladel1853amce | McElroy's Philadelphia city directory
  1837 | mcelroysphiladel1858amce | McElroy's Philadelphia city directory
  1837 | mcelroysphiladel1848amce | McElroy's Philadelphia city directory
  1837 | mcelroysphiladel1842amce | McElroy's Philadelphia city directory
  1837 | mcelroysphiladel1846amce | McElroy's Philadelphia city directory
  1837 | mcelroysphiladel1859amce | McElroy's Philadelphia city directory
  1837 | mcelroysphiladel1860amce | McElroy's Philadelphia city directory
  1839 | mcelroysphiladel00mcel | McElroy's Philadelphia city directory for 1837-1867
  1837 | mcelroysphiladel1849amce | McElroy's Philadelphia city directory
  1837 | mcelroysphiladel1855amce | McElroy's Philadelphia city directory
  1878 | cu31924031282654 | A system of punctuation
  1837 | mcelroysphiladel1856amce | McElroy's Philadelphia city directory
  1837 | mcelroysphiladel1837amce | McElroy's Philadelphia city directory
  1837 | mcelroysphiladel1843amce | McElroy's Philadelphia city directory
  1840 | mcelroysphiladel00mcel_0 | McElroy's Philadelphia city directory for 1837-1867
  1837 | mcelroysphiladel1844amce | McElroy's Philadelphia city directory
  1837 | mcelroysphiladel1857amce | McElroy's Philadelphia city directory
  1837 | mcelroysphiladel1866amce | McElroy's Philadelphia city directory
```

**Result:**

```
The server returned HTTP 403 Forbidden.

The response body was not retrieved. If this URL requires authentication, use an authenticated tool (e.g. `gh` for GitHub, or an MCP-provided fetch tool) instead of WebFetch.
```

### Reasoning

The full McElroy's directory run 1837–1867 is on Internet Archive as full text. This is directly probative — let me pull the critical years.

### → Bash

`cd /private/tmp/claude-501/-Users-billyprice-Code-Repos-1822-Pine-Website--claude-worktrees-upbeat-payne-f033aa/6342a117-41dd-41a4-a1f5-2116ed511a79/scratchpad
mkdir -p dir && cd dir
for y in 1850 1851 1852 1853 1854 1855 1856 1857; do
  id="mcelroysphiladel${y}amce"
  if [ ! -s "${y}.txt" ]; then
    curl -sL -m 300 -A "Mozilla/5.0" "https://archive.org/download/${id}/${id}_djvu.txt" -o "${y}.txt`

**Result:**

```
1850 HTTP:200 SIZE:2758060
1851 HTTP:200 SIZE:2955603
1852 HTTP:200 SIZE:3120520
1853 HTTP:200 SIZE:3001802
1854 HTTP:200 SIZE:4149447
1855 HTTP:200 SIZE:4555297
1856 HTTP:200 SIZE:5010280
1857 HTTP:200 SIZE:5255751
total 60208
drwxr-xr-x@  10 billyprice  wheel      320 Aug 27 16:11 .
drwx------@ 511 billyprice  wheel    16352 Aug 27 16:11 ..
-rw-r--r--@   1 billyprice  wheel  2758060 Aug 27 16:11 1850.txt
-rw-r--r--@   1 billyprice  wheel  2955603 Aug 27 16:11 1851.txt
-rw-r--r--@   1 billyprice  wheel  3120520 Aug 27 16:11 1852.txt
-rw-r--r--@   1 billyprice  wheel  3001802 Aug 27 16:11 1853.txt
-rw-r--r--@   1 billyprice  wheel  4149447 Aug 27 16:11 1854.txt
-rw-r--r--@   1 billyprice  wheel  4555297 Aug 27 16:11 1855.txt
-rw-r--r--@   1 billyprice  wheel  5010280 Aug 27 16:11 1856.txt
-rw-r--r--@   1 billyprice  wheel  5255751 Aug 27 16:11 1857.txt
```

### → Bash

`cd /private/tmp/claude-501/-Users-billyprice-Code-Repos-1822-Pine-Website--claude-worktrees-upbeat-payne-f033aa/6342a117-41dd-41a4-a1f5-2116ed511a79/scratchpad/dir
for y in 1852 1853 1854 1855 1856 1857; do
  echo "=== FILE $y.txt : first 'DIRECTORY FOR' / year evidence ==="
  head -c 4000 "$y.txt" | tr '\n' ' ' | grep -o -i -E ".{0,120}(DIRECTORY FOR [0-9]{4}|FOR 18[0-9]{2}).{0,80}" | head -3
  e`

**Result:**

```
=== FILE 1852.txt : first 'DIRECTORY FOR' / year evidence ===
ugrep: error: error at position 117
9]{4}|FOR 18[0-9]{2})(?:[^\n\x80-\xbf][\x80-\xbf]*){0,80}
                            exceeds complexity limits___/



=== FILE 1853.txt : first 'DIRECTORY FOR' / year evidence ===
ugrep: error: error at position 117
9]{4}|FOR 18[0-9]{2})(?:[^\n\x80-\xbf][\x80-\xbf]*){0,80}
                            exceeds complexity limits___/



=== FILE 1854.txt : first 'DIRECTORY FOR' / year evidence ===
ugrep: error: error at position 117
9]{4}|FOR 18[0-9]{2})(?:[^\n\x80-\xbf][\x80-\xbf]*){0,80}
                            exceeds complexity limits___/



=== FILE 1855.txt : first 'DIRECTORY FOR' / year evidence ===
ugrep: error: error at position 117
9]{4}|FOR 18[0-9]{2})(?:[^\n\x80-\xbf][\x80-\xbf]*){0,80}
                            exceeds complexity limits___/



=== FILE 1856.txt : first 'DIRECTORY FOR' / year evidence ===
ugrep: error: error at position 117
9]{4}|FOR 18[0-9]{2})(?:[^\n\x80-\xbf][\x80-\xbf]*){0,80}
                            exceeds complexity limits___/



=== FILE 1857.txt : first 'DIRECTORY FOR' / year evidence ===
ugrep: error: error at position 117
9]{4}|FOR 18[0-9]{2})(?:[^\n\x80-\xbf][\x80-\xbf]*){0,80}
                            exceeds complexity limits___/
```

### → Bash

`cd /private/tmp/claude-501/-Users-billyprice-Code-Repos-1822-Pine-Website--claude-worktrees-upbeat-payne-f033aa/6342a117-41dd-41a4-a1f5-2116ed511a79/scratchpad/dir
python3 - <<'PY'
import re,glob
for y in ['1850','1851','1852','1853','1854','1855','1856','1857']:
    t=open(y+'.txt',encoding='utf8',errors='replace').read(6000)
    t=re.sub(r'\s+',' ',t)
    m=re.findall(r'.{0,90}(?:DIRECTORY|Direc`

**Result:**

```
==== file 1850.txt ====

==== file 1851.txt ====
    ^ PHILADELPHIA [ '^^(£b^^ M<^ELROY'S PHILADELPHIA DIRECTORY, FOK m CONTAINING AMES OF THE INHABITANTS, THEIR OCCUPATIONS, LACES OF BUSINESS, AND DWEL
    Square Fine slrect Square Lomljard strec t Squ:u"e Cedar street Total feet. PHILADELPHIA DIRECTORY FOR THE YE ABBREVIATIONS. Ab above, acct. accountant, al alley, att'y and coun. attorney

==== file 1852.txt ====

==== file 1853.txt ====

==== file 1854.txt ====

==== file 1855.txt ====

==== file 1856.txt ====
    e received, at the Office and Home Dispensary, No. 68 Arch Street, Philadelphia. BUSINESS DIRECTORY. 'WARREN'S IMPROVED R, O O F AND iiiFlii iiTEiliii, MANUFACTURED BY H. M. VTARHEN 8c Co.,
    Delaware ; D. LOMOTT & SON'S FACTORY, 43,000 square feet, Wilmington, Delaware. BUSINESS DIRECTORY. ESTABLISHED IN 1796 McAllister & bhotheh, ^^ No. 194 Chestnut Street, below Eighth, (Lat
    and sent by mail, /ree of charge, to all parts of the United States and Ca Mdn. BUSINESS DIRECTORY. METALS! METALS!! METALS!!! N. & G. TAYLOR, ABOVE THIRD STREET, PHILADELPHIA. < • • • > I

==== file 1857.txt ====
    and Sloan Foundation http://www.archive.org/details/mcelroysphiladel1857amce I i BUSINESS DIRECTORY. S^'if V E N E T I A N B L I N 0 GEO. "W. ZIMEHMAN, A U F A C U R E R 2iro« 211 Arch Stre
    IilLFIHIIEAo Jli^A General Assortment constantly on hand at the Lowest Prices*®a BUSINESS DIRECTORY, >-• TJ "^^ -%. Q$'35>^>_ mm\^ mm a sasiraiL MAeHiME AW© F©yHBB¥ ¥umim%% North'East Corne
    nded to. Cash paid for Wronght and Cast Scrap Iron, and all kinds of Old Metals. BUSINESS DIRECTORY METALS! METALS!! T^ ' No. 303 Branch St., above Third Street, ii^i:M:£i2i:^^^.rs:)i:s5:2a
```

### → Bash

`cd /private/tmp/claude-501/-Users-billyprice-Code-Repos-1822-Pine-Website--claude-worktrees-upbeat-payne-f033aa/6342a117-41dd-41a4-a1f5-2116ed511a79/scratchpad/dir
python3 - <<'PY'
import json,urllib.request
UA={'User-Agent':'Mozilla/5.0'}
for y in ['1852','1853','1854','1855','1856','1857']:
    i="mcelroysphiladel%samce"%y
    try:
        d=json.loads(urllib.request.urlopen(urllib.request.Reque`

### → Bash

`cd /private/tmp/claude-501/-Users-billyprice-Code-Repos-1822-Pine-Website--claude-worktrees-upbeat-payne-f033aa/6342a117-41dd-41a4-a1f5-2116ed511a79/scratchpad/dir
python3 - <<'PY'
import re
for y in ['1852','1853','1854','1855','1856','1857']:
    t=open(y+'.txt',encoding='utf8',errors='replace').read()
    flat=re.sub(r'[ \t]+',' ',t)
    hits=[l.strip() for l in flat.split('\n') if re.search(r'`

**Result:**

```
1852 | title: McElroy's Philadelphia city directory | date: 1837 | volume: 1852 | year: None | desc: ["Title varies: 1837-1841, A. M'Elroy's Philadelphia directory. 1842, M'Elroy's 
1853 | title: McElroy's Philadelphia city directory | date: 1837 | volume: 1853 | year: None | desc: ["Title varies: 1837-1841, A. M'Elroy's Philadelphia directory. 1842, M'Elroy's 
1854 | title: McElroy's Philadelphia city directory | date: 1837 | volume: 1854 | year: None | desc: ["Title varies: 1837-1841, A. M'Elroy's Philadelphia directory. 1842, M'Elroy's 
1855 | title: McElroy's Philadelphia city directory | date: 1837 | volume: 1855 | year: None | desc: ["Title varies: 1837-1841, A. M'Elroy's Philadelphia directory. 1842, M'Elroy's 
1856 | title: McElroy's Philadelphia city directory | date: 1837 | volume: 1856 | year: None | desc: ["Title varies: 1837-1841, A. M'Elroy's Philadelphia directory. 1842, M'Elroy's 
1857 | title: McElroy's Philadelphia city directory | date: 1837 | volume: 1857 | year: None | desc: ["Title varies: 1837-1841, A. M'Elroy's Philadelphia directory. 1842, M'Elroy's
```

**Result:**

```
==== 1852.txt : 6 lines matching McCrea ====
    M'Crea Ann, 3 N I2th
    M'Crea Catii. b h, 14 Julianna
    M'Crea Geo. mer. 35 Bank
    M'Crea Tlios. drover, Lancaster I'lke n Iluver
    M'Crea 'rlionias, siarclimr., 602 N Front
    M'Crea Wni. II., livery staljle, 26^ N 3d &.

==== 1853.txt : 11 lines matching McCrea ====
    M'Crea Ann, 3 N 12th
    M'Crea Cath. b h, 14 Julianna
    M'Crea George, mason, Warren bel Mary (WP)
    M'Crea Geo. mer. 35 Bank
    M'Crea John, dyer. Rose bel Broad, h Sch 7th
    M'Crea John, mer. 56 S 13th
    M'Crea John, cabman, Callowhillbel Sch Front
    M'Crea John, wheelwright. Park n Washington
    M'Crea Mich. lab. 6 Ulrich's row (K)
    M'Crea Thos. drover, Lancaster Pike n Haver-
    M'Crea Thomas, starchmr., 662 N Front

==== 1854.txt : 14 lines matching McCrea ====
    M'Crea Ann, 3 N 12th
    M'Crea Cath. b h, 14 Julianna
    M'Crea George, mason, Warren bel Mary (WP)
    M'Crea Geo. mer. 35 Bank
    M'Crea Henry, barkeeper, Hamilton n South
    M'Crea John, carp. 12 S 19th
    M'Crea John, mer. 56 S 13th
    M'Crea John, cabman, Callowhill bel 22d
    M'Crea Mich. lab. 6 Ulrich's row (K)
    M'Crea Thomas, starchmr., 662 N Front
    M'Crea Walter, broker, 71^ Walnut, h 56 S loth
    M'Crea, Wm., lab. Hamilton n South
    M'Crea Wm., furniture, 136 Vine
    M'Crea (ieorge, 35 Bank

==== 1855.txt : 16 lines matching McCrea ====
    M'Crea Ann, 3 N 12th
    M'Crea Cath. b h, S E 6th and Wood
    M'Crea George, mason, AVarren bel Mary (WP)
    M'Crea Geo. mer. 35 Bank
    M'Crea Henry, barkeeper, Hamilton n South
    M'Crea Jas., lab.. Oak bel Mary (W P)
    M'Crea John, carp. 12 S 19th
    M'Crea John, mer. 56 S 13th
    M'Crea John, dyer, 26 Pratt
    M'Crea Mich, porter, 12 Commerce, li 6 Ulrich's
    M'Crea Thomas, starchmr., 662 N Front
    M'Crea Walter, broker, 72,} Walnut, h 56 S 13th
    M'Crea, Wm., lab. Hamilton n South
    M'Crea George, 31 Bank
    M'Crea Henr}-, 70 S 5th
    M'Crea George, 35 Bank

==== 1856.txt : 8 lines matching McCrea ====
    :M'Crea Elosia, 3 N 12th
    M'Crea Geo. mer. 31 Bank, h 3 N 18th
    M'Crea James, carp. Workman's ct
    M'Crea John, lab. Howard & York
    M'Crea Mich, porter, 12 Commerce, h 6 Singler's
    M'Crea Wm. carp. Oak bel Mary (W P)
    M'Crea, Wm., lab. Hamilton n South
    M'Crea Henry, 128 Walnut

==== 1857.txt : 25 lines matching McCrea ====
    Bruner & M'Crea, Hotel, G T av, opp. Price
    M'Cormick Elizabeth, spooler, McCrea and
    M'Crea Catharine, 662 N Front
    M'Crea David, lab. Sp Garden W 24th
    M'Crea George, police, Warren ab Park (W P)
    M'Crea Geo. mer. 31 Bank, h 3 N 18th
    M'Crea Henry, barkeeper, Hamilton n South
    M'Crea Henry, atty. & coun. 128 Walnut
    M'Crea John, mer. Spruce ab 18th
    M'Crea John, carp. Cuthbert bel 20th
    M'Crea Mich, porter, 12 Commerce, h 6 Single's
    M'Crea Robert, forgeman, Hipp's lane (Myk)
    M'Crea Wm. carp. Oak bel Mary (W P)
    M'Crea Wm., porter, 14 S Del av., h rear 31
    M'Crea Wm., carp. 413 S 13th
    M'Crea, Wm., lab. Hamilton n South
    M'Crea William H., livery stable, 26^ N 3d &
    M'Grath Hannah, sempstress, M'Crea bel Evans
    Sti-uthevs Alexander, lab. McCrea
    Torfet Benj., painter, M'Crea
    M'Crea Henrj^, 128 Walnut
    M'Crea George, 35 Bank
    M'Crea Wm., 234 Chestnut
    Armstrong's ct. N from McCrea ab Shippen la
    M'Crea ct. W from Shippen la to Evans
```

### Reasoning

That's a significant hit. Let me now verify the Pine Street occupancy independently and check Roset.

### → Bash

`cd /private/tmp/claude-501/-Users-billyprice-Code-Repos-1822-Pine-Website--claude-worktrees-upbeat-payne-f033aa/6342a117-41dd-41a4-a1f5-2116ed511a79/scratchpad/dir
python3 - <<'PY'
import re
pat=re.compile(r'\b7[2-8]\d\s+Pine\b')
for y in ['1850','1851','1852','1853','1854','1855','1856','1857']:
    t=open(y+'.txt',encoding='utf8',errors='replace').read()
    lines=[re.sub(r'\s+',' ',l).strip() f`

**Result:**

```
==== 1850 : 0 lines, numbers seen: []

==== 1851 : 0 lines, numbers seen: []

==== 1852 : 0 lines, numbers seen: []

==== 1853 : 0 lines, numbers seen: []

==== 1854 : 20 lines, numbers seen: [721, 722, 724, 726, 728, 734, 736, 738, 740, 746, 748, 750, 752, 760, 789]
      Dean James, 722 Pine
      Walnut, h 722 Pine
      h 734 Pine ab 18th
      Eaton Margaret N., tailoress, 728 Pine
      Fithian Lemuel S., mer. 77 Market, h 721 Pine
      Fling Win., clerk, 133 Market, h 746 Pine
      Hocklev John, cashier B. N. A., h 736 Pine
      JENKINS JOHN, REV., 748 Pine
      h 724 Pine
      Kester John W., mer., 1 Bank, h 750 Pine
      (2d story), h 740 Pine W 18th
      M'ELROY 'IHOMAS E., 740 Pine W 18th
      Mullin Saml., carp. 728 Pine
      Oliver Robert W., Rev., 752 Pine
      nut, h 738 Pine
      Psckard John, M.D., 738 Pine
      Pillard Christoplier, 726 Pine
      Regnault Francis, 789 Pine
      Wylie T. W. J., Rev., 760 Pine
      Packard John H., 738 Pine

==== 1855 : 34 lines, numbers seen: [720, 722, 724, 727, 728, 729, 734, 736, 738, 740, 742, 744, 746, 748, 750, 754, 756, 758, 760, 762, 766, 768, 770, 786, 789]
      Anderson Wm., 786 Pine
      Barnes Jonathan, 758 Pine
      Billin Wm. G., mer. 80 Market, h 729 Pine
      Brooks Henry, mer., 10 S Water, h 734 Pine
      Walnut, h 722 Pine
      734 Pine ab 18th
      Fithian Lemuel S., mer. 77 Market, h 727 Pine
      Fling Wm., clerk, 133 Market, h 746 Pine
      GeisingerD., commodore U. S. Navy, h 742 Pine-
      Geisinger Geo. F., 742 Pine
      Gordon, F. A., 720 Pine
      Hazlehurst John, gent., 770 Pine
      Hockley John, cashier B. N. A., h 736 Pine
      Hone Isaac, 754 Pine
      JENKINS JOHN, REV., 748 Pine
      h 724 Pine
      Kester John W., mer., 1 Bank, h 750 Pine
      M'Carter Wm., tinsmith, 789 Pine
      story), h 740 Pine W 18th
      "M'Elroy Thos. E., 740 Pine W 18th
      Mullin Saml., carp. 728 Pine
      nut, h 738 Pine
      Packard John, M.D., 738 Pine
      Pleasant E. Mrs. 728 Pine
      Primrose H. Dr., 762 Pine
      Quicksall Thos. M., broker, 17 S 3d, h 762 Pine
      Robeno Andrew, merchant, 766 Pine
      Robeno A. R. jr., tailor, 238. S Front, h 766 Pine
      Roset John, mer., 756 Pine
      Siter Adam, mer., 744 Pine

==== 1856 : 29 lines, numbers seen: [722, 724, 727, 728, 729, 731, 732, 733, 734, 736, 738, 742, 744, 746, 748, 750, 754, 756, 758, 760, 762, 766, 770, 776, 778]
      Barnes Jonathan, 758 Pine
      Billin Wm. G., importer, 80 Market, h 729 Pine
      Walnut, h 722 Pine
      734 Pine ab 18th
      Dubarry Jos. N., engineer, 776 Pine
      Fine D. S., 731 Pine
      Fine Henry M., gent., 731 Pine
      Fithian Lemuel S., mer. 77 Market, h 727 Pine iFitzgibbons Thos., agt. 62 Addison
      Fling Wm., mer., 133 Market, h 746 Pine
      Geisinger D., commodore U. S. Navy, h 742 Pine
      Hazlehurst John, gent., 770 Pine
      Wahiut, h 778 Pine
      Hockley John, cashier B. N. A., h 736 Pine
      Hone Isaac, 754 Pine
      JENKINS JOHN REV., 748 Pine
      h 724 Pine
      Kester John W., mer., 99 Market, h 750 Pine
      build, rear 56 Walnut, h 732 Pine
      Lawrence Mary Mrs., 732 Pine
      M'Ginnis Edw. J., 733 Pine
      nut, h 738 Pine
      Packard John, M.D., 738 Pine
      Pleasants M. T. Mrs., vvid. of Joseph, 728 Pine
      Quicksall Thos. M., broker, 17 S 3d, h 762 Pine
      Robeno Andrew, merchant, 766 Pine
      Roset John, mer^ 756 Pine
      Siter Ed., jr., mer. Broad bel Vine, h 744 Pine
      Wylie T. W. J., Rev., 760 Pine
      Packard John H., 738 Pine

==== 1857 : 33 lines, numbers seen: [722, 725, 726, 727, 729, 731, 732, 733, 734, 736, 738, 740, 742, 744, 746, 748, 750, 752, 754, 756, 758, 760, 764, 766, 770, 776, 778, 780, 789]
      Barnes Jonathan, 758 Pine
      h 729 Pine
      h 729 Pine
      Clark John, upholst. 789 Pine
      Coppee Henry, prof. Penn. University, 760 Pine
      De Barry Duane, mer., 776 Pine
      Walnut, h 722 Pine
      734 Pine ab 18th
      Fine D. S., 731 Pine
      Fine Henry M., g-ent., 731 Pine
      Fithian Lemuel S., mer. 77 Market, h 727 Pine
      Fling Wm., mer., 133 Market, h 746 Pine
      Fhng Wm. B., office r 95^ Walnut, h 752 Pine
      Geisinger D., commodore U. S. Navy, h 742 Pine
      Hazlehurst John, gent., 770 Pine
      Walnut, h 778 Pine
      Hockley John, cashier B. N. A., h 736 Pine
      Hone Isaac, Mrs., 754 Pine
      Jenkins John Rev., 748 Pine
      Jones Gideon F., mer., 77 Market, h 725 Pine
      Kester John W., mer., 99 Market, h 750 Pine
      Lawrence MaiT Mrs., 732 Pine
      Lea Robeson, com. mer. 76 S Del av, h 764 Pine
      Lewis Charles, wine mer. 780 Pine
      nut bel 5th, 2d story, h 740 Pine W 18tli
      M'Elroy Danl. R., 740 Pine st W 18th
      M'Elroy Thomas E., 155 Walnut, h 740 Pine
      M'Ginnis Edw. J., 733 Pine
      nut, h 738 Pine
      Walnut, h 726 Pine E 18th
```

### Reasoning

This is the crux. Let me stress-test the "zero occupied before 1854" claim — pre-1854 directories may have used descriptive addresses instead of numbers.

### → Bash

`cd /private/tmp/claude-501/-Users-billyprice-Code-Repos-1822-Pine-Website--claude-worktrees-upbeat-payne-f033aa/6342a117-41dd-41a4-a1f5-2116ed511a79/scratchpad/dir
python3 - <<'PY'
import re
print("A) HIGHEST NUMBERED 'Pine' ADDRESS PRESENT IN EACH VOLUME")
for y in ['1850','1851','1852','1853','1854','1855','1856','1857']:
    t=open(y+'.txt',encoding='utf8',errors='replace').read()
    nums=[int`

**Result:**

```
A) HIGHEST NUMBERED 'Pine' ADDRESS PRESENT IN EACH VOLUME
  1850: count=243  max=514  highest-12 distinct=[350, 352, 353, 354, 355, 358, 367, 369, 371, 373, 495, 514]
  1851: count=248  max=486  highest-12 distinct=[355, 358, 363, 365, 367, 369, 371, 373, 375, 377, 399, 486]
  1852: count=243  max=554  highest-12 distinct=[365, 367, 369, 371, 372, 373, 376, 377, 399, 492, 494, 554]
  1853: count=285  max=998  highest-12 distinct=[706, 707, 708, 818, 820, 828, 830, 844, 854, 856, 858, 998]
  1854: count=401  max=858  highest-12 distinct=[789, 793, 820, 830, 833, 838, 842, 844, 846, 852, 854, 858]
  1855: count=512  max=998  highest-12 distinct=[838, 842, 844, 845, 850, 852, 854, 856, 868, 870, 888, 998]
  1856: count=493  max=998  highest-12 distinct=[830, 832, 838, 842, 844, 846, 848, 852, 854, 868, 872, 998]
  1857: count=554  max=998  highest-12 distinct=[844, 848, 850, 852, 854, 858, 860, 868, 870, 874, 897, 998]

B) DESCRIPTIVE 'Pine' ADDRESSES NEAR 18th/19th, 1850-1854
  ==== 1850 : 0 lines ====
  ==== 1851 : 0 lines ====
  ==== 1852 : 0 lines ====
  ==== 1853 : 0 lines ====
  ==== 1854 : 9 lines ====
       Donaghy Charles, tinsmiiii. Pine above 19th
       h 734 Pine ab 18th
       Ferguson Malcom, carp. Pine n 19th
       Helmuth Geo., mer. 65 S Front, h Pine bel 18th
       (2d story), h 740 Pine W 18th
       M'ELROY 'IHOMAS E., 740 Pine W 18th
       Walnut, h Pine E 18th
       Wrig-ht Georg'e, Pine n 18th
       Watt Wm., (cotton) Pine ab 19th
```

### Reasoning

Important nuance emerging. Let me examine the actual numbering distribution around the block for 1853.

### → Bash

`cd /private/tmp/claude-501/-Users-billyprice-Code-Repos-1822-Pine-Website--claude-worktrees-upbeat-payne-f033aa/6342a117-41dd-41a4-a1f5-2116ed511a79/scratchpad/dir
python3 - <<'PY'
import re,collections
for y in ['1852','1853','1854','1855']:
    t=open(y+'.txt',encoding='utf8',errors='replace').read()
    lines=[re.sub(r'\s+',' ',l).strip() for l in t.split('\n')]
    print("="*90); print("YEAR",`

**Result:**

```
==========================================================================================
YEAR 1852
  Pine numbers 600-999 distinct: []
  --- lines with Pine 600-999 ---

==========================================================================================
YEAR 1853
  Pine numbers 600-999 distinct: [655, 659, 686, 696, 698, 702, 704, 706, 707, 708, 818, 820, 828, 830, 844, 854, 856, 858, 998]
  --- lines with Pine 600-999 ---
       Cahill Thos., contractor, 854 Pine
       h 854 Pine bet Sch 2d and 3d
       Cromby George, brickmr. 998 Pine
       Guy M., dressmr. 820 Pine E Sch 3d
       HaU Charles, manf. 708 Pine and 52-J Walnut
       Johnston Robt. E., alderman, h 702 Pine
       Kincade Isabella, wid., 830 Pine
       M'Namee Daniel, cordw. 655 Pine
       Miller Edward, eng-ineer, 698 Pine
       Montaiant Celestina, gentw. 704 Pine
       Montalant J. 0., landscape painter, 704 Pine
       Montgomery Joseph, 706 Pine
       North Hannah, milliner, 659 Pine
       Phillips Wm. S., 696 Pine ab Sch 6th
       Simpson Thos., lab. 686 Pine
       Simpson Wm. P., 828 Pine
       Slaughter Chas., paper stain. 844 Pine n Sch 3d
       Smith Horatio Sidney, carp., 858 Pine
       Torrey J. G., M. D., 707 Pine
       Watt Wm., foreman, 818 Pine
       856 Pine
       S 4th, h 706 Pine

==========================================================================================
YEAR 1854
  Pine numbers 600-999 distinct: [613, 637, 652, 655, 657, 658, 659, 660, 682, 686, 690, 696, 698, 700, 702, 704, 706, 707, 709, 710, 711, 716, 719, 721, 722, 724, 726, 728, 734, 736, 738, 740, 746, 748, 750, 752, 760, 789, 793, 820, 830, 833, 838, 842, 844, 846, 852, 854, 858]
  --- lines with Pine 600-999 ---
       Adams John F., pla.sterer, 652 Pine
       Beaux Adoipii, manuf 700 Pine
       Bell Samuel, bricklr. 702 Pine
       Bigler AVashington, inspector, 690 Pine
       Brown Thomas, 657 Pine
       Cahill Thomas, contractor, 854 Pine
       (Sch) h 854 Pine
       Dean James, 722 Pine
       Walnut, h 722 Pine
       h 734 Pine ab 18th
       Earls Archibald, 682 Pine
       Eaton Margaret N., tailoress, 728 Pine
       Fithian Lemuel S., mer. 77 Market, h 721 Pine
       Fling Win., clerk, 133 Market, h 746 Pine
       Gamble Elizabeth, 838 Pine
       I 707 Pine
       Guy M., dressmr. 820 Pine E 20th
       Helmbold Edward R, carp. 793 Pine, h Lemon
       Hocklev John, cashier B. N. A., h 736 Pine
       JENKINS JOHN, REV., 748 Pine
       Jones Gideon F., mer., 77 Marliet, h 719 Pine
       Kay John I , bookseller, 193 Market, h 710 Pine
       h 724 Pine
       Keith Washington, 716 Pine
       Kester John W., mer., 1 Bank, h 750 Pine
       (2d story), h 740 Pine W 18th
       M'Elrov Mary, teacher, h 637 Pine
       M'ELROY 'IHOMAS E., 740 Pine W 18th

==========================================================================================
YEAR 1855
  Pine numbers 600-999 distinct: [613, 652, 655, 657, 658, 659, 660, 661, 664, 665, 671, 673, 678, 682, 690, 696, 698, 702, 703, 704, 706, 707, 708, 709, 710, 712, 714, 715, 716, 718, 719, 720, 722, 724, 727, 728, 729, 734, 736, 738, 740, 742, 744, 746, 748, 750, 754, 756, 758, 760, 762, 766, 768, 770, 786, 789, 791, 793, 795, 814, 816, 828, 830, 833, 838, 842, 844, 845, 850, 852, 854, 856, 868, 870, 888, 998]
  --- lines with Pine 600-999 ---
       Adams John F., plasterer, 652 Pine
       Anderson Wm., 786 Pine
       Baker Hetty, wid. of John L., 661 Pine
       Barnes Jonathan, 758 Pine
       Bell Samuel, brickh. 702 Pine
       Bigler Washington, inspector, 690 Pine
       Billin Wm. G., mer. 80 Market, h 729 Pine
       Bourke & Cassady, Misses, millinery, 850 Pine
       Brooke Elizabeth, gentw. 712 Pine
       Brooks Henry, mer., 10 S Water, h 734 Pine
       Brown Thomas, salesman, 657 Pine
       Budd William, builder, 715 Pine
       (Sch) h 854 Pine
       CampbeU Archibald, constable, 998 Pine
       Dare Charles B., clerk, 660 Pine
       Walnut, h 722 Pine
       Dillard Thomas, M. D., 714 Pine
       734 Pine ab 18th
       Earns J. J., bookbr. 682 Pine ab 16th
       Farrell Catharine, 661 Pine
       Fithian Lemuel S., mer. 77 Market, h 727 Pine
       Fling Wm., clerk, 133 Market, h 746 Pine
       Gamble Elizabeth, 838 Pine
       GeisingerD., commodore U. S. Navy, h 742 Pine-
       Geisinger Geo. F., 742 Pine
       Gordon, F. A., 720 Pine
       707 Pine
       Halderman Michael, wheelwright. Ash belowJHall Charles, Mrs., 708 Pine
```

### Reasoning

You've hit your weekly limit · resets Aug 29 at 10pm (America/New_York)
