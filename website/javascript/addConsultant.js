$(document).ready(function () {

    activePage('consultants');

    let bedrijfId = $('#bedrijfIdValue').val();

    //toevoegen van een consultant
    $("#formConsultant").submit(function (e) {

        e.preventDefault();

        validateAddConsultant();

        let gebruikerNaam = $("[name='naamConsultant']").val();
        console.log(gebruikerNaam);
        let email = $("[name='emailConsultant']").val();
        let wachtwoord = $("[name='wachtwoordConsultant']").val();
        let loon = $("[name='loonConsultant']").val();

        let dataJSON = {
            GebruikerNaam : gebruikerNaam,
            Email : email,
            Wachtwoord : wachtwoord,
            Rol : "consultant",
            BedrijfId : bedrijfId,
            LoonPerUur : loon
        };

        $.ajax({
            type: 'POST',
            url: 'https://mobileapp-planning-services.azurewebsites.net/api/Gebruiker',
            data: JSON.stringify(dataJSON),
            contentType: 'application/json; charset=utf-8',
            dataType: 'json',
            success: function (data) {
                //alert("succesvol");
                //console.log(data);
                location.assign('./consultants.php');
            },
            error: function (data) {
                //alert("Error please try again");
                //console.log(data);
            }
        });
    });

});