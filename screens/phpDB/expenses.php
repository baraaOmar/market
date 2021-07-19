<?php
 function  conn(){
    $dbhost = "localhost";
    $dbuser = "root";
    $dbpass = "";
    $db = "aqsa";
    $conn = new mysqli($dbhost, $dbuser, $dbpass,$db) or die("Connect failed: %s\n". $conn -> error);
    return $conn;
     } 
   
     $sql = "SELECT `details`,`price_paied`,date,`price`,employee.name FROM `expenses` join employee on employee_id=employee.id";   $result = conn()->query($sql);
     $out="";$i=0;
 if ($result->num_rows > 0) {
     // output data of each row
     while($row = $result->fetch_assoc())
      {
        $myopj["details"]= $row["details"];
        $myopj["price_paied"]= $row["price_paied"];
        $myopj["price"]= $row["price"];
         $myopj["name"]= $row["name"];
         $myopj["date"]= $row["date"];
       
       
     
       $arr[$i++]=$myopj; 
      }
       $json=json_encode($arr);
    echo($json);
 } else {
     echo "no data found";

 }

 