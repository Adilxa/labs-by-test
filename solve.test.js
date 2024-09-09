const { quadraticSolver } = require("./index");

describe("quadraticSolver Test Cases", () => {
  test("Test 1: Two real roots for a = 5, b = 9, c = 2", () => {
    const result = quadraticSolver(5, 9, 2, 2);
    expect(result).toEqual([-0.26, -1.54, 41]);
  });

  test("Test 2: One real root for a = 1, b = -2, c = 1", () => {
    const result = quadraticSolver(1, -2, 1, 2);
    expect(result).toEqual([1, 0]);
  });

  test("Test 3: No real roots for a = 1, b = 0, c = 5", () => {
    const result = quadraticSolver(1, 0, 5, 2);
    expect(result).toEqual([-20]);
  });

  test("Test 4: Large coefficients for a = 1000000, b = -5111111, c = 0", () => {
    const result = quadraticSolver(1000000, -5111111, 0, 2);
    expect(result).toEqual([5.11, 0, 26123455654321]);
  });

  test("Test 5: Floating-point coefficients for a = 5.5, b = 8.6, c = 2.6", () => {
    const result = quadraticSolver(5.5, 8.6, 2.6, 2);
    expect(result).toEqual([-0.41, -1.15, 16.76]);
  });
});
