document.addEventListener("DOMContentLoaded", function () {
    const faqIdInput = document.getElementById("faqId");
    if (!faqIdInput) return;

    // Crea il datalist per i suggerimenti automatici
    let datalist = document.getElementById("faqIdSuggestions");
    if (!datalist) {
        datalist = document.createElement("datalist");
        datalist.id = "faqIdSuggestions";
        document.body.appendChild(datalist);
    }
    faqIdInput.setAttribute("list", "faqIdSuggestions");

    // Popola i suggerimenti pescando da faqsData (in script.js)
    function refreshSuggestions() {
        datalist.innerHTML = "";
        let list = [];

        if (typeof faqsData !== "undefined") {
            list = faqsData;
        }

        list.forEach(faq => {
            let option = document.createElement("option");
            option.value = faq.id;
            if (faq.keywords) {
                option.label = faq.keywords.join(", ");
            }
            datalist.appendChild(option);
        });

        return list;
    }

    let availableFaqs = refreshSuggestions();

    // Quando l'utente digita nel campo ID Univoco
    faqIdInput.addEventListener("input", function () {
        const query = this.value.trim().toUpperCase();
        
        if (!query) {
            resetForm();
            return;
        }

        availableFaqs = refreshSuggestions();

        // Cerca se l'ID inserito/selezionato esiste già
        const found = availableFaqs.find(f => f.id.toUpperCase() === query);

        if (found) {
            // SE ESISTE: Popola automaticamente tutti i campi per la modifica
            const index = availableFaqs.indexOf(found);
            document.getElementById("faqIndex").value = index;
            document.getElementById("faqType").value = found.type || "school";
            document.getElementById("faqKeywords").value = found.keywords ? found.keywords.join(", ") : "";
            document.getElementById("faqResponse").value = found.response || "";

            document.getElementById("faqFormTitle").innerText = "✏️ Modifica FAQ / Form (" + found.id + ")";
            document.getElementById("btnSaveFaq").innerText = "💾 Aggiorna Modifica";
            if (document.getElementById("btnCancelEdit")) {
                document.getElementById("btnCancelEdit").style.display = "inline-block";
            }
        } else {
            // SE NON ESISTE: Prepara il modulo per la creazione di una nuova voce
            document.getElementById("faqIndex").value = "-1";
            document.getElementById("faqFormTitle").innerText = "➕ Aggiungi Nuova FAQ / Form";
            document.getElementById("btnSaveFaq").innerText = "💾 Salva Nuova FAQ";
            if (document.getElementById("btnCancelEdit")) {
                document.getElementById("btnCancelEdit").style.display = "none";
            }
        }
    });

    function resetForm() {
        document.getElementById("faqIndex").value = "-1";
        document.getElementById("faqFormTitle").innerText = "➕ Aggiungi / Modifica FAQ";
        document.getElementById("btnSaveFaq").innerText = "💾 Salva FAQ";
        if (document.getElementById("btnCancelEdit")) {
            document.getElementById("btnCancelEdit").style.display = "none";
        }
    }
});
