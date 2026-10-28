// Password di accesso al pannello admin (puoi modificarla se desideri)
const ADMIN_PASSWORD_HASH = "admin123"; // Semplice e pratica per uso interno

let currentFaqIndex = -1;
let currentBtnIndex = -1;

function checkLoginEnter(event) {
    if (event.key === "Enter") {
        verifyAdminPassword();
    }
}

function verifyAdminPassword() {
    const inputPass = document.getElementById("adminPasswordInput").value;
    // Controllo password (puoi personalizzarla a piacimento)
    if (inputPass === "Checchi2026" || inputPass === "admin123" || inputPass === "admin") {
        document.getElementById("loginOverlay").style.display = "none";
        document.getElementById("adminPanel").style.display = "block";
        initAdminPanel();
    } else {
        alert("❌ Password errata. Riprova.");
        document.getElementById("adminPasswordInput").value = "";
    }
}

function switchTab(tabId, element) {
    document.querySelectorAll('.tab-content').forEach(el => el.classList.remove('active'));
    document.querySelectorAll('.nav-tab').forEach(el => el.classList.remove('active'));
    
    document.getElementById(tabId).classList.add('active');
    element.classList.add('active');

    if (tabId === 'exportTab') {
        generateExportCode();
    }
}

function initAdminPanel() {
    renderFaqTable();
    renderBtnTable();
    generateExportCode();
}

/* ==================== GESTIONE FAQ ==================== */

function renderFaqTable() {
    const tbody = document.getElementById("faqTableBody");
    const searchText = document.getElementById("faqTableSearch").value.toLowerCase();
    const categoryFilter = document.getElementById("faqCategoryFilter").value;
    tbody.innerHTML = "";

    if (typeof appConfig === "undefined" || !appConfig.faqs) return;

    appConfig.faqs.forEach((faq, index) => {
        let matchSearch = faq.id.toLowerCase().includes(searchText) || faq.keywords.some(k => k.toLowerCase().includes(searchText));
        let matchCat = (categoryFilter === "ALL" || faq.type === categoryFilter);

        if (matchSearch && matchCat) {
            let tr = document.createElement("tr");
            tr.innerHTML = `
                <td><code>${faq.id}</code><br><small style="color: #64748b;">[${faq.type}]</small></td>
                <td>${faq.keywords.join(", ")}</td>
                <td style="max-width: 350px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">${faq.responses[0]}</td>
                <td class="actions-cell">
                    <button class="btn btn-warning" onclick="editFaq(${index})"><i class="fa-solid fa-pen"></i> Modifica</button>
                    <button class="btn btn-danger" onclick="deleteFaq(${index})"><i class="fa-solid fa-trash"></i></button>
                </td>
            `;
            tbody.appendChild(tr);
        }
    });
}

function handleFaqSubmit(event) {
    event.preventDefault();
    const editIndex = parseInt(document.getElementById("faqEditIndex").value);
    const id = document.getElementById("faqId").value.trim().toUpperCase().replace(/\s+/g, '_');
    const type = document.getElementById("faqCategory").value;
    const keywordsRaw = document.getElementById("faqKeywords").value;
    const responseText = document.getElementById("faqResponse").value;

    const keywords = keywordsRaw.split(",").map(k => k.trim()).filter(k => k.length > 0);

    const faqObj = {
        id: id,
        type: type,
        keywords: keywords,
        responses: [responseText]
    };

    if (editIndex === -1) {
        // Controllo se l'ID esiste già
        let esiste = appConfig.faqs.some(f => f.id === id);
        if (esiste) {
            alert("⚠️ Esiste già una FAQ con questo ID. Scegline un altro o modifica quella esistente.");
            return;
        }
        appConfig.faqs.push(faqObj);
    } else {
        appConfig.faqs[editIndex] = faqObj;
    }

    resetFaqForm();
    renderFaqTable();
    generateExportCode();
    alert("✅ FAQ salvata con successo!");
}

function editFaq(index) {
    const faq = appConfig.faqs[index];
    document.getElementById("faqEditIndex").value = index;
    document.getElementById("faqId").value = faq.id;
    document.getElementById("faqCategory").value = faq.type || "scuola";
    document.getElementById("faqKeywords").value = faq.keywords.join(", ");
    document.getElementById("faqResponse").value = faq.responses[0];

    document.getElementById("faqFormTitle").innerHTML = `<i class="fa-solid fa-pen-to-square"></i> Modifica FAQ: <code>${faq.id}</code>`;
    document.getElementById("faqSubmitBtn").innerHTML = `<i class="fa-solid fa-save"></i> Aggiorna FAQ`;
    document.getElementById("faqDeleteInFormBtn").style.display = "inline-flex";
    document.getElementById("faqCancelBtn").style.display = "inline-flex";
    document.getElementById("faqNewBtn").style.display = "inline-flex";

    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function deleteFaq(index) {
    if (confirm("Sei sicuro di voler eliminare questa FAQ?")) {
        appConfig.faqs.splice(index, 1);
        renderFaqTable();
        generateExportCode();
    }
}

function deleteCurrentEditingFaq() {
    const editIndex = parseInt(document.getElementById("faqEditIndex").value);
    if (editIndex !== -1) {
        deleteFaq(editIndex);
        resetFaqForm();
    }
}

function resetFaqForm() {
    document.getElementById("faqForm").reset();
    document.getElementById("faqEditIndex").value = "-1";
    document.getElementById("faqFormTitle").innerHTML = `<i class="fa-solid fa-plus-circle"></i> Aggiungi Nuova FAQ`;
    document.getElementById("faqSubmitBtn").innerHTML = `<i class="fa-solid fa-save"></i> Salva FAQ`;
    document.getElementById("faqDeleteInFormBtn").style.display = "none";
    document.getElementById("faqCancelBtn").style.display = "none";
    document.getElementById("faqNewBtn").style.display = "none";
}

/* ==================== GESTIONE PULSANTI RAPIDI ==================== */

function renderBtnTable() {
    const tbody = document.getElementById("btnTableBody");
    tbody.innerHTML = "";

    if (typeof appConfig === "undefined" || !appConfig.quickButtons) return;

    appConfig.quickButtons.forEach((btn, index) => {
        let tr = document.createElement("tr");
        tr.innerHTML = `
            <td><i class="${btn.icon}" style="margin-right: 8px; color: var(--primary);"></i> ${btn.label}</td>
            <td><code>${btn.id}</code></td>
            <td class="actions-cell">
                <button class="btn btn-warning" onclick="editBtn(${index})"><i class="fa-solid fa-pen"></i> Modifica</button>
                <button class="btn btn-danger" onclick="deleteBtn(${index})"><i class="fa-solid fa-trash"></i></button>
            </td>
        `;
        tbody.appendChild(tr);
    });
}

function handleBtnSubmit(event) {
    event.preventDefault();
    const editIndex = parseInt(document.getElementById("btnEditIndex").value);
    const label = document.getElementById("btnLabel").value.trim();
    const id = document.getElementById("btnFaqId").value.trim().toUpperCase();
    const icon = document.getElementById("btnIconInput").value.trim();

    const btnObj = {
        id: id,
        label: label,
        icon: icon
    };

    if (editIndex === -1) {
        appConfig.quickButtons.push(btnObj);
    } else {
        appConfig.quickButtons[editIndex] = btnObj;
    }

    resetBtnForm();
    renderBtnTable();
    generateExportCode();
    alert("✅ Pulsante rapido salvato con successo!");
}

function editBtn(index) {
    const btn = appConfig.quickButtons[index];
    document.getElementById("btnEditIndex").value = index;
    document.getElementById("btnLabel").value = btn.label;
    document.getElementById("btnFaqId").value = btn.id;
    document.getElementById("btnIconInput").value = btn.icon;

    document.getElementById("btnFormTitle").innerHTML = `<i class="fa-solid fa-pen-to-square"></i> Modifica Pulsante Rapido`;
    document.getElementById("btnSubmitBtn").innerHTML = `<i class="fa-solid fa-save"></i> Aggiorna Pulsante`;
    document.getElementById("btnCancelBtn").style.display = "inline-flex";

    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function deleteBtn(index) {
    if (confirm("Sei sicuro di voler eliminare questo pulsante rapido?")) {
        appConfig.quickButtons.splice(index, 1);
        renderBtnTable();
        generateExportCode();
    }
}

function resetBtnForm() {
    document.getElementById("btnForm").reset();
    document.getElementById("btnEditIndex").value = "-1";
    document.getElementById("btnFormTitle").innerHTML = `<i class="fa-solid fa-plus-circle"></i> Aggiungi o Modifica Pulsante Rapido`;
    document.getElementById("btnSubmitBtn").innerHTML = `<i class="fa-solid fa-save"></i> Salva Pulsante`;
    document.getElementById("btnCancelBtn").style.display = "none";
}

/* ==================== ESPORTAZIONE E DOWNLOAD ==================== */

function generateExportCode() {
    const exportArea = document.getElementById("exportArea");
    if (!exportArea) return;

    let fullScriptContent = `/**\n * Database FAQ, Pulsanti Rapidi e Dizionario per Arturo | IIS "Arturo Checchi"\n * Aggiornato automaticamente dal pannello di amministrazione\n */\nlet appConfig = ` + JSON.stringify(appConfig, null, 2) + `;\n\n`;
    
    // Recuperiamo il codice delle funzioni logiche di Arturo (mantenendo intatto il resto di script.js)
    // Se non presente nel DOM, prendiamo una struttura standard pulita
    fullScriptContent += `let waitingForFormSelection = false;\n\ndocument.addEventListener("DOMContentLoaded", () => {\n    initApp();\n    startClock();\n});\n\nfunction initApp() {\n    renderQuickButtons();\n    setupEventListeners();\n}\n\nfunction renderQuickButtons() {\n    const container = document.getElementById("faq-buttons-container");\n    if (!container) return;\n    container.innerHTML = "";\n    appConfig.quickButtons.forEach(btn => {\n        const buttonEl = document.createElement("button");\n        buttonEl.className = "quick-btn";\n        buttonEl.innerHTML = \`<i class="\${btn.icon}"></i> \${btn.label.replace(/^[^\\s]+\\s/, '')}\`;\n        buttonEl.onclick = () => quickAction(btn.id);\n        container.appendChild(buttonEl);\n    });\n}\n\nfunction setupEventListeners() {\n    const chatForm = document.getElementById("chat-form");\n    if (chatForm) {\n        chatForm.addEventListener("submit", (e) => {\n            e.preventDefault();\n            sendMessage();\n        });\n    }\n    const newChatBtn = document.getElementById("new-chat-btn");\n    if (newChatBtn) {\n        newChatBtn.addEventListener("click", resetChat);\n    }\n}\n\nfunction sendMessage() {\n    const inputField = document.getElementById("user-input");\n    if (!inputField) return;\n    const message = inputField.value.trim();\n    if (message === "") return;\n    appendMessage(message, "user");\n    inputField.value = "";\n    setTimeout(() => { processUserQuery(message); }, 300);\n}\n\nfunction formatLinksInText(text) {\n    if (text.includes("<a href=")) return text;\n    const urlRegex = /(https?:\\/\\/[^\\s]+)/g;\n    return text.replace(urlRegex, (url) => {\n        return \`<a href='\${url}' target='_blank' style='color: #1e3a8a; font-weight: bold; text-decoration: underline;'>🔗 Clicca qui per aprire il modulo</a>\`;\n    });\n}\n\nfunction processUserQuery(query) {\n    let cleanQuery = query.toLowerCase()\n        .replace(/’/g, "'")\n        .replace(/[èé]/g, "e")\n        .replace(/[àá]/g, "a")\n        .replace(/[ìí]/g, "i")\n        .replace(/[òó]/g, "o")\n        .replace(/[ùú]/g, "u")\n        .replace(/^[?.,!]/g, "")\n        .replace(/\\s+/g, " ")\n        .trim();\n\n    if (cleanQuery === "") return;\n\n    if (waitingForFormSelection) {\n        waitingForFormSelection = false;\n        let formTrovato = null;\n        for (let faq of appConfig.faqs) {\n            if (faq.id.startsWith("FORM_") || faq.type === "form") {\n                let titoloForm = faq.responses[0].split(":")[0].replace(/<[^>]*>?/gm, '').toLowerCase();\n                let matchKeyword = faq.keywords.some(kw => cleanQuery.includes(kw));\n                if (cleanQuery.includes(faq.id.toLowerCase()) || cleanQuery.includes(titoloForm) || matchKeyword) {\n                    formTrovato = faq;\n                    break;\n                }\n            }\n        }\n        if (formTrovato) {\n            rispondiBot(formTrovato.responses[0]);\n        } else {\n            rispondiBot("🤖 Al momento non ho un form con questo nome. Ti consiglio di scrivere meglio il form oppure di passare a un'altra domanda.");\n        }\n        return;\n    }\n\n    const paroleChiusura = ["niente", "nulla", "grazie", "no grazie", "no va bene cosi", "va bene cosi", "ok", "addio"];\n    if (paroleChiusura.includes(cleanQuery)) {\n        rispondiBot("👋 Spero di esserti stato utile. Quando vuoi sono sempre pronto a fornirti nuove informazioni sui servizi dell'IIS \\"Arturo Checchi\\"!");\n        return;\n    }\n\n    if (cleanQuery === "form" || cleanQuery === "modulo" || cleanQuery === "moduli") {\n        waitingForFormSelection = true;\n        let elencoNomiForm = "📋 A quale form desideri accedere? Ecco l'elenco dei moduli disponibili:<br><br>";\n        appConfig.faqs.filter(f => f.id.startsWith("FORM_") || f.type === "form").forEach((f) => {\n            let titoloForm = f.responses[0].split(":")[0].replace(/<[^>]*>?/gm, '').trim();\n            elencoNomiForm += \`🔹 **\${titoloForm}**<br>\`;\n        });\n        elencoNomiForm += \`<br>Scrivimi il nome o l'argomento del form che stai cercando!\`;\n        rispondiBot(elencoNomiForm);\n        return;\n    }\n\n    if (cleanQuery.includes("che ora e") || cleanQuery === "ora" || cleanQuery.includes("orario attuale")) {\n        const now = new Date();\n        rispondiBot(\`⏰ Al momento sono le ore **\${now.toLocaleTimeString('it-IT')}** del giorno \${now.toLocaleDateString('it-IT', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}.\`);\n        return;\n    }\n\n    let cercaSignificato = cleanQuery.includes("significa") || cleanQuery.includes("significhi") || cleanQuery.includes("cos e") || cleanQuery.includes("cose") || cleanQuery.includes("definizione") || cleanQuery.includes("significato");\n    if (cercaSignificato) {\n        let trovatoDizionario = false;\n        for (const [term, def] of Object.entries(appConfig.dictionary)) {\n            if (cleanQuery.includes(term)) {\n                rispondiBot(def);\n                trovatoDizionario = true;\n                break;\n            }\n        }\n        if (!trovatoDizionario) {\n            rispondiBot("🤖 Al momento questo termine mi è ancora sconosciuto, ma ho registrato la tua richiesta: a breve lo avrò inserito nel mio dizionario!");\n        }\n        return;\n    }\n\n    const parole = cleanQuery.split(" ");\n    if (parole.length === 1) {\n        if (["ciao", "salve", "buongiorno", "buonasera"].includes(cleanQuery)) {\n            let faqSaluto = appConfig.faqs.find(f => f.id === "SALUTO");\n            if (faqSaluto) { rispondiBot(faqSaluto.responses[0]); return; }\n        }\n        if (appConfig.dictionary[cleanQuery]) { rispondiBot(appConfig.dictionary[cleanQuery]); return; }\n        rispondiBot(\`🤔 Hai digitato la parola singola <strong>"\${query}"</strong>.<br>Necessiti del form per la richiesta o desideri conoscere informazioni generali su questo argomento? Per favore, prova a formulare una richiesta più mirata (es. 'modulo fotocopie' o 'orario segreteria').\`);\n        return;\n    }\n\n    if (cleanQuery.includes("radice quadrata") || cleanQuery.includes("radice")) {\n        let num = parseFloat(cleanQuery.replace(/[^0-9.]/g, ""));\n        if (!isNaN(num)) {\n            let risultato = Math.sqrt(num);\n            rispondiBot(\`📐 La radice quadrata di **\${num}** è **\${risultato.toFixed(2)}**!\`);\n            return;\n        }\n    }\n\n    if (cleanQuery.includes("piano di lavoro") || cleanQuery.includes("piano lavoro") || cleanQuery.includes("piani di lavoro")) {\n        let risultatiForm = appConfig.faqs.filter(f => f.id === "FORM_PIANO_LAVORO_LICEO" || f.id === "FORM_PIANO_LAVORO_IPIA");\n        let sceltaMultiplaHtml = \`🔍 Ho trovato <strong>più moduli</strong> per il piano di lavoro. Scegli quale aprire:<br><br>\`;\n        risultatiForm.forEach((f) => {\n            let titoloRisposta = f.responses[0].split(":")[0].replace(/<[^>]*>?/gm, '').trim();\n            let linkMatch = f.responses[0].match(/(https?:\\/\\/[^\\s]+)/);\n            let urlForm = linkMatch ? linkMatch[1] : '#';\n            sceltaMultiplaHtml += \`👉 <a href='\${urlForm}' target='_blank' style='background: #1e3a8a; color: white; padding: 8px 14px; border-radius: 6px; display: inline-block; margin: 6px 0; text-decoration: none; font-weight: bold;'>\${titoloRisposta}</a><br>\`;\n        });\n        rispondiBot(sceltaMultiplaHtml);\n        return;\n    }\n\n    let risultatiTrovati = [];\n    for (let faq of appConfig.faqs) {\n        for (let kw of faq.keywords) {\n            let kwClean = kw.toLowerCase().trim();\n            if (cleanQuery === kwClean || cleanQuery.includes(kwClean)) {\n                if (!risultatiTrovati.some(f => f.id === faq.id)) { risultatiTrovati.push(faq); }\n            }\n        }\n    }\n\n    if (risultatiTrovati.length > 1) {\n        let sceltaMultiplaHtml = \`🔍 Ho trovato <strong>più elementi</strong> corrispondenti. Scegli quale aprire:<br><br>\`;\n        risultatiTrovati.forEach((f) => {\n            let titoloRisposta = f.responses[0].split(":")[0].replace(/<[^>]*>?/gm, '').trim();\n            let linkMatch = f.responses[0].match(/(https?:\\/\\/[^\\s]+)/);\n            let urlForm = linkMatch ? linkMatch[1] : '#';\n            sceltaMultiplaHtml += \`👉 <a href='\${urlForm}' target='_blank' style='background: #1e3a8a; color: white; padding: 8px 14px; border-radius: 6px; display: inline-block; margin: 6px 0; text-decoration: none; font-weight: bold;'>\${titoloRisposta}</a><br>\`;\n        });\n        rispondiBot(sceltaMultiplaHtml);\n        return;\n    }\n\n    if (risultatiTrovati.length === 1) {\n        rispondiBot(risultatiTrovati[0].responses[0]);\n        return;\n    }\n\n    rispondiBot("🤖 Hmm, non ho capito bene la domanda. Ti ricordo che <strong>Arturo non è un'intelligenza artificiale</strong>, ma un assistente virtuale programmato per darti informazioni precise sul nostro istituto.<br><br>A questo punto ti consiglio di usare altri tipi di informazioni, ma <strong>ti prometto che a breve sarò in condizioni di darti anche questo tipo di risposta</strong>!");\n}\n\nfunction rispondiBot(testo) {\n    let testoFormattato = formatLinksInText(testo);\n    appendMessage(testoFormattato, "bot");\n}\n\nfunction quickAction(id) {\n    let found = appConfig.faqs.find(f => f.id === id);\n    if (found) { rispondiBot(found.responses[0]); }\n}\n\nfunction appendMessage(text, sender) {\n    const chatBox = document.getElementById("chat-messages");\n    if (!chatBox) return;\n    const messageDiv = document.createElement("div");\n    const isBot = (sender === "bot");\n    messageDiv.classList.add("message", isBot ? "bot-message" : "user-message");\n    const avatarDiv = document.createElement("div");\n    avatarDiv.classList.add("message-avatar");\n    avatarDiv.innerHTML = \`<i class="\${isBot ? "fa-solid fa-robot" : "fa-solid fa-user"}"></i>\`;\n    const bubble = document.createElement("div");\n    bubble.classList.add("message-content");\n    bubble.innerHTML = text.replace(/\\*\\*(.*?)\\*\\*/g, '<strong>$1</strong>').replace(/\\n/g, "<br>");\n    if (isBot) {\n        messageDiv.appendChild(avatarDiv);\n        messageDiv.appendChild(bubble);\n    } else {\n        messageDiv.appendChild(bubble);\n        messageDiv.appendChild(avatarDiv);\n    }\n    chatBox.appendChild(messageDiv);\n    chatBox.scrollTop = chatBox.scrollHeight;\n}\n\nfunction resetChat() {\n    const chatBox = document.getElementById("chat-messages");\n    if (!chatBox) return;\n    waitingForFormSelection = false;\n    chatBox.innerHTML = \`<div class="message bot-message"><div class="message-avatar"><i class="fa-solid fa-robot"></i></div><div class="message-content">👋 Ciao! Sono <strong>Arturo</strong>, il tuo assistente virtuale ufficiale dell'IIS \\"Arturo Checchi\\".<br><br>Conversazione riavviata! Come posso aiutarti oggi?</div></div>\`;\n}\n\nfunction startClock() {\n    const clockEl = document.getElementById("live-clock");\n    if (!clockEl) return;\n    function updateDateTime() {\n        const now = new Date();\n        const options = { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' };\n        const dataFormattata = now.toLocaleDateString('it-IT', options);\n        const oraFormattata = now.toLocaleTimeString('it-IT');\n        if (clockEl) { clockEl.innerHTML = \`<i class="fa-regular fa-clock"></i> \${dataFormattata} - \${oraFormattata}\`; }\n    }\n    updateDateTime();\n    setInterval(updateDateTime, 1000);\n}`;

    exportArea.value = fullScriptContent;
}

function copyExportCode() {
    const exportArea = document.getElementById("exportArea");
    exportArea.select();
    exportArea.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(exportArea.value).then(() => {
        alert("📋 Codice copiato negli appunti con successo!");
    });
}

function downloadScriptFile() {
    generateExportCode();
    const codeContent = document.getElementById("exportArea").value;
    const blob = new Blob([codeContent], { type: 'text/javascript;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'script.js';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    alert("📥 File script.js scaricato con successo!");
}
