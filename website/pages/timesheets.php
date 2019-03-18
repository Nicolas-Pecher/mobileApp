<?php
    include './components/header.php';
    include './components/activeUser.php';
?>

<body>

<div class="d-flex" id="wrapper">

    <?php include './components/sidebar.php'; ?>

    <!-- Page content -->
    <div id="page-content-wrapper">

        <?php include './components/topNavigation.php'; ?>

        <div class="container m-3 ml-3">
            <p class="small pt-2"><i class="fas fa-home"></i>/ Timesheets</p>
        </div>

        <div class="container m-3">
            <h1>Timesheets</h1>

            <div class="mt-3 d-flex">
                <div class="">
                    <a href="addTimeEntry.php" class="btn timesheetsBtn mr-2" id="toevoegenUren"><i
                                class="fas fa-plus"></i> Toevoegen</a>
                    <a href="callInSick.php" class="btn timesheetsBtn mr-2" id="ziekMelden">Ziek melden</a>
                    <a href="takeVacation.php" class="btn timesheetsBtn" id="vakantie">Vakantiedag(en) aanvragen</a>
                </div>

                <p class="ml-auto p-2 mr-4" id="totaalUren"><strong>Totaal:</strong></p>
            </div>

            <div class="mt-4" id="timesheetsOverzicht">

                <div class="" id="timeEntryDiv">

                </div>


<!--                <h6 class="timesheetDate">Maandag, 4 maart 2019</h6>-->
<!--                <div class="d-flex timesheetBody">-->
<!--                    <p>Project mobile apps</p>-->
<!--                    <p>08:30 - 11:00</p>-->
<!--                    <p>02:30:00</p>-->
<!--                </div>-->
<!--                <div class="d-flex timesheetBody align-items">-->
<!--                    <p>Project mobile apps</p>-->
<!--                    <p>12:30 - 18:00</p>-->
<!--                    <p>05:30:00</p>-->
<!--                </div>-->
<!--                <hr>-->

            </div>


        </div>

        <a href="#topPage" class="btn" id="pageButton"><i class="fas fa-caret-up"></i></a>

    </div>
    <!-- /#page-content-wrapper -->
</div>
<!-- /#wrapper -->
<?php include './components/footer.php'; ?>

<script src="../javascript/showActivePage.js"></script>
<script src="../javascript/timesheets.js"></script>

<script>
    $(document).ready(function () {

        var weekday = new Array(7);
        weekday[0] = "Zondag";
        weekday[1] = "Maandag";
        weekday[2] = "Dinsdag";
        weekday[3] = "Woensdag";
        weekday[4] = "Donderdag";
        weekday[5] = "Vrijdag";
        weekday[6] = "Zaterdag";

        let month = new Array();
        month[0] = "Januari";
        month[1] = "Februari";
        month[2] = "Maart";
        month[3] = "April";
        month[4] = "Mei";
        month[5] = "Juni";
        month[6] = "Juli";
        month[7] = "Augustus";
        month[8] = "September";
        month[9] = "Oktober";
        month[10] = "November";
        month[11] = "December";

        let projecten = "";

        // $.ajax({
        //     type: 'GET',
        //     url: 'https://mobileapp-planning-services.azurewebsites.net/api/Project',
        //     success: function (data) {
        //         //console.log(data);
        //         projecten = data;
        //         //console.log(obj[0]);
        //         console.log(projecten);
        //     }
        // });



        $.ajax({
            type: 'GET',
            url: 'https://mobileapp-planning-services.azurewebsites.net/api/Timesheet',
            success: function (data) {
                //console.log(data);

                let obj = data;

                let divTimesheets = $('#timeEntryDiv');
                let totaalUren = $('#totaalUren');
                let totaal = 0;

                for ( let i = 0; i < obj.length; i++ ) {
                    //console.log(obj[i].Datum);

                    let projectId = obj[i].ProjectId;
                    let projectNaam = "";

                    // for ( let i = 0; i < projecten.length; i++ ) {
                    //     if(projecten[i].Id == projectId) {
                    //         projectNaam = projecten[i].Naam;
                    //     }
                    //     console.log("Projectnaam = " + projectNaam);
                    // }

                    //console.log("Projectnaam = " + projectNaam);

                    //datum formaat aanpassen naar dd-mm-YYYY
                    let date = new Date(obj[i].Datum);
                    let datum = weekday[date.getDay()] + ', ' + date.getDate().toString().padStart(2, '0') + ' ' + month[date.getMonth()] + ' ' + date.getFullYear();

                    //beginuur formaat aanpassen naar hh:mm:ss
                    let beginuur = new Date(obj[i].Beginuur);
                    let begin = beginuur.getHours().toString().padStart(2, '0') + ':' + beginuur.getMinutes().toString().padStart(2, '0') + ':' + beginuur.getSeconds().toString().padStart(2, '0');

                    //einduur formaat aanpassen naar hh:mm:ss
                    let einduur = new Date(obj[i].Einduur);
                    let eind = einduur.getHours().toString().padStart(2, '0') + ':' + einduur.getMinutes().toString().padStart(2, '0') + ':' + einduur.getSeconds().toString().padStart(2, '0');

                    //gewerkte tijd
                    let werktijd = ((einduur.getHours() - beginuur.getHours()).toString().padStart(2, '0')) + ':' + ((einduur.getMinutes() - beginuur.getMinutes()).toString().padStart(2, '0')) + ':' + ((einduur.getSeconds() - beginuur.getSeconds()).toString().padStart(2, '0'));
                    //console.log(werktijd);

                    console.log(datum + " " + projectId + " " + begin + " " + eind + " " + werktijd);

                    divTimesheets.append($('<h5 class="timesheetDate"></h5>').attr('value', obj[i].Datum).text(datum));
                    divTimesheets.append($('<p class="align-text-top"></p>').attr('value', obj[i].ProjectId).text(projectId));
                    divTimesheets.append($('<p class="align-text-top"></p>').attr('value', obj[i].Beginuur).text(begin));
                    divTimesheets.append($('<p></p>').attr('value', obj[i].Einduur).text(eind));
                    divTimesheets.append($('<p></p>').attr('value', werktijd).text(werktijd));
                    divTimesheets.append($('<hr>'));

                }
            }
        });
    });



</script>
</body>
</html>