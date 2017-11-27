<?php

/*
//Make sure that the content type of the POST request has been set to application/json
$contentType = isset($_SERVER["CONTENT_TYPE"]) ? trim($_SERVER["CONTENT_TYPE"]) : '';
if(strcasecmp($contentType, 'application/json') != 0){
    throw new Exception('Content type must be: application/json');
}
*/

//Receive the RAW post data.
$content = trim(file_get_contents("php://input"));

//Attempt to decode the incoming RAW post data from JSON.
$decoded = json_decode($content, true);

/*
if(!is_array($decoded)){
    throw new Exception('Received content contained invalid JSON!');
}
*/

$request = $decoded['request'];

if(isset($request)){
    echo json_encode(array(
        'message' => 'The request type was ' + $request
    ));
}
else{
    echo json_encode(array(
        'message' => 'Invalid json sent'
    ));
}

?>
