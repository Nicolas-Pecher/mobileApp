<?php 
$consultanten = file_get_contents("http://mobileapp-planning-services.azurewebsites.net/api/OverzichtConsultants/1");
$mails = json_decode($consultanten);

var_dump($mails);

$emailadressen = array();

foreach($mails as $email) {
    array_push($emailadressen,$email["Email"]);
}

var_dump($emailadressen);

    foreach ($emailadressen as $mail) {
        $subject = "timesheets invullen";
        $message = "Vergeet niet uw timesheets in te vullen.";
        mail($mail, $subject, $message);
    }
    
?>