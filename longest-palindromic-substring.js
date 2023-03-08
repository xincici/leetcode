/*
 * @Author      : linye
 * @Created At  : 2022-10-25 17:04:29
 * @Description : 5
 * https://leetcode.cn/problems/longest-palindromic-substring/
 */

require('./log');

/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
  if (s.length === 1) return s;
  const len = s.length;
  let start, maxLen = 0;
  for (let i = 0; i < len - 1; i++) {
    check(i, i);
    check(i, i + 1);
  }
  function check(i, j) {
    if (s[i] !== s[j]) return;
    while (true) {
      if (i === 0 || j === len - 1) break;
      if (s[i - 1] !== s[j + 1]) break;
      i--;
      j++;
    }
    if (j - i + 1 > maxLen) {
      start = i;
      maxLen = j - i + 1;
    }
  }
  return s.substr(start, maxLen);
};

log('ababc', longestPalindrome);
log('aaa', longestPalindrome);
log('abc', longestPalindrome);
