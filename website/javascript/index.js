$(document).ready(function () {
    console.log("in de index, yeeeey");

    let gebruikerId = $('#gebruikerIdDashboard').val();
    console.log("GebruikerId = " + gebruikerId);

    $.ajax({
        type : 'get',
        url : 'https://mobileapp-planning-services.azurewebsites.net/api/TotaalUrenConsultant/' + gebruikerId,
        success: function (data) {

            console.log(data);

            let totaalUren = new Date(data.TotaalUren);
            let gewerkteUren = totaalUren.getHours().toString().padStart(2, '0') + ':' + totaalUren.getMinutes().toString().padStart(2, '0') + ':' + totaalUren.getSeconds().toString().padStart(2, '0');

            let gewerkteUrenCard = $('#gewerkteUrenDashboard');
            gewerkteUrenCard.attr('value', data.TotaalUren).text(gewerkteUren);
        }
    });
});