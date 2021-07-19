<?php
 function  conn(){
    $dbhost = "localhost";
    $dbuser = "root";
    $dbpass = "";
    $db = "aqsa";
    $conn = new mysqli($dbhost, $dbuser, $dbpass,$db) or die("Connect failed: %s\n". $conn -> error);
    return $conn;
     } 
     $search=$_POST["name"];
       
$sql = "SELECT  sum(`payed_price`) as payed,sum(`total_payed`-`payed_price`) as dept,employee.name as employee  FROM `selling` join employee on employee_id=employee.id JOIN goods on goods.id=good_id join orders on orders.id=selling.order_id where orders.id ='$search%' ";
       
    
     $result = conn()->query($sql);
     $i=0;
 if ($result->num_rows > 0) {
     // output data of each row
     if($row = $result->fetch_assoc())
      {
      
      $myopj["payed"]= $row["payed"];
      $myopj["dept"]= $row["dept"];
     
       $arr[$i++]=$myopj; 
      }
       $json=json_encode($arr);
    echo($json);
 } else {
     echo "no data found";

 }

 