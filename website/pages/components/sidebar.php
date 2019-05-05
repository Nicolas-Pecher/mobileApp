

<!-- Sidebar -->
<div class="sidebar-wrapper" id="sidebar-wrapper">
    <div class="sidebar-heading text-center" style="color: #f13c1f; font-weight: bold;">Timetracker</div>
    <div class="list-group list-group-flush">

        <a href="../index.php" class="list-group-item list-group-item-action" id='dashboard'><i class="fas fa-tachometer-alt mr-3"></i>Dashboard</a>
        
        <?php if($_SESSION['gebruikerRol'] == 'consultant') { ?>
            <a href="./timesheets.php" class="list-group-item list-group-item-action" id='timesheets'><i class="fas fa-clock mr-3"></i>Timesheets</a>
        <?php } ?>

        

        <?php if( $_SESSION['gebruikerRol'] != 'consultant' ) { ?>

            <a href="../pages/consultants.php" class="list-group-item list-group-item-action" id="consultants"><i class="fas fa-user-friends mr-3"></i>Consultants</a>
            <a href="../pages/customers.php" class="list-group-item list-group-item-action" id="klanten"><i class="fas fa-address-book mr-3"></i>Klanten</a>
            <a href="../pages/projects.php" class="list-group-item list-group-item-action" id="projects"><i class="fas fa-folder mr-3"></i>Projecten</a>
            <a href="../pages/managePersoneel.php" class="list-group-item list-group-item-action" id="managePersoneel"><i class="fas fa-users mr-3"></i>Manage Personeel</a>
            <a href="#" class="list-group-item list-group-item-action" data-toggle="collapse" data-target="#s1" data-parent="#sidebar-wrapper"><i class="fas fa-chart-pie mr-3"></i>Rapporten<i class="fas fa-sort-down float-right"></i></a>
            <div id="s1" class="sublinks collapse">
                <a href="" class="list-group-item list-group-item-action">Overzicht consultants</a>
                <a href="#" class="list-group-item list-group-item-action">Overzicht overuren</a>
                <a href="#" class="list-group-item list-group-item-action">Overzicht onderuren</a>
                
                <?php if($_SESSION['gebruikerRol'] == 'manager') { ?>
                    <a href="#" class="list-group-item list-group-item-action">Overzicht per klant</a>
                <?php }?>

            </div>

            <?php if($_SESSION['gebruikerRol'] == 'manager') { ?>
                <a href="../pages/invoices.php" class="list-group-item list-group-item-action" id="invoices"><i class="fas fa-file-invoice-dollar mr-3"></i>Facturen</a>
            <?php }?>

        <?php }?>
    </div>
</div>
<!-- /#sidebar-wrapper -->