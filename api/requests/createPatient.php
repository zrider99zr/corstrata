<?php

//Get institution ID for this user
require_once("getInstitutionID.php");
//Function that creates a patient given some data
function registerPatient($firstName, $lastName, $institutionID, $db){
    //Function returns institution ID of the user
    $qry = $db->prepare("INSERT INTO patient(firstName,lastName,institutionID) VALUES(?,?,?)");
    $qry->bind_param("ssi",$firstName,$lastName,$institutionID);
    $qry->execute();
    $qry->close();
    return 1;
}

$firstName = $decoded['firstName'];
$lastName = $decoded['lastName'];

if(isset($firstName,$lastName)){
    if($institutionID != -1){
        if(registerPatient($firstName, $lastName,$db) == 1){
            $array = array();
            $array['message'] = "Patient Registration was successful";
            $array['status'] = 1;
            echo json_encode($array);
        }
        else{
            $array = array();
            $array['message'] = "Patient Registration was unsuccessful";
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
