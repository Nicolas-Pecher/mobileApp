<?php
/**
 * Created by PhpStorm.
 * User: Yasmine
 * Date: 18/04/2019
 * Time: 23:18
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

        <?php include './components/topNavigation.php';?>

        <div class="container my-4 mx-2">
            <p class="small"><i class="fas fa-home"></i>/ &nbsp;Notificaties</p>
        </div>

        <div class="container-fluid mx-2">

            <h1 class="mb-4">Notificaties</h1>

            <div class="card mb-4">
                <div class="card-header">
                    <h6>6 bericht(en)</h6>
                </div>
                <div class="card-body">
                    <div class="list-group list-group-flush">
                        <div class="list-group-item">
                            <div style="color: #f13c1f">Uren <span>23/03/2019</span> bevestigen</div>
                            <div class="text-muted small mb-2"><span>09:00 - 12:30</span><span class="ml-3">Project Mobile Apps</span></div>
                            <button href="" type="submit" role="button" class="btn btn-sm btn-outline-secondary">Bevestigen</button>
                            <button href="" type="submit" role="button" class="btn btn-sm btn-outline-secondary">Wijzigen</button>
                            <button href="" type="submit" role="button" class="btn btn-sm btn-outline-secondary">Annuleren</button>
                        </div>
                        <div class="list-group-item">
                            <div style="color: #f13c1f">Uren <span>23/03/2019</span> bevestigen</div>
                            <div class="text-muted small mb-2"><span>09:00 - 12:30</span><span class="ml-3">Project Mobile Apps</span></div>
                            <button href="" type="submit" role="button" class="btn btn-sm btn-outline-secondary"><i class="fas fa-check"></i></button>
                            <button href="" type="submit" role="button" class="btn btn-sm btn-outline-secondary"><i class="fas fa-times"></i></button>
                            <button href="" type="submit" role="button" class="btn btn-sm btn-outline-secondary"><i class="fas fa-pen"></i></button>
                        </div>
                        <div class="list-group-item">
                            <div style="color: #f13c1f">Uren <span>23/03/2019</span> bevestigen</div>
                            <div class="text-muted small mb-2"><span>09:00 - 12:30</span><span class="ml-3">Project Mobile Apps</span></div>
                            <button href="" type="submit" role="button" class="btn btn-sm btn-outline-secondary">Bevestigen</button>
                            <button href="" type="submit" role="button" class="btn btn-sm btn-outline-secondary">Wijzigen</button>
                            <button href="" type="submit" role="button" class="btn btn-sm btn-outline-secondary">Annuleren</button>
                        </div>
                        <div class="list-group-item">
                            <div style="color: #f13c1f">Uren <span>23/03/2019</span> bevestigen</div>
                            <div class="text-muted small mb-2"><span>09:00 - 12:30</span><span class="ml-3">Project Mobile Apps</span></div>
                            <button href="" type="submit" role="button" class="btn btn-sm btn-outline-secondary">Bevestigen</button>
                            <button href="" type="submit" role="button" class="btn btn-sm btn-outline-secondary">Wijzigen</button>
                            <button href="" type="submit" role="button" class="btn btn-sm btn-outline-secondary">Annuleren</button>
                        </div>
                    </div>
                </div>
            </div>

        </div>

        <a href="#topPage" class="btn" id="pageButton"><i class="fas fa-caret-up"></i></a>

        <input type="text" id="gebruikerIdTimeEntry" value="<?php echo $_SESSION['gebruikerId']; ?>" style="display:none;" >

    </div>
    <!-- /#page-content-wrapper -->

</div>
<!-- /#wrapper -->

<?php include './components/footer.php'; ?>

<script src="../javascript/showActivePage.js"></script>
<script src="../javascript/addTimeEntry.js"></script>


</body>
</html>