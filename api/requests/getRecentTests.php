<?php
function getRecentTests($patientID, $db){
    //Returns an employee name given and account id
    function getEmployeeName($accountID, $db){
        $qry = $db->prepare("SELECT firstName, lastName FROM account WHERE accountID = ?");
        $qry->bind_param("i",$accountID);
        $qry->execute();
        $qry->bind_result($firstName, $lastName);
        $qry->fetch();
        return $firstName . " " . $lastName;
    }
    //Return the test type given a test ID
    function getTestType($testID, $db){
        $qry = $db->prepare("SELECT * FROM pressureWoundTest WHERE testID = ?");
        $qry->bind_param("i",$testID);
        $qry->execute();
        if($qry->num_rows > 0){
            $qry->close();
            return "Pressure Wound";
        }
        else{
            $qry = $db->prepare("SELECT * FROM semmesTest WHERE testID = ?");
            $qry->bind_param("i",$testID);
            $qry->execute();
            if($qry->num_rows > 0){
                $qry->close();
                return "Semmes Weinstein Monophiliment";
            }
            else{
                $qry = $db->prepare("SELECT * FROM wagnerTest WHERE testID = ?");
                $qry->bind_param("i",$testID);
                $qry->execute();
                if($qry->num_rows > 0){
                    $qry->close();
                    return "Wagner";
                }
                else{
                    $qry = $db->prepare("SELECT * FROM miniNutritionalTest WHERE testID = ?");
                    $qry->bind_param("i",$testID);
                    $qry->execute();
                    if($qry->num_rows > 0){
                        $qry->close();
                        return "Mini-Nutritional";
                    }
                    else{
                        $qry->close();
                        return "Test Type not found";
                    }
                }
            }
        }
    }

    $datetime = date('Y-m-d H:i:s', strtotime('-2 months'));
    $qry = $db->prepare("SELECT testID, accountID, dateTaken FROM test WHERE patientID = ? AND dateTaken > ?");
    $qry->bind_param("is",$patientID,$datetime);
    $qry->execute();
    $qry->bind_result($testID, $accountID, $dateTaken);
    $array = array();
    $i = 0;
    while($qry->fetch()){
        $array[$i]['dateTaken'] = $dateTaken;
        $array[$i]['employeeName'] = getEmployeeName($accountID);
        $array[$i]['testType'] = getTestType($testID);
        $i++;
    }
    return $array;
}

$patientID = $decoded['patientID'];
if(isset($patientID)){
  $recetnTests = getRecentTests($patientID,$db);
  if($search != -1){
    $array = array();
    $array['message'] = "Search was successful";
    $array['status'] = 1;
    $array['recentTests'] = $recetnTests;
    echo json_encode($array);
  }
  else{
    $array = array();
    $array['message'] = "Search was unsuccesful";
    $array['status'] = 0;
    echo json_encode($array);
  }
}

