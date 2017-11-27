<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST');
header("Access-Control-Allow-Headers: X-Requested-With");
require_once(__DIR__ . '/config/global.php');
function __autoload($className){
  require_once(__DIR__ . '/classes/' . $className . '.php');
}

$db = Database::getConnection();


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
        
        require_once(__DIR__ . '/requests/' . $request . '.php');
      }
      else{
        echo json_encode(array(
          'message' => 'Request not sent'
        ));
      }
    }
}
 ?>
