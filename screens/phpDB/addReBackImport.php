<?php
require_once "./connection.php";
   $id=$_POST["id"];//"برغي";//
   $order_id=$_POST["order_id"];//"برغي";//
   $quantity=$_POST["quantity"];//"برغي";//
 
  
  
  
      $out="";$i=0;
      $sql = "INSERT INTO `back_import`( `good_id`, `quantity`, `import_id`) VALUES ('$id','$quantity','$order_id')";
if($conn->query($sql)===true){
      
 echo("insertDone");}
 else{
         echo("there is aproblem  in this process");
 }

 

 