<?php
 function  conn(){
    $dbhost = "localhost";
    $dbuser = "root";
    $dbpass = "";
    $db = "aqsa";
    $conn = new mysqli($dbhost, $dbuser, $dbpass,$db) or die("Connect failed: %s\n". $conn -> error);
    return $conn;
     } 
     $search=$_POST["name"];
        $sql = "SELECT name,phone ,id FROM `orders` where name LIKE '%$search%' ";
       
    
     $result = conn()->query($sql);
     $i=0;
 if ($result->num_rows > 0) {
     // output data of each row
     if($row = $result->fetch_assoc())
      {
      
      $myopj["id"]= $row["id"];
      $myopj["name"]= $row["name"];
      $myopj["phone"]= $row["phone"];
     
       $arr[$i++]=$myopj; 
      }
       $json=json_encode($arr);
    echo($json);
 } else {
     echo "no data found";

 }

 