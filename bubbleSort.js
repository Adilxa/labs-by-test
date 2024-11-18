const prompt = require("prompt-sync")();

function bubbleSort(arr) {
  let iterations = {
    external: 0,
    internal: 0,
  };

  arr = arr.map(Number);

  let n = arr?.length;
  let swapped;

  console.log("Начальный массив:", arr);

  for (let i = 0; i < n; i++) {
    iterations.external++;
    swapped = false;
    console.log(`Внешняя итерация #${iterations.external}:`);

    for (let j = 0; j < n - i - 1; j++) {
      iterations.internal++;
      console.log(
        `  Внутренняя итерация #${iterations.internal}: сравниваем arr[${j}] (${arr[j]}) и arr[${j + 1}] (${arr[j + 1]})`
      );

      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        swapped = true;
        console.log(`    Поменяли местами: ${arr}`);
      } else {
        console.log("    Местами не меняем.");
      }
    }

    console.log(`Массив после внешней итерации #${iterations.external}: ${arr}`);
    if (!swapped) {
      console.log("  Массив отсортирован. Прерываем цикл.");
      break;
    }
  }

  console.log(`Всего внешних итераций: ${iterations.external}`);
  console.log(`Всего внутренних итераций: ${iterations.internal}`);
  return arr;
}

const input = prompt("Введите массив для сортировки (через запятую): ");
console.log("Отсортированный массив:", bubbleSort(input.split(",")));

module.exports = { bubbleSort };
