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

    for (let i = 1; i <= months; i++) {
        let monthValue = results[i - 2];
        if (i == 1) monthValue = initialValue;

        let envestment = monthValue + monthlyContribution;

        monthValue = envestment * (1 + profitability);

        if (profitabilityPeriod == "yearly" && i % 12 != 0) {
            monthValue = envestment;
        }

        let profit = monthValue - envestment;
        monthValue -= (profit * profitTax) / 100;

        results.push(parseFloat(monthValue.toFixed(2)));
    }

    console.log(results);
}

returnResultsArray(1000, 100, 12, 1, 1, "monthly", 5);
