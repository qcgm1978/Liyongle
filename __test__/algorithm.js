const getPascalTriangle = n => {
  let arr = [[1]];
  for (let i = 1; i < n; i++) {
    let temp = [],
      prevArr = arr[i - 1];
    temp.push(1);
    const items = prevArr.length - 1;
    if (items > 0) {
      for (let m = 1; m <= items; m++) {
        const numPrev = prevArr[m - 1];
        const numSameIndex = prevArr[m];
        temp.push(numPrev + numSameIndex);
      }
    }
    temp.push(1);
    arr.push(temp);
  }
  return arr;
};
const getPascalTriangleGraph = n => {
  const arr = getPascalTriangle(n);
  let str = "";
  for (let i = 0, iniOffset = n; i < n && iniOffset >= 0; i++, iniOffset--) {
    let pre = "";
    if (iniOffset) {
      pre = "  ".repeat(iniOffset);
    }
    str += pre + arr[i] + "\n";
  }
  return str;
};
const getTotal = ({ n }) => {
  const arr = new Array(3).fill("");
  let str = arr.reduce((acc, item, index) => {
    return `${acc ? acc + " + " : ""}1 / ${index + 1}^${n}`;
  }, "");
  let solution = new Array(8).fill("").reduce((acc, item, index) => {
    const pre = acc ? acc + " + " : "";
    let leftParethese = "",
      rightParethese = "";
    let current = index + 1;
    const log = Math.log2(index);
    if (index > 1 && Number.isInteger(log)) {
      leftParethese = "(";
      current += log;
    }
    if (index === 3) {
      rightParethese = " ) ";
    }
    return `${pre}${leftParethese}1 / ${current}^${n}${rightParethese}`;
  }, "");
  return {
    expression: str + ` + ... + 1 / n^${n}`,
    sum: Infinity,
    solution
  };
};
module.exports = {
  getTotal,
  getPascalTriangle,
  getPascalTriangleGraph
};
