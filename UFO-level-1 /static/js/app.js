// from data.js
var tableData = data;

// Get a reference to the table body
var tbody = d3.select("tbody");

// We can add a console.log(data); to explore our data. 
// console.log(data); 

// YOUR CODE HERE!

// 1.- Looping through my data and console.log each row. 
tableData.forEach(element => console.log(element)); 

// 2.- Appending a row for each object in my UFO data 

tableData.forEach((element) => {
    var row = tbody.append("tr")
})