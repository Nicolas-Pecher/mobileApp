$(document).ready(function () {

    let gebruikerId = $('#gebruikerIdValue').val();
    //console.log("GebruikerId = " + gebruikerId);

    activePage('timesheets');

    let weekday = ["Zondag", "Maandag", "Dinsdag", "Woensdag", "Donderdag", "Vrijdag", "Zaterdag"];

    let month = new Array();
    month[0] = "Januari";
    month[1] = "Februari";
    month[2] = "Maart";
    month[3] = "April";
    month[4] = "Mei";
    month[5] = "Juni";
    month[6] = "Juli";
    month[7] = "Augustus";
    month[8] = "September";
    month[9] = "Oktober";
    month[10] = "November";
    month[11] = "December";

    $.ajax({
        type: 'GET',
        url: 'https://mobileapp-planning-services.azurewebsites.net/api/ConsultantTimesheets/' + gebruikerId,
        success: function (data) {

            //console.log(data);

            let obj = data;
            let divTimesheets = $('#timeEntryDiv');
            let vorigeDatum = '';

            obj.forEach(timeLog => {

               // console.log(timeLog.ProjectNaam);

                //datum formaat aanpassen naar dd-mm-YYYY
                let date = new Date(timeLog.Datum);
                let datum = weekday[date.getDay()] + ', ' + date.getDate().toString().padStart(2, '0') + ' ' + month[date.getMonth()] + ' ' + date.getFullYear();

                //beginuur formaat aanpassen naar hh:mm:ss
                let beginuur = new Date(timeLog.Beginuur);
                let begin = beginuur.getHours().toString().padStart(2, '0') + ':' + beginuur.getMinutes().toString().padStart(2, '0');

                //einduur formaat aanpassen naar hh:mm:ss
                let einduur = new Date(timeLog.Einduur);
                let eind = einduur.getHours().toString().padStart(2, '0') + ':' + einduur.getMinutes().toString().padStart(2, '0');

                //gewerkte tijd
                let verschilTijd = new Date(timeLog.VerschilUren);
                let werktijd = verschilTijd.getHours().toString().padStart(2, '0') + ':' + verschilTijd.getMinutes().toString().padStart(2, '0') + ':' + verschilTijd.getSeconds().toString().padStart(2, '0');

                let div = ($('<div></div>'));

                if (!(timeLog.Datum.substring(0, 10) == vorigeDatum)) {
                  //  console.log("same date");
                    div.append($('<h5 class="timesheetDate border-top pt-3"></h5>').attr('value', timeLog.Datum).text(datum));
                }

                let contentDiv = $('<div class="d-flex timesheetBody row px-0"></div>');
                //let urenDiv = $('<div class="d-flex col-3"></div>');
                contentDiv.append($('<input id="timeEntryId" style="display: none;"/>').attr('value', timeLog.TimesheetId).text(timeLog.TimesheetId));
                //console.log($('#timeEntryId').val());
                contentDiv.append($('<p class="col-5"></p>').attr('value', timeLog.ProjectNaam).text(timeLog.ProjectNaam));
                contentDiv.append($('<p class="col-1"></p>').attr('value', timeLog.Beginuur).text(begin));
                contentDiv.append($('<p class="mr-2"></p>').text('-'));
                contentDiv.append($('<p class="col-1"></p>').attr('value', timeLog.Einduur).text(eind));
                //contentDiv.append(urenDiv);
                contentDiv.append($('<p class="col-2  ml-auto"></p>').attr('value', timeLog.VerschilUren).text(werktijd));

                let currentdate = new Date();
                let currentMonth = (currentdate.getMonth() + 1).toString().padStart(2, '0');
                let datumMonth = (date.getMonth() + 1).toString().padStart(2, '0');
                //console.log(currentMonth);

                if(datumMonth === currentMonth) {
                    let p = $('<p class="col-2"></p>');
                    let modify = $(`<a href="modifyTimesheet.php?${timeLog.TimesheetId}&${timeLog.GebruikerId}" class="btn btn-sm btn-outline-secondary" role="button" id=""><i class="fas fa-pen"></i></a>`);
                    let remove = $('<button class="btn btn-sm btn-outline-secondary ml-1" role="button" id=""><i class="fas fa-trash-alt"></i></button>');
                    $(p).append(modify);
                    $(p).append(remove);
                    $(contentDiv).append(p);

                    //adding event to remove
                    $(remove).click(function() {
                        console.log(timeLog.TimesheetId);
                        deleteTimesheet(timeLog.TimesheetId);
                        $(contentDiv).remove();
                    });

                } else {
                    $(contentDiv).append(`<p class="col-2"></p>`);
                }

                div.append($(contentDiv));

                divTimesheets.append(div);

                //datum klaar maken voor volgende loop
                vorigeDatum = timeLog.Datum.substring(0, 10);
            });
        }

    });

});



