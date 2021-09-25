<?php
 require_once "./connection.php";
     $sql = "SELECT `name`,`phone`,address,id FROM `provider`";
     $result = $conn->query($sql);
     $out="";$i=0;
 if ($result->num_rows > 0) {
     // output data of each row
     while($row = $result->fetch_assoc())
      {
      
      $myopj["name"]= $row["name"];
      $myopj["phone"]= $row["phone"];
      $myopj["address"]= $row["address"];
      $myopj["id"]= $row["id"];
    
     
       $arr[$i++]=$myopj; 
      }
       $json=json_encode($arr);
    echo($json);
 } else {
     echo "no data found";

 }

 