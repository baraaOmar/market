<?php
 require_once "./connection.php";
     $d_start=($_POST["date_start"]);
   // $d_start=("2021/07/20");// 2021-07-20 02:00:00
  //  $d_end=("2021-08-20");
     $d_end=($_POST["date_end"]);
  
   // echo($date);
   //  $sql = "SELECT sum(`total_price`) as selling_day,payed, sum(`total_price`-`payed`) as debt_selling FROM `imports` WHERE date BETWEEN DATE_FORMAT('$d_start','%Y-%m-%d') and DATE_FORMAT('$d_end','%Y-%m-%d')  and sales_bill_type=2 ";
   $sql = "SELECT IFNULL(SUM(	imports.total_price),0) as backQuantity FROM `back_import` join imports ON imports.id=back_import.import_id  WHERE imports.sales_bill_type=2 and imports.date BETWEEN DATE_FORMAT('$d_start','%Y-%m-%d') and DATE_FORMAT('$d_end','%Y-%m-%d')";
    
     $result = $conn->query($sql);
     $out="";$i=0;
 if ($result->num_rows > 0) {
     // output data of each row
     if($row = $result->fetch_assoc())
      {
        $myopj["total"]= $row["backQuantity"];
       // $myopj["debt_selling"]= $row["payed"];
       // $myopj["remain"]= $row["debt_selling"];
     
       $arr[$i++]=$myopj; 
      }
       $json=json_encode($arr);
    echo($json);
 } else {
     echo "no data found";

 }

 