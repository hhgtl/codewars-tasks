// DESCRIPTION
// Complete the solution so that the function will break up camel casing, using a space between words.

// Example
// "camelCasing"  =>  "camel Casing"
// "identifier"   =>  "identifier"
// ""             =>  ""
// SOLUTION

function solution(string) {
  let stringCase = '';
  for (let i = 0; i <= string.length - 1; i++) {
    if (string[i] === string[i].toUpperCase()) {
      stringCase += ` ${string[i]}`;
      continue;
    }
    stringCase += string[i];
  }
  return stringCase;
}

console.log(solution('camelCasing'));
