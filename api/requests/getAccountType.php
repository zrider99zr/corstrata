<?php

//Function to get the account type of a user
function getAccountType($uid, $db){
    //Select acountID FROM account
    $qry = $db->prepare("SELECT accountID from account where accountID =  ?");
    $qry->bind_param("i",$uid);
    $qry->execute();
    //If it exists
    if($qry->num_rows == 1){
      //Pull the accounts is admin
      $qry = $db->prepare("SELECT isAdmin from clientAccount where accountID =  ?");
      $qry->bind_param("i",$uid);
      $qry->execute();
      $qry->bind_result($isAdmin);
      $qry->store_result();
      //If that exists
      if($qry->num_rows == 1){
        while($qry->fetch()){
          //If is admin the account is a client admin account
          if($isAdmin == 1){
            $qry->free_result();
            $qry->close();
            return 1;
          }
          //Otherwise its a standard client account
          else if($isAdmin == 0){
            $qry->free_result();
            $qry->close();
            return 2;
          }
        }
      }
      //Otherwise the account is a corstrata account
      else{
        $qry->free_result();
        $qry->close();
        return 3;
      }
    }
    //If no account is found return -1 to specify
    $qry->close();
    return -1;
}

require_once("userIDFromJWT.php");

if($userID != -1){
    $accountType = getAccountType($userID, $db);
    if($accountType != -1){
        $array = array();
        $array['message'] = "Account Type retrieval was successful";
        $array['status'] = 1;
        $array['accountType'] = $accountType;
        echo json_encode($array);
    }
    else{
        $array = array();
        $array['message'] = "Could not retrieve account type";
        $array['status'] = 0;
        echo json_encode($array);
    }
}
else{
    $array = array();
    $array['message'] = "Could not retrieve user ID";
    $array['status'] = 0;
    echo json_encode($array);
}