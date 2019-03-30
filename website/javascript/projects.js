activePage('projects');

let titles = ['Naam', 'Klant', 'Overuren Toegestaan'];
let data = [];

//ajax get request om projecten weer te geven
$.ajax({
    type: "get",
    url: "http://mobileapp-planning-services.azurewebsites.net/api/Project",
    success: function (response) {

        console.log(response);
        
        response.forEach(element => {

            let obj = Object.create(null);
            obj.Naam = element.ProjectNaam;
            obj.KlantId = element.KlantNaam;
            obj.Overuren = element.Overuren;
            data.push(obj);

        });

        displayList(titles, data, 'projects');
    }
});