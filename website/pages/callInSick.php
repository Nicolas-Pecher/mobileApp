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
            <p class="small pt-2"><i class="fas fa-home"></i>/  Timesheets / Ziek melden</p>
        </div>

        <div class="container m-3">
            <h1>Ziek melden</h1>

            <div class="mt-4 pr-4" id="callInSick-wrapper">
                <form action="">
                    <div class="form-group">
                        <label for="datum">Datum</label>
                        <div class="d-flex">
                            <input type="datetime-local" class="form-control mr-2 form-control-sm" id="beginTijd">
                            <i class="fas fa-long-arrow-alt-right mt-2"></i>
                            <input type="datetime-local" class="form-control ml-2 form-control-sm" id="eindTijd">
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="mededeling">Mededeling</label>
                        <textarea class="form-control form-control-sm" rows="2" id="mededeling"></textarea>
                    </div>
                    <a href="timesheets.php" class="btn" id="toevoegenCallInSickBtn">Toevoegen</a>
                </form>
            </div>
        </div>

        <a href="#topPage" class="btn" id="pageButton"><i class="fas fa-caret-up"></i></a>

    </div>
    <!-- /#page-content-wrapper -->

</div>
<!-- /#wrapper -->

<?php include './components/footer.php'; ?>

<script src="../javascript/components/showActivePage.js"></script>
<script src="../javascript/timesheets.js"></script>

</body>
</html>

