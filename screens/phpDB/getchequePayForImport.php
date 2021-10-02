<?php
 require_once "./connection.php";
    $id=$_POST["id"];
    $sql = "SELECT  `number`, `value`, `due_date`,  `paid_to`,  cheque.`date` FROM `cheque`join import_history ON import_history.Pay_id=cheque.id  JOIN imports on imports.id=import_history.import_id WHERE imports.id=$id";  
          $result = $conn->query($sql);
   
    
     $i=0;
 if ($result->num_rows > 0) {
     // output data of each row
     while($row = $result->fetch_assoc())
      {
      
       
         $myopj["number"]= $row["number"];
         $myopj["date"]= $row["date"];
     
    
      $myopj["value"]= $row["value"];
         $myopj["due_date"]= $row["due_date"];
      $myopj["paid_to"]= $row["paid_to"];

    
    
       $arr[$i++]=$myopj; 
      }
       $json=json_encode($arr);
    echo($json);
 } else {
     echo "no data found";

 }

 