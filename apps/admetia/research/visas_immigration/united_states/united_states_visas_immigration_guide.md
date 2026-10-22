---
country: "United States"
country_it: "Stati Uniti"
iso_code: "US"
last_verified: "2026-10-07"
review_by: "2026-11-30"
version: "1.0.0"
citizenships_covered:
  - "UE / SEE / Svizzera (riferimento italiano; differenze per Bulgaria, Cipro, Romania)"
  - "Extra-UE (incl. UK, India, Cina, Paesi terzi)"
---

# Guida Ufficiale Visti e Immigrazione: Stati Uniti

> **Regola di integrità:** Questo documento è l'unica fonte di verità per gli Stati Uniti all'interno della codebase Admetia. Ogni dato numerico, tariffa, soglia, termine o requisito contiene un riferimento `[US-SRC-xx]` collegato al registro `united_states_sources.md`. I dati non verificabili su fonte primaria, basati solo su fonti secondarie o in conflitto non compaiono qui: confluiscono esclusivamente in `united_states_open_questions.md` (voci `OQ-xx`).
>
> **Stato dei dati: MOLTO VOLATILE.** Situazione fotografata al **7 ottobre 2026** (verifica del 6 ottobre 2026 e chiusura dei punti aperti del 7 ottobre 2026; i docket giudiziari sono letti fino al 6 ottobre 2026). La prossima revisione è fissata al 30 novembre 2026 perché diverse regole sono sospese, impugnate o in attesa di pubblicazione (vedi riquadro "Sospeso e pendente" al par. 3).

---

## 1. Architettura Giuridica ed Enti Competenti

Gli Stati Uniti non hanno libera circolazione, ne un permesso unico: ogni ingresso per studio o lavoro passa da una categoria di visto non immigrante (o immigrante) con requisiti propri. La stessa regola vale per cittadini UE e non UE; cambiano solo l'ingresso breve (ESTA o visto B), la validita del visto stampato e l'accesso ad alcune categorie legate alla nazionalita.

- **Quadro normativo cardine:**
  - *8 CFR 214.2*: regole per studenti F/M e scambi J (lavoro on-campus, CPT, cap-gap) `[US-SRC-01]`.
  - *8 CFR parte 106*: tariffario USCIS (importi dei moduli, sconto per deposito online, premium processing) `[US-SRC-02]`, `[US-SRC-03]`, `[US-SRC-04]`.
  - *22 CFR parte 62*: programma Exchange Visitor (J-1): Research Scholar `[US-SRC-06]`, Short-term Scholar `[US-SRC-07]`, Intern e Trainee `[US-SRC-08]`, studenti universitari e academic training `[US-SRC-09]`, Summer Work Travel `[US-SRC-10]`, assicurazione obbligatoria `[US-SRC-05]`.
  - *Visa Waiver Program (VWP)*: ingresso fino a 90 giorni senza visto per i Paesi in elenco `[US-SRC-52]`.
  - *Proclamazioni presidenziali*: Proclamazione 11069 sul pagamento H-1B `[US-SRC-19]` e Proclamazione 10998 sulle restrizioni d'ingresso per 39 Paesi `[US-SRC-63]`, `[US-SRC-64]`.
  - *Public Law 119-21 (HR-1)*: base legale di nuove tariffe di ingresso (ESTA, I-94, visa integrity fee) `[US-SRC-58]`.

- **Mappa degli enti e portali:**
  - **Department of State (consolati)**: visti, tariffa MRV, colloquio, reciprocita; in Italia le prenotazioni passano solo dal portale `ais.usvisa-info.com` `[US-SRC-84]`, `[US-SRC-85]`; tariffe `[US-SRC-48]`; tempi di attesa `[US-SRC-65]`.
  - **DHS / CBP**: ammissione al port of entry, I-94 elettronico, ESTA `[US-SRC-42]`, `[US-SRC-86]`.
  - **DHS / ICE-SEVP**: SEVIS, I-20 e DS-2019, scuole certificate, DSO (Designated School Official), tariffa I-901 `[US-SRC-34]`, `[US-SRC-36]`.
  - **DHS / USCIS**: petizioni di lavoro (I-129), cambio e proroga di status, EAD/OPT (I-765), cambio di indirizzo `[US-SRC-15]`, `[US-SRC-28]`, `[US-SRC-82]`.
  - **IRS**: obblighi fiscali di studenti e lavoratori `[US-SRC-78]`, `[US-SRC-79]`, `[US-SRC-80]`.
  - **Social Security Administration**: numero di previdenza (SSN), solo con autorizzazione al lavoro `[US-SRC-43]`.
  - **Giurisdizioni**: molte regole 2026 sono in causa; lo stato giudiziario e riassunto nel par. 3 e le fonti sono i docket `[US-SRC-12]`, `[US-SRC-21]`, `[US-SRC-26]`.

- **Confronto in sintesi per nazionalita (riferimento: cittadino italiano):**

| Aspetto | Italia (e UE nel VWP) | Bulgaria, Cipro, Romania | Regno Unito | India | Cina |
| :--- | :--- | :--- | :--- | :--- | :--- |
| Visita fino a 90 giorni | ESTA, senza visto `[US-SRC-52]` | Visto B-1/B-2 (non nel VWP) `[US-SRC-52]`, `[US-SRC-53]` | ESTA, solo per chi ha il right of abode nel Regno Unito `[US-SRC-52]` | Visto B-1/B-2 `[US-SRC-52]` | Visto B-1/B-2 `[US-SRC-52]` |
| Validita visto F-1 stampato | 16 mesi `[US-SRC-49]` | non verificata (OQ-18) | 60 mesi `[US-SRC-107]` | 60 mesi `[US-SRC-108]` | 60 mesi `[US-SRC-109]` |
| Proclamazione 10998 | Non nominata `[US-SRC-63]`, `[US-SRC-64]` | Non nominati `[US-SRC-63]` | Non nominato `[US-SRC-63]` | Non nominata `[US-SRC-63]` | Non nominata `[US-SRC-63]` |
| Visa bond B-1/B-2 | Non in elenco `[US-SRC-59]` | Non in elenco `[US-SRC-59]` | Non in elenco `[US-SRC-59]` | Non in elenco `[US-SRC-59]` | Non in elenco `[US-SRC-59]` |

Il VWP conta 42 partecipanti in totale (24 dei 27 Stati UE) `[US-SRC-52]`. La Romania era stata designata il 9 gennaio 2025, ma la designazione non fu attuata e fu rescissa il 2 maggio 2025 `[US-SRC-53]`, `[US-SRC-54]`. Chi ha una seconda cittadinanza o viaggi recenti in Paesi esclusi (es. Cuba, Iran, Iraq, Siria, Corea del Nord, Sudan) perde l'accesso al VWP `[US-SRC-52]`.

---

## 2. Matrice dei Casi d'Uso (Dettaglio Operativo UE vs Extra-UE)

Convenzioni: "UE" = cittadino italiano (riferimento); "BG/CY/RO" = Bulgaria, Cipro, Romania; "UK" = cittadino britannico; "IN" = India; "CN" = Repubblica Popolare Cinese. Quando una riga non cita una nazionalita, la regola e identica per tutte. Tutti i colloqui consolari si prenotano nel Paese di cittadinanza o di residenza `[US-SRC-61]`; le tariffe consolari non sono rimborsabili `[US-SRC-61]`.

### Caso 1: Lavoro Dipendente Ordinario

- **Quadro:** gli Stati Uniti non offrono un permesso di lavoro generale ai cittadini stranieri: ogni lavoro richiede una petizione del datore (modulo I-129) o una categoria di trattato. ESTA/VWP e visto B vietano qualsiasi lavoro `[US-SRC-52]`.
- **Cittadini UE (Italia):** nessuna libera circolazione. Il percorso ordinario e un visto di lavoro temporaneo a sponsorizzazione del datore (H-1B, L-1, O-1, E); vedi Caso 2 `[US-SRC-15]`, `[US-SRC-68]`, `[US-SRC-69]`, `[US-SRC-70]`. BG/CY/RO: stesse categorie; cambia solo l'ingresso breve (visto B, non ESTA) `[US-SRC-52]`.
- **Cittadini extra-UE (UK, IN, CN):** stesso schema. India e Cina non hanno trattato per i visti E (vedi Caso 2) `[US-SRC-106]`.
- **Requisiti e documenti:** offerta del datore e petizione approvata (I-129); per il visto consolare DS-160, passaporto, ricevuta MRV `[US-SRC-48]`, `[US-SRC-84]`.
- **Procedura:**
  1. Il datore deposita la petizione I-129 presso USCIS; opzionalmente paga il premium processing da 2.965 USD per H-1B/E/L/O, con termine di 15 giorni lavorativi `[US-SRC-04]`.
  2. A petizione approvata, il lavoratore compila il DS-160, paga la MRV e prenota il colloquio sul portale `[US-SRC-84]`.
  3. Colloquio in persona nel Paese di cittadinanza o residenza `[US-SRC-61]`; le categorie di lavoro H, L, O, E non rientrano tra le eccezioni al colloquio `[US-SRC-62]`, `[US-SRC-102]`.
  4. Ingresso con I-94 elettronico `[US-SRC-42]`.
- **Dove:** USCIS (petizione), consolato USA competente (visto), CBP (ingresso) `[US-SRC-85]`.
- **Costi a carico del lavoratore:** MRV per visti basati su petizione (H, L, O, P, Q, R): **205 USD** `[US-SRC-48]` (EUR 182,97 al cambio BCE 1,1204 del 05/10/2026 `[US-SRC-88]`). Tariffa di reciprocita (rilascio): Italia H-1B 153 USD e 60 mesi di validita `[US-SRC-49]`; UK H-1B nessuna tariffa, 60 mesi; India nessuna, 35 mesi; Cina nessuna, 12 mesi `[US-SRC-107]`, `[US-SRC-108]`, `[US-SRC-109]`. I costi del datore sono nel par. 4.
- **Tempi:** il premium processing e un termine opzionale di 15 giorni lavorativi `[US-SRC-04]`; i tempi ordinari USCIS non sono verificati (OQ-22). Attesa del colloquio per H/L/O/P/Q alla data del 17/09/2026: Roma 2 mesi, Milano 1,5, Napoli 1, Firenze 1,5 `[US-SRC-65]`.
- **Errori comuni:** lavorare con ESTA o visto B (lavoro non autorizzato) `[US-SRC-52]`; cercare lavoro generico senza datore disposto a sponsorizzare; ignorare che la validita del visto stampato dipende dal Paese (Cina H-1B 12 mesi) `[US-SRC-109]`.

---

### Caso 2: Lavoro Qualificato (H-1B, L-1, E-1/E-2, O-1, Green Card per lavoro)

- **Quadro:** categorie con petizione o trattato `[US-SRC-15]`, `[US-SRC-68]`, `[US-SRC-69]`, `[US-SRC-70]`, `[US-SRC-73]`, `[US-SRC-74]`.
- **H-1B (tutte le nazionalita):**
  - Quote annuali: 65.000 ordinarie + 20.000 per titoli di master (o superiori) rilasciati da un istituto USA; fino a 6.800 posti sono riservati al programma H-1B1 `[US-SRC-17]`. Un master europeo non da accesso alle 20.000 `[US-SRC-17]`.
  - Registrazione elettronica con quota di **215 USD** per registrazione `[US-SRC-16]`; selezione ponderata per livello salariale OEWS: livello IV 4 voci, III 3, II 2, I 1 `[US-SRC-18]`. Le stime DHS di probabilita per beneficiario sono 15,29% (livello I), 30,58% (II), 45,87% (III), 61,16% (IV): sono proiezioni, non risultati `[US-SRC-18]`.
  - Il cap FY2027 e stato raggiunto; USCIS non ha pubblicato i conteggi FY2027 (OQ-09) `[US-SRC-16]`. Le registrazioni FY2026 erano 343.981 idonee e 120.141 selezionate (34,9%), non confrontabili con le probabilita per persona `[US-SRC-16]`.
  - I datori che sono istituti di istruzione superiore sono esenti dal cap `[US-SRC-17]`.
  - Durata massima complessiva 6 anni `[US-SRC-15]`.
  - **Pagamento da 100.000 USD:** la Proclamazione 11069 estende la restrizione fino al 21/09/2027 `[US-SRC-19]`; le policy attuative sono pero vacate da due tribunali (D. Mass. 08/06/2026; N.D. Cal. 30/09/2026) e la corte d'appello ha negato la sospensione il 24/07/2026 `[US-SRC-15]`, `[US-SRC-21]`, `[US-SRC-22]`. Dettaglio e rischi nel par. 3. Il 18/09/2026 l'EO 14431 ha disposto che i licenziamenti del datore siano considerati in LCA, petizioni e visti, e che il DOL riesamini le LCA entro 30 giorni `[US-SRC-138]` (par. 3.2).
- **L-1 (trasferimento intra-societario):** almeno 1 anno continuativo nei 3 anni precedenti presso l'entita estera; L-1A (dirigenti) fino a 7 anni `[US-SRC-68]`, `[US-SRC-114]`; L-1B (conoscenze specialistiche) fino a 5 anni, con proroghe fino a 2 anni per volta `[US-SRC-113]`, `[US-SRC-114]`; coniuge e figli L-2 `[US-SRC-68]`. Tariffe: I-129 L **1.385 USD** `[US-SRC-02]`; MRV 205 USD `[US-SRC-48]`; reciprocita Italia L-1 308 USD (EUR 274,90), Cina 105 USD (EUR 93,72), Regno Unito e India nessuna tariffa; validita del visto L-1 stampato: Italia 60 mesi, Regno Unito 60, India 35, Cina 24 `[US-SRC-49]`, `[US-SRC-107]`, `[US-SRC-108]`, `[US-SRC-109]`.
- **E-1/E-2 (commercio e investimento da Paesi con trattato):** accessibili ai cittadini italiani (Italia e Paese con trattato E-1/E-2) e britannici; **non** a indiani e cinesi della Repubblica Popolare (nessun trattato) `[US-SRC-49]`, `[US-SRC-106]`, `[US-SRC-107]`, `[US-SRC-108]`, `[US-SRC-109]`, `[US-SRC-69]`. Il dipendente deve avere la nazionalita del datore `[US-SRC-69]`. Nell'elenco State dei Paesi con trattato Bulgaria e Romania hanno solo l'E-2 (nessun E-1), Cipro non compare e Italia e Regno Unito hanno E-1 ed E-2 `[US-SRC-106]`; le tariffe di reciprocita E-2 di Bulgaria e Romania non sono verificate su pagina primaria (OQ-18). Regno Unito: E senza tariffa, 60 mesi `[US-SRC-107]`. MRV visto E **315 USD** (EUR 281,15) `[US-SRC-48]`; reciprocita Italia E 198 USD (EUR 176,72), 60 mesi `[US-SRC-49]`: totale minimo 513 USD per un italiano.
- **O-1 (abilita straordinaria):** O-1A (scienze, istruzione, affari, sport) e O-1B (arti); consultazione di un organismo di pari; I-129 O **1.055 USD** `[US-SRC-70]`, `[US-SRC-02]`; MRV 205 USD `[US-SRC-48]`; reciprocita Italia O-1 nessuna tariffa, 60 mesi `[US-SRC-49]`; Regno Unito e India 60 mesi, Cina una sola entrata con validita di 3 mesi `[US-SRC-107]`, `[US-SRC-108]`, `[US-SRC-109]`.
- **Residenza per lavoro (EB-1, EB-2 con NIW, EB-3):** EB-2 richiede in genere la certificazione PERM del datore, salvo National Interest Waiver `[US-SRC-73]`; EB-3 `[US-SRC-74]`. Per ottobre 2026 USCIS impone di usare la tabella "Dates for Filing" del Visa Bulletin per tutte le categorie basate sul lavoro `[US-SRC-130]`. Date di deposito: EB-1 Cina e India 01/07/2024, resto del mondo corrente; EB-2 Cina 01/01/2023, India 15/01/2015, resto del mondo 15/03/2026; EB-3 Cina 01/04/2024, India 15/01/2015, resto del mondo 01/08/2024 `[US-SRC-129]`. Sono date per presentare la domanda, non per ottenere la carta: le date "Final Action" del dipartimento di Stato non sono state lette su fonte primaria (OQ-19).
- **Lotteria Diversity Visa (DV):** dal 31/08/2026 il dipartimento di Stato ha sospeso con effetto immediato ogni rilascio di visti DV, senza eccezioni: domande e colloqui proseguono ma non si emette alcun visto; la pausa di dicembre 2025 non e piu in vigore dal 28/08/2026 per ordine del tribunale (Medani v. Trump) `[US-SRC-104]`. Per i partecipanti passaporto e scansione obbligatori `[US-SRC-89]`. L'ammissibilita e per Paese di **nascita**, non per cittadinanza: nell'ultimo elenco pubblicato (DV-2026) Italia, Bulgaria, Cipro, Romania e Regno Unito (Irlanda del Nord separata) risultano ammissibili; India e Cina no `[US-SRC-90]`. Per DV-2027 la data di iscrizione e da annunciare e il periodo per i selezionati e 01/10/2026 - 30/09/2027 `[US-SRC-105]`; istruzioni ed elenco dei Paesi DV-2027 non risultano pubblicati (OQ-12).
- **Procedura (visti consolari H/L/O/E):** petizione o domanda di trattato; DS-160; MRV; colloquio; I-94 `[US-SRC-84]`, `[US-SRC-42]`.
- **Costi e tempi:** vedi par. 4; attese colloquio nel Caso 1 `[US-SRC-65]`.
- **Errori comuni:** credere che l'H-1B si ottenga per sorteggio "puro" (dal FY2027 e ponderato) `[US-SRC-18]`; presumere che l'F-1 passato a H-1B in loco sia protetto da ogni costo (vedi par. 3); contare su categorie legate alla nazionalita (TN, E-3, H-1B1), non disponibili per gli italiani (par. 6).

---

### Caso 3: Internship / Tirocinio (Curriculare vs Extracurriculare)

- **Tirocinio extracurriculare per studenti o neolaureati europei: J-1 Intern/Trainee.**
  - **J-1 Intern:** iscritto a tempo pieno a un ateneo estero, oppure laureato da non oltre 12 mesi; durata massima 12 mesi; sponsor designato dal dipartimento di Stato; modulo DS-2019 e piano di formazione (DS-7002) `[US-SRC-08]`, `[US-SRC-75]`. Sono esclusi lavoro non qualificato e occasionale, assistenza a bambini o anziani e contatto coi pazienti; lo sponsor non puo rilasciare piani di formazione con oltre il 20% di lavoro d'ufficio `[US-SRC-08]`.
  - **J-1 Trainee:** titolo di studio estero (o certificato professionale) piu 1 anno di esperienza correlata all'estero, oppure 5 anni di esperienza; durata massima 18 mesi (12 in agricoltura e ospitalita/turismo) `[US-SRC-08]`, `[US-SRC-76]`.
  - **Studente universitario estero che fa stage in USA:** categoria J-1 Student Intern, fino a 12 mesi `[US-SRC-09]`.
- **Tirocinio curriculare dentro un corso USA: F-1 CPT.** Il CPT e autorizzato dal DSO sull'I-20 `[US-SRC-01]`, ma dal 12/08/2026 (BCM 2608-01) e dal 24/08/2026 (BCM 2608-02) SEVP lo consente solo se la formazione pratica e parte integrante e **obbligatoria per tutti gli studenti** del corso; un corso facoltativo non basta `[US-SRC-24]`, `[US-SRC-25]`. Il ricorso AAU v. DHS e pendente (par. 3). Se si fa 1 anno o piu di CPT a tempo pieno si perde l'OPT post-completion `[US-SRC-01]`.
- **ESTA e B-1:** non consentono tirocini produttivi o retribuiti; sul VWP e ammessa solo formazione breve non retribuita senza compenso da fonte USA `[US-SRC-52]`.
- **Cittadini UE / extra-UE (UK, IN, CN, BG/CY/RO):** i requisiti J-1 sono gli stessi per tutti. L'Italia ha validita J-1 stampata di 60 mesi, come UK, India e Cina `[US-SRC-49]`, `[US-SRC-107]`, `[US-SRC-108]`, `[US-SRC-109]`. I richiedenti J-1/J-2 sono soggetti alla revisione della presenza online e devono impostare i profili social come pubblici `[US-SRC-103]`; la revisione si estende dal 1° ottobre anche a I, TN e TD (par. 3.4); la regola dei "5 anni di profili" sulla DS-160 non e verificata (OQ-03).
- **Procedura (J-1):**
  1. Trovare uno sponsor designato e un'impresa ospitante; ottenere il DS-2019 `[US-SRC-75]`.
  2. Pagare la tariffa SEVIS I-901 **220 USD** (35 USD per le categorie agevolate) prima del colloquio `[US-SRC-36]`, `[US-SRC-35]`.
  3. DS-160, MRV **185 USD** (nessuna MRV per i J finanziati da programmi del governo USA), colloquio `[US-SRC-48]`, `[US-SRC-84]`.
  4. Assicurazione sanitaria conforme al minimo J-1 `[US-SRC-05]`.
- **Costi:** SEVIS 220 USD + MRV 185 USD = **405 USD** (EUR 361,48) `[US-SRC-36]`, `[US-SRC-48]`; reciprocita J-1 nessuna tariffa per Italia, UK, India e Cina `[US-SRC-49]`, `[US-SRC-107]`, `[US-SRC-108]`, `[US-SRC-109]`. Minimi assicurativi: 100.000 USD per evento, 25.000 per rimpatrio salma, 50.000 per evacuazione, franchigia massima 500 USD `[US-SRC-05]`. I costi di sponsor non sono fissati da fonti ufficiali (OQ-14).
- **Tempi:** attesa F/M/J al 17/09/2026: Roma 2 mesi, Milano 2, Napoli e Firenze meno di 0,5, Londra meno di 0,5, New Delhi 2, Mumbai 2,5, Chennai meno di 0,5, Hyderabad 1,5, Kolkata 2, Pechino 5,5, Shanghai 1, Guangzhou 2,5 `[US-SRC-65]`.
- **Errori comuni:** entrare con ESTA per "fare uno stage"; contare su un CPT per stage facoltativo; confondere J-1 Intern (studente o neolaureato entro 12 mesi) con J-1 Trainee (esperienza professionale) `[US-SRC-08]`.


---

### Caso 4: Studio Universitario (Bachelor / Master)

- **Quadro:** visto F-1 (studi accademici) con scuola certificata SEVP; lo studio per crediti non e consentito con ESTA/VWP ne con visto B `[US-SRC-52]`, `[US-SRC-34]`. Stesso regime per tutte le nazionalita; cambia la validita del visto stampato e la tempistica del colloquio.
- **Cittadini UE (Italia):** visto F-1 a ingressi multipli ma valido solo **16 mesi** (nessuna tariffa di reciprocita) `[US-SRC-49]`; l'ultimo aggiornamento della pagina Italia e del 01/05/2025 `[US-SRC-51]`. Conseguenza pratica: lo status F-1 (D/S) continua regolarmente negli USA anche dopo la scadenza del visto, ma per rientrare dopo un viaggio all'estero serve un nuovo visto. **Trappola procedurale:** la revalidazione automatica del visto scaduto (22 CFR 41.112(d)) vale solo per assenze non superiori a 30 giorni in territorio contiguo o isole adiacenti (esclusa Cuba) e senza aver chiesto un nuovo visto all'estero: **non copre i viaggi in Italia o in Europa** `[US-SRC-99]`. Dopo il 16° mese un viaggio in Italia richiede quindi un nuovo visto con colloquio. Dal 1° ottobre 2025 State ha ristretto le esenzioni dal colloquio: F-1 e J-1 non sono tra le categorie esentabili, quindi anche un rinnovo richiede colloquio in persona `[US-SRC-62]`, `[US-SRC-102]` (avviso aggiornato il 18/09/2025). I tempi di attesa a Roma, Milano, Firenze e Napoli variano: vedi la serie storica nel punto "Tempi" e OQ-25. Anche gli F-2 dei familiari seguono la stessa durata `[US-SRC-49]`. BG/CY/RO: stessa procedura F-1; durata del visto non verificata (OQ-18).
- **Cittadini extra-UE:** Regno Unito, India e Cina: F-1 a 60 mesi `[US-SRC-107]`, `[US-SRC-108]`, `[US-SRC-109]`. Le sedi per India e Cina hanno attese diverse (Pechino 5,5 mesi al 17/09/2026) `[US-SRC-65]`.
- **Requisiti e documenti:** ammissione a una scuola certificata SEVP; modulo I-20 emesso dal DSO (nome e data di nascita devono coincidere col passaporto) `[US-SRC-34]`; prova dei fondi: non esiste una soglia federale, la cifra del primo anno e indicata sull'I-20 `[US-SRC-39]`; passaporto valido; ricevuta SEVIS; conferma DS-160 `[US-SRC-84]`.
- **Procedura passo-passo:**
  1. Ammissione e I-20 `[US-SRC-34]`.
  2. Pagamento SEVIS I-901 (**350 USD**) prima del colloquio: senza pagamento il visto non viene rilasciato `[US-SRC-35]`, `[US-SRC-36]`, `[US-SRC-37]`.
  3. Compilazione DS-160, pagamento MRV (**185 USD**), prenotazione su `ais.usvisa-info.com` `[US-SRC-48]`, `[US-SRC-84]`, `[US-SRC-47]`.
  4. Colloquio in persona, obbligatorio per F/J (nessuna rinuncia al colloquio) `[US-SRC-62]`; revisione della presenza online con profili social impostati come pubblici `[US-SRC-62]`.
  5. Visto rilasciabile fino a 365 giorni prima dell'inizio del corso; arrivo negli USA fino a 30 giorni prima `[US-SRC-34]`.
  6. All'ingresso: I-20, passaporto, fondi; I-94 elettronico; senza documenti in regola CBP puo emettere il modulo I-515A con 30 giorni per sanare `[US-SRC-42]`.
  7. Check-in col DSO subito dopo l'ingresso e comunque entro la data di inizio del programma `[US-SRC-40]`.
- **Dove:** consolato competente per Paese di cittadinanza/residenza: per l'Italia Roma (Lazio, Abruzzo, Sardegna, Umbria, Marche), Milano (Valle d'Aosta, Piemonte, Lombardia, Veneto, Trentino-Alto Adige, Friuli-Venezia Giulia, Liguria e, per l'Emilia-Romagna, Piacenza e Parma), Firenze (Toscana, resto dell'Emilia-Romagna, San Marino), Napoli (Sud e isole) `[US-SRC-85]`; prenotazione solo da portale `[US-SRC-84]`. Se la ripartizione per distretti sia vincolante in fase di prenotazione non e verificato (OQ-27).
- **Lavoro durante gli studi:** on-campus fino a 20 ore settimanali con lezioni in corso, con autorizzazione del DSO `[US-SRC-38]`, `[US-SRC-01]`; off-campus ordinario solo dopo un anno accademico e per casi tipizzati (es. difficolta economica `[US-SRC-01]`); CPT e OPT sono canali distinti (Casi 3 e 10) `[US-SRC-01]`.
- **Costi obbligatori:** SEVIS 350 USD + MRV 185 USD = **535 USD** (EUR 477,51) `[US-SRC-36]`, `[US-SRC-48]`. La tariffa di reciprocita F-1 e zero per Italia, UK, India e Cina `[US-SRC-49]`, `[US-SRC-107]`, `[US-SRC-108]`, `[US-SRC-109]`. La "visa integrity fee" da 250 USD e prevista dalla legge ma non risulta riscossa: non e inclusa (OQ-01) `[US-SRC-58]`.
- **Tempi:** prossimo appuntamento F/M/J disponibile al 17/09/2026: Roma 2 mesi, Milano 2, Napoli e Firenze meno di 0,5 `[US-SRC-65]`; Londra meno di 0,5; New Delhi 2, Mumbai 2,5, Chennai meno di 0,5, Hyderabad 1,5, Kolkata 2; Pechino 5,5, Shanghai 1, Guangzhou 2,5, Shenyang meno di 0,5 `[US-SRC-65]`. I valori cambiano ogni mese. Serie storica F/M/J (prossimo appuntamento, mesi; pagina datata marzo-aprile 2026 / 18/05 / 18/06 / 17/09/2026): Roma meno di 0,5 / 2 / 2,5 / 2; Milano meno di 0,5 / 3 / 2 / 2; Napoli meno di 0,5 / 1,5 / 2,5 / meno di 0,5; Firenze meno di 0,5 / 1 / 1,5 / meno di 0,5 `[US-SRC-65]`. Per luglio-agosto 2026 non esiste una copia leggibile; la missione USA avverte che in estate le attese possono essere consistenti `[US-SRC-85]` (OQ-25).
- **Dopo il corso (stato attuale):** 60 giorni di periodo di grazia dopo il completamento `[US-SRC-46]`. La regola con ammissione a periodo fisso e grazia di 30 giorni e pubblicata ma POSTPOSTA da un tribunale (par. 3).
- **Familiari:** vedi Caso 12.
- **Errori comuni:** pagare il SEVIS su siti non ufficiali (il pagamento e su FMJfee.com `[US-SRC-35]`); arrivare con I-20 di una scuola diversa da quella frequentata `[US-SRC-34]`; confidare nel CPT facoltativo (Caso 3); ignorare che il visto italiano scade a 16 mesi `[US-SRC-49]`; prenotare il colloquio in un Paese dove non si risiede `[US-SRC-61]`.

---

### Caso 5: Tesi / Ricerca all'Estero (Ricerca presso Universita USA)

- **Quadro:** un periodo di ricerca o tesi presso un'universita USA richiede un visto con sponsor; ESTA/VWP e visto B consentono solo riunioni e conferenze, non studio per crediti ne ricerca retribuita `[US-SRC-52]`.
- **Opzioni (tutte le nazionalita, stesse regole):**
  - **J-1 Research Scholar:** fino a 5 anni, sponsor designato `[US-SRC-06]`.
  - **J-1 Short-term Scholar:** fino a 6 mesi, senza proroghe `[US-SRC-07]`.
  - **J-1 College/University Student (non-degree) o Student Intern:** per studenti iscritti all'estero; student intern fino a 12 mesi `[US-SRC-09]`.
  - **F-1 non-degree:** se la ricerca e inserita in un programma di studio con I-20 `[US-SRC-34]`.
- **Cittadini UE / extra-UE:** requisiti identici; per BG/CY/RO e IN/CN l'ingresso breve e con visto B, non ESTA `[US-SRC-52]`.
- **Procedura:** invito dell'ateneo ospitante e DS-2019 (J) o I-20 (F); SEVIS (J **220 USD**, F **350 USD**) `[US-SRC-36]`; DS-160 e MRV **185 USD** `[US-SRC-48]`; colloquio `[US-SRC-84]`; assicurazione J `[US-SRC-05]`.
- **Costi:** per J: 220 + 185 = **405 USD** (EUR 361,48); per F: 535 USD (EUR 477,51) `[US-SRC-36]`, `[US-SRC-48]`.
- **Tempi:** attese colloquio F/M/J nel Caso 4 `[US-SRC-65]`.
- **Errori comuni:** usare l'ESTA per un soggiorno di ricerca; ignorare la residenza di due anni del J-1 (INA 212(e)): chi ne e soggetto non puo chiedere visto immigrante, residenza permanente o visti H e L finche non ha risieduto e soggiornato fisicamente per almeno due anni nel Paese di cittadinanza o di ultima residenza `[US-SRC-131]`; ne e soggetto chi ha un programma finanziato, direttamente o indirettamente, dal governo USA o dal governo del Paese di residenza, chi proviene da un Paese incluso nella Skills List e chi fa formazione medica specialistica; la regola si estende a coniuge e figli J-2, e il console deve comunicarla prima del visto `[US-SRC-132]`. Si verifica caso per caso sul DS-2019; l'OPT e un beneficio F-1 e non riguarda il J-1 `[US-SRC-28]`. Il caso del Fulbright e in OQ-15.

---

### Caso 6: Erasmus+ e Scambi Universitari Bilaterali

- **Erasmus+ non esiste come status USA.** Non esiste un visto o programma "Erasmus" statunitense. L'equivalente piu vicino e lo **scambio bilaterale** tra universita, con visto F-1 (I-20 dell'ateneo ospitante) oppure J-1 College/University Student (DS-2019 dello sponsor) per la durata del programma `[US-SRC-09]`, `[US-SRC-34]`. Nella Guida Erasmus+ gli USA non sono ne Paese del programma ne Paese terzo associato: compaiono nella Regione 12 dei Paesi terzi non associati, ammessi solo ad alcune azioni `[US-SRC-133]`; se un ateneo possa finanziare una mobilita verso gli USA dipende dall'azione e dal bando (OQ-16).
- **ESTA/VWP non e utilizzabile** per lo scambio, perche lo studio per crediti e escluso `[US-SRC-52]`.
- **UE / extra-UE:** procedura identica a Caso 4 (F-1) o Caso 5 (J-1); costi SEVIS 350 USD (F) o 220 USD (J) + MRV 185 USD `[US-SRC-36]`, `[US-SRC-48]`.
- **Tempi e errori comuni:** attese nel Caso 4 `[US-SRC-65]`; l'errore tipico e arrivare con ESTA per un semestre di scambio.

---

### Caso 7: Master (con Focus STEM)

- **Percorso:** F-1 come Caso 4. Il master e tipicamente il livello che apre a OPT e STEM OPT `[US-SRC-28]`, `[US-SRC-29]`.
- **Come si verifica la qualifica STEM:** conta il codice CIP del programma, riportato su I-20/SEVIS, non il nome del corso `[US-SRC-30]`. Nell'elenco DHS del 22/07/2024 (ultimo disponibile) tra i codici di business compaiono solo 52.1301, 52.1302, 52.1304 e 52.1399; 52.0801 (Finance) non e presente; sono presenti 27.0305 (Financial Mathematics), 45.0603 (Econometrics) e 03.0204 (Environmental/Natural Resource Economics) `[US-SRC-30]`, `[US-SRC-31]`. Al 07/10/2026 non risulta alcun elenco piu recente: l'unico avviso nel Federal Register e del 23/07/2024 e Study in the States indica che gli aggiornamenti sono pubblicati nel Federal Register `[US-SRC-31]`, `[US-SRC-127]`; la pagina ICE "Practical Training" rimanda ancora all'elenco del 2022, che e obsoleto `[US-SRC-128]`.
- **H-1B:** il titolo europeo non da accesso alle 20.000 posizioni per master USA `[US-SRC-17]`; un master USA si.
- **Se la regola a periodo fisso entrasse in vigore:** chi completa un programma negli USA non potrebbe ottenere un nuovo F-1 allo stesso livello o a uno inferiore, e gli studenti graduate non potrebbero cambiare obiettivo o trasferirsi `[US-SRC-11]` (par. 3).
- **Costi e tempi:** come Caso 4.
- **Errori comuni:** assumere che il nome "Master in Finance" implichi STEM (conta il CIP) `[US-SRC-30]`; scegliere il master solo per l'OPT senza considerare le incertezze del par. 3.

---

### Caso 8: Dottorato di Ricerca (PhD)

- **Percorso:** F-1 (o J-1 per borse specifiche), con contratti di assistentato (RA/TA) autorizzati dal DSO come lavoro on-campus `[US-SRC-38]`, `[US-SRC-01]`.
- **Fiscalita:** F/J/M non residenti per meno di 5 anni solari sono esenti da contributi Social Security e Medicare (FICA) sul lavoro consentito `[US-SRC-78]`; si presenta ogni anno il modulo 8843, e il 1040-NR solo se esistono redditi USA imponibili `[US-SRC-79]`, `[US-SRC-80]`; esiste un trattato fiscale Italia-USA (testi sul sito IRS; il contenuto per studenti non e verificato qui) `[US-SRC-81]`.
- **Se la regola a periodo fisso entrasse in vigore:** ammissione massima di 4 anni per ciclo e necessita di proroga (EOS) per dottorati piu lunghi; nessun trasferimento per i graduate `[US-SRC-11]`.
- **Altro:** SEVIS e MRV come Caso 4; J-1 e residenza di due anni: vedi Caso 5 e OQ-15 `[US-SRC-131]`, `[US-SRC-132]`.
- **Errori comuni:** pensare che l'esenzione FICA valga oltre i 5 anni solari o per i familiari F-2/J-2 `[US-SRC-78]`; non presentare il modulo 8843 `[US-SRC-79]`.

---

### Caso 9: Working Holiday / Vacanza-Lavoro

- **Non esiste un visto working holiday negli Stati Uniti.** Tra le categorie ufficiali consultate (F, J, H, L, O, E, TN) non compare alcun accordo di vacanza-lavoro `[US-SRC-10]`, `[US-SRC-77]` (la verifica dell'assenza e un'osservazione negativa: OQ-16). Lavorare in vacanza con ESTA o visto B e lavoro non autorizzato `[US-SRC-52]`.
- **Alternativa piu vicina: J-1 Summer Work Travel (SWT).** Studenti a tempo pieno iscritti a un ateneo estero; durata massima del programma 4 mesi, nel periodo di pausa tra anni accademici, senza proroghe; il partecipante deve rientrare prima dell'inizio del proprio semestre; impiego stagionale assegnato tramite sponsor `[US-SRC-10]`, `[US-SRC-77]`.
- **UE / extra-UE:** requisiti identici; BG/CY/RO e IN/CN passano comunque dal colloquio J-1 `[US-SRC-84]`.
- **Procedura:** sponsor SWT, DS-2019, SEVIS (tariffa agevolata **35 USD** per le categorie speciali J), DS-160, MRV **185 USD**, colloquio `[US-SRC-36]`, `[US-SRC-48]`.
- **Costi:** 35 + 185 = **220 USD** (EUR 196,36) `[US-SRC-36]`, `[US-SRC-48]`; costi di sponsor non fissati da fonte ufficiale (OQ-14).
- **Errori comuni:** considerare l'ESTA un "working holiday"; accettare offerte non intermediate da uno sponsor designato (truffa frequente, par. 6) `[US-SRC-83]`.

---

### Caso 10: Lavoro Post-Studio (OPT, STEM OPT, Cap-Gap)

- **Quadro:** OPT e un'autorizzazione al lavoro per F-1 con titolo USA `[US-SRC-28]`; non e disponibile a chi non ha studiato negli USA (alternativa: J-1 Intern/Trainee, Caso 3) `[US-SRC-28]`, `[US-SRC-08]`.
- **OPT post-completion:** fino a 12 mesi (somma pre- e post-completion), lavoro correlato al campo di studio; ammesse fino a 90 giorni di disoccupazione `[US-SRC-28]`, `[US-SRC-29]`. La deduzione dell'OPT pre-completion e proporzionale: 1 anno part-time riduce di 6 mesi quella post-completion `[US-SRC-28]`.
- **Domanda:** raccomandazione del DSO nel SEVIS e modulo I-765 entro 30 giorni dalla raccomandazione, dal 90.mo giorno prima al 60.mo dopo la fine del programma `[US-SRC-28]`. Il periodo di 60 giorni dopo il completamento e quello in vigore oggi `[US-SRC-46]`. Tariffa I-765: **520 USD** su carta e **470 USD** online (sconto di 50 USD) `[US-SRC-02]`, `[US-SRC-03]`; premium processing facoltativo **1.780 USD** `[US-SRC-04]`. L'I-765 si puo depositare online con account USCIS per OPT pre-completion (c)(3)(A), post-completion (c)(3)(B) ed estensione STEM di 24 mesi (c)(3)(C); l'I-907 (premium processing) e disponibile per questi casi `[US-SRC-124]`, `[US-SRC-125]`.
- **STEM OPT (24 mesi aggiuntivi):** titolo nell'elenco STEM DHS, datore iscritto a E-Verify, piano di formazione I-983; disoccupazione totale fino a 150 giorni (90 + 60); se la domanda e depositata in tempo, continuita automatica del lavoro per 180 giorni in attesa `[US-SRC-29]`, `[US-SRC-30]`. Un titolo STEM piu alto consente una seconda estensione `[US-SRC-29]`. Il datore comunica le variazioni entro 10 giorni e lo studente convalida ogni 6 mesi `[US-SRC-29]`. **Retribuzione obbligatoria:** durante lo STEM OPT durata, orario e retribuzione devono essere commisurati a quelli dei lavoratori statunitensi comparabili e il datore deve avere con lo studente un rapporto di lavoro dipendente genuino, attestato nell'I-983; ne consegue che uno stage non retribuito non è compatibile con lo STEM OPT `[US-SRC-01]`, `[US-SRC-29]`. **Forme contrattuali:** lo studente non puo lavorare come volontario e il datore non puo esserlo solo di nome `[US-SRC-29]`; il preambolo della regola finale del 2016 esclude volontariato, imprese individuali, agenzie temp e societa di consulenza che forniscono manodopera, e lo studente non puo firmare per se stesso le attestazioni del datore; le start-up sono ammesse se rispettano tutti i requisiti (compenso commisurato, E-Verify, piano formativo) `[US-SRC-122]`. Il termine "1099" non compare nelle fonti ufficiali: la formulazione corretta e "rapporto di lavoro dipendente genuino, non collaborazione autonoma o volontariato".
- **Cap-gap:** se un datore deposita in tempo una H-1B con cambio di status, status e autorizzazione al lavoro dell'F-1 proseguono fino al 1 aprile dell'anno fiscale successivo (o finche la domanda non e decisa) `[US-SRC-33]`, `[US-SRC-32]`, `[US-SRC-01]`, `[US-SRC-28]`. Il cambio di status dall'F-1 non e coperto dal pagamento da 100.000 USD se viene concesso; lo e se viene negato o se il richiedente lascia gli USA prima della decisione `[US-SRC-15]` (par. 3).
- **J-1 academic training:** fino a 18 mesi dopo gli studi, o per la durata del corso se piu breve; fino a 36 mesi per post-doc `[US-SRC-09]`.
- **Viaggi:** Study in the States chiede un I-20 firmato dal DSO entro l'ultimo anno e un'assenza non superiore a 5 mesi; con practical training pendente il viaggio e sconsigliato e con OPT approvato serve l'EAD fisico per rientrare `[US-SRC-41]`. La FAQ SEVP aggiunge che con OPT approvato servono EAD, I-20, passaporto, visto e, se c'e, lettera del datore, e che superando i limiti di disoccupazione all'estero non si rientra in F-1 `[US-SRC-123]`. Per l'EAD post-completion il regolamento chiede un I-20 firmato negli ultimi 6 mesi `[US-SRC-01]`: finche la soglia per lo STEM OPT non e chiarita, usare la piu prudente (OQ-30).
- **Costi:** I-765 520 USD (EUR 464,12) oppure 470 USD online (EUR 419,49) `[US-SRC-02]`, `[US-SRC-03]`.
- **Tempi:** i tempi di elaborazione USCIS non sono verificati (OQ-22).
- **Errori comuni:** superare 150 giorni di disoccupazione `[US-SRC-29]`; fare 12 mesi o piu di CPT a tempo pieno, che esclude l'OPT post-completion `[US-SRC-01]`; ignorare le finestre di domanda `[US-SRC-28]`.
- **Pendente:** una proposta DHS sulle tariffe OPT (RIN 1653-AB01) ha chiuso la revisione OIRA l'11/09/2026 ma non e pubblicata `[US-SRC-27]`; importo e contenuto: OQ-04. Una proposta separata sul "Practical Training" (RIN 1653-AA97) e nell'Agenda unificata con pubblicazione prevista per 02/2027 `[US-SRC-135]`. Nessuna regola in vigore limita l'OPT alla data del 07/10/2026.

---

### Caso 11: Soggiorni Brevi (ESTA / Visto B)

- **Cittadini UE nel VWP (Italia e altri 23 Stati UE) e UK con right of abode:** fino a 90 giorni per turismo o affari con **ESTA**; vietati studio per crediti e lavoro; consentiti corsi ricreativi non per crediti e formazione breve non retribuita `[US-SRC-52]`. **Nessun cambio di status in loco:** chi entra con ESTA non può chiedere il cambio di classificazione di non immigrante (INA 248(a)(4), 8 U.S.C. 1258(a)(4)) `[US-SRC-100]`. Svolgere subito dopo l'ingresso attività incompatibili con lo status VWP può essere considerato elusione: la regola dei 90 giorni e descritta qui sotto.
  - ESTA: richiederla su `esta.cbp.dhs.gov` almeno 72 ore prima del viaggio `[US-SRC-86]`. Costo **40,27 USD** (EUR 35,94) fino al 15/10/2026 e **40,62 USD** (EUR 36,25) dal 16/10/2026; ESTA negata: 10,62 USD (EUR 9,48) `[US-SRC-55]`, `[US-SRC-56]`.
  - Perdono l'accesso al VWP: doppia cittadinanza di Cuba, Corea del Nord, Iran, Iraq, Sudan o Siria, e viaggi in Iran, Iraq, Libia, Somalia, Sudan, Siria, Yemen dal 2011 o a Cuba dal 12/01/2021 `[US-SRC-52]`.
  - **Regola dei 90 giorni (9 FAM 302.9-4):** se entro 90 giorni dalla domanda di visto o dall'ammissione si svolgono attivita incompatibili con lo status (es. lavoro non autorizzato con B-1/B-2), il console puo presumere una falsa dichiarazione intenzionale; la persona ha diritto di replica e l'onere di dimostrare l'intenzione coerente e suo `[US-SRC-136]`. Oltre i 90 giorni non c'e presunzione automatica ma resta l'analisi ordinaria `[US-SRC-136]`. La conseguenza e l'inammissibilita ex INA 212(a)(6)(C)(i), senza scadenza fissa salvo deroga `[US-SRC-137]`. Il manuale non parla di una "regola dei 90 giorni dell'ESTA" in quanto tale: e una presunzione usata dal console, non un divieto.
  - **Validita dell'ESTA:** di norma 2 anni o fino alla scadenza del passaporto se anteriore; nuova domanda se cambia il passaporto `[US-SRC-93]`. L'obbligo di indicare i social degli ultimi 5 anni e solo una proposta (avviso a 60 giorni del 10/12/2025, commenti fino al 09/02/2026): nessun avviso finale risulta nel Federal Register e ne la FAQ ne la pagina ESTA lo menzionano `[US-SRC-54]`, `[US-SRC-93]`, `[US-SRC-117]` (OQ-10).
- **BG/CY/RO e extra-UE senza VWP (India, Cina):** visto B-1/B-2, **MRV 185 USD** (EUR 165,12) `[US-SRC-48]`; colloquio in persona (eccezione solo per rinnovi B entro 12 mesi dalla scadenza) `[US-SRC-62]`; B-1/B-2 con validita di 120 mesi per Italia, UK, India e Cina (Bulgaria, Cipro, Romania: OQ-18) `[US-SRC-49]`, `[US-SRC-107]`, `[US-SRC-108]`, `[US-SRC-109]`. Attese B1/B2 al 17/09/2026 (prossimo appuntamento): Roma 3 mesi, Milano 4, Londra 1, New Delhi 10, Pechino 4,5 `[US-SRC-65]`.
- **Visa bond (10.000/15.000/20.000 USD):** richiesto solo ai B-1/B-2 di Paesi in elenco; Italia, UK, India, Cina, Bulgaria, Cipro e Romania non sono in elenco al 02/10/2026 `[US-SRC-59]`, `[US-SRC-60]`.
- **Pilot appuntamento rapido B (750 USD):** non disponibile in Italia; fino al 31/12/2026 `[US-SRC-66]`, `[US-SRC-67]`.
- **Ingresso:** I-94 elettronico; alla frontiera terrestre 30 USD, nessuna tassa I-94 per gli arrivi in aeroporto o in porto marittimo `[US-SRC-42]`, `[US-SRC-55]`. Cinesi con visto B a 10 anni: iscrizione EVUS 30,75 USD, 31,75 dal 16/10/2026 `[US-SRC-55]`.
- **Errori comuni:** ESTA per chi ha doppia cittadinanza esclusa; ESTA richiesta su siti terzi a pagamento `[US-SRC-93]`; credere che Romania, Bulgaria e Cipro siano nel VWP `[US-SRC-52]`, `[US-SRC-53]`.

---

### Caso 12: Familiari

- **F-2/M-2 (familiari di studenti):** I-20 per ciascun familiare; nessuna tariffa SEVIS per i familiari; non possono lavorare; nessun SSN; studio solo part-time `[US-SRC-45]`, `[US-SRC-37]`. La durata del visto F-2 segue quella F-1 (Italia 16 mesi) `[US-SRC-49]`. L'esenzione FICA non vale per F-2/J-2 `[US-SRC-78]`.
- **J-2 (familiari di J-1):** esenti dalla tariffa SEVIS `[US-SRC-37]`; l'assicurazione J vale anche per J-2 `[US-SRC-05]`; coniuge e figli non sposati sotto i 21 anni del J-1 hanno diritto alla classificazione J-2 e possono richiedere l'autorizzazione al lavoro (EAD, modulo I-765), ma il reddito non puo essere usato per mantenere il titolare J-1 (8 CFR 274a.12(c)(5)) `[US-SRC-98]`, `[US-SRC-119]`. La durata massima dell'EAD J-2 non e sulla pagina USCIS letta (OQ-11).
- **L-2 (familiari di L-1):** stessa durata dell'L-1 `[US-SRC-68]`; i coniugi di L-1 in status L-2S sono autorizzati al lavoro per effetto dello status stesso, senza EAD: l'I-94 riporta il codice L-2S dal 30/01/2022 `[US-SRC-68]`.
- **H-4 (familiari di H-1B):** non hanno autorizzazione automatica al lavoro; i coniugi H-4 possono richiedere l'EAD (8 CFR 274a.12(c)(26)) solo se il titolare H-1B principale ha una petizione I-140 approvata per la residenza permanente o ha ottenuto un'estensione oltre i 6 anni ai sensi dell'AC21 106(a)-(b) `[US-SRC-98]`, `[US-SRC-118]`; l'EAD (I-766) va ricevuto prima di lavorare e scade in genere con l'I-94 H-4 `[US-SRC-118]`.
- **K-1 (fidanzato/a di cittadino USA):** petizione I-129F, matrimonio entro 90 giorni; MRV K **265 USD** (EUR 236,52) `[US-SRC-92]`, `[US-SRC-48]`.
- **Coniuge di cittadino USA:** e parente immediato, quindi senza limite numerico di visti `[US-SRC-120]`; se vive all'estero si presenta l'I-130 e il caso passa al consolato; se il matrimonio ha meno di 2 anni alla concessione la residenza e condizionale e si rimuove con l'I-751 `[US-SRC-121]` (pagina USCIS datata 02/02/2018: da trattare con cautela). Le sigle CR-1/IR-1 e i tempi non sono sulle pagine USCIS lette (OQ-11).
- **Errori comuni:** pianificare che il coniuge F-2 lavori; presumere SSN per i familiari `[US-SRC-45]`.



---

## 3. Sospeso e Pendente (riquadro di stato)

> **Riquadro "sospeso e pendente" (stato al 07/10/2026; docket giudiziari letti fino al 06/10/2026).** Ogni riga distingue cio che e in vigore da cio che e solo pubblicato, proposto o impugnato. Rileggere i docket prima di ogni uso.

### 3.1 Regola dell'ammissione a periodo fisso per F, J, I (fine della "duration of status")

- **Pubblicata, ma posposta.** La regola finale e stata pubblicata il 17/07/2026 con effetto previsto dal 15/09/2026 `[US-SRC-11]`. Il 14/09/2026 il tribunale del Massachusetts (ECF 50) ha **posposto la data di efficacia** ai sensi del 5 U.S.C. 705, con effetto nazionale e in attesa del merito; l'annullamento (vacatur) e stato negato senza pregiudizio `[US-SRC-12]`.
- **Appello:** il DHS ha depositato appello il 30/09/2026 (ECF 53); la corte d'appello l'ha registrato come n. 26-2112 il 01/10/2026; udienza di status il 02/10; le parti devono depositare un calendario entro il 09/10/2026 e il docketing statement in appello e dovuto entro il 15/10/2026; fino al 06/10/2026 non risulta alcuna richiesta di sospensione ne in primo grado ne in appello `[US-SRC-12]`, `[US-SRC-13]` (il caricamento dei docket puo ritardare: OQ-06). Nessun avviso nel Federal Register sulla posposizione, e la pagina SEVP "What's New" cita ancora solo la regola finale del 17/07/2026: non va usata come prova dello stato `[US-SRC-143]`.
- **Cosa vale oggi:** ammissione per "durata dello status" (D/S) e periodo di grazia di **60 giorni** dopo il completamento degli studi `[US-SRC-46]`, `[US-SRC-12]`. Non citare l'eCFR come prova della regola in vigore: la sua copia riporta gia il testo nuovo `[US-SRC-01]`.
- **Se la regola dovesse entrare in vigore** (solo condizionale): ammissione fino alla fine del programma e comunque non oltre 4 anni (24 mesi complessivi per i corsi di lingua); grazia di 30 giorni; domanda di proroga (EOS, modulo I-539, **470 USD**, con biometria) per chi deve restare oltre `[US-SRC-11]`, `[US-SRC-02]`; gli studenti graduate non potrebbero trasferirsi o cambiare obiettivo se non per circostanze eccezionali; chi ha completato un programma negli USA non potrebbe ottenere un nuovo F-1 allo stesso livello o a un livello inferiore; un periodo transitorio di 6 mesi esonererebbe dall'EOS chi chiede OPT/STEM OPT; il DHS potrebbe sospendere alcune disposizioni fino al 14/09/2028 `[US-SRC-11]`.
- **Non confondere** con la proposta del 11/09/2026 di eliminare la grazia di 60 giorni dopo la perdita del lavoro per alcuni lavoratori (H-1B, L, O, E, TN): e un'altra norma, solo proposta, commenti fino al 10/11/2026 `[US-SRC-14]`.

### 3.2 H-1B: pagamento da 100.000 USD e tariffa proposta da 103.265 USD

- **Proclamazione 11069:** estende la restrizione fino al 21/09/2027 (efficace dal 21/09/2026 ore 12:01 EDT, durata 12 mesi); il pagamento e stato effettuato per oltre 700 petizioni dal 21/09/2025 `[US-SRC-19]`.
- **Policy attuative vacate:** D. Mass. l'08/06/2026 (con rigetto di sospensione in appello il 24/07/2026) e N.D. Cal. il 30/09/2026, che ha vacato e inibito le policy attuative delle Proclamazioni 10973 e 11069 fino a rulemaking con notice-and-comment; l'ordine afferma che la tariffa da 100.000 USD "non e piu in vigore" `[US-SRC-15]`, `[US-SRC-22]`, `[US-SRC-21]`. L'ordinanza ha anche respinto la richiesta di cauzione e di sospensione in appello e la mozione di rigetto, e negato senza pregiudizio la certificazione della classe `[US-SRC-21]`. La pagina USCIS (aggiornata il 21/09/2026, riletta il 07/10/2026 senza modifiche) precede l'ordine del 30/09, non cita ne la Proclamazione 11069 ne l'EO 14431, dice che il DHS "will comply" e che intende riscuotere se il vacatur cade `[US-SRC-15]`.
- **Appelli pendenti:** 1st Cir. n. 26-1699 nel merito; D.C. Cir. n. 25-5473 (discusso il 09/03/2026, nessuna decisione al 06/10/2026); udienza di gestione a N.D. Cal. il 27/10/2026 (memoria entro il 20/10) `[US-SRC-22]`, `[US-SRC-23]`, `[US-SRC-21]` (OQ-07). Nel 1st Cir. la memoria degli appellanti e dell'08/09/2026, quella dei 20 Stati e dovuta il 04/11/2026, senza data di discussione ne decisione `[US-SRC-142]`; al D.C. Cir. sono state depositate lettere 28(j) il 25/09 e il 06/10/2026 che citano l'ordine N.D. Cal. `[US-SRC-23]`. Nessun appello al 9th Cir. risulta al 06/10/2026 `[US-SRC-21]`.
- **EO 14431 (18/09/2026, 91 FR 60501):** "Enhancing Program Integrity and Interagency Coordination in the Administration of the H-1B Nonimmigrant Visa Program": State, DOL e DHS devono tenere conto, in LCA, petizioni, visti e ingressi, dei licenziamenti del datore nell'ultimo anno o previsti che toccano lavoratori USA analoghi; entro 30 giorni il DOL (Wage and Hour) avvia il riesame dei dati LCA ai sensi di INA 212(n)(2)(G); delega l'autorita ex INA 215(a) per norme e linee guida. Non introduce tariffe ne nuovi divieti `[US-SRC-138]`.
- **Trappola del cambio di status:** USCIS dice che il pagamento non si applica al cambio di status concesso (es. F-1 a H-1B), ma si applica se la richiesta e negata o il richiedente lascia gli USA prima della decisione, oppure se si chiede notifica consolare `[US-SRC-15]`.
- **Tariffa proposta da 103.265 USD:** la proposta DHS del 25/08/2026 riguarda tutte le petizioni H-1B soggette a cap, anche per master USA, e si aggiungerebbe alle altre tariffe; commenti chiusi il 24/09/2026; non e legge e non risulta una regola finale al 07/10/2026; la correzione del 10/09/2026 (91 FR 57516) sostituisce solo la Tabella 13 delle ricevute I-129 H-1B `[US-SRC-20]`, `[US-SRC-141]`. Nel testo letto non risulta un'eccezione per il cambio di status in loco: gli ex F-1 non sarebbero protetti `[US-SRC-20]`.

### 3.3 CPT (stage curricolare F-1)

- Le circolari SEVP 2608-01 (12/08/2026) e 2608-02 (24/08/2026) limitano il CPT ai corsi in cui la formazione pratica e obbligatoria per tutti gli studenti; il testo del CPT in 8 CFR 214.2(f)(10) non e cambiato `[US-SRC-24]`, `[US-SRC-25]`, `[US-SRC-01]`.
- Ricorso AAU, Presidents' Alliance, AICUM e NAFSA v. DHS (n. 1:26-cv-14520, D. Mass.), depositato il 05/10/2026, con istanza di sospensione e ingiunzione preliminare (ECF 8, memoria ECF 18 del 06/10): nessuna decisione, nessun calendario ne udienza visibili `[US-SRC-26]` (OQ-05).
- Le due circolari restano online e non risultano ritirate: i PDF sono raggiungibili al 07/10/2026 con data di ultima modifica uguale a quella di emissione (12/08 e 24/08/2026) `[US-SRC-24]`, `[US-SRC-25]`.

### 3.4 OPT, tariffe e altri atti in sospeso

- **OPT e STEM OPT restano in vigore invariati.** Una proposta di regola sulle tariffe OPT (RIN 1653-AB01) ha concluso la revisione OIRA l'11/09/2026 ed e economicamente rilevante, ma non risulta pubblicata nel Federal Register ne in Public Inspection al 07/10/2026; l'importo non e noto `[US-SRC-27]` (OQ-04). La proposta separata "Practical Training" (RIN 1653-AA97, 8 CFR 214) e nell'Agenda unificata con pubblicazione prevista per 02/2027, senza revisione OIRA in corso `[US-SRC-135]`.
- **Visa integrity fee (250 USD):** prevista dalla legge `[US-SRC-58]`; l'avviso del 22/07/2025 la rimanda a una "pubblicazione futura" `[US-SRC-57]`; la pagina tariffe del dipartimento di Stato non la elenca `[US-SRC-48]`; l'adeguamento FY2027 delle tariffe HR-1 del 01/10/2026 non la menziona `[US-SRC-115]`. Non e inclusa nei totali (OQ-01).
- **EAD:** dal 30/10/2025 e finita l'estensione automatica degli EAD in caso di rinnovo tempestivo per alcune categorie; non incide su quanto esteso per legge o per avviso `[US-SRC-91]`.
- **Proposta J-1 (RIN 1400-AF23, 30/07/2026):** il dipartimento di Stato potrebbe terminare a sua discrezione un programma J (per esempio con visto revocato), riscriverebbe proroga (domanda 90 giorni prima della fine) e reinstatement e definirebbe "Unauthorized Employment" e "Valid Program Status"; commenti chiusi, nessuna regola finale `[US-SRC-95]`.
- **Prevailing wage DOL (proposta del 27/03/2026):** alzerebbe i livelli salariali OEWS per PERM, H-1B, H-1B1 ed E-3 dai percentili 17/34/50/67 a 34/52/70/88; commenti chiusi il 26/05/2026, nessuna regola finale `[US-SRC-96]`.
- **Deposito online USCIS (IFR dell'11/08/2026):** USCIS puo imporre il deposito online dei moduli che annuncia sul sito con almeno 60 giorni di preavviso; la regola non indica moduli obbligatori; prevede un modulo di deroga I-936 da 25 USD (EUR 22,31); commenti fino al 13/10/2026 `[US-SRC-97]`.
- **Atti all'esame di OIRA, non pubblicati:** DHS/USCIS "Reforming the H-1B Nonimmigrant Visa Classification Program" (RIN 1615-AD00, proposta economicamente rilevante, ricevuta il 24/08/2026) `[US-SRC-139]` e DOL "Modernizing the Labor Market Test ... PERM" (RIN 1205-AC29, proposta, ricevuta il 14/09/2026) `[US-SRC-140]`; il contenuto non e pubblico e la pubblicazione potrebbe essere imminente.
- **Presenza online:** dal 1° ottobre (la pagina, datata 18/09/2026, non stampa l'anno) la revisione si estende a I, TN e TD, con profili da impostare come pubblici; era gia applicata ad A-3, C-3 (domestici), G-5, F, M, J, H-1B, H-3, H-4, K, Q, R, S, T, U `[US-SRC-103]` (OQ-03).
- **Grazia di 60 giorni dopo la perdita del lavoro:** l'eliminazione (8 CFR 214.1(l)(2)) e solo una proposta dell'11/09/2026; commenti fino al 10/11/2026, nessuna regola finale; la grazia vigente resta applicabile `[US-SRC-14]` (OQ-13).
- **Tariffa 9-11 per le petizioni di proroga:** in vigore dal 09/09/2026 per i datori "covered" (par. 4) `[US-SRC-87]`.
- **Diversity Visa:** dal 31/08/2026 nessun visto DV viene rilasciato; DV-2027: data di iscrizione da annunciare `[US-SRC-104]`, `[US-SRC-105]` (OQ-12).
- **ESTA:** aumento a 40,62 USD dal 16/10/2026 `[US-SRC-55]`.
- **Restrizioni d'ingresso per 39 Paesi (Proclamazione 10998):** non riguardano Italia, UK, India, Cina, BG/CY/RO; la pagina State e datata 02/02/2026 e nel Federal Register fino al 07/10/2026 non risultano proclamazioni che la modifichino `[US-SRC-63]`, `[US-SRC-64]` (OQ-23).


---

## 4. Riepilogo Costi: Obbligatori vs Facoltativi

Tutti gli importi sono in USD (valore giuridicamente rilevante). Gli importi in EUR usano il tasso di riferimento BCE del **05/10/2026: 1,1204 USD per EUR** `[US-SRC-88]` (sensibilita: con 1,1269 del 06/10/2026 la somma F-1 certa e EUR 474,75); arrotondamento al centesimo. Tutte le somme sono state ricalcolate.

### 4.1 Costi governativi a carico del richiedente (percorsi principali)

| Voce | Obbligatoria | USD | EUR | Note e fonte |
| :--- | :---: | ---: | ---: | :--- |
| SEVIS I-901 F/M | Si | 350 | 312,39 | prima del colloquio `[US-SRC-36]` |
| MRV non-petition (B, F, M, J, TN) | Si | 185 | 165,12 | non rimborsabile `[US-SRC-48]` |
| Reciprocita F-1 (Italia, UK, India, Cina) | Si | 0 | 0,00 | nessuna tariffa `[US-SRC-49]` |
| **Totale F-1 certo** | Si | 535 | 477,51 | 350 + 185 + 0 `[US-SRC-36]` |
| SEVIS I-901 J-1 | Si | 220 | 196,36 |  `[US-SRC-36]` |
| **Totale J-1 (Intern/Trainee/Research/Student)** | Si | 405 | 361,48 | 220 + 185 `[US-SRC-36]` |
| SEVIS I-901 J agevolato (SWT, au pair, camp) | Si | 35 | 31,24 | categorie speciali `[US-SRC-36]` |
| **Totale J-1 Summer Work Travel** | Si | 220 | 196,36 | 35 + 185 `[US-SRC-36]` |
| MRV visti basati su petizione (H, L, O, P, Q, R) | Si | 205 | 182,97 |  `[US-SRC-48]` |
| Reciprocita Italia H-1B | Si | 153 | 136,56 | 60 mesi `[US-SRC-49]` |
| **Totale Italia H-1B** | Si | 358 | 319,53 | 205 + 153 `[US-SRC-49]` |
| **Totale UK, India o Cina H-1B (nessuna reciprocita)** | Si | 205 | 182,97 | UK 60 mesi, India 35, Cina 12 `[US-SRC-107]`, `[US-SRC-108]`, `[US-SRC-109]` |
| Reciprocita Italia L-1 | Si | 308 | 274,90 |  `[US-SRC-49]` |
| **Totale Italia L-1** | Si | 513 | 457,87 | 205 + 308 `[US-SRC-49]` |
| Reciprocita Cina L-1 | Si | 105 | 93,72 |  `[US-SRC-109]` |
| **Totale Cina L-1** | Si | 310 | 276,69 | 205 + 105 `[US-SRC-109]` |
| MRV visto E | Si | 315 | 281,15 |  `[US-SRC-48]` |
| Reciprocita Italia E-1/E-2 | Si | 198 | 176,72 | 60 mesi `[US-SRC-49]` |
| **Totale Italia E-1/E-2** | Si | 513 | 457,87 | 315 + 198 `[US-SRC-49]` |
| **Totale Italia O-1** | Si | 205 | 182,97 | 205 + 0 `[US-SRC-49]` |
| MRV K-1 | Si | 265 | 236,52 |  `[US-SRC-48]` |
| ESTA fino al 15/10/2026 | Si | 40,27 | 35,94 | visita VWP `[US-SRC-55]` |
| ESTA dal 16/10/2026 | Si | 40,62 | 36,25 | visita VWP `[US-SRC-55]` |
| Visto B-1/B-2 (BG/CY/RO, IN, CN) | Si | 185 | 165,12 | MRV `[US-SRC-48]` |

### 4.2 Costi facoltativi o condizionati

| Voce | Obbligatoria | USD | EUR | Note e fonte |
| :--- | :---: | ---: | ---: | :--- |
| I-765 OPT su carta | Condiz. | 520 | 464,12 | obbligatoria se si chiede OPT `[US-SRC-02]` |
| I-765 OPT online | Condiz. | 470 | 419,49 | 520 - 50 `[US-SRC-03]` |
| Premium processing I-765 | No | 1.780 | 1.588,72 | facoltativa `[US-SRC-04]` |
| Premium processing I-129 H-1B/E/L/O | No | 2.965 | 2.646,38 | facoltativa, 15 giorni lavorativi `[US-SRC-04]` |
| Premium processing I-539 F/J/M | No | 2.075 | 1.852,02 | facoltativa `[US-SRC-04]` |
| ESTA negata (solo se richiesta rifiutata) | Condiz. | 10,62 | 9,48 | FY2027 `[US-SRC-55]` |
| I-94 frontiera terrestre | Condiz. | 30 | 26,78 | solo ingresso via terra; nessuna tassa per arrivi aerei o marittimi `[US-SRC-55]` |
| EVUS (solo CN con visto B 10 anni) dal 16/10/2026 | Condiz. | 31,75 | 28,34 | 30,75 fino al 15/10/2026 `[US-SRC-55]` |
| Appuntamento B rapido (non in Italia) | No | 750 | 669,40 | fino al 31/12/2026 `[US-SRC-67]` |
| I-539 proroga (solo se la regola a periodo fisso entra in vigore) | Condiz. | 470 | 419,49 | par. 3.1 `[US-SRC-02]` |

### 4.3 Costi del datore di lavoro per una petizione H-1B soggetta a cap (informativo)

| Voce | Obbligatoria | USD | EUR | Note e fonte |
| :--- | :---: | ---: | ---: | :--- |
| Registrazione H-1B | Si | 215 | 191,90 | per registrazione `[US-SRC-16]` |
| I-129 H-1B | Si | 780 | 696,18 |  `[US-SRC-02]` |
| ACWIA training fee (importo standard) | Si | 1.500 | 1.338,81 | importo ridotto 750 USD per datori con 25 o meno dipendenti a tempo pieno (INA 214(c)(9)(B)) `[US-SRC-02]`, `[US-SRC-101]` |
| Fraud prevention fee | Si | 500 | 446,27 |  `[US-SRC-02]` |
| Asylum Program Fee (importo standard) | Si | 600 | 535,52 |  `[US-SRC-02]` |
| **Stack H-1B datore standard (senza registrazione)** | Si | 3.380 | 3.016,78 | 780 + 1.500 + 500 + 600 `[US-SRC-02]` |
| **Stack con registrazione** | Si | 3.595 | 3.208,68 | 3.380 + 215 `[US-SRC-02]` |
| I-129 L | Si | 1.385 | 1.236,17 |  `[US-SRC-02]` |
| I-129 O | Si | 1.055 | 941,63 |  `[US-SRC-02]` |
| 9-11 fee H-1B (solo datori 'covered': 50+ dipendenti, >50% H-1B/L-1) | Condiz. | 4.000 | 3.570,15 | petizioni fino al 30/09/2027 `[US-SRC-87]` |
| 9-11 fee L-1 (stessi datori) | Condiz. | 4.500 | 4.016,42 |  `[US-SRC-87]` |

### 4.4 Importi NON dovuti oggi o non confermati (non sommare)

| Voce | USD | EUR | Stato e fonte |
| :--- | ---: | ---: | :--- |
| Pagamento Proclamazione 11069 | 100.000 | 89.253,84 | Proclamazione in vigore, policy attuative vacate `[US-SRC-19]`, `[US-SRC-21]` |
| Tariffa H-1B proposta | 103.265 | 92.167,98 | Solo proposta (NPRM) `[US-SRC-20]` |
| Modulo I-936 (deroga al deposito online) | 25 | 22,31 | Previsto dall'IFR dell'11/08/2026; nessun modulo e ancora obbligatorio, quindi non dovuto `[US-SRC-97]` |
| Visa integrity fee | 250 | 223,13 | Prevista dalla legge, riscossione non confermata `[US-SRC-58]`; senza di essa F-1 = 535 USD, con essa sarebbe 785 USD (EUR 700,64): non inclusa (OQ-01) |

**Ordine di grandezza per uno studente italiano:** 535 USD di tariffe governative obbligatorie (EUR 477,51) `[US-SRC-36]`, `[US-SRC-48]` piu le spese della scuola, l'assicurazione e il viaggio, non fissate da fonti federali: in 8 CFR 214 non compare alcun obbligo di assicurazione sanitaria per F-1 `[US-SRC-134]` (OQ-14).

---

## 5. Checklist Pre-Arrivo, Durante il Soggiorno, Post-Arrivo

Le checklist valgono per lo studente F-1 e, dove indicato, per J-1 e lavoratori. Le voci non verificate (banca, patente, assicurazione F-1) sono in `united_states_open_questions.md` (OQ-14).

### 5.1 Prima della partenza

1. **Documento di ammissione:** I-20 (F/M) o DS-2019 (J) emesso da scuola o sponsor certificati; nome e data di nascita uguali al passaporto `[US-SRC-34]`, `[US-SRC-75]`.
2. **SEVIS I-901:** F/M 350 USD, J 220 USD, J agevolato 35 USD; pagare prima del colloquio e conservare la ricevuta `[US-SRC-36]`, `[US-SRC-35]`.
3. **DS-160:** compilare online; il codice a barre di conferma deve coincidere con quello del profilo di appuntamento `[US-SRC-84]`.
4. **MRV:** 185 USD (F, M, J, B) o 205 USD (H, L, O); non rimborsabile `[US-SRC-48]`, `[US-SRC-61]`.
5. **Colloquio su usvisa-info:** prenotare dal portale, nel Paese di cittadinanza o residenza `[US-SRC-84]`, `[US-SRC-61]`; non si prenota direttamente con l'ambasciata `[US-SRC-85]`.
6. **Presenza online:** impostare i profili social come pubblici (richiedenti F, M, J e altri; dal 1° ottobre anche I, TN, TD) `[US-SRC-103]`.
7. **Passaporto:** valido per almeno 6 mesi dopo il rientro `[US-SRC-41]`.
8. **Viaggio:** visto fino a 365 giorni prima, arrivo al massimo 30 giorni prima dell'inizio `[US-SRC-34]`.
9. **Assicurazione:** per J-1/J-2 minimi 100.000 / 25.000 / 50.000 USD `[US-SRC-05]`; F-1: nessun obbligo federale individuato in 8 CFR 214 `[US-SRC-134]`; eventuali obblighi della scuola da chiedere alla scuola (OQ-14).

### 5.2 All'arrivo e durante il soggiorno

1. **Ingresso (CBP):** presentare I-20/DS-2019, passaporto e prova dei fondi; I-94 elettronico; I-515A se mancano documenti (30 giorni per sanare) `[US-SRC-42]`.
2. **Check-in SEVP:** contattare il DSO subito dopo l'ingresso e comunque entro la data di inizio del programma `[US-SRC-40]`.
3. **Mantenere lo status:** corso a tempo pieno, nessun lavoro non autorizzato, proroga prima della scadenza `[US-SRC-40]`.
4. **Cambio di indirizzo (AR-11):** comunicarlo a USCIS entro 10 giorni `[US-SRC-82]`.
5. **Viaggi:** firma del DSO sull'I-20 entro l'ultimo anno e assenza non superiore a 5 mesi durante gli studi `[US-SRC-41]`; per chi rientra a riprendere il lavoro con EAD da post-completion OPT la regola richiede l'EAD valido insieme a un I-20 firmato dal DSO negli ultimi **6 mesi** (8 CFR 214.2(f)(13)(ii)) `[US-SRC-01]`. Nessuna fonte letta applica o esclude espressamente la soglia di 6 mesi allo STEM OPT e c'e una discrepanza con "entro l'ultimo anno" (OQ-30): finche non e chiarito, usare la soglia piu prudente di 6 mesi. Con practical training solo richiesto il viaggio all'estero e sconsigliato; con OPT approvato serve l'EAD fisico `[US-SRC-41]`, `[US-SRC-123]`.
6. **STEM OPT:** comunicare le variazioni entro 10 giorni e convalidare ogni 6 mesi `[US-SRC-29]`.

### 5.3 Dopo l'arrivo: SSN, tasse, assicurazione

1. **SSN:** solo con autorizzazione al lavoro (on-campus, CPT, OPT); servono lettera del DSO e lettera del datore; record SEVIS Active da almeno 2 giorni, attesa di 10 giorni dall'arrivo e domanda di persona `[US-SRC-43]`; il numero e gratuito, si fa domanda online e poi in ufficio SSA, e la tessera arriva per posta in 5-10 giorni lavorativi `[US-SRC-126]`; senza SSN per redditi non da lavoro si usa l'ITIN (modulo W-7) `[US-SRC-44]`. I tempi di elaborazione USCIS di I-765, I-129 e I-539 non sono verificati (OQ-22).
2. **Tasse:** modulo 8843 ogni anno `[US-SRC-79]`; 1040-NR se ci sono redditi USA imponibili `[US-SRC-80]`; esenzione FICA per meno di 5 anni solari di presenza come F/J/M `[US-SRC-78]`; trattato fiscale Italia-USA: testi disponibili sul sito IRS `[US-SRC-81]`.
3. **Assicurazione sanitaria:** J come al punto 5.1; F-1: nessun obbligo federale individuato in 8 CFR 214 `[US-SRC-134]`, regole della scuola da verificare (OQ-14).
4. **Fine studi:** 60 giorni di periodo di grazia oggi `[US-SRC-46]`; finestre OPT nel Caso 10 `[US-SRC-28]`.
5. **Periodo di attenzione:** se viene confermata la regola a periodo fisso, cambieranno grazia e proroghe (par. 3.1) `[US-SRC-11]`.


---

## 6. Categorie Limitate per Nazionalità e Truffe

### Categorie limitate per nazionalita (non disponibili ai cittadini italiani, britannici, indiani, cinesi)

- **TN (USMCA):** solo cittadini di Canada e Messico `[US-SRC-71]`.
- **E-3:** solo cittadini australiani `[US-SRC-72]`.
- **H-1B1:** solo Cile e Singapore; fino a 6.800 posti sono sottratti ai 65.000 dell'H-1B ordinario `[US-SRC-17]`, `[US-SRC-20]`.
- **E-1/E-2:** dipendono dal trattato: Italia e UK si (E-1 ed E-2), India e Cina no; Bulgaria e Romania solo E-2; Cipro non e nell'elenco dei Paesi con trattato `[US-SRC-49]`, `[US-SRC-106]`.
- **Proclamazione 10998 (in vigore dal 01/01/2026):** sospensione totale dei visti per 19 Paesi (Afghanistan, Birmania, Burkina Faso, Ciad, Repubblica del Congo, Guinea Equatoriale, Eritrea, Haiti, Iran, Laos, Libia, Mali, Niger, Sierra Leone, Somalia, Sud Sudan, Sudan, Siria, Yemen) e sospensione parziale (B-1/B-2, F, M, J e visti immigrati) per altri 19 (Angola, Antigua e Barbuda, Benin, Burundi, Costa d'Avorio, Cuba, Dominica, Gabon, Gambia, Malawi, Mauritania, Nigeria, Senegal, Tanzania, Togo, Tonga, Venezuela, Zambia, Zimbabwe), piu il Turkmenistan per i soli visti immigrati; eccezione per i doppi cittadini che usano un passaporto non incluso `[US-SRC-63]`. Italia, UK, India, Cina, Bulgaria, Cipro e Romania non sono nominate `[US-SRC-63]`, `[US-SRC-64]`.

### Truffe e canali ufficiali

- La lotteria Diversity Visa e gestita dal dipartimento di Stato, non da USCIS; avvisi di "vincita" con richiesta di pagamento sono truffe. I rilasci DV risultano sospesi dal 31/08/2026 `[US-SRC-83]`, `[US-SRC-104]`.
- Offerte di studio o lavoro false e universita inesistenti: verificare la certificazione SEVP della scuola e l'esistenza dello sponsor J `[US-SRC-83]`, `[US-SRC-34]`, `[US-SRC-75]`.
- Impersonificazione di USCIS e promesse di "corsia veloce" o pagamenti con modalita insolite `[US-SRC-83]`.
- ESTA: siti terzi non sono affiliati al CBP; la richiesta ufficiale e `esta.cbp.dhs.gov` `[US-SRC-93]`, `[US-SRC-86]`.
- SEVIS: il pagamento ufficiale avviene su FMJfee.com `[US-SRC-35]`.
- Prenotazioni consolari: solo dal portale ufficiale, non via intermediari `[US-SRC-84]`, `[US-SRC-85]`.

