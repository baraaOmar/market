<?php
 require_once "./connection.php"; 
    $id=$_POST["id"];
    $sql = "SELECT  `account_number_sender`, `account_number_receiver`, `ammount`,  bank.`date` FROM `bank`join order_history ON order_history.Pay_id=bank.id JOIN orders on orders.id=order_history.order_id WHERE orders.id=$id";   
       $result = $conn->query($sql);
   
    
     $i=0;
 if ($result->num_rows > 0) {
     // output data of each row
     while($row = $result->fetch_assoc())
      {
      
       
         $myopj["account_number_sender"]= $row["account_number_sender"];
         $myopj["account_number_receiver"]= $row["account_number_receiver"];
      $myopj["ammount"]= $row["ammount"];
      $myopj["date"]= $row["date"];
     
   
    
    
    
       $arr[$i++]=$myopj; 
      }
       $json=json_encode($arr);
    echo($json);
 } else {
     echo "no data found";

 }

 