<?php
require_once "./connection.php";

$sql="SELECT `id`, `operation` FROM `payment_type`";
$result = $conn->query($sql);
$out="";$i=0;
if ($result->num_rows > 0) {
    while($row=$result->fetch_assoc()){
        $myOpj["operation"]=$row["operation"];
        $myOpj["id"]=$row["id"];
        $arr[$i++]=$myOpj; 
    }
    $json=json_encode($arr);
    echo($json);
} else {
    echo "no data found";

}
