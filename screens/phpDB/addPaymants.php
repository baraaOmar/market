<?php
require_once "./connection.php";
   $payment=$_POST["payment"];//"برغي";//
   $date=$_POST["date"];//"برغي";//
   $id=$_POST["id"];//"2";//
  
     $sql = "INSERT INTO `payment`( `order_id`, `date`, `amount`)  VALUES ('$id','$date','$payment')";
     
if($conn->query($sql)===true){
        
 echo("insertDone");}
 else{
         echo("there is aproblem  in this process");
 }

 

 