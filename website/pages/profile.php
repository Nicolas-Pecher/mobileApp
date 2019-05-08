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
            <p class="small"><i class="fas fa-home"></i>/ &nbsp;Profiel</p>
        </div>

        <div class="container-fluid mx-2">

            <h1 class="mb-4">Profiel</h1>

            <div class="row">
                <div class="col-sm-6">

                    <div class="card mb-4">
                        <div class="card-header" style="">
                            <h5 class="">Persoonlijke gegevens</h5>
                        </div>
                        <div class="card-body">
                            <form>
                                <div class="form-group">
                                    <label for="name">Naam:</label><br>
                                    <input type="text" name="name" class="form-control form-control-sm" value="<?php echo $_SESSION['naam']; ?>">
                                </div>
                                <div class="form-group">
                                    <label for="email">Emailadres:</label>
                                    <input type="email" name="email" class="form-control form-control-sm" value="<?php echo $_SESSION['email']; ?>">
                                </div>
                                <div class="form-group">
                                    <label for="boss">Werkgever:</label>
                                    <input type="text" name="boss" id="bedrijfNaamProfile" class="form-control form-control-sm" disabled>
                                    <input type="text" id="bedrijfIdProfile" value="<?php echo $_SESSION['bedrijfId']; ?>" style="display: none;" >
                                </div>
                                <div class="form-group">
                                    <label for="roll">Rol:</label>
                                    <input type="text" name="roll" class="form-control form-control-sm" disabled value="<?php echo $_SESSION['gebruikerRol']; ?>">
                                </div>
                                <button type="submit" class="btn btn-sm pl-4 pr-4 mt-3" id="changePasswordBtn">Wijzigen</button>
                            </form>
                        </div>

                    </div>

                </div>

                <div class="col-sm-6">
                    <div class="card">
                        <div class="card-header" style="">
                            <h5 class="">Wachtwoord wijzigen</h5>
                        </div>
                        <div class="card-body">
                            <form action="../controllers/changePassword.php" method="post" enctype="multipart/form-data">
                                <div class="form-group">
                                    <label for="currentPassword">Nieuw wachtwoord:</label>
                                    <input type="password" name="Password" class="form-control form-control-sm">
                                </div>
                                <div class="form-group">
                                    <label for="newPassword">Bevestig wachtwoord:</label>
                                    <input type="password" name="newPassword" class="form-control form-control-sm">
                                </div>
                                <button type="submit" class="btn btn-sm" id="changePasswordBtn">Wachtwoord wijzigen</button>
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

    <script src="../javascript/components/showActivePage.js"></script>
    <script src="../javascript/profile.js"></script>

</body>

</html>
