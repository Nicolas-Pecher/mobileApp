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
                <div class="col-xs-6 ml-5 mr-5 mt-3">
                    <form>
                        <div class="form-group">
                        <h5>Account</h5>
                        <input type="text" placeholder="consultant email" class="form-control mr-2 mb-2 form-control-sm">
                        <input type="password" placeholder="consultant wachtwoord" class="form-control mr-2 form-control-sm">
                        </div>
                        <button class="btn btn-secondary">Wachtwoord wijzigen</button>
                    </form>
                </div>
                <div class="col-xs-6 form-group mt-3 ml-5">
                    <div class="border">
                      <h5 class="ml-4">Projecten</h5>
                      <p class="border-bottom ml-4 mr-4">Project1</p>
                      <p class="border-bottom ml-4 mr-4">Project2</p>
                      <p class="border-bottom ml-4 mr-4">Project3</p>
                      <form>
                      <select class="form-control form-control-sm mr-4" id="projectConsultant">
                              <option>Kies Project</option>
                              <option>Integration project</option>
                              <option>Software project II</option>
                      </select>
                      </form>
                    </div>
                </div>
            </div>

            <div class="row">
            <div class="mt-5 mr-3 col-11">
                <div class="border">
                <div class="d-flex">
                <p class=" red mr-5 ml-4 mt-2">Timesheets</p><div class="d-flex justify-content-end"><p class="red ml-5 mt-2">Totaal uren: <span class="black" id="totaalUren">31:30:00</span></p></div>
                </div>
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