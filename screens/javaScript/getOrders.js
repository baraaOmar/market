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

                    var payment = ' <td>    <div  style="text-align-last: center;align-self: center;" class="dropdown  form-group col-md-6   right_input">            <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">        طريقة الدفع                  </button>     <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">               <a onclick="addPaySetIdOrder(\'add_payment_bank_givenOrder\',\'' + myjson[i].id + '\')" class="dropdown-item" data-toggle="modal" data-target="#bankModal_givenOrder">تحويل بنك</a>     <a onclick="addPaySetIdOrder(\'add_payment_cheque_givenOrder\',\'' + myjson[i].id + '\')" class="dropdown-item" data-toggle="modal" data-target="#chequeModal_givenOrder" >شيكات</a>  <a onclick="addPaySetIdOrder(\'add_payment_cash_givenOrder\',\'' + myjson[i].id + '\')" class="dropdown-item" data-toggle="modal" data-target="#cashModal_givenOrder">كاش</a> </div>   </div> </td>  ';
                    var history = ' <td> <label class="switch"> <input  onclick="showPayDiv(this,' + myjson[i].id + ')" type="checkbox"> <span class="slider round"></span> </label>  </td>';
                    var details='<td> <input type="checkbox"  onclick="sellingOperation(' + myjson[i].id + ')">  </td>';
                    $('#orders_history').append('<tr  role="alert">'
                        + history
                        + payment
                        + ' <td>' + myjson[i].date + '</td>'
                        + '<td>' + myjson[i].customer_name + '</td>'
                        + '<td>' + myjson[i].phone + '</td>'
                        + '<td>' + myjson[i].profit + '</td> ' +
                        ' <td>' + myjson[i].price + '</td>' +
                        ' <td>' + myjson[i].selling_day + '</td>' +
                        ' <td>' + myjson[i].debt_selling + '</td>'+
                        details
                    )
                    i++;
                }
            }
        }
    }
    ajax.open("GET", "./phpDB/ordersHistory.php", true);
    ajax.send();

}
function addPaySetIdOrder(type, id) {
    document.getElementById(type).value = id;
    cashPayments(id);
    bankPayments(id);
    chequePayments(id);

}
function clear_fields() {
    document.getElementById("date_start").value = "";
    document.getElementById("date_end").value = "";
    getOrders();
}
function addCashGivenOrderId() {
    var payment = document.getElementById("payment_cash_givenOrder");
    var date = document.getElementById("date_cash_givenOrder");
    var id = document.getElementById("add_payment_cash_givenOrder");
    var pay_type = document.getElementById("pay_type");

    if (date.value.length == 0 || payment.value.length == 0 || id.value.length == 0) {
        alert("الرجاء ملئ جميع الحقول");
    }


    else {
        cashFormData = new FormData();
        cashFormData.append("payment", payment.value);
        cashFormData.append("date", date.value);
        cashFormData.append("id", id.value);
        // cashFormData.append("coinsType", coinsType.value);
        if (window.XMLHttpRequest) {//start ajax code
            ajax = new XMLHttpRequest();
        } else {
            ajax = new ActiveXObject("Microsoft.XMLHTTP");
        }



        ajax.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                if (this.responseText !== "there is aproblem in this process") {
                    alert("تم اضافة العملية بنجاح");

                }
                else {
                    //  document.getElementById("text_warning").innerText="there is aproblem  in this process";
                    alert("يوجد هنالك مشكلة يرجى المحاولة مرة اخرى");
                }
            }

        }
        ajax.open("POST", "./phpDB/add_order_cash_pay.php", true);
        ajax.send(cashFormData);

    }
}
function addBankGivenOrderId() {
    var payment = document.getElementById("bank_pay_givenOrder");
    var id = document.getElementById("add_payment_bank_givenOrder");
    var from = document.getElementById("bank_pay_from_givenOrder");
    var to = document.getElementById("bank_pay_to_givenOrder");
    var date = document.getElementById("date_bank_pay_givenOrder");


    if (date.value.length == 0 || payment.value.length == 0 ||
        from.value.length == 0 || to.value.length == 0 || id.value.length == 0) {
        alert("الرجاء ملئ جميع الحقول");
    }

    else {
        Bankformdata = new FormData();
        Bankformdata.append("payment", payment.value);
        Bankformdata.append("date", date.value);
        Bankformdata.append("id", id.value);
        // Bankformdata.append("coinsType", coinsType.value);
        Bankformdata.append("from", from.value);
        Bankformdata.append("to", to.value);

        if (window.XMLHttpRequest) {//start ajax code
            ajax = new XMLHttpRequest();
        } else {
            ajax = new ActiveXObject("Microsoft.XMLHTTP");
        }



        ajax.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                if (this.responseText !== "there is aproblem in this process") {
                    alert("تم اضافة العملية بنجاح");

                }
                else {
                    //  document.getElementById("text_warning").innerText="there is aproblem  in this process";
                    alert("يوجد هنالك مشكلة يرجى المحاولة مرة اخرى");
                }
            }

        }
        ajax.open("POST", "./phpDB/add_bank_bank_pay.php", true);
        ajax.send(Bankformdata);

    }
}
function addChequeGivenOrderId() {
    var payment = document.getElementById("payment_cheque_givenOrder");

    var id = document.getElementById("add_payment_cheque_givenOrder");
    var from = document.getElementById("cheque_from_givenOrder");
    var to = document.getElementById("cheque_to_givenOrder");
    var date = document.getElementById("cheque_date_givenOrder");
    var cheque_due_date = document.getElementById("cheque_due_date_givenOrder");
    var cheque_number = document.getElementById("number_cheque_givenOrder");


    if (date.value.length == 0 || payment.value.length == 0 ||
        from.value.length == 0 || to.value.length == 0 || cheque_due_date.value.length == 0
        || cheque_number.value.length == 0 || id.value.length==0) {
        alert("الرجاء ملئ جميع الحقول");
    }
    else {
        Chequeformdata = new FormData();
        Chequeformdata.append("payment", payment.value);
        Chequeformdata.append("date", date.value);
        Chequeformdata.append("id", id.value);
      
        Chequeformdata.append("from", from.value);
        Chequeformdata.append("to", to.value);
        Chequeformdata.append("cheque_due_date", cheque_due_date.value);
        Chequeformdata.append("cheque_number", cheque_number.value);
        if (window.XMLHttpRequest) {//start ajax code
            ajax = new XMLHttpRequest();
        } else {
            ajax = new ActiveXObject("Microsoft.XMLHTTP");
        }



        ajax.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                if (this.responseText !== "there is aproblem in this process") {
                    alert("تم اضافة العملية بنجاح");

                }
                else {
                    //  document.getElementById("text_warning").innerText="there is aproblem  in this process";
                    alert("يوجد هنالك مشكلة يرجى المحاولة مرة اخرى");
                }
            }

        }
        ajax.open("POST", "./phpDB/add_order_cheque_pay.php", true);
        ajax.send(Chequeformdata);

    }
}
function getOrdersBetween2dates() {
  
    var i = 0;
    var html;
    var myjson;
    document.getElementById("orders_history").innerHTML = "";
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
        if(date_start.value > date_end.value)
        {alert("الرجاء ادخال تاريخ الانتهاء اكبر من تاريخ البدء");}
      else { var formdata = new FormData();
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
            alert(this.responseText);
            if (this.responseText !== "no data found") {
                myjson = JSON.parse(this.responseText);

                while (i < myjson.length) {

                    var payment = ' <td>    <div  style="text-align-last: center;align-self: center;" class="dropdown  form-group col-md-6   right_input">            <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">        طريقة الدفع                  </button>     <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">               <a onclick="addPaySetIdOrder(\'add_payment_bank_givenOrder\',\'' + myjson[i].id + '\')" class="dropdown-item" data-toggle="modal" data-target="#bankModal_givenOrder">تحويل بنك</a>     <a onclick="addPaySetIdOrder(\'add_payment_cheque_givenOrder\',\'' + myjson[i].id + '\')" class="dropdown-item" data-toggle="modal" data-target="#chequeModal_givenOrder" >شيكات</a>  <a onclick="addPaySetIdOrder(\'add_payment_cash_givenOrder\',\'' + myjson[i].id + '\')" class="dropdown-item" data-toggle="modal" data-target="#cashModal_givenOrder">كاش</a> </div>   </div> </td>  ';
                    var history = ' <td> <label class="switch"> <input  onclick="showPayDiv(this,' + myjson[i].id + ')" type="checkbox"> <span class="slider round"></span> </label>  </td>';
                    var details='<td> <input type="checkbox"  onclick="sellingOperation(' + myjson[i].id + ')">  </td>';
                    $('#orders_history').append('<tr  role="alert">'
                        + history
                        + payment
                        + ' <td>' + myjson[i].date + '</td>'
                        + '<td>' + myjson[i].customer_name + '</td>'
                        + '<td>' + myjson[i].phone + '</td>'
                        + '<td>' + myjson[i].profit + '</td> ' +
                        ' <td>' + myjson[i].price + '</td>' +
                        ' <td>' + myjson[i].selling_day + '</td>' +
                        ' <td>' + myjson[i].debt_selling + '</td>'+
                        details
                    )
                    i++;
                }
            }
        }
    }
    ajax.open("POST", "./phpDB/ordersHistoryBetween2dates.php", true);
    ajax.send(formdata);

}}}