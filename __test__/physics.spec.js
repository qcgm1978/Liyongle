it(`elastic collision`, () => {
  // exchange velocity, e.g. Newton's cradle
  let v = 1;
  const m1 = v,
    m2 = -v;
  const m3 = -v,
    m4 = v;
  expect(m1 + m2)
    .toBe(m3 + m4)
    .toBe(0);
  // passing shot
  let bigM = v,
    smallM = v;
  bigM = -v;
  smallM = 2 * v - bigM;
  expect(smallM)
    .toBe(3 * v)
    .toBe(3);
  const distance = 1;
  const reboundDistance = distance * smallM ** 2;
  expect(reboundDistance).toBe(9);
});
