<?php
require_once __DIR__ . '/../config/global.php';

class Session {

  private static $self_instance;
  private $mysqli; //reference to the database
  public $sid; //session ID

  public function __construct($dbc){
    $this->mysqli = $dbc;
    
    //Determines if the user has a session id set
    $this->sid = isset($_SESSION['sid']) ? $_SESSION['sid'] : null;
    
    if ($this->sid != null) {
      //Sets the current loggedIn status and validates any session in the browser
      $this->validate($this->sid, time());
    }
    
    
  }

  public function __destruct() {

  }

  public static function getInstance($dbc){
    if(!self::$self_instance){
      self::$self_instance = new Session($dbc);
    }
    return self::$self_instance;
  }
  
  //TODO implement a function to register institutions
  public function registerInstitution($name, $address, $state, $city, $zipCode, $phoneNumber){
    $uid = getUID($this->sid);
    if(getAccountType($uid) == 2){
      $qry = $this->mysqli->prepare("INSERT INTO institution(name,address,state,city,zipCode,phoneNumber) VALUES(?,?,?,?,?,?)");
      $qry->bind_param("ssssii",$name, $address, $state, $city, $zipCode, $phoneNumber);
      $qry->execute();
    }
    else{
      echo "You are not authorized for this requeset";
    }
  }



  public function registerAccount($email, $firstName, $lastName, $password, $isClient, $isAdmin, $institutionID){
    //TODO sanitize inputs; ensure email is an email, ensure password doesn't have weird characters\
    //TODO solve institution picking problem (see TODO 2.2.1.3)
    $salt = mcrypt_create_iv(22, MCRYPT_DEV_URANDOM);
    $options = [
        'cost' => 11,
        'salt' => $salt,
    ];
    $hash = password_hash($password, PASSWORD_BCRYPT, $options);
    $qry = $this->mysqli->prepare("INSERT INTO account(emailAddress,firstName,lastName,hash,salt) VALUES(?,?,?,?,?)");
    $qry->bind_param("sssss",$email,$firstName,$lastName,$hash,$salt);
    $qry->execute();
    //Get the institutionID for the insert into clientAccount
    $incrementID = $qry->insert_id;
    //If the created account is a client account create a client account
    if($isClient == 1){
      if($institutionID == -1){
        //If no specified institutionID from the front end get one from the current users institutionID
        $iID = $this->getInstitutionID();
        if($iID != -1){
          $this->registerClientAccount($incrementID,$iID,$isAdmin);
          $qry->close();
          return 1;
        }
        else{
          $qry->close();
          return 0;
        }
      }
      else{
        //Otherwise just use the one from the frontend
        $this->registerClientAccount($incrementID,$institutionID,$isAdmin);
        $qry->close();
        return 1;
      }
    }
    //Otherwise create a system account
    else{
      $this-registerSystemAccount($incrementID);
      $qry->close();
      return 1;
    }
    $qry->close();
    return 0;
  }

  //Returns the institutionID for this user
  function getInstitutionID(){
    $uid = getUID($this->sid);
    $qry = $this->mysqli->prepare("SELECT institutionID from clientAccount where accountID =  ?");
    $qry->bind_param("i",$uid);
    $qry->execute();
    $result = $qry->get_result();
    $qry->close();
    return isset($result[0]['institutionID']) ? $result[0]['institutionID'] : -1;
  }

  function registerSystemAccount($accountID){
    $qry = $this->mysqli->prepare("INSERT INTO systemAdmin VALUES(?)");
    $qry->bind_param("iii",$accountID);
    $qry->execute();
    $qry->close();
  }


  function registerClientAccount($accountID, $institutionID, $isAdmin){
    //Insert into client account
    $qry = $this->mysqli->prepare("INSERT INTO clientAccount VALUES(?,?,?)");
    $qry->bind_param("iii",$accountID,$institutionID,$isAdmin);
    $qry->execute();
    $qry->close();
  }

  public function getAccountType($uid){
    //Select acountID FROM account
    $qry = $this->mysqli->prepare("SELECT accountID from account where accountID =  ?");
    $qry->bind_param("i",$uid);
    $qry->execute();
    //If it exists
    if($qry->num_rows == 1){
      //Pull the accounts is admin
      $qry = $this->mysqli->prepare("SELECT isAdmin from account where accountID =  ?");
      $qry->bind_param("i",$uid);
      $qry->execute();
      $qry->bind_result($isAdmin);
      $qry->store_result();
      //If that exists
      if($qry->num_rows == 1){
        while($qry->fetch()){
          //If is admin the account is a client admin account
          if($isAdmin == 1){
            $qry->free_result();
            $qry->close();
            return 1;
          }
          //Otherwise its a standard client account
          else if($isAdmin == 0){
            $qry->free_result();
            $qry->close();
            return 0;
          }
        }
      }
      //Otherwise the account is a corstrata account
      else{
        $qry->free_result();
        $qry->close();
        return 2;
      }
    }
    //If no account is found return -1 to specify
    $qry->close();
    return -1;

  }

  public function changePassword($oldPassword, $newPassword){
    if($oldPassword != $newPassword){
      //check old password to see if it is valid
      $uid = getUID($this->sid);
      $qry = $this->mysqli->prepare("SELECT hash, salt FROM account WHERE accountID = ?");
      $qry->bind_param("i",$uid);
      $qry->execute();
      $qry->bind_result($currHash, $currSalt);
      $qry->close();
      $saltedPassword = $currSalt.$oldPassword;
      $checkHash = hash('scrypt',$saltedPassword);
      if($currHash == $checkHash){
        //update new salt and password in account
        $newSalt = random_bytes(32); //new password, new salt
        $saltedPassword = $newSalt.$newPassword;
        $hash = hash('scrypt',$saltedPassword);
        $uid = getUID($this->sid);
        $qry = $this->mysqli->prepare("UPDATE account SET hash = ?, salt = ? WHERE accountID = ?");
        $qry->bind_param("ssi",$hash,$saltedPassword,$uid);
        $qry->execute();
        $qry->close();
        return true;
      }
      else{
        $qry->close();
        return false;
      }
    }
    else {
      $qry->close();
      return false;
    }
  }

  function validate($sid, $currentTime){
    //$sid = htmlentities(mysqli_real_escape_string(this->mysqli),$sid);
    $qry = $this->mysqli->prepare("SELECT timeCreated, accountID FROM sessions WHERE sessionID = ?");
    $qry->bind_param("s",$sid);
    $qry->execute();
    $qry->bind_result($timestamp,$uid);
    $qry->store_result();
    if($qry->num_rows >=1){
      while($qry->fetch()){
        if($currentTime > $timestamp){
          $this->clear($sid);
          return false;
        }
        else{
          return true;
        }
      }
    }
    else{
      if(isset($_SESSION['sid'])){
        $this->clear($sid);
      }
    }
    $qry->close();
  }

  //Logs in with an email and password if successful creates a session
  function login($email, $pass){
    
    //Validate the credentials of the users
    if($this->validateLogin($email, $pass)){
      //Get the userid
      /*
      $userid = $this->getUID($email);
      if($this->handleSID($userid)){
        return 1;
      }
      */
    }
    return 0;
    
  }

  function validateLogin($email, $passwordInput){
    //$email = htmlspecialchars(mysqli_real_escape_string($this->mysqli, $email));

    $qry = $this->mysqli->prepare("SELECT salt, hash FROM account WHERE emailAddress = ?");
    $qry->bind_param("s",$email);
    $qry->execute();
    $qry->bind_result($dbSalt,$dbHash);
    $qry->store_result();

    $qry->fetch();
    $options = [
        'cost' => 11,
        'salt' => $dbsalt,
    ];
    $hash = password_hash($passwordInput, PASSWORD_BCRYPT, $options);
    $qry->close();
    if($hash == $dbHash){
      return true; //hashes match, passwords match
    }
    else {
      return false;
    }
  }

  //Prevents more than one session per user
  public function handleSID($userID){
    if($this->sessionExists($userID)){
      if (!$this->clearByUID($userID)) {
        //Couldnt clear the session, return a json element containing the error
        return json_encode("Couldn't clear SID when creating new session.");
      }
    }
    //Creates a session
    if ($this->buildSID($userID)) {
      return true;
    }
    return false;
  }

  //Returns if a session currently exists for a given user
  function sessionExists($userID){
    $qry = $this->mysqli->prepare("SELECT * from sessions where accountID = ?");
    $qry->bind_param("i", $userID);
    $qry->execute();

    $result = $qry->get_result();
    $qry->close();
    if(count($result) > 0 ){
      return true;
    }
    else{
      return false;
    }
  }

  //Clears the sessions any sessions where the account id is in use
  function clearByUID($userID){
    if ($this->mysqli->query("DELETE FROM sessions WHERE accountID='{$userID}'")) {
      return true;
    }
    else {
      return $this->mysqli->error;
    }
    unset($_SESSION['sid']);
  }

  //Clear the database of
  function clear($sid) {
    $sid = mysqli_real_escape_string($this->mysqli, $sid);
    $this->mysqli->query("DELETE FROM sessions WHERE sid='{$sid}'");
    unset($_SESSION['sid']);
  }

  //Builds a session ID for the current session
  function buildSID($userid) {
    $sid = $this->generateRandID(16);
    $time = time();
    $timestamp = $time + 60 * SESSION_LENGTH;

    $qry = $this->mysqli->prepare("INSERT INTO sessions (sessionID, accountID, timeCreated) VALUES (?, ?, ?)");
    $qry->bind_param("iii",$sid,$userid,$timestamp);

    if ($qry->execute()) {
      $_SESSION['sid'] = $sid;
      $qry->close();
      return 1;
    }
    $qry->close();
    return 0;
  }

  //Takes either an email address or a session id and returns a user id
  function getUID($input){
    if(filter_var($input, FILTER_VALIDATE_EMAIL) == true){
      $qry = $this->mysqli->prepare("SELECT accountID from accounts where emailAddress = ?");
      $qry->bind_param($input);
      $qry->execute();

      $result = $qry->get_result();
    }
    else{
      $qry = $this->mysqli->prepare("SELECT accountID from sessions where sessionID = ?");
      $qry->bind_param($input);
      $qry->execute();

      $result = $qry->get_result();
    }
    $qry->close();
    return isset($result[0]['userid']) ? $result[0]['userid'] : -1;
  }

  //Verifies if the session is logged in
  function isLoggedIn() {
    return isset($_SESSION['sid']);
  }

  //Generates a random ID with a specified length
  function generateRandID($length) {
    return md5($this->generateRandStr($length));
  }

  //Generates a random string with a length
  function generateRandStr($length) {
    $randstr = "";
    for ($i = 0; $i < $length; $i++) {
      $randnum = mt_rand(0, 61);
      if ($randnum < 10) {
        $randstr .= chr($randnum + 48);
      } elseif ($randnum < 36) {
        $randstr .= chr($randnum + 55);
      } else {
        $randstr .= chr($randnum + 61);
      }
    }
    return $randstr;
  }

  /*
  TEST FUNCTIONS
   */
  function createTest($patientID){
    $qry = $this->mysqli->prepare("INSERT INTO test (patientID, accountID, dateTaken) VALUES (?, ?, ?)");
    $datetime = date_create()->format('Y-m-d H:i:s');
    $uid = getUID($this->sid);
    $qry->bind_param("iis",$patientID,$uid,$datetime);
    if($qry->execute()){
      $qry->close();
      return $qry->insert_id;
    }
    $qry->close();
    return -1;
  }

  public function createWagnerTest($patientID, $grade){
    $testID = $this->createTest($patientID);
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
  public function createSemmesTest($patientID, $p1L, $p2L, $p3L, $p4L, $p5L, $p6L, $p7L, $p8L, $p9L, $p10L, $p1R, $p2R, $p3R, $p4R, $p5R, $p6R, $p7R, $p8R, $p9R, $p10R){
    $testId = $this->createTest($patientID);
    $qry = $this->mysqli->prepare("INSERT INTO semmesTest (testID, p1L, p2L, p3L, p4L, p5L, p6L, p7L, p8L, p9L, p10L, p1R, p2R, p3R, p4R, p5R, p6R, p7R, p8R, p9R, p10R) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)");
    $qry->bind_param("iiiiiiiiiiiiiiiiiiiii", $testID, $p1L, $p2L, $p3L, $p4L, $p5L, $p6L, $p7L, $p8L, $p9L, $p10L, $p1R, $p2R, $p3R, $p4R, $p5R, $p6R, $p7R, $p8R, $p9R, $p10R);
    if($qry->exectute()){
      $qry->close();
      return 1;
    }
    else{
      $qry->close();
      return 0;
    }
  }

  public function createMiniNutritionalTest($patientID, $questionA, $questionB, $questionC, $questionD, $questionE, $questionF1, $questionF2){
    $testID = $this->createTest($patientID);
    if($testID == -1){
      echo "Test Failed to insert into the database";
      return 0;
    }
    else{
      if($questionF2 == -1){
        $qry = $this->mysqli->prepare("INSERT INTO test (testID, a, b, c, d, e, f1, f2, score) VALUES (?, ?, ?, ?, ?, ?, ?, null, ?)");
        $grade = $questionA + $questionB + $questionC + $questionD + $questionE + $questionF1;
        $qry->bind_param("iiiiiiiii",$testID, $questionA, $questionB, $questionC, $questionD, $questionE, $questionF1, $grade);
        $qry->execute();
        $qry->close();
      }
      else{
        $qry = $this->mysqli->prepare("INSERT INTO test (testID, a, b, c, d, e, f1, f2, score) VALUES (?, ?, ?, ?, ?, ?, null, ?, ?)");
        $grade = $questionA + $questionB + $questionC + $questionD + $questionE + $questionF2;
        $qry->bind_param("iiiiiiiii",$testID, $questionA, $questionB, $questionC, $questionD, $questionE, $questionF2, $grade);
        $qry->execute();
        $qry->close();
      }
      return 1;
    }
  }
  //TODO implement a function that takes all of the data from a pressure wound test and inserts it into the database
  //TODO Call create test to get a test id and insert it into the test table
  public function createPressureWoundTest($patientID, $size, $depth, $edges, $undermining, $necType, $necAmount, $exudateType, $exudateAmount, $skinColorAround, $peripheralEdema, $peripheralInduration, $granTissue, $epith){
    //MAY NEED TO ADD PARAMS FOR SUSSMAN
    //Note: just shoved all the stuff into the parameters individually. There's got to be a better way... maybe an array?
    //TODO make 'clamps' to ensure inputs are within numerical bounds
    $testID = $this->createTest($patientID); //get testID

    //Need to create clamps for inputs before calculating scores (or check on front end before sending inputs here)

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
  public function getRecentTests($patientID){
    $datetime = date('Y-m-d H:i:s', strtotime('-2 months'));
    $qry = $this->mysqli->prepare("SELECT testID, accountID, dateTaken FROM test WHERE patientID = ? AND dateTaken > ?");
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
    return json_encode($array);
  }
  function getEmployeeName($accountID){
    $qry = $this->mysqli->prepare("SELECT firstName, lastName FROM account WHERE accountID = ?");
    $qry->bind_param("i",$accountID);
    $qry->execute();
    $qry->bind_result($firstName, $lastName);
    $qry->fetch();
    return $firstName . " " . $lastName;
  }
  function getTestType($testID){
    $qry = $this->mysqli->prepare("SELECT * FROM pressureWoundTest WHERE testID = ?");
    $qry->bind_param("i",$testID);
    $qry->execute();
    if($qry->num_rows > 0){
      return "Pressure Wound";
    }
    else{
      $qry = $this->mysqli->prepare("SELECT * FROM semmesTest WHERE testID = ?");
      $qry->bind_param("i",$testID);
      $qry->execute();
      if($qry->num_rows > 0){
        return "Semmes Weinstein Monophiliment";
      }
      else{
        $qry = $this->mysqli->prepare("SELECT * FROM wagnerTest WHERE testID = ?");
        $qry->bind_param("i",$testID);
        $qry->execute();
        if($qry->num_rows > 0){
          return "Wagner";
        }
        else{
          $qry = $this->mysqli->prepare("SELECT * FROM miniNutritionalTest WHERE testID = ?");
          $qry->bind_param("i",$testID);
          $qry->execute();
          if($qry->num_rows > 0){
            return "Mini-Nutritional";
          }
          else{
            return "Test Type not found";
          }
        }
      }
    }
  }
  //Function that searches through the patient table given a search input
  public function patientSearch($searchInput){
    //TODO sanitize search input to make sure no sql injections
    $qry = $this->mysqli->prepare("SELECT patientID, firstName, lastName FROM patient WHERE lastName = %?%");
    $qry->bind_param("s",$searchInput);
    $qry->execute();
    $qry->bind_result($patientID,$firstName,$lastName);
    $array = array();
    $i = 0;
    while($qry->fetch()){
      $array[$i]['patientID'] = $patientID;
      $array[$i]['name'] = $firstName . " " . $lastName;
      $i++;
    }
    return json_encode($array);
  }
  public function getPatientData($patientID){

  }


}


 ?>
