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

    // PARACADUTE CONVERSAZIONALE: Frasi simpatiche e sempre diverse per domande fuori ambito
    frasiSimpaticheFuoriTema: [
        "🌦️ Oh, per quanto riguarda il meteo o il mondo esterno, brancolo nel buio! Vivo interamente nel cloud e nei server dell'IIS \"Arturo Checchi\". Per favore, prova a chiedermi qualcosa relativo al mio ruolo, ai servizi o alla scuola!",
        "🧭 Eh, qui mi spiazzi! I miei sensori digitali arrivano fino ai laboratori e alle sedi dell'istituto, ma fuori di lì mi perdo. Ti andrebbe di chiedermi qualcosa che rientri nei miei compiti istituzionali?",
        "🔮 Magari avessi la sfera di cristallo per rispondere a questa domanda! Purtroppo mi occupo solo di segreteria, didattica e vita scolastica del Checchi. Prova a chiedermi qualcosa inerente al mio ruolo!",
        "🚀 Questa va oltre le mie competenze da assistente virtuale scolastico! Ti consiglio di fare una verifica sul campo e, per favore, prova a chiedermi qualcosa che riguardi da vicino la nostra scuola o il mio ruolo!"
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
            "id": "SEDI_ISTITUTO",
            "keywords": ["plessi", "quanti plessi", "sedi", "sede centrale", "ite"],
            "responses": ["🏫 L'IIS \"Arturo Checchi\" di Fucecchio è articolato sulla **Sede Centrale** in Viale Gramsci 7 (che ospita presidenza, segreteria e l'indirizzo **ITE**), oltre alle altre sedi dell'istituto."]
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
let ultimaCategoriaTrattata = ""; 
let ultimoGiocoProposto = ""; 
let indiceBarzelletta = 0;
let indiceIndovinello = 0;
let indiceFraseSimpatica = 0; // Rotazione automatica per le risposte simpatiche

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

    // 1. GESTIONE DI "SÌ", "NO", "OK" CON RISPOSTA COERENTE AL CONTESTO
    if (cleanQuery === "si" || cleanQuery === "sì" || cleanQuery === "ok" || cleanQuery === "va bene") {
        inAttesaSceltaForm = false;
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

    // 2. MOTORE BARZELLETTE
    if (cleanQuery.includes("barzelletta") || cleanQuery.includes("battuta") || cleanQuery.includes("ridere")) {
        ultimoGiocoProposto = "BARZELLETTA";
        let testoBarzelletta = appConfig.barzellete[indiceBarzelletta];
        indiceBarzelletta = (indiceBarzelletta + 1) % appConfig.barzellete.length;
        rispondiBot(testoBarzelletta + "\n\n*(Vuoi un'altra barzelletta? Scrivimelo pure!)*");
        return;
    }

    // 3. MOTORE INDOVINELLI
    if (cleanQuery.includes("indovinello") || cleanQuery.includes("rompicapo") || cleanQuery.includes("indovina")) {
        ultimoGiocoProposto = "INDOVINELLO";
        let testoIndovinello = appConfig.indovinelli[indiceIndovinello];
        indiceIndovinello = (indiceIndovinello + 1) % appConfig.indovinelli.length;
        rispondiBot(testoIndovinello + "\n\n*(Vuoi un altro indovinello? Chiedimelo pure!)*");
        return;
    }

    // 4. RADICI QUADRATE E CALCOLATRICE
    if (cleanQuery.includes("radice quadrata") || cleanQuery.includes("radice")) {
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

    // 5. LINEARITÀ DEL DISCORSO
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

    // 6. FORM
    if (inAttesaSceltaForm) {
        inAttesaSceltaForm = false;
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
        rispondiBot("📋 Certamente! A quale form o modulo ti riferisci?\n\n1️⃣ **Fotocopie**\n2️⃣ **Esperti Esterni**\n\nDimmi pure quale ti interessa!");
        return;
    }

    // 7. DIZIONARIO
    let wordToSearch = cleanQuery
        .replace(/\b(che cos'e|cos'e|cosa significa|cosa vuol dire|definizione di|significato di|un|una|uno|il|lo|la|i|gli|le|del|della|che)\b/gi, "")
        .trim();

    if (wordToSearch.length >= 2) {
        for (const [term, def] of Object.entries(appConfig.dictionary)) {
            if (wordToSearch === term || cleanQuery.includes(term)) {
                ultimaCategoriaTrattata = "DIZIONARIO";
                ultimoGiocoProposto = "";
                rispondiBot(def);
                return;
            }
        }
    }

    // 8. FAQ
    let matchedFaq = null;
    appConfig.faqs.forEach(faq => {
        faq.keywords.forEach(kw => {
            if (cleanQuery.includes(kw) || kw.includes(cleanQuery) || calcolaSomiglianza(cleanQuery, kw) > 0.65) {
                matchedFaq = faq;
            }
        });
    });

    if (matchedFaq) {
        ultimaCategoriaTrattata = matchedFaq.id; 
        ultimoGiocoProposto = "";
        let resp = matchedFaq.responses[Math.floor(Math.random() * matchedFaq.responses.length)];
        rispondiBot(resp);
    } else {
        ultimaCategoriaTrattata = ""; 
        ultimoGiocoProposto = "";
        // PARACADUTE A ROTAZIONE AUTOMATICA CON RISPOSTE SIMPATICO-ISTITUZIONALI
        let fraseCasuale = appConfig.frasiSimpaticheFuoriTema[indiceFraseSimpatica];
        indiceFraseSimpatica = (indiceFraseSimpatica + 1) % appConfig.frasiSimpaticheFuoriTema.length; // Ruota alla frase successiva
        rispondiBot(fraseCasuale);
    }
}

function calcolaSomiglianza(s1, s2) {
    let parole1 = s1.split(" ");
    let parole2 = s2.split(" ");
    let matchCount = 0;
    parole1.forEach(p1 => {
        parole2.forEach(p2 => {
            if (p1 === p2 || (p1.length > 2 && p2.length > 2 && (p1.includes(p2) || p2.includes(p1)))) {
                matchCount++;
            }
        });
    });
    return matchCount / Math.max(parole1.length, parole2.length);
}

function rispondiBot(testo) {
    appendMessage(testo, "bot");
}

function quickAction(id) {
    let found = appConfig.faqs.find(f => f.id === id);
    if (found) {
        ultimaCategoriaTrattata = found.id;
        ultimoGiocoProposto = "";
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
    inAttesaSceltaForm = false;
    ultimaCategoriaTrattata = "";
    ultimoGiocoProposto = "";
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
        
        clockEl.innerHTML = `<i class="fa-regular fa-clock"></i> ${dataFormattata} - ${oraFormattata}`;
    }
    
    updateDateTime();
    setInterval(updateDateTime, 1000);
}
