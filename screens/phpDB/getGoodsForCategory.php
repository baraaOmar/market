<?php
 function  conn(){
    $dbhost = "localhost";
    $dbuser = "root";
    $dbpass = "";
    $db = "market";
    $conn = new mysqli($dbhost, $dbuser, $dbpass,$db) or die("Connect failed: %s\n". $conn -> error);
    return $conn;
     } 
    $id= $_REQUEST["id"];
     $sql = "SELECT * FROM `goods` WHERE goods.category_id=$id";
     $result = conn()->query($sql);
     $out="";$i=0;
 if ($result->num_rows > 0) {
     // output data of each row
     while($row = $result->fetch_assoc())
      {
      
      $myopj["name"]= $row["name"];
      $myopj["id"]= $row["id"];
     
       $arr[$i++]=$myopj; 
      }
       $json=json_encode($arr);
    echo($json);
 } else {
     echo "no data found";

 }

 