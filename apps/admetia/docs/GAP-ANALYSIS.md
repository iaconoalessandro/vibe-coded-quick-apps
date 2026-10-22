# Gap analysis: what Admetia needs to sell comprehensive support

Written 2 October 2026, before the world map (the Atlas) was built. It audits what the
repository already has (three calculators, `data/deadlines.js`, and the 58-file research
library in `research/`) against what a student needs from first shortlist to first payslip,
and only calls something missing after looking for it.

**Method.** Every research brief's frontmatter, section headings and bottom line were read;
the library's own audits (`research/verification/claims-to-verify.md` §2–4, `research/product/product-map.md`,
`research/verification/freshness-register.md`) were taken as the starting point; and the library was
searched for the concrete things a student does (register an address, open a bank account,
get a tax number, have a degree recognised, book a language test). A country "count" below is
the number of research files that mention it at all, which is a floor on coverage, not a
measure of depth; depth was judged from whether a file has a section of its own on it.

**Scope rule used throughout.** A route is in scope only if Europe is the origin or the
destination (Europe → Europe, Europe → outside, outside → Europe). Routes between two
non-European countries are out of scope and get no content.

## 1. What already exists (so it is not called missing)

| Area | Where | Depth |
|---|---|---|
| Admissions odds and hard gates | 3 calculators, ~140 programmes; `getting-in/admissions.md` | Deep |
| Application documents, tests, interviews, offers | `getting-in/applications-and-interviews.md`, `getting-in/admissions.md` §1, §7 | Deep for business schools; thin for computing programmes and for job interviews outside UK/FR/DE |
| Deadlines | `data/deadlines.js` (source-tagged, 120-day stale banner) | Deep for programmes; nothing for scholarships or permits |
| Visas and post-study work | `visas_immigration/italy/` (IT single source of truth), `places/visas-and-work-rights.md` (16 countries), `places/beyond-europe.md` (US, CA, AU, SG, HK, JP brief), `places/gulf-and-central-eastern-europe.md` (UAE, KSA, QA) | Deep for UK/US/DE/FR/NL/CH; IT fully verified and consolidated in `visas_immigration/italy/`; US fully verified and consolidated in `visas_immigration/united_states/` (section 7 of the visas file is now a pointer); rows still "Claims to verify" (ES, DK, PT) |
| Careers by sector | 11 `careers-*.md` files | Deep, but organised by sector, not by city |
| Recruiting calendars | `getting-in/recruiting-calendar.md` | UK, FR, DACH, IT, ES, NL, US only |
| Pay, net pay, rent | `money/salaries-and-roi.md`, `places/iberia-and-nordics.md` §3, `careers/tech-data-and-ai.md` §4 | ~12 cities, author-calculated net pay |
| Tuition, living costs, loans | `money/costs-and-funding.md` | The calculator's schools only |
| Scholarships | `money/scholarships.md` | Good for EU→EU and EU→US/UK; nothing for Asia-Pacific |
| Origin-country playbooks | `places/origin-countries-eu.md` (ES, FR, DE, PT, GR, PL + notes), `places/origin-countries-non-eu.md` (IN, CN, NG, TR, UK, US), `places/italy-playbook.md` | Deep for the covered origins |
| Student logistics | `places/student-logistics.md` | Day-zero cash, work-hour limits, health cover for UK/DE/FR/CH only |
| Degree recognition | `decisions/school-types-and-accreditation.md` §7 | French grade de master and Italian valore legale only |
| Freshness | `verification/freshness-register.md`, `review_by` on every file | Good, but tied to files, not to records the site shows |

## 2. Coverage of the 46 Atlas countries before this work

| Depth | Countries |
|---|---|
| **Deep** (own sections in several briefs: visas, pay, costs, calendar) | UK, France, Germany, Italy, Switzerland, Netherlands, Spain, USA |
| **Partial** (own section in at least one brief) | Portugal, Denmark, Sweden, Norway, Finland, Austria, Ireland, Luxembourg, Poland, Czech Republic, Romania, Greece; Canada, Singapore, Hong Kong, Australia, Japan; UAE, Saudi Arabia, Qatar; China and Turkey (as origins, not destinations) |
| **Thin** (passing mentions only) | Belgium (6 files), Malta (2), Iceland (3), Bulgaria (2), Russia (3), Israel (1), Oman (1), Kuwait (3), Malaysia (1), Vietnam (1), New Zealand (2), South Korea (3) |
| **None** | Estonia, Lithuania, Thailand, Taiwan (0 files) |

The library is strongest on the Western European and US business-school market and on an
Italian reader. Of the 21 non-European countries, only six have a section written from the
point of view of a European going there, and none of the Asia-Pacific countries other than
Singapore and Hong Kong has its permit rules read on an official page.

## 3. Gaps, separated into missing and shallow

Seed hypotheses from the brief are marked (seed). Value is to a student choosing and moving
(5 = changes the decision or blocks the move). Effort is research plus build (5 = largest).

| # | Gap | Status | Evidence of the gap | Value | Effort | Rank |
|---|---|---|---|---|---|---|
| G1 | **Post-study work routes per country** (seed) | Present but shallow | 22 of 46 countries covered; IT, ES, DK, PT rows still unverified; nothing on Baltics, Benelux beyond NL, Malta, Iceland, Asia beyond SG/HK/JP | 5 | 3 | 1 |
| G2 | **Coverage of the 21 non-European countries as destinations for Europeans** (seed) | Missing for 15, shallow for 6 | Section 2 above | 5 | 4 | 2 |
| G3 | **Where each hub hires, by role family** (the Atlas's core) | Missing | Careers files are by sector; `places/countries-and-cities.md` §3 lists a few specialist hubs in prose; no city × role-family view, nothing for IT/AI hubs outside the calculator's cities | 5 | 4 | 3 |
| G4 | **Arrival checklist** (residence permit, address registration, tax number, bank, health insurance) (seed) | Missing | 0 hits for Anmeldung, codice fiscale, NIE, BSN, personnummer, "bank account"; `places/student-logistics.md` covers cash and health only for UK/DE/FR/CH | 4 | 3 | 4 |
| G5 | **Credential evaluation and degree recognition** (seed) | Shallow | `school-types` §7 covers FR and IT legal recognition; 1 hit each for ENIC-NARIC and WES; nothing on anabin/ZAB statements for non-EU degrees going to Germany, US credential evaluation for a European degree, or apostilles (0 hits) | 4 | 2 | 5 |
| G6 | **Language requirements and prep** (seed) | Shallow | Hiring-language evidence exists (`countries-and-cities` §2, `work-destinations-iberia-nordics` §2); nothing on which test each route needs (permit, programme, job), test costs, or how long B2 takes | 4 | 2 | 6 |
| G7 | **Recruiting timelines outside seven markets** (seed) | Shallow | `getting-in/recruiting-calendar.md` has UK, FR, DACH, IT, ES, NL, US; Japan's fixed graduate-recruiting calendar, Nordic, Baltic, CEE, Gulf and Asia-Pacific timings absent (0 hits for shūkatsu) | 4 | 3 | 7 |
| G8 | **Working-holiday and youth-mobility schemes** (new) | Missing | 0 hits for "working holiday", although Europeans aged 18–30/35 have bilateral schemes with Japan, Korea, Taiwan, Australia, New Zealand and Canada; the UK–EU youth scheme is covered only as "not agreed" | 4 | 2 | 8 |
| G9 | **Taxes and net pay** (seed) | Present but shallow | Net pay for ~12 cities; expat and return regimes for IT, ES, PT, NL, GR, FR, DE, PL; 0 hits for double-tax treaties; tax residence covered only for Italians moving to the Gulf | 4 | 3 | 9 |
| G10 | **Cost of living and housing** (seed) | Present but shallow | School-city estimates and central one-bed rents for ~12 cities; nothing on how to find housing, deposits by country, or scams | 3 | 3 | 10 |
| G11 | **Funding and scholarships** (seed) | Present but shallow | `money/scholarships.md` and `money/costs-and-funding.md` are good for Europe and the US; nothing on government schemes into Asia-Pacific (MEXT Japan, GKS Korea, Taiwan, Singapore) beyond two passing mentions | 3 | 2 | 11 |
| G12 | **Official travel advisories and sanctions** (new) | Shallow | FCDO advisories read for UAE, Qatar, Saudi Arabia only; nothing for Russia (EU/UK/US sanctions and advisories), Israel, or the Gulf states not in that file | 4 | 1 | 12 |
| G13 | **Settlement and long-term residence** (new) | Shallow | UK earned settlement and German §18c covered; EU long-term resident status, Swiss C permit, citizenship timelines thin | 2 | 3 | 13 |
| G14 | **Dependants and partners** (new) | Shallow | Four files mention partners in passing; no per-country rule on whether a spouse can work | 2 | 3 | 14 |
| G15 | **Social security and pensions across borders** (new) | Shallow | A1/totalisation mentioned; no per-country note on whether contributions follow a graduate who leaves after two years | 2 | 3 | 15 |
| G16 | **Application documents and interview prep** (seed) | Present (deep for business schools) | Dropped as a top gap. Remaining hole: computing-programme documents and non-European employer interview formats | 2 | 2 | 16 |
| G17 | **Legal-safety facts some readers need** (new) | Missing | Nothing on, for example, the legal position of same-sex relationships in each destination, which several readers will need before choosing the Gulf, Malaysia or Russia. If added, state the law with official or treaty-body sources, without commentary | 3 | 2 | 17 |

**Seed hypotheses verified or dropped.** All nine seeds hold except one: application documents
and interview prep are well covered already (G16, demoted). Funding, cost of living and taxes
exist but stop at the calculator's cities (shallow, not missing). The arrival checklist,
non-European destinations and hub-level role demand are genuinely missing.

## 4. What to build, in order (value ÷ effort)

1. **The Atlas** (this work): G1, G2, G3, and the country-level pointers for G4–G9 and G12,
   one structured record per country, passport-aware, linking to the briefs rather than
   copying them. It is the frame the other gaps fill.
2. **Arrival checklists per country** (G4): a short ordered list in each Atlas country record
   (permit, registration, tax number, bank, insurance), each step with its official page.
3. **Recognition and language panel** (G5, G6): per country, which body recognises a foreign
   degree and which language test each route needs.
4. **Youth-mobility tab** (G8): a passport × destination table; high value for 18–30-year-old
   Europeans going to Asia-Pacific and Canada, cheap to research from treaty pages.
5. **Calendar extension** (G7): Japan, Korea, the Nordics, Poland and the Gulf added to
   `getting-in/recruiting-calendar.md`, then to the battle plan.
6. **Net-pay extension** (G9, G10): extend `money/salaries-and-roi.md` §5 to the Atlas hubs, labelled
   as author calculations.

## 5. Documentation improvements

### Briefs to update

| File | What to change |
|---|---|
| `places/visas-and-work-rights.md` | Claims to verify #10 (Ireland), #12 (Italy) and #14 (Portugal) resolved and consolidated in `visas_immigration/ireland/`, `visas_immigration/italy/` and `visas_immigration/portugal/`; section 7 (United States) is now a pointer to `visas_immigration/united_states/`; close Claims to verify #11, 13 (Spain, Denmark) and add Belgium, Luxembourg, the Baltics, Poland, Czechia, Greece, Malta and Iceland, or point each to its Atlas record |
| `places/beyond-europe.md` | §6 (Japan, Korea, New Zealand "brief") is the weakest section in the library; replace with pointers to per-country briefs |
| `places/gulf-and-central-eastern-europe.md` | Add Oman and Kuwait; re-date the FCDO table every month while the regional conflict lasts |
| `places/countries-and-cities.md` | Its §3 specialist-hub prose is now structured data in the Atlas; keep the narrative and link to the Atlas |
| `getting-in/recruiting-calendar.md` | Add the markets in G7 |
| `verification/freshness-register.md` | Add the Atlas items in the next section |
| `research/README.md` | Add the Atlas data files and the new briefs to the index and reading orders |

### Briefs to merge

- `places/student-logistics.md`, the money half of `money/costs-and-funding.md` §6 and the arrival
  checklists (G4) belong in one "Arriving and settling" brief; at present the same deposit and
  health-insurance facts sit in three places.
- `money/costs-and-funding.md` §3 and `money/scholarships.md` overlap; `money/scholarships.md` §3.1
  already lists two claims in the other file that need softening. Keep scholarships in one file.
- The seven `verification-round-3*.md` logs should stay separate (they are audit trails), but
  `verification/claims-to-verify.md` §4.1 should remain the single status table, now extended past P32
  for the Atlas claims.

### New briefs to write

- **One per non-European country** for the 15 with no section today: Russia, Israel, Oman,
  Kuwait, Malaysia, Thailand, Vietnam, Taiwan, South Korea, New Zealand, China (as a
  destination), Turkey (as a destination), and full briefs for Japan, Australia and Canada,
  whose current sections are partial. Same house style as `_working/brief-for-researchers.md`, written
  from the European's side (Europe → country) and the national's side (country → Europe).
- **The Baltics and the small EU states**: Estonia, Lithuania, Malta, Luxembourg, Belgium,
  Iceland, Bulgaria (none has a section today).
- **Arriving and settling** (the merge above), **Recognition and credentials** (G5),
  **Languages for work and permits** (G6) and **Youth mobility** (G8).

### What the freshness register should track (new rows)

| Fact type | Cadence | Why |
|---|---|---|
| Each Atlas country's student-visa and post-study-work rule, with its official page | Quarterly, and on announcement | The fastest-moving facts on the page |
| Salary floors that recalculate on 1 January (Blue Card, Dutch HSM, Singapore EP, Swedish 90% of median) | Yearly (January) | They change every year by formula |
| Official travel advisories (FCDO, Farnesina, US State Department) for the Gulf, Israel and Russia | Monthly while a conflict is active | Advice changes within weeks |
| EU, UK and US sanctions affecting Russia (banking, flights, payments) | On event | Determines whether a student can pay fees or receive a salary |
| Hub employer presence (named employers per hub) | Yearly | Offices open and close; a named employer is a claim |
| Role-demand ratings per hub | Yearly, with the source's release date | Each rating cites a dated source or is marked as a gap |
| Working-holiday quotas and age limits | Yearly | Quotas are set per year |

## 6. Risks to keep in view

- **Breadth versus the evidence standard.** The library's rule is "never present a number you
  have not read on a primary page". At 46 countries this means many records will say "not
  verified" or "gap" in places. That is correct and should be shown, not hidden.
- **Ratings that look like data.** A role-demand level ("dominant") is a judgement from
  sources. Each one must cite what it rests on and when, and the page must say these are
  qualitative.
- **Scope creep into non-European routes.** The passport switch can produce, for example, a
  US passport looking at Singapore; the UI must say this is outside Admetia's scope rather than
  answer it.
