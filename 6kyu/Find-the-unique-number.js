// DESCRIPTION
// There is an array with some numbers. All numbers are equal except for one. Try to find it!

// findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
// findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55
// It’s guaranteed that array contains at least 3 numbers.

// The tests contain some very huge arrays, so think about performance.
// SOLUTION

function findUniq(arr) {
  let uniqueObj = {};
  let uniqueNum = 2;
  arr.forEach((num) => {
    if (uniqueObj[num] === undefined) {
      uniqueObj[num] = 1;
    } else {
      uniqueObj[num]++;
    }
  });
  for (let prop in uniqueObj) {
    if (uniqueNum > uniqueObj[prop]) {
      uniqueNum = prop;
    }
  }
  return Number(uniqueNum);
}
console.log(findUniq([0, 0, 0.55, 0, 0]));
