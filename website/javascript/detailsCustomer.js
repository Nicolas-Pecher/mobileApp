$(document).ready(function () {

    let klantId = location.search.substring(1);
    console.log("KlantId = " + klantId);

    let bedrijfId = $("#bedrijfIdValue").val();
    console.log("BedrijfId = " + bedrijfId);

    $.ajax({
        type: 'GET',
        url: 'https://mobileapp-planning-services.azurewebsites.net/api/Klant/' + klantId,
        success: function (data) {
            console.log(data);

            let naam = $('.klantNaam');

            naam.attr('value', data.KlantNaam).text(data.KlantNaam);

        }
    });


    $.ajax({
        type: 'GET',
        url: 'https://mobileapp-planning-services.azurewebsites.net/api/ProjectVanKlant/' + klantId,
        success: function (data) {
            console.log(data);

            let body = $('#projectsCustomer');

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

    $.ajax({
        type: 'GET',
        url: 'https://mobileapp-planning-services.azurewebsites.net/api/Klant/' + klantId,
        success: function (data) {
            console.log(data);

            $("[name='name']").val(data.KlantNaam);
            $("[name='btwnummer']").val(data.BtwNummer);
            $("[name='rekeningnummer']").val(data.RekeningNummer);
            $("[name='adresId']").val(data.AdresId);

            let adresId = data.AdresId;

            $.ajax({
                type: 'GET',
                url: 'https://mobileapp-planning-services.azurewebsites.net/api/Adres/' + adresId,
                success: function (data) {
                    console.log(data);

                    $("[name='straat']").val(data.Straatnaam);
                    $("[name='huisnummer']").val(data.Huisnummer);
                    $("[name='postcode']").val(data.Postcode);
                    $("[name='gemeente']").val(data.Gemeente);
                    $("[name='land']").val(data.Land);

                }
            });

        }
    });

    $("#modifyCustomerForm").submit(function (e) {
        e.preventDefault();

        //klantid staat bovenaan
        let klantnaam = $("[name='name']").val();
        //bedrijfid staat bovenaan
        let adresId = $("[name='adresId']").val();
        let btwNummer = $("[name='btwnummer']").val();
        let rekeningNummer = $("[name='rekeningnummer']").val();

        let dataJSON = {
            KlantId: klantId,
            KlantNaam: klantnaam,
            BedrijfId: bedrijfId,
            AdresId: adresId,
            BtwNummer: btwNummer,
            RekeningNummer: rekeningNummer
        };

        $.ajax({
            type: 'PUT',
            url: 'https://mobileapp-planning-services.azurewebsites.net/api/Klant/' + klantId,
            data: JSON.stringify(dataJSON),
            contentType: 'application/json; charset=utf-8',
            dataType: 'json',
            success: function (data) {
                //alert("Saved Successfully");
                console.log("Updated Successfully : " + data);
                //document.getElementById("formTimeEntry").reset();
                //location.assign('./detailsConsultant.php?' + gebruikerId);
            },
            error: function (data) {
                alert("Error please try again");
                console.log(data);
            }
        });

        //adresid staat hierboven
        let straatnaam = $("[name='straat']").val();
        let huisnummer = $("[name='huisnummer']").val();
        let postcode = $("[name='postcode']").val();
        let gemeente = $("[name='gemeente']").val();
        let land = $("[name='land']").val();

        let dataJSONAdres = {
            AdresId: adresId,
            Straatnaam: straatnaam,
            Huisnummer: huisnummer,
            Postcode: postcode,
            Gemeente: gemeente,
            Land: land
        };

        $.ajax({
            type: 'PUT',
            url: 'https://mobileapp-planning-services.azurewebsites.net/api/Adres/' + adresId,
            data: JSON.stringify(dataJSONAdres),
            contentType: 'application/json; charset=utf-8',
            dataType: 'json',
            success: function (data) {
                //alert("Saved Successfully");
                console.log("Updated Successfully : " + data);
                //document.getElementById("formTimeEntry").reset();
                //location.assign('./detailsConsultant.php?' + gebruikerId);
            },
            error: function (data) {
                alert("Error please try again");
                console.log(data);
            }
        });

    });

});