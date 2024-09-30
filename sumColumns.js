const prompt = require("prompt-sync")();

function sumColumns(matrix) {
  if (!Array.isArray(matrix) || !matrix.length) {
    return 0;
  }

  const columns = matrix[0].length;
  const result = Array(columns).fill(0);

  matrix.forEach(row => {
    console.log("Uotside Iteration");
    row.forEach((value, idx) => {
      console.log("Inside Iteration");
      result[idx] += value;
    });
  });

  return result;
}

const matrixInputString = prompt("Enter a matrix: ").trim();

let matrixInput = [];
if (!matrixInputString) {
  console.log("0");
} else {
  try {
    matrixInput = JSON.parse(matrixInputString);

    if (!Array.isArray(matrixInput) || !matrixInput.length) {
      console.log("Sum of columns: 0");
    } else {
      console.log("Sum of columns:", sumColumns(matrixInput));
    }
  } catch (error) {
    console.log("Invalid input. Please enter a valid JSON array.");
  }
}

module.exports = sumColumns;
