<?php
/*
 function  conn(){
$dbhost = "localhost";
$dbuser = "root";
$dbpass = "";
$db = "market";
$conn = new mysqli($dbhost, $dbuser, $dbpass,$db) or die("Connect failed: %s\n". $conn -> error);
return $conn;
 } 

 
$sql = "SELECT name,id FROM employee ";
 $result = conn()->query($sql);
  
       if ($result->num_rows > 0) {
           // output data of each row
           while($row = $result->fetch_assoc()) {
            
            $myopj["name"]= $row["name"];
             $myopj["type"]= $row["type"];
            
          
             $arr[$i]=$myopj;  }
          
         
       } 
         
         
        
         $json=json_encode($arr);echo($json);
      
    
   
*/