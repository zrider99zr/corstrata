<?php

//Function that gets a institution ID from the currently logged in user
function getInstitutionID($userID, $db){
    $qry = $db->prepare("SELECT institutionID from clientAccount where accountID =  ?");
    $qry->bind_param("i",$userID);
    $qry->execute();
    $result = $qry->get_result();
    $qry->close();
    return isset($result[0]['institutionID']) ? $result[0]['institutionID'] : -1;
}
require_once("userIDFromJWT.php");
//$institutionID = getInstitutionID($db,$session);
$institutionID = getInstitutionID($userID,$db);
if($request == "getInstitutionID"){
    //TODO add the functionality 
    if($institutionID != -1){
        $array = array();
        $array['message'] = "Institution was found";
        $array['status'] = 1;
        //$array['userID'] = $session->getUserID();
        $array['sessionID'] = isset($_SESSION['sid']) ? $_SESSION['sid'] : -1;
        echo json_encode($array);
      }
      else{
        $array = array();
        $array['message'] = "Institution was not found";
        $array['status'] = 0;
        echo json_encode($array);
      }
}