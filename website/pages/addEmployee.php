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

                        <form id="addEmployeeForm">
                            <div class="row">
                                <div class="form-group col-sm-6">
                                    <label for="naamEmployee">Voornaam en achternaam:</label>
                                    <input type="text" name="naamEmployee" id="naamEmployee" class="form-control form-control-sm"/>
                                    <span class="text-danger small" id="naamEmployeeError"></span>
                                </div>
                                <div class="form-group col-sm-6">
                                    <label for="emailEmployee">Emailadres:</label>
                                    <input type="email" name="emailEmployee" id="emailEmployee" class="form-control form-control-sm"/>
                                    <span class="text-danger small" id="emailEmployeeError"></span>
                                </div>
                            </div>
                            <div class="row">
                                <div class="form-group col-sm-6">
                                    <label for="loonEmployee">Loon per uur:</label>
                                    <input type="text" name="loonEmployee" id="loonEmployee" class="form-control form-control-sm"/>
                                    <span class="text-danger small" id="loonEmployeeError"></span>
                                </div>
                                <div class="form-group col-sm-6">
                                    <label for="wachtwoordEmployee">Wachtwoord:</label>
                                    <input type="password" name="wachtwoordEmployee" id="wachtwoordEmployee" class="form-control form-control-sm"/>
                                    <span class="text-danger small" id="wachtwoordEmployeeError"></span>
                                </div>
                            </div>

                            <div class="row">
                                <div class="form-group col-sm-6">
                                    <label>Rol:</label>
                                    <select name="selectEmployeeRol" id="selectEmployeeRol" class="form-control form-control-sm">
                                        <option selected disabled>Kies een rol</option>
                                        <option value="hr">hr</option>
                                        <option value="manager">manager</option>
                                    </select>
                                    <span class="text-danger small" id="rolEmployeeError"></span>
                                </div>
                            </div>

                            <input type="text" id="bedrijfIdValue" value=<?php echo $_SESSION['bedrijfId']; ?> style="display:none;" >
                            <br>
                            <button type="submit" class="btn btn-sm px-4 mb-2 addFormBtn">Toevoegen</button>
                            <button type="button" onclick="history.back();" class="btn btn-sm px-4 mb-2 cancelFormBtn">Annuleren</button>
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
<script src="../javascript/addEmployee.js"></script>
<script src="../javascript/components/validation.js"></script>

</body>