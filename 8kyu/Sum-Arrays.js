// DESCRIPTION
// Write a function that takes an array of numbers and returns the sum of the numbers. The numbers can be negative or non-integer. If the array does not contain any numbers then you should return 0.

// Examples
// Input: [1, 5.2, 4, 0, -1]
// Output: 9.2

// Input: []
// Output: 0

// Input: [-2.398]
// Output: -2.398
// SOLUTION
// Sum Numbers
function sum(numbers) {
  'use strict';
  if (numbers.length === 0) {
    return 0;
  }
  let totalNum = 0;
  numbers.forEach((num) => (totalNum += num));
  return totalNum;
}
console.log(sum([1, 5.2, 4, 0, -1]));
