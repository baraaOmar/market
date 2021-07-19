<?php
 function  conn(){
    $dbhost = "localhost";
    $dbuser = "root";
    $dbpass = "";
    $db = "aqsa";
    $conn = new mysqli($dbhost, $dbuser, $dbpass,$db) or die("Connect failed: %s\n". $conn -> error);
    return $conn;
     } 
   $id=$_POST["id"];//"برغي";//
   $order_id=$_POST["order_id"];//"برغي";//
   $quantity=$_POST["quantity"];//"برغي";//
 
  
  
  
      $out="";$i=0;
      $sql = "INSERT INTO `back_import`( `good_id`, `quentity`, `import_id`) VALUES ('$id','$quantity','$order_id')";
if(conn()->query($sql)===true){
      
 echo("insertDone");}
 else{
         echo("there is aproblem  in this process");
 }

 

 