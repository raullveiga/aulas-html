
function validateForm() {
    var emailValid = false;
    var senhaValid = false;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    
    if (email.length == 0) {
        document.getElementById("alert-email").innerHTML = "Campo de entrada inválido. O email deve ter pelo menos 1 caractere!";
        document.getElementById("alert-email").style.visibility = "visible";
    } else {
        document.getElementById("alert-email").innerHTML = "";
        document.getElementById("alert-email").style.visibility = "hidden";
        emailValid = true;
    }

    if (password.length == 0) {
        document.getElementById("alert-password").innerHTML = "Campo de entrada inválido. A senha deve ter pelo menos 1 caractere!";
        document.getElementById("alert-password").style.visibility = "visible";
    } else {
        document.getElementById("alert-password").innerHTML = "";
        document.getElementById("alert-password").style.visibility = "hidden";
        senhaValid = true;
    }
    if (emailValid == true && senhaValid == true) {
        if (password == "admin" && email == "admin")
            window.location.href = "adminBlog.html";
        else {
            window.location.href = "blog.html";
        }
    }
}


