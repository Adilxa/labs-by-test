const prompt = require("prompt-sync")();

function sumPositiveNumbers(input) {
  const numbers =
    typeof input === "string" ? input.split(",").map(Number) : input;
  let sum = 0;

  for (let num of numbers) {
    if (num > 0) {
      sum += num;
    }
  }

  return sum;
}

const input = prompt("Enter a sequence of numbers separated by commas: ");
console.log("Sum of positive numbers:", sumPositiveNumbers(input));

module.exports = { sumPositiveNumbers };
