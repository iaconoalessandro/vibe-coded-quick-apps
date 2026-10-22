# Pre-launch audit (5 October 2026)

Seven independent audits, read-only, with facts checked on official pages on 5 October 2026.
Launch is planned for early November 2026. This file merges them into one ranked plan; the
seven reports beside it have the detail (file:line, what the site says, what is true, source URL).

| # | Report | Scope |
|---|---|---|
| 1 | [1-atlas-western-europe.md](1-atlas-western-europe.md) | Atlas: GB FR DE IT ES NL CH BE LU IE AT PT |
| 2 | [2-atlas-nordics-cee-south.md](2-atlas-nordics-cee-south.md) | Atlas: DK SE NO FI IS PL CZ RO BG GR MT EE LT |
| 3 | [3-atlas-outside-europe.md](3-atlas-outside-europe.md) | Atlas: the 21 countries outside Europe |
| 4 | [4-immigration-europe.md](4-immigration-europe.md) | Permits, procedure, fees, funds, post-study: 25 European countries |
| 5 | [5-immigration-outside-europe.md](5-immigration-outside-europe.md) | The same for 21 countries outside Europe (EU and UK passports) |
| 6 | [6-admissions-money-calculators.md](6-admissions-money-calculators.md) | MBA and Master's calculators, deadlines, fees, scholarships |
| 7 | [7-computing-careers-decisions-site.md](7-computing-careers-decisions-site.md) | Computing calculator, careers, decisions, glossary, site frame |
| — | [atlas-gap-report.txt](atlas-gap-report.txt) | Every hub and which of the 14 families it rates |

**Caveat.** Employers that an auditor named from its own knowledge are marked as unchecked in
its report. Each one needs its employer page read before it becomes a claim.

## The diagnosis in five lines

1. **Immigration explains what happens after graduation, not how to get in.** 20 of 25 European records and 15 of
   21 non-European records have no "get the permit" step: no portal, fee, proof of funds or insurance rule.
   The post-study layer, by contrast, was checked and is mostly correct.
2. **White cities are a method problem, not a data problem.** 34 of 200 hubs rate 0 of 14 families; analytics
   and big data are rated nowhere. Records name qualifying employers (Tesla in Austin, TSMC in Hsinchu,
   Nintendo in Kyoto, Intel in Gdańsk) and still leave the city blank, because researchers added an unwritten
   "needs a headcount" or "needs a city statistic" condition that the rule in `data/atlas/index.js` does not have.
3. **The firms students search for first are missing:** no McKinsey, BCG, Bain, Goldman Sachs or J.P. Morgan in
   any Western European hub; Dublin has no tech firm, Zurich no UBS, Geneva no employer at all.
4. **The calculators are too harsh for typical European profiles**, and the MBA model scores gender and origin.
5. **The repo, build and copy carry reputational risk:** the public README, profanity in a banner, and a build
   that would publish internal notes.

## Week 0: before anything else (about one day)

| # | Fix | Where | Report |
|---|---|---|---|
| 0.1 | Remove the README "LEGAL NOTICE" (the repo is public) | `README.md` | 7 §1 |
| 0.2 | Remove "move their ass" / "muovere il culo" from the stale-deadline banner | `js/results-kit.js:173`, `js/i18n-it.js:355-356` | 7 §1 |
| 0.3 | Add `research`, `graphify-out`, `CLAUDE.md` to the build SKIP; decide which research files go public, and never `research/product/` | `tools/build.js:40` | 7 §1 |
| 0.4 | Decide on the +3.5 for female and −1 for India: neutral by default, or explained on the page | `data/mba-model.js:121,463` | 6 §1 |
| 0.5 | Deduplicate the tripled employers, `why` lists and work rows in the Netherlands; add a uniqueness test | `data/atlas/nl.js`, `tests/atlas-test.js` | 1 §1 |
| 0.6 | Russia: add EU Reg. 833/2014 Art. 5n (EU nationals barred from consulting, IT, accounting and legal services to Russian entities) and Art. 5aa; remove Rosneft as an "employer"; drop the finance standings shown beside "not rated" | `data/atlas/ru.js` | 3 §1 |
| 0.7 | Correct the factual errors: Greece has a 1-year H.11 job-search permit; Italy's permesso costs about €116.46 plus a €50 visa, not €40; Luxembourg's 9-month job-search permit; Lithuania's registration certificate for EU citizens; Bulgaria uses the euro since 1 Jan 2026; the false "could not place PKO, Allegro, Comarch, InPost" line; Hong Kong's TTPS list is 200 institutions; Skype (retired) in Estonia; the France and Germany "Entry pay" rows that point at the wrong claims | `gr.js`, `it.js`, `lu.js`, `lt.js`, `bg.js`, `pl.js:246`, `hk.js:88`, `ee.js:33`, `fr.js:711`, `de.js:1100` | 1, 2, 4, 5 |
| 0.8 | Correct the wrong programme data: Manchester computing (First, IELTS 7.0, staged deadlines from 6 Nov 2026, £41,400); ESSEC MiM €38,000; Imperial MSc Management £51,000; ESCP 2027 fees | `data/computing-model.js`, `data/masters-model.js` | 6, 7 |

## Weeks 1–2: the things a student will notice

**A. A standard "Get your permit" step in all 46 records (the owner's main complaint).**
Six fields each: permit name and legal basis; where to apply (portal, consulate, VFS/TLS); order of steps
and typical wait; every fee in local currency; the 2026 proof-of-funds figure; the insurance rule. Start with
UK, FR, DE, IT, ES, NL, IE, CH and US, CA, AU. Report 4 §2.1 already has the 2026 funds table (FR €877.50 a
month from 1 Aug 2026, IT €848.32, NL €1,130.77, BE €1,062, IE €10,000, ES €600, FI €800, SE SEK 10,656, UK
£1,529/£1,171); report 5 has the non-European fees (US: the verified government total is $535, SEVIS $350 plus visa fee $185; the $250 integrity fee is in the statute but its collection is unconfirmed, see visas_immigration/united_states/; CA funds
CAD 23,448, AU A$2,500, NZ NZ$850).
Also: nationality overlays (APS for China, India and Vietnam in Germany; Études en France; Universitaly and
CIMEA in Italy; MVV in the Netherlands); the UK ban on dependants for taught master's; EES (live since 10 Apr 2026),
ETIAS and the UK ETA; Schengen 90/180; Withdrawal Agreement rights.

**B. Working-holiday and youth-mobility visas.** They are nowhere on the site. They cover Canada (IEC), Australia
(417/462), New Zealand, Japan, Korea, Taiwan and Hong Kong, plus UK Youth Mobility. Add one table by passport
and destination, and a route step for ages 18–30/35. In the US, add J-1 intern/trainee, L-1 and E-2, and rewrite
"a European master's does not open the US".

**C. Per-passport exceptions.** Replace `uk: 'eu'` and the "routes are identical" headers. Bulgaria, Cyprus and Romania
are outside the US visa waiver; BG, CY, HU, MT and RO cannot use Canada's IEC; Korea's K-ETA and Vietnam's
exemption cover only some passports; UK and Irish passports skip Australia's English test.

**D. Re-run the demand rule on the employers already named.** Write the rule as it is in `index.js` (no
headcount needed) into the research brief. Add a test that fails when a family is `gap` but a cited employer
of that family is already listed (it catches Copenhagen accounting, Stavanger IT, Stockholm marketing, the
central banks and economics, and the 29 hubs that show a standing beside "not rated"). Report 2 also proposes
absolute thresholds beside national rank (≥ 20k ICT jobs = strong, ≥ 5k = present).

**E. The employer pass.** 3–6 named employers per hub, starting with the flagships: MBB, the Big Four,
Accenture and Capgemini, and the US bulge-bracket banks in the 18 hubs listed in report 1 §2.1; Dublin (US
tech), Zurich (UBS), Geneva (traders, MSC, private banks, Nestlé), Paris (Amundi, LVMH, OECD, Mistral);
Tokyo, Seoul, Taipei, Hsinchu, Osaka, Kyoto, Beijing, Hangzhou, Austin, Seattle and Boston for IT; Intel
Gdańsk, Nokia, Revolut and UiPath in CEE. Then fill the finance sub-roles (PE is rated nowhere, not even in
London) in the ~20 finance hubs.

**F. Calculators.** Recalibrate so a class-median candidate reads "Competitive" and a UK 2:1 with a median
test reads at least "Possible", tested with 10 typical profiles. Make GMAT Focus (205–805) the primary MBA
input, with GRE, Executive Assessment and "waiver / not yet". Add the TOEFL 1–6 band, Duolingo, PTE and
Cambridge English. Fill the 44 link-only deadlines and the deferred-MBA dates (HBS 2+2).

## Weeks 3–4: depth and coverage

- **Computing:** Italian programmes (Polimi, Bocconi AI and DSBA, Sapienza, PoliTo, Bologna, Pisa); fees by
  status, and ATAS for UK CS and AI; Cybersecurity, Robotics and HCI tracks; RWTH, DTU, Aalto, KU Leuven, TU Wien.
- **MBA list:** Imperial, Warwick, Cranfield, RSM, St. Gallen, ESMT, WHU, Frankfurt School, Vlerick, ESSEC,
  ESCP, EDHEC, Smurfit, NUS, HKUST; an EMBA or part-time path; Business Analytics and CEMS MIM as programmes.
- **Grade converters** shared by all calculators: UK classes, French /20, German (Bavarian formula), Spanish /10,
  Indian %, Chinese /100; degree-class gates.
- **Legal and safety context:** UK Foreign Office "local laws" for the Gulf, Malaysia and Russia
  (criminalisation of same-sex relations); citizenship-only jobs (Canberra, DC federal, defence primes);
  LGBTQ+ legal status for every country (ILGA).
- **Language reality blocks:** the Nordics, Baltics, Romania and Bulgaria, Japan, Korea, China, Taiwan,
  Turkey, Israel, Thailand and Vietnam.
- **Missing hubs:** A Coruña, Trieste, Belfast, Reading, Galway, Ingolstadt; Espoo, Klaipėda, Oulu, Lund;
  Waterloo, Suwon, Tainan, Raleigh-Durham, Pittsburgh, KAUST. **Metrics:** official rent over Numbeo, one data
  vintage, graduate entry pay.
- **Money for non-Italians:** BAföG, DUO, CSN, Lånekassen, la Caixa; Forté, Chevening, Marshall; Gulf funded
  study (KAUST, MBZUAI).
- **Library hygiene:** source or delete the unsourced "Reality Check" sections in six careers files; write a
  computing-admissions brief and a software-interviews brief; about 40 glossary terms (2:1, ATAS, CAS, APS,
  CIMEA, apostille, OPT, SEVIS…); resolve the contradictions between research files.
- **Site frame:** About, Methodology, Privacy, Contact and Corrections, and an FAQ ("Why isn't school X
  here?"). Remove "built for personal use" from the homepage, and make the visit-counter claim match reality.
- **Freshness:** give every fee and threshold claim a `valid from` and a re-check date, with a test that
  fails when `seen` is older than 6 months.
