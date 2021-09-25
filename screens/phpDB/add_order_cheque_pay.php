<?php
 require_once "./connection.php";
   $payment=$_POST["payment"];//"برغي";//
   $date=$_POST["date"];//"برغي";//
   $id=$_POST["id"];//"2";//
$from=$_POST["from"];
$cheque_due_date=$_POST["cheque_due_date"];
$to=$_POST["to"];
$cheque_number=$_POST["cheque_number"];

 
 

  $operation_pay_id=2;//
     $sql = "INSERT INTO `cheque`(  `number`, `value`, `date`, `due_date`, `paid_to`) VALUES ('$cheque_number','$payment','$date','$cheque_due_date','$to')";
     
  
     if($conn->query($sql)===true){
      $coin = mysqli_insert_id($conn);   
  
  $sql2="INSERT INTO `order_history`( `order_id`, `operation_pay_id`,pay_id) VALUES ('$id','$operation_pay_id','$coin')";   
  if($conn->query($sql2)===true)
  {
    echo("insertDone");
  }
 
 
}
 else{
         echo("there is aproblem  in this process");
 }



