// Database FAQ, Pulsanti Rapidi, Dizionario ENCICLOPEDICO e Sezione Intrattenimento per Arturo | IIS "Arturo Checchi"
let appConfig = {
    quickButtons: [
        { id: "AIUTO", label: "❓ Cos'è Arturo?", icon: "fa-solid fa-circle-question" },
        { id: "CONTATTI", label: "📞 Contatti", icon: "fa-solid fa-address-book" },
        { id: "DIRIGENZA", label: "👔 Dirigenza", icon: "fa-solid fa-user-tie" },
        { id: "SEGRETERIE", label: "🏢 Segreteria e Uffici", icon: "fa-solid fa-building-columns" },
        { id: "MICROSOFT365", label: "💻 Servizi Digitali (Teams/Argo)", icon: "fa-solid fa-laptop-code" }
    ],
    
    // DATABASE BARZELLETE (Rotazione continua)
    barzellete: [
        "😂 Il professore di matematica interroga un alunno: 'Dimmi la formula dell'area del cerchio.' E l'alunno: 'Prof, pi greco per raggio al quadrato!' Il professore: 'Ottimo! E la festa?' E l'alunno: 'Tutti al quadrato!无可 360 gradi!'",
        "😂 Un alunno entra in classe con un ritardo spaventoso. Il professore lo guarda severo: 'Si può sapere perché arrivi a quest'ora?!' E lui: 'Prof, c'era un cartello per strada che diceva: *Scuola, rallentare!* E io ho rallentato!'",
        "😂 Due studenti parlano prima del compito in classe: 'Hai studiato?' 'No, spero nell'ispirazione divina.' 'E se Dio è ateo?' 'Siamo spacciati!'",
        "😂 Il maestro chiede alla classe: 'Qual è il colmo per un elettricista?' La classe tace. E lui: 'Condurre una vita piena di corrente e avere una moglie che gli fa scintille!'",
        "😂 'Papà, papà! Mi fai un favore?' 'Dimmi tutto, figlio mio.' 'Mi firmi la giustificazione per il brutto voto?' 'Certo, ma prima fammi vedere il voto.' 'Ecco... 2.' 'Mmm... qui non serve una firma, ci vuole un miracolo divino!'"
    ],

    // DATABASE INDOVINELLI (Rotazione continua)
    indovinelli: [
        "🧩 **Indovinello:** Più ne metti e meno si vede. Che cos'è?\n*(Risposta: Il buio!)*",
        "🧩 **Indovinello:** Ha un solo occhio ma non ci vede. Che cos'è?\n*(Risposta: L'ago!)*",
        "🧩 **Indovinello:** Tutti ce l'hanno, tutti lo perdono, ma nessuno sa dove l'abbia messo. Che cos'è?\n*(Risposta: Il filo del discorso / La memoria!)*",
        "🧩 **Indovinello:** Cammina senza piedi, vola senza ali e piange senza occhi. Che cos'è?\n*(Risposta: La nuvola!)*",
        "🧩 **Indovinello:** Se mi nomini mi distruggi. Chi sono?\n*(Risposta: Il silenzio!)*"
    ],

    // DIZIONARIO ENCICLOPEDICO ESTESO (A-Z)
    dictionary: {
        "abaco": "📖 **Abaco:** Antico strumento di calcolo manuale costituito da una cornice con guide parallele su cui scorrono palline.",
        "account": "📖 **Account:** Insieme di credenziali (username e password) che identificano in modo univoco un utente su un sistema informatico.",
        "addendo": "📖 **Addendo:** Ciascuno dei numeri che vengono sommati in un'operazione di addizione.",
        "aforisma": "📖 **Aforisma:** Breve massima o sentenza che esprime in modo denso e sintetico una verità o un principio morale.",
        "algebra": "📖 **Algebra:** Ramo della matematica che studia le strutture algebriche, le relazioni e le quantità.",
        "algoritmo": "📖 **Algoritmo:** Sequenza ordinata e finita di istruzioni elementari per risolvere un problema.",
        "allegoria": "📖 **Allegoria:** Figura retorica mediante la quale un concetto astratto viene espresso attraverso un'immagine concreta.",
        "allitterazione": "📖 **Allitterazione:** Ripetizione dello stesso suono o della stessa sillaba all'inizio o all'interno di parole vicine.",
        "amministratore": "📖 **Amministratore:** Persona responsabile della gestione, configurazione e sicurezza di un sistema o organizzazione.",
        "analogia": "📖 **Analogia:** Rapporto di somiglianza tra elementi o situazioni diverse, usato per spiegare un concetto.",
        "anarchia": "📖 **Anarchia:** Teoria e movimento politico che persegue l'abolizione di ogni forma di Stato e autorità.",
        "anatomia": "📖 **Anatomia:** Scienza che studia la forma e la struttura degli organismi viventi.",
        "android": "📖 **Android:** Sistema operativo mobile open source basato su kernel Linux, sviluppato da Google.",
        "anfora": "📖 **Anfora:** Antico vaso di terracotta con due manici e collo stretto, usato per contenere vino o olio.",
        "antigene": "📖 **Antigene:** Sostanza capace di indurre una risposta immunitaria e la produzione di anticorpi.",
        "antitesi": "📖 **Antitesi:** Figura retorica che accosta due concetti o parole di senso opposto per risaltare il contrasto.",
        "antropologia": "📖 **Antropologia:** Scienza che studia l'essere umano sotto l'aspetto biologico, culturale e sociale.",
        "api": "📖 **API:** Application Programming Interface. Protocolli che consentono a software diversi di comunicare tra loro.",
        "app": "📖 **Applicazione (App):** Programma informatico progettato per svolgere specifiche attività su dispositivi digitali.",
        "archeologia": "📖 **Archeologia:** Scienza che studia le civiltà e le culture del passato attraverso i resti materiali.",
        "architettura": "📖 **Architettura:** Arte e tecnica di progettare e costuire edifici e spazi urbani.",
        "aristocrazia": "📖 **Aristocrazia:** Forma di governo in cui il potere supremo è detenuto dai nobili o dai migliori.",
        "armonia": "📖 **Armonia:** Combinazione equilibrata e gradevole di suoni, colori, forme o elementi distinti.",
        "asteroide": "📖 **Asteroide:** Piccolo corpo celeste roccioso o metallico che orbita attorno al Sole.",
        "atomo": "📖 **Atomo:** La più piccola unità fondamentale di un elemento chimico che ne conserva le proprietà.",
        "audiobook": "📖 **Audiobook:** Libro recitato da uno speaker o attore e registrato in formato audio digitale.",
        "aurora": "📖 **Aurora:** Fenomeno luminoso atmosferico o celeste visibile all'alba o nelle regioni polari.",
        "autonomia": "📖 **Autonomia:** Capacità di un individuo o di un ente di governarsi da solo e prendere decisioni.",
        "backup": "📖 **Backup:** Copia di sicurezza di file e dati creata per prevenire la perdita involontaria delle informazioni.",
        "barometro": "📖 **Barometro:** Strumento scientifico utilizzato per misurare la pressione atmosferica.",
        "barocco": "📖 **Barocco:** Movimento culturale e artistico del Seicento caratterizzato da sfarzo ed esuberanza.",
        "batterio": "📖 **Batterio:** Microorganismo unicellulare procariota privo di un nucleo cellulare ben definito.",
        "big bang": "📖 **Big Bang:** Modello cosmologico che descrive l'origine e l'evoluzione iniziale dell'universo.",
        "biografia": "📖 **Biografia:** Narrazione scritta della vita di una persona.",
        "biologia": "📖 **Biologia:** Scienza che studia la vita, gli organismi viventi, la loro struttura e la loro evoluzione.",
        "botanica": "📖 **Botanica:** Ramo della biologia che studia gli organismi vegetali.",
        "browser": "📖 **Browser:** Programma applicativo utilizzato per navigare, visualizzare e interagire con le pagine web.",
        "bug": "📖 **Bug:** Errore o anomalia nel codice sorgente di un software che ne causa un funzionamento anomalo.",
        "capannone": "📖 **Capannone:** Grande edificio ad un solo piano adibito a magazzino, produzione o laboratorio.",
        "cartografia": "📖 **Cartografia:** Scienza e tecnica della preparazione, studio e disegno delle carte geografiche.",
        "catalizzatore": "📖 **Catalizzatore:** Sostanza che aumenta la velocità di una reazione chimica senza consumarsi.",
        "catacomba": "📖 **Catacomba:** Antico cimitero sotterraneo.",
        "cellula": "📖 **Cellula:** Unità strutturale e funzionale fondamentale di tutti gli organismi viventi.",
        "chiaroscuro": "📖 **Chiaroscuro:** Tecnica pittorica basata sull'uso dei contrasti tra luce e ombra.",
        "clorofilla": "📖 **Clorofilla:** Pigmento verde presente nelle piante indispensabile per la fotosintesi.",
        "cloud": "📖 **Cloud Computing:** Paradigma di calcolo che offre l'archiviazione e l'elaborazione di dati remota via internet.",
        "codice": "📖 **Codice:** Sistema di segni e regole per la trasmissione di informazioni.",
        "cometa": "📖 **Cometa:** Corpo celeste ghiacciato che sviluppa una chioma luminosa quando si avvicina al Sole.",
        "comunicazione": "📖 **Comunicazione:** Processo di trasmissione di informazioni e messaggi tra un emittente e un ricevente.",
        "cpu": "📖 **CPU:** Central Processing Unit. Unità centrale di elaborazione, il 'cervello' del computer.",
        "crittografia": "📖 **Crittografia:** Disciplina che studia i metodi per rendere un messaggio illeggibile ai non autorizzati.",
        "database": "📖 **Database:** Banca dati. Raccolta strutturata ed organizzata di dati digitali consultabile.",
        "democrazia": "📖 **Democrazia:** Forma di governo in cui il potere sovrano appartiene al popolo.",
        "dialetto": "📖 **Dialetto:** Sistema linguistico di ambito geografico o culturale limitato.",
        "didattica": "📖 **Didattica:** Scienza dell'insegnamento e dei metodi di apprendimento educativo.",
        "diploma": "📖 **Diploma:** Titolo di studio ufficiale rilasciato al completamento di un percorso scolastico.",
        "dizionario": "📖 **Dizionario:** Opera che raccoglie e spiega le parole di una lingua.",
        "dna": "📖 **DNA:** Acido desossiribonucleico. Macromolecola che contiene le informazioni genetiche.",
        "ecosistema": "📖 **Ecosistema:** Insieme degli organismi viventi e dell'ambiente fisico di un territorio.",
        "elettricita": "📖 **Elettricità:** Insieme dei fenomeni fisici associati alla presenza e al flusso di cariche elettriche.",
        "energia": "📖 **Energia:** Grandezza fisica che misura la capacità di un sistema di compiere un lavoro.",
        "epica": "📖 **Epica:** Genere letterario incentrato su gesta eroiche e mitologiche.",
        "filosofia": "📖 **Filosofia:** Indagine critica sui fondamenti dell'esperienza e del sapere umano.",
        "fotone": "📖 **Fotone:** Particella elementare che costituisce la radiazione elettromagnetica e la luce.",
        "galassia": "📖 **Galassia:** Immense aggregazioni di stelle, gas e polveri tenute insieme dalla gravità.",
        "genetica": "📖 **Genetica:** Scienza che studia l'ereditarietà e la variabilità biologica.",
        "geografia": "📖 **Geografia:** Scienza che descrive la Terra nei suoi aspetti fisici e umani.",
        "gravita": "📖 **Gravità:** Forza di attrazione reciproca tra corpi dotati di massa.",
        "hardware": "📖 **Hardware:** La parte fisica, tangibile e meccanica di un computer.",
        "illuminismo": "📖 **Illuminismo:** Movimento culturale del Settecento basato sulla centralità della ragione.",
        "internet": "📖 **Internet:** Rete globale di telecomunicazioni che connette computer in tutto il mondo.",
        "letteratura": "📖 **Letteratura:** Insieme delle opere scritte che rivestono valore estetico o culturale.",
        "memoria": "📖 **Memoria RAM:** Dispositivo elettronico che memorizza temporaneamente i dati in elaborazione.",
        "mitologia": "📖 **Mitologia:** Insieme di miti propri di una civiltà o di una cultura.",
        "molecola": "📖 **Molecola:** Particella costituita da due o più atomi uniti da legami chimici.",
        "nanotecnologia": "📖 **Nanotecnologia:** Scienza e ingegneria della manipolazione della materia su scala nanometrica.",
        "neolitico": "📖 **Neolitico:** Età della pietra pulita e levigata, caratterizzata dall'agricoltura.",
        "osmosi": "📖 **Osmosi:** Diffusione di un solvente attraverso una membrana semipermeabile.",
        "paradigma": "📖 **Paradigma:** Modello di riferimento o schema teorico esplicativo.",
        "pianeta": "📖 **Pianeta:** Corpo celeste che orbita attorno a una stella senza emettere luce propria.",
        "piramide": "📖 **Piramide:** Solido geometrico con base poligonale e facce triangolari convergenti in un vertice.",
        "plasma": "📖 **Plasma:** Stato della materia costituito da un gas ionizzato ad altissima temperatura.",
        "rinascimento": "📖 **Rinascimento:** Movimento artistico e culturale fiorito in Italia tra il XV e il XVI secolo.",
        "rivoluzione": "📖 **Rivoluzione:** Profondo mutamento politico, sociale o tecnologico in tempi rapidi.",
        "robotica": "📖 **Robotica:** Disciplina ingegneristica che progetta e costruisce robot automatici.",
        "software": "📖 **Software:** Insieme dei programmi e delle istruzioni che permettono a un computer di funzionare.",
        "storia": "📖 **Storia:** Disciplina che studia gli eventi del passato umano.",
        "teatro": "📖 **Teatro:** Edificio o genere letterario di rappresentazione drammatica.",
        "termodinamica": "📖 **Termodinamica:** Scienza che studia gli scambi di calore e lavoro nei sistemi.",
        "umanesimo": "📖 **Umanesimo:** Movimento culturale del Quattrocento incentrato sulla centralità dell'uomo.",
        "universo": "📖 **Universo:** L'insieme di tutta la materia, dell'energia, dello spazio e del tempo.",
        "vaccino": "📖 **Vaccino:** Preparato biologico volto a procurare immunità attiva verso una specifica malattia.",
        "velocita": "📖 **Velocità:** Rapporto tra lo spazio percorso da un corpo e il tempo impiegato.",
        "virus": "📖 **Virus:** Agente infettivo submicroscopico che si replica solo all'interno di cellule ospiti.",
        "vulcano": "📖 **Vulcano:** Spaccatura della crosta terrestre da cui fuoriescono magma, ceneri e gas.",
        "zeta": "📖 **Zeta:** Ventiseiesima e ultima lettera dell'alfabeto italiano."
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
let indiceBarzelletta = 0;
let indiceIndovinello = 0;

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

    // 1. GESTIONE DI "SÌ", "NO", "OK"
    if (cleanQuery === "si" || cleanQuery === "sì" || cleanQuery === "ok" || cleanQuery === "va bene") {
        inAttesaSceltaForm = false;
        rispondiBot("👍 Perfetto! Se hai bisogno di approfondire o di un'altra informazione, chiedi pure.");
        return;
    }
    if (cleanQuery === "no") {
        inAttesaSceltaForm = false;
        rispondiBot("Va bene! Se ti serve altro in futuro, sono qui a disposizione.");
        return;
    }

    // 2. MOTORE BARZELLETTE CON ROTAZIONE AUTOMATICA CONTINUA
    if (cleanQuery.includes("barzelletta") || cleanQuery.includes("battuta") || cleanQuery.includes("ridere")) {
        let testoBarzelletta = appConfig.barzellete[indiceBarzelletta];
        indiceBarzelletta = (indiceBarzelletta + 1) % appConfig.barzellete.length; // Passa alla successiva in ciclo
        rispondiBot(testoBarzelletta + "\n\n*(Vuoi un'altra barzelletta? Scrivimelo pure!)*");
        return;
    }

    // 3. MOTORE INDOVINELLI CON ROTAZIONE AUTOMATICA CONTINUA
    if (cleanQuery.includes("indovinello") || cleanQuery.includes("rompicapo") || cleanQuery.includes("indovina")) {
        let testoIndovinello = appConfig.indovinelli[indiceIndovinello];
        indiceIndovinello = (indiceIndovinello + 1) % appConfig.indovinelli.length; // Passa al successivo in ciclo
        rispondiBot(testoIndovinello + "\n\n*(Vuoi un altro indovinello? Chiedimelo pure!)*");
        return;
    }

    // 4. MOTORE DI CALCOLO MATEMATICO AL VOLO E RADICI QUADRATE
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

    // Filtro per lettere isolate casuali
    if (cleanQuery.length < 2) {
        inAttesaSceltaForm = false;
        ultimaCategoriaTrattata = "";
        rispondiBot(`🤖 Non ho capito bene cosa intendi con "${query}". Prova a scrivermi una domanda completa o usa i pulsanti rapidi a lato!`);
        return;
    }

    // 5. GESTIONE DELLA LINEARITÀ DEL DISCORSO (PERCHÉ / QUANDO)
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

    // 6. Gestione interattiva dei form
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

    // 7. Ricerca nel Dizionario Enciclopedico
    let wordToSearch = cleanQuery
        .replace(/\b(che cos'e|cos'e|cosa significa|cosa vuol dire|definizione di|significato di|un|una|uno|il|lo|la|i|gli|le|del|della|che)\b/gi, "")
        .trim();

    if (wordToSearch.length >= 2) {
        for (const [term, def] of Object.entries(appConfig.dictionary)) {
            if (wordToSearch === term || cleanQuery.includes(term)) {
                ultimaCategoriaTrattata = "DIZIONARIO";
                rispondiBot(def);
                return;
            }
        }
    }

    // 8. Ricerca FAQ
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
        let resp = matchedFaq.responses[Math.floor(Math.random() * matchedFaq.responses.length)];
        rispondiBot(resp);
    } else {
        ultimaCategoriaTrattata = ""; 
        rispondiBot(`🤖 Al momento non ho informazioni specifiche su "${query}", ma ho registrato la tua richiesta per aggiornare il mio database!`);
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

// Funzione per la data e l'ora in tempo reale in alto a destra
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
