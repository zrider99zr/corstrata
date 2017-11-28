<?php
require('createTest.php');
//TODO implement a function that takes all of the data from a pressure wound test and inserts it into the database
//TODO Call create test to get a test id and insert it into the test table
function createPressureWoundTest($testID, $size, $depth, $edges, $undermining, $necType, $necAmount, $exudateType, $exudateAmount, $skinColorAround, $peripheralEdema, $peripheralInduration, $granTissue, $epith){
    //MAY NEED TO ADD PARAMS FOR SUSSMAN
    //Note: just shoved all the stuff into the parameters individually. There's got to be a better way... maybe an array?
    //TODO make 'clamps' to ensure inputs are within numerical bounds

    //Need to create clamps for inputs before calculating scores (or check on front end before sending inputs here)

    //Functions for the score

    //TODO implement a function that takes the information from a pressure wound test and spits out a push score
  function getPUSHScore($size, $exudate, $necTissue, $granTissue, $epith){ //Note: input Bates-Jensen values here: approximation to PUSH score is done in this function
    //Sub-Scores: Size, Exudate Amount, Tissue Type

    //Size
    if($size > 0){
      $sizeSS = 1;
      if($size >= 0.3){
        $sizeSS = 2;
        if($size >= 0.7){
          $sizeSS = 3;
          if($size >= 1.1){
            $sizeSS = 4;
            if($size >= 2.1){
              $sizeSS = 5;
              if($size >= 3.1){
                $sizeSS = 6;
                if($size >= 4.1){
                  $sizeSS = 7;
                  if($size >= 8.1){
                    $sizeSS = 8;
                    if($size >= 12.1){
                      $sizeSS = 9;
                      if($size >= 24){
                        $sizeSS = 10;
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
    else{
      $sizeSS = 0;
    }

    //Exudate Amount
    if($exudate > 1){
      $exudateSS = 1;
      if($exudate > 3){
        $exudateSS = 2;
        if($exudate > 4){
          $exudateSS = 3;
        }
      }
    }
    else{
      $exudateSS = 0;
    }
    //Tissue Type
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
    //Add sub-scores
    $totalScore = $sizeSS + $exudateSS + $tissueSS;
    return $totalScore;
  }
  //TODO implement a function that takes the information from a pressure wound test and spits out a bates jensen score
  function getBatesJensenScore($size, $depth, $edges, $undermining, $necType, $necAmount, $exudateType, $exudateAmount, $skinColorAround, $peripheralEdema, $peripheralInduration, $granTissue, $epith){
    //Sub-Scores: Size, Depth, Edges, Undermining, Necrotic Tissue Type, Necrotic Tissue Amount, Exudate Type, Exudate Amount,
                //Skin Color Surrounding Wound, Peripheral Tissue Edema, Peripheral Tissue Induration, Granulation Tissue, Epithelialization

    //Size
    if($size > 0){
      $sizeSS = 1;
      if($size >= 4){
        $sizeSS = 2;
        if($size >= 16.1){
          $sizeSS = 3;
          if($size >= 36.1){
            $sizeSS = 4;
            if($size >= 80){
              $sizeSS = 5;
            }
          }
        }
      }
    }
    else{
      $sizeSS = 0;
    }
    //I don't think any of the other sub-scores require extra processing

    $totalScore = $sizeSS + $depth + $edges + $undermining + $necType + $necAmount + $exudateType + $exudateAmount + $skinColorAround + $peripheralEdema + $peripheralInduration + $granTissue + $epith;
    return $totalScore;
  }
  //TODO implement a function that takes the information from a pressure wound test and spits out a sussman score
  function getSussmanScore($exudateType, $undermining, $skinColorAround, $necType, $edges, $granTissue, $epith){ //TODO discern other parameters
    //Not good for healing: Hemorrhage, Maceration, Undermining, Erythema, Necrosis
    //Good for healing: Adherence at wound edge, Granulation Tissue, Appearance of contraction, Sustained contraction, Epithelialization

    //Hemorrhage
    if($exudateType == 2){ //Might need specific question
      $hemorrhageSS = 1;
    }
    else{
      $hemorrhageSS = 0;
    }
    //Maceration
    //Probably need specific question for this
    $macerationSS = 1;
    //Undermining
    if($undermining >= 2){
      $underminingSS = 1;
    }
    else{
      $underminingSS = 0;
    }
    //Erythema
    if($skinColorAround == 2){
      $erythemaSS = 1;
    }
    else{
      $erythemaSS = 0;
    }
    //Necrosis
    if($necType >= 2){
      $necroticSS = 1;
    }
    else{
      $necroticSS = 0;
    }
    //Adherence at wound edge
    if($edges <= 2){
      $adherenceSS = 1;
    }
    else{
      $adherenceSS = 0;
    }
    //Granulation tissue
    if($granTissue <= 3){
      $granulationSS = 1;
    }
    else{
      $granulationSS = 0;
    }
    //Appearance of contraction
    //Asking Joe about this
    $contrAppearanceSS = 1;
    //Sustained contraction
    //Also asking about this
    $contrSustainedSS = 1;
    //Epithelialization
    if($epith <= 4){
      $epithSS = 1;
    }
    else{
      $epithSS = 0;
    }

    return array($hemorrhageSS, $macerationSS, $underminingSS, $erythemaSS, $necroticSS, $adherenceSS, $granulationSS, $contrAppearanceSS, $contrSustainedSS, $epithSS);
  }

    //calculate PUSH/Bates-Jensen/Sussman Scores
    $PUSHScore = getPUSHScore($size, $exudate, $necType, $granTissue, $epith);
    $BatesJensenScore = getBatesJensenScore($size, $depth, $edges, $undermining, $necType, $necAmount, $exudateType, $exudateAmount, $skinColorAround, $peripheralEdema, $peripheralInduration, $granTissue, $epith);
    //TODO work with front end to work out other params for sussman. see 'getSussmanScore()' for areas of concern
    $SussmanScore = getSussmanScore($exudateType, $undermining, $skinColorAround, $necType, $edges, $granTissue, $epith); //will return an array of 10 1's and 0's

    //dump test results and raw data into table
    //order of table keys for reference: testID, PUSHScore, BatesJensenScore, SussmanScore, size, depth, edges, undermining, necType, necAmount, exudateType, exudateAmount, skinColorAround, peripheralEdema, peripheralInduration, granTissue, epith
    $qry = $this->$mysqli->prepare("INSERT INTO pressureWoundTest VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)");
    $qry->bind_param("iiibdiiiiiiiiiiii",$testID, $PUSHScore, $BatesJensenScore, $SussmanScore, $size, $depth, $edges, $undermining, $necType, $necAmount, $exudateType, $exudateAmount, $skinColorAround, $peripheralEdema, $peripheralInduration, $granTissue, $epith);
    //hey so sussman is an array of 10 0's and 1's: change this in the DB so it either accepts this data type or has its own table.
    $qry->execute();
    $qry->close();

    //and that's it I think? maybe return something? array of 3 scores?
    return 1;
}
$testID = createTest($patientID); //get testID
