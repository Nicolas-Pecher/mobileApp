$(document).ready(function () {

    activePage('managePersoneel');

    let bedrijfId = $('#bedrijfId').val();
    console.log("BedrijfId = " + bedrijfId);

    let titles = ['#', 'Naam', 'Emailadres'];

    //ajax get request om Personeel weer te geven
    $.ajax({
        type: 'GET',
        url: 'http://mobileapp-planning-services.azurewebsites.net/api/OverzichtConsultants/' + bedrijfId,
        success: function (response) {

            data = response;
            displayList(titles, data, 'consultants');

        }
    });

});

