# House style: no unprompted denial

## The rule

Never claim to be honest, accurate, transparent, or non-fabricating. Show the
evidence instead.

## Why

Denying a doubt plants it. You cannot negate a frame without evoking it — tell
someone "don't think of an elephant" and they picture an elephant. So a line
like *"Nothing here is written by us"* makes a reader wonder, for the first
time, whether the reviews might have been. The sentence creates the suspicion
it was meant to settle.

It is also **unsolicited reassurance**: answering a question nobody asked. In
credibility research, a spontaneous denial of an accusation that was never made
is treated as a signal *against* the speaker, not for them.

Names for it, if useful:

| Register | Name |
|---|---|
| Everyday English | **protesting too much** — *"The lady doth protest too much, methinks"* (Hamlet, III.ii) |
| Rhetoric | **apophasis** / **paralipsis** — raising a subject by disclaiming it |
| Cognitive linguistics | **frame activation by negation** — Lakoff's *Don't Think of an Elephant* |
| Credibility research | **unsolicited / unprompted denial** |

We call it **unprompted denial** in this repo.

## What to write instead

The honest thing, stated plainly, with the evidence attached.

| Don't | Do |
|---|---|
| "Nothing here is written by us" | Name the guest, the city, the date, and link the listing |
| "We wrote that comparison honestly" | Show both columns, including where the hotel wins |
| "We don't publish dates we can't verify" | Print the dates you have; write "dates TBA" for the rest |
| "Where the record is incomplete, we acknowledge gaps" | Mark the gap where it occurs |
| "Full disclosure first: we run one of these" | "We run one of the options on this page" |
| "Plan around that honestly" | "Plan around it" |
| "We'd rather say that than guess" | *(delete — the TBA label already says it)* |

A sources list, a verification date, a "dates TBA" label, and a named reviewer
are all evidence. "Honestly", "truthfully", "we don't fabricate" and "trust us"
are not — they are the absence of evidence, dressed as its presence.

## Checking

```bash
grep -rniE "honestly|nothing here is written|trust us|believe us|full disclosure|we don't (write|fabricate|invent)|rather say that than guess|we acknowledge gaps|truth be told|to be honest" src/ public/ --include="*.tsx" --include="*.json" --include="*.txt"
```

Comments in source files are exempt — the rule is about what a reader sees.
