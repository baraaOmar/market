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

    document.getElementById("goods_orders_select").innerHTML ="";
    document.getElementById("back_import_select_type").innerHTML="";
    ajax.onreadystatechange = function () {

        if (this.readyState == 4 && this.status == 200) {
            if (this.responseText !== "no data found") {
                myjson = JSON.parse(this.responseText);

                while (myjson[i].name != null) {
                    if (myjson[i].sales_bill_type == 1)
                        document.getElementById("goods_orders_select").innerHTML += ' <option value=' + myjson[i].id + '>' + myjson[i].order_number+"  "+myjson[i].Supplier_name + '</option>';
                    if (myjson[i].sales_bill_type == 2)
                        document.getElementById("back_import_select_type").innerHTML += ' <option value=' + myjson[i].id + '>' + myjson[i].order_number +"  "+myjson[i].Supplier_name +'</option>';

                    i++;


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
                while (myjson[0].name != null) {
                    var min = myjson[i].total_price - myjson[i].payed;
                    html = ' <tr role="alert"> <td>' + text + '</td> <td>' + myjson[i].name + '</td> <td>' + myjson[i].date + '</td> <td>' + myjson[i].Supplier_name + '</td> <td>' + myjson[i].total_price + '</td>  <td>' + myjson[i].order_number + '</td>   <td>' + myjson[i].payed + '</td> <td>' + min + '</td> <td> <input  type="checkbox" data-toggle="modal" onclick=(document.getElementById("add_payment_import").value=' + myjson[i].id + ') data-target="#exampleModal"> اضافة دفعة </input></td>  </tr>';
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

                    while (myjson[0].name != null) {
                        var min = myjson[i].total_price - myjson[i].payed;
                        html = ' <tr role="alert"> <td>' + myjson[i].name + '</td> <td>' + myjson[i].date + '</td> <td>' + myjson[i].Supplier_name + '</td> <td>' + myjson[i].total_price + '</td>  <td>' + myjson[i].order_number + '</td>   <td>' + myjson[i].payed + '</td> <td>' + min + '</td>   </tr>';
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
    getImports();
}
