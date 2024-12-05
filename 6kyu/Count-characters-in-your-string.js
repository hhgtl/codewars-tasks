// DESCRIPTION

// The main idea is to count all the occurring characters in a string. If you have a string like aba, then the result should be {'a': 2, 'b': 1}.

// What if the string is empty? Then the result should be empty object literal, {}.
// SOLUTION

function count(string) {
  let stringObj = {};
  if (string === '') {
    return {};
  }
  for (let i = 0; i <= string.length - 1; i++) {
    if (stringObj[string[i]] === undefined) {
      stringObj[string[i]] = 1;
    } else {
      stringObj[string[i]] += 1;
    }
  }

  return stringObj;
}

console.log(count('Aabbc'));
