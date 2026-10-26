/**
 * ARCHITETTURA CORE DI ARTURO - ASSISTENTE VIRTUALE UFFICIALE
 * IIS "Arturo Checchi" (Fucecchio)
 * Sviluppato da Luca Vorraro (Assistente Tecnico Informatico)
 * Versione Strutturale Avanzata 2026
 */

let appConfig = {
    quickButtons: [
        { id: "AIUTO", label: "❓ Cos'è Arturo?", icon: "fa-solid fa-circle-question" },
        { id: "CONTATTI", label: "📞 Contatti", icon: "fa-solid fa-address-book" },
        { id: "DIRIGENZA", label: "👔 Dirigenza", icon: "fa-solid fa-user-tie" },
        { id: "SEGRETERIE", label: "🏢 Segreteria e Uffici", icon: "fa-solid fa-building-columns" },
        { id: "MICROSOFT365", label: "💻 Servizi Digitali (Teams/Argo)", icon: "fa-solid fa-laptop-code" }
    ],
    
    barzellete: [
        "😂 Il professore di matematica interroga un alunno: 'Dimmi la formula dell'area del cerchio.' E l'alunno: 'Prof, pi greco per raggio al quadrato!' Il professore: 'Ottimo! E la festa?' E l'alunno: 'Tutti al quadrato!'",
        "😂 Un alunno entra in classe con un ritardo spaventoso. Il professore lo guarda severo: 'Si può sapere perché arrivi a quest'ora?!' E lui: 'Prof, c'era un cartello per strada che diceva: Scuola, rallentare! E io ho rallentato!'",
        "😂 Due studenti parlano prima del compito in classe: 'Hai studiato?' 'No, spero nell'ispirazione divina.' 'E se Dio è ateo?' 'Siamo spacciati!'",
        "😂 Il maestro chiede alla classe: 'Qual è il colmo per un elettricista?' La classe tace. E lui: 'Condurre una vita piena di corrente e avere una moglie che gli fa scintille!'",
        "😂 'Papà, papà! Mi fai un favore?' 'Dimmi tutto, figlio mio.' 'Mi firmi la giustificazione per il brutto voto?' 'Certo, ma prima fammi vedere il voto.' 'Ecco... 2.' 'Mmm... qui non serve una firma, ci vuole un miracolo divino!'"
    ],

    indovinelli: [
        "🧩 **Indovinello:** Più ne metti e meno si vede. Che cos'è?\n*(Risposta: Il buio!)*",
        "🧩 **Indovinello:** Ha un solo occhio ma non ci vede. Che cos'è?\n*(Risposta: L'ago!)*",
        "🧩 **Indovinello:** Tutti ce l'hanno, tutti lo perdono, ma nessuno sa dove l'abbia messo. Che cos'è?\n*(Risposta: La memoria!)*",
        "🧩 **Indovinello:** Cammina senza piedi, vola senza ali e piange senza occhi. Che cos'è?\n*(Risposta: La nuvola!)*",
        "🧩 **Indovinello:** Se mi nomini mi distruggi. Chi sono?\n*(Risposta: Il silenzio!)*"
    ],

    frasiSimpaticheFuoriTema: [
        "🌦️ Al momento non riesco a trovare una risposta concreta a questa specifica domanda. Prova a formularmi una domanda più precisa relativa all'organigramma, ai plessi o ai servizi dell'IIS \"Arturo Checchi\"!",
        "🧭 Questa informazione non è presente tra i miei archivi ufficiali. Ti invito a utilizzare i pulsanti rapidi a lato o a farmi una domanda attinente alla scuola.",
        "🔮 Non ho una risposta precisa per questa richiesta generica. Prova a chiedermi qualcosa di specifico, come i referenti di un progetto o i contatti dei plessi."
    ],

    dictionary: {
        "abaco": "📖 **Abaco:** Antico strumento di calcolo manuale costituito da una cornice con guide parallele su cui scorrono palline.",
        "account": "📖 **Account:** Insieme di credenziali (username e password) che identificano in modo univoco un utente su un sistema informatico.",
        "addendo": "📖 **Addendo:** Ciascuno dei numeri che vengono sommati in un'operazione di addizione.",
        "algebra": "📖 **Algebra:** Ramo della matematica che studia le strutture algebriche, le relazioni e le quantità.",
        "algoritmo": "📖 **Algoritmo:** Sequenza ordinata e finita di istruzioni elementari per risolvere un problema.",
        "atomo": "📖 **Atomo:** La più piccola unità fondamentale di un elemento chimico che ne conserva le proprietà.",
        "backup": "📖 **Backup:** Copia di sicurezza di file e dati creata per prevenire la perdita involontaria delle informazioni.",
        "browser": "📖 **Browser:** Programma applicativo utilizzato per navigare, visualizzare e interagire con le pagine web.",
        "bug": "📖 **Bug:** Errore o anomalia nel codice sorgente di un software che ne causa un funzionamento anomalo.",
        "cellula": "📖 **Cellula:** Unità strutturale e funzionale fondamentale di tutti gli organismi viventi.",
        "cpu": "📖 **CPU:** Central Processing Unit. Unità centrale di elaborazione, il 'cervello' del computer.",
        "database": "📖 **Database:** Banca dati. Raccolta strutturata ed organizzata di dati digitali consultabile.",
        "dizionario": "📖 **Dizionario:** Opera che raccoglie e spiega le parole di una lingua.",
        "dna": "📖 **DNA:** Acido desossiribonucleico. Macromolecola che contiene le informazioni genetiche.",
        "hardware": "📖 **Hardware:** La parte fisica, tangibile e meccanica di un computer.",
        "internet": "📖 **Internet:** Rete globale di telecomunicazioni che connette computer in tutto il mondo.",
        "memoria": "📖 **Memoria RAM:** Dispositivo elettronico che memorizza temporaneamente i dati in elaborazione.",
        "software": "📖 **Software:** Insieme dei programmi e delle istruzioni che permettono a un computer di funzionare.",
        "invalsi": "📖 **INVALSI:** Istituto Nazionale per la Valutazione del Sistema Educativo di Istruzione e di Formazione, ente che valuta gli apprendimenti degli studenti.",
        "team": "📖 **Team (Microsoft Teams):** Piattaforma di messaggistica e collaborazione utilizzata all'IIS \"Arturo Checchi\" per la didattica digitale integrata e le riunioni online.",
        "accoglienza": "📖 **Accoglienza:** Servizio e insieme di attività volte a favorire l'inserimento e l'integrazione dei nuovi studenti.",
        "mobilita": "📖 **Mobilità Internazionale:** Insieme di progetti e programmi (es. Erasmus+) per esperienze formative all'estero.",
        "digitale": "📖 **Digitale:** Riferito all'uso di tecnologie informatiche e piattaforme cloud a supporto della didattica."
    },

    faqs: [
        {
            "id": "ORIENTATORE",
            "keywords": ["orientatore", "chi è l'orientatore", "chi e l orientatore", "orientatore scuola", "docente orientatore"],
            "responses": ["🧭 In base all'**ORGANIGRAMMA A.S. 2026-2027** (Delibere Collegio del 11.09.26 - 29.09.26)[cite: 14], l'**Orientatore** dell'istituto è:\n- **Frediani**[cite: 14]\n\n*(Cos'altro vuoi chiedermi?)*"]
        },
        {
            "id": "TUTOR",
            "keywords": ["tutor", "tuto", "professori tutor", "elenco tutor", "lista tutor", "chi sono i tutor", "tutor scolastici", "nomi tutor"],
            "responses": ["👥 In base all'**ORGANIGRAMMA A.S. 2026-2027** (Delibere Collegio del 11.09.26 - 29.09.26)[cite: 14], ecco l'elenco dei **Docenti Tutor**[cite: 14]:\n1. Nazzi[cite: 14]\n2. Guarino[cite: 14]\n3. Vaccaro[cite: 14]\n4. Tortorella[cite: 14]\n5. Desideri[cite: 14]\n6. Senese[cite: 14]\n7. Scardaccione[cite: 14]\n8. Tamberi[cite: 14]\n9. Cerbioni[cite: 14]\n10. Menale[cite: 14]\n11. Rasori\n12. Faraoni\n13. Frisone\n14. Galfano\n15. Sibione\n16. Canneri\n17. Tognarelli\n\n*(Cos'altro vuoi chiedermi?)*"]
        },
        {
            "id": "SICUREZZA",
            "keywords": ["sicurezza", "figure sicurezza", "aspp", "rls", "prevenzione e protezione", "responsabile sicurezza", "chi sono i responsabili", "responsabili"],
            "responses": ["🦺 In base all'**ORGANIGRAMMA A.S. 2026-2027** (Delibere Collegio del 11.09.26 - 29.09.26)[cite: 14], le **Figure di Sicurezza** e i principali ruoli dell'istituto sono:\n- **ASPP:** Palmieri[cite: 16]\n- **RLS:** Diazzi[cite: 16]\n\nPuoi anche chiedermi specificamente i **responsabili di plesso** o i **responsabili di laboratorio**!\n\n*(Cos'altro vuoi chiedermi?)*"]
        },
        {
            "id": "RESPONSABILI_LABORATORI_COMPLETO",
            "keywords": ["responsabili laboratori", "elenco laboratori", "lista laboratori", "tutti i laboratori", "responsabile laboratori", "laboratori e aree speciali"],
            "responses": ["🔬 In base all'**ORGANIGRAMMA A.S. 2026-2027** (Delibere Collegio del 11.09.26 - 29.09.26)[cite: 14], ecco l'elenco completo dei **Responsabili di Laboratorio e Aree Speciali**:\n\n**Sede V. Veneto:**\n- Modellistica 1: Mazza[cite: 13]\n- Modellistica 2: Desideri[cite: 13]\n- Informatica: Galleni[cite: 13]\n- LIM/Calzaturiero: Vaiani[cite: 13]\n\n**Sede Checchi:**\n- Palestra nuova: Schiera[cite: 13]\n- Palazzetto: Angelini[cite: 13]\n- Fisica/Scienze: Pennacchio[cite: 13]\n- Informatico 1 e 2: Turini[cite: 13]\n\n**Sede Gramsci:**\n- Meccanica: Picciolo[cite: 13]\n- Impiantielettrici: Cerrato[cite: 13]\n- MisureElettr.: Miatto[cite: 13]\n- Elettropneumatica: Miatto[cite: 13]\n- Autocad: Diazzi[cite: 13]\n- Linguistico/Green: D'Avico[cite: 13]\n- Palestra: Grassini[cite: 13]\n- Aula Green: Canneri[cite: 13]\n\n*(Cos'altro vuoi chiedermi?)*"]
        },
        {
            "id": "RESPONSABILI_PLESSI_GENERALI",
            "keywords": ["responsabili di plesso", "responsabile di plesso", "tutti i plessi", "elenco plessi"],
            "responses": ["🏫 In base all'**ORGANIGRAMMA A.S. 2026-2027** (Delibere Collegio del 11.09.26 - 29.09.26)[cite: 14], ecco i **Responsabili di Plesso** dell'istituto:\n- **Sede Centrale (Viale Gramsci):** Lalli\n- **Liceo (Via Padre Checchi):** Frediani, Frati e Canu\n- **Plesso Moda e Calzaturiero (Piazza Vittorio Veneto):** Galleni e Palmieri\n\n*(Cos'altro vuoi chiedermi?)*"]
        },
        {
            "id": "RESPONSABILE_SEDE_CENTRALE",
            "keywords": ["sede centrale", "viale gramsci", "responsabile sede centrale", "responsabile centrale", "centrale"],
            "responses": ["🏫 In base all'**ORGANIGRAMMA A.S. 2026-2027** (Delibere Collegio del 11.09.26 - 29.09.26)[cite: 14], il **Responsabile della Sede Centrale** (Viale Gramsci) è: **Lalli**.\n\n*(Cos'altro vuoi chiedermi?)*"]
        },
        {
            "id": "RESPONSABILE_LICEO",
            "keywords": ["liceo", "via padre checchi", "responsabile liceo", "responsabili liceo"],
            "responses": ["🏫 In base all'**ORGANIGRAMMA A.S. 2026-2027** (Delibere Collegio del 11.09.26 - 29.09.26)[cite: 14], i **Responsabili del Liceo** (Via Padre Checchi) sono: **Frediani, Frati e Canu**.\n\n*(Cos'altro vuoi chiedermi?)*"]
        },
        {
            "id": "RESPONSABILE_MODA",
            "keywords": ["moda", "calzaturiero", "piazza vittorio veneto", "plesso moda", "responsabile moda"],
            "responses": ["🏫 In base all'**ORGANIGRAMMA A.S. 2026-2027** (Delibere Collegio del 11.09.26 - 29.09.26)[cite: 14], i **Responsabili del Plesso Moda e Calzaturiero** (Piazza Vittorio Veneto) sono: **Galleni e Palmieri**.\n\n*(Cos'altro vuoi chiedermi?)*"]
        },
        {
            "id": "COMMISSIONI_GENERALI",
            "keywords": ["elenco commissioni", "tutte le commissioni"],
            "responses": ["📋 In base all'**ORGANIGRAMMA A.S. 2026-2027** (Delibere Collegio del 11.09.26 - 29.09.26)[cite: 14], ecco l'elenco delle **Commissioni** scolastiche:\n- **Elettorale:** Galleni, Senese, Carli, Freschi\n- **Comitato di Valutazione:** Vaccaro, Cillerai, Vincenti, Lalli (supplente)\n- **Competizioni Scientifiche:** Tafi, Tamberi\n- **FSL:** Desideri, Frediani, Vaccaro, Vaiani, Forte, Schiera, Simoncini\n- **Orario:** Donato, Frisone / Menale (ADSS)\n- **Orientamento in entrata:** Paoletti, Angelini, Buti, Desideri, Lalli, Marino, Montanelli\n\n*(Cos'altro vuoi chiedermi?)*"]
        },
        {
            "id": "AIUTO",
            "keywords": ["aiuto", "help", "cosa sai fare", "istruzioni", "cos'e arturo", "chi e arturo"],
            "responses": ["🤖 **Arturo** è l'assistente virtuale ufficiale dell'**IIS \"Arturo Checchi\"** di Fucecchio. Posso aiutarti con i form, le informazioni sulla scuola, calcoli, definizioni e farti divertire con barzellette e indovinelli!"]
        },
        {
            "id": "CHI_SEI",
            "keywords": ["chi sei", "come ti chiami", "presentati", "nome", "ti chiami", "ciao", "salve", "buongiorno", "buonasera"],
            "responses": ["👋 Ciao! Mi chiamo **Arturo** e sono l'assistente digitale ufficiale dell'IIS \"Arturo Checchi\" di Fucecchio! Come posso aiutarti oggi?"]
        },
        {
            "id": "CONTATTI",
            "keywords": ["contatti", "telefono", "email", "pec", "indirizzo"],
            "responses": ["📍 **Sede Principale:** Viale Gramsci 7 - 50054 Fucecchio (FI)\n☎️ **Tel:** +39 0571 20889\n📧 **Email:** FIIS00300C@istruzione.it"]
        },
        {
            "id": "DIRIGENZA",
            "keywords": ["dirigenza", "preside", "dirigente", "dirigente scolastico", "preside del checchi"],
            "responses": ["👔 Attualmente in carica la Dirigente Scolastica dell'IIS \"Arturo Checchi\" si chiama **Jenny Pellitteri**."]
        },
        {
            "id": "TI_ODIO",
            "keywords": ["ti odio", "ti voglio male", "sei odioso", "fai schifo", "sei stupido"],
            "responses": ["💔 Oh no! Anche se me ne dici di tutti i colori, io sono un assistente virtuale dal cuore di silicio e ti voglio bene lo stesso! Per favore, proviamo a concentrarci sul contesto scolastico o sui servizi del Checchi! 🏫🤖"]
        }
    ]
};

let inAttesaSceltaResponsabile = false;
let inAttesaSceltaTipoPlesso = false;
let inAttesaSceltaTipoLaboratorio = false;
let inAttesaSedeLaboratorioInformatica = false;
let inAttesaSceltaOrganigramma = false;

// Stato per gestire la scelta quando l'utente digita una singola parola ambigua (es. "team")
let inAttesaSceltaParolaAmbiguita = false;
let ultimaParolaDigitata = "";

let ultimaCategoriaTrattata = ""; 
let ultimoGiocoProposto = ""; 
let indiceBarzelletta = 0;
let indiceIndovinello = 0;
let indiceFraseSimpatica = 0;
let contatoreCuriosita = 0; 

document.addEventListener("DOMContentLoaded", () => {
    initAppCore();
    startClock();
});

function initAppCore() {
    renderQuickButtons();
    setupEventListeners();
}

function renderQuickButtons() {
    const container = document.getElementById("faq-buttons-container");
    if (!container) return;
    container.innerHTML = "";
    appConfig.quickButtons.forEach(btn => {
        const buttonEl = document.createElement("button");
        buttonEl.className = "quick-btn";
        buttonEl.innerHTML = `<i class="${btn.icon}"></i> ${btn.label.replace(/^[^\s]+\s/, '')}`;
        buttonEl.onclick = () => quickAction(btn.id);
        container.appendChild(buttonEl);
    });
}

function setupEventListeners() {
    const chatForm = document.getElementById("chat-form");
    if (chatForm) {
        chatForm.addEventListener("submit", (e) => {
            e.preventDefault();
            sendMessage();
        });
    }
    const newChatBtn = document.getElementById("new-chat-btn");
    if (newChatBtn) {
        newChatBtn.addEventListener("click", resetChat);
    }
}

function sendMessage() {
    const inputField = document.getElementById("user-input");
    if (!inputField) return;
    const message = inputField.value.trim();
    if (message === "") return;

    appendMessage(message, "user");
    inputField.value = "";

    setTimeout(() => {
        processUserQuery(message);
    }, 300);
}

/**
 * MOTORE SEMANTICO STRUTTURALE DI ELABORAZIONE QUERY
 * Gestione avanzata e robusta delle parole chiave, degli stati e delle ambiguità.
 */
function processUserQuery(query) {
    let cleanQuery = query.toLowerCase()
        .replace(/’/g, "'")
        .replace(/[èé]/g, "e")
        .replace(/[àá]/g, "a")
        .replace(/[ìí]/g, "i")
        .replace(/[òó]/g, "o")
        .replace(/[ùú]/g, "u")
        .replace(/[,!]/g, "")
        .replace(/\s+/g, " ")
        .trim();

    // =========================================================================
    // 0. INTERCETTAZIONE UNIVERSALE CHIUSURA / ANNULLAMENTO
    // =========================================================================
    const paroleChiusura = ["niente", "nulla", "grazie", "no grazie", "no va bene cosi", "va bene cosi", "ok", "ciao"];
    if (paroleChiusura.includes(cleanQuery)) {
        inAttesaSceltaOrganigramma = false;
        inAttesaSceltaResponsabile = false;
        inAttesaSceltaTipoPlesso = false;
        inAttesaSceltaTipoLaboratorio = false;
        inAttesaSedeLaboratorioInformatica = false;
        inAttesaSceltaParolaAmbiguita = false;
        rispondiBot("🤖 Perfetto! Se hai bisogno di altro o di altre informazioni sui servizi dell'IIS \"Arturo Checchi\", sono qui!");
        return;
    }

    // =========================================================================
    // 0.1 GESTIONE STATO ATTIVO: SCELTA SU PAROLA AMBIGUA (es. "team")
    // =========================================================================
    if (inAttesaSceltaParolaAmbiguita) {
        let parola = ultimaParolaDigitata;
        
        // Se l'utente risponde con "team digitale" o simili durante lo stato attivo, gestiamolo direttamente
        if (cleanQuery.includes("digitale") || cleanQuery.includes("specifico") || cleanQuery.includes("organigramma") || cleanQuery.includes("servizio") || cleanQuery.includes("ruolo") || cleanQuery.includes("chi") || cleanQuery.includes("responsabile")) {
            inAttesaSceltaParolaAmbiguita = false;
            ultimaParolaDigitata = "";
            rispondiBot(`💻 Per quanto riguarda il **servizio digitale e le piattaforme di collaborazione (Microsoft Teams)** all'IIS "Arturo Checchi", la piattaforma è integrata nel tenant M365 d'istituto per la didattica digitale integrata.\n\n*(Cos'altro vuoi chiedermi?)*`);
            return;
        }

        inAttesaSceltaParolaAmbiguita = false;
        ultimaParolaDigitata = "";

        if (cleanQuery.includes("definizione") || cleanQuery.includes("significato") || cleanQuery.includes("cos'e") || cleanQuery.includes("definire") || cleanQuery.includes("spiegare")) {
            if (appConfig.dictionary[parola]) {
                rispondiBot(appConfig.dictionary[parola] + "\n\n*(Cos'altro vuoi chiedermi?)*");
                return;
            }
        } else {
            // Se l'utente digita altro, processiamo la query normalmente
            processUserQuery(query);
            return;
        }
    }

    // =========================================================================
    // 1. VERIFICA PRIORITARIA FAQ GLOBALI (Intercetta anche "team digitale" se presente nelle FAQ o simili)
    // =========================================================================
    let matchedGlobalFaq = null;
    let highestGlobalScore = 0;
    appConfig.faqs.calcolaSomiglianzaStringa = calcolaSomiglianzaStringa;

    appConfig.faqs.forEach(faq => {
        faq.keywords.forEach(kw => {
            let score = calcolaSomiglianzaStringa(cleanQuery, kw);
            if (score > highestGlobalScore) {
                highestGlobalScore = score;
                matchedGlobalFaq = faq;
            }
        });
    });

    if (highestGlobalScore >= 0.82 && matchedGlobalFaq) {
        inAttesaSceltaOrganigramma = false;
        inAttesaSceltaResponsabile = false;
        inAttesaSceltaTipoPlesso = false;
        inAttesaSceltaTipoLaboratorio = false;
        inAttesaSedeLaboratorioInformatica = false;
        inAttesaSceltaParolaAmbiguita = false;

        ultimaCategoriaTrattata = matchedGlobalFaq.id;
        let resp = matchedGlobalFaq.responses[Math.floor(Math.random() * matchedGlobalFaq.responses.length)];
        rispondiBot(resp);
        return;
    }

    // Gestione diretta per "team digitale" o query composte con team
    if (cleanQuery.includes("team digitale") || cleanQuery.includes("animatore")) {
        rispondiBot(`💻 Per quanto riguarda i **servizi digitali, le piattaforme e la didattica online (Microsoft Teams)** dell'IIS "Arturo Checchi", puoi fare riferimento ai servizi M365 gestiti dall'amministrazione e dai tecnici informatici.\n\n*(Cos'altro vuoi chiedermi?)*`);
        return;
    }

    // =========================================================================
    // 2. GESTIONE STATO ATTIVO: ORGANIGRAMMA
    // =========================================================================
    if (inAttesaSceltaOrganigramma) {
        inAttesaSceltaOrganigramma = false;
        
        if (cleanQuery.includes("pdf") || cleanQuery.includes("scarica") || cleanQuery.includes("documento") || cleanQuery.includes("link") || cleanQuery.includes("intero") || cleanQuery.includes("completo") || cleanQuery.includes("si") || cleanQuery.includes("sì")) {
            rispondiBot("📄 Ecco il documento ufficiale dell'**Organigramma A.S. 2026-2027** in formato PDF:\n🔗 <a href='https://www.istitutochecchi.edu.it/download/821/organigramma/7168/organigramma-26-27-completo.pdf' target='_blank' style='color: #1e3a8a; font-weight: bold;'>Scarica Organigramma Completo PDF</a>\n\n*(Cos'altro vuoi chiedermi?)*");
            return;
        } else {
            rispondiBot("🤖 Va bene così! Se hai bisogno di altre informazioni sui servizi o sull'organigramma dell'IIS \"Arturo Checchi\", chiedi pure!");
            return;
        }
    }

    // =========================================================================
    // 3. INTERCETTAZIONE DIRETTA PAROLA CHIAVE "ORGANIGRAMMA"
    // =========================================================================
    if (cleanQuery === "organigramma" || cleanQuery === "l'organigramma" || cleanQuery.includes("organigramma")) {
        inAttesaSceltaOrganigramma = true;
        rispondiBot("📋 Ti interessa sapere qualcosa **nello specifico** dall'organigramma (come responsabili, tutor o laboratori), oppure preferisci che ti rilasci il **PDF completo** da scaricare?");
        return;
    }

    // =========================================================================
    // 4. INTERCETTAZIONE PAROLE ISOLATE / AMBIGUE (es. "team")
    // =========================================================================
    if (appConfig.dictionary[cleanQuery]) {
        inAttesaSceltaParolaAmbiguita = true;
        ultimaParolaDigitata = cleanQuery;
        rispondiBot(`📖 Ho trovato il termine **"${query}"**. Ti serve la **definizione** del termine o ti riferisci a qualcosa di **specifico** nell'ambito scolastico?`);
        return;
    }

    // =========================================================================
    // 5. INTERCETTAZIONE SPECIFICA LABORATORI (Tabella Ufficiale)
    // =========================================================================
    if (cleanQuery.includes("modellistica 1")) {
        rispondiBot("🧵 Per il **Laboratorio di Modellistica 1** (Sede V. Veneto), il responsabile è: **Mazza**[cite: 13].\n\n*(Cos'altro vuoi chiedermi?)*");
        return;
    }
    if (cleanQuery.includes("modellistica 2")) {
        rispondiBot("🧵 Per il **Laboratorio di Modellistica 2** (Sede V. Veneto), il responsabile è: **Desideri**[cite: 13].\n\n*(Cos'altro vuoi chiedermi?)*");
        return;
    }
    if (cleanQuery.includes("lim") || cleanQuery.includes("calzaturiero")) {
        rispondiBot("👞 Per il laboratorio **LIM/Calzaturiero** (Sede V. Veneto), il responsabile è: **Vaiani**[cite: 13].\n\n*(Cos'altro vuoi chiedermi?)*");
        return;
    }
    if (cleanQuery.includes("palestra nuova")) {
        rispondiBot("🏀 Per la **Palestra Nuova** (Sede Checchi), il responsabile è: **Schiera**[cite: 13].\n\n*(Cos'altro vuoi chiedermi?)*");
        return;
    }
    if (cleanQuery.includes("palazzetto")) {
        rispondiBot("🏟️ Per il **Palazzetto** (Sede Checchi), il responsabile è: **Angelini**[cite: 13].\n\n*(Cos'altro vuoi chiedermi?)*");
        return;
    }
    if (cleanQuery.includes("fisica") || cleanQuery.includes("scienze")) {
        rispondiBot("🔬 Per il **Laboratorio di Fisica/Scienze** (Sede Checchi), il responsabile è: **Pennacchio**[cite: 13].\n\n*(Cos'altro vuoi chiedermi?)*");
        return;
    }
    if (cleanQuery.includes("meccanica")) {
        rispondiBot("⚙️ Per il **Laboratorio di Meccanica** (Sede Gramsci), il responsabile è: **Picciolo**[cite: 13].\n\n*(Cos'altro vuoi chiedermi?)*");
        return;
    }
    if (cleanQuery.includes("impiantielettrici") || cleanQuery.includes("impianti elettrici")) {
        rispondiBot("⚡ Per il **Laboratorio di Impiantielettrici** (Sede Gramsci), il responsabile è: **Cerrato**[cite: 13].\n\n*(Cos'altro vuoi chiedermi?)*");
        return;
    }
    if (cleanQuery.includes("misureelettr") || cleanQuery.includes("misure elettriche")) {
        rispondiBot("📊 Per il laboratorio **MisureElettr.** (Sede Gramsci), il responsabile è: **Miatto**[cite: 13].\n\n*(Cos'altro vuoi chiedermi?)*");
        return;
    }
    if (cleanQuery.includes("elettropneumatica")) {
        rispondiBot("🔌 Per il **Laboratorio di Elettropneumatica** (Sede Gramsci), il responsabile è: **Miatto**[cite: 13].\n\n*(Cos'altro vuoi chiedermi?)*");
        return;
    }
    if (cleanQuery.includes("autocad")) {
        rispondiBot("💻 Per il **Laboratorio Autocad** (Sede Gramsci), il responsabile è: **Diazzi**[cite: 13].\n\n*(Cos'altro vuoi chiedermi?)*");
        return;
    }
    if (cleanQuery.includes("linguistico") || (cleanQuery.includes("green") && cleanQuery.includes("gramsci"))) {
        rispondiBot("🌐 Per il **Laboratorio Linguistico/Green** (Sede Gramsci), il responsabile è: **D'Avico**[cite: 13].\n\n*(Cos'altro vuoi chiedermi?)*");
        return;
    }
    if (cleanQuery.includes("palestra") && cleanQuery.includes("gramsci")) {
        rispondiBot("🏀 Per la **Palestra** (Sede Gramsci), il responsabile è: **Grassini**[cite: 13].\n\n*(Cos'altro vuoi chiedermi?)*");
        return;
    }
    if (cleanQuery.includes("aula green")) {
        rispondiBot("🌱 Per l'**Aula Green** (Sede Gramsci), il responsabile è: **Canneri**[cite: 13].\n\n*(Cos'altro vuoi chiedermi?)*");
        return;
    }

    // Gestione specifica per "Informatica" (presente in più sedi)
    if (cleanQuery.includes("informatica") || cleanQuery.includes("informatico")) {
        if (cleanQuery.includes("v. veneto") || cleanQuery.includes("veneto") || cleanQuery.includes("moda")) {
            rispondiBot("💻 Per il **Laboratorio di Informatica** (Sede Plesso Moda - V. Veneto), il responsabile è: **Galleni**[cite: 13].\n\n*(Cos'altro vuoi chiedermi?)*");
            return;
        } else if (cleanQuery.includes("checchi") || cleanQuery.includes("liceo") || cleanQuery.includes("informatico 1") || cleanQuery.includes("informatico 2")) {
            rispondiBot("💻 Per i **Laboratori Informatici 1 e 2** (Sede Liceo - Checchi), il responsabile è: **Turini**[cite: 13].\n\n*(Cos'altro vuoi chiedermi?)*");
            return;
        } else {
            inAttesaSedeLaboratorioInformatica = true;
            rispondiBot("💻 Il laboratorio di informatica è presente in più sedi. Ti riferisci alla sede di **V. Veneto** (Plesso Moda) o alla sede **Checchi** (Liceo)?");
            return;
        }
    }

    // Gestione laboratorio generico o typo
    if (cleanQuery.includes("laboratorio") || cleanQuery.includes("laboratori") || cleanQuery.includes("lavoratorio") || cleanQuery.includes("lavoratori")) {
        inAttesaSceltaTipoLaboratorio = true;
        rispondiBot("🔬 Vuoi conoscere la **lista completa di tutti i laboratori** o ti interessa un **laboratorio in particolare**?");
        return;
    }

    // Intercettazione iniziale di "responsabile" o "responsabili"
    const paroleResponsabiliGenerico = ["responsabile", "responsabili"];
    if (paroleResponsabiliGenerico.includes(cleanQuery)) {
        inAttesaSceltaResponsabile = true;
        rispondiBot("🤖 A quali responsabili ti riferisci? Vuoi conoscere i **responsabili di plesso** o i **responsabili di laboratorio**?");
        return;
    }

    // =========================================================================
    // 6. VALIDAZIONE STRUTTURALE DEL CONTESTO (Parole singole/ambigue)
    // =========================================================================
    const paroleContestoMancante = ["referente", "referenti", "commissione", "commissioni", "chi"];
    if (paroleContestoMancante.includes(cleanQuery)) {
        rispondiBot("🤖 Per favore, specifica a quale servizio, progetto o ruolo ti riferisci (es. *comitato di valutazione*, *laboratorio di informatica*), così posso darti l'informazione corretta dall'organigramma!");
        return;
    }

    // =========================================================================
    // 7. CONTINUAZIONE CONVERSAZIONALE
    // =========================================================================
    const intentiContinuazione = ["aiutami con altro", "aiutami", "altro", "si", "sì", "ok", "dimmi", "certo", "va bene", "prosegui"];
    if (intentiContinuazione.includes(cleanQuery)) {
        ultimaCategoriaTrattata = "";
        rispondiBot("🤖 Certamente! Dimmi pure, quale altra informazione ti serve o di quale servizio dell'IIS \"Arturo Checchi\" hai bisogno?");
        return;
    }

    if (cleanQuery.length < 2) {
        rispondiBot(`🤖 Non ho capito bene cosa intendi con "${query}". Prova a scrivermi una domanda completa o usa i pulsanti rapidi a lato!`);
        return;
    }

    let fraseCasuale = appConfig.frasiSimpaticheFuoriTema[indiceFraseSimpatica];
    indiceFraseSimpatica = (indiceFraseSimpatica + 1) % appConfig.frasiSimpaticheFuoriTema.length;
    rispondiBot(fraseCasuale);
}

function calcolaSomiglianzaStringa(s1, s2) {
    if (s1 === s2) return 1.0;
    if (s1.includes(s2) || s2.includes(s1)) return 0.85;
    
    let longer = s1;
    let shorter = s2;
    if (s1.length < s2.length) {
        longer = s2;
        shorter = s1;
    }
    let longerLength = longer.length;
    if (longerLength === 0) {
        return 1.0;
    }
    
    let costs = new Array();
    for (let i = 0; i <= s1.length; i++) {
        let lastValue = i;
        for (let j = 0; j <= s2.length; j++) {
            if (i === 0) {
                costs[j] = j;
            } else {
                if (j > 0) {
                    let newValue = costs[j - 1];
                    if (s1.charAt(i - 1) !== s2.charAt(j - 1)) {
                        newValue = Math.min(Math.min(newValue, lastValue), costs[j]) + 1;
                    }
                    costs[j - 1] = lastValue;
                    lastValue = newValue;
                }
            }
        }
        if (i > 0) {
            costs[s2.length] = lastValue;
        }
    }
    let editDistance = costs[s2.length];
    return (longerLength - editDistance) / longerLength;
}

function rispondiBot(testo) {
    appendMessage(testo, "bot");
}

function quickAction(id) {
    let found = appConfig.faqs.find(f => f.id === id);
    if (found) {
        ultimaCategoriaTrattata = found.id;
        rispondiBot(found.responses[0]);
    }
}

function appendMessage(text, sender) {
    const chatBox = document.getElementById("chat-messages");
    if (!chatBox) return;
    
    const messageDiv = document.createElement("div");
    const isBot = (sender === "bot");
    messageDiv.classList.add("message", isBot ? "bot-message" : "user-message");

    const avatarDiv = document.createElement("div");
    avatarDiv.classList.add("message-avatar");
    avatarDiv.innerHTML = `<i class="${isBot ? "fa-solid fa-robot" : "fa-solid fa-user"}"></i>`;

    const bubble = document.createElement("div");
    bubble.classList.add("message-content");
    bubble.innerHTML = text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>').replace(/\n/g, "<br>");

    if (isBot) {
        messageDiv.appendChild(avatarDiv);
        messageDiv.appendChild(bubble);
    } else {
        messageDiv.appendChild(bubble);
        messageDiv.appendChild(avatarDiv);
    }

    chatBox.appendChild(messageDiv);
    chatBox.scrollTop = chatBox.scrollHeight;
}

function resetChat() {
    inAttesaSceltaResponsabile = false;
    inAttesaSceltaTipoPlesso = false;
    inAttesaSceltaTipoLaboratorio = false;
    inAttesaSedeLaboratorioInformatica = false;
    inAttesaSceltaOrganigramma = false;
    inAttesaSceltaParolaAmbiguita = false;
    ultimaParolaDigitata = "";
    ultimaCategoriaTrattata = "";
    const chatBox = document.getElementById("chat-messages");
    if (!chatBox) return;
    chatBox.innerHTML = `
        <div class="message bot-message">
            <div class="message-avatar"><i class="fa-solid fa-robot"></i></div>
            <div class="message-content">
                👋 Ciao! Sono <strong>Arturo</strong>, il tuo assistente virtuale ufficiale dell'IIS "Arturo Checchi".<br><br>
                Conversazione riavviata! Come posso aiutarti oggi?
            </div>
        </div>
    `;
}

function startClock() {
    const clockEl = document.getElementById("live-clock");
    if (!clockEl) return;
    
    function updateDateTime() {
        const now = new Date();
        const options = { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' };
        const dataFormattata = now.toLocaleDateString('it-IT', options);
        const oraFormattata = now.toLocaleTimeString('it-IT');
        
        if (clockEl) {
            clockEl.innerHTML = `<i class="fa-regular fa-clock"></i> ${dataFormattata} - ${oraFormattata}`;
        }
    }
    
    updateDateTime();
    setInterval(updateDateTime, 1000);
}
