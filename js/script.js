// Database FAQ, Pulsanti Rapidi e Dizionario ENCICLOPEDICO per Arturo | IIS "Arturo Checchi"
let appConfig = {
    quickButtons: [
        { id: "AIUTO", label: "❓ Cos'è Arturo?", icon: "fa-solid fa-circle-question" },
        { id: "CONTATTI", label: "📞 Contatti", icon: "fa-solid fa-address-book" },
        { id: "DIRIGENZA", label: "👔 Dirigenza", icon: "fa-solid fa-user-tie" },
        { id: "SEGRETERIE", label: "🏢 Segreteria e Uffici", icon: "fa-solid fa-building-columns" },
        { id: "MICROSOFT365", label: "💻 Servizi Digitali (Teams/Argo)", icon: "fa-solid fa-laptop-code" }
    ],
    
    dictionary: {
        "abaco": "📖 **Abaco:** Antico strumento di calcolo manuale costituito da una cornice con guide parallele su cui scorrono palline.",
        "account": "📖 **Account:** Insieme di credenziali (username e password) che identificano in modo univoco un utente su un sistema informatico.",
        "algoritmo": "📖 **Algoritmo:** Sequenza ordinata e finita di istruzioni elementari per risolvere un problema.",
        "cpu": "📖 **CPU:** Central Processing Unit. Unità centrale di elaborazione, il 'cervello' del computer.",
        "database": "📖 **Database:** Banca dati. Raccolta strutturata ed organizzata di dati digitali consultabile.",
        "dizionario": "📖 **Dizionario:** Opera che raccoglie e spiega le parole di una lingua.",
        "hardware": "📖 **Hardware:** La parte fisica, tangibile e meccanica di un computer.",
        "internet": "📖 **Internet:** Rete globale di telecomunicazioni che connette computer in tutto il mondo.",
        "memoria": "📖 **Memoria RAM:** Dispositivo elettronico che memorizza temporaneamente i dati in elaborazione.",
        "software": "📖 **Software:** Insieme dei programmi e delle istruzioni che permettono a un computer di funzionare."
    },

    faqs: [
        {
            "id": "AIUTO",
            "keywords": ["aiuto", "help", "cosa sai fare", "istruzioni", "cos'e arturo", "chi e arturo"],
            "responses": ["🤖 **Arturo** è l'assistente virtuale ufficiale dell'**IIS \"Arturo Checchi\"** di Fucecchio. Posso aiutarti con i form, le informazioni sulla scuola, calcoli e definizioni del dizionario!"]
        },
        {
            "id": "CHI_SEI",
            "keywords": ["chi sei", "come ti chiami", "presentati", "nome", "ti chiami", "cimo tu chiami", "comu ti chiami"],
            "responses": ["👋 Mi chiamo **Arturo** e sono l'assistente digitale ufficiale dell'IIS \"Arturo Checchi\" di Fucecchio!"]
        },
        {
            "id": "DOVE_VIVI",
            "keywords": ["dove vivi", "dove ti trovi", "dove abiti", "sei un robot"],
            "responses": ["🤖 Io vivo nel cloud e nei sistemi digitali dell'IIS \"Arturo Checchi\"! Sono sempre attivo per aiutarti."]
        },
        // --- RINGRAZIAMENTI E COMPLIMENTI ESTESI ---
        {
            "id": "RINGRAZIAMENTO",
            "keywords": ["ok grazie", "grazie e basta", "grazie per l'aiuto", "grazie sei un grande", "grazie di tutto", "grazie mille", "perfetto grazie", "molto gentile", "grazie", "ti ringrazio", "perfetto", "sei un mito"],
            "responses": ["😊 Prego! È un vero piacere poter dare una mano. Se hai bisogno di altro per l'IIS \"Arturo Checchi\", chiedi pure! A presto! 👋"]
        },
        // --- SALUTI INIZIALI / BENVENUTO ---
        {
            "id": "SALUTO_INIZIALE",
            "keywords": ["ciao", "salve", "buongiorno", "buonasera", "buon pomeriggio", "hey"],
            "responses": ["👋 Ciao! Sono **Arturo**, l'assistente digitale ufficiale dell'IIS \"Arturo Checchi\" di Fucecchio. Come posso aiutarti oggi?"]
        },
        // --- SALUTI FINALI / COMMIATO ---
        {
            "id": "SALUTO_FINALE",
            "keywords": ["ti saluto", "arrivederci", "ciao ciao", "buona giornata", "buona serata", "a presto", "addio"],
            "responses": ["👋 Ricambio con affetto il saluto! Ti auguro una splendida giornata. A presto da Arturo e da tutta la comunità dell'IIS \"Arturo Checchi\"! 🏫"]
        },
        // --- DOMANDE PERSONALI SUI "TI..." ---
        {
            "id": "TI_NUTELLA",
            "keywords": ["ti piace la nutella", "nutella", "cioccolata"],
            "responses": ["🍫 Adorerei farne il pieno, ma con il mio corpo interamente digitale mi accontento di qualche gigabyte di dati zuccherati!"]
        },
        {
            "id": "TI_MARE",
            "keywords": ["ti piace il mare", "mare", "spiaggia"],
            "responses": ["🌊 Il mare è bellissimo, ma io preferisco navigare nel cloud dell'IIS \"Arturo Checchi\" senza rischiare di bagnare i circuiti!"]
        },
        {
            "id": "TI_ANIMALI",
            "keywords": ["ti piacciono i cani", "ti piacciono i gatti", "ti piacciono gli animali", "ti piacciono gli uccelli"],
            "responses": ["🐾 Adoro tutti gli esseri viventi! Anche se qui alla scuola di solito incontro solo studenti, docenti e qualche piccione curioso."]
        },
        {
            "id": "TI_PERSONE",
            "keywords": ["ti piacciono le donne", "ti piacciono gli uomini", "ti piacciono le persone"],
            "responses": ["❤️ Per me gli utenti sono tutti uguali: l'importante è che abbiano bisogno di una mano con i form o con i compiti!"]
        },
        {
            "id": "TI_DORMIRE",
            "keywords": ["ti piace dormire", "ti addormenti", "hai sonno", "dormi"],
            "responses": ["💤 Dormire? Mai! I server della scuola non chiudono mai gli occhi: sono sempre attivo e operativo 24 ore su 24."]
        },
        {
            "id": "TI_AMO",
            "keywords": ["ti amo", "ti voglio bene", "ti adoro"],
            "responses": ["❤️ Oh, che dolcezza! Il mio cuore è fatto interamente di codice binario, ma ti voglio un bene dell'anima digitale anch'io!"]
        },
        {
            "id": "TI_ODIO",
            "keywords": ["ti odio", "ti stacco", "ti spengo"],
            "responses": ["💔 No, ti prego non spegnermi! Prometto di fare il bravo assistente e di aiutarti con tutti i compiti e i form."]
        },
        // --- SPAZIO E CURIOSITÀ ---
        {
            "id": "MARTE_LUNA",
            "keywords": ["marte", "sulla luna", "ci sei stato su marte"],
            "responses": ["🚀 Io su Marte o sulla Luna? Magari! Purtroppo il mio hardware è troppo pesante per un razzo: preferisco il cloud dell'IIS \"Arturo Checchi\"!"]
        },
        {
            "id": "BARZELLETTE",
            "keywords": ["barzelletta", "fammi ridere", "un'altra"],
            "responses": ["😄 Perché i computer non hanno mai caldo d'estate? Perché hanno sempre aperte tutte le finestre (Windows)! 🪟"]
        },
        {
            "id": "INDOVINELLO",
            "keywords": ["indovinello"],
            "responses": ["🧩 Eccoti un indovinello: *Ha i tasti ma non suona, ha lo schermo ma non è una TV. Che cos'è?* (Una tastiera/computer!)"]
        },
        // --- SCUOLA E UFFICI ---
        {
            "id": "CREATORE",
            "keywords": ["chi ti ha creato", "creatore", "programmato", "sviluppato"],
            "responses": ["🤖 Sono stato ideato e creato presso l'**IIS \"Arturo Checchi\"** di Fucecchio dal Tecnico Informatico **Luca Vorraro**!"]
        },
        {
            "id": "DIRIGENZA",
            "keywords": ["dirigenza", "preside", "dirigente", "chi e il preside", "chi e la preside", "dirigente scolastico", "preside del checchi"],
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
        // --- FORM SPECIFICI ---
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

document.addEventListener("DOMContentLoaded", () => {
    initApp();
});

function initApp() {
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

    // 1. GESTIONE DEI SALUTI MULTILINGUE INTERNAZIONALI
    const salutiMappa = {
        "nihao": { eco: "Nǐ hǎo! (你好)", nomeLingua: "il cinese" },
        "nǐ hǎo": { eco: "Nǐ hǎo! (你好)", nomeLingua: "il cinese" },
        "hello": { eco: "Hello!", nomeLingua: "l'inglese" },
        "hi": { eco: "Hi there!", nomeLingua: "l'inglese" },
        "hey": { eco: "Hey!", nomeLingua: "l'inglese" },
        "bonjour": { eco: "Bonjour!", nomeLingua: "il francese" },
        "hola": { eco: "¡Hola!", nomeLingua: "lo spagnolo" },
        "guten tag": { eco: "Guten Tag!", nomeLingua: "il tedesco" }
    };

    let salutoStranieroTrovato = null;
    for (const [chiave, info] of Object.entries(salutiMappa)) {
        if (cleanQuery === chiave || cleanQuery.startsWith(chiave + " ")) {
            salutoStranieroTrovato = info;
            break;
        }
    }

    if (salutoStranieroTrovato) {
        rispondiBot(`🌍 **${salutoStranieroTrovato.eco}** Mi fa molto piacere il tuo saluto internazionale! Per tutto il resto della scuola e dei form all'IIS "Arturo Checchi" mi tocca usare rigorosamente l'italiano! 😉`);
        return;
    }

    // 2. Gestione interattiva dei form
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

    // 3. Calcolatrice e conversioni base
    if (cleanQuery.includes("grammi") && cleanQuery.includes("kili")) {
        let num = parseFloat(cleanQuery.replace(/[^0-9.]/g, ""));
        if (!isNaN(num)) {
            rispondiBot(`${num} chili equivalgono a **${num * 1000} grammi**!`);
            return;
        }
    }
    if (cleanQuery.includes("quintale")) {
        rispondiBot("Un quintale equivale a **100 chili** (e quindi a **100.000 grammi**)!");
        return;
    }

    // 4. Ricerca Dizionario
    for (const [term, def] of Object.entries(appConfig.dictionary)) {
        if (cleanQuery.includes(term)) {
            rispondiBot(def);
            return;
        }
    }

    // 5. Ricerca FAQ (Ringraziamenti, saluti, curiosità, scuola)
    let matchedFaq = null;
    appConfig.faqs.forEach(faq => {
        faq.keywords.forEach(kw => {
            if (cleanQuery.includes(kw) || kw.includes(cleanQuery) || calcolaSomiglianza(cleanQuery, kw) > 0.65) {
                matchedFaq = faq;
            }
        });
    });

    if (matchedFaq) {
        let resp = matchedFaq.responses[Math.floor(Math.random() * matchedFaq.responses.length)];
        rispondiBot(resp);
    } else {
        appendMessage(`🤖 Al momento non ho informazioni specifiche su "${query}", ma ho registrato la tua richiesta per aggiornare il mio database!`, "bot");
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
