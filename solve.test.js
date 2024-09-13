const { binarySearch } = require("./index");

describe("Binary Search Tests with Bounds", () => {
  test("Test 1: [25] and key 25, valid input length", () => {
    expect(binarySearch([25], 25)).toBe(0);
  });

  test("Test 2: [25, 55, 66] and key 55, valid input length", () => {
    expect(binarySearch([25, 55, 66], 55)).toBe(1);
  });

  test("Test 3: [34, 55, 73] and key 0, valid input length", () => {
    expect(binarySearch([34, 55, 73], 0)).toBe("Element not found");
  });

  test("Test 4: [11, 22, 33, 44] and key 44, valid input length", () => {
    expect(binarySearch([11, 22, 33, 44], 44)).toBe(3);
  });

  test("Test 5: [55, 33, 44, 22, 11] (unsorted), valid input length", () => {
    expect(binarySearch([55, 33, 44, 22, 11], 11)).toBe("Array not sorted");
  });

  test("Test 6: [-2, 0, 2, 4] and key 2, valid input length", () => {
    expect(binarySearch([-2, 0, 2, 4], 2)).toBe(2);
  });

  test("Test 7: null array and key 1", () => {
    expect(binarySearch(null, 1)).toBe("Array not provided");
  });

  test("Test 8: [1, 4, 5, 6, 6, 9, 10] and key 6, valid input length", () => {
    expect(binarySearch([1, 4, 5, 6, 6, 9, 10], 6)).toBe(3);
  });

  test("Test 9: Array exceeding upper bound (more than 10 elements)", () => {
    expect(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], 5)).toBe(
      "Array length must be between 1 and 10"
    );
  });
});
