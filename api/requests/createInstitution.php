<?php

function createNewInstitution($name,$address,$state,$city,$zipCode,$phoneNumber,$db){
    //Insert the information into the database
    if($qry = $db->prepare("INSERT INTO institution(name,address,state,city,zipCode,phoneNumber) VALUES(?, ?, ?, ?, ?, ?)")){
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
        return -1;
    }
    else{
        return -1;
    }
}
//Everything in decoded must be sent to the backend exactly as stated
$name = $decoded['name'];
$address = $decoded['address'];
$state = $decoded['state'];
$city = $decoded['city'];
$zipCode = $decoded['zipCode'];
$phoneNumber = $decoded['phoneNumber'];
//Check to make sure that everything is working
if(isset($name,$address,$state,$city,$zipCode,$phoneNumber)){
    //Get the institutionID from the above function
    $institutionID = createNewInstitution($name,$address,$state,$city,$zipCode,$phoneNumber,$db);
    //Check if it's valid if so tell the frontend
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
