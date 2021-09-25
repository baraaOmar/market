
function totalPriceGoods(){
    var price=document.getElementById("goods_price").value;
    var quantity = document.getElementById("goods_quantity").value;
    document.getElementById("goods_total").value=price*quantity;
}
function clearAddOrderFields(){
document.querySelector("#myTable > tbody").innerHTML="";
document.getElementById("date_order").value="";
document.getElementById("total_price_order").value=0;
document.getElementById("total_price_order_entered_price").value=0;
document.getElementById("customer_name").value="";
document.getElementById("customer_phone").value="";

}