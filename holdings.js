
google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);
setInterval(drawChart, 1000*6);
function drawChart(){
  var x = Math.abs(Math.random() * 100);
  var y = 100-x;
  var data = google.visualization.arrayToDataTable([
  ['P&L', 'Value'],
  ['Profit', x],
  ['Loss', y],
]);
  var options = { 
  'width':300, 
  'height':300,
   is3D: true,
  backgroundColor: '#111',
  legend:'none',
  colors:['#00ff00','red'],
  color: '#871b47',
  };
  var chart = new google.visualization.PieChart(document.getElementById('piechart'));
  chart.draw(data, options);
}

/* Set the width of the sidebar to 250px (show it) */
function openNav() {
  document.getElementById("mySidepanel").style.width = "1350px";
}

/* Set the width of the sidebar to 0 (hide it) */
function closeNav() {
  document.getElementById("mySidepanel").style.width = "0";
}