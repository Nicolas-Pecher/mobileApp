activePage('invoices');

let klanten = [];
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
            $('#listKlanten').append(`<li class="list-group-item list-group-item-action" id="${klant.KlantNaam}">${klant.KlantNaam}</li>`);
        });
    }
});


console.log(klanten);

//functie die een eventlistener toevoegt aan de li elements TODO ervoor zorgen dat wanneer user zich vergist de lijst niet groter wordt
document.getElementById("listKlanten").addEventListener("click", function (e) {
    if (e.target && e.target.nodeName == "LI") {
        var geselecteerdeKlant = new Object();
        for (let index = 0; index < klanten.length; index++) {
            if (e.target.id == klanten[index].KlantNaam) {
                geselecteerdeKlant = klanten[index];
            }
        }

        console.log(geselecteerdeKlant.BedrijfId);

        //ajax get request adressen 
        $.ajax({
            type: "get",
            url: `http://mobileapp-planning-services.azurewebsites.net/api/BedrijfAdres/${geselecteerdeKlant.BedrijfId}`,
            success: function (response) {

                console.log(response);
                document.getElementById("Huisnummer").append(response.Huisnummer);
                document.getElementById("straatNaam").append(response.Straatnaam);
                document.getElementById("postcode").append(response.Postcode);
                document.getElementById("gemeente").append(response.Gemeente);
                document.getElementById("land").append(response.Land);
                document.getElementById("btwNummer").append("21");
                rekenNr = "BE68539000000000";
                document.getElementById("rekeningNummer").append(" " + rekenNr);//TODO met ajaxcall get de rekening nummer van bedrijf(klant)
            }
        });

        let projecten = [];
        //ajax get request projecten 
        $.ajax({
            type: "get",
            url: `http://mobileapp-planning-services.azurewebsites.net/api/ProjectVanKlant/${geselecteerdeKlant.KlantId}`,
            success: function (response) {
                console.log(response);
                projecten.push(response);
                response.forEach(project => {
                    document.getElementById("projectNaam").append(project.ProjectNaam);
                });
            }
        });
    }
});

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

//rekeningnummer maken van ONS BEDRIJF
rekNr = "BE68539007547034";
document.getElementById("rekeningNummerOns").append(" " + rekNr);