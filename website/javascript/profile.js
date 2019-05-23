$(document).ready(function () {

    let bedrijfId = $('#bedrijfIdValue').val();
    let gebruikerId = $("#gebruikerIdValue").val();

    $.ajax({
        type: 'GET',
        url: 'https://mobileapp-planning-services.azurewebsites.net/api/Bedrijf/' + bedrijfId,
        success: function (data) {

            //console.log(data);

            let bedrijfNaam = $('#bedrijfNaamProfile');
            bedrijfNaam.attr('value', data.BedrijfNaam).text(data.BedrijfNaam);

        }
    });

    $("#wijzigenProfielForm").submit(function (e) {
        e.preventDefault();

        validateModifyProfile();

        let naam = $("[name='naam']").val();
        let email = $("[name='email']").val();
        let rol = $("[name='roll']").val();

        let dataJSON = {
            GebruikerNaam: naam,
            Email: email,
            Wachtwoord: "",
            Rol: rol,
            BedrijfId: bedrijfId
        };

        $.ajax({
            type: 'PUT',
            url: 'https://mobileapp-planning-services.azurewebsites.net/api/Gebruiker/' + gebruikerId,
            data: JSON.stringify(dataJSON),
            contentType: 'application/json; charset=utf-8',
            dataType: 'json',
            success: function (data) {
                //console.log("Updated Successfully : " + data);
                alert("Gegevens succesvol gewijzigd!");
            },
            error: function (data) {
                //console.log(data);
            }
        });
    });

});