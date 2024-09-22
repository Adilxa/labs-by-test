const sumMatrixColumns = require("./index");

test("Тест 1: Пустая матрица", () => {
  expect(() => sumMatrixColumns([])).toThrow(
    "Количество строк или столбцов в матрице не может быть нулевым, отрицательным или пустым!"
  );
});

test("Тест 2: Матрица 3x3", () => {
  expect(
    sumMatrixColumns([
      [1, 2, 3],
      [1, 2, 3],
      [1, 2, 3],
    ])
  ).toEqual([3, 6, 9]);
});

test("Тест 3: Матрица 1x1", () => {
  expect(sumMatrixColumns([[1]])).toEqual([1]);
});

test("Тест 4: Матрица 2x2", () => {
  expect(
    sumMatrixColumns([
      [1, 2],
      [1, 2],
    ])
  ).toEqual([2, 4]);
});
