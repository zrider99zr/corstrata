<?php
require_once(__DIR__ . '/config/global.php');
function __autoload($className){
  require_once(__DIR__ . '/classes/' . $className . '.php');
}

$db = Database::getConnection();
$session = new Session($db);

if(strcasecmp($_SERVER['REQUEST_METHOD'], 'POST') != 0){
    throw new Exception('Request method must be POST!');
}

//Make sure that the content type of the POST request has been set to application/json
$contentType = isset($_SERVER["CONTENT_TYPE"]) ? trim($_SERVER["CONTENT_TYPE"]) : '';
if(strcasecmp($contentType, 'application/json') != 0){
    throw new Exception('Content type must be: application/json');
}

//Receive the RAW post data.
$content = trim(file_get_contents("php://input"));

//Attempt to decode the incoming RAW post data from JSON.
$decoded = json_decode($content, true);

//If json_decode failed, the JSON is invalid.
if(!is_array($decoded)){
    throw new Exception('Received content contained invalid JSON!');
}

$request = $decoded['request'];

$VALID_REQUESTS = array('login','logout', 'register');

$httpXrequested = isset($_SERVER['HTTP_X_REQUESTED_WITH']);

$isAjaxCall = $httpXrequested ? strtolower($_SERVER['HTTP_X_REQUESTED_WITH']) == 'xmlhttprequest' : null;

if($httpXrequested && $isAjaxCall && isset($request)){
  $access = true;
  $file = './requests/' . $request . '.php';

  if(file_exists($file) && in_array($request, $VALID_REQUESTS)){
    require_once($file);
  }
  else{
    die("Request not found in host file-system OR not whitelisted. {$request}");
  }
}
else{
  $req_out = isset($request) ? $request : null;
  $a = $httpXrequested ? "T":"F";
  $b = $isAjaxCall ? "T":"F";
  $c = isset($request) ? "T":"F";
  //Print error message
  die("Attempting to direct access OR malformed request sent to API! (API Level) <br /> Errors: A[" . $a . "] // B[" . $b . "] // C[" . $c. "] // D[" . $req_out . "]");
}
 ?>
