activePage('invoices');

let bedrijven = [];
//let adresGeselecteerdeBedrijf = [];
let number = 0;
let bedrijfId = $('#bedrijfIdInvoices').val();

//ajax get request om klanten(bedrijven) weer te geven in eerste drop down
$.ajax({
    type: "get",
    url: `http://mobileapp-planning-services.azurewebsites.net/api/KlantenVanBedrijf/${bedrijfId}`,
    success: function (data) {
        data.forEach(klant => {
            bedrijven.push(klant);
            $('#listKlanten').append(`<li class="list-group-item list-group-item-action" id="${klant.KlantNaam}">${klant.KlantNaam}</li>`);
        });
    }
});


console.log(bedrijven);

//functie die een eventlistener toevoegt aan de li elements TODO ervoor zorgen dat wanneer user zich vergist de lijst niet groter wordt
document.getElementById("listKlanten").addEventListener("click", function (e) {
    if (e.target && e.target.nodeName == "LI") {
        var geselecteerdeBedrijf = new Object();
        for (let index = 0; index < bedrijven.length; index++) {
            if (e.target.id == bedrijven[index].KlantNaam) {
                geselecteerdeBedrijf = bedrijven[index];
            }
        }

        console.log(geselecteerdeBedrijf.BedrijfId);

        //ajax get request adressen 
        $.ajax({
            type: "get",
            url: `http://mobileapp-planning-services.azurewebsites.net/api/BedrijfAdres/${geselecteerdeBedrijf.BedrijfId}`,
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
            url: `http://mobileapp-planning-services.azurewebsites.net/api/ProjectVanKlant/${geselecteerdeBedrijf.KlantId}`,
            success: function (response) {
                console.log(response);
                projecten.push(response);
                response.forEach(project => {
                    document.getElementById("projectNaam").append(project.ProjectNaam);
                });
            }
        });

        //This is a post
        var dataJSON = {
            "BedrijfId": geselecteerdeBedrijf.BedrijfId,
            "ProjectId": geselecteerdeBedrijf.BedrijfId
        }

        //var dataJSON = "this comes from the ajax call";

        $.ajax({
            type: 'POST',
            url: 'https://mobileapp-planning-services.azurewebsites.net/api/TotaalUrenConsultant',
            data: JSON.stringify(dataJSON),
            contentType: 'application/json; charset=utf-8',
            dataType: 'json',
            success: function (data) {
                console.log(data);
            },
            error: function (data) {
                console.log(data);
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