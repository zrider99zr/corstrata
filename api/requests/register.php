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
    //Function returns institution ID of the user
    function getInstitutionID($db){
        $uid = $_SESSION['uid'];
        $qry = $db->prepare("SELECT institutionID from clientAccount where accountID =  ?");
        $qry->bind_param("i",$uid);
        $qry->execute();
        $result = $qry->get_result();
        $qry->close();
        return isset($result[0]['institutionID']) ? $result[0]['institutionID'] : -1;
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
      if($institutionID == -1){
        //If no specified institutionID from the front end get one from the current users institutionID
        $iID = getInstitutionID($db);
        if($iID != -1){
          registerClientAccount($incrementID,$iID,$isAdmin);
          return 1;
        }
        else{
          return 0;
        }
      }
      else{
        //Otherwise just use the one from the frontend
        registerClientAccount($incrementID,$institutionID,$isAdmin,$db);
        return 1;
      }
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
$institutionID = $decoded['institutionID'];
if(isset($email,$firstName,$lastName,$password,$isClient,$isAdmin,$institutionID)){
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
