$(document).ready(function () {

    activePage('customers');

    //bedrijf id ophalen
    let bedrijfId = $("#bedrijfIdValue").val();

    //toevoegen van een nieuwe klant en een nieuw adres
    $("#formCustomer").submit(function (e) {
       
        e.preventDefault();

        //inputvelden valideren
        validateAddCustomer();

        //ingevulde adres gegevens ophalen en in variabelen steken
        let straat = $("[name='straat']").val();
        let huisnummer = $("[name='huisnummer']").val();
        let postcode = $("[name='postcode']").val();
        let gemeente = $("[name='gemeente']").val();
        let land = $("[name='land']").val();

        //data in array steken voor ajax post request
        let dataJSONAdres = {
            Straatnaam: straat,
            Huisnummer: huisnummer,
            Postcode: postcode,
            Gemeente: gemeente,
            Land: land
        };

        //adres in de database toevoegen via ajax
        $.ajax({
            type: 'POST', 
            url: 'https://mobileapp-planning-services.azurewebsites.net/api/Adres',
            data: JSON.stringify(dataJSONAdres),
            contentType: 'application/json; charset=utf-8',
            dataType: 'json',
            success: function (data) {
                //console.log(data);

                //ajax call om alle adressen op te halen
                $.ajax({
                    type: 'GET',
                    url: 'https://mobileapp-planning-services.azurewebsites.net/api/Adres',
                    success: function (data) {

                        let adresId = data[data.length-1].AdresId;

                        //ingevulde klant gegevens ophalen en in variabelen steken
                        let klantNaam = $("[name='naamKlant']").val();
                        let btwNummer = $("[name='btwKlant']").val();
                        let iban = $("[name='ibanKlant']").val();

                        // data in array steken voor ajax post request
                        let dataJSONKlant = {
                            KlantNaam: klantNaam,
                            BedrijfId: bedrijfId,
                            AdresId: adresId,
                            BtwNummer: btwNummer,
                            RekeningNummer: iban
                        };

                        //klant in de database toevoegen via ajax
                        $.ajax({
                            type: 'POST',
                            url: 'https://mobileapp-planning-services.azurewebsites.net/api/Klant',
                            data: JSON.stringify(dataJSONKlant),
                            contentType: 'application/json; charset=utf-8',
                            dataType: 'json',
                            success: function (data) {
                                //console.log(data);
                                location.assign('./customers.php');
                            },
                            error: function (data) {
                                //console.log(data);
                            }
                        });
                    }
                });

            },
            error: function (data) {
                //console.log(data);
            }
        });


        
    });



});