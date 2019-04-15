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
                        <form action="../controllers/insertConsultant.php" method="POST" enctype="multipart/form-data" id="formConsultant">
                            <div class="row">
                                <div class="form-group col-sm-6">
                                    <label for="naamConsultant">Voornaam en achternaam:</label>
                                    <input type="text" name="naamConsultant" class="form-control form-control-sm" value="<?php echo $naamConsultant; ?>"/>
                                </div>
                                <div class="form-group col-sm-6">
                                    <label for="email">Emailadres:</label>
                                    <input type="email" name="emailConsultant" class="form-control form-control-sm" value="<?php echo $emailConsultant; ?>"/>
                                </div>

                            </div>
                            <div class="row">
                                <div class="form-group col-sm-6">
                                    <label for="loon">Loon per uur:</label>
                                    <input type="text" name="loonConsultant" class="form-control form-control-sm" value="<?php echo $loonConsultant; ?>">
                                </div>
                                <div class="form-group col-sm-6">
                                    <label for="password">Wachtwoord:</label>
                                    <input type="password" name="wachtwoordConsultant" class="form-control form-control-sm" value="<?php echo $wachtwoordConsultant; ?>">
                                </div>
                            </div>

                            <input type="text" name="bedrijfId" id="bedrijfIdAddConsultant" value="<?php echo $_SESSION['bedrijfId']; ?>" style="display:none;" >
                            <!--                    <div class="form-group mt-4">-->
                            <!--                        <label for="">Projecten</label>-->
                            <!--                        <select class="form-control mr-4 form-control-sm" id="selectProject">-->
                            <!---->
                            <!--                        </select>-->
                            <!--                    </div>-->
                            <!--                    <a href="" class="btn btn-sm mt-1" id="addNewProjectBtn"><i class="fas fa-plus"></i></a>-->
                            <br>
                            <button type="submit" name="submit" class="btn btn-sm px-4 mb-2" id="addConsultantBtn">Toevoegen</button>
                            <button type="button" onclick="history.back();" class="btn btn-sm px-4 mb-2" id="addConsultantBtn">Annuleren</button>
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
<script src="../javascript/consultants.js"></script>
<!--<script src="../javascript/addConsultant.js"></script>-->
</body>