document.addEventListener("DOMContentLoaded", function () {
    const faqIdInput = document.getElementById("faqId");
    const dictTermInput = document.getElementById("dictTerm");

    // 1. GESTIONE CAMBIO SCHEDE (TABS)
    window.showTab = function (tabId, element) {
        const tabs = document.querySelectorAll(".tab-content");
        tabs.forEach(tab => tab.classList.remove("active"));

        const buttons = document.querySelectorAll(".admin-nav button");
        buttons.forEach(btn => btn.classList.remove("active"));

        const targetTab = document.getElementById(tabId);
        if (targetTab) {
            targetTab.classList.add("active");
        }

        if (element) {
            element.classList.add("active");
        } else {
            const btn = Array.from(buttons).find(b => b.getAttribute("onclick") && b.getAttribute("onclick").includes(tabId));
            if (btn) btn.classList.add("active");
        }

        if (tabId === "exportTab") {
            generateExportCode();
        }
    };

    // 2. RECUPERO DATI DA appConfig (da script.js)
    function getFaqsList() {
        if (typeof appConfig !== "undefined" && Array.isArray(appConfig.faqs)) {
            return appConfig.faqs;
        }
        return [];
    }

    // 3. AUTOCOMPLETAMENTO FAQ ID
    let faqDatalist = document.getElementById("faqIdSuggestions");
    if (!faqDatalist) {
        faqDatalist = document.createElement("datalist");
        faqDatalist.id = "faqIdSuggestions";
        document.body.appendChild(faqDatalist);
    }
    if (faqIdInput) {
        faqIdInput.setAttribute("list", "faqIdSuggestions");
    }

    function updateFaqDatalist() {
        if (!faqDatalist) return;
        faqDatalist.innerHTML = "";
        const faqs = getFaqsList();
        faqs.forEach(faq => {
            let option = document.createElement("option");
            option.value = faq.id;
            option.label = Array.isArray(faq.keywords) ? faq.keywords.join(", ") : "";
            faqDatalist.appendChild(option);
        });
    }

    // 4. AUTOCOMPLETAMENTO DIZIONARIO
    let dictDatalist = document.getElementById("dictTermSuggestions");
    if (!dictDatalist) {
        dictDatalist = document.createElement("datalist");
        dictDatalist.id = "dictTermSuggestions";
        document.body.appendChild(dictDatalist);
    }
    if (dictTermInput) {
        dictTermInput.setAttribute("list", "dictTermSuggestions");
    }

    function updateDictDatalist() {
        if (!dictDatalist || typeof appConfig === "undefined" || !appConfig.dictionary) return;
        dictDatalist.innerHTML = "";
        Object.keys(appConfig.dictionary).forEach(term => {
            let option = document.createElement("option");
            option.value = term;
            dictDatalist.appendChild(option);
        });
    }

    // 5. TABELLA FAQ
    function renderFaqsTable() {
        const tbody = document.getElementById("faqsTableBody");
        if (!tbody) return;

        tbody.innerHTML = "";
        const faqs = getFaqsList();

        faqs.forEach((faq, index) => {
            const tr = document.createElement("tr");
            const keywordsText = Array.isArray(faq.keywords) ? faq.keywords.join(", ") : (faq.keywords || "");
            let responseText = Array.isArray(faq.responses) ? faq.responses[0] : (faq.response || "");

            tr.innerHTML = `
                <td><strong>${faq.id}</strong></td>
                <td>${faq.type || 'school'}</td>
                <td>${keywordsText}</td>
                <td>${responseText}</td>
                <td>
                    <button class="btn-edit" onclick="editFaqDirect(${index})">✏️ Modifica</button>
                    <button class="btn-danger" onclick="deleteFaqDirect(${index})">🗑️ Elimina</button>
                </td>
            `;
            tbody.appendChild(tr);
        });
    }

    // 6. TABELLA DIZIONARIO
    function renderDictTable() {
        const tbody = document.getElementById("dictTableBody");
        if (!tbody || typeof appConfig === "undefined" || !appConfig.dictionary) return;

        tbody.innerHTML = "";
        Object.entries(appConfig.dictionary).forEach(([term, def]) => {
            const tr = document.createElement("tr");
            tr.innerHTML = `
                <td><strong>${term}</strong></td>
                <td>${def}</td>
                <td>
                    <button class="btn-edit" onclick="editDictDirect('${term}')">✏️ Modifica</button>
                    <button class="btn-danger" onclick="deleteDictTerm('${term}')">🗑️ Elimina</button>
                </td>
            `;
            tbody.appendChild(tr);
        });
    }

    // 7. TABELLA PULSANTI RAPIDI
    function renderButtonsTable() {
        const tbody = document.getElementById("buttonsTableBody");
        if (!tbody || typeof appConfig === "undefined" || !appConfig.quickButtons) return;

        tbody.innerHTML = "";
        appConfig.quickButtons.forEach((btn, index) => {
            const tr = document.createElement("tr");
            tr.innerHTML = `
                <td><strong>${btn.label}</strong></td>
                <td><code>${btn.id}</code></td>
                <td>
                    <button class="btn-edit" onclick="editQuickButton(${index})">✏️ Modifica</button>
                    <button class="btn-danger" onclick="deleteQuickButton(${index})">🗑️ Elimina</button>
                </td>
            `;
            tbody.appendChild(tr);
        });
    }

    // LIBRERIA EMOJI PER PULSANTI RAPIDI
    function setupEmojiPicker() {
        const buttonForm = document.getElementById("buttonForm");
        if (!buttonForm || document.getElementById("emojiPickerContainer")) return;

        const pickerDiv = document.createElement("div");
        pickerDiv.id = "emojiPickerContainer";
        pickerDiv.className = "form-group";
        
        const emojis = ["📋", "📑", "📂", "📝", "🔑", "💻", "🖨️", "📞", "👔", "🏢", "❓", "⚙️", "📢", "🎓", "📩"];
        
        let pickerHTML = "<label>Seleziona un'Icona per il Pulsante:</label><div style='display:flex; gap:8px; flex-wrap:wrap; margin-top:5px;'>";
        emojis.forEach(e => {
            pickerHTML += `<button type='button' style='font-size:1.2rem; padding:6px 10px; cursor:pointer; background:#f8f9fa; border:1px solid #ccc; border-radius:4px;' onclick="addEmojiToButton('${e}')">${e}</button>`;
        });
        pickerHTML += "</div>";

        pickerDiv.innerHTML = pickerHTML;
        buttonForm.insertBefore(pickerDiv, buttonForm.firstChild);
    }

    window.addEmojiToButton = function(emoji) {
        const btnLabelInput = document.getElementById("btnLabel");
        if (!btnLabelInput) return;
        const currentText = btnLabelInput.value.replace(/^[\p{Emoji}\s]+/gu, '');
        btnLabelInput.value = emoji + " " + currentText;
    };

    // MODIFICA & ELIMINAZIONE FAQ (Inclusa selezione automatica categoria)
    window.editFaqDirect = function (index) {
        const faqs = getFaqsList();
        const faq = faqs[index];
        if (!faq) return;

        document.getElementById("faqId").value = faq.id;
        document.getElementById("faqIndex").value = index;
        
        const typeSelect = document.getElementById("faqType");
        if (typeSelect) {
            typeSelect.value = faq.type || "school";
        }

        document.getElementById("faqKeywords").value = Array.isArray(faq.keywords) ? faq.keywords.join(", ") : (faq.keywords || "");

        let responseText = Array.isArray(faq.responses) ? faq.responses[0] : (faq.response || "");
        document.getElementById("faqResponse").value = responseText;

        document.getElementById("faqFormTitle").innerText = "✏️ Modifica FAQ / Form (" + faq.id + ")";
        document.getElementById("btnSaveFaq").innerText = "💾 Aggiorna Modifica";
        if (document.getElementById("btnCancelEdit")) {
            document.getElementById("btnCancelEdit").style.display = "inline-block";
        }
    };

    window.deleteFaqDirect = function (index) {
        if (confirm("Sei sicuro di voler eliminare questa FAQ?")) {
            if (typeof appConfig !== "undefined" && Array.isArray(appConfig.faqs)) {
                appConfig.faqs.splice(index, 1);
            }
            updateFaqDatalist();
            renderFaqsTable();
            resetAdminForm();
            generateExportCode();
        }
    };

    if (faqIdInput) {
        faqIdInput.addEventListener("input", function () {
            const query = this.value.trim().toUpperCase();
            if (!query) {
                resetAdminForm();
                return;
            }

            const faqs = getFaqsList();
            const index = faqs.findIndex(f => f.id.toUpperCase() === query);

            if (index !== -1) {
                window.editFaqDirect(index);
            } else {
                document.getElementById("faqIndex").value = "-1";
                document.getElementById("faqFormTitle").innerText = "➕ Aggiungi Nuova FAQ / Form";
                document.getElementById("btnSaveFaq").innerText = "💾 Salva Nuova FAQ";
                if (document.getElementById("btnCancelEdit")) {
                    document.getElementById("btnCancelEdit").style.display = "none";
                }
            }
        });
    }

    // MODIFICA & AUTOCOMPLETAMENTO DIZIONARIO
    window.editDictDirect = function(term) {
        if (typeof appConfig === "undefined" || !appConfig.dictionary || !appConfig.dictionary[term]) return;
        document.getElementById("dictTerm").value = term;
        document.getElementById("dictDefinition").value = appConfig.dictionary[term];
        
        const submitBtn = document.querySelector("#dictForm button[type='submit']");
        if (submitBtn) submitBtn.innerText = "💾 Aggiorna Termine (" + term + ")";
    };

    if (dictTermInput) {
        dictTermInput.addEventListener("input", function () {
            const termQuery = this.value.trim().toLowerCase();
            const submitBtn = document.querySelector("#dictForm button[type='submit']");

            if (!termQuery) {
                document.getElementById("dictDefinition").value = "";
                if (submitBtn) submitBtn.innerText = "💾 Aggiungi / Aggiorna Termine";
                return;
            }

            if (typeof appConfig !== "undefined" && appConfig.dictionary && appConfig.dictionary[termQuery]) {
                document.getElementById("dictDefinition").value = appConfig.dictionary[termQuery];
                if (submitBtn) submitBtn.innerText = "✏️ Aggiorna Termine (" + termQuery + ")";
            } else {
                document.getElementById("dictDefinition").value = "";
                if (submitBtn) submitBtn.innerText = "➕ Aggiungi Nuovo Termine";
            }
        });
    }

    // SALVATAGGIO FAQ
    window.saveFAQ = function (event) {
        if (event) event.preventDefault();

        const id = document.getElementById("faqId").value.trim().toUpperCase();
        const type = document.getElementById("faqType").value;
        const keywords = document.getElementById("faqKeywords").value.split(",").map(k => k.trim()).filter(k => k !== "");
        const responseText = document.getElementById("faqResponse").value.trim();
        const index = parseInt(document.getElementById("faqIndex").value, 10);

        if (!id || keywords.length === 0 || !responseText) {
            alert("Compila tutti i campi obbligatori (ID, Parole chiave, Risposta).");
            return;
        }

        const faqData = {
            id: id,
            type: type,
            keywords: keywords,
            responses: [responseText]
        };

        if (typeof appConfig !== "undefined" && Array.isArray(appConfig.faqs)) {
            if (index >= 0 && index < appConfig.faqs.length) {
                appConfig.faqs[index] = faqData;
            } else {
                appConfig.faqs.unshift(faqData);
            }
        }

        updateFaqDatalist();
        renderFaqsTable();
        resetAdminForm();
        generateExportCode();
        alert("FAQ salvata con successo!");
    };

    // GESTIONE DIZIONARIO
    window.saveDictTerm = function (event) {
        if (event) event.preventDefault();
        const term = document.getElementById("dictTerm").value.trim().toLowerCase();
        const def = document.getElementById("dictDefinition").value.trim();

        if (!term || !def) return;

        if (typeof appConfig !== "undefined" && appConfig.dictionary) {
            appConfig.dictionary[term] = def;
            updateDictDatalist();
            renderDictTable();
            generateExportCode();
            document.getElementById("dictTerm").value = "";
            document.getElementById("dictDefinition").value = "";
            const submitBtn = document.querySelector("#dictForm button[type='submit']");
            if (submitBtn) submitBtn.innerText = "💾 Aggiungi / Aggiorna Termine";
            alert("Termine salvato nel dizionario!");
        }
    };

    window.deleteDictTerm = function (term) {
        if (confirm("Eliminare il termine '" + term + "'?")) {
            delete appConfig.dictionary[term];
            updateDictDatalist();
            renderDictTable();
            generateExportCode();
        }
    };

    // PULSANTI RAPIDI
    let currentEditBtnIndex = -1;

    window.editQuickButton = function(index) {
        if (typeof appConfig === "undefined" || !appConfig.quickButtons[index]) return;
        const btn = appConfig.quickButtons[index];
        document.getElementById("btnLabel").value = btn.label;
        document.getElementById("btnFaqId").value = btn.id;
        currentEditBtnIndex = index;
    };

    window.saveQuickButton = function (event) {
        if (event) event.preventDefault();
        const label = document.getElementById("btnLabel").value.trim();
        const id = document.getElementById("btnFaqId").value.trim().toUpperCase();

        if (!label || !id) return;

        if (typeof appConfig !== "undefined" && appConfig.quickButtons) {
            if (currentEditBtnIndex >= 0 && currentEditBtnIndex < appConfig.quickButtons.length) {
                appConfig.quickButtons[currentEditBtnIndex] = { id: id, label: label };
                currentEditBtnIndex = -1;
            } else {
                appConfig.quickButtons.push({ id: id, label: label });
            }
            renderButtonsTable();
            generateExportCode();
            document.getElementById("btnLabel").value = "";
            document.getElementById("btnFaqId").value = "";
            alert("Pulsante rapido aggiornato con successo!");
        }
    };

    window.deleteQuickButton = function (index) {
        if (confirm("Eliminare questo pulsante rapido?")) {
            appConfig.quickButtons.splice(index, 1);
            renderButtonsTable();
            generateExportCode();
        }
    };

    function resetAdminForm() {
        if (document.getElementById("faqId")) document.getElementById("faqId").value = "";
        if (document.getElementById("faqIndex")) document.getElementById("faqIndex").value = "-1";
        if (document.getElementById("faqKeywords")) document.getElementById("faqKeywords").value = "";
        if (document.getElementById("faqResponse")) document.getElementById("faqResponse").value = "";
        if (document.getElementById("faqFormTitle")) document.getElementById("faqFormTitle").innerText = "➕ Aggiungi / Modifica FAQ";
        if (document.getElementById("btnSaveFaq")) document.getElementById("btnSaveFaq").innerText = "💾 Salva FAQ";
        if (document.getElementById("btnCancelEdit")) document.getElementById("btnCancelEdit").style.display = "none";
    }

    window.cancelEditFAQ = resetAdminForm;

    // EXPORT CODICE PER SCRIPT.JS
    window.generateExportCode = function () {
        const exportArea = document.getElementById("exportCode");
        if (!exportArea) return;
        if (typeof appConfig !== "undefined") {
            exportArea.value = "// Database FAQ, Pulsanti Rapidi e Dizionario integrato per Arturo 2.0\nlet appConfig = " + JSON.stringify(appConfig, null, 2) + ";";
        }
    };

    window.copyExportCode = function () {
        const exportArea = document.getElementById("exportCode");
        if (!exportArea || !exportArea.value) {
            generateExportCode();
        }
        exportArea.select();
        document.execCommand("copy");
        alert("Codice aggiornato copiato negli appunti! Ora incollalo in js/script.js su GitHub.");
    };

    // INIZIALIZZAZIONE COMPLETA
    setupEmojiPicker();
    updateFaqDatalist();
    updateDictDatalist();
    renderFaqsTable();
    renderDictTable();
    renderButtonsTable();
    generateExportCode();
});
