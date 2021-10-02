function addImportCashPaymants(import_id) {
    var payment = document.getElementById("payment_cash");
    var date = document.getElementById("date_cash");
    var id = document.getElementById("add_payment_cash");
   // var coinsType=document.getElementById("cash_coin_type");
    var pay_type=document.getElementById("pay_type");
    var formdata = new FormData();
    formdata.append("payment", payment.value);
    formdata.append("date", date.value);
    formdata.append("id", id.value);
 //   formdata.append("coinsType", coinsType.value);

    if (date.value.length == 0 || payment.value.length == 0 || id.value.length == 0) {
        alert("الرجاء ملئ جميع الحقول");
    } else {
        if (window.XMLHttpRequest) {//start ajax code
            ajax = new XMLHttpRequest();
        } else {
            ajax = new ActiveXObject("Microsoft.XMLHTTP");
        }



        ajax.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                if (this.responseText !== "there is aproblem  in this process") {
                    alert("تم اضافة العملية بنجاح");

                }
                else {
                    //  document.getElementById("text_warning").innerText="there is aproblem  in this process";
                    alert("يوجد هنالك مشكلة يرجى المحاولة مرة اخرى");
                }
            }

        }
        ajax.open("POST", "./phpDB/add_import_cash_pay.php", true);
        ajax.send(formdata);

    }

}
function addImportChequePaymants(import_id) {
    var payment = document.getElementById("payment_cheque");
  
    var id = document.getElementById("add_payment_cheque");
    var coinsType=document.getElementById("cheque_coin_type");
  //  var pay_type=document.getElementById("pay_type");
    var from=document.getElementById("cheque_from");
    var to=document.getElementById("cheque_to");
    var date=document.getElementById("cheque_date");
    var cheque_due_date=document.getElementById("cheque_due_date");
    var cheque_number=document.getElementById("number_cheque");
    var formdata = new FormData();
    formdata.append("payment", payment.value);
    formdata.append("date", date.value);
    formdata.append("id", id.value);
 //   formdata.append("coinsType", coinsType.value);
  //  formdata.append("pay_type", pay_type.value);
    formdata.append("from", from.value);
    formdata.append("to", to.value);
    formdata.append("cheque_due_date", cheque_due_date.value);
    formdata.append("cheque_number", cheque_number.value);

    if (date.value.length == 0 || payment.value.length == 0 || id.value.length == 0||
      from.value.length == 0 || to.value.length == 0||cheque_due_date.value.length==0
        ||cheque_number.value.length==0) {
        alert("الرجاء ملئ جميع الحقول");
    } else {
        if (window.XMLHttpRequest) {//start ajax code
            ajax = new XMLHttpRequest();
        } else {
            ajax = new ActiveXObject("Microsoft.XMLHTTP");
        }



        ajax.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                if (this.responseText !== "there is aproblem  in this process") {
                    alert("تم اضافة العملية بنجاح");

                }
                else {
                    //  document.getElementById("text_warning").innerText="there is aproblem  in this process";
                    alert("يوجد هنالك مشكلة يرجى المحاولة مرة اخرى");
                }
            }

        }
        ajax.open("POST", "./phpDB/add_import_cheque_pay.php", true);
        ajax.send(formdata);

    }

}
function addImportBankPaymants(import_id) {
    var payment = document.getElementById("bank_pay");
  
    var id = document.getElementById("add_payment_bank");
  //  var coinsType=document.getElementById("bank_coin_type");
  //  var pay_type=document.getElementById("pay_type");
    var from=document.getElementById("bank_pay_from");
    var to=document.getElementById("bank_pay_to");
    var date=document.getElementById("date_bank_pay");
  
    var formdata = new FormData();
    formdata.append("payment", payment.value);
    formdata.append("date", date.value);
    formdata.append("id", id.value);
    //formdata.append("coinsType", coinsType.value);
    formdata.append("from", from.value);
    formdata.append("to", to.value);
    
    if (date.value.length == 0 || payment.value.length == 0 || id.value.length == 0||
      from.value.length == 0 || to.value.length == 0) {
        alert("الرجاء ملئ جميع الحقول");
    } else {
        if (window.XMLHttpRequest) {//start ajax code
            ajax = new XMLHttpRequest();
        } else {
            ajax = new ActiveXObject("Microsoft.XMLHTTP");
        }



        ajax.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                if (this.responseText !== "there is aproblem  in this process") {
                    alert("تم اضافة العملية بنجاح");

                }
                else {
                    //  document.getElementById("text_warning").innerText="there is aproblem  in this process";
                    alert("يوجد هنالك مشكلة يرجى المحاولة مرة اخرى");
                }
            }

        }
        ajax.open("POST", "./phpDB/add_import_bank_pay.php", true);
        ajax.send(formdata);

    }

}