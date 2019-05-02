$(document).ready(function () {




});

function deleteTimeEntry(timesheetId) {

    console.log("in delete functie");

    $.ajax({
        type: 'DELETE',
        url: 'https://mobileapp-planning-services.azurewebsites.net/api/Timesheet/' + timesheetId,
        success: function (data) {
            console.log(data);
        }
    });
}