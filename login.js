//Pseudo Login
let isLoggedIn = false;

document.getElementById("loginSubmit").addEventListener("click", () => {
    const user = document.getElementById("loginUser").value;
    const password = document.getElementById("loginPass").value;

    const success = login(user, password);

    if (success){
        document.getElementById("LoginModal").style.display = "none";
        updateHeaderUI();
    }
    else{
        alert("Username/Password not recognized");
    }
});
