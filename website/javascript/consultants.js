activePage('consultants');

let titles = ['Naam', 'Emailadres', 'Gewerkte uren', 'Overuren'];
let data = [];

//ajax get request om consultants weer te geven
$.ajax({
    type: "get",
    url: "http://mobileapp-planning-services.azurewebsites.net/api/TotaalUrenConsultant/1",
    success: function (response) {
        console.log(response);
        //data.push(response);
        //displayList(titles, data, 'consultants');
    }
});