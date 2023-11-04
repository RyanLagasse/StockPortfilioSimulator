// Initialize the portfolio as an object
let portfolio = {};

// Get form and add event listener
const manageForm = document.getElementById('manage-form');
manageForm.addEventListener('submit', function (event) {
    event.preventDefault();

    const stockSymbolInput = document.getElementById('stock-symbol');
    const numberOfSharesInput = document.getElementById('number-of-shares');

    let stockSymbol = stockSymbolInput.value.toUpperCase(); // Normalize to uppercase
    let numberOfShares = parseInt(numberOfSharesInput.value);

    // Check for valid input
    if (!stockSymbol || isNaN(numberOfShares) || numberOfShares <= 0) {
        alert("Please enter a valid stock symbol and a positive number of shares.");
        return;
    }

    // Add the stock to the portfolio
    portfolio[stockSymbol] = (portfolio[stockSymbol] || 0) + numberOfShares;

    // Clear the form
    stockSymbolInput.value = '';
    numberOfSharesInput.value = '';

    // Update the portfolio display
    updatePortfolioDisplay();
});

// Add event listener to remove button
const removeButton = document.getElementById('remove-button');
removeButton.addEventListener('click', function () {
    const stockSymbolInput = document.getElementById('stock-symbol');
    const stockSymbol = stockSymbolInput.value.toUpperCase(); // Normalize to uppercase

    // Remove the stock from the portfolio
    if (portfolio[stockSymbol]) {
        delete portfolio[stockSymbol];
    } else {
        alert("Stock not found in the portfolio.");
    }

    // Clear the form
    stockSymbolInput.value = '';
    document.getElementById('number-of-shares').value = '';

    // Update the portfolio display
    updatePortfolioDisplay();
});

// Function to update the portfolio display
function updatePortfolioDisplay() {
    // Get the table
    var table = document.getElementById('stocks-table');

    // Clear the table body
    table.innerHTML = '';

    // Add a row for each stock in the portfolio
    for (let stockSymbol in portfolio) {
        // Create a new row
        var row = table.insertRow(-1);

        // Create two cells
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);

        // Add the stock symbol to the first cell and the number of shares to the second cell
        cell1.innerHTML = stockSymbol;
        cell2.innerHTML = portfolio[stockSymbol];
    }
}
