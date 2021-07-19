expensesOperation();
function expensesOperation() {
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
                    html = ' <tr role="alert"> <td>' + myjson[i].name + '</td> <td>' + myjson[i].details + '</td> <td>' + myjson[i].price + '</td>  <td>' + myjson[i].price_paied + '</td>   <td>' + myjson[i].date + '</td>    </tr>';
                    document.getElementById("expenses_table").innerHTML += html;
                    i++;


                }
            }
        }
    }
    ajax.open("GET", "./phpDB/expenses.php?q=", true);
    ajax.send();

}
function addExpenses() {
    var i = 0;
    var html;
    var myjson;



    var detail = document.getElementById("expenses_name");
    var date = document.getElementById("expenses_date");
    var payed = document.getElementById("expenses_payed_price");
    var price_total = document.getElementById("expenses_total");
  
    var formdata = new FormData();
    formdata.append("detail", detail.value);
    formdata.append("date", date.value);
    formdata.append("payed", payed.value);
    formdata.append("price_total", price_total.value);

    if (detail.value.length == 0 || date.value.length == 0 || payed.value.length == 0
        || price_total.value.length == 0 ) {
        alert("يرجى ملئ جميع الحقول لاضافة مصروفات جديدة")
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
                    alert("تمت اضافة العملية بنجاح")
                }
                else {
                    //  document.getElementById("text_warning").innerText="there is aproblem  in this process";
                    alert("يوجد هنالك مشكلة يرجى المحاولة مرة اخرى");
                }
            }

        }
        ajax.open("POST", "./phpDB/addExpenses.php", true);
        ajax.send(formdata);

    }

}