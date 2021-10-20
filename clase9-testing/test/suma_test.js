const suma = (a, b) => {
  return a + b;
};

const checks = [
  { a: 0, b: 0, result: 0 },
  { a: 1, b: 3, result: 4 },
  { a: -3, b: 3, result: 0 },
];

checks.forEach((item) => {
  const { a, b, result } = item;
  console.assert(
    suma(a, b) === result,
    `Suma of ${a} and ${b} expected to be ${result}`
  );
});

console.log(` ${checks.length} Checks performed...`);
