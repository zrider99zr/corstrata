<?php
require_once __DIR__ . '/../config/global.php';

//Class to manage the users session
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
  
  public function validate($sid, $currentTime){
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
          $qry->close();
          return false;
        }
        else{
          $qry->close();
          return true;
        }
      }
    }
    else{
      if(isset($_SESSION['sid'])){
        $this->clear($sid);
      }
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
    return $this->buildSID($userID);
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
    $qry->bind_param("sii",$sid,$userid,$timestamp);

    if ($qry->execute()) {
      $_SESSION['sid'] = $sid;
      $qry->close();
      return true;
    }
    else{
      $error = $qry->error;
      $qry->close();
      return $error;
    }
  }
  public function getUserID(){
    return $_SESSION['uid'];
  }
  //Takes either an email address or a session id and returns a user id
  function getUID($sid){
    if($qry = $this->mysqli->prepare("SELECT accountID from sessions where sessionID = ?")){
      $qry->bind_param("s",$sid);
      $qry->execute();
      $result = $qry->get_result();
      $qry->close();
      return isset($result[0]['accountID']) ? $result[0]['accountID'] : -1;
    }
    else{
      return $this->mysqli->error;
    }
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
  public function getSID(){
    return $this->sid;
  }
}
 ?>
