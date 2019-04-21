$(document).ready(function () {

    console.log("in detailsConsultant.js");

    activePage('consultants');

    //let consultantId = $('#consultantId').val();

    //console.log(con)

    let consultantId = location.search.substring(1);
    console.log(consultantId);

    $.ajax({
        type: 'GET',
        url: 'https://mobileapp-planning-services.azurewebsites.net/api/Gebruiker/' + consultantId,
        success: function (data) {
            console.log(data);

            let naam = $('.consultantNaam');

            naam.attr('value', data.GebruikerNaam).text(data.GebruikerNaam);

        }
    });

    $.ajax({
        type:'GET',
        url: 'https://mobileapp-planning-services.azurewebsites.net/api/ProjectVanGebruiker/'+ consultantId,
        success: function (data) {
            console.log(data);

            let body = $('#huidigeProjecten');



            if(data.length != 0) {
                data.forEach(project => {
                    let row = $('<tr></tr>');
                    row.append($('<td></td>').attr('value', project.ProjectNaam).text(project.ProjectNaam));
                    body.append(row);
                });
            } else {
                body.append($('<td class="p-4"></td>').attr('value', "Geen data").text("Geen data"));
            }


        }
    });

    let titles = ['#','Project', 'Datum', 'Van', 'Tot', 'Totaal'];
    let data = [];

    $.ajax({
       type: 'GET',
       url: 'https://mobileapp-planning-services.azurewebsites.net/api/ConsultantTimesheets/' + consultantId,
        success: function (response) {
            console.log(response);

            if(response.length != 0) {
                response.forEach(timesheet => {
                    data.push(timesheet);
                });

                displayList(titles, data, 'timesheets');
            } else {
                let div = $("#timesheetsConsultant");
                div.append($('<p class="p-4"></p>').attr('value', "Geen data").text("Geen data"));
            }


        }
    });

});