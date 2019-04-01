<?php
/**
 * Created by PhpStorm.
 * User: Yasmine
 * Date: 17/03/2019
 * Time: 23:53
 */

$gebruikerId = 7;
$projectId = 1;
$datum = "2019-03-11T00:00:00";
$begintijd = "2019-03-11T00:00:00";
$eindtijd = "2019-03-11T09:00:00";
$opmerking = "test php call 2";
$overuur = false;

// the data to send to the api
$postData = array(
  'GebruikerId' => $gebruikerId,
  'ProjectId' => $projectId,
  'Datum' => $datum,
  'Beginuur' => $begintijd,
  'Einduur' => $eindtijd,
  'Opmerking' => $opmerking,
  'Overuur' => $overuur
);

//create the context for the request
$context = stream_context_create(array(
    'http' => array(
        'method' => 'POST',
        'header' => "Content-Type: application/json\r\n",
        'content' => json_encode($postData)
    )
));

//send the request
$response = file_get_contents('https://mobileapp-planning-services.azurewebsites.net/api/Timesheet', FALSE, $context);

//check for errors
if($response === FALSE) {
    die('Error');
}

//decode the response
$responseData = json_decode($response, TRUE);

//Print the data from the response
var_dump($responseData);


