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
            <p class="small"><i class="fas fa-home"></i>/ &nbsp;Personeel&nbsp; / &nbsp;Toevoegen Personeel</p>
        </div>

        <div class="container-fluid mx-2">

            <h1 class="mb-4">Toevoegen Personeel</h1>

            <div class="mt-4 pr-4">
                <div class="card mb-4">
                    <div class="card-body">

                        <form  method="POST">
                            <div class="row">
                                <div class="form-group col-sm-6">
                                    <label>Voornaam en achternaam:</label>
                                    <input type="text" name="GebruikerNaam" class="form-control form-control-sm" required />
                                </div>
                                <div class="form-group col-sm-6">
                                    <label for="email">Emailadres:</label>
                                    <input type="email" name="Email" class="form-control form-control-sm" required />
                                </div>
                            </div>
                            <div class="row">
                                <div class="form-group col-sm-6">
                                    <label for="loon">Loon per uur:</label>
                                    <input type="number" name="LoonPerUur" class="form-control form-control-sm" required />
                                </div>
                                <div class="form-group col-sm-6">
                                    <label for="password">Wachtwoord:</label>
                                    <input type="password" name="Wachtwoord" class="form-control form-control-sm" required />>
                                </div>
                            </div>

                            <div class="row">
                                <div class="form-group col-sm-6">
                                    <label>Rol:
                                        <select name="Rol" class="form-control form-control-sm">
                                            <option value="consultant">consultant</option>
                                            <option value="hr">hr</option>
                                            <option value="manager">manager</option>
                                        </select>
                                        
                                    </label>
                                </div>
                            </div>

                            <input type="text" name="BedrijfId" value=<?php echo $_SESSION['bedrijfId']; ?> style="display:none;" >
                            <br>
                            <button type="submit" class="btn btn-sm px-4 mb-2 addConsultantBtn">Toevoegen</button>
                            <button type="button" onclick="history.back();" class="btn btn-sm px-4 mb-2 addConsultantBtn">Annuleren</button>
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
<script src="../javascript/addEmployees.js"></script>
<!--<script src="../javascript/addConsultant.js"></script>-->
</body>