

function getProfitsSelling() {
    var i = 0;
    var html;
    var myjson;var ajax;
    var date = document.getElementById("date_profits");
    var date_end = document.getElementById("date_profits_end");
    d1 = new Date(date.value);
    d2 = new Date(date_end.value);

    var formdata = new FormData();
    formdata.append("date_start", date.value);
    formdata.append("date_end", date_end.value);
    if (window.XMLHttpRequest) {//start ajax code
        ajax = new XMLHttpRequest();
    } else {
        ajax = new ActiveXObject("Microsoft.XMLHTTP");
    }

    ajax.onreadystatechange = function () {

        if (this.readyState == 4 && this.status == 200) {
            if (this.responseText !== "no data found" && this.responseText != null) {
                myjson = JSON.parse(this.responseText);

                if (myjson[0].selling_day != null) {

                    document.getElementById("profits_selling_day").value = myjson[0].price;
//محموع اسعار الطلبيات بغض النظر مدفوع او لا
                }
                if (myjson[0].debt_selling != null) {

                    document.getElementById("profits_debt_selling").value = myjson[0].debt_selling;
//السعر ناقص اللي مش مدفوع
                }
                if (myjson[0].profit != null) {

                    document.getElementById("profits_selling").value = myjson[0].profit;
// فرق سعر الطلبية من الاسعار المدخلة والاسعار الحقيقية
                  
                }
                if (myjson[0].back != null) {

                  

                    document.getElementById("profits_back_selling").value = myjson[0].back;

                }
            }
        }
    }
    ajax.open("POST", "./phpDB/profit.php", true);
    ajax.send(formdata);

}
function getProfitsImports() {
    var i = 0;
    var html;
    var myjson;var ajax;
    var date = document.getElementById("date_profits");
    var date_end = document.getElementById("date_profits_end");
    d1 = new Date(date.value);
    d2 = new Date(date_end.value);

    var formdata = new FormData();
    formdata.append("date_start", date.value);
    formdata.append("date_end", date_end.value);
    if (window.XMLHttpRequest) {//start ajax code
        ajax = new XMLHttpRequest();
    } else {
        ajax = new ActiveXObject("Microsoft.XMLHTTP");
    }

    ajax.onreadystatechange = function () {

        if (this.readyState == 4 && this.status == 200) {

            if (this.responseText !== "no data found" && this.responseText != null) {
                myjson = JSON.parse(this.responseText);

                if (myjson[0].selling_day != null) {

                    document.getElementById("imports_selling_day").value = myjson[0].selling_day;

                }
                if (myjson[0].debt_selling != null) {

                    document.getElementById("imports_debt_selling").value = myjson[0].debt_selling;



                }
            }
        }
    }
    ajax.open("POST", "./phpDB/imports_profit.php", true);
    ajax.send(formdata);

}
function getProfitsExpenses() {
    var i = 0;
    var html;
    var myjson;var ajax;
    var date = document.getElementById("date_profits");
    var date_end = document.getElementById("date_profits_end");
    d1 = new Date(date.value);
    d2 = new Date(date_end.value);

    var formdata = new FormData();
    formdata.append("date_start", date.value);
    formdata.append("date_end", date_end.value);
    if (window.XMLHttpRequest) {//start ajax code
        ajax = new XMLHttpRequest();
    } else {
        ajax = new ActiveXObject("Microsoft.XMLHTTP");
    }

    ajax.onreadystatechange = function () {

        if (this.readyState == 4 && this.status == 200) {
            if (this.responseText !== "no data found" && this.responseText !== null) {
                myjson = JSON.parse(this.responseText);

                if (myjson[0].selling_day != null) {

                    document.getElementById("expenses_selling_day").value = myjson[0].selling_day;
                    i++;
                }
                if (myjson[0].debt_selling != null) {

                    document.getElementById("expenses_debt_selling").value = myjson[0].debt_selling;
                    i++;


                }
            }
        }
    }
    ajax.open("POST", "./phpDB/expensesProfit.php?date=", true);
    ajax.send(formdata);

}
function getProfitsImportsBack() {
    var i = 0;
    var html;
    var myjson;var ajax;
    var date = document.getElementById("date_profits");
    var date_end = document.getElementById("date_profits_end");
    d1 = new Date(date.value);
    d2 = new Date(date_end.value);

    var formdata = new FormData();
    formdata.append("date_start", date.value);
    formdata.append("date_end", date_end.value);
    if (window.XMLHttpRequest) {//start ajax code
        ajax = new XMLHttpRequest();
    } else {
        ajax = new ActiveXObject("Microsoft.XMLHTTP");
    }

    ajax.onreadystatechange = function () {

        if (this.readyState == 4 && this.status == 200) {
            if (this.responseText !== "no data found" && this.responseText != null) {
                myjson = JSON.parse(this.responseText);

                if (myjson[0].total != null) {

                 document.getElementById("back_import_total").value = myjson[0].total;
                    i++;
                }
                /*   if (myjson[0].debt_selling != null) {
   
                       document.getElementById("back_import_dept").value = myjson[0].debt_selling;
                       i++;
   
   
                   }
                   if (myjson[0].remain != null) {
   
                       document.getElementById("expenses_selling_payed").value = myjson[0].remain;
                       i++;
   
   
                   }
                   */
            }
        }
    }
    ajax.open("POST", "./phpDB/import_profitBack.php", true);
    ajax.send(formdata);

}
function clearProfitsFields() {
    //selling
    document.getElementById("profits_selling_day").value = 0;
    document.getElementById("profits_debt_selling").value = 0;
    //imports
    document.getElementById("imports_selling_day").value = 0;
    document.getElementById("imports_debt_selling").value = 0;
    //expenses
    document.getElementById("expenses_selling_day").value = 0;
    document.getElementById("expenses_debt_selling").value = 0;
    //back
 //   document.getElementById("back_import_total").value = 0;
  /*  document.getElementById("back_import_dept").value = 0;
    document.getElementById("expenses_selling_payed").value = 0;
*/

}
function getProfits() {
    clearProfitsFields();

    var date = document.getElementById("date_profits");
    var date_end = document.getElementById("date_profits_end");
    if (date.value.length == 0 || date_end.value.length == 0) {
        alert("لم تقم بادخال تاريخ البداية والنهاية")
    }
    else {
        d1 = new Date(date.value);
        d2 = new Date(date_end.value);
        if (d2 < d1) {
            alert("الرجاء ادخال تاريخ البداية اكبر من تاريخ النهاية ")
        } else {
            getProfitsImports();
            getProfitsExpenses();
            getProfitsSelling();
            getProfitsImportsBack();
        }
    }
}