function addGoods() {

    var name = document.getElementById("goods_name");
    var code = document.getElementById("goods_code");
    var price = document.getElementById("goods_price");
    var payed_price = document.getElementById("goods_payed_price");
    var quantity = document.getElementById("goods_quantity");
    var total = document.getElementById("goods_total");
    var goods_orders_select = document.getElementById("goods_orders_select");
    var formdata = new FormData();
    formdata.append("name", name.value);
    formdata.append("code", code.value);
    formdata.append("price", price.value);
    formdata.append("payed_price", payed_price.value);
    formdata.append("quantity", quantity.value);
    formdata.append("total", total.value);
    formdata.append("goods_orders_select", goods_orders_select.value)

    if (name.value.length == 0 || code.value.length == 0 || price.value.length == 0 || payed_price.value.length == 0
        || quantity.value.length == 0 || total.value.length == 0) {
        alert("يرجى ملئ جميع الحقول لاضافة بضاعة جديدة");
    }

    else {

        if (window.XMLHttpRequest) {//start ajax code
            ajax = new XMLHttpRequest();
        } else {
            ajax = new ActiveXObject("Microsoft.XMLHTTP");
        }



        ajax.onreadystatechange = function () {

            if (this.readyState == 4 && this.status == 200) {
                if (this.responseText !== "there is aproblem in this process") {
                    // document.getElementById("text_warning").innerText="done";
                    alert("تمت اضافة القطعة بنجاح");
                }
                else {
                    //  document.getElementById("text_warning").innerText="there is aproblem  in this process";
                    alert("يوجد هنالك مشكلة يرجى المحاولة مرة اخرى");
                }
            }

        }
        ajax.open("POST", "./phpDB/addGood.php", true);
        ajax.send(formdata);

    }

}
function addImports() {
    var number = document.getElementById("order_import");
    var price = document.getElementById("price_import");
    var payed_import = document.getElementById("payed_import");
    var date = document.getElementById("date_import_add");
    var name_import = document.getElementById("customer_imports_select");
    var imports_select_type = document.getElementById("imports_select_type");
    var formdata = new FormData();
    formdata.append("number", number.value);
    formdata.append("price_import", price.value);
    formdata.append("payed_import", payed_import.value);
    formdata.append("name_import", name_import.value);
    formdata.append("date", date.value);
    formdata.append("type", imports_select_type.value);
    if (number.value.length == 0 || payed_import.value.length == 0 || price.value.length == 0
        || name_import.value.length == 0 || date.value.length == 0 || imports_select_type.value.length == 0) {
        alert("يرجى ملئ جميع الحقول لاضافة واردات جديدة");
        
         
    }

    else {

        if (window.XMLHttpRequest) {//start ajax code
            ajax = new XMLHttpRequest();
        } else {
            ajax = new ActiveXObject("Microsoft.XMLHTTP");
        }



        ajax.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                if (this.responseText !== "there is aproblem in this process") {
                    // document.getElementById("text_warning").innerText="done";
                  set(this.responseText);
                    alert("تمت اضافة الطلبية بنجاح");
                    getImports();
                }
                else {
                    //  document.getElementById("text_warning").innerText="there is aproblem  in this process";
                    alert("يوجد هنالك مشكلة يرجى المحاولة مرة اخرى");
                }
            }

        }
        ajax.open("POST", "./phpDB/insertImports.php", true);
        ajax.send(formdata);

    }

}
var order_id = 0;
function addSellingOperation() {
    var i = 0;
    var html;
    var myjson;
    var date = document.getElementById("date_order");
    var total_price = document.getElementById("total_price_order");

    var payed_order = document.getElementById("payed_order");

    var leng = document.querySelector("#myTable > tbody").childElementCount;
    var j = 0;


    var table = document.getElementById("myTable");
   

    if (payed_order.value.length == 0 || date.value.length == 0 || total_price.value.length == 0) {
        alert("يرجى ملئ جميع الحقول لاضافة عملية بيع جديدة")
    } else {
        addOrder();

        for (var i = 0,  row = table.rows[i]; i < table.rows.length ;i++) {
           // var x = row.cells[3].childNodes[1].value;
            var quantity = row.cells[3].childNodes[1];//.value;
            var price = row.cells[2].childNodes[1];//.value;
            var id = row.cells[1].childNodes[1];//.value;
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
function addOrder() {
    var name = document.getElementById("customer_name");
    var phone = document.getElementById("customer_phone");
    var date = document.getElementById("date_order");
    var total_price = document.getElementById("total_price_order");
    var total_payed_real=document.getElementById("total_price_order_entered_price");
    var payed_order = document.getElementById("payed_order");

    var formdata = new FormData();
    formdata.append("name", name.value);
    formdata.append("phone", phone.value);
    formdata.append("payed_order", payed_order.value);
    formdata.append("total_price", total_price.value);
    formdata.append("date", date.value);
    formdata.append("total_payed_real", total_payed_real.value);
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
        ajax.open("POST", "./phpDB/addOrder.php", false);
        ajax.send(formdata);

    }

}
function addPaymants() {
    var date = document.getElementById("date_payments");
    var payment = document.getElementById("payed_payments");
    var id = document.getElementById("in_customer_name");

    var formdata = new FormData();
    formdata.append("payment", payment.value);
    formdata.append("date", date.value);
    formdata.append("id", id.value);


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
                if (this.responseText !== "there is aproblem in this process") {
                    // document.getElementById("text_warning").innerText="done";
alert("تمت اضافة دفعة بنجاح");

                }
                else {
                    //  document.getElementById("text_warning").innerText="there is aproblem  in this process";
                    alert("يوجد هنالك مشكلة يرجى المحاولة مرة اخرى");
                }
            }

        }
        ajax.open("POST", "./phpDB/addPaymants.php", true);
        ajax.send(formdata);

    }

}
function addProviders() {
    var name = document.getElementById("provider_name");
    var phone = document.getElementById("provider_phone");
    var address = document.getElementById("provider_address");


    var formdata = new FormData();
    formdata.append("name", name.value);
    formdata.append("phone", phone.value);
    formdata.append("address", address.value);


    if (name.value.length == 0) {
        alert("الرجاء ادخال  الاسم");
    } else {

        if (window.XMLHttpRequest) {//start ajax code
            ajax = new XMLHttpRequest();
        } else {
            ajax = new ActiveXObject("Microsoft.XMLHTTP");
        }



        ajax.onreadystatechange = function () {

            if (this.readyState == 4 && this.status == 200) {
                if (this.responseText !== "there is aproblem in this process") {

                    alert("تم اضافة المزود بنجاح");
                    getProviders();
                }
                else {
                    //  document.getElementById("text_warning").innerText="there is aproblem  in this process";
                    alert("يوجد هنالك مشكلة يرجى المحاولة مرة اخرى");
                }
            }

        }
        ajax.open("POST", "./phpDB/addProvider.php", true);
        ajax.send(formdata);

    }

}
function addImportPaymants() {
    var payment = document.getElementById("payment_import");
    var date = document.getElementById("date_import");
    var id = document.getElementById("add_payment_import");
    var formdata = new FormData();
    formdata.append("payment", payment.value);
    formdata.append("date", date.value);
    formdata.append("id", id.value);


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
                if (this.responseText !== "there is aproblem in this process") {
                    alert("تم اضافة العملية بنجاح");

                }
                else {
                    //  document.getElementById("text_warning").innerText="there is aproblem  in this process";
                    alert("يوجد هنالك مشكلة يرجى المحاولة مرة اخرى");
                }
            }

        }
        ajax.open("POST", "./phpDB/add_import_pay.php", true);
        ajax.send(formdata);

    }

}
function add_back_order(){
  
      
        var date = document.getElementById("date_order_back");
       
        var quantity = document.getElementById("quantity_order_back");
        var sell_id = document.getElementById("add_back_order");
      
        var formdata = new FormData();
      
        formdata.append("date", date.value);
        
        formdata.append("quantity", quantity.value);
        formdata.append("sell_id", sell_id.value);
        if (date.value.length == 0  
            || quantity.value.length == 0 || sell_id.value.length == 0) {
            alert("الرجاء ملئ جميع الحقول");
        } else {
    
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
            ajax.open("POST", "./phpDB/add_back_sell.php", true);
            ajax.send(formdata);
    
        }
    
    }