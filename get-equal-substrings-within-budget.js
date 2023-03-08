/*
 * @Author      : linye
 * @Created At  : 2022-11-17 18:41:01
 * @Description : 1028
 * https://leetcode.cn/problems/get-equal-substrings-within-budget/
 */

require('./log');

/**
 * @param {string} s
 * @param {string} t
 * @param {number} maxCost
 * @return {number}
 */
var equalSubstring = function(s, t, maxCost) {
  const df = [];
  for (let i = 0; i < s.length; i++) {
    df[i] = Math.abs(s.charCodeAt(i) - t.charCodeAt(i));
  }
  let cnt = 0;
  let left = 0, right = 0;
  let res = 0;
  while (right < s.length) {
    cnt += df[right];
    right++;
    if (cnt <= maxCost) res = Math.max(res, right - left);
    while (cnt > maxCost) {
      cnt -= df[left];
      left++;
    }
  }
  return res;
};

const s1 = "aabcfegh", t1 = "abcdfegh";
log(s1, t1, 1, equalSubstring);
