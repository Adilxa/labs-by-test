function binarySearch(arr, target) {
  let left = 0;
  let right = arr?.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (arr[mid] === target) {
      return mid;
    } else if (arr[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return -1;
}

const prompt = require("prompt-sync")();
// let arrayInput;

// try {
//   arrayInput = JSON.parse(prompt("Enter an array: "));
//   if (!Array.isArray(arrayInput)) {
//     throw new Error("Input is not a valid array.");
//   }
// } catch (error) {
//   console.error("Invalid input. Please enter a valid array.");
//   process.exit(1);
// }

// const target = parseInt(prompt("Enter the target element: "), 10);
// console.log("Index of target: ", binarySearch(arrayInput, target));

module.exports = binarySearch;
