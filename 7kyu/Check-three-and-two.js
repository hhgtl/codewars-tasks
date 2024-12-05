// DESCRIPTION

// Given an array with exactly 5 strings "a", "b" or "c" (chars in Java, characters in Fortran, Chars in Haskell),
// check if the array contains three and two of the same values.
// Examples
// ["a", "a", "a", "b", "b"] ==> true  // 3x "a" and 2x "b"
// ["a", "b", "c", "b", "c"] ==> false // 1x "a", 2x "b" and 2x "c"
// ["a", "a", "a", "a", "a"] ==> false // 5x "a"

// SOLUTION

function checkThreeAndTwo(array) {
  let a = 0,
    b = 0,
    c = 0;
  array.forEach((letter) => {
    if (letter === 'a') {
      a += 1;
    } else if (letter === 'b') {
      b += 1;
    } else {
      c += 1;
    }
  });
  if (
    (a === 2 || a === 3 || a === 0) &&
    (b === 2 || b === 3 || b === 0) &&
    (c === 2 || c === 3 || c === 0)
  ) {
    return true;
  } else {
    return false;
  }
}

console.log(checkThreeAndTwo(['a', 'a', 'a', 'a', 'a']));
