/*
 * @Author      : linye
 * @Created At  : 2022-10-28 10:20:39
 * @Description : 907
 * https://leetcode.cn/problems/sum-of-subarray-minimums/
 */

require('./log');

/**
 * @param {number[]} arr
 * @return {number}
 */
var sumSubarrayMins = function(arr) {
  const MOD = 1e9 + 7;
  const len = arr.length;
  if (len === 1) return arr[0];
  const stack = [];
  let tmp = len;
  const l2r = Array.from(arr, () => tmp--);
  const r2l = Array.from(arr, () => ++tmp);
  for (let i = 0; i < len; i++) {
    while (stack.length && arr[i] <= arr[stack.at(-1)]) {
      const idx = stack.pop();
      l2r[idx] = i - idx;
    }
    stack.push(i);
  }
  stack.length = 0;
  for (let i = len - 1; i >= 0; i--) {
    while (stack.length && arr[i] < arr[stack.at(-1)]) {
      const idx = stack.pop();
      r2l[idx] = idx - i;
    }
    stack.push(i);
  }
  let res = 0;
  for (let i = 0; i < len; i++) {
    res = (res + (l2r[i] * r2l[i] * arr[i]) % MOD) % MOD;
  }
  return res;
};

log([11,81,94,43,3], sumSubarrayMins)
log([71,55,82,55], sumSubarrayMins)
