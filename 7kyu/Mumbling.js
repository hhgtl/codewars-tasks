// DESCRIPTION

// This time no story, no theory. The examples below show you how to write function accum:

// Examples:
// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"
// The parameter of accum is a string which includes only letters from a..z and A..Z.

// SOLUTION

function accum(s) {
  let accumString = '';
  let repeatString = '';
  for (let i = 0; i <= s.length - 1; i++) {
    if (i === 0) {
      accumString += `${s[i]}-`.toUpperCase();
      continue;
    } else if (i === s.length - 1) {
      repeatString = s[i].repeat(i + 1);
      accumString += repeatString[0].toUpperCase() + repeatString.slice(1).toLowerCase();
      continue;
    }
    repeatString = `${s[i].repeat(i + 1)}-`;
    accumString += repeatString[0].toUpperCase() + repeatString.slice(1).toLowerCase();
  }
  return accumString;
}

console.log(accum('ZpglnRxqenU'));
