<?php

require_once(__DIR__ . '/config/global.php');
function __autoload($className){
  require_once(__DIR__ . '/classes/' . $className . '.php');
}

$db = Database::getConnection();

$email = "zrider99zr@gmail.com";

if ($qry = $db->prepare("SELECT hash, salt FROM account WHERE emailAddress=?")) {

    /* bind parameters for markers */
    $qry->bind_param("s", $email);

    /* execute query */
    $qry->execute();

    /* bind result variables */
    $qry->bind_result($hash, $salt);

    /* fetch value */
    $qry->fetch();

    echo "salt: " . $salt . " - hash: " . $hash . "<br>";

    /* close statement */
    $qry->close();
}
else{
  echo "query prepare uncsuccessful:(" . $db->errno . ") " . $db->error;
}


 ?>
