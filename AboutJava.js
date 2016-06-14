//This is required!  It adds "loaders" for all of the Google APIs (Application Programming Interface) that will (may) be used in this program -->
var freshman = 0; //hold the number of freshman.
var sophomore = 0;  //hold the number of sophomore.
var junior = 0; //hold the number of junior.
var senior = 0; //hold the number of senior.
var csvData =""; //CSVDATA  is the info from my google sheets
var commas = 1; //holds the number of commas used.
var hold = ""; //holds info will manipulating it.

google.charts.load("current", {packages:["corechart"]});
google.charts.setOnLoadCallback(readData);  // The google.setOnLoadCallback method will call the specified callback function once your d

function readData() {
	var query = new google.visualization.Query('https://docs.google.com/spreadsheets/d/18vB4zi25lgvJQ5TVEV9od1PPA9PIO4F_vMI6TvZZIGk/gviz/tq?tq=select%20B');
	// Send the query and when the query finishes, call the function "handleQueryResponse"
	query.send(handleQueryResponse);
}

function handleQueryResponse(response) { // This is enacted when the query response is returned.  If the query was successful, the response is the data table.  If the query failed, an error is returned, no table
  if (response.isError()) {
    alert('Error in query: ' + response.getMessage() + ' ' + response.getDetailedMessage());
    return; //Alert the user with the error code and return to the place where this function was called
}

var data = response.getDataTable();
//If you prefer (now that we've done so much with parsing CSV data), you can get the data in CSV form
csvData = google.visualization.dataTableToCsv(data); 		  

function chartVaribleValues() //A function that gives values to vailes based on csvdata info.   
{
  for(var i = 0; i < csvData.length; i++)  //Cycles thought the new CSVDATA.
{
  if(csvData[i] != ",") //if csvData[i] doesn't equal ",'.
{
  if(csvData[i] == "9") //if csvData[i]  is 9 then...
{
  freshman++ //concatenates freshman
}
  if(csvData[i] == "1" && csvData[i+1] == "0") //if csvData[i]  is 1 and the let after that is 0 then...
{
  sophomore++ //concatenates sophomore
}	
  if(csvData[i] == "1" && csvData[i+1] == "1") //if csvData[i]  is 1 and the let after that is 1 then...
{
  junior++ //concatenates junoir
}	
  if(csvData[i] == "1" && csvData[i+1] == "2") //if csvData[i]  is 1 and the let after that is 2 then...
{
  senior++ //concatenates senior
}		
}    
} 
}

chartVaribleValues() //calling the function.   
drawChart() //Draws the chart.
} //This brace ends the function handleQueryResponse 


// Callback that creates and populates a data table,         
// instantiates the pie chart, passes in the data and        
// draws it.

//Function of drawing the chart
function drawChart() { 

// Create the data table.
var data = new google.visualization.DataTable();  
data.addColumn('string', 'Grade');
data.addColumn('number', 'Number of people in that Grade');              
data.addRows([
['Seniors', senior], //My info from the google forms.         
['Juniors', junior],
['Sophomores', sophomore],  
['Freshman',freshman ],
]);

// These are the options I chose.        
var options = {
  title:'The Grades of Model UN Students',  
  width:'100%',
  height:350,
  colors: ['#59DF00', '#DFA800', '#F70000', '#C0F7FE','#0066FF', '#F7DE00', '#00FFFF'], 
  pieHole: 0.4,
  backgroundColor: {
    fill: 'transparent'
  },
  pieSliceTextStyle: {
  color: 'black' 
  },
  chartArea: {
    left:'15%', 
    width:'70%', 
    height:'75%'
  },
  legend: {
    alignment: 'center',
    position: 'top', 
    textStyle: {
      color: '#666', 
      fontSize: 13
    }
  },     
  titlePosition: 'none',
  is3D: true
};
// Instantiate and draw our chart, passing in some options.
var chart = new google.visualization.PieChart(document.getElementById('chart_div'));    
chart.draw(data, options);
}
