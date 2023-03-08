/*
 * @Author      : linye
 * @Created At  : 2022-09-13 10:41:41
 * @Description : 670
 * https://leetcode.cn/problems/maximum-swap/
 */

require('./log');

/**
 * @param {number} num
 * @return {number}
 */
var swap = (arr, i, j) => {
  let tmp = arr[i];
  arr[i] = arr[j];
  arr[j] = tmp;
  return arr;
};
var maximumSwap = function(num) {
  num = String(num).split('').map(v => +v);
  let flag = false;
  function inner(arr) {
    let max = arr[0], mi = 0;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] >= max) {
        max = arr[i];
        mi = i;
      }
    }
    if (mi === 0 || max === arr[0]) return arr[0];
    flag = true;
    return swap(arr, 0, mi);
  }
  let res = [], idx = 0;
  while (idx < num.length) {
    res = res.concat(inner(num.slice(idx)));
    if (flag) break;
    idx++;
  }
  return +res.join('');
};

log(7765, maximumSwap);
log(1998, maximumSwap);
