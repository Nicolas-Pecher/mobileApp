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
            <p class="small pt-2"><i class="fas fa-home"></i>/ Profiel</p>
        </div>

        <div class="container m-3">
            <h1>Profiel</h1>

            <div class="mt-4 pr-4">
                <div class="row">
                    <div class="col-sm-6">
                        <h6>Gegevens</h6>
                        <table class="table table-sm table-borderless">
                            <tbody>
                                <tr>
                                    <th>Naam</th>
                                    <td><?php echo $_SESSION['naam']; ?></td>
                                </tr>
                                <tr>
                                    <th>Emailadres</th>
                                    <td><?php echo $_SESSION['email']; ?></td>
                                </tr>
                                <tr>
                                    <th>Werkgever</th>
                                    <td id="bedrijfNaamProfile"></td>
                                    <input type="text" id="bedrijfIdProfile" value="<?php echo $_SESSION['bedrijfId']; ?>" style="display:none;" >
                                </tr>
                                <tr>
                                    <th>Rol</th>
                                    <td><?php echo $_SESSION['gebruikerRol']; ?></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <form action="" class="col-sm-4">
                        <div class="form-group">
                            <label for="">Wijzig wachtwoord</label>
                            <input type="password" placeholder="Huidig wachtwoord" class="form-control form-control-sm mb-2 mt-2 col-sx-4">
                            <input type="password" placeholder="Nieuw wachtwoord" class="form-control form-control-sm">
                        </div>
                        <button type="submit" class="btn btn-sm" id="changePasswordBtn">Wachtwoord wijzigen</button>
                    </form>
                </div>
                <div class="row">

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
<script src="../javascript/profile.js"></script>

</body>

</html>
