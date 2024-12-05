// DESCRIPTION
// Given an array of integers, return a new array with each value doubled.

// For example:

// [1, 2, 3] --> [2, 4, 6]
// SOLUTION

function maps(x) {
  let doubledArr = [];
  x.forEach((num, i) => (doubledArr[i] = num * 2));
  return doubledArr;
}

console.log(maps([1, 2, 3]));
