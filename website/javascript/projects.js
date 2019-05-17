$(document).ready(function () {

    activePage('projects');

    let bedrijfId = $('#bedrijfIdValue').val();

    let titles = ['#', 'Naam', 'Klant', 'Overuren Toegestaan'];
    let data = [];

//ajax get request om projecten weer te geven
    $.ajax({
        type: "get",
        url: "http://mobileapp-planning-services.azurewebsites.net/api/ProjectenVanBedrijf/" + bedrijfId,
        success: function (response) {
          
        console.log(response);

            response.forEach(project => {
                data.push(project);
            });


            displayList(titles, data, 'projects');
        }
    });

});