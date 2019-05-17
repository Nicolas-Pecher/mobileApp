<?php 
$jsonConsultants = file_get_contents("http://mobileapp-planning-services.azurewebsites.net/api/OverzichtConsultants/1", TRUE);
$consultants = json_decode($jsonConsultants);

//var_dump($consultants);

$emailConsultants = array();

foreach($consultants as $consultant) {
    //var_dump($consultant->Email);
    array_push($emailConsultants,$consultant->Email);
}

//var_dump($emailConsultants);


foreach ($emailConsultants as $email) {
    //print_r($email);
    //print_r("\n");
    $subject = "REMINDER! Timesheets invullen";
    $message = "Vergeet zeker niet je timesheets van deze maand in te vullen.";
    mail($email, $subject, $message);
}

header("location: ../../index.php");
    
?>