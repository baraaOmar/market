<?php
 function  conn(){
    $dbhost = "localhost";
    $dbuser = "root";
    $dbpass = "";
    $db = "aqsa";
    $conn = new mysqli($dbhost, $dbuser, $dbpass,$db) or die("Connect failed: %s\n". $conn -> error);
    return $conn;
     } 
     $sql = "SELECT id,quantity_remained, name,Par_code,quantity,price,totel,price_paied,quentity_paied FROM goods "; 
     $result = conn()->query($sql);
 $out="";$i=0;
 if ($result->num_rows > 0) {
     // output data of each row
     while($row = $result->fetch_assoc())
      {
      
      $myopj["name"]= $row["name"];
      $myopj["id"]= $row["id"];
      $myopj["Par_code"]= $row["Par_code"];
       $myopj["quantity"]= $row["quantity"];
      
       $myopj["price"]=$row["price"];
      
       $myopj["price_paied"]=$row["price_paied"];

       $myopj["quentity_paied"]=$row["quentity_paied"];
       $myopj["quentity_remained"]=$row["quantity_remained"];

       $arr[$i++]=$myopj; 
      }
       $json=json_encode($arr);
    echo($json);
 } else {
     echo "no data found";

 }

 