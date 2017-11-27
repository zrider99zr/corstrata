<?php
function changePassword($oldPassword, $newPassword,$db){
    if($oldPassword != $newPassword){
      //check old password to see if it is valid
      $uid = $_SESSION['uid'];
      $qry = $db->prepare("SELECT hash, salt FROM account WHERE accountID = ?");
      $qry->bind_param("i",$uid);
      $qry->execute();
      $qry->bind_result($dbHash, $dbSalt);
      $qry->fetch();
      if(!isset($dbSalt, $dbHash)){
          return -2;
        }
      $options = [
        'cost' => 11,
        'salt' => $dbSalt,
        ];
    

      $hash = password_hash($oldPassword, PASSWORD_BCRYPT, $options);
      if($hash == $dbHash){
        //update new salt and password in account
        $salt = mcrypt_create_iv(22, MCRYPT_DEV_URANDOM);
        $options = [
            'cost' => 11,
            'salt' => $salt,
        ];
        $newHasash = password_hash($newPassword, PASSWORD_BCRYPT, $options);

        $qry = $db->prepare("UPDATE account SET hash = ?, salt = ? WHERE accountID = ?");
        $qry->bind_param("ssi",$newHash,$salt,$uid);
        $qry->execute();
        $qry->close();
        return 1;
      }
      else{
        $qry->close();
        return -1;
      }
    }
    else {
      $qry->close();
      return 0;
    }
}

$oldPassword = $decoded['oldPassword'];
$newPassword = $decoded['newPassword'];

if(isset($oldPassword, $newPassword)){ 
    $changeOptions= changePassword($oldPassword,$newPassword,$db);
    if($chageOptions == 1){
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
    elseif($chageOptions == -1){
        $array = array();
        $array['message'] = "Did not match old password";
        $array['status'] = 0;
        echo json_encode($array);
    }
    elseif($chageOptions == -2){
        $array = array();
        $array['message'] = "Could not find account ID";
        $array['status'] = 0;
        echo json_encode($array);
    }
} 

