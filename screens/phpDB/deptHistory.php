<?php

 require_once "./connection.php";

 // $id=58;//($_POST["id"]);


  // $back = "SELECT IFNULL(SUM(selling.payed_price_each_Good),0) as back  FROM `selling` join back_selling on selling.id=back_selling.selling_id  ";
$orders = "SELECT id,`customer_name`, `phone`,  `date`,IFNULL(( `total_payed_real`) ,0)as price, IFNULL((total_payed_real-total_payed) ,0) as profit FROM `orders` ";
 
  $resultimports = $conn->query($orders);
 // $resultBack =  $conn->query($back);
     $out="";$i=0;
   /*  if ($resultBack->num_rows > 0) {
      if($row = $resultBack->fetch_assoc())
       {
         $myopj["back"]= $row["back"];
        
       }

      }
      */
      if ($resultimports->num_rows > 0) {
        while($row = $resultimports->fetch_assoc())
         {
         
           $myopj["price"]= $row["price"];
           $totalPrice=$row["price"];
           $myopj["profit"]=$row["profit"];
           $myopj["phone"]= $row["phone"];
           $myopj["date"]=$row["date"];
           $myopj["customer_name"]=$row["customer_name"];
           $id=$row["id"];
           $myopj["id"]=$row["id"];
  
         $cash="SELECT IFNULL(SUM( `amount`) ,0) as cash   FROM `cash`join order_history ON order_history.Pay_id=cash.id  JOIN orders on orders.id=order_history.order_id  where orders.id='$id'";
         $bank="SELECT IFNULL(SUM( `ammount`) ,0) as bank  FROM `bank` join order_history ON order_history.Pay_id=bank.id  JOIN orders on orders.id=order_history.order_id where orders.id='$id'";
         $cheque="SELECT IFNULL(SUM(value) ,0) as cheque  FROM `cheque` join order_history ON order_history.Pay_id=cheque.id  JOIN orders on orders.id=order_history.order_id where orders.id='$id'";
         
         $resultcash =  $conn->query($cash);
         $resultbank =  $conn->query($bank);
         $resultcheque =  $conn->query($cheque);


         $totalPayed=0;



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
              $myopj["debt_selling"]= max( $totalPrice-$totalPayed,0);
            
           
             $arr[$i++]=$myopj; 
           
        }  $json=json_encode($arr);
        echo($json);}
    else{
      echo("no data found");
    }
      
     
  

 