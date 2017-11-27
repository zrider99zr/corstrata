<?php

require_once(__DIR__ . '/config/global.php');
function __autoload($className){
  require_once(__DIR__ . '/classes/' . $className . '.php');
}

$db = Database::getConnection();
//$session = new Session($db);

$VALID_REQUESTS = array('login','logout', 'register');

$contentType = isset($_SERVER["CONTENT_TYPE"]) ? trim($_SERVER["CONTENT_TYPE"]) : '';
if(strcasecmp($contentType, 'application/json') != 0){
    echo json_encode(array(
        'message' => 'Content type must be: application/json'
    ));
}
else{
    //Receive the RAW post data.
    $content = trim(file_get_contents("php://input"));

    //Attempt to decode the incoming RAW post data from JSON.
    $decoded = json_decode($content, true);
    
    if(!is_array($decoded)){
      echo json_encode(array(
        'message' => 'Received content contained invalid JSON!'
      ));
    }
    else{
      $request = $decoded['request'];
      if(isset($request)){
        $access = true;
        $array = array();
        $email = $decoded['email'];
        $password = $decoded['password'];
        $message = "Request: " . $request . " Login: " . $email . " Password: " . $password;
        $array['message'] = $message;
        echo json_encode($array);
        //require_once(__DIR__ . '/requests/login.php');
      }
      else{
        echo json_encode(array(
          'message' => 'Request not sent'
        ));
      }
    }
}
 ?>
