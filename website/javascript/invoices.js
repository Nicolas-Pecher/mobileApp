activePage('invoices');

//ajax get request om klanten(bedrijven) weer te geven in eerste drop down
$.ajax({
    type: "get",
    url: "http://mobileapp-planning-services.azurewebsites.net/api/Bedrijf",
    success: function (data) {

        data.forEach(klant => {
            $('#klantFactuur').append(`<option>${klant.Naam}</option>`);
        });
    }
});

//ajax get request om consultants weer te geven in tweede drop down
$.ajax({
    type: "get",
    url: "http://mobileapp-planning-services.azurewebsites.net/api/Gebruiker",
    success: function (data) {
        
        data.forEach(gebruiker => {
            if (gebruiker.Rol === "consultant") {
                $('#consultantFactuur').append(`<option>${gebruiker.Naam}</option>`);
            }
        });
    }
});