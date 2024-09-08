const quadraticSolver = require("./index.js");

test("Два вещественных корня -> Случай вещественных корней", () => {
  const solutions = quadraticSolver(5, 9, 2);
  console.log(solutions);
  expect(solutions).toEqual([-0.26, -1.54]);
});

test("Один вещественный корень -> Случай единственного корня", () => {
  const solutions = quadraticSolver(1, -2, 1);
  console.log(solutions);
  expect(solutions).toEqual([1]);
});

test("Сообщение об отсутствии корней -> Случай отсутствия корня", () => {
  const solutions = quadraticSolver(1, 0, 5);
  console.log(solutions);
  expect(solutions).toEqual([]);
});

test("Два вещественных корня -> Случай ввода больших значений коэффициента", () => {
  const solutions = quadraticSolver(10000000, -5111111, 0);
  console.log(solutions);
  expect(solutions).toEqual([0.51, 0]);
});

test("Два вещественных корня -> Случай ввода коэффициентов с плавающей запятой", () => {
  const solutions = quadraticSolver(5.5, 8.6, 2.6);
  console.log(solutions);
  expect(solutions).toEqual([-0.41, -1.15]);
});

test("Ошибка при выходе за границы -> Случай коэффициента за пределами", () => {
  expect(() => quadraticSolver(1000000000001, 1000000000, 1000000000)).toThrow(
    "Coefficients must be between -100000000000 and 100000000000"
  );
});

test("Два вещественных корня -> Случай коэффициента в пределах", () => {
  const solutions = quadraticSolver(10000000, 1000000000, 1000000000);
  console.log(solutions);
  expect(solutions).toEqual([-1.01, -98.99]);
});
