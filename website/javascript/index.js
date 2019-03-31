$(document).ready(function () {
    console.log("in de index, yeeeey");

    let bedrijfId = $('#bedrijfIdTimeEntry').val();
    console.log("BedrijfId = " + bedrijfId);

    $.ajax({
        type : 'get',
        url : 'https://mobileapp-planning-services.azurewebsites.net/api/TotaalUrenConsultant/1',
        success: function (data) {
            console.log(data);
        }
    });
});