# 2. Journeys and information architecture

No interviews, analytics, tree tests or usability tests were run for this work. Needs and feelings below are **assumptions**, marked (A). Obstacles marked (O) were observed on the baseline; proposed paths were walked by the agent on the built site (results in `04-validation.md`).

## 2.1 Journeys

Each map: the reader's question, what they need, the decisions, the obstacle on the baseline, the path now, and a test that can fail.

### J1. Choosing a master's

| | Arrive | Narrow | Check one programme | Test | Act |
|---|---|---|---|---|---|
| Question | Which programmes could I get into? | Which fit my degree and budget? | What exactly does it require and cost? | Where do I stand? | When is the deadline? |
| Needs | A list before a questionnaire (A) | Filters: track, region, fee, test, prerequisites | Hard rules, fee, source, date read | The calculator for that track, opened at that programme | Deadline, official link |
| Baseline obstacle | Front page led to questionnaires; the directory was one small line (O) | — | — | — | — |
| Feeling (A) | Unsure | Narrowing | Wary of hidden rules | Anxious | Decided |
| Now | Front page → *Choose a master's* → `study.html` → *Browse and compare programmes* | `programmes.html` filters (in the address) | Row: requirements with source tags, fee, deadlines | *Test my chances* → `masters.html?track=mif&school=…`, note names the programme, breadcrumb back | Results row: countdown and official link |

Success: from the front page, the directory is two activations away; from a programme, the right calculator opens at that programme and "Back to the programme directory" returns to the filtered list.

### J2. Deciding whether further study supports a career

Question: does this job need a master's, and which one? Baseline obstacle (O): roles lived under "Careers", programmes under "Calculators", and only a role page's last sub-heading joined them. Now: `study.html#pathways` shows which calculator tracks each of the 13 fields links to (diagram and table), each field linked; a role page keeps "Master's calculators on this site" and gains "Getting hired in this role"; each country's Getting hired view keeps "Is a master's expected" open. Success: from a role page, a calculator for its field is one activation away, and from the master's hub a field page is two.

### J3. Internship seeker or recent graduate

| | Arrive | Pick stage | Pick country | Timing | Prepare |
|---|---|---|---|---|---|
| Question | How do people get an internship here? | — | What is the route in Germany? | When do I apply? | What does an application need? |
| Baseline obstacle | Hiring under "Atlas", calendar and toolkit under "Careers" (O); a country's hiring section mixed all paths (O) | — | — | — | — |
| Now | *Find an internship or job* → `jobs.html` | *Studying, and looking for an internship* → `hiring.html#-/studying/intern` | Planner → *How hiring works in Germany, in full* → `map.html#de/hiring/intern`: 2 of 6 routes shown, experienced-hire routes folded away, "Every path" restores them | `jobs.html#when` timeline → calendar row | Toolkit, Interview prep, country "How to apply" part |

Success: the reader reaches country- and path-specific routes without the experienced-hire rows on screen, and can show every path with one control.

### J4. Working professional

Question: how do experienced hires get in, will anyone sponsor me, where does my role lead? Now: `jobs.html` → *Already working* → `hiring.html#-/working/exp` → country → `map.html#nl/hiring/exp` (routes for that path; sponsorship verdict visible in its folded part's label) → `…/visas`. Student routes stay behind "Every path", and the MBA calculator is linked from the stage entry. Success: the stage is preset, the route shown is ranked among all routes ("number 3 of 6"), and nothing about the other paths is removed.

### J5. Comparing places and planning a move

| | Choose | Read | Route in | Money and life | Arrive |
|---|---|---|---|---|---|
| Question | Where is the work? | What does this place hire for? | Can I go on my passport? | Can I live on the pay? | What do I do first? |
| Baseline obstacle | — | Everything in one 26,000 px view (O) | Visa section 14,600 px down (O) | — | — |
| Now | `map.html` (map and list) | `#de` overview: advice, key figures, passport, the guide's index | `#de/visas` (passport control, checked and review dates) | `#de/cities` pay against rent; `#de/work` tax and entry pay; `#de/life` prices | `#de/arrival`: the way in, then steps in order, each linked to its text |

Success: a reader picks a passport once and reaches visa rules and first-weeks tasks in one activation each from the overview; a passport outside the scope is told so; an uncovered step is marked "Not covered yet".

### J6. Undecided

Question: what is there, and what suits me? Now: the front page's "Not sure what you are looking for yet?" offers the Compass (optional), browsing by degree subject, and the map; every page's footer index and next-step links lead on; Back returns to earlier choices because views and filters are addresses. Success: no page requires a questionnaire or a profile, and each of the three starting points reaches a role page in two activations.

### J7. Arriving on a deep link

Old addresses resolve: `map.html#de` (overview, with the whole guide one link away), `#de/munich` (Cities view, Munich open), `hiring.html#de/graduated/first`, `masters.html?track=mif`, `…#results`, `programmes.html#…`, every `careers/` page. A link to a folded part (`#de/hiring/apply`, a field page heading id) opens it and moves the keyboard there. The reader sees breadcrumbs, the section they are in and the guide's own navigation.

### J8. Returning with saved work

Calculator answers, the Atlas passport, Compass answers and interview stories are untouched (same keys). The front page lists what is saved ("Pick up where you left off") when anything is; the master's hub keeps "Your results"; track pickers still open a filled calculator at its results.

## 2.2 Sitemap

```
Home (index.html)
├─ Choose a master's (study.html)
│   ├─ Programme Directory (programmes.html)
│   ├─ Business calculators (business.html) → MBA · Finance · Management · Marketing
│   └─ Computing calculators (it.html) → Computer Science · Data & AI · Conversion
├─ Explore careers (careers/index.html)
│   ├─ Career Compass · By what you studied (11) · By field (13) · All roles (124)
│   └─ Compare roles · Italian pay · Research sources
├─ Find an internship or job (jobs.html)
│   ├─ Hiring by country (hiring.html: planner, table)
│   └─ Recruiting calendar · Application toolkit · Interview prep (careers/…)
├─ Plan a move (map.html)
│   └─ Country (46): Overview · Cities and hubs · Getting hired · Visas and permits ·
│      Working there · Life there · First weeks · Sources and research · Whole guide
└─ Sources and method (method.html) → research library, credits
```

A country's Getting hired view is reached from both *Find an internship or job* and *Plan a move*; a field page from both *Explore careers* and the master's hub. Each has one address and one copy.

## 2.3 Vocabulary

| Use | Not |
|---|---|
| Choose a master's | Calculators (as the name of the navigation) |
| Programme Directory | Programmes |
| Explore careers (section) · Career Explorer (the set of pages) | Careers |
| Career Compass | Compass |
| Find an internship or job | Getting in |
| Hiring by country | Hiring |
| Plan a move (section) · the Atlas (the map and guides) | Atlas (as a navigation label) |
| Getting hired (a country's view) · How hiring works (its heading) | — |
| Italian pay | Italy pay / Italy pay add-on (in navigation) |
| Sources and method | — |
| Part (a folded piece of a view) · View (a page of a country's guide) | Tab, accordion |

## 2.4 Navigation

- **Global**: five task labels, the same on every page, the current one marked; a Menu button below 760 px (script only; without script the list stays open).
- **Section**: the current section's pages under the global row. The master's section keeps direct links to all seven calculators.
- **Breadcrumbs**: Home › section › page, on every page but the front; the Atlas adds country and view.
- **A country's guide**: its own navigation of views beside the text (a strip on narrow screens), with previous/next and related links at the foot.
- **Footer index**: every section with its main pages, on every page.
- **Search and filters**: unchanged tools (directory filters in the address; role search; compare; hiring table filters), plus the routes filter in Getting hired. Filters that are not private live in the address; nothing typed into a calculator ever does.

## 2.5 What was split, and what was not

- **Country guide: split.** Its sections serve different tasks at different times, and three of them (hiring, visas, first weeks) are entered from other parts of the site. Hubs and "Hubs compared" stay together because the comparison is read against the map. Working there stays whole (its topics vary by country, so it was not divided into "money").
- **Getting hired: one view, folded.** Routes, the market and language are open; the rest are specialist or time-bound parts under their own headings.
- **Field page: one page, folded where long.** A section over 1,200 words folds at its own top-level headings; short fields print as before. Role families are never folded.
- **Role page, toolkit, calendar, interview prep: left as they are.** They are read together and already have contents lists.
- **Front page: replaced as an entry point**, its content kept whole on the master's hub.

## 2.6 Validation script for real users (not run)

Five to eight participants across the six situations, 30 minutes each, on the built site. Think aloud; note the first click, wrong turns and words used.

1. "You have a business degree and are thinking about a master's in finance. Find three programmes you could apply to and what one of them costs." (first click; do they find the directory?)
2. "Find out when you would need to apply for a summer internship in London, and who can apply."
3. "You work in the Netherlands and want to move to Germany. Find out how people at your level get hired there and whether you would need a visa on your passport."
4. "You have just arrived in Germany. What do you do in your first week?"
5. "You are not sure what job you want. Look around and tell me two roles you would consider and why."
6. "Open this link [map.html#de/hiring/apply]. Where are you? How would you get to visa rules?"
7. After each: "What did you expect 'Plan a move' / 'Sources and method' to contain?" (label check)
8. Keyboard-only repeat of task 3 with one participant who uses a keyboard or screen reader daily.

Record: task success, first click, time on task as observed (no targets set), words participants use for sections, and anything they looked for and did not find.
