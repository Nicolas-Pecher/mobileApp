document.getElementById("genPDF").addEventListener('click', function () {

    var side = $('#sidebar-wrapper');
    savedSideBar = side.clone(true);

    var top = $('#topPage');
    savedTop = top.clone(true);

    side.remove();

    top.remove();

    window.setTimeout(() => {
        var pdf = new jsPDF('p', 'pt', 'a4');
    pdf.addHTML(document.body, function () {
        pdf.save('web.pdf');
    });
    }, 1);

    savedSideBar.appendTo ($(document.body));
    savedTop.appendTo ($(document.body));
});