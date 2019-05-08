$(document).ready(function () {

    let gebruikerId = $('#gebruikerIdValue').val();
    //console.log("GebruikerId = " + gebruikerId);

    let gewerkteUrenCard = $('#gewerkteUren');

    $.ajax({
        type : 'get',
        url : 'https://mobileapp-planning-services.azurewebsites.net/api/TotaalUrenConsultant/' + gebruikerId,
        success: function (data) {

            //console.log(data);

            let totaalUren = new Date(data.TotaalUren);
            let gewerkteUren = totaalUren.getHours().toString().padStart(2, '0') + ':' + totaalUren.getMinutes().toString().padStart(2, '0') + ':' + totaalUren.getSeconds().toString().padStart(2, '0');

            gewerkteUrenCard.attr('value', data.TotaalUren).text(gewerkteUren);

        },
        error : function (data) {
            let geenTotaalTemp = new Date();
            geenTotaalTemp.setHours(0,0,0);

            let geenTotaal;
            geenTotaal = geenTotaalTemp.getHours().toString().padStart(2, '0') + ':' + geenTotaalTemp.getMinutes().toString().padStart(2, '0') + ':' + geenTotaalTemp.getSeconds().toString().padStart(2, '0');

            gewerkteUrenCard.attr('value', geenTotaal).text(geenTotaal);
        }
    });

});