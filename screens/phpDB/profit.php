<?php
 require_once "./connection.php";
  //   $d_start=($_POST["date_start"]);
     $d_start=("2021/07/20");// 2021-07-20 02:00:00
      $d_end=("2021-10-20");
     // $d_end=($_POST["date_end"]);
  
   // echo($date);
  //   $sql = "SELECT sum(`total_price`) as selling_day, sum(`total_price`-`payed`) as debt_selling FROM `imports` WHERE date BETWEEN DATE_FORMAT('$d_start','%Y-%m-%d') and DATE_FORMAT('$d_end','%Y-%m-%d')  and sales_bill_type=1 ";
  $cash="SELECT IFNULL(SUM( `amount`) ,0) as cash   FROM `cash`join order_history ON order_history.Pay_id=cash.id  JOIN orders on orders.id=order_history.order_id WHERE cash.date BETWEEN DATE_FORMAT('$d_start','%Y-%m-%d') and DATE_FORMAT('$d_end','%Y-%m-%d')";
  $bank="SELECT IFNULL(SUM( `ammount`) ,0) as bank  FROM `bank` join order_history ON order_history.Pay_id=bank.id  JOIN orders on orders.id=order_history.order_id WHERE bank.date BETWEEN DATE_FORMAT('$d_start','%Y-%m-%d') and DATE_FORMAT('$d_end','%Y-%m-%d')";
  $cheque="SELECT IFNULL(SUM(value) ,0) as cheque  FROM `cheque` join order_history ON order_history.Pay_id=cheque.id  JOIN orders on orders.id=order_history.order_id  WHERE cheque.date BETWEEN DATE_FORMAT('$d_start','%Y-%m-%d') and DATE_FORMAT('$d_end','%Y-%m-%d')";
  $back = "SELECT IFNULL(SUM(selling.payed_price_each_Good*back_selling.quantity),0) as back  FROM `selling` join back_selling on selling.id=back_selling.selling_id  WHERE back_selling.date BETWEEN DATE_FORMAT('$d_start','%Y-%m-%d') and DATE_FORMAT('$d_end','%Y-%m-%d')";
$imports = "SELECT IFNULL(sum( `total_payed_real`) ,0)as price, IFNULL(sum(total_payed_real-total_payed) ,0) as profit FROM `orders` WHERE date BETWEEN DATE_FORMAT('$d_start','%Y-%m-%d') and DATE_FORMAT('$d_end','%Y-%m-%d')";
  $resultcash =  $conn->query($cash);
  $resultbank =  $conn->query($bank);
  $resultcheque =  $conn->query($cheque);
  $resultimports = $conn->query($imports);
  $resultBack =  $conn->query($back);
     $out="";$i=0;$totalPayed=0;$totalPrice=0;
     if ($resultBack->num_rows > 0) {
      if($row = $resultBack->fetch_assoc())
       {
         $myopj["back"]= $row["back"];
        
       }

      }
      if ($resultimports->num_rows > 0) {
        if($row = $resultimports->fetch_assoc())
         {
           $myopj["price"]= $row["price"];
           $totalPrice=$row["price"];
           $myopj["profit"]=$row["profit"];
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

 
        $myopj["selling_day"]=   $totalPayed;
        $myopj["debt_selling"]= abs( $totalPrice-$totalPayed);
      
     
       $arr[$i]=$myopj; 
      
       $json=json_encode($arr);
    echo($json);
  

 