<!--factuur template gevonden op https://www.bootply.com/xb50zMUQTe-->
<?php
    include './components/header.php';

    if(!isset($_SESSION['gebruikerId'])) {
        header("Location: login.php");
    }
?>

<body>

    <div class="d-flex" id="wrapper">
    <input type="text" id="bedrijfIdInvoices" value="<?php echo $_SESSION['bedrijfId']; ?>" style="display:none;" >
        <?php include './components/sidebar.php'; ?>

        <!-- Page content -->
        <div id="page-content-wrapper">

            <?php include './components/topNavigation.php'; ?>

            <div class="container m-3 ml-3">
                <p class="small pt-2"><i class="fas fa-home"></i>/ Facturen</p>
            </div>

            <div class="container m-3">
                <div class="container">
                    <div class="text-left">
                        <h1 id="titel" class="text-left">Factuur maken</h1>
                    </div>
                    <div class="form-group">
                        <p>Kies bedrijf:</p>
                        <ul class="list-group" id="listBedrijven">
                            <!--li elementen komen van ajax call in file invoices.js-->
                        </ul>
                    </div>
                    <div class="form-group">
                        <p>Kies klant:</p>
                        <ul class="list-group" id="listKlanten">
                            <!--li elementen komen van ajax call in file invoices.js-->
                        </ul>
                    </div>
                    
                    <div id="factuur">

                        <h3 class="text-left ml-5">Ons bedrijf</h3>

                        <address class="text-left ml-5">
                            Nijverheidskaai 170, 1070 Anderlecht<br>
                            België, tel.: 02 523 37 37
                        </address>

                        <h2 class="ml-5">Factuurnummer: #</h2>

                        <div class="container">
                            <div class="row">
                                <div class="col-sm-6">
                                    <address class="ml-5">
                                        Datum van verstuur:<span id="datumVerstuur"></span><br>
                                        Uiterste datum: <span id="uitersteDatum"></span><br>
                                        <!--Overblijvende dagen:<span id="overblijvendeDagen"></span><br>-->
                                        Munt: EUR<br>
                                        Rekeningnummer:<span id="rekeningNummerOns"></span><br>
                                    </address>
                                </div>
                                <div class="col-sm-6">
                                    <address class="ml-5">
                                        Factuur voor:
                                        <span id="bedrijfNaam"></span><br>
                                        <span id="Huisnummer"></span> <span id="straatNaam"></span><br>
                                        <span id="postcode"></span> <span id="gemeente"></span><br>
                                        <span id="land"></span><br>
                                        BTW nummer:<span id="btwNummer"></span><br>
                                        Munt: EUR<br>
                                        Rekeningnummer:<span id="rekeningNummer"></span><br>
                                    </address>
                                </div>
                            </div>
                        </div>
                        <table class="table table-striped mt-5">
                            <thead>
                                <tr>
                                    <th scope="col">Project</th>
                                    <th scope="col">Gewerkte uren</th>
                                    <th scope="col">Overuren</th>
                                    <th scope="col">Prijs per uur</th>
                                    <th scope="col">Subtotaal</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td id="projectNaam"></td>
                                    <td id="gewerkteUren">&euro;</td>
                                    <td id="overUren">&euro;</td>
                                    <td id="prijsPerUur">&euro;</td>
                                    <td id="subtotaal">&euro;</td>
                                </tr>
                            </tbody>
                        </table>
                        <table class="normal table table-borderless">
                            <tr>
                                <td>Totaal excl. BTW</td>
                                <td id="totaalExclBTW">140&euro;</td>
                            </tr>
                            <tr>
                                <td>BTW percentage 21%</td>
                                <td id="bedragBTW">47&euro;</td>
                            </tr>
                            <tr class="border-top">
                                <td class="red">Totaal</td>
                                <td id="totaal">187&euro;</td>
                            </tr>
                        </table>
                    </div>
                </div>
                <button id="genPDF" class="btn btn-secondary ml-3">Download PDF</button>
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