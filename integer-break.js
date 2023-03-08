/*
 * @Author      : linye
 * @Created At  : 2022-08-22 18:29:56
 * @Description : 343
 * https://leetcode.cn/problems/integer-break/
 */

require('./log');

/**
 * @param {number} n
 * @return {number}
 */
var integerBreak = function(n) {
  if (n <= 3) return n - 1;
  const num = ~~(n / 3);
  const diff = n % 3;
  if (diff === 0) return Math.pow(3, num);
  if (diff === 1) return 4 * Math.pow(3, num - 1);
  return Math.pow(3, num) * diff;
};

log(14, integerBreak);
log(25, integerBreak);
