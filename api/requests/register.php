<?php
require_once('base.php');
//USAGE
//Send a json with request field register and fields shown below filled

$email = $decoded['email'];
$firstName = $decoded['firstName'];
$lastName = $decoded['lastName'];
$password = $decoded['password'];
$isClient = $decoded['isClient'];
$isAdmin = $decoded['isAdmin'];
$institutionID = $decoded['institutionID'];
echo $session->register($email,$firstName, $lastName, $password,$isClient,$isAdmin,$institutionID);
