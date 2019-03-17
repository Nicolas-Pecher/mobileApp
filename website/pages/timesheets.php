<?php
    include './components/header.php';
    include './components/activeUser.php';
    include '../controllers/getTimesheets.php';
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

                <p class="ml-auto p-2 mr-4"><strong>Totaal:</strong> 60:15:00</p>
            </div>

            <div class="mt-4">

                <?php foreach($timesheets as $timesheet) {
                    ?>
                    <h6 class="timesheetDate"><?php echo $timesheet->Datum; ?></h6>
                    <div class="d-flex timesheetBody">
                        <p>Project mobile apps</p>
                        <p><?php echo $timesheet->Beginuur; ?> - <?php echo $timesheet->Einduur; ?></p>
                        <p></p>
                    </div>
                <?php } ?>
                <div class="d-flex timesheetBody">
                    <p>Project mobile apps</p>
                    <p>12:30 - 18:00</p>
                    <p>05:30:00</p>
                </div>
                <hr>
                <h6 class="timesheetDate">Maandag, 4 maart 2019</h6>
                <div class="d-flex timesheetBody">
                    <p>Project mobile apps</p>
                    <p>08:30 - 11:00</p>
                    <p>02:30:00</p>
                </div>
                <div class="d-flex timesheetBody align-items">
                    <p>Project mobile apps</p>
                    <p>12:30 - 18:00</p>
                    <p>05:30:00</p>
                </div>
                <hr>
                <h6 class="timesheetDate">Maandag, 4 maart 2019</h6>
                <div class="d-flex timesheetBody">
                    <p>Project mobile apps</p>
                    <p>08:30 - 11:00</p>
                    <p>02:30:00</p>
                </div>
                <div class="d-flex timesheetBody align-items">
                    <p>Project mobile apps</p>
                    <p>12:30 - 18:00</p>
                    <p>05:30:00</p>
                </div>
                <hr>
                <h6 class="timesheetDate">Maandag, 4 maart 2019</h6>
                <div class="d-flex timesheetBody">
                    <p>Project mobile apps</p>
                    <p>08:30 - 11:00</p>
                    <p>02:30:00</p>
                </div>
                <div class="d-flex timesheetBody align-items">
                    <p>Project mobile apps</p>
                    <p>12:30 - 18:00</p>
                    <p>05:30:00</p>
                </div>
                <hr>
                <h6 class="timesheetDate">Maandag, 4 maart 2019</h6>
                <div class="d-flex timesheetBody">
                    <p>Project mobile apps</p>
                    <p>08:30 - 11:00</p>
                    <p>02:30:00</p>
                </div>
                <div class="d-flex timesheetBody align-items">
                    <p>Project mobile apps</p>
                    <p>12:30 - 18:00</p>
                    <p>05:30:00</p>
                </div>
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
    // $(document).ready(function () {
    //     $.ajax({
    //         type: "get",
    //         url: "http://localhost:59964/api/Timesheet",
    //         success: function (response) {
    //             console.log(response)
    //         }
    //     });
    // });


</script>
</body>
</html>