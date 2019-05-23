$(document).ready(function () {

    activePage('employees');

    let bedrijfId = $("#bedrijfIdValue").val();

    //toevoegen employee
    $("#addEmployeeForm").submit(function (e) {

        e.preventDefault();

        validateAddEmployee();

        let gebruikerNaam = $("[name='naamEmployee']").val();
        let email = $("[name='emailEmployee']").val();
        let wachtwoord = $("[name='wachtwoordEmployee']").val();
        let loon = $("[name='loonEmployee']").val();
        let rol = $("[name='selectEmployeeRol']").val();

        let dataJSON = {
            GebruikerNaam : gebruikerNaam,
            Email : email,
            Wachtwoord : wachtwoord,
            Rol : rol,
            BedrijfId : bedrijfId,
            LoonPerUur : loon
        };

        $.ajax({
            type: 'POST',
            url: 'https://mobileapp-planning-services.azurewebsites.net/api/Gebruiker',
            data: JSON.stringify(dataJSON),
            contentType: 'application/json; charset=utf-8',
            dataType: 'json',
            success: function (data) {
                //alert("succesvol");
                //console.log(data);
                location.assign('./employees.php');
            },
            error: function (data) {
                alert("Error please try again");
                //console.log(data);
            }
        });
    })


});
