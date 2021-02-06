// from data.js
const tableData = data;

// get table references
var tbody = d3.select("tbody");

function buildTable(data) {
  // First, clear out any existing data
  tbody.html("");

  // Next, loop through each object in the data
  // and append a row and cells for each value in the row
  data.forEach((dataRow) => {
    // Append a row to the table body
    let row = tbody.append("tr");

    // Loop through each field in the dataRow and add
    // each value as a table cell (td)
    Object.values(dataRow).forEach((val) => {
      let cell = row.append("td");
      cell.text(val);
    });
  });
}

// 1. Create a variable to keep track of all the filters as an object.
var filters = {};

// 3. Use this function to update the filters. 
function updateFilters() {

  console.log("Getting Filter details...");
    // 4a. Save the element that was changed as a variable.
    let changedElement = d3.select(this);
    // 4b. Save the value that was changed as a variable.
    let changedVal = changedElement.property("value");
   
    // 4c. Save the id of the filter that was changed as a variable.
    let changedID = changedElement.attr("id");
   
    // 5. If a filter value was entered then add that filterId and value
    // to the filters list. Otherwise, clear that filter from the filters object.
  if (changedVal) {
    filters[changedID] = changedVal;
    console.log(filters);
  } else {
      delete filters[changedID];
      console.log("No Filters selected");
  }
    // 6. Call function to apply all filters and rebuild the table
    filterTable();
  
  }
  
  // 7. Use this function to filter the table when data is entered.
  function filterTable() {
  
    // 8. Set the filtered data to the tableData.
    let filteredData = data;
  
    // 9. Loop through all of the filters and keep any data that
    // matches the filter values
    // Variable to hold the keys of the filter
    const keys = Object.keys(filters);

   //check if any filters were selected
    if(keys === []){  //No filter selected, do nothing

    }
    else{ //Filters present
      //loop through the keys to find the right key and match
      for(let i= 0; i<keys.length; i++){

        if(keys[i]== "datetime"){
          filteredData = filteredData.filter(row => row.datetime === filters[keys[i]] );
          continue;
        }
        
      if(keys[i]== "city"){
          filteredData = filteredData.filter(row => row.city === filters[keys[i]] );
          continue;
        }

      if(keys[i]== "state"){
          filteredData = filteredData.filter(row => row.state === filters[keys[i]] );
          continue;
        }

      if(keys[i]== "country"){
          filteredData = filteredData.filter(row => row.country === filters[keys[i]] );
          continue;
        }

      if(keys[i]== "shape"){
          filteredData = filteredData.filter(row => row.shape === filters[keys[i]] );
          continue;
        }
      
      };
    
      // 10. Finally, rebuild the table using the filtered data
      buildTable(filteredData); 
    };
  }
 
  // 2. Attach an event to listen for changes to each filter
  d3.selectAll("input").on("change", updateFilters);

  // Build the table when the page loads
  buildTable(tableData);
