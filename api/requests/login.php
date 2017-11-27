<?php
//Function that returns the userID of a user if the email and password are correct
function login($email, $password, $db){
    if($qry = $db->prepare("SELECT accountID, salt, hash FROM account WHERE emailAddress = ?")){
        $qry->bind_param("s",$email);
        $qry->execute();
        $qry->bind_result($userID,$dbSalt,$dbHash);
        $qry->store_result();
        $qry->fetch();

        $isset = isset($userID, $dbSalt, $dbHash);

        if(!$isset){
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


//USAGE
//Send a json with request field login and fields shown below filled

$email = $decoded['email'];
$password = $decoded['password'];

if(isset($email, $password)){ 
    $userID = login($email,$password,$db);
    if($userID != -1){
        $array = array();
        $array['message'] = "Login was successful";
        $array['status'] = 1;
        $array['uid'] = $userID;
        $_SESSION['uid'] = $userID;
        echo json_encode($array);
    }
    else{
        $array = array();
        $array['message'] = "Invalid Username/Pasword";
        $array['status'] = 0;
        echo json_encode($array);
    }  
}    

