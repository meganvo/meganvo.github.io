// Sheetrock.js 1.0 Example 2
// https://chriszarate.github.io/sheetrock/

// Define spreadsheet URL.
var mySpreadsheet = 'https://docs.google.com/spreadsheets/d/1Vx3ga56m6_V4VguU4ViA3FKvtTStbuN2I2NtvckH1BE/pubhtml?gid=938224488&single=true';


// Compile the Handlebars template for leaderboard.
var Template = Handlebars.compile($('#leaderboard-template').html());



// Load leaderboard of scores
$('#leaderboard-list').sheetrock({
  url: mySpreadsheet,
  query: "select A,B,C,D,E,F,G,H,I order by G desc",
  fetchSize: 27,
  rowTemplate: Template
});

var Template = Handlebars.compile($('#dudes-template').html());

$('#dudes-list').sheetrock({
  url: mySpreadsheet,
  query: "select M,N,O order by M asc",
  fetchSize: 32,
  rowTemplate: Template
});