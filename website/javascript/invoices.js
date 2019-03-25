activePage('invoices');

let bedrijven = [];
let consultanten = [];
let number = 0;

//ajax get request om klanten(bedrijven) weer te geven in eerste drop down
$.ajax({
    type: "get",
    url: "http://mobileapp-planning-services.azurewebsites.net/api/Bedrijf",
    success: function (data) {

        data.forEach(klant => {
            number = number + 1;
            bedrijven.push(klant);
            $('#listKlanten').append(`<li class="list-group-item list-group-item-action" id="${klant.BedrijfNaam}">${klant.BedrijfNaam}</li>`);
            //$('#klantFactuur').append(`<option id="selectKlant${number}">${klant.Naam}</option>`);
        });
    }
});

//functie die een eventlistener toevoegt aan de option elements TODO ervoor zorgen dat wanneer user zich vergist de lijst niet groter wordt
document.getElementById("listKlanten").addEventListener("click", function (e) {
    if (e.target && e.target.nodeName == "LI") {
        var geselecteerdeBedrijf = new Object();
        for (let index = 0; index < bedrijven.length; index++) {
            if (e.target.id == bedrijven[index].Naam) {
                geselecteerdeBedrijf = bedrijven[index];
            }
        }
        console.log(geselecteerdeBedrijf);
        document.getElementById("straatnummer").append("straatnummer van " + e.target.id + " ");
        document.getElementById("straatnaam").append("straatnaam van " + e.target.id + " ");
        document.getElementById("postcode").append("postcode van " + e.target.id + " ");
        document.getElementById("gemeente").append("gemeente van " + e.target.id + " ");
        document.getElementById("land").append("land van " + e.target.id + " ");
        document.getElementById("btwNummer").append(" "+ geselecteerdeBedrijf.BtwNummer);
        rekenNr = "BE68539000000000";
        document.getElementById("rekeningNummer").append(" " + rekenNr);//TODO met ajaxcall get de rekening nummer van bedrijf(klant)
    }
});

//ajax get request om consultants weer te geven in tweede drop down
$.ajax({
    type: "get",
    url: "http://mobileapp-planning-services.azurewebsites.net/api/Gebruiker",
    success: function (data) {

        data.forEach(gebruiker => {
            if (gebruiker.Rol === "consultant") {
                consultanten.push(gebruiker);
                $('#listConsultanten').append(`<li class="list-group-item list-group-item-action" id="${gebruiker.GebruikerNaam}">${gebruiker.GebruikerNaam}</li>`);
            }
        });
    }
});

console.log(bedrijven);
console.log(consultanten);
//eventlistener toevoegen aan consultant optie
document.getElementById("listConsultanten").addEventListener("click", function (e) {
    if (e.target && e.target.nodeName == "LI") {
        document.getElementById("naamConsultant").append(e.target.id);
    }
});

//datum van verstuur maken (nu)
var vandaag = new Date();
var dd = String(vandaag.getDate()).padStart(2, '0');
var mm = String(vandaag.getMonth() + 1).padStart(2, '0');
var yyyy = vandaag.getFullYear();

vandaag = ' ' + dd + '/' + mm + '/' + yyyy;

document.getElementById("datumVerstuur").append(vandaag);

//uiterste datum maken TODO if schrijven als volgend maand januari is
var uitersteDatum = new Date();
var dag = String(uitersteDatum.getDate()).padStart(2, '0');
var maand = String(uitersteDatum.getMonth() + 2).padStart(2, '0');
var jaar = uitersteDatum.getFullYear();

uitersteDatum = ' ' + dag + '/' + maand + '/' + jaar;

document.getElementById("uitersteDatum").append(uitersteDatum);

//rekeningnummer maken van ONS BEDRIJF
rekNr = "BE68539007547034";
document.getElementById("rekeningNummerOns").append(" " + rekNr);