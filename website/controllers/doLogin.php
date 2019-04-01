<?php
/**
 * Created by PhpStorm.
 * User: Yasmine
 * Date: 11/03/2019
 * Time: 16:55
 */

$email = $password = "";

if($_SERVER['REQUEST_METHOD'] !== 'POST') {



} else {


    $email = $_POST["email"];
    $password = $_POST["password"];

    //data voor api
    $postData = array(
        'Email' => $email,
        'Wachtwoord' => $password
    );

    //aanmaken context voor request
    $context = stream_context_create(array(
        'http' => array(
            'method' => 'POST',
            'header' => "Content-Type: application/json\r\n",
            'content' => json_encode($postData)
        )
    ));

    //request versturen
    $response = file_get_contents('https://mobileapp-planning-services.azurewebsites.net/api/Login', FALSE, $context);

    //check for errors
    if ($response === FALSE) {
        die('Error');
    }

    //decode the response
    $responseData = json_decode($response, TRUE);

    echo "test";
    //Print the data from the response
    var_dump($responseData);
    var_dump($responseData["Rol"]);


    if ($responseData !== "") {
        session_start();
        $_SESSION['gebruikerId'] = $responseData["GebruikerId"];
        $_SESSION['naam'] = $responseData["GebruikerNaam"];
        $_SESSION['email'] = $responseData["Email"];
        $_SESSION['gebruikerRol'] = $responseData["Rol"];
        $_SESSION['bedrijfId'] = $responseData["BedrijfId"];
        $_SESSION['loggedIn'] = true;
        header("location: ../index.php");
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



