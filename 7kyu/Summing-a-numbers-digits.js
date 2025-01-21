// DESCRIPTION
// Write a function named sumDigits which takes a number as input and returns the sum of the absolute value of each of the number's decimal digits.

// For example: (Input --> Output)

// 10 --> 1
// 99 --> 18
// -32 --> 5
// Let's assume that all numbers in the input will be integer values.
// SOLUTION

function sumDigits(number) {
  const numberAsString = String(number);
  let numSum = 0;
  for (let i = 0; i <= numberAsString.length - 1; i++) {
    if (Number.isInteger(Number(numberAsString[i]))) {
      numSum += Number(numberAsString[i]);
    }
  }
  return numSum;
}

console.log(sumDigits(-32));
