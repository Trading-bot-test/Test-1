
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