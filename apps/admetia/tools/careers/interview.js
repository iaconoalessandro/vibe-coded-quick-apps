/* ---------------------------------------------------------------------------
 * Interview prep: the content of careers/interview-prep.html.
 *
 * Two kinds of material, kept apart on the page:
 *
 *   research   what employers and practitioners say is asked, and how often,
 *              read from research/getting-in/interview-cases.md at build
 *              time (its tables are printed as written) — see AREAS.
 *   practice   Admetia's own study cards, primer and practice cases below.
 *              They teach the standard material the research names (the
 *              finance core in applications-and-interviews.md §2.3, the
 *              case types in interview-cases.md §1); they are not any
 *              employer's questions, and the page says so.
 *
 * Every worked number below was checked by hand; the tests re-run the
 * arithmetic that can be re-run.
 * ------------------------------------------------------------------------- */

'use strict';

const IC = 'getting-in/interview-cases.md';
const AI = 'getting-in/applications-and-interviews.md';

/* The career areas, by their section heading in interview-cases.md. */
const AREAS = [
  ['consulting', 'Strategy consulting', '## 1. Strategy consulting'],
  ['ib', 'Investment banking', '## 2. Investment banking'],
  ['st', 'Sales and trading', '## 3. Sales and trading'],
  ['pe', 'Private equity', '## 4. Private equity'],
  ['am', 'Asset management and research', '## 5. Asset management'],
  ['quant', 'Quantitative trading', '## 6. Quantitative trading'],
  ['big4', 'Big 4', '## 7. Big 4'],
  ['fmcg', 'FMCG and marketing', '## 8. FMCG'],
  ['tech', 'Tech, product and data', '## 9. Software engineering']
];

/* Official practice material, by the firm's own name for it. */
const OFFICIAL = [
  ['McKinsey', 'Beautify, Diconsa, Electro-Light, Talbot Trucks (sample cases with suggested answers); PEI themes', 'https://www.mckinsey.com/careers/interviewing'],
  ['Bain', 'Coffee Shop Co., FashionCo. (practice cases)', 'https://www.bain.com/careers/hiring-process/case-interview/'],
  ['BCG', 'OneDay@BCG job simulation; case interview guidance', 'https://careers.bcg.com/global/en/case-interview-preparation'],
  ['Jane Street', 'What the trading interviews cover, and a mock interview video', 'https://www.janestreet.com/trading-interviews/'],
  ['Unilever', 'Future Leaders Programme stages, including the business case', 'https://careers.unilever.com/en/uk-and-ireland-unilever-future-leaders-programme-2026'],
  ['SHL', '23 free practice tests (numerical, verbal, inductive, situational judgement)', 'https://www.shl.com/shldirect/en/practice-tests/']
];

/* ------------------------------------------------------------- STAR stories */

const STORIES = [
  { key: 'leadership', name: 'Leadership',
    prompts: ['Tell me about a time you led a team or a project.', 'Describe a time you persuaded people who did not report to you.', 'When did you take the lead without being asked?'],
    shows: 'You set a direction and moved people towards it, ideally without formal authority.' },
  { key: 'failure', name: 'Failure',
    prompts: ['Tell me about a time you failed.', 'Describe a mistake you made and what you did about it.', 'When did a plan of yours not work?'],
    shows: 'A real failure, your share of it, what you did next and what you changed afterwards.' },
  { key: 'conflict', name: 'Conflict',
    prompts: ['Tell me about a disagreement with a colleague or teammate.', 'Describe a time you had to deal with a difficult person.', 'When did you push back on a decision?'],
    shows: 'You disagreed with substance, listened, and reached a better outcome without damaging the relationship.' },
  { key: 'innovation', name: 'Innovation',
    prompts: ['Tell me about an idea of yours that was implemented.', 'Describe a time you improved how something was done.', 'When did you solve a problem in a new way?'],
    shows: 'The idea was yours, you tested it, and you carried it through to a result.' },
  { key: 'pressure', name: 'High pressure',
    prompts: ['Tell me about a time you worked to a tight deadline.', 'Describe the most pressure you have been under.', 'How did you handle several urgent tasks at once?'],
    shows: 'How you prioritised, in what order you acted and what you dropped, and that the result held.' }
];

/* The criteria employers name (interview-cases.md §10), for tagging stories.
 * Each list is checked against that file at build time. */
const CRITERIA = [
  ['McKinsey', ['Personal impact', 'Inclusive leadership', 'Courageous change', 'Entrepreneurial drive'], 'reported themes; the page shows them as tiles that could not be read (Claims to verify 1)'],
  ['BCG', ['Integrity', 'Intellectual curiosity', 'Creative thinking', 'Collaborative mindset', 'Drive']],
  ['J.P. Morgan', ['Problem-solving', 'Analysis', 'Communication']],
  ['EY UK', ['Proactive', 'Doing the right thing', 'Curiosity', 'Relationship-building', 'Agility', 'Critical thinking', 'Embracing technology', 'Motivation']]
];

/* ------------------------------------------------------------ study cards */

const DECKS = [
  { key: 'statements', name: 'Three statements', cards: [
    ['Walk me through the three financial statements.', 'The **income statement** shows revenue, expenses and profit over a period, ending in net income. The **balance sheet** shows what the company owns and owes at a point in time: assets = liabilities + equity. The **cash flow statement** starts from net income, adds back non-cash items and adjusts for working capital (operating), then shows investing (capex, acquisitions) and financing (debt, equity, dividends), ending in the change in cash.'],
    ['How do the three statements link?', 'Net income goes to the top of the cash flow statement and into retained earnings. Depreciation is added back in operating cash flow and reduces PP&E. Changes in working-capital accounts appear in operating cash flow. Capex (investing) increases PP&E; debt and equity raised or repaid (financing) change those balance-sheet lines. The net change in cash updates cash on the balance sheet, which is why it balances.'],
    ['Depreciation rises by €10 and the tax rate is 25%. Walk it through.', '**Income statement:** EBIT −10, tax −2.5, net income −7.5. **Cash flow:** net income −7.5, add back depreciation +10, cash +2.5. **Balance sheet:** cash +2.5, PP&E −10, so assets −7.5; retained earnings −7.5, so liabilities and equity −7.5. It balances.'],
    ['Inventory rises by €20, paid in cash. What changes?', '**Income statement:** nothing (inventory is expensed only when sold). **Cash flow:** increase in working capital, −20 in operating cash flow. **Balance sheet:** inventory +20, cash −20; total assets unchanged.'],
    ['The company buys a €100 machine with new debt. What happens on day one?', '**Income statement:** nothing yet. **Cash flow:** capex −100 (investing), debt +100 (financing), net cash 0. **Balance sheet:** PP&E +100, debt +100. Later periods show depreciation and interest on the income statement.'],
    ['What is working capital, and why does an increase reduce cash flow?', 'Operating current assets (receivables, inventory) minus operating current liabilities (payables, accrued expenses). An increase means more cash is tied up in running the business, so it is subtracted in operating cash flow.'],
    ['Can a profitable company run out of cash?', 'Yes. Profit is not cash: fast growth ties up cash in receivables and inventory, capex is not expensed when paid, and debt repayments are not in profit at all. Many failures are liquidity failures of profitable firms.'],
    ['If you could see only one statement, which would you choose?', 'Usually the cash flow statement: it shows whether the business actually generates cash, and it is the hardest to flatter with accounting choices. Many interviewers accept the balance sheet plus income statement as an answer too, if you explain that the cash flow can be rebuilt from them.']
  ] },
  { key: 'ev', name: 'Enterprise and equity value', cards: [
    ['What is the difference between enterprise value and equity value?', '**Equity value** is the value of the shareholders’ claim: for a listed company, share price × diluted shares. **Enterprise value** is the value of the operating business to all capital providers: equity value plus net debt and other non-equity claims, minus non-operating assets.'],
    ['Walk me from equity value to enterprise value.', 'EV = equity value + debt − cash + preferred shares + non-controlling (minority) interests, with lease liabilities added when the EBITDA you use excludes lease costs (as under IFRS 16), and non-operating assets such as equity-method investments subtracted. Pension deficits are sometimes added; say which convention you use.'],
    ['Why do you subtract cash?', 'Cash is not part of the operating business. A buyer of the whole company gets it and could use it to repay debt, so EV, which values operations, excludes it.'],
    ['Why do you add minority interests?', 'When a parent consolidates a subsidiary it owns only partly, its revenue and EBITDA include 100% of that subsidiary. Adding the minority share to EV keeps the numerator consistent with the 100% in the denominator.'],
    ['Which multiples go with EV and which with equity value?', 'EV pairs with metrics before interest, available to all capital providers: EV/revenue, EV/EBITDA, EV/EBIT. Equity value pairs with metrics after interest: P/E (equity value / net income), price to book. Mixing them (EV/net income) is an error.'],
    ['100 options with a strike of €10, share price €20. How many diluted shares do you add?', 'Treasury stock method: exercise brings in 100 × €10 = €1,000, which buys back €1,000 / €20 = 50 shares. Net new shares: 100 − 50 = 50.'],
    ['The company borrows €100 and keeps it as cash. What happens to EV and equity value?', 'Equity value: unchanged (nothing happened to the shareholders’ claim). EV: +100 debt − 100 cash = unchanged.'],
    ['The company issues €50 of shares and uses the cash to repay €50 of debt. What changes?', 'Equity value rises by 50 (more shares at the same price). EV is unchanged: equity +50, debt −50.']
  ] },
  { key: 'dcf', name: 'DCF', cards: [
    ['Walk me through a DCF.', 'Project unlevered free cash flow for 5–10 years; estimate a terminal value at the end (perpetuity growth or an exit multiple); discount both to today at the WACC; the sum is enterprise value. Bridge to equity value (subtract net debt and other claims) and divide by diluted shares for a value per share.'],
    ['How do you calculate unlevered free cash flow?', 'EBIT × (1 − tax rate) + depreciation and amortisation − capex − increase in net working capital. EBIT × (1 − t) is NOPAT: operating profit after tax, before any financing.'],
    ['Why discount unlevered cash flow at the WACC, and levered cash flow at the cost of equity?', 'Unlevered cash flow belongs to all capital providers, so it is discounted at their blended cost and gives enterprise value. Levered cash flow (after interest and debt repayments) belongs to shareholders only, so it is discounted at the cost of equity and gives equity value directly.'],
    ['Final-year FCF is €100, growth 2%, WACC 8%. What is the terminal value?', 'Perpetuity growth: TV = FCF × (1 + g) / (WACC − g) = 100 × 1.02 / 0.06 = 1,700. Then discount it back to today with the final year’s discount factor.'],
    ['What is the exit-multiple method, and why cross-check it?', 'TV = final-year EBITDA × an EV/EBITDA multiple from comparable companies or deals. Cross-check each method with the other: the growth rate a multiple implies, and the multiple a growth rate implies. A 2% perpetuity that implies 25× EBITDA is a warning.'],
    ['Why is the terminal value such a large part of a DCF?', 'It captures every year after the forecast, so it is often more than half of the total. That makes the value very sensitive to the WACC and the terminal growth rate, which is why DCFs come with a sensitivity table.'],
    ['What raises a DCF value?', 'Higher revenue growth or margins, lower capex or working-capital needs, a lower tax rate, a lower WACC, and a higher terminal growth rate or exit multiple.'],
    ['Why must terminal growth stay below long-run economic growth?', 'A company growing faster than the economy for ever would eventually be larger than the economy. In developed markets a nominal 1–3% is the usual range, and growth must always be below the WACC or the formula breaks.']
  ] },
  { key: 'wacc', name: 'WACC', cards: [
    ['What is the WACC formula?', 'WACC = E/(D + E) × cost of equity + D/(D + E) × cost of debt × (1 − tax rate), using market values and the target capital structure.'],
    ['How do you estimate the cost of equity?', 'With the CAPM: cost of equity = risk-free rate + beta × equity risk premium. Some practitioners add size or country premia.'],
    ['Why unlever and relever beta?', 'Comparable companies’ betas include the effect of their own debt. Unlever them to asset betas, βu = βl / (1 + (1 − t) × D/E), take the median, and relever at your company’s target D/E.'],
    ['Why is debt cheaper than equity?', 'Lenders are paid first and have a claim on assets, so they bear less risk; and interest is tax-deductible, which lowers its after-tax cost.'],
    ['If debt is cheaper, why not finance a company entirely with debt?', 'More debt makes equity riskier (its cost rises) and debt itself costlier, and raises the chance and cost of financial distress. WACC falls at first, then rises.'],
    ['Which risk-free rate do you use?', 'The government bond yield in the currency of the cash flows, with a maturity close to the cash flows’ (for example the 10-year Bund for a euro DCF).'],
    ['E is 60% and D 40% of capital; cost of equity 10%, cost of debt 5%, tax 25%. What is the WACC?', '0.6 × 10% + 0.4 × 5% × (1 − 0.25) = 6% + 1.5% = 7.5%.'],
    ['What happens to a DCF value if the WACC rises?', 'It falls: every cash flow is discounted more, and the terminal value falls most because the denominator (WACC − g) shrinks proportionally more.']
  ] }
];

/* ---------------------------------------------------------- consulting */

const CASE_STYLES = [
  ['Who drives', 'The interviewer: you answer a sequence of set questions', 'You: you propose the structure and choose what to analyse next'],
  ['Associated with', 'McKinsey', 'BCG and Bain (offices vary)'],
  ['How it starts', 'A prompt, then “how would you think about this?”', 'A prompt, then silence: your clarifying questions and structure'],
  ['What goes wrong', 'Answering a different question than the one asked; not closing each question', 'Stalling after the framework; not asking for data; losing the thread'],
  ['What to practise', 'Crisp answers to each step: structure, exhibit, maths, recommendation', 'Leading: “I’d like to start with X because…”, then summarising as you go']
];

const CASE_STEPS = [
  ['Clarify', 'Restate the question and the objective. Ask what success means, and about scope (geography, time frame) only if it changes the answer.'],
  ['Structure', 'Break the problem into three or four parts that do not overlap and together cover it (an issue tree). Say which part you would test first and why.'],
  ['Analyse', 'Ask for or read the data. State what each exhibit shows in one sentence, then what it means for the question.'],
  ['Calculate', 'Say your method before the numbers, round sensibly, and sanity-check the result against something you know.'],
  ['Recommend', 'Lead with the answer, give two or three reasons, name the main risk and the next step. About 30–60 seconds.']
];

const SIZING = {
  question: 'How much do Italians spend each year on espresso drunk at the bar?',
  steps: [
    ['Population', 'Italy has about 59 million people.', 59e6, 'fact, rounded'],
    ['Adults', 'Assume about 85% are adults: 59m × 0.85 ≈ 50 million.', 50e6, 'assumption'],
    ['Bar drinkers on a typical day', 'Assume 30% of adults have one espresso at a bar on a given day: 50m × 0.3 = 15 million a day.', 15e6, 'assumption'],
    ['Per year', '15m × 365 ≈ 5.5 billion espressos.', 5.5e9, 'arithmetic'],
    ['Price', 'Assume €1.20 on average: 5.5bn × €1.20 ≈ €6.6 billion a year.', 6.6e9, 'assumption']
  ],
  check: 'Check from the supply side: assume about 130,000 bars, each serving about 120 espressos a day: 130,000 × 120 ≈ 15.6 million a day, close to the 15 million above. Two methods within 5% of each other is a good sign; if they were ten times apart, one assumption would be wrong.',
  note: 'Every figure except the population is an assumption to state out loud, not a fact. Interviewers score the structure and the sanity check, not the final number.'
};

const SHORTCUTS = [
  ['Percentages', 'Find 10% and 1%, then build: 17% of 340 = 34 + 23.8 = 57.8. And x% of y = y% of x: 4% of 75 = 75% of 4 = 3.'],
  ['Big numbers', 'Count the zeros separately: 3.2 million × 40 = 3.2 × 4 × 10⁷ = 128 million. Write m and bn, not zeros.'],
  ['Dividing', 'Turn a division into a multiplication: ÷ 0.25 = × 4; ÷ 5 = × 2 ÷ 10; ÷ 1.25 = × 0.8.'],
  ['Growth', 'Rule of 72: years to double ≈ 72 / growth rate (8% a year doubles in about 9 years). For small rates, (1 + g)ⁿ ≈ 1 + n × g.'],
  ['Break-even', 'Break-even volume = fixed costs / (price − variable cost per unit). Payback = investment / yearly cash flow.'],
  ['Points and percent', 'A margin going from 10% to 12% is up 2 percentage points, and up 20%. Say which one you mean.']
];

/* ------------------------------------------------------- practice cases */

const PRACTICE = [
  {
    key: 'gym', area: 'Consulting', type: 'Profitability decline',
    title: 'A gym chain’s profit fell 30% in two years',
    prompt: 'A regional gym chain made €2.0m profit two years ago and €1.4m last year, although it has more members. The CEO asks why, and what to do.',
    data: [
      ['', 'Two years ago', 'Last year'],
      ['Members on the standard plan (€40 a month)', '20,000', '14,000'],
      ['Members on the new budget plan (€25 a month)', '0', '8,800'],
      ['Revenue', '€9.60m', '€9.36m'],
      ['Costs (rent, staff, other)', '€7.60m', '€7.96m'],
      ['Profit', '€2.00m', '€1.40m']
    ],
    answer: [
      'Structure: profit = revenue − costs; revenue = members × price, by plan.',
      'Costs rose by €0.36m (about 5%): a small part of the €0.60m fall.',
      'Revenue fell by €0.24m even though members rose from 20,000 to 22,800. The budget plan added 8,800 members, but 6,000 of them came from the standard plan.',
      'Those 6,000 switchers cost 6,000 × €15 × 12 = €1.08m a year; the 2,800 genuinely new members bring 2,800 × €25 × 12 = €0.84m. Net: −€0.24m. The new plan cannibalised the old one.',
      'Recommendation: fence the budget plan (off-peak hours, no classes, a 12-month commitment) so standard members cannot switch without losing something; test it in two gyms first; review the €0.36m cost increase separately. Risk: members who leave instead of switching back.'
    ]
  },
  {
    key: 'sizing', area: 'Consulting', type: 'Market sizing',
    title: 'Espresso at the bar in Italy',
    prompt: 'How much do Italians spend each year on espresso drunk at the bar?',
    sizing: true
  },
  {
    key: 'lbo', area: 'Private equity', type: 'Paper LBO',
    title: 'A five-year paper LBO',
    prompt: 'A company with EBITDA of 100 is bought at 10× with 60% debt. EBITDA grows to 150 in five years and the company repays 300 of debt from its cash flow. It is sold at 10×. What are the money multiple and the IRR?',
    answer: [
      'Entry: EV 1,000; debt 600; equity 400.',
      'Exit: EV 150 × 10 = 1,500; debt 600 − 300 = 300; equity 1,500 − 300 = 1,200.',
      'Money multiple: 1,200 / 400 = 3.0×. IRR: 3.0× in five years is about 25% (1.25⁵ ≈ 3.05).',
      'Where the 800 gain came from: EBITDA growth 50 × 10 = 500, debt repayment 300, multiple change 0.'
    ],
    source: 'interview-cases.md §4'
  },
  {
    key: 'pitch', area: 'Asset management and research', type: 'Stock pitch',
    title: 'A stock pitch that survives questions',
    prompt: 'Pitch a stock in three minutes, then defend it.',
    answer: [
      'The call: buy or sell, and a target price or expected return over a stated period.',
      'The variant view: what the market believes, what you believe, and the evidence.',
      'Valuation: multiples against two or three peers; a simple DCF if asked.',
      'Catalysts: two or three events with dates that will show who is right.',
      'Risks: the bear case and the signal that would make you change your mind.',
      'Prepare a one-page written version too: Fidelity International asks for one in the application for its equity research programme.'
    ],
    source: 'interview-cases.md §5'
  },
  {
    key: 'dice', area: 'Quantitative trading', type: 'Expected value',
    title: 'Roll again?',
    prompt: 'You roll a fair die and win its value in euros. After the first roll you may roll once more, and you then win the second value instead. When should you roll again, and what is the game worth?',
    answer: [
      'A single roll is worth 3.5 on average, so roll again whenever the first roll is below 3.5: on 1, 2 or 3.',
      'Half the time you keep 4, 5 or 6 (average 5); half the time you reroll (average 3.5).',
      'Value: 0.5 × 5 + 0.5 × 3.5 = 4.25.',
      'Say the rule before the arithmetic, and check it: 4.25 is above 3.5, as an option to reroll should be.'
    ]
  },
  {
    key: 'market', area: 'Quantitative trading', type: 'Market making',
    title: 'Make me a market',
    prompt: 'Make a two-sided market (a bid and an offer) on the number of member states of the European Union.',
    answer: [
      'If you know it is 27, quote a tight market around 27 (for example 26.5–27.5) and say why you are confident.',
      'If you are unsure, quote a wider market around your best estimate and say so: the width shows your uncertainty.',
      'When the interviewer trades with you, update: a buyer at your offer suggests the true value is higher.',
      'What is scored: a sensible centre, a width that matches your confidence, and how you update and manage your position.'
    ]
  },
  {
    key: 'brand', area: 'FMCG and marketing', type: 'Brand decline',
    title: 'A shampoo brand losing share',
    prompt: 'A shampoo brand’s sales fell 8% last year while the category grew 3%. What happened, and what should the brand manager do?',
    data: [
      ['', 'Two years ago', 'Last year'],
      ['Stores stocking the brand (weighted distribution)', '92%', '84%'],
      ['Shelf price against the category average', '+10%', '+18%'],
      ['Share of sales sold on promotion', '25%', '24%'],
      ['Sales per store stocking it (index)', '100', '101']
    ],
    answer: [
      'Sales = distribution × sales per store. Distribution fell from 92% to 84% (−9%); sales per store rose slightly (+1%). Together: 0.84 × 101 / (0.92 × 100) ≈ 0.92, the −8% reported. The whole fall is lost distribution.',
      'The price premium widened from 10% to 18%; check whether a retailer delisted the brand after a price increase.',
      'Recommendation: win back the lost listings first (find which chains and why), and review the price increase against the competitor’s; promotion is unchanged, so it is not the cause.'
    ]
  }
];

/* Mental arithmetic drill: kinds of question the page generates. */
const DRILL = ['percent', 'multiply', 'divide', 'growth', 'breakeven'];

module.exports = { IC, AI, AREAS, OFFICIAL, STORIES, CRITERIA, DECKS, CASE_STYLES, CASE_STEPS, SIZING, SHORTCUTS, PRACTICE, DRILL };
