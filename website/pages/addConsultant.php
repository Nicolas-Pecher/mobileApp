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

        <div class="container m-3 ml-3">
            <p class="small pt-2"><i class="fas fa-home"></i>/ Consultants / Toevoegen consultant</p>
        </div>

        <div class="container m-3">
            <h1>Toevoegen consultant</h1>

            <div class="mt-4 pr-4">
                <form action="" id="formConsultant">
                    <div class="form-group">
                        <label for="naamConsultant">Voornaam en achternaam</label>
                        <input type="text" name="naamConsultant" placeholder="" class="form-control form-control-sm col-4">
                    </div>
                    <div class="form-group">
                        <label for="email">Emailadres</label>
                        <input type="email" name="email" placeholder="" class="form-control form-control-sm col-4">
                    </div>
                    <div class="form-group">
                        <label for="password">Wachtwoord</label>
                        <input type="password" name="password" placeholder="" class="form-control form-control-sm col-4 mb-3">

                    </div>
                    <div class="form-group mt-4">
                        <label for="">Projecten</label>
                        <select class="form-control mr-4 form-control-sm" id="selectProject">

                        </select>
                    </div>
                    <a href="" class="btn btn-sm mt-1" id="addNewProjectBtn"><i class="fas fa-plus"></i></a>
                    <br>
                    <button href="" class="btn mt-4" id="addConsultantBtn">Toevoegen</button>
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
<script src="../javascript/consultants.js"></script>

<script>

    $(document).ready(function () {

        console.log("toevoegen consultant");

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

                for (let i = 0; i < obj.length; i++) {
                    console.log(obj[i].ProjectNaam);
                    dropdown.append($('<option class="projectId"></option>').attr('value', obj[i].ProjectId).text(obj[i].ProjectNaam));
                    console.log(obj[i].ProjectId);
                }
            }
        });

        let selectedProject = "";

        //een project selecteren uit het dropdown menu van de form
        $("#selectProject").change(function () {
            selectedProject = $(this).children("option:selected").val();
            console.log("You have selected project - " + selectedProject);
        });

        //toevoegen van een consultant
        $("#formConsultant").submit(function (e) {
            e.preventDefault();

            console.log("test consultant toevoegen");

            let gebruikerNaam = $("[name='naamConsultant']").val();
            let email = $("[name='email']").val();
            let wachtwoord = $("[name='password']").val();

            //let hash = Base64.encode(wachtwoord);

            let dataJSON = {
                GebruikerNaam : gebruikerNaam,
                Email : email,
                Wachtwoord : wachtwoord,
                Rol : "consultant",
                BedrijfId : 1
            }

            console.log(dataJSON);

            $.ajax({
                type: 'POST',
                url: 'https://mobileapp-planning-services.azurewebsites.net/api/Gebruiker',
                data: JSON.stringify(dataJSON),
                contentType: 'application/json; charset=utf-8',
                dataType: 'json',
                success: function (data) {
                    alert("Saved Successfully");
                    console.log(data);
                    //document.getElementById("formTimeEntry").reset();
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