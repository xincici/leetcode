/*
 * @Author      : linye
 * @Created At  : 2022-08-22 16:31:10
 * @Description : 2042
 * https://leetcode.cn/problems/check-if-numbers-are-ascending-in-a-sentence/
 */

require('./log');

/**
 * @param {string} s
 * @return {boolean}
 */
var areNumbersAscending = function(s) {
  const ds = '123456789';
  let idx = 0;
  let last = -Infinity;
  for (let i = 1; i < s.length; i++) {
    if (i === s.length - 1) {
      if (ds.includes(s[idx])) return last < +s.substring(idx);
      return true;
    }
    if (s[i] !== ' ') continue;
    if (ds.includes(s[idx])) {
      const cur = +s.substring(idx, i);
      if (last >= cur) return false;
      last = cur;
    }
    idx = i + 1;
  }
};

log("1 box has 3 blue 4 red 6 green 12 yellow marbles 13", areNumbersAscending)
