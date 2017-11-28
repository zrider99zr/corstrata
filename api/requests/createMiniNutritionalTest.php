<?php
//Require the function for creating an entry into the test table
require("createTest.php");
//Function that inserts a MiniNutritional test into the database; 
function createMiniNutritionalTest($testID, $questionA, $questionB, $questionC, $questionD, $questionE, $questionF1, $questionF2, $db){
    
    if($testID == -1){
      echo "Test Failed to insert into the database";
      return 0;
    }
    else{
      if($questionF2 == -1){
        $qry = $this->mysqli->prepare("INSERT INTO miniNutritionalTest (testID, a, b, c, d, e, f1, f2, score) VALUES (?, ?, ?, ?, ?, ?, ?, null, ?)");
        $grade = $questionA + $questionB + $questionC + $questionD + $questionE + $questionF1;
        $qry->bind_param("iiiiiiiii",$testID, $questionA, $questionB, $questionC, $questionD, $questionE, $questionF1, $grade);
        $qry->execute();
        $qry->close();
      }
      else{
        $qry = $this->mysqli->prepare("INSERT INTO miniNutritionalTest (testID, a, b, c, d, e, f1, f2, score) VALUES (?, ?, ?, ?, ?, ?, null, ?, ?)");
        $grade = $questionA + $questionB + $questionC + $questionD + $questionE + $questionF2;
        $qry->bind_param("iiiiiiiii",$testID, $questionA, $questionB, $questionC, $questionD, $questionE, $questionF2, $grade);
        $qry->execute();
        $qry->close();
      }
      return 1;
    }
}

//Initialize all the variables for the function
//Create a Test entry
$patientID = $decoded['patientID'];
$testID = createTest($patientID);
$A = $decoded['A'];
$B = $decoded['B'];
$C = $decoded['C'];
$D = $decoded['D'];
$E = $decoded['E'];
//F1 and F2 changes based off of if there is BMI available. Put -1 for the 
$F1 = $decoded['F1'];
$F2 = $decoded['F2'];
//Check to make sure that they are all set correctly 
if($testID != -1 && isset($A,$B,$C,$D,$E,$F1,$F2)){
    //If create test was successful
    if(createMiniNutritionalTest($testID,$A,$B,$C,$D,$E,$F1,$F2,$db) == 1){
        $array = array();
        $array['message'] = "Test Creation was sucessful";
        $array['status'] = 1;
        echo json_encode($array);
    }
    else{
        $array = array();
        $array['message'] = "Test Creation was unsuccesful";
        $array['status'] = 0;
        echo json_encode($array);
    }
}
else{
    $array = array();
    $array['message'] = "One or more of the fields was not correct";
    $array['status'] = 0;
    echo json_encode($array);
}