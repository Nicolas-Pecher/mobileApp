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
            <p class="small pt-2"><i class="fas fa-home"></i>/ Projecten</p>
        </div>

        <div class="container m-3">
            <h1>Projecten</h1>

            <div class="mt-3 d-flex">
                <div class="">
                    <a href="addProject.php" class="btn timesheetsBtn mr-2"><i class="fas fa-plus"></i> Toevoegen</a>
                </div>
            </div>

            <div class="mt-4 mr-4">
                <table class="table table-striped border">
                    <thead>
                        <tr>
                            <th scope="col">Naam</th>
                            <th scope="col">Klant</th>
                            <th scope="col">Overuren toegestaan</th>
                            <th scope="col"></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Project Mobile Apps</td>
                            <td>Delaware</td>
                            <td id="check"><input type="checkbox"></td>
                            <td><a href="modifyProjects.php" class="btn btn-outline-secondary btn-sm">Wijzig project / Activiteiten toevoegen</a></td>
                        </tr>
                        <tr>
                            <td>Software Project II</td>
                            <td>IBM</td>
                            <td id="check"><input type="checkbox"></td>
                            <td><a href="modifyProjects.php" class="btn btn-outline-secondary btn-sm">Wijzig project / Activiteiten toevoegen</a></td>
                        </tr>
                        <tr>
                            <td>Integration Project</td>
                            <td>Oracle</td>
                            <td id="check"><input type="checkbox"></td>
                            <td><a href="modifyProjects.php" class="btn btn-outline-secondary btn-sm">Wijzig project / Activiteiten toevoegen</a></td>
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
<script src="../javascript/projects.js"></script>

</body>