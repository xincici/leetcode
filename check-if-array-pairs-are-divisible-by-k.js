/*
 * @Author      : linye
 * @Created At  : 2022-08-11 17:08:31
 * @Description : 1497
 * https://leetcode.cn/problems/check-if-array-pairs-are-divisible-by-k/
 */

require('./log');

/**
 * @param {number[]} arr
 * @param {number} k
 * @return {boolean}
 */
var canArrange = function(arr, k) {
  if (k === 1) return true;
  arr = arr
    .map(v => {
      v = v % k;
      return v < 0 ? k + v : v;
    })
    .filter(Boolean);
  if (arr.length % 2 !== 0) return false;
  arr.sort((a, b) => a - b);
  let m = 0, n = arr.length - 1;
  while (m < n) {
    const sum = arr[m] + arr[n];
    if (sum !== k) return false;
    m++;
    n--;
  }
  return true;
};

// log([1,2,3,4,5,10,6,7,8,9], 5, canArrange);
// log([1,2,3,4,5,6], 7, canArrange);
log([-4,-7,5,2,9,1,10,4,-8,-3], 3, canArrange);
