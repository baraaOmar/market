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
     $sql = "SELECT sum(`price`) as selling_day, sum(`price`-`price_paied`) as debt_selling FROM `expenses` WHERE date='$date'";
     $result = conn()->query($sql);
     $out="";$i=0;
 if ($result->num_rows > 0) {
     // output data of each row
     if($row = $result->fetch_assoc())
      {if($row["selling_day"]!=null)
        $myopj["selling_day"]= $row["selling_day"];
        $myopj["debt_selling"]= $row["debt_selling"];
      
     
       $arr[$i++]=$myopj; 
      }
       $json=json_encode($arr);
    echo($json);
 } else {
     echo "no data found";

 }

 