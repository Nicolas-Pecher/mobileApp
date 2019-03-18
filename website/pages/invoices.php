<!--factuur template gevonden op https://www.bootply.com/xb50zMUQTe-->
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
            <p class="small pt-2"><i class="fas fa-home"></i>/  Facturen</p>
        </div>

        <div class="container m-3">
            <div id="testDiv">
            <div class="container">
            <div class="text-center">
         <h1 class="text-left">Factuur</h1>
    </div>

     <div class="row">
        <div class="col-md-12">
            <div class="panel panel-default">
                <div class="panel-heading">
                    <!-- <h3 class="panel-title"></h3> -->
					<hr>
                    <div class="row">
                        
                        <div class="col-md-5">
                            <div class="form-group">
                                <label for="klant" class="col-sm-2 control-label">Klant</label>
                                <div class="col-sm-10">
                                    <input class="form-control" id="klant" placeholder="klant" type="text">
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="form-group">
                              
                                <label for="datum" class="col-sm-5 control-label">Datum</label>
                                <div class="col-sm-7">
                                    <input class="form-control" id="datum" placeholder="datum factuur" type="date">
                                </div>
                            </div>
                        </div>
                        <div class="col-md-3 target">
                            <div class="form-group">
                                <label for="id" class="col-sm-3 control-label">Id</label>
                                <div class="col-sm-9">
                                    <input class="form-control" id="id" type="text">
                                </div>
                            </div>
                        </div>
                    </div> <!-- row -->
                    <br>
                    <div class="row">
                        <div class="col-md-6"> 
                          <address>
                           <strong class="">VOORNAAM ACHTERNAAM</strong><br>
                            STRAATNAAM STRAATNUMMER<br>
                            GEMEENTE<br>
                            LAND<br>                          
                           </address>
                        </div>
                   </div> <!-- row -->
				</div> <!-- panel heading -->
				<div class="panel-body">
				  <h3 class="panel-title">Details</h3>
				  
				  <table id="table1" class="table table-condensed">
					<thead>
					  <tr>
                        <th>Product</th>
                        <th>Klant</th>
						<th>Omschrijving</th>
                        <th>Prijs per uur</th>
                        <th>Totaal uren</th>
						<th>BTW percent</th>
						<th>Totaal</th>
					  </tr>
					</thead>
					<tbody>
					  <tr>
						<td class="">Controle</td>
						<td class="">Axxes</td>
						<td class="">Testen of het software secure is</td>
						<td class="">34.99</td>
                        <td class="">12:00:00</td>
                        <td>21%</td>
                        <td>419.88</td>
                      </tr>
                      <tr>
						<td class="">Controle</td>
						<td class="">Axxes</td>
						<td class="">Testen of het software secure is</td>
						<td class="">34.99</td>
                        <td class="">12:00:00</td>
                        <td>21%</td>
                        <td>419.88</td>
                      </tr>
                      <tr>
						<td class="">Controle</td>
						<td class="">Axxes</td>
						<td class="">Testen of het software secure is</td>
						<td class="">34.99</td>
                        <td class="">12:00:00</td>
                        <td>21%</td>
                        <td>419.88</td>
					  </tr>
					</tbody>
				  </table>
				</div> <!-- panel body -->
				<div class="footer-copyright text-center border-top">Einde</div>
             </div> <!-- panel -->
        </div> <!-- col -->
    </div> <!-- row -->
</div>
            </div>
            <button id="genPDF" class="btn btn-secondary">Download PDF</button>
        </div>

        <a href="#topPage" class="btn" id="pageButton"><i class="fas fa-caret-up"></i></a>

    </div>
    <!-- /#page-content-wrapper -->

</div>
<!-- /#wrapper -->

<?php include './components/footer.php'; ?>

<script src="../javascript/showActivePage.js"></script>
<script src="../javascript/invoices.js"></script>
<script src="https://unpkg.com/jspdf@latest/dist/jspdf.min.js"></script>
<script src="../javascript/jsPDF.JS"></script>

</body>
</html>
