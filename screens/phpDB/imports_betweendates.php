<?php
 require_once "./connection.php"; 
     $d_start=($_POST["date_start"]);
   // $d_start=("2021/07/20");// 2021-07-20 02:00:00
  //  $d_end=("2021-08-20");
     $d_end=($_POST["date_end"]);
     $sql = "SELECT imports.id,sales_bill_type, Supplier_name,`order_number`,date,`total_price`,employee.name FROM `imports` join employee on employee.id=imports.employee_id WHERE date BETWEEN DATE_FORMAT('$d_start','%Y-%m-%d') and DATE_FORMAT('$d_end','%Y-%m-%d')"; 
       $result = $conn->query($sql);
     $out="";$i=0;
 if ($result->num_rows > 0) {
     // output data of each row
     while($row = $result->fetch_assoc())
      {
        $myopj["name"]= $row["name"];
        $myopj["total_price"]= $row["total_price"];
        $myopj["id"]= $row["id"];
      //   $myopj["payed"]= $row["payed"];
         $myopj["Supplier_name"]= $row["Supplier_name"];
         $myopj["date"]= $row["date"];
       $myopj["sales_bill_type"]=$row["sales_bill_type"];
         $myopj["order_number"]= $row["order_number"];
       
     
       $arr[$i++]=$myopj; 
      }
       $json=json_encode($arr);
    echo($json);
 } else {
     echo "no data found";

 }

 