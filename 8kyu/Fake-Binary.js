// DESCRIPTION
// Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.

// Note: input will never be an empty string
// SOLUTION

function fakeBin(x) {
  let binary = '';
  for (let i = 0; i <= x.length - 1; i++) {
    if (Number(x[i]) < 5) {
      binary += '0';
    } else {
      binary += '1';
    }
  }
  return binary;
}
console.log(fakeBin('45385593107843568'));
