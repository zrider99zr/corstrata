<?
function getRecentPressureWoundTests($patientID, $db){
    function getPressureScore($testID, $db){
        $qry = $db->prepare("SELECT pushScore FROM pressureWoundTest WHERE testID = ?");
        $qry->bind_param("i",$testID);
        $qry->execute();
        $qry->bind_result($pushScore);
        $qry->fetch();
        return isset($pushScore) ? $pushScore : -1;
    }
    $datetime = date('Y-m-d H:i:s', strtotime('-2 months'));
    $qry = $db->prepare("SELECT testID, dateTaken FROM test WHERE patientID = ? AND dateTaken > ?");
    $qry->bind_param("is",$patientID,$datetime);
    $qry->execute();
    $qry->bind_result($testID, $accountID, $dateTaken);
    $array = array();
    $i = 0;
    while($qry->fetch()){
        $array[$i]['dateTaken'] = $dateTaken;
        $array[$i]['score'] = getPressureScore($testID, $db);
        $i++;
    }
    return $array;
}

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