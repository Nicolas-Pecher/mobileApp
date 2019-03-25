activePage('projects');

let titles = ['Naam', 'Klant', 'Overuren Toegestaan'];
let data = [];

//ajax get request om projecten weer te geven
$.ajax({
    type: "get",
    url: "http://mobileapp-planning-services.azurewebsites.net/api/Project",
    success: function (response) {

        response.forEach(project => {

            let obj = Object.create(null);
            obj.Naam = project.Naam;
            obj.KlantId = project.KlantId;
            obj.Overuren = project.Overuren;
            data.push(obj);

        });

        displayList(titles, data, 'projects');
    }
});