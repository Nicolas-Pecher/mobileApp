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
<!--                            <option name="projectId" id="projectId" ></option>-->
                        </select>
                        <input name="beginuur" type="time" class="form-control mr-2 form-control-sm" id="beginuur">
                        <i class="fas fa-long-arrow-alt-right mt-2"></i>
                        <input name="einduur" type="time" class="form-control ml-2 form-control-sm" id="einduur">
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
<script src="../javascript/timesheets.js"></script>

<script>

    $(document).ready(function () {

        $.ajax({
            type: 'GET',
            url: 'https://mobileapp-planning-services.azurewebsites.net/api/Project',
            success: function (data) {
                console.log(data);
                let obj = data;
                //console.log(obj[0]);
                let dropdown = $('#selectProject');
                dropdown.empty();
                dropdown.append('<option selected="true" disabled>Kies een project</option>');
                //dropdown.prop('selectedIndex', 0);

                for ( let i = 0; i < obj.length; i++ ) {
                    console.log(obj[i].Naam);
                    dropdown.append($('<option class="projectId"></option>').attr('value', obj[i].Id).text(obj[i].Naam));
                    console.log(obj[i].Id);
                }
            }
        });

        let selectedProject = "";

        $("#selectProject").change(function () {
            selectedProject = $(this).children("option:selected").val();
            alert("You have selected project - " + selectedProject);
        });

        $("#formTimeEntry").submit(function (e) {
            e.preventDefault();

            console.log("test");

            let projectId = selectedProject; //$("[class='projectId']").val();
            let datum = $("[name='datum']").val();
            let beginuur = $("[name='beginuur']").val();
            let einduur = $("[name='einduur']").val();
            let opmerking = $("[name='opmerking']").val();

            let dataJSON = {
                GebruikerId: 1,
                ProjectId: projectId,
                Datum: datum ,
                Beginuur: beginuur,
                Einduur: einduur,
                Opmerking: opmerking,
                Overuur: false
            }

            console.log(dataJSON);
            console.log(projectId);

            $.ajax({
                type: 'POST',
                url: 'https://mobileapp-planning-services.azurewebsites.net/api/Timesheet',
                data: JSON.stringify(dataJSON),
                contentType: 'application/json; charset=utf-8',
                dataType: 'json',
                success: function (data) {
                    alert("Saved Successfully");
                    console.log(data);
                    document.getElementById("formTimeEntry").reset();
                },
                error: function (data) {
                    alert("Error please try again");
                    console.log(data);
                }
            });
        });
    });

</script>

</body>
</html>