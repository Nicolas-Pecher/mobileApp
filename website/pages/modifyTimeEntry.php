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

        <?php include './components/topNavigation.php';?>

        <div class="container my-4 mx-2">
            <p class="small"><i class="fas fa-home"></i>/ &nbsp;Timesheets&nbsp; / &nbsp;Wijzigen uren</p>
        </div>

        <div class="container-fluid mx-2">

            <h1 class="mb-4">Wijzigen uren</h1>

            <div class="mt-4 pr-4" id="addTimeEntry-wrapper">
                <div class="card">
                    <div class="card-body">
                        <form action="" id="wijzigTimesheetForm">
                            <div class="form-group">
                                <label for="datum">Datum:</label>
                                <input type="date" class="form-control form-control-sm" id="datum" name="datum">
                            </div>
                            <div class="row">
                                <div class="form-group col">
                                    <label for="project">Project:</label>
                                    <select class="form-control mr-4 form-control-sm" id="selectProject">

                                    </select>
                                </div>
                                <div class="form-group col">
                                    <label for="beginuur">Van:</label>
                                    <input type="time" class="form-control form-control-sm" id="beginTijd">
                                </div>
                                <div class="form-group col">
                                    <label for="einduur">Tot:</label>
                                    <input type="time" class="form-control form-control-sm" id="eindTijd">
                                </div>
                            </div>
                            <!--                    <a href="" class="btn btn-sm mb-2" id="extraEntryBtn"><i class="fas fa-plus"></i></a>-->
                            <div class="form-group">
                                <label for="opmerking">Opmerking (optioneel):</label>
                                <textarea class="form-control form-control-sm" rows="2" id="opmerking"></textarea>
                            </div>
                            <div class="form-group form-check">
                                <label class="form-check-label">
                                    <input class="form-check-input" type="checkbox" id="overuren"> Overuren
                                </label>
                            </div>
                            <button type="submit" class="btn px-4" id="toevoegenTimeEntryBtn">Wijzigen</button>
                            <button type="button" onclick="history.back();" class="btn px-4" id="toevoegenTimeEntryBtn">Cancel</button>
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

<script src="../javascript/showActivePage.js"></script>
<script src="../javascript/timesheets.js"></script>
<script src="../javascript/modifyTimeEntry.js"></script>

</body>
