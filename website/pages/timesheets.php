<?php
    include './components/header.php';

    if(!isset($_SESSION['gebruikerId'])) {
        header("Location: login.php");
    }
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

                <p class="ml-auto p-2 mr-4" id="totaalUren"></p>
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

        <input type="text" id="gebruikerIdTimeEntry" value="<?php echo $_SESSION['gebruikerId']; ?>" style="display:none;" >
        <input type="text" id="bedrijfIdTimeEntry" value="<?php echo $_SESSION['bedrijfId']; ?>" style="display:none;" >

    </div>
    <!-- /#page-content-wrapper -->
</div>
<!-- /#wrapper -->
<?php include './components/footer.php'; ?>

<script src="../javascript/showActivePage.js"></script>
<script src="../javascript/timesheets.js"></script>
<!--<script src="../javascript/totaalUrenPerConsultant.js"></script>-->

</body>
</html>