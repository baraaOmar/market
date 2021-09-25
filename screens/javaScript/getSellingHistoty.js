//const { ajax } = require("jquery");

//sellingOperation();
function sellingOperation(id) {
    var i = 0;
    var html;
    var myjson;var ajax;
    document.getElementById("selling_history").innerHTML = "";
    if (window.XMLHttpRequest) {//start ajax code
        ajax = new XMLHttpRequest();
    } else {
        ajax = new ActiveXObject("Microsoft.XMLHTTP");
    }
    var formData = new FormData();
    formData.append("id", id);

    ajax.onreadystatechange = function () {

        if (this.readyState == 4 && this.status == 200) {
            if (this.responseText !== "no data found") {
                myjson = JSON.parse(this.responseText);

                while (i < myjson.length) {


                    $('#selling_history').append('<tr  role="alert">'
                        + '<td>  <button data-toggle="modal"  data-target="#exampleModal_order_back" onclick="clk(\'' + myjson[i].sell_id + '\',\'' + myjson[i].good_id + '\',\'' + myjson[i].name + '\');setMaxReturnedQ(\'' +(myjson[i].quantity-myjson[i].back_Q) + '\')" style="background-color: yellow;border: none;border-radius: 10%;" type="button" >اضافة كمية راجعة</button> </td> ' +
                        '<td>' + myjson[i].employee + '</td>' +
                        ' <td>' + myjson[i].date + '</td>' + '<td>'
                        + myjson[i].customer + '</td> ' +
                        ' <td>' + myjson[i].quantity + '</td>' +
                        ' <td>' + myjson[i].profit + '</td>' +
                        ' <td>' + myjson[i].total_payed_real + '</td>' +
                        ' <td>' + myjson[i].payed_price_each_Good + '</td>' +
                        ' <td>' + myjson[i].back_Q + '</td> ' +
                        '  <td>' + myjson[i].name + '</td>'

                    )
                    i++;
                }
            }
        }
    }
    ajax.open("POST", "./phpDB/SellingOperation.php?q=", true);
    ajax.send(formData);

}
function clk(a, b, c) {
    document.getElementById("good_order_back").value = c;

    document.getElementById("add_back_order").value = a;
}
function getsellingOperationTotalPrice() {

    var a = 0;
    var b = 0;

    var total_price_order_entered_price = document.getElementById("total_price_order_entered_price");
    var real = document.getElementById("total_price_order");
    real.value=0;
    total_price_order_entered_price.value=0;
    var i = 0
    for (var i = 0, row = table.rows[i]; i < table.rows.length; i++) {
        var x = i + 1;

        var quantity = document.querySelector("#myTable > tbody > tr:nth-child(" + x + ") > td:nth-child(3)  > input")

        var price = document.querySelector("#myTable > tbody > tr:nth-child(" + x + ") > td:nth-child(4)  > input")
        var id = document.querySelector("#myTable > tbody > tr:nth-child(" + x + ") > td:nth-child(2) > div > select");//.value;

        if (quantity.value.length != 0 && price.value.length != 0) {
            //alert(id.value+" "+price.value+" "+quantity.value);
       
            a += price.value * quantity.value;
            total_price_order_entered_price.value = a;
        }
        if (quantity.value.length != 0)
          { var v = whil(id, quantity);
            b += v;
          
            real.value = b;
        }


          
        

    }

}

function whil(id, quantity) {

    var ajax; var res;
    if (window.XMLHttpRequest) {//start ajax code
        ajax = new XMLHttpRequest();
    } else {
        ajax = new ActiveXObject("Microsoft.XMLHTTP");
    }


    var formData = new FormData();
    formData.append("id", id.value);
    ajax.onreadystatechange = function () {

        if (this.readyState == 4 && this.status == 200) {

            myjson = JSON.parse(this.responseText);
            if (myjson[0].price != null) {

                res = (myjson[0]["price"] * quantity.value);
            }

        }
    }
    ajax.open("POST", "./phpDB/getSellingOperationTptalPrice.php", false);
    ajax.send(formData);
    return res;

}


function sellingOperation_between_dates() {

    var i = 0;
    var html;
    var myjson;
    document.getElementById("selling_history").innerHTML = "";
    var date_start = document.getElementById("date_start");
    var date_end = document.getElementById("date_end");
    var myjson;
    var current_datetime = new Date(date_start.value);
    var formatted_date_start = current_datetime.getFullYear() + "/" + (current_datetime.getMonth() + 1) + "/" + current_datetime.getDate();
    current_datetime = new Date(date_end.value);
    formatted_date_end = current_datetime.getFullYear() + "/" + (current_datetime.getMonth() + 1) + "/" + current_datetime.getDate();


    if (date_start.value.length == 0 || date_end.value.length == 0) {
        alert("الرجاء ملئ تاريخ البداية والانتهاء");
    }
    else {
        var formdata = new FormData();
        formdata.append("date_start", formatted_date_start);
        formdata.append("date_end", formatted_date_end);
        if (window.XMLHttpRequest) {//start ajax code
            ajax = new XMLHttpRequest();
        } else {
            ajax = new ActiveXObject("Microsoft.XMLHTTP");
        }

        ajax.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                alert(this.responseText);

                if (this.responseText !== "no data found") {
                    myjson = JSON.parse(this.responseText);

                    while (i < myjson.length) {

                        i++;
                        $('#selling_history').append('<tr  role="alert">'
                            + '<td>  <button data-toggle="modal" data-target="#exampleModal_order_back" onclick="clk(\'' + myjson[i].order + '\',\'' + myjson[i].good_id + '\',\'' + myjson[i].name + '\')" style="background-color: yellow;border: none;border-radius: 10%;" type="button" >اضافة كمية راجعة</button> </td> ' +
                            '<td>' + myjson[i].employee + '</td>' +
                            ' <td>' + myjson[i].date + '</td>' + '<td>'
                            + myjson[i].customer + '</td> ' +
                            ' <td>' + myjson[i].quantity + '</td>' +
                            ' <td>' + myjson[i].profit + '</td>' +
                            ' <td>' + myjson[i].total_payed_real + '</td>' +
                            ' <td>' + myjson[i].payed_price_each_Good + '</td>' +
                            ' <td>' + myjson[i].back_Q + '</td> ' +
                            '  <td>' + myjson[i].name + '</td>'

                        )

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

                while (i < myjson.length) {
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

                while (i < myjson.length - 1) {
                    html = ' <option   value=' + myjson[i].id + ' >' + myjson[i].name + ' ' + myjson[i].phone + '</option>';
                    //  document.getElementById("in_customer_name").innerHTML += html;

                    i++;
                }
                if (i == myjson.length - 1) {
                    html = ' <option   value=' + myjson[i].id + ' >' + myjson[i].name + ' ' + myjson[i].phone + '</option>';
                    //   document.getElementById("in_customer_name").innerHTML += html;
                    //    $(".selectpicker").selectpicker('refresh');

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
    if (customer_name.value.length == 0) {
        sellingOperation();
    } else {
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

                    while (i < myjson.length) {

                        i++;
                        $('#selling_history').append('<tr  role="alert">'
                            + '<td>  <button data-toggle="modal" data-target="#exampleModal_order_back" onclick="clk(\'' + myjson[i].order + '\',\'' + myjson[i].good_id + '\',\'' + myjson[i].name + '\')" style="background-color: yellow;border: none;border-radius: 10%;" type="button" >اضافة كمية راجعة</button> </td> ' +
                            '<td>' + myjson[i].employee + '</td>' +
                            ' <td>' + myjson[i].date + '</td>' + '<td>'
                            + myjson[i].customer + '</td> ' +
                            ' <td>' + myjson[i].quantity + '</td>' +
                            ' <td>' + myjson[i].profit + '</td>' +
                            ' <td>' + myjson[i].total_payed_real + '</td>' +
                            ' <td>' + myjson[i].payed_price_each_Good + '</td>' +
                            ' <td>' + myjson[i].back_Q + '</td> ' +
                            '  <td>' + myjson[i].name + '</td>'

                        )

                    }
                }
            }
        }
        ajax.open("POST", "./phpDB/sellingCustomer.php", true);
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

                while (i < myjson.length) {
                    // html = ' <tr role="alert"> <td>' + myjson[i].employee + '</td> <td>' + myjson[i].date + '</td> <td>' + myjson[i].payed_price + '</td>  <td>' + myjson[i].customer + '</td>   <td>' + myjson[i].quantity + '</td> <td>' + myjson[i].total_payed + '</td> <td>' + myjson[i].payed_price_each_Good + '</td> <td>' + myjson[i].name + '</td>   </tr>';
                    html = ' <option  value=' + myjson[i].id + ' >' + myjson[i].name + ' ' + myjson[i].phone + '</option>';

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
function setMaxReturnedQ(quantity){
document.getElementById("quantity_order_back").max=quantity;
}