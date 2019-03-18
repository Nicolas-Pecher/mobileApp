<?php include 'activeUser.php'; ?>

<!-- Sidebar -->
<div class="sidebar-wrapper" id="sidebar-wrapper">
    <div class="sidebar-heading text-center" style="color: #f13c1f; font-weight: bold;">Timetracker</div>
    <div class="list-group list-group-flush">

        <a href="../index.php" class="list-group-item list-group-item-action" id='dashboard'><i class="fas fa-tachometer-alt mr-3"></i>Dashboard</a>
        
        <?php if($userRol == 'consultant') { ?>
            <a href="./timesheets.php" class="list-group-item list-group-item-action" id='timesheets'><i class="fas fa-clock mr-3"></i>Timesheets</a>
        <?php } ?>

        

        <?php if( $userRol != 'consultant' ) { ?>

            <a href="./consultants.php" class="list-group-item list-group-item-action" id="consultants"><i class="fas fa-users mr-3"></i>Consultants</a>
            <a href="./projects.php" class="list-group-item list-group-item-action" id="projects"><i class="fas fa-folder mr-3"></i>Projecten</a>
            <a href="#" class="list-group-item list-group-item-action" data-toggle="collapse" data-target="#s1" data-parent="#sidebar-wrapper"><i class="fas fa-chart-pie mr-3"></i>Rapporten<i class="fas fa-sort-down float-right"></i></a>
            <div id="s1" class="sublinks collapse">
                <a href="" class="list-group-item list-group-item-action">Overzicht consultants</a>
                <a href="#" class="list-group-item list-group-item-action">Overzicht overuren</a>
                <a href="#" class="list-group-item list-group-item-action">Overzicht onderuren</a>
                
                <?php if($userRol == 'manager') { ?>
                    <a href="#" class="list-group-item list-group-item-action">Overzicht per klant</a>
                <?php }?>

            </div>

            <?php if($userRol == 'manager') { ?>
                <a href="./invoices.php" class="list-group-item list-group-item-action" id="invoices"><i class="fas fa-file-invoice-dollar mr-3"></i>Facturen</a>
            <?php }?>

        <?php }?>
    </div>
</div>
<!-- /#sidebar-wrapper -->