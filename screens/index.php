<!DOCTYPE html>
<html>

<head>
  <meta charset="utf-8">
  <link rel="stylesheet" href="css/tableStyle.css" />
  <link rel="stylesheet" href="css/bootstrap.min.css" />
  <link rel="import" href="./table.html">

  <title>تنويرات الاقصى</title>
</head>

<body>

 <!-- Modal -->
 <div class="modal fade" id="exampleModal_rapish" tabindex="-1" role="dialog"
    aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLongTitle">اضافة كميات تالفة</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
        <form>
          <div class="form-group row">
            <div class="col-sm-8  ">
              <input type="text"  class="form-control" placeholder="القطعة" id="rapish_good">
            </div>
            <label for="rapish_good"  class="col-sm-4 col-form-label">اسم القطعة</label>

          </div>
          <div class="form-group row">
            <div class="col-sm-8  ">
              <input type="number" min="0" class="form-control" placeholder="للاتلاف" id="rapish_quantity">
            </div>
            <label for="rapish_quantity" class="col-sm-4 col-form-label">الكمية للاتلاف</label>

          </div>
          <div class="form-group row">
            <div class="col-sm-8  ">
              <input type="datetime-local" class="form-control" placeholder="التاريخ" id="rapish_date">
            </div>
            <label for="provider_phone" class="col-sm-4 col-form-label">التاريخ</label>

          </div>
        </form>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-dismiss="modal">اغلاق</button>
          <button id="add_rapish"  type="button" onclick="addRapish()" class="btn btn-primary">حفظ التغييرات</button>
        </div>
      </div>
    </div>
  </div>
<nav class="navbar navbar-expand-lg navbar-light  sticky_nav">
  <div class="container-fluid">

    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div style="justify-content: flex-end;" class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">

        <li class="nav-item">

          <div class="dropdown">
            <a class="nav-link dropdown-toggle" data-toggle="dropdown" href="#">الواردات</a>
            <div class="dropdown-menu">
              <a class="dropdown-item" href=".\imports.html">سجل المشتلايات</a>
              <a class="dropdown-item" href=".\imports.html">ادخال مشتريات</a>
              <a class="dropdown-item" href=".\imports.html">ادخال مرتجع مشتريات</a>

            </div>
          </div>
        </li>
        <li class="nav-item">

          <div class="dropdown">
            <a class="nav-link dropdown-toggle" data-toggle="dropdown" href="#">المبيعات</a>
            <div class="dropdown-menu">
              <a class="dropdown-item" href=".\selling.html">ادخال حركة بيع</a>
              <a class="dropdown-item" href=".\selling.html">سجل حركات البيع</a>

            </div>
          </div>
        </li>

       
        <li class="nav-item">

          <div class="dropdown">
            <a class="nav-link dropdown-toggle" data-toggle="dropdown" href="#">مصروفات عامة</a>
            <div class="dropdown-menu">
              <a class="dropdown-item" href=".\expenses.html">سجل المصروفات</a>
              <a class="dropdown-item" href=".\expenses.html">ادخال مصروفات</a>

            </div>
          </div>
        </li>
        <li class="nav-item">


        </li>
        <li class="nav-item">

          <div class="dropdown">
            <a class="nav-link dropdown-toggle" data-toggle="dropdown" href="#">سجل الارباح</a>

          </div>
        </li>
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href=".\index.php">الصفحة الرئيسية</a>

        </li>
      </ul>

    </div>

  </div>
</nav>
  <div style="height: 400px;margin-bottom: 100px;
    overflow-y: hidden;background-attachment: scroll;background-size: cover;" class="container-fluid">
    <img src="../images/background.jpg" class="img-fluid" alt="...">

  </div>


  <div id="goodsFatherDiv" class="container-fluid col-xl-8">
    <div class="col-xl-12 right">
      <h3>سجل البضائع</h3>
      <div class="form-group row">
        <div class="col-sm-8">
          <label  class="switch">
            <input id="danger_quantity"  onclick="sellingOperation();searchPassedOnName();" type="checkbox">
            <span class="slider round"></span>
          </label>
        </div>
        <label for="customer_name" class="col-sm-4 col-form-label">البضائع التي اقتربت نفاذ كميتها</label>

      </div>
      <div class="form-group row">
        <div class="col-sm-4">
          <input placeholder="اسم القطعة" id="good_search_val" onchange="searchPassedOnName()" type="search" />
    
        </div>
     
      </div>
    
      <div style="overflow: scroll;
      height: 400px;" class="table-wrap">
        <table class="table">

          <tr>
            <th>الكمية المباعة</th>
            <th>الكمية </th>
            <th>السعر للبيع</th>

            <th>السعر الاصلي</th>
          
            <th>باركود</th>
            
            <th>اسم القطعة</th>




          </tr>

          <tbody id="selling_operation_table">


          </tbody>
        </table>
      </div>
    </div>
  </div>

  <div class="container-fluid  col-lg-6" style="text-align: center;background-color: #5cd4a066;" >
    <h3>ارباح وديون تاريخ معين </h3>
  
    <form>
      <div class="container-fluid col-md-6">
        <label for="date_profits">اختر تاريخ </label>
        <input onchange="getProfitsExpenses()" value="<?php echo date('H:i:s Y-m-j'); ?>" type="date" class="form-control" id="date_profits" placeholder="رقم الطلبية">
      </div>
      <div class="form-row">
        <div class="form-group col-md-6 right_input">
          <label for="profits_selling_day">ارباح مبيعات اليوم</label>
          <input readonly value="0"  type="number" class="form-control" id="profits_selling_day" placeholder="رقم الطلبية">
        </div>
        <div class="form-group col-md-6 right_input">
          <label for="profits_debt_selling">ديون مبيعات اليوم</label>
          <input min="0" readonly value="0"  type="number" class="form-control" id="profits_debt_selling" placeholder="سعر الجملة">
        </div>
      </div>
      <div class="form-row">
        <div class="form-group col-md-6 right_input">
          <label for="imports_selling_day">مجموع طلبيات  اليوم</label>
          <input readonly value="0"  type="number" class="form-control" id="imports_selling_day" placeholder="رقم الطلبية">
        </div>
        <div class="form-group col-md-6 right_input">
          <label for="imports_debt_selling">ديون طلبيات اليوم</label>
          <input min="0" readonly value="0"  type="number" class="form-control" id="imports_debt_selling" placeholder="سعر الجملة">
        </div>
      </div>
    
      <div class="form-row">
        <div class="form-group col-md-6 right_input">
          <label for="expenses_selling_day">مجموع مصاريف  اليوم</label>
          <input readonly value="0"  type="number" class="form-control" id="expenses_selling_day" placeholder="رقم الطلبية">
        </div>
        <div class="form-group col-md-6 right_input">
          <label for="expenses_debt_selling">ديون مصاريف اليوم</label>
          <input min="0" readonly value="0"  type="number" class="form-control" id="expenses_debt_selling" placeholder="سعر الجملة">
        </div>
      </div>
     
      <div class="form-row">
        <div class="form-group col-md-4 right_input">
          <label for="back_import_total">مجموع مرتجع مشتريات  اليوم</label>
          <input readonly value="0"  type="number" class="form-control" id="back_import_total" placeholder="رقم الطلبية">
        </div>
        <div class="form-group col-md-4 right_input">
          <label for="back_import_dept">المبلغ المتبقي  للتحصيل </label>
          <input min="0" readonly value="0"  type="number" class="form-control" id="back_import_dept" placeholder="سعر الجملة">
        </div>
        <div class="form-group col-md-4 right_input">
          <label for="expenses_selling_payed">المبلغ المحصل</label>
          <input readonly value="0"  type="number" class="form-control" id="expenses_selling_payed" placeholder="رقم الطلبية">
        </div>
      </div>
     </form>
  
   </div>
   


  <script>

function setAction(){
  var length= document.getElementsByClassName("country").length;
 
 
}

  </script>
 <script src="js/moment.min.js"></script>
<script src="js/jquery.min.js"></script>
  <script src="js/bootstrap.min.js"></script>
  <script src="./javaScript/getSellingOperation.js"></script>
  <script src="./javaScript/profits.js"></script>

</body>

</html>