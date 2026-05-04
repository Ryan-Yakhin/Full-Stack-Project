const btnEl = document.getElementById("btn");
const InpassEl = document.getElementById("password");
const copyEl = document.querySelector(".fa-copy");
const alertEl = document.querySelector(".alert-container");

btnEl.addEventListener("click", ()=>{
    generatePassword();
});

copyEl.addEventListener("click", ()=>{
    copyPassword();
});

function generatePassword(){
    const chars = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const passwordLength = 12;
    let password = "";
    for (let i = 0; i < passwordLength; i++) {
        password += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    InpassEl.value = password;
};

function copyPassword(){
    InpassEl.select();
    InpassEl.setSelectionRange(0, 9999);
    navigator.clipboard.writeText(InpassEl.value);
    alertEl.innerText = "Password Copied !";
    alertEl.classList.remove("active");
    setTimeout(()=>{
        alertEl.classList.add("active");
    }, 2000);
};