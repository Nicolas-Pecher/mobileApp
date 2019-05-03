$(document).ready(function () {

    activePage('consultants');

    let bedrijfId = $('#bedrijfIdConsultants').val();
    console.log("BedrijfId = " + bedrijfId);

    let titles = ['#', 'Naam', 'Emailadres'];
    let data = [];

    //ajax get request om consultants weer te geven
    $.ajax({
        type: 'GET',
        url: 'http://mobileapp-planning-services.azurewebsites.net/api/OverzichtConsultants/' + bedrijfId,
        success: function (response) {

            //console.log(response);

            response.forEach(consultant => {
                data.push(consultant);
            });

            displayList(titles, data, 'consultants');

            function isHetEindeVanMaand(vandaag, eindeMaand) {
                if (vandaag === eindeMaand) {
                    console.log("true");
                } else {
                    data.forEach(consultant => {
                        console.log(consultant);
                        var addresses = consultant.Email;
                        var body = "Heeft u uw timesheets ingevuld?"
                        var subject = "Timesheets"
                        var href = "mailto:" + addresses + "?"
                            + "subject=" + subject + "&"
                            + "body=" + body;
                        var wndMail;
                        wndMail = window.open(href, "scrollbars=yes,resizable=yes,width=10,height=10");
                    });
                }
            }
        
            var nu = new Date();
            eindeMaand = new Date(nu.getFullYear(), nu.getMonth() + 1, 0);
        
            var dd = String(nu.getDate()).padStart(2, '0');
            var mm = String(nu.getMonth() + 1).padStart(2, '0');
        
            var vandaag = dd + "/" + mm;
        
            var dag = String(eindeMaand.getDate()).padStart(2, '0');
            var maand = String(eindeMaand.getMonth() + 1).padStart(2, '0');
        
            var einde = dag + "/" + maand;
        
            isHetEindeVanMaand(vandaag, einde);

        }
    });

});

