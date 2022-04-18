"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EMIamount = exports.blockBracket = exports.rateValue = void 0;
function rateValue(percentageValue) {
    return percentageValue / 100;
}
exports.rateValue = rateValue;
function blockBracket(timesInYear, montlyPayment, rate) {
    var innerBracket = 1 + (rateValue(rate) / montlyPayment);
    var expoenent = -1 * (montlyPayment * timesInYear);
    var result = 1 - Math.pow(innerBracket, expoenent);
    return result;
}
exports.blockBracket = blockBracket;
function EMIamount(values) {
    var nominator = values.principal * rateValue(values.rateValue);
    var denominator = (values.montlyPayment * blockBracket(values.timesInYear, values.montlyPayment, values.rateValue));
    return nominator / denominator;
}
exports.EMIamount = EMIamount;
var value = {
    principal: 100000,
    rateValue: 10,
    timesInYear: 20,
    montlyPayment: 12,
};
console.log(EMIamount(value));
//# sourceMappingURL=index.js.map