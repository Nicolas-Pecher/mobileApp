$(document).ready(function () {

    console.log("toevoegen consultant");

    let bedrijfId = $('#bedrijfIdAddConsultant').val();
    console.log("BedrijfId = " + bedrijfId);

    // $.ajax({
    //     type: 'GET',
    //     url: 'https://mobileapp-planning-services.azurewebsites.net/api/Project',
    //     success: function (data) {
    //         console.log(data);
    //         let obj = data;
    //         //console.log(obj[0]);
    //         let dropdown = $('#selectProject');
    //         dropdown.empty();
    //         dropdown.append('<option selected="true" disabled>Kies een project</option>');
    //         //dropdown.prop('selectedIndex', 0);
    //
    //         for (let i = 0; i < obj.length; i++) {
    //             console.log(obj[i].ProjectNaam);
    //             dropdown.append($('<option class="projectId"></option>').attr('value', obj[i].ProjectId).text(obj[i].ProjectNaam));
    //             console.log(obj[i].ProjectId);
    //         }
    //     }
    // });
    //
    // let selectedProject = "";
    //
    // //een project selecteren uit het dropdown menu van de form
    // $("#selectProject").change(function () {
    //     selectedProject = $(this).children("option:selected").val();
    //     console.log("You have selected project - " + selectedProject);
    // });

    //toevoegen van een consultant
    $("#formConsultant").submit(function (e) {
        e.preventDefault();

        console.log("test consultant toevoegen");

        let gebruikerNaam = $("[name='naamConsultant']").val();
        let email = $("[name='email']").val();
        let wachtwoord = $("[name='password']").val();

        //let hash = Base64.encode(wachtwoord);

        let dataJSON = {
            GebruikerNaam : gebruikerNaam,
            Email : email,
            Wachtwoord : wachtwoord,
            Rol : "consultant",
            BedrijfId : bedrijfId
        }

        console.log(dataJSON);

        $.ajax({
            type: 'POST',
            url: 'https://mobileapp-planning-services.azurewebsites.net/api/Gebruiker',
            data: JSON.stringify(dataJSON),
            contentType: 'application/json; charset=utf-8',
            dataType: 'json',
            success: function (data) {
                alert("Saved Successfully");
                console.log(data);
                //document.getElementById("formTimeEntry").reset();
            },
            error: function (data) {
                alert("Error please try again");
                console.log(data);
            }
        });
    });

});