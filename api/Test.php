<?php

require_once(__DIR__ . '/config/global.php');
function __autoload($className){
  require_once(__DIR__ . '/classes/' . $className . '.php');
}


$db = Database::getConnection();


foreach ($_POST as $key => $value) {
  $$key = trim($value);
}



$salt = mcrypt_create_iv(22, MCRYPT_DEV_URANDOM);
$options = [
    'cost' => 11,
    'salt' => $salt,
];
$hash = password_hash($password, PASSWORD_BCRYPT, $options);
echo  "Halt ", $salt , "<br> Hash " , $hash;

$qry = $db->prepare("INSERT INTO account(emailAddress,firstName,lastName,hash,salt) VALUES(?,?,?,?,?)");
$qry->bind_param("sssss",$email,$firstName,$lastName,$hash,$salt);
if($qry->execute()){
  echo "First query was successful";
}
else{
  echo "First query was unsuccessful";
}


//Get the institutionID for the insert into clientAccount
$incrementID = $qry->insert_id;
//If the created account is a client account create a client account

$qry->close();
$qry = $db->prepare("INSERT INTO systemAdmin VALUES(?)");
$qry->bind_param("i",$incrementID);
$qry->execute();
$qry->close();

 ?>
