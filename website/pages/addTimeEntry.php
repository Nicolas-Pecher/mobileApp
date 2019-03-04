<!doctype html>
<html lang="en">
<head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <title>Timetracker</title>

    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">

    <!-- fontawsome icons -->
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.2/css/all.css" integrity="sha384-fnmOCqbTlWIlj8LyTjo7mOUStjsKC4pOpQbqyi7RrhN7udi9RwhKkMHpvLbHG9Sr" crossorigin="anonymous">

    <!-- Custom stylesheets -->
    <link rel="stylesheet" href="../css/index.css">
    <link rel="stylesheet" href="../css/addTimeEntry.css">

</head>
<body>

<div class="d-flex" id="wrapper">

    <!-- Sidebar -->
    <div class="sidebar-wrapper" id="sidebar-wrapper">
        <div class="sidebar-heading text-center" style="color: #f13c1f; font-weight: bold;">Timetracker</div>
        <div class="list-group list-group-flush">
            <a href="../index.php" class="list-group-item list-group-item-action"><i class="fas fa-tachometer-alt mr-3"></i>Dashboard</a>
            <a href="timesheets.php" class="list-group-item list-group-item-action active"><i class="fas fa-clock mr-3"></i>Timesheets</a>
            <a href="#" class="list-group-item list-group-item-action" data-toggle="collapse" data-target="#s1" data-parent="#sidebar-wrapper"><i class="fas fa-users mr-3"></i>Consultants</a>
            <!--            <div id="s1" class="sublinks collapse">-->
            <!--                <a href="#" class="list-group-item list-group-item-action">subitem 1</a>-->
            <!--                <a href="#" class="list-group-item list-group-item-action">subitem 1</a>-->
            <!--            </div>-->
            <a href="#" class="list-group-item list-group-item-action" data-toggle="collapse" data-target="#s2" data-parent="#sidebar-wrapper"><i class="fas fa-folder mr-3"></i>Projecten</a>
            <!--            <div id="s2" class="sublinks collapse">-->
            <!--                <a href="#" class="list-group-item list-group-item-action">subitem 1</a>-->
            <!--                <a href="#" class="list-group-item list-group-item-action">subitem 1</a>-->
            <!--            </div>-->
            <a href="#" class="list-group-item list-group-item-action" data-toggle="collapse" data-target="#s3" data-parent="#sidebar-wrapper"><i class="fas fa-tasks mr-3"></i>Activiteiten</a>
            <!--            <div id="s3" class="sublinks collapse">-->
            <!--                <a href="#" class="list-group-item list-group-item-action">subitem 1</a>-->
            <!--                <a href="#" class="list-group-item list-group-item-action">subitem 1</a>-->
            <!--            </div>-->
            <a href="#" class="list-group-item list-group-item-action" data-toggle="collapse" data-target="#s4" data-parent="#sidebar-wrapper"><i class="fas fa-chart-pie mr-3"></i>Rapporten<i class="fas fa-sort-down float-right"></i></a>
            <div id="s4" class="sublinks collapse">
                <a href="#" class="list-group-item list-group-item-action">subitem 1</a>
                <a href="#" class="list-group-item list-group-item-action">subitem 1</a>
            </div>
            <a href="#" class="list-group-item list-group-item-action"><i class="fas fa-file-invoice-dollar mr-3"></i>Facturen</a>

        </div>
    </div>
    <!-- /#sidebar-wrapper -->

    <!-- Page content -->
    <div id="page-content-wrapper">

        <nav class="navbar navbar-light bg-light border-bottom" id="topPage">
            <a href="#" class="text-dark" id="menu-toggle"><i class="fas fa-bars"></i></a>
            <ul class="nav ml-auto">
                <li class="nav-item">
                    <a href="#" class="nav-link" role="button"><i class="fas fa-bell text-dark"></i><sup><span class="badge">3</span></sup></a>
                </li>
                <li class="nav-item">
                    <a href="#" class="nav-link" data-toggle="dropdown"><i class="fas fa-user text-dark"></i></a>
                    <div class="dropdown-menu dropdown-menu-right mr-2">
                        <a class="dropdown-item"><i class="fas fa-user-edit mr-3"></i></i>Profiel</a>
                        <a class="dropdown-item"><i class="fas fa-cog mr-3"></i>Instellingen</a>
                        <div class="dropdown-divider"></div>
                        <a href="login.php" class="dropdown-item"><i class="fas fa-power-off mr-3"></i>Uitloggen</a>
                    </div>
                </li>
            </ul>
        </nav>

        <div class="container m-3 ml-3">
            <p class="small pt-2"><i class="fas fa-home"></i>/  Timesheets / Toevoegen uren</p>
        </div>

        <div class="container m-3">
            <h1>Toevoegen uren</h1>

            <div class="mt-4 mr-4" id="addTimeEntry-wrapper">
                <form action="">
                    <div class="form-group">
                        <label for="datum">Datum</label>
                        <input type="date" class="form-control form-control-sm" id="datum">
                    </div>
                    <div class="form-group d-flex">
                        <select class="form-control mr-4 form-control-sm" id="project">
                            <option>Project mobile apps</option>
                            <option>Integration project</option>
                            <option>Software project II</option>
                        </select>
                        <input type="time" class="form-control mr-2 form-control-sm" id="beginTijd">
                        <i class="fas fa-long-arrow-alt-right mt-2"></i>
                        <input type="time" class="form-control ml-2 form-control-sm" id="eindTijd">
                    </div>
                    <div class="form-group d-flex">
                        <select class="form-control mr-4 form-control-sm" id="project">
                            <option>Project mobile apps</option>
                            <option>Integration project</option>
                            <option>Software project II</option>
                        </select>
                        <input type="time" class="form-control mr-2 form-control-sm" id="beginTijd">
                        <i class="fas fa-long-arrow-alt-right mt-2"></i>
                        <input type="time" class="form-control ml-2 form-control-sm" id="eindTijd">
                    </div>
                    <a href="" class="btn btn-sm mb-2" id="extraBtn"><i class="fas fa-plus"></i></a>
                    <div class="form-group">
                        <label for="opmerking">Opmerking (optioneel)</label>
                        <textarea class="form-control form-control-sm" rows="2" id="opmerking"></textarea>
                    </div>
                    <a href="timesheets.php" class="btn" id="toevoegenTimeEntryBtn">Toevoegen</a>
                </form>

            </div>

        </div>

        <a href="#topPage" class="btn" id="pageButton"><i class="fas fa-caret-up"></i></a>

    </div>
    <!-- /#page-content-wrapper -->

</div>
<!-- /#wrapper -->


<!-- Optional JavaScript -->
<!-- jQuery first, then Popper.js, then Bootstrap JS -->
<script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>

<!-- Menu toggle script -->
<script>
    $("#menu-toggle").click(function (e) {
        e.preventDefault();
        $("#wrapper").toggleClass("toggled");
    });
</script>

</body>
</html>