/*
 * @Author      : linye
 * @Created At  : 2022-08-29 10:56:48
 * @Description : 767
 * https://leetcode.cn/problems/reorganize-string/
 */

require('./log');

/**
 * @param {string} s
 * @return {string}
 */
var reorganizeString = function(s) {
  let len = s.length;
  const half = len + 1 >> 1;
  const map = {};
  for (let i = 0; i < len; i++) {
    map[s[i]] = (map[s[i]] || 0) + 1;
    if (map[s[i]] > half) return '';
  }
  const keys = Object.keys(map).sort((a, b) => map[b] - map[a]);
  const vals = keys.map(key => map[key]);
  let res = '', i = 0;
  while (len-- > 0) {
    res += keys[i];
    vals[i]--;
    let max;
    for (let j = 0; j < vals.length; j++) {
      if (i === j) continue;
      if (!max) {
        i = j;
        max = vals[j];
        continue;
      }
      if (vals[j] > max) {
        i = j;
        break;
      }
      if (j < vals.length - 1 && vals[j] > vals[j + 1]) break;
    }
  }
  return res;
};

const s1 = 'bcdefaaa';
const s2 = 'aaaaaassssssdddddd';
log(s1, reorganizeString);
log(s2, reorganizeString);
