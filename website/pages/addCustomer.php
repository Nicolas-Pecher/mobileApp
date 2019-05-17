<?php
/**
 * Created by PhpStorm.
 * User: Yasmine
 * Date: 15/04/2019
 * Time: 13:54
 */

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
            <p class="small"><i class="fas fa-home"></i>/ &nbsp;Klanten&nbsp; / &nbsp;Toevoegen klant</p>
        </div>

        <div class="container-fluid mx-2">

            <h1 class="mb-4">Toevoegen klant</h1>

            <div class="mt-4 pr-4">

                <form action="" method="POST" enctype="multipart/form-data" id="formCustomer">
                    <div class="row">
                        <div class="col-sm-6">
                            <div class="card mb-3">
                                <div class="card-header">
                                    <h5>Gegevens</h5>
                                </div>
                                <div class="card-body">
                                    <div class="form-group">
                                        <label for="naamKlant">Naam:</label>
                                        <input type="text" name="naamKlant" class="form-control form-control-sm"/>
                                        <span class="text-danger small" id="naamKlantError"></span>
                                    </div>
                                    <div class="form-group">
                                        <label for="btwKlant">Btw-nummer:</label>
                                        <input type="text" name="btwKlant" class="form-control form-control-sm"/>
                                        <span class="text-danger small" id="btwKlantError"></span>
                                    </div>
                                    <div class="form-group">
                                        <label for="ibanKlant">Rekening-nummer <span class="small">(IBAN)</span>:</label>
                                        <input type="text" name="ibanKlant" class="form-control form-control-sm"/>
                                        <span class="text-danger small" id="ibanKlantError"></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-6">
                            <div class="card mb-2">
                                <div class="card-header">
                                    <h5>Adres</h5>
                                </div>
                                <div class="card-body">
                                    <div class="row">
                                        <div class="form-group col-8">
                                            <label for="straat">Straat:</label>
                                            <input type="text" name="straat" class="form-control form-control-sm"/>
                                            <span class="text-danger small" id="straatError"></span>
                                        </div>
                                        <div class="form-group col-4">
                                            <label for="huisnummer">Huisnr.:</label>
                                            <input type="text" name="huisnummer" class="form-control form-control-sm"/>
                                            <span class="text-danger small" id="huisnummerError"></span>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="form-group col-4">
                                            <label for="postcode">Postcode:</label>
                                            <input type="text" name="postcode" class="form-control form-control-sm"/>
                                            <span class="text-danger small" id="postcodeError"></span>
                                        </div>
                                        <div class="form-group col-8">
                                            <label for="gemeente">Gemeente:</label>
                                            <input type="text" name="gemeente" class="form-control form-control-sm"/>
                                            <span class="text-danger small" id="gemeenteError"></span>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="form-group col-12">
                                            <label for="land">Land:</label>
                                            <input type="text" name="land" class="form-control form-control-sm"/>
                                            <span class="text-danger small" id="landError"></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                    <input type="text" name="bedrijfId" id="bedrijfIdValue" value="<?php echo $_SESSION['bedrijfId']; ?>" style="display:none;" >
                    <!--                        <a href="" class="btn btn-sm mt-1" id="addNewProjectBtn"><i class="fas fa-plus"></i></a>-->
                    <br>
                    <button type="submit" name="submit" class="btn btn-sm px-4 mb-3" id="addKlantBtn">Toevoegen</button>
                    <button type="button" onclick="history.back();" class="btn btn-sm px-4 mb-3" id="addKlantBtn">Annuleren</button>
                </form>
            </div>

        </div>

        <a href="#topPage" class="btn" id="pageButton"><i class="fas fa-caret-up"></i></a>

    </div>
    <!-- /#page-content-wrapper -->

</div>
<!-- /#wrapper -->

<?php include './components/footer.php'; ?>

<script src="../javascript/components/showActivePage.js"></script>
<script src="../javascript/addCustomer.js"></script>
<script src="../javascript/components/validation.js"></script>

</body>

