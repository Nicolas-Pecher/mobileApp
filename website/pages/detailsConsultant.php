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
            <p class="small"><i class="fas fa-home"></i>/ &nbsp;Consultants&nbsp; / &nbsp;<span id="naam"></span></p>
        </div>

        <div class="container-fluid mx-2">

            <h1 id="naamTitel"></h1>
            <p class="lichtGrijs">Consultant</p>
            <hr class="mr-4 mb-4">

            <div class="row">
                <div class="col-sm-6 mb-4">
                    <div class="card">
                        <div class="card-header">
                            <h5 class="">Gegevens</h5>
                        </div>
                        <div class="card-body">
                            <form id="modifyConsultantForm">
                                <div class="form-group">
                                    <label for="naamConsultant">Voornaam en achternaam:</label>
                                    <input type="text" name="naamConsultant" id="naamConsultant" class="form-control form-control-sm"/>
                                    <span class="text-danger small" id="naamConsultantError"></span>
                                </div>
                                <div class="form-group">
                                    <label for="email">Emailadres:</label>
                                    <input type="email" name="emailConsultant" id="emailConsultant" class="form-control form-control-sm"/>
                                    <span class="text-danger small" id="emailConsultantError"></span>
                                </div>
                                <div class="form-group">
                                    <label for="loon">Loon per uur:</label>
                                    <input type="text" name="loonConsultant" id="loonConsultant" class="form-control form-control-sm">
                                    <span class="text-danger small" id="loonConsultantError"></span>
                                </div>
                                <input type="password" name="wachtwoordConsultant" style="display:none;" >
                                <input type="text" name="bedrijfId" id="bedrijfIdValue" value="<?php echo $_SESSION['bedrijfId']; ?>" style="display:none;" >
                                <br>
                                <button type="submit" name="submit" class="btn btn-sm px-4 mb-2" id="modifyConsultantBtn">Wijzigen</button>
                            </form>
                        </div>
                    </div>
                </div>
                <div class="col-sm-4 mb-4">
                    <div class="card" style="height: 59.5vh;">
                        <div class="card-header">
                            <h5 class="">Huidige projecten</h5>
                        </div>
                        <table class="table table-striped border">
                            <thead>
                            <tr>
                                <th>#</th>
                                <th>Naam</th>
                            </tr>
                            </thead>
                            <tbody id="huidigeProjecten">

                            </tbody>
                        </table>
                    </div>
                    <!--                        <form action="" class="d-flex mt-2">-->
                    <!--                            <div class="form-group">-->
                    <!--                                <select class="form-control form-control-sm" id="projectConsultant">-->
                    <!--                                    <option>Kies Project</option>-->
                    <!--                                    <option>Integration project</option>-->
                    <!--                                    <option>Software project II</option>-->
                    <!--                                </select>-->
                    <!--                            </div>-->
                    <!--                            <a href="" class="btn btn-sm mb-4 ml-2" id="extraEntryBtn"><i class="fas fa-plus"></i></a>-->
                    <!--                        </form>-->
                </div>
            </div>

            <div class="row">
                <div class="col-sm-12">
                    <div class="card mb-4" style="min-height: 50vh;">
                        <div class="card-header">
                            <h5 class="">Timesheets</h5>
                        </div>
                        <div class="tabledisplay" id="timesheetsConsultant">

                        </div>
                    </div>
                </div>
            </div>

            <a href="#topPage" class="btn" id="pageButton"><i class="fas fa-caret-up"></i></a>

        </div>
        <!-- /#page-content-wrapper -->

    </div>
    <!-- /#wrapper -->

    <?php include './components/footer.php'; ?>

    <script src="../javascript/components/showActivePage.js"></script>
    <script src="../javascript/detailsConsultant.js"></script>
    <script src="../javascript/components/displayList.js"></script>
    <script src="../javascript/deleteTimesheet.js"></script>

</body>
</html>