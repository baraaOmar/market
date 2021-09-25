<?php
 require_once "./connection.php";
     $sql = "SELECT `customer_name`,`phone`,DATE_FORMAT(date,'%Y-%m-%d') as date,id FROM `orders`";
     $result = $conn->query($sql);
     $out="";$i=0;
 if ($result->num_rows > 0) {
     // output data of each row
     while($row = $result->fetch_assoc())
      {
      
      $myopj["name"]= $row["customer_name"];
      $myopj["phone"]= $row["phone"];
      $myopj["date"]= $row["date"];
      $myopj["id"]= $row["id"];
    
     
       $arr[$i++]=$myopj; 
      }
       $json=json_encode($arr);
    echo($json);
 } else {
     echo "no data found";

 }

 