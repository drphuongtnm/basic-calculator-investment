// data: 
// initial amount
// annual contribution
// expected return
// duration

type InvestmentData = {
    initialAmount: number;
    annualContribution: number;
    expectedReturn: number;
    duration: number;
};

type InvestmentResults = {
    year: string;
    totalAmount: number;
    totalContributions: number;
    totalInterest: number;
}

type CalculationResults = InvestmentResults[] | string;

function calculateInvestment(data: InvestmentData): CalculationResults {
    const { initialAmount, annualContribution, expectedReturn, duration } = data;
    // Implementation for investment calculation
    if (initialAmount < 0) {
        return "Initial amount cannot be negative.";
    }

    if (duration <= 0) {
        return "Duration must be greater than zero.";
    }

    if (expectedReturn < 0) {
        return "Expected return must be at least zero.";
    }

    let total = initialAmount;
    let totalContributions = 0;
    let totalInterest = 0;
    const annualResults: InvestmentResults[] = [];

    for(let year = 0; year < duration; year++) {
        total = total * (1 + expectedReturn);
        totalInterest = total - initialAmount - totalContributions;
        totalContributions += annualContribution;
        total += annualContribution;

        annualResults.push({
            year: `Year ${year + 1}`,
            totalAmount: total,
            totalContributions,
            totalInterest
        })
    }
    return annualResults;
}

function printResults(results: CalculationResults) {
    if (typeof results === "string") {
        console.log(results);
        return;
    }
    for (const result of results) {
        console.log(result.year);
        console.log(`Total: ${result.totalAmount.toFixed(0)}`);
        console.log(`Total contributions: ${result.totalContributions.toFixed(0)}`);
        console.log(`Total interest: ${result.totalInterest.toFixed(0)}`);
        console.log('-------------------------');
    }
}

const investmentData: InvestmentData = {
    initialAmount: 5000,
    annualContribution: 500,
    expectedReturn: 0.08,
    duration: 10
}
const results = calculateInvestment(investmentData);

printResults(results);