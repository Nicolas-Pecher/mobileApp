
console.log("test, zit in timesheets.js");

activePage('timesheets');

$(document).ready(function () {

    var weekday = ["Zondag", "Maandag", "Dinsdag", "Woensdag", "Donderdag", "Vrijdag", "Zaterdag"]


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

    // $.ajax({
    //     type: 'GET',
    //     url: 'https://mobileapp-planning-services.azurewebsites.net/api/Project',
    //     success: function (data) {
    //         //console.log(data);
    //         projecten = data;
    //         //console.log(obj[0]);
    //         console.log(projecten);
    //     }
    // });



    $.ajax({
        type: 'GET',
        url: 'https://mobileapp-planning-services.azurewebsites.net/api/Timesheet',
        success: function (data) {
            //console.log(data);

            let obj = data;
            let divTimesheets = $('#timeEntryDiv');
            let vorigeDatum = '';

            obj.forEach(timeLog => {


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



                var div = ($('<div "></div>'));
                console.log(timeLog)

                if (!(timeLog.Datum.substring(0, 10) == vorigeDatum)) {
                    console.log("same date")
                    div.append($('<h5 class="timesheetDate"></h5>').attr('value', timeLog.Datum).text(datum));
                }



                var contentDiv = $('<div class="d-flex timesheetBody"></div>')
                contentDiv.append($('<p class="align-text-top"></p>').attr('value', timeLog.NaamProject).text(timeLog.NaamProject));
                contentDiv.append($('<p class="align-text-top"></p>').attr('value', timeLog.Beginuur).text(begin));
                contentDiv.append($('<p></p>').attr('value', timeLog.Einduur).text(eind));
                contentDiv.append($('<p></p>').attr('value', werktijd).text(werktijd));

                div.append($(contentDiv))
                div.append($('<hr>'));

                divTimesheets.append(div);

                //datum klaar maken voor volgende loop
                vorigeDatum = timeLog.Datum.substring(0, 10)
            });

        }
    });
});



