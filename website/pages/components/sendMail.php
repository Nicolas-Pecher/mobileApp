<?php 
    $mails = $_POST["mails"];
    $subject = "timesheets invullen";
    $message = "Vergeet niet uw timesheets in te vullen.";
    mail($mails, $subject, $message);
?>