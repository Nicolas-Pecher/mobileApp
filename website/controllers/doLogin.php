<?php
/**
 * Created by PhpStorm.
 * User: Yasmine
 * Date: 11/03/2019
 * Time: 16:55
 */

$email = $password = "";
$emailErr = $passwordErr = "";

include_once 'validationLibrary.php';

if($_SERVER['REQUEST_METHOD'] !== 'POST') {



} else {

    $emailErr = errRequiredField("email");
    $passwordErr = errRequiredField("password");

    if(isFormValidLogin()) {

        $email = getFieldValue("email");
        $password = getFieldValue("password");

        $json = file_get_contents('https://mobileapp-planning-services.azurewebsites.net/api/Gebruiker/');
        $gebruikers = json_decode($json);

        var_dump(json_decode($json));

        $login = ""; //data ophalen uit api

        if($login !== "") {
            session_start();
            $_SESSION['gebruikerId'] = $login->gebruikerId;
            $_SESSION['naam'] = $login->naam;
            $_SESSION['email'] = $login->email;
            $_SESSION['loggedIn'] = true;
            header("location: ../pages/dashboard.php");
        }

    } else {

        $email = getFieldValue("email");
        $password = getFieldValue("password");

    }

}

function isFormValidLogin() {
    global $emailErr, $passwordErr;
    $allErr = $emailErr . $passwordErr;
    if(empty($allErr)) {
        return true;
    } else {
        return false;
    }
}



