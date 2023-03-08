/*
 * @Author      : linye
 * @Created At  : 2022-09-02 11:36:59
 * @Description : 1663
 * https://leetcode.cn/problems/smallest-string-with-a-given-numeric-value/
 */

require('./log');

/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
var getSmallestString = function(n, k) {
  if (n === 1) return String.fromCharCode(k + 96);
  let left = k - n;
  let t26 = ~~(left / 25);
  let diff = left % 25;
  if (diff === 0) return 'a'.repeat(n - t26) + 'z'.repeat(t26);
  return 'a'.repeat(n - t26 - 1) + String.fromCharCode(diff + 97) + 'z'.repeat(t26);
};

log(6, 27, getSmallestString)
log(5, 73, getSmallestString)
// log(13955, 320384, getSmallestString)
