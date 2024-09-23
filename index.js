const prompt = require("prompt-sync")({ sigint: true });

const lowerBound = 1;
const upperBound = 10;

function isSorted(arr) {
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < arr[i - 1]) {
      return false;
    }
  }
  return true;
}

function binarySearch(arr, key) {
  if (!Array.isArray(arr) || !arr.length) {
    return "Array not provided";
  }
  if (arr.length < lowerBound || arr.length > upperBound) {
    return `Array length must be between ${lowerBound} and ${upperBound}`;
  }
  if (!isSorted(arr)) {
    return "Array not sorted";
  }

  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (arr[mid] === key) {
      return mid;
    } else if (arr[mid] < key) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return "Element not found";
}

function startBinarySearch() {
  const inputArray = prompt("Enter sorted array elements separated by commas: ")
    .split(",")
    .map(Number);
  const key = Number(prompt("Enter the key to search for: "));

  if (inputArray.some(isNaN)) {
    console.log(
      "Error: Input array contains symbols. Please enter only numbers."
    );
    return;
  }

  const result = binarySearch(inputArray, key);
  console.log(result);
}

// startBinarySearch();

module.exports = { binarySearch, isSorted, startBinarySearch };
