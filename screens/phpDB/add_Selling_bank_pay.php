<?php
 
 require_once "./connection.php";
   $payment=$_POST["payment"];//"برغي";//
   $date=$_POST["date"];//"برغي";//
 //  $id=$_POST["id"];//"2";//
  $coinsType=$_POST["coinsType"];//"2";//
$from=$_POST["from"];

$to=$_POST["to"];

 
 

  $operation_pay_id=3;//
 
  $total_price=$_POST["total_price"];//
  $date_order=$_POST["date_order"];
 $total_payed_real=$_POST["total_payed_real"];


  
    $name=$_POST["name"];//
    $phone=$_POST["phone"];//



 $sql = "INSERT INTO `orders`(`customer_name`, `phone`,`total_payed`,total_payed_real,date) VALUES ('$name','$phone','$total_price','$total_payed_real','$date_order')";
     
 if($conn->query($sql)===true){
     $last_id = mysqli_insert_id($conn);   
  

     $sql = "INSERT INTO `bank`(  `account_number_sender`, `account_number_receiver`, `date`, `ammount`, `coins_type`) VALUES ('$from','$to','$date','$payment','$coinsType')";
     
  
     if($conn->query($sql)===true){
      $coin = mysqli_insert_id($conn);   
  
  $sql2="INSERT INTO `order_history`( `order_id`, `operation_pay_id`,	Pay_id) VALUES ('$last_id','$operation_pay_id','$coin')";   
  if($conn->query($sql2)===true)
  {
    echo( $last_id);
  }else{
    echo("there is aproblem  in 1 this process");
  }
 
 
}
 else{
         echo("there is aproblem  in 2 this process");
 }
}
 else{
  echo("there is aproblem  in 3 this process");
}
