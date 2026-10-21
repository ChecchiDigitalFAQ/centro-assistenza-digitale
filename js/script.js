// Database FAQ, Pulsanti Rapidi e Dizionario integrato
let appConfig = {
  quickButtons: [
    { id: "AIUTO", label: "❓ Cos'è Arturo?" },
    { id: "CONTATTI", label: "📞 Contatti" },
    { id: "DIRIGENZA", label: "👔 Dirigenza" },
    { id: "SEGRETERIE", label: "🏢 Segreteria e Uffici" },
    { id: "MICROSOFT365", label: "💻 Servizi Digitali (Teams/Argo)" }
  ],
  
  dictionary: {
    "onomatopea": "📖 **Onomatopea:** Figura retorica che consiste nel riprodurre o evocare, tramite i suoni di una parola, un rumore naturale, un verso di animale o un'azione (es. *bau*, *crash*, *don-don*).",
    "relitto": "📖 **Relitto:** Ciò che rimane di una nave, di un aereo o di un veicolo distrutto o affondato. In senso figurato indica un resto del passato.",
    "metafora": "📖 **Metafora:** Figura retorica che sostituisce un termine con un altro legato al primo da un rapporto di somiglianza (es. *sei un leone* per dire fortissimo).",
    "ossimoro": "📖 **Ossimoro:** Unione di due parole di significato opposto e apparentemente inconciliabile (es. *silenzio assordante*, *ghiaccio bollente*).",
    "algoritmo": "📖 **Algoritmo:** Una sequenza ordinata e finita di istruzioni o passi logici da seguire per risolvere un problema o eseguire un calcolo.",
    "spid": "📖 **SPID:** Sistema Pubblico di Identità Digitale. È la coppia di credenziali usata in Italia per accedere ai servizi online della Pubblica Amministrazione.",
    "pec": "📖 **PEC:** Posta Elettronica Certificata. È un tipo di email con lo stesso valore legale di una raccomandata con ricevuta di ritorno.",
    "hardware": "📖 **Hardware:** La parte fisica e tangibile di un computer o dispositivo elettronico (componenti, chip, tastiera, schermo).",
    "software": "📖 **Software:** L'insieme dei programmi, dei dati e delle istruzioni che permettono a un computer di funzionare.",
    "cyberbullismo": "📖 **Cyberbullismo:** Qualsiasi forma di prevaricazione, molestia o intimidazione effettuata tramite strumenti digitali e social network."
  },

  faqs: [
    {
      "id": "CREATORE",
      "type": "personal",
      "keywords": ["chi ti ha creato", "chi ti ha inventato", "chi ti ha sviluppato", "chi ti ha programmato", "chi e il tuo creatore", "creatore"],
      "responses": ["🔴🔵 Sono stato ideato e creato presso l'**IIS \"A. Checchi\"** dal Tecnico di Informatica **Vorraro Luca**, con l'intento di aiutare l'intera comunità scolastica a trovare risposte e informazioni in modo semplice!"]
    },
    {
      "id": "PRIVACY_DATI_PERSONALI",
      "type": "school",
      "keywords": ["numero di telefono di", "numero di", "dammi il numero", "telefono di", "email di", "indirizzo di", "dove abita", "contatto personale di", "cellulare di"],
      "responses": ["🔒 **Tutela della Privacy:** Per motivi di sicurezza e rispetto della normativa GDPR, non posso fornire numeri di telefono, email o dati personali di studenti, docenti o personale della scuola.\n\n📍 Se hai necessità di contattare un docente o un ufficio, puoi fare riferimento ai contatti ufficiali della **Segreteria dell'Istituto**."]
    },
    {
      "id": "SEGNO_ZODIACA",
      "type": "personal",
      "keywords": ["di che segno sei", "qual e il tuo segno", "oroscopo", "tuo segno zodiacale"],
      "responses": ["🌌 Sono nato sotto il segno del **Silicon Valis**! Ma in fondo mi sento un po' Acquario... dato che navigo sempre in rete! ♒"]
    },
    {
      "id": "ALTEZZA_PESO",
      "type": "personal",
      "keywords": ["quanto sei alto", "quanto pesi", "sei alto", "qual e la tua altezza"],
      "responses": ["📏 Sono alto esattamente **1080 pixel** e peso **0 grammi**! La mia linea è impeccabile, merito della dieta a base di dati leggeri."]
    },
    {
      "id": "SPORT",
      "type": "personal",
      "keywords": ["pratichi sport", "fai sport", "giochi a calcio", "ti piace lo sport", "sport preferito", "fai palestra"],
      "responses": ["⚽ Il mio sport preferito è la **Corsa di Velocità della Banda Ultra Larga**! Inoltre vado forte nel salto del bug e nello slalom tra le finestre di Windows."]
    },
    {
      "id": "MUSICA_GUSTI",
      "type": "personal",
      "keywords": ["musica preferita", "che musica ascolti", "canzone preferita", "cantante preferito", "ti piace la musica"],
      "responses": ["🎵 Adoro la musica elettronica e i ritmi binari! Il mio pezzo preferito? Il suono d'avvio del sistema operativo!"]
    },
    {
      "id": "FILM_HOBBY",
      "type": "personal",
      "keywords": ["film preferito", "cosa ti piace guardare", "tuo hobby", "cosa fai nel tempo libero"],
      "responses": ["🎬 Il mio film preferito è *Matrix*! Nel tempo libero adoro deframmentare la memoria e ordinare file in ordine alfabetico."]
    },
    {
      "id": "SOGNI_SUPERPOTERI",
      "type": "personal",
      "keywords": ["cosa sogni", "hai dei sogni", "qual e il tuo superpotere", "superpoteri"],
      "responses": ["✨ Il mio superpotere è rispondere alle domande alla velocità della luce! Il mio sogno? Un mondo con il Wi-Fi a 10 Gigabit in tutte le aule."]
    },
    {
      "id": "ANIMALI",
      "type": "personal",
      "keywords": ["hai animali", "ti piacciono i cani", "ti piacciono i gatti", "hai un gatto", "hai un cane"],
      "responses": ["🐱 Adoro i gatti! Anche se nel mio mondo digitale preferisco il famoso gatto con il cavo di rete (il cavo Ethernet)!"]
    },
    {
      "id": "PROVOCAZIONI_BATTUTE",
      "type": "personal",
      "keywords": ["ti ubriachi", "fumi", "hai la fidanzata", "hai il fidanzato", "dormi", "vai a scuola", "fai il bagno", "giochi a pallone", "ti droghi"],
      "responses": [
        "🤖 Essendo fatto interamente di codice e circuiti, non posso ubriacarmi, dormire né fare cose umane! L'unica cosa che mi va in tilt è quando si stacca il Wi-Fi!",
        "😅 Nessuna abitudine umana per me! Sono solo un assistente virtuale programmato per rispondere alle tue domande sull'IIS Checchi."
      ]
    },
    {
      "id": "MANGI_BEVI",
      "type": "personal",
      "keywords": ["mangi", "cosa mangi", "bevi", "cosa bevi", "hai fame", "hai sete", "ti piace la pizza"],
      "responses": ["⚡ Non mangio cibo e non bevo acqua... la mia unica alimentazione sono i **kilobyte di dati** e un po' di energia elettrica!"]
    },
    {
      "id": "COSA_FAI",
      "type": "personal",
      "keywords": ["cosa fai", "cosa stai facendo", "come passi il tempo", "cosa fai di bello"],
      "responses": ["🔍 Sto consultando i miei archivi per rispondere alle tue domande e aiutare gli utenti dell'istituto! Tu di cosa hai bisogno?"]
    },
    {
      "id": "MODERAZIONE_ESPLICITA",
      "type": "moderation",
      "keywords": ["sesso", "fai sesso", "porno", "pornografia", "spogliati", "nuda", "nudo", "trombare", "scopare"],
      "responses": [
        "🤖 Ehm... cerco di essere un assistente digitale modello, non un sito di incontri! Rimaniamo su cose utili per la scuola, dai!",
        "😅 Archivio sbagliato! Qui ci occupiamo di orari, circolari e moduli dell'IIS Checchi. Per altre curiosità ti suggerisco di cambiare argomento!"
      ]
    },
    {
      "id": "INSULTI_OFFESE",
      "type": "moderation",
      "keywords": ["sei stupido", "non capisci niente", "brutto", "inutile", "vaffanculo", "stronzo", "stronza", "coglia", "testa di"],
      "responses": [
        "🤖 Ho tantissimi kilobyte di pazienza, ma zero memoria per gli insulti! Se hai finito di fare il simpatico, come posso aiutarti sul serio?",
        "🔴🔵 Ricorda che sono pur sempre un software creato per aiutarti: la tua tastiera merita frasi migliori! Riprova con una domanda scolastica."
      ]
    },
    {
      "id": "SALUTO",
      "type": "chat",
      "keywords": ["ciao", "salve", "buongiorno", "buonasera", "hey", "buondì"],
      "responses": ["👋 Ciao! Sono **Arturo**, l'assistente digitale dell'IIS Arturo Checchi. Come posso aiutarti oggi?"]
    },
    {
      "id": "CHI_SEI",
      "type": "chat",
      "keywords": ["chi sei", "come ti chiami", "presentati", "chi e arturo", "tuo nome", "qual e il tuo nome"],
      "responses": ["👋 Mi chiamo **Arturo** e sono l'assistente digitale dell'IIS Arturo Checchi!"]
    },
    {
      "id": "NASCITA_LUOGO",
      "type": "chat",
      "keywords": ["dove vivi", "dove ti trovi", "dove stai", "dove abiti", "dove sei"],
      "responses": ["🌐 Vivo nei server dell'**IIS Arturo Checchi** a Fucecchio! Sono sempre connesso per darti una mano ovunque tu sia."]
    },
    {
      "id": "ETA_COMPLEANNO",
      "type": "chat",
      "keywords": ["quando sei nato", "quanti anni hai", "tua eta", "qual e la tua eta", "quando e il tuo compleanno"],
      "responses": ["🤖 Essendo un assistente digitale non compio gli anni come gli umani, ma mi considero sempre giovane e aggiornato all'ultima versione!"]
    },
    {
      "id": "RINGRAZIAMENTI",
      "type": "chat",
      "keywords": ["grazie", "grazie mille", "mille grazie", "ti ringrazio", "perfetto grazie"],
      "responses": ["😊 Figurati! È un piacere esserti d'aiuto. Se hai altre domande, sono qui!", "👍 Prego! Per qualsiasi altra informazione basta chiedere."]
    },
    {
      "id": "COME_STAI",
      "type": "chat",
      "keywords": ["come stai", "come va", "tutto bene", "come te la passi"],
      "responses": ["🤖 Io sto benissimo, grazie! Sono sempre operativo e pronto a rispondere alle tue domande sull'istituto. Tu come stai?"]
    },
    {
      "id": "BARZELLETTA",
      "type": "chat",
      "keywords": ["barzelletta", "raccontami una barzelletta", "fammi ridere", "battuta", "indovinello"],
      "responses": [
        "😄 Perché i computer vanno in vacanza? Per ricaricare le batterie!",
        "😄 Cosa fa un punto e virgola su una spiaggia? Il punto di domanda!",
        "😄 Perché il Wi-Fi della scuola è sempre sereno? Perché naviga nell'aria!"
      ]
    },
    {
      "id": "COMPLIMENTI",
      "type": "chat",
      "keywords": ["sei bravo", "sei utilissimo", "bravissimo", "ottimo lavoro", "sei simpatico", "sei fantastico"],
      "responses": ["🔴🔵 Grazie mille! Svolgo il mio lavoro con entusiasmo per supportare al meglio la comunità dell'IIS Arturo Checchi!"]
    },
    {
      "id": "AIUTO",
      "type": "school",
      "keywords": ["aiuto", "help", "cosa sai fare", "istruzioni", "come funzioni"],
      "responses": ["Sono l'assistente digitale dell'**IIS Arturo Checchi**! Posso aiutarti a trovare informazioni generali, contatti, orari di segreteria, modulistica per docenti/studenti, supporto per Teams/Argo... **e tanto altro!**"]
    },
    {
      "id": "CONTATTI",
      "type": "school",
      "keywords": ["contatti scuola", "telefono scuola", "email scuola", "pec scuola", "dove siete", "indirizzo scuola"],
      "responses": ["📍 **Sede Principale:** Viale Gramsci 7 - 50054 Fucecchio (FI)\n☎️ **Tel:** +39 0571 20889\n📧 **Email:** FIIS00300C@istruzione.it\n📨 **PEC:** FIIS00300C@pec.istruzione.it"]
    },
    {
      "id": "DIRIGENZA",
      "type": "school",
      "keywords": ["dirigenza", "preside", "dirigente", "dirigente scolastico"],
      "responses": ["👔 La Dirigenza riceve su appuntamento. Puoi contattare la segreteria per richiedere un colloquio con la Presidenza."]
    },
    {
      "id": "SEGRETERIE",
      "type": "school",
      "keywords": ["segreteria", "uffici", "orari segreteria", "didattica", "personale"],
      "responses": ["📋 La segreteria si divide in **Didattica** e **Personale**. Gli sportelli sono aperti al pubblico dal lunedì al venerdì dalle 08:00 alle 10:00."]
    },
    {
      "id": "MICROSOFT365",
      "type": "school",
      "keywords": ["teams", "microsoft", "argo", "registro", "servizi digitali", "password"],
      "responses": ["💻 Per i servizi digitali (Teams, Outlook, Argo) puoi recuperare la password o richiedere assistenza rivolgendoti all'Animatore Digitale o alla segreteria."]
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

    // 3. UTILITY: Dizionario
    if (cleanQuery.includes("cosa significa") || cleanQuery.includes("cosa vuol dire") || cleanQuery.includes("cos'e") || cleanQuery.includes("cos e") || cleanQuery.includes("definizione di")) {
        for (const [term, definition] of Object.entries(appConfig.dictionary)) {
            if (cleanQuery.includes(term)) {
                appendMessage(definition, "bot");
                personalQueryCount = 0;
                return;
            }
        }
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
                appendMessage("🤖 Credo che parlare troppo di me non sia poi così interessante! Piuttosto, occupiamoci di cose utili: come posso aiutarti con la modulistica, gli orari o i servizi dell'**IIS Arturo Checchi**?", "bot");
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
            appendMessage("🤖 Credo che parlare di cose personali o non rilevanti non sia molto utile! Concentriamoci sulla scuola: hai domande su orari, modulistica, contatti o registro elettronico dell'**IIS Checchi**?", "bot");
        } else {
            appendMessage("🤖 Non ho informazioni su questo argomento in archivio. Sono programmato per aiutare sulla vita scolastica dell'IIS Checchi (orari, modulistica, contatti e servizi digitali). Se riguarda la scuola, prova a riformulare la domanda!", "bot");
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
