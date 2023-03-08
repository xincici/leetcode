/*
 * @Author      : linye
 * @Created At  : 2022-08-01 10:23:40
 * @Description : 1374
 * https://leetcode.cn/problems/generate-a-string-with-characters-that-have-odd-counts/
 */

/**
 * @param {number} n
 * @return {string}
 */
var generateTheString = function(n) {
  if (n % 2 !== 0) return 'a'.repeat(n);
  return 'a'.repeat(n - 1) + 'b';
};
