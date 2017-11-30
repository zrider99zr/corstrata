<?php
//Function that returns the userID of a user if the email and password are correct
function login($email, $password, $db){
    if($qry = $db->prepare("SELECT accountID, salt, hash FROM account WHERE emailAddress = ?")){
        $qry->bind_param("s",$email);
        $qry->execute();
        $qry->bind_result($userID,$dbSalt,$dbHash);
        $qry->store_result();
        $qry->fetch();

        if(!isset($userID, $dbSalt, $dbHash)){
            return -1;
        }
        
        $options = [
            'cost' => 11,
            'salt' => $dbSalt,
        ];
        
        $hash = password_hash($password, PASSWORD_BCRYPT, $options);
        $qry->close();
        if($hash == $dbHash){
          return $userID; //hashes match, passwords match
        }
        else {
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
//USAGE
//Send a json with request field login and fields shown below filled

//Create a Json web token to send to the frontend for storage
function createJWT($userID, $db){
    //Determine if a session already exists for the user
    function sessionExists($userID, $db){
        $qry = $db->prepare("SELECT * from sessions where accountID = ?");
        $qry->bind_param("i", $userID);
        $qry->execute();

        $result = $qry->get_result();
        $qry->close();
        if(count($result) > 0 ){
            return true;
        }
        else{
            return false;
        }
    }
    //Build a session and insert it into the database
    function buildSID($userid, $db) {
        //Build a random string for use as a session ID
        function generateRandStr($length) {
            $randstr = "";
            for ($i = 0; $i < $length; $i++) {
              $randnum = mt_rand(0, 61);
              if ($randnum < 10) {
                $randstr .= chr($randnum + 48);
              } elseif ($randnum < 36) {
                $randstr .= chr($randnum + 55);
              } else {
                $randstr .= chr($randnum + 61);
              }
            }
            return $randstr;
        }
        
        $sid = md5(generateRandStr(16));
        $time = time();
        $timestamp = $time + 60 * SESSION_LENGTH;
    
        $qry = $db->prepare("INSERT INTO sessions (sessionID, accountID, timeCreated) VALUES (?, ?, ?)");
        $qry->bind_param("sii",$sid,$userid,$timestamp);
    
        if ($qry->execute()) {
          $qry->close();
          return $sid;
        }
        else{
          $error = $qry->error;
          $qry->close();
          return -1;
        }
    }

    function clearByUID($userID, $db){
        if ($db->query("DELETE FROM sessions WHERE accountID='{$userID}'")) {
          return true;
        }
        else {
          return $db->error;
        }
        unset($_SESSION['sid']);
    }

    if(sessionExists($userID,$db)){
      if (!clearByUID($userID,$db)) {
        //Couldnt clear the session, return a json element containing the error
        return json_encode("Couldn't clear SID when creating new session.");
      }
    }
    //Creates a session
    $sid = buildSID($userID, $db);
    if($sid != -1){
        $array = array();
        $array['sid'] = $sid;
        return JWT::encode($array, 'thelastjedi');
    }
    else{
        return -1;
    }
}

$email = $decoded['email'];
$password = $decoded['password'];

if(isset($email, $password)){ 
    //$userID = login($email,$password,$db);
    $userID = -1;
    if($userID != -1){
        $array = array();
        $array['message'] = "Login was successful";
        $array['status'] = 1;
        $array['uid'] = $userID;
        $array['name'] = getUsername($userID, $db);
        //$array['token'] = createJWT($userID,$db);
        echo json_encode($array);
    }
    else{
        $array = array();
        $array['message'] = "Invalid Username/Pasword";
        $array['status'] = 0;
        echo json_encode($array);
    }  
}    

