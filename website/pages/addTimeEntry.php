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
                        <input type="date" class="form-control form-control-sm" id="datum" value="<?php echo $datum; ?>">
                    </div>
                    <div class="form-group d-flex test" id="test">
                        <select class="form-control mr-4 form-control-sm" id="project">
                            <?php foreach($projecten as $project) { ?>
                            <option id="projectName" value="<?php echo $projectId = $project->Id; ?>"><?php echo $project->Naam; ?></option>
                            <?php } ?>
                        </select>
                        <input type="time" class="form-control mr-2 form-control-sm" id="beginTijd">
                        <i class="fas fa-long-arrow-alt-right mt-2"></i>
                        <input type="time" class="form-control ml-2 form-control-sm" id="eindTijd">
                    </div>
<!--                    <div class="form-group d-flex">-->
<!--                        <select class="form-control mr-4 form-control-sm" id="project">-->
<!--                            <option>Project mobile apps</option>-->
<!--                            <option>Integration project</option>-->
<!--                            <option>Software project II</option>-->
<!--                        </select>-->
<!--                        <input type="time" class="form-control mr-2 form-control-sm" id="beginTijd">-->
<!--                        <i class="fas fa-long-arrow-alt-right mt-2"></i>-->
<!--                        <input type="time" class="form-control ml-2 form-control-sm" id="eindTijd">-->
<!--                    </div>-->
                    <a href="" class="btn btn-sm mb-2" id="extraEntryBtn"><i class="fas fa-plus"></i></a>
                    <div class="form-group">
                        <label for="opmerking">Opmerking (optioneel)</label>
                        <textarea class="form-control form-control-sm" rows="2" id="opmerking"></textarea>
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
<script src="../javascript/timesheets.js"></script>

<script>

    $(document).ready(function () {
        $("#formTimeEntry").submit(function (e) {
            e.preventDefault();
            console.log("test");
            var apiurl = "https://mobileapp-planning-services.azurewebsites.net/api/Timesheet";
            var data1 = "hallo, het werkt!";

            console.log(data1);

            $.ajax({
                url: 'testAjax.php',
                type: 'POST',
                //contentType: 'application/json',
                data: data1,
                success: function (data) {
                    alert("Saved Successfully");
                    document.getElementById("formTimeEntry").reset();
                },
                error: function () {
                    alert("Error please try again");
                }
            // }).done(function (data) {
            //     alert(console.log(data));
            });

            console.log(data1);
        });
    });

</script>

</body>
</html>