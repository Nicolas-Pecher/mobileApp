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
            <div class="col-xs-6">
                <div class="container mt-4 mr-4">
                    <p class="">Project</p>
                    <input type="text" placeholder="Projectnaam" class="form-control col-4">
                    <br>
                    <div class="dropdown mb-4">
                        <button class="btn btn-outline-secondary btn-sm dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Kies een klant
                        </button>
                        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                            <a class="dropdown-item" href="#">klant</a>
                            <a class="dropdown-item" href="#">Klant</a>
                            <a class="dropdown-item" href="#">Klant</a>
                        </div>
                    </div>
                    <p class="pr-3">Overuren toestaant <input type="checkbox"><p>
             </div>

            </div>
            <div class="col-xs-6">
            <div class="container mt-4 mr-4">
                    <p class="">Project</p>
                    <input type="text" placeholder="Projectnaam" class="form-control col-4">
                    <br>
                    <div class="dropdown mb-4">
                        <button class="btn btn-outline-secondary btn-sm dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Kies een klant
                        </button>
                        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                            <a class="dropdown-item" href="#">klant</a>
                            <a class="dropdown-item" href="#">Klant</a>
                            <a class="dropdown-item" href="#">Klant</a>
                        </div>
                    </div>
                    <p class="pr-3">Overuren toestaant <input type="checkbox"><p>
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
    <script src="../javascript/addConsultant.js"></script>
</body>