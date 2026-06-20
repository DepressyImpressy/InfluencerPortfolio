
//storingMemberAccount
function createAccount(username, password){
    let accounts = JSON.parse(localStorage.getItem("accounts")) || {};

    if (accounts[username]){
        alert("Already existent member.");
        return false;
    }

    accounts[username] = {
        password: password,
        created: new Date().toISOString()
    }

    localStorage.setItem("accounts", JSON.stringify(accounts));

    alert("Account created, log in and have fun!");
    return true;
}

function login(username, password){
    let accounts = JSON.parse(localStorage.getItem("accounts")) || {};

    //failed login
    if (!accounts[username]){
        alert("No account with that name exists!");
        return false;
    }

    if (accounts[username].password !== password){
        alert("Incorrect password. Try again!");
        return false;
    }

    //true login
    localStorage.getItem("loggedInUser", username);

    alert(`Welcome back ${username}!`);
    return true;   
}

function logout(){
    localStorage.removeItem("loggedinUser");
    updateHeaderUI();
    alert(`${username} logged out!`);
}

function updateHeaderUI(){
    const loggedInUser = localStorage.getItem("loggedInUser");

    const loginBtn = document.getElementById("openLogin");
    const profileM = document.getElementById("profileDropdown");
    const profile = document.getElementById("profile");

    if (loggedInUser){
        loginBtn.classList.add("hidden");
        profileM.classList.remove("hidden");
        profile.classList.remove("hidden");
    }
    else{
        loginBtn.classList.remove("hidden");
        profileM.classList.add("hidden");
    }
}