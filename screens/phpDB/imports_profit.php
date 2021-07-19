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
    if($date==null)$date=date('H:i:s Y-m-j');
   // echo($date);
     $sql = "SELECT sum(`total_price`) as selling_day, sum(`total_price`-`payed`) as debt_selling FROM `imports` WHERE date='$date'  and sales_bill_type=1 ";
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

 