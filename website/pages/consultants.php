<?php
    include './components/header.php';
    include './components/activeUser.php';
?>

<body>

<div class="d-flex" id="wrapper">

    <?php include './components/sidebar.php'; ?>

    <!-- Page content -->
    <div id="page-content-wrapper">

        <?php include './components/topNavigation.php'; ?>

        <div class="container m-3 ml-3">
            <p class="small pt-2"><i class="fas fa-home"></i>/ Consultants</p>
        </div>

        <div class="container m-3">
            <h1>Consultants</h1>

            <div class="mt-3 d-flex">
                <div class="">
                    <a href="addConsultant.php" class="btn timesheetsBtn mr-2"><i class="fas fa-plus"></i> Toevoegen</a>
                </div>
            </div>

            <div class="mt-4 mr-4 tabledisplay">
                <option id="bedrijfIdVoorConsultant" value="<?php echo $_SESSION['bedrijfId']; ?>" style="display:none;">
               <!--The consultants table is displayed here-->
               
            </div>
        </div>

        <a href="#topPage" class="btn" id="pageButton"><i class="fas fa-caret-up"></i></a>

    </div>
    <!-- /#page-content-wrapper -->

</div>
<!-- /#wrapper -->

<?php include './components/footer.php'; ?>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
<script src="../javascript/showActivePage.js"></script>
<script src="../javascript/consultants.js"></script>
<script src="../javascript/components/displayList.js"></script>

</body>