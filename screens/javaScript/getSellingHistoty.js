
sellingOperation();
function sellingOperation() {
    var i = 0;
    var html;
    var myjson;
    document.getElementById("selling_history").innerHTML = "";
    if (window.XMLHttpRequest) {//start ajax code
        ajax = new XMLHttpRequest();
    } else {
        ajax = new ActiveXObject("Microsoft.XMLHTTP");
    }

    ajax.onreadystatechange = function () {

        if (this.readyState == 4 && this.status == 200) {
            if (this.responseText !== "no data found") {
                myjson = JSON.parse(this.responseText);

                while (myjson[i].date != null) {
                  var n=myjson[i].name+"";
                    html = ' <tr role="alert"> <td>' + myjson[i].employee + '</td> <td>' + myjson[i].date + '</td> <td>' + myjson[i].payed_price + '</td>  <td>' + myjson[i].customer + '</td>   <td>' + myjson[i].quantity + '</td> <td>' + myjson[i].total_payed + '</td> <td>' + myjson[i].payed_price_each_Good + '</td> <td>' + myjson[i].payed_price + '</td> <td>' + myjson[i].name + '</td> <td> <input  type="checkbox" data-toggle="modal" onclick="clk(\''+myjson[i].id  + '\',\''+myjson[i].good_id  + '\',\''+myjson[i].name  + '\')"  data-target="#exampleModal_order_back">  </input></td>   </tr>';
                    document.getElementById("selling_history").innerHTML += html;
                    i++;

                }
            }
        }
    }
    ajax.open("GET", "./phpDB/SellingOperation.php?q=", true);
    ajax.send();

}
function clk(a,b,c){
document.getElementById("good_order_back").value=c;
document.getElementById("good_order_back").title=b;
document.getElementById("add_back_order").value=a;
}
function getsellingOperationTotalPrice() {
    var i = 0;
    var html;
    var myjson;
    var leng = document.querySelector("#myTable > tbody").childElementCount;
    var j = 0;
    var total_price_order = document.getElementById("total_price_order");
    var total_price_order_entered_price = document.getElementById("total_price_order_entered_price");
    total_price_order.value = 0;
    total_price_order_entered_price.value=0;
    while (j < leng) {
        var quentity = document.getElementById("quantity_order_history" + j).value;

        var id = (document.getElementById("in_" + j).value);
var price=(document.getElementById("price_peace" + j).value);
        if (quentity.length != 0 && id.length != 0 && price.length!=0) {
            whil(id, quentity);
            var a = parseInt(total_price_order_entered_price.value);
            total_price_order_entered_price.value = price * quentity + a;
        }
        j++;
    }
}

function whil(id, quentity) {
    if (window.XMLHttpRequest) {//start ajax code
        ajax = new XMLHttpRequest();
    } else {
        ajax = new ActiveXObject("Microsoft.XMLHTTP");
    }



    ajax.onreadystatechange = function () {

        if (this.readyState == 4 && this.status == 200) {

            myjson = JSON.parse(this.responseText);
            if (myjson[0].price != null) {
            
                var a = parseInt(total_price_order.value);;
                total_price_order.value = myjson[0]["price"] * quentity + a;



            }

        }
    }
    ajax.open("GET", "./phpDB/getSellingOperationTptalPrice.php?id=" + id, true);
    ajax.send();



}
function sellingOperation_between_dates() {

    var i = 0;
    var html;
    var myjson;
    document.getElementById("selling_history").innerHTML = "";
    var date_start = document.getElementById("date_start");
    var date_end = document.getElementById("date_end");
    var myjson;

    if (date_start.value.length == 0 || date_end.value.length == 0) {
        alert("الرجاء ملئ تاريخ البداية والانتهاء");
    }
    else {
        var formdata = new FormData();
        formdata.append("date_start", date_start.value);
        formdata.append("date_end", date_end.value);
        if (window.XMLHttpRequest) {//start ajax code
            ajax = new XMLHttpRequest();
        } else {
            ajax = new ActiveXObject("Microsoft.XMLHTTP");
        }

        ajax.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                if (this.responseText !== "no data found") {
                    myjson = JSON.parse(this.responseText);

                    while (myjson[i].name != null) {
                        html = ' <tr role="alert"> <td>' + myjson[i].employee + '</td> <td>' + myjson[i].date + '</td> <td>' + myjson[i].payed_price + '</td>  <td>' + myjson[i].customer + '</td>   <td>' + myjson[i].quantity + '</td> <td>' + myjson[i].total_payed + '</td> <td>' + myjson[i].payed_price_each_Good + '</td> <td>' + myjson[i].name + '</td>   </tr>';
                        document.getElementById("selling_history").innerHTML += html;
                        i++;


                    }
                } else {
                    alert("لا يوجد مبيعات بهذه التواريخ")
                }
            }
        }
        ajax.open("POST", "./phpDB/sellingOperation_between_dates.php?q=", true);
        ajax.send(formdata);

    }
}
function clear_fields() {
    document.getElementById("date_start").value = "";
    document.getElementById("date_end").value = "";
    sellingOperation();
}

function sellingOperationPassedOnCustomerName() {
    var i = 0;
    var html;
    var myjson;
    var customer_name = document.getElementById("in_customer_name");
    if (window.XMLHttpRequest) {//start ajax code
        ajax = new XMLHttpRequest();
    } else {
        ajax = new ActiveXObject("Microsoft.XMLHTTP");
    }
    var formdata = new FormData();
    formdata.append("name", customer_name.value);
    ajax.onreadystatechange = function () {

        if (this.readyState == 4 && this.status == 200) {
            if (this.responseText !== "no data found") {
                myjson = JSON.parse(this.responseText);

                if (myjson[i].dept != null) {
                    document.getElementById("customer_name_dept").value = myjson[i]["dept"];
                    document.getElementById("customer_name_payed").value = myjson[i]["payed"];

                    i++;


                }
            }
        }
    }
    ajax.open("POST", "./phpDB/getSellingOperationForCustomer.php?q=", true);
    ajax.send(formdata);

}
function getCustomer() {
    var i = 0;
    var j = 0;
    var html;
    var father = document.getElementById("datalist_customer");

    var myjson;
    if (window.XMLHttpRequest) {//start ajax code
        ajax = new XMLHttpRequest();
    } else {
        ajax = new ActiveXObject("Microsoft.XMLHTTP");
    }

    ajax.onreadystatechange = function () {

        if (this.readyState == 4 && this.status == 200) {
            if (this.responseText !== "no data found") {
                myjson = JSON.parse(this.responseText);


                while (myjson[i].name != null) {
                    html = ' <option  title="baraa omar" value=' + myjson[i].id + ' >' + myjson[i].name +' '+myjson[i].phone+ '</option>';

                   // document.getElementById("datalist_order").innerHTML += html;
                    document.getElementById("datalist_customer").innerHTML += html;

                    i++;
                }


            }
        }
    }
    ajax.open("GET", "./phpDB/customers.php?q=", true);
    ajax.send();
}
getCustomer();
function sellingPassedOnCustomerName() {
    var i = 0;
    var html;
    var myjson;
    var customer_name = document.getElementById("in_customer_name");
    if(customer_name.value.length==0){
        sellingOperation();
    }else{
    if (window.XMLHttpRequest) {//start ajax code
        ajax = new XMLHttpRequest();
    } else {
        ajax = new ActiveXObject("Microsoft.XMLHTTP");
    }
    var formdata = new FormData();
    formdata.append("name", customer_name.value);
    ajax.onreadystatechange = function () {
        document.getElementById("selling_history").innerHTML = "";
        if (this.readyState == 4 && this.status == 200) {
            if (this.responseText !== "no data found") {
                myjson = JSON.parse(this.responseText);

                while (myjson[i].date != null) {
                    html = ' <tr role="alert"> <td>' + myjson[i].employee + '</td> <td>' + myjson[i].date + '</td> <td>' + myjson[i].payed_price + '</td>  <td>' + myjson[i].customer + '</td>   <td>' + myjson[i].quantity + '</td> <td>' + myjson[i].total_payed + '</td> <td>' + myjson[i].payed_price_each_Good + '</td> <td>' + myjson[i].payed_price + '</td> <td>' + myjson[i].name + '</td>   </tr>';
                    document.getElementById("selling_history").innerHTML += html;

                    i++;


                }
            }
        }
    }
    ajax.open("POST", "./phpDB/sellingCustomer.php?q=", true);
    ajax.send(formdata);
}
}
function orderDetails() {
    var i = 0;
    var html;
    var myjson;
    var customer_name = document.getElementById("in_customer_order");
    if (window.XMLHttpRequest) {//start ajax code
        ajax = new XMLHttpRequest();
    } else {
        ajax = new ActiveXObject("Microsoft.XMLHTTP");
    }
    var formdata = new FormData();
    formdata.append("name", customer_name.value);
    ajax.onreadystatechange = function () {
        document.getElementById("selling_history").innerHTML = "";
        if (this.readyState == 4 && this.status == 200) {
            if (this.responseText !== "no data found") {
                myjson = JSON.parse(this.responseText);

                while (myjson[i].date != null) {
                    // html = ' <tr role="alert"> <td>' + myjson[i].employee + '</td> <td>' + myjson[i].date + '</td> <td>' + myjson[i].payed_price + '</td>  <td>' + myjson[i].customer + '</td>   <td>' + myjson[i].quantity + '</td> <td>' + myjson[i].total_payed + '</td> <td>' + myjson[i].payed_price_each_Good + '</td> <td>' + myjson[i].name + '</td>   </tr>';
                    html = ' <option  value=' + myjson[i].id + ' >' + myjson[i].name +' '+ myjson[i].phone +'</option>';

                    document.getElementById("datalist_order").innerHTML += html;
                    //document.getElementById("selling_history").innerHTML += html;

                    i++;


                }
            }
        }
    }
    ajax.open("POST", "./phpDB/searchOnOrdersDetails.php?q=", true);
    ajax.send(formdata);
}
