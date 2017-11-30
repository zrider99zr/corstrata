<?php

//USAGE
//Send a json with request field register and fields shown below filled


//Function that searches through the patient table given a search input
function patientSearch($searchInput, $institutionID, $db){
  //TODO sanitize search input to make sure no sql injections
  if($qry = $db->prepare("SELECT patientID, firstName, lastName FROM patient WHERE lastName LIKE CONCAT('%', ? , '%') AND institutionID = ?")){
    $qry->bind_param("si",$searchInput,$institutionID);
    $qry->execute();
    $result = $qry->get_result();
    /*
    $qry->bind_result($patientID, $firstName, $lastName);
    $result = array();
    $i = 0;
    while($qry->fetch()){
      $result[$i]['patientID'] = $patientID;
      $result[$i]['firstName'] = $firstName;
      $result[$i]['lastName'] = $lastName;
      $i++;
    }
    */
    $qry->close();
    return $result;
  }
  else{
    $array = array();
    $array['message'] = "query prepare uncsuccessful:(" . $db->errno . ") " . $db->error;
    $array['status'] = 0;
    echo json_encode($array); 
    return -1;
  }
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

