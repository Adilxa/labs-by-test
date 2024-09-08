const prompt = require("prompt-sync")();

function findFibonacci(n) {
  if (n > 92) {
    throw new Error("Номер не может быть больше 92");
  }

  if (!Number.isInteger(n)) {
    throw new Error("Номер должен быть целым числом");
  }

  if (n === 0) return BigInt(0);
  if (n === 1 || n === -1) return BigInt(1);

  let a = BigInt(0),
    b = BigInt(1),
    fib;

  const absN = Math.abs(n);
  for (let i = 2; i <= absN; i++) {
    fib = a + b;
    a = b;
    b = fib;
  }

  return n < 0 && n % 2 === 0 ? -b : b;
}

function getFibonacciNumber(input) {
  const ordinal = Number(input);

  if (isNaN(ordinal)) {
    return "Please enter a valid number.";
  }

  try {
    return `Fibonacci number at position ${ordinal} is: ${findFibonacci(
      ordinal
    )}`;
  } catch (error) {
    return error.message;
  }
}

function displayResult() {
  const input = prompt("Enter a sequence number for the Fibonacci number: ");
  const result = getFibonacciNumber(input);
  console.log(result);
}

displayResult();

module.exports = { findFibonacci, getFibonacciNumber };
