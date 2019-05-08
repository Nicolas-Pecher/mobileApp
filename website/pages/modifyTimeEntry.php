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
            <p class="small"><i class="fas fa-home"></i>/ &nbsp;Wijzigen uren</p>
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
                                <span class="text-danger small" id="datumError"></span>
                            </div>
                            <div class="row">
                                <div class="form-group col">
                                    <label for="project">Project:</label>
                                    <select name="project" class="form-control mr-4 form-control-sm" id="selectProject">

                                    </select>
                                    <span class="text-danger small" id="projectError"></span>
                                </div>
                                <div class="form-group col">
                                    <label for="beginuur">Van:</label>
                                    <input name="beginuur" type="time" class="form-control form-control-sm" id="beginuur">
                                    <span class="text-danger small" id="beginuurError"></span>
                                </div>
                                <div class="form-group col">
                                    <label for="einduur">Tot:</label>
                                    <input name="einduur" type="time" class="form-control form-control-sm" id="einduur">
                                    <span class="text-danger small" id="einduurError"></span>
                                </div>
                            </div>
<!--                        <a href="" class="btn btn-sm mb-2" id="extraEntryBtn"><i class="fas fa-plus"></i></a>-->
                            <div class="form-group">
                                <label for="opmerking">Opmerking (optioneel):</label>
                                <textarea name="opmerking" class="form-control form-control-sm" rows="2" id="opmerking"></textarea>
                            </div>
                            <div class="form-group form-check overuren" style="display: none">
                                <label class="form-check-label">
                                    <input class="form-check-input" type="checkbox" name="overuren" id="overuren"> Overuren
                                </label>
                                <span class="text-danger small" id="overurenError"></span>
                            </div>
                            <button type="submit" class="btn btn-sm px-4" id="modifyTimesheetBtn">Wijzigen</button>
                            <button type="button" onclick="history.back();" class="btn btn-sm px-4" id="cancelModifyTimesheetBtn">Annuleren</button>
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
<script src="../javascript/modifyTimeEntry.js"></script>
<script src="../javascript/validation.js"></script>

</body>
</html>