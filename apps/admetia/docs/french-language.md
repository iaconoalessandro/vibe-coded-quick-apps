# French for students

French uses `vous`, short sentences and familiar words. Readers may be choosing their first degree or job and may still be learning French.

- Explain a term before expecting the reader to know it. Prefer « cours et notes » to an unexplained academic document name, and « ce qui compte pour l’école » to technical scoring language.
- Spell out abbreviations for technical work. For example, write « intelligence artificielle », « ressources humaines » and « crédits universitaires européens ».
- Keep official school, degree and test names recognizable. Explain them in labels and surrounding text: « test d’admission en gestion (GMAT) » and « master de gestion après expérience (MBA) ».
- Preserve requirements, dates, money amounts, numbers, uncertainty and source links. Simplifying language must not simplify away a condition or turn an estimate into a promise.
- Keep every `{placeholder}` and HTML tag in its English lookup key. Do not translate identifiers, score rules, URLs or stored answers.
- Original Career Explorer research quotations remain in English, as in the Italian edition. The French notice identifies these sections. Their menus and guidance are translated. All 154 career names also have plain French descriptions; their original English titles remain available on hover for matching job adverts.

The interface is in `js/i18n-fr.js`; questions and programme facts are in `data/i18n-fr-models.js`. Shared country vocabulary is in `data/atlas/i18n-fr.js`. Each country's guide, hiring and visa translations are in `data/atlas/fr/<country>.js`, loaded with that country's content.

Check coverage and formatting with `node tools/i18n-report.js --lang=fr`. Run `npm test`, then `npm run build`. When generated pages change, run `npm run shell` and `npm run careers` first.

An initial translation draft was assisted by Google Translate. A subsequent full French review used multiple Luna agents as read-only reviewers. Their coverage records account for 14,115 translation locations, including all 46 country dictionaries. The parent independently assessed all 5,004 unique reported findings against the English text, accepted or rewrote 4,501 proposals, and rejected 503. Applying approved corrections also updated matching repeated entries: 4,687 dictionary locations were changed, followed by grammar and context corrections. These counts include clearer wording, not just meaning errors. The site uses saved translations; no visitor text is sent to a translation service.

See [the review record](french-review.md) for scope, examples and validation.

A second assurance pass reviewed the revised 14,115-location inventory and the parent assessed another 502 findings. A separate rendered-page audit added missing dynamic text and reviewed all 267 employer programme labels. Programme language codes are written as language names in French. Bibliographic titles and original quotations retain their original language. Saved dictionary coverage and browser checks are evidence of review, not a guarantee of error-free language; see the review record for the exact scope and limits.
