getImports()
function getImports() {
    var i = 0;
    var html;
    var myjson;

    if (window.XMLHttpRequest) {//start ajax code
        ajax = new XMLHttpRequest();
    } else {
        ajax = new ActiveXObject("Microsoft.XMLHTTP");
    }

    document.getElementById("goods_orders_select").innerHTML = "";
    document.getElementById("back_import_select_type").innerHTML = "";
    ajax.onreadystatechange = function () {

        if (this.readyState == 4 && this.status == 200) {
            if (this.responseText !== "no data found") {
                myjson = JSON.parse(this.responseText);

                while (i<myjson.length-1) {
                    if (myjson[i].sales_bill_type == 1) {
                        document.getElementById("goods_orders_select").innerHTML += ' <option value=' + myjson[i].id + '>' + myjson[i].order_number + "  " + myjson[i].Supplier_name + '</option>';
                    } 
                    if (myjson[i].sales_bill_type == 2)
                        document.getElementById("back_import_select_type").innerHTML += ' <option value=' + myjson[i].id + '>' + myjson[i].order_number + "  " + myjson[i].Supplier_name + '</option>';

                    i++;


                }
                if(myjson.length-1==i){
                    if (myjson[i].sales_bill_type == 1) {
                        document.getElementById("goods_orders_select").innerHTML += ' <option value=' + myjson[i].id + '>' + myjson[i].order_number + "  " + myjson[i].Supplier_name + '</option>';
                    } 
                    if (myjson[i].sales_bill_type == 2)
                        document.getElementById("back_import_select_type").innerHTML += ' <option value=' + myjson[i].id + '>' + myjson[i].order_number + "  " + myjson[i].Supplier_name + '</option>';
                      
                        $(".selectpicker").selectpicker('refresh');

                }
            }
        }
    }
    ajax.open("POST", "./phpDB/getImports.php?q=", true);
    ajax.send();


}
getImportsFilteredTypes();
function getImportsFilteredTypes() {
    var i = 0;
    var html;
    var myjson;
    var formdata = new FormData();
    var type = document.getElementById("goods_imports_select");
    formdata.append("imports_type", type.value);
    var text = type.value == 1 ? "فاتورة  مشتريات " : "فاتورة مرتجع مشتريات ";
    document.getElementById("import_table_category").innerHTML = "";
    if (window.XMLHttpRequest) {//start ajax code
        ajax = new XMLHttpRequest();
    } else {
        ajax = new ActiveXObject("Microsoft.XMLHTTP");
    }


    ajax.onreadystatechange = function () {

        if (this.readyState == 4 && this.status == 200) {
            if (this.responseText !== "no data found") {
                myjson = JSON.parse(this.responseText);
                while (i<myjson.length ) {
                    var min = myjson[i].total_price - myjson[i].payed;
                    html = ' <tr role="alert"> <td>' + text + '</td> <td>' + myjson[i].name + '</td> <td>' + myjson[i].date + '</td> <td>' + myjson[i].Supplier_name + '</td> <td>' + myjson[i].total_price + '</td>  <td>' + myjson[i].order_number + '</td>    <td>                       <div  style="text-align-last: center;           align-self: center;" class="dropdown  form-group col-md-6   right_input">            <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">        طريقة الدفع                  </button>     <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">               <a onclick="addPaySetIdOrder(\'add_payment_bank\',\''+myjson[i].id  + '\')" class="dropdown-item" data-toggle="modal" data-target="#bankModal">تحويل بنك</a>     <a onclick="addPaySetIdOrder(\'add_payment_cheque\',\''+myjson[i].id  + '\')" class="dropdown-item" data-toggle="modal" data-target="#chequeModal" >شيكات</a>  <a onclick="addPaySetIdOrder(\'add_payment_cash\',\''+myjson[i].id  + '\')" class="dropdown-item" data-toggle="modal" data-target="#cashModal">كاش</a> </div>   </div> </td>  </tr>';
                       document.getElementById("import_table_category").innerHTML += html;

                    i++;


                }
            }
        }
    }
    ajax.open("POST", "./phpDB/importFilteredType.php?q=", true);
    ajax.send(formdata);


}
function imports_between_dates() {

    var i = 0;
    var html;
    var myjson;

    var date_start = document.getElementById("date_start_imports");
    var date_end = document.getElementById("date_end_imports");
    var myjson;

    if (date_start.value.length == 0 || date_end.value.length == 0) {
        alert("الرجاء ملئ تاريخ البداية والانتهاء");
    }else if(date_start.value>  date_end.value){
        alert("الرجاء ملى تاريخ البداية اقل من النهاية");
    }
    else {
        document.getElementById("import_table_category").innerHTML = "";
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

                    while (i<myjson.length ) {
                        var min = myjson[i].total_price - myjson[i].payed;
                        var text = myjson[i].sales_bill_type == 1 ? "فاتورة  مشتريات " : "فاتورة مرتجع مشتريات ";
                        html = ' <tr role="alert"> <td>' + text + '</td> <td>' + myjson[i].name + '</td> <td>' + myjson[i].date + '</td> <td>' + myjson[i].Supplier_name + '</td> <td>' + myjson[i].total_price + '</td>  <td>' + myjson[i].order_number + '</td>    <td>                       <div  style="text-align-last: center;           align-self: center;" class="dropdown  form-group col-md-6   right_input">            <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">        طريقة الدفع                  </button>     <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">              <a onclick="addPaySetIdOrder(\'add_payment_bank\',\''+myjson[i].id  + '\')" class="dropdown-item" data-toggle="modal" data-target="#bankModal">تحويل بنك</a>     <a onclick="addPaySetIdOrder(\'add_payment_cheque\',\''+myjson[i].id  + '\')" class="dropdown-item" data-toggle="modal" data-target="#chequeModal" >شيكات</a>  <a onclick="addPaySetIdOrder(\'add_payment_cash\',\''+myjson[i].id  + '\')" class="dropdown-item" data-toggle="modal" data-target="#cashModal">كاش</a> </div>   </div> </td>  </tr>';
                     document.getElementById("import_table_category").innerHTML += html;

                        i++;


                    }
                }
            }
        }
        ajax.open("POST", "./phpDB/imports_betweendates.php?q=", true);
        ajax.send(formdata);
    }
}
function clear_fields() {
    document.getElementById("date_start_imports").value = "";
    document.getElementById("date_end_imports").value = "";
    getImportsFilteredTypes();
}
function addPaySetIdOrder(type,id){
   document.getElementById(type).value=id;
   

  }