<!-- Synthesis of the 2026-08-27 build-date investigation, prompted by the
owner's question: "Prove to me the house was finished being built in 1854 —
I still think it was earlier."

The directory analysis in Part 1 was run directly and is reproducible from the
script at the bottom. Parts 2 and 3 come from research agents that were killed
mid-run by an API weekly limit; their full traces are the sibling files in this
directory. Anything marked [PARTIAL] should be re-verified before publishing. -->

# Was 1822 Pine built in 1854, or earlier?

**Short answer: 1854 stands. "c. 1845" does not, and we can now say why it exists.**

The strict logical residue is stated at the end: the records establish *occupancy*,
not the day the masons finished. But the "built c.1845" hypothesis is dead.

---

## Part 1 — The development frontier of Pine Street, year by year [GRADE A]

Method: download the full OCR text of McElroy's Philadelphia city directory for
each year, then count every distinct `<nnn> Pine` house number in the volume.
Before the 1858 renumbering, 1822 Pine was **756 Pine**, and the 1800 block was
old **734–775**. (The +1066 offset for this block is proved by nine same-surname
pairs across the 1857→1858 volumes — see `08-census-directories.md`, Finding 2.)

| Volume | Highest occupied Pine no. | 1700 block (700–732) | **1800 block (734–780)** |
|---|---|---|---|
| 1849 | 399 | 0 | **0** |
| 1850 | 514 | 0 | **0** |
| 1851 | 486 | 0 | **0** |
| 1852 | 534 | 0 | **0** |
| 1853 | 708 | 6 | **0** |
| 1854 | 793 | 15 | **9** |
| 1855 | 795 | 21 | **19** |
| 1856 | 795 | 25 | **20** |

Read the first column. Through 1852 the occupied end of Pine Street stops in the
300s–500s — roughly 15th Street. **Not one house number in the 700s appears in any
volume before 1853.** The frontier then moves west about a block a year: it reaches
the 1700 block in 1853, the 1800 block in 1854, and the 1800 block is complete at
nineteen houses in 1855.

John McCrea conveyed the house to John Roset on **21 April 1854**. Roset appears at
756 Pine in the 1855 volume. Both fit the frontier exactly.

### The confound, closed [GRADE A]

Early directories often located people descriptively — "Pine ab 18th" — rather than
by number, which would hide an occupied house from a number-based count. So the same
volumes were searched for descriptive entries placing anyone on Pine near 16th–19th:

| Volume | Descriptive entries near 16th–19th | Descriptive Pine entries in total |
|---|---|---|
| 1849 | **0** | 126 |
| 1850 | **0** | 121 |
| 1851 | **0** | 151 |
| 1852 | **0** | 171 |
| 1853 | **0** | 180 |
| 1854 | 17 | 174 |
| 1855 | 18 | 260 |

Two independent listing conventions. Both empty through 1853. Both fill in 1854.
This is not a canvassing gap.

---

## Part 2 — Where "c. 1845" actually comes from [PARTIAL, GRADE A quotes]

The claim is on Redfin, on both listings, and in the Philadelphia Architects and
Buildings database. It traces to two survey documents, and **neither one assigns it
to this block.**

**The 1983 National Register nomination** contains "c. 1845" exactly four times. The
only Pine Street instance is the block to the east, verbatim:

> "1700-38 4-story, late Greek Revival townhouses, marble trim and door surrounds,
> modillioned wood cornice, c.1845. Contributing."

The other three are 2014 Spruce, 2300 Spruce, and 254–60 (elsewhere in the district).

**The 1995 City inventory**'s "c. 1845" occurrences are 1622 Pine (a Notman double
cityhouse, dated "c. 1845-1855"), a Greek Revival rowhouse, 2300 Spruce, 254–260,
and 411. Again — **not 1800–1836 Pine**, which the inventory dates not at all.

Two further tells that the date is soft:

- **The City's own OPA record gives `year_built` = "1800" with the estimate flag set
  to `"Y"`** — an explicit placeholder, not a finding.
- **PHMC applies the same "c. 1845" to 1905–1913 Pine**, a row the National Register
  describes as vernacular/Italianate — a later style. A date applied across rows of
  visibly different periods is a default, not a dating.

And note the cross-check: the nomination dates 1700–38 Pine to c.1845, but the
directories show the 1700 block first occupied in **1853**. Even where the survey
date is genuinely about a block, it runs about eight years early.

---

## Part 3 — What would settle completion outright [PARTIAL]

Neither of these is online; both would need an in-person or paid request.

- **Fire insurance surveys.** The Philadelphia Contributionship, the Mutual Assurance
  Company ("the Green Tree") and Franklin Fire surveyed houses in detail at the time
  of insuring and often note new construction. The agent established that the
  **address→policy-number index is a physical card catalog** — not searchable remotely.
- **County tax assessment ledgers**, Philadelphia City Archives, which distinguish
  improved from unimproved ground. A ledger for the early 1850s showing this lot at
  ground-only value would be decisive. The Archives' Descriptive Inventory is an
  ASP.NET application; the agent was mapping its search when it was killed.

---

## The honest statement

What the records establish directly is **occupancy**, not the day the house was
finished. Sustaining "c. 1845" would require nineteen finished houses standing empty
for eight years, two to four blocks beyond the last occupied house on the street,
while the development front crawled west a block a year and arrived in exactly 1854.
That is not a live hypothesis.

**Publishable form:** the house was first conveyed on 21 April 1854, from the builder
John McCrea to John Roset, and its block went from no listed households to fully
occupied between the 1853 and 1855 directories. It is an 1854 house.

---

## Reproducing Part 1

```bash
for Y in 1849 1850 1851 1852 1853 1854 1855 1856; do
  curl -sL "https://archive.org/download/mcelroysphiladel${Y}amce/mcelroysphiladel${Y}amce_djvu.txt" -o "mce$Y.txt"
done
```

Then, per volume: count distinct `\b(\d{3})\s+Pine\b` matches, bucket into
700–732 and 734–780, and separately count
`Pine\s*,?\s*(ab|abv|above|bel|below|near|nr)\.?\s*(1[6-9])` for the descriptive test.
