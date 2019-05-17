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
            <p class="small"><i class="fas fa-home"></i>/ Projecten</p>
        </div>

        <div class="container-fluid mx-2">
            <h1 class="mb-4">Projecten</h1>

            <div class="mt-3 d-flex">
                <div class="">
                    <a href="addProject.php" class="btn mr-2" id="addBtn"><i class="fas fa-plus"></i> Toevoegen</a>
                </div>
            </div>

            <div class="my-4 tabledisplay">
               <!--table wordt gegenereerd met de functie displayList in de file displayList.js-->
            </div>
        </div>

        <a href="#topPage" class="btn" id="pageButton"><i class="fas fa-caret-up"></i></a>

        <input type="text" id="bedrijfIdValue" value="<?php echo $_SESSION['bedrijfId']; ?>" style="display:none;" >

    </div>
    <!-- /#page-content-wrapper -->

</div>
<!-- /#wrapper -->

<?php include './components/footer.php'; ?>

<script src="../javascript/components/showActivePage.js"></script>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
<script src="../javascript/projects.js"></script>
<script src="../javascript/components/displayList.js"></script>

</body>