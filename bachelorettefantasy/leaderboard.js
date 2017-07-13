// Sheetrock.js 1.0 Example 2
// https://chriszarate.github.io/sheetrock/

// Define spreadsheet URL.
var mySpreadsheet = 'https://docs.google.com/spreadsheets/d/1AHtG7k2Pn2t58aDKjFh2_3kWHrQdQkd6gwFTsem-GRk/pubhtml?gid=143966481&single=true';


// Compile the Handlebars template for leaderboard.
var Template = Handlebars.compile($('#leaderboard-template').html());



// Load leaderboard of scores
$('#leaderboard-list').sheetrock({
  url: mySpreadsheet,
  query: "select A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,AA,AB,AC,AD,AE,AF,AG,AH,AI,AJ,AK,AL,AM,AN,AO,AP,AQ order by G desc",
  fetchSize: 7,
  rowTemplate: Template
});
