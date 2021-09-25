<?php
 require_once "./connection.php";
   $quantity=$_POST["quantity"];//"برغي";//
   $date=$_POST["date"];//"برغي";//
   $id=$_POST["id"];//"2";//
  
     $sql = "INSERT INTO `rapish`(`date`, `quantity`, `good_id`) VALUES ( '$date','$quantity','$id')";
     
if($conn->query($sql)===true){
        
 echo("insertDone");}
 else{
         echo("there is aproblem  in this process");
 }

 

 