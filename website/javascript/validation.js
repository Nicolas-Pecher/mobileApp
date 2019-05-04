function validateLogin() {

    if($("#email").val() === "" && $("#password").val() === "") {
        $("#emailError").text("Email is niet ingevuld");
        $("#passwordError").text("Wachtwoord is niet ingevuld");
        $("#email").focus();
        return false;
    }
    if($("#email").val() === "") {
        $("#emailError").text("Email is niet ingevuld");
        $("#email").focus();
        return false;
    }
    if($("#password").val() === "") {
        $("#passwordError").text("Wachtwoord is niet ingevuld");
        $("#password").focus();
        return false;
    }

    return (true);

}

function validateAddTimeEntry() {



}