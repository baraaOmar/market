<?php
 require_once "./connection.php";
    $id=$_POST["id"];
$sql = "SELECT  `amount`, cash.`date` FROM `cash`join order_history ON order_history.Pay_id=cash.id  JOIN orders on orders.id=order_history.order_id WHERE orders.id=$id"; 
        $result = $conn->query($sql);
   
    
     $i=0;
 if ($result->num_rows > 0) {
     // output data of each row
     while($row = $result->fetch_assoc())
      {
      
       
         $myopj["amount"]= $row["amount"];
         $myopj["date"]= $row["date"];
    
    
    
    
       $arr[$i++]=$myopj; 
      }
       $json=json_encode($arr);
    echo($json);
 } else {
     echo "no data found";

 }

 