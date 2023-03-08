/*
 * @Author      : linye
 * @Created At  : 2022-07-26 15:00:10
 * @Description : 1758
 * https://leetcode.cn/problems/minimum-changes-to-make-alternating-binary-string/
 */

require('./log');

/**
 * @param {string} s
 * @return {number}
 */
var minOperations = function(s) {
  let a = b = 0;
  for (let i = 0; i < s.length; i++) {
    if (i % 2 === 0) {
      if (s[i] === '0') a++;
      else b++;
    } else {
      if (s[i] === '1') a++;
      else b++;
    }
  }
  return Math.min(a, b);
};

const s0 = "111111";
const s1 = "10101";
log(s0, minOperations);
log(s1, minOperations);
