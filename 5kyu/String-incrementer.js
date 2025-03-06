// DESCRIPTION
// Your job is to write a function which increments a string, to create a new string.

// If the string already ends with a number, the number should be incremented by 1.
// If the string does not end with a number. the number 1 should be appended to the new string.
// Examples:

// foo -> foo1

// foobar23 -> foobar24

// foo0042 -> foo0043

// foo9 -> foo10

// foo099 -> foo100

// Attention: If the number has leading zeros the amount of digits should be considered.
// SOLUTION

function incrementString(strng) {
  if (!Number.isInteger(Number(strng[strng.length - 1]))) {
    return (strng += 1);
  } else if (strng.length === 1 && Number.isInteger(Number(strng[0]))) {
    return String(Number(strng) + 1);
  }
  let num = '';
  for (let i = strng.length - 1; i > 0; i--) {
    if (Number.isInteger(Number(strng[i]))) {
      num += strng[i];
    } else {
      break;
    }
  }
  const revNum = num.split('').reverse().join('');
  const slicedStr = strng.slice(0, revNum.length - revNum.length * 2);
  let zero = '';
  let number = '';
  for (let i = 0; i <= revNum.length - 1; i++) {
    if (Number.isInteger(Number(revNum[i])) && Number(revNum[i + 1]) === 0) {
      zero += revNum[i];
    } else if (Number.isInteger(Number(revNum[i])) && Number(revNum[i + 1] < 9)) {
      zero += revNum[i];
    } else if (Number.isInteger(Number(revNum[i]))) {
      number += revNum[i];
    }
  }

  return `${slicedStr}${zero}${Number(number) + 1}`;
}

console.log(incrementString('1'));
