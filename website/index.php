<?php
    session_start();

    if (!isset($_SESSION['gebruikerId'])) {
        header("Location: ./pages/login.php");
    }


?>

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
    <link rel="stylesheet" href="css/index.css">
    <link rel="stylesheet" href="css/dashboard.css">

</head>
<body>

<div class="d-flex" id="wrapper">

    <!-- Sidebar -->
    <div class="sidebar-wrapper" id="sidebar-wrapper">
        <div class="sidebar-heading text-center" style="color: #f13c1f; font-weight: bold;">Timetracker</div>
        <div class="list-group list-group-flush">

            <a href="index.php" class="list-group-item list-group-item-action active" id='dashboard'><i class="fas fa-tachometer-alt mr-3"></i>Dashboard</a>
            
            <?php if($_SESSION['gebruikerRol'] == 'consultant') { ?>
                <a href="./pages/timesheets.php" class="list-group-item list-group-item-action" id='timesheets'><i class="fas fa-clock mr-3"></i>Timesheets</a>
            <?php } ?>

            
            <?php if($_SESSION['gebruikerRol'] != 'consultant' ) { ?>

                <a href="./pages/consultants.php" class="list-group-item list-group-item-action" id="consultants"><i class="fas fa-user-friends mr-3"></i>Consultants</a>
                <a href="./pages/customers.php" class="list-group-item list-group-item-action" id="klanten"><i class="fas fa-address-book mr-3"></i>Klanten</a>
                <a href="./pages/projects.php" class="list-group-item list-group-item-action" id="projects"><i class="fas fa-folder mr-3"></i>Projecten</a>
                <a href="pages/employees.php" class="list-group-item list-group-item-action" id="managePersoneel"><i class="fas fa-users mr-3"></i>Manage Personeel</a>
                <a href="#" class="list-group-item list-group-item-action" data-toggle="collapse" data-target="#s1" data-parent="#sidebar-wrapper"><i class="fas fa-chart-pie mr-3"></i>Rapporten<i class="fas fa-sort-down float-right"></i></a>
                <div id="s1" class="sublinks collapse">
                    <a href="#" class="list-group-item list-group-item-action">Overzicht consultants</a>
                    <a href="#" class="list-group-item list-group-item-action">Overzicht overuren</a>
                    <a href="#" class="list-group-item list-group-item-action">Overzicht onderuren</a>
                    
                    <?php if($_SESSION['gebruikerRol'] == 'manager') { ?>
                        <a href="#" class="list-group-item list-group-item-action">Overzicht per klant</a>
                    <?php }?>

                </div>

                <?php if($_SESSION['gebruikerRol'] == 'manager') { ?>
                <a href="./pages/invoices.php" class="list-group-item list-group-item-action" id="invoices"><i class="fas fa-file-invoice-dollar mr-3"></i>Facturen</a>
                <?php }?>

            <?php }?>
        </div>
    </div>
    <!-- /#sidebar-wrapper -->

    <!-- Page content -->
    <div id="page-content-wrapper">

        <nav class="navbar navbar-light bg-light border-bottom" id="topPage">
            <a href="#" class="text-dark" id="menu-toggle"><i class="fas fa-bars"></i></a>
            <ul class="nav ml-auto">
                <li class="nav-item">
                    <a href="#" class="nav-link" data-toggle="dropdown" role="button"><i class="fas fa-bell text-dark"></i><sup><span class="badge">3</span></sup></a>
                    <div class="dropdown-menu dropdown-menu-right mr-2">
                        <h6 class="dropdown-header border-bottom">Notificaties</h6>
                        <div class="dropdown-scroll" style="height: 300px; overflow-y: auto">
                            <div class="dropdown-item">
                                <div class="dropdown-item-body py-2">
                                    <div style="color: #f13c1f">Uren <span>23/03/2019</span> bevestigen</div>
                                    <div class="text-muted small"><span>09:00 - 12:30</span><span class="ml-3">Project Mobile Apps</span></div>
                                    <button href="" type="submit" role="button" class="btn btn-sm btn-block btn-outline-secondary mt-1">Bevestigen</button>
                                </div>
                            </div>
                            <div class="dropdown-item">
                                <div class="dropdown-item-body py-2">
                                    <div style="color: #f13c1f">Uren <span>23/03/2019</span> bevestigen</div>
                                    <div class="text-muted small"><span>09:00 - 12:30</span><span class="ml-3">Project Mobile Apps</span></div>
                                    <button href="" type="submit" role="button" class="btn btn-sm btn-block btn-outline-secondary mt-1">Bevestigen</button>
                                </div>
                            </div>
                            <div class="dropdown-item">
                                <div class="dropdown-item-body py-2">
                                    <div style="color: #f13c1f">Uren <span>23/03/2019</span> bevestigen</div>
                                    <div class="text-muted small"><span>09:00 - 12:30</span><span class="ml-3">Project Mobile Apps</span></div>
                                    <button href="" type="submit" role="button" class="btn btn-sm btn-block btn-outline-secondary mt-1">Bevestigen</button>
                                </div>
                            </div>
                            <div class="dropdown-item">
                                <div class="dropdown-item-body py-2">
                                    <div style="color: #f13c1f">Uren <span>23/03/2019</span> bevestigen</div>
                                    <div class="text-muted small"><span>09:00 - 12:30</span><span class="ml-3">Project Mobile Apps</span></div>
                                    <div class="text-muted small"><span>09:00 - 12:30</span><span class="ml-3">Project Mobile Apps</span></div>
                                    <button href="" type="submit" role="button" class="btn btn-sm btn-block btn-outline-secondary mt-1">Bevestigen</button>
                                </div>
                            </div>
                            <div class="dropdown-item">
                                <div class="dropdown-item-body py-2">
                                    <div style="color: #f13c1f">Uren <span>23/03/2019</span> bevestigen</div>
                                    <div class="text-muted small"><span>09:00 - 12:30</span><span class="ml-3">Project Mobile Apps</span></div>
                                    <button href="" type="submit" role="button" class="btn btn-sm btn-block btn-outline-secondary mt-1">Bevestigen</button>
                                </div>
                            </div>

                        </div>
                        <div class="border-top dropdown-header"><a href="./pages/notifications.php" class="" style="color: #666666; ">Bekijk alle notificaties</a> </div>
                    </div>
                </li>
                <li class="nav-item">
                    <a href="#" class="nav-link" data-toggle="dropdown"><i class="fas fa-user text-dark"></i></a>
                    <div class="dropdown-menu dropdown-menu-right mr-2">
                        <a href="./pages/profile.php" class="dropdown-item"><i class="fas fa-user-edit mr-3"></i>Profiel</a>
                        <a class="dropdown-item"><i class="fas fa-cog mr-3"></i>Instellingen</a>
                        <div class="dropdown-divider"></div>
                        <a href="./controllers/doLogout.php" class="dropdown-item"><i class="fas fa-power-off mr-3"></i>Uitloggen</a>
                    </div>
                </li>
            </ul>
        </nav>

        <div class="container my-4 mx-2">
            <p class="small"><i class="fas fa-home"></i>/ &nbsp;Dashboard</p>
        </div>

        <div class="container-fluid mx-2">

                <h2 class="mb-4">Welkom <?php echo $_SESSION['naam']; ?>,</h2>

            <?php if($_SESSION['gebruikerRol'] == "consultant") { ?>

                <!-- gewerkte uren, overuren, ziektedagen en vakantiedagen -->
                <div class="row justify-content-between">
                    <div class="col-11 col-sm-6 col-xl mb-4">
                        <div class="card">
                            <div class="card-body">
                                <div class="row align-items-center">
                                    <div class="col">
                                        <h6 class="card-title text-uppercase text-muted mb-2">Gewerkte uren</h6>
                                        <span class="h4" id="gewerkteUren"></span>
                                    </div>
                                    <div class="col-auto">
                                        <span class="h3 text-muted"><i class="fas fa-clock"></i></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-11 col-sm-6 col-xl mb-4">
                        <div class="card">
                            <div class="card-body">
                                <div class="row align-items-center">
                                    <div class="col">
                                        <h6 class="card-title text-uppercase text-muted mb-2">Overuren</h6>
                                        <span class="h4" id="overuren"></span>
                                    </div>
                                    <div class="col-auto">
                                        <span class="h3 text-muted"><i class="fas fa-clock"></i></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-11 col-sm-6 col-xl mb-4">
                        <div class="card">
                            <div class="card-body">
                                <div class="row align-items-center">
                                    <div class="col">
                                        <h6 class="card-title text-uppercase text-muted mb-2">Ziektedagen</h6>
                                        <span class="h4">0 dag(en)</span>
                                    </div>
                                    <div class="col-auto">
                                        <span class="h3 text-muted"><i class="fas fa-calendar-times"></i></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-11 col-sm-6 col-xl mb-4">
                        <div class="card">
                            <div class="card-body">
                                <div class="row align-items-center">
                                    <div class="col">
                                        <h6 class="card-title text-uppercase text-muted mb-2">Vakantiedagen</h6>
                                        <span class="h4">0 dag(en)</span>
                                    </div>
                                    <div class="col-auto">
                                        <span class="h3 text-muted"><i class="far fa-calendar-check"></i></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!--  -->
                <div class="row mt-2 align-items-stretch">
                    <div class="col-11 col-md-7 col-lg-7 mb-4">
                        <div class="card">
                            <div class="card-header">
                                <h5 class="card-header-title">Gewerkte uren per project</h5>
                            </div>
                            <div class="card-body">
                                <canvas id="myChart"></canvas>
                            </div>
                        </div>
                    </div>
                    <div class="col-11 col-md-5 col-lg-5 mb-4">
                        <div class="card">
                            <div class="card-header">
                                <h5 class="card-header-title">Huidige projecten</h5>
                            </div>
                            <div id="projectenConsultantDiv">
                                <!-- huidige projecten -->
<!--                                <div class="row align-items-center">-->
<!--                                    <div class="col-auto">-->
<!--                                        <h6 class="card-title mb-1">Project Mobile Apps</h6>-->
<!--                                        <p class="card-text small text-muted">Delaware</p>-->
<!--                                    </div>-->
<!--                                </div>-->
<!--                                <hr>-->
<!--                                <div class="row align-items-center">-->
<!--                                    <div class="col-auto">-->
<!--                                        <h6 class="card-title mb-1">Project Mobile Apps</h6>-->
<!--                                        <p class="card-text small text-muted">Delaware</p>-->
<!--                                    </div>-->
<!--                                </div>-->
<!--                                <hr>-->
<!--                                <div class="row align-items-center">-->
<!--                                    <div class="col-auto">-->
<!--                                        <h6 class="card-title mb-1">Project Mobile Apps</h6>-->
<!--                                        <p class="card-text small text-muted">Delaware</p>-->
<!--                                    </div>-->
<!--                                </div>-->
                            </div>
                        </div>

                    </div>
                    <div class="col-11 col-md-11 col-lg-6 mb-4">
                        <div class="card">
                            <div class="card-header">
                                <h5 class="card-header-title">Laatst gelogde uren</h5>
                            </div>
                            <div class="table-responsive">
                                <!-- tabel timesheets huidige week -->
                                <table class="table table-nowrap card-table">
                                    <tbody id="laatsteTimesheetsTable">
<!--                                    <tr>-->
<!--                                        <td>23/03/2019</td>-->
<!--                                        <td>Project Mobile Apps</td>-->
<!--                                        <td>04:00:00</td>-->
<!--                                    </tr>-->
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    <div class="col-11 col-md-11 col-lg-6 mb-4">
                        <div class="card">
                            <div class="card-header">
                                <h5 class="card-header-title">Gewerkte uren deze week</h5>
                            </div>
                            <div class="card-body">
                                <canvas id="gewerkteUrenDezeWeekChart"></canvas>
                            </div>
                        </div>
                    </div>
                </div>

            <?php } ?>

        </div>

        <a href="#topPage" class="btn" id="pageButton"><i class="fas fa-caret-up"></i></a>

    </div>
    <!-- /#page-content-wrapper -->

</div>
<!-- /#wrapper -->

<input type="text" id="gebruikerIdValue" value="<?php echo $_SESSION['gebruikerId']; ?>" style="display:none;" >

<!-- Optional JavaScript -->
<!-- jQuery first, then Popper.js, then Bootstrap JS -->
<script src="http://code.jquery.com/jquery-3.3.1.js" integrity="sha256-2Kok7MbOyxpgUVvAk/HJ2jigOSYS2auK4Pfzbm7uH60=" crossorigin="anonymous"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/chart.js@2.8.0"></script>
<script src="./javascript/index.js"></script>
<script src="./javascript/totaalUrenPerConsultant.js"></script>

<!-- Menu toggle script -->
<script>
    $("#menu-toggle").click(function (e) {
        e.preventDefault();
        $("#wrapper").toggleClass("toggled");
    });
</script>

</body>
</html>