function disableTrashPrice(){
    var chkTrash = document.getElementById('cbTrash');
    document.getElementById('trashPrice').disabled = !chkTrash.checked;
}
function calculate(){
    var invoiceDisplay = document.getElementById('invoice-display');

    invoiceDisplay.style = "display: block;";

    var cusId = document.getElementById('customerId').value;
    var cusName = document.getElementById('customerName').value;
    var cusPreUse = document.getElementById('customerPreUse').value;
    var cusCurUse = document.getElementById('customerCurUse').value;
    var cusTrash = document.getElementById('trashPrice').value;
    var pricePaid = 0;

    if(cusCurUse < cusPreUse){
        alert("លេខអំណានចាស់ដាច់ខាតត្រូវតែតូចជាងឬស្មើលេខអំណានថ្មី");
        return;
    }
    var totalUse = parseFloat(cusCurUse) - parseFloat(cusPreUse);
    if(totalUse <= 50){
        pricePaid = parseFloat(totalUse) * 500;
    }else if(totalUse <= 100){
        pricePaid = parseFloat(totalUse) * 1000;
    } else if (totalUse <= 150) {
        pricePaid = parseFloat(totalUse) * 1500;
    } else if (totalUse <= 200) {
        pricePaid = parseFloat(totalUse) * 2000;
    } else {
        pricePaid = parseFloat(totalUse) * 2500;
    }

    var total = parseFloat(pricePaid) + parseFloat(cusTrash);

    document.getElementById('resCusId').innerHTML = cusId;
    document.getElementById('resCusName').innerHTML = cusName;
    document.getElementById('resCusPreUse').innerHTML = cusPreUse;
    document.getElementById('resCusCurUse').innerHTML = cusCurUse;
    document.getElementById('resCusTrash').innerHTML = cusTrash;
    document.getElementById('resCusTotal').innerHTML = total;
}