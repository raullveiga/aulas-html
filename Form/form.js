function valida() {
    var emailDoc = document.getElementById("inputEmail");

    var passDoc = document.getElementById("inputPass");


    if (emailDoc.value == "")
        email.alert();
    else 
        email.hideAlert();

    if (passDoc.value == "") 
        pass.alert();
    else
        email.hideAlert();

}


let pass = {
    inPass: document.getElementById("invldPass"),

    alert: function(){
        this.inPass.innerHTML = "Campo obrigatório.";
        this.inPass.className = "alert alert-danger";
        this.inPass.style.visibility = "visibility";  
    },
    hideAlert: function() {
        this.inPass.style.visibility = "hidden";
    }
}
let email = {
    
    inEmail: document.getElementById("invldEmail"),
    alert: function() {
        this.inEmail.innerHTML = "Campo obrigatório.";
        this.inEmail.className = "alert alert-danger";
        this.inEmail.style.visibility = "visibility";
    },
    hideAlert: function() {
        this.inEmail.style.visibility = "hidden";
    }
};