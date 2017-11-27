<?php


//USAGE
//Send a json with request field login and fields shown below filled

$email = $decoded['email'];
$password = $decoded['password'];
if(isset($email) && isset($password)){
    
    if($session->login($email,$password) == 1){
        $array = array();
        $array['message'] = "Login was successful";
        $array['status'] = 1;
        echo json_encode($array);
    }
    else{
        $array = array();
        $array['message'] = "Invalid Username/Pasword";
        $array['status'] = 0;
        echo json_encode($array);
    }
    
    
}    

