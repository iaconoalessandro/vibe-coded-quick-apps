## 5. Assumptions made

1. **Location.** The reports sit in `research/branches/`, separate from the existing `research/careers/` library. That library was written for Europe-focused master's graduates, and sub-agents could use it only as leads to verify.
2. **Template wording.** The heading "4. Banks vs. other employer types" is kept word for word in every report, including non-finance branches. There, the section compares the employer types relevant to the branch (for example FMCG vs agency vs tech in Marketing).
3. **Additions to the template.** Each report has an "Entry difficulty: X/5" line per role family and a role-family summary table, which the index comparison needed. The tier caveat sentence was made mandatory.
4. **Multi-part branches.** Finance (4 parts), Computer Science (2) and AI (2) were assembled by script (`tools/assemble.py`). Each part's numbering is kept with a prefix (P2-3.1 = part 2, section 3.1), so cross-references inside a part still work. The orchestrator wrote these sections of the assembled files: section 1, the overview table in section 2, the cross-part table in section 4 and the overall ratings in section 5(a).
5. **Depth.** "Deep" branches give every role family the full template at length. "Medium" branches give the full template more briefly.
6. **Backgrounds.** The 11 base backgrounds are read as a degree or early-career background with that name, not as the job itself.
7. **Overall branch ratings** (section 3.1 above) are judgements that summarise the role-family matrix. A background rated "stretch" overall can still be "strong" for one role family (e.g. Logistics for commodity trading houses).
8. **Dates.** All work is dated 9 October 2026. Sources from before October 2024 are used only when nothing newer was found, and are flagged in the reports.
9. **Model use.** All 20 sub-agents ran on Sonnet: 18 research tasks plus 2 gap fixes, an AI part 2 rebalance and an Italy pay addendum. No Haiku agent was used, because format and consistency checks were done by script (`tools/collect.py`: 124 role families, no out-of-range ratings, all matrices complete). A Haiku agent would have spent budget on the same check.

## 6. Gaps and low-confidence areas to verify

1. **Italian pay by role.** This is still the biggest gap. The addendum fills many rows from Michael Page Italia 2026, the CCNL contract tables, Banca d'Italia and AlmaLaurea. Still missing: bank trader, structurer and sales pay; commodity trading; allocators (CDP, casse di previdenza); DFIR and threat intelligence; AI safety, computer vision and annotation; government and think-tank economists; boutique consulting; TPM; and founder pay. The only MBB Milan figure is a 2024 forum figure.
2. **Asia and Gulf pay** across almost all branches rests on aggregators, small self-reported samples (Levels.fyi has 12-40 submissions in some cities) or recruiter blogs. Tokyo is the thinnest.
3. **Sales & trading pay outside New York**, and analyst-level bank S&T pay generally: the two US sources disagree, and London, Hong Kong, Singapore, Tokyo and Dubai figures are secondary or missing.
4. **AI branch evidence.**
   - Part 1 (ML, LLM, MLOps, computer vision, data work) was written with no web search, only direct page reads. Computer vision and robotics pay, and UK and Italian entry ML pay, are proxies.
   - Part 2 was rebalanced with OpenAI, Google DeepMind, Meta, Palantir, UK AISI and Gulf/Asia sources, but it still mentions Anthropic most often (77 mentions in the body vs 53 for OpenAI), because Anthropic publishes the most pay ranges.
   - Treat AI pay as US-posting-led.
5. **Hours and stress** are researchers' estimates from practitioner accounts, prep sites and a few surveys (mainly M&A). No report found a systematic hours survey by role family.
6. **Gated recruiter guides** (Hays, Robert Walters, Michael Page tables outside Italy, Management Consulted, CIPD, PMI) could not be read. Many pay figures therefore come via secondary summaries, as the reports note.
7. **Recent events to check against primary sources before publishing:**
   - **Logistics:** the 2026 Strait of Hormuz crisis and freight rates; the February 2026 US Supreme Court ruling on IEEPA tariffs and the later Section 122/301 tariffs.
   - **Marketing:** completion of the Omnicom–IPG deal (26 November 2025) and its cuts; Google's October 2025 cookie and Privacy Sandbox decision.
   - **Accounting:** the EU Omnibus changes to CSRD; the US CPA alternative (120-hour) pathways.
   - **Cybersecurity:** UK Cyber Security and Resilience Bill status; CMMC phase dates; NIS2 infringement referrals.
   - **AI:** the EU AI Act timeline after the Omnibus delay.
   - **Finance:** any 2025-26 Volcker rule changes (unconfirmed); 2026 private credit stress.
8. **Pay scales at international organisations.** The current IMF, World Bank and OECD scales were not retrieved; the newest IMF table read is from 2017.
9. **Graduate programme dates and terms** (bank, FMCG, Big 4, ECB/IMF/World Bank, APM programmes) change every cycle, and many 2026 windows have closed. Re-check before publishing. Some programme details were reused from the earlier project files and are flagged as not re-verified.
10. **Some tier-list names** are marked "general knowledge" or "verify" in the reports. They are mostly lower-tier, regional or Asian/Gulf organisations.
11. **Length.** Several reports exceed their target length. The assembled Finance file is about 54k words, so the site will likely need the four part files, or per-role-family pages, rather than one page.
