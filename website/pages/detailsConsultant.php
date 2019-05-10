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
            <p class="small"><i class="fas fa-home"></i>/ &nbsp;Consultants&nbsp; / &nbsp;<span class="consultantNaam"></span></p>
        </div>

        <div class="container-fluid mx-2">

            <h1 class="consultantNaam"></h1>
            <p>Consultant</p>
            <hr class="mr-4 mb-4">

            <div class="row">
                <div class="col-sm-3 mb-4">
                    <div class="card" style="min-height: 50vh;">
                        <div class="card-header">
                            <h5 class="">Huidige projecten</h5>
                        </div>
                        <table class="table table-bordered thead-light">
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
                <div class="col-sm-9">
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