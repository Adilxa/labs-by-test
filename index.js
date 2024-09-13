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
  if (!isSorted(arr)) {
    return "Array not sorted";
  }

  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (arr[mid] === key) {
      return mid; // Return index of found element
    } else if (arr[mid] < key) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return "Element not found"; // Element not found
}

module.exports = { binarySearch, isSorted };
