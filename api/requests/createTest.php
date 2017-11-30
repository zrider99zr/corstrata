<?php
//Creates an entry into the test table given a patient ID
function createTest($patientID, $userID, $db){
    $qry = $db->prepare("INSERT INTO test (patientID, accountID, dateTaken) VALUES (?, ?, ?)");
    $datetime = date_create()->format('Y-m-d H:i:s');
    $qry->bind_param("iis",$patientID,$userID,$datetime);
    if($qry->execute()){
      $qry->close();
      return $qry->insert_id;
    }
    $qry->close();
    return -1;
}

require_once("userIDFromJWT.php");
$testID = -1;
if($userID != -1){
  $testID = createTest($patientID, $userID, $db);
}



