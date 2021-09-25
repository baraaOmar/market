<?php
 require_once "./connection.php"; 
     $d_start=($_POST["date_start"]);
     // $d_start=("2021/07/20");// 2021-07-20 02:00:00
     // $d_end=("2021-08-20");
       $d_end=($_POST["date_end"]);
  
   // echo($date);
  //   $sql = "SELECT sum(`total_price`) as selling_day, sum(`total_price`-`payed`) as debt_selling FROM `imports` WHERE date BETWEEN DATE_FORMAT('$d_start','%Y-%m-%d') and DATE_FORMAT('$d_end','%Y-%m-%d')  and sales_bill_type=1 ";
  $cash="SELECT SUM( `amount`) as cash   FROM `cash`join import_history ON import_history.Pay_id=cash.id  JOIN imports on imports.id=import_history.import_id WHERE cash.date BETWEEN DATE_FORMAT('$d_start','%Y-%m-%d') and DATE_FORMAT('$d_end','%Y-%m-%d')  ";
  $bank="SELECT SUM( `ammount`) as bank  FROM `bank` join import_history ON import_history.Pay_id=bank.id  JOIN imports on imports.id=import_history.import_id WHERE bank.date BETWEEN DATE_FORMAT('$d_start','%Y-%m-%d') and DATE_FORMAT('$d_end','%Y-%m-%d')  ";
  $cheque="SELECT SUM(value) as cheque  FROM `cheque` join import_history ON import_history.Pay_id=cheque.id  JOIN imports on imports.id=import_history.import_id WHERE cheque.date BETWEEN DATE_FORMAT('$d_start','%Y-%m-%d') and DATE_FORMAT('$d_end','%Y-%m-%d') ";
  
$imports = "SELECT sum( `total_price`) as price FROM `imports` WHERE date BETWEEN DATE_FORMAT('$d_start','%Y-%m-%d') and DATE_FORMAT('$d_end','%Y-%m-%d')  and sales_bill_type=1 ";
  $resultcash = $conn->query($cash);
  $resultbank = $conn->query($bank);
  $resultcheque = $conn->query($cheque);
  $resultimports = $conn->query($imports);
     $out="";$i=0;$totalPayed=0;$totalPrice=0;
     if ($resultimports->num_rows > 0) {
      if($row = $resultimports->fetch_assoc())
       {
         $myopj["price"]= $row["price"];
         $totalPrice=$row["price"];
       }

      }
     if ($resultbank->num_rows > 0) {
      if($row = $resultbank->fetch_assoc())
       {
         $myopj["bank"]= $row["bank"];
         $totalPayed+=$row["bank"];
       }

      }
      if ($resultcash->num_rows > 0) {
        if($row = $resultcash->fetch_assoc())
         {
           $myopj["cash"]= $row["cash"];
           $totalPayed+=$row["cash"];
         }
  
        }
        if ($resultcheque->num_rows > 0) {
          if($row = $resultcheque->fetch_assoc())
           {
             $myopj["cheque"]= $row["cheque"];
             $totalPayed+=$row["cheque"];
           }
    
          }

 
        $myopj["selling_day"]=   $totalPrice;
        $myopj["debt_selling"]= abs( $totalPrice-$totalPayed);
      
     
       $arr[$i]=$myopj; 
      
       $json=json_encode($arr);
    echo($json);
  

 