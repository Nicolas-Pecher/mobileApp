
/*
document.getElementById("genPDF").addEventListener('click', function(){
    var doc = new jsPDF()
    doc.fromHTML($('#testDiv').get(0),20,20,{'width':500});
    doc.save('test.pdf');
});

*/

// voorbeeld oplossing van https://stackoverflow.com/questions/23060563/how-to-set-column-width-for-generating-pdf-using-jspdf/23385322#23385322

document.getElementById("genPDF").addEventListener('click', function(){

    doc.fromHTML($('#testDiv').get(0),20,20,{'width':500});
    
    var table1 = 
        tableToJson($('#table1').get(0)),
        cellWidth = 50,
        rowCount = 0,
        cellContents,
        leftMargin = 2,
        topMargin = 12,
        topMarginTable = 55,
        headerRowHeight = 13,
        rowHeight = 9,

         l = {
         orientation: 'l',
         unit: 'mm',
         format: 'a4',
         compress: true,
         fontSize: 8,
         lineHeight: 1,
         autoSize: false,
         printHeaders: true
     };

    var doc = new jsPDF(l, '', '', '');

    doc.cellInitialize();

   $.each(table1, function (i, row)
    {

        rowCount++;

        $.each(row, function (j, cellContent) {

            if (rowCount == 1) {
                doc.margins = 1;
                doc.setFont("helvetica");
                doc.setFontType("bold");
                doc.setFontSize(9);

                doc.cell(leftMargin, topMargin, cellWidth, headerRowHeight, cellContent, i)
            }
            else if (rowCount == 2) {
                doc.margins = 1;
                doc.setFont("times ");
                doc.setFontType("normal"); 
                doc.setFontSize(6.5);                    

                doc.cell(leftMargin, topMargin, cellWidth, rowHeight, cellContent, i); 
            }
            else {

                doc.margins = 1;
                doc.setFont("courier ");
                doc.setFontType("bolditalic ");
                doc.setFontSize(6.5);                    

                doc.cell(leftMargin, topMargin, cellWidth, rowHeight, cellContent, i);
            }
        })
    })

doc.save('pdf.pdf');  })




function tableToJson(table) {
var data = [];

// first row needs to be headers
var headers = [];
for (var i=0; i<table.rows[0].cells.length; i++) {
    headers[i] = table.rows[0].cells[i].innerHTML.toLowerCase().replace(/ /gi,'');
}

// go through cells
for (var i=1; i<table.rows.length; i++) {

    var tableRow = table.rows[i];
    var rowData = {};

    for (var j=0; j<tableRow.cells.length; j++) {

        rowData[ headers[j] ] = tableRow.cells[j].innerHTML;

    }

    data.push(rowData);
}       

return data;
};