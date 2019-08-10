const math = require("mathjs");
it(`Pathagora's theorem`, () => {
  const a = 3,
    b = 4,
    c = 5;
  expect(a ** 2 + b ** 2)
    .toBe(c ** 2)
    .toBe(25);
});
it(`Logarithms`, () => {
  const n = 10;
  const a = math.log10(n * n);
  expect(a)
    .toBe(math.log10(n) + math.log10(n))
    .toBe(2);
});
it(`Caculus`, () => {
  const r = 1;
  const area = Math.PI * r ** 2;
  expect(+area.toFixed(2)).toBe(3.14);
});

it(`Law of Gravity`, () => {
  const G = 9.8,
    m1 = 1,
    m2 = 2,
    r = 1;
  const F = (G * m1 * m2) / r ** 2;
  expect(F).toBe(19.6);
});
it(`The Square Root of Minus One`, () => {
  let pow2 = "i^2";
  pow = -1;
  const pow2048 = "pow^1024";
  const i2048 = math.eval(pow2048, { pow });
  expect(-i2048).toBe(-1);
});
it(`Euler's Formular of Polyphedra`, () => {
  const F = 12 + 20;
  const E = (12 * 5 + 20 * 6) / 2;
  const V = (12 * 5 + 20 * 6) / 3;
  expect(F + V - E).toBe(2);
});
it(`Normal Distribution`, () => {
  const arr = [580, 600, 680, 620];
  const mean = arr.reduce((acc, item) => acc + item) / arr.length;
  expect(mean).toBe(620);
  const deviation = math.sqrt(
    (1 / arr.length) * arr.reduce((acc, item) => (item - mean) ** 2 + acc, 0)
  );
  const standardDeviation = +deviation.toFixed(1);
  expect(standardDeviation).toBe(37.4);
  const expectation = 690;
  const nDeviation = (expectation - mean) / standardDeviation;
  const currentStandardDeviation = +nDeviation.toFixed(2);
  expect(currentStandardDeviation).toBe(1.87);
  const tableProbability = {
    "1.87": 0.015
  };
  expect(tableProbability[currentStandardDeviation + ""] * 100 + "%").toBe(
    "1.5%"
  );
});
