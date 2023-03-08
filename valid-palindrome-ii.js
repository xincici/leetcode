/*
 * @Author      : linye
 * @Created At  : 2022-10-17 14:10:49
 * @Description : 680
 * https://leetcode.cn/problems/valid-palindrome-ii/
 */

require('./log');

/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function(s) {
  function inner(i, j, flag) {
    while (i < j) {
      if (s[i] === s[j]) {
        i++;
        j--;
        continue;
      }
      if (flag) return false;
      return inner(i + 1, j, true) || inner(i, j - 1, true);
    }
    return true;
  }
  return inner(0, s.length - 1, false);
};
