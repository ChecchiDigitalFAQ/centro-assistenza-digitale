// Database FAQ e Pulsanti Rapidi integrati
let appConfig = {
  quickButtons: [
    { id: "AIUTO", label: "❓ Cos'è Arturo?" },
    { id: "CONTATTI", label: "📞 Contatti" },
    { id: "DIRIGENZA", label: "👔 Dirigenza" },
    { id: "SEGRETERIE", label: "🏢 Segreteria e Uffici" },
    { id: "MICROSOFT365", label: "💻 Servizi Digitali (Teams/Argo)" }
  ],
  faqs: [
    {
      "id": "CREATORE",
      "keywords": ["chi ti ha creato", "chi ti ha inventato", "chi ti ha sviluppato", "chi ti ha programmato", "chi e il tuo creatore", "chi ti ha fatto", "chi ti ha progettato"],
      "responses": ["🔴🔵 Sono stato ideato e creato presso l'**IIS \"A. Checchi\"** dal Tecnico di Informatica **Vorraro Luca**, con l'intento di aiutare l'intera comunità scolastica (studenti, famiglie, docenti e personale ATA) a trovare risposte rapide, moduli e informazioni in modo semplice e immediato!"]
    },
    {
      "id": "MODERAZIONE_ESPLICITA",
      "keywords": ["sesso", "fai sesso", "porno", "pornografia", "spogliati", "nuda", "nudo", "trombare", "scopare"],
      "responses": [
        "🤖 Ehm... cerco di essere un assistente digitale modello, non un sito di incontri! Rimaniamo su cose utili per la scuola, dai!",
        "😅 Archivio sbagliato! Qui ci occupiamo di orari, circolari e moduli dell'IIS Checchi. Per altre curiosità ti suggerisco di cambiare argomento!"
      ]
    },
    {
      "id": "INSULTI_OFFESE",
      "keywords": ["sei stupido", "non capisci niente", "brutto", "inutile", "vaffanculo", "stronzo", "stronza", "coglia", "testa di"],
      "responses": [
        "🤖 Ho tantissimi kilobyte di pazienza, ma zero memoria per gli insulti! Se hai finito di fare il simpatico, come posso aiutarti sul serio?",
        "🔴🔵 Ricorda che sono pur sempre un software creato per aiutarti: la tua tastiera merita frasi migliori! Riprova con una domanda scolastica."
      ]
    },
    {
      "id": "SALUTO",
      "keywords": ["ciao", "salve", "buongiorno", "buonasera", "hey", "buondì"],
      "responses": ["👋 Ciao! Sono **Arturo**, l'assistente digitale dell'IIS Arturo Checchi. Come posso aiutarti oggi?"]
    },
    {
      "id": "CHI_SEI",
      "keywords": ["chi sei", "come ti chiami", "presentati", "chi e arturo", "tuo nome", "qual e il tuo nome"],
      "responses": ["👋 Mi chiamo **Arturo** e sono l'assistente digitale dell'IIS Arturo Checchi!"]
    },
    {
      "id": "NASCITA_LUOGO",
      "keywords": ["dove vivi", "dove ti trovi", "dove stai", "dove abiti", "dove sei"],
      "responses": ["🌐 Vivo nei server dell'**IIS Arturo Checchi** a Fucecchio! Sono sempre connesso per darti una mano ovunque tu sia."]
    },
    {
      "id": "ETA_COMPLEANNO",
      "keywords": ["quando sei nato", "quanti anni hai", "tua eta", "qual e la tua eta", "quando e il tuo compleanno"],
      "responses": ["🤖 Essendo un assistente digitale non compio gli anni come gli umani, ma mi considero sempre giovane e aggiornato all'ultima versione!"]
    },
    {
      "id": "MANGI_BEVI",
      "keywords": ["mangi", "cosa mangi", "bevi", "cosa bevi", "hai fame", "hai sete", "ti piace la pizza"],
      "responses": ["⚡ Non mangio cibo e non bevo acqua... la mia unica alimentazione sono i **kilobyte di dati** e un po' di energia elettrica!"]
    },
    {
      "id": "COSA_FAI",
      "keywords": ["cosa fai", "cosa stai facendo", "come passi il tempo", "cosa fai di bello"],
      "responses": ["🔍 Sto consultando i miei archivi per rispondere alle tue domande e aiutare gli utenti dell'istituto! Tu di cosa hai bisogno?"]
    },
    {
      "id": "RINGRAZIAMENTI",
      "keywords": ["grazie", "grazie mille", "mille grazie", "ti ringrazio", "perfetto grazie"],
      "responses": ["😊 Figurati! È un piacere esserti d'aiuto. Se hai altre domande, sono qui!", "👍 Prego! Per qualsiasi altra informazione basta chiedere."]
    },
    {
      "id": "COME_STAI",
      "keywords": ["come stai", "come va", "tutto bene", "come te la passi"],
      "responses": ["🤖 Io sto benissimo, grazie! Sono sempre operativo e pronto a rispondere alle tue domande sull'istituto. Tu come stai?"]
    },
    {
      "id": "BARZELLETTA",
      "keywords": ["barzelletta", "raccontami una barzelletta", "fammi ridere", "battuta", "indovinello"],
      "responses": [
        "😄 Perché i computer vanno in vacanza? Per ricaricare le batterie!",
        "😄 Cosa fa un punto e virgola su una spiaggia? Il punto di domanda!",
        "😄 Perché il Wi-Fi della scuola è sempre sereno? Perché naviga nell'aria!"
      ]
    },
    {
      "id": "COMPLIMENTI",
      "keywords": ["sei bravo", "sei utilissimo", "bravissimo", "ottimo lavoro", "sei simpatico", "sei fantastico"],
      "responses": ["🔴🔵 Grazie mille! Svolgo il mio lavoro con entusiasmo per supportare al meglio la comunità dell'IIS Arturo Checchi!"]
    },
    {
      "id": "AIUTO",
      "keywords": ["aiuto", "help", "cosa sai fare", "istruzioni", "come funzioni"],
      "responses": ["Sono l'assistente digitale dell'**IIS Arturo Checchi**! Posso aiutarti a trovare informazioni generali, contatti, orari di segreteria, modulistica per docenti/studenti, supporto per Teams/Argo... **e tanto altro!**"]
    },
    {
      "id": "CONTATTI",
      "keywords": ["contatti", "telefono", "email", "pec", "dove siete", "indirizzo"],
      "responses": ["📍 **Sede Principale:** Viale Gramsci 7 - 50054 Fucecchio (FI)\n☎️ **Tel:** +39 0571 20889\n📧 **Email:** FIIS00300C@istruzione.it\n📨 **PEC:** FIIS00300C@pec.istruzione.it"]
    },
    {
      "id": "DIRIGENZA",
      "keywords": ["dirigenza", "preside", "dirigente", "dirigente scolastico"],
      "responses": ["👔 La Dirigenza receive su appuntamento. Puoi contattare la segreteria per richiedere un colloquio con la Presidenza."]
    },
    {
      "id": "SEGRETERIE",
      "keywords": ["segreteria", "uffici", "orari segreteria", "didattica", "personale"],
      "responses": ["📋 La segreteria si divide in **Didattica** e **Personale**. Gli sportelli sono aperti al pubblico dal lunedì al venerdì dalle 08:00 alle 10:00."]
    },
    {
      "id": "MICROSOFT365",
      "keywords": ["teams", "microsoft", "argo", "registro", "servizi digitali", "password"],
      "responses": ["💻 Per i servizi digitali (Teams, Outlook, Argo) puoi recuperare la password o richiedere assistenza rivolgendoti all'Animatore Digitale o alla segreteria."]
    }
  ]
};

let inactivityTimer = null;
const RESET_TIME_MS = 5 * 60 * 1000; // 5 minuti

if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initApp);
} else {
    initApp();
}

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
    const message = inputField.value.trim();

    if (message === "") return;

    appendMessage(message, "user");
    inputField.value = "";

    resetInactivityTimer();

    setTimeout(() => {
        processUserQuery(message);
    }, 400);
}

function processUserQuery(query) {
    const cleanQuery = query.toLowerCase().trim();

    // 1. UTILITY: Calcolatrice Matematica integrata
    const mathExpression = extractMathExpression(cleanQuery);
    if (mathExpression) {
        try {
            const result = Function(`'use strict'; return (${mathExpression})`)();
            if (!isNaN(result)) {
                appendMessage(`🧮 Il risultato di **${mathExpression}** è **${result}**.`, "bot");
                return;
            }
        } catch (e) {}
    }

    // 2. UTILITY: Data e Ora
    if (cleanQuery.includes("ora") || cleanQuery.includes("ore") || cleanQuery.includes("che ora")) {
        const now = new Date();
        const timeStr = now.toLocaleTimeString('it-IT', { hour: '2-digit', minute: '2-digit' });
        appendMessage(`⌚ Attualmente sono le ore **${timeStr}**.`, "bot");
        return;
    }

    if (cleanQuery.includes("giorno") || cleanQuery.includes("data") || cleanQuery.includes("oggi")) {
        const now = new Date();
        const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        const dateStr = now.toLocaleDateString('it-IT', options);
        appendMessage(`📅 Oggi è **${dateStr}**.`, "bot");
        return;
    }

    // 3. Ricerca FAQ rigorosa
    let bestMatch = null;
    let highestScore = 0;

    appConfig.faqs.forEach(item => {
        item.keywords.forEach(keyword => {
            const cleanKeyword = keyword.toLowerCase().trim();

            // Corrispondenza esatta
            if (cleanQuery === cleanKeyword) {
                highestScore = 1.0;
                bestMatch = item;
            } 
            // Inclusione di frasi chiave strutturate (almeno due parole o keyword significative)
            else if (cleanKeyword.length >= 5 && cleanQuery.includes(cleanKeyword)) {
                const score = 0.90;
                if (score > highestScore) {
                    highestScore = score;
                    bestMatch = item;
                }
            } 
            // Tolleranza refusi solo se c'è forte somiglianza
            else {
                const score = similarity(cleanQuery, cleanKeyword);
                if (score > highestScore) {
                    highestScore = score;
                    bestMatch = item;
                }
            }
        });
    });

    // Soglia alzata a 0.55 per evitare risposte a caso o "falsi positivi"
    if (bestMatch && highestScore >= 0.55) {
        const responseText = bestMatch.responses[Math.floor(Math.random() * bestMatch.responses.length)];
        appendMessage(responseText, "bot");
    } else {
        // Fallback chiaro, trasparente e professionale
        appendMessage("🤖 Al momento non ho informazioni precise in archivio su questo argomento. Ho preso nota della tua domanda per i prossimi aggiornamenti!\n\n📌 Per pratiche urgenti puoi consultare i **Servizi Rapidi** a sinistra o contattare la segreteria dell'istituto.", "bot");
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
    const chatBox = document.getElementById("chatBox");
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
