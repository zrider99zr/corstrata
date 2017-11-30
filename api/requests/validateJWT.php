<?php

function validate($sid, $db){
    //$sid = htmlentities(mysqli_real_escape_string(this->mysqli),$sid);
    function clear($sid, $db) {
        $sid = mysqli_real_escape_string($db, $sid);
        $db->query("DELETE FROM sessions WHERE sid='{$sid}'");
    }

    $timestamp = time();
    $qry = $db->prepare("SELECT timeCreated, accountID FROM sessions WHERE sessionID = ?");
    $qry->bind_param("s",$sid);
    $qry->execute();
    $qry->bind_result($timestamp,$uid);
    $qry->store_result();
    if($qry->num_rows >=1){
      while($qry->fetch()){
        if($currentTime > $timestamp){
          clear($sid, $db);
          $qry->close();
          return false;
        }
        else{
          $qry->close();
          return true;
        }
      }
    }
    else{
        $qry->close();
        return false;
    }
}

$token = JWT::decode($decoded['token'], 'thelastjedi');

if(isset($token)){
    if(validate($token['sid'],$db)){
        $array = array();
        $array['message'] = "Valid session token";
        $array['status'] = 1;
        echo json_encode($array);
    }
    else{
        $array = array();
        $array['message'] = "Session token expired or was not found";
        $array['status'] = 0;
        echo json_encode($array);
    }
}
else{
    $array = array();
    $array['message'] = "No token was sent";
    $array['status'] = -1;
    echo json_encode($array);
}