// DESCRIPTION

// Task
// You will be given an array of numbers. You have to sort the odd numbers in ascending order while leaving the even numbers at their original positions.

// Examples
// [7, 1]  =>  [1, 7]
// [5, 8, 6, 3, 4]  =>  [3, 8, 6, 5, 4]
// [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]  =>  [1, 8, 3, 6, 5, 4, 7, 2, 9, 0]
// SOLUTION

function sortArray(array) {
  let count = -1;
  const oddNum = array.filter((num) => num % 2 === 1).sort((a, b) => a - b);

  return array.map((num) => {
    if (num % 2 === 1) {
      count++;
      return oddNum[count];
    } else {
      return num;
    }
  });
}

console.log(sortArray([-4, -27, -8, 18, 13, -24, 39, -46]));

// очікується [-4, 13, -8, 18, 39, -24, -27, -46] до дуже рівного [-4, -27, -8, 18, 13, -24, 39, -46]
