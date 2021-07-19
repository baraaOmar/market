<?php
 function  conn(){
    $dbhost = "localhost";
    $dbuser = "root";
    $dbpass = "";
    $db = "aqsa";
    $conn = new mysqli($dbhost, $dbuser, $dbpass,$db) or die("Connect failed: %s\n". $conn -> error);
    return $conn;
     } 
   $payment=$_POST["payment"];//"برغي";//
   $date=$_POST["date"];//"برغي";//
   $id=$_POST["id"];//"2";//
  
     $sql = "INSERT INTO `imports_payment`( `date`, `payment`, `import_id`, `employee_id`) VALUES ('$date','$payment','$id','1')";
     
if(conn()->query($sql)===true){
        
 echo("insertDone");}
 else{
         echo("there is aproblem  in this process");
 }

 

 