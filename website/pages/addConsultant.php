<?php 
        include './components/header.php';
        include 'components/activeUser.php';
?>
<body>
<div class="d-flex" id="wrapper">
    
        <?php include './components/sidebar.php'; ?>

        <!-- Page content -->
        <div id="page-content-wrapper">

        <?php include './components/topNavigation.php';?>

        <div class="container m-3 ml-3">
            <p class="small pt-2"><i class="fas fa-home"></i>/  Consultants / Toevoegen consultant</p>
        </div>

        <div class="container m-3">
            <h1>Toevoegen consultant</h1>

            <div class="container mt-4 mr-4">
                <form action="#">
                    <p class="">Account</p>
                    <input type="text" placeholder="voorbeeld@hotmail.com" class="form-control col-4">
                    <br>
                    <input type="text" placeholder="wachtwoord" class="form-control col-4">
                </form>
            </div>

            <div class="container mt-4 mr-4">
                    <p>Projecten</p>
                    <form>
                        <div class="form-group d-flex">
                        <select class="form-control mr-4 form-control-sm smallerBox" id="projectConsultant">
                            <option>Project1</option>
                            <option>Project2</option>
                            <option>Project3</option>
                        </select>
                        </div>
                        <div class="form-group d-flex">
                        <select class="form-control mr-4 form-control-sm" id="projectConsultant">
                            <option>Project1</option>
                            <option>Project2</option>
                            <option>Project3</option>
                        </select>
                        </div>
                        <br>
                        <button class="btn btn-sm mt-1" id="addNewProjectBtn"><i class="fas fa-plus"></i></button>
                        <br>
                        <a href="consultants.php" class="btn btn-danger projectBtn mt-4">Toevoegen</a>
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
</body>