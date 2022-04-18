
let { EMIamount, rateValue } = require("../dist/index.js")


test('Calculates EMIamount', () => {
    let value={
        principal: 100_000,
        rateValue:10,
        timesInYear:20,
        montlyPayment:12,
    }
    const RESULT = 965.021645074009;

    const testCase = EMIamount(value)
    expect(testCase).toBe(RESULT);
});


test('Converts rates to decimals', () => {
    const testCase = rateValue(10)
    const RATE_RESULT = 0.1;
    expect(testCase).toBe(RATE_RESULT);
});