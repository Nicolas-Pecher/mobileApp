<?php
/**
 * Created by PhpStorm.
 * User: Yasmine
 * Date: 13/03/2019
 * Time: 17:33
 */

$json = file_get_contents('https://mobileapp-planning-services.azurewebsites.net/api/Project');
$projecten = json_decode($json);

