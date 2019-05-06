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

            <div class="container my-4 mx-2">
                <p class="small"><i class="fas fa-home"></i>/ &nbsp;Facturen</p>
            </div>

            <div class="container-fluid mx-2">

                <h1 class="mb-4">Factuur genereren</h1>

                <form>
                    <div class="d-flex mb-4">
                        <select class="form-control col-4" id="listKlanten">
                            <option selected="true" disabled>Kies een klant</option>
                            <!--uit ajax call-->
                        </select>
                        <button id="genPDF" class="btn ml-4">Print factuur</button>
                    </div>
                </form>

                <div class="card p-3 mb-4">
                    <div id="card-body" class="card-body">
                        <div>
                            <div class="float-left">
                                <h3>Factuur #<span>1</span></h3>
                            </div>

                            <div class="float-right">
                                <p><span class="lichtGrijs">Datum van verstuur</span></p>
                                <p id="datumVerstuur"></p>
                            </div>
                        </div>

                        <div class="clearfix"></div>

                        <hr>

                        <div id="factuur">

                            <div id="divSameLine">

                                <!--gegevens klant-->
                                <div class="float-left">
                                    <address>
                                        <span class="lichtGrijs">Klant</span>
                                        <span id="bedrijfNaam"></span><br>
                                        <span id="huisnummer"></span> <span id="straatNaam"></span><br>
                                        <span id="postcode"></span> <span id="gemeente"></span><br>
                                        <span id="land"></span><br>
                                        <span id="btwNummer"></span><br>
                                        <span id="rekeningNummer"></span><br>
                                    </address>
                                </div>

                                <!--gegevens consulting bedrijf-->
                                <div class="float-right text-right mb-5">
                                    <address id="adresBedrijf">
                                        <span id="naamBedrijf" class="lichtGrijs"></span>
                                        <br>
                                        Uiterste datum: <span id="uitersteDatum"></span><br>
                                        Rekeningnummer: <span id="rekeningNummerOns"></span><br>
                                        BTW nummer: <span id="btwNummerOns"></span><br>
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
            </div>

            <a href="#topPage" class="btn" id="pageButton"><i class="fas fa-caret-up"></i></a>

        </div>
        <!-- /#page-content-wrapper -->

    </div>
    <!-- /#wrapper -->

    <?php include './components/footer.php'; ?>

    <script src="../javascript/showActivePage.js"></script>
    <script src="../javascript/invoices.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/html2canvas/0.4.1/html2canvas.js"></script>
    <script src="../javascript/jsPDF.JS"></script>

</body>

</html>
