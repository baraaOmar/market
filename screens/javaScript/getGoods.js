
getGoods()
function getGoodsForType() {

    var i = 0;
    var html;
    var selectedType = document.getElementById("type_categories").value;
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
                document.getElementById("goods").innerHTML = ""
                while (myjson[i].name != null) {
                    html = ' <option value=' + myjson[i].id + '>' + myjson[i].name + '</option>'
                    document.getElementById("goods").innerHTML += html;
                    document.getElementById("myDropdown").innerHTML += ' <option value=' + myjson[i].id + '>' + myjson[i].order_number + '</option>';

                    i++;


                }
            }
        }
    }
    ajax.open("GET", "./phpDB/getGoodsForCategory.php?id=" + selectedType, true);
    ajax.send();

};
function getGoods() {
    var i = 0;
    var j = 0;
    var html;

    var leng = document.querySelector("#myTable > tbody").childElementCount;
    --leng;
   var selectedType = document.getElementById("type_categories")
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

                var str = ('datalist' + leng);
             
                while (myjson[i].name != null) {
                    html = ' <option value=' + myjson[i].id + '>' + myjson[i].name + '</option>';


                    document.getElementById(str).innerHTML += html;
                  
                    i++;
                }


            }
        }
    }
    ajax.open("GET", "./phpDB/goods.php?q=", true);
    ajax.send();

}

