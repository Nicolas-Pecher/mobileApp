<?php
/**
 * Created by PhpStorm.
 * User: Yasmine
 * Date: 26/03/2019
 * Time: 23:11
 */

session_start();
session_unset();
session_destroy();

header("Location: ../pages/login.php");

