alert('កម្មវិធីទូទាត់ប្រាក់');
var cusId = prompt('សូមបញ្ចូលលេខសម្គាល់អតិថិជន:');
var cusName = prompt('សូមបញ្ចូលឈ្មោះអតិថិជន:');
var cusPreUse = prompt('សូមបញ្ចូលលេខអំណានចាស់:');
var cusCurUse = prompt('សូមបញ្ចូលលេខអំណានថ្មី:');
var boolTrash = confirm("តើអ្នកចង់បញ្ចូលតម្លៃសម្រាមដែរឬទេ?");
if(boolTrash){
    var cusTrash = prompt('សូមបញ្ចូលតម្លៃសម្រាម(10000៛/20000៛/30000៛):');
}
var pricePaid = 0;
var totalUse = parseFloat(cusCurUse) - parseFloat(cusPreUse);
while (totalUse < 0){
    alert("លេខអំណានចាស់ដាច់ខាតត្រូវតែតូចជាងឬស្មើលេខអំណានថ្មី");
    var cusPreUse = prompt('សូមបញ្ចូលលេខអំណានចាស់:');
    var cusCurUse = prompt('សូមបញ្ចូលលេខអំណានថ្មី:');
    totalUse = parseFloat(cusCurUse) - parseFloat(cusPreUse);
}
if (totalUse <= 50) {
    pricePaid = parseFloat(totalUse) * 500;
} else if (totalUse <= 100) {
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