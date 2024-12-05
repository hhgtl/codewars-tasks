// DESCRIPTION

// ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits.

// If the function is passed a valid PIN string, return true, else return false.

// Examples (Input --> Output)
// "1234"   -->  true
// "12345"  -->  false
// "a234"   -->  false
// SOLUTION

function validatePIN(pin) {
  let isNumberCount = 0;
  const formatedPin = pin.replace(/\s+/g, '');
  for (let i = 0; i <= pin.length - 1; i++) {
    if (!isNaN(pin[i])) {
      isNumberCount++;
    }
  }
  if (isNumberCount !== formatedPin.length) {
    return false;
  } else if (pin.length === 4 || pin.length === 6) {
    return true;
  } else {
    return false;
  }
}

console.log(validatePIN('245 '));
