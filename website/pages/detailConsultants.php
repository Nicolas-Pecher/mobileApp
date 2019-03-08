<?php 
        include './components/header.php';
        include './components/activeUser.php';
?>
<body>

<div class="d-flex" id="wrapper">
    
        <?php include './components/sidebar.php'; ?>

        <!-- Page content -->
        <div id="page-content-wrapper">

        <?php include './components/topNavigation.php';?>

        <div class="container m-3 ml-3">
            <p class="small pt-2"><i class="fas fa-home"></i>/  Consultants / VOORNAAM ACHTERNAAM</p>
        </div>

        <div class="container m-3">
            <h1>VOORNAAM ACHTERNAAM</h1>

            <div class="row">
                <div class="col-xs-6 ml-5 mr-5">
                    <form>
                        <div class="form-group">
                        <p>Account</p>
                        <br>
                        <input type="text" placeholder="consultant email" class="form-control mr-2 form-control-sm">
                        <br>
                        <input type="password" placeholder="consultant wachtwoord" class="form-control mr-2 form-control-sm">
                        <br>
                        </div>
                        <button class="btn btn-secondary">Wijzig wachtwoord</button>
                    </form>
                </div>
                <div class="col-xs-6 form-group mr-5">
                    <div class="border">
                <p>Projecten</p>
                    <p>Project1</p>
                    <p>Project2</p>
                    <p>Project3</p>
                    <select class="form-control mr-4 form-control-sm" id="projectConsultant">
                            <option>Kies Project</option>
                            <option>Integration project</option>
                            <option>Software project II</option>
                    </select>
                    </div>
                </div>
            </div>

            <div class="row">
            <div class="mt-5 mr-3 col-12">
                <div class="border">
                <p>Timesheets</p>
                <table class="table table-striped">
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
                      <td>Projectnaam</td>
                      <td>23/09/2014</td>
                      <td>8:10:00</td>
                      <td>19:00:00</td>
                      <td>10:50:00</td>
                      <td><a href="addTimeEntry.php"><button type="button" class="btn btn-outline-secondary btn-sm">Wijzig</button></a></td>
                    </tr>
                    <tr>
                    <td>Projectnaam</td>
                      <td>23/09/2014</td>
                      <td>8:10:00</td>
                      <td>19:00:00</td>
                      <td>10:50:00</td>
                      <td><a href="addTimeEntry.php"><button type="button" class="btn btn-outline-secondary btn-sm">Wijzig</button></a></td>
                    </tr>
                    <tr>
                    <td>Projectnaam</td>
                      <td>23/09/2014</td>
                      <td>8:10:00</td>
                      <td>19:00:00</td>
                      <td>10:50:00</td>
                      <td><a href="addTimeEntry.php"><button type="button" class="btn btn-outline-secondary btn-sm">Wijzig</button></a></td>
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