/*
 * @Author      : linye
 * @Created At  : 2022-10-10 19:44:54
 * @Description : 1015
 * https://leetcode.cn/problems/smallest-integer-divisible-by-k/
 */

require('./log');

/**
 * @param {number} k
 * @return {number}
 */
var smallestRepunitDivByK = function(k) {
  if (k === 1) return 1;
  if (k % 2 === 0 || k % 5 === 0) return -1;
  let cnt = 2, x = 11;
  while (x % k !== 0) {
    x = x % k;
    x = x * 10 + 1;
    cnt++;
  }
  return cnt;
};
