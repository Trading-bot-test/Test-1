function Buy(){
var table = document.getElementById("main_table");

// Create an empty <tr> element and add it to the 1st position of the table:
var row = table.insertRow(1);

// Insert new cells (<td> elements) at the 1st and 2nd position of the "new" <tr> element:
var name = row.insertCell(0);
var qty = row.insertCell(1);
var cst = row.insertCell(2);
var ltp = row.insertCell(3);
var c_val = row.insertCell(4);
var pl = row.insertCell(5);
name.style = 'border-right: 2px solid black;';

// Add some text to the new cells:
name.innerHTML = "<h2>AAPL</h2>";
qty.innerHTML = "1000";
cst.innerHTML = "6000";
ltp.innerHTML = "5968";
c_val.innerHTML = "6200";
pl.innerHTML = "232";
}