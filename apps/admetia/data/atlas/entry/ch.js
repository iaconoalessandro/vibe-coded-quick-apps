/* How hiring works: Switzerland. From research/getting-in/employer-pipelines.md
 * §5 and recruiting-calendar.md §3.4, with new reads on 7-8 Oct 2026 (Federal
 * Statistical Office graduate survey via Le News, UBS postings, Expatica, UZH;
 * then the Adecco Job Index Q2 2026 and the UZH language study, SEM and the
 * Federal Council quota release, HSG Career & Corporate Services, Roche,
 * SERI Transition Barometer, Code of Obligations Art. 335c, Weka, jobs.ch,
 * jobup.ch, talendo.ch). */
ATLAS.addEntry({
  id: 'CH',
  checked: '2026-10-08',
  review: '2027-04-08',

  lead: [
    ['Swiss firms hire juniors they have already tried: interns from Swiss universities, often on six-month placements during the master’s, and graduates of their own trainee programmes. The banks recruit where they hold their own events, above all at St. Gallen, ETH and Zurich.',
      'Le aziende svizzere assumono junior che hanno già messo alla prova: stagisti delle università svizzere, spesso con stage di sei mesi durante il master, e laureati dei propri programmi trainee. Le banche reclutano dove organizzano i propri eventi, soprattutto a San Gallo, all’ETH e a Zurigo.', 'ch-pipelines ch-calendar'],
    ['From abroad, without a Swiss university or an EU passport, the door is mostly closed.',
      'Dall’estero, senza un’università svizzera o un passaporto UE, la porta è per lo più chiusa.', 'ch-calendar'],
    ['The market has cooled for new graduates: in the 2025 federal survey 44.1% of master’s graduates of the class of 2024 said they had trouble finding suitable work, against 30% for the class of 2022.',
      'Il mercato si è raffreddato per i neolaureati: nell’indagine federale 2025 il 44,1% dei laureati magistrali della classe 2024 ha dichiarato difficoltà a trovare un lavoro adeguato, contro il 30% della classe 2022.', 'ch-fso']
  ],

  ways: [
    { name: ['Internship during the master’s', 'Stage durante il master'], r: 'intern', p: 'first intern', basis: 'consensus', t: [
      ['Banks, insurers and consultancies take six-month interns all year and pay well; 95% of St. Gallen master’s graduates had more than six months of practical experience.',
        'Banche, assicurazioni e consulenze prendono stagisti di sei mesi tutto l’anno e pagano bene; il 95% dei laureati magistrali di San Gallo aveva più di sei mesi di esperienza pratica.', 'ch-calendar ch-pipelines'],
      ['In the federal survey, lack of experience is the main reason graduates give for not finding suitable work: about two-thirds of master’s graduates and almost three-quarters of university-of-applied-sciences bachelor’s graduates.',
        'Nell’indagine federale la mancanza di esperienza è il motivo principale indicato dai laureati per non trovare un lavoro adeguato: circa due terzi dei laureati magistrali e quasi tre quarti dei laureati triennali delle scuole universitarie professionali.', 'ch-fso']
    ] },
    { name: ['Graduate and trainee programmes', 'Programmi per laureati e trainee'], r: 'scheme', p: 'first', basis: 'consensus', t: [
      ['Large employers run rotation programmes for recent graduates: UBS’s graduate talent programmes ask for a degree from the last 18 months and, for Swiss degrees, a grade average of at least 4.5.',
        'I grandi datori hanno programmi a rotazione per neolaureati: i programmi graduate talent di UBS chiedono una laurea degli ultimi 18 mesi e, per i titoli svizzeri, una media di almeno 4,5.', 'ch-ubs'],
      ['Roche’s Operations Rotational Development Program is a 2-year trainee programme in Basel/Kaiseraugst and Penzberg for master’s graduates in science or engineering who finished less than 2 years ago; its page gave the next application period as starting on 1 March 2026.',
        'L’Operations Rotational Development Program di Roche è un programma trainee di 2 anni a Basilea/Kaiseraugst e Penzberg per laureati magistrali in scienze o ingegneria che hanno finito da meno di 2 anni; la sua pagina indicava il prossimo periodo di candidature a partire dal 1° marzo 2026.', 'ch-roche']
    ] },
    { name: ['Campus recruiting', 'Selezioni nei campus'], r: 'campus', p: 'first intern', basis: 'data', t: [
      ['St. Gallen says 372 companies recruit on its campus each year and 86% of its master’s graduates hold a permanent job by graduation.',
        'San Gallo dichiara che 372 aziende reclutano nel suo campus ogni anno e che l’86% dei suoi laureati magistrali ha un posto fisso entro la laurea.', 'ch-pipelines'],
      ['In 2025, 42 companies took part in the HSG Career Days, where 1,224 students sent 5,956 applications; the Banking Days drew 34 banking, investment and private-equity firms and 22,450 student applications. Outstanding HSG students can take part.',
        'Nel 2025 42 aziende hanno partecipato agli HSG Career Days, dove 1.224 studenti hanno inviato 5.956 candidature; i Banking Days hanno attirato 34 società di banca, investimento e private equity e 22.450 candidature di studenti. Possono partecipare gli studenti HSG più brillanti.', 'ch-hsg-cd ch-hsg-bd']
    ] },
    { name: ['Direct application through job boards', 'Candidatura diretta tramite portali di lavoro'], r: 'direct', p: 'first exp', basis: 'consensus', t: [
      ['The main boards are jobs.ch for German-speaking Switzerland and jobup.ch for the French-speaking region; talendo.ch is the board for students and recent graduates, with over 1,000 employers listed.',
        'I portali principali sono jobs.ch per la Svizzera tedesca e jobup.ch per la Romandia; talendo.ch è il portale per studenti e neolaureati, con oltre 1.000 datori di lavoro elencati.', 'ch-jobs ch-jobup ch-talendo'],
      ['A formal file of CV, cover letter and certificates is expected, and a process takes two weeks to a month.',
        'Si attende un dossier formale con CV, lettera di presentazione e certificati, e un processo richiede da due settimane a un mese.', 'ch-expatica']
    ] },
    { name: ['Public administration internships', 'Stage nell’amministrazione pubblica'], r: 'public', p: 'first', basis: 'consensus', t: [
      ['The Federal Office of Justice takes master’s graduates in law (degree less than 1 year old) for internships of usually 5 to 6 months at 100%, advertised on the federal job portal (Stellenportal Bund).',
        'L’Ufficio federale di giustizia accoglie laureati magistrali in giurisprudenza (titolo di meno di 1 anno) per stage di solito di 5-6 mesi al 100%, pubblicati sul portale federale dei posti di lavoro (Stellenportal Bund).', 'ch-bj']
    ] },
    { name: ['Apprenticeship (Lehre)', 'Apprendistato (Lehre)'], r: 'apprentice', p: 'first', basis: 'data', t: [
      ['Apprenticeship is the mainstream route for school leavers: in June 2026, 63% of young people were considering basic vocational training, about 74,000 positions were offered and 68% were already filled. It is not a way in for a graduate.',
        'L’apprendistato è la via principale per chi esce dalla scuola: a giugno 2026 il 63% dei giovani stava valutando la formazione professionale di base, circa 74.000 posti erano offerti e il 68% era già coperto. Non è un ingresso per un laureato.', 'ch-transition']
    ] }
  ],

  cycle: [
    ['Unemployment a year after graduating rose sharply in the latest federal survey: from 3.9% to 6.4% for university master’s graduates and from 3.4% to 4.9% for bachelor’s graduates of universities of applied sciences. When non-EU hiring needs proof that no Swiss or EU candidate is available, a downturn closes that door first.',
      'La disoccupazione a un anno dalla laurea è salita nettamente nell’ultima indagine federale: dal 3,9% al 6,4% per i laureati magistrali delle università e dal 3,4% al 4,9% per i laureati triennali delle scuole universitarie professionali. Quando assumere un extra-UE richiede di dimostrare che non c’è un candidato svizzero o UE disponibile, una crisi chiude per prima quella porta.', 'ch-fso ch-calendar'],
    ['The biggest rises were in economics and business (master’s: 3.5% to 8.5%, classes of 2022 to 2024) and in engineering (2.1% to 4.8%). In the second quarter of 2026 Adecco counted job postings 2.4% below the previous quarter and, over the year, down 13% for commercial profiles and 10% for economic ones, while graduate IT postings rose 6%.',
      'Gli aumenti maggiori sono stati in economia (magistrale: dal 3,5% all’8,5%, classi dal 2022 al 2024) e in ingegneria (dal 2,1% al 4,8%). Nel secondo trimestre del 2026 Adecco ha contato annunci inferiori del 2,4% al trimestre precedente e, su base annua, in calo del 13% per i profili commerciali e del 10% per quelli economici, mentre gli annunci IT per laureati sono saliti del 6%.', 'ch-fso ch-adecco']
  ],

  fields: [
    { f: 'finance', t: [
      ['Swiss banking recruits through school-specific fairs such as HSG Banking Days; UBS, Zürcher Kantonalbank, Raiffeisen and Swiss Re are among the partners. Private and cantonal banks want the local language of the region.',
        'La banca svizzera recluta tramite fiere legate alle singole scuole come gli HSG Banking Days; UBS, Zürcher Kantonalbank, Raiffeisen e Swiss Re sono tra i partner. Le banche private e cantonali vogliono la lingua locale della regione.', 'ch-pipelines ours']
    ] },
    { f: 'accounting', t: [
      ['The Big Four recruit economics and business graduates into audit with a path to the Swiss certified accountant qualification, and run traineeships with St. Gallen.',
        'Le Big Four reclutano laureati in economia nella revisione con un percorso verso il titolo svizzero di esperto contabile, e hanno traineeship con San Gallo.', 'ch-deloitte ours']
    ] },
    { f: 'business', t: [
      ['Swiss multinationals run rotational programmes for recent master’s graduates: ABB’s Global Early Talent Program starts with an induction in Zurich and includes six months abroad; Roche and Novartis run their own.',
        'Le multinazionali svizzere hanno programmi a rotazione per neolaureati magistrali: il Global Early Talent Program di ABB inizia con un’introduzione a Zurigo e include sei mesi all’estero; Roche e Novartis hanno i propri.', 'ch-corp ch-roche']
    ] },
    { f: 'tech', t: [
      ['Google’s Zurich office, about 5,000 people and its largest engineering site outside the US, sits next to ETH, and staff move between the two; ETH and EPFL are the main feeders for software roles.',
        'L’ufficio di Google a Zurigo, circa 5.000 persone e il suo maggiore centro d’ingegneria fuori dagli Stati Uniti, è accanto all’ETH, e il personale si sposta tra i due; ETH ed EPFL sono i principali canali per i ruoli software.', 'ch-google'],
      ['IT is the part of the graduate market that grew: Adecco counts graduate IT postings up 6% in the year to the second quarter of 2026, while science, commercial and economic profiles fell.',
        'L’IT è la parte del mercato dei laureati che è cresciuta: Adecco conta annunci IT per laureati in aumento del 6% nell’anno fino al secondo trimestre del 2026, mentre i profili scientifici, commerciali ed economici sono calati.', 'ch-adecco']
    ] },
    { f: 'ai', t: [
      ['AI and quantitative hiring run through ETH Zurich and EPFL: their labs, doctoral students and spin-offs, and the research centres of large tech firms in Zurich.',
        'Le assunzioni in IA e nei ruoli quantitativi passano per l’ETH di Zurigo e l’EPFL: i loro laboratori, i dottorandi e gli spin-off, e i centri di ricerca delle grandi aziende tech a Zurigo.', 'ch-pipelines ours']
    ] },
    { f: 'public', t: [
      ['The federal administration offers internships to recent graduates, for example 5 to 6 months at the Federal Office of Justice for law master’s graduates, advertised on the federal job portal.',
        'L’amministrazione federale offre stage ai neolaureati, per esempio di 5-6 mesi presso l’Ufficio federale di giustizia per laureati magistrali in giurisprudenza, pubblicati sul portale federale dei posti di lavoro.', 'ch-bj']
    ] }
  ],

  schools: [
    ['St. Gallen (HSG) is the gate to Swiss banking and consulting, ETH and EPFL to technical and quantitative roles; Zurich, Basel, Bern and Lausanne feed their regions.',
      'San Gallo (HSG) è la porta della banca e della consulenza svizzere, ETH ed EPFL dei ruoli tecnici e quantitativi; Zurigo, Basilea, Berna e Losanna alimentano le loro regioni.', 'ch-pipelines'],
    ['HSG’s Banking Days are a flagship finance event open to outstanding HSG students who apply to attend; 22,450 student applications went to 34 firms in 2025.',
      'I Banking Days dell’HSG sono un evento di punta per la finanza aperto agli studenti HSG più brillanti che si candidano a partecipare; nel 2025 22.450 candidature di studenti sono andate a 34 società.', 'ch-hsg-bd']
  ],

  events: [
    ['Sector fairs run by the universities: HSG Career Days and Banking Days, and the company forums at ETH and EPFL.',
      'Fiere di settore organizzate dalle università: gli HSG Career Days e i Banking Days, e i forum aziendali di ETH ed EPFL.', 'ch-pipelines ours'],
    ['The 2025 HSG Career Days covered seven sectors (consulting, law, industry, luxury goods, consumer goods, technology, insurance) with 42 companies; talendo.ch lists career fairs and networking events across Switzerland.',
      'Gli HSG Career Days 2025 coprivano sette settori (consulenza, diritto, industria, beni di lusso, beni di consumo, tecnologia, assicurazioni) con 42 aziende; talendo.ch elenca fiere del lavoro ed eventi di networking in tutta la Svizzera.', 'ch-hsg-cd ch-talendo']
  ],

  customs: [
    { k: 'season', v: 'rolling', t: [
      ['Swiss banks take six-month interns continuously, starting in January, April, July or October, with applications 3 to 5 months before the start. Programmes can have a fixed window: Roche’s page gave 1 March 2026 as the start of its application period.',
        'Le banche svizzere prendono stagisti di sei mesi in modo continuo, con inizio a gennaio, aprile, luglio o ottobre, e candidature da 3 a 5 mesi prima dell’inizio. I programmi possono avere una finestra fissa: la pagina di Roche indicava il 1° marzo 2026 come inizio del periodo di candidature.', 'ch-calendar ch-roche']
    ] },
    { k: 'masters', v: 'expected', t: [
      ['The master’s is the usual entry for the programmes read: Roche asks for a master’s in science or engineering, and the federal survey reports on master’s graduates. At St. Gallen 95% of master’s graduates had more than six months of practical experience.',
        'Il master è l’ingresso abituale per i programmi letti: Roche chiede un master in scienze o ingegneria, e l’indagine federale riguarda i laureati magistrali. A San Gallo il 95% dei laureati magistrali aveva più di sei mesi di esperienza pratica.', 'ch-roche ch-fso ch-pipelines']
    ] },
    { k: 'degrees', v: 'regulated', t: [
      ['Recognition applies to regulated professions: the federal portal anerkennung.swiss shows, by occupation, whether a foreign qualification must be recognised and which body is responsible.',
        'Il riconoscimento riguarda le professioni regolamentate: il portale federale anerkennung.swiss mostra, per professione, se un titolo estero deve essere riconosciuto e quale ente è competente.', 'ch-arbeit'],
      ['For other jobs no recognition procedure applies and the employer judges the degree.',
        'Per gli altri lavori non c’è alcuna procedura di riconoscimento e il datore valuta il titolo.', 'ours']
    ] },
    { k: 'brand', v: 'high', t: [
      ['St. Gallen is the gate to banking and consulting: 372 companies recruit on its campus each year, and its flagship Banking Days are open to outstanding HSG students who apply to attend.',
        'San Gallo è la porta della banca e della consulenza: 372 aziende reclutano nel suo campus ogni anno, e i suoi Banking Days di punta sono aperti agli studenti HSG più brillanti che si candidano a partecipare.', 'ch-pipelines ch-hsg-bd']
    ] },
    { k: 'dual', v: 'strong', t: [
      ['Apprenticeship is the mainstream route into work: in June 2026, 63% of young people were considering basic vocational training and about 74,000 positions were offered, 68% of them already filled. Graduates do not use it, but employers are used to training their own staff.',
        'L’apprendistato è la via principale verso il lavoro: a giugno 2026 il 63% dei giovani stava valutando la formazione professionale di base e circa 74.000 posti erano offerti, il 68% già coperto. I laureati non lo usano, ma i datori sono abituati a formare il proprio personale.', 'ch-transition ours']
    ] },
    { k: 'publicw', v: 'low', t: [
      ['The public sector is a smaller door for graduates than banks, pharma and multinationals in the pages read: the Federal Office of Justice takes law master’s graduates for internships of 5 to 6 months, advertised on the federal job portal.',
        'Il settore pubblico è una porta più piccola per i laureati rispetto a banche, farmaceutica e multinazionali nelle pagine lette: l’Ufficio federale di giustizia accoglie laureati magistrali in giurisprudenza per stage di 5-6 mesi, pubblicati sul portale federale dei posti di lavoro.', 'ch-bj ours']
    ] },
    { k: 'sponsorr', v: 'rare', t: [
      ['Non-EU/EFTA nationals can work in Switzerland only if highly qualified, and the employer must show that no suitable candidate is available in Switzerland or the EU/EFTA. The Federal Council left the 2026 quota for third-country workers at 8,500 (4,500 residence permits and 4,000 short-stay permits); employers used 74% of the 2024 quota. See Visas for the rules.',
        'I cittadini extra-UE/AELS possono lavorare in Svizzera solo se altamente qualificati, e il datore deve dimostrare che non c’è un candidato adatto in Svizzera o nell’UE/AELS. Il Consiglio federale ha lasciato la quota 2026 per i lavoratori di Stati terzi a 8.500 (4.500 permessi di dimora e 4.000 permessi di breve durata); i datori hanno usato il 74% della quota 2024. Per le regole vedi Visti.', 'ch-sem ch-quota']
    ] },
    { k: 'photo', v: 'optional', t: [
      ['Optional: include a professional passport-sized photo if the job advert asks for one. Employers may also ask for age, gender or marital status, though answering is not required.',
        'Facoltativa: includi una foto professionale formato tessera se l’annuncio la chiede. I datori possono chiedere anche età, genere o stato civile, anche se non è obbligatorio rispondere.', 'ch-expatica']
    ] },
    { k: 'cv', v: 'one', t: [
      ['Aim for one A4 page, short and concise, with bullet points.',
        'Punta a una pagina A4, breve e concisa, con elenchi puntati.', 'ch-expatica']
    ] },
    { k: 'letter', v: 'expected', t: [
      ['Keep the cover letter to one page, usually four concise paragraphs, typed unless the company asks for a handwritten one, in the language of the job advert (German, French, Italian or English).',
        'Mantieni la lettera di presentazione a una pagina, di solito quattro paragrafi concisi, scritta a macchina salvo richiesta di una manoscritta, nella lingua dell’annuncio (tedesco, francese, italiano o inglese).', 'ch-expatica']
    ] },
    { k: 'refs', v: 'later', t: [
      ['The guide advises listing references from previous employers. A new employer may contact a former one only with the applicant’s consent, which has to be explicit, and applicants may limit it to named people or firms.',
        'La guida consiglia di elencare le referenze di precedenti datori. Un nuovo datore può contattare uno precedente solo con il consenso del candidato, che deve essere esplicito, e i candidati possono limitarlo a persone o aziende specifiche.', 'ch-expatica ch-weka']
    ] },
    { k: 'docs', v: 'copies', t: [
      ['Companies typically request a CV, a cover letter and educational certificates; the guide advises adding training certificates. Posted documents are usually returned.',
        'Le aziende di solito chiedono un CV, una lettera di presentazione e certificati di studio; la guida consiglia di aggiungere i certificati di formazione. I documenti inviati per posta vengono di solito restituiti.', 'ch-expatica']
    ] },
    { k: 'salary', v: 'later', t: [
      ['Avoid raising salary and benefits at early interview stages; the interviewer may bring them up, and they are usually settled in later stages.',
        'Evita di sollevare stipendio e benefit nelle prime fasi dei colloqui; può essere l’intervistatore a parlarne, e di solito si definiscono nelle fasi successive.', 'ch-expatica']
    ] },
    { k: 'check', v: 'routine', t: [
      ['Reference checks are routine: in a survey of more than 500 HR managers 60% said they also gather personal information about applicants informally, which the press called a breach of data protection law. The lawful route is a reference with the applicant’s consent.',
        'I controlli delle referenze sono di routine: in un sondaggio su oltre 500 responsabili HR il 60% ha dichiarato di raccogliere informazioni personali sui candidati anche in modo informale, cosa che la stampa ha definito una violazione della legge sulla protezione dei dati. La via lecita è una referenza con il consenso del candidato.', 'ch-srf ch-weka']
    ] },
    { k: 'contact', v: 'mixed', t: [
      ['Formal applications with a complete file work; at the banks, being met at a school event first helps.',
        'Le candidature formali con un dossier completo funzionano; nelle banche aiuta essere conosciuti prima a un evento di una scuola.', 'ch-expatica ch-pipelines']
    ] },
    { k: 'abroad', v: 'there', t: [
      ['Internships are in practice open to Swiss and EU/EFTA citizens and to non-EU students enrolled at a Swiss university doing a required internship.',
        'In pratica gli stage sono aperti ai cittadini svizzeri e UE/AELS e agli studenti extra-UE iscritti a un’università svizzera che svolgono uno stage obbligatorio.', 'ch-calendar'],
      ['Overseas applicants may first face a phone or video interview.',
        'I candidati dall’estero possono dover sostenere prima un colloquio telefonico o in video.', 'ch-expatica']
    ] },
    { k: 'language', v: 'mostly', t: [
      ['In nine years of ads to early 2023, 87% mentioned German (counting ads written in German), 32% English, 23% French and 4% Italian; more than a third named two or more languages, most often German with English or German with French.',
        'In nove anni di annunci fino all’inizio del 2023, l’87% menzionava il tedesco (contando gli annunci scritti in tedesco), il 32% l’inglese, il 23% il francese e il 4% l’italiano; più di un terzo indicava due o più lingue, più spesso tedesco con inglese o tedesco con francese.', 'ch-adlang'],
      ['English is enough in global banking, consulting and tech teams.',
        'L’inglese basta nei team globali di banca, consulenza e tecnologia.', 'ours']
    ] }
  ],

  rows: {
    process: [
      ['Expect a formal interview of 45 to 60 minutes with your prospective boss present, possibly a second or third round, and conservative business dress; overseas applicants may first face a phone or video interview. The process can take two weeks to a month, and a thank-you message is advised.',
        'Aspettati un colloquio formale di 45-60 minuti con il futuro capo presente, forse un secondo o terzo turno, e abbigliamento formale classico; i candidati dall’estero possono dover sostenere prima un colloquio telefonico o in video. Il processo può durare da due settimane a un mese, e un messaggio di ringraziamento è consigliato.', 'ch-expatica'],
      ['At HSG’s Banking Days companies choose modules such as presentations, interviews, case studies and company dinners, so a first selection happens at the event.',
        'Ai Banking Days dell’HSG le aziende scelgono moduli come presentazioni, colloqui, casi di studio e cene aziendali, quindi una prima selezione avviene all’evento.', 'ch-hsg-bd'],
      ['Rotation programmes add stages: Roche’s Operations Rotational Development Program is a 2-year rotation across functional areas of Pharma Technical Operations, and UBS’s graduate programmes are rotational too. The pages read give no stage list for either.',
        'I programmi a rotazione aggiungono fasi: l’Operations Rotational Development Program di Roche è una rotazione di 2 anni tra le aree funzionali di Pharma Technical Operations, e anche i programmi per laureati di UBS sono a rotazione. Le pagine lette non danno l’elenco delle fasi per nessuno dei due.', 'ch-roche ch-ubs']
    ],
    offer: [
      ['Probation is usually 1 month and can be extended to a maximum of 3 months by written agreement, with 7 days’ notice on either side. After it, notice is 1 month in the first year of service, 2 months in years 2 to 9 and 3 months after that, each to the end of a month (Art. 335c CO).',
        'La prova è di solito di 1 mese e può essere estesa a un massimo di 3 mesi con accordo scritto, con preavviso di 7 giorni per entrambe le parti. Dopo, il preavviso è di 1 mese nel primo anno di servizio, 2 mesi negli anni da 2 a 9 e 3 mesi in seguito, sempre per la fine di un mese (art. 335c CO).', 'ch-iamexpat ch-co335c'],
      ['A 13th month salary is not required by law; it exists only where the contract, a collective agreement or the personnel rules provide for it. In 2024, 75.9% of employees received one, so check the contract.',
        'La 13ª mensilità non è prevista dalla legge; esiste solo se la prevedono il contratto, un contratto collettivo o il regolamento del personale. Nel 2024 il 75,9% dei dipendenti ne ha ricevuta una, quindi controlla il contratto.', 'ch-13th'],
      ['Salary is usually settled in later interview stages rather than in the application; a job offer should come with a thorough employment contract, and a probation period must be agreed in writing.',
        'Lo stipendio si definisce di solito nelle fasi successive dei colloqui e non nella candidatura; un’offerta di lavoro dovrebbe arrivare con un contratto di lavoro completo, e un periodo di prova va concordato per iscritto.', 'ch-expatica ch-iamexpat']
    ],
    sponsor: [
      ['Third-country nationals are admitted only if highly qualified, usually with a higher-education degree and several years of experience, and the employer must show that no suitable candidate is available in Switzerland or the EU/EFTA, with pay and conditions matching regional and sector norms.',
        'I cittadini di Stati terzi sono ammessi solo se altamente qualificati, di solito con un titolo di studio superiore e diversi anni di esperienza, e il datore deve dimostrare che non c’è un candidato adatto in Svizzera o nell’UE/AELS, con retribuzione e condizioni conformi alle norme regionali e di settore.', 'ch-sem'],
      ['Quotas cap how many can be admitted: 8,500 qualified third-country workers in 2026 (4,500 B and 4,000 L permits), of which employers used 74% in 2024 and about 52% by the end of September 2025.',
        'Le quote limitano il numero di ammissioni: 8.500 lavoratori qualificati di Stati terzi nel 2026 (4.500 permessi B e 4.000 permessi L), di cui i datori hanno usato il 74% nel 2024 e circa il 52% entro fine settembre 2025.', 'ch-quota'],
      ['What an employer wants to hear is that you already hold the right to work, or the exact basis on which you will: say it in the first message, because the test and the quota are the employer’s paperwork and cost time.',
        'Ciò che un datore vuole sentire è che hai già il diritto di lavorare, o su quale base lo avrai: dillo nel primo messaggio, perché il test e la quota sono pratiche del datore e costano tempo.', 'ours']
    ],
    where: [
      ['Boards: jobs.ch (German, French and English versions) for German-speaking Switzerland, jobup.ch for the French-speaking region, and talendo.ch for students and graduates, which also lists career fairs and networking events.',
        'Portali: jobs.ch (versioni in tedesco, francese e inglese) per la Svizzera tedesca, jobup.ch per la Romandia e talendo.ch per studenti e laureati, che elenca anche fiere del lavoro ed eventi di networking.', 'ch-jobs ch-jobup ch-talendo'],
      ['University services: HSG Career & Corporate Services (Career Days, Banking Days) for St. Gallen; the federal job portal Stellenportal Bund for federal internships.',
        'Servizi universitari: HSG Career & Corporate Services (Career Days, Banking Days) per San Gallo; il portale federale Stellenportal Bund per gli stage federali.', 'ch-hsg-cd ch-hsg-bd ch-bj'],
      ['Programmes to look up: UBS graduate talent programmes, Roche’s Operations Rotational Development Program, ABB’s Global Early Talent Program and Deloitte’s St. Gallen traineeship.',
        'Programmi da consultare: i graduate talent programmes di UBS, l’Operations Rotational Development Program di Roche, il Global Early Talent Program di ABB e il traineeship di Deloitte a San Gallo.', 'ch-ubs ch-roche ch-corp ch-deloitte']
    ],
    mistakes: [
      ['Applying from abroad without a right to work: the third-country test and quota make employers cautious, and internships in practice go to Swiss, EU/EFTA citizens or students at a Swiss university.',
        'Candidarsi dall’estero senza diritto di lavorare: il test per gli Stati terzi e la quota rendono prudenti i datori, e gli stage vanno in pratica a cittadini svizzeri, UE/AELS o studenti di un’università svizzera.', 'ch-sem ch-calendar'],
      ['Arriving at the end of the master’s without practical experience: two-thirds of master’s graduates who struggled to find suitable work named insufficient experience, and at St. Gallen 95% had more than six months.',
        'Arrivare alla fine del master senza esperienza pratica: due terzi dei laureati magistrali che hanno faticato a trovare un lavoro adeguato hanno indicato l’esperienza insufficiente, e a San Gallo il 95% aveva più di sei mesi.', 'ch-fso ch-pipelines'],
      ['Writing in the wrong language or a long CV: write in the language of the advert, one A4 page for the CV, one page for the letter.',
        'Scrivere nella lingua sbagliata o con un CV lungo: scrivi nella lingua dell’annuncio, una pagina A4 per il CV, una pagina per la lettera.', 'ch-expatica'],
      ['Treating the 13th month salary as automatic: it is not required by law, so confirm it in the contract.',
        'Considerare automatica la 13ª mensilità: non è prevista dalla legge, quindi confermala nel contratto.', 'ch-13th']
    ]
  },

  lang: [
    { f: 'business', v: 'bilingual', t: [
      ['In French-speaking Switzerland and Ticino, 45% of ads for business and social-science graduate roles ask for German; in the ads as a whole more than a third name two or more languages.',
        'In Romandia e in Ticino il 45% degli annunci per laureati in economia e scienze sociali chiede il tedesco; nel complesso degli annunci più di un terzo indica due o più lingue.', 'ch-adlang']
    ] },
    { f: 'finance', v: 'bilingual', t: [
      ['Private and cantonal banks want the local language of the region; global banking teams work in English. The study of ads gives German with English or French as the common pairs.',
        'Le banche private e cantonali vogliono la lingua locale della regione; i team globali della banca lavorano in inglese. Lo studio sugli annunci indica come coppie frequenti tedesco con inglese o francese.', 'ours ch-adlang']
    ] },
    { f: 'tech', v: 'bilingual', t: [
      ['English is the second most named language in Swiss job ads (32%) after German (87%); in French-speaking Switzerland 49% of ads for technical specialists ask for German. The pages read give no tech-only split.',
        'L’inglese è la seconda lingua più citata negli annunci svizzeri (32%) dopo il tedesco (87%); in Romandia il 49% degli annunci per specialisti tecnici chiede il tedesco. Le pagine lette non danno una suddivisione solo per la tecnologia.', 'ch-adlang']
    ] },
    { f: 'ai', v: 'english', t: [
      ['AI roles sit in ETH and EPFL labs and in the research centres of large tech firms in Zurich; no language level is stated on the pages read.',
        'I ruoli in IA si trovano nei laboratori ETH ed EPFL e nei centri di ricerca delle grandi aziende tech a Zurigo; le pagine lette non indicano un livello linguistico.', 'ours']
    ] }
  ],

  programmes: [
    { n: 'Graduate Talent Program', o: 'UBS', f: 'finance', in: null, w: null, lang: 'not stated', intl: 'unknown', ids: 'ch-ubs' },
    { n: 'Operations Rotational Development Program (2 years)', o: 'Roche', f: 'business', in: null, w: null, lang: 'not stated', intl: 'unknown', ids: 'ch-roche' },
    { n: 'Global Early Talent Program', o: 'ABB', f: 'business', in: null, w: null, lang: 'not stated', intl: 'unknown', ids: 'ch-corp' },
    { n: 'Consulting traineeship with HSG', o: 'Deloitte Switzerland', f: 'consulting', in: null, w: null, lang: 'not stated', intl: 'unknown', ids: 'ch-deloitte' },
    { n: 'Hochschulpraktikum (law master’s graduates, 5 to 6 months)', o: 'Federal Office of Justice', f: 'public', in: null, w: null, lang: 'not stated', intl: 'unknown', ids: 'ch-bj' }
  ],

  outcomes: [
    ['A year after graduating, unemployment was 6.4% for university master’s graduates (3.9% in 2023) and 4.9% for bachelor’s graduates of universities of applied sciences (3.4% in 2023); 0.7% for teacher-training graduates.',
      'A un anno dalla laurea la disoccupazione era del 6,4% per i laureati magistrali delle università (3,9% nel 2023) e del 4,9% per i laureati triennali delle scuole universitarie professionali (3,4% nel 2023); dello 0,7% per i laureati delle scuole di formazione degli insegnanti.', 'ch-fso'],
    ['The share saying they had trouble finding suitable work rose from 30% to 44.1% for master’s graduates and from 24.2% to 36.9% for bachelor’s graduates of universities of applied sciences (classes of 2022 to 2024); in economics and business it was 43.9% and in engineering and IT 39.6% (university of applied sciences).',
      'La quota di chi dichiarava difficoltà a trovare un lavoro adeguato è salita dal 30% al 44,1% per i laureati magistrali e dal 24,2% al 36,9% per i laureati triennali delle scuole universitarie professionali (classi dal 2022 al 2024); in economia era il 43,9% e in ingegneria e IT il 39,6% (scuola universitaria professionale).', 'ch-fso'],
    ['The state of the economy was named as a reason by 42.5% of master’s graduates in 2025, up from 23.8% in 2023.',
      'Lo stato dell’economia è stato indicato come motivo dal 42,5% dei laureati magistrali nel 2025, contro il 23,8% nel 2023.', 'ch-fso']
  ],

  sources: {
    'ch-pipelines': ['data', 'Admetia research library: getting-in/employer-pipelines.md §5 and §9 (University of St.Gallen; HSG Career & Corporate Services)', 'research/getting-in/employer-pipelines.md', '2026-10-02'],
    'ch-calendar': ['practitioner consensus', 'Admetia research library: getting-in/recruiting-calendar.md §3.4 and §3.5 (Swiss internships, start months and permits)', 'research/getting-in/recruiting-calendar.md', '2026-10-02'],
    'ch-ubs': ['employer-stated', 'UBS: 2025 Graduate Talent Program, FIM Switzerland, posting on talendo.ch', 'https://talendo.ch/en/jobs/128892-2025-graduate-talent-program-fim-switzerland-client-services', '2026-10-07'],
    'ch-fso': ['data', 'Federal Statistical Office graduate survey (published 27 August 2026), reported by Le News', 'https://lenews.ch/2026/08/27/graduate-unemployment-rises-dramatically-in-switzerland/', '2026-10-08'],
    'ch-expatica': ['practitioner consensus', 'Expatica: Swiss CV and interview tips', 'https://expatica.com/ch/working/finding-a-job/swiss-resume-and-interview-tips-443305', '2026-10-08'],
    'ch-deloitte': ['employer-stated', 'Deloitte Switzerland: HSG (University of St Gallen) consulting traineeship, posting on talendo.ch (2022)', 'https://talendo.ch/de/jobs/89510-hsg-university-of-st-gallen-deloitte-consulting-traineeship', '2026-10-07'],
    'ch-corp': ['employer-stated', 'Admetia research library: careers/accounting-and-corporate.md §5 (ABB GETP, Roche, Novartis)', 'research/careers/accounting-and-corporate.md', '2026-09-30'],
    'ch-google': ['employer-stated', 'Organisator: Google Switzerland, 20 years of “inventing together” in Zurich', 'https://www.organisator.ch/en/?p=34018', '2026-10-07'],
    'ch-adecco': ['data', 'Adecco Job Index Switzerland, Q2 2026 (postings by profession, with the University of Zurich job-market monitor)', 'https://www.adeccogroup.com/en-ch/future-of-work/job-index/job-index-q2-2026', '2026-10-08'],
    'ch-adlang': ['data', 'Adecco Group Switzerland, Job Index Q1 2023: University of Zurich job-market monitor, languages named in job ads', 'https://www.adeccogroup.com/-/media/project/adeccogroup/press-releases/medienmitteilung_job-index-q1-2023.pdf', '2026-10-08'],
    'ch-hsg-cd': ['employer-stated', 'University of St.Gallen Career & Corporate Services: HSG Career Days (2025 figures)', 'https://csc.unisg.ch/en/events/hsg-career-days', '2026-10-08'],
    'ch-hsg-bd': ['employer-stated', 'University of St.Gallen Career & Corporate Services: HSG Banking Days (2025 figures)', 'https://csc.unisg.ch/en/events/hsg-banking-days/', '2026-10-08'],
    'ch-roche': ['employer-stated', 'Roche careers: Operations Rotational Development Program (2 years; application period from 1 March 2026)', 'https://careers.roche.com/global/en/operations-rotational-development-program', '2026-10-08'],
    'ch-sem': ['data', 'State Secretariat for Migration: work for non-EU/EFTA nationals (qualification, priority test, quotas)', 'https://www.sem.admin.ch/sem/en/home/themen/arbeit/nicht-eu_efta-angehoerige.html', '2026-10-08'],
    'ch-quota': ['data', 'Federal Council, 19 November 2025: third-country quotas for 2026 left unchanged (8,500; use in 2024 and 2025)', 'https://www.admin.ch/en/newnsb/7HwBjdg5HpBA', '2026-10-08'],
    'ch-arbeit': ['data', 'SECO arbeit.swiss: recognition of foreign diplomas in Switzerland (anerkennung.swiss)', 'https://www.arbeit.swiss/secoalv/en/home/menue/stellensuchende/berufliche-mobilitaet-in-der-eu-efta---eures/anerkennung-auslaendischer-diplome-in-der-schweiz.html', '2026-10-08'],
    'ch-bj': ['employer-stated', 'Federal Office of Justice: Hochschulpraktika (law master’s graduates; Stellenportal Bund)', 'https://www.bj.admin.ch/de/hochschulpraktika', '2026-10-08'],
    'ch-co335c': ['data', 'Code of Obligations Art. 335c: notice periods (bilingual edition)', 'https://www.droit-bilingue.ch/en-fr/2/22/220-335c-468.html', '2026-10-08'],
    'ch-iamexpat': ['practitioner consensus', 'IamExpat Switzerland: employment contracts (probation, notice during probation)', 'https://iamexpat.ch/career/working-in-switzerland/swiss-work-contracts', '2026-10-08'],
    'ch-13th': ['data', 'lohncheck.ch: the 13th month salary in Switzerland (Federal Statistical Office wage structure survey 2024: 75.9% receive one)', 'https://lohncheck.ch/de/articles/13-monatslohn-schweiz', '2026-10-08'],
    'ch-weka': ['practitioner consensus', 'Weka: reference checks in Switzerland, no information without consent', 'https://www.weka.ch/themen/personal/personalplanung-und-rekrutierung/personalauswahl/article/referenzauskunft-schweiz-ohne-einverstaendnis-keine-auskunft/', '2026-10-08'],
    'ch-srf': ['data', 'SRF, 29 August 2018: Von Rundstedt and HR Today survey of more than 500 Swiss HR managers on informal references', 'https://www.srf.ch/news/wirtschaft/informelle-referenzen-arbeitgeber-verstossen-haeufig-gegen-datenschutzgesetz', '2026-10-08'],
    'ch-jobs': ['employer-stated', 'jobs.ch: the Swiss job portal (German, French, English)', 'https://www.jobs.ch/en/', '2026-10-08'],
    'ch-jobup': ['employer-stated', 'jobup.ch: the job platform for French-speaking Switzerland', 'https://www.jobup.ch/en/', '2026-10-08'],
    'ch-talendo': ['employer-stated', 'talendo.ch: job board for students and graduates (jobs, fairs, events)', 'https://talendo.ch/en', '2026-10-08'],
    'ch-transition': ['data', 'SERI Transition Barometer, June 2026, reported by blue News', 'https://www.bluewin.ch/en/news/international/more-than-two-thirds-of-apprenticeship-positions-have-already-been-filled-3274550.html', '2026-10-08']
  }
});
