<?php
 function  conn(){
    $dbhost = "localhost";
    $dbuser = "root";
    $dbpass = "";
    $db = "aqsa";
    $conn = new mysqli($dbhost, $dbuser, $dbpass,$db) or die("Connect failed: %s\n". $conn -> error);
    return $conn;
     } 
    
     //   $sql = $sql = "SELECT selling.id as sell_id, orders.id,quantity_remained ,goods.id as good_id, selling.`quantity`, customer_name,`date`,price,`payed_price`,`payed_price_each_Good`,`total_payed`,total_payed_real,employee.name as employee , goods.name as good FROM `selling` join employee on employee_id=employee.id JOIN goods on goods.id=good_id join orders on orders.id=selling.order_id";
       
 //   $sql = "SELECT IFNULL( back_selling.quantity , 0) as back_Q,selling.id as sell_id, orders.id,quantity_remained ,goods.id as good_id, selling.`quantity`, customer_name,orders.`date`,price,IFNULL(`payed_price`+payment.amount,payed_price) as payed_price,`payed_price_each_Good`,`total_payed`,total_payed_real,employee.name as employee , goods.name as good FROM `selling` join employee on employee_id=employee.id JOIN goods on goods.id=good_id join orders on orders.id=selling.order_id LEFT JOIN payment ON payment.order_id=orders.id  LEFT JOIN back_selling on back_selling.selling_id=selling.id";
 $sql = "SELECT IFNULL( back_selling.quantity , 0) as back_Q,selling.id as sell_id, orders.id,quantity_remained ,goods.id as good_id, selling.`quantity`, customer_name,orders.`date`,price,IFNULL(`payed_price`+payment.amount,payed_price) as payed_price,`payed_price_each_Good`,IFNULL(total_payed-goods.price*back_selling.quantity,`total_payed`) as total_payed,IFNULL(total_payed_real-payed_price_each_Good*back_selling.quantity,total_payed_real) as total_payed_real,employee.name as employee , goods.name as good FROM `selling` join employee on employee_id=employee.id JOIN goods on goods.id=good_id join orders on orders.id=selling.order_id LEFT JOIN payment ON payment.order_id=orders.id  LEFT JOIN back_selling on back_selling.selling_id=selling.id"; 
 $result = conn()->query($sql);
     $i=0;
 if ($result->num_rows > 0) {
     // output data of each row
     while($row = $result->fetch_assoc())
      {
        
         $myopj["back_Q"]= $row["back_Q"];
      $myopj["name"]= $row["good"];
      $myopj["employee"]= $row["employee"];
      $myopj["customer"]=$row["customer_name"];
      $myopj["id"]=$row["id"];
     $myopj["sell_id"]=$row['sell_id'];
      $myopj["date"]= $row["date"];
      $myopj["good_id"]= $row["good_id"];
      $myopj["price"]= $row["payed_price_each_Good"]-$row["price"];
       $myopj["payed_price"]= $row["payed_price"];
        $myopj["payed_price_each_Good"]= $row["payed_price_each_Good"];
       $myopj["total_payed"]=$row["total_payed"];
       $myopj["total_payed_real"]=$row["total_payed_real"];
       $myopj["profit"]=$row["total_payed_real"]-$row["total_payed"];
       $myopj["quantity"]=$row["quantity"];
       $myopj["quentity_remained"]=$row["quantity_remained"];
       $myopj["dept"]=max($row["total_payed"]-$row["payed_price"],0);
       $arr[$i++]=$myopj; 
      }
       $json=json_encode($arr);
    echo($json);
 } else {
     echo "no data found";

 }

 