$(document).ready(function () {

    activePage('klanten');

    let bedrijfId = $('#bedrijfIdValue').val();

    let titles = ['#', 'Naam', 'Btw-nummer', 'IBAN'];
    let data = [];

    //alle klanten ophalen uit database en weergeven in een tabel
    $.ajax({
       type: 'GET',
       url: 'https://mobileapp-planning-services.azurewebsites.net/api/KlantenVanBedrijf/' + bedrijfId,
       success: function (response) {
           console.log(response);

           response.forEach(klant => {
                data.push(klant);
           });

           displayList(titles, data, "customers");
       }
    });

});