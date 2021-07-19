getProviders();

function getProviders() {
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


                while (myjson[i].name != null) {
                    html = ' <option value=' + myjson[i].id + '>' + myjson[i].name + '</option>';


                    document.getElementById("customer_imports_select").innerHTML += html;

                    i++;
                }


            }
        }
    }
    ajax.open("POST", "./phpDB/providers.php?q=", true);
    ajax.send();

}

function getGoods() {
    var i = 0;
    var j = 0;
    var html;

    var leng_myTable_back_import = document.querySelector("#myTable_back_import > tbody").childElementCount;
    --leng_myTable_back_import;
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

                var str_2 = ('back_in_datalist' + leng_myTable_back_import);
                while (myjson[i].name != null) {
                    html = ' <option value=' + myjson[i].id + '>' + myjson[i].name + '</option>';


                    document.getElementById(str_2).innerHTML += html;

                    i++;
                }


            }
        }
    }
    ajax.open("GET", "./phpDB/goods.php?q=", true);
    ajax.send();

}
getGoods();
function addBackImport() {

    var date = document.getElementById("back_import_date");

    var order_id = document.getElementById("back_import_select_type");
    var leng = document.querySelector("#myTable_back_import > tbody").childElementCount;
    var j = 0;

    if (date.value.length == 0) {
        alert("يرجى ملئ جميع الحقول لاضافة عملية الارجاع جديدة")
    } else {
       

        while (j < leng) {
            var quantity = document.getElementById("quantity_import_back" + j);

            var id = (document.getElementById("back_in_" + j));
            var formdata = new FormData();
            formdata.append("id", id.value);
            formdata.append("order_id", order_id.value);
            formdata.append("quantity", quantity.value);


            if (id.value.length != 0 && quantity.value.length != 0&& order_id.value.length!=0) {

                if (window.XMLHttpRequest) {//start ajax code
                    ajax = new XMLHttpRequest();
                } else {
                    ajax = new ActiveXObject("Microsoft.XMLHTTP");
                }



                ajax.onreadystatechange = function () {
                    if (this.readyState == 4 && this.status == 200) {
                        if (this.responseText !== "there is aproblem in this process") {
                            // document.getElementById("text_warning").innerText="done";
                            alert("تمت اضافة الطلبية بنجاح")
                        }
                        else {
                            //  document.getElementById("text_warning").innerText="there is aproblem  in this process";
                            alert("يوجد هنالك مشكلة يرجى المحاولة مرة اخرى");
                        }
                    }

                }
                ajax.open("POST", "./phpDB/addReBackImport.php", false);
                ajax.send(formdata);

            }
            j++;
        }
    }
}