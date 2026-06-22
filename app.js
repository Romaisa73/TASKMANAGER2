document.addEventListener("DOMContentLoaded", () => {

    const input = document.getElementById("ideaInput");
    const addButton = document.getElementById("addIdeaBtn");
    const clearButton = document.getElementById("clearAllBtn");
    const ideaList = document.getElementById("ideaList");
    const errorMessage = document.getElementById("errorMessage");

    function escapeHtml(text) {
        return text
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;");
    }

    addButton.addEventListener("click", () => {

        const idea = input.value.trim();

        if (idea.length === 0) {

            errorMessage.textContent =
                "Please enter an idea.";

            input.focus();

            return;
        }

        errorMessage.textContent = "";

        const card = document.createElement("div");

        card.className = "idea-card";

        card.innerHTML = `
            <span>${escapeHtml(idea)}</span>
            <button class="remove-btn">
                Remove
            </button>
        `;

        const removeButton =
            card.querySelector(".remove-btn");

        removeButton.addEventListener("click", () => {
            card.remove();
        });

        ideaList.appendChild(card);

        input.value = "";

        input.focus();

    });

    clearButton.addEventListener("click", () => {
        ideaList.innerHTML = "";
    });

});