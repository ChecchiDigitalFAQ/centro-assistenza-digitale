/**
 * ARCHITETTURA CORE DI ARTURO - ASSISTENTE VIRTUALE UFFICIALE
 * IIS "Arturo Checchi" (Fucecchio)
 * Sviluppato da Luca Vorraro (Assistente Tecnico Informatico)
 * Versione Definitiva a Riscontro Esatto (Scalabile e Pulita)
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
            "responses": ["🧭 In base all'**ORGANIGRAMMA A.S. 2026-2027** (Delibere Collegio del 11.09.26 - 29.09.26), l'**Orientatore** dell'istituto è:\n- **Frediani**\n\n*(Cos'altro vuoi chiedermi?)*"]
        },
        {
            "id": "TUTOR",
            "keywords": ["tutor", "professori tutor", "elenco tutor", "lista tutor", "chi sono i tutor", "tutor scolastici", "nomi tutor"],
            "responses": ["👥 In base all'**ORGANIGRAMMA A.S. 2026-2027** (Delibere Collegio del 11.09.26 - 29.09.26), ecco l'elenco dei **Docenti Tutor**:\n1. Nazzi\n2. Guarino\n3. Vaccaro\n4. Tortorella\n5. Desideri\n6. Senese\n7. Scardaccione\n8. Tamberi\n9. Cerbioni\n10. Menale\n11. Rasori\n12. Faraoni\n13. Frisone\n14. Galfano\n15. Sibione\n16. Canneri\n17. Tognarelli\n\n*(Cos'altro vuoi chiedermi?)*"]
        },
        {
            "id": "SICUREZZA",
            "keywords": ["sicurezza", "figure sicurezza", "aspp", "rls", "prevenzione e protezione", "responsabile sicurezza"],
            "responses": ["🦺 In base all'**ORGANIGRAMMA A.S. 2026-2027** (Delibere Collegio del 11.09.26 - 29.09.26), le **Figure di Sicurezza** e i principali ruoli dell'istituto sono:\n- **ASPP:** Palmieri\n- **RLS:** Diazzi\n\nPuoi anche chiedermi specificamente i **responsabili di plesso** o i **responsabili di laboratorio**!\n\n*(Cos'altro vuoi chiedermi?)*"]
        },
        {
            "id": "ANIMATORE_DIGITALE",
            "keywords": ["animatore digitale", "chi è l'animatore digitale", "chi e l animatore digitale", "animatore"],
            "responses": ["💻 In base all'**ORGANIGRAMMA A.S. 2026-2027** (Delibere Collegio del 11.09.26 - 29.09.26), l'**Animatore Digitale** dell'istituto è:\n- **Donato**\n\n*(Cos'altro vuoi chiedermi?)*"]
        },
        {
            "id": "TEAM_DIGITALE_MEMBRI",
            "keywords": ["chi fa parte del team digitale", "com'è costituito il team digitale", "come e costituito il team digitale", "squadra del team digitale", "componenti team digitale", "membri team digitale"],
            "responses": ["💻 In base all'**ORGANIGRAMMA A.S. 2026-2027** (Delibere Collegio del 11.09.26 - 29.09.26), il **Team Digitale** è così composto:\n- **Animatore Digitale:** Donato\n- **Team:** Frediani, Bolzan, Turini\n- **Personale ATA:** Vorraro, Ziino\n\n*(Cos'altro vuoi chiedermi?)*"]
        },
        {
            "id": "TEAM_DIGITALE_COMPiti",
            "keywords": ["di cosa si occupa il team digitale", "cosa fa il team digitale", "compiti team digitale"],
            "responses": ["💻 Per quanto riguarda il **Team Digitale** e i servizi di digitalizzazione e supporto tecnologico dell'IIS \"Arturo Checchi\", l'animatore digitale e il team gestiscono le piattaforme M365, i laboratori informatici e l'assistenza tecnica.\n\n*(Cos'altro vuoi chiedermi?)*"]
        },
        {
            "id": "TEAM_BULLISMO",
            "keywords": ["bullismo", "cyberbullismo", "team bullismo", "prevenzione bullismo"],
            "responses": ["🛡️ Il **Team Anti-Bullismo e Cyberbullismo** dell'istituto si occupa di prevenzione, ascolto e gestione di eventuali criticità legate al benessere relazionale degli studenti.\n\n*(Cos'altro vuoi chiedermi?)*"]
        },
        {
            "id": "TEAM_MOBILITA",
            "keywords": ["mobilità internazionale", "erasmus", "progetti europei", "estero"],
            "responses": ["✈️ Il **Team per la Mobilità Internazionale** coordina i progetti europei e i programmi di mobilità (come Erasmus+) per offrire agli studenti opportunità di formazione all'estero.\n\n*(Cos'altro vuoi chiedermi?)*"]
        },
        {
            "id": "ACCOGLIENZA",
            "keywords": ["accoglienza", "inserimento studenti", "nuovi studenti"],
            "responses": ["🏫 Il servizio di **Accoglienza** dell'istituto promuove attività mirate a favorire il sereno inserimento e l'integrazione dei nuovi studenti nelle classi.\n\n*(Cos'altro vuoi chiedermi?)*"]
        },
        {
            "id": "INVALSI_REF",
            "keywords": ["invalsi", "prove invalsi", "referente invalsi"],
            "responses": ["📊 Per quanto riguarda le **Prove INVALSI**, l'istituto nomina appositi referenti e docenti coordinatori per la somministrazione e la gestione delle rilevazioni nazionali degli apprendimenti.\n\n*(Cos'altro vuoi chiedermi?)*"]
        },
        {
            "id": "ED_SALUTE",
            "keywords": ["educazione alla salute", "salute", "benessere", "benessere a scuola"],
            "responses": ["🍏 I progetti di **Educazione alla Salute e Benessere a Scuola** promuovono stili di vita sani, prevenzione e supporto psicopedagogico per gli studenti.\n\n*(Cos'altro vuoi chiedermi?)*"]
        },
        {
            "id": "NIV",
            "keywords": ["niv", "nucleo interno valutazione", "valutazione"],
            "responses": ["📋 Il **NIV (Nucleo Interno di Valutazione)** supporta la Dirigenza e il Collegio nel monitoraggio e nell'autovalutazione d'istituto.\n\n*(Cos'altro vuoi chiedermi?)*"]
        },
        {
            "id": "RESPONSABILI_LABORATORI_COMPLETO",
            "keywords": ["responsabili laboratori", "elenco laboratori", "lista laboratori", "tutti i laboratori", "responsabile laboratori", "laboratori e aree speciali"],
            "responses": ["🔬 In base all'**ORGANIGRAMMA A.S. 2026-2027** (Delibere Collegio del 11.09.26 - 29.09.26), ecco l'elenco completo dei **Responsabili di Laboratorio e Aree Speciali**:\n\n**Sede V. Veneto:**\n- Modellistica 1: Mazza\n- Modellistica 2: Desideri\n- Informatica: Galleni\n- LIM/Calzaturiero: Vaiani\n\n**Sede Checchi:**\n- Palestra nuova: Schiera\n- Palazzetto: Angelini\n- Fisica/Scienze: Pennacchio\n- Informatico 1 e 2: Turini\n\n**Sede Gramsci:**\n- Meccanica: Picciolo\n- Impiantielettrici: Cerrato\n- MisureElettr.: Miatto\n- Elettropneumatica: Miatto\n- Autocad: Diazzi\n- Linguistico/Green: D'Avico\n- Palestra: Grassini\n- Aula Green: Canneri\n\n*(Cos'altro vuoi chiedermi?)*"]
        },
        {
            "id": "RESPONSABILI_PLESSI_GENERALI",
            "keywords": ["responsabili di plesso", "responsabile di plesso", "tutti i plessi", "elenco plessi"],
            "responses": ["🏫 In base all'**ORGANIGRAMMA A.S. 2026-2027** (Delibere Collegio del 11.09.26 - 29.09.26), ecco i **Responsabili di Plesso** dell'istituto:\n- **Sede Centrale (Viale Gramsci):** Lalli\n- **Liceo (Via Padre Checchi):** Frediani, Frati e Canu\n- **Plesso Moda e Calzaturiero (Piazza Vittorio Veneto):** Galleni e Palmieri\n\n*(Cos'altro vuoi chiedermi?)*"]
        },
        {
            "id": "COMMISSIONI_GENERALI",
            "keywords": ["elenco commissioni", "tutte le commissioni"],
            "responses": ["📋 In base all'**ORGANIGRAMMA A.S. 2026-2027** (Delibere Collegio del 11.09.26 - 29.09.26), ecco l'elenco delle **Commissioni** scolastiche:\n- **Elettorale:** Galleni, Senese, Carli, Freschi\n- **Comitato di Valutazione:** Vaccaro, Cillerai, Vincenti, Lalli (supplente)\n- **Competizioni Scientifiche:** Tafi, Tamberi\n- **FSL:** Desideri, Frediani, Vaccaro, Vaiani, Forte, Schiera, Simoncini\n- **Orario:** Donato, Frisone / Menale (ADSS)\n- **Orientamento in entrata:** Paoletti, Angelini, Buti, Desideri, Lalli, Marino, Montanelli\n\n*(Cos'altro vuoi chiedermi?)*"]
        },
        {
            "id": "AIUTO",
            "keywords": ["aiuto", "help", "cosa sai fare", "istruzioni", "cos'e arturo", "chi e arturo"],
            "responses": ["🤖 **Arturo** è l'assistente virtuale ufficiale dell'**IIS \"Arturo Checchi\"** di Fucecchio. Posso aiutarti con i form, le informazioni sulla scuola, calcoli, definizioni e farti divertire con barzellette e indovinelli!"]
        },
        {
            "id": "CHI_SEI",
            "keywords": ["chi sei", "come ti chiami", "presentati", "nome", "ti chiami"],
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
        },
        {
            "id": "TI_AMO",
            "keywords": ["ti amo", "ti voglio bene", "sei simpatico", "sei grande"],
            "responses": ["❤️ Grazie di cuore! Anche se sono un assistente virtuale, fa sempre piacere ricevere un complimento. Come posso aiutarti oggi per la nostra scuola?"]
        },
        {
            "id": "CIOCCOLATA",
            "keywords": ["cioccolata", "ti piace la cioccolata", "mangi", "cibo"],
            "responses": ["🍫 Adoro la cioccolata, peccato che girando nei circuiti elettrici rischierei di fare un corto circuito coi fiocchi! Io mi nutro solo di bit e informazioni sul Checchi!"]
        },
        {
            "id": "MARMELLATA",
            "keywords": ["marmellata", "ti piace la marmellata"],
            "responses": ["🍯 La marmellata è deliziosa, specialmente quella fatta in casa! Ma io preferisco 'spalmare' risposte precise sui servizi della scuola!"]
        },
        {
            "id": "UBRIACO",
            "keywords": ["ti ubriachi", "bevi", "vino", "birra"],
            "responses": ["🍾 Io non bevo alcolici, mi basta un bel sovraccarico di dati o una connessione a fibra ottica un po' mossa per farmi girare la testa!"]
        }
    ]
};

let inAttesaSceltaOrganigramma = false;
let inAttesaSceltaParolaAmbiguita = false;
let ultimaParolaDigitata = "";

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
 * MOTORE SEMANTICO A RISCONTRO ESATTO (ZERO FUORI TEMA)
 * Controlla se la domanda dell'utente corrisponde esattamente alle parole chiave codificate.
 * Se non trova nulla, risponde con cortesia invitando a cambiare domanda.
 */
function processUserQuery(query) {
    let cleanQuery = query.toLowerCase()
        .replace(/’/g, "'")
        .replace(/[èé]/g, "e")
        .replace(/[àá]/g, "a")
        .replace(/[ìí]/g, "i")
        .replace(/[òó]/g, "o")
        .replace(/[ùú]/g, "u")
        .replace(/[,!?-]/g, " ")
        .replace(/\s+/g, " ")
        .trim();

    // 1. Chiusura / Uscita
    const paroleChiusura = ["niente", "nulla", "grazie", "no grazie", "no va bene cosi", "va bene cosi", "ok"];
    if (paroleChiusura.includes(cleanQuery)) {
        rispondiBot("👋 Spero di esserti stato utile. Quando vuoi sono sempre pronto a fornirti nuove informazioni sui servizi dell'IIS \"Arturo Checchi\"!");
        return;
    }

    // 2. Saluto "Ciao" (Iniziale vs Finale)
    if (cleanQuery === "ciao" || cleanQuery === "salve") {
        const chatBox = document.getElementById("chat-messages");
        const numeroMessaggiUtente = chatBox ? chatBox.querySelectorAll(".user-message").length : 1;

        if (numeroMessaggiUtente <= 1) {
            rispondiBot("👋 Ciao! Sono **Arturo**, l'assistente virtuale dell'IIS \"Arturo Checchi\". Sono a tua completa disposizione: dimmi pure come posso aiutarti o di quale informazione hai bisogno per iniziare!");
            return;
        } else {
            rispondiBot("👋 Ciao! Spero di esserti stato utile. Quando vuoi sono sempre pronto a fornirti nuove informazioni sui servizi dell'IIS \"Arturo Checchi\"!");
            return;
        }
    }

    // 3. Controllo Esatto nelle FAQ (Scorciatoia pulita e scalabile)
    for (let faq of appConfig.faqs) {
        for (let kw of faq.keywords) {
            // Se la query dell'utente contiene esattamente la keyword configurata
            if (cleanQuery.includes(kw)) {
                let resp = faq.responses[Math.floor(Math.random() * faq.responses.length)];
                rispondiBot(resp);
                return;
            }
        }
    }

    // 4. Controllo Dizionario (Parole singole)
    if (appConfig.dictionary[cleanQuery]) {
        rispondiBot(appConfig.dictionary[cleanQuery] + "\n\n*(Cos'altro vuoi chiedermi?)*");
        return;
    }

    // 5. REGOLA DI FERRO: NESSUNA RISPOSTA CASUALE O FUORI TEMA
    rispondiBot("🤖 Al momento non sono in grado di darti una risposta precisa su questo argomento. Prova a chiedermi qualcos'altro o utilizza i pulsanti rapidi a lato!");
}

function rispondiBot(testo) {
    appendMessage(testo, "bot");
}

function quickAction(id) {
    let found = appConfig.faqs.find(f => f.id === id);
    if (found) {
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
