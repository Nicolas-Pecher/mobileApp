activePage('invoices');

let klanten = [];
let bedrijven = [];
//let adresGeselecteerdeBedrijf = [];
let number = 0;
let bedrijfId = $('#bedrijfIdInvoices').val();

//ajax get request om klanten weer te geven in eerste drop down
$.ajax({
    type: "get",
    url: `http://mobileapp-planning-services.azurewebsites.net/api/KlantenVanBedrijf/${bedrijfId}`,
    success: function (data) {
        data.forEach(klant => {
            klanten.push(klant);
            $('#listKlanten').append(`<option id="${klant.KlantNaam}" class="dropdown-item" >${klant.KlantNaam}</option>`);
        });
        //get bedrijf
        $.ajax({
            type: "get",
            url: `http://mobileapp-planning-services.azurewebsites.net/api/Bedrijf/${bedrijfId}`,
            success: function (bedrijf) {
                $('#listBedrijven').append(`<li class="list-group-item list-group-item-action" id="${bedrijf.BedrijfNaam}">${bedrijf.BedrijfNaam}</li>`);
                $('#naamBedrijf').append(bedrijf.BedrijfNaam)
                $.ajax({
                    type: "get",
                    url: `http://mobileapp-planning-services.azurewebsites.net/api/BedrijfAdres/${bedrijfId}`,
                    success: function (response) {
                        $('#adresBedrijf').append(response.Gemeente + " ");
                        var d = "<br>"
                        $('#adresBedrijf').append(response.Huisnummer + d);
                        $('#adresBedrijf').append(response.Straatnaam + " ");
                        $('#adresBedrijf').append(response.Postcode + d);
                        $('#adresBedrijf').append(response.Land + " ");
                    }
                });
            }
        });
    }
});

//functie die een eventlistener toevoegt aan de li elements TODO ervoor zorgen dat wanneer user zich vergist de lijst niet groter wordt
document.getElementById("listKlanten").addEventListener("click", function (e) {
    if (e.target && e.target.nodeName == "OPTION") {
        var geselecteerdeKlant = new Object();
        for (let index = 0; index < klanten.length; index++) {
            if (e.target.id == klanten[index].KlantNaam) {
                geselecteerdeKlant = klanten[index];
                $("#btwNummer").text(" " + geselecteerdeKlant.BtwNummer);
                $("#rekeningNummer").text(" " + geselecteerdeKlant.RekeningNummer);
            }
        }

        //ajax get request adressen 
        $.ajax({
            type: "get",
            url: `http://mobileapp-planning-services.azurewebsites.net/api/KlantAdres/${geselecteerdeKlant.BedrijfId}`,
            success: function (response) {
                $("#Huisnummer").text(response.Huisnummer);
                $("#straatNaam").text(response.Straatnaam);
                $("#postcode").text(response.Postcode);
                $("#gemeente").text(response.Gemeente);
                $("#land").text(response.Land);
            }
        });

        //ajax get request projecten 
        $.ajax({
            type: "get",
            url: `http://mobileapp-planning-services.azurewebsites.net/api/ProjectVanKlant/${geselecteerdeKlant.KlantId}`,
            success: function (response) {
            
                $('#inhoud').empty();
                response.forEach(element => {
                    $.ajax({
                        type: "get",
                        url: `http://mobileapp-planning-services.azurewebsites.net/api/TotaalUrenPerProject/getbyproject/${element.ProjectId}`,
                        success: function (time) {
                            totalTime = new Date(time);

                            let total = totalTime.getHours() + ":" + totalTime.getMinutes()
                           
                            let row = $('<tr></tr>');
                            $(row).append(`<td>${element.ProjectNaam}</td>`);
                            $(row).append(`<td>${""}</td>`);
                            $(row).append(`<td>${total}</td>`);
                            $(row).append(`<td>${""}</td>`);
                            $('#inhoud').append(row);

                            //ajax voor totaal loon van consultanten
                            /* in die ajax call komt die code dan
                            
                            let row1 = $('<tr></tr>');
                            $(row).append(`<td>${element.ProjectNaam}</td>`);
                            $(row).append(`<td>${""}</td>`);
                            $(row).append(`<td>${"Subtotaal"}</td>`);
                            $(row).append(`<td>${""}</td>`);

                            let row2 = $('<tr></tr>');
                            $(row).append(`<td>${element.ProjectNaam}</td>`);
                            $(row).append(`<td>${""}</td>`);
                            $(row).append(`<td>${"Bedrag excl. BTW"}</td>`);
                            $(row).append(`<td>${""}</td>`);

                            let row3 = $('<tr></tr>');
                            $(row).append(`<td>${element.ProjectNaam}</td>`);
                            $(row).append(`<td>${""}</td>`);
                            $(row).append(`<td>${"Totaal"}</td>`);
                            $(row).append(`<td>${""}</td>`);

                            $('#inhoud').append(row1);
                            $('#inhoud').append(row2);
                            $('#inhoud').append(row3);
                            */
                            
                        }
                    });
                });
            }
        });




    }
}); //einde add eventlistener click


function getTotaalUren(id) {

}



//datum van verstuur maken (vandaag)
var vandaag = new Date();
var dd = String(vandaag.getDate()).padStart(2, '0');
var mm = String(vandaag.getMonth() + 1).padStart(2, '0');
var yyyy = vandaag.getFullYear();

vandaag = ' ' + dd + '/' + mm + '/' + yyyy;

document.getElementById("datumVerstuur").append(vandaag);

//uiterste datum maken TODO if schrijven als volgend maand januari is (dan verandert jaar)
var uitersteDatum = new Date();
var dag = String(uitersteDatum.getDate()).padStart(2, '0');
var maand = String(uitersteDatum.getMonth() + 2).padStart(2, '0');
var jaar = uitersteDatum.getFullYear();

uitersteDatum = ' ' + dag + '/' + maand + '/' + jaar;

document.getElementById("uitersteDatum").append(uitersteDatum);

//rekeningnummer maken van ONS BEDRIJF todo get van database
rekNr = "BE68539007547034";
document.getElementById("rekeningNummerOns").append(" " + rekNr);