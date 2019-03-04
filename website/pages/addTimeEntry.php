<?php include './components/header.php'; ?>

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

            <div class="mt-4 mr-4" id="addTimeEntry-wrapper">
                <form action="">
                    <div class="form-group">
                        <label for="datum">Datum</label>
                        <input type="date" class="form-control form-control-sm" id="datum">
                    </div>
                    <div class="form-group d-flex">
                        <select class="form-control mr-4 form-control-sm" id="project">
                            <option>Project mobile apps</option>
                            <option>Integration project</option>
                            <option>Software project II</option>
                        </select>
                        <input type="time" class="form-control mr-2 form-control-sm" id="beginTijd">
                        <i class="fas fa-long-arrow-alt-right mt-2"></i>
                        <input type="time" class="form-control ml-2 form-control-sm" id="eindTijd">
                    </div>
                    <div class="form-group d-flex">
                        <select class="form-control mr-4 form-control-sm" id="project">
                            <option>Project mobile apps</option>
                            <option>Integration project</option>
                            <option>Software project II</option>
                        </select>
                        <input type="time" class="form-control mr-2 form-control-sm" id="beginTijd">
                        <i class="fas fa-long-arrow-alt-right mt-2"></i>
                        <input type="time" class="form-control ml-2 form-control-sm" id="eindTijd">
                    </div>
                    <a href="" class="btn btn-sm mb-2" id="extraBtn"><i class="fas fa-plus"></i></a>
                    <div class="form-group">
                        <label for="opmerking">Opmerking (optioneel)</label>
                        <textarea class="form-control form-control-sm" rows="2" id="opmerking"></textarea>
                    </div>
                    <a href="timesheets.php" class="btn" id="toevoegenTimeEntryBtn">Toevoegen</a>
                </form>

            </div>

        </div>

        <a href="#topPage" class="btn" id="pageButton"><i class="fas fa-caret-up"></i></a>

    </div>
    <!-- /#page-content-wrapper -->

</div>
<!-- /#wrapper -->


<?php include './components/footer.php'; ?>

</body>
</html>