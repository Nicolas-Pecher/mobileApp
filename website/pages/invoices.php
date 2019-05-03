<!--factuur template gevonden op https://www.bootply.com/xb50zMUQTe-->
<?php
include './components/header.php';

if (!isset($_SESSION['gebruikerId'])) {
    header("Location: login.php");
}
?>

<body>

    <div class="d-flex" id="wrapper">
        <input type="text" id="bedrijfIdInvoices" value="<?php echo $_SESSION['bedrijfId']; ?>" style="display:none;">
        <?php include './components/sidebar.php'; ?>

        <!-- Page content -->
        <div id="page-content-wrapper">

            <?php include './components/topNavigation.php'; ?>

            <div class="container m-3 ml-3">
                <p class="small pt-2"><i class="fas fa-home"></i>/ Facturen</p>
            </div>
            <div class="container m-3">
                <div class="container">
                    <div class="form-group">
                        <div class="btn-group">
                            <button type="button" class="btn btn-danger dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Kies Klant
                            </button>
                            <button id="genPDF" class="btn btn-secondary ml-4">Print Factuur</button>
                            <div id="listKlanten" class="dropdown-menu">
                                <!--uit ajax call-->
                            </div>
                        </div>

                    </div>

                    <div class="text-right">
                        <address>
                            <span class="lichtGrijs">Datum van verstuur</span>
                            <br>
                            <span id="datumVerstuur"></span>
                        </address>
                    </div>
                    <hr>

                    <div id="factuur">

                        <div id="divSameLine">

                            <!--gegevens klant-->
                            <div id="divLinks" class="text-left">
                                <address>
                                    <span class="lichtGrijs">Klant</span>
                                    <span id="bedrijfNaam"></span><br>
                                    <span id="Huisnummer"></span> <span id="straatNaam"></span><br>
                                    <span id="postcode"></span> <span id="gemeente"></span><br>
                                    <span id="land"></span><br>
                                    <span id="btwNummer"></span><br>
                                    Munt: EUR<br>
                                    <span id="rekeningNummer"></span><br>
                                </address>
                            </div>

                            <!--gegevens consulting bedrijf-->
                            <div id="divRechts" class="text-right mb-5">
                                <address id="adresBedrijf">
                                    <span id="naamBedrijf" class="lichtGrijs"></span>
                                    <br>
                                    Uiterste datum: <span id="uitersteDatum"></span><br>
                                    Munt: EUR<br>
                                    Rekeningnummer:<span id="rekeningNummerOns"></span><br>
                                </address>
                            </div>

                        </div>

                        <table class="table mt-5">
                            <thead>
                                <tr>
                                    <th scope="col">Project</th>
                                    <th scope="col">Prijs Consultanten</th>
                                    <th scope="col">Totaal Uren</th>
                                    <th scope="col">Subtotaal</th>
                                </tr>
                            </thead>
                            <tbody id="inhoud">
                                <!--wordt gevuld in invoices.js-->
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <!--einde container-->

            <a href="#topPage" class="btn" id="pageButton"><i class="fas fa-caret-up"></i></a>

        </div>
        <!-- /#page-content-wrapper -->

    </div>
    <!-- /#wrapper -->

    <?php include './components/footer.php'; ?>

    <script src="../javascript/showActivePage.js"></script>
    <script src="../javascript/invoices.js"></script>
    <script src="https://unpkg.com/jspdf@latest/dist/jspdf.min.js"></script>
    <script src="https://unpkg.com/jspdf-autotable"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/html2canvas/0.4.1/html2canvas.js"></script>
    <script src="../javascript/jsPDF.JS"></script>

</body>

</html>