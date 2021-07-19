<?php
 function  conn(){
    $dbhost = "localhost";
    $dbuser = "root";
    $dbpass = "";
    $db = "aqsa";
    $conn = new mysqli($dbhost, $dbuser, $dbpass,$db) or die("Connect failed: %s\n". $conn -> error);
    return $conn;
     } 
   $name=$_POST["name"];//"برغي";//
   $code=$_POST["code"];//"برغي";//
   $price=$_POST["price"];//"2";//
   $payed_price=$_POST["payed_price"];//"3";//
   $quantity=$_POST["quantity"];//"2";//
   $total=$_POST["total"];//"2";//
   $goods_orders_select=$_POST["goods_orders_select"]===null?"2":$_POST["goods_orders_select"];
     $sql = "INSERT INTO `goods` (`Par_code`, `name`, `quantity`, `price`, `totel`, `price_paied`, `quentity_paied`, `import_id`) VALUES ('$code', '$name','$quantity','$price','0','$payed_price','0','$goods_orders_select')";
      $out="";$i=0;
 
if(conn()->query($sql)===true){
        
 echo("insertDone");}
 else{
         echo("there is aproblem  in this process");
 }

 

 