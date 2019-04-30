$(document).ready(function () {

    let id = $("#gebruikerIdTimeEntry").val();
    console.log("GebruikerId = " + id);

    //voor actief list-item in sidebar
    activePage('timesheets');

    // ophalen projecten en weergeven in dropdown van form
    $.ajax({
        type: 'GET',
        url: 'https://mobileapp-planning-services.azurewebsites.net/api/ProjectVanGebruiker/' + id,
        success: function (data) {
            console.log(data);

            let dropdown = $('#selectProject');
            data.forEach(project => {
                let option = $('<option class="projectId"></option>').attr('value', project.ProjectId).text(project.ProjectNaam);
                dropdown.append(option);
            });

            //een project selecteren uit het dropdown menu van de form
            //om te checken of overuren mogelijk zijn

            $("#selectProject").change(function () {
                //overuren checkbox zichtbaar maken
                $('.overuren').css('display', 'block')

                //het id van het geselecteerde project opslagen
                let projectId = $(this).children("option:selected").val();
                console.log("You have selected project - " + projectId);

                //het project vinden en nakijken of overuren mogelijk zijn
                data.forEach(project => {
                    if (project.ProjectId == projectId && (!project.Overuren)) {
                        //console.log(project.Overuren)
                        $('.overuren').css('display', 'none')
                    }
                })
            });
        }
    });


    //toevoegen van een timeEntry
    $("#formTimeEntry").submit(function (e) {
        e.preventDefault();

        console.log($("[name='project']").val())
        console.log("test");

        let gebruikerId = id;
        let projectId = $("[name='project']").val()
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