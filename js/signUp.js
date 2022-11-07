// signUp.html
let userEmail = document.getElementById("email");
let userPassword = document.getElementById("password");
let userRepassword = document.getElementById("repassword");
let myButton = document.getElementById("button");


myButton.onclick = function close_open() {
    let password = userPassword.value;
    let repassword = userRepassword.value;
    if (password == repassword) {
        window.open('./signIn.html');
    } else {
        window.open('./signUp.html');
    }
}