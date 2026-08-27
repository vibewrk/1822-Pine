<!-- SALVAGED partial research: maps-and-atlases. The agent was killed mid-run by an API
weekly-limit error on 2026-08-27. This is its full trace — searches, raw results
and reasoning — up to the moment it died. NOT a finished report. Nothing here is
publishable until re-verified against its cited source. -->

# Partial trace: maps-and-atlases

### Reasoning

I'll research this systematically. Let me start with discovery searches and direct fetches in parallel.

### → ToolSearch

`select:WebSearch,WebFetch`

### → Bash

`cd /tmp && curl -s -o /tmp/geo1.html -w "%{http_code} %{size_download}\n" -A "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0 Safari/537.36" "https://www.philageohistory.org/geohistory/" ; echo "---" ; curl -s -o /tmp/geo2.html -w "%{http_code} %{size_download}\n" -A "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like`

**Result:**

```
200 7479
---
302 0
```

### → Bash

`cd /tmp && python3 -c "
import re,html
s=open('/tmp/geo1.html',encoding='utf-8',errors='replace').read()
s=re.sub(r'<script.*?</script>','',s,flags=re.S|re.I)
s=re.sub(r'<style.*?</style>','',s,flags=re.S|re.I)
links=re.findall(r'href=[\"\\']([^\"\\']+)[\"\\']',s)
t=re.sub(r'<[^>]+>',' ',s)
t=html.unescape(t)
t=re.sub(r'\s+',' ',t)
print(t[:4000])
print('=== LINKS ===')
for l in dict.fromkeys(link`

**Result:**

```
Greater Philadelphia GeoHistory Network Home About Contributors Educational Resources Contacts Donate What's Here? The purpose of the Greater Philadelphia GeoHistory Network is to gather geographic materials useful for the study of historic Philadelphia and its region. This site contains thousands of old maps, property atlases, city directories, industrial site surveys, and other items documenting the history and development of the city from the 1600s through today. Resource Browser Browse through all of the resources available on the GeoHistory website, as well as related resources available on the web. View high-resolution digital images of historic maps and documents. Interactive Map View mosaics of selected historic maps, mixed with current maps and aerial photographs from Google in an interactive viewer. (Not all materials are available in this viewer. Please consult the resource browser for a full list.) Facebook RSS Feed of New Resources Greater Philadelphia GeoHistory Network / PhilaGeoHistory.org A project of the Athenaeum of Philadelphia / Permission is required to duplicate or publish materials on this site. 
=== LINKS ===
https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/css/bootstrap.min.css
https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css
/geohistory/css/geohistory-bs5.css
/rdic-images/new-maps-feed.cfm
/geohistory/images/GeoHistorySiteThumb.jpg
https://www.philageohistory.org/geohistory/images/favicon.ico
/geohistory/index.cfm
/geohistory/about.cfm
/geohistory/contributors.cfm
/geohistory/education.cfm
/geohistory/contact.cfm
/geohistory/donate.cfm
https://www.philageohistory.org/rdic-images/index2.cfm#::35:PAF.BurialGrounds::
https://www.philageohistory.org/rdic-images/index2.cfm#1:::SAN1916.Phila::
https://www.philageohistory.org/rdic-images/Streets/
/rdic-images/index2.cfm?w=Phila1777
#
/rdic-images/
https://www.philageohistory.org/tiles/viewer/
https://www.facebook.com/pages/Greater-Philadelphia-GeoHistory-Network/89529024356
http://www.philaathenaeum.org
```

### → Bash

`UA="Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0 Safari/537.36"; for u in "https://www.philageohistory.org/rdic-images/" "https://www.philageohistory.org/" "https://www.philageohistory.org/tiles/viewer/"; do echo "### $u"; curl -sL -o /dev/null -w "final=%{url_effective} code=%{http_code} size=%{size_download}\n" -A "$UA" "$u"; done`

**Result:**

```
### https://www.philageohistory.org/rdic-images/
final=https://www.philageohistory.org/rdic-images/index2.cfm code=200 size=87125
### https://www.philageohistory.org/
final=https://www.philageohistory.org/geohistory/ code=200 size=7479
### https://www.philageohistory.org/tiles/viewer/
final=https://www.philageohistory.org/tiles/viewer/ code=200 size=33901
```

### → Bash

`UA="Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0 Safari/537.36"; curl -sL -A "$UA" "https://www.philageohistory.org/rdic-images/index2.cfm" -o /tmp/rb.html; curl -sL -A "$UA" "https://www.philageohistory.org/tiles/viewer/" -o /tmp/viewer.html; wc -c /tmp/rb.html /tmp/viewer.html`

### → WebSearch

`Hexamer Locher 1858 1860 "Maps of the City of Philadelphia" atlas plate Pine Street`

**Result:**

```
87125 /tmp/rb.html
   33901 /tmp/viewer.html
  121026 total
```

**Result:**

```
Web search results for query: "Hexamer Locher 1858 1860 "Maps of the City of Philadelphia" atlas plate Pine Street"

Links: [{"title":"Maps of the City of Philadelphia, 1858-1860, Plate 94, Section A1 - Digital Collections - Free Library","url":"https://libwww.freelibrary.org/digital/item/11896"},{"title":"Map Collection - Digital Collections - Free Library","url":"https://libwww.freelibrary.org/digital/collection/home/page/55/id/maps"},{"title":"Maps of the City of Philadelphia, vol. 2 - Plate 14 - Greater Philadelphia GeoHistory Network","url":"https://www.philageohistory.org/rdic-images/view-image.cfm/HXL1860v2-pl14"},{"title":"Of Philadelphia Maps And Mapmakers","url":"https://hiddencityphila.org/2013/05/of-philadelphia-maps-and-mapmakers/"},{"title":"Philadelphia Historic Maps - 1860 Historic Hexamer Locher Atlas AGO Imagery (JPEG) - Catalog","url":"https://catalog.data.gov/dataset/philadelphia-historic-maps/resource/5bffb4bf-6110-43f4-9634-04b901345b86?inner_span=True"},{"title":"Maps of the City of Philadelphia, 1858-1860, Title and Legend - Digital Collections - Free Library","url":"https://libwww.freelibrary.org/digital/item/MHXLBH00001"},{"title":"Maps of the City of Philadelphia, 1858-1860, Comprehensive Index - Digital Collections - Free Library","url":"https://libwww.freelibrary.org/digital/item/11835"},{"title":"Maps of the City of Philadelphia, vol. 1 - Comprehensive Index","url":"https://www.philageohistory.org/rdic-images/view-image.cfm/HXL1860-Super-Index"},{"title":"Hexamer & Locher Atlas of Philadelphia, 1857-1860","url":"https://losthistory.net/iconog/hlatlas/hl_intro.html"},{"title":"Maps | The Library of Congress","url":"https://loc.gov/maps/?dates=1800-1899&fa=partof%3Acatalog%7Clocation%3Apennsylvania&st=grid"}]

Here are the search results for "Hexamer Locher 1858 1860 Maps of the City of Philadelphia atlas plate Pine Street":

The Maps of the City of Philadelphia were surveyed by Ernest Hexamer and William Locher, Civil Engineers and Surveyors. The first fire atlas in Philadelphia was published in 1857 by Joseph Dietrich, Ernest Hexamer, and William Locher, and these maps came to be known simply as Hexamer Maps.

The maps were published in multiple volumes during 1858-1860, including Plate 94, Section A1. Volume 7 (1860) covered South Philadelphia, plates 91-97.

The Free Library of Philadelphia has digitized these maps and made them available through their digital collections. You can access individual plates from the atlas through their website. The search results show various references to specific plates and volumes, though I didn't find specific results mentioning Pine Street in particular. You may want to check the Free Library's digital collections directly or the Greater Philadelphia GeoHistory Network (PhilaGeoHistory.org) for specific plates related to Pine Street.


REMINDER: You MUST include the sources above in your response to the user using markdown hyperlinks.
```

### → Bash

`cd /tmp && python3 -c "
import re,html
s=open('/tmp/rb.html',encoding='utf-8',errors='replace').read()
s2=re.sub(r'<script.*?</script>','',s,flags=re.S|re.I)
s2=re.sub(r'<style.*?</style>','',s2,flags=re.S|re.I)
t=re.sub(r'<[^>]+>','|',s2); t=html.unescape(t); t=re.sub(r'(\|\s*)+','|',t)
print(t[:6000])
"`

**Result:**

```
|GeoHistory Resources - Greater Philadelphia GeoHistory Network|Home|Resources|Map Viewer|GeoHistory Resources|Home|Resources|Interactive Map Viewer|Search by Address
			|New Resources Feed
			|View Cart / Checkout
			|Filter Resources
				|Resource Type
						|Aerial Photographs
									|City Directories
									|General Atlas and Directory Maps
									|Historical Divisions and Boundaries
									|Hydrography / Water / Sewer
									|Industrial Site Surveys
									|Land Use / Zoning / Development
									|Neighborhood and Redlining
									|Other
									|Property Maps / Atlases
									|Property Plans
									|State Maps
									|Street Maps
									|Street Surveys / Plans
									|Topographical Maps
									|Transportation / Railroad Maps
									|Date Range
						|1680|1680|- |2018|2018|Geography
						|United States|Pennsylvania|Philadelphia|Regions|Center City|Kensington, Bridesburg, Richmond|North Philadelphia|Northeast Philadelphia|Northwest Philadelphia|South Philadelphia|Southwest Philadelphia|West Philadelphia|Philadelphia Suburbs|Southeast Pennsylvania|Bucks County|Chester County|Delaware County|Montgomery County|Other Counties|Adams County|Allegheny County|Armstrong County|Beaver County|Bedford County|Berks County|Blair County|Bradford County|Butler County|Cambria County|Cameron County|Carbon County|Centre County|Clarion County|Clearfield County|Clinton County|Columbia County|Crawford County|Cumberland County|Dauphin County|Elk County|Erie County|Fayette County|Forest County|Franklin County|Fulton County|Greene County|Huntingdon County|Indiana County|Jefferson County|Juniata County|Lackawanna County|Lancaster County|Lawrence County|Lebanon County|Lehigh County|Luzerne County|Lycoming County|McKean County|Mercer County|Mifflin County|Monroe County|Montour County|Northampton County|Northumberland County|Perry County|Pike County|Potter County|Schuylkill County|Snyder County|Somerset County|Sullivan County|Susquehanna County|Tioga County|Union County|Venango County|Warren County|Washington County|Wayne County|Westmoreland County|Wyoming County|York County|New Jersey|Counties|Burlington County|Camden County|Camden|Cape May County|Cumberland County|Gloucester County|Mercer County|Salem County|Maryland|Delaware|Contributor
						|Athenaeum of Philadelphia
									|Chester County Historical Society
									|Christ Church
									|DVRPC
									|Franklin Institute
									|Free Library of Philadelphia
									|Germantown Historical Society
									|Hagley Museum and Library
									|Historical Society of Frankford
									|Internet Archive
									|La Salle University
									|Library Company of Philadelphia
									|Lower Merion Township
									|Media Historic Archives Commission
									|Penn State
									|Phila. Museum of Art
									|Philadelphia Archaeological Forum
									|Philadelphia Historical Commission
									|Philadelphia Parks and Recreation
									|Philadelphia Streets Dept.
									|Philadelphia Water Dept.
									|Princeton University
									|Private Collection
									|Radnor Historical Society
									|University of Pennsylvania
									|Clear All Filters
					|Filters
			|Active Filters:|Clear all|Search Results
				|Loading...|Loading...|No resources found matching your criteria.|Try adjusting your filters or search terms.|Resource Details|Filter Resources|Greater Philadelphia GeoHistory Network|/ PhilaGeoHistory.org|A project of the |Athenaeum of Philadelphia|/ Permission is required to duplicate or publish materials on this site.|Admin|
```

### → Bash

`cd /tmp && grep -oE "(url|action|src)\s*[:=]\s*['\"][^'\"]+['\"]" /tmp/rb.html | sort -u | head -50; echo "=== cfm refs ==="; grep -oE "[A-Za-z0-9_./-]+\.cfm[^'\"]*" /tmp/rb.html | sort -u | head -40`

**Result:**

```
action="https://ww3.aitsafe.com/cf/review.cfm"
src="/geohistory/images/geohistorybanner-trans.jpg"
src="/rdic-images/common/jquery.highlight.js"
src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"
src="https://code.jquery.com/jquery-4.0.0.min.js"
src="https://code.jquery.com/ui/1.14.2/jquery-ui.min.js"
src="https://www.googletagmanager.com/gtag/js?id=G-YZZLEN4YZT"
=== cfm refs ===
//ww3.aitsafe.com/cf/review.cfm
//www.philageohistory.org/rdic-images/index2.cfm
/rdic-images/common/get-jpeg-medium.cfm/
/rdic-images/common/login.cfm
/rdic-images/new-maps-feed.cfm
/rdic-images/search-address.cfm
/rdic-images/view-image.cfm/
```

### → Bash

`cd /tmp && grep -oE "\\\$\.(get|post|ajax|getJSON)\([^)]{0,160}" /tmp/rb.html | head -30; echo "=== fetch ==="; grep -oE "fetch\([^)]{0,160}" /tmp/rb.html | head -20; echo "=== .cfc / api ==="; grep -oiE "[A-Za-z0-9_./-]*(api|cfc|json)[A-Za-z0-9_./?=&-]*" /tmp/rb.html | sort -u | head -40`

**Result:**

```
$.ajax({
$.ajax({
$.ajax({
$.ajax({
$.ajax({
=== fetch ===
=== .cfc / api ===
/cfc/ResourceBrowser.cfc
json
```

### → Bash

`cd /tmp && python3 - <<'EOF'
import re
s=open('/tmp/rb.html',encoding='utf-8',errors='replace').read()
for m in re.finditer(r'\$\.ajax\(\{', s):
    print(s[m.start():m.start()+700].replace('\t',' '))
    print('~~~~~~~~~~~~~~~~~~~~')
EOF`

**Result:**

```
$.ajax({
  url: urlbase + '/cfc/ResourceBrowser.cfc',
  method: 'POST',
  data: { method: 'getSearchResultsCount' },
  success: function(totalCount) {
   totalResourceCount = parseInt(totalCount) || 0;

   if (totalResourceCount === 0) {
    allResultsLoaded = true;
    $('#resourceResults').empty();
    applyFilters();
    return;
   }

   updateLoadingNote();
   loadChunk(0);
  },
  error: function() {
   $('#resourceResults').html('<div class="alert alert-danger">Error loading results. Please try again.</div>');
   $('#resultsCount').text('');
  }
 });
}

function getFilterList(selector) {
 const value = $(selector).val();
 if (!value) return [];
 return value.split(',').map(function(item
~~~~~~~~~~~~~~~~~~~~
$.ajax({
  url: urlbase + '/cfc/ResourceBrowser.cfc',
  method: 'POST',
  data: {
   method: 'outputSearchResultsBootstrap',
   offset: offset,
   limit: CHUNK_SIZE
  },
  success: function(response) {
   if (offset === 0) {
    // Replace loading spinner with first chunk
    $('#resourceResults').html(response);
   } else {
    // Append subsequent chunks
    $('#resourceResults').append(response);
   }

   loadedResourceCount = Math.min(offset + CHUNK_SIZE, totalResourceCount);

   if (loadedResourceCount < totalResourceCount) {
    applyFilters();
    setTimeout(function() {
     loadChunk(offset + CHUNK_SIZE);
    }, 50);
   } else {
    allResultsLoaded = true;
    applyFilters();
   }

~~~~~~~~~~~~~~~~~~~~
$.ajax({
  url: urlbase + '/cfc/ResourceBrowser.cfc',
  method: 'POST',
  data: {
   method: 'outputWorkInfoBootstrap',
   w: workId,
   i: imageId
  },
  success: function(response) {
   panelBody.html(response);
  },
  error: function() {
   panelBody.html('<div class="alert alert-danger m-3">Error loading details.</div>');
  }
 });
}

// Close details panel
function closeDetailsPanel() {
 $('#detailsPanel').removeClass('show');
 $('#detailsPanelOverlay').removeClass('show');
 $('body').css('overflow', '');

 // Clear content
 $('#detailsPanelBody').html('');

 // Deselect card
 $('.resource-card').removeClass('selected');
 currentWorkId = '';
 currentImageId = '';
 saveCurrentState();
}


~~~~~~~~~~~~~~~~~~~~
$.ajax({
  url: urlbase + '/cfc/ResourceBrowser.cfc',
  method: 'POST',
  dataType: 'json',
  data: {
   method: 'getWorkImages',
   w: workId
  },
  success: function(response) {
   sliderImages = response;
   updateSliderArrows();
  },
  error: function() {
   console.error('Failed to load slider images');
  }
 });
}

// Navigate to previous image
function sliderPrev() {
 if (sliderCurrentIndex > 0) {
  sliderCurrentIndex--;
  updateSliderImage();
 }
}

// Navigate to next image
function sliderNext() {
 if (sliderCurrentIndex < sliderImages.length - 1) {
  sliderCurrentIndex++;
  updateSliderImage();
 }
}

// Update the displayed image
function updateSliderImage() {
 if (sliderImages.lengt
~~~~~~~~~~~~~~~~~~~~
$.ajax({
  url: urlbase + '/cfc/ResourceBrowser.cfc',
  method: 'POST',
  data: {
   method: 'outputWorkInfoBootstrap',
   w: workId,
   i: imageId
  },
  success: function(response) {
   panelBody.html(response);

   // Initialize slider after content is loaded
   const slider = $('.image-slider');
   if (slider.length) {
    const startIndex = parseInt(slider.data('current-index')) || 0;
    loadSliderImages(workId, startIndex);
   }
  },
  error: function() {
   panelBody.html('<div class="alert alert-danger m-3">Error loading details.</div>');
  }
 });
};
</script>

</body>
</html>

~~~~~~~~~~~~~~~~~~~~
```

### → Bash

`UA="Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0 Safari/537.36"; curl -s -A "$UA" -H "X-Requested-With: XMLHttpRequest" -H "Referer: https://www.philageohistory.org/rdic-images/index2.cfm" -X POST -d "method=getSearchResultsCount" "https://www.philageohistory.org/rdic-images/cfc/ResourceBrowser.cfc" | head -c 500`

**Result:**

```
535
```

### → Bash

`UA="Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0 Safari/537.36"; : > /tmp/all.html; for o in 0 100 200 300 400 500; do curl -s -A "$UA" -H "Referer: https://www.philageohistory.org/rdic-images/index2.cfm" -X POST -d "method=outputSearchResultsBootstrap&offset=$o&limit=100" "https://www.philageohistory.org/rdic-images/cfc/ResourceBrowser.cfc" >`

**Result:**

```
932911 /tmp/all.html
```

### → Bash

`cd /tmp && python3 - <<'EOF'
import re,html,json
s=open('/tmp/all.html',encoding='utf-8',errors='replace').read()
# split into cards
cards=re.split(r'(?=<div[^>]*class="[^"]*resource-card)',s)
print("cards:",len(cards))
print(cards[1][:2500] if len(cards)>1 else s[:2500])
EOF`

**Result:**

```
cards: 536
<div class="resource-card featured-work"
						 data-work-id="Streets"
						 data-image-id=""
						 data-wt="20"
						 data-ct="10"
						 data-gti="1"
						 data-year="1680"
						 data-search="philadelphia streets department, survey and designs bureau philadelphia streets dept. street surveys / plans philadelphia streets department historic maps and plans 1680-1971 close to 3,000 largely manuscript plans that provide a view of the city earlier and deeper than available in regularly-available printed atlases and maps. anyone interested in just about any aspect of philadelphia’s built environment or history of landscape changes will find a wealth of information in this collection. philadelphia philadelphia, pa philadelphia streets department historic maps and plans 1680-1971 the streets department collection presented here is the culmination of nine years of work by a number of people interested in preserving these unique and information rich documents. close to 3,000 plans, if taken as a whole, provide a view of the city deeper than available in regularly-available printed atlases and maps. anyone interested in just about any aspect of philadelphia’s built environment or history of landscape changes will find a wealth of information in this collection. ">
					
					
							<div class="resource-thumb resource-thumb-placeholder resource-thumb-logo">
								<img src="/rdic-images/images/../images/streetslogo.png" alt="Philadelphia Streets Dept."
									 style="max-width: 70px; max-height: 70px; object-fit: contain;">
							</div>
						

					
					<div class="resource-info">
							
								<div class="resource-featured-indicator"><i class="bi bi-star-fill"></i> Featured Resource</div>
							
							<div class="resource-title">
								
								<a href="?w=Streets">
									Philadelphia Streets Department Historic Maps and Plans
								</a>
							</div>
							
								<div class="resource-featured-text">Close to 3,000 largely manuscript plans that provide a view of the city earlier and deeper than available in regularly-available printed atlases and maps. Anyone interested in just about any aspect of Philadelphia’s built environment or history of landscape changes will find a wealth of information in this collection.</div>
							

							<div class="resource-meta">
							
						</div>

						<div class="resource-badges">
							
								<span class="resource-badge">
									<i class="bi bi-calendar3 me-1"></i>1680&ndash;1971
								</span>
```

### → Bash

`cd /tmp && python3 - <<'EOF'
import re,html
s=open('/tmp/all.html',encoding='utf-8',errors='replace').read()
cards=re.split(r'(?=<div class="resource-card)',s)[1:]
rows=[]
for c in cards:
    wid=re.search(r'data-work-id="([^"]*)"',c)
    yr=re.search(r'data-year="([^"]*)"',c)
    title=re.search(r'<div class="resource-title">(.*?)</div>',c,re.S)
    t=''
    if title:
        t=re.sub(r'<[^>]+>',`

**Result:**

```
535 total; 128 in 1835-1875
1835 || HSF.D2E8 || Plan of the West Philadelphia Railroad || 1835 | Transportation / Railroad Maps
1835 || IA.philadelphiadire183536phil || Desilver's Philadelphia directory and strangers guide || 1835 – 1836 | City Directories
1837 || IA.mcelroysphiladel1837amce || A. M'Elroy's Philadelphia directory || 1837 | City Directories
1838 || HSF.D2F9 || Plan of Whitehall || 1838 | Property Plans
1839 || IA.mcelroysphiladel1839amce || A. M'Elroy's Philadelphia directory || 1839 | City Directories
1840 || IA.mcelroysphiladel1840amce || A. M'Elroy's Philadelphia directory || 1840 | City Directories
1840 || society-diffusion-phila-1840 || Philadelphia || 1840 | Street Maps
1840 || 237-MP-003 || Philadelphia || 1840 (circa) | General Atlas and Directory Maps
1841 || IA.mcelroysphiladel1841amce || A. M'Elroy's Philadelphia directory || 1841 | City Directories
1842 || IA.mcelroysphiladel1842amce || M'Elroy's Philadelphia directory || 1842 | City Directories
1843 || ellet || A Map of the County of Philadelphia || 1843 | Street Maps
1843 || IA.mcelroysphiladel1843amce || McElroy's Philadelphia directory || 1843 | City Directories
1844 || HSF.D2H6 || The Tourist's Pocket Map of Pennsylvania || 1844 | State Maps
1844 || IA.mcelroysphiladel1844amce || McElroy's Philadelphia directory || 1844 | City Directories
1845 || IA.mcelroysphiladel1845amce || McElroy's Philadelphia directory || 1845 | City Directories
1846 || 001-MP-006 || Fac-simile of Holmes-map of the province of Pennsylvania: with the names of the original purchasers from William Penn, begun in 1681. || 1846 | Other
1846 || IA.mcelroysphiladel1846amce || McElroy's Philadelphia directory || 1846 | City Directories
1846 || Jenk.001 || Fac-simile of Holmes-map of the province of Pennsylvania: with the names of the original purchasers from William Penn, begun in 1681. || 1846 | Other
1847 || HSF.D2G5 || Map of the Circuit of 10 Miles Around Philadelphia || 1847 | Street Maps
1847 || IA.mcelroysphiladel1847amce || McElroy's Philadelphia directory || 1847 | City Directories
1848 || FF-Maps_Dripps_Roxborough || Plan of the Township of Roxborough with the property holders' names &c. Manayunk by Jno. Levering. Surv. Published by M. Dripps, 1848. || 1848 | Street Surveys / Plans
1848 || HSF.D2H2 || Map of Pennsylvania || 1848 | State Maps
1848 || IA.mcelroysphiladel1848amce || McElroy's Philadelphia directory || 1848 | City Directories
1848 || GHS_001 || Map of the Township of Germantown || 1848 (circa) | Street Maps
1848 || FF-Maps_Dripps_LowerDublin || Plan of the Township of Lower Dublin by J. C. Sidney, 80 Walnut St., Philada. Copied by H. M. N. 1932, 4th Survey District. Probable date 1848. || 1848 ca. | Street Surveys / Plans
1849 || dripps || Map of the Township of Oxford, Boroughs of Frankford and Bridesburg || 1849 | Street Maps
1849 || FF-Maps_Dripps_ByberryMoreland || Plan of the townships of Byberry and Moreland, Phila. Co'y., by J. C. Sidney, Surveyor. Published by M. Dripps, Phila. 1849. Lith'y. of A. Kollner - H. Camps Lith. Press, Phoenix block, Phila. Copied by H. M. N., 4th Survey District, Feb'y. 1932 || 1849 | Street Surveys / Plans
1849 || HSF.D2F12 || Plan of the Townships of Byberry & Moreland Phila. Coy. || 1849 | Street Maps
1849 || HSF.D2G8 || Map of the City of Philadelphia together with all the surrounding Districts || 1849 | Street Maps
1849 || IA.mcelroysphiladel1849amce || McElroy's Philadelphia directory || 1849 | City Directories
1850 || 237-MP-008 || A Map of Philadelphia and Parts Adjacent with a Perspective View of the State-House, 1750 - Republished April 1850, by David Lobach, Lobachsville, Berks Co., PA || 1850 | Street Maps
1850 || HSF.D2F13 || Plan of the Township of Lower Dublin || 1850 | Street Maps
1850 || IA.mcelroysphiladel1850amce || McElroy's Philadelphia directory || 1850 | City Directories
1851 || GHS_002 || Map of the Township of Germantown, Philadelphia County, Penna. || 1851 | Street Maps
1851 || GHS_003 || Map of the Borough of Germantown || 1851 | Street Maps
1851 || HSF.D2F34 || Plan of the Frankford Land Association Lots || 1851 | Property Plans
1851 || IA.mcelroysphiladel1851amce || McElroy's Philadelphia directory || 1851 | City Directories
1852 || 237-MP-016 || A Prospective View of the Battle fought near Lake George, on the 8th of Sept. 1755, between 2000 English, with 250 Mohawks. || 1852 | Other
1852 || IA.mcelroysphiladel1852amce || McElroy's Philadelphia directory || 1852 | City Directories
1853 || GR.VII.09 || Map of Water Pipes now Supplied by Fair Mount Water Works || 1853 | Hydrography / Water / Sewer
1853 || HSF.D2G16 || Map of the Vicinity of Philadelphia from actual surveys || 1853 | Street Maps
1853 || IA.mcelroysphiladel1853amce || McElroy's Philadelphia directory || 1853 | City Directories
1853 || PWD1853-1 || Map of water pipes now supplied from Fair Mount [Fairmount] Water Works || 1853 | Hydrography / Water / Sewer
1854 || FF-Maps_Consolidation || Map showing districts, boroughs and townships incorporated in the consolidation of Philadelphia in 1854 || 1854 | Street Surveys / Plans
1854 || IA.mcelroysphiladel1854amce || McElroy's Philadelphia directory || 1854 | City Directories
1855 || 237-MP-014 || Johnson's Delaware and Maryland || 1855 | State Maps
1855 || barnes || Barnes' New Map of the Consolidated City of Philadelphia || 1855 | Street Maps
1855 || HSF.D2D19 || New Map of the Consolidated City of Philadelphia || 1855 | Street Maps
1855 || HSF.D2D23 || City of Philadelphia as Now Consolidated || 1855 | Street Maps
1855 || Hughes_MapOfMedia_1855 || Map of Media || 1855 | Property Maps / Atlases
1855 || IA.mcelroysphiladel1855amce || McElroy's Philadelphia directory || 1855 | City Directories
1856 || 237-MP-001 || Map of Fairmount Park and its Connexions || 1856 | Other
1856 || IA.mcelroysphiladel1856amce || McElroy's Philadelphia directory || 1856 | City Directories
1856 || JDS1856.Phila || Scott's Map of the Consolidated City of Philadelphia ||
…[truncated]
```

### Reasoning

Excellent — I have the full GeoHistory catalog via its API. Let me now pull property-atlas entries and the specific work records.

### → Bash

`cd /tmp && python3 - <<'EOF'
import re,html
s=open('/tmp/all.html',encoding='utf-8',errors='replace').read()
cards=re.split(r'(?=<div class="resource-card)',s)[1:]
rows=[]
for c in cards:
    wid=re.search(r'data-work-id="([^"]*)"',c); yr=re.search(r'data-year="([^"]*)"',c)
    title=re.search(r'<div class="resource-title">(.*?)</div>',c,re.S)
    t=' '.join(html.unescape(re.sub(r'<[^>]+>','',titl`

**Result:**

```
===== ALL 'Property Maps / Atlases' =====
1683 || HOL1683.Phila || A portraiture of the city of Philadelphia in the province of Pennsylvania in America. || 1683 | Property Maps / Atlases
1777 || Phila1777 || Mapping West Philadelphia || 1777 (2012) | Property Maps / Atlases
1855 || Hughes_MapOfMedia_1855 || Map of Media || 1855 | Property Maps / Atlases
1858 || HXL1858 || Maps of the City of Philadelphia, 1858-1860 || 1858–1860 | Property Maps / Atlases
1862 || SMD1860.Phila || Smedley's Atlas of the City of Philadelphia || 1862 | Property Maps / Atlases
1870 || GMH1870.DelawareCounty || Atlas of Delaware County, Pennsylvania || 1870 | Property Maps / Atlases
1871 || GMH1871.Germantown || Atlas of (the late borough of) Germantown || 1871 | Property Maps / Atlases
1873 || ARW1873.ChesterCounty || Atlas of Chester County, Pennsylvania || 1873 | Property Maps / Atlases
1874 || GHJ1874.PhilaWard19 || Atlas of Philadelphia in fifteen Volumes, Vol. 2 || 1874 | Property Maps / Atlases
1875 || 147-MP-001 || Plan of Sea Grove, Cape May, NJ Lots For Sale || 1875 | Property Maps / Atlases
1875 || 237-MP-024 || Philadelphia 100 Years Ago || 1875 | Property Maps / Atlases
1875 || GHJ1875.PhilaWard20 || Atlas of Philadelphia in fifteen Volumes, Vol. 4 || 1875 | Property Maps / Atlases
1875 || GHJ1875.PhilaWards6_9_10 || Atlas of Philadelphia in fifteen Volumes, Vol. 3 || 1875 | Property Maps / Atlases
1875 || GMH1875.PhilaWard25 || City Atlas of Philadelphia, vol. 4 || 1875 | Property Maps / Atlases
1875 || GMH1875.PhilaWards21_28 || City Atlas of Philadelphia, vol. 2 || 1875 | Property Maps / Atlases
1875 || GMH1875v6 || City Atlas of Philadelphia, vol. 6 || 1875 | Property Maps / Atlases
1876 || DJS1876.CumberlandCo || Combination Atlas Map of Cumberland County, New Jersey || 1876 | Property Maps / Atlases
1876 || GMH1876.PhilaWard23 || City Atlas of Philadelphia, vol. 3 || 1876 | Property Maps / Atlases
1877 || GMH1877.PhilaEnvirons || Atlas of Philadelphia and Environs || 1877 | Property Maps / Atlases
1878 || SCT1878.PhilaWards24_27 || Atlas of the 24th & 27th Wards. West Philadelphia || 1878 | Property Maps / Atlases
1880 || HBA1880.DelawareCounty || Atlas of Delaware County, Pennsylvania || 1880 | Property Maps / Atlases
1881 || GMH1881.BrynMawr || Atlas of Bryn Mawr and Vicinity || 1881 | Property Maps / Atlases
1883 || WHK1883.ChesterCounty || Chester County, Pennsylvania || 1883 | Property Maps / Atlases
1884 || PSU-SANBORN || Sanborn Map Collection at Penn State || 1884–1923 | Property Maps / Atlases
1885 || bromley1885 || Atlas of the City of Philadelphia, 1885 || 1885 | Property Maps / Atlases
1885 || GMH1885.PhilaandTrentonRR_FrankfordToTrenton || Atlas of Properties near the Philadelphia and Trenton Rail Road (New York Div., Pennsylvania Rail Road), Frank || 1885 | Property Maps / Atlases
1885 || SAN1885.Camden || Insurance maps of Camden, New Jersey || 1885–1926 | Property Maps / Atlases
1886 || BST1886.WPhila || Atlas of West Philadelphia, 24th and 27th Wards || 1886 | Property Maps / Atlases
1886 || GMH1886.PhilaWard25 || Atlas of the City of Philadelphia || 1886 | Property Maps / Atlases
1887 || BRM1887.PhilaWards1_2_3_4 || Atlas of the City of Philadelphia. Volume 5 || 1887 | Property Maps / Atlases
1887 || BRM1887.PhilaWards18_19_31 || Atlas of the City of Philadelphia. Volume 4 || 1887 | Property Maps / Atlases
1887 || GMH1887.PhilaWard23 || Atlas of the City of Philadelphia || 1887 | Property Maps / Atlases
1887 || JLS1887.OverbrookToMalvern || Atlas of Properties Along the Pennsylvania R.R. from Overbrook to Malvern Station || 1887 | Property Maps / Atlases
1888 || BRM1888.PhilaWards28_32 || Atlas of the City of Philadelphia. Volume 6 || 1888 | Property Maps / Atlases
1888 || BST1888.Phila || Baist's Atlas of the City of Philadelphia, Penna. || 1888 | Property Maps / Atlases
1889 || BRM1889.PhilaWard22 || Atlas of the City of Philadelphia. Volume 7 || 1889 | Property Maps / Atlases
1889 || JLS1889.BORR || Atlas of Properties along the Philadelphia, Wilmington and Baltimore R.R., Baltimore & Ohio R.R., Phila. & Wes || 1889 | Property Maps / Atlases
1891 || BRM1891.PhilaWard25_33 || Atlas of the City of Philadelphia. Volume 9 || 1891 | Property Maps / Atlases
1891 || BST1891.NPBBPRR || Atlas of the Properties Along the North Pennsylvania, Bound Brook, and Pennsylvania Railroads || 1891 | Property Maps / Atlases
1892 || BRM1892.PhilaWard21 || Atlas of the City of Philadelphia. Volume 12 || 1892 | Property Maps / Atlases
1892 || SAM1892.DelawareCounty || Atlas of Delaware County || 1892 | Property Maps / Atlases
1892 || SAM1892.DelawareCounty_c2 || Farm line and Borough Atlas of Delaware County, Pennsylvania || 1892 | Property Maps / Atlases
1893 || BST1893.NWBurbs || Baist's Atlas of the Properties in the Northwest Suburbs of Philadelphia || 1893 | Property Maps / Atlases
1893 || MUE1893.WayneAndSurroundings || Map of Wayne and Surroundings || 1893 | Property Maps / Atlases
1893 || MUE1893.Wayne-StDavids || Map Showing Wayne and Surroundings || 1893 | Property Maps / Atlases
1894 || BRM1894.PhilaWards23_35 || Atlas of the City of Philadelphia. (Volume 13) || 1894 | Property Maps / Atlases
1895 || bromley1895 || Atlas of the City of Philadelphia || 1895 | Property Maps / Atlases
1895 || BST1885.Phila || Baist's Property Atlas of the City and County of Philadelphia, Penna. || 1895 | Property Maps / Atlases
1895 || BST1895.Phila || Baist's Property Atlas of the City and County of Philadelphia, Penna. || 1895 | Property Maps / Atlases
1896 || BRM1896.PhilaCentralBusinessPropertyVol2 || Atlas of the City of Philadelphia. Central Business Property, Volume 2 || 1896 | Property Maps / Atlases
1896 || MUE1896.LowerMerion || Atlas of Lower Merion, Montgomery Co., including part of Delaware Co. and Overbrook Farms, Wynnefield, and Ove || 1896 | Property Maps / Atlases
1897 || MUE1897.RosemontToWestChester || Atlas of Properties on Line of Pennsylvania R.R. from Rosemont to Westchester || 189
…[truncated]
```

### → Bash

`UA="Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0 Safari/537.36"; for w in HXL1858 SMD1860.Phila ellet barnes JDS1856.Phila; do echo "##### $w"; curl -s -A "$UA" -H "Referer: https://www.philageohistory.org/rdic-images/index2.cfm" -X POST -d "method=outputWorkInfoBootstrap&w=$w&i=" "https://www.philageohistory.org/rdic-images/cfc/ResourceBrowse`

**Result:**

```
##### HXL1858
    4447
##### SMD1860.Phila
    5622
##### ellet
    4307
##### barnes
    4553
##### JDS1856.Phila
    4573
```

### Reasoning

You've hit your weekly limit · resets Aug 29 at 10pm (America/New_York)
