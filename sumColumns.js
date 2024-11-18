const prompt = require("prompt-sync")();

function sumColumns(matrix) {
  const rows = matrix.length;
  if (rows === 0) {
    return "Матрица пуста. Сумма: 0";
  }

  const cols = matrix[0].length;
  for (let i = 0; i < rows; i++) {
    if (matrix[i].length !== cols) {
      return "Введите матрицу так, чтобы столбцы были равны между собой.";
    }
  }

  console.log("rows length = " + rows);
  console.log("cols length = " + cols);

  const columnSums = new Array(cols).fill(0);

  for (let i = 0; i < rows; i++) {
    console.log("Внешний цикл итерация: " + i);
    for (let j = 0; j < cols; j++) {
      columnSums[j] += matrix[i][j];
      console.log(`Внутренний цикл итерация: ${j}, sum = [${columnSums}]`);
    }
  }

  return columnSums;
}

// const matrixInputString = prompt("Введите матрицу ").trim();

// let matrixInput = [];
// if (!matrixInputString) {
//   console.log("Матрица пуста. Сумма: 0");
// } else {
//   try {
//     matrixInput = JSON.parse(matrixInputString);

//     if (!Array.isArray(matrixInput) || !matrixInput.length) {
//       console.log("Матрица пуста. Сумма: 0");
//     } else {
//       console.log("Сумма по столбцам:", sumColumns(matrixInput));
//     }
//   } catch (error) {
//     console.log("Некорректный ввод. Введите матрицу в виде корректного JSON массива.");
//   }
// }

module.exports = sumColumns;
