/* ---------------------------------------------------------------------------
 * Tuition for the Programme Directory (programmes.html): what each school
 * charges, transcribed from two places and nowhere else.
 *
 *   money   research/money/costs-and-funding.md, section 1 (fees read on
 *           the schools' own pages, 2026–27 or the latest published)
 *   mba     research/decisions/mba-and-career-switchers.md, "Published
 *           prices" (Oxford's figure there is a search summary only)
 *   model   the programme's own "Tuition" fact in data/masters-model.js,
 *           used only where the research table has no row
 *
 * `intake` is the intake the fee is for; 'current' where the source gives none.
 *
 * A programme with no entry has no fee in the research. The directory says
 * "not in our data" rather than guessing, and the computing programmes have
 * none yet.
 *
 * Each fee is [amount, currency, per]; per is 'total' (the whole
 * programme), 'year' or 'semester'. `eu` is what an EU/EEA citizen pays,
 * `other` what everyone else pays; where the school charges everyone the
 * same, only `eu` is given and `same` is true. Amounts are never converted:
 * the bands in the directory compare the number in its own currency, and
 * say so.
 * ------------------------------------------------------------------------- */

window.PROGRAMME_FEES = (function () {
  'use strict';

  function f(eu, other, intake, src, note) {
    return { eu: eu, other: other || null, same: !other, intake: intake, src: src, note: note || null };
  }

  return {
    /* UK: one fee for every student on these business master's. */
    'lbs-mim': f([52950, 'GBP', 'total'], null, '2026', 'money', 'Plus £200 Student Association fee; £8,000 non-refundable deposits deducted from tuition.'),
    'lbs-mfa': f([52950, 'GBP', 'total'], null, '2026', 'model', 'Plus £200.'),
    'lse-mim': f([42900, 'GBP', 'total'], null, '2026/27', 'money', '12-month programme; home and overseas fees are the same.'),
    'lse-fin': f([51000, 'GBP', 'total'], null, '2026/27', 'money'),
    'lse-mkt': f([39900, 'GBP', 'total'], null, '2026/27', 'money'),
    'imperial-mgmt': f([47000, 'GBP', 'total'], null, '2026', 'money', '£48,500 with the 16-month placement option (search summary only).'),
    'imperial-fin': f([51000, 'GBP', 'total'], null, '2026', 'money', '£6,500 deposit.'),
    'imperial-mkt': f([45500, 'GBP', 'total'], null, '2026', 'money'),
    'oxford-mfe': f([62920, 'GBP', 'total'], null, '2026–27', 'money', '9 months.'),
    'warwick-mgmt': f([38570, 'GBP', 'total'], [38570, 'GBP', 'total'], 'Sept 2026', 'model', 'UK students pay £30,320; EU citizens pay the overseas fee since Brexit.'),
    'manchester-mgmt': f([33100, 'GBP', 'total'], [33100, 'GBP', 'total'], '2026', 'model', 'UK students pay £20,000; EU citizens pay the international fee since Brexit.'),
    'escp-mkt': f([28700, 'GBP', 'total'], null, 'Jan 2027', 'model'),

    /* France */
    'hec-mim': f([58970, 'EUR', 'total'], [61470, 'EUR', 'total'], '2027', 'money', 'Two years. Non-EU students pay a €2,500 surcharge; €5,000 non-refundable deposit.'),
    'essec-mim': f([42170, 'EUR', 'total'], [42270, 'EUR', 'total'], '2026', 'money', 'Intensive track (1 year). The flexible track is €49,440 EU / €57,240 non-EU.'),
    'escp-mim': f([25100, 'EUR', 'year'], [28800, 'EUR', 'year'], 'Sept 2027', 'money'),
    'edhec-mim': f([46500, 'EUR', 'total'], [53050, 'EUR', 'total'], '2026', 'money'),
    'emlyon-mim': f([22600, 'EUR', 'year'], null, '2027–28', 'money', 'Optional gap year €2,000; €3,500 deposit.'),
    'skema-mim': f([37000, 'EUR', 'total'], null, 'current', 'model', 'Two years, plus a €500 yearly service fee.'),
    'insead-mim': f([57870, 'EUR', 'total'], null, 'current', 'model'),
    'essec-mif': f([31200, 'EUR', 'total'], null, 'current', 'model', 'Two years; €18,720 for the one-year route.'),
    'escp-mif': f([32800, 'EUR', 'total'], null, 'Sept 2027', 'model'),
    'emlyon-mkt': f([29300, 'EUR', 'total'], null, '2027–28', 'model', '18 months.'),
    'edhec-mkt': f([29900, 'EUR', 'total'], null, 'current', 'model'),

    /* Italy, Spain, Portugal */
    'bocconi-mgmt': f([18550, 'EUR', 'year'], null, '2026–27', 'money', 'Year-one ordinary fee; income-based Bocconi4Access waivers of 20–100%.'),
    'bocconi-im': f([18550, 'EUR', 'year'], null, '2026–27', 'money', 'Year-one ordinary fee; income-based Bocconi4Access waivers of 20–100%.'),
    'bocconi-fin': f([18550, 'EUR', 'year'], null, '2026–27', 'money', 'Year-one ordinary fee; income-based Bocconi4Access waivers of 20–100%.'),
    'bocconi-mkt': f([18550, 'EUR', 'year'], null, '2026–27', 'money', 'Year-one ordinary fee; income-based Bocconi4Access waivers of 20–100%.'),
    'ie-mim': f([50000, 'EUR', 'total'], null, 'current', 'money', 'Plus a €1,200 one-off IE Foundation contribution.'),
    'ie-mdm': f([37000, 'EUR', 'total'], null, 'current', 'model'),
    'esade-mim': f([39000, 'EUR', 'total'], null, '2027–28', 'money', 'One-year MSc; the Global Master’s is €43,200.'),
    'esade-fin': f([39000, 'EUR', 'total'], null, '2027–28', 'money', 'Older sources gave €24,500 or €37,500; this is the school’s 2027–28 one-year MSc fee.'),
    'esade-mkt': f([39000, 'EUR', 'total'], null, '2027–28', 'money'),
    'iese-mim': f([55500, 'EUR', 'total'], null, 'Sept 2027', 'money', '11 months, Madrid.'),
    'nova-imm': f([11900, 'EUR', 'total'], [13000, 'EUR', 'total'], '2026/27', 'money', 'Exchange, CEMS and double degrees cost extra.'),
    'nova-imf': f([11900, 'EUR', 'total'], [13000, 'EUR', 'total'], 'current', 'model'),

    /* Germany, Switzerland, Netherlands, Nordics */
    'mannheim-mmm': f([194, 'EUR', 'semester'], [1694, 'EUR', 'semester'], 'autumn 2026/27', 'money', 'Non-EU students pay €1,500 tuition a semester on top of the semester fee.'),
    'mannheim-mmfact': f([194, 'EUR', 'semester'], [1694, 'EUR', 'semester'], 'autumn 2026/27', 'money', 'Non-EU students pay €1,500 tuition a semester on top of the semester fee.'),
    'tum-mim': f([97, 'EUR', 'semester'], [4097, 'EUR', 'semester'], 'summer 2026', 'money', 'Non-EU tuition is €4,000 or €6,000 a semester depending on the programme.'),
    'tum-fim': f([97, 'EUR', 'semester'], [4097, 'EUR', 'semester'], 'summer 2026', 'money', 'Non-EU tuition is €4,000 or €6,000 a semester depending on the programme.'),
    'stgallen-sim': f([3557.5, 'CHF', 'semester'], null, 'autumn 2026', 'money', 'EU citizens pay the foreign-national fee; Swiss nationals CHF 1,524.50.'),
    'stgallen-mbf': f([3557.5, 'CHF', 'semester'], null, 'autumn 2026', 'money', 'EU citizens pay the foreign-national fee; Swiss nationals CHF 1,524.50.'),
    'stgallen-mimm': f([3557.5, 'CHF', 'semester'], null, 'autumn 2026', 'money', 'EU citizens pay the foreign-national fee; Swiss nationals CHF 1,524.50.'),
    'rsm-mim': f([2771, 'EUR', 'total'], [28000, 'EUR', 'total'], 'Sept 2027', 'money', '12 months; EU students pay the statutory fee.'),
    'rsm-fi': f([2771, 'EUR', 'total'], [28000, 'EUR', 'total'], 'Sept 2027', 'money', '12 months; EU students pay the statutory fee.'),
    'cbs-mgmt': f([0, 'EUR', 'total'], [16000, 'EUR', 'year'], 'current', 'money', 'Free for EU/EEA/Swiss citizens.'),
    'cbs-fin': f([0, 'EUR', 'total'], [16000, 'EUR', 'year'], 'current', 'money', 'Free for EU/EEA/Swiss citizens.'),
    'cbs-sam': f([0, 'EUR', 'total'], [16000, 'EUR', 'year'], 'current', 'money', 'Free for EU/EEA/Swiss citizens.'),
    'sse-fin': f([0, 'EUR', 'total'], [360000, 'SEK', 'total'], 'current', 'money', 'Free for EU/EEA/Swiss citizens.'),

    /* MBA */
    'mba:London Business School': f([123950, 'GBP', 'total'], null, '2026', 'mba', '15–21 months; plus £400 Student Association fee.'),
    'mba:INSEAD': f([109860, 'EUR', 'total'], null, 'Aug 2026 / Jan 2027', 'mba'),
    'mba:Oxford Saïd': f([88800, 'GBP', 'total'], null, '2026–27', 'mba', 'Search summary only; £94,120 for 2027–28.')
  };
}());
