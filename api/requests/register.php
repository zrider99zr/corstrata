<?php

//USAGE
//Send a json with request field register and fields shown below filled
function registerAccount($email, $firstName, $lastName, $password, $isClient, $isAdmin, $institutionID, $db){
    //TODO sanitize inputs; ensure email is an email, ensure password doesn't have weird characters\
    //TODO solve institution picking problem (see TODO 2.2.1.3)
    
    //This function registers a system account
    function registerSystemAccount($accountID, $db){
        $qry = $db->prepare("INSERT INTO systemAdmin VALUES(?)");
        $qry->bind_param("iii",$accountID);
        $qry->execute();
        $qry->close();
    }
    //Function registers a client account from an account ID and an institution ID
    function registerClientAccount($accountID, $institutionID, $isAdmin, $db){
        //Insert into client account
        $qry = $db->prepare("INSERT INTO clientAccount VALUES(?,?,?)");
        $qry->bind_param("iii",$accountID,$institutionID,$isAdmin);
        $qry->execute();
        $qry->close();
    }
    
    //Creates a salt for the hash/salt process
    $salt = mcrypt_create_iv(22, MCRYPT_DEV_URANDOM);
    $options = [
        'cost' => 11,
        'salt' => $salt,
    ];
    //Creates a has with the salt and options
    $hash = password_hash($password, PASSWORD_BCRYPT, $options);
    //Prepares to insert the values into the database
    $qry = $db->prepare("INSERT INTO account(emailAddress,firstName,lastName,hash,salt) VALUES(?,?,?,?,?)");
    $qry->bind_param("sssss",$email,$firstName,$lastName,$hash,$salt);
    $qry->execute();
    
    //Gets the last account id to use to insert into the various account tables
    $incrementID = $qry->insert_id;
    $qry->close();
    //If the created account is a client account create a client account
    if($isClient == 1){
        registerClientAccount($incrementID,$institutionID,$isAdmin,$db);
        return 1;
    }
    //Otherwise create a system account
    else{
      registerSystemAccount($incrementID,$db);
      return 1;
    }
    
    return 0;
}

$email = $decoded['email'];
$firstName = $decoded['firstName'];
$lastName = $decoded['lastName'];
$password = $decoded['password'];
$isClient = $decoded['isClient'];
$isAdmin = $decoded['isAdmin'];
$iID = $decoded['institutionID'];

//Get institutionID of current user
require_once("getInstitutionID.php");
//Check that all of the fields are set
if(isset($email,$firstName,$lastName,$password,$isClient,$isAdmin)){
    //If the institution ID we retrieved from getInstitutionID is not -1 then we will go ahead and use it
    if($institutionID != -1){
        if(registerAccount($email, $firstName, $lastName, $password, $isClient, $isAdmin, $institutionID, $db) == 1){
            $array = array();
            $array['message'] = "Account Registration was successful";
            $array['status'] = 1;
            echo json_encode($array);
        }
        else{
            $array = array();
            $array['message'] = "Account Registration was unsuccessful";
            $array['status'] = 0;
            echo json_encode($array);
        }
    }
    else{
        //Otherwise if the account is not a client we dont care
        if($isClient == 0){
            if(registerAccount($email, $firstName, $lastName, $password, $isClient, $isAdmin, $institutionID, $db) == 1){
                $array = array();
                $array['message'] = "Account Registration was successful";
                $array['status'] = 1;
                echo json_encode($array);
            }
            else{
                $array = array();
                $array['message'] = "Account Registration was unsuccessful";
                $array['status'] = 0;
                echo json_encode($array);
            }
        }
        //However if it is a client
        else{
            //If the institution ID sent by the frontend is -1 we have a problem
            if($iID != -1){
                $array = array();
                $array['message'] = "Please send a valid institutionID";
                $array['status'] = 0;
                echo json_encode($array);
            }
            //Otherwise were good and we send that one
            else{
                if(registerAccount($email, $firstName, $lastName, $password, $isClient, $isAdmin, $iID, $db) == 1){
                    $array = array();
                    $array['message'] = "Account Registration was successful";
                    $array['status'] = 1;
                    echo json_encode($array);
                }
                else{
                    $array = array();
                    $array['message'] = "Account Registration was unsuccessful";
                    $array['status'] = 0;
                    echo json_encode($array);
                } 
            }
        }

    }
}
else{
    $array = array();
    $array['message'] = "Please ensure that you sent all of the required fields";
    $array['status'] = 0;
    echo json_encode($array);
}
