it(`有命题p、q，如果p推出q且q推出p，则p是q的充分必要条件，简称充要条件。
p推出q，p是q的充分条件，同时q是p的必要条件，此时p是q的子集。`, () => {
  const p = [1, 2, 3],
    q = [1, 2, 3, 4],
    m = 1;
  expect(p.includes(m))
    .toBe(q.includes(m))
    .toBeTruthy();
  p.forEach(element => {
    expect(q).toContain(element);
  });
});
