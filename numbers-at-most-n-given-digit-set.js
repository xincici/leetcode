/*
 * @Author      : linye
 * @Created At  : 2022-10-18 10:24:08
 * @Description : 902
 * https://leetcode.cn/problems/numbers-at-most-n-given-digit-set/
 */

require('./log');

/**
 * @param {string[]} digits
 * @param {number} n
 * @return {number}
 */
var atMostNGivenDigitSet = function(digits, n) {
  const len = digits.length;
  const nl = String(n).length;
  if (nl === 1) return digits.filter(v => v <= n).length;
  let res = 0;
  for (let i = 1; i < nl; i++) {
    res += Math.pow(len, i);
  }
  const narr = String(n).split('');
  while (narr.length) {
    const d = narr.shift();
    let idx = 0;
    while (digits[idx] <= d) idx++;
    if (idx <= 0) return res;
    if (!digits.includes(d)) {
      res += idx * Math.pow(len, narr.length);
      return res;
    }
    res += (idx - 1) * Math.pow(len, narr.length);
  }
  return res + 1;
};

const d1 = ["3","4","5","6"]
const d2 = ["1","4","9"];

log(d1, 64, atMostNGivenDigitSet)
log(d2, 1e9, atMostNGivenDigitSet)
