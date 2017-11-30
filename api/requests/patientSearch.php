<?php

//USAGE
//Send a json with request field register and fields shown below filled


//Function that searches through the patient table given a search input
function patientSearch($searchInput, $institutionID, $db){
  //TODO sanitize search input to make sure no sql injections
  $qry = $db->prepare("SELECT patientID, firstName, lastName FROM patient WHERE lastName = %?% AND institutionID = ?");
  $qry->bind_param("si",$searchInput,$institutionID);
  $qry->execute();
  $result = $qry->get_result();
  $qry->close();
  return $result;
}

//get the institutionID of the use
require_once("getInstitutionID.php");

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

