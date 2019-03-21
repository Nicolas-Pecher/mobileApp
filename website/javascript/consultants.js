activePage('consultants');

let titles = ['Naam', 'Emailadres', 'Gewerkte uren', 'Overuren'];
let data = [];

//ajax get request om consultants weer te geven
$.ajax({
    type: "get",
    url: "http://mobileapp-planning-services.azurewebsites.net/api/Gebruiker",
    success: function (response) {
        
        response.forEach(gebruiker => {
            if (gebruiker.Rol === "consultant") {
                data.push(gebruiker);
            }
        });
        
        displayList(titles, data, 'consultants');
    }
});