<?php
require_once('base.php');

//USAGE
//Send a json with request field login and fields shown below filled

$email = $decoded['email'];
$password = $decoded['password'];
echo $session->login($email,$password);
