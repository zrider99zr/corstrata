<?php
function registerInstitution($name, $address, $state, $city, $zipCode, $phoneNumber, $db){
    if($qry = $db->prepare("INSERT INTO instituon(name,address,state,city,zipCode,phoneNumber) VALUES(?, ?, ?, ?, ?, ?)")){
        $array = array();
        $array['message'] = "prepare was succesful";
        $array['status'] = 0;
        echo json_encode($array); 
        return -1;
    }
    else{
        $array = array();
        $array['message'] = "query prepare uncsuccessful:(" . $db->errno . ") " . $db->error;
        $array['status'] = 0;
        echo json_encode($array); 
        return -1;
    }
    /*
    $array = array();
    $array['message'] = "prepare was succesful";
    $array['status'] = 0;
    echo json_encode($array); 
    $qry->bind_param("ssssis",$name, $address, $state, $city, $zipCode, $phoneNumber);
    $qry->execute();
    $institutionID = $qry->insert_id;
    $qry->close();
            
    if(isset($institutionID)){
        return $institutionID;
    }
    else{
        return -1;
    }
  */
}

$name = $decoded['name'];
$address = $decoded['address'];
$state = $decoded['state'];
$city = $decoded['city'];
$zipCode = $decoded['zipCode'];
$phoneNumber = $decoded['phoneNumber'];

if(isset($name,$address,$state,$city,$zipCode,$phoneNumber)){
    $institutionID = registerInstitution($name,$address,$state,$zipCode,$phoneNumber,$db);
    if($institutionID != -1){
        $array = array();
        $array['message'] = "Institution Registration was successful";
        $array['status'] = 1;
        $array['institutionID'] = $institutionID;
        echo json_encode($array);
    }
    else{
        $array = array();
        $array['message'] = "Institution Registration was unsuccessful";
        $array['status'] = 0;
        echo json_encode($array);
    }
}
else{
    $array = array();
    $array['message'] = "Front End did not send the right variables";
    $array['status'] = 0;
    echo json_encode($array);
}
