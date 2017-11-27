<?php

//Function that returns the userID of a user if the email and password are correct
function login($email, $password){
   $qry = $db->prepare("SELECT userID FROM account WHERE emailAddress = ?");
   
   $qry->bind_param("s",$email);
   $qry->execute();
   $result = $qry->get_result();
   if(isset($result[0]['userID'])){
       return $result[0]['userID'];
   }
   else{
       return -1;
   }
   /*
   $options = [
       'cost' => 11,
       'salt' => $dbsalt,
   ];
   $hash = password_hash($password, PASSWORD_BCRYPT, $options);
   $qry->close();
   if($hash == $dbHash){
     return $userID; //hashes match, passwords match
   }
   else {
     return -1;
   } 
   */
}

//USAGE
//Send a json with request field login and fields shown below filled

$email = $decoded['email'];
$password = $decoded['password'];

if(isset($email) && isset($password)){
    $userID = login($email,$password);
    if($userID != -1){
        $array = array();
        $array['message'] = "Login was successful";
        $array['status'] = 1;
        //$_SESSION['uid'] = $userID;
        echo json_encode($array);
    }
    else{
        $array = array();
        $array['message'] = "Invalid Username/Pasword";
        $array['status'] = 0;
        echo json_encode($array);
    }
    
    
}    

