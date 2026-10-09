# Cybersecurity

*Italian pay: where this report says "no reliable data found" for Italy, see [italy-pay-addendum.md](italy-pay-addendum.md) for recruiter-guide, contract (CCNL) and posting figures. Shared rating scales and the cross-branch comparison are in [../index.md](../index.md).*

## 1. What this branch is

Cybersecurity is the work of stopping, spotting and cleaning up after attacks on computers, networks, software, cloud accounts, industrial machinery and the data they hold. It is not one job: it spans analysts who watch alerts around the clock, hackers paid to break in legally, engineers who build defences into software and cloud platforms, lawyers-in-all-but-name who map companies to regulations, and executives who answer to the board after a breach. Roughly speaking, the technical end (SOC, incident response, penetration testing, security engineering) rewards deep systems skills, while the governance end (GRC, audit, privacy, consulting, leadership) rewards communication and judgement and is far more open to non-technical degrees. Demand is real and regulation is adding to it, but the "millions of unfilled jobs" headline is misleading for beginners: employers say they lack experienced people with specific skills (cloud, AI, application security), not that they will hire anyone with a certificate, and many first-job seekers wait many months. This report covers the US, UK, continental Europe (with Italy explicitly) and the main Asian and Gulf hubs, and points out where practice differs.

Scope notes: (1) Date of research is 9 October 2026; figures are dated and mostly from 2025-2026, older data is flagged. (2) Salary data for cybersecurity is noisy: aggregators (Glassdoor, Payscale, Indeed, ZipRecruiter), recruiter guides and training-company blogs disagree by 30-100% for the same role, and for Italy and the Gulf I found no authoritative role-level salary survey I could read in full; where I could not verify a number it is marked "unverified" or "no reliable data found". (3) Hours, stress ratings and day-in-the-life descriptions are my synthesis of practitioner write-ups, vendor surveys (flagged as vendor-sponsored) and general industry knowledge; no rigorous survey of weekly hours by cyber role was found. (4) Employer names in tier lists are real organisations; tiering is perception, not measurement. (5) Cross-references: AI red teaming at labs is covered in the AI branch, software engineering/DevOps in their branches, financial-sector risk/compliance in the finance risk branch; they are mentioned only briefly here.

## 2. Map of areas and sectors

### 2.0 The 2026 landscape: skills gap versus the entry-level reality

**What the data says.**
- **ISC2 2025 Cybersecurity Workforce Study** (published December 2025; 16,029 practitioners surveyed July-August 2025 across North America, Latin America, Asia-Pacific and EMEA): 36% reported cybersecurity budget cuts (down 1 point on 2024), 39% hiring freezes, 34% promotion freezes, 24% layoffs; 33% said budgets do not allow adequate staffing and 29% said they cannot afford staff with the skills needed. 59% reported critical or significant skills needs, up from 44% in 2024; the top shortfalls were AI (41%), cloud security (36%), risk assessment (29%) and application security (28%). Notably ISC2 **stopped publishing a global "workforce gap" number** this year and now frames the problem as skills, not headcount. Only 5% of respondents were entry or junior level, so the study under-samples the very people trying to get in (ISC2, Dec 2025).
- **ISC2 2025 Cybersecurity Hiring Trends** (929 hiring managers in Canada, Germany, India, Japan, UK, US; fielded December 2024; published June 2025): 90% would consider candidates whose only background is prior IT work experience, 89% would consider those with only an entry-level cyber certificate; 55% use internships and 40% of entry-level roles fill in 1-3 months. But expectations are inflated: 38% require CISA for entry-level roles and about a third expect CISSP for entry or junior roles, although both certifications need five years' experience. Only 18% think entry-level staff can do cloud security tasks. The foreword notes recruiters being swamped by "AI-polished" CVs, with some postings getting over 1,000 applications on day one.
- **US government and CyberSeek.** BLS puts the median pay of information security analysts at US$124,910 (May 2024), projects 29% employment growth 2024-2034 (about 52,100 jobs; about 16,000 openings a year, mostly replacement), and says a bachelor's degree plus related experience is typical entry (BLS Occupational Outlook Handbook). CyberSeek's national page shows about 457,000 openings for 2025, but the page displays the same figure for openings and for the employed workforce, which looks like a display error, so treat that number as unverified.
- **UK advert data.** ITJobsWatch (6 months to 9 October 2026) counted 6,563 permanent UK ads citing "cybersecurity", up from 3,047 a year earlier, with median advertised salary £60,000 (£80,000 in London; 25th percentile £41,204; 75th £80,000). Caution: this counts any advert mentioning the keyword, and the share of all UK permanent jobs actually fell (5.57% from 6.12%), so the volume jump partly reflects a larger overall sample of adverts with salaries.
- **Japan** is a reminder of how definitions matter: METI reports about 24,000 registered information security specialists against a reported shortage of 110,000 and a target of 50,000 by 2030 (METI, 2025).

**Reading it critically.**
1. Budgets are flat-to-cut while skills needs rise. Employers are asking for experienced people with cloud, AI and AppSec skills; beginners are asked to prove ability before the first job. Practitioner communities (Reddit r/cybersecurity and similar; this rests on anecdotes, not statistics) consistently report that first-job searches take months, with hundreds of applicants per entry posting.
2. Vendor surveys claim AI is eroding Tier 1 SOC work (e.g. a Swimlane-commissioned survey, January 2026: many analysts expect entry-level SOC roles to be eliminated; a Dark Reading headline on a SOC career-ladder survey says satisfaction rose but entry got harder for nearly half; I could not open the full article). These are sponsored by firms selling AI-SOC tools, so the direction is plausible but the magnitude is unverified.
3. The "gap" is therefore uneven: severe for mid-career cloud, detection engineering, AppSec, OT; thin at the bottom rung where supply of certificate-holders is large.

**Regulation creating demand (and jobs in GRC, audit, engineering).**
- **EU NIS2 (Directive 2022/2555).** Transposition deadline 17 October 2024; widely missed. By May 2026 the Commission counted 23 of 27 member states as transposed (stricter than some trackers), and in July 2026 referred Ireland, Spain, France and the Netherlands to the EU Court of Justice. Commonly cited estimate: around 160,000 entities in scope across the EU (up from about 10,000 under NIS1; estimate, not Commission-verified). Sources: Wavestone tracker, Jan 2026; law-firm and compliance-blog summaries.
- **Italy.** NIS2 was transposed by **Decreto Legislativo 138/2024** (in force mid-October 2024; sources cite 16 or 18 October). The national agency is **ACN (Agenzia per la Cybersicurezza Nazionale)**, which is the NIS authority and also hosts CSIRT Italia. Entities had to register on ACN's platform in early 2025 (about 1 January-28 February 2025 per most sources), ACN published the list of essential and important entities by 31 March 2025, and each entity had to name a contact person. Reported maximum fines: €10m or 2% of worldwide turnover (essential) and €7m or 1.4% (important), per law-firm summaries. ACN hired in 2025 (a call for 90 technical-scientific experts via the InPA portal, applications closed 11 September 2025; 17 coordinator posts for protected categories; reported plans for 27 assistants and 24 coordinators). Italy is therefore a growing public-sector and consultancy market, but private pay remains low relative to the UK and US (see section 3).
- **DORA (Regulation 2022/2554)** applies to EU financial entities since 17 January 2025: ICT risk management, incident reporting, third-party (cloud/vendor) risk, and resilience testing; selected entities identified by regulators must run **threat-led penetration testing (TLPT)** roughly every three years, with an external threat-intelligence provider and an external red team required for at least every third test (summaries of the TLPT rules; verify against the regulation). This directly feeds demand for red teamers, threat intel and third-party risk specialists in banks and in the consultancies serving them.
- **EU Cyber Resilience Act (Regulation 2024/2847).** Manufacturers of products with digital elements must report actively exploited vulnerabilities and severe incidents to ENISA/CSIRTs (24-hour early warning, 72-hour notification) **from 11 September 2026**; most other obligations apply from 11 December 2027; fines up to €15m or 2.5% of worldwide turnover (law-firm summaries; Commission guidance 27 July 2026). Driver for product security and vulnerability-management roles.
- **GDPR** (in force since 2018) remains the base for privacy roles (DPOs, privacy engineers).
- **US.** SEC cybersecurity disclosure rules (adopted July 2023): material incidents go on Form 8-K Item 1.05 within four business days of deciding they are material; annual 10-K disclosure of risk management and board oversight (Regulation S-K Item 106; first applied to fiscal years ending on or after 15 December 2023). They raised the profile and the personal-liability worry of CISOs. **CMMC 2.0** for defence contractors: final DFARS rule effective 10 November 2025, phased: phase 1 from that date (mainly self-assessments), **phase 2 from 10 November 2026** (third-party C3PAO Level 2 assessments written into solicitations), phase 3 in 2027, full roll-out by November 2028 (law-firm summaries of the Federal Register rule). This is creating a large wave of compliance consulting and assessor work in the US defence supply chain.
- **UK.** The Cyber Security and Resilience Bill (amends the NIS Regulations 2018; 24-hour initial incident reports, wider scope including data centres and managed service providers) was introduced 12 November 2025, passed the Commons in June 2026, had Lords second reading on 14 July 2026 and committee stage scheduled from 1 September 2026. I found no report of Royal Assent as of early October 2026; verify at bills.parliament.uk. Phased application is expected in 2027-2028.
- **Asia.** Hong Kong's HKMA Cyber Resilience Assessment Framework (C-RAF) drives bank hiring; Singapore's MAS Technology Risk Management Guidelines play the same role (I could only verify an older description of MAS guidance, so check current text); Japan is easing renewal rules for its registered specialist scheme from fiscal 2026 and tying subsidies to security measures (METI).

### 2.1 Security operations (SOC)
**Definition:** a Security Operations Centre is the team (often 24/7) that monitors alerts from tools such as SIEM (security information and event management: a log search and correlation platform, e.g. Splunk, Microsoft Sentinel, Elastic, Google SecOps), EDR (endpoint detection and response, e.g. CrowdStrike Falcon, Microsoft Defender for Endpoint, SentinelOne), email and network sensors, decides what is a real attack, and escalates. **Practice:** you work a queue; Tier 1 triages, Tier 2 investigates, Tier 3 hunts and builds detections. Many SOCs are being reshaped by automation (SOAR playbooks and AI triage). **Employers:** banks, large corporates, telcos, governments, and above all MSSPs (managed security service providers) running SOCs for many clients.

### 2.2 Incident response and digital forensics (DFIR)
**Definition:** containing and investigating live breaches (ransomware, business email compromise, espionage) and reconstructing what happened from disk, memory, cloud and network evidence. **Practice:** irregular, high-intensity bursts, often on retainer for clients. **Employers:** IR specialist firms and vendor IR arms (Mandiant/Google, CrowdStrike, Palo Alto Unit 42, Kroll, Sygnia and others), Big 4 and consultancies, insurers' panels, large in-house teams, law enforcement and national CERTs.

### 2.3 Threat intelligence (CTI)
**Definition:** collecting and analysing information about attackers, their tools and intent, turned into reports and detection content. **Practice:** tactical (indicators, detections), operational (campaign tracking) and strategic (briefings to executives, geopolitical context). **Employers:** vendors with intel teams, banks (cyber fusion centres), government and intelligence, big tech threat teams, ISACs (sector information-sharing groups).

### 2.4 Offensive security
**Definition:** legally attacking systems to find weaknesses: penetration testing (scoped technical test), red teaming (goal-based simulated adversary against people, process and tech, evading the defenders), and bug bounty (independent hunters paid per valid vulnerability via platforms such as HackerOne and Bugcrowd). **Practice:** project work with reports; red teams are small and selective. **Employers:** specialist boutiques, Big 4, vendors, large banks and tech in-house teams; DORA TLPT adds EU demand. (AI red teaming at model labs: see AI branch.)

### 2.5 Application and product security (AppSec, DevSecOps)
**Definition:** building security into software: threat modelling, code review, SAST/DAST/SCA scanning (static, dynamic and software-composition analysis), secure CI/CD pipelines, vulnerability management. **Practice:** embedded with engineering teams; heavy influence-without-authority. **Employers:** big tech, SaaS and fintech companies, banks with large dev organisations, product manufacturers (CRA).

### 2.6 Security engineering and cloud security
**Definition:** designing, building and running security controls: detection engineering, endpoint/network security, cloud posture (AWS/Azure/GCP configuration, CSPM tools), secrets and key management, infrastructure-as-code guardrails. **Employers:** every company with a tech estate; cloud-native firms pay the most.

### 2.7 Identity and access management (IAM)
**Definition:** controlling who and what (people, apps, service accounts) can access which systems: SSO, MFA, privileged access management (PAM), joiner-mover-leaver processes, access reviews, and increasingly zero trust (the principle of never trusting a user or device by location alone; verify every request). **Practice:** large share of work is process and integration with HR and applications; steady demand in regulated sectors. **Employers:** banks, insurers, large corporates, integrators (Accenture, Deloitte, specialist IAM firms), vendors (Okta, Microsoft, CyberArk, SailPoint).

### 2.8 Security architecture
**Definition:** designing the overall security model for systems and enterprises, setting standards, reviewing designs. **Practice:** mid-career; documents, review boards, trade-offs between risk and delivery speed. **Employers:** banks, large corporates, consultancies, government.

### 2.9 Governance, risk and compliance (GRC), audit and privacy
**Definition:** translating law and standards (ISO 27001, SOC 2, NIST CSF, PCI DSS, NIS2, DORA, GDPR) into controls, assessing whether they work, tracking risk, and evidencing it to auditors and regulators. **Practice:** documents, workshops, evidence collection, control testing; the most accessible area for non-technical graduates. **Employers:** banks (second line risk and technology risk), Big 4 and audit firms, insurers, public bodies, any company selling to regulated customers.

### 2.10 OT/ICS security
**Definition:** protecting operational technology: industrial control systems (ICS), SCADA and PLCs that run power grids, factories, pipelines, water and transport, where availability and safety matter more than confidentiality. **Practice:** site visits, network segmentation, passive monitoring (vendors such as Dragos, Claroty, Nozomi), working with control engineers. **Employers:** utilities, oil and gas, manufacturers, rail, OT vendors and integrators (Siemens, Rockwell, ABB, Schneider), consultancies. In Italy: Enel, Eni, Terna, Snam, Leonardo (named from general knowledge; verify hiring).

### 2.11 Consulting and managed services (MSSPs)
**Definition:** selling security expertise by the hour or as a subscription: Big 4 and large integrators (Deloitte, PwC, EY, KPMG, Accenture, Capgemini), boutiques (NCC Group, Context/others, Bishop Fox, Trail of Bits), and MSSPs/MDR (managed detection and response) providers. **Practice:** utilisation targets, client deadlines, travel, wide exposure.

### 2.12 Security vendors
**Definition:** companies that make security products (CrowdStrike, Palo Alto Networks, Microsoft Security, Cisco, Fortinet, Check Point, Okta, Wiz, Zscaler, etc.). Roles: product engineering, research, sales engineering (SE: technical presales who demo, run proofs of concept and answer customer questions), support, customer success. Pay includes equity; layoffs and AI-driven restructuring occur (CrowdStrike cut about 500 roles in May 2025 citing AI efficiencies, per a secondary report).

### 2.13 Government, defence and intelligence
**Definition:** national cyber agencies (US CISA, NSA; UK NCSC/GCHQ; Italy ACN and the intelligence services; ENISA at EU level), militaries' cyber commands, police cybercrime units, and defence contractors. **Practice:** mission-driven, lower pay, strong training, and **clearance and nationality requirements** (US clearances need US citizenship; GCHQ requires UK residency history, e.g. seven of the last ten years on the listing I found). **Employers/programmes:** CyberCorps Scholarship for Service (US), NSA internships, GCHQ Cyber Practitioner Development Programme, ACN calls on InPA.

### 2.14 CISO and leadership track
**Definition:** the chief information security officer owns security strategy, budget, board reporting and, increasingly, personal accountability (SEC rules; Fastly's 2025 research said 93% of organisations changed policies to address CISO personal liability concerns). It is the top of the ladder but a high-pressure, lower-tenure seat.

## 3. Role families

### 3.1 SOC analyst (tier 1-3)

**What you actually do:** Tier 1 reviews alerts from the SIEM and EDR queue: you check whether a login from a new country, a PowerShell command run from an Office macro, or a flagged attachment is malicious, enrich it (VirusTotal, threat feeds, asset inventory, user directory), close false positives, and escalate real ones with a clear ticket. Tier 2 investigates escalations across endpoint, email, identity and cloud logs, isolates hosts, resets credentials and coordinates with IT. Tier 3 (senior analyst or detection engineer) hunts proactively (threat hunting: searching for attackers who evaded automatic alerts), writes detection rules in SPL/KQL/Sigma, tunes noisy alerts, builds SOAR playbooks and mentors. Deliverables: tickets, incident reports, shift handover notes, detection content.

**A typical day and week:** On a Tier 1 12-hour or 8-hour shift you start with handover, work 40-80 alerts (volumes and quality vary widely; practitioner estimate), spend most time on repeat patterns (phishing reports, impossible-travel logins, endpoint alerts) and a few real investigations. Weeks rotate between day, night and weekend shifts at MSSPs and 24/7 SOCs; larger bank SOCs often follow-the-sun across London, Poland/India, US. Tier 2/3 work is mostly business hours with escalation duty. Meetings are few; tuning and playbook work happens between queue peaks.

**Hours, stress and lifestyle:** Typical 40-45 hours (shift patterns such as 4-on-4-off 12-hour shifts are common at MSSPs and 24/7 SOCs); peak 50-60 during a major incident for Tier 2/3. Stress **3/5** (Tier 1: repetitive and alert fatigue; Tier 2/3 during incidents rises to 4). Shift work and nights are the main lifestyle cost; remote is common at MSSPs post-2020 but many bank/government SOCs require on-site (clearance or data rules). Travel minimal. Burnout evidence is vendor-sourced: a Tines survey of 468 analysts found 71% feeling burned out and 64% considering leaving; a CriticalStart survey reported more than 75% of SOCs with analyst turnover above 10% (both vendor-sponsored, dates unclear; treat as directional).

**Human vs. quantitative profile:** People/communication: 3/5. Quantitative/technical: 3/5. You write clear tickets and talk to users and IT under pressure, and you need solid operating-system, networking and log-analysis skill plus basic scripting; deep maths is not needed.

**Compensation (approximate):**
- **US:** entry commonly quoted around US$60-90k (aggregator and training-company blog figures conflict: IT Support Group 2026 US$55-75k; Dropzone 2026 US$70-90k; unverified, no primary source). Robert Half's 2026 guide gives a midpoint of US$122,250 for a cybersecurity analyst of moderate experience (not entry). Senior/Tier 3 or detection engineer US$130-180k+ (Levels.fyi shows much higher at big tech; self-reported).
- **UK:** SOC analyst advertised median £45,000 (ITJobsWatch, 6 months to May 2025; 25th-75th percentile £42,000-£67,500, small sample); regional 2026 medians range from £36,500 (Hampshire, six salaries) to £65,000 on single-salary samples. Entry-level cyber generally £28-40k; graduate schemes: Tesco £40,000 (2026 intake), NESO £34,895, Lloyds engineer scheme £48,500 (listing).
- **Italy:** entry about €25-30k gross (RAL); Glassdoor-based averages for "cyber security analyst" about €29,000 (n=213-234, 2025-2026); mid-level (2-5 years) €40-60k and senior €60-80k per an ICT Security Magazine article (July 2025; sources not named, unverified). Milan pays at the top of these ranges; Rome is similar for consultancies and lower elsewhere.
- **Gulf/Asia:** Singapore entry SOC S$42-60k (ITEL 2025; JobRise 2026); Dubai analyst median total AED 219,994 on 13 Levels.fyi submissions versus Payscale average AED 96,004 (huge spread, unreliable); Riyadh mid-level analyst SAR 12,000-28,000 a month (median 18,000) per a 2025 Saudi salary guide; Gulf packages often add housing and allowances.

**Career path:** 0-2 years Tier 1 / SOC analyst; 2-4 years Tier 2 / security analyst or incident handler; 4-7 years Tier 3, detection engineer, threat hunter, SOC team lead; 7-10 years SOC manager, security operations manager, or lateral to DFIR, threat intelligence, security engineering.

**Exit opportunities:** After 2-3 years: DFIR, threat intelligence, detection engineering, cloud security, pentest (for those with offensive interest), MSSP to in-house. After 7-10 years: SOC manager/head of security operations, security engineering lead, product/solutions roles at vendors (sales engineer), consulting manager, CISO track via risk/operations.

**Tier list of employers:** (Tier groupings reflect industry consensus and practitioner perception, not objective fact.)
- **Tier 1 (best learning and brand):** SOCs of large tech/security firms (Microsoft, Google, CrowdStrike, Palo Alto, Cisco) and top bank/enterprise SOCs (e.g. JPMorgan, HSBC, Barclays, Goldman Sachs, UBS); government national SOCs (NCSC, GCHQ, NSA). Better tooling, more mature processes, structured progression; also very competitive.
- **Tier 2:** Large MSSP/MDR providers (e.g. Accenture, Deloitte, PwC, Kroll, NCC Group, major regional MSSPs; in Italy Yarix/Var Group, Telsy, Almaviva, Leonardo cyber units) and mid-size enterprise SOCs: broad exposure, many clients, but heavy shift work and utilisation pressure.
- **Tier 3:** Low-end outsourced "alert-forwarding" shops and understaffed internal teams: repetitive ticket work, little training, high turnover, but they hire the most people with no experience and can be a first foot in the door.

**How to enter:**
- **Degrees:** computer science, IT, cybersecurity, engineering or maths are standard; ISC2 data shows that among respondents aged 21-29, 38% entered through IT and 23% through a cyber degree. Hiring managers say 90% would consider IT experience alone; non-target schools are rarely a barrier for SOC roles, practical skill is.
- **Internships/graduate programmes (verified listings only):** Barclays Technology Cyber & Security graduate programme (2026 intake applications closed 14 November 2025; a 2027 programme and 2027 summer internship for penultimate-year students are listed; check sponsorship wording); HSBC Technology Graduate Programme with a Cyber pathway (two-year; 2027 cyber internship listed); Lloyds Banking Group cyber security engineer graduate scheme (£48,500, 2-year, listing); Vodafone Group UK Cyber Security Graduate Programme (2026); Tesco and ScottishPower cyber graduate schemes; Deloitte UK Cyber, Data and Digital graduate programme (2:1 any discipline; closed for the 2026 intake); GCHQ Cyber Practitioner Development Programme (2026 round closed January 2026); US CyberCorps Scholarship for Service (deadlines set by each participating university, typically spring; US citizens, service obligation); NSA summer internships (application window around September). Calendars: UK graduate schemes open September-November for next-year entry; US internships recruit in the autumn for the following summer.
- **Certifications:** CompTIA Security+ (most-cited entry cert in job ads; US ad counts for May 2024-April 2025 were about 70,000 per CyberSeek) and ISC2 Certified in Cybersecurity (CC) are the realistic starters; CompTIA CySA+ and Blue Team Level 1 help; Microsoft SC-200 (Security Operations Analyst) is practical if the employer uses Sentinel/Defender. CEH is disputed (often screened for but disliked by practitioners). CISSP is irrelevant until you have 5 years' experience (the Associate of ISC2 route lets you pass early and gain the experience within six years).
- **Skills and portfolio:** Linux and Windows internals, TCP/IP, log analysis, Splunk or KQL queries, Sigma rules, MITRE ATT&CK mapping, basic Python/PowerShell; build a home lab (Security Onion, Wazuh, Elastic, Splunk free tier), TryHackMe SOC path, Blue Team Labs Online, LetsDefend, CyberDefenders; publish write-ups.
- **Common mistakes:** collecting certificates without hands-on proof; applying only to "Security Analyst" titles and ignoring IT help-desk/NOC roles; ignoring regional or MSSP employers; weak CVs.
- **Alternative routes:** IT help desk or sysadmin to SOC (the most common route), military cyber/signals units, apprenticeships (UK degree apprenticeships and L4 cyber technologist), career changers from IT audit or networking.
- Entry difficulty: **3/5** (many posted roles but heavy competition; rising as AI automates Tier 1).

**Honest downsides and who it is NOT a good fit for:** Nights and weekends, alert fatigue and metric pressure (alerts closed per hour) are common; Tier 1 work can be monotonous and promotion needs self-driven learning; AI-driven automation may shrink the number of purely junior seats. Not a good fit for people who need predictable daytime hours, hate repetitive queue work, or want to build things from scratch rather than investigate.

### 3.2 Incident responder / digital forensics (DFIR)

**What you actually do:** When a company is breached, you scope and contain the intrusion: collect logs and disk/memory images (with EDR tools such as CrowdStrike or Defender, plus KAPE, Velociraptor, Volatility), analyse persistence mechanisms, lateral movement and exfiltration, advise on isolation and recovery, and write the timeline and executive report. Forensics specialists preserve evidence to a legal standard (chain of custody) for litigation, insurers or police. Deliverables: incident timeline, root-cause and remediation advice, expert witness statement, regulator notifications support (e.g. 72-hour GDPR, DORA/NIS2 reporting, SEC 8-K).

**A typical day and week:** On retainer-based firms, quiet weeks involve proactive work (compromise assessments, tabletop exercises, playbook writing, training); a breach call turns the week into 12-16 hour days for several days, often with a client on a video call at 3 a.m. In-house IR teams run on-call rotations (about one week in four to eight is common, practitioner estimate) and alternate between triage and post-incident improvement.

**Hours, stress and lifestyle:** Typical 40-50 hours averaged over a quarter; peaks of 60-80 hours in active ransomware engagements. Stress **4/5** (frequent high-stakes pressure; leading a major breach response can reach 5). On-call and unpredictability are significant; consulting IR involves travel (on-site engagements in some cases, though remote response dominates since 2020). Dragos and others describe 24/7 response obligations with off-hours work and rotation norms that decide real balance (vendor descriptions).

**Human vs. quantitative profile:** People/communication: 4/5. Quantitative/technical: 4/5. You need deep technical forensics and the ability to calm executives, lawyers and insurers during a crisis; reports must be exact.

**Compensation (approximate):**
- **US:** no reliable role-specific data found; bundle within analyst/engineer ranges: Robert Half 2026 US midpoints: cybersecurity analyst US$122,250, cybersecurity engineer US$144,000 (moderate experience). IR consultants at major firms: US$90-120k at entry, US$150-220k senior (unverified, practitioner and aggregator figures); Levels.fyi shows much higher at big tech.
- **UK:** no reliable role-specific data found; UK cyber median advertised £60,000 (ITJobsWatch, 6 months to October 2026); IR is generally priced above SOC (£40-50k entry at consultancies, £70-100k senior; unverified).
- **Italy:** no reliable data found; consultancy (Big 4, Yarix, others) probably €30-38k entry and €60-90k senior (unverified, inferred from general Italian cyber bands).
- **Gulf/Asia:** no reliable data found; Gulf IR/DFIR roles are typically high-demand and tax-free but with limited published data.

**Career path:** 0-2 years SOC or junior forensic analyst; 2-4 years incident responder / DFIR consultant; 4-7 years senior responder, IR lead, engagement manager; 7-10 years IR practice lead, head of cyber defence, or move to CISO via operations.

**Exit opportunities:** After 2-3 years: threat intelligence, detection engineering, cyber insurance (breach coach, claims), government/law enforcement. After 7-10 years: head of security operations, CISO (deputy), vendor leadership roles, expert-witness consulting, independent consulting.

**Tier list of employers:** (Tier groupings reflect industry consensus and practitioner perception, not objective fact.)
- **Tier 1:** Mandiant (Google), CrowdStrike services, Palo Alto Networks Unit 42, Microsoft DART/IR, national agencies (NCSC, GCHQ, CISA, FBI cyber), top bank and tech in-house IR teams. Elite exposure to major breaches.
- **Tier 2:** Kroll, Sygnia, S-RM, Secureworks (Sophos), Big 4 cyber response teams, Accenture, NCC Group; in Italy, Big 4 and specialist firms plus Leonardo/Telsy units and the national CSIRT Italia at ACN.
- **Tier 3:** Small regional IR shops and IT-integrator add-on teams: less case variety.

**How to enter:**
- **Degrees:** CS, cybersecurity, digital forensics degrees (UK and Italy have specialised MScs, e.g. Italian cybersecurity masters at Sapienza, Padova, Genova), engineering; law-enforcement or military cyber backgrounds common.
- **Internships/graduate programmes:** Big 4 cyber graduate schemes (Deloitte UK Cyber, Data and Digital; other Big 4 rotations, check each year's listing), government (GCHQ, NCSC, ACN calls via InPA), CyberCorps SFS (US). Most IR hires come after 1-3 years in a SOC or sysadmin job.
- **Certifications:** GIAC GCFE/GCFA/GCIH/GNFA (from SANS, widely respected but often US$8,000-9,000 each without employer funding; price unverified), EnCE/CCE for law-enforcement style forensics, Security+ for baseline; CISSP after 5 years. Certifications matter more here than in pentest when firms sell to clients, but experience dominates.
- **Skills and portfolio:** Windows internals, memory forensics (Volatility), timeline analysis, log analysis, PowerShell, Python; practise with CyberDefenders, Blue Team Labs, DFIR Madness case images, SANS challenge images; blog write-ups.
- **Common mistakes:** skipping fundamentals (networking, OS) to chase malware reversing; unrealistic expectations of constant "hunting".
- **Alternative routes:** SOC Tier 2 promotion, police digital forensics units, military, IT sysadmin.
- Entry difficulty: **4/5** (fewer entry seats, expected prior experience).

**Honest downsides and who it is NOT a good fit for:** Unpredictable surges, sleep loss, exposure to client panic and legal pressure, and a high burnout rate; consulting IR firms bill hours, so quiet periods are filled with reporting. Not for people who want fixed schedules, dislike ambiguity, or cannot communicate calmly with non-technical decision-makers.

### 3.3 Threat intelligence analyst

**What you actually do:** Track adversaries (ransomware gangs, state-linked groups, fraudsters), collect from open sources, malware repositories, dark-web forums and vendor feeds, and produce finished intelligence at three levels: tactical (indicators, detections), operational (campaign analysis) and strategic (what this means for the business or country). Tools: MISP, OpenCTI, Recorded Future, VirusTotal, Maltego, MITRE ATT&CK, Sigma/YARA. Deliverables: written reports, briefings, intelligence requirements, detection content, and sometimes attribution assessments.

**A typical day and week:** Morning scanning of feeds and news, triaging requests from the SOC, IR or leadership ("is this vulnerability being exploited?"), writing a weekly threat summary, tracking a specific actor, and presenting a brief. About a third reading and collection, a third analysis, a third writing and briefing.

**Hours, stress and lifestyle:** Typical 40-45 hours, peak 50-55 during a major campaign. Stress **3/5** (deadline-driven for urgent requests, otherwise steady). Mostly business hours, hybrid common; vendors allow remote; government roles on-site. Travel low.

**Human vs. quantitative profile:** People/communication: 4/5. Quantitative/technical: 3/5. Writing and structured analytical thinking matter as much as malware knowledge; geopolitical and regional knowledge are a differentiator, language skills (Russian, Chinese, Arabic, Farsi) valuable.

**Compensation (approximate):**
- **US:** no reliable role-specific data found; aggregator estimates for CTI analysts are roughly in the US$80-100k entry range and US$130-180k senior (unverified); big tech and top vendors pay more.
- **UK:** no reliable data found; generally similar to or slightly below security engineering (entry £35-45k, senior £70-100k; unverified); government GCHQ/NCSC analyst scheme starts around £37,892 on the graduate listing I found for GCHQ maths/cryptography, a different but comparable entry route.
- **Italy:** no reliable data found; limited CTI market (banks, Leonardo/Telsy, consultancies, ACN); likely €28-35k entry (unverified).
- **Gulf/Asia:** no reliable data found.

**Career path:** 0-2 years SOC or junior CTI analyst; 2-5 years CTI analyst/senior analyst; 5-8 years lead/team manager, specialist (malware, geopolitical, cybercrime); 8-10+ years head of threat intelligence, strategic risk advisor, CISO office.

**Exit opportunities:** After 2-3 years: DFIR, red-team (adversary emulation), detection engineering, risk and fraud intelligence. After 7-10 years: head of intel, security strategy or risk roles, government policy advisory, consulting leadership.

**Tier list of employers:** (Tier groupings reflect industry consensus and practitioner perception, not objective fact.)
- **Tier 1:** Google Threat Intelligence/Mandiant, Microsoft MSTIC, Cisco Talos, CrowdStrike Intelligence, Palo Alto Unit 42, Recorded Future (Mastercard), national agencies (GCHQ/NCSC, NSA, CISA), the top bank cyber fusion centres.
- **Tier 2:** Other vendors (Kaspersky excluded by many Western employers; ESET, Check Point Research, Trend Micro, Group-IB), Big 4, bank CTI teams, ISACs.
- **Tier 3:** Feed-reselling firms and small shops focused on repackaged indicator feeds.

**How to enter:**
- **Degrees:** CS, cybersecurity, international relations/security studies, economics with technical skills, languages; analytic backgrounds from journalism/OSINT also work. One of the few cyber areas where humanities degrees compete.
- **Internships/graduate programmes:** vendors' intern programmes (Google, Microsoft, CrowdStrike) and government intelligence schemes (GCHQ, NCSC; US agencies with clearances; Italian state security bodies recruit via public calls). Mostly hired after 1-3 years in SOC/analytics.
- **Certifications:** GIAC GCTI (SANS FOR578) is the recognised credential; Security+ baseline; CISSP irrelevant early. Certifications are secondary to a writing sample and analytic tradecraft.
- **Skills and portfolio:** write public analyses (campaign blogs), contribute to MISP/OpenCTI, participate in OSINT challenges (Trace Labs), learn MITRE ATT&CK, YARA, basic malware triage.
- **Common mistakes:** confusing indicator collection with analysis; weak writing.
- **Alternative routes:** OSINT or journalism, military intelligence, SOC promotion.
- Entry difficulty: **4/5** (small field, few junior roles).

**Honest downsides and who it is NOT a good fit for:** Few openings; the work can be reactive to leadership asking "are we affected?" with limited resources; some roles are basically feed management. Not for people who dislike writing, or who want to do hands-on engineering all day.

### 3.4 Penetration tester / red teamer / offensive security

**What you actually do:** Penetration testers are given a scope (a web app, an internal network, a cloud account, a mobile app) and a time window (commonly 3-10 days per engagement), then attack it using tools such as Burp Suite, Nmap, Metasploit, BloodHound, Cobalt Strike-type frameworks, plus manual testing for logic flaws, and write a report with ranked findings and fixes. Red teamers run multi-week goal-based operations (e.g. "reach the payment system"), including phishing, physical or social engineering, and stealth against the client's SOC; they work in a small team and brief both the client and the defenders at the end (purple teaming). Bug bounty hunters do this independently for rewards.

**A typical day and week:** On a consultancy project week: Monday kickoff and scoping call, 3-4 days testing, then report writing (often 30-40% of project time), client debrief on Friday; between projects you do retests, internal research, tooling. Red team operations involve long periods of waiting and careful operational security. Bug bounty is sporadic and income is uncertain.

**Hours, stress and lifestyle:** Typical 40-45 hours, peak 55-60 during report deadlines; utilisation targets at consultancies are commonly 66-72% (vendor benchmark figures for services firms; best-in-class 78-82%; note these are PSA-software vendor claims). Stress **3/5** (project deadlines, client expectations; TrustedSec and Schellman both describe burnout as widespread in the field). Remote work is common; client-site work and travel occasional (red team physical engagements); tests often scheduled around client change windows. Some firms (e.g. Schellman) rotate testers to a new project every 2-6 weeks.

**Human vs. quantitative profile:** People/communication: 3/5. Quantitative/technical: 5/5. This is the most technical area: creativity, persistence and understanding of how systems break, but you also write reports that clients actually act on.

**Compensation (approximate):**
- **US:** entry US$85-95k (a training provider's 2026 guide); Jobicy junior band US$81.5-102.1k; Payscale entry-level only US$63-70k; all-level averages US$120-122k (Indeed, ZipRecruiter Aug 2026). Mid-career 3-5 years US$110-140k; senior US$150-200k+ at top firms (unverified; vendor/recruiter sources). Big tech red teams pay far more (Levels.fyi self-reported security engineer medians in the hundreds of thousands at Google/Amazon).
- **UK:** ITJobsWatch median penetration tester £67,500 (6 months to May 2025, only 11 salaries); Henderson Scott technology salary guide 2026: mid-level about £60-80k, manager £115-135k, outside-IR35 day rates £450-600; Payscale average only £36,430 (range £28-65k), probably reflecting entry roles; entry at consultancies is typically £32-40k (unverified).
- **Italy:** no reliable data found; probably €28-35k entry at consultancies, €50-70k senior (unverified).
- **Gulf/Asia:** no reliable data found; Singapore/Dubai senior roles are competitive and paid above local analyst ranges (unverified).

**Career path:** 0-2 years junior/associate consultant (often via SOC, dev or sysadmin); 2-4 years consultant/pentester; 4-7 years senior consultant, team lead, red team operator; 7-10 years principal consultant, practice lead, head of offensive security, or move into security engineering/AppSec leadership.

**Exit opportunities:** After 2-3 years: AppSec engineer, red team in a bank or tech firm, vulnerability researcher, security engineer, sales engineering at vendors, bug bounty full-time. After 7-10 years: head of offensive security, security consulting director, product security leadership, startup founder, CISO route (less common).

**Tier list of employers:** (Tier groupings reflect industry consensus and practitioner perception, not objective fact.)
- **Tier 1:** SpecterOps, Mandiant (Google) red team, Trail of Bits, NCC Group (top teams), Bishop Fox, Google/Microsoft/Meta/Amazon in-house red teams, NSA/GCHQ operators, elite bank red teams (e.g. JPMorgan, Goldman Sachs).
- **Tier 2:** CREST-accredited consultancies and Big 4 offensive teams (Deloitte, PwC, EY, KPMG), Accenture, MWR/F-Secure-type firms, mid-size boutiques, bank internal teams; in Italy, firms such as Yarix, Hacktive, plus Big 4 and Leonardo (named from general knowledge; verify).
- **Tier 3:** Low-cost "scan and report" providers and tool-driven firms resold as compliance pen tests.

**How to enter:**
- **Degrees:** CS, cybersecurity, software engineering; self-taught developers do well. Degrees help for visas and UK/EU graduate schemes but hands-on proof is decisive.
- **Internships/graduate programmes:** Big 4 cyber graduate schemes, boutique graduate programmes (NCC Group, others, check yearly), bank cyber graduate programmes (Barclays, HSBC listed above often cover mixed security roles), CyberCorps SFS and government (GCHQ). Also junior/apprentice posts at Bugcrowd-type companies (Bugcrowd has listed foundational offensive roles).
- **Certifications:** OSCP (Offensive Security's 24-hour hands-on exam) is the most-cited practical certification and can unlock interviews; CREST certifications (CPSA/CRT/CCT) matter for UK and Commonwealth clients because CREST accreditation of the company is often required by buyers; GIAC GPEN/GWAPT; PNPT (TCM), eJPT and TryHackMe PT1 are cheaper entry options; CEH is widely disliked by practitioners and often cited as low value. CISSP is irrelevant early.
- **Skills and portfolio:** web application security (OWASP Top 10, Burp), Active Directory attack paths, Linux/Windows, scripting (Python, Bash, PowerShell), report writing; HackTheBox and TryHackMe rankings, CVE credits, public CTF results, bug bounty reports (HackerOne, Bugcrowd), conference talks.
- **Common mistakes:** only running tools; poor report writing; applying only to "penetration tester" titles when "security consultant" is the title; skipping fundamentals.
- **Alternative routes:** SOC/IT then internal red team; developer to AppSec/pentest; bug bounty winnings as a portfolio. SOC Tier 1 is described by training sites as the faster first step for most people.
- Entry difficulty: **4/5** (junior seats few; some market commentary says AI is compressing junior pentest roles, though evidence is thin).

**Honest downsides and who it is NOT a good fit for:** Utilisation pressure and report-writing time (the "fun hacking" share is smaller than expected); scope limits; repetitive web-app tests; imposter syndrome; income uncertainty in bug bounty. Not for people who dislike writing and documentation or want fast promotion without deep technical growth.

### 3.5 Application security / product security engineer (incl. DevSecOps)

**What you actually do:** Help software teams ship secure code: threat-model new features, review design docs and pull requests, run and tune SAST/DAST/SCA scanners (e.g. Semgrep, Snyk, Veracode, Checkmarx), triage findings, fix or coach developers on fixes, build secure pipeline guardrails (CI/CD, container scanning, secrets detection, SBOMs: software bills of materials listing components in a product), run bug bounty programmes and respond to external vulnerability reports. DevSecOps engineers automate these checks in infrastructure-as-code and Kubernetes. Deliverables: threat models, security requirements, secure coding standards, dashboards, vulnerability SLAs, fixes.

**A typical day and week:** A third in meetings with product and engineering teams (design reviews, security champions), a third reviewing code and triaging scanner results, a third building tooling or writing guidance. Deadlines tie to release cycles; incident work arises when a vulnerability (e.g. an actively exploited library flaw) hits.

**Hours, stress and lifestyle:** Typical 40-45 hours, peak 50-55 around launches or major vulnerabilities. Stress **3/5**. Hybrid or remote is common in tech; on-call is lighter than SRE but exists at product companies. Travel minimal.

**Human vs. quantitative profile:** People/communication: 4/5. Quantitative/technical: 4/5. You must write real code and read others' code, but succeed mainly by persuading engineers to prioritise fixes.

**Compensation (approximate):**
- **US:** Robert Half 2026 midpoint for cybersecurity engineer US$144,000 and security architect US$157,250 (moderate experience); big tech product security medians much higher (Levels.fyi, September 2026, self-reported: Google security engineer median about US$281k total; Amazon about US$340k median; averages skewed by outliers). KORE1 2026 puts the national security engineer median around US$152-170k. Entry at non-tech firms roughly US$95-120k (unverified).
- **UK:** no reliable AppSec-specific data found; security engineer/consultant advertised medians fall around the £60k cyber median (ITJobsWatch Oct 2026); senior AppSec at tech firms £90-130k (unverified).
- **Italy:** Security Engineer around €45,900 average gross (Glassdoor-based, Feb-June 2026, small sample); junior €30-38k; senior €55-75k at multinationals (unverified).
- **Gulf/Asia:** Singapore cybersecurity engineer S$72-102k (ITEL 2025); cloud security analyst S$90-150k (JobRise 2026).

**Career path:** 0-2 years junior AppSec / developer with security focus; 2-4 years AppSec engineer; 4-7 years senior/staff engineer, security champion programme lead; 7-10 years principal engineer, head of product security, or engineering manager.

**Exit opportunities:** After 2-3 years: cloud security, security engineering, vendor product roles, pentest, platform engineering. After 7-10 years: head of product security, CISO at software company, security architect, startup founder.

**Tier list of employers:** (Tier groupings reflect industry consensus and practitioner perception, not objective fact.)
- **Tier 1:** Google, Microsoft, Meta, Amazon, Apple, Stripe, Cloudflare, GitHub; research-heavy AppSec firms (Trail of Bits). Strong engineering culture, equity.
- **Tier 2:** Large SaaS/fintech (Adyen, Revolut, Monzo, Wise), banks with mature engineering (JPMorgan, Goldman, Barclays), security vendors (Snyk, Palo Alto), Big 4 application security practices.
- **Tier 3:** Companies where AppSec means "run the scanner and send PDFs"; some consultancies; slow-moving enterprises.

**How to enter:**
- **Degrees:** CS or software engineering strongly preferred; most AppSec hires have 1-3 years as developers or pentesters.
- **Internships/graduate programmes:** software engineering internships at tech firms with security rotations; bank technology/cyber graduate programmes; product security internships at large vendors.
- **Certifications:** OSWE/OSWA or GIAC GWEB for depth; Certified Secure Software Lifecycle Professional (CSSLP) rare; cloud security basics (AWS Security Specialty); certifications matter little relative to demonstrable code reviews and open-source contributions.
- **Skills and portfolio:** OWASP Top 10, API security, authN/Z flows, Docker/Kubernetes, one language deeply (Python, Go, Java, JavaScript), writing Semgrep/CodeQL rules, contributing fixes to open-source projects, bug bounty on web targets.
- **Common mistakes:** over-relying on scanner output; being the "department of no".
- **Alternative routes:** developer-to-AppSec move inside a company; pentester to AppSec.
- Entry difficulty: **4/5** at graduate level (few direct entry roles); easier via a development job first.

**Honest downsides and who it is NOT a good fit for:** Political friction with delivery teams, scanner false positives, limited authority; heavy meeting load. Not for people who want pure hacking or avoid collaboration.

### 3.6 Security engineer / cloud security engineer / IAM engineer

**What you actually do:** Build and run the security controls the organisation relies on. *Security engineer:* deploy and tune EDR, email security, network controls and vulnerability management; write detection-as-code rules; automate responses. *Cloud security engineer:* secure AWS/Azure/GCP: IAM policies, network segmentation, logging, CSPM (cloud security posture management) tools like Wiz or Prisma Cloud, Terraform guardrails, Kubernetes security, key management. *IAM engineer:* run SSO and MFA (Okta, Entra ID), privileged access (CyberArk, BeyondTrust), identity governance (SailPoint), lifecycle automation with HR systems, access reviews for audit. Deliverables: configurations, automation scripts, architecture patterns, runbooks, audit evidence, metrics.

**A typical day and week:** Mostly project and ticket work: a morning stand-up, then building a Terraform module, investigating a misconfiguration flagged by the CSPM tool, helping an app team onboard to SSO, responding to an audit evidence request. One week in several you are on call for security tooling or access incidents. Change windows and audits create peaks.

**Hours, stress and lifestyle:** Typical 40-45 hours; peak 50-55 during audits, migrations or incidents. Stress **3/5** (4 for on-call-heavy roles at cloud-scale firms). Hybrid is the norm; remote-friendly in tech, more on-site in banks and government. Travel minimal.

**Human vs. quantitative profile:** People/communication: 3/5. Quantitative/technical: 4/5. You are an engineer first: scripting, infrastructure, systems knowledge; IAM leans more on process and stakeholder management (HR, application owners).

**Compensation (approximate):**
- **US:** Robert Half 2026 midpoints (moderate experience): cybersecurity engineer US$144,000, network security engineer US$145,500, security architect US$157,250; KORE1 2026 national median US$152-170k for security engineers; big tech: Google security engineer median about US$281k total, Amazon about US$340k median (Levels.fyi, Sept 2026, self-reported). IAM: Robert Half 2026 US midpoint not found (a single contract posting showed US$43-47/hour; not a benchmark). Entry US$85-115k at non-tech firms (unverified).
- **UK:** advertised UK cyber median £60,000 (ITJobsWatch to 9 Oct 2026; London £80,000; "security engineer" 345 permanent ads and "security architect" 313 in the period). Lloyds graduate security engineer scheme £48,500 (listing). Senior cloud security engineers £80-110k (unverified).
- **Italy:** Security Engineer about €45,900 and Cyber Security Engineer about €32,800 average gross (Glassdoor-based, Feb-June 2026, small samples, conflicting); junior €30-38k; senior €55-75k (unverified).
- **Gulf/Asia:** Singapore cybersecurity engineer S$72-102k, cloud security S$90-150k (ITEL 2025, JobRise 2026); Dubai engineer average around AED 180,000 base (Payscale, not reliable); Gulf packages usually add allowances.

**Career path:** 0-2 years junior security engineer / IAM analyst (often after IT/DevOps/sysadmin); 2-4 years security engineer; 4-7 years senior engineer, team lead, cloud security specialist; 7-10 years staff/principal engineer, security architect or engineering manager.

**Exit opportunities:** After 2-3 years: cloud security specialist, detection engineering, platform/DevSecOps, vendor roles, consulting. After 7-10 years: security architect, head of security engineering, CISO (via engineering route), field CTO/sales engineer at vendors.

**Tier list of employers:** (Tier groupings reflect industry consensus and practitioner perception, not objective fact.)
- **Tier 1:** Big tech and cloud providers (Google, Microsoft, Amazon, Meta, Apple), major security vendors (CrowdStrike, Palo Alto, Cloudflare, Okta), top fintechs. Highest pay, strong engineering bar.
- **Tier 2:** Large banks and insurers (JPMorgan, HSBC, Barclays, UBS, Intesa Sanpaolo, UniCredit), consultancies/integrators (Accenture, Deloitte, Capgemini), industrial multinationals (Siemens, Enel, Eni).
- **Tier 3:** Mid-size non-tech companies and public bodies with small teams where one person covers everything on legacy systems; broad but under-resourced.

**How to enter:**
- **Degrees:** CS, IT, engineering, cybersecurity; strong path from sysadmin, network, cloud or DevOps roles (ISC2: IT is the biggest entry path for ages 21-29).
- **Internships/graduate programmes:** Barclays, HSBC, Lloyds technology/cyber graduate schemes (listed above), Accenture Security graduate programme (STEM graduates; one listing closed October 2025), Vodafone, Tesco, ScottishPower; Intesa Sanpaolo programmes list cyber-related roles (verify openings). Recruiting calendar: UK graduate applications September-November; US internships in autumn.
- **Certifications:** Cloud certifications matter most here: AWS Certified Security - Specialty, Microsoft SC-100/SC-300 (identity), Azure AZ-500, Google Professional Cloud Security Engineer, HashiCorp Terraform; for IAM, Okta/SailPoint/CyberArk vendor certs; Security+ for baseline; CISSP at 5 years for architect track (CISSP appeared in about 82,500 US ads May 2024-April 2025 per CyberSeek, ahead of Security+ at about 70,000 and CISA at about 52,300). ISC2 data show many employers over-ask for CISSP/CISA at entry level, but that is a screening quirk not a requirement you can meet.
- **Skills and portfolio:** Infrastructure-as-code, Linux, networking, Python/Go, Kubernetes, SIEM queries; a GitHub repo showing a secure AWS landing zone or detection rules as code; contribute to open-source security tools; free cloud tier labs.
- **Common mistakes:** treating security as only tooling; not learning how the business apps work.
- **Alternative routes:** DevOps/sysadmin transfer, military signals, SOC to engineering.
- Entry difficulty: **3/5** (cloud skills in demand: ISC2 2025 ranks cloud security second among skills needs at 36%; but graduate seats are limited and most hires bring IT experience).

**Honest downsides and who it is NOT a good fit for:** On-call and change-window pain, legacy-tool sprawl, being blamed for outages caused by controls, and cert/tool churn. IAM can be process-heavy and invisible until something breaks. Not for people who want glamour hacking or avoid operational responsibility.

### 3.7 Security architect (mid-career destination)

**What you actually do:** Define how security is built into systems and across the enterprise: reference architectures (zero trust, network segmentation, secure cloud landing zones), standards, technology selections, design reviews of major projects, risk acceptance advice, alignment with frameworks (NIST CSF, ISO 27001, SABSA, TOGAF). Deliverables: architecture diagrams, patterns, decision papers, review sign-offs.

**A typical day and week:** Design-review meetings, whiteboarding with engineering, writing standards, advising on vendor selection, steering committee updates, handling exceptions. Little hands-on keyboard after the first years.

**Hours, stress and lifestyle:** Typical 40-45 hours, peak 50-55 around major programmes. Stress **3/5**. Hybrid common; light travel; no shifts; occasional escalations. Influence over authority creates frustration.

**Human vs. quantitative profile:** People/communication: 4/5. Quantitative/technical: 4/5. Technical breadth across many domains and the ability to persuade senior stakeholders.

**Compensation (approximate):**
- **US:** Robert Half 2026 midpoint US$157,250 (range US$138,250-176,000); big tech and finance senior architects materially higher (unverified).
- **UK:** about £90-130k common in recruiter commentary for architect/CISO-track roles (a general UK blog put £110-150k+ for security architect/CISO track; low reliability); 313 permanent "security architect" ads in six months to 9 Oct 2026 (ITJobsWatch).
- **Italy:** no reliable data found; plausibly €60-90k for senior architects in banks/multinationals (unverified).
- **Gulf/Asia:** no reliable data found.

**Career path:** typically 6-10 years of experience as engineer/consultant; then senior architect, principal/lead architect, head of architecture, CISO/deputy CISO.

**Exit opportunities:** After 2-3 years as architect: consulting principal, CTO-side architecture, vendor field CTO. After 7-10 years: CISO, chief architect, independent consultant.

**Tier list of employers:** (Tier groupings reflect industry consensus and practitioner perception, not objective fact.) Tier 1: big tech, tier-1 banks, leading consultancies' architecture practices; Tier 2: large corporates, insurers, telcos, utilities; Tier 3: smaller firms where "architect" is a rebranded senior engineer.

**How to enter:** Not an entry job. Degrees: CS/engineering; progress via engineering or consulting. Certifications: CISSP (5 years' experience), CCSP (cloud), SABSA, TOGAF, cloud architect certs (AWS/Azure/GCP), CISM for management bent; these matter more here than at entry. Common mistakes: jumping to architecture without breadth; paper-only designs. Alternative routes: from network/systems architecture. Entry difficulty: **5/5** as a direct start (not a graduate role); realistic after 6-10 years.

**Honest downsides and who it is NOT a good fit for:** Influence without control, documentation overhead, being detached from real systems. Not for people who need hands-on technical work every day.

### 3.8 GRC analyst / security auditor / privacy specialist

**What you actually do:** *GRC analyst:* maintain the security risk register, run control assessments against ISO 27001, SOC 2, NIST CSF, PCI DSS, NIS2 or DORA, manage policy exceptions, third-party (vendor) risk questionnaires, evidence collection and audit liaison. *Security/IT auditor:* test controls independently (Big 4 technology risk, internal audit, ISACA-style IT audit) and write findings. *Privacy specialist/DPO support:* data-protection impact assessments, records of processing, data-subject requests, breach notifications under GDPR, vendor DPAs, privacy-by-design reviews. Deliverables: risk assessments, audit reports, policies, gap analyses, regulator submissions.

**A typical day and week:** Calls with control owners to obtain evidence, reviewing screenshots and logs, writing audit workpapers and findings, updating risk registers, attending governance committees, answering a client security questionnaire. Pre-audit and regulatory deadlines create crunch (SOC 2 audit window, DORA register of information, NIS2 registration).

**Hours, stress and lifestyle:** Typical 40-45 hours (45-55 at Big 4 in busy season), peak 55-60 around audits and regulatory deadlines. Stress **2-3/5** (steady deadlines; higher at audit firms). Hybrid/remote is common; some travel for audits; no shifts. This is typically the most predictable security family.

**Human vs. quantitative profile:** People/communication: 4/5. Quantitative/technical: 2/5. Interpretation, writing and persuasion; moderate technical understanding of controls (you need to know what good looks like for access reviews or backups) but little hands-on engineering.

**Compensation (approximate):**
- **US:** no US GRC midpoint found; Robert Half Canada lists GRC analyst CA$77,000-140,000 with midpoint CA$108,500 (currency inferred; Canadian data only). US aggregators place GRC analysts roughly US$85-130k (unverified). BLS information security analysts overall median US$124,910 (May 2024).
- **UK:** about £35-45k entry at Big 4 and banks; senior GRC/audit managers £65-90k (unverified). Big Four graduate pay (non-cyber specific): London about £32-40k (a 2026 guide); Deloitte £37k, PwC £34k, EY £32k, KPMG £32k (consulting; year unspecified).
- **Italy:** Michael Page Italy 2026 salary study (compliance & risk): risk analyst/manager and compliance officer/manager €35-55k (<5 years), €55-90k (5-10 years), >€90k (>10 years), bonus 15-30%; internal auditor €35-55k, €55-80k, >€80k. These are risk/compliance bands in banking, not cyber-specific, but the closest verified Italian figure. Cyber GRC specifically: no reliable data found.
- **Gulf/Asia:** no reliable data found; Gulf banks and government entities pay well for compliance specialists given national frameworks (unverified).

**Career path:** 0-2 years GRC/audit analyst; 3-5 years senior analyst / IT auditor / privacy lead; 5-8 years GRC manager, security assurance manager; 8-12 years head of GRC, DPO, deputy CISO, CISO.

**Exit opportunities:** After 2-3 years: security consulting, third-party risk, risk management in banks, privacy counsel roles, product compliance. After 7-10 years: CISO, chief risk/compliance officer, head of assurance, independent consultant/auditor.

**Tier list of employers:** (Tier groupings reflect industry consensus and practitioner perception, not objective fact.)
- **Tier 1:** Big 4 (Deloitte, PwC, EY, KPMG) technology risk practices, big banks' second-line technology risk functions (JPMorgan, HSBC, Barclays, Goldman, UBS; in Italy Intesa Sanpaolo, UniCredit, Generali), regulators (ECB, PRA, Banca d'Italia, ACN).
- **Tier 2:** Specialist GRC consultancies and boutiques, large corporates, certification bodies (BSI, DNV, TÜV), SaaS companies' security assurance teams.
- **Tier 3:** Small firms where GRC is a checkbox role; some compliance-automation startups with high churn.

**How to enter:**
- **Degrees:** Wide open: business, accounting, law, economics, management information systems, CS. This is the most accessible area for non-technical backgrounds, especially accounting/finance (audit mindset) and law (privacy).
- **Internships/graduate programmes:** Big 4 technology risk/cyber graduate schemes (Deloitte UK Cyber, Data and Digital accepts any discipline with a 2:1; closing is rolling), bank risk and cyber graduate programmes (Barclays, HSBC, Lloyds), regulator graduate schemes; Italy: Big 4 and bank programmes; Intesa Sanpaolo lists cyber risk governance roles.
- **Certifications:** ISACA CISA (needs five years' experience, 1-3 years waivable by education/other credentials per ISACA's rules, check), CISM, ISO 27001 Lead Auditor/Lead Implementer, CIPP/E, CIPM or CDPO-type privacy credentials (IAPP), CRISC, CompTIA Security+ for baseline. In CyberSeek ads, CISA appears in about 52,300 US listings and CISM about 44,300 (May 2024-April 2025). Certifications matter more here than in technical roles: they are standard hiring filters for audit/GRC.
- **Skills and portfolio:** understanding of ISO 27001/NIST frameworks, GDPR, NIS2/DORA texts, risk assessment methods, Excel and GRC tools (ServiceNow GRC, Archer, OneTrust), clear writing; a sample gap analysis or risk assessment of a small company is a real portfolio piece.
- **Common mistakes:** memorising controls without technical context; applying generic business CVs.
- **Alternative routes:** internal audit, legal/compliance, IT helpdesk to compliance; accountants moving to IT audit.
- Entry difficulty: **2/5** for entry GRC roles at mid-size employers; **3/5** at Big 4/banks.

**Honest downsides and who it is NOT a good fit for:** Paperwork, repeated evidence chasing and checkbox culture; limited technical growth and, in some firms, lower status than engineering; AI tooling is expected to automate evidence and questionnaire tasks. Not for people who want hands-on hacking or building, or who dislike following frameworks.

### 3.9 OT/ICS security specialist (shorter)

**What you actually do:** Protect industrial environments: map and segment OT networks, deploy passive monitoring (Dragos, Claroty, Nozomi), manage vulnerabilities without taking plants offline, assess against IEC 62443 and NIST 800-82, run tabletop exercises with operations teams, and coordinate with control engineers on patching windows (often months). Work happens in plants, substations or control rooms as well as in the office.

**A typical day and week:** Site visits, network diagrams, firmware and vendor coordination, risk workshops with operations and safety staff; incident response drills; reporting to the CISO. Slow-moving by design because safety and uptime dominate.

**Hours, stress and lifestyle:** Typical 40-45 hours; peak 50-55 during outages, audits or incidents; on-call in critical infrastructure. Stress **3/5**. Frequent travel to sites; remote only partly possible (air-gapped networks). Shifts rare unless a 24/7 OT SOC.

**Human vs. quantitative profile:** People/communication: 4/5. Quantitative/technical: 4/5. Bridging IT security and engineering cultures; protocol and control-system knowledge matter.

**Compensation (approximate):**
- **US:** about US$117,000 average with top near US$200,000 (industry article, date and source unverified); SecurityWeek (date unclear) cites cybersecurity specialist US$69-133k.
- **UK:** no reliable data found; energy and utilities sector pays moderately with premium for scarce skills (unverified); NESO graduate cyber scheme £34,895 (applications closed 30 November 2025) shows grid-operator entry level.
- **Italy:** no reliable data found; utilities such as Enel, Eni, Terna, Snam employ OT security (named from general knowledge; hiring not verified).
- **Gulf/Asia:** no reliable data found; oil and gas and utilities in the Gulf are major OT security employers (unverified).

**Career path:** 0-3 years control/systems engineer or IT security analyst moving into OT; 3-6 years OT security engineer; 6-10 years OT security lead/architect, head of OT security, industrial cyber consultant.

**Exit opportunities:** After 2-3 years: OT consulting, vendors (Dragos, Claroty, Siemens), critical-infrastructure regulators. After 7-10 years: head of industrial cybersecurity, CISO in industrial firms, regulators.

**Tier list of employers:** (Tier groupings reflect industry consensus and practitioner perception, not objective fact.) Tier 1: OT security vendors (Dragos, Claroty, Nozomi), large industrial OEMs (Siemens, Schneider, ABB, Rockwell), major utilities and oil majors with dedicated programmes; Tier 2: consultancies (Big 4, specialist OT firms), integrators; Tier 3: small plants/municipal utilities with one generalist.

**How to enter:** Degrees: electrical/automation/mechatronics engineering, CS with industrial interest. Graduate schemes: utilities and industrials (ScottishPower cyber graduate, NESO, Siemens and Enel programmes; verify). Certifications: SANS GICSP, GRID/GCIP, ISA/IEC 62443 certificates; Security+ baseline. Skills: Modbus/DNP3/OPC UA protocols, PLC basics, segmentation (Purdue model), lab simulators. SANS 2024 data show over half of ICS/OT security staff have under five years' experience and a similar share lack OT-specific certification; SANS 2025 found only about 9% dedicate all their time to ICS/OT security: it is a small, still-forming field where engineers can transition in. Entry difficulty: **3/5** (few roles but little competition).

**Honest downsides and who it is NOT a good fit for:** Legacy kit, slow change, travel to remote sites, conservatism; pay below big tech. Not for people who want cutting-edge cloud tooling or fast-moving environments.

### 3.10 Security consultant (Big 4, specialist consultancies, MSSPs) and the path to CISO

**What you actually do:** Advise clients on security strategy, assessments and programmes: maturity assessments, ISO 27001/NIST implementations, cloud security reviews, DORA/NIS2 readiness, third-party risk, M&A cyber due diligence, security transformation, virtual CISO (vCISO) services, incident readiness, and sometimes technical delivery (pentest, IAM implementation). MSSP consultants run managed services for multiple clients. Deliverables: slide decks, assessment reports, roadmaps, policies, project plans, workshops.

**A typical day and week:** Client workshops, interviews, drafting deliverables, status calls, timesheets; staffed on 1-3 projects at a time; utilisation (billable) targets of roughly 65-80% at consultancies (vendor benchmarks, see 3.4); Friday client reporting. Travel to client sites in many regions (UK/EU commuting Monday-Thursday is common; remote more so since 2020).

**Hours, stress and lifestyle:** Typical 45-55 hours; peak 60-70 around proposals, deadlines or incidents. Stress **3-4/5** (client deadlines, up-or-out culture, regulatory deadline crunches). Travel moderate to high. Flexible in some firms, rigid in others.

**Human vs. quantitative profile:** People/communication: 5/5. Quantitative/technical: 3/5. Client communication and structured thinking are core; enough technical depth to be credible is required.

**Compensation (approximate):**
- **US:** Big 4 cyber consultant entry about US$85-110k; manager US$150-190k; partner much higher (unverified; recruiter and aggregator indications). CISO total compensation: IANS/Artico (2025, 550+ US and Canadian CISOs) says typical total compensation US$250,000-700,000, up 6.7% in 2025, top 1% over US$3.2m; CSO Online cites US$532,000 median; Glassdoor about US$321,000, Salary.com about US$385,000, Payscale about US$184,000 (equity-heavy packages explain gaps).
- **UK:** Big Four graduate London base £32-40k (a 2026 guide; not cyber-specific); consulting salaries Deloitte £37k, PwC £34k, EY £32k, KPMG £32k (year unspecified); manager £60-85k and director £100-150k (unverified). ITJobsWatch: 384 permanent "security consultant" ads (six months to 9 Oct 2026). CISO: no reliable survey found; large-firm CISO packages commonly £150-300k+ (unverified).
- **Italy:** Big 4 entry typical €26-32k gross (unverified, based on general Italian Big 4 pay); CISO/executives in large companies €80-150k (an article, source unnamed); Michael Page Italy 2026 compliance/risk bands as a rough parallel (see 3.8).
- **Gulf/Asia:** Singapore senior cybersecurity analyst S$90-130k (JobRise 2026); Gulf consultancies pay high, tax-free packages; no reliable role-level data found.

**Career path:** 0-2 years analyst/consultant; 2-4 years senior consultant; 4-6 years manager; 6-9 years senior manager / associate director; 9-12+ years director or partner. Path to CISO: usually 12-20 years combining technical credibility, risk management and communication; typical sequence: security specialist → team lead → head of function (SOC, GRC or engineering) → deputy CISO → CISO. Heidrick & Struggles' 2023 survey found most CISOs report to the CIO (36%); Splunk 2023 reported 47% report to the CEO (54% in Europe) — older data.

**Exit opportunities:** After 2-3 years: industry (bank/tech) security roles, vendor sales engineering, specialised consulting. After 7-10 years: CISO or deputy CISO, partner, vendor leadership, board advisory, independent vCISO.

**Tier list of employers:** (Tier groupings reflect industry consensus and practitioner perception, not objective fact.)
- **Tier 1:** Big 4 and large integrators (Deloitte, PwC, EY, KPMG, Accenture), strategy firms with cyber practices, elite boutiques (Mandiant, NCC Group, Kroll).
- **Tier 2:** Capgemini, IBM Consulting, NTT Data, Thales/Orange Cyberdefense/Atos-type MSSPs, regional consultancies; in Italy Yarix, Almaviva, Reply and others.
- **Tier 3:** Small resellers and managed-service shops with a "body shop" model.

**How to enter:**
- **Degrees:** Any good degree for graduate schemes (Deloitte UK Cyber, Data and Digital: 2:1 any discipline); technical degrees for technical consulting; Master's in cyber helps.
- **Internships/graduate programmes:** Deloitte UK Cyber, Data and Digital graduate programme (rolling, closed for 2026); EY and PwC cyber graduate schemes (check yearly listings; EY Cyprus 2026 Cybersecurity Consulting intake exists); Accenture Security graduate programme; Capgemini; HSBC and Barclays cyber programmes for in-house route; Italy: Deloitte-ITS Apulia Digital cybersecurity programme for ITS graduates (28 places, hiring from end 2026 to early 2027). Recruiting calendar: UK Big 4 open September-November (rolling), Italian Big 4 recruit throughout the year for graduates and spring/summer internships.
- **Certifications:** CISSP, CISM, CISA, ISO 27001 Lead Auditor, cloud security certs (CCSP, AWS), PCI QSA/ SOC 2 experience; CISSP and CISM matter strongly for mid-career consulting and CISO tracks, little at graduate entry.
- **Skills and portfolio:** structured communication, PowerPoint/Excel, interviews, security frameworks; some hands-on experience; consulting case interviews.
- **Common mistakes:** being a generalist with no depth; neglecting writing; ignoring the sales dimension.
- **Alternative routes:** industry experience then consulting; government to consulting.
- Entry difficulty: **3/5** (Big 4 grad schemes competitive but numerous).

**Honest downsides and who it is NOT a good fit for:** Utilisation pressure, long hours, travel, up-or-out culture, and frequent client-driven reprioritisation; deliverables can feel "slides not security". CISO seats come with board exposure, personal liability worries (Proofpoint 2025: 67% feel personally accountable; Fastly 2025: 93% of organisations changed policies on CISO liability) and burnout: a Heidrick & Struggles 2022 survey flagged stress (60%) and burnout (53%) as top personal risks for US CISOs. Not for people who want stable technical specialisation or low-profile work.

### Role family summary

Entry comp figures are approximate; see role sections for sources and caveats. "no reliable data found" means I could not verify a figure.

| Role family | Typical hours/week (peak) | Stress 1-5 | People 1-5 | Quant 1-5 | Entry comp: US / UK / Italy (approx., currency, base unless noted) | Entry difficulty 1-5 |
|---|---|---|---|---|---|---|
| 3.1 SOC analyst (T1-3) | 40-45 (50-60) | 3 | 3 | 3 | US$60-90k (unverified blogs) / £30-40k (graduate schemes £34.9-48.5k) / €25-30k RAL | 3 |
| 3.2 DFIR | 40-50 (60-80) | 4 | 4 | 4 | no reliable data (analyst midpoint US$122k mid-career) / no reliable data (£40-50k est.) / no reliable data (€30-38k est.) | 4 |
| 3.3 Threat intelligence | 40-45 (50-55) | 3 | 4 | 3 | no reliable data (US$80-100k est.) / no reliable data (£35-45k est.) / no reliable data (€28-35k est.) | 4 |
| 3.4 Pentest / red team | 40-45 (55-60) | 3 | 3 | 5 | US$85-95k (training guide; Payscale lower, US$63-70k) / £32-40k est. (median all levels £67.5k) / no reliable data (€28-35k est.) | 4 |
| 3.5 AppSec / product security | 40-45 (50-55) | 3 | 4 | 4 | US$95-120k at non-tech (est.; big tech far higher) / no reliable data / ~€30-38k | 4 |
| 3.6 Security / cloud / IAM engineer | 40-45 (50-55) | 3 | 3 | 4 | US$85-115k est. / £35-48.5k (Lloyds grad £48.5k) / €30-38k (Glassdoor eng. avg €45.9k all levels) | 3 |
| 3.7 Security architect | 40-45 (50-55) | 3 | 4 | 4 | Not an entry role (mid-career midpoint US$157k) / not entry (£90-130k est.) / not entry (est. €60-90k) | 5 (direct) |
| 3.8 GRC / audit / privacy | 40-45 (55-60) | 2-3 | 4 | 2 | US$65-85k est. (no verified midpoint) / £35-45k est. / €35-55k (Michael Page risk/compliance <5 yrs, not cyber-specific) | 2-3 |
| 3.9 OT/ICS security | 40-45 (50-55) | 3 | 4 | 4 | ~US$80-100k est. (avg US$117k all levels, unverified) / ~£35k (NESO grad £34.9k) / no reliable data | 3 |
| 3.10 Consultant / path to CISO | 45-55 (60-70) | 3-4 | 5 | 3 | US$85-110k est. / £32-40k (Big 4 grad, not cyber-specific) / €26-32k est. | 3 |

## 4. Banks vs. other employer types

Security roles exist almost everywhere, but the experience differs by employer. The ratings below are my synthesis of practitioner accounts, the sources cited above, and general industry knowledge; no single survey measures them. Scale: hours (typical weekly), stress (1-5), pay relative to other employers in the same region, culture, autonomy.

| Employer type | Hours (incl. shifts/on-call) | Stress | Pay (same region) | Culture | Autonomy |
|---|---|---|---|---|---|
| Bank (JPMorgan, HSBC, Barclays, Intesa Sanpaolo, UniCredit) | 40-50; follow-the-sun SOCs, on-call for IR; DORA/TLPT peaks | 3-4 | Good, bonus-linked; London/NY above Milan | Process-heavy, regulatory, structured promotion | Low-medium |
| Big tech (Google, Microsoft, Amazon, Meta) | 40-50; on-call for security tooling and incidents | 3-4 | Highest (stock heavy; Google and Amazon security engineer medians in the hundreds of thousands, Levels.fyi Sept 2026) | Engineering-led, high bar, performance reviews | High |
| Security vendor (CrowdStrike, Palo Alto, Okta, Wiz) | 45-55; support/SE roles variable; layoffs risk (CrowdStrike cut about 500 jobs May 2025) | 3-4 | High (equity), sales engineering often above engineers | Fast, product-driven, quota or ship pressure | Medium-high |
| MSSP / consultancy (Big 4, NCC Group, Accenture, Yarix) | 45-55; MSSP SOC shift work; utilisation 65-80%; travel | 3-4 | Medium; Big 4 lower base, strong growth | Up-or-out, learning curve, project variety | Medium |
| Government / defence / intelligence (NCSC, GCHQ, NSA, ACN) | 37-45; clearances; fewer shifts, some 24/7 duty | 3 | Lower base; US cleared pay higher via contractors | Mission, training, stability; slow processes | Low-medium |
| Industrial/energy/utilities (Enel, Eni, Terna, Siemens, utilities) | 40-45; on-call; site visits | 3 | Medium | Safety-first, conservative, legacy systems | Medium |
| Mid-size non-tech company | 40-45; small team covering many hats; on-call for incidents | 3 | Lower-to-medium; broad scope | Generalist; security often a cost centre | High but under-resourced |

**Commentary.**
- **Banks** pay well and offer structured careers and strong training, plus regulators (DORA, PRA, HKMA C-RAF, MAS) that guarantee budgets; the downside is bureaucracy and change control. In Europe, bank security teams are a steady employer of GRC, IAM and SOC staff, and DORA's TLPT requirement creates red-team work for selected entities.
- **Big tech** offers the best pay and engineering culture but is the hardest to enter and has had layoffs; Levels.fyi figures are self-reported and skewed.
- **Vendors** reward technical and sales skills (sales engineers can earn more than engineers) but are exposed to restructuring; vendor IR/threat intel brands are strong CV signals.
- **MSSPs/consultancies** give the fastest early learning and widest exposure but the most shift work and utilisation pressure; most first-job entrants start here.
- **Government** pays less but offers the best mission, training and clearance-based mobility. Clearances: US roles generally need US citizenship; GCHQ roles listed a UK residency requirement (seven of the last ten years); contractors with clearances earn more: ClearanceJobs 2026 compensation report (survey of 2025 pay) says average total compensation for cleared professionals was US$126,125, DoD Secret US$107,439, Top Secret US$126,839, TS/SCI US$139,261, intelligence agencies US$165,063 (self-reported, all occupations, not only cyber).
- **Industrial and utilities** are under-supplied with OT-capable security staff and offer stability, but pay is not top of market.
- **Mid-size non-tech companies** give broad responsibility early, but budgets are thin and burnout is common.

**Regional differences.**
- **US vs Europe pay gap:** US cyber pay is clearly higher: BLS median for information security analysts US$124,910 (May 2024) versus UK advertised median £60,000 (about US$75-80k at recent exchange rates; London £80,000) and Italy where entry is about €25-30k and senior €60-80k (ICT Security Magazine, Glassdoor-based, 2025). The gap is largest at big tech and finance; in Italy, a salary of a mid-level engineer is often a fraction of US equivalents, while the cost of living is lower in most Italian cities (Milan is the exception). Remote work for US companies is a common arbitrage for Europeans but increasingly limited by location-based pay bands.
- **UK:** Strong market, CREST accreditation drives offensive-security hiring, NCSC/GCHQ schemes and bank graduate programmes. The UK Cyber Security and Resilience Bill may add demand in 2027-2028.
- **Italy:** ACN-led NIS2 implementation and public hiring (via InPA; ACN pay reportedly aligned with Banca d'Italia scales; ACN assistants €33-36k gross per an unverified article), consultancies and banks in Milan, defence/industrial players in Rome/Genoa (Leonardo Cyber & Security Academy in Genoa), Telsy (TIM group). Italian job-market tradition favours permanent contracts (CCNL scales) and lower base pay with limited bonus; English-language work for foreign firms from Milan is the higher-paying route.
- **Continental Europe:** NIS2 and DORA create broad demand for GRC, IAM and incident reporting capability; Germany, Netherlands, France, Ireland are the large hubs (country-level pay data not collected here).
- **Gulf:** Large national cyber strategies; roles in government entities and banks often require local nationalisation (hiring of nationals prioritised in Saudi and UAE; unverified detail); tax-free packages with allowances; Dubai analyst median AED 219,994 total (Levels.fyi, 13 submissions) versus Payscale AED 96,004 (unreliable); Riyadh mid-level analysts SAR 12-28k per month (2025 salary guide).
- **Asia:** Singapore (S$42-60k entry SOC; S$72-102k engineers; ITEL/JobRise 2025-2026), Hong Kong (HKMA C-RAF drives bank cyber hiring; salary data not found), Tokyo (reported shortage of 110,000 versus 24,000 registered specialists; language is a barrier; METI 2025).

## 5. Which backgrounds fit this branch

### (a) Fit by background

| Background | Rating | Reason |
|---|---|---|
| Management | Stretch | Useful for GRC and CISO-track leadership but technical credibility is needed; accessible mainly through GRC/consulting/vCISO roles. |
| Logistics & Supply Chain | Stretch | Third-party and supply-chain risk and OT domain knowledge are valuable, but technical skills must be built from scratch. |
| Finance | Possible | Fits bank technology risk, fraud/financial-crime intelligence, DORA/regulatory GRC; limited for technical roles. |
| Accounting | Possible | Strong for IT/security audit and GRC (CISA route); weak for engineering and offensive roles. |
| Marketing | Stretch | Privacy/consent and security awareness communications at best; technical roles require a full retrain. |
| Data Analytics | Possible | SOC analytics, detection engineering, threat hunting and CTI use data skills; needs security fundamentals. |
| Economics | Possible | Fits strategic threat intelligence, cyber risk quantification, regulatory/GRC and consulting. |
| Computer Science | Strong | Direct feeder for almost every technical family: SOC, DFIR, pentest, AppSec, engineering, cloud. |
| Cybersecurity | Strong | Built for this branch; still needs hands-on proof and experience for senior roles. |
| Data Science | Possible | Good for detection/ML, threat analytics, fraud; must learn systems and security basics. |
| Artificial Intelligence | Possible | AI security, detection engineering and adversarial work; ISC2 2025 lists AI as the top skills need (41%), but generic AI degrees need security foundations. |

### (b) Matrix by role family (S = strong, P = possible, X = stretch)

| Background | 3.1 SOC | 3.2 DFIR | 3.3 TI | 3.4 Pentest | 3.5 AppSec | 3.6 Sec/Cloud/IAM eng. | 3.7 Architect | 3.8 GRC/Audit/Privacy | 3.9 OT/ICS | 3.10 Consultant/CISO |
|---|---|---|---|---|---|---|---|---|---|---|
| Management | X | X | X | X | X | X | X | P | X | P |
| Logistics & Supply Chain | X | X | X | X | X | X | X | P | P | P |
| Finance | X | X | X | X | X | X | X | P | X | P |
| Accounting | X | X | X | X | X | X | X | S | X | P |
| Marketing | X | X | X | X | X | X | X | P | X | X |
| Data Analytics | P | P | P | X | X | P | X | P | X | X |
| Economics | X | X | P | X | X | X | X | P | X | P |
| Computer Science | S | S | S | S | S | S | P | P | P | S |
| Cybersecurity | S | S | S | S | S | S | P | S | P | S |
| Data Science | P | P | P | P | P | P | X | X | X | X |
| Artificial Intelligence | P | P | P | P | P | P | X | P | X | P |

Note: Architect (3.7) is rated for a graduate starting today; it is a mid-career destination reached from engineering or consulting. For accounting, GRC rating applies mainly to IT/security audit; for Economics and Finance, GRC means regulatory and risk-focused roles. Ratings are my judgement from sources above and employer hiring practice; they are not measured outcomes.

## 6. Sources

All accessed October 2026 unless a date is given. Where a source was a secondary summary or vendor blog, it is flagged in the text.

1. ISC2, "2025 ISC2 Cybersecurity Workforce Study" (Dec 2025). https://www.isc2.org/Insights/2025/12/2025-ISC2-Cybersecurity-Workforce-Study
2. ISC2, "A focus on skills" (Dec 2025). https://www.isc2.org/insights/2025/12/a-focus-on-skills-isc2-workforce-study
3. ISC2, "2025 Cybersecurity Hiring Trends Study" (11 June 2025). https://www.isc2.org/insights/2025/06/cybersecurity-hiring-trends-study
4. ISC2, CISSP experience requirements. https://www.isc2.org/Certifications/CISSP/Experience-Requirements
5. ISC2, "CISSP Experience Waiver Updates" (May 2026). https://www.isc2.org/Insights/2026/05/CISSP-Experiene-Waiver-Updates
6. US Bureau of Labor Statistics, Occupational Outlook Handbook: Information Security Analysts (May 2024 wages; 2024-34 projections). https://www.bls.gov/ooh/computer-and-information-technology/information-security-analysts.htm
7. CyberSeek (NIST/CompTIA/Lightcast), national cybersecurity heatmap (2025). https://www.cyberseek.org/heatmap.html
8. ITJobsWatch, Cybersecurity job market, six months to 9 October 2026. https://www.itjobswatch.co.uk/jobs/uk/cyber%20security.do
9. ITJobsWatch, SOC Analyst jobs (UK and regional pages, 2025-2026). https://www.itjobswatch.co.uk/jobs/uk/soc%20analyst.do
10. ITJobsWatch, Penetration Tester jobs (to May 2025). https://www.itjobswatch.co.uk/jobs/uk/penetration%20tester.do
11. Henderson Scott, Technology Salary Guide 2026 (UK; pentest bands and day rates, read via search summary). https://www.hendersonscott.co.uk/media/11zjl0na/hs-technology-salary-guide-2026.pdf
12. Robert Half, US 2026 Salary Guide, cybersecurity midpoints (via Robert Half pages). https://roberthalf.com/us/en/job-details/security-architect
13. Michael Page Italy, Studi di retribuzione 2026 (compliance and risk bands; IT section not readable). https://www.qualenergia.it/wp-content/uploads/2026/05/Studi-di-retribuzione-2026-Michael-Page-Italy.pdf
14. ICT Security Magazine, "Cybersecurity Italia 2025" (July 2025; Glassdoor-based and unnamed-source salary ranges, Politecnico di Milano market figure). https://www.ictsecuritymagazine.com/notizie/cybersecurity-italia-2025-2/
15. Hays Italia Salary Guide 2026 (general averages via press coverage). https://www.hays.it/en/salary-guide
16. Levels.fyi, Security Analyst, Dubai and Italy; Google and Amazon security engineer pages (Sept 2026). https://www.levels.fyi/t/security-analyst/locations/dubai-are ; https://www.levels.fyi/companies/google/salaries/security-engineer
17. ITEL, "Cybersecurity Salary in Singapore" (2025). https://itel.com.sg/cybersecurity-salary-in-singapore-market-breakdown-for-2025/
18. JobRise, cybersecurity analyst jobs Singapore and Dubai (2026). https://jobrise.io/en/blog/cybersecurity-analyst-jobs-singapore-2026-application-guide/
19. ZenHR, Saudi Arabia Salary Guide 2025. https://www.zenhr.com/en/salary-guide-ksa
20. ClearanceJobs, 2026 Compensation Report (31 March 2026). https://about.clearancejobs.com/hubfs/pdfs/2026_ClearanceJobs_CompensationReport.pdf
21. IANS Research and Artico Search, CISO Compensation Benchmark 2025 (via ASIS and CSO Online). https://www.asisonline.org/security-management-magazine/latest-news/today-in-security/2025/november/ciso-compensation/ ; https://www.csoonline.com/article/3997480/even-5m-a-year-cant-keep-top-cisos-happy.html
22. Proofpoint, 2025 Voice of the CISO report summary. https://www.proofpoint.com/us/blog/ciso-perspectives/key-insights-proofpoint-2025-voice-ciso-report
23. Heidrick & Struggles, Global CISO Survey (2022; 2023). https://www.heidrick.com/en/insights/compensation-trends/2022-global-chief-information-security-officer-ciso-survey
24. Wavestone, "NIS 2: Where are European countries in transposing the directive?" (Jan 2026). https://www.wavestone.com/en/insight/nis-2-european-countries-transposing-directive/ ; Compliancehub, NIS2 CJEU referral (July 2026). https://compliancehub.wiki/nis2-cjeu-referral-ireland-spain-france-netherlands-2026/
25. Eversheds Sutherland, "Implementation in Italy of the NIS2 Directive". https://assets.foleon.com/eu-central-1/de-uploads-7e3kk3/43084/eversheds_sutherland_-_implementation_in_italy_of_nis2directive_.09abd4bdcb58.pdf ; Rödl, "NIS2: Regulatory updates on cybersecurity in Italy". https://www.roedl.com/insights/italien/nis2-regulatory-updates-cybersecurity-italy
26. McCann FitzGerald and Jones Day, Cyber Resilience Act reporting obligations from 11 September 2026 (July 2026). https://www.mccannfitzgerald.com/knowledge/data-privacy-and-cyber-risk/cyber-resilience-act-reporting-obligations-apply-from-11-september-2026 ; https://www.jonesday.com/en/insights/2026/07/eu-cyber-resilience-act-24hour-reporting-duties-start-september-11-2026
27. Austrian FMA and usd/BDO summaries of DORA TLPT. https://www.fma.gv.at/en/?p=157689 ; https://www.usd.de/en/dora-deep-dive-threat-led-penetration-testing-tlpt/
28. McDermott Will & Emery and Wiley, CMMC final DFARS rule (effective 10 Nov 2025). https://www.mcdermottlaw.com/insights/cmmc-final-dfars-rule-kicks-off-phased-implementation/ ; https://www.wiley.law/alert-additional-analysis-on-dods-final-rule-for-the-cybersecurity-maturity-model-certification-program
29. K&L Gates and BDO, SEC cybersecurity disclosure rules (2023). https://www.klgates.com/SEC-Adopts-Final-Rules-for-Cybersecurity-Disclosures-8-7-2023 ; https://arch.bdo.com/sec-cybersecurity-rules-a-snapshot
30. UK Parliament, Cyber Security and Resilience Bill (Bill 4035); Macfarlanes and 6clicks trackers (2026). https://bills.parliament.uk/bills/4035 ; https://www.macfarlanes.com/insights/102mlmn/cyber-security-and-resilience-bill-progresses-through-parliament/ ; https://www.6clicks.com/resources/blog/the-uks-cyber-security-and-resilience-bill-what-to-do-now
31. METI Japan and Asia News Network on Japan's cybersecurity specialist targets (2025). https://asianews.network/japan-aims-to-double-cybersecurity-specialists-by-2030-relax-certification-requirements/
32. HKMA, Cyber Resilience Assessment Framework summaries (HKMA speech 2019; Deloitte China). https://www.hkma.gov.hk/media/eng/doc/key-information/speeches/s20190322e1.pdf
33. Barclays Technology Cyber & Security graduate programme listings (2026, 2027). https://targetjobs.co.uk/jobs/technology-cyber-security-graduate-programme-2026-197292 ; https://targetjobs.co.uk/jobs/2027-technology-cyber-and-security-graduate-programme-241965
34. HSBC Technology Graduate Programme - Cyber. https://www.hsbc.com/careers/students-and-graduates/graduate-opportunities/technology-cyber-graduate-programme
35. Lloyds, Tesco, Vodafone, ScottishPower, NESO cyber graduate listings (Brightnetwork, TargetJobs, company sites, 2025-2026). https://opportunities.vodafone.com/job/London-Group-UK-Cyber-Security-Graduate-Programme-2026/1246480601 ; https://www.scottishpower.com/w/cyber-security-graduate-glasgow-hq
36. Deloitte UK Cyber, Data and Digital graduate programme (Brightnetwork). https://www.brightnetwork.co.uk/graduate-jobs/deloitte/cyber-data-digital-graduate-scheme-2026
37. GCHQ graduate roles and Cyber Insights Summer School (Gradcracker). https://www.gradcracker.com/hub/1345/mi5-mi6-and-gchq/graduate-job/82747/maths-and-cryptography-roles-with-gchq ; https://www.gradcracker.com/hub/1345/mi5-mi6-and-gchq/work-placement-internship/82908/cyber-insights-summer-school-ciss
38. CyberCorps Scholarship for Service (university programme pages, 2026). https://www.memphis.edu/sfs/index.php ; https://sci.ncsu.edu/sfs/
39. ACN recruitment (Concorsando coverage of ACN calls, 2025-2026); check official ACN "Lavora con noi" and InPA. https://www.concorsando.it/blog/concorsi-agenzia-per-la-cybersicurezza-nazionale
40. Leonardo Cyber & Security Academy; Telsy; Deloitte-ITS Apulia Digital cyber programme (Orizzonte Scuola). https://www.orizzontescuola.it/talenti-digitali-in-puglia-nasce-il-corso-per-esperti-cyber-con-stage-e-assunzione-in-deloitte/
41. SANS, State of ICS/OT Security 2025 and 2025 ICS/OT Budget report; SecurityWeek coverage. https://www.sans.org/white-papers/state-of-ics-ot-security-2025/ ; https://www.securityweek.com/ics-ot-security-budgets-increasing-but-critical-areas-underfunded-report/
42. CriticalStart, Tines SOC analyst surveys via Dark Reading (dates unclear; vendor-sponsored). https://darkreading.com/threat-intelligence/more-than-70-of-soc-analysts-experiencing-burnout
43. Swimlane/CIO Dive and Dark Reading, AI and the SOC career ladder (2026; vendor-sponsored; full text not accessible). https://www.darkreading.com/cybersecurity-careers/ai-reshapes-soc-career-ladder
44. TrustedSec, "Pen testing and burnout"; Schellman, "Problems penetration testers face". https://trustedsec.com/blog/pen-testing-and-burnout ; https://www.schellman.com/blog/cybersecurity/problems-penetration-testers-face
45. KORE1 salary guides; HackerDNA pentester salary 2026; Indeed and ZipRecruiter pen tester salaries (weaker signals). https://www.kore1.com/security-engineer-salary-guide/ ; https://hackerdna.com/blog/penetration-tester-salary
46. LearnSignal, Big Four graduate salary UK 2026; PrepLounge UK consulting salary. https://www.learnsignal.com/blog/big-four-graduate-salary-uk-2026/
47. StationX and SecureWorld on certification value (vendor/trade sources; weaker signals). https://app.stationx.net/articles/best-cybersecurity-certifications ; https://www.secureworld.io/industry-news/do-cybersecurity-certifications-matter
