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
                                    <td>Yasmine De Wolf</td>
                                </tr>
                                <tr>
                                    <th>Emailadres</th>
                                    <td>yasminedewolf@hotmail.com</td>
                                </tr>
                                <tr>
                                    <th>Werkgever</th>
                                    <td>Delaware</td>
                                </tr>
                                <tr>
                                    <th>Rol</th>
                                    <td>Consultant</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div class="col-sm-6">
                        <table class="table table-bordered thead-light">
                            <thead>
                            <tr>
                                <th>Huidige projecten</th>
                                <th>Klant</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td>Project Mobile apps</td>
                                <td>Delaware</td>
                            </tr>
                            <tr>
                                <td>Software Project II</td>
                                <td>Delaware</td>
                            </tr>
                            <tr>
                                <td>Integration Project</td>
                                <td>IBM</td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div class="row">
                    <form action="" class="col-sm-4">
                        <div class="form-group">
                            <label for="">Wijzig wachtwoord</label>
                            <input type="password" placeholder="Huidig wachtwoord" class="form-control form-control-sm mb-2 mt-2 col-sx-4">
                            <input type="password" placeholder="Nieuw wachtwoord" class="form-control form-control-sm">
                        </div>
                        <button type="submit" class="btn btn-sm" id="changePasswordBtn">Wachtwoord wijzigen</button>
                    </form>
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

</body>

</html>
