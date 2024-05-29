// Write your code below.

function calculateTotalSales(salesData) {
    let totalSales = 0;
    let i = 0;

    while (i < salesData.length) {
        totalSales += salesData[i].amount;
        i++;
    }

    return totalSales;
}

function calculateAverageSalesPerMonth(salesData) {
    // Create an object to store the monthly sales
    const monthlySales = {};
    // Create a variable to store the total number of months
    let totalMonths = 0;

    // Loop through the sales data
    for (let i = 0; i < salesData.length; i++) {
        // Get the month and amount of the current sale
        const month = salesData[i].month;
        const amount = salesData[i].amount;

        // If the month is not in the monthly sales object, add it and set the value to 0
        // Also increment the total number of months
        if (!monthlySales[month]) {
            monthlySales[month] = 0;
            totalMonths++;
        }

        // Add the amount of the current sale to the monthly sales for the current month
        // This is why we used 0 as a default value in the conditional above
        monthlySales[month] += amount;
    }

    // Calculate the total sales by summing the sales for each month
    let totalSales = 0;
    for (const month in monthlySales) {
        totalSales += monthlySales[month];
    }

    // Calculate the average sales by dividing the total sales by the total number of months
    const averageSales = totalSales / totalMonths;

    // Return the average sales rounded to 2 decimal places in a number format
    return parseFloat(averageSales.toFixed(2));
}

function findBestSellingProduct(salesData) {
    // Create an object to store the total sales for each product
    const productSales = {};

    // Loop through the sales data
    for (const sale of salesData) {
        // Get the product and quantity of the current sale
        const product = sale.product;
        const quantity = sale.quantity;

        // If the product is not in the product sales object, add it and set the value to 0
        if (!productSales[product]) {
            productSales[product] = 0;
        }
        // Add the quantity of the current sale to the product sales for the current product
        productSales[product] += quantity;
    }

    // Find the product with the highest total sales
    // Initialize variables to store the best product and the maximum quantity
    let bestProduct = '';
    let maxQuantity = 0;

    // Loop through the product sales object
    for (const product in productSales) {
        // If the quantity for the current product is greater than the current maximum quantity,
        if (productSales[product] > maxQuantity) {
            // Update the maximum quantity and best product
            maxQuantity = productSales[product];
            bestProduct = product;
        }
    }

    // Return the best product
    return bestProduct;
}
