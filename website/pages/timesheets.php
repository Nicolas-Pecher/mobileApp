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
                <div class="">
                    <a href="addTimeEntry.php" class="btn timesheetsBtn mr-2" id="toevoegenUren"><i
                                class="fas fa-plus"></i> Toevoegen</a>
<!--                    <a href="callInSick.php" class="btn timesheetsBtn mr-2" id="ziekMelden">Ziek melden</a>-->
<!--                    <a href="takeVacation.php" class="btn timesheetsBtn" id="vakantie">Vakantiedag(en) aanvragen</a>-->
                </div>

                <p class="ml-auto p-2 mr-4" id=""><strong class="mr-3">Totaal: </strong><span id="gewerkteUren"></span></p>
            </div>

            <div class="mt-2" id="timesheetsOverzicht">

<!--                <div class="card">-->
<!--                    <h5 class="card-header">-->
<!--                        Zondag 2 april 2019-->
<!--                    </h5>-->
<!--                    <div class="list-group-flush ml-4" style="border-top: 0px">-->
<!--                        <div class="list-group-item d-flex row">-->
<!--                            <p class="card-text col-4">Project Mobile Apps</p>-->
<!--                            <p class="card-text col-3">12:00 &#8195; - &#8195; 14:00</p>-->
<!--                            <p class="card-text col-3">02:00:00</p>-->
<!--                            <div>-->
<!--                                <a href="#" class="nav-link" data-toggle="dropdown"><i class="fas fa-ellipsis-v text-dark"></i></a>-->
<!--                                <div class="dropdown-menu dropdown-menu-right mr-2">-->
<!--                                    <a href="./pages/profile.php" class="dropdown-item"><i class="fas fa-user-edit mr-3"></i>Profiel</a>-->
<!--                                    <a class="dropdown-item"><i class="fas fa-cog mr-3"></i>Instellingen</a>-->
<!--                                    <div class="dropdown-divider"></div>-->
<!--                                    <a href="./controllers/doLogout.php" class="dropdown-item"><i class="fas fa-power-off mr-3"></i>Uitloggen</a>-->
<!--                                </div>-->
<!--                            </div>-->
<!---->
<!--                        </div>-->
<!--                    </div>-->
<!--                    <div class="list-group-flush ml-4">-->
<!--                        <div class="list-group-item list-group-item-action d-flex row">-->
<!--                            <p class="card-text col-4">Project Mobile Apps</p>-->
<!--                            <p class="card-text col-4">12:00 &#8195; - &#8195; 14:00</p>-->
<!--                            <p class="card-text col-4">02:00:00</p>-->
<!--                        </div>-->
<!--                    </div>-->
<!--                </div>-->



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

        <input type="text" id="gebruikerIdValue" value="<?php echo $_SESSION['gebruikerId']; ?>" style="display:none;" >
        <input type="text" id="bedrijfIdTimeEntry" value="<?php echo $_SESSION['bedrijfId']; ?>" style="display:none;" >

        <?php //var_dump($_SESSION['gebruikerId']); ?>

    </div>
    <!-- /#page-content-wrapper -->
</div>
<!-- /#wrapper -->
<?php include './components/footer.php'; ?>

<script src="../javascript/showActivePage.js"></script>
<script src="../javascript/timesheets.js"></script>
<script src="../javascript/totaalUrenPerConsultant.js"></script>

</body>
</html>