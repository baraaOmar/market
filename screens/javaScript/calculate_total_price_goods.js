
function totalPriceGoods(){
    var price=document.getElementById("goods_price").value;
    var quantity = document.getElementById("goods_quantity").value;
    document.getElementById("goods_total").value=price*quantity;
}