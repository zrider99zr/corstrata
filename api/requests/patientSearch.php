<?php

//USAGE
//Send a json with request field register and fields shown below filled

//Function that searches through the patient table given a search input
function patientSearch($searchInput, $db){
  //TODO sanitize search input to make sure no sql injections

  //Function returns institution ID of the user
  function getInstitutionID($db){
    $uid = $_SESSION['uid'];
    $qry = $db->prepare("SELECT institutionID from clientAccount where accountID =  ?");
    $qry->bind_param("i",$uid);
    $qry->execute();
    $result = $qry->get_result();
    $qry->close();
    return isset($result[0]['institutionID']) ? $result[0]['institutionID'] : -1;
  }

  $institutionID = getInstitutionID($db);
  if($institutionID == -1){
    return -1;
  }
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
  $search = patientSearch($searchInput,$db);
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

