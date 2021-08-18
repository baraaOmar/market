<?php
 function  conn(){
    $dbhost = "localhost";
    $dbuser = "root";
    $dbpass = "";
    $db = "aqsa";
    $conn = new mysqli($dbhost, $dbuser, $dbpass,$db) or die("Connect failed: %s\n". $conn -> error);
    return $conn;
     } 
     $d_start=($_POST["date_start"]);
   // $d_start=("2021/07/20");// 2021-07-20 02:00:00
  //  $d_end=("2021-08-20");
     $d_end=($_POST["date_end"]);
     $sql = "SELECT sum(`price`) as selling_day, sum(`price`-`price_paied`) as debt_selling FROM `expenses` WHERE date BETWEEN DATE_FORMAT('$d_start','%Y-%m-%d') and DATE_FORMAT('$d_end','%Y-%m-%d')";
     $result = conn()->query($sql);
     $out="";$i=0;
 if ($result->num_rows > 0) {
     // output data of each row
     if($row = $result->fetch_assoc())
      {if($row["selling_day"]!=null)
        $myopj["selling_day"]= $row["selling_day"];
        $myopj["debt_selling"]=max( $row["debt_selling"],0);
      
     
       $arr[$i++]=$myopj; 
      }
       $json=json_encode($arr);
    echo($json);
 } else {
     echo "no data found";

 }

 