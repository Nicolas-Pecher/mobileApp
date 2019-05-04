<?php
/**
 * Created by PhpStorm.
 * User: Yasmine
 * Date: 06/04/2019
 * Time: 17:01
 */


$naamConsultant = $emailConsultant = $wachtwoordConsultant = $loonConsultant = "";

if($_SERVER['REQUEST_METHOD'] !== 'POST') {



} else {

    $naam = $_POST["naamConsultant"];
    $email = $_POST["emailConsultant"];
    $wachtwoord = $_POST["wachtwoordConsultant"];
    $loon = $_POST["loonConsultant"];
    $bedrijfId = $_POST["bedrijfId"];
    $rol = "consultant";

    //$wachtwoordHash = password_hash($wachtwoord, PASSWORD_DEFAULT);

    // the data to send to the api
    $postDataConsultant = array(
        'GebruikerNaam' => $naam,
        'Email' => $email,
        'Wachtwoord' => $wachtwoord,
        'Rol' => $rol,
        'BedrijfId' => $bedrijfId,
        'LoonPerUur' => $loon
    );

    var_dump($postDataConsultant);

    //create the context for the request
    $context = stream_context_create(array(
        'http' => array(
            'method' => 'POST',
            'header' => "Content-Type: application/json\r\n",
            'content' => json_encode($postDataConsultant)
        )
    ));

    //send the request
    $response = file_get_contents('https://mobileapp-planning-services.azurewebsites.net/api/Gebruiker', false, $context);

    //check for errors
    if ($response === FALSE) {
        die('Error');
    }

    //decode the response
    $responseData = json_decode($response, TRUE);

    //Print the data from the response
    var_dump($responseData);

}
