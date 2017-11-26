<?php
require_once('base.php');
//USAGE
//Send a json with request field register and fields shown below filled

$searchInput = $decoded['searchInput'];
if(isset($searchInput)){
  echo $session->patientSearch($searchInput);
}
else{
  die("Search input not provided");
}
