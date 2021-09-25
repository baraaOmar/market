<?php
 require_once "./connection.php";
     $search=$_POST["name"];
       
$sql = "SELECT  sum(`payed_price`) as payed,sum(`total_payed`-`payed_price`) as dept,employee.name as employee  FROM `selling` join employee on employee_id=employee.id JOIN goods on goods.id=good_id join orders on orders.id=selling.order_id where orders.id ='$search%' ";
       
    
     $result = $conn->query($sql);
     $i=0;
 if ($result->num_rows > 0) {
     // output data of each row
     if($row = $result->fetch_assoc())
      {
      
      $myopj["payed"]= $row["payed"];
      $myopj["dept"]=max(0, $row["dept"]);
     
       $arr[$i++]=$myopj; 
      }
       $json=json_encode($arr);
    echo($json);
 } else {
     echo "no data found";

 }

 