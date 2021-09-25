var Bankformdata;
var Chequeformdata ;
var cashFormData
function addSellingCashPaymants(import_id) {
    var payment = document.getElementById("payment_cash");
    var date = document.getElementById("date_cash");
    var id =1;// document.getElementById("add_payment_cash");
  //  var coinsType=document.getElementById("cash_coin_type");
    var pay_type=document.getElementById("pay_type");
   

    if (date.value.length == 0 || payment.value.length == 0 ) {
        alert("الرجاء ملئ جميع الحقول");
    }
    else{
        if(bank ||cheque){
            var txt;
            var r = confirm("لقد سبق ادخلت دفعة من نوع اخر سوف يتم الغائها وحفظ هذه الدفعة اذا كنت متاكد اكد طلبك");
            
            if (r == true) {
            
              cash=true;
              cashFormData = new FormData();
              cashFormData.append("payment", payment.value);
              cashFormData.append("date", date.value);
              cashFormData.append("id", id);
              Bankformdata=null;
              cheque_number=null;
              alert("تم حفظ دفعة الكاش بنجاح");
            } else {
              alert("تم الغاء دفعتك");
            }
        }
        else{
            cash=true;
            cashFormData = new FormData();
            cashFormData.append("payment", payment.value);
            cashFormData.append("date", date.value);
            cashFormData.append("id", id);
            Bankformdata=null;
            cheque_number=null;
            alert("تم حفظ دفعة الكاش بنجاح");
        }
        alert(Bankformdata+"  "+cashFormData.values());
      
      //  cashFormData.append("coinsType", coinsType.value);
    }
    
    /* else {
alert(date.value +"   "+payment.value+"   "+ id.value+"   "+coinsType.value);
        if (window.XMLHttpRequest) {//start ajax code
            ajax = new XMLHttpRequest();
        } else {
            ajax = new ActiveXObject("Microsoft.XMLHTTP");
        }



        ajax.onreadystatechange = function () {
alert(this.responseText);
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
        ajax.open("POST", "./phpDB/add_import_cash_pay.php", true);
        ajax.send(formdata);

    }
*/
}
function clearCashPaymantsFields(){
    var payment = document.getElementById("payment_cash").value="";
    var date = document.getElementById("date_cash").value="";
  
   
}
var cheque=false,bank=false,cash=false;
function addSellingChequePaymants(import_id) {
    var payment = document.getElementById("payment_cheque");
  
    var id = document.getElementById("add_payment_cheque");
 //   var coinsType=document.getElementById("cheque_coin_type");
  //  var pay_type=document.getElementById("pay_type");
    var from=document.getElementById("cheque_from");
    var to=document.getElementById("cheque_to");
    var date=document.getElementById("cheque_date");
    var cheque_due_date=document.getElementById("cheque_due_date");
    var cheque_number=document.getElementById("number_cheque");
  

    if (date.value.length == 0 || payment.value.length == 0 || 
      from.value.length == 0 || to.value.length == 0||cheque_due_date.value.length==0
        ||cheque_number.value.length==0) {
        alert("الرجاء ملئ جميع الحقول");
    }
    else{
        if(bank ||cash){
            var txt;
            var r = confirm("لقد سبق ادخلت دفعة من نوع اخر سوف يتم الغائها وحفظ هذه الدفعة اذا كنت متاكد اكد طلبك");
        
            if (r == true) {
            
        cheque=true;
        Chequeformdata = new FormData();
        Chequeformdata.append("payment", payment.value);
        Chequeformdata.append("date", date.value);
        Chequeformdata.append("id", id.value);
      //  Chequeformdata.append("coinsType", coinsType.value);
      //  formdata.append("pay_type", pay_type.value);
      Chequeformdata.append("from", from.value);
      Chequeformdata.append("to", to.value);
      Chequeformdata.append("cheque_due_date", cheque_due_date.value);
      Chequeformdata.append("cheque_number", cheque_number.value);
      alert("تم حفظ دفعة الشيك بنجاح");
    }
   else {
  alert("تم الغاء دفعتك");
}}else{
    cheque=true;
    Chequeformdata = new FormData();
    Chequeformdata.append("payment", payment.value);
    Chequeformdata.append("date", date.value);
    Chequeformdata.append("id", id.value);
  //  Chequeformdata.append("coinsType", coinsType.value);
  //  formdata.append("pay_type", pay_type.value);
  Chequeformdata.append("from", from.value);
  Chequeformdata.append("to", to.value);
  Chequeformdata.append("cheque_due_date", cheque_due_date.value);
  Chequeformdata.append("cheque_number", cheque_number.value);
  alert("تم حفظ دفعة الشيك بنجاح");
}


}
    /*else {
alert(date.value +"   "+payment.value+"   "+ id.value+"   "+coinsType.value);
        if (window.XMLHttpRequest) {//start ajax code
            ajax = new XMLHttpRequest();
        } else {
            ajax = new ActiveXObject("Microsoft.XMLHTTP");
        }



        ajax.onreadystatechange = function () {
alert(this.responseText);
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
        ajax.open("POST", "./phpDB/add_import_cheque_pay.php", true);
        ajax.send(formdata);

    }
*/
}
function clearChequePaymantsFields(){
    var payment = document.getElementById("payment_cheque").value="";
  
    var id = document.getElementById("add_payment_cheque").value="";
 //   var coinsType=document.getElementById("cheque_coin_type");
  //  var pay_type=document.getElementById("pay_type");
    var from=document.getElementById("cheque_from").value="";
    var to=document.getElementById("cheque_to").value="";
    var date=document.getElementById("cheque_date").value="";
    var cheque_due_date=document.getElementById("cheque_due_date").value="";
    var cheque_number=document.getElementById("number_cheque").value="";
     
}
function addSellingBankPaymants(import_id) {
    var payment = document.getElementById("bank_pay");
  
    var id = document.getElementById("add_payment_bank");
  //  var coinsType=document.getElementById("bank_coin_type");
  //  var pay_type=document.getElementById("pay_type");
    var from=document.getElementById("bank_pay_from");
    var to=document.getElementById("bank_pay_to");
    var date=document.getElementById("date_bank_pay");
  
   
    if (date.value.length == 0 || payment.value.length == 0 || 
      from.value.length == 0 || to.value.length == 0) {
        alert("الرجاء ملئ جميع الحقول");
    }
    
    else{
        if(bank ||cash){
            var txt;
            var r = confirm("لقد سبق ادخلت دفعة من نوع اخر سوف يتم الغائها وحفظ هذه الدفعة اذا كنت متاكد اكد طلبك");
        
            if (r == true) {
            
        bank=true;
        Bankformdata = new FormData();
        Bankformdata.append("payment", payment.value);
        Bankformdata.append("date", date.value);
        Bankformdata.append("id", id.value);
      //  Bankformdata.append("coinsType", coinsType.value);
        Bankformdata.append("from", from.value);
        Bankformdata.append("to", to.value);
        alert("تم حفظ دفعة البنك بنجاح");
    }else{
        alert("تم الغاء دفعتك"); 
    }
        }else{
            bank=true;
            Bankformdata = new FormData();
            Bankformdata.append("payment", payment.value);
            Bankformdata.append("date", date.value);
            Bankformdata.append("id", id.value);
          //  Bankformdata.append("coinsType", coinsType.value);
            Bankformdata.append("from", from.value);
            Bankformdata.append("to", to.value);
            alert("تم حفظ دفعة البنك بنجاح");
        }
}
    /* else {
alert(date.value +"   "+payment.value+"   "+ id.value+"   "+coinsType.value);
        if (window.XMLHttpRequest) {//start ajax code
            ajax = new XMLHttpRequest();
        } else {
            ajax = new ActiveXObject("Microsoft.XMLHTTP");
        }



        ajax.onreadystatechange = function () {
alert(this.responseText);
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
        ajax.open("POST", "./phpDB/add_import_bank_pay.php", true);
        ajax.send(formdata);

    }
*/
}
function  clearBankPaymantsFields(){
    var payment = document.getElementById("bank_pay").value="";
  
    var id = document.getElementById("add_payment_bank").value="";
 
    var from=document.getElementById("bank_pay_from").value="";
    var to=document.getElementById("bank_pay_to").value="";
    var date=document.getElementById("date_bank_pay").value="";
}
function addOrder() {
    var   TokenFormData=new FormData();
    var to="addOrder";
    var ajax;
    if(cashFormData!=null){
        TokenFormData=cashFormData;
        to="add_selling_cash_pay";
    }
    else if(Chequeformdata!=null){
TokenFormData=Chequeformdata;
to="add_selling_cheque_pay";
    }
    else if(Bankformdata!=null){
        TokenFormData=Bankformdata;
        to="add_selling_bank_pay";
            }
    var name = document.getElementById("customer_name");
    var phone = document.getElementById("customer_phone");
    var date = document.getElementById("date_order");
    var total_price = document.getElementById("total_price_order");
    var total_payed_real=document.getElementById("total_price_order_entered_price");
  //  var payed_order = document.getElementById("payed_order");

  //  var formdata = new FormData();
    TokenFormData.append("name", name.value);
    TokenFormData.append("phone", phone.value);
  //  formdata.append("payed_order", payed_order.value);
  TokenFormData.append("total_price", total_price.value);
  TokenFormData.append("date_order", date.value);
  TokenFormData.append("total_payed_real", total_payed_real.value);
    {

        if (window.XMLHttpRequest) {//start ajax code
            ajax = new XMLHttpRequest();
        } else {
            ajax = new ActiveXObject("Microsoft.XMLHTTP");
        }



        ajax.onreadystatechange = function () {

            if (this.readyState == 4 && this.status == 200) {
                if (this.responseText !== "there is aproblem in this process") {
                    // document.getElementById("text_warning").innerText="done";
                    order_id = this.responseText;
                }
                else {
                    //  document.getElementById("text_warning").innerText="there is aproblem  in this process";
                    alert("يوجد هنالك مشكلة يرجى المحاولة مرة اخرى");
                }
            }

        }
        ajax.open("POST", "./phpDB/"+to+".php", false);
        ajax.send(TokenFormData);

    }

}
function addSellingOperation() {
 
   var ajax;
    var i = 0;
    var html;
    var myjson;
    var date = document.getElementById("date_order");
    var total_price = document.getElementById("total_price_order");

 //   var payed_order = document.getElementById("payed_order");

    var leng = document.querySelector("#myTable > tbody").childElementCount;
    var j = 0;


    var table = document.getElementById("myTable");
   

    if ( date.value.length == 0 || total_price.value.length == 0) {
        alert("يرجى ملئ جميع الحقول لاضافة عملية بيع جديدة")
    } else {
        addOrder();

        for (var i = 0,  row = table.rows[i]; i < table.rows.length ;i++) {
           // var x = row.cells[3].childNodes[1].value;
            var quantity = row.cells[2].childNodes[1];//.value;
            var price = row.cells[3].childNodes[1];//.value;
            var x=i+1;
            var id = document.querySelector("#myTable > tbody > tr:nth-child("+x+") > td:nth-child(2) > div > select");//.value;
       
            var formdata = new FormData();
            formdata.append("id", id.value);
            formdata.append("order_id", order_id);
            formdata.append("quantity", quantity.value);
          
            formdata.append("price_peace", price.value);
            if (id.value.length != 0 && quantity.value.length != 0 && price.value.length != 0) {
                if (window.XMLHttpRequest) {//start ajax code
                    ajax = new XMLHttpRequest();
                } else {
                    ajax = new ActiveXObject("Microsoft.XMLHTTP");
                }



                ajax.onreadystatechange = function () {
                    if (this.readyState == 4 && this.status == 200) {

                        if (this.responseText !== "there is aproblem in this process") {
                            // document.getElementById("text_warning").innerText="done";
                            alert("تمت اضافة الطلبية بنجاح");
                            
                        }
                        else {
                            //  document.getElementById("text_warning").innerText="there is aproblem  in this process";
                            alert("يوجد هنالك مشكلة يرجى المحاولة مرة اخرى");
                        }
                    }

                }
                ajax.open("POST", "./phpDB/addSellingOperation.php", false);
                ajax.send(formdata);

            }
            j++;
        }
    }
}
function addCashGivenOrder(){
    var payment = document.getElementById("payment_cash");
    var date = document.getElementById("date_cash");
    var id=document.getElementById("in_customer_name");
  //  var coinsType=document.getElementById("cash_coin_type");
    var pay_type=document.getElementById("pay_type");
   

    if (date.value.length == 0 || payment.value.length == 0 ) {
        alert("الرجاء ملئ جميع الحقول");
    }
   
    
     else {
        cashFormData = new FormData();
        cashFormData.append("payment", payment.value);
        cashFormData.append("date", date.value);
        cashFormData.append("id", id);
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
function addBankGivenOrder(){
    var payment = document.getElementById("bank_pay");
  
    var id=document.getElementById("in_customer_name");
  //  var coinsType=document.getElementById("bank_coin_type");
  //  var pay_type=document.getElementById("pay_type");
  
    var from=document.getElementById("bank_pay_from");
    var to=document.getElementById("bank_pay_to");
    var date=document.getElementById("date_bank_pay");
  
   
    if (date.value.length == 0 || payment.value.length == 0 || 
      from.value.length == 0 || to.value.length == 0) {
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
        ajax.open("POST", "./phpDB/add_order_bank_pay.php", true);
        ajax.send(Bankformdata);

    }
}
function addChequeGivenOrder(){
    var payment = document.getElementById("payment_cheque");
  
    var id=document.getElementById("in_customer_name");
 //   var coinsType=document.getElementById("cheque_coin_type");
  //  var pay_type=document.getElementById("pay_type");
    var from=document.getElementById("cheque_from");
    var to=document.getElementById("cheque_to");
    var date=document.getElementById("cheque_date");
    var cheque_due_date=document.getElementById("cheque_due_date");
    var cheque_number=document.getElementById("number_cheque");
  

    if (date.value.length == 0 || payment.value.length == 0 || 
      from.value.length == 0 || to.value.length == 0||cheque_due_date.value.length==0
        ||cheque_number.value.length==0) {
        alert("الرجاء ملئ جميع الحقول");
    }
  else {
    Chequeformdata = new FormData();
    Chequeformdata.append("payment", payment.value);
    Chequeformdata.append("date", date.value);
    Chequeformdata.append("id", id.value);
  //  Chequeformdata.append("coinsType", coinsType.value);
  //  formdata.append("pay_type", pay_type.value);
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
