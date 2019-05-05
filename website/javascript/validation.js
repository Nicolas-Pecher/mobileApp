function validateLogin() {

    let valid = true;

    //login gegevens
    if($("#email").val() === "" && $("#password").val() === "") {
        $("#emailError").text("Email is niet ingevuld");
        $("#passwordError").text("Wachtwoord is niet ingevuld");
        $("#email").focus();
        valid = false;
    }
    if($("#email").val() === "") {
        $("#emailError").text("Email is niet ingevuld");
        $("#email").focus();
        valid = false;
    }
    if($("#password").val() === "") {
        $("#passwordError").text("Wachtwoord is niet ingevuld");
        $("#password").focus();
        valid = false;
    }

    return valid;

}

function validateAddTimeEntry() {



}

function validateAddCustomer() {

    let valid = true;

    //klant gegevens
    if($("[name='naamKlant']").val() === "" ) {
        $("#naamKlantError").text("* Verplicht veld");
        $("[name='naamKlant']").focus();
        valid = false;
    }
    if($("[name='btwKlant']").val() === "" ) {
        $("#btwKlantError").text("* Verplicht veld");
        //$("[name='btwKlant']").focus();
        valid = false;
    }
    if($("[name='btwKlant']").val() != "" && $("[name='btwKlant']").val().length != 12){
        $("#btwKlantError").text("* Btw-nummer moet 12 karakters lang zijn");
    }

    if($("[name='ibanKlant']").val() === "" ) {
        $("#ibanKlantError").text("* Verplicht veld");
        //$("[name='ibanKlant']").focus();
        valid = false;
    }
    if($("[name='ibanKlant']").val() != "" && $("[name='ibanKlant']").val().length != 16){
        $("#ibanKlantError").text("* IBAN moet 16 karakters lang zijn");
    }

    //adres gegevens
    if($("[name='straat']").val() === "" ) {
        $("#straatError").text("* Verplicht veld");
        //$("[name='straat']").focus();
        valid = false;
    }
    if($("[name='huisnummer']").val() === "" ) {
        $("#huisnummerError").text("* Verplicht veld");
        //$("[name='huisnummer']").focus();
        valid = false;
    }
    if($("[name='postcode']").val() === "" ) {
        $("#postcodeError").text("* Verplicht veld");
        //$("[name='postcode']").focus();
        valid = false;
    }

    if($("[name='gemeente']").val() === "" ) {
        $("#gemeenteError").text("* Verplicht veld");
        //$("[name='gemeente']").focus();
        valid = false;
    }
    if($("[name='land']").val() === "" ) {
        $("#landError").text("* Verplicht veld");
        //$("[name='land']").focus();
        valid = false;
    }

    return valid;

}