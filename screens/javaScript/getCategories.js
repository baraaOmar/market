
getCategories()
function getCategories() {
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

                while (i<myjson.length ) {
                    html = ' <option value='+myjson[i].id+'>'+myjson[i].name+'</option>'
                    document.getElementById("type_categories").innerHTML += html;
                    i++;


                }
            }
        }
    }
    ajax.open("GET", "./phpDB/categories.php?q=", true);
    ajax.send();

}

