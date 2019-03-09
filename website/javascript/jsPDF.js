document.getElementById("genPDF").addEventListener('click', function(){
    var doc = new jsPDF()
    doc.fromHTML($('#testDiv').get(0),20,20,{'width':500});
    doc.save('test.pdf');
});

