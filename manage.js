// An example portfolio object
let portfolio = {};

// Add event listener to form
document.getElementById('manage-form').addEventListener('submit', function(event) {
    event.preventDefault();

    let stockSymbol = document.getElementById('stock-symbol').value;
    let numberOfShares = parseInt(document.getElementById('number-of-shares').value);

    // Add the stock to the portfolio
    portfolio[stockSymbol] = (portfolio[stockSymbol] || 0) + numberOfShares;

    // Clear the form
    document.getElementById('stock-symbol').value = '';
    document.getElementById('number-of-shares').value = '';

    // Update the portfolio display
    updatePortfolioDisplay();
});

// Add event listener to remove button
document.getElementById('remove-button').addEventListener('click', function() {
    let stockSymbol = document.getElementById('stock-symbol').value;

    // Remove the stock from the portfolio
    if (portfolio[stockSymbol]) {
        delete portfolio[stockSymbol];
    }

    // Clear the form
    document.getElementById('stock-symbol').value = '';
    document.getElementById('number-of-shares').value = '';

    // Update the portfolio display
    updatePortfolioDisplay();
});

// Function to update the portfolio display
function updatePortfolioDisplay() {
    let tableBody = document.getElementById('portfolio-table-body');

    // Clear the table body
    tableBody.innerHTML = '';

    // Add a row for each stock in the portfolio
    for (let stockSymbol in portfolio) {
        let row = document.createElement('tr');

        let symbolCell = document.createElement('td');
        symbolCell.textContent = stockSymbol;
        row.appendChild(symbolCell);

        let sharesCell = document.createElement('td');
        sharesCell.textContent = portfolio[stockSymbol];
        row.appendChild(sharesCell);

        // Add more cells as needed...

        tableBody.appendChild(row);
    }
}