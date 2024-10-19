const { performance } = require("perf_hooks");

class Profiler {
  constructor() {
    this.samples = [];
    this.startTime = 0;
    this.memoryUsage = [];
  }

  startProfiling() {
    this.startTime = performance.now();
    this.memoryUsage.push(process.memoryUsage());
  }

  takeSample() {
    const currentTime = performance.now();
    const elapsed = currentTime - this.startTime;
    const memory = process.memoryUsage();

    this.samples.push({
      timestamp: elapsed,
      memory: memory,
    });
  }

  endProfiling() {
    const endTime = performance.now();
    const totalTime = endTime - this.startTime;
    this.memoryUsage.push(process.memoryUsage());

    return {
      executionTime: totalTime,
      samples: this.samples,
      memoryUsage: this.memoryUsage,
    };
  }
}

function binarySearchWithProfiling(arr, key) {
  const profiler = new Profiler();
  profiler.startProfiling();

  // Validation checks
  if (!Array.isArray(arr) || !arr.length) {
    profiler.takeSample();
    const result = profiler.endProfiling();
    console.log("Profiling Result:", result);
    return { result: "Array not provided", profiling: result };
  }

  if (arr.length < 1 || arr.length > 10) {
    profiler.takeSample();
    const result = profiler.endProfiling();
    console.log("Profiling Result:", result);
    return {
      result: "Array length must be between 1 and 10",
      profiling: result,
    };
  }

  // Check if array is sorted
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < arr[i - 1]) {
      profiler.takeSample();
      const result = profiler.endProfiling();
      console.log("Profiling Result:", result);
      return { result: "Array not sorted", profiling: result };
    }
  }

  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    profiler.takeSample(); // Take sample at each iteration

    const mid = Math.floor((left + right) / 2);

    if (arr[mid] === key) {
      const profilingResult = profiler.endProfiling();
      console.log("Profiling Result:", profilingResult);
      return { result: mid, profiling: profilingResult };
    } else if (arr[mid] < key) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  const profilingResult = profiler.endProfiling();
  console.log("Profiling Result:", profilingResult);
  return { result: "Element not found", profiling: profilingResult };
}

// Test cases with profiling
function runProfilingTests() {
  console.log("Running profiling tests...\n");

  const testCases = [
    { arr: [25], key: 25, description: "Single element array" },
    {
      arr: [1, 2, 3, 4, 5],
      key: 3,
      description: "Medium array, element exists",
    },
    {
      arr: [1, 3, 5, 7, 9],
      key: 6,
      description: "Medium array, element doesn't exist",
    },
    {
      arr: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      key: 10,
      description: "Maximum size array",
    },
    { arr: [1, 3, 2], key: 2, description: "Unsorted array" },
  ];

  testCases.forEach((testCase, index) => {
    console.log(`\nTest Case ${index + 1}: ${testCase.description}`);
    console.log("Input Array:", testCase.arr);
    console.log("Search Key:", testCase.key);

    const result = binarySearchWithProfiling(testCase.arr, testCase.key);
    console.log("Search Result:", result.result);
    console.log("Number of samples:", result.profiling.samples.length);
    console.log(
      "Total execution time:",
      result.profiling.executionTime.toFixed(3),
      "ms"
    );
    console.log("----------------------------------------");
  });
}

// Run the profiling tests
runProfilingTests();

module.exports = { binarySearchWithProfiling, Profiler };
