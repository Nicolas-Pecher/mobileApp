$(document).ready(function () {

    activePage('managePersoneel');

    let bedrijfId = $('#bedrijfId').val();
    console.log("BedrijfId = " + bedrijfId);

    let titles = ['#', 'Naam', 'Emailadres', 'Rol'];

    //ajax get request om Personeel weer te geven
    $.ajax({
        type: 'GET',
        url: 'http://mobileapp-planning-services.azurewebsites.net/api/gebruikers/GetByCompany/' + bedrijfId,
        success: function (response) {

            data = response;
            displayList(titles, data, 'personeel');

        }
    });

});

