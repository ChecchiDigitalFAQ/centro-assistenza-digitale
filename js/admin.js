/**
 * Pannello di Amministrazione - Arturo | IIS "Arturo Checchi"
 * Sviluppato da Luca Vorraro (Assistente Tecnico Informatico)
 */

const ADMIN_PASSWORD = "arturo2026";

function verifyAdminPassword() {
    const inputVal = document.getElementById("adminPasswordInput").value;
    if (inputVal === ADMIN_PASSWORD) {
        document.getElementById("loginOverlay").style.display = "none";
        document.getElementById("adminPanel").style.display = "block";
        initAdminPanel();
    } else {
        alert("❌ Password errata!");
        document.getElementById("adminPasswordInput").value = "";
    }
}

function checkLoginEnter(e) {
    if (e.key === "Enter") {
        verifyAdminPassword();
    }
}

function switchTab(tabId, element) {
    document.querySelectorAll(".tab-content").forEach(tab => tab.classList.remove("active"));
    document.querySelectorAll(".nav-tab").forEach(tab => tab.classList.remove("active"));
    
    document.getElementById(tabId).classList.add("active");
    element.classList.add("active");

    if (tabId === "exportTab") {
        generateExportData();
    }
}

function initAdminPanel() {
    renderFaqTable();
    renderBtnTable();
    setupFaqSmartSearch();
}

function setupFaqSmartSearch() {
    const faqIdInput = document.getElementById("faqId");
    if (!faqIdInput) return;

    let datalist = document.getElementById("faqIdSuggestions");
    if (!datalist) {
        datalist = document.createElement("datalist");
        datalist.id = "faqIdSuggestions";
        document.body.appendChild(datalist);
        faqIdInput.setAttribute("list", "faqIdSuggestions");
    }

    updateFaqDatalistOptions();

    faqIdInput.addEventListener("input", function() {
        const typedId = this.value.trim().toUpperCase();
        
        const searchInput = document.getElementById("faqTableSearch");
        if (searchInput) {
            searchInput.value = typedId;
            renderFaqTable();
        }

        if (typeof appConfig === "undefined" || !appConfig.faqs) return;

        const existingIndex = appConfig.faqs.findIndex(f => f.id.toUpperCase() === typedId);
        const catSelect = document.getElementById("faqCategory");

        if (existingIndex !== -1) {
            const faq = appConfig.faqs[existingIndex];
            document.getElementById("faqEditIndex").value = existingIndex;
            document.getElementById("faqKeywords").value = Array.isArray(faq.keywords) ? faq.keywords.join(", ") : faq.keywords;
            document.getElementById("faqResponse").value = Array.isArray(faq.responses) ? faq.responses[0] : faq.response;
            
            if (catSelect) {
                catSelect.value = faq.type || (faq.id.startsWith("FORM_") ? "form" : "scuola");
            }

            document.getElementById("faqFormTitle").innerHTML = `<i class="fa-solid fa-pen-to-square"></i> Modifica FAQ Esistente (${faq.id})`;
            document.getElementById("faqSubmitBtn").innerHTML = `<i class="fa-solid fa-sync"></i> Aggiorna FAQ`;
            document.getElementById("faqCancelBtn").style.display = "inline-flex";
            document.getElementById("faqDeleteInFormBtn").style.display = "inline-flex";
            document.getElementById("faqNewBtn").style.display = "inline-flex";
        } else {
            document.getElementById("faqEditIndex").value = "-1";
            if (catSelect) {
                if (typedId.startsWith("FORM_")) {
                    catSelect.value = "form";
                } else if (typedId === "CHI_SEI" || typedId.includes("TI_") || typedId === "AIUTO") {
                    catSelect.value = "personali";
                } else {
                    catSelect.value = "scuola";
                }
            }
            
            if (typedId.length > 0) {
                document.getElementById("faqFormTitle").innerHTML = `<i class="fa-solid fa-plus-circle"></i> Aggiungi Nuovo ID (${typedId})`;
                document.getElementById("faqSubmitBtn").innerHTML = `<i class="fa-solid fa-save"></i> Salva Nuova FAQ`;
                document.getElementById("faqCancelBtn").style.display = "inline-flex";
                document.getElementById("faqDeleteInFormBtn").style.display = "none";
                document.getElementById("faqNewBtn").style.display = "inline-flex";
            } else {
                resetFaqForm();
            }
        }
    });
}

function updateFaqDatalistOptions() {
    const datalist = document.getElementById("faqIdSuggestions");
    if (!datalist || typeof appConfig === "undefined" || !appConfig.faqs) return;
    
    datalist.innerHTML = "";
    appConfig.faqs.forEach(faq => {
        const option = document.createElement("option");
        option.value = faq.id;
        datalist.appendChild(option);
    });
}

function renderFaqTable() {
    const tbody = document.getElementById("faqTableBody");
    if (!tbody || typeof appConfig === "undefined" || !appConfig.faqs) return;

    const filterSelect = document.getElementById("faqCategoryFilter");
    const selectedCategory = filterSelect ? filterSelect.value : "ALL";
    
    const searchInput = document.getElementById("faqTableSearch");
    const searchQuery = searchInput ? searchInput.value.trim().toLowerCase() : "";

    tbody.innerHTML = "";
    
    appConfig.faqs.forEach((faq, index) => {
        const faqType = faq.type || (faq.id.startsWith("FORM_") ? "form" : "scuola");
        
        if (selectedCategory !== "ALL" && faqType !== selectedCategory) {
            return;
        }

        const kwText = Array.isArray(faq.keywords) ? faq.keywords.join(", ") : faq.keywords;
        const respText = Array.isArray(faq.responses) ? faq.responses[0] : faq.response;
        
        if (searchQuery !== "") {
            const matchId = faq.id.toLowerCase().includes(searchQuery);
            const matchKw = kwText.toLowerCase().includes(searchQuery);
            const matchResp = respText.toLowerCase().includes(searchQuery);
            if (!matchId && !matchKw && !matchResp) {
                return;
            }
        }

        const tr = document.createElement("tr");
        tr.innerHTML = `
            <td><code>${faq.id}</code><br><small style="color: #1e3a8a; font-weight: bold;">📁 [${faqType}]</small></td>
            <td>${kwText}</td>
            <td>${respText}</td>
            <td class="actions-cell">
                <button class="btn btn-warning" onclick="editFaq(${index})" title="Modifica"><i class="fa-solid fa-pen"></i></button>
                <button class="btn btn-danger" onclick="deleteFaq(${index})" title="Elimina"><i class="fa-solid fa-trash"></i></button>
            </td>
        `;
        tbody.appendChild(tr);
    });
    
    updateFaqDatalistOptions();
}

// --- VALIDAZIONE PREVENTIVA DEGLI ERRORI ---
function validateFaqData(id, keywords, response) {
    let errors = [];

    if (!id) {
        errors.push("• L'ID della FAQ non può essere vuoto.");
    } else if (/\s/.test(id)) {
        errors.push("• L'ID non deve contenere spazi vuoti (usa il carattere underscore '_' al posto degli spazi).");
    } else if (!/^[A-Z0-9_]+$/.test(id)) {
        errors.push("• L'ID deve contenere solo lettere maiuscole, numeri e underscore (es. FORM_NOME_MODULO).");
    }

    if (!keywords || keywords.length === 0 || (keywords.length === 1 && keywords[0] === "")) {
        errors.push("• Inserisci almeno una parola chiave valida.");
    }

    if (!response || response.trim() === "") {
        errors.push("• Il testo della risposta non può essere vuoto.");
    }

    return errors;
}

function handleFaqSubmit(e) {
    e.preventDefault();
    const index = parseInt(document.getElementById("faqEditIndex").value, 10);
    const id = document.getElementById("faqId").value.trim().toUpperCase();
    const keywordsRaw = document.getElementById("faqKeywords").value;
    const keywords = keywordsRaw.split(",").map(k => k.trim()).filter(k => k);
    const response = document.getElementById("faqResponse").value.trim();
    const catSelect = document.getElementById("faqCategory");
    const category = catSelect ? catSelect.value : (id.startsWith("FORM_") ? "form" : "scuola");

    const validationErrors = validateFaqData(id, keywords, response);
    if (validationErrors.length > 0) {
        alert("❌ ATTENZIONE - Errore di validazione:\n\n" + validationErrors.join("\n") + "\n\nIl codice NON è stato salvato per evitare corruzioni.");
        return;
    }

    const newFaq = { 
        id, 
        type: category, 
        keywords, 
        responses: [response] 
    };

    if (index >= 0) {
        appConfig.faqs[index] = newFaq;
        alert("✅ FAQ aggiornata e validata con successo!");
    } else {
        const checkDuplicate = appConfig.faqs.findIndex(f => f.id.toUpperCase() === id);
        if (checkDuplicate !== -1) {
            appConfig.faqs[checkDuplicate] = newFaq;
            alert("✅ FAQ esistente sovrascritta e validata con successo!");
        } else {
            appConfig.faqs.unshift(newFaq);
            alert("✅ Nuova FAQ aggiunta e validata con successo!");
        }
    }

    renderFaqTable();
    resetFaqForm();
}

function editFaq(index) {
    const faq = appConfig.faqs[index];
    document.getElementById("faqEditIndex").value = index;
    document.getElementById("faqId").value = faq.id;
    document.getElementById("faqKeywords").value = Array.isArray(faq.keywords) ? faq.keywords.join(", ") : faq.keywords;
    document.getElementById("faqResponse").value = Array.isArray(faq.responses) ? faq.responses[0] : faq.response;
    
    const catSelect = document.getElementById("faqCategory");
    if (catSelect) {
        catSelect.value = faq.type || (faq.id.startsWith("FORM_") ? "form" : "scuola");
    }

    const searchInput = document.getElementById("faqTableSearch");
    if (searchInput) {
        searchInput.value = faq.id;
        renderFaqTable();
    }

    document.getElementById("faqFormTitle").innerHTML = `<i class="fa-solid fa-pen-to-square"></i> Modifica FAQ (${faq.id})`;
    document.getElementById("faqSubmitBtn").innerHTML = `<i class="fa-solid fa-sync"></i> Aggiorna FAQ`;
    document.getElementById("faqCancelBtn").style.display = "inline-flex";
    document.getElementById("faqDeleteInFormBtn").style.display = "inline-flex";
    document.getElementById("faqNewBtn").style.display = "inline-flex";
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function deleteFaq(index) {
    if (confirm("Vuoi davvero eliminare definitivamente questa FAQ?")) {
        appConfig.faqs.splice(index, 1);
        renderFaqTable();
        resetFaqForm();
        alert("🗑️ FAQ rimossa con successo!");
    }
}

function deleteCurrentEditingFaq() {
    const index = parseInt(document.getElementById("faqEditIndex").value, 10);
    if (index >= 0) {
        deleteFaq(index);
    }
}

function resetFaqForm() {
    document.getElementById("faqForm").reset();
    document.getElementById("faqEditIndex").value = "-1";
    document.getElementById("faqFormTitle").innerHTML = `<i class="fa-solid fa-plus-circle"></i> Aggiungi Nuova FAQ`;
    document.getElementById("faqSubmitBtn").innerHTML = `<i class="fa-solid fa-save"></i> Salva FAQ`;
    document.getElementById("faqCancelBtn").style.display = "none";
    document.getElementById("faqDeleteInFormBtn").style.display = "none";
    document.getElementById("faqNewBtn").style.display = "none";
    
    const searchInput = document.getElementById("faqTableSearch");
    if (searchInput) {
        searchInput.value = "";
        renderFaqTable();
    }
}

// --- GESTIONE PULSANTI RAPIDI ---
function renderBtnTable() {
    const tbody = document.getElementById("btnTableBody");
    if (!tbody || typeof appConfig === "undefined" || !appConfig.quickButtons) return;

    tbody.innerHTML = "";
    appConfig.quickButtons.forEach((btn, index) => {
        const tr = document.createElement("tr");
        tr.innerHTML = `
            <td><strong>${btn.label}</strong></td>
            <td><code>${btn.id}</code></td>
            <td class="actions-cell">
                <button class="btn btn-warning" onclick="editBtn(${index})"><i class="fa-solid fa-pen"></i></button>
                <button class="btn btn-danger" onclick="deleteBtn(${index})"><i class="fa-solid fa-trash"></i></button>
            </td>
        `;
        tbody.appendChild(tr);
    });
}

function handleBtnSubmit(e) {
    e.preventDefault();
    const index = parseInt(document.getElementById("btnEditIndex").value, 10);
    const label = document.getElementById("btnLabel").value.trim();
    const id = document.getElementById("btnFaqId").value.trim().toUpperCase();

    const newBtn = { id, label };

    if (index >= 0) {
        appConfig.quickButtons[index] = newBtn;
        alert("✅ Pulsante aggiornato con successo!");
    } else {
        appConfig.quickButtons.push(newBtn);
        alert("✅ Pulsante rapido aggiunto con successo!");
    }

    renderBtnTable();
    resetBtnForm();
}

function editBtn(index) {
    const btn = appConfig.quickButtons[index];
    document.getElementById("btnEditIndex").value = index;
    document.getElementById("btnLabel").value = btn.label;
    document.getElementById("btnFaqId").value = btn.id;

    document.getElementById("btnFormTitle").innerHTML = `<i class="fa-solid fa-pen-to-square"></i> Modifica Pulsante`;
    document.getElementById("btnSubmitBtn").innerHTML = `<i class="fa-solid fa-sync"></i> Aggiorna Pulsante`;
    document.getElementById("btnCancelBtn").style.display = "inline-flex";
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function deleteBtn(index) {
    if (confirm("Vuoi davvero eliminare questo pulsante?")) {
        appConfig.quickButtons.splice(index, 1);
        renderBtnTable();
    }
}

function resetBtnForm() {
    document.getElementById("btnForm").reset();
    document.getElementById("btnEditIndex").value = "-1";
    document.getElementById("btnFormTitle").innerHTML = `<i class="fa-solid fa-plus-circle"></i> Aggiungi Pulsante Rapido`;
    document.getElementById("btnSubmitBtn").innerHTML = `<i class="fa-solid fa-save"></i> Salva Pulsante`;
    document.getElementById("btnCancelBtn").style.display = "none";
}

// --- ESPORTAZIONE E DOWNLOAD AUTOMATICO DEL FILE SCRIPT.JS ---
function generateExportData() {
    const exportArea = document.getElementById("exportArea");
    if (!exportArea || typeof appConfig === "undefined") return;

    let globalErrors = [];
    if (!appConfig.faqs || !Array.isArray(appConfig.faqs)) {
        globalErrors.push("• L'array delle FAQ è corrotto o mancante.");
    } else {
        appConfig.faqs.forEach((faq, idx) => {
            if (!faq.id || !faq.responses || faq.responses.length === 0) {
                globalErrors.push(`• FAQ alla posizione #${idx + 1} ha un ID o una risposta mancante.`);
            }
        });
    }

    if (globalErrors.length > 0) {
        exportArea.value = "❌ ERRORE DI INTEGRITÀ RILEVATO NEL DATABASE:\n\n" + globalErrors.join("\n") + "\n\nCorreggi gli errori prima di procedere all'esportazione.";
        return;
    }

    let cleanConfig = {
        quickButtons: appConfig.quickButtons || [],
        dictionary: appConfig.dictionary || {},
        faqs: (appConfig.faqs || []).map(faq => ({
            id: faq.id,
            type: faq.type || (faq.id.startsWith("FORM_") ? "form" : "scuola"),
            keywords: Array.isArray(faq.keywords) ? faq.keywords : faq.keywords.split(",").map(k => k.trim()),
            responses: Array.isArray(faq.responses) ? faq.responses : [faq.response || ""]
        }))
    };

    try {
        const jsonString = JSON.stringify(cleanConfig, null, 2);
        
        // Generiamo il codice completo di script.js combinando la configurazione e il motore della chat
        const fullScriptContent = `/**\n * Database FAQ, Pulsanti Rapidi e Dizionario per Arturo | IIS "Arturo Checchi"\n * Aggiornato automaticamente dal pannello di amministrazione\n */\nlet appConfig = ${jsonString};\n\n` + 
        `let waitingForFormSelection = false;\n\ndocument.addEventListener("DOMContentLoaded", () => {\n    initApp();\n    startClock();\n});\n\n` +
        `function initApp() {\n    renderQuickButtons();\n    setupEventListeners();\n}\n\n` +
        `function renderQuickButtons() {\n    const container = document.getElementById("faq-buttons-container");\n    if (!container) return;\n    container.innerHTML = "";\n    appConfig.quickButtons.forEach(btn => {\n        const buttonEl = document.createElement("button");\n        buttonEl.className = "quick-btn";\n        buttonEl.innerHTML = \`<i class="\${btn.icon}"></i> \${btn.label.replace(/^[^\\s]+\\s/, '')}\`;\n        buttonEl.onclick = () => quickAction(btn.id);\n        container.appendChild(buttonEl);\n    });\n}\n\n` +
        `function setupEventListeners() {\n    const chatForm = document.getElementById("chat-form");\n    if (chatForm) {\n        chatForm.addEventListener("submit", (e) => {\n            e.preventDefault();\n            sendMessage();\n        });\n    }\n    const newChatBtn = document.getElementById("new-chat-btn");\n    if (newChatBtn) {\n        newChatBtn.addEventListener("click", resetChat);\n    }\n}\n\n` +
        `function sendMessage() {\n    const inputField = document.getElementById("user-input");\n    if (!inputField) return;\n    const message = inputField.value.trim();\n    if (message === "") return;\n    appendMessage(message, "user");\n    inputField.value = "";\n    setTimeout(() => { processUserQuery(message); }, 300);\n}\n\n` +
        `function formatLinksInText(text) {\n    if (text.includes("<a href=")) return text;\n    const urlRegex = /(https?:\\/\\/[^\\s]+)/g;\n    return text.replace(urlRegex, (url) => {\n        return \`<a href='\${url}' target='_blank' style='color: #1e3a8a; font-weight: bold; text-decoration: underline;'>🔗 Clicca qui per aprire il modulo</a>\`;\n    });\n}\n\n` +
        `function processUserQuery(query) {\n    let cleanQuery = query.toLowerCase()\n        .replace(/’/g, "'")\n        .replace(/[èé]/g, "e")\n        .replace(/[àá]/g, "a")\n        .replace(/[ìí]/g, "i")\n        .replace(/[òó]/g, "o")\n        .replace(/[ùú]/g, "u")\n        .replace(/^[?.,!]/g, "")\n        .replace(/\\s+/g, " ")\n        .trim();\n\n` +
        `    if (cleanQuery === "") return;\n\n` +
        `    if (waitingForFormSelection) {\n        waitingForFormSelection = false;\n        let formTrovato = null;\n        for (let faq of appConfig.faqs) {\n            if (faq.id.startsWith("FORM_") || faq.type === "form") {\n                let titoloForm = faq.responses[0].split(":")[0].replace(/<[^>]*>?/gm, '').toLowerCase();\n                let matchKeyword = faq.keywords.some(kw => cleanQuery.includes(kw));\n                if (cleanQuery.includes(faq.id.toLowerCase()) || cleanQuery.includes(titoloForm) || matchKeyword) {\n                    formTrovato = faq;\n                    break;\n                }\n            }\n        }\n        if (formTrovato) {\n            rispondiBot(formTrovato.responses[0]);\n        } else {\n            rispondiBot("🤖 Al momento non ho un form con questo nome. Ti consiglio di scrivere meglio il form oppure di passare a un'altra domanda.");\n        }\n        return;\n    }\n\n` +
        `    const paroleChiusura = ["niente", "nulla", "grazie", "no grazie", "no va bene cosi", "va bene cosi", "ok", "addio"];\n` +
        `    if (paroleChiusura.includes(cleanQuery)) {\n        rispondiBot("👋 Spero di esserti stato utile. Quando vuoi sono sempre pronto a fornirti nuove informazioni sui servizi dell'IIS \\"Arturo Checchi\\"!");\n        return;\n    }\n\n` +
        `    if (cleanQuery === "form" || cleanQuery === "modulo" || cleanQuery === "moduli") {\n        waitingForFormSelection = true;\n        let elencoNomiForm = "📋 A quale form desideri accedere? Ecco l'elenco dei moduli disponibili:<br><br>";\n        appConfig.faqs.filter(f => f.id.startsWith("FORM_") || f.type === "form").forEach((f) => {\n            let titoloForm = f.responses[0].split(":")[0].replace(/<[^>]*>?/gm, '').trim();\n            elencoNomiForm += \`🔹 **\${titoloForm}**<br>\`;\n        });\n        elencoNomiForm += \`<br>Scrivimi il nome o l'argomento del form che stai cercando!\`;\n        rispondiBot(elencoNomiForm);\n        return;\n    }\n\n` +
        `    if (cleanQuery.includes("che ora e") || cleanQuery === "ora" || cleanQuery.includes("orario attuale")) {\n        const now = new Date();\n        rispondiBot(\`⏰ Al momento sono le ore **\${now.toLocaleTimeString('it-IT')}** del giorno \${now.toLocaleDateString('it-IT', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}.\`);\n        return;\n    }\n\n` +
        `    let cercaSignificato = cleanQuery.includes("significa") || cleanQuery.includes("significhi") || cleanQuery.includes("cos e") || cleanQuery.includes("cose") || cleanQuery.includes("definizione") || cleanQuery.includes("significato");\n` +
        `    if (cercaSignificato) {\n        let trovatoDizionario = false;\n        for (const [term, def] of Object.entries(appConfig.dictionary)) {\n            if (cleanQuery.includes(term)) {\n                rispondiBot(def);\n                trovatoDizionario = true;\n                break;\n            }\n        }\n        if (!trovatoDizionario) {\n            rispondiBot("🤖 Al momento questo termine mi è ancora sconosciuto, ma ho registrato la tua richiesta: a breve lo avrò inserito nel mio dizionario!");\n        }\n        return;\n    }\n\n` +
        `    const parole = cleanQuery.split(" ");\n` +
        `    if (parole.length === 1) {\n        if (["ciao", "salve", "buongiorno", "buonasera"].includes(cleanQuery)) {\n            let faqSaluto = appConfig.faqs.find(f => f.id === "SALUTO");\n            if (faqSaluto) { rispondiBot(faqSaluto.responses[0]); return; }\n        }\n        if (appConfig.dictionary[cleanQuery]) { rispondiBot(appConfig.dictionary[cleanQuery]); return; }\n        rispondiBot(\`🤔 Hai digitato la parola singola <strong>"\${query}"</strong>.<br>Necessiti del form per la richiesta o desideri conoscere informazioni generali su questo argomento? Per favore, prova a formulare una richiesta più mirata (es. 'modulo fotocopie' o 'orario segreteria').\`);\n        return;\n    }\n\n` +
        `    if (cleanQuery.includes("radice quadrata") || cleanQuery.includes("radice")) {\n        let num = parseFloat(cleanQuery.replace(/[^0-9.]/g, ""));\n        if (!isNaN(num)) {\n            let risultato = Math.sqrt(num);\n            rispondiBot(\`📐 La radice quadrata di **\${num}** è **\${risultato.toFixed(2)}**!\`);\n            return;\n        }\n    }\n\n` +
        `    if (cleanQuery.includes("piano di lavoro") || cleanQuery.includes("piano lavoro") || cleanQuery.includes("piani di lavoro")) {\n        let risultatiForm = appConfig.faqs.filter(f => f.id === "FORM_PIANO_LAVORO_LICEO" || f.id === "FORM_PIANO_LAVORO_IPIA");\n        let sceltaMultiplaHtml = \`🔍 Ho trovato <strong>più moduli</strong> per il piano di lavoro. Scegli quale aprire:<br><br>\`;\n        risultatiForm.forEach((f) => {\n            let titoloRisposta = f.responses[0].split(":")[0].replace(/<[^>]*>?/gm, '').trim();\n            let linkMatch = f.responses[0].match(/(https?:\\/\\/[^\\s]+)/);\n            let urlForm = linkMatch ? linkMatch[1] : '#';\n            sceltaMultiplaHtml += \`👉 <a href='\${urlForm}' target='_blank' style='background: #1e3a8a; color: white; padding: 8px 14px; border-radius: 6px; display: inline-block; margin: 6px 0; text-decoration: none; font-weight: bold;'>\${titoloRisposta}</a><br>\`;\n        });\n        rispondiBot(sceltaMultiplaHtml);\n        return;\n    }\n\n` +
        `    let risultatiTrovati = [];\n    for (let faq of appConfig.faqs) {\n        for (let kw of faq.keywords) {\n            let kwClean = kw.toLowerCase().trim();\n            if (cleanQuery === kwClean || cleanQuery.includes(kwClean)) {\n                if (!risultatiTrovati.some(f => f.id === faq.id)) { risultatiTrovati.push(faq); }\n            }\n        }\n    }\n\n` +
        `    if (risultatiTrovati.length > 1) {\n        let sceltaMultiplaHtml = \`🔍 Ho trovato <strong>più elementi</strong> corrispondenti. Scegli quale aprire:<br><br>\`;\n        risultatiTrovati.forEach((f) => {\n            let titoloRisposta = f.responses[0].split(":")[0].replace(/<[^>]*>?/gm, '').trim();\n            let linkMatch = f.responses[0].match(/(https?:\\/\\/[^\\s]+)/);\n            let urlForm = linkMatch ? linkMatch[1] : '#';\n            sceltaMultiplaHtml += \`👉 <a href='\${urlForm}' target='_blank' style='background: #1e3a8a; color: white; padding: 8px 14px; border-radius: 6px; display: inline-block; margin: 6px 0; text-decoration: none; font-weight: bold;'>\${titoloRisposta}</a><br>\`;\n        });\n        rispondiBot(sceltaMultiplaHtml);\n        return;\n    }\n\n` +
        `    if (risultatiTrovati.length === 1) {\n        rispondiBot(risultatiTrovati[0].responses[0]);\n        return;\n    }\n\n` +
        `    rispondiBot("🤖 Hmm, non ho capito bene la domanda. Ti ricordo che <strong>Arturo non è un'intelligenza artificiale</strong>, ma un assistente virtuale programmato per darti informazioni precise sul nostro istituto.<br><br>A questo punto ti consiglio di usare altri tipi di informazioni, ma <strong>ti prometto che a breve sarò in condizioni di darti anche questo tipo di risposta</strong>!");\n}\n\n` +
        `function rispondiBot(testo) {\n    let testoFormattato = formatLinksInText(testo);\n    appendMessage(testoFormattato, "bot");\n}\n\n` +
        `function quickAction(id) {\n    let found = appConfig.faqs.find(f => f.id === id);\n    if (found) { rispondiBot(found.responses[0]); }\n}\n\n` +
        `function appendMessage(text, sender) {\n    const chatBox = document.getElementById("chat-messages");\n    if (!chatBox) return;\n    const messageDiv = document.createElement("div");\n    const isBot = (sender === "bot");\n    messageDiv.classList.add("message", isBot ? "bot-message" : "user-message");\n    const avatarDiv = document.createElement("div");\n    avatarDiv.classList.add("message-avatar");\n    avatarDiv.innerHTML = \`<i class="\${isBot ? "fa-solid fa-robot" : "fa-solid fa-user"}"></i>\`;\n    const bubble = document.createElement("div");\n    bubble.classList.add("message-content");\n    bubble.innerHTML = text.replace(/\\*\\*(.*?)\\*\\*/g, '<strong>$1</strong>').replace(/\\n/g, "<br>");\n    if (isBot) {\n        messageDiv.appendChild(avatarDiv);\n        messageDiv.appendChild(bubble);\n    } else {\n        messageDiv.appendChild(bubble);\n        messageDiv.appendChild(avatarDiv);\n    }\n    chatBox.appendChild(messageDiv);\n    chatBox.scrollTop = chatBox.scrollHeight;\n}\n\n` +
        `function resetChat() {\n    const chatBox = document.getElementById("chat-messages");\n    if (!chatBox) return;\n    waitingForFormSelection = false;\n    chatBox.innerHTML = \`<div class="message bot-message"><div class="message-avatar"><i class="fa-solid fa-robot"></i></div><div class="message-content">👋 Ciao! Sono <strong>Arturo</strong>, il tuo assistente virtuale ufficiale dell'IIS \\"Arturo Checchi\\".<br><br>Conversazione riavviata! Come posso aiutarti oggi?</div></div>\` ;\n}\n\n` +
        `function startClock() {\n    const clockEl = document.getElementById("live-clock");\n    if (!clockEl) return;\n    function updateDateTime() {\n        const now = new Date();\n        const options = { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' };\n        const dataFormattata = now.toLocaleDateString('it-IT', options);\n        const oraFormattata = now.toLocaleTimeString('it-IT');\n        if (clockEl) { clockEl.innerHTML = \`<i class="fa-regular fa-clock"></i> \${dataFormattata} - \${oraFormattata}\`; }\n    }\n    updateDateTime();\n    setInterval(updateDateTime, 1000);\n}\n`;

        exportArea.value = fullScriptContent;
    } catch (err) {
        exportArea.value = `❌ Errore critico durante la generazione dello script: ${err.message}`;
    }
}

function downloadScriptFile() {
    const exportArea = document.getElementById("exportArea");
    if (!exportArea || exportArea.value.startsWith("❌")) {
        alert("⚠️ Genera prima un codice valido prima di scaricare il file!");
        return;
    }

    const blob = new Blob([exportArea.value], { type: "text/javascript;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "script.js";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    
    alert("📥 File 'script.js' scaricato con successo! Ora puoi caricarlo direttamente su GitHub.");
}

function copyExportCode() {
    const exportArea = document.getElementById("exportArea");
    exportArea.select();
    document.execCommand("copy");
    alert("📋 Codice copiato negli appunti!");
}
