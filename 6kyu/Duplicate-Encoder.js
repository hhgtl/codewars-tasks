// DESCRIPTION

// The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.

// Examples
// "din"      =>  "((("
// "recede"   =>  "()()()"
// "Success"  =>  ")())())"
// "(( @"     =>  "))(("
// Notes
// Assertion messages may be unclear about what they display in some languages. If you read "...It Should encode XXX", the "XXX" is the expected result, not the input!
// SOLUTION

function duplicateEncode(word) {
  const objFL = {}; // object with the frequency of letters in a word
  const wordTLC = word.toLowerCase();
  for (let i = 0; i < word.length; i++) {
    if (objFL[wordTLC[i]] === undefined) {
      objFL[wordTLC[i]] = 1;
    } else {
      objFL[wordTLC[i]] = objFL[wordTLC[i]] + 1;
    }
  }
  let encodeString = '';
  for (let i = 0; i < wordTLC.length; i++) {
    if (objFL[wordTLC[i]] === 1) {
      encodeString = encodeString + '(';
      continue;
    }
    encodeString = encodeString + ')';
  }
  return encodeString;
}

console.log(duplicateEncode('Success'));
