<?php
 function  conn(){
    $dbhost = "localhost";
    $dbuser = "root";
    $dbpass = "";
    $db = "aqsa";
    $conn = new mysqli($dbhost, $dbuser, $dbpass,$db) or die("Connect failed: %s\n". $conn -> error);
    return $conn;
     } 
     $sql = "SELECT `name`,`phone`,address,id FROM `provider`";
     $result = conn()->query($sql);
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

 