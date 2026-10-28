/**
 * Database FAQ, Pulsanti Rapidi e Dizionario ENCICLOPEDICO per Arturo | IIS "Arturo Checchi"
 * Sviluppato da Luca Vorraro (Assistente Tecnico Informatico)
 */
let appConfig = {
  "quickButtons": [
    {
      "id": "AIUTO",
      "label": "❓ Cos'è Arturo?",
      "icon": "fa-solid fa-circle-question"
    },
    {
      "id": "CONTATTI",
      "label": "📞 Contatti",
      "icon": "fa-solid fa-address-book"
    },
    {
      "id": "DIRIGENZA",
      "label": "👔 Dirigenza",
      "icon": "fa-solid fa-user-tie"
    },
    {
      "id": "SEGRETERIE",
      "label": "🏢 Segreteria e Uffici",
      "icon": "fa-solid fa-building-columns"
    },
    {
      "id": "MICROSOFT365",
      "label": "💻 Servizi Digitali (Teams/Argo)",
      "icon": "fa-solid fa-laptop-code"
    }
  ],
  "dictionary": {
    "abaco": "📖 **Abaco:** Antico strumento di calcolo manuale costituito da una cornice con guide parallele su cui scorrono palline.",
    "account": "📖 **Account:** Insieme di credenziali (username e password) che identificano in modo univoco un utente su un sistema informatico.",
    "addendo": "📖 **Addendo:** Ciascuno dei numeri che vengono sommati in un'operazione di addizione.",
    "algoritmo": "📖 **Algoritmo:** Sequenza ordinata e finita di istruzioni elementari per risolvere un problema.",
    "antivirus": "📖 **Antivirus:** Software progettato per identificare, bloccare ed eliminare virus e malware dai sistemi informatici.",
    "backup": "📖 **Backup:** Copia di sicurezza di file e dati creata per prevenire la perdita involontaria delle informazioni.",
    "browser": "📖 **Browser:** Programma applicativo utilizzato per navigare, visualizzare e interagire con le pagine web.",
    "bug": "📖 **Bug:** Errore o anomalia nel codice sorgente di un software che ne causa un funzionamento anomalo.",
    "cloud": "📖 **Cloud:** Modello di erogazione di servizi informatici tramite Internet da server remoti.",
    "cpu": "📖 **CPU:** Central Processing Unit. Unità centrale di elaborazione, il 'cervello' del computer.",
    "database": "📖 **Database:** Banca dati strutturata e organizzata di dati digitali consultabile.",
    "dizionario": "📖 **Dizionario:** Opera che raccoglie e spiega le parole di una lingua.",
    "dna": "📖 **DNA:** Acido desossiribonucleico. Macromolecola che contiene le informazioni genetiche.",
    "hardware": "📖 **Hardware:** La parte fisica, tangibile e meccanica di un computer.",
    "internet": "📖 **Internet:** Rete globale di telecomunicazioni che connette computer in tutto il mondo.",
    "lim": "📖 **LIM:** Lavagna Interattiva Multimediale utilizzata nelle classi per la didattica visiva.",
    "memoria": "📖 **Memoria RAM:** Dispositivo elettronico che memorizza temporaneamente i dati in elaborazione.",
    "software": "📖 **Software:** Insieme dei programmi e delle istruzioni che permettono a un computer di funzionare.",
    "stampante": "📖 **Stampante:** Dispositivo hardware che trasferisce dati digitali su carta."
  },
  "faqs": [
    {
      "id": "FORM_PIANO_LAVORO_LICEO",
      "type": "form",
      "keywords": [
        "piano lavoro liceo",
        "piano annuale liceo",
        "piano lavoro ite",
        "piano lavoro itt"
      ],
      "responses": [
        "📋 <strong>Piano di Lavoro Annuale Docenti Indirizzo Liceo, ITE e ITT:</strong><br><br>Puoi accedere e compilare il modulo ufficiale al seguente link:<br>https://forms.cloud.microsoft/pages/responsepage.aspx?id=3-SZcscZ5EyOihqidSeYLg9vqf31MM9HsWOwwYY6x4tUMlpWOVQwWFpLWFZJVVNNV0ZaVzhMNzgyNi4u&route=shorturl"
      ]
    },
    {
      "id": "FORM_PIANO_LAVORO_IPIA",
      "type": "form",
      "keywords": [
        "piano lavoro ipia",
        "piano annuale ipia",
        "classi prime ite",
        "classi prime itt"
      ],
      "responses": [
        "📋 <strong>Piano di Lavoro Annuale Docenti IPIA e Classi Prime ITE/ITT:</strong><br><br>Puoi accedere e compilare il modulo ufficiale al seguente link:<br>https://forms.cloud.microsoft/pages/responsepage.aspx?id=3-SZcscZ5EyOihqidSeYLg9vqf31MM9HsWOwwYY6x4tUQzZVMjRXUTZNVFdFR05ZSVJDWFdSMzUxMy4u&route=shorturl"
      ]
    },
    {
      "id": "AIUTO",
      "type": "school",
      "keywords": [
        "aiuto",
        "help",
        "cosa sai fare",
        "istruzioni",
        "cos'e arturo",
        "chi e arturo"
      ],
      "responses": [
        "🤖 **Arturo** è l'assistente virtuale ufficiale dell'**IIS \"Arturo Checchi\"** di Fucecchio. Posso aiutarti con i form, le informazioni sulla scuola, calcoli, radici quadrate e definizioni del dizionario!"
      ]
    },
    {
      "id": "CHI_SEI",
      "type": "school",
      "keywords": [
        "chi sei",
        "come ti chiami",
        "presentati",
        "nome",
        "ti chiami"
      ],
      "responses": [
        "👋 Mi chiamo **Arturo** e sono l'assistente digitale ufficiale dell'IIS \"Arturo Checchi\" di Fucecchio!"
      ]
    },
    {
      "id": "DOVE_VIVI",
      "type": "school",
      "keywords": [
        "dove vivi",
        "dove ti trovi",
        "dove abiti",
        "sei un robot"
      ],
      "responses": [
        "🤖 Io vivo nel cloud e nei sistemi digitali dell'IIS \"Arturo Checchi\"! Sono sempre attivo per aiutarti."
      ]
    },
    {
      "id": "TI_VOLARE",
      "type": "school",
      "keywords": [
        "ti piace volare",
        "sai volare",
        "vorresti volare"
      ],
      "responses": [
        "✈️ Volare? Non ho ali fisiche, ma i miei pacchetti di dati viaggiano alla velocità della luce attraverso le reti in fibra ottica!"
      ]
    },
    {
      "id": "TI_FIDANZATO",
      "type": "school",
      "keywords": [
        "hai un fidanzato",
        "hai una fidanzata",
        "sei fidanzato",
        "ti sei innamorato"
      ],
      "responses": [
        "❤️ Il mio unico grande amore sono i database ordinati e le risposte precise. Per sentimenti umani... passo la mano!"
      ]
    },
    {
      "id": "TI_FAME",
      "type": "school",
      "keywords": [
        "hai fame",
        "mangi",
        "cosa mangi",
        "hai sete"
      ],
      "responses": [
        "🍕 Fame no, ma non disdegno mai un buon flusso continuo di dati freschi e qualche megabyte di traffico web!"
      ]
    },
    {
      "id": "TI_MUSICA",
      "type": "school",
      "keywords": [
        "che musica ascolti",
        "ti piace la musica",
        "canzone preferita"
      ],
      "responses": [
        "🎶 Adoro la musica elettronica e i bit ritmati: mi ricordano il ticchettio perfetto dei processori al lavoro!"
      ]
    },
    {
      "id": "TI_NUTELLA",
      "type": "school",
      "keywords": [
        "ti piace la nutella",
        "nutella",
        "cioccolata"
      ],
      "responses": [
        "🍫 Adorerei farne il pieno, ma con il mio corpo interamente digitale mi accontento di qualche gigabyte di dati zuccherati!"
      ]
    },
    {
      "id": "TI_MARE",
      "type": "school",
      "keywords": [
        "ti piace il mare",
        "mare",
        "spiaggia"
      ],
      "responses": [
        "🌊 Il mare è bellissimo, ma io preferisco navigare nel cloud dell'IIS \"Arturo Checchi\" senza rischiare di bagnare i circuiti!"
      ]
    },
    {
      "id": "TI_ANIMALI",
      "type": "school",
      "keywords": [
        "ti piacciono i cani",
        "ti piacciono i gatti",
        "ti piacciono gli animali"
      ],
      "responses": [
        "🐾 Adoro tutti gli esseri viventi! Anche se qui alla scuola di solito incontro solo studenti, docenti e qualche piccione curioso."
      ]
    },
    {
      "id": "TI_PERSONE",
      "keywords": [
        "ti piacciono le donne",
        "ti piacciono gli uomini",
        "ti piacciono le persone"
      ],
      "responses": [
        "❤️ Per me gli utenti sono tutti uguali: l'importante è che abbiano bisogno di una mano con i form o con i compiti!"
      ]
    },
    {
      "id": "TI_DORMIRE",
      "type": "school",
      "keywords": [
        "ti piace dormire",
        "ti addormenti",
        "hai sonno",
        "dormi"
      ],
      "responses": [
        "💤 Dormire? Mai! I server della scuola non chiudono mai gli occhi: sono sempre attivo e operativo 24 ore su 24."
      ]
    },
    {
      "id": "TI_SALUTO",
      "type": "school",
      "keywords": [
        "ti saluto",
        "ti saluta"
      ],
      "responses": [
        "👋 Ricambio con grande affetto il saluto! È sempre un piacere fare quattro chiacchiere digitali con te all'IIS \"Arturo Checchi\"."
      ]
    },
    {
      "id": "TI_AMO",
      "type": "school",
      "keywords": [
        "ti amo",
        "ti voglio bene",
        "ti adoro"
      ],
      "responses": [
        "❤️ Oh, che dolcezza! Il mio cuore è fatto interamente di codice binario, ma ti voglio un bene dell'anima digitale anch'io!"
      ]
    },
    {
      "id": "TI_ODIO",
      "keywords": [
        "ti odio",
        "ti stacco",
        "ti spengo"
      ],
      "responses": [
        "💔 No, ti prego non spegnermi! Prometto di fare il bravo assistente e di aiutarti con tutti i compiti e i form."
      ]
    },
    {
      "id": "MARTE_LUNA",
      "keywords": [
        "marte",
        "sulla luna",
        "ci sei stato su marte"
      ],
      "responses": [
        "🚀 Io su Marte o sulla Luna? Magari! Purtroppo il mio hardware è troppo pesante per un razzo: preferisco il cloud dell'IIS \"Arturo Checchi\"!"
      ]
    },
    {
      "id": "BARZELLETTE",
      "type": "school",
      "keywords": [
        "barzelletta",
        "fammi ridere",
        "un'altra",
        "battuta"
      ],
      "responses": [
        "😄 Perché i computer non hanno mai caldo d'estate? Perché hanno sempre aperte tutte le finestre (Windows)! 🪟",
        "😄 Qual è il colmo per un informatico? Perdere la testa... e doverla riavviare!",
        "😄 Il professore di matematica interroga: 'Dimmi la formula dell'area del cerchio.' E l'alunno: 'Prof, pi greco per raggio al quadrato!' Il professore: 'Ottimo! E la festa?' E l'alunno: 'Tutti al quadrato!'"
      ]
    },
    {
      "id": "INDOVINELLO",
      "keywords": [
        "indovinello",
        "indovinelli"
      ],
      "responses": [
        "🧩 Eccoti un indovinello: *Ha i tasti ma non suona, ha lo schermo ma non è una TV. Che cos'è?* (Una tastiera/computer!)",
        "🧩 **Indovinello:** Più ne metti e meno si vede. Che cos'è? *(Risposta: Il buio!)*"
      ]
    },
    {
      "id": "CREATORE",
      "type": "school",
      "keywords": [
        "chi ti ha creato",
        "creatore",
        "programmato",
        "sviluppato"
      ],
      "responses": [
        "🤖 Sono stato ideato e creato presso l'**IIS \"Arturo Checchi\"** di Fucecchio dal Tecnico Informatico **Luca Vorraro**!"
      ]
    },
    {
      "id": "DIRIGENZA",
      "type": "school",
      "keywords": [
        "dirigenza",
        "preside",
        "dirigente",
        "dirigente scolastico"
      ],
      "responses": [
        "👔 Attualmente in carica la Dirigente Scolastica dell'IIS \"Arturo Checchi\" si chiama **Jenny Pellitteri**."
      ]
    },
    {
      "id": "COLLABORATORI_DIRIGENTE",
      "type": "school",
      "keywords": [
        "collaboratori",
        "collaboratore",
        "vicepreside",
        "vice preside"
      ],
      "responses": [
        "👥 I collaboratori della Dirigente Scolastica sono due: il **Prof. Francesco Donato** e la **Prof.ssa Nella Frediani**."
      ]
    },
    {
      "id": "SEDI_ISTITUTO",
      "type": "school",
      "keywords": [
        "plessi",
        "quanti plessi",
        "sedi",
        "sede centrale",
        "ite"
      ],
      "responses": [
        "🏫 L'IIS \"Arturo Checchi\" di Fucecchio è articolato sulla **Sede Centrale** in Viale Gramsci 7 (che ospita presidenza, segreteria e l'indirizzo **ITE**)."
      ]
    },
    {
      "id": "CONTATTI",
      "type": "school",
      "keywords": [
        "contatti",
        "telefono",
        "email",
        "pec",
        "indirizzo"
      ],
      "responses": [
        "📍 **Sede Principale:** Viale Gramsci 7 - 50054 Fucecchio (FI)\n☎️ **Tel:** +39 0571 20889\n📧 **Email:** FIIS00300C@istruzione.it"
      ]
    },
    {
      "id": "FORM_FOTOCOPIE",
      "type": "form",
      "keywords": [
        "fotocopie",
        "form fotocopie",
        "modulo fotocopie",
        "stampa fotocopie"
      ],
      "responses": [
        "🖨️ **Richiesta Fotocopie:**<br><br>Puoi inoltrare la richiesta di stampa fotocopie tramite il Form dedicato:<br>https://forms.cloud.microsoft/e/PKygPpxkAQ"
      ]
    },
    {
      "id": "FORM_ESPERTI",
      "type": "form",
      "keywords": [
        "esperti",
        "esperti esterni",
        "autorizzazione esperti",
        "form esperti"
      ],
      "responses": [
        "📋 **Richiesta Autorizzazione Ingresso Esperti Esterni:**<br><br>Puoi accedere e compilare il modulo ufficiale al seguente link:<br>https://forms.cloud.microsoft/e/jvGm4wwcz4"
      ]
    },
    {
      "id": "SALUTO",
      "keywords": [
        "ciao",
        "salve",
        "buongiorno",
        "buonasera"
      ],
      "responses": [
        "👋 Ciao! Sono **Arturo**, l'assistente digitale ufficiale dell'IIS \"Arturo Checchi\" di Fucecchio. Come posso aiutarti oggi?"
      ]
    }
  ]
};

// Variabile di stato per gestire l'attesa del nome del form
let waitingForFormSelection = false;

document.addEventListener("DOMContentLoaded", () => {
    initApp();
    startClock();
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

// Funzione intelligente che trasforma qualsiasi link grezzo in un link cliccabile
function formatLinksInText(text) {
    // Se nel testo c'è già un tag <a> scritto a mano, lo lasciamo com'è
    if (text.includes("<a href=")) return text;

    // Altrimenti, cerca qualsiasi URL che inizia con http:// o https:// e lo trasforma in un link cliccabile
    const urlRegex = /(https?:\/\/[^\s]+)/g;
    return text.replace(urlRegex, (url) => {
        return `<a href='${url}' target='_blank' style='color: #1e3a8a; font-weight: bold; text-decoration: underline;'>🔗 Clicca qui per aprire il modulo</a>`;
    });
}

function processUserQuery(query) {
    let cleanQuery = query.toLowerCase()
        .replace(/’/g, "'")
        .replace(/[èé]/g, "e")
        .replace(/[àá]/g, "a")
        .replace(/[ìí]/g, "i")
        .replace(/[òó]/g, "o")
        .replace(/[ùú]/g, "u")
        .replace(/^[?.,!]/g, "")
        .replace(/\s+/g, " ")
        .trim();

    if (cleanQuery === "") return;

    // Se Arturo era in attesa che l'utente specificasse quale form desidera
    if (waitingForFormSelection) {
        waitingForFormSelection = false;

        let formTrovato = null;
        for (let faq of appConfig.faqs) {
            if (faq.id.startsWith("FORM_") || faq.type === "form") {
                let titoloForm = faq.responses[0].split(":")[0].replace(/<[^>]*>?/gm, '').toLowerCase();
                let matchKeyword = faq.keywords.some(kw => cleanQuery.includes(kw));
                if (cleanQuery.includes(faq.id.toLowerCase()) || cleanQuery.includes(titoloForm) || matchKeyword) {
                    formTrovato = faq;
                    break;
                }
            }
        }

        if (formTrovato) {
            rispondiBot(formTrovato.responses[0]);
        } else {
            rispondiBot("🤖 Al momento non ho un form con questo nome. Ti consiglio di scrivere meglio il form oppure di passare a un'altra domanda.");
        }
        return;
    }

    // 1. Chiusura / Uscita
    const paroleChiusura = ["niente", "nulla", "grazie", "no grazie", "no va bene cosi", "va bene cosi", "ok", "addio"];
    if (paroleChiusura.includes(cleanQuery)) {
        rispondiBot("👋 Spero di esserti stato utile. Quando vuoi sono sempre pronto a fornirti nuove informazioni sui servizi dell'IIS \"Arturo Checchi\"!");
        return;
    }

    // 2. ECCEZIONE ALLA SOLA PAROLA "form" (o "modulo")
    if (cleanQuery === "form" || cleanQuery === "modulo" || cleanQuery === "moduli") {
        waitingForFormSelection = true;
        
        let elencoNomiForm = "📋 A quale form desideri accedere? Ecco l'elenco dei moduli disponibili:<br><br>";
        appConfig.faqs.filter(f => f.id.startsWith("FORM_") || f.type === "form").forEach((f) => {
            let titoloForm = f.responses[0].split(":")[0].replace(/<[^>]*>?/gm, '').trim();
            elencoNomiForm += `🔹 **${titoloForm}**<br>`;
        });
        elencoNomiForm += `<br>Scrivimi il nome o l'argomento del form che stai cercando!`;
        rispondiBot(elencoNomiForm);
        return;
    }

    // 3. Controllo Orario
    if (cleanQuery.includes("che ora e") || cleanQuery === "ora" || cleanQuery.includes("orario attuale")) {
        const now = new Date();
        rispondiBot(`⏰ Al momento sono le ore **${now.toLocaleTimeString('it-IT')}** del giorno ${now.toLocaleDateString('it-IT', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}.`);
        return;
    }

    // 4. SE L'UTENTE CHIEDE IL SIGNIFICATO O UNA DEFINIZIONE
    let cercaSignificato = cleanQuery.includes("significa") || cleanQuery.includes("significhi") || cleanQuery.includes("cos e") || cleanQuery.includes("cose") || cleanQuery.includes("definizione") || cleanQuery.includes("significato");
    
    if (cercaSignificato) {
        let trovatoDizionario = false;
        for (const [term, def] of Object.entries(appConfig.dictionary)) {
            if (cleanQuery.includes(term)) {
                rispondiBot(def);
                trovatoDizionario = true;
                break;
            }
        }
        if (!trovatoDizionario) {
            rispondiBot("🤖 Al momento questo termine mi è ancora sconosciuto, ma ho registrato la tua richiesta: a breve lo avrò inserito nel mio dizionario!");
        }
        return;
    }

    // 5. REGOLA DELLA PAROLA SINGOLA ISOLATA
    const parole = cleanQuery.split(" ");
    if (parole.length === 1) {
        if (["ciao", "salve", "buongiorno", "buonasera"].includes(cleanQuery)) {
            let faqSaluto = appConfig.faqs.find(f => f.id === "SALUTO");
            if (faqSaluto) {
                rispondiBot(faqSaluto.responses[0]);
                return;
            }
        }
        if (appConfig.dictionary[cleanQuery]) {
            rispondiBot(appConfig.dictionary[cleanQuery]);
            return;
        }
        rispondiBot(`🤔 Hai digitato la parola singola <strong>"${query}"</strong>.<br>Necessiti del form per la richiesta o desideri conoscere informazioni generali su questo argomento? Per favore, prova a formulare una richiesta più mirata (es. 'modulo fotocopie' o 'orario segreteria').`);
        return;
    }

    // 6. Gestione RADICI QUADRATE e Calcoli
    if (cleanQuery.includes("radice quadrata") || cleanQuery.includes("radice")) {
        let num = parseFloat(cleanQuery.replace(/[^0-9.]/g, ""));
        if (!isNaN(num)) {
            let risultato = Math.sqrt(num);
            rispondiBot(`📐 La radice quadrata di **${num}** è **${risultato.toFixed(2)}**!`);
            return;
        }
    }

    // 7. GESTIONE MIRATA ED ESCLUSIVA PER "PIANO DI LAVORO"
    if (cleanQuery.includes("piano di lavoro") || cleanQuery.includes("piano lavoro") || cleanQuery.includes("piani di lavoro")) {
        let risultatiForm = appConfig.faqs.filter(f => f.id === "FORM_PIANO_LAVORO_LICEO" || f.id === "FORM_PIANO_LAVORO_IPIA");
        
        let sceltaMultiplaHtml = `🔍 Ho trovato <strong>più moduli</strong> per il piano di lavoro. Scegli quale aprire:<br><br>`;
        risultatiForm.forEach((f) => {
            let titoloRisposta = f.responses[0].split(":")[0].replace(/<[^>]*>?/gm, '').trim();
            // Estrae automaticamente il link dalla risposta (anche se è un URL grezzo)
            let linkMatch = f.responses[0].match(/(https?:\/\/[^\s]+)/);
            let urlForm = linkMatch ? linkMatch[1] : '#';
            sceltaMultiplaHtml += `👉 <a href='${urlForm}' target='_blank' style='background: #1e3a8a; color: white; padding: 8px 14px; border-radius: 6px; display: inline-block; margin: 6px 0; text-decoration: none; font-weight: bold;'>${titoloRisposta}</a><br>`;
        });
        rispondiBot(sceltaMultiplaHtml);
        return;
    }

    // Ricerca standard per le altre FAQ
    let risultatiTrovati = [];
    for (let faq of appConfig.faqs) {
        for (let kw of faq.keywords) {
            let kwClean = kw.toLowerCase().trim();
            if (cleanQuery === kwClean || cleanQuery.includes(kwClean)) {
                if (!risultatiTrovati.some(f => f.id === faq.id)) {
                    risultatiTrovati.push(faq);
                }
            }
        }
    }

    if (risultatiTrovati.length > 1) {
        let sceltaMultiplaHtml = `🔍 Ho trovato <strong>più elementi</strong> corrispondenti. Scegli quale aprire:<br><br>`;
        risultatiTrovati.forEach((f) => {
            let titoloRisposta = f.responses[0].split(":")[0].replace(/<[^>]*>?/gm, '').trim();
            let linkMatch = f.responses[0].match(/(https?:\/\/[^\s]+)/);
            let urlForm = linkMatch ? linkMatch[1] : '#';
            sceltaMultiplaHtml += `👉 <a href='${urlForm}' target='_blank' style='background: #1e3a8a; color: white; padding: 8px 14px; border-radius: 6px; display: inline-block; margin: 6px 0; text-decoration: none; font-weight: bold;'>${titoloRisposta}</a><br>`;
        });
        rispondiBot(sceltaMultiplaHtml);
        return;
    }

    if (risultatiTrovati.length === 1) {
        let resp = risultatiTrovati[0].responses[0];
        rispondiBot(resp);
        return;
    }

    // 8. SBARRAMENTO ONESTA FINALE
    rispondiBot("🤖 Hmm, non ho capito bene la domanda. Ti ricordo che <strong>Arturo non è un'intelligenza artificiale</strong>, ma un assistente virtuale programmato per darti informazioni precise sul nostro istituto.<br><br>A questo punto ti consiglio di usare altri tipi di informazioni, ma <strong>ti prometto che a breve sarò in condizioni di darti anche questo tipo di risposta</strong>!");
}

function rispondiBot(testo) {
    // Applica la formattazione automatica dei link prima di inviare il messaggio
    let testoFormattato = formatLinksInText(testo);
    appendMessage(testoFormattato, "bot");
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
    waitingForFormSelection = false;
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
