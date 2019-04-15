function displayList(titles, data, listType) {
    //making structure
    let table = $('<table class="table table-striped border"></table>');
    let thead = $('<thead></thead>');
    let tbody = $('<tbody></tbody>');
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
    }if (listType === 'projects') {
        //adding last column without header
        $(headers).append(`<th scope="col"></th>`);
        projectTableRows(data, tbody);
    }if(listType === 'timesheets') {
        //adding last column without header
        $(headers).append(`<th scope="col"></th>`);
        timesheetsTableRows(data, tbody);
    } else {
        //console.log('invalid or not implemented listType');
    }

    //bind elements together
    $(thead).append(headers);
    $(table).append(thead);
    $(table).append(tbody);
    $('.tabledisplay').append(table);
}

function consultantTableRows(data, body) {
    
    data.forEach(data => {
        let row = $('<tr></tr>');
        $(row).append(`<td id="consultantId">${data.GebruikerId}</td>`);
        $(row).append(`<td id="gebruikerNaam">${data.GebruikerNaam}</td>`);
        $(row).append(`<td id="email">${data.Email}</td>`);
        let totaalUren = new Date(data.TotaalUren);
        let totaal = totaalUren.getHours().toString().padStart(2, '0') + ':' + totaalUren.getMinutes().toString().padStart(2, '0') + ':' + totaalUren.getSeconds().toString().padStart(2, '0');
        //$(row).append(`<td>${totaal}</td>`);
        //$(row).append(`<td>${overuren}</td>`) niet nodig
        $(row).append(`<td><a href="detailsConsultant.php?${data.GebruikerId}" class="btn btn-sm btn-outline-secondary" role="button"
        id="detailsConsultantBtn">Details</a></td>`);
        $(body).append(row);
    });
}

function projectTableRows(data, body) {

    data.forEach(data => {
        let row = $('<tr></tr>');
        $(row).append(`<td>${data.ProjectId}</td>`);
        $(row).append(`<td>${data.ProjectNaam}</td>`);
        $(row).append(`<td>${data.KlantNaam}</td>`);
        if (data.Overuren === true) {
            $(row).append(`<td><input type="checkbox" checked></td>`);
        }else{
            $(row).append(`<td><input type="checkbox"></td>`);
        }
        $(row).append(`<td><a href="#" class="btn btn-sm btn-outline-secondary" role="button"
        id="wijzigProject">Details</a></td>`);
        $(body).append(row);
    });
}

function timesheetsTableRows(data, body) {

    data.forEach(data => {
        let row = $('<tr></tr>');
        $(row).append(`<td>${data.TimesheetId}</td>`);
        $(row).append(`<td>${data.ProjectNaam}</td>`);
        let date = new Date(data.Datum);
        let datum = date.getDate().toString().padStart(2, '0') + '/' + (date.getMonth() + 1).toString().padStart(2,'0') + '/' + date.getFullYear();
        $(row).append(`<td>${datum}</td>`);
        let beginuur = new Date(data.Beginuur);
        let begin = beginuur.getHours().toString().padStart(2, '0') + ':' + beginuur.getMinutes().toString().padStart(2, '0');
        $(row).append(`<td>${begin}</td>`);
        let einduur = new Date(data.Einduur);
        let eind = einduur.getHours().toString().padStart(2, '0') + ':' + einduur.getMinutes().toString().padStart(2, '0');
        $(row).append(`<td>${eind}</td>`);
        let verschilTijd = new Date(data.VerschilUren);
        let verschil = verschilTijd.getHours().toString().padStart(2, '0') + ':' + verschilTijd.getMinutes().toString().padStart(2, '0') + ':' + verschilTijd.getSeconds().toString().padStart(2, '0');
        $(row).append(`<td>${verschil}</td>`);
        $(row).append(`<td><a href="modifyTimeEntry.php?${data.TimesheetId}&${data.GebruikerId}" class="btn btn-sm btn-outline-secondary" role="button"
        id="wijzigProject"><i class="fas fa-pen"></i></a><a href="" onclick="deleteTimeEntry(data.TimesheetId)" class="btn btn-sm btn-outline-secondary ml-1" role="button"
        id="deleteProject"><i class="fas fa-trash-alt"></i></a></td>`);
        $(row).append(`<td></td>`);
        $(body).append(row);
    });
}