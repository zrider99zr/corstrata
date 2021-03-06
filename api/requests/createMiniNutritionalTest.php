<?php

//Function that inserts a MiniNutritional test into the database; 

function createMiniNutritionalTest($testID, $questionA, $questionB, $questionC, $questionD, $questionE, $questionF1, $questionF2, $db){
    if($questionF2 == -1){
        $qry = $db->prepare("INSERT INTO miniNutritionalTest (testID, a, b, c, d, e, f1, f2, score) VALUES (?, ?, ?, ?, ?, ?, ?, null, ?)");
        $grade = $questionA + $questionB + $questionC + $questionD + $questionE + $questionF1;
        $qry->bind_param("iiiiiiii",$testID, $questionA, $questionB, $questionC, $questionD, $questionE, $questionF1, $grade);
        $qry->execute();
        $qry->close();
        return $grade;
    }
    else{
        $qry = $db->prepare("INSERT INTO miniNutritionalTest (testID, a, b, c, d, e, f1, f2, score) VALUES (?, ?, ?, ?, ?, ?, null, ?, ?)");
        $grade = $questionA + $questionB + $questionC + $questionD + $questionE + $questionF2;
        $qry->bind_param("iiiiiiii",$testID, $questionA, $questionB, $questionC, $questionD, $questionE, $questionF2, $grade);
        $qry->execute();
        $qry->close();
        return $grade;
    }
    return 1;
}


//Initialize all the variables for the function
//Create a Test entry
$patientID = $decoded['patientID'];

//Create the test Entry
require_once("createTest.php");


$A = $decoded['A'];
$B = $decoded['B'];
$C = $decoded['C'];
$D = $decoded['D'];
$E = $decoded['E'];
//F1 and F2 changes based off of if there is BMI available. Put -1 for whichever question is available
$F1 = $decoded['F1'];
$F2 = $decoded['F2'];

//Check to make sure that they are all set correctly 
if($testID != -1 && isset($A,$B,$C,$D,$E,$F1,$F2)){
    //If create test was successful
    $mnaTest = createMiniNutritionalTest($testID,$A,$B,$C,$D,$E,$F1,$F2,$db);
    if($mnaTest !=0 ){
        $array = array();
        $array['message'] = "Test Creation was sucessful";
        $array['status'] = 1;
        $array['testID'] = $testID;
        $array['grade'] = $mnaTest;
        echo json_encode($array);
    }
    else{
        $array = array();
        $array['message'] = "Test Creation was unsuccesful";
        $array['status'] = 0;
        $array['MNA'] = $mnaTest;
        echo json_encode($array);
    }
}
else{
    $array = array();
    $array['message'] = "One or more of the fields was not correct";
    $array['status'] = 0;
    echo json_encode($array);
}