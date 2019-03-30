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
    }if (listType === 'projects') {
        //adding last column without header
        $(headers).append(`<th scope="col"></th>`);
        projectTableRows(data, tbody);
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
        $(row).append(`<td>${data.GebruikerNaam}</td>`)
        $(row).append(`<td>${data.Email}</td>`)
        let totaalUren = new Date(data.TotaalUren);
        let totaal = totaalUren.getHours().toString().padStart(2, '0') + ':' + totaalUren.getMinutes().toString().padStart(2, '0') + ':' + totaalUren.getSeconds().toString().padStart(2, '0');
        $(row).append(`<td>${totaal}</td>`)
        //$(row).append(`<td>${overuren}</td>`) niet nodig
        $(row).append(`<td><a href="detailsConsultant.php" class="btn btn-sm btn-outline-secondary" role="button"
        id="detailsConsultantBtn">Details</a></td>`)
        $(body).append(row)
    })
}

function projectTableRows(data, body) {

    data.forEach(data => {
        let row = $('<tr></tr>');
        $(row).append(`<td>${data.Naam}</td>`)
        $(row).append(`<td>${data.KlantId}</td>`)
        if (data.Overuren == true) {
            $(row).append(`<td><input type="checkbox" checked></td>`)
        }else{
            $(row).append(`<td><input type="checkbox"></td>`)
        }
        $(row).append(`<td><a href="#" class="btn btn-sm btn-outline-secondary" role="button"
        id="wijzigProject">Details</a></td>`)
        $(body).append(row)
    })
}


