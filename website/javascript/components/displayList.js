let titles = ['Naam', 'Emailadres', 'Gewerkte uren', 'Overuren'];

let data = [{
    naam: 'Yasmine De Wolf',
    email: 'yasminedewolf@hotmail.com',
    totUren: '34:10:00',
    overUren: '9:00:00'
}, {
    naam: 'Nicolas Pecher',
    email: 'nicolas@hotmail.com',
    totUren: '34:10:00',
    overUren: '9:00:00'
}, {
    naam: 'Maxime De Bogoos',
    email: 'Maxime@hotmail.com',
    totUren: '34:10:00',
    overUren: '9:00:00'
}]

function displayList(titles, data, listType) {
    //making structure
    let table = $('<table class="table table-striped border"></table>');
    let thead = $('<thead></thead');
    let tbody = $('<tbody></tbody>')
    let headers = $('<tr></tr>');

    //adding headers to table
    titles.forEach(title => {
        $(headers).append(`<th scope="col">${title}</th>`);
    });

    //checking type of table
    if (listType === 'consultants') {
        //adding last column without header
        $(headers).append(`<th scope="col"></th>`);
        //add rows to table
        consultantTableRows(data, tbody);
    } else {
        console.log('invalid or not implemented listType');
    }

    //bind elements together
    $(thead).append(headers);
    $(table).append(thead);
    $(table).append(tbody);
    $('.tabledisplay').append(table);
}

function consultantTableRows(data, body) {

    console.log('consultants')
    data.forEach(data => {
        let row = $('<tr></tr>');
        $(row).append(`<td>${data.naam}</td>`)
        $(row).append(`<td>${data.email}</td>`)
        $(row).append(`<td>${data.totUren}</td>`)
        $(row).append(`<td>${data.overUren}</td>`)
        $(row).append(`<td><a href="detailsConsultant.php" class="btn btn-sm btn-outline-secondary" role="button"
        id="detailsConsultantBtn">Details</a></td>`)
        $(body).append(row)
    })

}

/*
$.ajax({
    type: "GET",
    url: "url",
    success: function (response) {
        console.log(response)
    }
});
*/

displayList(titles, data, 'consultants');


