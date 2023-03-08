/*
 * @Author      : linye
 * @Created At  : 2022-08-29 20:25:49
 * @Description : 2375
 * https://leetcode.cn/problems/construct-smallest-number-from-di-string/
 */

require('./log');

/**
 * @param {string} pattern
 * @return {string}
 */
var smallestNumber = function(pattern) {
  let len = pattern.length;
  let li = (pattern.match(/I/g) || []).length;
  let ld = len - li;
  if (li === 0) return Array.from({ length: len + 1 }, () => len-- + 1).join('');
  if (ld === 0) return Array.from({ length: len + 1 }, () => ++ld).join('');
  let tmp = [], idx = 0;
  for (let i = 0; i < len; i++) {
    if (!tmp[idx]) {
      tmp[idx] = pattern[i];
      continue;
    }
    if (tmp[idx][0] === pattern[i]) {
      tmp[idx] += pattern[i];
    } else {
      idx++;
      tmp[idx] = pattern[i];
    }
  }
  let res = '';
  let str = '123456789'.substr(0, len + 1);
  for (let i = 0; i < tmp.length; i++) {
    if (tmp[i][0] === 'I') {
      Array.from(tmp[i], () => {
        res += str[0];
        str = str.slice(1);
      });
    } else {
      let tl = tmp[i].length;
      let mid = +str[0] + tl;
      Array.from({ length: tl }, () => {
        str = str.replace(mid, '');
        res += mid--;
      });
    }
  }
  return res + str;
};

const pt1 = 'DDDDDD';
const pt2 = 'IIIIIII';
const pt = 'DDDIIDID'

log(pt1, smallestNumber);
log(pt2, smallestNumber);
log(pt, smallestNumber);
