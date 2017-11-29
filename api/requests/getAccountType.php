<?php

function getAccountType($uid){
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