console.log("joehoeeeee");

$(document).ready(function () {

    let gebruikerId = $('#gebruikerIdTimeEntry').val();

    console.log("GebruikerId = " + gebruikerId);

    //get request voor totaal gewerkte uren van de ingelogde consultant
    $.ajax({
        type: 'GET',
        url: 'https://mobileapp-planning-services.azurewebsites.net/api/TotaalUrenConsultant/' + gebruikerId,
        success: function (data) {

            console.log(data);

            let obj = data;
            let pTotaal = $('#totaalUren');

            let totaal = new Date(obj.TotaalUren);
            let totaalUren = totaal.getHours().toString().padStart(2, '0') + ':' + totaal.getMinutes().toString().padStart(2, '0') + ':' + totaal.getSeconds().toString().padStart(2, '0');

            pTotaal.attr('value', obj.TotaalUren).text(totaalUren);

        }
    });

});