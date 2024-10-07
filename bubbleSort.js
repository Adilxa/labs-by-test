const prompt = require("prompt-sync")();

function bubbleSort(arr) {
  let iterations = {
    external: 0,
    internal: 0,
  };

  // Convert the input array elements to numbers
  arr = arr.map(Number);

  let n = arr?.length;
  let swapped;

  for (let i = 0; i < n; i++) {
    iterations.external++;
    swapped = false;

    for (let j = 0; j < n - i - 1; j++) {
      iterations.internal++;
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        swapped = true;
      }
    }

    if (!swapped) {
      break;
    }
  }

  return { sortedArray: arr, iterations };
}

const input = prompt("Enter the array for sort it! :");
console.log(bubbleSort(input.split(",")));

module.exports = { bubbleSort };
