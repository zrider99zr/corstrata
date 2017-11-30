<?php
//
function changePassword($oldPassword, $newPassword,$userID,$db){
    if($qry = $db->prepare("SELECT salt, hash FROM account WHERE accountID = ?")){
        $qry->bind_param("i",$userID);
        $qry->execute();
        $qry->bind_result($dbSalt,$dbHash);
        $qry->store_result();
        $qry->fetch();

        if(!isset($dbSalt, $dbHash)){
            return -1;
        }
        
        $options = [
            'cost' => 11,
            'salt' => $dbSalt,
        ];
        
        $hash = password_hash($password, PASSWORD_BCRYPT, $options);
        $qry->close();
        //If the user entered the right previous password
        if($hash == $dbHash){
            $salt = mcrypt_create_iv(22, MCRYPT_DEV_URANDOM);
            $options = [
                'cost' => 11,
                'salt' => $salt,
            ];
            $newHash = password_hash($newPassword, PASSWORD_BCRYPT, $options);
    
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
    else{
        $array = array();
        $array['message'] = "query prepare uncsuccessful:(" . $db->errno . ") " . $db->error;
        $array['status'] = 0;
        echo json_encode($array); 
        return -1;
    }
}

$oldPassword = $decoded['oldPassword'];
$newPassword = $decoded['newPassword'];

require_once("userIDFromJWT.php");

if(isset($oldPassword, $newPassword)){
    if($userID != -1){
        $changeOptions= changePassword($oldPassword,$newPassword,$db);
        if($changeOptions == 1){
            $array = array();
            $array['message'] = "Password Change was succesful";
            $array['status'] = 1;
            echo json_encode($array);
        }
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
        elseif($changeOptions == -2){
            $array = array();
            $array['message'] = "Could not find account ID";
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
