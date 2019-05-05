$(document).ready(function () {

    let bedrijfId = $('#bedrijfIdProfile').val();
    console.log("BedrijfId = " + bedrijfId);

    $.ajax({
        type: 'GET',
        url: 'https://mobileapp-planning-services.azurewebsites.net/api/Bedrijf/' + bedrijfId,
        success: function (data) {

            console.log(data);

            let bedrijfNaam = $('#bedrijfNaamProfile');
            bedrijfNaam.attr('value', data.BedrijfNaam).text(data.BedrijfNaam);

        }
    });

});