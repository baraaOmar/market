<?php
 require_once "./connection.php"; 
    $d_start=($_POST["date_start"]);
    $d_end=($_POST["date_end"]);
     $sql = "SELECT IFNULL( back_selling.quantity , 0) as back_Q,selling.id as sell_id, orders.id,quantity_remained ,goods.id as good_id, selling.`quantity`, customer_name,orders.`date`,price,`payed_price_each_Good`,IFNULL(total_payed_real-payed_price_each_Good*back_selling.quantity,total_payed_real) as total_money_real,employee.name as employee , goods.name as good FROM `selling` join employee on employee_id=employee.id JOIN goods on goods.id=good_id join orders on orders.id=selling.order_id   LEFT JOIN back_selling on back_selling.selling_id=selling.id  WHERE orders.date BETWEEN DATE_FORMAT('$d_start','%Y-%m-%d') and DATE_FORMAT('$d_end','%Y-%m-%d')";  
    $result = $conn->query($sql);
        $i=0;
        if ($result->num_rows > 0) {
        // output data of each row
        while($row = $result->fetch_assoc())
         {
           
           $myopj["back_Q"]= $row["back_Q"];
           $myopj["name"]= $row["good"];
           $myopj["employee"]= $row["employee"];
           $myopj["customer"]=$row["customer_name"];
           $myopj["id"]=$row["id"];
          $myopj["sell_id"]=$row['sell_id'];
           $myopj["date"]= $row["date"];
           $myopj["good_id"]= $row["good_id"];
           $myopj["profit"]= $row["payed_price_each_Good"]-$row["price"];
          
             $myopj["payed_price_each_Good"]= $row["payed_price_each_Good"];
           
            $myopj["total_payed_real"]=$row["total_money_real"];
         
            $myopj["quantity"]=$row["quantity"];
            $myopj["quentity_remained"]=$row["quantity_remained"];
          $arr[$i++]=$myopj; 
         }
          $json=json_encode($arr);
       echo($json);
    } else {
        echo "no data found";
   
    }
   
    