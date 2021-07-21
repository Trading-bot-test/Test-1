
function butt(){
        const sentences=[];
        sentences[0]= "Buy()";
        sentences[1]= "Buy1()";
        sentences[2]= "Buy2()";
        sentences[3]= "Buy3()";
        setInterval(butt, 1000);
        var y = Math.floor(Math.random() * 4);
        var z = sentences[y];
        document.getElementById('butt').setAttribute('onclick', z);
}
function Buy(){


    var table = document.getElementById("main_table");

    var row = table.insertRow(1);

    var name = row.insertCell(0);
    var qty = row.insertCell(1);
    var cst = row.insertCell(2);
    var ltp = row.insertCell(3);
    var c_val = row.insertCell(4);
    var pl = row.insertCell(5);
    name.style = 'border-right: 2px solid black;';

    name.innerHTML = "<h2>AAPL</h2>";
    qty.innerHTML = "1000";
    cst.innerHTML = "6000";
    ltp.innerHTML = "5968";
    c_val.innerHTML = "6200";
    pl.innerHTML = "232";
}

function Buy1(){
    var table = document.getElementById("main_table");

    var row = table.insertRow(1);

    var name = row.insertCell(0);
    var qty = row.insertCell(1);
    var cst = row.insertCell(2);
    var ltp = row.insertCell(3);
    var c_val = row.insertCell(4);
    var pl = row.insertCell(5);
    name.style = 'border-right: 2px solid black;';

    name.innerHTML = "<h2>GOOGL</h2>";
    qty.innerHTML = "76";
    cst.innerHTML = "1275.75";
    ltp.innerHTML = "1000.23";
    c_val.innerHTML = "1075.75";
    pl.innerHTML = "-200";
}

function Buy2(){
    var table = document.getElementById("main_table");

    var row = table.insertRow(1);

    var name = row.insertCell(0);
    var qty = row.insertCell(1);
    var cst = row.insertCell(2);
    var ltp = row.insertCell(3);
    var c_val = row.insertCell(4);
    var pl = row.insertCell(5);
    name.style = 'border-right: 2px solid black;';

    name.innerHTML = "<h2>TATA</h2>";
    qty.innerHTML = "25";
    cst.innerHTML = "150";
    ltp.innerHTML = "170";
    c_val.innerHTML = "179";
    pl.innerHTML = "725";
}

function Buy3(){
    var table = document.getElementById("main_table");

    var row = table.insertRow(1);

    var name = row.insertCell(0);
    var qty = row.insertCell(1);
    var cst = row.insertCell(2);
    var ltp = row.insertCell(3);
    var c_val = row.insertCell(4);
    var pl = row.insertCell(5);
    name.style = 'border-right: 2px solid black;';

    name.innerHTML = "<h2>REL</h2>";
    qty.innerHTML = "10";
    cst.innerHTML = "3200";
    ltp.innerHTML = "3454";
    c_val.innerHTML = "3600";
    pl.innerHTML = "4000";
}

google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);
function drawChart() {
  var data = google.visualization.arrayToDataTable([
  ['P&L', 'Value'],
  ['Profit', 8],
  ['Loss', 2],
]);
  var options = { 
  'width':400, 
  'height':300,
   is3D: true,
  backgroundColor: 'black',
  legend:'none',
  colors:['#00ff00','red'],
  color: '#871b47',
  };
  var chart = new google.visualization.PieChart(document.getElementById('piechart'));
  chart.draw(data, options);
}