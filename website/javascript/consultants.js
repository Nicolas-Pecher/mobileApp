$(document).ready(function () {

    activePage('consultants');

    let bedrijfId = $('#bedrijfIdConsultants').val();
    console.log("BedrijfId = " + bedrijfId);

    let titles = ['#', 'Naam', 'Emailadres'];
    let data = [];

    //ajax get request om consultants weer te geven
    $.ajax({
        type: 'GET',
        url: 'http://mobileapp-planning-services.azurewebsites.net/api/OverzichtConsultants/' + bedrijfId,
        success: function (response) {

            //console.log(response);

            response.forEach(consultant => {
                data.push(consultant);
            });

            displayList(titles, data, 'consultants');
        }
    });

});

