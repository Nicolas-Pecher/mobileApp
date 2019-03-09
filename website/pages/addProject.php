<?php 
        include './components/header.php';
        $userRol = 'manager';
?>
<body>
<div class="d-flex" id="wrapper">
    
        <?php include './components/sidebar.php'; ?>

        <!-- Page content -->
        <div id="page-content-wrapper">

        <?php include './components/topNavigation.php';?>

        <div class="container m-3 ml-3">
            <p class="small pt-2"><i class="fas fa-home"></i>/  Projecten / Toevoegen projecten</p>
        </div>

        <div class="container m-3">
            <h1>Toevoegen project</h1>
            <div class="row">
            <div class="col-xs-6">
                <div class="container mt-4 ml-4 mr-6">
                    <p class="">Project</p>
                    <form action="#">
                    <input type="text" placeholder="Projectnaam" class="form-control col-11">
                    <br>
                    <div class="form-group d-flex">
                        <select class="form-control mr-4 form-control-sm" id="klantProject">
                            <option>Klant1</option>
                            <option>Klant2</option>
                            <option>Klant3</option>
                        </select>
                    </div>
                    <p class="pr-3">Overuren toegestaan <input type="checkbox"><p>
                    <a href="projects.php" class="btn btn-danger projectBtn mt-5"> Toevoegen</a>
             </div>

            </div>
            <div class="col-xs-6">
            <div class="container mt-4 ml-5">
                    <p class="">Activiteit toevoegen</p>
                    <input type="text" placeholder="Activiteit1" class="form-control col-14">
                    <br>
                    <input type="text" placeholder="Activiteit2" class="form-control col-14">
                    <br>
                    <input type="text" placeholder="Activiteit3" class="form-control col-14">
                    <br>
                    <button class="btn btn-sm mt-1" id="addNewProjectBtn"><i class="fas fa-plus"></i></button>
             </div>
            </div>
            </form>
            </div><!--einde row-->
            
        </div><!--einde container-->
        <a href="#topPage" class="btn" id="pageButton"><i class="fas fa-caret-up"></i></a>

    </div>
        <!-- /#page-content-wrapper -->
</div>
    <!-- /#wrapper -->
    <?php include './components/footer.php'; ?>

    <script src="../javascript/showActivePage.js"></script>
    <script src="../javascript/projects.js"></script>
</body>