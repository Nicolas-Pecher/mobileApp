<?php
    include './components/header.php';
    include '../controllers/getProjects.php';
?>

<body>

<div class="d-flex" id="wrapper">

    <?php include './components/sidebar.php'; ?>

    <!-- Page content -->
    <div id="page-content-wrapper">

    <?php include './components/topNavigation.php';?>

        <div class="container m-3 ml-3">
            <p class="small pt-2"><i class="fas fa-home"></i>/  Timesheets / Toevoegen uren</p>
        </div>

        <div class="container m-3">
            <h1>Toevoegen uren</h1>

            <div class="mt-4 pr-4" id="addTimeEntry-wrapper">
                <form name="formTimeEntry" id="formTimeEntry" method="post" enctype="multipart/form-data">
                    <div class="form-group">
                        <label for="datum">Datum</label>
                        <input name="datum" type="date" class="form-control form-control-sm" id="datum">
                    </div>
                    <div class="form-group d-flex test" id="test">
                        <select class="form-control mr-4 form-control-sm" id="selectProject">
                            <option selected="true" disabled name="projectId" class="projectId">Kies een project</option>
                        </select>
                        <input name="beginuur" type="time" class="form-control mr-2 form-control-sm" id="beginuur">
                        <i class="fas fa-long-arrow-alt-right mt-2"></i>
                        <input name="einduur" type="time" class="form-control ml-2 form-control-sm" id="einduur">
                    </div>
                    <a href="" class="btn btn-sm mb-2" id="extraEntryBtn"><i class="fas fa-plus"></i></a>
                    <div class="form-group">
                        <label for="opmerking">Opmerking (optioneel)</label>
                        <textarea name="opmerking" class="form-control form-control-sm" rows="2" id="opmerking"></textarea>
                    </div>
                    <button href="" class="btn" type="submit" id="toevoegenTimeEntryBtn">Toevoegen</button>
                </form>

            </div>

        </div>

        <a href="#topPage" class="btn" id="pageButton"><i class="fas fa-caret-up"></i></a>

    </div>
    <!-- /#page-content-wrapper -->

</div>
<!-- /#wrapper -->

<?php include './components/footer.php'; ?>

<script src="../javascript/showActivePage.js"></script>
<script src="../javascript/addTimeEntry.js"></script>

</body>
</html>