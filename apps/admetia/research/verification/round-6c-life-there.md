---
title: "Verification round 6c: Life there, three additions"
last_researched: 2026-10-08
scope: Language in daily life, health-care quality (all computed or fetched by tools/atlas-life.js) and office culture (data/atlas/culture.js).
confidence: high for the computed and statistical rows; medium for office culture, whose guide sentences are tagged practitioner consensus.
review_by: 2027-01-31
---

# Verification round 6c: Life there (8 October 2026)

Three additions to the "Life there" section of every country page.

## Computed or statistical (tools/atlas-life.js, one source for all 46 countries)

| Row | Source | Note |
|---|---|---|
| Language in daily life | Unicode CLDR `territoryInfo`: official and regional-official languages and the estimated share who speak each | Regional languages under 1% are left out. Names come from the browser's own language names (Swiss German is set by hand). |
| Health-care quality | World Bank WDI (source 2): UHC service coverage index `SH_UHC_SCI`, physicians `SH.MED.PHYS.ZS`, hospital beds `SH.MED.BEDS.ZS`, premature death from heart disease, cancer, diabetes or lung disease `SH.DYN.NCOM.ZS` | No figure for Taiwan and Hong Kong (not in the series). Some countries have no UHC index for 2023 or no beds figure: shown as absent, never filled. |

The UHC index code in the Atlas notes is the WDI web code `SH.UHC.SRVS.CV.XD`; the API serves the same series as `SH_UHC_SCI`.

## Office culture (data/atlas/culture.js)

No single source covers it, so each country cites its own pages. Five fields per country, gathered by nine Haiku research agents (five or six countries each) and four gap-filling agents, then checked by script:

- **leave**: legal minimum of paid annual leave, in working days on a five-day week (law in weeks or calendar days converted; the agent's note says how). Where the law tiers leave by years of service, the lowest tier is shown and the page says leave and holiday counts are minimums.
- **holidays**: public holidays a year, national.
- **day**, **style**: one sentence each from a business-culture guide, paraphrased; tag *practitioner consensus*.
- A statutory weekly-hours figure was also gathered and **not used**: several countries give a maximum, not a standard week, so the figures were not comparable. ILOSTAT's hours actually worked stay in "Working hours".

**Verification.** Every figure and sentence was delivered with an https page and a verbatim quote. A script fetched each page and checked the quote against its text: 196 of 224 sourced fields matched. Those that did not match, and what was done:

- Kept, figure and quote read and judged right against the statute or official page (a PDF, a page drawn by script, or typography broke the script match): MT leave (S.L. 452.87), CH leave, AT leave, DE leave (BUrlG §3), CA leave and holidays (Canada Labour Code summary).
- Dropped: CH holidays (cantons set most holidays; only 1 August is national), GB holidays (differ between England and Wales, Scotland and Northern Ireland), DK holidays (count made from a Wikipedia table, not stated), US holidays (federal employees only; private employers need not give any).
- US leave: shown as "no national legal minimum", sourced to dol.gov (read by WebFetch: the FLSA "does not require payment for time not worked", including vacations and holidays).
- Statutory weekly hours that failed the match (MT, IT, CH, US, CA) are unused anyway.

**Weakest sources.** Leave or holidays rest on an employer guide, not the statute, for: PT, IT holidays, LU, FI, PL, LT, EE, GR, BG, TR, IL, SA, OM, QA, KW, AE, TH, VN, CN, AU, HK and others marked `practitioner consensus` on the page. Statute pages that could not be read: Portugal (Diário da República), Malta (gov.mt), Luxembourg (Code du travail), Bulgaria (lex.bg), Turkey and Israel statutes.

**Gaps (left out, shown as nothing).** Leave: KR. Holidays: AU, CH, DK, GB, KR, OM, US. Working day: AU, BG, CA, CN, CZ, EE, HK, JP, KR, LU, MT, NZ, PT, RO, TW, US. Style: MT, OM. The web-search budget ran out during the gap-filling pass; a second pass with search could fill most of these.

**Italian.** All 74 guide sentences have an Italian version written for the Atlas; the figures need no translation.
