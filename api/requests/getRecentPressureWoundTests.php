<?
function getRecentPressureWoundTests($patientID, $db){
    //Local function to get pressure wound score from a TEST ID
    function getPressureScore($testID, $db){
        $qry = $db->prepare("SELECT pushScore FROM pressureWoundTest WHERE testID = ?");
        $qry->bind_param("i",$testID);
        $qry->execute();
        $qry->bind_result($pushScore);
        $qry->fetch();
        $qry->close();
        return isset($pushScore) ? $pushScore : -1;
    }
    //Create a time that was this time - 2 months
    $datetime = date('Y-m-d H:i:s', strtotime('-2 months'));
    //Select the information where the patientID is given and the date is greater than 2 months from now
    $qry = $db->prepare("SELECT testID, dateTaken FROM test WHERE patientID = ? AND dateTaken > ?");
    $qry->bind_param("is",$patientID,$datetime);
    $qry->execute();
    $qry->bind_result($testID, $accountID, $dateTaken);
    $array = array();
    $i = 0;
    //Build an array using $qry->fetch to export to the frontend
    while($qry->fetch()){
        $score = getPressureScore($testID,$db);
        if($score != -1){
          $array[$i]['dateTaken'] = $dateTaken;
          $array[$i]['score'] = $score;
          $i++;
        }
        //Move on
        else{

        }
    }
    $qry->close();
    return $array;
}
//Get Patient ID from POST
$patientID = $decoded['patientID'];
if(isset($patientID)){
  $testData = getRecentPressureWoundTests($patientID,$db);
  if($search != -1){
    $array = array();
    $array['message'] = "Tests were retrieved";
    $array['status'] = 1;
    $array['testData'] = $testData;
    echo json_encode($array);
  }
  else{
    $array = array();
    $array['message'] = "Tests were not retrieved";
    $array['status'] = 0;
    echo json_encode($array);
  }
}