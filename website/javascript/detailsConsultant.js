$(document).ready(function () {

    activePage('consultants');

    let consultantId = location.search.substring(1);
    let bedrijfId = $("#bedrijfIdValue").val();

    $.ajax({
        type: 'GET',
        url: 'https://mobileapp-planning-services.azurewebsites.net/api/Gebruiker/' + consultantId,
        success: function (data) {
            //console.log(data);
            $("#naam").attr("value", data.GebruikerNaam).text(data.GebruikerNaam);
            $("#naamTitel").attr("value", data.GebruikerNaam).text(data.GebruikerNaam);
            $("#naamConsultant").attr("value", data.GebruikerNaam).text(data.GebruikerNaam);
            $("#emailConsultant").attr("value", data.Email).text(data.Email);
            $("#loonConsultant").attr("value", data.LoonPerUur).text(data.LoonPerUur);
            $("#password").attr("value", data.Wachtwoord);
        }
    });

    $("#modifyConsultantForm").submit(function (e) {

        e.preventDefault();

        //validate

        let naam = $("[name='naamConsultant']").val();
        let email = $("[name='emailConsultant']").val();
        let loon = $("[name='loonConsultant']").val();
        let wachtwoord = $("[name='wachtwoordConsultant']").val();

        let dataJSON = {
            GebruikerNaam: naam,
            Email: email,
            Wachtwoord: wachtwoord,
            Rol: "consultant",
            BedrijfId: bedrijfId,
            LoonPerUur: loon
        };

        $.ajax({
            type: 'PUT',
            url: 'https://mobileapp-planning-services.azurewebsites.net/api/Gebruiker/' + consultantId,
            data: JSON.stringify(dataJSON),
            contentType: 'application/json; charset=utf-8',
            dataType: 'json',
            success: function (data) {
                //alert("Consultant succesvol gewijzigd");
                //document.getElementById("formTimeEntry").reset();
                //location.assign('./consultants.php');
            },
            error: function (data) {
                //console.log(data);
            }
        });
    });

    $.ajax({
        type:'GET',
        url: 'https://mobileapp-planning-services.azurewebsites.net/api/ProjectVanGebruiker/'+ consultantId,
        success: function (data) {
            //console.log(data);

            let body = $('#huidigeProjecten');

            if(data.length != 0) {

                let number = 1;

                data.forEach(project => {
                    let row = $('<tr></tr>');
                    row.append($('<td></td>').text(number));
                    row.append($('<td></td>').attr('value', project.ProjectNaam).text(project.ProjectNaam));
                    body.append(row);
                    number++;
                });
            } else {
                body.append($('<td class="p-4"></td>').attr('value', "Nog geen projecten").text("Nog geen projecten"));
            }
        }
    });

    let titles = ['#','Project', 'Datum', 'Van', 'Tot', 'Totaal'];
    let data = [];

    $.ajax({
        type: 'GET',
        url: 'https://mobileapp-planning-services.azurewebsites.net/api/ConsultantTimesheets/' + consultantId,
        success: function (response) {
            //console.log(response);

            if(response.length != 0) {
                response.forEach(timesheet => {
                    data.push(timesheet);
                });

                displayList(titles, data, 'timesheets');
            } else {
                let div = $("#timesheetsConsultant");
                div.append($('<p class="p-4"></p>').attr('value', "Nog geen Timesheets").text("Nog geen timesheets"));
            }

        }
    });



});