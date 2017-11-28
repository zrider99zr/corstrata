<?php
//Require the function for creating an entry into the test table
require("createTest.php");
//Function that inserts a MiniNutritional test into the database; 
function createWagnerTest($testID, $grade){
    if($testID == -1){
      echo "Test Failed to insert into the database";
      return 0;
    }
    else{
      $qry = $this->mysqli->prepare("INSERT INTO test (testID, grade) VALUES (?, ?)");
      $qry->bind_param("ii",$testID, $grade);
      $qry->execute();
      $qry->close();
      return 1;
    }
}

//Initialize all the variables for the function
//Create a Test entry
$patientID = $decoded['patientID'];
$testID = createTest($patientID);
//Get grade from POST
$grade = $decoded['grade'];

//Check to make sure that they are all set correctly 
if($testID != -1 && isset($grade)){
    //If create test was successful
    if(createWagnerTest($testID,$grade) == 1){
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