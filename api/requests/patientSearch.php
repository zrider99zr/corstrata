<?php

//USAGE
//Send a json with request field register and fields shown below filled

//get the institutionID of the use
require_once("getInstitutionID.php");
//Function that searches through the patient table given a search input
function patientSearch($searchInput, $institutionID, $db){
  //TODO sanitize search input to make sure no sql injections
  $qry = $db->prepare("SELECT patientID, firstName, lastName FROM patient WHERE lastName = %?% AND institutionID = ?");
  $qry->bind_param("si",$searchInput,$institutionID);
  $qry->execute();
  $qry->bind_result($patientID,$firstName,$lastName);
  $array = array();
  $i = 0;
  while($qry->fetch()){
    $array[$i]['patientID'] = $patientID;
    $array[$i]['name'] = $firstName . " " . $lastName;
    $i++;
  }
  return json_encode($array);
}

$searchInput = $decoded['searchInput'];
if(isset($searchInput)){
  if($institutionID != -1){
    $search = patientSearch($searchInput,$institutionID,$db);
    if($search != -1){
      $array = array();
      $array['message'] = "Search was successful";
      $array['status'] = 1;
      $array['search'] = $search;
      echo json_encode($array);
    }
    else{
      $array = array();
      $array['message'] = "Search was unsuccesful";
      $array['status'] = 0;
      echo json_encode($array);
    }
  }
  else{
    $array = array();
    $array['message'] = "Institution was not found";
    $array['status'] = 0;
    echo json_encode($array);
  }
  
}

