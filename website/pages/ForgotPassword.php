<?php
/**
 * Created by PhpStorm.
 * User: Yasmine
 * Date: 28/03/2019
 * Time: 23:24
 */


include './components/header.php';

?>

<body>

<div class="d-flex flex-column justify-content-center align-items-center" id="wrapper">

    <div class="card p-4" id="login-wrapper" style="margin-top: 100px">
        <div class="card-header-title text-center p-4"><h3>Wachtwoord wijzigen</h3></div>
        <form action="" method="post" class="card-body">
            <div class="form-group">
                <div class="input-group">
                    <input type="password" class="form-control form-control-prepended" id="changePassword1" placeholder="Nieuw wachtwoord" value="" name="password1">
                </div>
            </div>
            <div class="form-group">
                <div class="input-group">
                    <input type="password" class="form-control" id="password" placeholder="Bevestig Wachtwoord" value="" name="password2">
                </div>
            </div>
            <button type="submit" href="" class="btn btn-block" id="changePasswordBtn">Wijzigen</button>
        </form>
    </div>


</div>
<!-- /#wrapper -->

<?php include './components/footer.php'; ?>

</body>


