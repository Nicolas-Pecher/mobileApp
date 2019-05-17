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

        <div class="container my-4 mx-2">
            <p class="small"><i class="fas fa-home"></i>/ &nbsp;Klanten&nbsp; / &nbsp;<span class="klantNaam"></span></p>
        </div>

        <div class="container-fluid mx-2">

            <h1 class="klantNaam"></h1>
            <p class="lichtGrijs pl-1">Klant</p>
            <hr class="mr-4 mb-4">

            <div class="row">
                <div class="col-sm-6 mb-4">
                    <div class="card" style="min-height: 50vh;">
                        <div class="card-header">
                            <h5 class="">Gegevens</h5>
                        </div>
                        <div class="card-body">
                            <form id="modifyCustomerForm">
                                <div class="form-group">
                                    <label for="name">Naam:</label><br>
                                    <input type="text" name="name" class="form-control form-control-sm">
                                </div>
                                <div class="form-group">
                                    <label for="btwnummer">Btw-nummmer:</label>
                                    <input type="text" name="btwnummer" id="bedrijfNaamProfile" class="form-control form-control-sm">
                                </div>
                                <div class="form-group">
                                    <label for="rekeningnumer">Rekening-nummer<span class="small"> (IBAN)</span>:</label>
                                    <input type="text" name="rekeningnummer" class="form-control form-control-sm">
                                </div>
                                <div class="row">
                                    <div class="form-group col-8">
                                        <label for="">Adres:</label>
                                        <input type="text" name="adresId" style="display: none;">
                                        <input type="text" name="straat" class="form-control form-control-sm" placeholder="Straat"/>
                                    </div>
                                    <div class="form-group col-4">
                                        <label for="huisnummer" style="color: white">test</label>
                                        <input type="text" name="huisnummer" class="form-control form-control-sm" placeholder="Huisnummer"/>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="form-group col-4">
                                        <input type="text" name="postcode" class="form-control form-control-sm" placeholder="Postcode"/>
                                    </div>
                                    <div class="form-group col-8">
                                        <input type="text" name="gemeente" class="form-control form-control-sm" placeholder="Gemeente"/>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="form-group col-12">
                                        <input type="text" name="land" class="form-control form-control-sm" placeholder="Land"/>
                                    </div>
                                </div>
                                <input type="text" id="bedrijfIdValue" value="<?php echo $_SESSION['bedrijfId']; ?>" style="display: none;" >
                                <button type="submit" class="btn btn-sm pl-4 pr-4 mt-3" id="changePasswordBtn">Wijzigen</button>
                            </form>
                        </div>
                    </div>
                </div>
                <div class="col-sm-6">
                    <div class="card mb-4" style="min-height: 50vh;">
                        <div class="card-header">
                            <h5 class="">Projecten</h5>
                        </div>
                        <table class="table thead-light">
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Naam</th>
                                </tr>
                            </thead>
                            <tbody id="projectsCustomer">

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

    <script src="../javascript/components/showActivePage.js"></script>
    <script src="../javascript/detailsCustomer.js"></script>
    <script src="../javascript/components/displayList.js"></script>

</body>

