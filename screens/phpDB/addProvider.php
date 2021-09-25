<?php
 require_once "./connection.php";
   $name=$_POST["name"];//"برغي";//
   $phone=$_POST["phone"];//"برغي";//
   $address=$_POST["address"];//"2";//
  
     $sql = "INSERT INTO `provider`(`name`, `phone`, `address`) VALUES ('$name','$phone','$address')";
     
if($conn->query($sql)===true){
        
 echo("insertDone");}
 else{
         echo("there is aproblem  in this process");
 }

 

 