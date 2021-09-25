
getPayType();
function getPayType() {
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

                while (i<myjson[i].length) {
                    //  html = ' <option value=' + myjson[i].id + '>' + myjson[i].name + '</option>';
                    if( myjson[i].operation=="bank")
                    html = '<a     onclick="addID(\'add_payment_bank\',\''+myjson[i].id  + '\')"    class="dropdown-item" data-toggle="modal" data-target="#bankModal">دفعة بنكية</a>';
                  
                  else if( myjson[i].operation=="cheque")
                  html = '<a       onclick="addID(\'add_payment_cheque\',\''+myjson[i].id  + '\')"        onclick="addID("add_payment_cheque",' + myjson[i].id + ')" class="dropdown-item" data-toggle="modal" data-target="#chequeModal">دفعة شيك</a>';
                  else
                  html = '<a  onclick="addID(\'add_payment_cash\',\''+myjson[i].id  + '\')"   class="dropdown-item" data-toggle="modal"data-target="#cashModal">دفعة كاش</a>';
                
                 //   document.getElementById("pay_type_select").innerHTML += html;
                    i++;
                }

             

            }
        }
    }
    ajax.open("POST", "./phpDB/getPaymentTypes.php", true);
    ajax.send();

}
function addID(type,id){
    document.getElementById(type).value=id;
}