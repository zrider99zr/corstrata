<?php


//Make sure that the content type of the POST request has been set to application/json
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
        $email = $decoded['email'];
        if(isset($request)){
            $array = array();
            $message = "login " + $email;
            $array['message'] = $message;
            echo json_encode($array);
        }
        else{
            echo json_encode(array(
                'message' => 'Invalid json sent'
            ));
        }
    }
}




?>
