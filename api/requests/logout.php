<?php
//Function that deletes the current session from the database given a session id

function clear($sid, $db) {
    $sid = mysqli_real_escape_string($db, $sid);
    $db->query("DELETE FROM sessions WHERE sid='{$sid}'");
}

$token = JWT::decode($decoded['token'], 'thelastjedi');

if(isset($token->sid)){
    clear($token->sid,$db);
    $array = array();
    $array['message'] = "Logout successful";
    $array['status'] = 1;
    echo json_encode($array);
}
else{
    $array = array();
    $array['message'] = "No token was sent";
    $array['status'] = -1;
    echo json_encode($array);

}