activePage('consultants');

let titles = ['Naam', 'Emailadres', 'Gewerkte uren'];
let data = [];
let bedrijfId = $('#bedrijfIdVoorConsultant').val();

//ajax get request om consultants weer te geven
$.ajax({
    type: "get",
    url: `http://mobileapp-planning-services.azurewebsites.net/api/TotaalUrenConsultant/${bedrijfId}`,
    success: function (response) {
        
        response.forEach(element => {
            data.push(element);
        });
        displayList(titles, data, 'consultants');
    }
});