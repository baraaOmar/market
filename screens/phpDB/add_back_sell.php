<?php
 function  conn(){
    $dbhost = "localhost";
    $dbuser = "root";
    $dbpass = "";
    $db = "aqsa";
    $conn = new mysqli($dbhost, $dbuser, $dbpass,$db) or die("Connect failed: %s\n". $conn -> error);
    return $conn;
     } 
  
   $date=$_POST["date"];//"برغي";//
   $id=$_POST["sell_id"];//"2";//
  $quantity=$_POST["quantity"];
     $sql = "INSERT INTO `back_selling`(`selling_id`, `date`, `quantity`) VALUES ('$id','$date','$quantity')";
     
if(conn()->query($sql)===true){
        
 echo("insertDone");}
 else{
         echo("there is aproblem  in this process");
 }

 

 