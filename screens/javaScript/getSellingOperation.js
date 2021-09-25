  
  sellingOperation()
 
  function sellingOperation(){
var i=0;
    var html;
    var myjson;var ajax;
    var danger_quantity=document.getElementById("danger_quantity").checked;
    document.getElementById("selling_operation_table").innerHTML="";
    if (window.XMLHttpRequest) {//start ajax code
      ajax = new XMLHttpRequest();
    } else {
      ajax = new ActiveXObject("Microsoft.XMLHTTP"); 
    }
    ajax.onreadystatechange = function () {
   
      if (this.readyState == 4 && this.status == 200) {
        if(this.responseText!=="no data found")
      {  
        console.log(this.responseText);
        myjson = JSON.parse(this.responseText);
        var colorRow="";
        while (i<myjson.length )  {
        
          //IF example .. 
          if(!danger_quantity)
         { if(myjson[i].quantity<10){
            colorRow="red;"
          }else {
            colorRow="";
          }}
         
          $('#selling_operation_table').append('<tr style="background-color:'+colorRow+'">'
          +'<td >'+myjson[i].quentity_remained+'</td>'
          +'<td>'+myjson[i].quentity_paied+'</td>'
          +'<td>'+myjson[i].quantity+'</td>'
          +'<td>'+myjson[i].price_paied+'</td>'
          +'<td>'+myjson[i].price+'</td>'
          +'<td>'+myjson[i].Par_code+'</td>'
          +'<td>'+myjson[i].name+'</td>'
        //  +'<td><img style="width: 20px;" src="../images/danger.png" alt=""></td>'
          +'<td> <input  type="checkbox" data-toggle="modal" onclick="rapish(\''+myjson[i].id  + '\',\''+myjson[i].name  + '\')"  data-target="#exampleModal_rapish">  </input></td>'
          +'</tr>');
      i++;
     
    
      }// while
    }
      }
    }
    ajax.open("GET", "./phpDB/getSellingOperation.php?q=", true);
    ajax.send();
    
    }
    
    function rapish(id_good,name){
      document.getElementById("add_rapish").value=id_good;
      document.getElementById("rapish_good").value=name;
    }
    function addRapish(){
    

      var ajax;
        var quantity = document.getElementById("rapish_quantity");
        var id = document.getElementById("add_rapish");
        var date = document.getElementById("rapish_date");
    
        var formdata = new FormData();
        formdata.append("date", date.value);
        formdata.append("quantity", quantity.value);
        formdata.append("id", id.value);
       
        if ( quantity.value.length == 0 || id.value.length == 0 || date.value.length == 0) {
            alert("يرجى ملئ جميع الحقول لاضافة البضاعة التالفة ");
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
                        alert("تمت اضافة القطعة بنجاح");
                    }
                    else {
                        //  document.getElementById("text_warning").innerText="there is aproblem  in this process";
                        alert("يوجد هنالك مشكلة يرجى المحاولة مرة اخرى");
                    }
                }
    
            }
            ajax.open("POST", "./phpDB/addRapish.php", true);
            ajax.send(formdata);
    
        }
    
    }
  function searchPassedOnName(){
    var searchVal=document.getElementById("good_search_val").value;
var i=0;  var colorRow="red;";var ajax;
var danger_quantity=document.getElementById("danger_quantity").checked;
document.getElementById("selling_operation_table").innerHTML="";
    var html;
    var myjson;
    if (window.XMLHttpRequest) {//start ajax code
      ajax = new XMLHttpRequest();
    } else {
      ajax = new ActiveXObject("Microsoft.XMLHTTP"); 
    }
   
    ajax.onreadystatechange = function () {
   
      if (this.readyState == 4 && this.status == 200) {
        if(this.responseText!=="no data found")
      {
          myjson = JSON.parse(this.responseText);
        document.getElementById("selling_operation_table").innerHTML = "";
        while (i<myjson.length )  {
        
          //IF example .. 
          if(!danger_quantity)
         { if(myjson[i].quantity<10){
            colorRow="red;"
          }else {
            colorRow="";
          }}
         
          $('#selling_operation_table').append('<tr style="background-color:'+colorRow+'">'
          +'<td >'+myjson[i].quentity_remained+'</td>'
          +'<td>'+myjson[i].quentity_paied+'</td>'
          +'<td>'+myjson[i].quantity+'</td>'
          +'<td>'+myjson[i].price_paied+'</td>'
          +'<td>'+myjson[i].price+'</td>'
          +'<td>'+myjson[i].Par_code+'</td>'
          +'<td>'+myjson[i].name+'</td>'
        //  +'<td><img style="width: 20px;" src="../images/danger.png" alt=""></td>'
          +'<td> <input  type="checkbox" data-toggle="modal" onclick="rapish(\''+myjson[i].id  + '\',\''+myjson[i].name  + '\')"  data-target="#exampleModal_rapish">  </input></td>'
          +'</tr>');
      i++;
     
    
      }// while
    }
      }
    }
    ajax.open("POST", "./phpDB/searchOnGoodName.php?search="+searchVal, true);
    ajax.send();
    
    }
    function searchPassedOnNameAddSellingOperation(){
  
      var searchVal=document.getElementById("myInput").value;
  var i=0;
      var html;
      var myjson;
      if (window.XMLHttpRequest) {//start ajax code
        ajax = new XMLHttpRequest();
      } else {
        ajax = new ActiveXObject("Microsoft.XMLHTTP"); 
      }
     
      ajax.onreadystatechange = function () {
     
        if (this.readyState == 4 && this.status == 200) {
          if(this.responseText!=="no data found")
        {  myjson = JSON.parse(this.responseText);
          document.getElementById("selling_operation_table").innerHTML = "";
           while (i<myjson.length )  {
            html = ' <option value='+myjson[i].id+'>'+myjson[i].name+'</option>'
            document.getElementById("myDropdown").innerHTML += html;
            i++;

       
      
        }}
        }
      }
      ajax.open("POST", "./phpDB/searchOnGoodName.php?search="+searchVal, true);
      ajax.send();
      
      }
      