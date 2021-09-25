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


                while (i<myjson.length )  {
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
    var table = document.getElementById("myTable_back_import");
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

                var  rows=   table.rows[0].cells[1].getElementsByClassName('selectpicker')[0];
              
                while (i < myjson.length - 1) {
                    html = ' <option value=' + myjson[i].id + '>' + myjson[i].name + '</option>';

                    rows.innerHTML += (html);

                    i++;

                }
                if (i == myjson.length - 1)
                  {  html = ' <option value=' + myjson[i].id + '>' + myjson[i].name + '</option>';

                  rows.innerHTML += (html);

              
               $(".selectpicker").selectpicker('refresh');}

            }
        }
    }
    ajax.open("GET", "./phpDB/goods.php?q=", true);
    ajax.send();

}
getGoods();
function clearBackImport(){
    var date = document.getElementById("back_import_date");

    var order_id = document.getElementById("back_import_select_type");
    var table = document.getElementById("myTable_back_import");
    date.value="";
    order_id.value="";
    table.innerHTML="";
}
function addBackImport() {

    var date = document.getElementById("back_import_date");

    var order_id = document.getElementById("back_import_select_type");
    var leng = document.querySelector("#myTable_back_import > tbody").childElementCount;
    var j = 0;

    if (date.value.length == 0) {
        alert("يرجى ملئ جميع الحقول لاضافة عملية الارجاع جديدة")
    } else {
        var table = document.getElementById("myTable_back_import");

        for (var i = 0,  row = table.rows[i]; i < table.rows.length ;i++) {
            var x=i+1;
            var id = document.querySelector("#myTable_back_import > tbody > tr:nth-child("+x+") > td:nth-child(2) > div > select");//.value;
            var quantity = document.querySelector("#myTable_back_import > tbody > tr:nth-child("+x+") > td:nth-child(3)  > input");//.value;
          
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