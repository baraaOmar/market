<?php
 function  conn(){
    $dbhost = "localhost";
    $dbuser = "root";
    $dbpass = "";
    $db = "aqsa";
    $conn = new mysqli($dbhost, $dbuser, $dbpass,$db) or die("Connect failed: %s\n". $conn -> error);
    return $conn;
     } 
   $good_id=$_POST["good_id"];//"برغي";//
   $date=$_POST["date"];//"برغي";//
   $id=$_POST["order_id"];//"2";//
  $quantity=$_POST["quantity"];
  $payment=$_POST["payment"];
     $sql = "INSERT INTO `back_selling`(`order_id`, `date`, `quantity`, `good_id`,payment) VALUES ('$id','$date','$quantity','$good_id','$payment')";
     
if(conn()->query($sql)===true){
        
 echo("insertDone");}
 else{
         echo("there is aproblem  in this process");
 }

 

 