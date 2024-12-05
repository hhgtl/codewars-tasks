// DESCRIPTION
// Given a string of words, you need to find the highest scoring word.

// Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.

// For example, the score of abad is 8 (1 + 2 + 1 + 4).

// You need to return the highest scoring word as a string.

// If two words score the same, return the word that appears earliest in the original string.

// All letters will be lowercase and all inputs will be valid.
// SOLUTION

function high(x) {
  let alphabetObj = {};
  let alphabet = 'abcdefghijklmnopqrstuvwxyz';

  for (let i = 0; i < alphabet.length; i++) {
    alphabetObj[alphabet[i]] = i + 1;
  }

  let highScoreString = { string: '', score: 0 };

  const xToArr = x.split(' ');
  xToArr.forEach((word) => {
    let testHSString = { string: word, score: 0 };

    for (let i = 0; i <= word.length - 1; i++) {
      testHSString.score += alphabetObj[word[i]];
    }
    if (testHSString.score > highScoreString.score) {
      highScoreString.string = testHSString.string;
      highScoreString.score = testHSString.score;
    }
  });

  return highScoreString.string;
}

console.log(high('man i need a taxi up to ubud'));
