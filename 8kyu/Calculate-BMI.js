// DESCRIPTION
// Write function bmi that calculates body mass index (bmi = weight / height2).

// if bmi <= 18.5 return "Underweight"

// if bmi <= 25.0 return "Normal"

// if bmi <= 30.0 return "Overweight"

// if bmi > 30 return "Obese"
// SOLUTION

function bmi(weight, height) {
  const value = weight / (height * height);

  if (value <= 18.5) return 'Underweight';
  if (value <= 25.0) return 'Normal';
  if (value <= 30.0) return 'Overweight';
  return 'Obese';
}
