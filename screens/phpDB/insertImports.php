<?php
 
 require_once "./connection.php";

   $name=$_POST["name_import"];//"برغي";//
   $price=$_POST["price_import"];//"برغي";//
 //  $payed=$_POST["payed_import"];//"2";//
   $number=$_POST["number"];//"3";//
   $date=$_POST["date"];//"2";//
  $type=$_POST["type"];
  $provider=$_POST["name_import"];
     $sql = "INSERT INTO `imports` ( `Supplier_name2`, `order_number`, `employee_id`,  `total_price`, `date`,`sales_bill_type`, `provider_id`) VALUES ('$name', '$number','1','$price','$date','$type','$provider')";
     
     $out="";$i=0;
 
if($conn->query($sql)===true){
        $last_id = mysqli_insert_id($conn);   
     echo($last_id);}
 else{
         echo("there is aproblem  in this process");
 }

 

 