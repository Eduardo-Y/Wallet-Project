export function returnResultsArray(
    initialValue,
    monthlyContribution,
    deadline,
    deadlinePeriod,
    profitability,
    profitabilityPeriod,
    profitTax,
) {
    const months = deadline * deadlinePeriod;
    profitability = profitability / 100;
    let results = [];
    let returns = [];

    for (let i = 1; i <= months; i++) {
        let monthValue;

        if (i == 1) monthValue = initialValue;
        else monthValue = results[i - 2];

        let envestment = monthValue + monthlyContribution;

        let monthReturn = envestment * profitability;

        if (profitabilityPeriod == "yearly" && i % 12 != 0) {
            monthValue = envestment;
        }

        results.push(parseFloat(envestment.toFixed(2)));
        returns.push(parseFloat(monthReturn.toFixed(2)));
    }

    return [results, returns];
}

// console.log(returnResultsArray(1000, 100, 12, 1, 1, "monthly", 5));
