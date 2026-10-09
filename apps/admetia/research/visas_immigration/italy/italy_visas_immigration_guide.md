---
country: "Italy"
country_it: "Italia"
iso_code: "IT"
last_verified: "2026-10-05"
review_by: "2027-03-31"
version: "1.0.0"
citizenships_covered:
  - "UE / SEE / Svizzera"
  - "Extra-UE (incl. UK, USA, Canada, Australia, Paesi terzi)"
---

# Guida Ufficiale Visti, Permessi e Immigrazione: Italia (IT)

> **Avvertenza di integrità:** Questo documento costituisce l'**UNICA FONTE DI VERITÀ** per la mobilità e l'immigrazione in Italia all'interno della piattaforma Admetia. Ogni informazione quantitativa, tariffa o requisito legale reca un riferimento normativo univoco `[IT-SRC-XX]` verificabile nell'archivio [`italy_sources.md`](italy_sources.md). I punti aperti o soggetti a difformità operative locali sono censiti in [`italy_open_questions.md`](italy_open_questions.md).

---

## 1. Architettura Giuridica ed Enti Competenti

L'ingresso e il soggiorno in Italia sono regolati dal **Testo Unico sull'Immigrazione** (D.Lgs. 25 luglio 1998, n. 286 - TUI) e dal relativo Regolamento di attuazione (D.P.R. 31 agosto 1999, n. 394), come modificati dalle riforme recenti:
- **D.Lgs. 6 febbraio 2007, n. 30:** Recepimento Direttiva 2004/38/CE sulla libera circolazione dei cittadini dell'Unione Europea e loro familiari `[IT-SRC-01]`, `[IT-SRC-02]`.
- **D.Lgs. 11 maggio 2018, n. 71:** Recepimento Direttiva (UE) 2016/801 su ricercatori, studenti, tirocinanti e volontari `[IT-SRC-16]`, `[IT-SRC-21]`, `[IT-SRC-22]`.
- **D.L. 10 marzo 2023, n. 20 (Decreto Cutro conv. in Legge 50/2023):** Svincolo totale delle conversioni studio-lavoro dalle quote del Decreto Flussi `[IT-SRC-18]`.
- **D.Lgs. 18 ottobre 2023, n. 152:** Recepimento Direttiva (UE) 2021/1883 sulla Carta Blu UE per lavoratori altamente qualificati `[IT-SRC-19]`.
- **Legge 30 dicembre 2023, n. 213 (Legge di Bilancio 2024):** Nuova disciplina sul contributo forfettario di iscrizione volontaria al SSN per studenti stranieri `[IT-SRC-10]`.
- **D.L. 11 ottobre 2024, n. 145 (conv. in Legge 187/2024):** Disposizioni urgenti in materia di flussi migratori, precompilazione domande e verifiche anti-frode `[IT-SRC-33]`.

### Mappa degli Enti e Portali Telematici Ufficiali
1. **Ministero dell'Università e della Ricerca (MUR) / Atenei:** Piattaforma **UNIVERSITALY** (`universitaly.it`) per la pre-iscrizione obbligatoria degli studenti internazionali `[IT-SRC-09]`.
2. **CIMEA:** Piattaforma **Diplome** (`cimea.it`) per il rilascio degli Attestati di Comparabilità e di Verifica dei titoli accademici esteri `[IT-SRC-36]`.
3. **Ministero degli Affari Esteri (MAECI) / Consolati:** Portale **Il Visto per l'Italia** (`vistoperitalia.esteri.it`) per l'istruttoria delle domande di visto Tipo C e Tipo D `[IT-SRC-07]`.
4. **Prefetture - UTG:** **Sportello Unico per l'Immigrazione (SUI)** tramite il **Portale Servizi ALI** del Ministero dell'Interno (`portaleservizi.dlci.interno.it`) per la gestione telematica dei Nulla Osta al lavoro, Carta Blu, ricerca scientifica e ricongiungimento familiare `[IT-SRC-19]`, `[IT-SRC-27]`, `[IT-SRC-33]`.
5. **Poste Italiane (Sportello Amico):** Raccolta delle domande di rilascio/rinnovo del permesso di soggiorno elettronico (PSE) tramite il Kit Postale a banda gialla (`portaleimmigrazione.it`) `[IT-SRC-06]`.
6. **Polizia di Stato (Questure):** Convocazione per fotosegnalamento (impronte digitali), verifica dei requisiti di sicurezza, rilascio del permesso elettronico plastificato e ricezione delle dichiarazioni di presenza `[IT-SRC-03]`, `[IT-SRC-26]`.
7. **Agenzia delle Entrate:** Rilascio del certificato di **Codice Fiscale** (Modello AA4/8) `[IT-SRC-12]`.
8. **Comuni (Uffici Anagrafe - APR):** Iscrizione anagrafica della residenza e rilascio della Carta d'Identità Elettronica (CIE) `[IT-SRC-02]`, `[IT-SRC-30]`.
9. **Aziende Sanitarie Locali (ASL/ASST):** Iscrizione al Servizio Sanitario Nazionale (SSN) e assegnazione del Medico di Medicina Generale (MMG) `[IT-SRC-10]`, `[IT-SRC-11]`.

---

## 2. Matrice Operativa dei 10 Casi d'Uso (UE vs Extra-UE)

---

### CASO 1: LAVORO DIPENDENTE ORDINARIO (SUBORDINATE EMPLOYMENT)

#### A. Cittadini UE / SEE / Svizzeri
* **Titolo di Ingresso e Soggiorno:** Nessun visto né permesso di soggiorno `[IT-SRC-01]`. Piena libertà di circolazione e assunzione diretta a parità di diritti con i cittadini italiani.
* **Adempimento Soggiorno > 3 mesi:** Iscrizione all'Anagrafe della Popolazione Residente (APR) del Comune di dimora abituale esibendo contratto di lavoro registrato o comunicazione UNILAV e codice fiscale `[IT-SRC-02]`.
* **Sanità:** Iscrizione obbligatoria gratuita al SSN con scelta del medico di base `[IT-SRC-10]`.

#### B. Cittadini Extra-UE (Canale Decreto Flussi)
* **Regime Generale:** L'ingresso per lavoro subordinato ordinario è soggetto a rigido contingentamento numerico stabilito dal D.P.C.M. di programmazione triennale dei flussi d'ingresso `[IT-SRC-33]`.
* **Procedura Passo-Passo:**
  1. *Verifica preventiva al Centro per l'Impiego (CPI):* Il datore di lavoro inoltra al CPI richiesta per verificare la disponibilità di lavoratori già residenti in Italia. Decorsi 8 giorni lavorativi senza esito positivo, il datore ottiene il diritto a procedere `[IT-SRC-33]`.
  2. *Domanda di Nulla Osta al SUI:* Il datore carica la domanda precompilata sul Portale Servizi ALI del Ministero dell'Interno, munita di asseverazione di congruità contrattuale e reddituale rilasciata da professionista abilitato (D.L. 145/2024), e invia l'istanza durante il *Click-Day* stabilito `[IT-SRC-33]`.
  3. *Visto Consolare:* Ottenuto il Nulla Osta telematico, il lavoratore presenta domanda di **Visto Nazionale Tipo D per lavoro subordinato** al Consolato italiano nel Paese d'origine (costo: **€ 116,00** `[IT-SRC-07]`).
  4. *Arrivo ed Entro 8 giorni lavorativi:* Lavoratore e datore si presentano allo Sportello Unico per l'Immigrazione (SUI) per la firma del **Contratto di Soggiorno**, attribuzione del codice fiscale e consegna del Kit Postale precompilato `[IT-SRC-03]`.
  5. *Richiesta Permesso:* Spedizione del Kit Postale presso un ufficio postale "Sportello Amico". Convocazione in Questura per fotosegnalamento e ritiro del titolo plastificato `[IT-SRC-04]`, `[IT-SRC-06]`.
* **Costi Amministrativi Obbligatori (1° Anno):**
  - Visto Nazionale D: **€ 116,00** `[IT-SRC-07]`.
  - Kit Postale e Permesso: **€ 116,46** per contratti a termine fino a 1 anno (Marca da bollo € 16,00 + Spedizione postale € 30,00 + Bollettino MEF c/c 67422402 di € 70,46 comprensivo di contributo ministeriale € 40 e costo smart card € 30,46) `[IT-SRC-05]`, `[IT-SRC-06]`.
  - *Per contratti a tempo indeterminato (permesso biennale):* Bollettino di **€ 80,46** (contributo € 50 + card € 30,46), totale procedura in Italia: **€ 126,46** `[IT-SRC-05]`.
* **Tempi di Lavorazione:** Termine legale 60 giorni `[IT-SRC-04]`. Tempi reali nelle aree metropolitane: 8–14 mesi per il ritiro della smart card `[IT-SRC-31]`.
* **Conversione da Studio Fuori Quota:** Chi si è laureato in Italia o ha completato percorsi accademici riconosciuti può convertire il permesso studio in lavoro subordinato **in qualsiasi momento dell'anno, totalmente fuori dalle quote del Decreto Flussi** (D.L. 20/2023 conv. in L. 50/2023) tramite Modello VA sul portale ALI `[IT-SRC-18]`.
* **Errori Comuni:** Credere che un'azienda possa assumere un candidato non laureato in Italia dall'estero senza passare dal Decreto Flussi; non avere il certificato di idoneità alloggiativa al momento della firma del contratto di soggiorno allo SUI `[IT-SRC-27]`.

---

### CASO 2: LAVORO ALTAMENTE QUALIFICATO (CARTA BLU UE & ART. 27 TUI)

#### A. Cittadini UE / SEE / Svizzeri
* Parità assoluta di accesso alle posizioni dirigenziali e qualificate; nessuna autorizzazione richiesta.

#### B. Cittadini Extra-UE (Canale Extra-Quota Permanente)
* **Inquadramento Giuridico:** Art. 27-quater TUI, interamente riformato dal D.Lgs. 18 ottobre 2023, n. 152 in recepimento della Direttiva (UE) 2021/1883 `[IT-SRC-19]`. Consente l'assunzione di personale altamente qualificato **in qualsiasi momento dell'anno, senza vincoli di quote flussi**.
* **Requisiti Contrattuali e Professionali Vincolanti:**
  1. *Durata contrattuale:* Contratto di lavoro o offerta vincolante di durata **non inferiore a 6 mesi** (ridotto dai precedenti 12 mesi) `[IT-SRC-19]`.
  2. *Livello professionale:* Mansioni rientranti nei livelli 1, 2 o 3 della classificazione ISTAT delle professioni CP2011.
  3. *Requisito di qualifica (almeno uno dei seguenti):*
     - Titolo di istruzione terziaria di durata almeno triennale (Laurea triennale, magistrale o master universitario) attestato da certificato di comparabilità CIMEA `[IT-SRC-36]`;
     - Almeno **5 anni di esperienza professionale** di livello comparabile ai titoli di istruzione superiore pertinenti;
     - Per il **settore ICT (Tecnologie dell'Informazione e Comunicazione)**: almeno **3 anni di esperienza professionale pertinente maturata negli ultimi 7 anni**, anche in assenza di titolo di studio universitario `[IT-SRC-19]`!
  4. *Soglia Retributiva Minima:* Non inferiore alla retribuzione prevista dai CCNL di settore applicabili e, in ogni caso, non inferiore alla retribuzione media annua lorda rilevata dall'ISTAT, pari a **€ 36.278,51** (convenzionalmente indicata in **€ 36.300 lordi/anno**) `[IT-SRC-19]`, `[IT-SRC-20]`.
* **Procedura:** Istanza telematica di Nulla Osta al SUI tramite Portale ALI (Modello BC) presentata dal datore -> Visto D per lavoro subordinato/Carta Blu (€ 116,00) `[IT-SRC-07]` -> Convocazione allo SUI entro 8 giorni -> Kit Postale per Carta Blu biennale.
* **Costi:** Visto consolare € 116,00 `[IT-SRC-07]`. Kit Postale: **€ 176,46** (Marca da bollo € 16 + Spedizione € 30 + Bollettino MEF c/c 67422402 di € 130,46, comprensivo di contributo maggiorato di € 100 per lavoratori altamente qualificati ex D.M. 5/5/2017 e € 30,46 card) `[IT-SRC-05]`, `[IT-SRC-06]`.
* **Vantaggi e Diritti:** Diritto immediato al ricongiungimento familiare indipendentemente dalla durata del permesso `[IT-SRC-27]`; accesso alla mobilità intra-UE dopo 12 mesi di soggiorno regolare nel primo Stato membro `[IT-SRC-19]`.

---

### CASO 3: INTERNSHIP / TIROCINIO (CURRICULARE vs EXTRACURRICULARE)

#### A. Tirocinio Curriculare (Studenti Iscritti)
* **Destinatari:** Studenti regolarmente iscritti a corsi universitari in Italia per l'acquisizione di Crediti Formativi Universitari (CFU).
* **Disciplina Giuridica:** Art. 14, comma 4 del D.P.R. 394/1999 `[IT-SRC-13]`.
* **Regola Fondamentale (Nota INL n. 320/2023):** Il tirocinio curriculare non costituisce in alcun caso rapporto di lavoro e **NON è soggetto al limite delle 20 ore settimanali o 1.040 ore annuali** `[IT-SRC-14]`, `[IT-SRC-15]`. Può essere svolto a tempo pieno (40 ore/settimana) senza intaccare il monte ore lavorabile.
* **Costi e Titolo:** Nessun visto né permesso ulteriore; si svolge con il regolare Permesso di soggiorno per Studio in corso di validità `[IT-SRC-15]`.

#### B. Tirocinio Extracurriculare (Neolaureati o Candidati Residenti all'Estero)
* **Destinatari:** Soggetti che hanno conseguito un titolo di studio entro 12/24 mesi o residenti all'estero che svolgono tirocini formativi e di orientamento.
* **Inquadramento Giuridico:** Art. 27-bis TUI (introdotto dal D.Lgs. 71/2018 in attuazione Direttiva UE 2016/801); Linee Guida Conferenza Stato-Regioni 25 maggio 2017 `[IT-SRC-14]`.
* **Procedura per Residenti all'Estero:**
  1. Stipula di Convenzione di Tirocinio e Progetto Formativo Individuale (PFI) tra soggetto ospitante (azienda) ed ente promotore accreditato (università, CPI o agenzia per il lavoro).
  2. **Approvazione preventiva obbligatoria della Regione territorialmente competente** (o Centro per l'Impiego) `[IT-SRC-15]`.
  3. Richiesta del **Visto Nazionale Tipo D per Tirocinio** al Consolato italiano (costo: **€ 116,00** `[IT-SRC-07]`).
  4. Entro 8 giorni lavorativi dall'arrivo: presentazione Kit Postale per *Permesso di soggiorno per tirocinio* (costo: **€ 116,46** per tirocini fino a 12 mesi) `[IT-SRC-03]`, `[IT-SRC-06]`.
* **Condizioni Economiche e Tutele:** Obbligo di corresponsione dell'indennità minima mensile regionale di partecipazione (es. Lombardia: min. € 500/mese; Lazio: min. € 800/mese). Copertura assicurativa INAIL contro gli infortuni e RC verso terzi obbligatoriamente a carico dell'ente promotore o ospitante `[IT-SRC-15]`.

---

### CASO 4: STUDIO UNIVERSITARIO (BACHELOR / MASTER / LAUREE MAGISTRALI)

#### A. Cittadini UE / SEE / Svizzeri
* Iscrizione diretta al corso universitario senza visto consolare.
* Soggiorno superiore a 3 mesi: iscrizione anagrafica all'APR del Comune esibendo certificato di iscrizione universitaria, dichiarazione di risorse economiche sufficienti (pari ad almeno l'Assegno Sociale, circa € 7.100/anno) e Tessera TEAM (EHIC) o polizza sanitaria privata `[IT-SRC-02]`, `[IT-SRC-17]`.

#### B. Cittadini Extra-UE
* **Fase 1: Pre-iscrizione telematica su UNIVERSITALY:** Registrazione su `universitaly.it` e caricamento documentazione accademica. L'Ateneo verifica il dossier ed emette la validazione telematica trasmessa direttamente al Consolato italiano di competenza `[IT-SRC-09]`.
* **Fase 2: Riconoscimento Titoli Esteri:** Ottenimento dell'Attestato di Comparabilità **CIMEA** tramite il servizio online Diplome (`cimea.it`) `[IT-SRC-36]`, oppure della **Dichiarazione di Valore in loco (DdV)** rilasciata dalla sede consolare con traduzione giurata e Apostille.
* **Fase 3: Domanda di Visto Nazionale D per Studio (Tariffa: € 50,00 `[IT-SRC-07]`):**
  - Domanda cartacea con ricevuta Universitaly validata.
  - Requisito linguistico: certificazione livello B2 (quadro CLIQ) per corsi in italiano `[IT-SRC-09]`.
  - **Mezzi di Sussistenza Minimi Ufficiali (A.A. 2026/2027):** **€ 848,32 al mese**, pari a complessivi **€ 10.179,85 all'anno** `[IT-SRC-09]`. Dimostrabili tramite estratti conto bancari personali o dei genitori degli ultimi 3–6 mesi o borse di studio ufficiali formalizzate.
  - Disponibilità di alloggio idoneo in Italia e risorse per il rimpatrio.
  - **Copertura Sanitaria per il Visto:** Polizza sanitaria privata conforme di durata annuale (massimale min. € 30.000 per ricovero urgente e rimpatrio salma, es. WAI a circa € 120–€ 150/anno) `[IT-SRC-07]`.
* **Fase 4: All'arrivo in Italia (Entro 8 giorni lavorativi):** Spedizione Kit Postale Sportello Amico (costo: **€ 116,46** `[IT-SRC-06]`). Ritiro cedolino postale con credenziali per il monitoraggio su `portaleimmigrazione.it`.
* **Diritti Lavorativi Durante lo Studio:** Il permesso consente lo svolgimento di **lavoro subordinato per un massimo di 20 ore settimanali e 1.040 ore annuali** `[IT-SRC-13]`. **Divieto assoluto:** Non è consentito aprire Partita IVA né svolgere attività continuativa di lavoro autonomo senza previa conversione del permesso `[IT-SRC-13]`.
* **Opzione Iscrizione Volontaria SSN:** Facoltà di iscrizione al SSN versando un contributo forfettario di **€ 700 per anno solare** con Modello F24 (codice tributo 8846) `[IT-SRC-10]`, `[IT-SRC-11]`.  
  *Attenzione strategica:* Poiché l'iscrizione scade tassativamente il 31 dicembre, chi arriva a settembre/ottobre deve utilizzare la polizza privata per il primo permesso e attivare l'F24 SSN solo a decorrere dal 1° gennaio dell'anno solare successivo, per non disperdere la quota `[IT-SRC-10]`.
* **Rinnovo Annuale:** Domanda via posta almeno 60 giorni prima della scadenza: superamento di almeno 1 esame di profitto per il primo rinnovo e di almeno 2 esami per i rinnovi successivi (art. 46 D.P.R. 394/1999) `[IT-SRC-13]`.

---

### CASO 5: TESI / RICERCA SCIENTIFICA (VISITING vs RICERCATORE ART. 27-TER)

#### A. Visiting Student per Preparazione Tesi
* Studenti iscritti all'estero che conducono periodi di studio e ricerca tesi in convenzione con università italiane.
* Per soggiorni superiori a 90 giorni: Visto D Studio su lettera di invito formale dell'Ateneo -> Permesso studio ordinario (costo: visto € 50 + kit postale € 116,46) `[IT-SRC-06]`, `[IT-SRC-07]`.

#### B. Ricercatore Scientifico con Convenzione di Accoglienza (Art. 27-ter TUI)
* **Destinatari:** Dottori di ricerca o titolari di titoli di secondo livello qualificati, invitati da atenei o enti di ricerca pubblici/privati accreditati presso il MUR `[IT-SRC-21]`.
* **Procedura e Strumenti:**
  1. Stipula della **Convenzione di Accoglienza (Hosting Agreement):** L'ente assume l'onere di corrispondere un compenso mensile non inferiore al doppio dell'assegno sociale (~€ 1.100–€ 1.200 mensili netti) e copre le spese di soggiorno e rimpatrio `[IT-SRC-21]`.
  2. Richiesta di Nulla Osta telematico da parte dell'ente allo SUI tramite Portale Servizi ALI (Modello RF).
  3. Rilascio del **Visto Nazionale D per Ricerca Scientifica** (costo consolare: € 116,00, salvo accordi di esenzione speciale) `[IT-SRC-07]`.
  4. Convocazione allo SUI entro 8 giorni per firma contratto e invio kit postale per *Permesso per Ricerca Scientifica* (costo: € 116,46 per 1 anno, € 126,46 per durate pluriennali) `[IT-SRC-05]`, `[IT-SRC-06]`.
* **Vantaggi:** Titolo concesso fuori quota Decreto Flussi; ricongiungimento familiare immediato `[IT-SRC-27]`; diritto di svolgere attività di docenza retribuita connesse al progetto `[IT-SRC-21]`.

---

### CASO 6: ERASMUS+ E MOBILITÀ DEGLI STUDENTI INTRA-UE (DIRETTIVA UE 2016/801)

#### A. Cittadini UE / SEE / Svizzeri
* Partecipazione a progetti Erasmus+ o bandi bilaterali senza formalità di visto, con esibizione della Tessera Sanitaria Europea TEAM `[IT-SRC-01]`.

#### B. Studenti Extra-UE con Permesso Studio Rilasciato da Altro Stato Membro UE
* **Esenzione Totale dal Visto d'Ingresso (Art. 39-bis, comma 2-bis TUI):**  
  Lo studente di Paese terzo già in possesso di un permesso di soggiorno per studio valido rilasciato da un altro Stato membro dell'Unione Europea (es. Francia, Germania, Spagna, Paesi Bassi) coperto da programma europeo di mobilità (Erasmus+) o convenzione interuniversitaria **HA DIRITTO DI ENTRARE E SOGGIORNARE IN ITALIA SENZA RICHIEDERE ALCUN VISTO D'INGRESSO** per un periodo massimo di **360 giorni** `[IT-SRC-22]`.
* **Iter Operativo:** L'ateneo italiano ospitante trasmette comunicazione di mobilità allo SUI o alla Questura; all'arrivo in Italia, lo studente presenta la **Dichiarazione di Presenza** in Questura entro 8 giorni lavorativi `[IT-SRC-22]`, `[IT-SRC-26]`.
* *Attenzione:* Non è necessario richiedere né pagare un permesso di soggiorno italiano, salvo che il titolo dello Stato di provenienza scada prima della conclusione del periodo di scambio.

---

### CASO 7: MASTER DI I/II LIVELLO E DOTTORATO DI RICERCA (PhD)

#### A. Master Universitari di I e II Livello
* Percorsi post-laurea disciplinati dal D.M. 270/2004 (60 CFU con valore legale accademico). Si applicano le medesime disposizioni previste per lo studio universitario ordinario (Preiscrizione Universitaly, Visto D Studio € 50, kit € 116,46, limite 1.040 ore di lavoro) `[IT-SRC-07]`, `[IT-SRC-09]`, `[IT-SRC-13]`.

#### B. Dottorato di Ricerca (PhD) — Opzioni e Disciplina
* **Inquadramento del Soggiorno:** Il dottorando extra-UE può accedere mediante:
  1. *Permesso per Studio / Dottorato:* Canale ordinario Universitaly `[IT-SRC-09]`.
  2. *Permesso per Ricerca Scientifica (Art. 27-ter TUI):* Qualora l'Ateneo stipuli formale Convenzione di Accoglienza come istituto di ricerca `[IT-SRC-21]`.
* **Regime Fiscale della Borsa di Dottorato:**
  - **Esenzione Fiscale al 100%:** Ai sensi dell'art. 4 della Legge 13 agosto 1984, n. 476 e dell'art. 6 Legge 398/1989, le borse di studio di dottorato di ricerca sono **totalmente esenti da IRPEF e dalle addizionali locali** `[IT-SRC-23]`.
* **Regime Previdenziale della Borsa di Dottorato:**
  - **Iscrizione Obbligatoria alla Gestione Separata INPS:** Le borse di dottorato sono soggette a contribuzione previdenziale obbligatoria presso la Gestione Separata INPS (art. 2, c. 26 L. 335/1995) `[IT-SRC-24]`.
  - La contribuzione è ripartita nella misura di **2/3 a carico dell'Università** e **1/3 a carico del dottorando**.
  - **Prerequisito vincolante:** È indispensabile ottenere il Codice Fiscale italiano al Giorno 1 per consentire l'iscrizione all'INPS e l'erogazione della borsa `[IT-SRC-12]`.

---

### CASO 8: WORKING HOLIDAY / VACANZA-LAVORO (ACCORDI BILATERALI)

#### A. Paesi Convenzionati e Limiti Anagrafici
* L'Italia ha stipulato accordi bilaterali intergovernativi di vacanza-lavoro con 5 Paesi: **Australia, Nuova Zelanda, Canada, Giappone e Corea del Sud** `[IT-SRC-25]`.
* Limite di età: compresa tra **18 e 30 anni compiuti** al momento della domanda (esteso fino a **35 anni** per cittadini canadesi e australiani in base agli accordi aggiornati) `[IT-SRC-25]`.

#### B. Condizioni di Ingresso e Limiti Lavorativi Tassativi
* **Visto Consolare:** Visto Nazionale Tipo D per Vacanza-Lavoro richiesto presso la rappresentanza diplomatica italiana nel Paese d'origine (costo: **€ 116,00** `[IT-SRC-07]`).
* **All'arrivo:** Richiesta entro 8 giorni lavorativi del *Permesso di soggiorno per vacanza-lavoro* tramite Kit Postale Sportello Amico (durata massima 12 mesi; costo: **€ 116,46**) `[IT-SRC-06]`.
* **Limiti di Impiego Rigidi:**
  - L'attività lavorativa deve avere natura accessoria rispetto alla vacanza.
  - Il titolare può lavorare per un periodo complessivo massimo di **6 mesi nel corso dei 12 mesi di soggiorno**.
  - **Limite per singolo datore di lavoro:** Non è consentito lavorare per più di **3 o 6 mesi con la stessa impresa** (a seconda dell'accordo bilaterale specifico) `[IT-SRC-25]`.
* **Divieto di Conversione:** Il titolo **non è rinnovabile, non è prorogabile e NON PUÒ essere convertito in Italia** in permesso di soggiorno per motivi di lavoro subordinato ordinario o autonomo (è necessario il rientro nel Paese di cittadinanza) `[IT-SRC-25]`.

---

### CASO 9: POST-STUDY WORK / RICERCA LAVORO (ART. 39-BIS.1 TUI)

#### A. Aventi Diritto
* Studenti internazionali extra-UE che abbiano conseguito in Italia: Laurea Triennale, Laurea Magistrale (Master of Science), Master universitario di I o II livello (D.M. 270/2004), Dottorato di Ricerca o Diploma accademico AFAM di 1° o 2° livello `[IT-SRC-16]`.

#### B. Requisiti e Procedura per il Rilascio (Durata: da 9 a 12 Mesi)
1. Presentazione della domanda tramite Kit Postale Sportello Amico (costo: **€ 116,46** `[IT-SRC-06]`) **prima della scadenza del permesso di soggiorno per studio** in possesso `[IT-SRC-16]`.
2. Certificato rilasciato dall'ateneo attestante il conseguimento del titolo accademico.
3. Iscrizione al Centro per l'Impiego (CPI) competente per domicilio, con rilascio della **Dichiarazione di Immediata Disponibilità al lavoro (DID)** comprovante lo status di disoccupato/cercatore di occupazione `[IT-SRC-16]`.
4. Prova di disponibilità di risorse economiche lecite minime pari all'importo annuo dell'**Assegno Sociale INPS** (~**€ 7.100,00 annui** per il 2026; € 7.002,97 per il 2025) `[IT-SRC-16]`, `[IT-SRC-17]`.
5. Copertura sanitaria valida per la durata del permesso (polizza privata o F24 SSN da € 700) `[IT-SRC-10]`.

#### C. LA SVOLTA DELLA CONVERSIONE DIRETTA (100% FUORI QUOTA)
* Non appena il neolaureato riceve un'offerta di lavoro subordinato (anche a tempo determinato) con retribuzione conforme al CCNL, oppure decide di avviare una libera professione/attività con Partita IVA, il permesso per ricerca lavoro si **CONVERTE IMMEDIATAMENTE IN PERMESSO PER LAVORO SUBORDINATO O AUTONOMO**.
* **Esenzione Totale dal Decreto Flussi (D.L. 20/2023 - Legge Cutro):** La conversione avviene tramite invio telematico dell'istanza allo SUI sul Portale ALI (Modello VA per lavoro subordinato, Modello VB per lavoro autonomo) **in qualsiasi giorno dell'anno, senza attendere alcun click-day né essere soggetti a quote numeriche** `[IT-SRC-18]`.

---

### CASO 10: SOGGIORNI BREVI (< 90 GG) E RICONGIUNGIMENTO FAMILIARE

#### A. Soggiorni Brevi (≤ 90 giorni) — Turismo, Affari, Visiting, Summer School
* **Nessun Permesso di Soggiorno:** Ai sensi della Legge 28 maggio 2007, n. 68, il permesso di soggiorno per soggiorni non superiori a 3 mesi per visite, affari, turismo e studio è soppresso `[IT-SRC-26]`.
* **Cittadini Esenti da Visto (USA, UK, Canada, Australia, Giappone, ecc.):** Entrano liberamente per un massimo di 90 giorni ogni 180 giorni nell'area Schengen. Cittadini di Paesi soggetti a visto richiedono il **Visto Schengen Tipo C (costo: € 90,00** `[IT-SRC-08]`).
* **Trappola degli Esenti da Visto:** l'ingresso senza visto per 90 giorni **non** consente, di norma, di convertire il soggiorno in un permesso per studio o lavoro dall'interno dell'Italia: per studio e lavoro subordinato serve il **visto nazionale D** ottenuto prima dell'ingresso `[IT-SRC-26]`. Chi entra da turista per "regolarizzarsi" dopo l'iscrizione o l'offerta di lavoro rischia di superare i 90 giorni e di diventare irregolare. *(Eccezioni di legge, es. motivi familiari, vanno valutate caso per caso.)*
* **EES ed ETIAS:** dal **10/04/2026** il sistema di ingresso/uscita biometrico **EES** è pienamente operativo ai varchi Schengen e sostituisce la timbratura del passaporto per i cittadini di Paesi terzi in soggiorno breve; l'autorizzazione **ETIAS** **non è ancora in funzione** e la data di avvio sarà comunicata dall'UE con diversi mesi di anticipo: non è richiesta finché non entra in vigore `[IT-SRC-37]`.
* **L'Obbligo Tassativo della Dichiarazione di Presenza:**
  - *Ingresso con volo diretto extra-Schengen:* Il timbro uniforme apposto dalla polizia di frontiera italiana assolve l'obbligo di dichiarazione di presenza `[IT-SRC-26]`.
  - *Ingresso via transito da altro Paese Schengen (es. scalo a Francoforte o Parigi):* È **OBBLIGATORIO presentare la Dichiarazione di Presenza presso la Questura della provincia in cui si dimora entro 8 giorni lavorativi dall'ingresso**, salvo che si alloggi in strutture alberghiere (dove la dichiarazione è assolta con la schedina alloggiati TULPS). La mancata presentazione comporta l'espulsione immediata dal territorio nazionale (art. 13 TUI) `[IT-SRC-26]`.
* **Divieto Assoluto di Lavoro:** Nessuna attività lavorativa remunerata è consentita con ingresso per soggiorno breve.

#### B. Ricongiungimento Familiare (Artt. 28 e 29 TUI)
* **Chi può richiederlo:** Straniero extra-UE titolare di permesso di soggiorno di durata non inferiore a 1 anno (lavoro subordinato, autonomo, studio, ricerca, Carta Blu) `[IT-SRC-27]`.
* **Familiari ammessi:** Coniuge maggiorenne; figli minori; figli maggiorenni a carico con invalidità totale; genitori a carico ultra-65enni privi di altri figli nel Paese d'origine `[IT-SRC-27]`.
* **Requisiti Materiali Indispensabili:**
  1. *Idoneità Alloggiativa:* Certificato rilasciato dall'Ufficio Tecnico del Comune comprovante che l'alloggio rientra nei parametri dimensionali e igienico-sanitari di legge (con conformità impianti D.M. 37/2008) `[IT-SRC-27]`.
  2. *Reddito Minimo Annuo (parametrato all'Assegno Sociale INPS rivalutato 2026 ~€ 7.100 `[IT-SRC-17]`, `[IT-SRC-27]`):*
     - Richiedente + 1 familiare: Assegno Sociale × 1,5 = **~€ 10.650,00**
     - Richiedente + 2 familiari: Assegno Sociale × 2,0 = **~€ 14.200,00**
     - Richiedente + 3 familiari: Assegno Sociale × 2,5 = **~€ 17.750,00**
     - *Per due o più figli minori di 14 anni (soglia protetta):* Assegno Sociale × 2,0 fisso = **~€ 14.200,00**.
* **Procedura:** Domanda di Nulla Osta al SUI via Portale ALI (Modello SM) -> Rilascio Nulla Osta -> Visto consolare gratuito per motivi familiari -> All'arrivo in Italia, firma al SUI entro 8 giorni e kit postale per Permesso per motivi familiari (costo: € 116,46 per 1 anno, € 126,46 per 2 anni) `[IT-SRC-05]`, `[IT-SRC-06]`.

---

## 3. Riepilogo Analitico dei Costi Amministrativi Obbligatori

Tutte le componenti di costo per le pratiche di soggiorno in Italia sono riassunte nella seguente tabella ufficiale:

| Profilo del Richiedente | Tariffa Visto Consolare | Marca da Bollo Telematica | Spedizione Postale Sportello Amico | Bollettino C/C 67422402 (MEF) | Costo Totale Procedura in Italia | Totale Spesa Amministrativa (Visto + Italia) |
| :--- | :---: | :---: | :---: | :---: | :---: | :---: |
| **Studente Universitario (1° Anno)** | € 50,00 `[IT-SRC-07]` | € 16,00 | € 30,00 `[IT-SRC-06]` | **€ 70,46** *(€30,46 PSE + €40 contr.)* `[IT-SRC-05]` | **€ 116,46** | **€ 166,46** |
| **Tirocinante Extracurriculare (Art. 27-bis)** | € 116,00 `[IT-SRC-07]` | € 16,00 | € 30,00 `[IT-SRC-06]` | **€ 70,46** *(€30,46 PSE + €40 contr.)* `[IT-SRC-05]` | **€ 116,46** | **€ 232,46** |
| **Lavoratore Subordinato (1 Anno - T. Determinato)** | € 116,00 `[IT-SRC-07]` | € 16,00 | € 30,00 `[IT-SRC-06]` | **€ 70,46** *(€30,46 PSE + €40 contr.)* `[IT-SRC-05]` | **€ 116,46** | **€ 232,46** |
| **Lavoratore Subordinato (2 Anni - T. Indeterminato)** | € 116,00 `[IT-SRC-07]` | € 16,00 | € 30,00 `[IT-SRC-06]` | **€ 80,46** *(€30,46 PSE + €50 contr.)* `[IT-SRC-05]` | **€ 126,46** | **€ 242,46** |
| **Carta Blu UE (Biennale - Art. 27-quater)** | € 116,00 `[IT-SRC-07]` | € 16,00 | € 30,00 `[IT-SRC-06]` | **€ 130,46** *(€30,46 PSE + €100 contr.)* `[IT-SRC-05]` | **€ 176,46** | **€ 292,46** |
| **Post-Study Ricerca Lavoro (Art. 39-bis.1)** | € 0,00 *(in Italia)* | € 16,00 | € 30,00 `[IT-SRC-06]` | **€ 70,46** *(€30,46 PSE + €40 contr.)* `[IT-SRC-05]` | **€ 116,46** | **€ 116,46** |
| **Rinnovo Permesso Biennale Lavoro** | € 0,00 *(in Italia)* | € 16,00 | € 30,00 `[IT-SRC-06]` | **€ 80,46** *(€30,46 PSE + €50 contr.)* `[IT-SRC-05]` | **€ 126,46** | **€ 126,46** |
| **Soggiornanti di Lungo Periodo UE (Indeterminato)** | € 0,00 *(in Italia)* | € 16,00 | € 30,00 `[IT-SRC-06]` | **€ 130,46** *(€30,46 PSE + €100 contr.)* `[IT-SRC-05]` | **€ 176,46** | **€ 176,46** |

---

## 4. Statuto Giuridico durante l'Attesa del Permesso (La Ricevuta Postale)

Nelle more della conclusione del procedimento presso la Questura, la **ricevuta postale (cedolino con ologramma di Poste Italiane Mod. 22AO)** costituisce titolo documentale provvisorio di soggiorno ai sensi dell'art. 5, comma 9-bis del T.U.I. `[IT-SRC-04]` e della Direttiva del Ministro dell'Interno del 5 agosto 2006 `[IT-SRC-28]`:

> **Attenzione – scadenza a 9 mesi della ricevuta (Mod. 22AO):** dal novembre 2024 la data di accettazione della ricevuta delle richieste con kit postale (rinnovo/conversione) reca una scadenza calcolata automaticamente in un **massimo di 9 mesi** (circolare del Ministero dell'Interno del 13/11/2024, n. 400/B/2024; sintesi in `italy_open_questions.md` – Questione Aperta 3) `[IT-SRC-38]`. Nelle grandi Questure i tempi reali di convocazione superano spesso i 9 mesi e alcuni istituti bancari tendono a limitare i conti alla scadenza: **la ricevuta non ha validità illimitata**. Il testo originale della circolare non è stato letto (OPEN-IT-REC).

### A. Diritti Garantiti sul Territorio Italiano
- **Pieno diritto al lavoro:** La ricevuta postale consente l'assunzione regolare, la stipula di contratti di lavoro subordinato e autonomo e l'iscrizione all'INPS `[IT-SRC-04]`.
- **Assistenza Sanitaria (SSN):** Diritto all'iscrizione al SSN con medico di base provvisorio `[IT-SRC-10]`.
- **Iscrizione Anagrafica al Comune:** Le circolari ministeriali n. 16/2007 e 43/2007 consentono l'iscrizione anagrafica della residenza congiuntamente al visto e al contratto di soggiorno `[IT-SRC-30]`.
- **Contratti e Locazioni:** Pieno titolo per registrare contratti d'affitto all'Agenzia delle Entrate e aprire conti correnti di base `[IT-SRC-04]`.

### B. Regime Tassativo dei Viaggi all'Estero (La Trappola Schengen)
- **DIVIETO ASSOLUTO DI SCALO SCHENGEN:** La ricevuta postale non è riconosciuta dal Codice Frontiere Schengen (Reg. UE 2016/399). Chi viaggia con la sola ricevuta non può in nessun caso transitare o fare scalo in altri Paesi dell'area Schengen (es. Francoforte, Zurigo, Parigi, Vienna, Madrid). In caso di scalo, le autorità di frontiera estere operano il **fermo, il respingimento alla frontiera e la segnalazione SIS** `[IT-SRC-28]`.
- **Tratte Consentite:** L'uscita e il rientro in Italia sono consentiti **esclusivamente con volo diretto non-stop (senza scali)** tra l'Italia e il proprio Paese d'origine extra-Schengen `[IT-SRC-28]`.
- **Differenza tra Rinnovo e Primo Rilascio:**
  - *In caso di Rinnovo:* Il viaggiatore deve esibire passaporto valido, ricevuta postale originale e permesso di soggiorno scaduto in originale `[IT-SRC-28]`.
  - *In caso di Primo Rilascio:* Il rientro in Italia è subordinato al fatto che il **Visto Nazionale D sia ancora in corso di validità e ad ingressi multipli**. Se il visto D è scaduto, **non è possibile rientrare in Italia** prima della materiale consegna della smart card `[IT-SRC-28]`.

---

## 5. Regime Fiscale Agevolato per Lavoratori Impatriati

L'Italia prevede un regime di favore per attrarre capitale umano e lavoratori qualificati dall'estero, riformato dal **D.Lgs. 27 dicembre 2023, n. 209 (art. 5)** `[IT-SRC-34]` e destinato a confluire nell'**art. 225 del nuovo Testo Unico delle Imposte sui Redditi (D.Lgs. 117/2026)** a decorrere dal 1° gennaio 2027 `[IT-SRC-35]`:

* **Condizioni di Accesso:**
  1. Trasferimento della residenza anagrafica e fiscale in Italia.
  2. Residenza fiscale all'estero per almeno i **tre periodi d'imposta precedenti** al trasferimento `[IT-SRC-34]`.
  3. Impegno formale a permanere fiscalmente residenti in Italia per **almeno quattro anni** (pena la decadenza con recupero delle imposte e sanzioni) `[IT-SRC-34]`.
  4. Svolgimento dell'attività lavorativa prevalentemente nel territorio italiano con requisiti di elevata qualificazione o specializzazione (titoli accademici triennali o superiori) `[IT-SRC-34]`.
* **Beneficio Fiscale Ordinario:** Detassazione del **50% del reddito di lavoro dipendente o autonomo** prodotto in Italia per **cinque periodi d'imposta**, calcolato entro un tetto massimo di reddito agevolabile pari a **€ 600.000 annui** `[IT-SRC-34]`.
* **Beneficio Maggiorato in Presenza di Figli Minori:** In presenza di un figlio minore (ovvero in caso di nascita o adozione di un minore durante il periodo di fruizione), la quota imponibile scende al 40%, determinando un'**esenzione fiscale maggiorata pari al 60%** (e non al 40% come erroneamente riportato in versioni storiche non aggiornate) `[IT-SRC-34]`.
* **Incompatibilità:** L'agevolazione impatriati non è cumulabile con il regime forfettario al 15% delle Partite IVA, né con la flat tax dei neo-domiciliati.
