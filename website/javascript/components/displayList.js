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
    }if(listType === 'customers') {
        $(headers).append(`<th scope="col"></th>`);
        klantTableRows(data, tbody);
    }if (listType === 'employees') {
        personeelTableRows(data, tbody);        
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

    let number = 1;

    data.forEach(data => {
        let row = $('<tr></tr>');
        $(row).append(`<td id="consultantId">${number}</td>`);
        $(row).append(`<td id="gebruikerNaam">${data.GebruikerNaam}</td>`);
        $(row).append(`<td id="email">${data.Email}</td>`);
        $(row).append(`<td><a href="detailsConsultant.php?${data.GebruikerId}" class="btn btn-sm btn-outline-secondary" role="button"
        id="detailsConsultantBtn">Details</a></td>`);
        $(body).append(row);
        number++;
    });
}

function projectTableRows(data, body) {

    let number = 1;

    data.forEach(data => {
        let row = $('<tr></tr>');
        $(row).append(`<td>${number}</td>`);
        $(row).append(`<td>${data.ProjectNaam}</td>`);
        $(row).append(`<td>${data.KlantNaam}</td>`);
        if (data.Overuren === true) {
            $(row).append(`<td><input type="checkbox" checked></td>`);
        }else{
            $(row).append(`<td><input type="checkbox"></td>`);
        }
        $(row).append(`<td><a href="detailsProject.php?${data.ProjectId}" class="btn btn-sm btn-outline-secondary" role="button"
        id="wijzigProject">Details</a></td>`);
        $(body).append(row);
        number++;
    });
}

function timesheetsTableRows(data, body) {

    let number = 1;

    data.forEach(data => {
        let row = $('<tr></tr>');
        $(row).append(`<td>${number}</td>`);
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
        let buttons = $('<td></td>');
        $(buttons).append(`<a href="modifyTimesheet.php?${data.TimesheetId}&${data.GebruikerId}" class="btn btn-sm btn-outline-secondary" role="button"
        id="wijzigProject"><i class="fas fa-pen"></i></a>`);
        let remove = $(`<button class="btn btn-sm btn-outline-secondary ml-1" role="button" id="deleteProject"><i class="fas fa-trash-alt"></i></button>`);
        $(buttons).append(remove);
        $(row).append(buttons);
        $(row).append(`<td></td>`);
        $(body).append(row);
        number++;

        $(remove).click(function() {
            console.log(data.TimesheetId);
            deleteTimesheet(data.TimesheetId);
            $(row).remove();
        });


    });
}

function klantTableRows(data, body) {

    let number = 1;

    data.forEach(data => {
        let row = $('<tr></tr>');
        $(row).append(`<td>${number}</td>`);
        $(row).append(`<td>${data.KlantNaam}</td>`);
        $(row).append(`<td>${data.BtwNummer}</td>`);
        $(row).append(`<td>${data.RekeningNummer}</td>`);
        $(row).append(`<td><a href="detailsCustomer.php?${data.KlantId}" class="btn btn-sm btn-outline-secondary" role="button"
        id="detailsCustomerBtn">Details</a></td>`);
        $(body).append(row);
        number++;
    })
}


function personeelTableRows(data, body) {

    let number = 1;

    data.forEach(data => {
        let row = $('<tr></tr>');
        $(row).append(`<td id="consultantId">${number}</td>`);
        $(row).append(`<td id="gebruikerNaam">${data.GebruikerNaam}</td>`);
        $(row).append(`<td id="email">${data.Email}</td>`);
        $(row).append(`<td id="rol">${data.Rol}</td>`);
        $(body).append(row);
        number++;
    });
}