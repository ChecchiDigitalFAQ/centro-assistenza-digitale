// Gestione Autocompletamento e Ricerca Dinamica ID
document.addEventListener("DOMContentLoaded", function () {
    const faqIdInput = document.getElementById("faqId");
    if (!faqIdInput) return;

    // Crea la lista dinamica dei suggerimenti (datalist)
    let datalist = document.createElement("datalist");
    datalist.id = "faqIdSuggestions";
    document.body.appendChild(datalist);
    faqIdInput.setAttribute("list", "faqIdSuggestions");

    // Funzione per aggiornare i suggerimenti disponibili
    function updateSuggestions() {
        datalist.innerHTML = "";
        if (typeof faqsData !== "undefined") {
            faqsData.forEach(faq => {
                let option = document.createElement("option");
                option.value = faq.id;
                datalist.appendChild(option);
            });
        }
    }

    updateSuggestions();

    // Evento alla digitazione nell'input ID
    faqIdInput.addEventListener("input", function () {
        const query = this.value.trim().toUpperCase();
        
        if (typeof faqsData === "undefined") return;

        // Cerca se esiste una FAQ con l'ID esatto digitato o selezionato
        const index = faqsData.findIndex(f => f.id.toUpperCase() === query);

        if (index !== -1) {
            // CORRISPONDENZA TROVATA: Autocompila i campi per la modifica
            const faq = faqsData[index];
            document.getElementById("faqIndex").value = index;
            document.getElementById("faqType").value = faq.type || "school";
            document.getElementById("faqKeywords").value = faq.keywords.join(", ");
            document.getElementById("faqResponse").value = faq.response;
            
            document.getElementById("faqFormTitle").innerText = "✏️ Modifica FAQ Esistente (" + faq.id + ")";
            document.getElementById("btnSaveFaq").innerText = "💾 Aggiorna FAQ";
            document.getElementById("btnCancelEdit").style.display = "inline-block";
        } else {
            // NESSUNA CORRISPONDENZA: Modalità creazione nuova voce
            document.getElementById("faqIndex").value = "-1";
            document.getElementById("faqFormTitle").innerText = "➕ Aggiungi / Modifica FAQ";
            document.getElementById("btnSaveFaq").innerText = "💾 Salva FAQ";
            document.getElementById("btnCancelEdit").style.display = "none";
        }
    });
});
