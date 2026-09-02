#!/usr/bin/env bash
# Live-site verification for rittenhouseresidence.com
#
# Checks every fix from the 2026-08 SEO/AEO overhaul against the LIVE site.
# Run it before deploying (to see the current damage) and after (to confirm).
#
#   bash scripts/verify-seo.sh
#
# Exit code 0 = all pass, 1 = at least one failure.

SITE="${SITE:-https://rittenhouseresidence.com}"
PASS=0; FAIL=0
ok()   { printf '  \033[32mPASS\033[0m  %s\n' "$1"; PASS=$((PASS+1)); }
bad()  { printf '  \033[31mFAIL\033[0m  %s\n' "$1"; FAIL=$((FAIL+1)); }
head_() { printf '\n\033[1m%s\033[0m\n' "$1"; }

fetch() { curl -sS -m 20 "$@"; }

# Portable DNS resolution check. Do NOT use `getent` here: it is glibc-only,
# and on macOS the name is shadowed by ugrep, which exits 1 for every host —
# that produced a phantom "www.1822pine.com does NOT resolve" failure for
# weeks after the DNS was actually correct.
resolves() {
  if command -v host >/dev/null 2>&1; then host -W 5 "$1" >/dev/null 2>&1
  elif command -v dig >/dev/null 2>&1; then [ -n "$(dig +short +time=5 "$1" 2>/dev/null)" ]
  else python3 -c "import socket,sys; socket.gethostbyname(sys.argv[1])" "$1" >/dev/null 2>&1
  fi
}

head_ "Domains & redirect chains"
# All non-canonical domains must reach the apex in ONE hop, over https, with
# the path preserved — a redirect that drops the path loses every deep link's
# equity. Verified working 2026-08-27: all four are on Vercel nameservers
# serving 308s.
for d in therittenhouseresidence.com 1822pine.com www.1822pine.com; do
  if ! resolves "$d"; then bad "$d does NOT resolve (check DNS)"; continue; fi
  ok "$d resolves"

  loc=$(fetch -o /dev/null -D - "https://$d/" 2>/dev/null | grep -i '^location:' | tr -d '\r' | awk '{print $2}')
  case "$loc" in
    https://rittenhouseresidence.com*) ok "$d -> $loc" ;;
    http://*)  bad "$d redirects to INSECURE $loc (should be https://)" ;;
    "")        bad "$d returned no redirect (expected 308 to apex)" ;;
    *)         bad "$d -> unexpected $loc" ;;
  esac

  # One hop, and deep links keep their path.
  hops=$(curl -sL -m 20 -o /dev/null -w '%{num_redirects}' "https://$d/" 2>/dev/null)
  [ "${hops:-9}" -le 1 ] && ok "$d reaches apex in $hops hop" || bad "$d takes $hops hops (should be 1)"

  deep=$(fetch -o /dev/null -D - "https://$d/rates" 2>/dev/null | grep -i '^location:' | tr -d '\r' | awk '{print $2}')
  [ "$deep" = "https://rittenhouseresidence.com/rates" ] \
    && ok "$d preserves paths (/rates)" \
    || bad "$d drops the path: /rates -> ${deep:-nothing}"
done
code=$(fetch -o /dev/null -w '%{http_code}' "$SITE/")
[ "$code" = "200" ] && ok "apex returns 200" || bad "apex returns $code"

head_ "Canonicals (the sitewide indexing suppressor)"
for path in "" /stay /rates /faq /book /gallery /history; do
  canon=$(fetch "$SITE$path" | grep -o '<link rel="canonical" href="[^"]*"' | head -1 | sed 's/.*href="//;s/"//')
  want="$SITE$path"; [ -z "$path" ] && want="$SITE"
  if [ "$canon" = "$want" ]; then ok "${path:-/} canonical correct"
  elif [ "$canon" = "$SITE" ] || [ "$canon" = "$SITE/" ]; then bad "${path:-/} canonical points at HOMEPAGE ($canon) — duplicate-content suppressor"
  else bad "${path:-/} canonical = '${canon:-missing}'"; fi
done

head_ "Sitemap"
sm=$(fetch "$SITE/sitemap.xml")
n=$(printf '%s' "$sm" | grep -c '<loc>')
[ "$n" -ge 90 ] && ok "sitemap has $n URLs" || bad "sitemap has only $n URLs (expect ~95)"
docs=$(printf '%s' "$sm" | grep -c 'history/documents/')
[ "$docs" -ge 60 ] && ok "$docs document pages listed" || bad "only $docs document pages listed (expect 63)"
if printf '%s' "$sm" | grep -q 'the-roser-years\|the-spencer-era\|the-restoration'; then
  bad "sitemap still lists slugs that 404"
else ok "no dead story slugs in sitemap"; fi

head_ "Crawlers & AI discovery"
rb=$(fetch "$SITE/robots.txt")
for bot in GPTBot ClaudeBot PerplexityBot OAI-SearchBot; do
  printf '%s' "$rb" | grep -qi "$bot" && ok "robots.txt allows $bot" || bad "robots.txt missing $bot"
done
if printf '%s' "$rb" | awk '/^User-Agent: \*/{f=1;next} /^User-Agent:/{f=0} f' | grep -qi 'Disallow:[[:space:]]*/_next/'; then
  bad "robots.txt blocks /_next/ for Googlebot — hides CSS/JS and ALL next/image assets"
else ok "robots.txt does not block /_next/ (CSS, JS and images crawlable)"
fi
lc=$(fetch -o /dev/null -w '%{http_code}' "$SITE/llms.txt")
[ "$lc" = "200" ] && ok "/llms.txt served" || bad "/llms.txt returns $lc"
llms=$(fetch "$SITE/llms.txt")
printf '%s' "$llms" | grep -q 'Select weekdays may be available from about \$1,600' \
  && ok "/llms.txt qualifies the sample weekday price" \
  || bad "/llms.txt is missing the qualified sample price"
printf '%s' "$llms" | grep -q 'website itself has no checkout' \
  && ok "/llms.txt states the booking mechanism" \
  || bad "/llms.txt is missing the no-on-site-checkout fact"
if printf '%s' "$llms" | grep -qiE '1822 Pine|1822pinestreet|no platform service fee|instant booking'; then
  bad "/llms.txt exposes the exact address or an obsolete booking promise"
else ok "/llms.txt passes privacy and booking-consistency checks"; fi

head_ "Current property-tour images"
for u in /images/property-tour/01-living-room-1-01.webp /images/property-tour/28-bedroom-1-02.webp /images/property-tour/45-rooftop-01.webp; do
  c=$(fetch -o /dev/null -w '%{http_code}' "$SITE$u")
  [ "$c" = "200" ] && ok "$u -> 200" || bad "$u returns $c"
done
arch=$(fetch "$SITE/history/documents" | grep -o '/archive/images/web/[A-Za-z0-9_.%-]*\.jpg' | head -1)
if [ -n "$arch" ]; then
  c=$(fetch -o /dev/null -w '%{http_code}' "$SITE$arch")
  [ "$c" = "200" ] && ok "history archive images load ($c)" || bad "archive image returns $c — build script not syncing assets"
else
  bad "no archive image URLs found on /history/documents"
fi

head_ "Schema integrity"
home=$(fetch "$SITE/")
for bad_str in "Recent Guest" "starRating" "Free parking"; do
  printf '%s' "$home" | grep -q "$bad_str" && bad "schema still contains '$bad_str'" || ok "no '$bad_str' in schema"
done
printf '%s' "$home" | grep -q '"@type":"LodgingBusiness"' \
  && printf '%s' "$home" | grep -q '"@type":"House"' \
  && ok "homepage schema connects a LodgingBusiness and House" \
  || bad "homepage LodgingBusiness/House graph is missing"
printf '%s' "$home" | grep -q '"@id":"https://rittenhouseresidence.com/#rittenhouse-residence"' \
  && printf '%s' "$home" | grep -q '"containsPlace":{"@id":"https://rittenhouseresidence.com/#whole-house"}' \
  && printf '%s' "$home" | grep -q '"@id":"https://rittenhouseresidence.com/#whole-house"' \
  && ok "homepage schema uses stable, connected entity ids" \
  || bad "homepage schema entity ids are missing or disconnected"
if printf '%s' "$home" | grep -q '"@type":"VacationRental"'; then
  bad "homepage still publishes Google-specific VacationRental markup"
else ok "homepage has no VacationRental markup"; fi
for path in /reviews /philadelphia-events /neighborhood/group-dining; do
  page=$(fetch "$SITE$path")
  if printf '%s' "$page" | grep -q '"@type":"VacationRental"'; then
    bad "$path still publishes a sitewide VacationRental item"
  else ok "$path has no VacationRental item"; fi
  if printf '%s' "$page" | grep -q '"@type":"LodgingBusiness"'; then
    bad "$path still inherits the homepage LodgingBusiness"
  else ok "$path has no homepage-only LodgingBusiness"; fi
done
printf '%s' "$home" | grep -q '"numberOfBedrooms":8' \
  && printf '%s' "$home" | grep -q '"accommodationCategory":"Entire house"' \
  && printf '%s' "$home" | grep -q '"numberOfFullBathrooms":5' \
  && printf '%s' "$home" | grep -q '"numberOfPartialBathrooms":1' \
  && ok "House schema identifies an entire house with 8 bedrooms, 5 full baths, and 1 powder room" \
  || bad "House type, bedroom, or bathroom facts are stale"
printf '%s' "$home" | grep -q '"occupancy":{"@type":"QuantitativeValue","value":16,"maxValue":16,"unitCode":"C62","unitText":"guests"}' \
  && ok "House schema occupancy is 16 guests" \
  || bad "House occupancy is missing or not 16 guests"
printf '%s' "$home" | grep -q '"floorSize":{"@type":"QuantitativeValue","value":7000,"unitCode":"FTK"}' \
  && ok "House schema floor area is 7,000 square feet" \
  || bad "House floor area is missing or stale"
printf '%s' "$home" | grep -q '"numberOfBeds":2,"typeOfBed":"King"' \
  && printf '%s' "$home" | grep -q '"numberOfBeds":6,"typeOfBed":"Queen"' \
  && ! printf '%s' "$home" | grep -q '"typeOfBed":"Double"' \
  && ok "schema bed mix includes 2 kings and 6 queens" \
  || bad "schema bed mix is stale (expect 2 kings and 6 queens)"
printf '%s' "$home" | grep -q '"image":\["https://rittenhouseresidence.com/images/property-tour/01-living-room-1-01.webp"' \
  && ok "property schema uses the approved public image set" \
  || bad "property schema approved image set is missing"
printf '%s' "$home" | grep -q '"name":"Wi-Fi","value":true' \
  && printf '%s' "$home" | grep -q '"name":"Air conditioning","value":true' \
  && printf '%s' "$home" | grep -q '"name":"Kitchen","value":true' \
  && printf '%s' "$home" | grep -q '"name":"Washer","value":true' \
  && printf '%s' "$home" | grep -q '"name":"Dryer","value":true' \
  && printf '%s' "$home" | grep -q '"name":"Private roof deck","value":true' \
  && ok "House schema lists the verified amenities" \
  || bad "House amenity schema is missing or stale"
printf '%s' "$home" | grep -q '"sameAs":\["https://www.airbnb.com/rooms/6000930","https://www.vrbo.com/757481"\]' \
  && ok "property schema links the Airbnb and Vrbo listings" \
  || bad "property schema OTA sameAs links are missing"
if printf '%s' "$home" | grep -qE '"aggregateRating":|"review":'; then
  bad "homepage publishes ineligible property rating/review JSON-LD"
else ok "homepage property schema omits aggregateRating and review"; fi
if printf '%s' "$home" | grep -qE '"tourBookingPage":|"licenseNum"|"propertyID":'; then
  bad "homepage schema exposes a tour field or STR registry lookup key"
else ok "homepage schema omits tour semantics and the STR registry lookup key"; fi
if printf '%s' "$home" | grep -qE '"numberOfRooms":|"numberOfBathroomsTotal":'; then
  bad "homepage schema misuses a total-room or fractional-bath field"
else ok "homepage schema uses explicit bedroom and bathroom fields"; fi
if printf '%s' "$home" | grep -qE '"streetAddress":|"geo":|"GeoCoordinates"|"latitude":|"longitude":|39\.9468|-75\.1715'; then
  bad "homepage schema exposes the precise address or coordinates"
elif printf '%s' "$home" | grep -q '"addressLocality":"Philadelphia","addressRegion":"PA","postalCode":"19103","addressCountry":"US"'; then
  ok "homepage schema uses city, region, postal code, and country only"
else bad "homepage schema public-area address is missing"; fi

for private_image in \
  /images/property/DSC00116.jpg \
  /images/property/DSC00118.jpg \
  /images/property/DSC08855.jpg \
  /archive/images/web/airbnb/airbnb_00.jpg; do
  c=$(fetch -o /dev/null -w '%{http_code}' "$SITE$private_image")
  [ "$c" = "404" ] \
    && ok "$private_image is not publicly served" \
    || bad "$private_image still serves ($c) and visibly reveals a house number"
done

head_ "Copy consistency"
if printf '%s' "$home" | grep -qi "coming soon"; then bad "'coming soon' still on homepage"; else ok "no 'coming soon' on homepage"; fi
if printf '%s' "$home" | grep -q "Sleeps 16"; then ok "homepage says Sleeps 16"
elif printf '%s' "$home" | grep -q "Sleeps 21"; then bad "homepage still says Sleeps 21"
else bad "no capacity stat found on homepage"; fi
if printf '%s' "$home" | grep -qiE '1822 Pine Street|1822pinestreetpa@gmail\.com'; then
  bad "homepage exposes the exact address or address-derived inbox"
else ok "homepage passes exact-address privacy check"; fi

head_ "Performance & measurement"
sz=$(fetch -o /dev/null -w '%{size_download}' "$SITE/images/brand/logo.jpg")
if [ "$sz" -lt 200000 ]; then ok "logo is $((sz/1024))KB"; else bad "logo is $((sz/1024))KB (should be ~52KB)"; fi
printf '%s' "$home" | grep -q 'googletagmanager.com/gtag/js' && ok "GA4 tag present" || bad "GA4 tag missing"
# The owned property is G-ZCR1ZQVTKH ("1822 Pine", account RPLogic New
# Analytics). The old hardcoded fallback G-YYXHNWZ4PK collects nothing.
if printf '%s' "$home" | grep -q 'G-ZCR1ZQVTKH'; then ok "GA4 id is G-ZCR1ZQVTKH (owned property)"
elif printf '%s' "$home" | grep -q 'G-YYXHNWZ4PK'; then bad "GA4 id is the dead fallback G-YYXHNWZ4PK — NEXT_PUBLIC_GA_ID env var lost?"
else bad "GA4 id is neither the owned property nor the known fallback"; fi
# The <Analytics /> component injects its tag client-side after hydration, so
# grepping server-rendered HTML always misses it. The reliable signal is the
# insights endpoint: it serves 200 when Web Analytics is enabled, 404 when not.
vi=$(fetch -o /dev/null -w '%{http_code}' "$SITE/_vercel/insights/script.js")
[ "$vi" = "200" ] && ok "Vercel Analytics enabled (insights script serves 200)" || bad "Vercel Analytics not active (script -> $vi; enable in dashboard)"
ttfb=$(fetch -o /dev/null -w '%{time_starttransfer}' "$SITE/")
ok "TTFB ${ttfb}s"

head_ "Contact API"
challenge=$(fetch "$SITE/api/contact")
printf '%s' "$challenge" | grep -q '"formToken"' \
  && ok "contact API issues a no-cache signed form challenge" \
  || bad "contact API did not issue a signed form challenge"
r=$(fetch -o /dev/null -w '%{http_code}' -X POST "$SITE/api/contact" -H 'Content-Type: application/json' -d '{"firstName":"","lastName":"","email":"","inquiryType":"","message":""}')
case "$r" in
  403) ok "contact API blocks direct non-browser submissions (BotID)" ;;
  400) ok "contact API validates empty submissions (local development)" ;;
  *) bad "contact API returned $r on an empty direct submission" ;;
esac

head_ "Availability API (RentalAgent)"
# Dates far enough ahead to be a legitimate enquiry and stable across runs.
av_in=$(python3 -c 'import datetime; print(datetime.date.today() + datetime.timedelta(days=120))')
av_out=$(python3 -c 'import datetime; print(datetime.date.today() + datetime.timedelta(days=123))')
av=$(fetch "$SITE/api/availability?checkIn=$av_in&checkOut=$av_out")
case "$av" in
  *'"status":"open"'*|*'"status":"booked"'*)
    ok "availability API returns a confirmed verdict (RentalAgent connected)" ;;
  *'"status":"unconfirmed"'*)
    ok "availability API answers unconfirmed (safe; RentalAgent unconfigured or calendar not fresh)" ;;
  *) bad "availability API returned an unexpected body" ;;
esac
# Nothing operational may ever appear in a public availability response.
if printf '%s' "$av" | grep -Eqi 'reservation|provider|listing|blocker|provenance|issueCode|propertyId'; then
  bad "availability API leaked operational detail into a public response"
else
  ok "availability API exposes only status/dates/nights"
fi
# A range under the house minimum must be refused before any upstream call.
r=$(fetch -o /dev/null -w '%{http_code}' "$SITE/api/availability?checkIn=$av_in&checkOut=$av_in")
[ "$r" = "400" ] && ok "availability API rejects an invalid range" || bad "availability API returned $r on an invalid range"

printf '\n\033[1mSummary:\033[0m %d passed, %d failed\n' "$PASS" "$FAIL"
[ "$FAIL" -eq 0 ] || exit 1
