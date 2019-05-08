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
            <p class="small"><i class="fas fa-home"></i>/ &nbsp;Projecten&nbsp; / &nbsp;Toevoegen project</p>
        </div>

        <div class="container-fluid mx-2">

            <h1 class="mb-4">Toevoegen project</h1>

            <div class="mt-4 pr-4">
                <div class="card">
                    <div class="card-body">
                        <form action="" id="formProject">
                            <div class="form-group">
                                <label for="naamProject">Naam:</label>
                                <input type="text" class="form-control form-control-sm" id="naamProject" name="naamProject">
                            </div>
                            <div class="form-group">
                                <label for="selectKlant">Klant:</label>
                                <select class="form-control form-control-sm" id="selectKlant" name="selectKlant">

                                </select>
                            </div>
                            <div class="form-group form-check">
                                <label class="form-check-label">
                                    <input class="form-check-input mt-2" type="checkbox" name="overuren"> Overuren toestaan
                                </label>
                            </div>
                            <button type="submit" class="btn btn-sm px-4 mb-2 projectBtn" type="submit" id="addProjectBtn">Toevoegen</button>
                            <button type="button" onclick="history.back();" class="btn btn-sm px-4 mb-2" id="addProjectBtn">Annuleren</button>
                        </form>
                    </div>
                </div>


            </div>
            <!--einde row-->

        </div><!--einde container-->
        <a href="#topPage" class="btn" id="pageButton"><i class="fas fa-caret-up"></i></a>

        <input type="text" id="bedrijfIdAddProject" value="<?php echo $_SESSION['bedrijfId']; ?>" style="display:none;" >

    </div>
    <!-- /#page-content-wrapper -->
</div>
<!-- /#wrapper -->
<?php include './components/footer.php'; ?>

<script src="../javascript/components/showActivePage.js"></script>
<script src="../javascript/projects.js"></script>
<script src="../javascript/addProject.js"></script>

</body>