<?php
 function  conn(){
    $dbhost = "localhost";
    $dbuser = "root";
    $dbpass = "";
    $db = "aqsa";
    $conn = new mysqli($dbhost, $dbuser, $dbpass,$db) or die("Connect failed: %s\n". $conn -> error);
    return $conn;
     } 
   $name=$_POST["name"];//"برغي";//
   $phone=$_POST["phone"];//"برغي";//
   $address=$_POST["address"];//"2";//
  
     $sql = "INSERT INTO `provider`(`name`, `phone`, `address`) VALUES ('$name','$phone','$address')";
     
if(conn()->query($sql)===true){
        
 echo("insertDone");}
 else{
         echo("there is aproblem  in this process");
 }

 

 