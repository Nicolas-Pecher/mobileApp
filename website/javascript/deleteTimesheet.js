function deleteTimesheet(id) {

    //console.log('test')
    $.ajax({
        type: 'DELETE',
        url: 'https://mobileapp-planning-services.azurewebsites.net/api/Timesheet/' + id,
        success: function (data) {
            //console.log("delete gelukt");
            //location.assign('./timesheets.php');
        },
        error: function (data) {

        }
    });
}
