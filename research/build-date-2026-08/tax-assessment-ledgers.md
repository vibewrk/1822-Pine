<!-- SALVAGED partial research: tax-assessment-ledgers. The agent was killed mid-run by an API
weekly-limit error on 2026-08-27. This is its full trace — searches, raw results
and reasoning — up to the moment it died. NOT a finished report. Nothing here is
publishable until re-verified against its cited source. -->

# Partial trace: tax-assessment-ledgers

### Reasoning

I'll research this systematically. Let me start with discovery searches and direct fetches in parallel.

### → ToolSearch

`select:WebSearch,WebFetch`

### → Bash

`cd /tmp && curl -sL -A "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0 Safari/537.36" -o pa_records.html -w "HTTP:%{http_code} SIZE:%{size_download} URL:%{url_effective}\n" "https://www.phila.gov/departments/records/"`

**Result:**

```
HTTP:404 SIZE:40025 URL:https://www.phila.gov/departments/records/
```

### → WebSearch

`Philadelphia City Archives "RG 41" tax assessment records finding aid`

### → WebSearch

`"Philadelphia City Archives" record group tax assessment ledgers 1850s wards`

**Result:**

```
Web search results for query: "Philadelphia City Archives "RG 41" tax assessment records finding aid"

Links: [{"title":"Philadelphia City Archives - Ask - Free Library","url":"https://libwww.freelibrary.org/faq/guides/genealogy/par.cfm?FAQCategory=19"},{"title":"Record Groups 3 - 41 | National Archives","url":"https://www.archives.gov/philadelphia/holdings/rg-001-049"},{"title":"Department of Records | Homepage | City of Philadelphia","url":"https://www.phila.gov/departments/department-of-records/"},{"title":"PA State Archives - RG-4 - Series Description - Comptroller General","url":"https://www.phmc.state.pa.us/bah/dam/rg/sd/r4sd.htm"},{"title":"PA State Archives-Record Group Microfilm","url":"http://www.phmc.state.pa.us/bah/dam/Rg/rgmicro.htm"},{"title":"Philadelphia, Pennsylvania Property Records Search","url":"https://property-recordss.org/philadelphia-pa-property-tax-records/"},{"title":"City Archives | Department of Records | City of Philadelphia","url":"https://www.phila.gov/departments/department-of-records/city-archives/"},{"title":"PEAES Guide: Philadelphia City Archives","url":"https://librarycompany.org/Economics/PEAESGuide/pca.htm"},{"title":"NETR Online • Philadelphia • Philadelphia Public Records, Search Philadelphia Records, Philadelphia Property Tax, Pennsylvania Property Search, Pennsylvania Assessor","url":"https://publicrecords.netronline.com/state/PA/county/philadelphia"}]

I've performed the web search for "Philadelphia City Archives RG 41 tax assessment records finding aid." 

The search results show that handouts that describe specific aspects of the holdings as well as indexes and finding aids are available at the archive. Additionally, the complete holdings of this archive are described in Descriptive Inventory of the Archives of the City and County of Philadelphia.

The results also indicate that tax assessment registers date from approximately 1769 to ca. 1820, with dates varying by area.

For more specific information about RG 41 and its associated finding aids, you can contact the Philadelphia City Archives at 3101 Market Street, Philadelphia, PA 19104, (215) 685-9401, or visit the official City Archives webpage through the Department of Records at phila.gov.


REMINDER: You MUST include the sources above in your response to the user using markdown hyperlinks.
```

**Result:**

```
Web search results for query: ""Philadelphia City Archives" record group tax assessment ledgers 1850s wards"

Links: [{"title":"ArchiveGrid : Tax lists, 1693-1889","url":"https://researchworks.oclc.org/archivegrid/collection/data/122584884"},{"title":"Home - Tax Records - LibGuides at Historical Society of Pennsylvania","url":"https://hsp.libguides.com/c.php?g=1242040"},{"title":"Description: Historical Society of Pennsylvania tax lists collection. :: Library Catalog","url":"https://discover.hsp.org/Record/ead-1101/Description"},{"title":"1 Tracing Philadelphia Property Ownership","url":"https://www.phila-records.com/historic-records/web/custom/Tracing%20Philadelphia%20Property%20Ownership.pdf"},{"title":"Philadelphia County PA Tax Records","url":"https://ldsgenealogy.com/PA/Philadelphia-County-Tax-Records.htm"},{"title":"City Archives | Department of Records | City of Philadelphia","url":"https://www.phila.gov/departments/department-of-records/city-archives/"},{"title":"County tax assessment ledgers, 1762-1844, for \"city\" of Philadelphia and Blockley Township","url":"https://www.familysearch.org/en/search/catalog/216878"},{"title":"www.nps.gov","url":"https://www.nps.gov/parkhistory/online_books/inde/hrs/hrsb.htm"}]

Based on the search results, here's what I found about Philadelphia City Archives records related to tax assessment ledgers from the 1850s and wards:

Philadelphia City Archives holds property tax records for Philadelphia from 1773 to 1851. This collection would include records from the 1850s timeframe you're interested in, though the holdings extend through 1851.

The search results reveal that county tax assessment ledgers covering 1762-1844 for the "city" of Philadelphia and Blockley Township are available as microfilm of original records and photocopies at the Philadelphia City Archives. These records are organized by individual wards, including specific entries for wards such as Chestnut ward, Dock ward, High Street ward, Lower Delaware ward, Middle ward, and Locust ward.

Additionally, tax assessor's ledgers for South Mulberry Ward dating from 1787-89, 1791-1795 are held at the Philadelphia City Archives.

For more specific information about the 1850s tax assessment ledger records and their availability, I'd recommend contacting the Philadelphia City Archives directly, as local and county archives often have tax-related records and should be contacted directly for specific information on their holdings.


REMINDER: You MUST include the sources above in your response to the user using markdown hyperlinks.
```

### Reasoning

Let me fetch the primary sources directly.

### → Bash

`UA="Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
D=/private/tmp/claude-501/-Users-billyprice-Code-Repos-1822-Pine-Website--claude-worktrees-upbeat-payne-f033aa/6342a117-41dd-41a4-a1f5-2116ed511a79/scratchpad
mkdir -p "$D"
for u in "https://www.phila.gov/departments/department-of-records/city-archives/|cityarchives.html" \
  `

### → WebSearch

`"Descriptive Inventory of the Archives of the City and County of Philadelphia" record group tax`

**Result:**

```
=== https://www.phila.gov/departments/department-of-records/city-archives/ -> cityarchives.html HTTP:200 SIZE:   56733
=== https://librarycompany.org/Economics/PEAESGuide/pca.htm -> peaes.html HTTP:200 SIZE:   69345
=== https://www.phila-records.com/historic-records/web/custom/Tracing%20Philadelphia%20Property%20Ownership.pdf -> tracing.pdf HTTP:200 SIZE: 2368443
=== https://hsp.libguides.com/c.php?g=1242040 -> hsp.html HTTP:200 SIZE:   39209
```

**Result:**

```
Web search results for query: ""Descriptive Inventory of the Archives of the City and County of Philadelphia" record group tax"

Links: [{"title":"Guide to Archival Holdings at the National Archives at Philadelphia | National Archives","url":"https://www.archives.gov/philadelphia/holdings"},{"title":"PA State Archives-Record Group Microfilm","url":"http://www.phmc.state.pa.us/bah/dam/Rg/rgmicro.htm"},{"title":"DOR - Descriptive Inventory","url":"https://www.phillyhistory.org/DescriptiveInventory/"},{"title":"City Archives | Department of Records | City of Philadelphia","url":"https://www.phila.gov/departments/department-of-records/city-archives/"},{"title":"Department of Records | Homepage | City of Philadelphia","url":"https://www.phila.gov/departments/department-of-records/"},{"title":"Proprietary, supply, and state tax lists of the city and county of Philadelphia .. : Philadelphia (Pa.) : Free Download, Borrow, and Streaming : Internet Archive","url":"https://archive.org/details/proprietarysupp02pagoog"},{"title":"Philadelphia County Tax Records Search (Pennsylvania)","url":"https://www.countyoffice.org/pa-philadelphia-county-tax-records/"},{"title":"Pennsylvania archives (series) Proprietary, supply, and state tax lists of the city and county of Philadelphia /","url":"https://www.familysearch.org/search/catalog/492769"},{"title":"County tax assessment ledgers, 1762-1844, for \"city\" of Philadelphia and Blockley Township","url":"https://www.familysearch.org/en/search/catalog/216878"}]

Based on the search results, I found relevant information about the Descriptive Inventory of the Archives of the City and County of Philadelphia:

The Descriptive Inventory Index is a searchable index of documents found in the vast City Archives collections, with documents divided into 234 descriptive Record Groups and many Sub-Groups for ease of storage and searchability.

The search results indicate that the Philadelphia City Archives preserves historical City records and contains 20,000 cubic feet of holdings with historical, administrative, legal, research, and cultural value, with holdings covering a wide variety of subjects dating back to the late 17th century.

Regarding tax records specifically, the archives contains various tax-related materials. The search results show references to historical tax records in the Philadelphia City Archives collections, including county tax assessment ledgers from 1762-1844 for the "city" of Philadelphia and Blockley Township, with microfilm of original records and photocopies available at the Philadelphia City Archives.

You can access the Descriptive Inventory Index directly at phillyhistory.org to search for specific record groups related to tax records and other materials in the City Archives.


REMINDER: You MUST include the sources above in your response to the user using markdown hyperlinks.
```

### → Bash

`UA="Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
D=/private/tmp/claude-501/-Users-billyprice-Code-Repos-1822-Pine-Website--claude-worktrees-upbeat-payne-f033aa/6342a117-41dd-41a4-a1f5-2116ed511a79/scratchpad
code=$(curl -sL -A "$UA" -o "$D/descinv.html" -w "%{http_code}" "https://www.phillyhistory.org/DescriptiveInventory/")`

**Result:**

```
HTTP:200 SIZE:   65382

 DOR - Descriptive Inventory
 Descriptive Inventory 
 Keyword:  
 Advanced options 
 Search by Record Group 
 Record Group Id: 
 Name: 
 Search by Sub Record Group 
 Sub Record Id: 
 Record Group Id: 
 Name: 
 Series Id: 
 Box Id: 
 Date Period: 
 The Descriptive Inventory Index, a work in progress, serves as a searchable 
 index of documents found in the vast City Archives collections. Documents 
 in the archives have been divided into 234 descriptive Record Groups and many Sub-Groups for ease of 
 storage and search ability. The documents contained in these record groups and sup-groups have been 
 assigned to storage boxes with unique identification numbers. The Descriptive Inventory Index 
 includes descriptions of all Record Groups and Sub-Groups as well as content descriptions 
 of box numbers and a list of their contents.
 Found 143 record groups and 3028 sub record groups.  
 Results for Record Group 
 Results 0-19 of 143 
 Next 20 >> 
 Record Group Id 
 Name 
 1 
 COUNTY COMMISSIONERS & CITY COMMISSIONERS 
 2 
 COUNTY TREASURER 
 3 
 COUNTY AUDITORS 
 4 
 CORONER 
 6 
 DISTRICT ATTORNEY 
 7 
 SHERIFF 
 8 
 REGISTRATION COMMISSION 
 20 
 PROTHONOTARY OF THE COURT OF COMMON PLEAS 
 21 
 CLERK OF THE COURT OF QUARTER SESSIONS AND OYER AND TERMINER 
 22 
 PROTHONOTARY OF THE DISTRICT COURT 
 23 
 CLERK OF THE COURT OF CRIMINAL SESSIONS 
 24 
 CLERK OF THE COURT OF GENERAL SESSIONS 
 25 
 COUNTY COURT, MUNICIPAL COURT 
 26 
 RECORDER'S COURT 
 27 
 MAGISTRATES 
 28 
 CLERK OF THE ORPHANS' COURT, RESISTER OF MILLS, AND MARRIAGE LICENSE BUREAU 
 35 
 OVERSEERS OF THE POOR: 
CONTRIBUTORS TO THE RELIEF
AND EMPLOYMENT OF THE POOR
GUARDIANS OF THE POOR: 
 36 
 GUARDIANS OF THE ORPHAN CHILDREN 
 37 
 Board of Health 
 38 
 INSPECTORS OF THE JAIL AND PENITENTIARY HOUSE:
COUNTY PRISON, INSPECTORS OF: 
 Results for Sub Record Group 
 Results 0-19 of 3028 
 Next 20 >> 
 Record Group Id 
 Series Id 
 SubRecord Group 
 Name 
 DatePeriod 
 60 
 17 
 2 
 NEIGHBORHOOD PROGRAM COORDINATION 
 1980-1986 
 60 
 18 
 ECONOMIC DEVELOPMENT 
 60 
 18 
 1 
 PHILADELPHIA ECONOMIC DEVELOPMENT COMMITTEE 
 60 
 18 
 1.1 
 REPORTS 
 1964-1965 
 232 
 3 
 11 
 COMMITTEE ON HEALTH, MEDICINE, AND ALLIED SCIENCES 
 232 
 3 
 11.1 
 Committee on Health, Medicine and Allied Sciences Minutes 
 December 1924-October 1925 
 232 
 3 
 11.2 
 Committee on Health, Medicine, and Allied Sciences Correspondence & Files 
 April-December 1923 
 232 
 3 
 12 
 COMMITTEE ON MUNICIPALITIES 
 232 
 3 
 12.1 
 Committee on MunicipalitiesCorrespondence & Files 
 August 1923 
 232 
 3 
 13 
 COMMITTEE ON MUSIC 
 60 
 19 
 PHILADELPHIA COMPUTING CENTER; MAYOR'S OFFICE OF INFORMATION SERVICES 
 60 
 19.1 
 Philadelphia Computing Center ANNUAL REPORTS 
 1986- 1991 
 60 
 20 
 MAYOR'S OFFICE OF MANAGEMENT AND PRODUCTIVITY 
 60 
 20.1 
 FILES 
 1991-1992 
 60 
 20.2 
 MAYOR'S PRIVATE SECTOR TASK FORCE ON MANAGEMENT & PRODUCTIVITY. REPORTS 
 1993 
 60 
 21 
 OFFICE OF PERFORMANCE ASSESSMENT; OFFICE OF THE INSPECTOR GENERAL 
 60 
 22 
 OFFICE OF SERVICES TO THE HOMELESS AND ADULTS 
 60 
 23 
 PHILADELPHIA ANTI-GRAFFITI NETWORK 
 60 
 100 
 FLOOD RELIEF 
 60 
 100.1 
 MAYOR'S FLOOD RELIEF COMMITTEES 
 1936-1938
```

### → Bash

`D=/private/tmp/claude-501/-Users-billyprice-Code-Repos-1822-Pine-Website--claude-worktrees-upbeat-payne-f033aa/6342a117-41dd-41a4-a1f5-2116ed511a79/scratchpad
python3 - <<'EOF'
import re,html
D="/private/tmp/claude-501/-Users-billyprice-Code-Repos-1822-Pine-Website--claude-worktrees-upbeat-payne-f033aa/6342a117-41dd-41a4-a1f5-2116ed511a79/scratchpad/"
for f in ["cityarchives.html","peaes.html"]:
 `

**Result:**

```
######## cityarchives.html len 6448
 
City Archives | Department of Records | City of Philadelphia
You are using an 
outdated
 browser. Please 
upgrade your browser
 to improve your experience. If you can't switch browsers, turn off compatibility mode.
Skip to main content
City of Philadelphia
 An official website of the City of Philadelphia government
Here's how you know
An official website 
English
Español
中文
Translate
English
Español
中文
عربي
Ayisyen
Français
Kiswahili
Português
Pyccкий
Tiếng Việt
Feedback and support
https://
The 
https://
 in the address bar means your information is encrypted and can not be accessed by anyone else
.gov
Only government entities in the U.S. can end in .gov
Menu
Mayor Cherelle L. Parker
Services
Programs
Departments
News
Translate
It looks like your device language is set to 
. Would you like to translate this page?
Cancel
Translate
Department of
 Records
Home
City Archives
Proposed City regulations
FAQ
Home
Department of Records
 City Archives
City Archives
The Philadelphia City Archives preserves historical City records and provides access to the public. The Archives was established in 1952 under the Philadelphia Home Rule Charter.
Contact the Archives
You can contact us at 
(215) 685-9401
 or 
archives.info@phila.gov
.
Work
 Phone:
Facebook
Twitter
Instagram
Visit the Archives
Hours of operation:
 Monday through Friday, 8:30 a.m. to 4 p.m.
The Archives is located at:
548 Spring Garden Street
Philadelphia, PA 19123
The Archives is accessible by public transportation. There are also designated parking spots for visitors in the Target parking lot on 6th Street, south of the Archives.
What's in the Archives
The Archives contains 20,000 cubic feet of holdings with historical, administrative, legal, research, and cultural value. The holdings cover a wide variety of subjects dating back to the late 17th century.
The Archives provides access to many different types of records, including:
Genealogical records
Real estate records
Ordinances and other City Council records
City Solicitors’ opinions
Mayors’ files
Charters of incorporation
Minutes of boards and commissions
Court records
Office of the Director of Finance records
City Controller and Sinking Fund Commission
Home Rule Charter Commission records.
Collections of interest
Vital records, naturalizations, and taxes
Type
Dates
Registrations of birth and death records*
July 1, 1860 to June 30, 1915
Cemetery returns
1806 to June 30, 1860
Marriage records
July 1, 1860 to December 31, 1885
Marriage records from the Orphans’ Court Division
1886 to 1915
Divorce records
Before 1914
Naturalizations of the City and County Courts
1794 to 1904, 1914 to 1930
Records of property taxes
1773 to 1851
*Includes some late registrations filed under an 1867 supplement to the vital statistics act, with births dating to 1829.
Property and building records
Type
Dates
Deeds of Philadelphia County
1683 to 1955
Mortgages of Philadelphia County
1736 to 1963
Philadelphia building permits and select building plans
1889 to 1986
City directories
1785 to 1936
Legal and institutional records
Type
Dates
Criminal court records
1750s to 1950s
Civil court records
1757 to 1913
Police records
1850s to 1980s
Prison records
1790 to 1948
Blockley Almshouse records
1835 to 1920
Records of the Almshouse Hospital, Philadelphia General Hospital
1751 to 1977
Other records of interest
Type
Dates
Personnel Department roster cards
1890s to 1980s
Police roster and roll books
1854 to 1925
Film collection
1940s to 1980s
Photograph collection
1855 to 1980s
Charting a Path to Resistance – an interactive mural
Stretching from the Archives foyer through the reception area and along the length of the public research room, Charting a Path to Resistance by local artist Talia Greene is an interactive mural that exposes the racism and discrimination of our collective past and celebrates the acts of resistance that countered it. The design takes inspiration from historic maps in the Archives which chart the development of Philadelphia’s streets and conversion of natural waterways to sewers.
The primary Archives document displayed is a redlining map of Philadelphia, created by a private company and shared with the City in 1944. Archives documents at the beginning of the piece tell viewers the story of housing discrimination through the 1960s.  As the mural moves into the research room, viewers move back in time, with stories of resistance to housing discrimination making way for stories of resistance to slavery.
To learn more, download the free app.
Apple app store
Google Play store
Related resources
Photographs
The Department of Records has over two million photographs dating back to 1855. Of these, 30,000 are accessible online at 
phillyhistory.org
.
Land records
PhilaDox
 is a land records research portal covering 1974 to the present. You can search documents for free and view watermarked copies. You need a subscription to print.
The 
Historical land and vital records search
 has digital images of:
Philadelphia deeds from 1683 to 1973
Birth, death, marriage, and naturalization records.
You must pay for a subscription to use the search.
Historic streets index
The 
Historic street index
 allows you to search the name of a Philadelphia street and see its location and any name changes it has undergone.
Top
Search for:
Birth, marriage & life events
Business & self-employment
Cars, parking & transportation
Crime, law & justice
Culture & recreation
Diversity, inclusion, accessibility & immigration
Education & learning
Ethics & transparency
Mental & physical health
Payments, assistance & taxes
Permits, violations & licenses
Property, lots & housing
Safety & emergency preparedness
Streets, sidewalks & alleys
Trash, recycling & city upkeep
Trees, parks & the environment
Water, gas & utilities
Working & jobs
Zoning, planning & development
Service directory
This content was last updated by 
Department of Records
. 
We’re always working to improve phila.gov.
 How can we make thi
…[truncated]
```

### Reasoning

Major finding already. Let me dig into the Descriptive Inventory search interface and extract the rest.

### → Bash

`D=/private/tmp/claude-501/-Users-billyprice-Code-Repos-1822-Pine-Website--claude-worktrees-upbeat-payne-f033aa/6342a117-41dd-41a4-a1f5-2116ed511a79/scratchpad
grep -oE '<(form|input|select|a)[^>]*>' "$D/descinv.html" | head -60`

**Result:**

```
<a alt="PhillyHistory.org" href="http://www.phillyhistory.org/" style="display:inline-block;border-width:0px;">
<form name="formHome" method="post" action="Home.aspx" id="formHome">
<input type="hidden" name="__EVENTTARGET" id="__EVENTTARGET" value="" />
<input type="hidden" name="__EVENTARGUMENT" id="__EVENTARGUMENT" value="" />
<input type="hidden" name="__VIEWSTATE" id="__VIEWSTATE" value="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
…[truncated]
```

### → Bash

`D=/private/tmp/claude-501/-Users-billyprice-Code-Repos-1822-Pine-Website--claude-worktrees-upbeat-payne-f033aa/6342a117-41dd-41a4-a1f5-2116ed511a79/scratchpad
python3 - <<'EOF'
import re,html
D="/private/tmp/claude-501/-Users-billyprice-Code-Repos-1822-Pine-Website--claude-worktrees-upbeat-payne-f033aa/6342a117-41dd-41a4-a1f5-2116ed511a79/scratchpad/"
s=open(D+"peaes.html",encoding='utf-8',errors=`

**Result:**

```
ioners since 1718. From 1776-1789 the County Treasurer also served as the City Treasurer.
- 2.1 Accounts, 1777-1803, 1848-54 (3 vols., no index)
 - City and count receipts, balances, revenues
 from taxes, etc.
RG5: Recorder of Deeds
Position began as Master of the Rolls, established in 1682. 
 Chief duties included preparing deeds, mortgages, leases, and other similar
 instruments.
- 5.1 Deed Book, 1684-1863 (1342 vols., index; also on
 microfilm)
 - Recorded copies of deeds, listed by date,
 grantee, grantor (including wife's name), parties' occupation and general
 residence, property price.
- 5.2 Exemplifications of Recorded Instruments in Pennsylvania Land Office, 1683-1799 (11 vols., index)
 - Mostly transactions related to Philadelphia County.
- 5.3 Patents, City Lots, 1781-85 (1 vol., index)
 - Patents granted for land in city owned by
 Commonwealth and sold at auction. Includes grantee, price, property
 description, dates of sale, etc.
- 5.4 Register, Sales of City and State Island Lots, 1781-87 (1 vol., index)
 - Entries include lot number, acreage, price per
 acre, purchaser, total price.
- 5.5 Mortgage Contracts, General Loan Office, 1736-55 (6
 vols., index)
 - Includes dates of making and recording,
 parties involved, mortgagor's occupation and residence, amount of loan,
 property used as collateral, terms of repayment.
- 5.6 Mortgage Books, 1749-1800 (39 vols., index)
 - Includes dates of making and recording,
 parties involved, mortgagor's occupation and residence, amount of loan,
 property used as collateral, terms of repayment.
- 5.8 Miscellaneous Book, 1799- (46 vols., index)
 - Recorded copies of instruments not included
 above. "Great variety of entries" including those dealing with
 business firms, bills of sale, agreements and bonds.
- 5.13 Auctioneers' Bond Book, 1842-74 (3 vols., no
 index)
 - Copies of bond, list dates, auctioneers'
 names, addresses, amount of bonds.
- 5.22 Manufacturing Companies, Agreements, 1849-75 (3
 vols., index)
 - Certificates of incorporation. Lists
 corporate name, date of organization, total amount of capital stock, place of
 business, list of officers, other relevant information.
- 5.23 Partnership Books, 1836- (34 vols., index)
 - Documents (certificates, articles of
 association, etc.) related to partnership formations and dissolutions.
RG20: Common Pleas Court
Established in 1707, absorbed functions of the Orphan's
 Court in the mid eighteenth century. Handled civil court cases
- 20.2 Appearance Docket, 1757- (882 vols., index); 20.3
 Judgment Docket, 1810-11, 1819-74 (30 vols., index); 20.4 Execution Docket,
 1769-1874 (35 vols., index); 20.5 Equity Docket, 1836-74 (11 vols., index)
Summaries of civil cases, listing
 parties, attorneys, cause of action, summary of legal actions, disposition of
 cases.
- 20.10 Mechanics Lien Docket, 1836-74 (26 vols., index)
 - Plaintiff, claimee, cause and amount of claim,
 notice of satisfaction.
- 20.11 Report of Tax Collectors of Real Estate to be
 Sold for Non-Payment of Taxes, 1803-18 (1 vol., index)
 - Entries include locations of lots and
 buildings, owners' names, years and amounts of unpaid taxes.
- 20.16 Sheriff's Deeds, 1736- (221 vols., index)
 - Date, plaintiff, defendant, purchaser,
 location of property, amount sold for.
- 20.17 Minutes July 1789-March 1874 (46 vols., index);
missing 1792-99, 1804-08, 1809-1812, 1819-21
 - In addition to usual civil cases appearing in
 Appearance Docket, Minutes include cases involving dissolution of corporations,
 extinguishments of ground rents, petitions of insolvency, some rulings of
 property assessments, damages for street openings, and warrants for seizure of
 absconding slaves and apprentices.
- 20.19 Proceedings in Equity, 1837-74 (34 cubic feet, no
 index)
 - Papers include parties involved, dates,
 include bills of discovery, petitions for injunctions, bonds given, disposition
 of case, etc.
- 20.30 Insolvency Petitions and Bonds, 1790-1868 (9
 cubic feet, no index);
 missing 1791-5, 1805-6, 1844, 1847, 1849, 1860; 
20.30a
 Insolvent Docket, Dec. 1828-Aug. 1842; 20.30b Insolvent Bonds, Sept. 1827-Dec.
 1833
 - Includes date of petition, name and
 occasionally occupation of petitioner, schedule of creditors, amount of and reason
 for debt, inventory of petitioner's real and personal property. Also includes
 reasons for petitioner's insolvency, often detailing personal information about
 family status, business failures, etc.
RG21: Clerk of the Court of Quarter Sessions and Oyer
 and Terminer
Established in 1682. Court of Quarter Sessions was in
 charge of overseeing road and bridge openings, appointing and auditing various
 county officials, and licensing taverns, hackneys, and peddlers.
- 21.2 Docket, 1753-1838; 1843-79 (114 vols., most
 indexed);
 missing 1771-2, 1781-9, 1813-14, 1821; 
21.3 Oyer and Terminer
 Docket, 1794-1840 (7 vols., 1815-40 indexed);
 missing 1810-14, 1834; 
21.4
 Minute Book, 1799-1802, 1804-5, 1807-22, 1824-5, 1829-38, 1846-52, 1854- (42
 vols., index)
 - Entries for each court term list judges and
 court officers, grand jurors, information regarding criminal cases. Also, road
 petitions, road viewers' reports, apprentice cases, tavern and peddlers'
 licenses issued.
- 21.12 Liquor Licenses, Minute Book, 1820- (7 vols., no
 index);
 missing 1825-40
 - Entries include name and address of licensees;
 vol. 1841-9 includes hawkers' and peddlers' licenses.
- 21.25 Road Docket, 1685- (79 vols., index); 21.26 Road
 Petitions, 1685- (903 cubic feet, index); 21.27 Road Case Record, 1836- (21
 vols., index)
 - Petitions for laying out and opening roads,
 streets, bridges; reports of court-appointed road viewers, actions taken in
 regard to openings, etc..
RG22: Prothonotary of the District Court
Established in 1811 to share function of civil court with
 Court of Common Pleas.
- 22.1 Appearance Docket, 1811-74 (236 vols., index);
 22.2 D.S.B. Docket, 1811-74 (59 vols., no index); 22.3 Execution Docket,
 1811-74 (120 vols., i
…[truncated]
```

### Reasoning

The Descriptive Inventory is an ASP.NET app. Let me drive its search via POST.

### → Bash

`D=/private/tmp/claude-501/-Users-billyprice-Code-Repos-1822-Pine-Website--claude-worktrees-upbeat-payne-f033aa/6342a117-41dd-41a4-a1f5-2116ed511a79/scratchpad
cat > "$D/di.py" <<'PYEOF'
import re,sys,html,urllib.parse,urllib.request,gzip,io
D="/private/tmp/claude-501/-Users-billyprice-Code-Repos-1822-Pine-Website--claude-worktrees-upbeat-payne-f033aa/6342a117-41dd-41a4-a1f5-2116ed511a79/scratchpad`

**Result:**

```
Exit code 1
Traceback (most recent call last):
  File "/private/tmp/claude-501/-Users-billyprice-Code-Repos-1822-Pine-Website--claude-worktrees-upbeat-payne-f033aa/6342a117-41dd-41a4-a1f5-2116ed511a79/scratchpad/di.py", line 35, in <module>
    out=post(BASE,data,"https://www.phillyhistory.org/DescriptiveInventory/")
  File "/private/tmp/claude-501/-Users-billyprice-Code-Repos-1822-Pine-Website--claude-worktrees-upbeat-payne-f033aa/6342a117-41dd-41a4-a1f5-2116ed511a79/scratchpad/di.py", line 19, in post
    return urllib.request.urlopen(r,timeout=60).read().decode('utf-8','replace')
           ~~~~~~~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^
  File "/opt/homebrew/Cellar/python@3.14/3.14.5/Frameworks/Python.framework/Versions/3.14/lib/python3.14/urllib/request.py", line 187, in urlopen
    return opener.open(url, data, timeout)
           ~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^
  File "/opt/homebrew/Cellar/python@3.14/3.14.5/Frameworks/Python.framework/Versions/3.14/lib/python3.14/urllib/request.py", line 493, in open
    response = meth(req, response)
  File "/opt/homebrew/Cellar/python@3.14/3.14.5/Frameworks/Python.framework/Versions/3.14/lib/python3.14/urllib/request.py", line 602, in http_response
    response = self.parent.error(
        'http', request, response, code, msg, hdrs)
  File "/opt/homebrew/Cellar/python@3.14/3.14.5/Frameworks/Python.framework/Versions/3.14/lib/python3.14/urllib/request.py", line 531, in error
    return self._call_chain(*args)
           ~~~~~~~~~~~~~~~~^^^^^^^
  File "/opt/homebrew/Cellar/python@3.14/3.14.5/Frameworks/Python.framework/Versions/3.14/lib/python3.14/urllib/request.py", line 464, in _call_chain
    result = func(*args)
  File "/opt/homebrew/Cellar/python@3.14/3.14.5/Frameworks/Python.framework/Versions/3.14/lib/python3.14/urllib/request.py", line 611, in http_error_default
    raise HTTPError(req.full_url, code, msg, hdrs, fp)
urllib.error.HTTPError: HTTP Error 500: Internal Server Error
```

### → Bash

`D=/private/tmp/claude-501/-Users-billyprice-Code-Repos-1822-Pine-Website--claude-worktrees-upbeat-payne-f033aa/6342a117-41dd-41a4-a1f5-2116ed511a79/scratchpad
python3 -c "
import subprocess,sys
" 
which pdftotext || echo "no pdftotext"
python3 -c "import pypdf; print('pypdf ok')" 2>/dev/null || python3 -c "import PyPDF2; print('PyPDF2 ok')" 2>/dev/null || echo "no python pdf lib"`

**Result:**

```
pdftotext not found
no pdftotext
pypdf ok
```

### → Bash

`D=/private/tmp/claude-501/-Users-billyprice-Code-Repos-1822-Pine-Website--claude-worktrees-upbeat-payne-f033aa/6342a117-41dd-41a4-a1f5-2116ed511a79/scratchpad
sed -i '' 's|s=get("https://www.phillyhistory.org/DescriptiveInventory/")|s=get(BASE)|' "$D/di.py"
sed -i '' 's|out=post(BASE,data,"https://www.phillyhistory.org/DescriptiveInventory/")|out=post(BASE,data,BASE)|' "$D/di.py"
UA="Mozilla/5.0 (`

**Result:**

```
GET Home.aspx: 200
Traceback (most recent call last):
  File "/private/tmp/claude-501/-Users-billyprice-Code-Repos-1822-Pine-Website--claude-worktrees-upbeat-payne-f033aa/6342a117-41dd-41a4-a1f5-2116ed511a79/scratchpad/di.py", line 35, in <module>
    out=post(BASE,data,BASE)
  File "/private/tmp/claude-501/-Users-billyprice-Code-Repos-1822-Pine-Website--claude-worktrees-upbeat-payne-f033aa/6342a117-41dd-41a4-a1f5-2116ed511a79/scratchpad/di.py", line 19, in post
    return urllib.request.urlopen(r,timeout=60).read().decode('utf-8','replace')
           ~~~~~~~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^
  File "/opt/homebrew/Cellar/python@3.14/3.14.5/Frameworks/Python.framework/Versions/3.14/lib/python3.14/urllib/request.py", line 187, in urlopen
    return opener.open(url, data, timeout)
           ~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^
  File "/opt/homebrew/Cellar/python@3.14/3.14.5/Frameworks/Python.framework/Versions/3.14/lib/python3.14/urllib/request.py", line 493, in open
    response = meth(req, response)
  File "/opt/homebrew/Cellar/python@3.14/3.14.5/Frameworks/Python.framework/Versions/3.14/lib/python3.14/urllib/request.py", line 602, in http_response
    response = self.parent.error(
        'http', request, response, code, msg, hdrs)
  File "/opt/homebrew/Cellar/python@3.14/3.14.5/Frameworks/Python.framework/Versions/3.14/lib/python3.14/urllib/request.py", line 531, in error
    return self._call_chain(*args)
           ~~~~~~~~~~~~~~~~^^^^^^^
  File "/opt/homebrew/Cellar/python@3.14/3.14.5/Frameworks/Python.framework/Versions/3.14/lib/python3.14/urllib/request.py", line 464, in _call_chain
    result = func(*args)
  File "/opt/homebrew/Cellar/python@3.14/3.14.5/Frameworks/Python.framework/Versions/3.14/lib/python3.14/urllib/request.py", line 611, in http_error_default
    raise HTTPError(req.full_url, code, msg, hdrs, fp)
urllib.error.HTTPError: HTTP Error 500: Internal Server Error
```

### → Bash

`D=/private/tmp/claude-501/-Users-billyprice-Code-Repos-1822-Pine-Website--claude-worktrees-upbeat-payne-f033aa/6342a117-41dd-41a4-a1f5-2116ed511a79/scratchpad
python3 - <<'EOF'
import pypdf
D="/private/tmp/claude-501/-Users-billyprice-Code-Repos-1822-Pine-Website--claude-worktrees-upbeat-payne-f033aa/6342a117-41dd-41a4-a1f5-2116ed511a79/scratchpad/"
r=pypdf.PdfReader(D+"tracing.pdf")
print("PAGES:`

**Result:**

```
PAGES: 15
CHARS: 20081

===== PAGE 1 =====
 1 
 
Tracing Philadelphia Property Ownership 
Using On-line Registry Office Records 
by J.M. Duffin 
 
 
 
This guide provides an overview of the on-line Registry Office sources that document property 
ownership in the City of Philadelphia  between 1865 and 1955 .  The records are held and made 
available by the City of Philadelphia Department of Records. 
 
In 1865 on the recommendation of the Mayor and Philadelphia City Council s, the Pennsylvania 
State Legislature passed a law establishing the Registry Office under the B ureau of Surveys for 
the purpose of  creating maps showing the precise loc ation and dimensions of properties  and a 
record of all owners of real estate in the City of Philadelphia.1  All current property owners were 
required to bring their deeds to the Registry Office to have the land plotted and registered and all 
purchasers after 1865 were required to abstract their deeds and have them reviewed by t he 
Registry Office prior to be ing recorded by the Recorder of Deeds .  The law also applied to 
people who inherited land or were awarded property by a court order, such as an estate partition.  
Beginning in 1867  the Recorder of Deeds was not allowed to record deeds unt il they were first 
registered.2 
 
The main purpose of the Registry Office was to produce accurate lists a nd plans of current 
property owners which serve d as the basis upon which real estates taxes  would be assessed.  
Prior to 1865 there was no way to determine who the current owner of a particular property was 
without doing extensive searches in the deed records  which are indexed only by the name of the 
buyer and seller (grantee or grantor)  not by location .  Tax assessor s had to rely on older 
assessment lists and information supplied by the owners to determine who should be taxed.3  The 
new system allowed the assessors to have an independent source of information which was based 
directly upon the very records that established an owner’s legal property rights.  Today the 
Registry Office records serve as a location index to virtually all property ownership changes i n 
the City of Philadelphia since 1865. 
 
 
Records Available On-line 
 
There are two sets of records of the Registry Office that are currently available on -line: the 
Historic Registry Maps and the Registry Ledgers .  Using these sources, it is possible to trac e the 
ownership any given property in the City of Philadelphia from 1865 to 1955. 
                                                 
1 “An Act to promote the more certain and equal assessment of taxes, in Philadelphia,” 14 March 1865, P.L. 320.  
This legislation was drafted by a special commission headed by Eli K irk Price which had been authorized by a City 
Ordinance of 26 November 1864 to look into the problems of taxation in Philadelphia.  
2 29 March 1867, P.L. 600. 
3 The special commission formed to study the problem found instances in which liens were entered a nd properties 
sold for back taxes because the name of a former owner was being assessed to a property he or she no longer owned.  
The new legislation had special provisions protecting property owners from municipal tax cases if they registered 
their property.  For the report of the commission see Journal of Common Council of the City of Philadelphia for the 
Year 1865 (Philadelphia: 1865), 1: 280–300. 
===== PAGE 2 =====
 2 
 
 
Historic Registry Maps 
https://ework.phila.gov/parcelexplorerauth/ 
 
The key to using the Registry Office records is the map and parcel number of the property being 
searched.  The entire city of Philadelphia  has been mapped and assigned registry map numbers.4  
These maps can be easily searched using the subscription based system called ParcelExplorer. 
 
The Historical Registry Maps divide the city into sections that are generall y two to three city 
blocks square in order to produce maps at a scale which can clearly show all the distinct property 
lines.  They are designated with a number -letter-number sequence, eg. 2-S-20 or 2S20, in which 
the letter is either an “N” or an “S” – indicating that the area covered is either north or south of 
Market Street. 
 
 
 
 Figure 1.  Map 2S20.  18th and Walnut Streets. Figure 2.  Detail of Map 2S20.  Parcel consolidation 
       in which older lot numbers are crossed out. 
 
 
The Historical Registry Maps document the evolution of property lines fro m the late nineteenth 
century to the present.  The parcel numbers were assigned in chronological order as the transfers 
in ownership were submitted to the Registry Office for recording.  The lower the number, the 
older the specific property is.  The higher the number, the more recent the property creation or 
subdivision is.  When older parcels were consolidated or reconfigured into new plots, the old plot 
numbers were left on the maps and sometimes  crossed out (see Figure 2) .  The resulting maps 
display multiple layers of property lines that cover more than a century of changes on the urban 
landscape. 
                                                 
4 The only notable exception is for some areas of Fairmount Park, particularly East and West Park, which wer e 
acquired by the City while the registry maps were being created in the 1860s, 70s and 80s.  Because these park 
properties would not be taxed, the Registry O ffice probably saw no need to map the original properties lines.  The 
Fairmount Park Archives as w ell as the City Archives have plans for many of the original property lines for these 
missing areas. 
 
===== PAGE 3 =====
 3 
 
 
Figure 3.  Detail of Map 15S10.  Passyunk Avenue and Mifflin Street.  Older numbers not crossed out. 
 
Carefully examining the parcel numbers on the maps from th e highest to the lowest can provide 
clues to how and when blocks were divided or consolidated. 
 
 
 
Figure 4.  Map 135N15.  School House Lane to Midvale Avenue at Henry Avenue. 
The numbers 74 -N-20, 74-N-22, etc., r
…[truncated]
```

### → Bash

`D=/private/tmp/claude-501/-Users-billyprice-Code-Repos-1822-Pine-Website--claude-worktrees-upbeat-payne-f033aa/6342a117-41dd-41a4-a1f5-2116ed511a79/scratchpad
UA="Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
B=https://www.phillyhistory.org/DescriptiveInventory/Home.aspx
rm -f "$D/cj.txt"
curl -s -A "$UA" -c "$D/cj.txt" -o "$`

**Result:**

```
set-cookie: ASP.NET_SessionId=wwyikb3jzmgnub45c3bcw2yy; path=/; HttpOnly
keys ['__EVENTTARGET', '__EVENTARGUMENT', '__VIEWSTATE', '__VIEWSTATEGENERATOR', '__EVENTVALIDATION'] len vs 5668
HTTP:200 SIZE:58847
<title>
```

### Reasoning

You've hit your weekly limit · resets Aug 29 at 10pm (America/New_York)
