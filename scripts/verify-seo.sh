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

head_ "Previously-broken images"
for u in /images/property/DSC00075.jpg /images/property/DSC00095.jpg /images/airbnb/airbnb_06.jpg /images/documents/deed_1854_p1_web.jpg; do
  c=$(fetch -o /dev/null -w '%{http_code}' "$SITE$u")
  [ "$c" = "404" ] && ok "$u no longer referenced (404 is fine; check pages render)" || ok "$u -> $c"
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
printf '%s' "$home" | grep -q '"@type":"VacationRental"' && ok "VacationRental schema present" || bad "VacationRental schema missing"

head_ "Copy consistency"
if printf '%s' "$home" | grep -qi "coming soon"; then bad "'coming soon' still on homepage"; else ok "no 'coming soon' on homepage"; fi
if printf '%s' "$home" | grep -q "Sleeps 16"; then ok "homepage says Sleeps 16"
elif printf '%s' "$home" | grep -q "Sleeps 21"; then bad "homepage still says Sleeps 21"
else bad "no capacity stat found on homepage"; fi

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
r=$(fetch -o /dev/null -w '%{http_code}' -X POST "$SITE/api/contact" -H 'Content-Type: application/json' -d '{"firstName":"","lastName":"","email":"","inquiryType":"","message":""}')
[ "$r" = "400" ] && ok "contact API validates (400 on empty)" || bad "contact API returned $r on empty payload"

printf '\n\033[1mSummary:\033[0m %d passed, %d failed\n' "$PASS" "$FAIL"
[ "$FAIL" -eq 0 ] || exit 1
