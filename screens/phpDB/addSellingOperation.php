<?php
 require_once "./connection.php";
   $id=$_POST["id"];//"برغي";//
   $order_id=$_POST["order_id"];//"برغي";//
   $quantity=$_POST["quantity"];//"برغي";//
  $price_peace=$_POST["price_peace"];//"3";//
  
  
  
      $out="";$i=0;
      $sql = "INSERT INTO `selling` (  `good_id`, `employee_id`, `quantity`,  `payed_price_each_Good`,  order_id) VALUES ('$id','1','$quantity','$price_peace','$order_id')";
if($conn->query($sql)===true){
      
 echo("insertDone");}
 else{
         echo("there is aproblem  in this process");
 }

 

 