<?php
 function  conn(){
    $dbhost = "localhost";
    $dbuser = "root";
    $dbpass = "";
    $db = "aqsa";
    $conn = new mysqli($dbhost, $dbuser, $dbpass,$db) or die("Connect failed: %s\n". $conn -> error);
    return $conn;
     } 
   $quantity=$_POST["quantity"];//"برغي";//
   $date=$_POST["date"];//"برغي";//
   $id=$_POST["id"];//"2";//
  
     $sql = "INSERT INTO `rapish`(`date`, `quantity`, `good_id`) VALUES ( '$date','$quantity','$id')";
     
if(conn()->query($sql)===true){
        
 echo("insertDone");}
 else{
         echo("there is aproblem  in this process");
 }

 

 