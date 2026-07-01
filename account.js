
function enterEditMode(){
    // entering edit mode
            editInfo.classList.remove("hidden");
            profileInfo.classList.add("hidden");
            editBtn.textContent = "Save Changes";
    //username value being current username
            const usernameEdit = document.getElementById("usernameEdit");
            usernameEdit.value = userData.username;
}

function exitEditMode(){
    // leaving edit mode
            editInfo.classList.add("hidden");
            profileInfo.classList.remove("hidden");
            editBtn.textContent = "Edit";

            // close dropdown when leaving edit mode
            pronounMenu.classList.add("hidden");
}

function saveUsername(){
    //trim() removes spaces
    const newUsername = document.getElementById("usernameEdit").value.trim();

    //load accounts
    const accountsJSON = localStorage.getItem("accounts");
    const accounts = JSON.parse(accountsJSON);
    const loggedInUser = localStorage.getItem("loggedInUser");

    const userData = accounts[loggedInUser];

    //update JSON with a safety wrapper
    if(newUsername.trim() !== ""){
        userData.username = newUsername;
    }

    //save to local
    localStorage.setItem("accounts", JSON.stringify(accounts));

    //update to DOM
    const usernameD = document.getElementById("username");
    usernameD.textContent = newUsername;
}

function saveBio(){
    const newBio = document.getElementById("bioEdit").value;

    const accountsJSON = localStorage.getItem("accounts");
    const accounts = JSON.parse(accountsJSON);
    const loggedInUser = localStorage.getItem("loggedInUser");

    const userData = accounts[loggedInUser];

    //only update if something was typed
    if (newBio !== ""){
        userData.bio = newBio;
    }

    localStorage.setItem("accounts", JSON.stringify(accounts));

    const bioD = document.getElementById("bio");
    bioD.textContent = newBio;
}

function saveLocation(){
    const newLocation = document.getElementById("loactionEdit").value;

    const accountsJSON = localStorage.getItem("accounts");
    const accounts = JSON.parse(accountsJSON);
    const loggedInUser = localStorage.getItem("loggedInUser");

    const userData = accounts[loggedInUser];

    if(newLocation !== ""){
        userData.location = newLocation;
    }

    localStorage.setItem("accounts", JSON.stringify(accounts));

    const locationD = document.getElementById("bio");
    locationD.textContent = newLocation;
}

//the goods
document.addEventListener("DOMContentLoaded", () => {

    // elements
    const editInfo = document.getElementById("editInfo");
    const editBtn = document.getElementById("editBtn");
    const profileInfo = document.getElementById("profileInfo");

    const pronounBtn = document.getElementById("pronounBtn");
    const pronounMenu = document.getElementById("pronounMenu");
    const options = document.querySelectorAll(".dropdown-option");

    let editMode = false;

    //json parsing
    const accountsJSON = localStorage.getItem("accounts");
    const accounts = accountsJSON ? JSON.parse(accountsJSON) : null;
    const loggedInUser = localStorage.getItem("loggedInUser");

    const userData = accounts[loggedInUser];

    
    if(!accounts || !loggedInUser || !accounts[loggedInUser]){
        console.warn("No logged in user data found!");
        return;
    }

    //profile display elements
    const usernameD = document.getElementById("username");
    const pronounsD = document.getElementById("pronouns");
    const bioD = document.getElementById("bio");
    const locationD = document.getElementById("location");
    const pfpD = document.getElementById("accountPfp");

    //mapping userdata to Dom
    usernameD.textContent = userData.username || "";
    pronounsD.textContent = userData.pronouns || "";
    bioD.textContent = userData.bio || "";
    locationD.textContent = userData.location || "";
    pfpD.src = userData.profileImage || "";

    // EDIT BUTTON LOGIC
    editBtn.addEventListener("click", () => {
        editMode = !editMode;

        if (editMode) {
            enterEditMode();
        } else {
            saveUsername();
            saveBio();
            saveLocation();
            exitEditMode();
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
