// DESCRIPTION

// There was a test in your class and you passed it. Congratulations!

// But you're an ambitious person. You want to know if you're better than the average student in your class.

// You receive an array with your peers' test scores. Now calculate the average and compare your score!

// Return true if you're better, else false!

// Note:
// Your points are not included in the array of your class's points. Do not forget them when calculating the average score!

// SOLUTION

function betterThanAverage(classPoints, yourPoints) {
  let totalPoint = 0;
  classPoints.forEach((point) => {
    totalPoint += point;
  });
  const avaragePoint = totalPoint / classPoints.length;
  if (avaragePoint < yourPoints) {
    return true;
  } else {
    return false;
  }
}

console.log(betterThanAverage([12, 23, 34, 45, 56, 67, 78, 89, 90], 9));
