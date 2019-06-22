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

function getLunarDate({ date, locale = "zh-TW-u-ca-chinese" }) {
  var y = +Intl.DateTimeFormat(locale, {
      year: "numeric"
    })
      .format(date)
      .match(/\d+/)[0],
    m = +Intl.DateTimeFormat(locale, {
      month: "numeric"
    })
      .format(date)
      .match(/\d+/)[0],
    d = +Intl.DateTimeFormat(locale, {
      day: "numeric"
    })
      .format(date)
      .match(/\d+/)[0],
    天干 = ["甲", "乙", "丙", "丁", "戊", "己", "庚", "辛", "壬", "癸"],
    地支 = [
      "子",
      "丑",
      "寅",
      "卯",
      "辰",
      "巳",
      "午",
      "未",
      "申",
      "酉",
      "戌",
      "亥"
    ],
    十 = ["初", "十", "廿", "三"],
    月 = ["", "十"],
    個 = ["一", "二", "三", "四", "五", "六", "七", "八", "九", "十"];

  isL = isLeapMonth();

  y = 天干[(y - 1) % 10] + 地支[(y - 1) % 12];
  m = (月[((m - 1) / 10) | 0] + 個[(m - 1) % 10]).replace(/^一$/, "正");
  d = (十[(d / 10) | 0] + 個[(d - 1) % 10])
    .replace(/^十十$/, "初十")
    .replace(/^廿十$/, "二十");

  return y + "年" + (isL ? "閏" : "") + m + "月" + d;

  function isLeapMonth() {
    var _date = new Date(date);
    _date.setDate(-d);
    //console.log(+Intl.DateTimeFormat("zh-TW-u-ca-chinese",{month:"numeric"}).format(_date).match(/\d+/)[0],m);
    return (
      +Intl.DateTimeFormat("zh-TW-u-ca-chinese", {
        month: "numeric"
      })
        .format(_date)
        .match(/\d+/)[0] === m
    );
  }
}
module.exports = {
  getTotal,
  getPascalTriangle,
  getPascalTriangleGraph,
  getLunarDate
};
