# Archive tasks — untranscribed documents

Generated 25 of 33 clippings have no transcription on file.
Each is a primary source already owned and never read. The eight that *were*
transcribed produced the best material on the site (the 1915 suffrage ticket
notice, the $130 fireplace receipt), which is the argument for reading the rest.

Rule: until a document is transcribed, its `synopsis` in
`src/data/document-archive.json` must describe only what is certain — the
paper, the date, and that it is unread. Characterizing an unread document is
how the archive came to publish a death notice as social-calendar coverage.

## Priority

### 1896-11-23 — `the-philadelphia-times-1896-11-23-page-11`
Almost certainly GRAHAM SPENCER'S DEATH NOTICE (d. Nov 21, 1896). Would confirm the November date, the funeral held in this house, and close the Howard/Graham question. Highest value in the archive.

### 1896-06-29 — `the-philadelphia-times-1896-06-29-page-5`
Almost certainly HOWARD SPENCER'S death notice (d. June 28, 1896, Atlantic City). The companion to the above; together they explain the date the site had attached to the wrong man.

### 1870-08-10 — `the-evening-telegraph-1870-08-10-page-8`
John Roset's obituary — already identified from the page image. Free and public domain via Chronicling America / PA Newspaper Archive; transcribe and publish in full.

### 1901-11-21 — `the-philadelphia-inquirer-1901-11-21-page-16`
Rolin-Plumb wedding breakfast. OCR reads 'IS22 Pine street' — confirm the address digits against the scan before this is used as a house event.

## Remaining untranscribed clippings

- **1824-03-26** — `the-united-states-gazette-1824-03-26-3`
- **1866-12-08** — `the-philadelphia-inquirer-1866-12-08-page-8`
- **1867-04-08** — `the-evening-telegraph-1867-04-08-page-3`
- **1871-01-14** — `the-philadelphia-inquirer-1871-01-14-page-6`
- **1871-12-06** — `the-philadelphia-inquirer-1871-12-06-page-7`
- **1883-12-09** — `society-tea`
- **1883-12-09** — `the-philadelphia-times-1883-12-09-page-4`
- **1891-11-28** — `the-philadelphia-inquirer-1891-11-28-page-2`
- **1893-02-01** — `the-philadelphia-times-1893-02-01-page-6`
- **1893-05-11** — `1822-sold-for-14-000`
- **1893-07-01** — `the-philadelphia-inquirer-1893-07-01-page-1`
- **1893-07-01** — `the-philadelphia-times-1893-07-01-page-2`
- **1899-04-06** — `the-philadelphia-inquirer-1899-04-06-page-7`
- **1900-10-03** — `the-philadelphia-inquirer-1900-10-03-page-5`
- **1901-10-27** — `the-philadelphia-inquirer-1901-10-27-page-19`
- **1906-12-30** — `the-philadelphia-inquirer-1906-12-30-page-11`
- **1907-12-15** — `the-philadelphia-inquirer-1907-12-15-page-16`
- **1908-01-06** — `the-philadelphia-inquirer-1908-01-06-page-14`
- **1912-09-29** — `the-philadelphia-inquirer-1912-09-29-page-26`
- **1913-02-09** — `the-philadelphia-inquirer-1913-02-09-page-38`
- **1913-03-10** — `the-philadelphia-inquirer-1913-03-10-page-12`
- **1914-03-27** — `the-philadelphia-inquirer-1914-03-27-page-16`

## Known dead end

`the-evening-telegraph-1867-04-08-page-3` does not concern this house. It is a
medical-electricity advertisement whose testimonial list an OCR sweep misread
as "1822 Pine." Verified against the page image in 2026. Do not re-check it.

## Data defects to fix with the documents in hand

Four deed slugs disagree with their own `extracted_date`:

- `1822-pine-1979-deed` carries `1967-05-01`
- `1822-pine-1985-deed` carries `1979-10-17`
- `1822-pine-deed-1987` carries `1985-03-15`
- `1822-pine-1999-deed-1` carries `1991-04-26`

---

## Correction to the 2026-08-27 research pass — read the deeds first

The research pass concluded that "no source anywhere ties John McCrea to 1822
Pine Street" and that the "Roset family home, 1854–1893" framing was wrong.
**Both conclusions are mistaken, and the refutation was in this repository the
whole time.** The agents searched the open web and never opened the deed
abstract images in `raw_documents/`.

Read directly off the images:

**`1854 Deed abstract (2).jpg`** — PRESENT OWNER *Jno Roset*; FORMER OWNER
*Jno McCrea*; DATE OF DEED April 1854. McCrea is named as the grantor. The lot
is described as the south side of Pine, 230 feet west of 18th, 22 feet front,
90 feet deep to Waverly — the same dimensions the 2013 deed still recites.

**`1893 Deed abstract.jpg`** — the chain of title, in red ink:

> John Roset · By Will · To · Mary Ann Roset · By Will · To · The Penna Co for
> Ins on Lives &c et al · in Trust

So the Rosets held title continuously from 1854 to the 1893 sale: John Roset,
then his widow Mary Ann by will, then the Pennsylvania Company as trustee.
**"The Roset Years, 1854–1893" is correct as an ownership framing.** The
directory evidence showing tenants in the house from 1859 does not contradict
it — the family owned the house and rented it out. Ownership and occupancy are
different claims and must not be collapsed into one.

### A larger error the deeds do expose

**The 1893 purchaser was HOWARD Spencer, not Graham.** The 1893 abstract names
Howard Spencer as present owner, and the 1899 abstract names the grantors as
*"William McLean, Henry Pleasants, Executors & Trustees under the will of
Howard Spencer."* The site attributed both the purchase and the estate to
Graham. Corrected in `story-chapters.json`.

This also explains the Wilmington obituary's careful wording. Graham's funeral
was held *"from the residence of his relatives, at No. 1822 Pine street"* —
because the house was his father's, not his own. Howard died 28 June 1896;
Graham died 21 November 1896. At Graham's funeral the house sat in Howard's
estate.

### Method note for the next pass

Search the repository's own primary documents before searching the web. Twelve
agents and 1,160 lookups produced a confident negative finding that a single
image in `raw_documents/` refutes.
