$(document).ready(function () {

    let id = $("#bedrijfIdAddProject").val();
    console.log("BedrijfId = " + id);

    console.log("toevoegen project");

    $.ajax({
        type: 'GET',
        url: 'https://mobileapp-planning-services.azurewebsites.net/api/KlantenVanBedrijf/1',
        success: function (data) {
            console.log(data);
            let obj = data;
            //console.log(obj[0]);
            let dropdown = $('#selectKlant');
            dropdown.empty();
            dropdown.append('<option selected="true" disabled>Kies een klant</option>');
            //dropdown.prop('selectedIndex', 0);

            for ( let i = 0; i < obj.length; i++ ) {
                console.log(obj[i].KlantNaam);
                dropdown.append($('<option class="klantId"></option>').attr('value', obj[i].KlantId).text(obj[i].KlantNaam));
                console.log(obj[i].Id);
            }
        }
    });

    let selectedKlant = "";

    //een project selecteren uit het dropdown menu van de form
    $("#selectKlant").change(function () {
        selectedKlant = $(this).children("option:selected").val();
        console.log("You have selected project - " + selectedKlant);
    });

    //toevoegen van een project
    $("#formProject").submit(function (e) {
        e.preventDefault();

        console.log("test project toevoegen");

        let klantId = selectedKlant; //$("[name='klantId']").val();
        let naam = $("[name='naamProject']").val();
        let overurenCheck = $("[name='overuren']").val();

        let overuren;

        if(overurenCheck == "on") {
            overuren = true;
        } else {
            overuren = false;
        }

        console.log(overuren);

        let dataJSON = {
            KlantId: klantId,
            ProjectNaam: naam,
            Overuren: overuren
        }

        console.log(dataJSON);
        console.log(klantId);

        $.ajax({
            type: 'POST',
            url: 'https://mobileapp-planning-services.azurewebsites.net/api/Project',
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