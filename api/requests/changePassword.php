<?php
//
function changePassword($oldPassword, $newPassword,$userID,$db){
    if($qry = $db->prepare("SELECT salt, hash FROM account WHERE accountID = ?")){
        //Get the salt and has from the account id
        $qry->bind_param("i",$userID);
        $qry->execute();
        $qry->bind_result($dbSalt,$dbHash);
        $qry->store_result();
        $qry->fetch();

        //Check to make sure that the query was succesfull
        if(!isset($dbSalt, $dbHash)){
            return -1;
        }
        
        //Set the options to hash the oldPassword with the salt from the DB for comparison
        $options = [
            'cost' => 11,
            'salt' => $dbSalt,
        ];
        //Hash it
        $hash = password_hash($oldPassword, PASSWORD_BCRYPT, $options);
        $qry->close();
        //Compare the hashes
        if($hash == $dbHash){
            //Create a new salt for the new password and hash it
            $salt = mcrypt_create_iv(22, MCRYPT_DEV_URANDOM);
            $options = [
                'cost' => 11,
                'salt' => $salt,
            ];
            $newHash = password_hash($newPassword, PASSWORD_BCRYPT, $options);
            //Import that hash and salt to the database
            $qry = $db->prepare("UPDATE account SET hash = ?, salt = ? WHERE accountID = ?");
            $qry->bind_param("ssi",$newHash,$salt,$userID);
            $qry->execute();
            $qry->close();
            return 1;
        }
        else {
          return -1;
        }
    }
    return -1;
}

//Get the input from the frontend
$oldPassword = $decoded['oldPassword'];
$newPassword = $decoded['newPassword'];

//Get the userID from the JWT
require_once("userIDFromJWT.php");
//Check that the data and userID was set
if(isset($oldPassword, $newPassword)){
    if($userID != -1){
        //Change the password
        $changeOptions= changePassword($oldPassword,$newPassword, $userID, $db);
        //If successful tell the frontend
        if($changeOptions == 1){
            $array = array();
            $array['message'] = "Password Change was succesful";
            $array['status'] = 1;
            echo json_encode($array);
        }
        //Else tell the frontend why
        elseif($changeOptions == 0){
            $array = array();
            $array['message'] = "Old password cannot be the same as the new one";
            $array['status'] = 0;
            echo json_encode($array);
        }
        elseif($changeOptions == -1){
            $array = array();
            $array['message'] = "Did not match old password";
            $array['status'] = 0;
            echo json_encode($array);
        }
    }
    else{
        $array = array();
        $array['message'] = "UserID was not found";
        $array['status'] = 0;
        echo json_encode($array);
    }

}
