<?php
 
    $dbhost = "localhost";
    $dbuser = "root";
    $dbpass = "";
    $db = "aqsa";
    $conn = new mysqli($dbhost, $dbuser, $dbpass,$db) or die("Connect failed: %s\n". $conn -> error);
    
    $payed_order=$_POST["payed_order"];//"2";//
   $total_price=$_POST["total_price"];//"2";//
   $date=$_POST["date"];
  $total_payed_real=$_POST["total_payed_real"];


   
     $name=$_POST["name"];//"2";//
     $phone=$_POST["phone"];//"3";//
  $total_payed_real=$_POST["total_payed_real"];
     $sql = "INSERT INTO `orders`(`customer_name`, `phone`,`total_payed`,total_payed_real, `payed_price`,date) VALUES ('$name','$phone','$total_price','$total_payed_real','$payed_order','$date')";
     
if($conn->query($sql)===true){
    $last_id = mysqli_insert_id($conn);   
 echo($last_id);}
 else{
         echo("there is aproblem  in this process");
 }

 

 