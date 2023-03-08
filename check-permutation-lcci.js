/*
 * @Author      : linye
 * @Created At  : 2022-09-27 10:17:36
 * @Description : 01.02
 * https://leetcode.cn/problems/check-permutation-lcci/
 */

require('./log');

/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var CheckPermutation = function(s1, s2) {
  if (s1.length !== s2.length) return false;
  const map = new Map();
  for (let i = 0; i < s1.length; i++) {
    map.set(s1[i], (map.get(s1[i]) || 0) + 1);
  }
  for (let i = 0; i < s2.length; i++) {
    if (!map.get(s2[i])) return false;
    map.set(s2[i], map.get(s2[i]) - 1);
  }
  return true;
};
