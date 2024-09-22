const prompt = require("prompt-sync")({ sigint: true });

const sumPositiveElements = arr => {
  let acc = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      acc += arr[i];
    }
  }
  return acc;
};

const sumMatrixColumns = matrix => {
  if (matrix.length === 0 || matrix[0].length === 0) {
    throw new Error(
      "Количество строк или столбцов в матрице не может быть нулевым, отрицательным или пустым!"
    );
  }

  let colSums = Array(matrix[0].length).fill(0);

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      colSums[j] += matrix[i][j];
    }
  }

  return colSums;
};

const arrayInput = prompt("Введите элементы массива через запятую: ");
const array = arrayInput.split(",").map(Number);
console.log(`Сумма положительных элементов: ${sumPositiveElements(array)}`);

const matrixInput = prompt(
  'Введите матрицу в формате строк через пробел (например, "1,2,3 1,2,3"): '
);
const matrix = matrixInput.split(" ").map(row => row.split(",").map(Number));

try {
  console.log(`Сумма элементов по столбцам: ${sumMatrixColumns(matrix)}`);
} catch (error) {
  console.error(error.message);
}
