$(document).ready(function () {

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

                console.log(timeLog.ProjectNaam);

                //datum formaat aanpassen naar dd-mm-YYYY
                let date = new Date(timeLog.Datum);
                datum = weekday[date.getDay()] + ', ' + date.getDate().toString().padStart(2, '0') + ' ' + month[date.getMonth()] + ' ' + date.getFullYear();

                //beginuur formaat aanpassen naar hh:mm:ss
                let beginuur = new Date(timeLog.Beginuur);
                let begin = beginuur.getHours().toString().padStart(2, '0') + ':' + beginuur.getMinutes().toString().padStart(2, '0') + ':' + beginuur.getSeconds().toString().padStart(2, '0');

                //einduur formaat aanpassen naar hh:mm:ss
                let einduur = new Date(timeLog.Einduur);
                let eind = einduur.getHours().toString().padStart(2, '0') + ':' + einduur.getMinutes().toString().padStart(2, '0') + ':' + einduur.getSeconds().toString().padStart(2, '0');

                //gewerkte tijd
                let werktijd = ((einduur.getHours() - beginuur.getHours()).toString().padStart(2, '0')) + ':' + ((einduur.getMinutes() - beginuur.getMinutes()).toString().padStart(2, '0')) + ':' + ((einduur.getSeconds() - beginuur.getSeconds()).toString().padStart(2, '0'));

                let div = ($('<div "></div>'));
                console.log(timeLog);

                if (!(timeLog.Datum.substring(0, 10) == vorigeDatum)) {
                    console.log("same date");
                    div.append($('<h5 class="timesheetDate"></h5>').attr('value', timeLog.Datum).text(datum));
                }

                let contentDiv = $('<div class="d-flex timesheetBody row border-bottom border-top"></div>');
                contentDiv.append($('<p class="align-text-top col-3"></p>').attr('value', timeLog.ProjectNaam).text(timeLog.ProjectNaam));
                contentDiv.append($('<p class="align-text-top col-2"></p>').attr('value', timeLog.Beginuur).text(begin));
                contentDiv.append($('<p class="col-2"></p>').attr('value', timeLog.Einduur).text(eind));
                contentDiv.append($('<p class="col-2"></p>').attr('value', werktijd).text(werktijd));

                div.append($(contentDiv));

                divTimesheets.append(div);

                //datum klaar maken voor volgende loop
                vorigeDatum = timeLog.Datum.substring(0, 10);
            });

        }
    });
});



