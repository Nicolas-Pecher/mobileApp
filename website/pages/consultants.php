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
            <p class="small pt-2"><i class="fas fa-home"></i>/ Consultants</p>
        </div>

        <div class="container m-3">
            <h1>Consultants</h1>

            <div class="mt-3 d-flex">
                <div class="">
                    <a href="addConsultant.php" class="btn timesheetsBtn mr-2"><i class="fas fa-plus"></i> Toevoegen</a>
                </div>
            </div>

            <div class="mt-4 mr-4">
                <table class="table table-striped border">
                    <thead>
                    <tr>
                        <th scope="col">Naam</th>
                        <th scope="col">Emailadres</th>
                        <th scope="col">Gewerkte uren</th>
                        <th scope="col">Overuren</th>
                        <th scope="col"></th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>Yasmine De Wolf</td>
                        <td>yasminedewolf@hotmail.com</td>
                        <td>34:10:00</td>
                        <td>9:00:00</td>
                        <td><a href="detailsConsultant.php" class="btn btn-sm btn-outline-secondary" role="button"
                               id="detailsConsultantBtn">Details</a></td>
                    </tr>
                    <tr>
                        <td>Maxime De Grauwe</td>
                        <td>maximedegrauwe@hotmail.com</td>
                        <td>34:10:00</td>
                        <td>9:00:00</td>
                        <td><a href="detailsConsultant.php" class="btn btn-sm btn-outline-secondary" role="button"
                               id="detailsConsultantBtn">Details</a></td>
                    </tr>
                    <tr>
                        <td>Nicolas Pecher</td>
                        <td>nicolaspecher@hotmail.com</td>
                        <td>34:10:00</td>
                        <td>9:00:00</td>
                        <td><a href="detailsConsultant.php" class="btn btn-sm btn-outline-secondary" role="button"
                               id="detailsConsultantBtn">Details</a></td>
                    </tr>
                    <tr>
                        <td>Cedric Willems</td>
                        <td>cedricwillems@hotmail.com</td>
                        <td>34:10:00</td>
                        <td>9:00:00</td>
                        <td><a href="detailsConsultant.php" class="btn btn-sm btn-outline-secondary" role="button"
                               id="detailsConsultantBtn">Details</a></td>
                    </tr>
                    </tbody>
                </table>
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