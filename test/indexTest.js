const salesData = require('./testData');

describe("Data Analysis Functions", () => {
    describe("calculateTotalSales", () => {
        it("Should calculate the total sales revenue", () => {
            const totalSales = calculateTotalSales(salesData);
            expect(totalSales).to.equal(3900);
        });
    });

    describe("calculateAverageSalesPerMonth", () => {
        it("Should calculate the average sales revenue per month", () => {
            const averageSales = calculateAverageSalesPerMonth(salesData);
            expect(averageSales).to.equal(780.00);
        });
    });

    describe("findBestSellingProduct", () => {
        it("Should find the best-selling product", () => {
            const bestProduct = findBestSellingProduct(salesData);
            expect(bestProduct).to.equal("Whatsit");
        });
    });
});
