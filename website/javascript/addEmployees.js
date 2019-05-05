$(document).ready(function () {

    activePage('managePersoneel');

    $("form").submit(function (e) {
        e.preventDefault();

        var data = {};
        var a = $(this).serializeArray();
        $.each(a, function () {
            if (data[this.name]) {
                if (!data[this.name].push) {
                    data[this.name] = [data[this.name]];
                }
                data[this.name].push(this.value || '');
            } else {
                data[this.name] = this.value || '';
            }
        });

        console.log(data);

        $.ajax({
            type: 'POST',
            url: 'https://mobileapp-planning-services.azurewebsites.net/api/Gebruiker',
            data: JSON.stringify(data),
            contentType: 'application/json; charset=utf-8',
            dataType: 'json',
            success: function (data) {
                //alert("Saved Successfully");
                console.log(data);
                location.assign("./managePersoneel.php");
            },
            error: function (data) {

                console.log(data);
            }
        });
    })


});
