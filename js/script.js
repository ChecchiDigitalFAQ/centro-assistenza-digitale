// Database FAQ, Pulsanti Rapidi e Dizionario integrato
let appConfig = {
  quickButtons: [
    { id: "AIUTO", label: "❓ Cos'è Arturo?" },
    { id: "CONTATTI", label: "📞 Contatti" },
    { id: "DIRIGENZA", label: "👔 Dirigenza" },
    { id: "SEGRETERIE", label: "🏢 Segreteria e Uffici" },
    { id: "MICROSOFT365", label: "💻 Servizi Digitali (Teams/Argo)" }
  ],
  
  // DIZIONARIO E DEFINIZIONI ESPANSE
  dictionary: {
    // Termini di Cultura Generale e Sport
    "maratona": "📖 **Maratona:** Corsa podistica sulla distanza olimpica di 42,195 km. In senso figurato indica una prova lunga e impegnativa.",
    "onomatopea": "📖 **Onomatopea:** Figura retorica che consiste nel riprodurre o evocare, tramite i suoni di una parola, un rumore naturale, un verso di animale o un'azione (es. *bau*, *crash*, *don-don*).",
    "relitto": "📖 **Relitto:** Ciò che rimane di una nave, di un aereo o di un veicolo distrutto o affondato.",
    "metafora": "📖 **Metafora:** Figura retorica che sostituisce un termine con un altro legato da un rapporto di somiglianza (es. *sei un leone*).",
    "ossimoro": "📖 **Ossimoro:** Unione di due parole di significato opposto e apparentemente inconciliabile (es. *silenzio assordante*).",
    "similitudine": "📖 **Similitudine:** Figura retorica che paragona due elementi esplicitamente usando connettivi come *come*, *sembra*, *pare*.",
    "iperbole": "📖 **Iperbole:** Figura retorica che consiste nell'esagerare la realtà per eccesso o per difetto (es. *ti ho aspettato un secolo*).",
    "climax": "📖 **Climax:** Configurazione retorica in cui i termini si succedono in ordine di intensità crescente o decrescente.",
    
    // Termini Digitali e Scolastici
    "spid": "📖 **SPID:** Sistema Pubblico di Identità Digitale. Credenziali usate per accedere ai servizi online della PA.",
    "pec": "📖 **PEC:** Posta Elettronica Certificata. Email con valore legale pari ad una raccomandata con ricevuta di ritorno.",
    "algoritmo": "📖 **Algoritmo:** Sequenza ordinata e finita di istruzioni per risolvere un problema.",
    "hardware": "📖 **Hardware:** La parte fisica e tangibile di un computer (componenti, schermo, tastiera).",
    "software": "📖 **Software:** L'insieme dei programmi e istruzioni che permettono ad un computer di funzionare.",
    "cyberbullismo": "📖 **Cyberbullismo:** Qualsiasi forma di prevaricazione o molestia effettuata tramite strumenti digitali.",
    "phishing": "📖 **Phishing:** Truffa informatica effettuata inviando email ingannevoli per rubare dati personali e password.",
    "browser": "📖 **Browser:** Programma per navigare in Internet (es. Google Chrome, Mozilla Firefox, Microsoft Edge)."
  },

  faqs: [
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
      "responses": ["Sono l'assistente digitale dell'**IIS Arturo Checchi**! Posso aiutarti a trovare informazioni, orari di segreteria e supporto sui servizi digitali."]
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
      "responses": ["👔 La Dirigenza riceve su appuntamento tramite la segreteria."]
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
    const cleanQuery = query.toLowerCase().trim();

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

    // 3. UTILITY: DIZIONARIO & DEFINIZIONI
    const isDictionaryQuery = cleanQuery.includes("cosa significa") || 
                              cleanQuery.includes("cosa vuol dire") || 
                              cleanQuery.includes("cos'e") || 
                              cleanQuery.includes("cos e") || 
                              cleanQuery.includes("definizione di");

    if (isDictionaryQuery) {
        for (const [term, definition] of Object.entries(appConfig.dictionary)) {
            if (cleanQuery.includes(term)) {
                appendMessage(definition, "bot");
                personalQueryCount = 0; // Reset contatore se risponde alla definizione
                return;
            }
        }
        
        // Se l'utente ha chiesto una definizione ma la parola non c'è nel dizionario:
        personalQueryCount = 0; // Non conta come domanda personale
        appendMessage("📖 Al momento questo termine non è presente nel mio dizionario integrato. Ho preso nota della tua richiesta e cercheremo di aggiungerlo presto!", "bot");
        return;
    }

    // 4. RICERCA NELLE FAQ
    let bestMatch = null;
    let highestScore = 0;

    appConfig.faqs.forEach(item => {
        item.keywords.forEach(keyword => {
            const cleanKeyword = keyword.toLowerCase().trim();

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
                const score = similarity(cleanQuery, cleanKeyword);
                if (score > highestScore) {
                    highestScore = score;
                    bestMatch = item;
                }
            }
        });
    });

    if (bestMatch && highestScore >= 0.40) {
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
            appendMessage("🤖 Non ho informazioni su questo argomento in archivio. Prova a riformulare la domanda per il contesto scolastico!", "bot");
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
