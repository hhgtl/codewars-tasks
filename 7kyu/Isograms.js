// DESCRIPTION
// An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

// Example: (Input --> Output)

// "Dermatoglyphics" --> true
// "aba" --> false
// "moOse" --> false (ignore letter case)
// SOLUTION

function isIsogram(str) {
  if (str.length === 0) {
    return true;
  }
  const isogramObj = {};
  const strTLC = str.toLowerCase();
  for (let i = 0; i <= str.length - 1; i++) {
    if (!isogramObj[strTLC[i]]) {
      isogramObj[strTLC[i]] = strTLC[i];
    } else {
      return false;
    }
  }
  return true;
}

console.log(isIsogram('aveiuxhDrpytgkmwdcsbjnflzqo'));
