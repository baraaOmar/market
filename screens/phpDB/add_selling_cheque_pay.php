<?php
 
 require_once "./connection.php";
   $payment=$_POST["payment"];//"برغي";//
   $date=$_POST["date"];//"برغي";//
 //  $id=$_POST["id"];//"2";//
$from=$_POST["from"];
$cheque_due_date=$_POST["cheque_due_date"];
$to=$_POST["to"];
$cheque_number=$_POST["cheque_number"];

 
 

  $operation_pay_id=2;//
  
  $total_price=$_POST["total_price"];//
  $date_order=$_POST["date_order"];
 $total_payed_real=$_POST["total_payed_real"];


  
    $name=$_POST["name"];//
    $phone=$_POST["phone"];//
 $sql = "INSERT INTO `orders`(`customer_name`, `phone`,`total_payed`,total_payed_real,date) VALUES ('$name','$phone','$total_price','$total_payed_real','$date_order')";
     
 if($conn->query($sql)===true){
     $last_id = mysqli_insert_id($conn);   
  

     $sql = "INSERT INTO `cheque`(  `number`, `value`, `date`, `due_date`, `paid_to`) VALUES ('$cheque_number','$payment','$date','$cheque_due_date','$to')";
     
  
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
