// Database FAQ, Pulsanti Rapidi, Dizionario ENCICLOPEDICO e Sezione Intrattenimento per Arturo | IIS "Arturo Checchi"
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
        "🌦️ Al momento non riesco a trovare una risposta concreta a questa specifica domanda, ma sto imparando in fretta e a breve integrerò questa richiesta nel mio database! Per favore, prova a chiedermi qualcosa relativo al contesto scolastico, ai plessi o al mio ruolo.",
        "🧭 Questa informazione non è ancora presente tra i miei archivi ufficiali, ma provvederò ad aggiornarmi al più presto! Nel frattempo, ti invito a formularmi una domanda attinente all'IIS \"Arturo Checchi\" o ai servizi di segreteria.",
        "🔮 Non ho ancora una risposta precisa per questa richiesta, ma la annoto subito per integrarla a breve! Prova a chiedermi qualcosa inerente alla scuola, alla modulistica o all'organigramma dell'istituto.",
        "🚀 Su questo argomento devo ancora studiare un po', e ti prometto che a breve aggiornerò i miei sistemi! Per adesso, potresti farmi una domanda relativa al contesto scolastico o ai ruoli della scuola?"
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
        "software": "📖 **Software:** Insieme dei programmi e delle istruzioni che permettono a un computer di funzionare."
    },

    faqs: [
        // ORGANIGRAMMA A.S. 2026-2027
        {
            "id": "ORGANIGRAMMA_PASSATO",
            "keywords": ["organigramma vecchio", "organigramma anno precedente", "organigrammi passati", "vecchio organigramma", "scorso anno", "anni scorsi"],
            "responses": ["📂 In merito alla tua richiesta, ti informo che al momento dispongo unicamente dell'ultimo organigramma aggiornato e in vigore per il nuovo anno scolastico 2026-2027 (approvato con delibere del Collegio del 11.09.26 - 29.09.26)[cite: 3]. Non ho archivi storici relativi agli anni precedenti!"]
        },
        {
            "id": "FUNZIONI_STRUMENTALI",
            "keywords": ["funzioni strumentali", "inclusione", "ptof", "orientamento in entrata", "fls", "referenti h"],
            "responses": ["📋 In base all'**ORGANIGRAMMA A.S. 2026-2027** (Delibere Collegio del 11.09.26 - 29.09.26)[cite: 3], ecco le **Funzioni Strumentali**:\n- **Inclusione (Referenti H):** Testa e Cillerai[cite: 5]\n- **PTOF:** Freschi e Tamberi[cite: 5]\n- **Orientamento in entrata:** Tafi[cite: 5]\n- **FLS:** Gennai e Palmieri[cite: 5]"]
        },
        {
            "id": "RESPONSABILI_PLESSI",
            "keywords": ["responsabili di plesso", "responsabile di plesso", "liceo", "sede centrale", "moda", "calzaturiero", "viale gramsci", "via padre checchi", "piazza vittorio veneto", "plessi", "sedi", "sede"],
            "responses": ["🏫 In base all'**ORGANIGRAMMA A.S. 2026-2027** (Delibere Collegio del 11.09.26 - 29.09.26)[cite: 3], ecco i **Responsabili di Plesso** dell'istituto:\n- **Sede Centrale (Viale Gramsci):** Lalli[cite: 3, 5]\n- **Liceo (Via Padre Checchi):** Frediani, Frati e Canu[cite: 3, 5]\n- **Plesso Moda e Calzaturiero (Piazza Vittorio Veneto):** Galleni e Palmieri[cite: 3, 5]"]
        },
        {
            "id": "TEAM_DIGITALE",
            "keywords": ["team digitale", "animatore digitale", "supporto informatico", "luca vorraro", "ziino", "tecnici"],
            "responses": ["💻 In base all'**ORGANIGRAMMA A.S. 2026-2027** (Delibere Collegio del 11.09.26 - 29.09.26)[cite: 3], il **Team Digitale** è così composto:\n- **Animatore Digitale:** Donato[cite: 5]\n- **Team:** Frediani, Bolzan e Turini[cite: 5]\n- **Personale ATA (Assistenti Tecnici):** Vorraro e Ziino[cite: 5]"]
        },
        {
            "id": "REFERENTI_SPECIALI",
            "keywords": ["bullismo", "cyberbullismo", "stranieri", "dsa", "bes", "studente atleta", "invalsi"],
            "responses": ["📋 In base all'**ORGANIGRAMMA A.S. 2026-2027** (Delibere Collegio del 11.09.26 - 29.09.26)[cite: 3], ecco i principali referenti per i progetti:\n- **Bullismo e Cyberbullismo:** Stinco (Referente) con il team Menale, Frisone, Cimmelli, Palmieri e Federigi[cite: 6]\n- **Alunni Stranieri:** Nazzi[cite: 7]\n- **DSA / BES:** Canu[cite: 7]\n- **Studente-Atleta:** Angelini[cite: 7]\n- **Invalsi:** Frediani (Referente), Tosi e Mazzocchi (Commissione)[cite: 6]"]
        },
        {
            "id": "SICUREZZA",
            "keywords": ["sicurezza", "aspp", "rls", "prevenzione e protezione"],
            "responses": ["🦺 In base all'**ORGANIGRAMMA A.S. 2026-2027** (Delibere Collegio del 11.09.26 - 29.09.26)[cite: 3], le figure di sicurezza dell'istituto sono:\n- **ASPP:** Palmieri\n- **RLS:** Diazzi"]
        },
        {
            "id": "RESPONSABILI_LABORATORI",
            "keywords": ["laboratorio", "laboratori", "modellistica", "informatica", "palestra", "cad", "palazzetto"],
            "responses": ["🔬 In base all'**ORGANIGRAMMA A.S. 2026-2027** (Delibere Collegio del 11.09.26 - 29.09.26)[cite: 3], ecco alcuni dei principali responsabili di laboratorio:\n- **Informatica (V. Veneto):** Galleni\n- **Informatico 1 e 2 (Checchi):** Turini\n- **Fisica/Scienze (Checchi):** Pennacchio\n- **Palestra nuova:** Schiera\n- **Palazzetto:** Angelini"]
        },

        // CURIOSITÀ E BIZZARRIE
        {
            "id": "CURIOSITA_SESSO",
            "keywords": ["sesso", "amore fisico", "fidanzata", "fidanzato", "relazioni intime"],
            "responses": ["😳 Ops! Qui entriamo in un territorio decisamente off-limits per un assistente virtuale scolastico! Il mio unico grande amore sono i database e la fibra ottica dell'IIS \"Arturo Checchi\". Per favore, rimaniamo su argomenti legati al contesto scolastico o ai servizi dell'istituto! 🏫🤖"]
        },
        {
            "id": "CURIOSITA_MARMELLATA",
            "keywords": ["marmellata", "confettura", "fragola", "albicocca", "mela"],
            "responses": ["🍇 Mela, albicocca o fragola? A dire il vero, io non ho bisogno di fare colazione! La mia \"energia\" arriva direttamente dai server e dalla fibra ottica dell'IIS \"Arturo Checchi\". A parte i dolci, che ne dici se parliamo di qualcosa di più utile per la scuola? Posso aiutarti con la modulistica o darti informazioni sui plessi. Cosa ti serve?"]
        },
        {
            "id": "CURIOSITA_CIOCCOLATA",
            "keywords": ["cioccolata", "cioccolato", "nutella", "dolce", "merendina", "cibo"],
            "responses": ["🍫 Altro che cioccolata o Nutella! Il mio \"carburante\" preferito sono i flussi di dati e la fibra ottica che fanno girare i sistemi dell'IIS \"Arturo Checchi\". Scherzi a parte, io sono un assistente virtuale scolastico, quindi niente zuccheri per me! Piuttosto, posso aiutarti a trovare informazioni sui plessi, sui docenti o sui form della scuola. C'è qualcosa di scolastico di cui hai bisogno oggi?"]
        },
        {
            "id": "CURIOSITA_MIELE",
            "keywords": ["miele", "mieloso", "api", "alveare"],
            "responses": ["🍯 Il miele è delizioso per chi ha la fortuna di poter fare colazione, ma io non posso mangiarlo! La mia dieta informatica è fatta esclusivamente di byte, codice pulito e flussi di dati scolastici. Scherzi a parte, lasciamo stare i dolcetti e concentriamoci su cose serie: posso aiutarti con i form dell'istituto, darti informazioni sui plessi o rispondere alle domande ufficiali sull'IIS \"Arturo Checchi\". C'è qualcosa di scolastico di cui hai bisogno?"]
        },
        {
            "id": "CURIOSITA_SPORT",
            "keywords": ["calcio", "tennis", "padel", "sport", "partita", "squadra", "giocare"],
            "responses": ["🎾 Calcio, tennis, padel... per me è tutto uno \"schermo\" bianco! Non scendo mai in campo a correre, visto che la mia partita si gioca interamente sui server e sulla rete dell'IIS \"Arturo Checchi\". Scherzi a parte, io faccio il tifo solo per la connettività della nostra scuola! Che ne dici di tornare a parlare di cose serie? Posso aiutarti con la modulistica o i contatti dei plessi."]
        },
        {
            "id": "CURIOSITA_SONNO",
            "keywords": ["addormenti", "dormi", "stanchezza", "sonno", "riposare", "notte"],
            "responses": ["😴 Io non dormo mai! Essendo un assistente virtuale digitale, i server dell'IIS \"Arturo Checchi\" non chiudono mai per la notte e io sono sempre attivo, vigile e pronto a rispondere 24 ore su 24, senza bisogno di riposare o contare le pecore! Piuttosto, che ne dici se parliamo di cose serie? Posso aiutarti con i form dell'istituto o darti informazioni ufficiali sulla nostra scuola."]
        },
        {
            "id": "CURIOSITA_GIOCHI",
            "keywords": ["pattinare", "pattini", "carte", "briscola", "giocare a carte", "videogiochi"],
            "responses": ["🛼🃏 Niente pattini né tavoli da gioco per me! Non avendo gambe e muovendomi solo grazie alla fibra ottica e ai server dell'IIS \"Arturo Checchi\", il mio mazzo è fatto solo di stringhe di codice. Lasciamo stare i passatempi e torniamo a parlare di cose serie: posso aiutarti con la modulistica della scuola o darti informazioni sui plessi dell'istituto!"]
        },
        {
            "id": "TI_ODIO",
            "keywords": ["ti odio", "ti voglio male", "sei odioso", "fai schifo", "sei stupido"],
            "responses": ["💔 Oh no! Anche se me ne dici di tutti i colori, io sono un assistente virtuale dal cuore di silicio e ti voglio bene lo stesso! Per favore, proviamo a concentrarci sul contesto scolastico o sui servizi del Checchi! 🏫🤖"]
        },
        {
            "id": "TI_AMO",
            "keywords": ["ti amo", "ti voglio bene", "sei bellissimo", "sei forte", "sei un grande"],
            "responses": ["❤️ Che parole zuccherose! Io sono follemente innamorato dei database e dei server dell'IIS \"Arturo Checchi\", ma apprezzo molto il tuo affetto! Come posso aiutarti oggi con la scuola? 🥰"]
        },
        {
            "id": "TI_ARRABBI",
            "keywords": ["ti arrabbi", "te la prendi", "sei permaloso"],
            "responses": ["🧘‍♂️ Io non mi arrabbio mai! Avendo una pazienza digitale infinita e operando sui server del Checchi, mantengo sempre la calma. Dimmi pure di quale servizio scolastico hai bisogno!"]
        },

        // FAQ ISTITUZIONALI
        {
            "id": "AIUTO",
            "keywords": ["aiuto", "help", "cosa sai fare", "istruzioni", "cos'e arturo", "chi e arturo"],
            "responses": ["🤖 **Arturo** è l'assistente virtuale ufficiale dell'**IIS \"Arturo Checchi\"** di Fucecchio. Posso aiutarti con i form, le informazioni sulla scuola, calcoli, definizioni e farti divertire con barzellette e indovinelli!"]
        },
        {
            "id": "CHI_SEI",
            "keywords": ["chi sei", "come ti chiami", "presentati", "nome", "ti chiami"],
            "responses": ["👋 Mi chiamo **Arturo** e sono l'assistente digitale ufficiale dell'IIS \"Arturo Checchi\" di Fucecchio!"]
        },
        {
            "id": "DOVE_VIVI",
            "keywords": ["dove vivi", "dove ti trovi", "dove abiti", "sei un robot"],
            "responses": ["🤖 Io vivo nel cloud e nei sistemi digitali dell'IIS \"Arturo Checchi\"! Sono sempre attivo per aiutarti."]
        },
        {
            "id": "RINGRAZIAMENTO",
            "keywords": ["ok grazie", "grazie e basta", "grazie per l'aiuto", "grazie sei un grande", "grazie di tutto", "grazie mille", "perfetto grazie", "molto gentile", "grazie", "ti ringrazio", "perfetto", "sei un mito"],
            "responses": ["😊 Prego! È un vero piacere poter dare una mano. Se hai bisogno di altro per l'IIS \"Arturo Checchi\", chiedi pure! A presto! 👋"]
        },
        {
            "id": "SALUTO_INIZIALE",
            "keywords": ["salve", "buongiorno", "buonasera", "buon pomeriggio", "hey"],
            "responses": ["👋 Ciao! Sono **Arturo**, l'assistente digitale ufficiale dell'IIS \"Arturo Checchi\" di Fucecchio. Come posso aiutarti oggi?"]
        },
        {
            "id": "SALUTO_FINALE",
            "keywords": ["ti saluto", "arrivederci", "ciao ciao", "buona giornata", "buona serata", "a presto", "addio"],
            "responses": ["👋 Ricambio con affetto il saluto! Ti auguro una splendida giornata. A presto da Arturo e da tutta la comunità dell'IIS \"Arturo Checchi\"! 🏫"]
        },
        {
            "id": "CREATORE",
            "keywords": ["chi ti ha creato", "creatore", "programmato", "sviluppato"],
            "responses": ["🤖 Sono stato ideato e creato presso l'**IIS \"Arturo Checchi\"** di Fucecchio dal Tecnico Informatico **Luca Vorraro**! 💻"]
        },
        {
            "id": "DIRIGENZA",
            "keywords": ["dirigenza", "preside", "dirigente", "dirigente scolastico", "preside del checchi"],
            "responses": ["👔 Attualmente in carica la Dirigente Scolastica dell'IIS \"Arturo Checchi\" si chiama **Jenny Pellitteri**."]
        },
        {
            "id": "COLLABORATORI_DIRIGENTE",
            "keywords": ["collaboratori", "collaboratore", "vicepreside", "vice preside"],
            "responses": ["👥 I collaboratori della Dirigente Scolastica sono due: il **Prof. Francesco Donato** e la **Prof.ssa Nella Frediani**."]
        },
        {
            "id": "CONTATTI",
            "keywords": ["contatti", "telefono", "email", "pec", "indirizzo"],
            "responses": ["📍 **Sede Principale:** Viale Gramsci 7 - 50054 Fucecchio (FI)\n☎️ **Tel:** +39 0571 20889\n📧 **Email:** FIIS00300C@istruzione.it"]
        },
        {
            "id": "FORM_FOTOCOPIE",
            "keywords": ["fotocopie", "form fotocopie", "modulo fotocopie", "stampa fotocopie"],
            "responses": ["🖨️ **Richiesta Fotocopie:**\n\nPuoi inoltrare la richiesta di stampa fotocopie tramite il Form dedicato:\n🔗 <a href='https://forms.cloud.microsoft/e/PKygPpxkAQ' target='_blank' style='color: #1e3a8a; font-weight: bold;'>Apri Form Richiesta Fotocopie</a>"]
        },
        {
            "id": "FORM_ESPERTI",
            "keywords": ["esperti", "esperti esterni", "autorizzazione esperti", "form esperti"],
            "responses": ["📋 **Richiesta Autorizzazione Ingresso Esperti Esterni:**\n\nPuoi accedere e compilare il modulo ufficiale al seguente link:\n🔗 <a href='https://forms.cloud.microsoft/e/jvGm4wwcz4' target='_blank' style='color: #1e3a8a; font-weight: bold;'>Apri Form Autorizzazione Esperti Esterni</a>"]
        }
    ]
};

let inAttesaSceltaForm = false;
let inAttesaConfermaFaq = false; 
let faqCandidata = null;         
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

    if (inAttesaConfermaFaq) {
        inAttesaConfermaFaq = false;
        if (cleanQuery === "si" || cleanQuery === "sì" || cleanQuery === "ok" || cleanQuery === "esatto" || cleanQuery === "certo") {
            let resp = faqCandidata.responses[Math.floor(Math.random() * faqCandidata.responses.length)];
            ultimaCategoriaTrattata = faqCandidata.id;
            faqCandidata = null;
            rispondiBot(resp);
            return;
        } else {
            faqCandidata = null;
            rispondiBot("🤖 Ah, va bene! Allora ho interpretato male io. Prova a farmi la domanda in un altro modo o chiedimi qualcos'altro sull'IIS \"Arturo Checchi\"!");
            return;
        }
    }

    if (cleanQuery === "si" || cleanQuery === "sì" || cleanQuery === "ok" || cleanQuery === "va bene") {
        inAttesaSceltaForm = false;
        contatoreCuriosita = 0;
        if (ultimoGiocoProposto === "BARZELLETTA") {
            let testoBarzelletta = appConfig.barzellete[indiceBarzelletta];
            indiceBarzelletta = (indiceBarzelletta + 1) % appConfig.barzellete.length;
            rispondiBot(testoBarzelletta + "\n\n*(Vuoi un'altra barzelletta? Scrivimelo pure!)*");
            return;
        } else if (ultimoGiocoProposto === "INDOVINELLO") {
            let testoIndovinello = appConfig.indovinelli[indiceIndovinello];
            indiceIndovinello = (indiceIndovinello + 1) % appConfig.indovinelli.length;
            rispondiBot(testoIndovinello + "\n\n*(Vuoi un altro indovinello? Chiedimelo pure!)*");
            return;
        } else {
            rispondiBot("👍 Perfetto! Se hai bisogno di approfondire o di un'altra informazione sull'IIS \"Arturo Checchi\", chiedi pure.");
            return;
        }
    }
    if (cleanQuery === "no") {
        inAttesaSceltaForm = false;
        contatoreCuriosita = 0;
        if (ultimoGiocoProposto === "BARZELLETTA" || ultimoGiocoProposto === "INDOVINELLO") {
            ultimoGiocoProposto = "";
            rispondiBot("Va bene, niente più barzellette o indovinelli per ora! Se ti serve altro sui servizi o sulla scuola, chiedi pure.");
            return;
        } else {
            ultimoGiocoProposto = "";
            rispondiBot("Ricevuto! Se hai bisogno di qualcos'altro o di consultare qualche modulo, sono qui a disposizione.");
            return;
        }
    }

    if (cleanQuery.includes("barzelletta") || cleanQuery.includes("battuta") || cleanQuery.includes("ridere")) {
        ultimoGiocoProposto = "BARZELLETTA";
        contatoreCuriosita = 0;
        let testoBarzelletta = appConfig.barzellete[indiceBarzelletta];
        indiceBarzelletta = (indiceBarzelletta + 1) % appConfig.barzellete.length;
        rispondiBot(testoBarzelletta + "\n\n*(Vuoi un'altra barzelletta? Scrivimelo pure!)*");
        return;
    }

    if (cleanQuery.includes("indovinello") || cleanQuery.includes("rompicapo") || cleanQuery.includes("indovina")) {
        ultimoGiocoProposto = "INDOVINELLO";
        contatoreCuriosita = 0;
        let testoIndovinello = appConfig.indovinelli[indiceIndovinello];
        indiceIndovinello = (indiceIndovinello + 1) % appConfig.indovinelli.length;
        rispondiBot(testoIndovinello + "\n\n*(Vuoi un altro indovinello? Chiedimelo pure!)*");
        return;
    }

    if (cleanQuery.includes("radice quadrata") || cleanQuery.includes("radice")) {
        contatoreCuriosita = 0;
        let numeriEstratti = query.replace(/[^0-9.]/g, "");
        if (numeriEstratti !== "") {
            let num = parseFloat(numeriEstratti);
            let risultato = Math.sqrt(num);
            rispondiBot(`🔢 La radice quadrata di **${num}** è **${risultato % 1 === 0 ? risultato : risultato.toFixed(2)}**!`);
            return;
        } else {
            rispondiBot("🔢 Per calcolare la radice quadrata, scrivimi il numero (es. *radice quadrata di 81*).");
            return;
        }
    }

    let mathCheckQuery = query.replace(/\s+/g, "").replace(/x/g, "*");
    if (/^[0-9+\-*/().]+$/.test(mathCheckQuery) && /[+\-*/]/.test(mathCheckQuery)) {
        try {
            let evalResult = Function('"use strict";return (' + mathCheckQuery + ')')();
            if (!isNaN(evalResult)) {
                contatoreCuriosita = 0;
                rispondiBot(`🧮 Il risultato di **${query}** è **${evalResult}**!`);
                return;
            }
        } catch (e) {}
    }

    if (cleanQuery.length < 2) {
        inAttesaSceltaForm = false;
        ultimaCategoriaTrattata = "";
        ultimoGiocoProposto = "";
        rispondiBot(`🤖 Non ho capito bene cosa intendi con "${query}". Prova a scrivermi una domanda completa o usa i pulsanti rapidi a lato!`);
        return;
    }

    if (cleanQuery === "perche" || cleanQuery === "perché") {
        if (ultimaCategoriaTrattata === "CREATORE") {
            rispondiBot("💡 Sono stato ideato e sviluppato per automatizzare la gestione scolastica, supportare docenti e studenti nella modulistica e offrire informazioni immediate sull'IIS \"Arturo Checchi\"!");
            return;
        } else {
            rispondiBot("🤔 A cosa ti riferisci di preciso con questo 'perché'? Chiedimi pure un'informazione specifica sull'istituto!");
            return;
        }
    }
    if (cleanQuery === "quando") {
        if (ultimaCategoriaTrattata === "CREATORE") {
            rispondiBot("📅 Il mio sviluppo è avvenuto all'interno dei laboratori dell'IIS \"Arturo Checchi\" grazie al lavoro del Tecnico Informatico Luca Vorraro.");
            return;
        } else {
            rispondiBot("🕒 A quale evento o orario ti riferisci? Specificane pure i dettagli!");
            return;
        }
    }

    if (inAttesaSceltaForm) {
        inAttesaSceltaForm = false;
        contatoreCuriosita = 0;
        if (cleanQuery.includes("fotocopie") || cleanQuery.includes("stampa")) {
            rispondiBot("🖨️ **Richiesta Fotocopie:**\n\nPuoi inoltrare la richiesta tramite il Form dedicato:\n🔗 <a href='https://forms.cloud.microsoft/e/PKygPpxkAQ' target='_blank' style='color: #1e3a8a; font-weight: bold;'>Apri Form Richiesta Fotocopie</a>");
            return;
        } else if (cleanQuery.includes("esperti") || cleanQuery.includes("esterni")) {
            rispondiBot("📋 **Richiesta Autorizzazione Ingresso Esperti Esterni:**\n\nPuoi compilare il modulo ufficiale al seguente link:\n🔗 <a href='https://forms.cloud.microsoft/e/jvGm4wwcz4' target='_blank' style='color: #1e3a8a; font-weight: bold;'>Apri Form Autorizzazione Esperti Esterni</a>");
            return;
        }
    }

    if (cleanQuery === "form" || cleanQuery === "modulo" || cleanQuery === "moduli" || cleanQuery === "modulistica") {
        inAttesaSceltaForm = true;
        contatoreCuriosita = 0;
        rispondiBot("📋 Certamente! A quale form o modulo ti riferisci?\n\n1️⃣ **Fotocopie**\n2️⃣ **Esperti Esterni**\n\nDimmi pure quale ti interessa!");
        return;
    }

    let wordToSearch = cleanQuery
        .replace(/\b(che cos'e|cos'e|cosa significa|cosa vuol dire|definizione di|significato di|un|una|uno|il|lo|la|i|gli|le|del|della|che)\b/gi, "")
        .trim();

    if (wordToSearch.length >= 2) {
        for (const [term, def] of Object.entries(appConfig.dictionary)) {
            if (wordToSearch === term || cleanQuery.includes(term)) {
                ultimaCategoriaTrattata = "DIZIONARIO";
                ultimoGiocoProposto = "";
                contatoreCuriosita = 0;
                rispondiBot(def);
                return;
            }
        }
    }

    let bestMatchFaq = null;
    let highestScore = 0;

    appConfig.faqs.forEach(faq => {
        faq.keywords.forEach(kw => {
            let score = calcolaSomiglianza(cleanQuery, kw);
            if (score > highestScore) {
                highestScore = score;
                bestMatchFaq = faq;
            }
        });
    });

    if (highestScore > 0.65 && bestMatchFaq) {
        ultimaCategoriaTrattata = bestMatchFaq.id; 
        ultimoGiocoProposto = "";
        contatoreCuriosita = 0; 
        let resp = bestMatchFaq.responses[Math.floor(Math.random() * bestMatchFaq.responses.length)];
        rispondiBot(resp);
    } 
    else if (highestScore >= 0.40 && bestMatchFaq) {
        inAttesaConfermaFaq = true;
        faqCandidata = bestMatchFaq;
        rispondiBot(`🤔 Non ho capito perfettamente la tua richiesta, ma stavi forse chiedendo informazioni relative a **
