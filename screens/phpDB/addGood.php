<?php
 require_once "./connection.php";
   $name=$_POST["name"];//"برغي";//
   $code=$_POST["code"];//"برغي";//
   $price=$_POST["price"];//"2";//
   $payed_price=$_POST["payed_price"];//"3";//
   $quantity=$_POST["quantity"];//"2";//
   $total=$_POST["total"];//"2";//
   $goods_orders_select=$_POST["goods_orders_select"]===null?"2":$_POST["goods_orders_select"];
     $sql = "INSERT INTO `goods` (`Par_code`, `name`, `quantity`, `price`, `totel`, `price_paied`, `quentity_paied`, `import_id`,`quantity_remained`) VALUES ('$code', '$name','$quantity','$price','$total','$payed_price','0','$goods_orders_select','$quantity')";
      $out="";$i=0;
 
if($conn->query($sql)===true){
        
 echo("insertDone");}
 else{
         echo("there is aproblem  in this process");
 }

 

 