const prompt = require("prompt-sync")(); // Require prompt-sync for user input

function quadraticSolver(a, b, c) {
  const lowerBound = -100000000000;
  const upperBound = 100000000000;

  if (a === 0) {
    throw new Error("Coefficient a cannot be zero for a quadratic equation");
  }

  if (
    a < lowerBound ||
    a > upperBound ||
    b < lowerBound ||
    b > upperBound ||
    c < lowerBound ||
    c > upperBound
  ) {
    throw new Error(
      `Coefficients must be between ${lowerBound} and ${upperBound}`
    );
  }

  const discriminant = b * b - 4 * a * c;
  const sqrtDiscriminant = Math.sqrt(Math.abs(discriminant));

  if (discriminant > 0) {
    return [
      parseFloat(((-b + sqrtDiscriminant) / (2 * a)).toFixed(2)),
      parseFloat(((-b - sqrtDiscriminant) / (2 * a)).toFixed(2)),
    ];
  } else if (discriminant === 0) {
    return [parseFloat((-b / (2 * a)).toFixed(2))];
  } else {
    return [];
  }
}

const a = parseFloat(prompt("Enter coefficient a: "));
const b = parseFloat(prompt("Enter coefficient b: "));
const c = parseFloat(prompt("Enter coefficient c: "));

try {
  const result = quadraticSolver(a, b, c);
  if (result.length === 0) {
    console.log("No real roots");
  } else {
    console.log("Roots:", result);
  }
} catch (error) {
  console.log(error.message);
}
