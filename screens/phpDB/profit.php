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
     $sql = "SELECT sum(`total_payed_real`) as selling_day,sum(total_payed) as totalPayed , sum(`total_payed_real`-`payed_price`) as debt_selling FROM `orders` WHERE date BETWEEN DATE_FORMAT('$d_start','%Y-%m-%d') and DATE_FORMAT('$d_end','%Y-%m-%d')";
     $result = conn()->query($sql);
     $out="";$i=0;
 if ($result->num_rows > 0) {
     // output data of each row
     if($row = $result->fetch_assoc())
      {
        $myopj["selling_day"]= $row["selling_day"];
        $myopj["debt_selling"]=max( $row["debt_selling"],0);
        $myopj["profit"]=$row["totalPayed"]-$row["selling_day"];
     
       $arr[$i++]=$myopj; 
      }
       $json=json_encode($arr);
    echo($json);
 } else {
     echo "no data found";

 }

 