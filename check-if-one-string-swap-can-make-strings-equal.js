/*
 * @Author      : linye
 * @Created At  : 2022-10-11 10:40:34
 * @Description : 1790
 * https://leetcode.cn/problems/check-if-one-string-swap-can-make-strings-equal/
 */

require('./log');

/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var areAlmostEqual = function(s1, s2) {
  if (s1 === s2) return true;
  let l1, l2, flag = 0;
  for (let i = 0; i < s1.length; i++) {
    if (s1[i] === s2[i]) continue;
    if (flag >= 2) return false;
    if (flag === 0) {
      l1 = s1[i];
      l2 = s2[i];
      flag++;
      continue;
    }
    if (l1 !== s2[i] || l2 !== s1[i]) return false;
    flag++;
  }
  return flag === 2;
};

log('abcd', 'dbca', areAlmostEqual)
log('abcdef', 'dbcaef', areAlmostEqual)
