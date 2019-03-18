<?php
/**
 * Created by PhpStorm.
 * User: Yasmine
 * Date: 11/03/2019
 * Time: 17:16
 */

$jsonTimesheets = file_get_contents('https://mobileapp-planning-services.azurewebsites.net/api/Timesheet');
$timesheets = json_decode($jsonTimesheets);

var_dump($timesheets);



