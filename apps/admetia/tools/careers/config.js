/* ---------------------------------------------------------------------------
 * Career Explorer: the few editorial choices the generator cannot read from
 * the reports. Each one is checked when the site is built.
 * ------------------------------------------------------------------------- */

'use strict';

/* The master's calculators a field's roles link to. Only tracks that exist:
 * tools/build-careers.js checks each against js/theme.js's TRACKS and the
 * page on disk. A field with no matching calculator gets none. */
const CALCULATORS = {
  'finance': ['masters:mif'],
  'accounting': ['masters:mif'],
  'management': ['masters:mim', 'mba'],
  'management-consulting': ['masters:mim', 'mba'],
  'logistics-supply-chain': ['masters:mim'],
  'marketing': ['masters:marketing'],
  'computer-science': ['computing:cs', 'computing:conversion'],
  'cybersecurity': ['computing:cs', 'computing:conversion'],
  'data-science': ['computing:dsai', 'computing:conversion'],
  'artificial-intelligence': ['computing:dsai', 'computing:conversion'],
  'data-analytics': ['computing:dsai', 'computing:conversion'],
  'product-management-startups': ['masters:mim', 'computing:cs'],
  'economics': []
};
/* Per-role exceptions, by role id. */
const CALCULATORS_ROLE = {
  'artificial-intelligence/P2-3.5': ['computing:dsai'],   /* AI governance: policy route, not conversion */
  'artificial-intelligence/P2-3.6': ['computing:dsai', 'masters:mim'],
  'economics/3.4': ['masters:mif'],                       /* economic consulting */
  'marketing/3.8': ['masters:marketing', 'masters:mim']
};
const CALC_LABEL = {
  'masters:mif': 'Master in Finance calculator',
  'masters:mim': 'Master in Management calculator',
  'masters:marketing': 'Marketing master’s calculator',
  'computing:cs': 'Computer Science master’s calculator',
  'computing:dsai': 'Data Science & AI master’s calculator',
  'computing:conversion': 'Conversion master’s calculator (if you studied something else)',
  'mba': 'MBA calculator'
};

/* index.md section 6, "Gaps and low-confidence areas to verify": which pages
 * each item touches. Items 2, 5 and 6 touch nearly every role, so they are
 * printed in the footer of every Career Explorer page instead. Item 11 is
 * about the reports' length, not their facts. `match` finds the roles whose
 * own text mentions the item's subject; `roles` and `fields` name pages
 * outright. */
const GAPS = {
  1: { roles: ['finance/P2-3.1', 'finance/P2-3.2', 'finance/P2-3.3', 'finance/P2-3.5', 'finance/P3-3.7',
    'cybersecurity/3.2', 'cybersecurity/3.3', 'artificial-intelligence/P2-3.3', 'artificial-intelligence/P1-3.4',
    'artificial-intelligence/P1-3.5', 'economics/3.3', 'economics/3.6', 'management-consulting/3.3',
    'management-consulting/3.1', 'product-management-startups/3.3', 'product-management-startups/3.5'], italyPage: true },
  3: { roles: ['finance/P2-3.1', 'finance/P2-3.2', 'finance/P2-3.3'], fields: ['finance'] },
  4: { fields: ['artificial-intelligence'], allRolesIn: ['artificial-intelligence'] },
  7: {
    sub: [
      { fields: ['logistics-supply-chain'], match: /Hormuz|IEEPA|Section 122|Section 301|tariff/i, in: ['logistics-supply-chain'] },
      { fields: ['marketing'], match: /Omnicom|\bIPG\b|Privacy Sandbox|third-party cookie/i, in: ['marketing'] },
      { fields: ['accounting'], match: /Omnibus|CSRD|120-hour|CPA pathway/i, in: ['accounting'] },
      { fields: ['cybersecurity'], match: /Cyber Security and Resilience Bill|CMMC|NIS2/i, in: ['cybersecurity'] },
      { fields: ['artificial-intelligence'], match: /AI Act/i, in: ['artificial-intelligence'] },
      { fields: ['finance'], match: /Volcker|private credit stress|private-credit stress/i, in: ['finance'] }
    ]
  },
  8: { roles: ['economics/3.2'], fields: ['economics'] },
  /* Graduate programme dates: every role whose "How to enter" names a month
   * and a year. */
  9: { enterDates: true },
  /* Tier names marked "general knowledge" or "verify" in the tier list. */
  10: { tierMatch: /general knowledge|\bverify\b|unverified/i }
};
const GAPS_FOOTER = [2, 5, 6];

module.exports = { CALCULATORS, CALCULATORS_ROLE, CALC_LABEL, GAPS, GAPS_FOOTER };
