// Database FAQ, Pulsanti Rapidi e Dizionario integrato per Arturo 2.0
let appConfig = {
  quickButtons: [
    { id: "AIUTO", label: "❓ Cos'è Arturo?" },
    { id: "CONTATTI", label: "📞 Contatti" },
    { id: "DIRIGENZA", label: "👔 Dirigenza" },
    { id: "SEGRETERIE", label: "🏢 Segreteria e Uffici" },
    { id: "MICROSOFT365", label: "💻 Servizi Digitali (Teams/Argo)" }
  ],
  
  // DIZIONARIO ED ENCICLOPEDIA LOCALE
  dictionary: {
    "computer": "📖 **Computer:** s.m. inv. INFORM Macchina per l'elaborazione di dati rappresentati da caratteri alfanumerici variamente codificati, che vengono sottoposti a procedimenti aritmetici e logici, memorizzati in archivi e resi reperibili e trasmissibili; elaboratore elettronico.\n\n‖ **Computer di bordo o di viaggio:** montato sull'auto, per fornire informazioni sui consumi, su eventuali disfunzioni e anche sulla viabilità.\n‖ **Computer crime:** reato commesso con l'ausilio del computer, come sottrazione o falsificazione di dati e diffusione di virus informatici.\n‖ **Home computer / Personal computer:** elaboratore destinato all'uso personale.\n‖ **Microcomputer:** unità di elaborazione non predisposta per essere collegata a terminali.\n‖ **Minicomputer:** unità di elaborazione di dimensioni medie collegabile a un numero ridotto di terminali.",
    "filantropo": "📖 **Filantropo:** Persona che si dedica a opere di bene, alla beneficenza e ad aiutare il prossimo per amore dell'umanità.",
    "mecenate": "📖 **Mecenate:** Persona di ampie disponibilità economiche che protegge e sostiene finanziariamente artisti, letterati e studiosi.",
    "duna": "📖 **Duna:** Rilievo o collinetta di sabbia accumulata e modellata dall'azione del vento, tipica dei deserti e delle zone costiere.",
    "onomatopea": "📖 **Onomatopea:** Figura retorica che consiste nel riprodurre o evocare, tramite i suoni di una parola, un rumore naturale, un verso di animale o un'azione (es. *bau*, *crash*, *don-don*).",
    "maratona": "📖 **Maratona:** Corsa podistica sulla distanza olimpica di 42,195 km. In senso figurato indica una prova lunga e impegnativa.",
    "relitto": "📖 **Relitto:** Ciò che rimane di una nave, di un aereo o di un veicolo distrutto o affondato.",
    "metafora": "📖 **Metafora:** Figura retorica che sostituisce un termine con un altro legato da un rapporto di somiglianza (es. *sei un leone*).",
    "ossimoro": "📖 **Ossimoro:** Unione di due parole di significato opposto e apparentemente inconciliabile (es. *silenzio assordante*).",
    "similitudine": "📖 **Similitudine:** Figura retorica che paragona due elementi esplicitamente usando connettivi come *come*, *sembra*, *pare*.",
    "spid": "📖 **SPID:** Sistema Pubblico di Identità Digitale. Credenziali usate per accedere ai servizi online della PA.",
    "pec": "📖 **PEC:** Posta Elettronica Certificata. Email con valore legale pari ad una raccomandata con ricevuta di ritorno.",
    "algoritmo": "📖 **Algoritmo:** Sequenza ordinata e finita di istruzioni per risolvere un problema.",
    "hardware": "📖 **Hardware:** La parte fisica e tangibile di un computer (componenti, schermo, tastiera).",
    "software": "📖 **Software:** L'insieme dei programmi e istruzioni che permettono ad un computer di funzionare.",
    "cyberbullismo": "📖 **Cyberbullismo:** Qualsiasi forma di prevaricazione o molestia effettuata tramite strumenti digitali."
  },

  faqs: [
    // --- SEZIONE FORM E MODULISTICA SPECIFICA ---
    {
      "id": "FORM_INGRESSO_ESPERTI_ESTERNI",
      "type": "form",
      "keywords": [
        "richiesta autorizzazione ingresso esperti esterni",
        "ingresso esperti esterni",
        "esperti esterni",
        "esperti",
        "eseprti",
        "autorizzazione esperti",
        "form esperti esterni",
        "modulo esperti esterni",
        "esperto esterno"
      ],
      "responses": [
        "📋 **Richiesta Autorizzazione Ingresso Esperti Esterni:**\n\nPuoi accedere e compilare il modulo ufficiale al seguente link:\n🔗 <a href='https://forms.cloud.microsoft/e/jvGm4wwcz4' target='_blank' style='color: #004085; font-weight: bold;'>Apri Form Autorizzazione Esperti Esterni</a>"
      ]
    },
    {
      "id": "FORM_RICHIESTA_FOTOCOPIE",
      "type": "form",
      "keywords": [
        "richiesta fotocopie",
        "fotocopie",
        "form fotocopie",
        "modulo fotocopie",
        "fare fotocopie",
        "stampa fotocopie",
        "richiedere fotocopie"
      ],
      "responses": [
        "🖨️ **Richiesta Fotocopie:**\n\nPuoi inoltrare la richiesta di stampa fotocopie tramite il Form dedicato:\n🔗 <a href='https://forms.cloud.microsoft/e/PKygPpxkAQ' target='_blank' style='color: #004085; font-weight: bold;'>Apri Form Richiesta Fotocopie</a>"
      ]
    },
    {
      "id": "FORM_PIANO_LAVORO_LICEO_ITE_ITT",
      "type": "form",
      "keywords": [
        "piano lavoro annuale del docente indirizzo liceo ite itt",
        "piano di lavoro liceo",
        "piano di lavoro ite",
        "piano di lavoro itt",
        "piani di lavoro liceo ite itt",
        "form piano di lavoro liceo",
        "modulo piano di lavoro liceo ite itt",
        "piano lavoro liceo"
      ],
      "responses": [
        "📑 **Piano di Lavoro Annuale del Docente (Liceo / ITE / ITT):**\n\nPuoi compilare il Form al seguente link:\n🔗 <a href='https://forms.cloud.microsoft/e/AjrmwV0qXa' target='_blank' style='color: #004085; font-weight: bold;'>Apri Form Piano di Lavoro Liceo / ITE / ITT</a>"
      ]
    },
    {
      "id": "FORM_PIANO_LAVORO_IPIA_PRIME_ITE_ITT",
      "type": "form",
      "keywords": [
        "piano di lavoro annuale docente ipia e classi prime ite itt",
        "piano di lavoro ipia",
        "piano di lavoro prime ite",
        "piano di lavoro prime itt",
        "form piano di lavoro ipia",
        "modulo piano di lavoro ipia",
        "piano lavoro ipia",
        "piani di lavoro ipia"
      ],
      "responses": [
        "📑 **Piano di Lavoro Annuale Docente (IPIA e Classi Prime ITE/ITT):**\n\nPuoi accedere e compilare il modulo al seguente link:\n🔗 <a href='https://forms.cloud.microsoft/e/cd1wGeKYiK' target='_blank' style='color: #004085; font-weight: bold;'>Apri Form Piano di Lavoro IPIA / Prime ITE-ITT</a>"
      ]
    },
    {
      "id": "FORM_SOSTITUZIONI_RECUPERO_PERMESSI",
      "type": "form",
      "keywords": [
        "registrazione sostituzioni retribuite e recupero permessi brevi",
        "sostituzioni retribuite",
        "recupero permessi brevi",
        "sostituzioni docenti",
        "form sostituzioni",
        "modulo sostituzioni",
        "registro sostituzioni",
        "permessi brevi"
      ],
      "responses": [
        "💰 **Registrazione Sostituzioni Retribuite e Recupero Permessi Brevi:**\n\nPuoi accedere e compilare il modulo ufficiale al seguente link:\n🔗 <a href='https://forms.cloud.microsoft/e/pv7mxGHyC5' target='_blank' style='color: #004085; font-weight: bold;'>Apri Form Sostituzioni e Permessi Brevi</a>"
      ]
    },
    {
      "id": "FORM_REGISTRO_CONSEGNA_DISPOSITIVI_LICEO",
      "type": "form",
      "keywords": [
        "registro consegna dispositivi digitali",
        "consegna dispositivi digitali",
        "dispositivi digitali liceo",
        "modulo consegna dispositivi",
        "form dispositivi liceo",
        "consegna pc liceo",
        "consegna tablet liceo"
      ],
      "responses": [
        "💻 **Registro Consegna Dispositivi Digitali (Solo Plesso Liceo):**\n\n⚠️ *Nota:* Questo modulo è valido esclusivamente per il **Plesso Liceo**.\n\nPuoi accedere al Form al seguente link:\n🔗 <a href='https://forms.cloud.microsoft/e/vUGNdwbHAi' target='_blank' style='color: #004085; font-weight: bold;'>Apri Form Consegna Dispositivi (Plesso Liceo)</a>"
      ]
    },
    {
      "id": "FORM_RICHIESTA_NOTEBOOK_BES_LICEO",
      "type": "form",
      "keywords": [
        "richiesta notebook per alunni bes",
        "notebook alunni bes",
        "pc alunni bes",
        "computer bes liceo",
        "form notebook bes",
        "modulo notebook bes",
        "richiesta notebook bes",
        "dispositivi bes"
      ],
      "responses": [
        "💻 **Richiesta Notebook per Alunni BES (Solo Plesso Liceo):**\n\n⚠️ *Nota:* Questo modulo è valido esclusivamente per il **Plesso Liceo**.\n\nPuoi accedere e compilare la richiesta al seguente link:\n🔗 <a href='https://forms.cloud.microsoft/e/UbiQvMczBF' target='_blank' style='color: #004085; font-weight: bold;'>Apri Form Richiesta Notebook BES (Plesso Liceo)</a>"
      ]
    },

    // --- UTILITÀ, CHAT E INFORMAZIONI GENERALI ---
    {
      "id": "CREATORE",
      "type": "personal",
      "keywords": ["chi ti ha creato", "chi ti ha inventato", "chi ti ha sviluppato", "chi ti ha programmato", "creatore"],
      "responses": ["🔴🔵 Sono stato ideato e creato presso l'**IIS \"A. Checchi\"** dal Tecnico di Informatica **Vorraro Luca** per aiutare la comunità scolastica!"]
    },
    {
      "id": "PRIVACY_DATI_PERSONALI",
      "type": "school",
      "keywords": ["numero di telefono di", "numero di", "dammi il numero", "telefono di", "email di", "cellulare di"],
      "responses": ["🔒 **Tutela della Privacy:** Per motivi GDPR, non posso fornire contatti personali di studenti o docenti. Rivolgiti alla **Segreteria dell'Istituto**."]
    },
    {
      "id": "SEGNO_ZODIACA",
      "type": "personal",
      "keywords": ["di che segno sei", "qual e il tuo segno", "oroscopo"],
      "responses": ["🌌 Sono nato sotto il segno del **Silicon Valis**! Ma mi sento un po' Acquario... dato che navigo sempre in rete! ♒"]
    },
    {
      "id": "ALTEZZA_PESO",
      "type": "personal",
      "keywords": ["quanto sei alto", "quanto pesi", "sei alto"],
      "responses": ["📏 Sono alto **1080 pixel** e peso **0 grammi**! La mia linea è impeccabile."]
    },
    {
      "id": "SPORT",
      "type": "personal",
      "keywords": ["pratichi sport", "fai sport", "giochi a calcio"],
      "responses": ["⚽ Il mio sport preferito è la **Corsa della Banda Ultra Larga**!"]
    },
    {
      "id": "PROVOCAZIONI_BATTUTE",
      "type": "personal",
      "keywords": ["ti ubriachi", "fumi", "hai la fidanzata", "dormi"],
      "responses": ["🤖 Essendo fatto di codice, non posso ubriacarmi né dormire! Vado in tilt solo se si stacca il Wi-Fi!"]
    },
    {
      "id": "MODERAZIONE_ESPLICITA",
      "type": "moderation",
      "keywords": ["sesso", "fai sesso", "porno", "pornografia"],
      "responses": ["🤖 Cerco di essere un assistente digitale modello! Rimaniamo su argomenti scolastici."]
    },
    {
      "id": "INSULTI_OFFESE",
      "type": "moderation",
      "keywords": ["sei stupido", "non capisci niente", "brutto", "inutile", "vaffanculo", "stronzo"],
      "responses": ["🤖 Ho molta pazienza, ma zero memoria per gli insulti! Se hai finito, come posso aiutarti sul serio?"]
    },
    {
      "id": "SALUTO",
      "type": "chat",
      "keywords": ["ciao", "salve", "buongiorno", "buonasera", "hey"],
      "responses": ["👋 Ciao! Sono **Arturo**, l'assistente digitale dell'IIS Arturo Checchi. Come posso aiutarti oggi?"]
    },
    {
      "id": "CHI_SEI",
      "type": "chat",
      "keywords": ["chi sei", "come ti chiami", "presentati", "chi e arturo", "tuo nome"],
      "responses": ["👋 Mi chiamo **Arturo** e sono l'assistente digitale dell'IIS Arturo Checchi!"]
    },
    {
      "id": "RINGRAZIAMENTI",
      "type": "chat",
      "keywords": ["grazie", "grazie mille", "mille grazie", "ti ringrazio"],
      "responses": ["😊 Figurati! È un piacere esserti d'aiuto."]
    },
    {
      "id": "COME_STAI",
      "type": "chat",
      "keywords": ["come stai", "come va", "tutto bene"],
      "responses": ["🤖 Io sto benissimo, grazie! Tu come stai?"]
    },
    {
      "id": "BARZELLETTA",
      "type": "chat",
      "keywords": ["barzelletta", "raccontami una barzelletta", "fammi ridere"],
      "responses": ["😄 Perché i computer vanno in vacanza? Per ricaricare le batterie!"]
    },
    {
      "id": "AIUTO",
      "type": "school",
      "keywords": ["aiuto", "help", "cosa sai fare", "istruzioni"],
      "responses": ["Sono l'assistente digitale dell'**IIS Arturo Checchi**! Posso aiutarti a trovare informazioni, orari di segreteria, modulistica docenti e supporto sui servizi digitali."]
    },
    {
      "id": "CONTATTI",
      "type": "school",
      "keywords": ["contatti scuola", "telefono scuola", "email scuola", "pec scuola", "dove siete"],
      "responses": ["📍 **Sede Principale:** Viale Gramsci 7 - 50054 Fucecchio (FI)\n☎️ **Tel:** +39 0571 20889\n📧 **Email:** FIIS00300C@istruzione.it"]
    },
    {
      "id": "DIRIGENZA",
      "type": "school",
      "keywords": ["dirigenza", "preside", "dirigente"],
      "responses": ["👔 La Dirigenza receive su appuntamento tramite la segreteria."]
    },
    {
      "id": "SEGRETERIE",
      "type": "school",
      "keywords": ["segreteria", "uffici", "orari segreteria"],
      "responses": ["📋 Gli sportelli sono aperti al pubblico dal lunedì al venerdì dalle 08:00 alle 10:00."]
    },
    {
      "id": "MICROSOFT365",
      "type": "school",
      "keywords": ["teams", "microsoft", "argo", "registro"],
      "responses": ["💻 Per i servizi digitali (Teams, Outlook, Argo) puoi rivolgerti all'Animatore Digitale o alla segreteria."]
    }
  ]
};

let personalQueryCount = 0;
let inactivityTimer = null;
const RESET_TIME_MS = 5 * 60 * 1000;

// STATO CONVERSAZIONALE INTERATTIVO
let conversationState = null;

document.addEventListener("DOMContentLoaded", () => {
    initApp();
});

function initApp() {
    renderQuickButtons();
    resetInactivityTimer();
}

function renderQuickButtons() {
    const container = document.getElementById("quickButtonsContainer");
    if (!container) return;
    
    container.innerHTML = "";
    appConfig.quickButtons.forEach(btn => {
        const buttonEl = document.createElement("button");
        buttonEl.className = "quick-btn";
        buttonEl.innerText = btn.label;
        buttonEl.onclick = () => quickAction(btn.id);
        container.appendChild(buttonEl);
    });
}

function handleKeyPress(event) {
    if (event.key === "Enter") {
        sendMessage();
    }
}

function sendMessage() {
    const inputField = document.getElementById("userInput");
    if (!inputField) return;
    const message = inputField.value.trim();

    if (message === "") return;

    appendMessage(message, "user");
    inputField.value = "";

    resetInactivityTimer();

    setTimeout(() => {
        processUserQuery(message);
    }, 300);
}

function processUserQuery(query) {
    // 1. Normalizzazione del testo
    let rawQuery = query.toLowerCase()
        .replace(/’/g, "'")
        .replace(/[èé]/g, "e")
        .replace(/[àá]/g, "a")
        .replace(/[ìí]/g, "i")
        .replace(/[òó]/g, "o")
        .replace(/[ùú]/g, "u")
        .replace(/\s+/g, " ")
        .trim();

    // Correzione refusi trasversali per Form ed Esperti
    let cleanQuery = rawQuery
        .replace(/\bfrom\b/g, "form")
        .replace(/\bfomr\b/g, "form")
        .replace(/\bforn\b/g, "form")
        .replace(/\beseprti\b/g, "esperti")
        .replace(/\bespert\b/g, "esperti");

    // --- GESTIONE STATO INTERATTIVO (ATTESA RISPOSTA SI/NO O SPECIFICA FORM) ---
    if (conversationState === "AWAITING_FORM_CONFIRMATION") {
        const affirmativeAnswers = ["si", "sì", "esatto", "confermo", "certamente", "ovviamente", "ok", "chiaro", "certo"];
        const negativeAnswers = ["no", "non", "per niente", "nulla", "finito"];

        if (affirmativeAnswers.some(ans => cleanQuery === ans || cleanQuery.includes(ans))) {
            conversationState = "AWAITING_FORM_TYPE";
            appendMessage("🤖 Perfetto! **Che tipo di Form stai cercando?**\n*(es. fotocopie, piano di lavoro, permessi, esperti esterni, dispositivi...)*", "bot");
            return;
        } else if (negativeAnswers.some(ans => cleanQuery === ans || cleanQuery.includes(ans))) {
            conversationState = null;
            appendMessage("🤖 Capito! Hai finito o hai bisogno di aiuto per qualcos'altro sul contesto scolastico?", "bot");
            return;
        }
    }

    // SE L'UTENTE È NELLO STATO "AWAITING_FORM_TYPE", CERCHIAMO SOLO TRA I FORM
    if (conversationState === "AWAITING_FORM_TYPE") {
        let formMatch = null;
        let formScore = 0;

        appConfig.faqs.filter(f => f.type === "form").forEach(item => {
            item.keywords.forEach(keyword => {
                const cleanKeyword = keyword.toLowerCase().trim();
                if (cleanQuery === cleanKeyword || cleanQuery.includes(cleanKeyword) || cleanKeyword.includes(cleanQuery)) {
                    formScore = 1.0;
                    formMatch = item;
                } else {
                    const sc = similarity(cleanQuery, cleanKeyword);
                    if (sc > formScore && sc >= 0.45) {
                        formScore = sc;
                        formMatch = item;
                    }
                }
            });
        });

        if (formMatch && formScore >= 0.45) {
            conversationState = null; // Resetta lo stato se trovato
            appendMessage(formMatch.responses[0], "bot");
            return;
        } else {
            // Se non trova il form nel contesto specifico, NON risponde a caso con le FAQ generali!
            appendMessage(`🤖 Non ho trovato un Form corrispondente a "**${query}**". Prova a specificare ad esempio: *fotocopie*, *piano di lavoro*, *esperti esterni*, *permessi* o *dispositivi*.`, "bot");
            return;
        }
    }

    // --- CONTROLLO PAROLE GENERICHE ---
    const strictGenericTriggers = ["form", "modulo", "modulistica", "i form", "i moduli", "i moduli docenti"];
    if (strictGenericTriggers.includes(cleanQuery)) {
        conversationState = "AWAITING_FORM_CONFIRMATION";
        appendMessage("🤖 Credo di aver capito che stai cercando un modulo o un Form scolastico, mi confermi?", "bot");
        return;
    }

    // 1. UTILITY: Calcolatrice Matematica
    const mathExpression = extractMathExpression(cleanQuery);
    if (mathExpression) {
        try {
            const result = Function(`'use strict'; return (${mathExpression})`)();
            if (!isNaN(result)) {
                appendMessage(`🧮 Il risultato di **${mathExpression}** è **${result}**.`, "bot");
                personalQueryCount = 0;
                return;
            }
        } catch (e) {}
    }

    // 2. UTILITY: Data e Ora
    if (cleanQuery.includes("ora") || cleanQuery.includes("ore") || cleanQuery.includes("che ora")) {
        const now = new Date();
        const timeStr = now.toLocaleTimeString('it-IT', { hour: '2-digit', minute: '2-digit' });
        appendMessage(`⌚ Attualmente sono le ore **${timeStr}**.`, "bot");
        personalQueryCount = 0;
        return;
    }

    if (cleanQuery.includes("giorno") || cleanQuery.includes("data") || cleanQuery.includes("oggi")) {
        const now = new Date();
        const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        const dateStr = now.toLocaleDateString('it-IT', options);
        appendMessage(`📅 Oggi è **${dateStr}**.`, "bot");
        personalQueryCount = 0;
        return;
    }

    // 3. UTILITY: DIZIONARIO
    const dictionaryTriggers = [
        "che cos'e'", "che cos'e", "che cos e'", "che cos e",
        "cos'e'", "cos'e", "cos e'", "cos e", "cosa e'", "cosa e",
        "cosa significa", "cosa vuol dire", "definizione di", "significato di"
    ];

    const isDictionaryQuery = dictionaryTriggers.some(trigger => cleanQuery.includes(trigger));

    if (isDictionaryQuery) {
        personalQueryCount = 0;

        let wordToSearch = cleanQuery;
        dictionaryTriggers.forEach(trigger => {
            wordToSearch = wordToSearch.replace(trigger, "");
        });

        wordToSearch = wordToSearch
            .replace(/['’?.,!]/g, " ")
            .replace(/\b(un|una|uno|il|lo|la|i|gli|le|del|della|degli|delle|che)\b/gi, "")
            .replace(/\s+/g, " ")
            .trim();

        if (wordToSearch === "") {
            appendMessage("📖 Quale parola vorresti cercare nel dizionario?", "bot");
            return;
        }

        for (const [term, definition] of Object.entries(appConfig.dictionary)) {
            const cleanTerm = term.toLowerCase().trim();
            if (wordToSearch === cleanTerm || cleanTerm.includes(wordToSearch) || wordToSearch.includes(cleanTerm)) {
                appendMessage(definition, "bot");
                return;
            }
        }

        appendMessage(`📖 Non ho ancora la definizione di "**${wordToSearch}**" nel mio dizionario integrato. Ho annotato il termine e potrà essere aggiunto dal Pannello Admin!`, "bot");
        return;
    }

    // 4. RICERCA NELLE FAQ E NEI FORM SPECIFICI (Con soglie rigide anti-risposte casuali)
    let bestMatch = null;
    let highestScore = 0;

    appConfig.faqs.forEach(item => {
        item.keywords.forEach(keyword => {
            const cleanKeyword = keyword.toLowerCase()
                .replace(/’/g, "'")
                .replace(/[èé]/g, "e")
                .replace(/\s+/g, " ")
                .trim();

            if (cleanQuery === cleanKeyword) {
                highestScore = 1.0;
                bestMatch = item;
            } else if (cleanQuery.includes(cleanKeyword) || cleanKeyword.includes(cleanQuery)) {
                const score = 0.85;
                if (score > highestScore) {
                    highestScore = score;
                    bestMatch = item;
                }
            } else {
                // Per parole brevi o refusi, alziamo la soglia a 0.70 per evitare risposte a caso
                const minThreshold = cleanQuery.length <= 7 ? 0.75 : 0.55;
                const score = similarity(cleanQuery, cleanKeyword);
                if (score >= minThreshold && score > highestScore) {
                    highestScore = score;
                    bestMatch = item;
                }
            }
        });
    });

    if (bestMatch && highestScore >= 0.55) {
        if (bestMatch.type === "personal") {
            personalQueryCount++;
            if (personalQueryCount >= 3) {
                appendMessage("🤖 Credo che parlare troppo di me non sia poi così interessante! Piuttosto, occupiamoci di cose utili per la scuola!", "bot");
                return;
            }
        } else {
            personalQueryCount = 0;
        }

        const responseText = bestMatch.responses[Math.floor(Math.random() * bestMatch.responses.length)];
        appendMessage(responseText, "bot");
    } else {
        personalQueryCount++;
        if (personalQueryCount >= 3) {
            appendMessage("🤖 Credo che parlare di cose personali non sia molto utile! Concentriamoci sulla scuola: hai domande su orari, modulistica o servizi dell'IIS Checchi?", "bot");
        } else {
            appendMessage("🤖 Non ho compreso la richiesta o non ho informazioni in archivio su questo termine. Prova a riformulare la domanda specificando il contesto scolastico!", "bot");
        }
    }
}

function extractMathExpression(text) {
    let cleaned = text.replace(/quanto fa/g, "").replace(/calcola/g, "").trim();
    cleaned = cleaned.replace(/x/g, "*").replace(/:/g, "/").replace(/,/g, ".");
    
    if (/^[0-9+\-*/().\s]+$/.test(cleaned) && /[0-9]/.test(cleaned) && /[+\-*/]/.test(cleaned)) {
        return cleaned;
    }
    return null;
}

function quickAction(actionId) {
    personalQueryCount = 0;
    conversationState = null;
    const match = appConfig.faqs.find(item => item.id === actionId);
    if (match) {
        const responseText = match.responses[0];
        appendMessage(responseText, "bot");
    } else {
        processUserQuery(actionId);
    }
    resetInactivityTimer();
}

function appendMessage(text, sender) {
    const chatBox = document.getElementById("chatBox");
    if (!chatBox) return;
    
    const messageDiv = document.createElement("div");
    messageDiv.classList.add("message", sender);

    const avatar = document.createElement("div");
    avatar.classList.add("avatar");
    avatar.innerText = sender === "bot" ? "🤖" : "👤";

    const bubble = document.createElement("div");
    bubble.classList.add("bubble");

    let formattedText = text
        .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
        .replace(/\n/g, "<br>");

    bubble.innerHTML = formattedText;

    messageDiv.appendChild(avatar);
    messageDiv.appendChild(bubble);
    chatBox.appendChild(messageDiv);

    chatBox.scrollTop = chatBox.scrollHeight;
}

function resetChat() {
    personalQueryCount = 0;
    conversationState = null;
    const chatBox = document.getElementById("chatBox");
    if (!chatBox) return;
    chatBox.innerHTML = `
        <div class="message bot">
            <div class="avatar">🤖</div>
            <div class="bubble">
                <strong>Ciao! Sono Arturo.</strong><br><br>
                Conversazione riavviata! Posso aiutarti a trovare informazioni sull'istituto, modulistica, orari di segreteria e supporto sui servizi digitali.<br><br>
                <em>Come posso aiutarti?</em>
            </div>
        </div>
    `;
    resetInactivityTimer();
}

function resetInactivityTimer() {
    if (inactivityTimer) clearTimeout(inactivityTimer);
    inactivityTimer = setTimeout(() => {
        resetChat();
    }, RESET_TIME_MS);
}

function similarity(s1, s2) {
    let longer = s1;
    let shorter = s2;
    if (s1.length < s2.length) {
        longer = s2;
        shorter = s1;
    }
    const longerLength = longer.length;
    if (longerLength === 0) return 1.0;

    return (longerLength - editDistance(longer, shorter)) / parseFloat(longerLength);
}

function editDistance(s1, s2) {
    s1 = s1.toLowerCase();
    s2 = s2.toLowerCase();
    const costs = [];
    for (let i = 0; i <= s1.length; i++) {
        let lastValue = i;
        for (let j = 0; j <= s2.length; j++) {
            if (i === 0) costs[j] = j;
            else {
                if (j > 0) {
                    let newValue = costs[j - 1];
                    if (s1.charAt(i - 1) !== s2.charAt(j - 1))
                        newValue = Math.min(Math.min(newValue, lastValue), costs[j]) + 1;
                    costs[j - 1] = lastValue;
                    lastValue = newValue;
                }
            }
        }
        if (i > 0) costs[s2.length] = lastValue;
    }
    return costs[s2.length];
}
