// DESCRIPTION

// Task
// In this simple Kata your task is to create a function that turns a string into a Mexican Wave. You will be passed a string and you must return that string in an array where an uppercase letter is a person standing up.
// Rules
//  1.  The input string will always be lower case but maybe empty.

//  2.  If the character in the string is whitespace then pass over it as if it was an empty seat
// Example
// wave("hello") => ["Hello", "hEllo", "heLlo", "helLo", "hellO"]
// Good luck and enjoy!

// SOLUTION

function wave(str) {
  let waveArr = [];
  for (let i = 0; i <= str.length - 1; i++) {
    if (str[i] === ' ') {
      continue;
    }
    let upperStr = str[i].toUpperCase();
    waveArr.push(`${str.slice(0, i)}${upperStr}${str.slice(i + 1, str.length)}`);
  }
  return waveArr;
}

console.log(wave('two words'));
