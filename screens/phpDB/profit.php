<?php
 function  conn(){
    $dbhost = "localhost";
    $dbuser = "root";
    $dbpass = "";
    $db = "aqsa";
    $conn = new mysqli($dbhost, $dbuser, $dbpass,$db) or die("Connect failed: %s\n". $conn -> error);
    return $conn;
     } 
   $date=$_POST["date"];
     $sql = "SELECT sum(`total_payed`) as selling_day, sum(`total_payed`-`payed_price`) as debt_selling FROM `orders` WHERE date='$date";
     $result = conn()->query($sql);
     $out="";$i=0;
 if ($result->num_rows > 0) {
     // output data of each row
     if($row = $result->fetch_assoc())
      {
        $myopj["selling_day"]= $row["selling_day"];
        $myopj["debt_selling"]= $row["debt_selling"];
      
     
       $arr[$i++]=$myopj; 
      }
       $json=json_encode($arr);
    echo($json);
 } else {
     echo "no data found";

 }

 