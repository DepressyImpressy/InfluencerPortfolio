document.getElementById("newRegi").addEventListener("click", () =>{

    const user = document.getElementById("newUser").value;
    const pass = document.getElementById("newPass").value;

    const success = createAccount(user, pass);

    if (success){
        console.log("Congrats on the new account");
        window.location.href = "index.html";
    }
})