<?php
 function  conn(){
    $dbhost = "localhost";
    $dbuser = "root";
    $dbpass = "";
    $db = "aqsa";
    $conn = new mysqli($dbhost, $dbuser, $dbpass,$db) or die("Connect failed: %s\n". $conn -> error);
    return $conn;
     } 
   $detail=$_POST["detail"];//"برغي";//
   $date=$_POST["date"];//"برغي";//
   $payed=$_POST["payed"];//"2";//
   $price_total=$_POST["price_total"];//"3";//
  
     $sql = "INSERT INTO `expenses`( `employee_id`, `details`, `price_paied`, `price`, `date`) VALUES ('1', '$detail','$payed','$price_total','$date')";
     
if(conn()->query($sql)===true){
        
 echo("insertDone");}
 else{
         echo("there is aproblem  in this process");
 }

 

 