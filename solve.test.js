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

// const bubbleSort = require("./bubbleSort");

// test("Bubble sort correctly sorts the array", () => {
//   expect(bubbleSort([5, 10, 12, 37])).toEqual([5, 10, 12, 37]);
//   expect(bubbleSort([5, 12, 10, 37])).toEqual([5, 10, 12, 37]);
//   expect(bubbleSort([3, 2, 1])).toEqual([1, 2, 3]);
// });

//3

// sumColumns.test.js
const sumColumns = require("./sumColumns");

test("Sum of matrix columns is correct", () => {
  expect(
    sumColumns([
      [1, 2, 3],
      [4, 5, 6],
    ])
  ).toEqual([5, 7, 9]);
  expect(
    sumColumns([
      [1, 0],
      [0, 1],
    ])
  ).toEqual([1, 1]);
  expect(
    sumColumns([
      [1, 2, 3],
      [1, 2, 3],
      [1, 2, 3],
    ])
  ).toEqual([3, 6, 9]);
  expect(sumColumns([[1]])).toEqual([1]);
  expect(sumColumns([[1, 2]])).toEqual([1, 2]);
});
