const prompt = require("prompt-sync")();

function quadraticSolver(a, b, c, accuracy = 2) {
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

  const roundToAccuracy = num => {
    const factor = Math.pow(10, accuracy);
    return Math.round(num * factor) / factor;
  };

  if (discriminant > 0) {
    return [
      roundToAccuracy((-b + sqrtDiscriminant) / (2 * a)),
      roundToAccuracy((-b - sqrtDiscriminant) / (2 * a)),
      roundToAccuracy(discriminant),
    ];
  } else if (discriminant === 0) {
    return [roundToAccuracy(-b / (2 * a)), roundToAccuracy(discriminant)];
  } else {
    return [roundToAccuracy(discriminant)];
  }
}

// try {
//   const a = parseFloat(prompt("Enter coefficient a: "));
//   const b = parseFloat(prompt("Enter coefficient b: "));
//   const c = parseFloat(prompt("Enter coefficient c: "));
//   const accuracy = parseInt(
//     prompt("Enter accuracy (number of decimal places): "),
//     10
//   );

//   const result = quadraticSolver(a, b, c, accuracy);

//   if (result.length === 1 && result[0] < 0) {
//     console.log(`Discriminant: [${result[0].toFixed(accuracy)}]`);
//     console.log("No real roots (complex roots).");
//   } else if (result.length === 2) {
//     console.log(
//       `The equation has one real root and discriminant: [${result[0].toFixed(
//         accuracy
//       )}, ${result[1].toFixed(accuracy)}]`
//     );
//   } else {
//     console.log(
//       `The equation has two real roots and discriminant: [${result[0].toFixed(
//         accuracy
//       )}, ${result[1].toFixed(accuracy)}, ${result[2].toFixed(accuracy)}]`
//     );
//   }
// } catch (error) {
//   console.log("Error:", error.message);
// }

module.exports = { quadraticSolver };
