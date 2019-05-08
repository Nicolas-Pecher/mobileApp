$(document).ready(function () {

    let querystring = location.search.substring(1);

    let ids = querystring.split("&");
    let timesheetId = ids[0];
    let gebruikerId = ids[1];

    $.ajax({
        type: 'GET',
        url: 'https://mobileapp-planning-services.azurewebsites.net/api/ProjectVanGebruiker/' + gebruikerId,
        success: function (data) {
            //console.log(data);

            let dropdown = $('#selectProject');
            dropdown.empty();
            dropdown.append('<option selected="true" disabled>Kies een project</option>');
            //dropdown.prop('selectedIndex', 0);

            for (let i = 0; i < data.length; i++) {
                console.log(data[i].ProjectNaam);
                dropdown.append($('<option class="projectId"></option>').attr('value', data[i].ProjectId).text(data[i].ProjectNaam));
                console.log(data[i].ProjectId);
            }
        }
    });

    $.ajax({
       type: 'GET',
       url: 'https://mobileapp-planning-services.azurewebsites.net/api/Timesheet/' + timesheetId,
       success: function (data) {
           //console.log(data);

           let date = new Date(data.Datum);
           $('#datum').val(date.getFullYear() + '-' + ('0' + (date.getMonth() + 1)).slice(-2) + '-' + ('0' + date.getDate()).slice(-2));

           let project = $("#selectProject").val(data.ProjectId);

           let beginuur = new Date(data.Beginuur);
           $('#beginuur').val(('0' + beginuur.getHours()).slice(-2) + ':' + ('0' + beginuur.getMinutes()).slice(-2));

           let einduur = new Date(data.Einduur);
           $('#einduur').val(('0' + einduur.getHours()).slice(-2) + ':' + ('0' + einduur.getMinutes()).slice(-2));

           let opmerking = $("#opmerking").val(data.Opmerking);

           let overuur = $("#overuren").prop('checked', data.Overuur);

       }
    });

    $("#wijzigTimesheetForm").submit(function (e) {
        e.preventDefault();

        validateAddTimeEntry();

        let gebruikerIdForm = gebruikerId;
        let projectId = $("#selectProject").val();
        let datum = $("#datum").val();
        let beginuur = $("#beginuur").val();
        let einduur = $("#einduur").val();
        let opmerking = $("#opmerking").val();
        let overuren = $("#overuren").prop('checked');

        let dataJSON = {
            GebruikerId: gebruikerIdForm,
            ProjectId: projectId,
            Datum: datum,
            Beginuur: beginuur,
            Einduur: einduur,
            Opmerking: opmerking,
            Overuur: overuren
        };

        $.ajax({
            type: 'PUT',
            url: 'https://mobileapp-planning-services.azurewebsites.net/api/Timesheet/' + timesheetId,
            data: JSON.stringify(dataJSON),
            contentType: 'application/json; charset=utf-8',
            dataType: 'json',
            success: function (data) {
                //console.log("Updated Successfully : " + data);
                history.back();
            },
            error: function (data) {
                //console.log(data);
            }
        });
    });

});