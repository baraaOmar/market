<?php
 
 require_once "./connection.php";
   $payment=$_POST["payment"];//"برغي";//
   $date=$_POST["date"];//"برغي";//
   $id=$_POST["id"];//"2";//
 
$from=$_POST["from"];

$to=$_POST["to"];

 
 

  $operation_pay_id=3;//
     $sql = "INSERT INTO `bank`(  `account_number_sender`, `account_number_receiver`, `date`, `ammount`) VALUES ('$from','$to','$date','$payment')";
     
  
     if($conn->query($sql)===true){
      $coin = mysqli_insert_id($conn);   
  
  $sql2="INSERT INTO `import_history`( `import_id`, `operation_pay_id`,pay_id) VALUES ('$id','$operation_pay_id','$coin')";   
  if($conn->query($sql2)===true)
  {
    echo("insertDone");
  }
 
 
}
 else{
         echo("there is aproblem  in this process");
 }



