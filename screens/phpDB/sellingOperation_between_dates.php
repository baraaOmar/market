<?php
 function  conn(){
    $dbhost = "localhost";
    $dbuser = "root";
    $dbpass = "";
    $db = "aqsa";
    $conn = new mysqli($dbhost, $dbuser, $dbpass,$db) or die("Connect failed: %s\n". $conn -> error);
    return $conn;
     } 
     $d_start=($_POST["date_start"]);
    // $d_start=("2021/07/20 ");// 2021-07-20 02:00:00
   //  $d_end=("2021-08-20 ");
     $d_end=($_POST["date_end"]);
     $sql = "SELECT selling.`quantity`, customer_name,`date`,`payed_price`,`payed_price_each_Good`,`total_payed`,employee.name as employee , goods.name as good FROM `selling` join employee on employee_id=employee.id JOIN goods on goods.id=good_id join orders on orders.id=selling.order_id  where date BETWEEN DATE_FORMAT('$d_start','%Y-%m-%d  %H:%i:%S') and DATE_FORMAT('$d_end','%Y-%m-%d  %H:%i:%S')";
     
     $result = conn()->query($sql);
     $i=0;
 if ($result->num_rows > 0) {
     // output data of each row
     while($row = $result->fetch_assoc())
      {
      
      $myopj["name"]= $row["good"];
      $myopj["employee"]= $row["employee"];
      $myopj["customer"]=$row["name"];
     
      $myopj["date"]= $row["date"];
      
       $myopj["payed_price"]= $row["payed_price"];
        $myopj["payed_price_each_Good"]= $row["payed_price_each_Good"];
       $myopj["total_payed"]=$row["total_payed"];
       $myopj["quantity"]=$row["quantity"];
       $arr[$i++]=$myopj; 
      }
       $json=json_encode($arr);
    echo($json);
 } else {
     echo "no data found";

 }

 