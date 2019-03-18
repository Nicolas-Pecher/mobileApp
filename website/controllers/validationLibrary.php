<?php
/**
 * Created by PhpStorm.
 * User: Yasmine
 * Date: 11/03/2019
 * Time: 17:00
 */

function getFieldValue($field) {
    return $_POST($field);
}

function isFieldEmpty($field) {
    $value = getFieldValue($field);
    return empty($value);
}

// error message generation

function errRequiredField($field) {
    if(isFieldEmpty($field)) {
        return "Verplicht";
    } else {
        return "";
    }
}



