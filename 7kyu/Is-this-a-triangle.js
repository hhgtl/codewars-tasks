// DESCRIPTION
// (In this case, all triangles must have surface greater than 0 to be accepted).

// Examples:

// Input -> Output
// 1,2,2 -> true
// 4,2,3 -> true
// 2,2,2 -> true
// 1,2,3 -> false
// -5,1,3 -> false
// 0,2,3 -> false
// 1,2,9 -> false
// SOLUTION

function isTriangle(a, b, c) {
  return a + b > c && a + c > b && b + c > a;
}

console.log(isTriangle(7, 2, 2));
