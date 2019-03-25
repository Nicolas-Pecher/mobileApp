activePage('consultants');

let titles = ['Naam', 'Emailadres', 'Gewerkte uren', 'Overuren'];
let data = [];
let timesheetsConsultanten = [];

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

/*
//ajax get request om timesheets van consultants weer te geven
consultanten.forEach(element => {
    console.log(element);
});
consultanten.forEach(consultant => {
    $.ajax({
        type: "get",
        url: `http://mobileapp-planning-services.azurewebsites.net/api/ConsultantTimesheets/${consultant.GebruikerId}`,
        success: function (response) {
            
            response.forEach(timesheetGebruiker => {
                timesheetsConsultanten.push(timesheetGebruiker);
            });
        }
    });
});
console.log(timesheetsConsultanten)*/