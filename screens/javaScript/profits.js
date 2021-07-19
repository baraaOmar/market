
getProfitsImports();
getProfitsExpenses();
getProfitsSelling();
function getProfitsSelling() {
    var i = 0;
    var html;
    var myjson;
    var date = document.getElementById("date_profits");
    var formdata = new FormData();
    formdata.append("date", date.value);
    if (window.XMLHttpRequest) {//start ajax code
        ajax = new XMLHttpRequest();
    } else {
        ajax = new ActiveXObject("Microsoft.XMLHTTP");
    }

    ajax.onreadystatechange = function () {

        if (this.readyState == 4 && this.status == 200) {
            if (this.responseText !== "no data found" &&this.responseText !=null) {
                myjson = JSON.parse(this.responseText);
                if (myjson[0].selling_day != null) {

                    document.getElementById("profits_selling_day").value = myjson[0].selling_day;

                }
                if (myjson[0].debt_selling != null) {

                    document.getElementById("profits_debt_selling").value = myjson[0].debt_selling;



                }
            }
        }
    }
    ajax.open("POST", "./phpDB/profit.php?date=", true);
    ajax.send(formdata);

}
function getProfitsImports() {
    var i = 0;
    var html;
    var myjson;
    var date = document.getElementById("date_profits");
    var formdata = new FormData();
    formdata.append("date", date.value);
    if (window.XMLHttpRequest) {//start ajax code
        ajax = new XMLHttpRequest();
    } else {
        ajax = new ActiveXObject("Microsoft.XMLHTTP");
    }

    ajax.onreadystatechange = function () {

        if (this.readyState == 4 && this.status == 200) {
            if (this.responseText !== "no data found" &&this.responseText !=null) {
                myjson = JSON.parse(this.responseText);

                if (myjson[0].selling_day != null) {

                    document.getElementById("imports_selling_day").value = myjson[0].selling_day;
                    i++;
                }
                if (myjson[0].debt_selling != null) {

                    document.getElementById("imports_debt_selling").value = myjson[0].debt_selling;
                    i++;


                }
            }
        }
    }
    ajax.open("POST", "./phpDB/imports_profit.php?date=", true);
    ajax.send(formdata);

}
function getProfitsExpenses() {
    var i = 0;
    var html;
    var myjson;
    var date = document.getElementById("date_profits");
    var formdata = new FormData();
    formdata.append("date", date.value);
    if (window.XMLHttpRequest) {//start ajax code
        ajax = new XMLHttpRequest();
    } else {
        ajax = new ActiveXObject("Microsoft.XMLHTTP");
    }

    ajax.onreadystatechange = function () {

        if (this.readyState == 4 && this.status == 200) {
            if (this.responseText !== "no data found" &&this.responseText !==null) {
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
    ajax.open("POST", "./phpDB/expensesProfit.php?date=" , true);
    ajax.send(formdata);

}
function getProfitsImportsBack() {
    var i = 0;
    var html;
    var myjson;
    var date = document.getElementById("date_profits");
    var formdata = new FormData();
    formdata.append("date", date.value);
    if (window.XMLHttpRequest) {//start ajax code
        ajax = new XMLHttpRequest();
    } else {
        ajax = new ActiveXObject("Microsoft.XMLHTTP");
    }

    ajax.onreadystatechange = function () {

        if (this.readyState == 4 && this.status == 200) {
            if (this.responseText !== "no data found" &&this.responseText !=null) {
                myjson = JSON.parse(this.responseText);

                if (myjson[0].total != null) {

                    document.getElementById("back_import_total").value = myjson[0].total;
                    i++;
                }
                if (myjson[0].debt_selling != null) {

                    document.getElementById("back_import_dept").value = myjson[0].debt_selling;
                    i++;


                }
                if (myjson[0].remain != null) {

                    document.getElementById("expenses_selling_payed").value = myjson[0].remain;
                    i++;


                }
            }
        }
    }
    ajax.open("POST", "./phpDB/import_profitBack.php", true);
    ajax.send(formdata);

}
