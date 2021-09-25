<?php
 require_once "./connection.php";
     $sql = "SELECT id,quantity_remained, name,Par_code,quantity,price,totel,price_paied,quentity_paied FROM goods "; 
     $result = $conn->query($sql);
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

 