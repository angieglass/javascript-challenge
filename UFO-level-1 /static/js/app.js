// from data.js
var tableData = data;
// Get a reference to the table body
var tbody = d3.select("tbody");

// We can add a console.log(data); to explore our data. 
// console.log(data); 
// ----------------------------------------------------
// Homework code starts here!
// ----------------------------------------------------
// 1.- Looping through my data and console.log each row. 
// tableData.forEach(element => console.log(element)); 
// ----------------------------------------------------
// 2.- For each element in the array, we add a table row. 
// Then we add the value on a cell with "value"

tableData.forEach((element) => {
    var row = tbody.append("tr");
    Object.entries(element).forEach(([key,value]) => {
        row.append("td").text(value);
    })
});



// ----------------------------------------------------
// Select the filter button
var ftrTableBtn = d3.select("#filter-btn");

// Select the forms 
var datetimeForm = d3.select("#datetime");
var cityForm = d3.select("#city");
var stateForm = d3.select("#state");
var countryForm = d3.select("#country");
var shapeForm = d3.select("#shape");

// Create event handlers
ftrTableBtn.on("click", runFilter);
datetimeForm.on("submit", runFilter);


// ----------------------------------------------------
//Event handler function to filter data 
function runFilter(){
    d3.event.preventDefault();
    var inputDatetime = datetimeForm.property("value"); 
console.log(inputDatetime);
console.log(tableData);
}

