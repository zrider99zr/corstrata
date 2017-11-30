<?php

//Function to get userID from a given session ID
function getUID($sid, $db){
    if($qry = $db->prepare("SELECT accountID FROM sessions WHERE sessionID = ?")){
      $qry->bind_param("s",$sid);
      $qry->execute();
      $qry->bind_result($userID);
      $qry->fetch();
      $userID = isset($userID) ? $userID : -1;
      $qry->close();
      return $userID;
    }
    else{
      return $db->error;
    }
}

$userID = -1;
$token = JWT::decode($decoded['token'], 'thelastjedi');

if(isset($token->sid)){
    $userID = getUID($token->sid,$db);
}

if($request == "userIDFromJWT"){
    if($userID != -1){
        $array = array();
        $array['message'] = "UserID was found";
        $array['status'] = 1;
        $array['userID'] = $userID;
        $array['sid'] = $token->sid;
        echo json_encode($array);
      }
      else{
        $array = array();
        $array['message'] = "UserID was not found";
        $array['status'] = 0;
        $array['sid'] = $token->sid;
        echo json_encode($array);
      }
}