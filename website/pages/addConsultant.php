<?php
    include './components/header.php';
    include 'components/activeUser.php';
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
                <form action="#">
                    <div class="form-group">
                        <label for="email">Account</label>
                        <input type="email" placeholder="Emailadres" class="form-control form-control-sm col-4">
                    </div>
                    <div class="form-group">
                        <input type="password" placeholder="Wachtwoord" class="form-control form-control-sm col-4 mb-3">

                    </div>
                    <div class="form-group mt-4">
                        <label for="">Projecten</label>
                        <select class="form-control mr-4 form-control-sm" id="projectConsultant">
                            <option>Project1</option>
                            <option>Project2</option>
                            <option>Project3</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <select class="form-control mr-4 form-control-sm" id="projectConsultant">
                            <option>Project1</option>
                            <option>Project2</option>
                            <option>Project3</option>
                        </select>
                    </div>
                    <a href="" class="btn btn-sm mt-1" id="addNewProjectBtn"><i class="fas fa-plus"></i></a>
                    <br>
                    <a href="consultants.php" class="btn mt-4" id="addConsultantBtn">Toevoegen</a>
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