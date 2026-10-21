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
      "keywords": ["chi ti ha creato", "chi ti ha inventato", "chi ti ha sviluppato", "chi ti ha programmato", "chi e il tuo creatore", "chi ti ha fatto", "chi ti ha progettato"],
      "responses": ["🔴🔵 Sono stato ideato e creato presso l'**IIS \"A. Checchi\"** dal Tecnico di Informatica **Vorraro Luca**, con l'intento di aiutare l'intera comunità scolastica (studenti, famiglie, docenti e personale ATA) a trovare risposte rapide, moduli e informazioni in modo semplice e immediato!"]
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
        appendMessage
