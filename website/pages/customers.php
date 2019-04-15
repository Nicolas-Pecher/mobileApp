<?php
/**
 * Created by PhpStorm.
 * User: Yasmine
 * Date: 15/04/2019
 * Time: 13:48
 */

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
                <p class="small"><i class="fas fa-home"></i>/ &nbsp;Klanten</p>
            </div>
            <div class="container-fluid mx-2">
                <h1 class="mb-4">Klanten</h1>

                <div class="mt-3 d-flex">
                    <div class="">
                        <a href="addCustomer.php" class="btn timesheetsBtn mr-2"><i class="fas fa-plus"></i> Toevoegen</a>
                    </div>
                </div>

                <div class="my-4 tabledisplay">
                    <!--The klanten table is displayed here-->

                </div>
            </div>
        </div>

        <a href="#topPage" class="btn" id="pageButton"><i class="fas fa-caret-up"></i></a>

        <input type="text" id="bedrijfIdValue" value="<?php echo $_SESSION['bedrijfId']; ?>" style="display:none;" >

        <footer class="border-top small text-center">
            <p class="pt-2">&copy; Copyright 2019, Project Mobile Apps groep 2</p>
        </footer>

    </div>
    <!-- /#page-content-wrapper -->



</div>
<!-- /#wrapper -->

<?php include './components/footer.php'; ?>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
<script src="../javascript/showActivePage.js"></script>
<script src="../javascript/components/displayList.js"></script>
<script src="../javascript/customers.js"></script>

</body>