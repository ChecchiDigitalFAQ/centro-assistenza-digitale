let faqData = [];
let inactivityTimer = null;
const RESET_TIME_MS = 5 * 60 * 1000; // 5 minuti

// Caricamento del JSON all'avvio
document.addEventListener("DOMContentLoaded", () => {
    loadFAQ();
    resetInactivityTimer();
});

// Funzione per caricare i dati dal file JSON
async function loadFAQ() {
    try {
        const response = await fetch("data/faq.json");
        const data = await response.json();
        faqData = data.faqs || [];
    } catch (error) {
        console.error("Errore nel caricamento delle FAQ:", error);
    }
}

// Gestione invio tramite tasto INVIO
function handleKeyPress(event) {
    if (event.key === "Enter") {
        sendMessage();
    }
}

// Invia messaggio dell'utente
function sendMessage() {
    const inputField = document.getElementById("userInput");
    const message = inputField.value.trim();

    if (message === "") return;

    appendMessage(message, "user");
    inputField.value = "";

    resetInactivityTimer();

    // Simula risposta del bot dopo breve attesa
    setTimeout(() => {
        processUserQuery(message);
    }, 400);
}

// Elabora la domanda dell'utente
function processUserQuery(query) {
    const cleanQuery = query.toLowerCase().trim();

    // 1. Controllo domande su Data e Ora
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

    // 2. Ricerca nelle FAQ (Inclusione diretta + Fuzzy Matching)
    let bestMatch = null;
    let highestScore = 0;

    faqData.forEach(item => {
        item.keywords.forEach(keyword => {
            const cleanKeyword = keyword.toLowerCase().trim();

            // Check A: Contenimento esatto della parola/frase
            if (cleanQuery.includes(cleanKeyword) || cleanKeyword.includes(cleanQuery)) {
                highestScore = 1.0;
                bestMatch = item;
            } else {
                // Check B: Somiglianza con tolleranza errori
                const score = similarity(cleanQuery, cleanKeyword);
                if (score > highestScore) {
                    highestScore = score;
                    bestMatch = item;
                }
            }
        });
    });

    // Risposta se trovata con corrispondenza o con punteggio >= 0.30
    if (bestMatch && highestScore >= 0.30) {
        const responseText = bestMatch.responses[Math.floor(Math.random() * bestMatch.responses.length)];
        appendMessage(responseText, "bot");
    } else {
        // Fallback per risposte non trovate
        appendMessage("🤖 Ci ho provato, ma al momento questa informazione non è presente nel mio archivio. Ho preso nota della tua richiesta e cercheremo di aggiungerla presto!", "bot");
    }
}

// Azione dai pulsanti rapidi della barra laterale
function quickAction(actionId) {
    const match = faqData.find(item => item.id === actionId);
    if (match) {
        const responseText = match.responses[0];
        appendMessage(responseText, "bot");
    } else {
        processUserQuery(actionId);
    }
    resetInactivityTimer();
}

// Aggiunge un messaggio alla chat (con supporto per **grassetto** HTML)
function appendMessage(text, sender) {
    const chatBox = document.getElementById("chatBox");
    
    const messageDiv = document.createElement("div");
    messageDiv.classList.add("message", sender);

    const avatar = document.createElement("div");
    avatar.classList.add("avatar");
    avatar.innerText = sender === "bot" ? "🤖" : "👤";

    const bubble = document.createElement("div");
    bubble.classList.add("bubble");

    // Convertiamo i **testi** in <strong>testi</strong> e le nuove righe in <br>
    let formattedText = text
        .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
        .replace(/\n/g, "<br>");

    bubble.innerHTML = formattedText;

    messageDiv.appendChild(avatar);
    messageDiv.appendChild(bubble);
    chatBox.appendChild(messageDiv);

    chatBox.scrollTop = chatBox.scrollHeight;
}

// Tasto Nuova Conversazione
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

// Timer Inattività 5 Minuti
function resetInactivityTimer() {
    if (inactivityTimer) clearTimeout(inactivityTimer);
    inactivityTimer = setTimeout(() => {
        resetChat();
    }, RESET_TIME_MS);
}

// Algoritmo di Levenshtein (Fuzzy Matching per tolleranza refusi)
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
