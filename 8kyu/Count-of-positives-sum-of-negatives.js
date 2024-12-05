// DESCRIPTION
// Given an array of integers.

// Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.

// If the input is an empty array or is null, return an empty array.

// Example
// For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65].
// SOLUTION

function countPositivesSumNegatives(input) {
  if (input === null || input.lentgh === 0 || input.every((num) => num === 0)) {
    return [];
  }
  let positiveNum = 0;
  let sumNegativeNum = 0;
  input.forEach((num) => {
    if (num >= 1) {
      positiveNum++;
    } else if (num <= -1) {
      sumNegativeNum += num;
    }
  });
  return [positiveNum, sumNegativeNum];
}
console.log(countPositivesSumNegatives([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15]));
