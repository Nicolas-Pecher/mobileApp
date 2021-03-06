$(document).ready(function () {

    let gebruikerId = $('#gebruikerIdValue').val();

    //voor overuren totaal op dashboard consultant
    let overurenCard = $('#overuren');

    $.ajax({
        type : 'get',
        url : 'https://mobileapp-planning-services.azurewebsites.net/api/TotaalOverurenConsultant/' + gebruikerId,
        success: function (data) {
            //console.log(data);

            let totaalOveruren = new Date(data.TotaalUren);
            let overuren = totaalOveruren.getHours().toString().padStart(2, '0') + ':' + totaalOveruren.getMinutes().toString().padStart(2, '0') + ':' + totaalOveruren.getSeconds().toString().padStart(2, '0');

            overurenCard.attr('value', data.TotaalUren).text(overuren);

        },
        error : function () {
            let geenTotaalTemp = new Date();
            geenTotaalTemp.setHours(0,0,0);

            let geenTotaal;
            geenTotaal = geenTotaalTemp.getHours().toString().padStart(2, '0') + ':' + geenTotaalTemp.getMinutes().toString().padStart(2, '0') + ':' + geenTotaalTemp.getSeconds().toString().padStart(2, '0');

            overurenCard.attr('value', geenTotaal).text(geenTotaal);
        }
    });

    //voor projecten van de consultant op dashboard
//
//       <div class="row align-items-center">
//         <div class="col-auto">
//              <h6 class="card-title mb-1">Project Mobile Apps</h6>
//              <p class="card-text small text-muted">Delaware</p>
//         </div>
//       </div>
//       <hr>
    
    $.ajax({
        type: 'GET',
        url: 'https://mobileapp-planning-services.azurewebsites.net/api/ProjectVanGebruiker/' + gebruikerId,
        success: function (data) {
            //console.log(data);

            let cardBody = $('#projectenConsultantDiv');

            data.forEach(project => {

                let contentDiv = $('<div class="card-body" id="projectenCardBody"></div>');
                contentDiv.append($('<h6 class="card-title"></h6>').attr('value', project.ProjectNaam).text(project.ProjectNaam));
                contentDiv.append($('<p class="card-text small text-muted"></p>').attr('value', project.KlantNaam).text(project.KlantNaam));
                cardBody.append(contentDiv);

            });
        }
    });

    //opvullen donut chart op dashboard consultant
    let ctx = document.getElementById('myChart');

    $.ajax({
        type : 'GET',
        url : 'https://mobileapp-planning-services.azurewebsites.net/api/TotaalUrenPerProject/' + gebruikerId,
        success: function (data) {
            //console.log(data);

            let values = new Array();
            let names = new Array();

            data.forEach(project => {

                let uren = new Date(project.TotaalUren);
                let urenChart = uren.getHours().toString().padStart(2, '0');

                values.push(urenChart);

                names.push(project.ProjectNaam);
            });

            let dataDonut = {
                datasets: [{
                    data: values,
                    backgroundColor: [
                        'rgba(153, 102, 255, 0.3)',
                        'rgba(75, 192, 192, 0.3)',
                        'rgba(255, 99, 132, 0.3)',
                        'rgba(255, 206, 86, 0.3)',
                        'rgba(255, 159, 64, 0.3)',
                        'rgba(54, 162, 235, 0.3)'
                    ],
                    borderColor: [
                        'rgba(153, 102, 255, 0.3)',
                        'rgba(75, 192, 192, 0.3)',
                        'rgba(255, 99, 132, 0.3)',
                        'rgba(255, 206, 86, 0.3)',
                        'rgba(255, 159, 64, 0.3)',
                        'rgba(54, 162, 235, 0.3)'
                    ],
                    borderWidth: 0
                }],
                labels: names,
            };

            let myDoughnutChart = new Chart(ctx, {
                type: 'doughnut',
                data: dataDonut,
                options: {

                }
            });
        },
        error: function (data) {

        }
        
    });

    //tabel laatste timesheets
    $.ajax({
        type: 'GET',
        url: 'https://mobileapp-planning-services.azurewebsites.net/api/LaatsteTimesheets/' + gebruikerId,
        success: function (data) {
            //console.log(data);

            let table = $('#laatsteTimesheetsTable');

            data.forEach(timesheet => {

                let dateTemp = new Date(timesheet.Datum);
                let date = dateTemp.getDate().toString().padStart(2, '0') + '/' + dateTemp.getMonth().toString().padStart(2, '0') + '/' + dateTemp.getFullYear();

                let verschilTemp = new Date(timesheet.VerschilUren);
                let verschil = verschilTemp.getHours().toString().padStart(2, '0') + ':' + verschilTemp.getMinutes().toString().padStart(2, '0') + ':' + verschilTemp.getSeconds().toString().padStart(2, '0');

                let tr = $('<tr></tr>');
                tr.append($('<td></td>').attr('value', timesheet.Datum).text(date));
                tr.append($('<td></td>').attr('value', timesheet.ProjectId).text(timesheet.ProjectNaam));
                tr.append($('<td></td>').attr('value', timesheet.VerschilUren).text(verschil));
                table.append(tr);
            });
        }
    });

});