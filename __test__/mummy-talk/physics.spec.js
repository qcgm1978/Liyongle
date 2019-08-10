var algebra = require("algebra.js");
it(`Algebra`, () => {
  var expr = new algebra.Expression("x");
  expr = expr.subtract(3);
  expr = expr.add("x");

  expect(expr.toString()).toEqual("2x - 3");
});
