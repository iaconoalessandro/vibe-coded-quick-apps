# Review: atlas-ca-01 (Canada, es-ES)

All 83 ids compared against the English. Every figure (employee counts, ranks, job counts, percentages, dollar amounts, dates) was checked and matches. Number formats follow the guide (five digits or more with a point, four digits without: 5000, 8100, 7211, 6700 millones). Tags and placeholders: none in this chunk. Register is consistent (no second person needed). Permit names (PGWP, Express Entry) are kept whole; "work permit" is correctly `permiso de trabajo`.

## Fixes (1)

- atlas-ca.0083: "Montreal International" → "Montréal International". It is the official name of an organisation, so it keeps its own spelling (the accent); only the city name in running text becomes `Montreal`.

## Checked and left unchanged

- atlas-ca.0011 "the Charter": `la Carta` is kept. The source gives no more than "the Charter" and expanding it to the full French-language charter name would add information.
- atlas-ca.0073 "Bootstrap City": kept in English inside quotation marks, as a label taken from Startup Genome's report.
- atlas-ca.0081 company quotation: "from our roots in Vancouver" → "desde nuestras raíces en Vancouver". A faithful rendering in Spanish; acceptable for a quotation.
- atlas-ca.0074: `$` amounts are written as `millones de dólares`, following the pattern of the guide's `€2.3 billion` row; "6.7 billion" → `6700 millones de dólares` (mil millones, not billón).
- Statistics Canada, IRCC, Canada Mortgage and Housing Corporation, Global Financial Centres Index 40: kept in English (names, English-official country).

## Remaining doubts for a native speaker

- atlas-ca.0011: whether readers will recognise `la Carta` as Quebec's Charter of the French Language, or whether the full name should be given.
- atlas-ca.0073: whether `Bootstrap City` should stay English or become something like "ciudad bootstrap".
- atlas-ca.0074: `dólares` without specifying Canadian dollars (the English only says `$`).
