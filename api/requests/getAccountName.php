<?php

function getUsername($userID,$db){
    if($qry = $db->prepare("SELECT firstName, lastName FROM account WHERE accountID = ?")){
        $qry->bind_param("i",$userID);
        $qry->execute();
        $qry->bind_result($firstName,$lastName);
        $qry->fetch();
        if(isset($firstName, $lastName)){
            $qry->close();
            return $firstName . " " . $lastName;
        }
        else{
            $qry->close();
            return -1;
        }
    }
    else{
        $array = array();
        $array['message'] = "query prepare uncsuccessful:(" . $db->errno . ") " . $db->error;
        $array['status'] = 0;
        echo json_encode($array); 
        return -1;
    }
}

require_once("userIDFromJWT.php");

if($userID != -1){
    $userName = getUsername($userID, $db);
    if($userName != -1){
        $array = array();
        $array['message'] = "Account Type retrieval was successful";
        $array['status'] = 1;
        $array['userName'] = $userName;
        echo json_encode($array);
    }
    else{
        $array = array();
        $array['message'] = "Could not retrieve account type";
        $array['status'] = 0;
        echo json_encode($array);
    }
}
else{
    $array = array();
    $array['message'] = "Could not retrieve user ID";
    $array['status'] = 0;
    echo json_encode($array);
}