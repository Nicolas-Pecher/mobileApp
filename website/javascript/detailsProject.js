$(document).ready(function () {

    activePage("projects");

    let projectId = location.search.substring(1);

    let bedrijfId = $("#bedrijfIdValue").val();

    //ophalen mogelijke klanten voor project en deze in dropdown steken
    $.ajax({
        type: 'GET',
        url: 'https://mobileapp-planning-services.azurewebsites.net/api/KlantenVanBedrijf/' + bedrijfId,
        success: function (dataKlant) {
            //console.log(dataKlant);

            let dropdown = $('#selectKlant');
            dropdown.empty();

            dataKlant.forEach(klant => {
                dropdown.append($('<option class="klantId"></option>').attr('value', klant.KlantId).text(klant.KlantNaam));
            });
        }
    });

    //data van project ophalen en weergeven in form
    $.ajax({
        type: 'GET',
        url: 'https://mobileapp-planning-services.azurewebsites.net/api/Project/' + projectId,
        success: function (data) {
            //console.log(data);

            $(".naam").attr("value", data.ProjectNaam).text(data.ProjectNaam);
            $("#naamProject").attr("value", data.ProjectNaam).text(data.ProjectNaam);
            $("#selectKlant").val(data.KlantId);
            $("#overuren").prop('checked', data.Overuren);
        }
    });

    //wijzigen van projectgegevens
    $("#modifyProjectForm").submit(function (e) {

        e.preventDefault();

        //Validate

        let naamProject = $("#naamProject").val();
        let klantProject = $("#selectKlant").val();
        let overurenProject = $("#overuren").prop('checked');

        $.ajax({
            type: 'GET',
            url: 'https://mobileapp-planning-services.azurewebsites.net/api/Klant/' + klantProject,
            success: function (data) {
                //console.log(dataKlant);

                let klantNaam = data.KlantNaam;

                let dataJSON = {
                    KlantId: klantProject,
                    KlantNaam: klantNaam,
                    ProjectNaam: naamProject,
                    Overuren: overurenProject
                };

                $.ajax({
                    type: 'PUT',
                    url: 'https://mobileapp-planning-services.azurewebsites.net/api/Project/' + projectId,
                    data: JSON.stringify(dataJSON),
                    contentType: 'application/json; charset=utf-8',
                    dataType: 'json',
                    success: function (data) {
                        //console.log("Updated Successfully : " + data);
                        alert("Project succesvol gewijzigd!");
                    },
                    error: function (data) {
                        //console.log(data);
                    }
                });
            }
        });
    });

    //weergeven teamleden project in tabel
    $.ajax({
        type: 'GET',
        url: 'https://mobileapp-planning-services.azurewebsites.net/api/GebruikerProject/' + projectId,
        success: function (response) {
            //console.log(response);

            let body = $('#huidigeConsultants');


            let number = 1;

            if(response.length != 0) {
                response.forEach(project => {
                    if(project.ProjectId == projectId){
                        let row = $('<tr></tr>');
                        row.append($('<td></td>').attr('value', project.GebruikerId).text(number));
                        row.append($('<td></td>').attr('value', project.GebruikerNaam).text(project.GebruikerNaam));
                        //row.append($('<button class="btn btn-sm btn-outline-secondary ml-1" role="button" id="deleteConsultant"><i class="fas fa-trash-alt"></i></button>'));
                        body.append(row);
                        number++;
                    }
                });

            } else {
                body.append($('<p class="p-4"></p>').attr('value', "Geen data").text("Nog geen data"));
            }
        },
        error: function (data) {
            let body = $('#huidigeConsultants');
            let row = $('<tr></tr>');

            row.append($('<p class="p-4"></p>').attr('value', "Geen data").text("Geen data"));
        }
    });

    //opvullen dropdown onder teamleden tabel
    $.ajax({
        type: 'GET',
        url: 'https://mobileapp-planning-services.azurewebsites.net/api/OverzichtConsultants/' + bedrijfId,
        success: function (data) {
            let dropdown = $('#selectConsultant');
            dropdown.empty();

            data.forEach(consultant => {
                dropdown.append($('<option class="consultantId"></option>').attr('value', consultant.GebruikerId).text(consultant.GebruikerNaam));
            });
        }
    });

    //toevoegen van een consultant aan een project
    $("#addConsultantToProjectForm").submit(function (e) {

        e.preventDefault();

        let idConsultant = $("#selectConsultant").val();

        let dataJSON = {
            GebruikerId: idConsultant,
            ProjectId: projectId
        };

        $.ajax({
            type: 'POST',
            url: 'https://mobileapp-planning-services.azurewebsites.net/api/GebruikerProject',
            data: JSON.stringify(dataJSON),
            contentType: 'application/json; charset=utf-8',
            dataType: 'json',
            success: function (data) {
                //console.log(data);
                location.reload();
            },
            error: function (data) {
                //console.log(data);
            }
        });
    });

});
