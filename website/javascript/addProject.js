$(document).ready(function () {

    activePage("projects");

    let bedrijfId = $("#bedrijfIdValue").val();

    //dropdown opvullen met klanten
    $.ajax({
        type: 'GET',
        url: 'https://mobileapp-planning-services.azurewebsites.net/api/KlantenVanBedrijf/' + bedrijfId,
        success: function (data) {
            //console.log(data);

            let dropdown = $('#selectKlant');

            dropdown.empty();
            dropdown.append('<option selected="true" disabled>Kies een klant</option>');

            data.forEach(klant => {
                dropdown.append($('<option class="klantId"></option>').attr('value', klant.KlantId).text(klant.KlantNaam));
            });
        }
    });

    //toevoegen van een project
    $("#formProject").submit(function (e) {

        e.preventDefault();

        //validation
        validateAddProject();

        //ophalen data inputfields om door te sturen
        let klantId = $("#selectKlant").val();
        let naam = $("[name='naamProject']").val();
        let overuren = $("[name='overuren']").prop('checked');

        let dataJSON = {
            KlantId: klantId,
            ProjectNaam: naam,
            Overuren: overuren
        };

        $.ajax({
            type: 'POST',
            url: 'https://mobileapp-planning-services.azurewebsites.net/api/Project',
            data: JSON.stringify(dataJSON),
            contentType: 'application/json; charset=utf-8',
            dataType: 'json',
            success: function (data) {
                console.log(data);
                location.assign('./projects.php');
            },
            error: function (data) {
                console.log(data);
            }
        });
    });

});