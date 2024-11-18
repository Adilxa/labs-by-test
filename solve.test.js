// const binarySearch = require('./binarySearch');

// describe('Binary Search Tests', () => {
//   test('Находит элемент в массиве [5, 10, 12, 37]: target = 37', () => {
//     const arr = [5, 10, 12, 37];
//     const target = 37;
//     const result = binarySearch(arr, target);
//     expect(result).toBe(3); // Индекс элемента 37
//   });

//   test('Находит элемент в массиве [5, 10, 12, 37]: target = 10', () => {
//     const arr = [5, 10, 12, 37];
//     const target = 10;
//     const result = binarySearch(arr, target);
//     expect(result).toBe(1); // Индекс элемента 10
//   });

//   test('Находит элемент в массиве [5, 10, 12, 37]: target = 5', () => {
//     const arr = [5, 10, 12, 37];
//     const target = 5;
//     const result = binarySearch(arr, target);
//     expect(result).toBe(0); // Индекс элемента 5
//   });

//   test('Не находит элемент, которого нет в массиве [5, 10, 12, 37]: target = 50', () => {
//     const arr = [5, 10, 12, 37];
//     const target = 50;
//     const result = binarySearch(arr, target);
//     expect(result).toBe(-1); // Элемент отсутствует
//   });

//   test('Работает с пустым массивом', () => {
//     const arr = [];
//     const target = 5;
//     const result = binarySearch(arr, target);
//     expect(result).toBe(-1); // Элемент не может быть найден в пустом массиве
//   });

//   test('Работает с массивом из одного элемента (элемент найден)', () => {
//     const arr = [5];
//     const target = 5;
//     const result = binarySearch(arr, target);
//     expect(result).toBe(0); // Единственный элемент в массиве
//   });

//   test('Работает с массивом из одного элемента (элемент не найден)', () => {
//     const arr = [5];
//     const target = 10;
//     const result = binarySearch(arr, target);
//     expect(result).toBe(-1); // Элемент отсутствует
//   });

//   test('Работает с большим массивом', () => {
//     const arr = Array.from({ length: 1000 }, (_, i) => i + 1); // Массив [1, 2, ..., 1000]
//     const target = 999;
//     const result = binarySearch(arr, target);
//     expect(result).toBe(998); // Индекс элемента 999
//   });
// });



//2
// const sumPositiveNumbers  = require('./sumOfPositive');

// describe('Sum of Positive Numbers', () => {
//   test('Полный прогон массива: [1,2,3,4,5,6,7,8,9,10]', () => {
//     const input = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//     expect(sumPositiveNumbers(input)).toBe(55); // Сумма всех положительных чисел
//   });

//   test('Работает с пустым массивом', () => {
//     const input = [];
//     expect(sumPositiveNumbers(input)).toBe(0); // Пустой массив
//   });

//   test('Работает с отрицательными числами', () => {
//     const input = [-1, -2, -3, -4, -5];
//     expect(sumPositiveNumbers(input)).toBe(0); // Только отрицательные числа
//   });

//   test('Работает с комбинацией положительных и отрицательных чисел', () => {
//     const input = [-1, 2, -3, 4, -5];
//     expect(sumPositiveNumbers(input)).toBe(6); // Сумма положительных: 2 + 4
//   });

//   test('Работает с массивом из одного положительного числа', () => {
//     const input = [10];
//     expect(sumPositiveNumbers(input)).toBe(10); // Единственный элемент
//   });

//   test('Работает с массивом из одного отрицательного числа', () => {
//     const input = [-10];
//     expect(sumPositiveNumbers(input)).toBe(0); // Отрицательное число игнорируется
//   });
// });


//3
// const sumColumns = require("./sumColumns");

// describe("sumColumns", () => {
//   test("Сумма столбцов для матрицы 2x3", () => {
//     const input = [
//       [1, 2, 3],
//       [4, 5, 6],
//     ];
//     const expected = [5, 7, 9];
//     expect(sumColumns(input)).toEqual(expected);
//   });

//   test("Матрица с разным количеством столбцов (ошибка)", () => {
//     const input = [
//       [1, 2],
//       [3, 4, 5],
//     ];
//     const expected = "Введите матрицу так, чтобы столбцы были равны между собой.";
//     expect(sumColumns(input)).toEqual(expected);
//   });

//   test("Пустая матрица", () => {
//     const input = [];
//     const expected = "Матрица пуста. Сумма: 0";
//     expect(sumColumns(input)).toEqual(expected);
//   });

//   test("Матрица 1x1", () => {
//     const input = [[10]];
//     const expected = [10];
//     expect(sumColumns(input)).toEqual(expected);
//   });

//   test("Матрица 3x3 с отрицательными числами", () => {
//     const input = [
//       [-1, -2, -3],
//       [-4, -5, -6],
//       [-7, -8, -9],
//     ];
//     const expected = [-12, -15, -18];
//     expect(sumColumns(input)).toEqual(expected);
//   });
// });

//4
const { bubbleSort } = require('./bubbleSort'); // Assuming the file is named bubbleSort.js

describe('bubbleSort', () => {
  test('sorts an unsorted array', () => {
    const input = [4, 2, 7, 1];
    const sorted = bubbleSort(input);
    expect(sorted).toEqual([1, 2, 4, 7]);
  });

  test('does not modify an already sorted array', () => {
    const input = [1, 2, 3, 4];
    const sorted = bubbleSort(input);
    expect(sorted).toEqual([1, 2, 3, 4]);
  });

  test('handles a reverse ordered array', () => {
    const input = [9, 7, 5, 3];
    const sorted = bubbleSort(input);
    expect(sorted).toEqual([3, 5, 7, 9]);
  });

  test('handles arrays with duplicates', () => {
    const input = [4, 3, 3, 1, 2, 5];
    const sorted = bubbleSort(input);
    expect(sorted).toEqual([1, 2, 3, 3, 4, 5]);
  });

  test('sorts an array with one element', () => {
    const input = [1];
    const sorted = bubbleSort(input);
    expect(sorted).toEqual([1]);
  });

  test('sorts an empty array', () => {
    const input = [];
    const sorted = bubbleSort(input);
    expect(sorted).toEqual([]);
  });

  test('counts the number of iterations correctly for a small array', () => {
    const input = [4, 2, 7, 1];
    const sorted = bubbleSort(input);
    // The expected result for the iterations here would be based on your code logic
    expect(sorted).toEqual([1, 2, 4, 7]);
  });

  test('counts the number of iterations for a large array', () => {
    const input = [5, 1, 4, 2, 8];
    const sorted = bubbleSort(input);
    expect(sorted).toEqual([1, 2, 4, 5, 8]);
  });

  test('works with arrays of large numbers', () => {
    const input = [1000000000, 500000000, 300000000, 100000000];
    const sorted = bubbleSort(input);
    expect(sorted).toEqual([100000000, 300000000, 500000000, 1000000000]);
  });

  test('sorts an array with negative numbers', () => {
    const input = [4, -2, 7, -1];
    const sorted = bubbleSort(input);
    expect(sorted).toEqual([-2, -1, 4, 7]);
  });
});
