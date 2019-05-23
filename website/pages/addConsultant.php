<?php
    include './components/header.php';
    include_once '../controllers/insertConsultant.php';

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
            <p class="small"><i class="fas fa-home"></i>/ &nbsp;Consultants&nbsp; / &nbsp;Toevoegen consultant</p>
        </div>

        <div class="container-fluid mx-2">

            <h1 class="mb-4">Toevoegen consultant</h1>

            <div class="mt-4 pr-4">
                <div class="card mb-4">
                    <div class="card-body">
                        <form id="formConsultant">
                            <div class="row">
                                <div class="form-group col-sm-6">
                                    <label for="naamConsultant">Voornaam en achternaam:</label>
                                    <input type="text" name="naamConsultant" id="naamConsultant" class="form-control form-control-sm" value="<?php //echo $naamConsultant; ?>"/>
                                    <span class="text-danger small" id="naamConsultantError"></span>
                                </div>
                                <div class="form-group col-sm-6">
                                    <label for="email">Emailadres:</label>
                                    <input type="email" name="emailConsultant" id="emailConsultant" class="form-control form-control-sm" value="<?php //echo $emailConsultant; ?>"/>
                                    <span class="text-danger small" id="emailConsultantError"></span>
                                </div>
                            </div>
                            <div class="row">
                                <div class="form-group col-sm-6">
                                    <label for="loon">Loon per uur:</label>
                                    <input type="text" name="loonConsultant" id="loonConsultant" class="form-control form-control-sm" value="<?php //echo $loonConsultant; ?>">
                                    <span class="text-danger small" id="loonConsultantError"></span>
                                </div>
                                <div class="form-group col-sm-6">
                                    <label for="password">Wachtwoord:</label>
                                    <input type="password" name="wachtwoordConsultant" id="wachtwoordConsultant" class="form-control form-control-sm" value="<?php //echo $wachtwoordConsultant; ?>">
                                    <span class="text-danger small" id="wachtwoordConsultantError"></span>
                                </div>
                            </div>

                            <input type="text" name="bedrijfId" id="bedrijfIdValue" value="<?php echo $_SESSION['bedrijfId']; ?>" style="display:none;" >
                            <br>
                            <button type="submit" name="submit" class="btn btn-sm px-4 mb-2" id="addConsultantBtn">Toevoegen</button>
                            <button type="button" onclick="history.back();" class="btn btn-sm px-4 mb-2" id="cancelAddConsultantBtn">Annuleren</button>
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
<script src="../javascript/addConsultant.js"></script>
<script src="../javascript/components/validation.js"></script>

</body>
</html>