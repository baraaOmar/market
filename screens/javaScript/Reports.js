
function cashPayments(id) {
    var i = 0;
    document.getElementById("chash_history").innerHTML = "";
    var html;
    var myjson;
    var ajax;
    if (window.XMLHttpRequest) {//start ajax code
        ajax = new XMLHttpRequest();
    } else {
        ajax = new ActiveXObject("Microsoft.XMLHTTP");
    }
    var formData = new FormData();
    //var id=document.getElementById("in_customer_name").value;
    formData.append("id", id);
    ajax.onreadystatechange = function () {

        if (this.readyState == 4 && this.status == 200) {
            if (this.responseText !== "no data found") {
                myjson = JSON.parse(this.responseText);

                while (i < myjson.length) {
                    html = ' <tr role="alert">  <td>' + myjson[i].date + '</td>    <td>' + myjson[i].amount + '</td>   </tr>';
                    document.getElementById("chash_history").innerHTML += html;
                    i++;

                }
            }
        }
    }
    ajax.open("POST", "./phpDB/getcashPayForOrder.php", true);
    ajax.send(formData);

}
function bankPayments(id) {
    var i = 0;
      document.getElementById("bank_history").innerHTML ="";
    var html;
    var myjson;
    var ajax;
    if (window.XMLHttpRequest) {//start ajax code
        ajax = new XMLHttpRequest();
    } else {
        ajax = new ActiveXObject("Microsoft.XMLHTTP");
    }
    var formData = new FormData();
    //  var id=document.getElementById("in_customer_name").value;
    formData.append("id", id);
    ajax.onreadystatechange = function () {

        if (this.readyState == 4 && this.status == 200) {
            if (this.responseText !== "no data found") {
                myjson = JSON.parse(this.responseText);

                while (i < myjson.length) {
                    html = ' <tr role="alert">  <td>' + myjson[i].date + '</td> <td>' + myjson[i].ammount + '</td>   <td>' + myjson[i].account_number_sender + '</td> <td>' + myjson[i].account_number_receiver + '</td>      </tr>';
                    document.getElementById("bank_history").innerHTML += html;
                    i++;


                }
            }
        }
    }
    ajax.open("POST", "./phpDB/getBankPayForOrder.php", true);
    ajax.send(formData);

}
function chequePayments(id) {
    var i = 0;
    document.getElementById("cheque_history").innerHTML = "";
    var html;
    var myjson;
    var ajax;
    if (window.XMLHttpRequest) {//start ajax code
        ajax = new XMLHttpRequest();
    } else {
        ajax = new ActiveXObject("Microsoft.XMLHTTP");
    }
    var formData = new FormData();
    // var id=document.getElementById("in_customer_name").value;
    formData.append("id", id);
    ajax.onreadystatechange = function () {

        if (this.readyState == 4 && this.status == 200) {
            if (this.responseText !== "no data found") {
                myjson = JSON.parse(this.responseText);

                while (i<myjson.length ) {
                    html = ' <tr role="alert">      <td>' + myjson[i].date + '</td>  <td>' + myjson[i].due_date + '</td>  <td>' + myjson[i].number + '</td> <td>' + myjson[i].value + '</td> <td>' + myjson[i].paid_to + '</td> </tr>';
                    document.getElementById("cheque_history").innerHTML += html;
                    i++;
                  

                }
            }
        }
    }
    ajax.open("POST", "./phpDB/getchequePayForOrder.php", true);
    ajax.send(formData);

}


function cashPaymentsImports(id) {
    var i = 0;
    document.getElementById("chash_history").innerHTML = "";
    var html;
    var myjson;
    var ajax;
    if (window.XMLHttpRequest) {//start ajax code
        ajax = new XMLHttpRequest();
    } else {
        ajax = new ActiveXObject("Microsoft.XMLHTTP");
    }
    var formData = new FormData();
    //var id=document.getElementById("in_customer_name").value;
    formData.append("id", id);
    ajax.onreadystatechange = function () {

        if (this.readyState == 4 && this.status == 200) {
            if (this.responseText !== "no data found") {
                myjson = JSON.parse(this.responseText);

                while (i < myjson.length) {
                    html = ' <tr role="alert">  <td>' + myjson[i].date + '</td>    <td>' + myjson[i].amount + '</td>   </tr>';
                    document.getElementById("chash_history").innerHTML += html;
                    i++;

                }
            }
        }
    }
    ajax.open("POST", "./phpDB/getcashPayForImport.php", true);
    ajax.send(formData);

}
function bankPaymentsImports(id) {
    var i = 0;
      document.getElementById("bank_history").innerHTML ="";
    var html;
    var myjson;
    var ajax;
    if (window.XMLHttpRequest) {//start ajax code
        ajax = new XMLHttpRequest();
    } else {
        ajax = new ActiveXObject("Microsoft.XMLHTTP");
    }
    var formData = new FormData();
    //  var id=document.getElementById("in_customer_name").value;
    formData.append("id", id);
    ajax.onreadystatechange = function () {

        if (this.readyState == 4 && this.status == 200) {
            if (this.responseText !== "no data found") {
                myjson = JSON.parse(this.responseText);

                while (i < myjson.length) {
                    html = ' <tr role="alert">  <td>' + myjson[i].date + '</td> <td>' + myjson[i].ammount + '</td>   <td>' + myjson[i].account_number_sender + '</td> <td>' + myjson[i].account_number_receiver + '</td>      </tr>';
                    document.getElementById("bank_history").innerHTML += html;
                    i++;


                }
            }
        }
    }
    ajax.open("POST", "./phpDB/getBankPayForImport.php", true);
    ajax.send(formData);

}
function chequePaymentsImports(id) {
    var i = 0;
    document.getElementById("cheque_history").innerHTML = "";
    var html;
    var myjson;
    var ajax;
    if (window.XMLHttpRequest) {//start ajax code
        ajax = new XMLHttpRequest();
    } else {
        ajax = new ActiveXObject("Microsoft.XMLHTTP");
    }
    var formData = new FormData();
    // var id=document.getElementById("in_customer_name").value;
    formData.append("id", id);
    ajax.onreadystatechange = function () {

        if (this.readyState == 4 && this.status == 200) {
            if (this.responseText !== "no data found") {
                myjson = JSON.parse(this.responseText);

                while (i<myjson.length ) {
                    html = ' <tr role="alert">      <td>' + myjson[i].date + '</td>  <td>' + myjson[i].due_date + '</td>  <td>' + myjson[i].number + '</td> <td>' + myjson[i].value + '</td> <td>' + myjson[i].paid_to + '</td> </tr>';
                    document.getElementById("cheque_history").innerHTML += html;
                    i++;
                  

                }
            }
        }
    }
    ajax.open("POST", "./phpDB/getchequePayForImport.php", true);
    ajax.send(formData);

}