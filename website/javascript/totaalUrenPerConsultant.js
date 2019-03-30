$(document).ready(function () {

    let gebruikerId = $("#gebruikerIdTimeEntry").val();
    let bedrijfId = $("#bedrijfIdTimeEntry").val();

    console.log("GebruikerId = " + gebruikerId);
    console.log("BedrijfId = " + bedrijfId);

    $.ajax({
        type: 'GET',
        url: 'https://mobileapp-planning-services.azurewebsites.net/api/TotaalUrenConsultant/' + bedrijfId,
        success: function (data) {

            console.log(data);
            let obj = data;
            let pTotaal = $("#totaalUren");

            obj.forEach(consultant => {

                console.log(consultant.GebruikerId);

                while(consultant.GebruikerId == gebruikerId) {
                    let totaalTemp = new Date(consultant.TotaalUren);
                    let totaal = totaalTemp.getHours().toString().padStart(2, '0') + ':' + totaalTemp.getMinutes().toString().padStart(2, '0') + ':' + totaalTemp.getSeconds().toString().padStart(2, '0');
                    console.log(totaal);

                    pTotaal.append($('<strong>Totaal:</strong>'));
                    pTotaal.attr('value', consultant.TotaalUren).text(totaal);
                }
            });
        }
    });
});