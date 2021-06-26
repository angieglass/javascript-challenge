// from data.js
var tableData = data;
// Get a reference to the table body
var tbody = d3.select("tbody");

// We can add a console.log(data); to explore our data. 
// console.log(data); 

// Homework code starts here!

// 1.- Looping through my data and console.log each row. 
// tableData.forEach(element => console.log(element)); 

// 2.- For each element in the array, we add a table row. 
// Then we add the value on a cell with "value"

tableData.forEach((element) => {
    var row = tbody.append("tr");
    Object.entries(element).forEach(([key,value]) => {
        row.append("td").text(value);
    })
});

// Event listener for the filter table 

var ftrTableBtn = d3.select("#filter-btn");
function filterTableButton(){
    console.log("Filter table clicked")
    console.log(d3.event.target);
}

ftrTableBtn.on("click", filterTableButton);

