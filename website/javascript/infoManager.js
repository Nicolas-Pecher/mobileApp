$(document).ready(function () {

    //popup code van https://www.w3schools.com/howto/howto_css_modals.asp hieronder

    // Get the modal
    var modal = document.getElementById('myModal');

    // Get the button that opens the modal
    var btn = document.getElementById("sendMail");

    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];

    // When the user clicks on the button, open the modal 
    btn.onclick = function () {
        modal.style.display = "block";
    }

    // When the user clicks on <span> (x), close the modal
    span.onclick = function () {
        modal.style.display = "none";
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }


    let urenProjecten = new Array();
    let namen = new Array();
    var value = document.getElementById("isHr").value;
    let bedrijfId = $('#bedrijfIdConsultants').val();

    if (value != "hr") {
        document.getElementById("sendMail").addEventListener("click", function () {

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
    }


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

                        namen.push(project.ProjectNaam);

                        $.ajax({
                            type: "get",
                            url: `http://mobileapp-planning-services.azurewebsites.net/api/TotaalUrenPerProject/getbyproject/${project.ProjectId}`,
                            success: function (response) {

                                totalTime = new Date(response);

                                let urenChart = totalTime.getHours().toString().padStart(2, '0');

                                urenProjecten.push(urenChart);

                            },
                            error: function (data) {
                                let geenTotaalTemp = new Date();
                                geenTotaalTemp.setHours(0, 0, 0);

                                geenTotaalTemp = geenTotaalTemp.getHours().toString().padStart(2, '0');

                                urenProjecten.push(geenTotaalTemp);

                            }

                        });

                        console.log("voor de ajax " + project.ProjectId);
                        $.ajax({
                            type: "get",
                            url: `http://mobileapp-planning-services.azurewebsites.net/api/TotaalUrenPerProject/getbyproject/${project.ProjectId}`,
                            success: function (projectEnUur) {

                                console.log(projectEnUur);
                                totalTime = new Date(projectEnUur.TotaalUren);

                                var tijd = parseFloat(totalTime.getHours() + "." + totalTime.getMinutes());

                                //let total = totalTime.getHours() + ":" + totalTime.getMinutes()

                                let row = $('<tr></tr>');

                                $.ajax({
                                    type: "get",
                                    url: `http://mobileapp-planning-services.azurewebsites.net/api/LoonPerProject/${project.ProjectId}`,
                                    success: function (loon) {

                                        var totLoon = 0;
                                        loon.forEach(l => {
                                            totLoon = totLoon + l.Loon;
                                        });

                                        $(row).append(`<td>${projectEnUur.ProjectNaam}</td>`);
                                        $(row).append(`<td>${tijd * totLoon}</td>`);
                                    },
                                    error: function (data) {
                                        console.log(data);
                                        $(row).append(`<td>${""}</td>`);
                                        $(row).append(`<td>${""}</td>`);
                                    }
                                });

                                $('#tabelKosten').append(row);
                            }

                        });

                    });
                }
            });
        }
    });

    function canvas() {
        new Chart(document.getElementById("canvasManager"), {
            type: 'bar',
            data: {
                labels: namen,
                datasets: [
                    {
                        label: "Totaal Uren",
                        backgroundColor: ["#3e95cd", "#8e5ea2", "#3cba9f", "#e8c3b9", "#c45850"],
                        data: urenProjecten
                    }
                ]
            },
            options: {
                legend: { display: false },
                title: {
                    display: true,
                    text: 'Totaal Uren Per Projecten'
                }
            }
        });
    }

    $(document).ajaxComplete(function () {
        canvas();
    });
});