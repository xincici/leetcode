/*
 * @Author      : linye
 * @Created At  : 2022-08-11 10:34:09
 * @Description : 1417
 * https://leetcode.cn/problems/reformat-the-string/
 */

require('./log');

/**
 * @param {string} s
 * @return {string}
 */
var reformat = function(s) {
  let s1 = s.replace(/[0-9]/g, '');
  let s2 = s.replace(/[a-z]/g, '');
  if (Math.abs(s1.length - s2.length) > 1) return '';
  if (s1.length < s2.length) {
    [s1, s2] = [s2, s1];
  }
  let idx = 0;
  let res = '';
  while (idx < s1.length) {
    res += (s1[idx] + (s2[idx] || ''));
    idx++;
  }
  return res;
};

log('1234abc', reformat);
log('1234abcd', reformat);
log('12345abc', reformat);
