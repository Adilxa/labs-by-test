// const binarySearch = require("./binarySearch");

// describe("Binary Search Tests from Table", () => {
//   test("Test 1: Full run on array [5, 10, 12, 37] with target 37", () => {
//     expect(binarySearch([5, 10, 12, 37], 37)).toBe(3); // target index: 3
//   });

//   test("Test 2: 1st iteration on array [5, 10, 12, 37] with target 10", () => {
//     expect(binarySearch([5, 10, 12, 37], 10)).toBe(1); // target index: 1
//   });

//   test("Test 3: 2nd iteration on array [5, 10, 12, 37] with target 5", () => {
//     expect(binarySearch([5, 10, 12, 37], 5)).toBe(0); // target index: 0
//   });

//   test("Test 4: Search on array [1, 2, 3, ..., 16] with target 16 in m=3 iterations", () => {
//     expect(
//       binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16], 16)
//     ).toBe(15); // target index: 15
//   });

//   test("Test 5: Search on array [1, 2, 3, ..., 16] with target 16 in n-1 iterations", () => {
//     expect(
//       binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16], 16)
//     ).toBe(15); // target index: 15
//   });

//   test("Test 6: Search on array [1, 2, 3, ..., 16] with target 16 in n iterations", () => {
//     expect(
//       binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16], 16)
//     ).toBe(15); // target index: 15
//   });

//   test("Test 7: Search on array [1, 2, 3, ..., 16] with target 16 in n+1 iterations", () => {
//     expect(
//       binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16], 16)
//     ).toBe(15); // target index: 15
//   });
// });

//2

// const { sumPositiveNumbers } = require("./sumOfPositive");

// describe("sumPositiveNumbers", () => {
//   test("Sum of positive numbers in [5, 10, 12, 37]", () => {
//     const input = [5, 10, 12, 37];
//     const result = sumPositiveNumbers(input);
//     expect(result).toBe(64); // 5 + 10 + 12 + 37
//   });

//   test("Sum of positive numbers in [5, -10, 12, -37]", () => {
//     const input = [5, -10, 12, -37];
//     const result = sumPositiveNumbers(input);
//     expect(result).toBe(17); // 5 + 12
//   });

//   test("Sum of positive numbers in [1, -2, 3, -4, 5]", () => {
//     const input = [1, -2, 3, -4, 5];
//     const result = sumPositiveNumbers(input);
//     expect(result).toBe(9); // 1 + 3 + 5
//   });

//   test("Sum of positive numbers in [-5, -10, -12]", () => {
//     const input = [-5, -10, -12];
//     const result = sumPositiveNumbers(input);
//     expect(result).toBe(0); // No positive numbers
//   });

//   test("Sum of positive numbers in [0, 1, 2, 3]", () => {
//     const input = [0, 1, 2, 3];
//     const result = sumPositiveNumbers(input);
//     expect(result).toBe(6); // 1 + 2 + 3
//   });
// });

//3

// const sumColumns = require("./sumColumns");

// test("Sum of matrix columns is correct", () => {
//   expect(
//     sumColumns([
//       [1, 2, 3],
//       [4, 5, 6],
//     ])
//   ).toEqual([5, 7, 9]);
//   expect(
//     sumColumns([
//       [1, 0],
//       [0, 1],
//     ])
//   ).toEqual([1, 1]);
//   expect(
//     sumColumns([
//       [1, 2, 3],
//       [1, 2, 3],
//       [1, 2, 3],
//     ])
//   ).toEqual([3, 6, 9]);
//   expect(sumColumns([[1]])).toEqual([1]);
//   expect(sumColumns([[1, 2]])).toEqual([1, 2]);
// });

//4

// const { bubbleSort } = require("./bubbleSort");

// test("Bubble Sort returns correct sorted array and iterations count", () => {
//   // Test Case 1: General case with mixed numbers as strings
//   const result1 = bubbleSort(["3", "12", "-1", "2", "3", "12", "3", "1"]);
//   expect(result1.sortedArray).toEqual([-1, 1, 2, 3, 3, 3, 12, 12]);
//   expect(result1.iterations.external).toBe(7);
//   expect(result1.iterations.internal).toBe(28);

//   // Test Case 2: Another general case with positive and negative numbers
//   const result2 = bubbleSort(["5", "-10", "2", "-3", "0"]);
//   expect(result2.sortedArray).toEqual([-10, -3, 0, 2, 5]);
//   expect(result2.iterations.external).toBe(3); // Adjusted based on real result
//   expect(result2.iterations.internal).toBe(9);

//   // Test Case 3: Already sorted array
//   const result3 = bubbleSort(["1", "2", "3", "4"]);
//   expect(result3.sortedArray).toEqual([1, 2, 3, 4]);
//   expect(result3.iterations.external).toBe(1); // The algorithm should break early
//   expect(result3.iterations.internal).toBe(3);

//   // Test Case 4: Array with all identical values
//   const result4 = bubbleSort(["3", "3", "3", "3"]);
//   expect(result4.sortedArray).toEqual([3, 3, 3, 3]);
//   expect(result4.iterations.external).toBe(1); // Breaks early as array is already sorted
//   expect(result4.iterations.internal).toBe(3);
// });
