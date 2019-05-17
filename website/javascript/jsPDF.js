document.getElementById("genPDF").addEventListener('click', function () {

    //source: https://stackoverflow.com/questions/4373922/how-to-print-selected-div-instead-complete-page

   var printContents = document.getElementById('card-body').innerHTML;
   var originalContents = document.body.innerHTML;
    document.body.innerHTML = printContents;
    window.print();
    document.body.innerHTML = originalContents;

});