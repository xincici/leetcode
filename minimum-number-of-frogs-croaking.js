/*
 * @Author      : linye
 * @Created At  : 2022-08-01 14:16:05
 * @Description : 1419
 * https://leetcode.cn/problems/minimum-number-of-frogs-croaking/
 */

require('./log');

/**
 * @param {string} croakOfFrogs
 * @return {number}
 */

var replace = function(str, n) {
  return str.substr(0, n) + str.substr(n + 1);
};

var minNumberOfFrogs = function(croakOfFrogs) {
  if (croakOfFrogs.length % 5 !== 0) return -1;
  let res = 0;
  const str = 'croak';
  let flag = false;
  function inner() {
    let start = 0;
    let i = 0;
    while (true) {
      const idx = croakOfFrogs.indexOf(str[i], start);
      if (idx < 0) break;
      flag = true;
      croakOfFrogs = replace(croakOfFrogs, idx);
      i = (i + 1) % 5;
      start = idx;
    }
  }
  while (true) {
    if (croakOfFrogs.length === 0) break;
    res++;
    flag = false;
    inner();
    if (!flag) break;
  }
  if (croakOfFrogs.length !== 0) return -1;
  return res;
};

log('crccoakroakroak', minNumberOfFrogs);
log('crcoakrork', minNumberOfFrogs);

