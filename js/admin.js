// PASSWORD DI ACCESSO AL PANNELLO (Modificabile a piacimento)
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

// GESTIONE SCHEDE (TABS)
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
}

// --- GESTIONE FAQ ---
function renderFaqTable() {
    const tbody = document.getElementById("faqTableBody");
    if (!tbody || typeof appConfig === "undefined") return;

    tbody.innerHTML = "";
    appConfig.faqs.forEach((faq, index) => {
        const tr = document.createElement("tr");
        const kwText = Array.isArray(faq.keywords) ? faq.keywords.join(", ") : faq.keywords;
        const respText = Array.isArray(faq.responses) ? faq.responses[0] : faq.response;

        tr.innerHTML = `
            <td><code>${faq.id}</code></td>
            <td>${kwText}</td>
            <td>${respText}</td>
            <td class="actions-cell">
                <button class="btn btn-warning" onclick="editFaq(${index})"><i class="fa-solid fa-pen"></i></button>
                <button class="btn btn-danger" onclick="deleteFaq(${index})"><i class="fa-solid fa-trash"></i></button>
            </td>
        `;
        tbody.appendChild(tr);
    });
}

function handleFaqSubmit(e) {
    e.preventDefault();
    const index = parseInt(document.getElementById("faqEditIndex").value, 10);
    const id = document.getElementById("faqId").value.trim().toUpperCase();
    const keywords = document.getElementById("faqKeywords").value.split(",").map(k => k.trim()).filter(k => k);
    const response = document.getElementById("faqResponse").value.trim();

    const newFaq = { id, keywords, responses: [response] };

    if (index >= 0) {
        appConfig.faqs[index] = newFaq;
    } else {
        appConfig.faqs.unshift(newFaq);
    }

    renderFaqTable();
    resetFaqForm();
    alert("✅ FAQ salvata con successo!");
}

function editFaq(index) {
    const faq = appConfig.faqs[index];
    document.getElementById("faqEditIndex").value = index;
    document.getElementById("faqId").value = faq.id;
    document.getElementById("faqKeywords").value = Array.isArray(faq.keywords) ? faq.keywords.join(", ") : faq.keywords;
    document.getElementById("faqResponse").value = Array.isArray(faq.responses) ? faq.responses[0] : faq.response;

    document.getElementById("faqFormTitle").innerHTML = `<i class="fa-solid fa-pen-to-square"></i> Modifica FAQ (${faq.id})`;
    document.getElementById("faqSubmitBtn").innerHTML = `<i class="fa-solid fa-sync"></i> Aggiorna FAQ`;
    document.getElementById("faqCancelBtn").style.display = "inline-flex";
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function deleteFaq(index) {
    if (confirm("Vuoi davvero eliminare questa FAQ?")) {
        appConfig.faqs.splice(index, 1);
        renderFaqTable();
    }
}

function resetFaqForm() {
    document.getElementById("faqForm").reset();
    document.getElementById("faqEditIndex").value = "-1";
    document.getElementById("faqFormTitle").innerHTML = `<i class="fa-solid fa-plus-circle"></i> Aggiungi Nuova FAQ`;
    document.getElementById("faqSubmitBtn").innerHTML = `<i class="fa-solid fa-save"></i> Salva FAQ`;
    document.getElementById("faqCancelBtn").style.display = "none";
}

// --- GESTIONE PULSANTI RAPIDI ---
function renderBtnTable() {
    const tbody = document.getElementById("btnTableBody");
    if (!tbody || typeof appConfig === "undefined") return;

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
    } else {
        appConfig.quickButtons.push(newBtn);
    }

    renderBtnTable();
    resetBtnForm();
    alert("✅ Pulsante rapido salvato con successo!");
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

// --- ESPORTAZIONE CODICE ---
function generateExportData() {
    const exportArea = document.getElementById("exportArea");
    if (!exportArea || typeof appConfig === "undefined") return;

    exportArea.value = `let appConfig = ${JSON.stringify(appConfig, null, 2)};`;
}

function copyExportCode() {
    const exportArea = document.getElementById("exportArea");
    exportArea.select();
    document.execCommand("copy");
    alert("📋 Codice copiato negli appunti! Incollalo dentro js/script.js per aggiornare il bot.");
}
