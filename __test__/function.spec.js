const math = require("mathjs");
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
it(`logarithm comparison`, () => {
  expect(math.log(1 / 2, 3)).toBeLessThan(0);
  //a=2^0.5, b=lg(PI,3), c=lg(2,sin(2/5*PI))
  expect(math.pi).toBe(3.141592653589793);
  const a = math.pow(2, 0.5),
    b = math.log(3, math.pi),
    c = math.log(2, math.sin((2 / 5) * math.pi));
  expect(c)
    .toBeLessThan(0)
    .toBeLessThan(a)
    .toBeLessThan(b);
});
