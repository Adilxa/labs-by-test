const { findFibonacci } = require("./index");

describe("Fibonacci Test Cases Based on Provided Table", () => {
  test("Test Case 1: Input 0", () => {
    expect(() => findFibonacci(0)).toThrow(
      "Fib num is should be only positive"
    );
  });

  test("Test Case 3: Input 50", () => {
    expect(findFibonacci(50)).toBe(BigInt(12586269025));
  });

  test("Test Case 4: Input 95 (Number too large)", () => {
    expect(() => findFibonacci(95)).toThrow("Номер не может быть больше 92");
  });

  test("Test Case 5: Input 15.2 (Non-integer)", () => {
    expect(() => findFibonacci(15.2)).toThrow("Номер должен быть целым числом");
  });

  test("Test Case 6: Input 1", () => {
    expect(findFibonacci(1)).toBe(BigInt(1));
  });

  test("Test Case 7: Input 92", () => {
    expect(findFibonacci(92)).toBe(BigInt("7540113804746346429"));
  });
});
