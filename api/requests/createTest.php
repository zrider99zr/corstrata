<?php
//Creates an entry into the test table given a patient ID
function createTest($patientID){
    $qry = $this->mysqli->prepare("INSERT INTO test (patientID, accountID, dateTaken) VALUES (?, ?, ?)");
    $datetime = date_create()->format('Y-m-d H:i:s');
    $uid = $_SESSION['uid'];
    $qry->bind_param("iis",$patientID,$uid,$datetime);
    if($qry->execute()){
      $qry->close();
      return $qry->insert_id;
    }
    $qry->close();
    return -1;
}


