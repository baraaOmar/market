<?php
 require_once "./connection.php";
    $id= $_POST["id"];
    $sql = "SELECT price_paied FROM `goods` where id=$id";
     $result = $conn->query($sql);
     $out="";$i=0;
 if ($result->num_rows > 0) {
     // output data of each row
     if($row = $result->fetch_assoc())
      {
      
      $myopj["price"]= $row["price_paied"];
    
     
       $arr[$i++]=$myopj; 
      }
       $json=json_encode($arr);
    echo($json);
 } else {
     echo "no data found";

 }

 