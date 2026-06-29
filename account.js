document.addEventListener("DOMContentLoaded", () => {

    // elements
    const editInfo = document.getElementById("editInfo");
    const editBtn = document.getElementById("editBtn");
    const profileInfo = document.getElementById("profileInfo");

    const pronounBtn = document.getElementById("pronounBtn");
    const pronounMenu = document.getElementById("pronounMenu");
    const options = document.querySelectorAll(".dropdown-option");

    let editMode = false;

    // EDIT BUTTON LOGIC
    editBtn.addEventListener("click", () => {
        editMode = !editMode;

        if (editMode) {
            // entering edit mode
            editInfo.classList.remove("hidden");
            profileInfo.classList.add("hidden");
            editBtn.textContent = "Save Changes";
        } else {
            // leaving edit mode
            editInfo.classList.add("hidden");
            profileInfo.classList.remove("hidden");
            editBtn.textContent = "Edit";

            // close dropdown when leaving edit mode
            pronounMenu.classList.add("hidden");
        }
    });

    // PRONOUN BUTTON CLICK (only works in edit mode)
    pronounBtn.addEventListener("click", () => {
        if (!editMode) return; // block dropdown in view mode
        pronounMenu.classList.toggle("hidden");
    });

    // PRONOUN OPTION CLICK
    options.forEach(option => {
        option.addEventListener("click", () => {
            if (!editMode) return; // block selection in view mode

            const value = option.dataset.value;

            localStorage.setItem("pronouns", value);
            pronounBtn.textContent = value;

            pronounMenu.classList.add("hidden");
        });
    });

    // LOAD SAVED PRONOUNS
    const saved = localStorage.getItem("pronouns");
    if (saved) {
        pronounBtn.textContent = saved;
    }
});
