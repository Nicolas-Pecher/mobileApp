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
            <p class="small pt-2"><i class="fas fa-home"></i>/ Consultants / Maxime De Grauwe</p>
        </div>

        <div class="container m-3">
            <h1>Maxime De Grauwe</h1>
            <p>Consultant</p>
            <hr class="mr-4">

            <div class="row mt-4">
                <div class="col-sm-4">
                    <form action="">
                        <div class="form-group">
                            <label for="">Account</label>
                            <input type="email" placeholder="Emailadres" class="form-control form-control-sm mb-4">
                            <input type="password" placeholder="Huidig wachtwoord" class="form-control form-control-sm mb-2">
                            <input type="password" placeholder="Nieuw wachtwoord" class="form-control form-control-sm">
                        </div>
                        <button type="submit" class="btn btn-sm" id="changePasswordBtn">Wachtwoord wijzigen</button>
                    </form>
                </div>
                <div class="col-sm-3">
                        <table class="table table-bordered thead-light">
                            <thead>
                                <tr>
                                    <th>Huidige projecten</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Project Mobile apps</td>
                                </tr>
                                <tr>
                                    <td>Software Project II</td>
                                </tr>
                                <tr>
                                    <td>Integration Project</td>
                                </tr>
                            </tbody>
                        </table>
                        <form action="" class="d-flex mt-2">
                            <div class="form-group">
                                <select class="form-control form-control-sm" id="projectConsultant">
                                    <option>Kies Project</option>
                                    <option>Integration project</option>
                                    <option>Software project II</option>
                                </select>
                            </div>
                            <a href="" class="btn btn-sm mb-4 ml-2" id="extraEntryBtn"><i class="fas fa-plus"></i></a>
                        </form>
                </div>
            </div>

            <div class="row">
                <div class="col-11">
                    <div class="border pl-4 pr-4 pt-2">
                        <div>
                            <p class=" red mt-2 float-left">Timesheets</p>
                            <p class="red mt-2 float-right">Totaal uren: <span class="black" id="totaalUren">&emsp;31:30:00</span></p>
                        </div>
                        <table class="table table-striped border">
                            <thead>
                            <tr>
                                <th scope="col">Project</th>
                                <th scope="col">Datum</th>
                                <th scope="col">Van</th>
                                <th scope="col">Tot</th>
                                <th scope="col">Totaal</th>
                                <th scope="col"></th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td>Project Mobile Apps</td>
                                <td>04/03/2019</td>
                                <td>8:10:00</td>
                                <td>19:00:00</td>
                                <td>10:50:00</td>
                                <td><a href="modifyTimeEntry.php" class="btn btn-outline-secondary btn-sm">Wijzig</a></td>
                            </tr>
                            <tr>
                                <td>Project Mobile Apps</td>
                                <td>03/03/2019</td>
                                <td>8:10:00</td>
                                <td>19:00:00</td>
                                <td>10:50:00</td>
                                <td><a href="modifyTimeEntry.php" class="btn btn-outline-secondary btn-sm">Wijzig</a></td>
                            </tr>
                            <tr>
                                <td>Project Mobile Apps</td>
                                <td>02/03/2019</td>
                                <td>8:10:00</td>
                                <td>19:00:00</td>
                                <td>10:50:00</td>
                                <td><a href="modifyTimeEntry.php" class="btn btn-outline-secondary btn-sm">Wijzig</a></td>
                            </tr>
                            </tbody>
                        </table>
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

</body>