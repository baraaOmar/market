<?php
 require_once "./connection.php"; 
     $d_start=($_POST["date_start"]);
   // $d_start=("2021/07/20");// 2021-07-20 02:00:00
  //  $d_end=("2021-08-20");
     $d_end=($_POST["date_end"]);
     $sql = "SELECT IFNULL(sum(`price`) ,0)as selling_day, IFNULL(sum(`price`-`price_paied`),0 )as debt_selling FROM `expenses` WHERE date BETWEEN DATE_FORMAT('$d_start','%Y-%m-%d') and DATE_FORMAT('$d_end','%Y-%m-%d')";
     $result = $conn->query($sql);
     $out="";$i=0;
 if ($result->num_rows > 0) {
     // output data of each row
     if($row = $result->fetch_assoc())
      {
        $myopj["selling_day"]= $row["selling_day"];
        $myopj["debt_selling"]=max( $row["debt_selling"],0);
      
     
       $arr[$i++]=$myopj; 
      }
       $json=json_encode($arr);
    echo($json);
 } else {
     echo "no data found";

 }

 