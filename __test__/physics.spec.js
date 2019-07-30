it(` elastic collision`, () => {
  let v = 1;
  const m1 = v,
    m2 = -v;
  const m3 = -v,
    m4 = v;
  expect(m1 + m2)
    .toBe(m3 + m4)
    .toBe(0);
});
