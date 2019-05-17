<?php
/**
 * Created by PhpStorm.
 * User: Yasmine
 * Date: 10/05/2019
 * Time: 14:15
 */

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
            <p class="small"><i class="fas fa-home"></i>/ &nbsp;Projecten&nbsp; / &nbsp;<span class="naam"></span></p>
        </div>

        <div class="container-fluid mx-2">

            <h1 class="naam"></h1>
            <p class="lichtGrijs">Project</p>
            <hr class="mr-4 mb-4">

            <div class="row">
                <div class="col-sm-4 mb-4">
                    <div class="card">
                        <div class="card-header">
                            <h5 class="">Gegevens</h5>
                        </div>
                        <div class="card-body">
                            <form id="modifyProjectForm">
                                <div class="form-group">
                                    <label for="naamProject">Naam:</label>
                                    <input type="text" name="naamProject" id="naamProject" class="form-control form-control-sm"/>
                                    <span class="text-danger small" id="naamProjectError"></span>
                                </div>
                                <div class="form-group">
                                    <label for="selectKlant">Klant:</label>
                                    <select name="selectKlant" class="form-control mr-4 form-control-sm" id="selectKlant">

                                    </select>
                                    <span class="text-danger small" id="klantError"></span>
                                </div>
                                <div class="form-group form-check overuren">
                                    <label class="form-check-label">
                                        <input class="form-check-input" type="checkbox" name="overuren" id="overuren"> Overuren mogelijk
                                    </label>
                                    <span class="text-danger small" id="overurenError"></span>
                                </div>
                                <input type="text" name="bedrijfId" id="bedrijfIdValue" value="<?php echo $_SESSION['bedrijfId']; ?>" style="display:none;" >
                                <br>
                                <button type="submit" name="submit" class="btn btn-sm px-4 mb-2" id="modifyConsultantBtn">Wijzigen</button>
                            </form>
                        </div>
                    </div>
                </div>
                <div class="col-sm-8 mb-4">
                    <div class="card">
                        <div class="card-header">
                            <h5 class="">Teamleden project</h5>
                        </div>
                        <table class="table table-striped border" id="tableConsultantsProject">
                            <thead>
                            <tr>
                                <th>#</th>
                                <th>Naam</th>
                            </tr>
                            </thead>
                            <tbody id="huidigeConsultants">

                            </tbody>
                        </table>
                        <div class="card-body border-top">
                            <form action="" id="addConsultantToProjectForm">
                                <div class="form-group">
                                    <select name="selectConsultant" class="form-control mr-4 form-control-sm" id="selectConsultant">
                                        <option selected="true" disabled>Kies een consultant</option>
                                    </select>
                                    <span class="text-danger small" id="selectConsultantError"></span>
                                </div>
                                <button class="btn btn-sm px-4" type="submit" id="addTimesheetBtn">Toevoegen</button>
                            </form>
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
    <script src="../javascript/detailsProject.js"></script>
    <script src="../javascript/components/displayList.js"></script>


</body>
</html>


