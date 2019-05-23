<?php

$bedrijfId = $_SESSION["bedrijfId"];

$jsonConsultants = file_get_contents("http://mobileapp-planning-services.azurewebsites.net/api/OverzichtConsultants/" . $bedrijfId, TRUE);
$consultants = json_decode($jsonConsultants);

//var_dump($consultants);

$emailConsultants = array();

foreach($consultants as $consultant) {
    //var_dump($consultant->Email);
    array_push($emailConsultants,$consultant->Email);
}

//var_dump($emailConsultants);
$subject = "REMINDER! Timesheets invullen";
$message = "Vergeet zeker niet je timesheets van deze maand in te vullen.";

foreach ($emailConsultants as $email) {
    //print_r($email);
    //print_r("\n");
    mail($email, $subject, $message);
}

header("location: ../../index.php");
    
?>