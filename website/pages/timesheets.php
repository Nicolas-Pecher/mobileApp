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
    <link rel="stylesheet" href="../css/timesheets.css">

</head>
<body>

<div class="d-flex" id="wrapper">

    <!-- Sidebar -->
    <div class="sidebar-wrapper" id="sidebar-wrapper">
        <div class="sidebar-heading text-center" style="color: #f13c1f; font-weight: bold;">Timetracker</div>
        <div class="list-group list-group-flush">
            <a href="../index.php" class="list-group-item list-group-item-action"><i class="fas fa-tachometer-alt mr-3"></i>Dashboard</a>
            <a href="timesheets.php" class="list-group-item list-group-item-action active"><i class="fas fa-clock mr-3"></i>Timesheets</a>
            <a href="#" class="list-group-item list-group-item-action" data-toggle="collapse" data-target="#s1" data-parent="#sidebar-wrapper"><i class="fas fa-users mr-3"></i>Consultants<i class="fas fa-sort-down float-right"></i></a>
            <div id="s1" class="sublinks collapse">
                <a href="#" class="list-group-item list-group-item-action">subitem 1</a>
                <a href="#" class="list-group-item list-group-item-action">subitem 1</a>
            </div>
            <a href="#" class="list-group-item list-group-item-action" data-toggle="collapse" data-target="#s2" data-parent="#sidebar-wrapper"><i class="fas fa-folder mr-3"></i>Projecten<i class="fas fa-sort-down float-right"></i></a>
            <div id="s2" class="sublinks collapse">
                <a href="#" class="list-group-item list-group-item-action">subitem 1</a>
                <a href="#" class="list-group-item list-group-item-action">subitem 1</a>
            </div>
            <a href="#" class="list-group-item list-group-item-action" data-toggle="collapse" data-target="#s3" data-parent="#sidebar-wrapper"><i class="fas fa-tasks mr-3"></i>Activiteiten<i class="fas fa-sort-down float-right"></i></a>
            <div id="s3" class="sublinks collapse">
                <a href="#" class="list-group-item list-group-item-action">subitem 1</a>
                <a href="#" class="list-group-item list-group-item-action">subitem 1</a>
            </div>
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
            <p class="small pt-2"><i class="fas fa-home"></i>/  Timesheets</p>
        </div>

        <div class="container m-3">
            <h1>Timesheets</h1>

            <div class="mt-3 d-flex">
                <div class="">
                    <a href="" class="btn timesheetsBtn mr-2" id="toevoegenUren"><i class="fas fa-plus"></i> Toevoegen</a>
                    <a href="" class="btn timesheetsBtn mr-2" id="ziekMelden">Ziek melden</a>
                    <a href="" class="btn timesheetsBtn" id="vakantie">Vakantiedag(en) aanvragen</a>
                </div>

                <p class="ml-auto p-2 mr-4"><strong>Totaal:</strong> 60:15:00</p>
            </div>

            <div class="mt-4">
                <h6 class="timesheetDate">Maandag, 4 maart 2019</h6>
                <div class="d-flex timesheetBody">
                    <p>Project mobile apps</p>
                    <p>08:30 - 11:00</p>
                    <p>02:30:00</p>
                </div>
                <div class="d-flex timesheetBody">
                    <p>Project mobile apps</p>
                    <p>12:30 - 18:00</p>
                    <p>05:30:00</p>
                </div>
                <hr>
                <h6 class="timesheetDate">Maandag, 4 maart 2019</h6>
                <div class="d-flex timesheetBody">
                    <p>Project mobile apps</p>
                    <p>08:30 - 11:00</p>
                    <p>02:30:00</p>
                </div>
                <div class="d-flex timesheetBody align-items">
                    <p>Project mobile apps</p>
                    <p>12:30 - 18:00</p>
                    <p>05:30:00</p>
                </div>
                <hr>
                <h6 class="timesheetDate">Maandag, 4 maart 2019</h6>
                <div class="d-flex timesheetBody">
                    <p>Project mobile apps</p>
                    <p>08:30 - 11:00</p>
                    <p>02:30:00</p>
                </div>
                <div class="d-flex timesheetBody align-items">
                    <p>Project mobile apps</p>
                    <p>12:30 - 18:00</p>
                    <p>05:30:00</p>
                </div>
                <hr>
                <h6 class="timesheetDate">Maandag, 4 maart 2019</h6>
                <div class="d-flex timesheetBody">
                    <p>Project mobile apps</p>
                    <p>08:30 - 11:00</p>
                    <p>02:30:00</p>
                </div>
                <div class="d-flex timesheetBody align-items">
                    <p>Project mobile apps</p>
                    <p>12:30 - 18:00</p>
                    <p>05:30:00</p>
                </div>
                <hr>
                <h6 class="timesheetDate">Maandag, 4 maart 2019</h6>
                <div class="d-flex timesheetBody">
                    <p>Project mobile apps</p>
                    <p>08:30 - 11:00</p>
                    <p>02:30:00</p>
                </div>
                <div class="d-flex timesheetBody align-items">
                    <p>Project mobile apps</p>
                    <p>12:30 - 18:00</p>
                    <p>05:30:00</p>
                </div>
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