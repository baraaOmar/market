
getOrders();
function getOrders() {
    var i = 0;
    var html;
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

                while (i < myjson.length) {
if( myjson[i].debt_selling>0){
                    var payment = ' <td>    <div  style="text-align-last: center;align-self: center;" class="dropdown  form-group col-md-6   right_input">            <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">        طريقة الدفع                  </button>     <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">               <a onclick="addPaySetIdOrder(\'add_payment_bank_givenOrder\',\'' + myjson[i].id + '\')" class="dropdown-item" data-toggle="modal" data-target="#bankModal_givenOrder">تحويل بنك</a>     <a onclick="addPaySetIdOrder(\'add_payment_cheque_givenOrder\',\'' + myjson[i].id + '\')" class="dropdown-item" data-toggle="modal" data-target="#chequeModal_givenOrder" >شيكات</a>  <a onclick="addPaySetIdOrder(\'add_payment_cash_givenOrder\',\'' + myjson[i].id + '\')" class="dropdown-item" data-toggle="modal" data-target="#cashModal_givenOrder">كاش</a> </div>   </div> </td>  ';
                    var history = ' <td> <label class="switch"> <input  onclick="showPayDiv(this,' + myjson[i].id + ')" type="checkbox"> <span class="slider round"></span> </label>  </td>';
                    var details='<td> <input type="checkbox"  onclick="sellingOperation(' + myjson[i].id + ')">  </td>';
                    $('#dept_history').append('<tr  role="alert">'
                        + history
                     
                        + ' <td>' + myjson[i].date + '</td>'
                        + '<td>' + myjson[i].customer_name + '</td>'
                        + '<td>' + myjson[i].phone + '</td>'
                        + '<td>' + myjson[i].profit + '</td> ' +
                        ' <td>' + myjson[i].price + '</td>' +
                        ' <td>' + myjson[i].selling_day + '</td>' +
                        ' <td>' + myjson[i].debt_selling + '</td>'+
                        details
                    )}
                    i++;
                }
            }
        }
    }
    ajax.open("GET", "./phpDB/deptHistory.php", true);
    ajax.send();

}
function getOrdersBetween2dates() {
  
    var i = 0;
    var html;
    var myjson;
    document.getElementById("dept_history").innerHTML = "";
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
      
  
    var i = 0;
    var html;
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

                while (i < myjson.length) {
                    if( myjson[i].debt_selling>0){
                    var payment = ' <td>    <div  style="text-align-last: center;align-self: center;" class="dropdown  form-group col-md-6   right_input">            <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">        طريقة الدفع                  </button>     <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">               <a onclick="addPaySetIdOrder(\'add_payment_bank_givenOrder\',\'' + myjson[i].id + '\')" class="dropdown-item" data-toggle="modal" data-target="#bankModal_givenOrder">تحويل بنك</a>     <a onclick="addPaySetIdOrder(\'add_payment_cheque_givenOrder\',\'' + myjson[i].id + '\')" class="dropdown-item" data-toggle="modal" data-target="#chequeModal_givenOrder" >شيكات</a>  <a onclick="addPaySetIdOrder(\'add_payment_cash_givenOrder\',\'' + myjson[i].id + '\')" class="dropdown-item" data-toggle="modal" data-target="#cashModal_givenOrder">كاش</a> </div>   </div> </td>  ';
                    var history = ' <td> <label class="switch"> <input  onclick="showPayDiv(this,' + myjson[i].id + ')" type="checkbox"> <span class="slider round"></span> </label>  </td>';
                    var details='<td> <input type="checkbox"  onclick="sellingOperation(' + myjson[i].id + ')">  </td>';
                    $('#dept_history').append('<tr  role="alert">'
                        + history
                       
                        + ' <td>' + myjson[i].date + '</td>'
                        + '<td>' + myjson[i].customer_name + '</td>'
                        + '<td>' + myjson[i].phone + '</td>'
                        + '<td>' + myjson[i].profit + '</td> ' +
                        ' <td>' + myjson[i].price + '</td>' +
                        ' <td>' + myjson[i].selling_day + '</td>' +
                        ' <td>' + myjson[i].debt_selling + '</td>'+
                        details
                    )}
                    i++;
                }
            }
        }
    }
    ajax.open("POST", "./phpDB/deptHistoryBetween2dates.php", true);
    ajax.send(formdata);

}}
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