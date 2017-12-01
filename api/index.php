<?php
header("Content-Type: application/json");
header('Access-Control-Allow-Origin: *');
require_once(__DIR__ . '/config/global.php');
function __autoload($className){
  require_once(__DIR__ . '/classes/' . $className . '.php');
}

$db = Database::getConnection();


$VALID_REQUESTS = array('login','logout', 'register');

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

 ?>
