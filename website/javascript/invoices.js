activePage('invoices');

let bedrijven = [];
let consultanten = [];

//ajax get request om klanten(bedrijven) weer te geven in eerste drop down
$.ajax({
    type: "get",
    url: "http://mobileapp-planning-services.azurewebsites.net/api/Bedrijf",
    success: function (data) {

        data.forEach(klant => {
            bedrijven.push(klant);
            $('#klantFactuur').append(`<option class="selectKlant">${klant.Naam}</option>`);
        });
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
                $('#consultantFactuur').append(`<option>${gebruiker.Naam}</option>`);
            }
        });
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

//door de klant te selecteren worden zijn gegevens automatisch ingevuld
document.getElementsByClassName("selectKlant").addEventListener("click", function(){
    
    console.log(this);
    var geselecteerdeBedrijf = new Object();
    bedrijven.forEach(bedrijf => {
        if (bedrijf.Naam == this ) {
            geselecteerdeBedrijf.Naam = bedrijf.Naam;
        }
    });
    document.getElementById("naamBedrijf").append(geselecteerdeBedrijf.Naam);
    document.getElementById("straatnummer").append();
    document.getElementById("straatnaam").append();
    document.getElementById("postcode").append();
    document.getElementById("gemeente").append();
    document.getElementById("land").append();
});

//rekeningnummer maken van het klant(bedrijf)
rekenNr = "BE685390000000000";
document.getElementById("rekeningNummer").append(" " + rekenNr);//TODO met ajaxcall get de rekening nummer van bedrijf(klant)