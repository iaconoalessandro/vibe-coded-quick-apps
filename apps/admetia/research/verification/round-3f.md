---
title: "Verification round 3f: residuals — UK outcomes and international-organisation entry terms"
last_researched: 2026-10-02
scope: Closes the residual items from verification rounds 3a (P25 HESA postgraduate-taught business outcomes and supply; P26 UN Young Professionals Programme and Italy's Secretariat status) and the IMF, OECD and World Bank early-career programmes. Log of what each primary source says, status, and every edit to body files. Does not re-open items already CONFIRMED in 3a.
confidence: high for the international-organisation terms (read on the IMF job board, the OECD's own brochure PDF, the World Bank page and careers.un.org on 2 Oct 2026); low for HESA (still blocked: no HESA business-PGT figure was read, only a Jisc/UKCISA postgraduate-taught headline for a different cohort)
review_by: 2027-03-31
---

# Verification round 3f (2 October 2026)

## Summary

- **P25 HESA: STILL UNVERIFIED for business and management.** hesa.ac.uk, its CSV paths, its API host and the Wayback captures of its 2025-26 pages are all the Cloudflare challenge page. A new partial substitute was found: the Jisc survey lead's summary of the class of 2022/23 (postgraduate taught, all subjects, non-UK non-EU against UK) and the 9% international response rate. Nothing for business and management specifically; the DfE LEO figures from 3a remain the only primary business-master's anchor.
- **P26 UN YPP: CONFIRMED.** Re-read in the browser on 2 Oct 2026: the 2026 list has 47 countries; Italy and Germany are both absent. The agent claim (Germany absent in 2026) is right and the aggregator list was the 2025 cycle (3a already said so). Selection rate: still not published. Italy's Secretariat status at 31 Dec 2024: still not printed; an inference from A/80/508 Table 10 is recorded as inference only.
- **OECD Young Associates: CONFIRMED from a second primary source** (the OECD's own brochure PDF, which is not behind the bot check): master's holders and master's students are excluded; **8 to 12 participants a year**; 80 Young Associates since 2016.
- **IMF Economist Program: now has current-cycle terms.** The IMF's own job board (a different host from the blocked imf.org) shows the **Economist Program 2027** posted 28 Sep 2026, deadline **4 Dec 2026**, start September 2027, PhD required, under 34. Intake size is still not published. The same board lists the **Research Analyst Program** (bachelor's, two years), a route the file did not have.
- **World Bank YPP: CONFIRMED** on the primary page (graduate degree plus 2 to 6 years, no age limit); the 2027-cohort window was 1 to 30 September 2026 and has just closed.

Method notes: curl with a browser User-Agent, WebFetch, the browser pane (careers.un.org is JavaScript-rendered; accordions expanded by script), the IMF Workday job board's JSON interface, pypdf. Status vocabulary: CONFIRMED / CORRECTED / PARTLY CONFIRMED / STILL UNVERIFIED. Scratch files in the session scratchpad (v3f).

## P25. HESA Graduate Outcomes and PGT business supply (evidence/base-rates-and-failure-modes.md 2.2, 5.3, bottom line 8; evidence/mid-tier-school-outcomes.md 2.1 and Bayes row)

**Access log (all 2 Oct 2026).**

| Route tried | Result |
|---|---|
| curl, browser User-Agent, `hesa.ac.uk/data-and-analysis/graduates`, `/students/what-study`, `/sb272/figure-1.csv` | HTTP 403, "Just a moment..." Cloudflare page |
| `api.hesa.ac.uk` | HTTP 403, "error code: 1006" |
| WebFetch on `hesa.ac.uk/news/04-06-2026/sb275-.../salary`, `.../27-01-2026/sb273-.../subjects`, `.../03-04-2025/record-number-masters-degrees-awarded-2023-24` | HTTP 403 |
| data.gov.uk CKAN API (`package_search`, 30 results) | HESA datasets listed for Graduate Outcomes statistics SB257 to SB275 (updated up to 4 Aug 2026), but every resource URL is a `hesa.ac.uk` page or CSV, so there is no mirror |
| Wayback CDX for `hesa.ac.uk/news/17-07-2025/sb272*`, `.../27-01-2026/*`, `.../08-08-2024/sb269*`, `/data-and-analysis/sb272`, `sb273` | The 2024-26 captures of the `/salary`, `/subjects`, `/numbers`, `/study` pages carry status 403 (the challenge page was archived); `sb275` (June 2026) has no capture; the only 200 captures of `/data-and-analysis/graduates/...` are from 2019-2022 (older cohorts, not used). The Internet Archive was also intermittently "Temporarily Offline" (503) during the session |
| graduateoutcomes.ac.uk, Jisc blog and news pages (`jisc.ac.uk/blog/a-cooling-not-a-collapse-graduate-outcomes-2023-24`) | WebFetch: certificate error; curl: 403 |
| British Council opportunities-insight HESA page | A log-in page, no data |
| Bayes MSc Employment Report 2026 PDF (for the Bayes row in evidence/mid-tier-school-outcomes.md) | 403 Cloudflare challenge, also with a Referer header |

I did not try to defeat the bot check.

| Claim as written | What the primary or reputable source says | Status | Edit |
|---|---|---|---|
| "HESA Graduate Outcomes for business and management PGT: employment, unemployment, graduate-level jobs by domicile" (base-rates claim 2; 5.3) | Not readable. Search-result snippets (HESA salary pages, not opened) gave a business and management median of about GBP 28,990 for 2023/24 and 27,998 for 2022/23, but the snippet does not say whether that is all levels or postgraduate taught, and the page returned 403 | STILL UNVERIFIED (snippet only; the two numbers are deliberately not in the body) | sentence added to 5.3 saying so |
| NEW: UK PGT headline outcomes (no subject split). Jisc's Head of Surveys, Dr Gosia Turner, "Graduate Outcomes survey results ... international graduates' employability", UKCISA blog, 16 Sep 2025 (page read in full by curl) | Class of 2022/23, HESA data released July 2025, 15 months out: international (non-UK and non-EU) PGT graduates 74% employed vs UK PGT 77%; 6% vs 13% in further study or combined study and work; 13% unemployed and seeking work vs 3%. About 86% of international graduates completed PGT programmes. Overall 70% of international vs 72% of UK graduates employed; 64% of employed international graduates in highly skilled jobs (74% the year before); non-science international graduates 55% highly skilled vs 72% for UK. Response rate for international graduates 9% (12% including incomplete), "roughly 1 in 10"; EU graduates are reported separately in the survey (just over 19,000, 46% response rate) and the blog does not give EU outcomes. A salary chart for PGT full-time UK employment by domicile exists in the blog but its figures are not in the text | CONFIRMED as a Jisc statement (the operator of the survey, one cohort older than the file's 2023/24 headline; not business-specific; secondary to the HESA tables) [data via survey operator] | added to 5.3 and sources |
| NEW: 2023/24 response quality | Wonkhe, 5 Jun 2026 (fetched): 57% in full-time work, 7% unemployed, "just 32 per cent of the cohort making a complete response". Consistent with graduateoutcomes.ac.uk 353,755 responses from 1,002,175 (35.3%, which counts incomplete responses) already in the file | CONFIRMED [data via press] | one clause in evidence/mid-tier-school-outcomes.md 2.1 |
| "UK business-master's supply by domicile (HESA entrants/qualifiers by subject, EU vs non-EU)" (base-rates 2.2) | Not readable. Snippet only (not opened, not used): HESA's April 2025 bulletin is said to report a 37% rise in business and management taught-master's awards between 2022/23 and 2023/24 and 84% of new PGT business entrants from outside the UK in 2023/24; a British Council page snippet says business and management had 211,450 international students in 2024/25, down 10%. The LEO supply figures read in 3a (2021/22 cohort, English providers: 14,755 UK, 3,585 EU, 41,915 non-EU; 75.5% non-UK) are the only primary counts | STILL UNVERIFIED (HESA); LEO substitute stands | none to the supply paragraph; snippets listed under Still unverified |
| "Bayes MSc Employment Report 2026" (evidence/mid-tier-school-outcomes.md row) | 403 challenge again; third-party aggregators (mim-essay, mimineurope) quote 88% employed at 3 months and about USD 67,402 weighted salary for the Management MSc, but those are secondary and not the school report | STILL UNVERIFIED | row left "not read"; blocked again noted |

**What a person with a normal browser should do (30 minutes):** download `sb275` (Graduate Outcomes 2023/24) Table 14-style subject by level data and the 2024/25 student-numbers subject table (`sb273`, "Subjects studied") and filter CAH17 "business and management" (CAH17-01-xx), level "postgraduate (taught)", domicile UK / EU / non-EU.

## P26. UN Young Professionals Programme (careers/public-policy-and-academia.md 3a, 3b, bottom line 5, H-c, myth 3, rule 4)

**Access.** careers.un.org/young-professionals-programme loaded in the browser pane; the "YPP Exam Cycles", "Who can apply?", "Frequently Asked Questions" and "Recruitment Process" accordions were expanded by script and the text read (2 Oct 2026; the page has no publication date). A/80/508 re-downloaded from documents.un.org (69 pages, pypdf).

| Claim as written | What the primary source says | Status | Edit |
|---|---|---|---|
| "2026 participating-country list: 47 countries; Italy absent; Germany absent in 2026 (an aggregator listed Germany)" | careers.un.org, YPP Exam Cycles, tab "2026": "Nationality of a participating Member State"; exam area Development and Sustainability; "Bachelor's degree or at least a 3-year equivalent degree relevant for the exam area"; "32 years of age or younger (born on or after 1 Jan. 1994)"; list A-K (18): Afghanistan, Andorra, Angola, Antigua and Barbuda, Belize, Brunei Darussalam, China, Cuba, DPR Korea, Dominica, Equatorial Guinea, Grenada, Iceland, Indonesia, Israel, Japan, Kiribati, Kuwait; L-R (15): Lao PDR, Liberia, Libya, Liechtenstein, Luxembourg, Marshall Islands, Micronesia, Monaco, Mongolia, Nauru, Oman, Palau, Papua New Guinea, Paraguay, Qatar; S-Z (14): Saint Lucia, Saint Vincent and the Grenadines, San Marino, Sao Tome and Principe, Saudi Arabia, Singapore, Slovenia, Solomon Islands, Timor-Leste, Turkmenistan, Tuvalu, UAE, USA, Vanuatu. **Total 47. Germany and Italy do not appear** (string search of the page text). The page says "countries that are un- or under- represented in the UN are invited". The page lists no other cycle | CONFIRMED (Germany absent: the agent's reading was right; the aggregator's list with Germany was the 2025 cycle) | none (file already states this) |
| Placement levels (new detail) | FAQ: "P-1 level for candidates holding a bachelor's degree and no work experience. P-2 level for candidates holding a bachelor's degree and two years of work experience, or a master's degree and no work experience"; roster valid for three years; estimated timeline application October-November, screening December-January, assessment February-May, interviews and results June-August | NEW, CONFIRMED | clause added to the UN YPP row |
| YPP selection rate | The page publishes none. FAQ and recruitment text mention no pre-set number per nationality (3a), a roster, and tie-break rules. Aggregator pages (openigo, afterschoolafrica and similar, found by search) repeat "about 50,000 applicants for about 100 places" and "top 60 per country convoked", with no primary citation. Primary datum already in the file: A/80/508, 16 YPP recruits out of 104 external recruits to geographical posts in 2024 (15.4%; 35 of 128 in 2023) | STILL UNVERIFIED (no published rate; the aggregator ratio is [anecdotal] and not used) | claim 6 wording |
| Italy's status at 31 Dec 2024 | A/80/508 (28 Oct 2025): the only match for "Ital" in the 69 pages is "UNLB ... Brindisi, Italy". No country table with Italy. Table 10 lists 23 Member States whose status changes through retirements by 2029, including 12 overrepresented ones that return to range (Austria, Brazil, Canada, France, Ghana, Jordan, Nepal, Philippines, Portugal, Tunisia, Uganda, Zimbabwe); Italy is absent from it. The Secretariat counts 22 overrepresented states at end-2024 (3a). Reading: Italy is either overrepresented and stays so through 2029, or within range and unchanged. **This is an inference, not a printed status.** Earlier primary data (3a): overrepresented at 31 Dec 2022 and 2023 and 31 Oct 2024 (161 staff against a 87-117 range, ACABQ A/79/747). Searches for a 2026 Advisory Committee note on A/80/508 returned nothing | PARTLY CONFIRMED (overrepresented to Oct 2024; Dec 2024 not printed; Table 10 inference recorded) | Numbers-to-treat-with-care bullet |
| Italian presence in the UN system (new context) | UNRIC Italia (page dated 23 Sep 2026): "al 31 dicembre 2024, 4.045 italiani prestano servizio nelle agenzie e organizzazioni delle Nazioni Unite", the third nationality after the US and France. This is the whole UN system (all agencies), not Secretariat geographical posts, so it does not answer the status question | NEW, CONFIRMED as stated (secondary to UN system data) [data, secondary] | same bullet |

## P26b. OECD Young Associates Programme, IMF Economist Program, World Bank YPP (careers/public-policy-and-academia.md section 3a; careers/accounting-and-corporate.md)

**Access.** oecd.org pages and imf.org pages are blocked (Cloudflare and "Access Denied"). Two routes were not blocked: the OECD brochure PDF on `oecd.org/content/dam/...` (HTTP 200, 5 pages, created 14 Nov 2025) and the IMF's Workday job board `imf.wd5.myworkdayjobs.com` (search JSON and posting JSON, which carry the full job text). World Bank page fetched with curl.

### OECD Young Associates Programme

| Claim as written | What the primary source says | Status | Edit |
|---|---|---|---|
| "Excludes master's or PhD holders or enrollees" (3a, from a Wayback capture) | OECD YAP brochure, "Who can apply": "Hold a nationality of an OECD Member country"; "Have obtained or will obtain a Bachelor's degree maximum 20 months before starting the Programme (to be eligible, candidates may NOT hold or be enrolled in a Master's or PhD)"; "minimum Grade Point Average (GPA) of 3.0 out of a 4.0 scale"; fluency in English or French; "start the Programme in September of the upcoming cohort year for the two-year assignment" | CONFIRMED on a second primary source | confirmation added |
| Intake not stated (3a: "11 host positions listed") | Brochure: "Paris, France / 24 Months / **8 to 12 Participants/Year**"; "Since 2016, the OECD has welcomed 80 Young Associates"; 63% female; 29 nationalities; former YAs' master's destinations 43% UK, 33% US, 24% other; "supports Young Associates ... who wish to pursue future postgraduate studies". Pay in the brochure: EUR 3,886 a month, exempt from French income tax; leaving allowance about EUR 21,000 over 24 months. Timeline: online applications in November, screening and aptitude test in December, self-recorded interview December to January, final interview or written assessment in February-March, selection in April, start in September | CONFIRMED (also resolves the EUR 3,886 figure, previously "secondary summary", on the OECD's own document); intake CORRECTED from "not stated" to 8 to 12 a year | OECD row; claim 8 |
| 2027-29 round | No primary page for it was readable; secondary listings expect the call to open about November 2026 (consistent with the brochure's November application month) | STILL UNVERIFIED (not yet open as far as sources show) | wording "had not opened on the sources I could read" |

### IMF Economist Program and Research Analyst Program

| Claim as written | What the primary source says | Status | Edit |
|---|---|---|---|
| "The page states no intake size, deadline or entry date" (3a, April capture) | IMF job board, "Economist Program 2027", requisition 26-R9861, posted 28 Sep 2026 (JSON field `startDate` 2026-09-28; "Posted 4 Days Ago" on 2 Oct): "The last day to apply to this job is: 12/04/2026-11:59 p.m." (Washington, DC time; the `endDate` field reads 2026-12-05, a time-zone artefact); "Start date: September 2027"; headquarters in Washington, DC; three years, two departmental assignments; "Be a recent PhD graduate or be within one year of completing a PhD in macroeconomics or a related field"; "Be under 34 years old when the program begins in September 2027" (FAQ: "The only exception is for time spent completing mandatory military service"); "Be a citizen of an IMF member country"; "applications typically open in late September. Interviews and assessments take place between October and January, offers are typically made in early February"; after three years "typically absorbed" into IMF departments; G-4 visa support for non-US persons. Cohort size and acceptance rate: **not stated** | CORRECTED and extended (the 2027 cycle has a stated deadline and entry month; the earlier 8 Sep 2026 and 4 Dec 2025 figures belonged to the 2026 cycle; intake still unpublished) | IMF row; claim 8 |
| Annual intake | Not stated on the 2027 posting. A search summary cites "35 to 45 participants" a year from an older academic paper (undated in the summary; not opened) | STILL UNVERIFIED | stated as unpublished |
| Entry route for bachelor's/master's readers (not in the file) | IMF job board, "Research Analyst under the Research Analyst Program (RAP)", requisition 26-R8967, posted 27 Feb 2026, last day to apply 30 Dec 2026: two-year contractual period in Washington, DC; "Recent completion of a bachelor's degree in economics, computer science, statistics, mathematics, finance, data science or other related quantitative field"; "advanced degrees in the same relevant field may be considered with limited combined professional experience"; cumulative GPA at least 3.5/4.0; "This opportunity may meet PREDOC requirements for applications to subsequent academic study"; framed as experience "before pursuing graduate studies" | NEW, CONFIRMED | added to IMF row |

### World Bank Young Professionals Program (careers/public-policy-and-academia.md row; careers/accounting-and-corporate.md claims)

| Claim as written | What the primary source says | Status | Edit |
|---|---|---|---|
| "Graduate degree plus 2-6 years' relevant experience, no age limit" | WBG YPP page (read in full 2 Oct 2026; undated): "Minimum graduate-level degree or a higher qualification in a relevant field, completed before September start date"; "2 to 6 years of professional experience in the related work area" (FAQ: at least two and no more than six years of full-time experience as of 1 Sep 2026, counted from the first full-time job after the undergraduate degree); "There is no age requirement"; GF-level term appointment; 2-year programme, three mandatory 8-month rotations, at least one in a country office; "placed in a role for an additional 5 years based on performance"; two tracks (Operations, Specialized Functions) and streams across Investment, People, Prosperity, Planet and Infrastructure | CONFIRMED | row expanded |
| 2027-cohort timing (already in careers/accounting-and-corporate.md: 1-30 Sep 2026; assessments Dec-Jan; start Sep 2027) | Same page: portal opens 1 Sep 2026; deadline 30 Sep 2026 11:59 PM UTC; full list reviewed 1-15 Oct with "Top 10% ... selected for the next stage"; assessments 15-31 Oct; interviews December (Washington, DC and Nairobi) or January (Paris and Bangkok); offers late January to early February 2027; new cohort starts in Washington, DC in September 2027. Intake size and acceptance rate not stated | CONFIRMED; the window has now closed | none in accounting file (already correct) |

## Edit log

**careers/public-policy-and-academia.md**

1. Frontmatter confidence: old "...the UN YPP, IMF Economist Program and OECD Young Associates terms were re-read on the primary pages in verification round 3a, 2 Oct 2026)" → adds "; the World Bank YPP, IMF 2027 cycle and OECD YAP brochure in round 3f, 2 Oct 2026".
2. Section 3 table, World Bank YPP row: old "Graduate degree plus 2-6 years' relevant experience, no age limit | No, revisit at 26-30 | Already in careers/accounting-and-corporate.md" → full primary terms (degree, experience rule and counting date, no age limit, structure, 2027 window and top-10% longlist) with the WBG URL.
3. IMF Economist Program row: old "The page states no intake size, deadline or entry date (the earlier "8 Sep 2026" and "4 Dec 2025" figures are not on it)." → April capture caveat plus the 2027 job-board terms (deadline 4 Dec 2026, start Sep 2027, under 34, PhD, timeline, no intake stated) and the new Research Analyst Program sentence.
4. OECD row: after "states no total intake." → adds the brochure facts (8 to 12 a year, 80 since 2016, master's exclusion in the OECD's own wording, timeline, post-YAP master's destinations, 2027-29 call not yet open).
5. UN YPP row: after "no published selection rate" → adds exam area and P-1/P-2 placement levels (re-read 2 Oct 2026).
6. Numbers to treat with care: Italy bullet extended (Table 10 inference; UNRIC 4,045 whole-system figure); IMF/OECD bullet: old "the IMF page states no deadline or intake" → 2027 deadline and WBG window sourced; OECD intake stated in its brochure.
7. Claims to verify 6 and 8 rewritten (6: selection-rate note; 8: IMF intake only, OECD intake answered, World Bank intake/acceptance not published).
8. Sources: new block "Added in verification round 3f" (IMF job board, World Bank YPP, OECD brochure, UNRIC Italia).

**evidence/base-rates-and-failure-modes.md**

9. Section 5.3, before "A search result summarised an 84.6% PGT employment rate...": added the Jisc/UKCISA PGT headline (class 2022/23, 74/77, 6/13, 13/3, 9% response), the Wonkhe 32% complete-response rate, the unused snippet figures (GBP 28,990 and 27,998) labelled unverified, and the 3f access log summary.
10. Sources: new item 31 (UKCISA/Jisc blog; Wonkhe 5 Jun 2026). (Numbering shows 31 before 30 in the file; harmless.)

**evidence/mid-tier-school-outcomes.md**

11. Section 2.1, HESA Graduate Outcomes paragraph: old "...has a 35% response rate, and LEO is the stronger anchor." → adds the 32% complete-response figure, the 9% international response rate, and that the HESA subject tables and the Bayes MSc Employment Report 2026 were blocked again in round 3f.

## Still unverified

- HESA Graduate Outcomes for business and management PGT (employment, further study, median pay at 15 months, by domicile) and HESA PGT business entrants and qualifiers by domicile. Needs a person with a normal browser (steps under P25).
- Snippet-only, not used: HESA business and management median GBP 28,990 (2023/24) and 27,998 (2022/23); 37% rise in business and management taught-master's awards 2022/23 to 2023/24 and 84% non-UK PGT business entrants in 2023/24; British Council snippet of 211,450 international business and management students in 2024/25 (-10%).
- UN YPP selection rate; the 2027 YPP country list; Italy's printed status at 31 Dec 2024.
- IMF Economist Program cohort size and acceptance rate; World Bank YPP intake; OECD YAP 2027-29 call.
- Bayes MSc Employment Report 2026 (blocked).

## Freshness items (volatile, re-check)

| Item | Re-check |
|---|---|
| IMF Economist Program 2027 deadline 4 Dec 2026; RAP deadline 30 Dec 2026 | https://imf.wd5.myworkdayjobs.com/en-US/IMF (search "Economist Program"); review in early December 2026 |
| OECD YAP 2027-29 call (expected November 2026) | https://www.oecd.org/en/about/careers/young-associates.html and the brochure PDF |
| UN YPP 2027 cycle list (the page shows only the 2026 tab; application window per page October-November) | https://careers.un.org/young-professionals-programme (YPP Exam Cycles) |
| World Bank YPP 2028 cohort window (expected September 2027) | https://www.worldbank.org/en/about/careers/programs-and-internships/young-professionals-program |
| HESA Graduate Outcomes 2024/25 (next release, expected June 2027) and student statistics (January 2027) | https://www.hesa.ac.uk/data-and-analysis/graduates and /students |

## Edits needed in lead-owned files

- **verification/freshness-register.md:** add the five rows above (IMF EP/RAP deadlines; OECD YAP 2027-29; UN YPP 2027 list; World Bank YPP 2028; HESA releases).
- **verification/claims-to-verify.md:** P25 stays open (HESA business PGT outcomes and supply); P26: YPP list and Germany/Italy confirmed, selection rate not published, Italy's Dec 2024 status not printed; OECD YAP and IMF EP terms now read on primary sources (OECD brochure, IMF job board) with intake stated for OECD (8 to 12) and unpublished for IMF.
- **_working/progress.md:** record round 3f; Topic 3 residuals reduced to HESA subject tables and Bayes PDF.
- **evidence/how-numbers-mislead.md / decisions/decision-framework.md:** no change required. If a "survey response rate" example is wanted: the Graduate Outcomes international response rate is 9% (Jisc, class of 2022/23) and the 2023/24 complete-response rate 32% (Wonkhe).
- **product/product-map.md:** the nationality/age gate tool for international organisations should add IMF RAP (bachelor's, GPA 3.5, two years) and the OECD YAP intake (8 to 12); no other change.

## Sources

- IMF Workday job board, Economist Program 2027 (26-R9861, posted 28 Sep 2026) and RAP (26-R8967, 27 Feb 2026): https://imf.wd5.myworkdayjobs.com/en-US/IMF (read through the board's JSON interface, 2 Oct 2026) [employer-stated]
- OECD, Young Associates Programme brochure (14 Nov 2025): https://www.oecd.org/content/dam/oecd/en/about/careers/young-associates/YAP-Brochure.pdf [employer-stated]
- World Bank Group, Young Professionals Program (read 2 Oct 2026): https://www.worldbank.org/en/about/careers/programs-and-internships/young-professionals-program [employer-stated]
- UN Careers, Young Professionals Programme (browser pane, 2 Oct 2026): https://careers.un.org/young-professionals-programme [employer-stated]
- UN, A/80/508 "Composition of the Secretariat: staff demographics" (28 Oct 2025): https://documents.un.org/api/symbol/access?s=A/80/508&l=en&t=pdf [data]
- UNRIC Italia, Italia e Nazioni Unite (23 Sep 2026): https://unric.org/it/italia-nazioni-unite-ruolo-contributi-presenza/ [data, secondary]
- UKCISA, Jisc blog on Graduate Outcomes class of 2022/23 (16 Sep 2025): https://www.ukcisa.org.uk/news/what-do-the-latest-graduate-outcomes-survey-results-tell-us-about-international-graduates-employability/ [data via survey operator]
- Wonkhe, Graduate Outcomes 2023-24 (5 Jun 2026): https://wonkhe.com/blogs/graduate-outcomes-2023-24/ [data via press]
- data.gov.uk CKAN listing of HESA Graduate Outcomes statistics: https://data.gov.uk/api/3/action/package_search?q=hesa+graduate+outcomes [metadata only]
