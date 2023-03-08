/*
 * @Author      : linye
 * @Created At  : 2022-10-31 10:19:14
 * @Description : 481
 * https://leetcode.cn/problems/magical-string/
 */

require('./log');

/**
 * @param {number} n
 * @return {number}
 */
var magicalString = function(n) {
  if (n <= 3) return 1;
  let res = 1;
  let s = '122';
  let i = 2;
  while (s.length < n) {
    if (s[i] === '1') {
      if (s.at(-1) === '1') s += '2';
      else {
        s += '1';
        res++;
      }
    } else {
      if (s.at(-1) === '1') s += '22';
      else {
        s += '11';
        res += 2;
      }
    }
    i++;
  }
  if (s.length > n && s.at(-1) === '1') return res - 1;
  return res;
};

log(4, magicalString)
log(20, magicalString)
