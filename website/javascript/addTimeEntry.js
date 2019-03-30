$(document).ready(function () {

    console.log("timeentry javascript");

    //voor actief list-item in sidebar
    activePage('timesheets');

    // ophalen projecten en weergeven in dropdown van form
    $.ajax({
        type: 'GET',
        url: 'https://mobileapp-planning-services.azurewebsites.net/api/Project',
        success: function (data) {
            console.log(data);
            let obj = data;
            //console.log(obj[0]);
            let dropdown = $('#selectProject');
            dropdown.empty();
            dropdown.append('<option selected="true" disabled>Kies een project</option>');
            //dropdown.prop('selectedIndex', 0);

            for (let i = 0; i < obj.length; i++) {
                console.log(obj[i].ProjectNaam);
                dropdown.append($('<option class="projectId"></option>').attr('value', obj[i].ProjectId).text(obj[i].ProjectNaam));
                console.log(obj[i].ProjectId);
            }
        }
    });

    let selectedProject = "";

    //een project selecteren uit het dropdown menu van de form
    $("#selectProject").change(function () {
        selectedProject = $(this).children("option:selected").val();
        console.log("You have selected project - " + selectedProject);
    });

    let id = $("#gebruikerIdTimeEntry").val();
    console.log(id);

    //toevoegen van een timeEntry
    $("#formTimeEntry").submit(function (e) {
        e.preventDefault();

        console.log("test");

        let gebruikerId = id;
        let projectId = selectedProject; //$("[name='projectId']").val();
        let datum = $("[name='datum']").val();
        let beginuur = $("[name='beginuur']").val();
        let einduur = $("[name='einduur']").val();
        let opmerking = $("[name='opmerking']").val();

        console.log(projectId);

        let dataJSON = {
            GebruikerId: gebruikerId,
            ProjectId: projectId,
            Datum: datum,
            Beginuur: beginuur,
            Einduur: einduur,
            Opmerking: opmerking,
            Overuur: false
        };

        console.log(dataJSON);
        console.log(projectId);

        $.ajax({
            type: 'POST',
            url: 'https://mobileapp-planning-services.azurewebsites.net/api/Timesheet',
            data: JSON.stringify(dataJSON),
            contentType: 'application/json; charset=utf-8',
            dataType: 'json',
            success: function (data) {
                alert("Saved Successfully");
                console.log(data);
                document.getElementById("formTimeEntry").reset();
            },
            error: function (data) {
                alert("Error please try again");
                console.log(data);
            }
        });
    });
});