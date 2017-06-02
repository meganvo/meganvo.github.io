// Sheetrock.js 1.0 Example 2
// https://chriszarate.github.io/sheetrock/

// Define spreadsheet URL.
var mySpreadsheet2 = 'https://docs.google.com/spreadsheets/d/1Vx3ga56m6_V4VguU4ViA3FKvtTStbuN2I2NtvckH1BE/pubhtml?gid=896116695&single=true';


// Compile the Handlebars template for contestants.
var Template2 = Handlebars.compile($('#dudes-template').html());

// Load contestants
$('#dudes-list').sheetrock({
  url: mySpreadsheet2,
  query: "select A,B,C order by A desc",
  fetchSize: 32,
  rowTemplate: Template2
});