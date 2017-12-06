<?php

//Function that inserts a pressure wound test into the database
function insertPressureWoundTest($testID, $size, $db){
  $qry = $db->prepare("INSERT INTO pressureWoundTest($testID, $size) VALUES (?,?)");
  $qry->bind_param("id", $testID, $size);
  $qry->execute();
  $qry->close();
  return 1;
}
//Inserts a PUSH
function insertPUSH($testID, $size, $exudateAmount, $tissueType, $db){
  //Sub-Scores: Size, Exudate Amount, Tissue Type
  $score = $size + $exudateAmount + $tissueType;
  $qry = $db->prepare("INSERT INTO PUSHTest(testID, score, size, exudateAmount, tissueType) VALUES(?,?,?,?,?)");
  $qry->bind_param("iiiii", $testID, $score, $size, $exudateAmount, $tissueType);
  $qry->execute();
  $qry->close();
  return 1;
}
function insertBatesJensen($testID, $size, $depth, $edges, $undermining, $necroticTissueType, $necroticTissueAmount, $exudateType, $exudateAmount, $skinColor,
  $peripheralEdema, $peripheralInduration, $granTissue, $epith, $db){
    $score = $size + $depth + $edges + $undermining + $necroticTissueType + $necroticTissueAmount + $exudateType + $exudateAmount + $skinColor + $peripheralEdema + $peripheralInduration + $granTissue + $epith;
    $qry = $db->prepare("INSERT INTO batesJensenTest(
      testID,
      totalScore,
      size,
      depth,
      edges,
      undermining,
      necroticTissueType,
      necroticTissueAmount,
      exudateType,
      exudateAmount,
      skinColor,
      peripheralTissueEdema,
      peripheralTissueInduration,
      granulationTissue,
      epithelialization
    ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)");
    $qry->bind_param("iiiiiiiiiiiiiii", $testID, $score, $size, $depth, $edges, $undermining, $necroticTissueType, $necroticTissueAmount, $exudateType,
      $exudateAmount, $skinColor, $peripheralEdema, $peripheralInduration, $granTissue, $epith);
    $qry->execute();
    $qry->close();
    return 1;
}
//Function that inserts a sussman test given criteria of attributes
function insertSussman($testID, $hemorrhage, $maceration, $undermining, $necType, $edges, $granTissue, $appContract, $susContract, $epith, $db){
    //Not good for healing: Hemorrhage, Maceration, Undermining, Erythema, Necrosis
    //Good for healing: Adherence at wound edge, Granulation Tissue, Appearance of contraction, Sustained contraction, Epithelialization

    //Questions to be sent by the frontend
    //Hemorrhage
    //To be asked on the web form: Is there external or internal hemorrhage from the wound?

    //Maceration
    //To be asked on the web form: Is there maceration present on or surrounding the wound?

    //Appearance of contraction
    //To be asked on the web form: Do the edges of the wound appear to be contracting?

    //Sustained contraction
    //To be asked on the web form: Has there been sustained contraction of the wound edges?

    //Undermining
    if($undermining >= 2){$underminingSS = 1;}
    else{$underminingSS = 0;}

    //Erythema
    if($skinColorAround == 2){$erythemaSS = 1;}
    else{$erythemaSS = 0;}

    //Necrosis
    if($necType >= 4){$necroticSS = 1;}
    else{$necroticSS = 0;}

    //Adherence at wound edge
    if($edges <= 2){$adherenceSS = 1;}
    else{$adherenceSS = 0;}

    //Granulation tissue
    if($granTissue <= 3){$granulationSS = 1;}
    else{$granulationSS = 0;}

    //Epithelialization
    if($epith <= 4){$epithSS = 1;}
    else{$epithSS = 0;}

    $qry = $db->prepare("INSERT INTO sussmanTest VALUES (
      testID,
      hemorrhage,
      maceration,
      undermining,
      erythema,
      necrosis,
      adherence,
      granulation,
      appearanceOfContraction,
      sustainedContraction,
      epithelialization
      )
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?");
    $qry->bind_param("iiiiiiiiii", $testID, $hemorrhage, $maceration, $underminingSS, $erythemaSS, $necroticSS, $adherenceSS, $granulationSS, $appContract, $susContract, $epith);
    $qry->execute();
    $qry->close();
    return 1;
}
//Function to calculate a Bates-Jensen size based off of a given double
function calculateBatesJensenSize($size){
  if($size = 0){
    return 0;
  }
  else if($size < 4){
    return 1;
  }
  else if($size <= 16){
    return 2;
  }
  else if($size <= 36){
    return 3;
  }
  else if($size <= 80){
    return 4;
  }
  else{
    return 5;
  }
}
//Function to calculate a push size based off of a given double
function calculatePUSHSize($size){
  if($size == 0){
    return 0;
  }
  else if($size < .3){
    return 1;
  }
  else if($size <= .6){
    return 2;
  }
  else if($size <= 1){
    return 3;
  }
  else if($size <= 2){
    return 4;
  }
  else if($size <= 3){
    return 5;
  }
  else if($size <= 4){
    return 6;
  }
  else if($size <= 8){
    return 7;
  }
  else if($size <= 12){
    return 8;
  }
  else if($size <= 24){
    return 9;
  }
  else{
    return 10;
  }
}
//Function to calculate the push exudate amount given a bates jensen score
function calculatePUSHExudate($exudate){
  if($exudate < 2){
    return 0;
  }
  else if($exudate < 3){
    return 1;
  }
  else if($exudate < 4){
    return 2;
  }
  else{
    return 3;
  }
}
//Function to calculate a push tissue score given a bates jensen input
function calculatePUSHTissueType($epith, $granTissue, $necTissue){
  //Tissue Type
  $tissueSS = 0;
  if($epith == 1){
    $tissueSS = 0;
  }
  else if($epith > 1 && $granTissue == 1){
    $tissueSS = 1;
  }
  else if($granTissue > 1){
    $tissueSS = 2;
  }
  if($necTissue == 2 || $necTissue == 3){
    $tissueSS = 3;
  }
  else if($necTissue == 4 || $necTissue == 5){
    $tissueSS = 4;
  }
  return $tissueSS;
}

$patientID = $decoded['patientID'];
require("createTest.php");

$size = $decoded['size'];
//Sussman booleans from the frontend
$hemorrhage = $decoded['hemorrhage'];
$maceration = $decoded['maceration'];
$appContract = $decoded['appContract'];
$susContract = $decoded['susContract'];
//Inputs required for bates jensen test
$depth = $decoded['depth'];
$edges = $decoded['edges'];
$undermining = $decoded['undermining'];
$necroticTissueType = $decoded['necroticTissueType'];
$necroticTissueAmount = $decoded['necroticTissueAmount'];
$exudateType = $decoded['exudateType'];
$exudateAmount = $decoded['exudateAmount'];
$skinColor = $decoded['skinColor'];
$peripheralEdema = $decoded['peripheralEdema'];
$peripheralInduration = $decoded['peripheralInduration'];
$granTissue = $decoded['granTissue'];
$epith = $decoded['epith'];

//Check that all the required variables are set
if(isset($size,$hemorrhage,$maceration,$appContract,$susContract,$depth,$edges,$undermining,$necroticTissueType,$necroticTissueAmount,
  $exudateType,$exudateAmount,$skinColor,$peripheralEdema,$peripheralInduration,$granTissue,$epith) && $testID != -1){
    if(insertPressureWoundTest($testID, $size, $db) == 1){
      $push = insertPUSH($testID, calculatePUSHSize($size), calculatePUSHExudate($exudateAmount), calculatePUSHTissueType($epith,$granTissue,$necroticTissueAmount), $db);
      $bates = insertBatesJensen($testID, calculateBatesJensenSize($size), $depth, $edges, $undermining, $necroticTissueType, $necroticTissueAmount,
        $exudateType, $exudateAmount, $skinColor, $peripheralEdema, $peripheralInduration,$granTissue,$epith, $db);
      $sus = insertSussman($testID, $hemorrhage, $maceration, $undermining, $necroticTissueType, $edges, $granTissue, $appContract, $susContract, $epith, $db);
      if($push == 1 && $bates == 1 && $sus == 1){
        $array = array();
        $array['message'] = "Pressure wound created successfully";
        $array['status'] = 1;
        echo json_encode($array);
      }
      else{
        $array = array();
        $array['message'] = "Pressure wound creation failed";
        $array['status'] = 0;
        echo json_encode($array);
      }
    }
    else{
      $array = array();
      $array['message'] = "Pressure wound creation failed";
      $array['status'] = 0;
      echo json_encode($array);
    }
}
else{
  $array = array();
  $array['message'] = "Not all values were sent correctly";
  $array['status'] = 0;
  echo json_encode($array);
}
