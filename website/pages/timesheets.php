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

        <div class="container my-4 mx-2">
            <p class="small"><i class="fas fa-home"></i>/ &nbsp;Timesheets</p>
        </div>

        <div class="container-fluid mx-2">
            <h1 class="mb-4">Timesheets</h1>

            <div class="mt-3 d-flex">
                <div>
                    <a href="addTimeEntry.php" class="btn mr-2 pl-2" id="addTimeBtn"><i class="fas fa-plus"></i> Toevoegen</a>
<!--                    <a href="callInSick.php" class="btn timesheetsBtn mr-2" id="ziekMelden">Ziek melden</a>-->
<!--                    <a href="takeVacation.php" class="btn timesheetsBtn" id="vakantie">Vakantiedag(en) aanvragen</a>-->
                </div>

                <p class="ml-auto p-2 mr-4"><strong class="mr-3">Totaal deze maand: </strong><span id="gewerkteUren"></span></p>
            </div>

            <div class="mt-2" id="timesheetsOverzicht">

                <div id="timeEntryDiv">

                </div>

            </div>

        </div>

        <a href="#topPage" class="btn" id="pageButton"><i class="fas fa-caret-up"></i></a>

        <input type="text" id="gebruikerIdValue" value="<?php echo $_SESSION['gebruikerId']; ?>" style="display:none;" >
        <input type="text" id="bedrijfIdValue" value="<?php echo $_SESSION['bedrijfId']; ?>" style="display:none;" >

    </div>
    <!-- /#page-content-wrapper -->

</div>
<!-- /#wrapper -->

<?php include './components/footer.php'; ?>

<script src="../javascript/showActivePage.js"></script>
<script src="../javascript/timesheets.js"></script>
<script src="../javascript/totaalUrenPerConsultant.js"></script>
<script src="../javascript/deleteTimeEntry.js"></script>

</body>
</html>