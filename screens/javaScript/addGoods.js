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
function clearGoodImported(){
    var name = document.getElementById("goods_name");
    var code = document.getElementById("goods_code");
    var price = document.getElementById("goods_price");
    var payed_price = document.getElementById("goods_payed_price");
    var quantity = document.getElementById("goods_quantity");
    var total = document.getElementById("goods_total");
    var goods_orders_select = document.getElementById("goods_orders_select");
    name.value="";
    code.value="";
    price.value="";
    payed_price.value="";
    quantity.value="";
    total.value="";
    goods_orders_select.value="";
}
function clearAddImportsField(){
    var number = document.getElementById("order_import");
    var price = document.getElementById("price_import");
  //  var payed_import = document.getElementById("payed_import");
    var date = document.getElementById("date_import_add");
    var name_import = document.getElementById("customer_imports_select");
    var imports_select_type = document.getElementById("imports_select_type");
    number.value="";
    price.value="";
    date.value="";
    name_import.value="";
    imports_select_type.value="";
}
function addImports() {
    var number = document.getElementById("order_import");
    var price = document.getElementById("price_import");
  //  var payed_import = document.getElementById("payed_import");
    var date = document.getElementById("date_import_add");
    var name_import = document.getElementById("customer_imports_select");
    var imports_select_type = document.getElementById("imports_select_type");
    var formdata = new FormData();
    formdata.append("number", number.value);
    formdata.append("price_import", price.value);
   // formdata.append("payed_import", payed_import.value);
    formdata.append("name_import", name_import.value);
    formdata.append("date", date.value);
    formdata.append("type", imports_select_type.value);
    if (number.value.length == 0  || price.value.length == 0
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
                   // setImportId(this.responseText);
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
    alert(sell_id.value);
            if (window.XMLHttpRequest) {//start ajax code
                ajax = new XMLHttpRequest();
            } else {
                ajax = new ActiveXObject("Microsoft.XMLHTTP");
            }
    
    
    
            ajax.onreadystatechange = function () {
                if (this.readyState == 4 && this.status == 200) {
                    alert(this.responseText);
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
    function setImportId(){

    }