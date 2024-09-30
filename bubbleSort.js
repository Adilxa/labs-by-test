function bubbleSort(arr) {
  let n = arr.length;
  let swapped;

  for (let i = 0; i < n - 1; i++) {
    swapped = false;
    for (let j = 0; j < n - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        swapped = true;
      }
    }
    if (!swapped) break;
  }
  return arr;
}

// const prompt = require("prompt-sync")();
// const arrayInput = JSON.parse(prompt("Enter an array to sort: "));
// console.log("Sorted array: ", bubbleSort(arrayInput));

module.exports = bubbleSort;
