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
<!--                    <div class="form-group mt-4">-->
<!--                        <label for="">Projecten</label>-->
<!--                        <select class="form-control mr-4 form-control-sm" id="selectProject">-->
<!---->
<!--                        </select>-->
<!--                    </div>-->
<!--                    <a href="" class="btn btn-sm mt-1" id="addNewProjectBtn"><i class="fas fa-plus"></i></a>-->
                    <br>
                    <button href="" class="btn mt-4" id="addConsultantBtn">Toevoegen</button>
                </form>
            </div>

        </div>

        <a href="#topPage" class="btn" id="pageButton"><i class="fas fa-caret-up"></i></a>

        <input type="text" id="bedrijfIdAddConsultant" value="<?php echo $_SESSION['bedrijfId']; ?>" style="display:none;" >

    </div>
    <!-- /#page-content-wrapper -->
</div>
<!-- /#wrapper -->
<?php include './components/footer.php'; ?>
<script src="../javascript/showActivePage.js"></script>
<script src="../javascript/consultants.js"></script>
<script src="../javascript/addConsultant.js"></script>
</body>