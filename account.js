//edit button logic 
const editInfo = document.getElementById("editInfo");
const editBtn = document.getElementById("editBtn");
const profileInfo = document.getElementById("profileInfo");
//make edit button disappear and the fields that were concrete become input fields

if (editBtn && editInfo && profileInfo) {
    editBtn.addEventListener("click", () => {
        editInfo.classList.toggle("hidden");
        profileInfo.classList.add("hidden");
        editBtn.textContent = ("Save Changes")
    });
}

//button click logic
const pronounBtn = document.getElementById("pronounBtn");
const pronounMenu = document.getElementById("pronounMenu");

if (pronounBtn && pronounMenu) {
    pronounBtn.addEventListener("click", () => {
        pronounMenu.classList.toggle("hidden");
    })
}

//user choice
const options = document.querySelectorAll(".dropdown-option");

options.forEach(option => () => {
    option.addEventListener("click", () => {
        const value = option.dataset.value;

        localStorage.setItem("pronouns", value);

        pronounBtn.textContent = `${value}`;

        pronounMenu.classList.add("hidden");
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const saved = localStorage.getItem("pronouns");
    if (saved) {
        pronounBtn.textContent = `${saved}`;
    }
})