// admin.js - Gestione Completa CRUD per Arturo 2.0

let adminConfig = JSON.parse(localStorage.getItem("appConfig_master")) || {
    quickButtons: [
        { id: "AIUTO", label: "❓ Cos'è Arturo?" },
        { id: "CONTATTI", label: "📞 Contatti" },
        { id: "DIRIGENZA", label: "👔 Dirigenza" },
        { id: "SEGRETERIE", label: "🏢 Segreteria e Uffici" },
        { id: "MICROSOFT365", label: "💻 Servizi Digitali (Teams/Argo)" }
    ],
    dictionary: {
        "filantropo": "📖 **Filantropo:** Persona che si dedica a opere di bene, alla beneficenza e ad aiutare il prossimo per amore dell'umanità.",
        "mecenate": "📖 **Mecenate:** Persona di ampie disponibilità economiche che protegge e sostiene finanziariamente artisti, letterati e studiosi.",
        "duna": "📖 **Duna:** Rilievo o collinetta di sabbia accumulata e modellata dall'azione del vento, tipica dei deserti e delle zone costiere.",
        "onomatopea": "📖 **Onomatopea:** Figura retorica che consiste nel riprodurre o evocare, tramite i suoni di una parola, un rumore naturale, un verso di animale o un'azione (es. *bau*, *crash*, *don-don*).",
        "maratona": "📖 **Maratona:** Corsa podistica sulla distanza olimpica di 42,195 km. In senso figurato indica una prova lunga e impegnativa.",
        "spid": "📖 **SPID:** Sistema Pubblico di Identità Digitale. Credenziali usate per accedere ai servizi online della PA.",
        "pec": "📖 **PEC:** Posta Elettronica Certificata. Email con valore legale pari ad una raccomandata con ricevuta di ritorno."
    },
    faqs: [
        {
            id: "CREATORE",
            type: "personal",
            keywords: ["chi ti ha creato", "chi ti ha inventato", "chi ti ha sviluppato", "chi ti ha programmato", "creatore"],
            responses: ["🔴🔵 Sono stato ideato e creato presso l'**IIS \"A. Checchi\"** dal Tecnico di Informatica **Vorraro Luca** per aiutare la comunità scolastica!"]
        },
        {
            id: "PRIVACY_DATI_PERSONALI",
            type: "school",
            keywords: ["numero di telefono di", "numero di", "dammi il numero", "telefono di", "email di", "cellulare di"],
            responses: ["🔒 **Tutela della Privacy:** Per motivi GDPR, non posso fornire contatti personali di studenti o docenti. Rivolgiti alla **Segreteria dell'Istituto**."]
        },
        {
            id: "AIUTO",
            type: "school",
            keywords: ["aiuto", "help", "cosa sai fare", "istruzioni"],
            responses: ["Sono l'assistente digitale dell'**IIS Arturo Checchi**! Posso aiutarti a trovare informazioni, orari di segreteria e supporto sui servizi digitali."]
        },
        {
            id: "CONTATTI",
            type: "school",
            keywords: ["contatti scuola", "telefono scuola", "email scuola", "pec scuola", "dove siete"],
            responses: ["📍 **Sede Principale:** Viale Gramsci 7 - 50054 Fucecchio (FI)\n☎️ **Tel:** +39 0571 20889\n📧 **Email:** FIIS00300C@istruzione.it"]
        }
    ]
};

document.addEventListener("DOMContentLoaded", () => {
    renderFaqsTable();
    renderDictTable();
    renderButtonsTable();
    generateExportCode();
});

function showTab(tabId, btnElement) {
    document.querySelectorAll(".tab-content").forEach(tab => tab.classList.remove("active"));
    document.querySelectorAll(".admin-nav button").forEach(btn => btn.classList.remove("active"));

    document.getElementById(tabId).classList.add("active");
    btnElement.classList.add("active");

    if (tabId === "exportTab") {
        generateExportCode();
    }
}

// --- GESTIONE FAQ ---
function renderFaqsTable() {
    const tbody = document.getElementById("faqsTableBody");
    if (!tbody) return;
    tbody.innerHTML = "";

    adminConfig.faqs.forEach((item, index) => {
        const tr = document.createElement("tr");
        tr.innerHTML = `
            <td><strong>${item.id}</strong></td>
            <td><code>${item.type || 'school'}</code></td>
            <td>${item.keywords.join(", ")}</td>
            <td>${item.responses[0]}</td>
            <td>
                <button class="btn-edit" onclick="editFAQ(${index})">✏️ Modifica</button>
                <button class="btn-danger" onclick="deleteFAQ(${index})">🗑️ Elimina</button>
            </td>
        `;
        tbody.appendChild(tr);
    });
}

function saveFAQ(event) {
    event.preventDefault();
    const editIndex = parseInt(document.getElementById("faqIndex").value);
    const id = document.getElementById("faqId").value.trim().toUpperCase();
    const type = document.getElementById("faqType").value;
    const keywordsStr = document.getElementById("faqKeywords").value.trim();
    const response = document.getElementById("faqResponse").value.trim();

    if (!id || !keywordsStr || !response) return;

    const keywords = keywordsStr.split(",").map(k => k.trim());
    const newFaq = { id, type, keywords, responses: [response] };

    if (editIndex >= 0) {
        adminConfig.faqs[editIndex] = newFaq;
    } else {
        adminConfig.faqs.push(newFaq);
    }

    saveToLocalStorage();
    renderFaqsTable();
    cancelEditFAQ();
    alert("✅ FAQ salvata con successo!");
}

function editFAQ(index) {
    const item = adminConfig.faqs[index];
    document.getElementById("faqIndex").value = index;
    document.getElementById("faqId").value = item.id;
    document.getElementById("faqType").value = item.type || "school";
    document.getElementById("faqKeywords").value = item.keywords.join(", ");
    document.getElementById("faqResponse").value = item.responses[0];

    document.getElementById("faqFormTitle").innerText = "✏️ Modifica FAQ";
    document.getElementById("btnSaveFaq").innerText = "💾 Aggiorna FAQ";
    document.getElementById("btnCancelEdit").style.display = "inline-block";
    
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function cancelEditFAQ() {
    document.getElementById("faqIndex").value = -1;
    document.getElementById("faqForm").reset();
    document.getElementById("faqFormTitle").innerText = "➕ Aggiungi / Modifica FAQ";
    document.getElementById("btnSaveFaq").innerText = "💾 Salva FAQ";
    document.getElementById("btnCancelEdit").style.display = "none";
}

function deleteFAQ(index) {
    if (confirm("Sei sicuro di voler eliminare questa FAQ?")) {
        adminConfig.faqs.splice(index, 1);
        saveToLocalStorage();
        renderFaqsTable();
    }
}

// --- GESTIONE DIZIONARIO ---
function renderDictTable() {
    const tbody = document.getElementById("dictTableBody");
    if (!tbody) return;
    tbody.innerHTML = "";

    Object.entries(adminConfig.dictionary).forEach(([term, definition]) => {
        const tr = document.createElement("tr");
        tr.innerHTML = `
            <td><strong>${term}</strong></td>
            <td>${definition}</td>
            <td>
                <button class="btn-edit" onclick="editDictTerm('${term}')">✏️ Modifica</button>
                <button class="btn-danger" onclick="deleteDictTerm('${term}')">🗑️ Elimina</button>
            </td>
        `;
        tbody.appendChild(tr);
    });
}

function saveDictTerm(event) {
    event.preventDefault();
    const originalTerm = document.getElementById("dictOriginalTerm") ? document.getElementById("dictOriginalTerm").value : "";
    const term = document.getElementById("dictTerm").value.trim().toLowerCase();
    const definition = document.getElementById("dictDefinition").value.trim();

    if (!term || !definition) return;

    // Se il termine è stato rinominato durante la modifica, rimuoviamo la vecchia chiave
    if (originalTerm && originalTerm !== term) {
        delete adminConfig.dictionary[originalTerm];
    }

    adminConfig.dictionary[term] = definition;
    saveToLocalStorage();
    renderDictTable();
    cancelEditDict();
    alert("✅ Termine salvato nel dizionario!");
}

function editDictTerm(term) {
    document.getElementById("dictTerm").value = term;
    document.getElementById("dictDefinition").value = adminConfig.dictionary[term];
    if (document.getElementById("dictOriginalTerm")) {
        document.getElementById("dictOriginalTerm").value = term;
    }

    const titleEl = document.getElementById("dictFormTitle");
    const btnSaveEl = document.getElementById("btnSaveDict");
    const btnCancelEl = document.getElementById("btnCancelDictEdit");

    if (titleEl) titleEl.innerText = "✏️ Modifica Termine Dizionario";
    if (btnSaveEl) btnSaveEl.innerText = "💾 Aggiorna Termine";
    if (btnCancelEl) btnCancelEl.style.display = "inline-block";

    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function cancelEditDict() {
    document.getElementById("dictForm").reset();
    if (document.getElementById("dictOriginalTerm")) {
        document.getElementById("dictOriginalTerm").value = "";
    }
    
    const titleEl = document.getElementById("dictFormTitle");
    const btnSaveEl = document.getElementById("btnSaveDict");
    const btnCancelEl = document.getElementById("btnCancelDictEdit");

    if (titleEl) titleEl.innerText = "➕ Aggiungi / Modifica Termine";
    if (btnSaveEl) btnSaveEl.innerText = "💾 Salva Termine";
    if (btnCancelEl) btnCancelEl.style.display = "none";
}

function deleteDictTerm(term) {
    if (confirm(`Eliminare "${term}" dal dizionario?`)) {
        delete adminConfig.dictionary[term];
        saveToLocalStorage();
        renderDictTable();
    }
}

// --- GESTIONE PULSANTI ---
function renderButtonsTable() {
    const tbody = document.getElementById("buttonsTableBody");
    if (!tbody) return;
    tbody.innerHTML = "";

    adminConfig.quickButtons.forEach((btn, index) => {
        const tr = document.createElement("tr");
        tr.innerHTML = `
            <td>${btn.label}</td>
            <td><code>${btn.id}</code></td>
            <td>
                <button class="btn-edit" onclick="editQuickButton(${index})">✏️ Modifica</button>
                <button class="btn-danger" onclick="deleteQuickButton(${index})">🗑️ Elimina</button>
            </td>
        `;
        tbody.appendChild(tr);
    });
}

function saveQuickButton(event) {
    event.preventDefault();
    const editIndex = parseInt(document.getElementById("buttonIndex") ? document.getElementById("buttonIndex").value : -1);
    const label = document.getElementById("btnLabel").value.trim();
    const id = document.getElementById("btnFaqId").value.trim().toUpperCase();

    if (!label || !id) return;

    const newBtn = { id, label };

    if (editIndex >= 0) {
        adminConfig.quickButtons[editIndex] = newBtn;
    } else {
        adminConfig.quickButtons.push(newBtn);
    }

    saveToLocalStorage();
    renderButtonsTable();
    cancelEditButton();
    alert("✅ Pulsante salvato!");
}

function editQuickButton(index) {
    const btn = adminConfig.quickButtons[index];
    if (document.getElementById("buttonIndex")) {
        document.getElementById("buttonIndex").value = index;
    }
    document.getElementById("btnLabel").value = btn.label;
    document.getElementById("btnFaqId").value = btn.id;

    const titleEl = document.getElementById("buttonFormTitle");
    const btnSaveEl = document.getElementById("btnSaveButton");
    const btnCancelEl = document.getElementById("btnCancelBtnEdit");

    if (titleEl) titleEl.innerText = "✏️ Modifica Pulsante";
    if (btnSaveEl) btnSaveEl.innerText = "💾 Aggiorna Pulsante";
    if (btnCancelEl) btnCancelEl.style.display = "inline-block";

    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function cancelEditButton() {
    if (document.getElementById("buttonIndex")) {
        document.getElementById("buttonIndex").value = -1;
    }
    document.getElementById("buttonForm").reset();

    const titleEl = document.getElementById("buttonFormTitle");
    const btnSaveEl = document.getElementById("btnSaveButton");
    const btnCancelEl = document.getElementById("btnCancelBtnEdit");

    if (titleEl) titleEl.innerText = "➕ Aggiungi / Modifica Pulsante";
    if (btnSaveEl) btnSaveEl.innerText = "💾 Salva Pulsante";
    if (btnCancelEl) btnCancelEl.style.display = "none";
}

function deleteQuickButton(index) {
    if (confirm("Eliminare questo pulsante?")) {
        adminConfig.quickButtons.splice(index, 1);
        saveToLocalStorage();
        renderButtonsTable();
    }
}

// --- ESPORTAZIONE CODICE ---
function generateExportCode() {
    const exportArea = document.getElementById("exportCode");
    if (!exportArea) return;

    const code = `let appConfig = ${JSON.stringify(adminConfig, null, 2)};`;
    exportArea.value = code;
}

function copyExportCode() {
    const exportArea = document.getElementById("exportCode");
    exportArea.select();
    document.execCommand("copy");
    alert("📋 Codice della configurazione copiato negli appunti!");
}

function saveToLocalStorage() {
    localStorage.setItem("appConfig_master", JSON.stringify(adminConfig));
}
