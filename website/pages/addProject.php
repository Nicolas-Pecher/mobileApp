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
            <p class="small pt-2"><i class="fas fa-home"></i>/ Projecten / Toevoegen project</p>
        </div>

        <div class="container m-3">
            <h1>Toevoegen project</h1>

            <div class="mt-4 pr-4 d-flex">
                <form action="" class="row" id="formProject">
                    <div class="col-sm-6 float-left">
                        <div class="form-group">
                            <label for="projectName">Project</label>
                            <input type="text" placeholder="Projectnaam" class="form-control form-control-sm" id="projectName" name="naamProject">
                        </div>
                        <div class="form-group">
                            <select class="form-control form-control-sm" id="selectKlant">

                            </select>
                        </div>
                        <div class="form-group">

                        </div>
                        <div class="form-group form-check">
                            <label class="form-check-label">
                                <input class="form-check-input" type="checkbox" name="overuren"> Overuren toestaan
                            </label>
                        </div>
                    </div>
                    <div class="col-sm-6 float-right">
<!--                        <div class="form-group">-->
<!--                            <label for="">Activiteiten</label>-->
<!--                            <input type="text" placeholder="Activiteit1" class="form-control form-control-sm mb-2">-->
<!--                            <input type="text" placeholder="Activiteit2" class="form-control form-control-sm mb-2">-->
<!--                            <input type="text" placeholder="Activiteit3" class="form-control form-control-sm mb-2">-->
<!--                            <button class="btn btn-sm mt-2" id="addNewProjectBtn"><i class="fas fa-plus"></i></button>-->
<!--                        </div>-->
                    </div>
                    <button href="projects.php" class="btn projectBtn" type="submit" id="toevoegenProjectBtn">Toevoegen</button>
                </form>

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

<script src="../javascript/showActivePage.js"></script>
<script src="../javascript/projects.js"></script>
<script src="../javascript/addProject.js"></script>

</body>