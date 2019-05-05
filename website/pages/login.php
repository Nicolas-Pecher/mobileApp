<?php
    include '../controllers/doLogin.php';
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
    <link rel="stylesheet" href="../css/login.css">

</head>
<body>

<div class="d-flex flex-column justify-content-center align-items-center" id="wrapper">

    <div class="card" id="login-wrapper">
        <div class="card-header-title text-center pt-4 pb-4"><i class="fas fa-user-circle fa-4x"></i></div>
        <form action="../controllers/doLogin.php" method="post" class="card-body" onsubmit="return(validateLogin());" name="loginForm">
            <div class="form-group">
                <div class="input-group">
                    <div class="input-group-prepend">
                        <span class="input-group-text"><i class="fa fa-envelope"></i></span>
                    </div>
                    <input type="email" class="form-control form-control-prepended" id="email" placeholder="Emailadres" value="<?php echo $email; ?>" name="email">
                </div>
                <span class="text-danger small" id="emailError"></span>
            </div>
            <div class="form-group">
                <div class="input-group">
                    <div class="input-group-prepend">
                        <span class="input-group-text"><i class="fas fa-lock"></i></span>
                    </div>
                    <input type="password" class="form-control" id="password" placeholder="Wachtwoord" value="<?php echo $password; ?>" name="password">
                </div>
                <span class="text-danger small" id="passwordError"></span>
            </div>
            <div class="form-group form-check">
                <label class="form-check-label small">
                    <input class="form-check-input" type="checkbox" name="loggedIn" id="loginCheck"> Ingelogd blijven
                </label>
            </div>
            <button type="submit" class="btn btn-block" id="login-button">Inloggen</button>
            <div class="text-center mt-2">
                <a href="#" class="d-block small text-dark">Wachtwoord vergeten?</a>
            </div>
        </form>
    </div>


</div>
<!-- /#wrapper -->


<!-- Optional JavaScript -->
<!-- jQuery first, then Popper.js, then Bootstrap JS -->
<script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>

<script src="../javascript/validation.js"></script>

</body>
</html>