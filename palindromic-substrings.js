/*
 * @Author      : linye
 * @Created At  : 2022-07-29 14:00:12
 * @Description : 647
 * https://leetcode.cn/problems/palindromic-substrings/
 */

require('./log');

var isRevert = function(s, start, end) {
  while (true) {
    if (start >= end) return true;
    if (s[start] !== s[end]) return false;
    start++;
    end--;
  }
};

/**
 * @param {string} s
 * @return {number}
 */
var countSubstrings = function(s) {
  let res = s.length;
  if (res <= 1) return res;
  for (let i = 1; i < s.length; i++) {
    for (let j = i - 1; j >= 0; j--) {
      if (isRevert(s, j, i)) res++;
    }
  }
  return res;
};

log('aabc', countSubstrings);
log('aaa', countSubstrings);
log('ababa', countSubstrings);
