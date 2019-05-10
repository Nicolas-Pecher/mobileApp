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

        <div id="content">

            <div class="container my-4 mx-2">
                <p class="small"><i class="fas fa-home"></i>/ &nbsp;Consultants</p>
            </div>

            <div class="container-fluid mx-2">
                <h1 class="mb-4">Consultants</h1>

                <div class="mt-3 d-flex">
                    <div class="">
                        <a href="addConsultant.php" class="btn timesheetsBtn mr-2"><i class="fas fa-plus"></i> Toevoegen</a>
                    </div>
                </div>

                <div class="my-4 tabledisplay">
                    <!--The consultants table is displayed here-->

                </div>
            </div>

        </div>

        <a href="#topPage" class="btn" id="pageButton"><i class="fas fa-caret-up"></i></a>

        <input type="text" id="bedrijfIdConsultants" value="<?php echo $_SESSION['bedrijfId']; ?>" style="display:none;" >

    </div>
    <!-- /#page-content-wrapper -->

</div>
<!-- /#wrapper -->

<?php include './components/footer.php'; ?>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
<script src="../javascript/components/showActivePage.js"></script>
<script src="../javascript/consultants.js"></script>
<script src="../javascript/components/displayList.js"></script>

</body>