/*
 * @Author      : linye
 * @Created At  : 2022-08-25 18:58:13
 * @Description : 1849
 * https://leetcode.cn/problems/splitting-a-string-into-descending-consecutive-values/
 */

require('./log');

/**
 * @param {string} s
 * @return {boolean}
 */
var splitString = function(s) {
  const len = s.length;
  if (len === 1) return false;
  let res = false;
  function inner(n) {
    let last = +s.substring(0, n);
    let i = n, j = n + 1;
    while (true) {
      const cur = +s.substring(i, j);
      if (last - 1 === cur) {
        if (cur === 0) return res = +s.substring(j) === 0;
        if (j === len) return res = true;
        last--;
        i = j;
        j = i + 1;
      } else if (last > cur) {
        j++;
      } else {
        break;
      }
      if (j > len) break;
    }
  }
  for (let i = 1; i < len; i++) {
    inner(i);
    if (res) break;
  }
  return res;
};

// log('050043', splitString);
// log('9080701', splitString);
// log('10009998', splitString);
// log('10', splitString);
log('200100', splitString);
