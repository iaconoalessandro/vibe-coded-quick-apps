# Career branch reports: progress checklist

Started 9 October 2026. Resume from this file if the run is interrupted: find the first pair not marked `done`, launch it, then continue down the list.

Rules: at most 20 sub-agents in total, at most 2 running at once (launch a pair, wait for both, update this file, launch the next pair). Research agents use Sonnet; light checks use Haiku. Opus plans, writes briefs, assembles multi-part branches and does final QC.

Output folder: `research/branches/` (reports in `reports/`, index in `index.md`).

## Sub-agent tasks (18 planned + 2 reserved)

| # | Pair | Task | Model | Output file | Status |
|---|---|---|---|---|---|
| 1 | P1 | Finance part 1: investment banking and advisory (M&A, ECM, DCM/LevFin, restructuring, coverage vs product, BB/EB/MM, corporate banking, Big 4 deal advisory) | Sonnet | reports/finance-part-1.md | done (15.3k words, structure OK) |
| 2 | P1 | Finance part 2: sales & trading by desk, sales vs trading vs structuring, equity/credit research, commodity houses, banks vs hedge funds | Sonnet | reports/finance-part-2.md | done (12.5k words, structure OK; S&T pay outside NYC thin, Italy S&T pay missing) |
| 3 | P2 | Finance part 3: buy side (asset management, hedge funds by strategy, PE, VC, private credit, allocators/SWFs, wealth management) | Sonnet | reports/finance-part-3.md | done (11.8k words, structure OK) |
| 4 | P2 | Finance part 4: FP&A, treasury, corporate development, risk, compliance, quant roles, fintech | Sonnet | reports/finance-part-4.md | done (11.7k words, structure OK) |
| 5 | P3 | Computer Science part 1: product software engineering (backend, frontend, full-stack, mobile, games, QA/SDET, solutions engineering/DevRel) | Sonnet | reports/computer-science-part-1.md | done (11.1k words, structure OK; game/DevRel pay and Italy QA pay missing) |
| 6 | P3 | Computer Science part 2: infrastructure, systems and other CS (DevOps/SRE/platform, cloud, embedded, data engineering, enterprise IT/ERP, IT consulting, research/academia) | Sonnet | reports/computer-science-part-2.md | done (11.2k words, structure OK; Italy role-level pay thin, search cap hit) |
| 7 | P4 | AI part 1: building AI systems (ML engineer, AI/LLM application engineer, MLOps/AI infra, CV/robotics, AI data/training work) | Sonnet | reports/artificial-intelligence-part-1.md | done (10.2k words, structure OK; built from page fetches only, no web search; CV/robotics and UK/Italy entry pay missing) |
| 8 | P4 | AI part 2: research, frontier and governance (research scientist, research engineer, safety/evals, forward-deployed/solutions, governance/policy, AI PM) | Sonnet | reports/artificial-intelligence-part-2.md | done (10.2k words, structure OK; no web search; pay bands lean heavily on Anthropic postings, needs rebalancing) |
| 9 | P5 | Data Science | Sonnet | reports/data-science.md | done (11.2k words, structure OK; OR/applied-science pay outside US missing) |
| 10 | P5 | Data Analytics | Sonnet | reports/data-analytics.md | done (9k words, structure OK; US entry pay partly estimated, Italy thin) |
| 11 | P6 | Cybersecurity | Sonnet | reports/cybersecurity.md | done (12.8k words, structure OK; Italy and role-level pay thin) |
| 12 | P6 | Management Consulting | Sonnet | reports/management-consulting.md | done (structure OK; Italy MBB pay and HK entry pay missing) |
| 13 | P7 | Management (incl. HR, operations, project management, corporate strategy) | Sonnet | reports/management.md | done (9k words, structure OK; Italy/Asia/Gulf HR and graduate-scheme pay thin) |
| 14 | P7 | Logistics & Supply Chain | Sonnet | reports/logistics-supply-chain.md | done (9k words, structure OK; Italy pay weak; 2026 Hormuz/tariff events from trade press, verify) |
| 15 | P8 | Accounting | Sonnet | reports/accounting.md | done (7k words, structure OK; search ran out late; Italy Big 4 pay from 2024, Asia pay weak) |
| 16 | P8 | Marketing (incl. sales & business development) | Sonnet | reports/marketing.md | done (8.9k words, structure OK; US entry pay, Tokyo and Paris luxury pay missing) |
| 17 | P9 | Economics | Sonnet | reports/economics.md | done (9k words, structure OK; IMF/WB/OECD current scales and Italian ISTAT/MEF pay missing) |
| 18 | P9 | Product Management & Startups/Entrepreneurship | Sonnet | reports/product-management-startups.md | done (structure OK; Italy pay thin) |
| 19 | P10 | Gap fix: rebalance AI part 2 pay evidence beyond Anthropic (other labs, big tech, UK AISI, Asia/Gulf), patch artificial-intelligence-part-2.md, re-assemble | Sonnet | reports/artificial-intelligence-part-2.md | done (rebalanced: OpenAI, DeepMind, Meta, Palantir, AISI, Gulf/Asia added; Anthropic still most cited) |
| 20 | P10 | Gap fix: Italy pay addendum (Michael Page Italia 2026, Hays Italia, JobPricing, CCNL) for role families marked "no reliable data found" in Italy | Sonnet | reports/italy-pay-addendum.md | done (6.5k words; many Italian gaps filled, some remain) |

Sub-agents used so far: 20 / 20 (all done)

## Opus tasks

| Task | Output | Status |
|---|---|---|
| Assemble Finance from parts 1-4 | reports/finance.md | done (29 role families, 53.6k words) |
| Assemble Computer Science from parts 1-2 | reports/computer-science.md | done (14 role families, 23.8k words) |
| Assemble Artificial Intelligence from parts 1-2 | reports/artificial-intelligence.md | done (11 role families, 21.8k words) |
| QC every report against the template and shared scales | notes below | done (tools/collect.py: 124 role families, no warnings) |
| Write index (branch descriptions, background matrix, role comparison table, assumptions, gaps) | index.md | done (tools/build_index.py) |

## QC notes

(filled in as pairs finish)
- P1-P3: all six parts follow the template (six headings, every role family with entry difficulty and tier caveat, summary table, background matrix). Lengths 11-15k words.
- P3 agents report the web-search allowance ran out mid-research; later briefs ask agents to fetch pay data first and fall back to WebFetch on known pages.
- Weak data so far: S&T pay outside NYC; Italian pay at role level (S&T, QA, games, CS infra); hours/stress are practitioner consensus, not surveys.
- P4: the per-turn web-search cap (200 WebSearch calls per turn, shared by all agents) was used up during P3-P4. Both AI agents worked from WebFetch page reads only. AI part 2 cites Anthropic 58 times because Anthropic publishes pay ranges; candidate for a reserved gap-fix agent (rebalance with other labs' postings, add Asia/Gulf and UK AISI pay).
- Assembly: `python3 tools/assemble.py <slug>` builds reports/<slug>.md from the parts plus snippets/<slug>-s1/s2/s4/s5.md (Opus-written sections 1, 2 overview, 4 overview, 5a). Done for finance, computer-science, artificial-intelligence.

## How to resume

1. Brief text for every remaining agent: snippets/brief-template.md, filled with the scope for that task (see the task table). Medium branches: 6,000-8,000 words. Data Science and Data Analytics are DEEP: 8,000-10,000 words, every role family separately.
2. Web-search budget: about 25 searches per agent, so roughly 3 pairs fit into one turn. Start a new turn (a new message) when the budget runs out.
3. Order: P5 (Data Science, Data Analytics) → P6 (Cybersecurity, Management Consulting) → P7 (Management, Logistics) → P8 (Accounting, Marketing) → P9 (Economics, PM & Startups) → QC → P10 reserved fixes → index.md.
- P5-P8: all eight reports pass the structure check. The search allowance ran out again during P8 (Marketing after about 15 searches, Accounting near the end).
- Consistency check (tools/collect.py → tools/collected.md): 112 role rows and 112 matrix columns across 11 reports, no out-of-range ratings, every matrix has all 11 backgrounds. Ratings sit on the shared scales (e.g. junior M&A stress 5, compliance 3, analysts 3).
- Reserved agents (P10): (19) AI part 2 rebalance; (20) Italy pay addendum, because Italian role-level pay is the most common "no reliable data found" across reports. Consistency checks are done by script, so no Haiku agent is needed.
- Run complete 9 October 2026: 13 branch reports, Italy pay addendum, index.md. Rebuild the index with: python3 tools/collect.py && python3 tools/build_index.py
