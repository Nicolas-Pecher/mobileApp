$(document).ready(function () {
    //var table = document.getElementById("tabelConsultants");

    let bedrijfId = $('#bedrijfIdConsultants').val();

    document.getElementById("sendMail").addEventListener("click", function(){
        $.ajax({
            type: "get",
            url: 'http://mobileapp-planning-services.azurewebsites.net/api/OverzichtConsultants/' + bedrijfId,
            success: function (response) {
                let mails = [];
                console.log(response);
                response.forEach(element => {
                    mails.push(element.Email);
                });

                $.ajax({
                    type: "post",
                    url: "./pages/components/sendMail",
                    data: mails,
                    dataType: "dataType",
                    success: function (response) {
                        console.log(response);
                    }
                });
            }
        });
      });

    $.ajax({
        type: "get",
        url: 'http://mobileapp-planning-services.azurewebsites.net/api/OverzichtConsultants/' + bedrijfId,
        success: function (consultants) {

            consultants.forEach(consultant => {

                var row = $('<tr></tr>');

                $(row).append(`<td>${consultant.GebruikerNaam}</td>`);

                $.ajax({
                    type: "get",
                    url: `http://mobileapp-planning-services.azurewebsites.net/api/TotaalUrenConsultant/${consultant.GebruikerId}`,
                    success: function (totUren) {
                        let totaalUren = new Date(totUren.TotaalUren);
                        let gewerkteUren = totaalUren.getHours().toString().padStart(2, '0') + ':' + totaalUren.getMinutes().toString().padStart(2, '0') + ':' + totaalUren.getSeconds().toString().padStart(2, '0');

                        $(row).append(`<td>${gewerkteUren}</td>`);

                        $.ajax({
                            type: "method",
                            url: `http://mobileapp-planning-services.azurewebsites.net/api/TotaalOverurenConsultant/${consultant.GebruikerId}`,
                            success: function (overuren) {
                                overuren.forEach(overuur => {
                                    $(row).append(`<td>${gewerkteUren}</td>`);
                                });
                            }
                        });
                    },
                    error: function (data) {
                        let geenTotaalTemp = new Date();
                        geenTotaalTemp.setHours(0, 0, 0);

                        let geenTotaal;
                        geenTotaal = geenTotaalTemp.getHours().toString().padStart(2, '0') + ':' + geenTotaalTemp.getMinutes().toString().padStart(2, '0') + ':' + geenTotaalTemp.getSeconds().toString().padStart(2, '0');

                        $(row).append(`<td>${geenTotaal}</td>`);
                        $(row).append(`<td>${geenTotaal}</td>`);
                    }
                });

                $('#tabelConsultants').append(row);
            });

            $.ajax({
                type: "get",
                url: "http://mobileapp-planning-services.azurewebsites.net/api/ProjectenVanBedrijf/" + bedrijfId,
                success: function (response) {

                    response.forEach(project => {
                        var row = $('<tr></tr>');
                        $(row).append(`<td>${project.ProjectNaam}</td>`);

                        $.ajax({
                            type: "get",
                            url: `http://mobileapp-planning-services.azurewebsites.net/api/TotaalUrenPerProject/getbyproject/${project.ProjectId}`,
                            success: function (response) {
                                console.log(response);
                                totalTime = new Date(response.TotaalUren);
                                let total = totalTime.getHours().toString().padStart(2, '0') + ':' + totalTime.getMinutes().toString().padStart(2, '0') + ':' + totalTime.getSeconds().toString().padStart(2, '0');
                                $(row).append(`<td>${total}</td>`);
                                canvas(1);
                            },
                            error: function (data) {
                                let geenTotaalTemp = new Date();
                                geenTotaalTemp.setHours(0, 0, 0);

                                let geenTotaal;
                                geenTotaal = geenTotaalTemp.getHours().toString().padStart(2, '0') + ':' + geenTotaalTemp.getMinutes().toString().padStart(2, '0') + ':' + geenTotaalTemp.getSeconds().toString().padStart(2, '0');

                                $(row).append(`<td>${geenTotaal}</td>`);
                            }

                        });
                        $('#tabelProjecten').append(row);
                    });
                }
            });

        }
    });
});

function canvas(ProjectId) {
    console.log("test " + ProjectId);
    let ctx = document.getElementById('canvasManager');

    $.ajax({
        type: 'GET',
        url: `http://mobileapp-planning-services.azurewebsites.net/api/TotaalUrenPerProject/getbyproject/${ProjectId}`,
        success: function (projecten) {

            console.log(projecten);

            let values = new Array();
            let names = new Array();

            projecten.forEach(project => {

                let uren = new Date(project.TotaalUren);
                let urenChart = uren.getHours().toString().padStart(2, '0');

                values.push(urenChart);

                names.push(project.ProjectNaam);
            });

            let options = {
                scales: {
                    xAxes: [{
                        barPercentage: 0.5,
                        barThickness: 6,
                        maxBarThickness: 8,
                        minBarLength: 2,
                        gridLines: {
                            offsetGridLines: true
                        }
                    }]
                }
            };

            var mixedChart = new Chart(ctx, {
                type: 'bar',
                data: {
                    datasets: [{
                        data: values,
                        label: 'Totaal Uren'
                    }],
                    labels: names
                },
                options: options
            });

            var myChart = new Chart(ctx, {
                type: 'bar',
                data: mixedChart,
                options: options
            });

        },
        error: function (data) {

        }

    });
}