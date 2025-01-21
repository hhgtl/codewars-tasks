// DESCRIPTION

// Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.

// Examples
// "This is an example!" ==> "sihT si na !elpmaxe"
// "double  spaces"      ==> "elbuod  secaps"

// SOLUTION

function reverseWords(str) {
  const reverseArrStr = str.split(' ').map((s) => s.split('').reverse());
  let count = 0;
  let newStr = [];
  for (let i = 0; i <= str.length - 1; i++) {
    count += i;
    if (str[i] === '') {
      count++;
      newStr.push(' ');
      continue;
    }
    newStr.push(reverseArrStr[i]);
  }

  return newStr;
}

console.log(reverseWords('This is an example!'));
