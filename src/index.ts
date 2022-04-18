import type {amortizationType} from "./types";

export function rateValue(percentageValue:number):number{
  return percentageValue/100;
}

export function blockBracket(timesInYear:number, montlyPayment:number,rate:number):number{
  let innerBracket:number = 1 + (rateValue(rate)/montlyPayment)
  let expoenent:number = -1 * (montlyPayment * timesInYear)
  let result = 1 - Math.pow(innerBracket,expoenent)
  return result;
}

export function EMIamount(values:amortizationType):number{
  let nominator:number = values.principal * rateValue(values.rateValue);
  let denominator:number = (
    values.montlyPayment * blockBracket(values.timesInYear, values.montlyPayment, values.rateValue)
  );

  return nominator/denominator;
}

let value:amortizationType={
  principal: 100_000,
  rateValue:10,
  timesInYear:20,
  montlyPayment:12,
}

console.log(EMIamount(value));

