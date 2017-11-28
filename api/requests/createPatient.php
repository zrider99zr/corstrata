<?php
function registerPatient($firstName, $lastName, $db){
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
    
    $qry = $db->prepare("INSERT INTO patient(firstName,lastName,institutionID) VALUES(?,?,?)");
    $qry->bind_param("ssi",$firstName,$lastName,$institutionID);
    $qry->execute();
    $qry->close();
    return 1;
}

$firstName = $decoded['firstName'];
$lastName = $decoded['lastName'];

if(isset($firstName,$lastName)){
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
