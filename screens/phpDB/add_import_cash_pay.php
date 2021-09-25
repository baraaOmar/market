<?php
 require_once "./connection.php";
   $payment=$_POST["payment"];//"برغي";//
   $date=$_POST["date"];//"برغي";//
   $id=$_POST["id"];//"2";//
 
  $operation_pay_id=1;//
     $sql = "INSERT INTO `cash`( `amount`, `date`) VALUES ('$payment','$date')";
     
  
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



