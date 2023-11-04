function search() {
    // Get input value
    var input = document.getElementById('searchBar').value;

    // Get the table
    var table = document.getElementById('resultsTable');

    // Create a new row
    var row = table.insertRow(-1);

    // Create two cells
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);

    // Add the input value to the first cell and a default value to the second cell
    cell1.innerHTML = input;
    cell2.innerHTML = "Default Value";

    // Clear the search bar
    document.getElementById('searchBar').value = "";
}