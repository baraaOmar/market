<?php
 
 require_once "./connection.php";
   // $payed_order=$_POST["payed_order"];//"2";//
   $total_price=$_POST["total_price"];//"2";//
   $date_order=$_POST["date_order"];
  $total_payed_real=$_POST["total_payed_real"];


   
     $name=$_POST["name"];//"2";//
     $phone=$_POST["phone"];//"3";//
 
     $sql = "INSERT INTO `orders`(`customer_name`, `phone`,`total_payed`,total_payed_real,date) VALUES ('$name','$phone','$total_price','$total_payed_real','$date_order')";
     
if($conn->query($sql)===true){
    $last_id = mysqli_insert_id($conn);   
 echo($last_id);}
 else{
         echo("there is aproblem  in this process");
 }

 

 