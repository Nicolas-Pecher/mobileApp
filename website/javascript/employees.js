$(document).ready(function () {

    activePage('employees');

    let bedrijfId = $('#bedrijfIdValue').val();

    let titles = ['#', 'Naam', 'Emailadres', 'Rol'];
    let data = [];

    //ajax get request om Personeel weer te geven
    $.ajax({
        type: 'GET',
        url: 'http://mobileapp-planning-services.azurewebsites.net/api/gebruikers/GetByCompany/' + bedrijfId,
        success: function (response) {

            response.forEach(user => {
                if(user.Rol != "consultant") {
                    data.push(user);
                }
            });

            displayList(titles, data, 'employees');
        }
    });
});

