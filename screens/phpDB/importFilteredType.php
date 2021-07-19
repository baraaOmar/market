<?php
 function  conn(){
    $dbhost = "localhost";
    $dbuser = "root";
    $dbpass = "";
    $db = "aqsa";
    $conn = new mysqli($dbhost, $dbuser, $dbpass,$db) or die("Connect failed: %s\n". $conn -> error);
    return $conn;
     } 
   $type=$_POST["imports_type"];
     $sql = "SELECT imports.id, Supplier_name,`order_number`,date,`payed`,`total_price`,employee.name FROM `imports` join employee on employee.id=imports.employee_id where sales_bill_type='$type'"; 
       $result = conn()->query($sql);
     $out="";$i=0;
 if ($result->num_rows > 0) {
     // output data of each row
     while($row = $result->fetch_assoc())
      {
        $myopj["name"]= $row["name"];
        $myopj["total_price"]= $row["total_price"];
        $myopj["id"]= $row["id"];
         $myopj["payed"]= $row["payed"];
         $myopj["Supplier_name"]= $row["Supplier_name"];
         $myopj["date"]= $row["date"];
       
         $myopj["order_number"]= $row["order_number"];
       
     
       $arr[$i++]=$myopj; 
      }
       $json=json_encode($arr);
    echo($json);
 } else {
     echo "no data found";

 }

 