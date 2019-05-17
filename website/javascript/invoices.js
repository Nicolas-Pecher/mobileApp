activePage('invoices');

let klanten = [];
//let adresGeselecteerdeBedrijf = [];
let number = 0;
let bedrijfId = $('#bedrijfIdInvoices').val();
var totalen = [];

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
                $('#naamBedrijf').append(bedrijf.BedrijfNaam);
                $('#rekeningNummerOns').append(bedrijf.RekeningNummer);
                $('#btwNummerOns').append(bedrijf.BtwNummer);
                $.ajax({
                    type: "get",
                    url: `http://mobileapp-planning-services.azurewebsites.net/api/BedrijfAdres/${bedrijfId}`,
                    success: function (response) {

                        let d = "<br>";

                        $('#adresBedrijf').append(response.Straatnaam + " ");
                        $('#adresBedrijf').append(response.Huisnummer + d);
                        $('#adresBedrijf').append(response.Postcode + " ");
                        $('#adresBedrijf').append(response.Gemeente + " ");
                        $('#adresBedrijf').append(response.Land + " ");
                    }
                });
            }
        });
    }
});

//functie die een eventlistener toevoegt aan de option elements TODO ervoor zorgen dat wanneer user zich vergist de lijst niet groter wordt
document.getElementById("listKlanten").addEventListener("change", function (e) {

    var geselecteerdeKlant = new Object();
    for (let index = 0; index < klanten.length; index++) {

        if (e.target.value == klanten[index].KlantNaam) {
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
            $("#huisnummer").text(response.Huisnummer);
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

                        var tijd = parseFloat(totalTime.getHours() + "." + totalTime.getMinutes());

                        let total = totalTime.getHours() + ":" + totalTime.getMinutes()

                        let row = $('<tr></tr>');

                        $.ajax({
                            type: "get",
                            url: `http://mobileapp-planning-services.azurewebsites.net/api/LoonPerProject/${element.ProjectId}`,
                            success: function (loon) {

                                var totLoon = 0;
                                loon.forEach(l => {
                                    totLoon = totLoon + l.Loon;
                                });
                                subtotaal = (totLoon * tijd).toFixed(2);
                                $(row).append(`<td>${element.ProjectNaam}</td>`);
                                $(row).append(`<td>${totLoon}</td>`);
                                $(row).append(`<td>${total}</td>`);
                                $(row).append(`<td>${subtotaal}</td>`);
                                totalen.push(parseFloat(subtotaal));
                            }
                        });

                        $('#inhoud').append(row);
                    }
                });
            });
        }
    });

}); //einde add eventlistener click

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

function maakSom() {
    var som = 0.0;
    totalen.forEach(totaal => {
        som += totaal;
    });
    return som.toFixed(2);
}

$(document).ajaxStop(function () {
    maakTabel();
});

function maakTabel() {
    var som = maakSom();
    console.log(som);

    $('.verwijder').remove();

    var somExlBtw = som * 0.21;
    parseFloat(somExlBtw);
    var xclBtw = somExlBtw.toFixed(2);
    parseFloat(xclBtw);

    var result = parseFloat(som) + parseFloat(xclBtw);
    //alert(result.toFixed(2));
    var finalTotal = result.toFixed(2);

    let row1 = $('<tr class="verwijder"></tr>');
    $(row1).append(`<td>${""}</td>`);
    $(row1).append(`<td>${""}</td>`);
    $(row1).append(`<td>${"Subtotaal"}</td>`);
    $(row1).append(`<td>${som}</td>`);


    let row2 = $('<tr class="verwijder"></tr>');
    $(row2).append(`<td>${""}</td>`);
    $(row2).append(`<td>${""}</td>`);
    $(row2).append(`<td>${"BTW bedrag"}</td>`);
    $(row2).append(`<td>${xclBtw}</td>`);

    let row3 = $('<tr class="verwijder"></tr>');
    $(row3).append(`<td>${""}</td>`);
    $(row3).append(`<td>${""}</td>`);
    $(row3).append(`<td>${"Totaal"}</td>`);
    $(row3).append(`<td>${finalTotal}</td>`);

    $('#inhoud').after(row3);
    $('#inhoud').after(row2);
    $('#inhoud').after(row1);
}

