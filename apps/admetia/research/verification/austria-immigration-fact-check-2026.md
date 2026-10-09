# Report Fact-Checking Immigrazione e Diritto del Lavoro — Austria (AT)
**Data di verifica:** 05/10/2026  
**Autore:** Agente 1 — Fact-Checker (Fonti Primarie) del Council di verifica immigrazione  
**Ambito:** Codice Admetia (`data/atlas/at.js`, `research/places/visas-and-work-rights.md`, `research/countries/at-austria.md`) e quadro normativo federale austriaco vigente al 2026.

---

## 1. Sintesi Esecutiva dell'Audit

Dall'audit approfondito delle affermazioni presenti nella codebase e dal confronto con il quadro giuridico federale austriaco (NAG, AuslBG, Meldegesetz 1991, FPG) e i portali istituzionali (migration.gv.at, oesterreich.gv.at, ams.at, oead.at, bmaw.gv.at, bmi.gv.at, ris.bka.gv.at):
- **Tutte le 4 affermazioni chiave censite nell'Atlas (`at-melde`, `at-anmeldung`, `at-20h`, `at-grad`) sono formalmente VERIFICATE.**
- I riferimenti normativi e i link istituzionali presenti nella codebase sono corretti, aggiornati e conformi alla prassi amministrativa 2026.
- Sono state identificate **integrazioni normative essenziali** per colmare i dettagli applicativi nei vari percorsi (soglie salariali 2026, distinzione formale Praktikum vs Volontariat, doppio binario dottorato/ricerca, mobilità Direttiva (EU) 2016/801, esenzioni Deutsch vor Zuzug).

---

## 2. Verifica Puntuale delle Affermazioni Esistenti nella Codebase

### Claim 1: `at-melde` (Registrazione Anagrafica Residenza)
- **Affermazione nella codebase (`data/atlas/at.js:313-319`):**  
  *"Anyone who takes up accommodation must register with the registration office within three days."*  
  *(IT: "Chi prende alloggio deve registrarsi all’ufficio anagrafe entro tre giorni.")*
- **Stato:** `VERIFIED`
- **Fonte Primaria Ufficiale:**  
  RIS BKA — *Meldegesetz 1991*, § 3 Abs. 1  
  URL: `https://www.ris.bka.gv.at/NormDokument.wxe?Abfrage=Bundesnormen&Gesetzesnummer=10005799&Paragraf=3`  
  Data di consultazione: 05/10/2026
- **Riscontro Giuridico Puntuale:**  
  Il testo dell'art. 3 comma 1 Meldegesetz 1991 stabilisce inequivocabilmente che chiunque prenda alloggio (*Unterkunft nimmt*) in Austria è obbligato a registrarsi presso l'autorità anagrafica competente (*Meldebehörde*: Gemeindeamt o Magistratisches Bezirksamt a Vienna) entro tre giorni dall'ingresso nell'alloggio (*innerhalb von drei Tagen danach*), presentando il modulo *Meldezettel* debitamente firmato dal locatore/alloggiatore (*Unterkunftgeber*). L'eventuale cancellazione anagrafica (*Abmeldung*) va effettuata entro tre giorni prima o dopo l'abbandono dell'alloggio (§ 4 Meldegesetz).
- **Testo Corretto e Parafrasato:**  
  Chiunque prenda domicilio in Austria deve registrarsi all'anagrafe entro tre giorni dall'ingresso nell'alloggio.

---

### Claim 2: `at-anmeldung` (Certificato di Registrazione Cittadini UE/SEE/Svizzera)
- **Affermazione nella codebase (`data/atlas/at.js:320-326`):**  
  *"EU, EEA and Swiss citizens staying more than three months must apply for a registration certificate (Anmeldebescheinigung) within four months of entering Austria."*  
  *(IT: "I cittadini UE, SEE e svizzeri che restano più di tre mesi devono chiedere un certificato di registrazione (Anmeldebescheinigung) entro quattro mesi dall’ingresso in Austria.")*
- **Stato:** `VERIFIED`
- **Fonte Primaria Ufficiale:**  
  RIS BKA — *Niederlassungs- und Aufenthaltsgesetz (NAG)*, § 53 Abs. 1; oesterreich.gv.at  
  URL: `https://www.ris.bka.gv.at/NormDokument.wxe?Abfrage=Bundesnormen&Gesetzesnummer=20004242&Paragraf=53`  
  URL portale: `https://www.oesterreich.gv.at/de/themen/bauen_und_wohnen/umzug/2/2/Seite.180612`  
  Data di consultazione: 05/10/2026
- **Riscontro Giuridico Puntuale:**  
  Ai sensi del § 53 comma 1 NAG, i cittadini dell'Unione Europea, dello Spazio Economico Europeo e della Svizzera che intendano soggiornare in territorio austriaco per un periodo superiore a tre mesi (*länger als drei Monate*) hanno l'obbligo di notificare il soggiorno e richiedere il rilascio dell'*Anmeldebescheinigung* entro quattro mesi dall'ingresso (*innerhalb von vier Monaten ab Einreise*). La mancata presentazione entro il termine costituisce infrazione amministrativa sanzionabile con ammenda fino a € 250 (§ 77 NAG). Dopo 5 anni di soggiorno legale ininterrotto spetta la *Bescheinigung des Daueraufenthalts* (§ 53a NAG).
- **Testo Corretto e Parafrasato:**  
  I cittadini UE, SEE e svizzeri residenti oltre tre mesi devono richiedere l'Anmeldebescheinigung entro quattro mesi dall'arrivo.

---

### Claim 3: `at-20h` (Lavoro Studentesco per Cittadini Extra-UE)
- **Affermazione nella codebase (`data/atlas/at.js:327-333`):**  
  *"Non-EU students can work up to 20 hours a week with an employment permit the employer obtains from the Public Employment Service, with no labour-market test."*  
  *(IT: "Gli studenti extra-UE possono lavorare fino a 20 ore settimanali con un permesso di lavoro che il datore di lavoro ottiene dal Servizio pubblico per l’impiego, senza test del mercato del lavoro.")*
- **Stato:** `VERIFIED`
- **Fonte Primaria Ufficiale:**  
  BMAW / BMI — *migration.gv.at* (Study in Austria); RIS BKA — *Ausländerbeschäftigungsgesetz (AuslBG)*, § 4 Abs. 7 Z 1 & 2; *NAG*, § 64 Abs. 3  
  URL: `https://www.migration.gv.at/en/living-and-working-in-austria/study-in-austria/`  
  URL RIS: `https://www.ris.bka.gv.at/NormDokument.wxe?Abfrage=Bundesnormen&Gesetzesnummer=10008365&Paragraf=4`  
  Data di consultazione: 05/10/2026
- **Riscontro Giuridico Puntuale:**  
  I titolari di *Aufenthaltsbewilligung – Student* possono svolgere attività lavorativa subordinata fino a un limite massimo di 20 ore settimanali, sia nei corsi di laurea triennale (Bachelor) che magistrale (Master) e dottorato. Il datore di lavoro deve richiedere preventivamente al Servizio pubblico per l'impiego (AMS) una *Beschäftigungsbewilligung*, che per legge (§ 4 Abs. 7 AuslBG) viene rilasciata **senza esame del mercato del lavoro** (*ohne Ersatzkraftverfahren*), a condizione che l'impiego non pregiudichi il progresso accademico, che deve rimanere lo scopo principale del soggiorno (§ 64 Abs. 3 NAG).
- **Testo Corretto e Parafrasato:**  
  Gli studenti extra-UE possono lavorare fino a 20 ore settimanali con permesso AMS senza verifica del mercato del lavoro.

---

### Claim 4: `at-grad` & Sezione §6 di `visas-and-work-rights.md` (Post-Studio e Rot-Weiß-Rot-Karte per Laureati)
- **Affermazione nella codebase (`data/atlas/at.js:334-340`, `research/places/visas-and-work-rights.md:180-184`):**  
  *"After an Austrian degree the student permit can be renewed for 12 months to look for work; a matching job then leads to a Red-White-Red Card for graduates with no labour-market test, paid at least what comparable Austrian graduates earn."*  
  *(IT: "Dopo una laurea austriaca il permesso per studio può essere rinnovato per 12 mesi per cercare lavoro; un lavoro coerente porta poi a una Carta rosso-bianco-rossa per laureati senza test del mercato del lavoro, con uno stipendio almeno pari a quello di laureati austriaci comparabili.")*  
  *E: "After 21 months of such work within 24 months, the holder can switch to a Red-White-Red Card plus, with open labour-market access."*
- **Stato:** `VERIFIED`
- **Fonte Primaria Ufficiale:**  
  BMAW / BMI — *migration.gv.at* (Permanent immigration: Graduates); RIS BKA — *NAG*, § 64 Abs. 4; *AuslBG*, § 12b Z 1; *NAG*, § 41a Abs. 1  
  URL: `https://www.migration.gv.at/en/types-of-immigration/permanent-immigration/graduates/`  
  URL RIS NAG: `https://www.ris.bka.gv.at/NormDokument.wxe?Abfrage=Bundesnormen&Gesetzesnummer=20004242&Paragraf=64`  
  URL RIS AuslBG: `https://www.ris.bka.gv.at/NormDokument.wxe?Abfrage=Bundesnormen&Gesetzesnummer=10008365&Paragraf=12b`  
  Data di consultazione: 05/10/2026
- **Riscontro Giuridico Puntuale:**  
  1. Ai sensi dell'art. 64 comma 4 NAG, i cittadini di paesi terzi che abbiano completato un ciclo di studi in Austria (Bachelor, Master, Dottorato, o Diplomstudium dal secondo troncone) possono richiedere un rinnovo una tantum della *Aufenthaltsbewilligung Student* per **12 mesi** finalizzato alla ricerca di un impiego o all'avvio d'impresa (*Arbeitssuche oder Unternehmensgründung*).  
  2. Ricevuta un'offerta contrattuale corrispondente al titolo di studio, il laureato può accedere alla *Rot-Weiß-Rot – Karte für Studienabsolventen* (§ 12b Z 1 AuslBG) **senza sistema a punti e senza test del mercato del lavoro** (*kein Punktesystem, keine Arbeitsmarktprüfung / kein Ersatzkraftverfahren*).  
  3. Il requisito salariale non prevede un importo fisso prefissato per legge (come per le *Sonstige Schlüsselkräfte*), bensì la retribuzione minima lorda d'uso locale e collettiva prevista per figure junior comparabili (*ortsübliches Bruttoentgelt vergleichbarer inländischer Hochschulabsolventen*).  
  4. Dopo aver svolto almeno **21 mesi** di attività conforme nei **24 mesi** precedenti, il titolare può convertire il titolo in una *Rot-Weiß-Rot – Karte plus* (§ 41a Abs. 1 NAG), ottenendo il libero accesso al mercato del lavoro senza vincolo al datore di lavoro.
- **Testo Corretto e Parafrasato:**  
  I laureati in Austria possono estendere il permesso per 12 mesi per cercare lavoro e convertire in Rot-Weiß-Rot-Karte senza punti né test del mercato.

---

## 3. Disamina Esaustiva dei Casi Specifici secondo la Normativa 2026

Di seguito vengono analizzate e formulate le affermazioni relative a tutti i casi contemplati dal mandato ispettivo, verificandole sulle fonti primarie con riferimenti di legge diretti.

### Caso 1: Lavoro Dipendente Ordinario (Non Qualificato / Standard)
- **Quadro Normativo Vigente:**  
  In Austria l'immigrazione per lavoro dipendente generico da paesi terzi è severamente circoscritta. Non esiste un canale generale a domanda libera per lavoratori non qualificati.
  - L'ordinaria *Beschäftigungsbewilligung* (§ 4 AuslBG) richiede una preventiva verifica del mercato del lavoro (*Ersatzkraftverfahren*) e la disponibilità di quote regionali o specifiche fattispecie ammesse.
  - Lavoratori stagionali regolari (*Stammmitarbeiter*, § 5 AuslBG): riservato a lavoratori che hanno svolto attività stagionale nel turismo o in agricoltura per almeno 7 mesi all'anno nei due anni solari precedenti, registrati presso l'AMS.
  - Per posizioni non altamente specializzate, l'unica via per un permesso di soggiorno a tempo indeterminato/pluriennale passa attraverso la categoria *Sonstige Schlüsselkräfte* o *Fachkräfte in Mangelberufen*.
- **Stato:** `VERIFIED`
- **Fonti Primarie:**  
  RIS BKA — *AuslBG*, §§ 3, 4, 5  
  URL: `https://www.ris.bka.gv.at/GeltendeFassung.wxe?Abfrage=Bundesnormen&Gesetzesnummer=10008365`  
  AMS — *Beschäftigung ausländischer Arbeitskräfte*: `https://www.ams.at`  
  Data di consultazione: 05/10/2026
- **Formulazione Parafrasata:**  
  L'accesso al lavoro dipendente ordinario per cittadini extra-UE è vincolato a rigide verifiche di indisponibilità e contingenti stagionali.

---

### Caso 2: Lavoro Qualificato / Skilled (Rot-Weiß-Rot-Karte e Blaue Karte EU)
- **Quadro Normativo e Parametri Ufficiali 2026:**
  1. **Rot-Weiß-Rot-Karte (NAG § 41, AuslBG §§ 12, 12a, 12b):**  
     Valida per 24 mesi, vincolata al datore di lavoro indicato. Accessibile tramite diversi pilastri:
     - *Besonders Hochqualifizierte* (§ 12 AuslBG): Almeno 70 punti su 100. Possibilità di richiedere un visto di ricerca lavoro (Visum D, § 24a FPG) di 6 mesi. Esente da test del mercato del lavoro.
     - *Fachkräfte in Mangelberufen* (§ 12a AuslBG): Almeno 55 punti su 90; qualifica formale corrispondente a una professione inserita nell'annuale *Fachkräfteverordnung* del BMAW. Retribuzione conforme al CCNL di settore (*Kollektivvertrag*). Esente da Ersatzkraftverfahren.
     - *Sonstige Schlüsselkräfte* (§ 12b Z 2 AuslBG): Almeno 55 punti su 90. **Soglia retributiva minima per il 2026: € 3.465 lordi al mese** (+ 13ª e 14ª mensilità = € 48.510 lordi/anno). Soggetta al test del mercato del lavoro (*Ersatzkraftverfahren*).
     - *Studienabsolventen* (§ 12b Z 1 AuslBG): Laureati in Austria, senza punti, retribuzione da CCNL per neolaureati, senza test del mercato.
     - *Start-up-Gründer* (§ 24 NAG, § 12b Z 3 AuslBG): Almeno 50 punti su 85, capitale minimo di € 30.000.
     - Tutte le RWR Card permettono la transizione a *Rot-Weiß-Rot – Karte plus* dopo 21 mesi di impiego qualificato nei 24 mesi precedenti.
  2. **Blaue Karte EU (NAG § 42, AuslBG § 12c):**  
     - Titolo terziario di durata almeno triennale o, per specialisti e dirigenti nel settore ICT, almeno 3 anni di esperienza professionale comparabile maturata nei 7 anni precedenti.
     - **Soglia salariale minima per il 2026: € 55.678 lordi annui** (pari al 100% della retribuzione lorda media dei lavoratori a tempo pieno in Austria, comprensiva di 13ª e 14ª mensilità).
     - Soggetta a verifica del mercato del lavoro (*Ersatzkraftverfahren*), che **decade** se il lavoratore ha già maturato almeno 12 mesi di impiego con Carta Blu in Austria.
     - Validità: 24 mesi; conversione in RWR Card plus dopo 21 mesi su 24.
- **Stato:** `VERIFIED`
- **Fonti Primarie:**  
  BMAW / BMI — *migration.gv.at* (Permanent Immigration: EU Blue Card / Other Key Workers / Shortage Occupations)  
  URL EU Blue Card: `https://www.migration.gv.at/en/types-of-immigration/permanent-immigration/eu-blue-card/`  
  URL Other Key Workers: `https://www.migration.gv.at/en/types-of-immigration/permanent-immigration/other-key-workers/`  
  URL Shortage Occupations: `https://www.migration.gv.at/en/types-of-immigration/permanent-immigration/skilled-workers-in-shortage-occupations/`  
  RIS BKA — *NAG* §§ 41, 42; *AuslBG* §§ 12, 12a, 12b, 12c  
  Data di consultazione: 05/10/2026
- **Formulazione Parafrasata:**  
  Nel 2026 la Carta Blu richiede almeno 55.678 euro lordi annui; la RWR per lavoratori chiave esige 3.465 euro mensili.

---

### Caso 3: Tirocini e Stage (Praktikum vs Volontariat)
- **Quadro Normativo Distintivo (AuslBG § 2 Abs. 14, 15, 16 e § 3 Abs. 5):**
  L'ordinamento austriaco traccia una netta e rigorosa distinzione civilistica e giuslavoristica:
  1. **Volontariat (§ 2 Abs. 14 AuslBG):**  
     Attività finalizzata esclusivamente all'ampliamento e all'applicazione di conoscenze teoriche per acquisire competenze pratiche, **senza obbligo di prestazione lavorativa** (*ohne Arbeitspflicht*) e **senza diritto a compenso** (*ohne Entgeltanspruch*). Durata massima: 3 mesi per anno solare (estendibile fino a 12 mesi solo per programmi specifici di cooperazione aziendale ex § 3 Abs. 9). Vietato l'impiego per mansioni esecutive o manovalanza.
  2. **Pflichtpraktikum / Ferial- oder Berufspraktikum (§ 2 Abs. 15 AuslBG):**  
     Tirocinio curricolare obbligatorio previsto dai regolamenti didattici di istituti scolastici o universitari austriaci dotati di diritto pubblico (*Öffentlichkeitsrecht*).
  3. **Praktikanten ex Direttiva (EU) 2016/801 (§ 2 Abs. 16 AuslBG):**  
     Studenti terziari o neolaureati (entro 2 anni dal conseguimento) di università estere, con convenzione di tirocinio tra 91 e 180 giorni.
  4. **Procedura per Volontariat e Pflichtpraktikum (§ 3 Abs. 5 AuslBG):**  
     **Non richiedono alcuna Beschäftigungsbewilligung.** Il datore di lavoro deve notificare il tirocinio all'AMS e alla Centrale di coordinamento contro il lavoro sommerso almeno 3 settimane prima dell'inizio (*spätestens drei Wochen vor Beginn anzeigen*). L'AMS rilascia una **Anzeigebestätigung** entro due settimane.
  5. **Tirocinio Volontario Extracurricolare Retribuito (*Freies Praktikum / Ferialarbeit*):**  
     Se sussiste vincolo di subordinazione/orario e diritto a compenso al di fuori dei piani di studio obbligatori, costituisce a tutti gli effetti un normale rapporto di lavoro subordinato (*echtes Dienstverhältnis*), soggetto all'obbligo di permesso di lavoro AMS ordinario o ai limiti del lavoro studentesco (20h/settimana).
- **Stato:** `VERIFIED`
- **Fonti Primarie:**  
  RIS BKA — *AuslBG*, § 2 Abs. 14–16 e § 3 Abs. 5  
  URL: `https://www.ris.bka.gv.at/NormDokument.wxe?Abfrage=Bundesnormen&Gesetzesnummer=10008365&Paragraf=3`  
  AMS — *Praktikantinnen, Praktikanten und Volontäre*: `https://www.ams.at`  
  Data di consultazione: 05/10/2026
- **Formulazione Parafrasata:**  
  I tirocini curricolari e i volontariati non richiedono un'autorizzazione lavorativa ma una notifica AMS con attestazione preventiva.

---

### Caso 4: Studio (Bachelor / Master) e Requisiti Finanziari 2026
- **Quadro Normativo Vigente:**
  - Titolo di soggiorno: *Aufenthaltsbewilligung – Student* (§ 64 NAG).
  - Tasse universitarie ordinarie: € 363,36 a semestre per cittadini UE/SEE; € 726,72 a semestre per studenti extra-UE (+ contributo ÖH obbligatorio di circa € 24,70).
  - Lavoro durante lo studio: Fino a 20 ore a settimana con Beschäftigungsbewilligung AMS, esente da test del mercato (§ 4 Abs. 7 AuslBG).
  - **Soglie di Sostentamento Finanziario (Unterhaltsmittel) per il 2026** (ancorate ai parametri sociali ASVG § 293):
    - Studenti **fino a 24 anni non compiuti:** **€ 722,58 al mese** (€ 8.670,96 annui).
    - Studenti **dai 24 anni in su:** **€ 1.308,39 al mese** (€ 15.700,68 annui).
    - Coppie sposate/unioni registrate: **€ 2.064,12 al mese**.
    - Quota aggiuntiva per ogni figlio a carico: **€ 201,88 al mese**.
    - Quota alloggio forfettaria inclusa nel parametro base: **€ 386,43 al mese**. Se i costi effettivi di canone e utenze superano € 386,43/mese, la differenza deve essere dimostrata come disponibilità economica supplementare.
    - Obbligo di copertura assicurativa sanitaria integrale (l'assicurazione agevolata per studenti ÖGK costa circa € 73,48/mese se il reddito annuo è inferiore a € 10.000).
  - Rendimento accademico: Per il rinnovo annuale è obbligatorio esibire il conseguimento di almeno 16 crediti ECTS (o 8 ore settimanali d'esame) per anno accademico (§ 64 Abs. 2 NAG).
- **Stato:** `VERIFIED`
- **Fonti Primarie:**  
  OeAD — *Living and studying in Austria / Proof of sufficient financial means*  
  URL: `https://oead.at/en/to-austria/entry-and-residence/residence-permit-student`  
  RIS BKA — *NAG*, § 64; *ASVG*, § 293  
  URL: `https://www.ris.bka.gv.at/NormDokument.wxe?Abfrage=Bundesnormen&Gesetzesnummer=20004242&Paragraf=64`  
  Data di consultazione: 05/10/2026
- **Formulazione Parafrasata:**  
  Nel 2026 gli studenti over 24 devono dimostrare 1.308,39 euro mensili di mezzi propri per il permesso di studio.

---

### Caso 5: Tesi e Ricerca (Forscher e Hosting Agreement)
- **Quadro Normativo Vigente:**
  - Titolo di soggiorno principale: *Niederlassungsbewilligung – Forscher* (§ 43c NAG) o *Aufenthaltsbewilligung – Forscher-Mobilität* (§ 67b NAG).
  - Requisito cardine: stipula di una convenzione di accoglienza (*Aufnahmevereinbarung*) con un ente di ricerca certificato (*zertifizierte Forschungseinrichtung*) o qualificato in Austria.
  - Regime lavorativo: I ricercatori sono **esenti dal campo di applicazione dell'AuslBG** (§ 1 Abs. 2 lit. a AuslBG); non necessitano di alcuna autorizzazione dell'AMS per svolgere la ricerca concordata.
  - Il titolo è esente da quote (*quotenfrei*).
  - Al termine del progetto di ricerca, il titolo può essere esteso per **12 mesi** per cercare impiego o creare un'impresa (§ 43c Abs. 7 NAG).
- **Stato:** `VERIFIED`
- **Fonti Primarie:**  
  RIS BKA — *NAG*, § 43c; *AuslBG*, § 1 Abs. 2 lit. a  
  URL: `https://www.ris.bka.gv.at/NormDokument.wxe?Abfrage=Bundesnormen&Gesetzesnummer=20004242&Paragraf=43c`  
  OeAD — *Researchers*: `https://oead.at/en/to-austria/entry-and-residence/researchers`  
  Data di consultazione: 05/10/2026
- **Formulazione Parafrasata:**  
  I ricercatori con convenzione di accoglienza sono esenti dai permessi AMS e beneficiano di 12 mesi post-ricerca.

---

### Caso 6: Erasmus+ e Mobilità Intra-UE Studenti e Ricercatori (Direttiva (UE) 2016/801)
- **Quadro Normativo Vigente:**
  - **Studenti:** I cittadini di paesi terzi già titolari di un valido titolo di soggiorno per studio rilasciato da un altro Stato membro UE (con esclusione di Irlanda e Danimarca) coperti da un programma di mobilità dell'Unione (es. Erasmus+) o da accordi interuniversitari possono soggiornare e studiare in Austria **fino a 360 giorni senza dover richiedere un autonomo permesso di soggiorno austriaco**, purché notifichino il soggiorno e l'ateneo austriaco trasmetta i documenti di mobilità (Direttiva 2016/801/UE; prassi consolidata BMI/OeAD). Se immatricolati in programmi multilaterali direttamente in Austria, il permesso *Student* viene rilasciato per 2 anni (§ 64 Abs. 6 NAG).
  - **Ricercatori:**  
    - Mobilità a breve termine (*Kurzfristige Mobilität*, fino a 180 giorni in un arco di 360 giorni): ingresso e svolgimento della ricerca consentiti sulla base del titolo di ricerca del primo Stato membro, previa notifica alle autorità austriache (BMI).
    - Mobilità a lungo termine (oltre 180 giorni): rilascio dell'*Aufenthaltsbewilligung – Forscher-Mobilität* (§ 67b NAG).
- **Stato:** `VERIFIED`
- **Fonti Primarie:**  
  OeAD — *Mobility under Directive (EU) 2016/801*  
  URL: `https://oead.at/en/to-austria/entry-and-residence`  
  RIS BKA — *NAG*, § 64 Abs. 6, § 67a, § 67b  
  Data di consultazione: 05/10/2026
- **Formulazione Parafrasata:**  
  Studenti e ricercatori con titolo UE possono svolgere periodi Erasmus+ o di ricerca in Austria senza nuovo permesso.

---

### Caso 7: Dottorato di Ricerca (PhD)
- **Quadro Normativo Vigente (Doppio Binario):**
  - **Dottorando Iscritto come Studente Puro (Senza contratto di ricerca):**  
    Titolare di *Aufenthaltsbewilligung – Student* (§ 64 NAG). Può svolgere attività lavorativa subordinata fino a 20 ore settimanali con permesso AMS.
  - **Dottorando Assunto come Ricercatore / Assegnista (Prae-Doc / wissenschaftlicher Mitarbeiter):**  
    Qualora il dottorando abbia un regolare contratto di lavoro con l'ateneo o centro di ricerca associato a una *Aufnahmevereinbarung*, accede al titolo **Niederlassungsbewilligung – Forscher** (§ 43c NAG). Questo comporta il riconoscimento dello status professionale di ricercatore a tempo pieno, l'esenzione dalle restrizioni AMS sui permessi di lavoro e l'inquadramento previdenziale ordinario ASVG.
- **Stato:** `VERIFIED`
- **Fonti Primarie:**  
  OeAD — *Doctoral students / PhD candidates in Austria*  
  URL: `https://oead.at/en/to-austria/entry-and-residence`  
  RIS BKA — *NAG*, § 43c, § 64  
  Data di consultazione: 05/10/2026
- **Formulazione Parafrasata:**  
  I dottorandi con contratto universitario e convenzione possono ottenere il permesso per ricercatori anziché quello studentesco.

---

### Caso 8: Working Holiday
- **Quadro Normativo Vigente:**
  - L'Austria ha stipulato accordi bilaterali di Working Holiday / Youth Mobility con **11 paesi/territori**: Argentina, Australia, Cile, Hong Kong, Israele, Giappone, Canada, Nuova Zelanda, Corea del Sud, Taiwan e Stati Uniti.
  - Destinatari: giovani di età compresa tra 18 e 30 anni (fino a 35 anni per alcune intese, es. Canada).
  - Titolo rilasciato: **Visum D (Working Holiday)** per una durata compresa tra 6 e 12 mesi (a seconda dell'accordo bilaterale).
  - Regime lavorativo: I titolari possono svolgere attività lavorative accessorie al soggiorno turistico senza necessità di una preventiva *Beschäftigungsbewilligung* individuale dell'AMS, nei limiti fissati dall'accordo applicabile (§ 1 Abs. 2 lit. l AuslBG; § 24 FPG).
- **Stato:** `VERIFIED`
- **Fonti Primarie:**  
  BMEIA / oesterreich.gv.at — *Working Holiday Programme*  
  URL: `https://www.oesterreich.gv.at/themen/arbeit_und_pension/arbeitsmarkt/working_holiday.html`  
  RIS BKA — *AuslBG*, § 1 Abs. 2 lit. l; *Fremdenpolizeigesetz 2005 (FPG)*, § 24  
  Data di consultazione: 05/10/2026
- **Formulazione Parafrasata:**  
  I visti Working Holiday con undici paesi partner consentono a giovani fino a 30 anni lavoro e vacanza.

---

### Caso 9: Post-Studio e Permesso per Ricerca Lavoro
- **Quadro Normativo Vigente:**
  - Ai sensi del § 64 Abs. 4 NAG, alla conclusione con esito positivo di un percorso universitario austriaco (Bachelor, Master, Dottorato, Diplomstudium II fase), l'autorità proroga la *Aufenthaltsbewilligung Student* per **12 mesi** non rinnovabili per ricerca lavoro o avvio di startup.
  - Durante i 12 mesi, il laureato può mantenere il diritto di svolgere lavori fino a 20 ore settimanali o preparare la costituzione di una nuova impresa.
  - Non appena reperita un'offerta di lavoro qualificata: passaggio diretto a *Rot-Weiß-Rot – Karte für Studienabsolventen* (§ 12b Z 1 AuslBG) o *Blaue Karte EU* (§ 42 NAG).
  - Caratteristiche esclusive per i laureati: **Nessun test del mercato del lavoro (kein Ersatzkraftverfahren), nessun punteggio minimo (kein Punktesystem), retribuzione minima allineata al CCNL d'uso locale.**
  - Dopo 21 mesi di lavoro qualificato nei 24 mesi di validità della RWR Card: concessione della *Rot-Weiß-Rot – Karte plus* con accesso totale e incondizionato al mercato del lavoro austriaco (§ 41a Abs. 1 NAG).
- **Stato:** `VERIFIED`
- **Fonti Primarie:**  
  RIS BKA — *NAG*, § 64 Abs. 4; *AuslBG*, § 12b Z 1  
  migration.gv.at — *Graduates of Austrian universities and universities of applied sciences*: `https://www.migration.gv.at/en/types-of-immigration/permanent-immigration/graduates/`  
  Data di consultazione: 05/10/2026
- **Formulazione Parafrasata:**  
  Il permesso post-studio dura 12 mesi e consente il passaggio diretto alla Carta rosso-bianco-rossa senza test del mercato.

---

### Caso 10: Registrazione Anagrafica e Obblighi dei Cittadini UE/SEE
- **Quadro Normativo Vigente:**
  - **Meldezettel (§ 3 Meldegesetz 1991):** Registrazione di domicilio obbligatoria entro **3 giorni lavorativi** dall'occupazione di un alloggio per chiunque, indipendentemente dalla cittadinanza.
  - **Anmeldebescheinigung (§ 53 NAG):** I cittadini UE/SEE/Svizzera che permangono oltre 3 mesi devono presentare istanza entro **4 mesi** dall'arrivo, provando lo status di lavoratore (dipendente/autonomo), studente con mezzi adeguati e assicurazione, o titolare di risorse sufficienti per non gravare sull'assistenza pubblica.
  - **Bescheinigung des Daueraufenthalts (§ 53a NAG):** Diritto di soggiorno permanente rilasciato ai cittadini UE/SEE dopo 5 anni di residenza legale e ininterrotta.
  - **Familiari Extra-UE di Cittadini UE (§ 54 NAG):** Ricevono la *Aufenthaltskarte* (valida 5 anni) con accesso illimitato al lavoro, convertibile in *Daueraufenthaltskarte* dopo 5 anni (§ 54a NAG).
- **Stato:** `VERIFIED`
- **Fonti Primarie:**  
  RIS BKA — *Meldegesetz 1991*, § 3; *NAG*, §§ 53, 53a, 54  
  oesterreich.gv.at — *Anmeldung des Wohnsitzes / Anmeldebescheinigung*  
  Data di consultazione: 05/10/2026
- **Formulazione Parafrasata:**  
  I cittadini europei devono registrarsi all'anagrafe entro tre giorni e richiedere il certificato di soggiorno entro quattro mesi.

---

### Caso 11: Soggiorni Brevi e Ricongiungimento Familiare
- **Quadro Normativo Vigente:**
  1. **Soggiorni Brevi (Visti Schengen C e Nazionali D):**
     - Visto Schengen C: max 90 giorni su 180 giorni. Di regola non consente attività lavorativa remunerata, salvo trasferte d'affari senza inserimento nel mercato locale (*Geschäftsreisen* ex § 2 Abs. 4 AuslBG). Per attività brevi autorizzate occorre un visto con menzione di attività lucrativa (*Visum mit Erwerb*).
     - Visto D: da 91 a 180 giorni (ad es. per ricerca lavoro per altamente qualificati, o tirocini/scambi specifici).
  2. **Ricongiungimento Familiare (NAG §§ 46, 47):**
     - I familiari (coniuge o partner registrato di almeno 21 anni, figli minori non sposati fino a 18 anni) di titolari di **Rot-Weiß-Rot-Karte, Blaue Karte EU o Forscher** ottengono una **Rot-Weiß-Rot – Karte plus** (§ 46 Abs. 1 Z 2 NAG).
     - **Vantaggi decisivi:** Il ricongiungimento è **esente da contingenti di quota** (*quotenfrei*) e conferisce **immediato e illimitato accesso al mercato del lavoro**.
     - **Conoscenza del Tedesco prima dell'Espatrio (Deutsch vor Zuzug, § 21a NAG):**  
       I familiari di titolari di RWR Card per *Besonders Hochqualifizierte*, di *Blaue Karte EU* e di *Forscher* sono **espressamente ESENTI dall'obbligo di certificare il livello di tedesco A1 prima dell'ingresso**. I familiari di altre categorie RWR Card sono tenuti a presentare il certificato A1 salvo eccezioni (es. possesso di titolo universitario).
     - Ricongiungimento con cittadini austriaci (§ 47 Abs. 2 NAG): rilascio del titolo *Familienangehöriger*, quotenfrei con pieno accesso al lavoro.
- **Stato:** `VERIFIED`
- **Fonti Primarie:**  
  BMAW / BMI — *migration.gv.at* (Family reunification / German knowledge prior to immigration)  
  URL: `https://www.migration.gv.at/en/types-of-immigration/permanent-immigration/family-reunification/`  
  URL A1: `https://www.migration.gv.at/en/living-and-working-in-austria/learn-german/german-knowledge-prior-to-immigration/`  
  RIS BKA — *NAG*, §§ 21a, 46, 47  
  Data di consultazione: 05/10/2026
- **Formulazione Parafrasata:**  
  I familiari dei titolari di Carta Blu e RWR ottengono la RWR-Plus con pieno accesso lavorativo immediato.

---

## 4. Tabella Riepilogativa di Fact-Checking

| Ambito / Claim | Oggetto | Stato | Fonte Primaria Ufficiale | Riferimento Normativo | Note Applicative 2026 |
|---|---|---|---|---|---|
| `at-melde` | Registrazione anagrafica entro 3 giorni | `VERIFIED` | ris.bka.gv.at | Meldegesetz 1991 § 3(1) | Termine perentorio; firma del locatore |
| `at-anmeldung` | Anmeldebescheinigung UE entro 4 mesi | `VERIFIED` | oesterreich.gv.at / ris.bka.gv.at | NAG § 53(1) | Sanzione pecuniaria fino a € 250 se omessa |
| `at-20h` | Lavoro studenti extra-UE max 20h/settimana | `VERIFIED` | migration.gv.at / ams.at | AuslBG § 4(7); NAG § 64(3) | Permesso AMS senza Ersatzkraftverfahren |
| `at-grad` | Post-studio 12 mesi e RWR Card laureati | `VERIFIED` | migration.gv.at / ris.bka.gv.at | NAG § 64(4); AuslBG § 12b Z 1 | Nessun test di mercato né punti; paga da CCNL |
| RWR Plus | Conversione da RWR Card dopo 21 mesi su 24 | `VERIFIED` | migration.gv.at / ris.bka.gv.at | NAG § 41a(1); AuslBG § 17 | Accesso al lavoro libero e slegato dal datore |
| Blaue Karte EU | Carta Blu UE requisiti e soglia 2026 | `VERIFIED` | migration.gv.at / ris.bka.gv.at | NAG § 42; AuslBG § 12c | Soglia 2026: € 55.678 lordi/anno; ICT 3 anni exp |
| RWR Schlüsselkräfte | Lavoratori chiave soglia 2026 e punti | `VERIFIED` | migration.gv.at / ris.bka.gv.at | NAG § 41; AuslBG § 12b Z 2 | Soglia 2026: € 3.465 lordi/mese; 55/90 punti |
| RWR Mangelberufe | Professioni carenti | `VERIFIED` | migration.gv.at / ris.bka.gv.at | NAG § 41; AuslBG § 12a | 55/90 punti; lista annuale BMAW; no Ersatzkraft |
| Praktikum / Volontariat | Tirocini curricolari vs volontariati | `VERIFIED` | ams.at / ris.bka.gv.at | AuslBG § 2(14–16), § 3(5) | Anzeigebestätigung preventiva 3 sett. prima |
| Mezzi Sussistenza Studio | Prova fondi studenti 2026 | `VERIFIED` | oead.at / ris.bka.gv.at | NAG § 64; ASVG § 293 | <24 anni: € 722,58/m; ≥24 anni: € 1.308,39/m |
| Forscher / Ricerca | Hosting agreement e ricerca | `VERIFIED` | oead.at / ris.bka.gv.at | NAG § 43c; AuslBG § 1(2)(a) | Aufnahmevereinbarung; esente da permessi AMS |
| Mobilità Dir. 2016/801 | Soggiorno mobilità studenti fino a 360 gg | `VERIFIED` | oead.at / ris.bka.gv.at | NAG § 64(6), § 67a–b | Erasmus+ fino a 360 gg senza nuovo permesso AT |
| Dottorato (PhD) | Doppio status studente vs ricercatore | `VERIFIED` | oead.at / ris.bka.gv.at | NAG § 43c vs § 64 | Aufenthaltsbewilligung vs Niederlassungsbew. |
| Working Holiday | Accordi bilaterali vacanza-lavoro | `VERIFIED` | oesterreich.gv.at / bmeia | AuslBG § 1(2)(l); FPG § 24 | 11 paesi partner, età 18–30, Visum D |
| Ricongiungimento RWR | Familiari titolari RWR/Carta Blu/Ricerca | `VERIFIED` | migration.gv.at / ris.bka.gv.at | NAG § 46(1)(2), § 21a | RWR Card Plus immediata, quota-free, no A1 esente |

---

## 5. Raccomandazioni per la Codebase Admetia

1. **Integrità dei Dati Esistenti:**  
   Le asserzioni contenute in `data/atlas/at.js` (`at-melde`, `at-anmeldung`, `at-20h`, `at-grad`) sono totalmente verificate e corrette. Non richiedono alcuna rettifica restrittiva.
2. **Arricchimento della Sezione §6 di `research/places/visas-and-work-rights.md`:**  
   È opportuno inserire nella riga dedicata all'Austria la precisazione sulla soglia retributiva della Carta Blu 2026 (€ 55.678 lordi annui) e la soglia per le altre figure qualificate RWR (€ 3.465 lordi mensili), confermando che per i laureati austriaci opera invece la regola del salario contrattuale collettivo senza soglia fissa minima di legge.
3. **Creazione della Guida Monografica Austria in `visas_immigration/austria/`:**  
   Si raccomanda di dotare l'Austria di una guida monografica completa strutturata (come per Belgio, Danimarca, Francia, Germania, Irlanda, Italia, Olanda, Portogallo, Spagna, Svizzera e Regno Unito), recependo le sezioni dettagliate del presente rapporto.
